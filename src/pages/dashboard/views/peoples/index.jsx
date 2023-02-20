import React, { useEffect, useState } from 'react'
import { WhapperPeoplesPage, ContainerProjectsList, ContainerPeoplesPage } from './styles'
import ShearchArea from './components/serach-area'
import Layout from "../../../../layout";
import ProjectsList from './components/projects-list';
import { projetos } from './moch'
import PeoplesTable from './components/peoples-table';

const Pessoas = () => {
    const [peoples, setPeoples] = useState([]);

    return(
        <Layout
            visibleMenuBar={false}
            visibleSubHeader={false}
        >
            <WhapperPeoplesPage>
                <ContainerProjectsList>
                    <ProjectsList
                        setPeoples={setPeoples}
                        projects={projetos}
                    />
                </ContainerProjectsList>
                <ContainerPeoplesPage>
                    <ShearchArea/>
                    <PeoplesTable
                        peoples={peoples}
                    />
                </ContainerPeoplesPage>
            </WhapperPeoplesPage>
        </Layout>
    );
}

export default Pessoas;