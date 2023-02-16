import { RouterProvider } from "react-router-dom";

import routes from "./routes/routes";

function App() {
  console.log(process.env);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
