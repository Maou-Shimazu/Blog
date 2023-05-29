import React from "react";
import { Container } from "reactstrap";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    return (
        <Container fluid className="p-0">
            <Navigation />
            <Header title="Bored? Have a read." headline="Rants of a grant." />
            <Container className="mt-5">Blog stuff here ...</Container>
        </Container>
    );
};
export default HomePage;
