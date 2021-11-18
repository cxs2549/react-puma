import Header from "./components/Header/Header"
import { Fragment } from "react"
import Cart from './views/Cart/Cart'
import { useRoutes } from "react-router"
import Home from "./views/Home/Home"

const routes = [
  {path: '/', element: <Home />},
  {path: '/cart', element: <Cart />},
]

const App = () => {
  const element = useRoutes(routes)
  return (
    <Fragment>
      <Header />
      <main>
        {element}
      </main>
    </Fragment>
  )
}

export default App
