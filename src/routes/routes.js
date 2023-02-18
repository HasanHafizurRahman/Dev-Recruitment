import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import Jobs from "../pages/job/Jobs";
import AccountCreator from "../pages/register/AccountCreator";
import Login from "../pages/register/Login";
import Signup from "../pages/register/Register";
import PrivateRoute from "../utils/PrivateRoute";

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
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
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
