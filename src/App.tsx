import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/search/:query",
    element: <Search />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

const App = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App;