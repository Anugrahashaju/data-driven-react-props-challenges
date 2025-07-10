export function ProductList({data}){
    return(
        <>
        <h3>{data.name}</h3>
        <p>${data.price}</p>
        {data.inStock ? "In Stock" : "Out of Stock"}
        </>
        
    )
}