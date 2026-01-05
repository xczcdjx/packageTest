import {createBrowserRouter} from "react-router";
import SingleInput from "@/views/input/SingleInput";
import CascadeInput from "@/views/input/CascadeInput";
import App from "@/App";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {index: true, Component: SingleInput},
            {
                path: "input-cascade",
                Component: CascadeInput,
            },
        ]
    },
]);
export default routes;