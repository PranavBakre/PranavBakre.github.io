import router from "pages";
import React from "react";
import { RouterProvider } from "react-router-dom";
export default function App (props) {
    return (
        <RouterProvider router={router} />
    )
}