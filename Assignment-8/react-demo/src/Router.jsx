import { createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import EventEx from "./pages/EventEx";
import Calc from "./pages/Calc";
import Layout from "./layout/Layout";
import { Children } from "react";
import SMS from "./pages/SMS";

let router = createBrowserRouter([
    // { path: "/", element: <Intro /> },
    // { path: "/event", element: <EventEx /> },
    // { path: "/calc", element: <Calc /> },
    { 
        path: "/", 
        element: <Layout /> ,
        children: [
            { path: "/", element: <Intro /> },
            { path: "/event", element: <EventEx /> },
            { path: "/calc", element: <Calc /> },
            { path: "/sms", element: <SMS /> },
        ]
    }
])


export default router