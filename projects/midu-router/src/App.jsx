import { Suspense, lazy } from "react"
import { Router } from "./Router"
import SearchPage from "./page/SearchPage"
import { Route } from "./Route"
// import { AboutPage } from "./page/About"

const LazyHomePage = lazy(() => import("./page/Home.jsx"))
const LazyAboutPage = lazy(() => import("./page/About.jsx"))

function App() {
  const appRouter = [
    {
      path: '/search/:query',
      Component: SearchPage
    }
  ]
  return (
    <main>
      <Suspense fallback={null}>
        <Router router={appRouter}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
