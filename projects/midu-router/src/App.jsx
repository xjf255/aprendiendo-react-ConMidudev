import { HomePage } from "./page/Home"
import { AboutPage } from "./page/About"
import { Router } from "./Router"

function App() {
  const appRouter = [
    {
      path:'/',
      Component : HomePage
    },
    {
      path:'/about',
      Component : AboutPage
    }
  ]
  return (
    <>
      <Router router={appRouter} />
    </>
  )
}

export default App
