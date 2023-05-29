export default interface IRoute {
    path: string; // path to the route
    name: string; // name of the route
    auth: boolean; // accessible only to authenticated users?
    component: any; // the component to render
    props?: any; // any props to pass to the component
}
