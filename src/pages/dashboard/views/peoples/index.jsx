import React from 'react'
import { WhapperPeoplesPage, ContainerProjectsList, ContainerPeoplesPage } from './styles'
import ShearchArea from './components/serach-area'
import Layout from "../../../../layout";
import ProjectsList from './components/projects-list';
import { projetos } from './moch'
import PeoplesTable from './components/peoples-table';

const Pessoas = () => {
    return(
        <Layout
            visibleMenuBar={false}
            visibleSubHeader={false}
        >
            <WhapperPeoplesPage>
                <ContainerProjectsList>
                    <ProjectsList
                        projects={projetos}
                    />
                </ContainerProjectsList>
                <ContainerPeoplesPage>
                    <ShearchArea/>
                    <PeoplesTable
                        peoples={[]}
                    />
                </ContainerPeoplesPage>
            </WhapperPeoplesPage>
        </Layout>
    );
}

export default Pessoas;