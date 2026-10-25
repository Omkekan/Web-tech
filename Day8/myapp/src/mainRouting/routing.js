import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from "../component/MyImagesComp";
import MyListClassComp from "../component/MyListClassComp";
import MyCarouselComp from "../component/MyCarouselComp";
import ReactHookComp from "../Hooks/ReactHookComp";
import UseStateHookComp from "../Hooks/UseStateHookComp";
import UseEffectHookComp from "../Hooks/UseEffectHookComp";
import PageNotFoundComp from "../Layout/PageNotFoundComp"
import DashboardComp from "../Layout/DashboardComp"
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductUpdateComp from "../CRUD/ProductUpdateComp";
import ProductDashComp from "../CRUD/ProductDashComp";

const router = createBrowserRouter([
    {
        path: "dashboard", element: <DashboardComp />, children: [
            //1.Default routing
            { path: "", element: <MyCarouselComp /> },
            //2.Naming routing
            { path: "mycarousel", element: <MyCarouselComp /> },
            //3.Parameterized routing
            { path: "myimages/:id", element: <MyImagesComp /> },
            { path: "myimages", element: <MyImagesComp /> },
            { path: "list", element: <MyListClassComp /> },
            //4.Child Routing
            {
                path: "hooks", element: <ReactHookComp />,
                children: [
                    { path: "usestate", element: <UseStateHookComp /> },
                    { path: "useeffect", element: <UseEffectHookComp /> }
                ],
            },
            {path:"productDashboard",element:<ProductDashComp/>},
            {path:"productAdd",element:<ProductAddComp/>},
            {path:"productUpdate",element:<ProductUpdateComp/>}
        ]
    },

    //5.whild card routing
    { path: "*", element: <PageNotFoundComp /> }


]);


export default router;