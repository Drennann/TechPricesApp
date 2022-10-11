import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main(){

    const [item, setItem] = useState("");
    const navigate = useNavigate();
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate("/items/"+item)
    }

    const onChangeHandler = e => {
        setItem(e.target.value);
    }

    return(
        <div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <h1 className="title">Cheap Items App</h1>
                <input type="text" className="itemInput" placeholder="Buscar Producto" onChange={onChangeHandler}></input>
            </form>
        </div>
    )
}