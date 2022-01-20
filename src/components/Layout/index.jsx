import React from 'react';
import { Container, Body, Aside } from './styles';
import NewTask from '../NewTask';
import Content from '../Content';
import Header from '../Header';

const Layout = () => {
    return (
        <Container>
            <header>
                <Header/>
            </header>
            <Body>
                <Aside>
                    <NewTask/>
                </Aside>
                <Content/>
            </Body>
        </Container>
    );
}
export default Layout;
