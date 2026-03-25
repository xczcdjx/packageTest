import {createHashRouter} from "react-router";
import SingleInput from "@/views/input/SingleInput";
import CascadeInput from "@/views/input/CascadeInput";
import App from "@/App";
import SimpleForm from "@/views/form/SimpleForm";
import CustomForm from "@/views/form/CustomForm.tsx";
import AllForm from "@/views/form/AllForm.tsx";
import DecorateForm from "@/views/form/DecorateForm.tsx";
import ZealBase from "@/views/zeal/ZealBase.tsx";
import ZealComponents from "@/views/zeal/ZealComponents.tsx";

const routes = createHashRouter([
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
            {
                path: "allForm",
                Component: AllForm,
            },
            {
                path: "decorateForm",
                Component: DecorateForm,
            },
        ]
    },
    {
        path: "/zeal",
        Component: App,
        children: [
            {index: true, Component: ZealBase},
            {
                path: "componentsZeal",
                Component: ZealComponents,
            },
        ]
    },
]);
export default routes;