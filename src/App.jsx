import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './App.css'
import Menu from './Menu'
import Game from './Game'
import {Helmet} from "react-helmet";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu/>
  },
  {
    path: "/game",
    element: <Game/>
  }
])
function App() {


  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Memory Game</title>    
      </Helmet>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
