import POIEditor from "./pages/POIEditor";
import POIEdit from "./pages/POIEdit";
import POIList from "./pages/POIList";

const routes = [
  {
    path: "/",
    exactPath: true,
    component: POIEditor,
  },
  {
    path: "/poi/list",
    component: POIList,
  },
  {
    path: "/poi/edit/:objectId",
    component: POIEdit,
  },
];

export default routes;
