import { createContext, useState } from "react";

//este se consume
export const FiltersContext = createContext()

//este nos da el acceso
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}