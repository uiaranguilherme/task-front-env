import React, { useState } from 'react'
import { WhapperPeoplesPage, ContainerProjectsList, ContainerPeoplesPage } from './styles'
import ModalNewPeople from './components/add-new-people-modal';
import ShearchArea from './components/serach-area'
import Layout from "../../../../layout";
import ProjectsList from './components/projects-list';
import { projetos } from './moch'
import PeoplesTable from './components/peoples-table';

const Pessoas = () => {
    const [peoples, setPeoples] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

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
                {/* MODAL */}
                <ModalNewPeople
                    open={isOpen}
                />
            </WhapperPeoplesPage>
        </Layout>
    );
}

export default Pessoas;