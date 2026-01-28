import {createBrowserRouter} from "react-router";
import SingleInput from "@/views/input/SingleInput";
import CascadeInput from "@/views/input/CascadeInput";
import App from "@/App";
import SimpleForm from "@/views/form/SimpleForm";
import CustomForm from "@/views/form/CustomForm.tsx";

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
    {
        path: "/form",
        Component: App,
        children: [
            {index: true, Component: SimpleForm},
            {
                path: "customForm",
                Component: CustomForm,
            },
        ]
    },
]);
export default routes;