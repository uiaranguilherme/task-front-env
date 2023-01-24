import React from 'react';
import { Container, WhapperPage, PageArea } from './styles';
import Header from './components/header';
import SubHeader from './components/sub-header';
import { BsFolderPlus } from '../styles/icons';
import MenuBar from './components/menu-bar';
import { BsKanban, BsListTask } from "../styles/icons"

const buttonsSubHeader = [
    {
        Icon: BsFolderPlus,
        title: "Novo Projeto"
    }
]

const Layout = ({children, visibleMenuBar = true, visibleSubHeader = true}) => {
    return (
        <Container>
            <Header/>
            <WhapperPage>
                {visibleMenuBar && 
                    <MenuBar
                        buttons={[
                            {   Icon: BsKanban, title: 'Kanban Board'   },
                            {   Icon: BsListTask, title: 'Tasks Board'  }
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
