import React, { Suspense, useState, lazy } from "react"
import LazySuspense from '../../../../components/lazy-suspense'
import { BsFolderPlus } from "react-icons/bs"
import { WhapperProject } from './styles'
import Layout from "../../../../layout"
import Folder from "./components/folder"
import ModalCreateProject from "./components/modal-create-project"

export const Projetos = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onChangeModal = () => setIsOpen(!isOpen);

    const buttonsSubHeader = [
        {
            Icon: BsFolderPlus,
            title: "Novo Projeto",
            onClick: () => onChangeModal()
        }
    ]
    const folders = [
        {
            name: 'Portal Digital',
            createAt: new Date().toISOString(),
            empresa: 'Tim'
        },
        {
            name: 'Loja Molina',
            createAt: new Date().toISOString(),
            empresa: 'Molina Mudas'
        },
        {
            name: 'Gestor de Vendas - Suporte',
            createAt: new Date().toISOString(),
            empresa: 'Kyrie Noivas'
        }
    ]

    return(
        <Suspense fallback={<LazySuspense/>}>
            <Layout
                visibleMenuBar={false}
                buttonsSubHeader={buttonsSubHeader}
            >
                <WhapperProject>
                    {
                        folders.map((_, index) => <Folder {..._}/>)
                    }
                </WhapperProject>
                <ModalCreateProject
                    open={isOpen}
                    onChangeModal={onChangeModal}
                />
            </Layout>
        </Suspense>
    )
}
