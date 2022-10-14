import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Landing from "./Landing";
const router = createHashRouter([
    {
        path: "/*",
        element: <Layout/>,
        children: [{
            path: "",
            element: <Landing />
        }]
    }
])

export default router;