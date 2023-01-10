import React from "react"
import { ContainerMenuBar, OrganizationWhapper, LogoProject, InformationProject, Project, Organization } from "./styles"
import flow from '../../../assets/flow-flow-logo.png'
import ListItemButton from "../button-list-menu-bar"


const MenuBar = ({organization = true, buttons = []}) => {
    const Projeto = {
        name: "Meu Flow Interativo",
        logo: flow,
        organization: "Flow PodCast"
    }

    return(
        <ContainerMenuBar>
            {
                organization && (
                    <OrganizationWhapper>
                        <LogoProject>
                            <img src={Projeto.logo} alt="" srcset="" width="35px"/>
                        </LogoProject>
                        <InformationProject>
                            <Project>
                                <h5>{Projeto.name}</h5>
                            </Project>
                            <Organization>
                                <h6>{Projeto.organization}</h6>
                            </Organization>
                        </InformationProject>
                    </OrganizationWhapper>
                )
            }
            {
                buttons.map((button, index) => <ListItemButton key={index} {...button}/>)
            }
        </ContainerMenuBar>
    )
}

export default MenuBar