import IRoute from "../interfaces/route";
import BlogPage from "../pages/Blog";
import EditPage from "../pages/Edit";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";

const authRoutes: IRoute[] = [
    {
        path: "/login",
        name: "Login",
        auth: false,
        component: LoginPage
    },
    {
        path: "/register",
        name: "Register",
        auth: false,
        component: LoginPage
    }
];
const blogRoutes: IRoute[] = [
    {
        path: "/edit",
        name: "Edit",
        auth: true,
        component: EditPage
    },
    {
        path: "/edit/:blogID",
        name: "Edit",
        auth: true,
        component: EditPage
    },
    {
        path: "/blogs/:blogID",
        name: "Blog",
        auth: false,
        component: BlogPage
    }
];
const mainRoutes: IRoute[] = [
    {
        path: "/",
        name: "Home",
        auth: false,
        component: HomePage
    }
];
const routes: IRoute[] = [...authRoutes, ...blogRoutes, ...mainRoutes];

export default routes;
