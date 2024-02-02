import './products.css'

export function Products({ products }) {
    return (
        <section>
            <ul>
                {
                    products.slice(0,10).map(product => {
                        return(
                            <li key={product.id}>
                                <img src={product.thumbnail} alt="" />
                                <div className="products__info">
                                    <strong>{product.title}</strong>
                                    <span>$.{product.price}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}