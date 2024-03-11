import { describe, it, expect, beforeEach, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Router } from "../Router";
import { Route } from "../Route";
import { getCurrentPath } from "../utils";
import { Link } from "../Link";

//instalar happy-dom y @testing-library/react, happy-dom sirve para simular que tenemos un navegador

vi.mock('../utils', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    it('should render without problems', () => {
        render(<Router router={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render 404 if not routes match', () => {
        render(<Router router={[]} defaultComponent={() => <h1>404</h1>} />)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first router that matches', () => {
        getCurrentPath.mockReturnValue('/about')
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ]
        render(<Router router={routes} />)
        expect(screen.getByText('About')).toBeTruthy()
    })

    it('should navigate using Links', async () => {
        getCurrentPath.mockReturnValueOnce('/')

        render(
            <Router>
                <Route
                    path='/' Component={() => {
                        return (
                            <>
                                <h1>Home</h1>
                                <Link to='/about'>Go to About</Link>
                            </>
                        )
                    }}
                />
                <Route path='/about' Component={() => <h1>About</h1>} />
            </Router>
        )

        const anchor = screen.getByText(/Go to About/)
        fireEvent.click(anchor)

        const aboutTitle = await screen.findByText('About')

        expect(aboutTitle).toBeTruthy()
    })
})