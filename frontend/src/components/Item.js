import {motion} from "framer-motion";

export default function Item ({data}){

    const onClickHandler = () => {
        window.location.href = data.link
    }

    return(
        <motion.div onClick={onClickHandler} className="DetailsCard" initial={{x: -20, opacity:0.1}} whileInView={{x:0, opacity:1}}>
            <div>{data.tienda}</div>
            <div>{data.nombre}</div>
            <img alt="data" src={data.img? data.img : "https://ddragon.leagueoflegends.com/cdn/12.19.1/img/champion/Zed.png"} width={120} height={120}></img>
            <div>
                ${data.precio}
            </div>
        </motion.div>
    )
}