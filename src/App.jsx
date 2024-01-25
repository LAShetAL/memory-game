import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './App.css'
import Menu from './Menu'
import Game from './Game'



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
      <RouterProvider router={router}/>
    </>
  )
}

export default App
