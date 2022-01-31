import React from 'react';
import { Container, Body, Aside } from './styles';
import NewTask from '../NewTask';
import Content from '../Content';
import Header from '../Header';
import CardTempo from '../CardTempo';
import CreatedTasks from '../Tasks/CreatedTasks';
import CheckedTasks from '../Tasks/CheckedTask';
import FinishTask from '../Tasks/FinishTask';

const Layout = () => {
    return (
        <Container>
            <header>
                    <NewTask/>
                    <CardTempo/>
            </header>
            <Body>
                <Aside>
                    <Header/>
                </Aside>
                <Content>
                    <CreatedTasks/>
                    <CheckedTasks/>
                    <FinishTask/>
                </Content>
            </Body>
        </Container>
    );
}
export default Layout;
