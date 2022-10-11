import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ListItems from "../components/ListItems";
import { motion } from "framer-motion";

export default function ItemsFounded() {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onClickHandler = () => {
    navigate("/");
  };

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/items/" + id);
      const result = await response.json();
      const tmp = result.data[0].value;
      const finalData = [
        ...tmp.sort((a, b) => Number(a.precio) - Number(b.precio)),
      ];
      setData(finalData);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="itemsFoundedContainer">
      <h1 className="CheapApp" onClick={onClickHandler}>
        Cheap Items App
      </h1>
      {!loading ? (
        <ListItems data={data} />
      ) : (
        <motion.div
          className="Loader"
          animate={{
            borderRadius: [0, 13, 13, 0],
            height: [50, 25, 25, 50],
            width: [50, 25, 25, 50],
            rotate:[0, 180,180,360],
            transition:{
                duration:2,
                repeat: Infinity
            }
          }}
          whileHover={{
            scale: 2
          }}
        ></motion.div>
      )}
    </div>
  );
}
