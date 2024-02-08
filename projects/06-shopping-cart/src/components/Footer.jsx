import './footer.css'
import { IS_DEVELOPMENT } from '../config'
import { useFilters } from '../hooks/useFilters'

export function Footer() {
    const {filters} = useFilters()    
    return (
        <footer className="footer">
            {
                IS_DEVELOPMENT
                    ? JSON.stringify(filters, {}, '')
                    : <>
                        <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
                        <h5>Shopping Cart con useContext & useReducer</h5>

                    </>
            }
        </footer>
    )
}