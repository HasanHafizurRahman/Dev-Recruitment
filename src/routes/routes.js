import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Jobs from "../pages/job/Jobs";
import Login from "../pages/register/Login";
import Signup from "../pages/register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    // children: [
    //   {
    //     path: "add-job",
    //     element: <AddJob />,
    //   },
    //   {
    //     path: "employer",
    //     element: <EmployerDashboard />,
    //   },
    //   {
    //     path: "candidate",
    //     element: <CandidateDashboard />,
    //   },
    // ],
  },
]);
export default routes;
