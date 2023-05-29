import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './config/routes';
export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => {
                    return <Route key={index} path={route.path} element={<route.component {...route.props} />} />;
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
