import './header.css'
import { Filters } from './Filters'

export function Header() {
    return (
        <header className='header'>
            <h1>Shopping cart</h1>
            <Filters />
        </header>
    )
}