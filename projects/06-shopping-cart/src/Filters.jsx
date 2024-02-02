import { useState } from "react"

export function Filters() {
    const [minPrice, setMinPrice] = useState(0)

    const handleChange = (event) => {
        setMinPrice(event.target.value)
    }

    const handlefilter = (event) => {
        changeCategory(event.target.value)
    }

    return (
        <section className='filters'>
            <div className="filter">
                <label htmlFor="price-range">Price:</label>
                <input type="range" min='0' max='1000' id="price-range" onChange={handleChange} />
                <span>${minPrice}</span>
            </div>
            <div className="filter">
                <label htmlFor="category">Category:</label>
                <select id="category" onChange={handlefilter}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}