import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";

const publicRoutes = [
    {path: "/", element: Home},
    {path: "/destination", element: Destination},
    {path: "/crew", element: Crew},
    {path: "/technology", element: Technology},
]
export {publicRoutes}