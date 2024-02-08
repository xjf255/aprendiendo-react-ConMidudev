import { useId } from "react"
import { useFilters } from "../hooks/useFilters"

export function Filters() {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div className="filter">
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input type="range" min='0' max='1000' id={minPriceFilterId} value={filters.minPrice} onChange={handleChangeMinPrice}/>
                <span>${filters.minPrice}</span>
            </div>

            <div className="filter">
                <label htmlFor={categoryFilterId}>Category:</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}