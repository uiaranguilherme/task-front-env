import Layout from "../../../../layout"
import { BsFolderPlus } from "react-icons/bs"
import ModalCreateProject from "./modal-create-project"
import { useState } from "react"


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


    return(
        <Layout
            visibleMenuBar={false}
            buttonsSubHeader={buttonsSubHeader}
        >
            <ModalCreateProject
                open={isOpen}
                onChangeModal={onChangeModal}
            />
        </Layout>
    )
}
