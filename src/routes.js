import POIEditor from "./pages/POIEditor";
import POIEdit from "./pages/POIEdit";
import POIList from "./pages/POIList";

const routes = [
  {
    path: "/poi/list",
    component: POIList,
  },
  {
    path: "/poi/edit/:objectId",
    component: POIEdit,
  },
  {
    path: "/poi/editor",
    component: POIEditor,
  },
];

export default routes;
