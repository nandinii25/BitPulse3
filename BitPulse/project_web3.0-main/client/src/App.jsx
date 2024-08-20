import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Coin from "./pages/Coin.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    

    {
      path: "/coin/:id",
      element: <Coin />
    },
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
};

export default App;
