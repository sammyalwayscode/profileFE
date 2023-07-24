import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import App from "../../App";
import DetailPage from "../Blocks/DetailPage";
import EditProfile from "../Blocks/EditProfile";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },

      {
        path: "/details/:id",
        element: <DetailPage />,
      },
      {
        path: "/editprofile/:id",
        element: <EditProfile />,
      },
    ],
  },
]);
