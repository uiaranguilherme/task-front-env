import React from 'react';
import { Container, WhapperPage, PageArea } from './styles';
import Header from './components/header';
import SubHeader from './components/sub-header';
import MenuBar from './components/menu-bar';
import { BsKanban, BsListTask } from "../styles/icons"

const Layout = ({
    children, 
    visibleMenuBar = true, 
    visibleSubHeader = true,
    buttonsSubHeader = []
}) => {
    return (
        <Container>
            <Header/>
            <WhapperPage>
                {visibleMenuBar && 
                    <MenuBar
                        buttons={[
                            {   Icon: BsKanban, title: 'Kanban Board', href: '/dashboard/board/kanban' },
                            {   Icon: BsListTask, title: 'Tasks Board', href: '/dashboard/board/sprint' }
                        ]}
                    />
                }
                <PageArea>
                    { visibleSubHeader && 
                        <SubHeader
                            buttons={buttonsSubHeader}
                        />
                    }
                    {children}
                </PageArea>
            </WhapperPage>
        </Container>
    );
}
export default Layout;
