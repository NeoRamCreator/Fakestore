
import React, { useEffect, useState } from "react";
import Main from "./pages/Main";



import {
  createHashRouter,
  RouterProvider
  
} from "react-router-dom";

import routes from "./routes";


function App() {

  const [route, setRoute] = useState(null);


  useEffect(() => {
    setRoute(createHashRouter(routes))
  }, [])

  if (route) {
    return <RouterProvider router={route} />

  } else {
    return (<h1>Роут не грузит</h1>);
  }

}

export default App;
