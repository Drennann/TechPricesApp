import Item from "./Item";

export default function ListItems({data}) {

    return(
        <div className="ListItemsContainer">
            {data?.length > 0? data.map((i, index) => <Item data={i} key={index}></Item>) : <h1>No hay items</h1>}
        </div>
    )
}