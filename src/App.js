import Header from "./components/Header/Header"
import { Fragment } from "react"
import Cart from './views/Cart/Cart'
import { useRoutes } from "react-router"
import Home from "./views/Home/Home"
import Footer from "./components/Footer/Footer"

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
      <Footer />
    </Fragment>
  )
}

export default App
