import React from "react";
import { ContainerHeader, Logo, NavHeader, UserArea, Links } from './styles'
import logo from '../../../assets/logo.png'
import NavLink from "../nav-link";
import Avatar from "../../../components/avatar";

const Header = () => {
    return(
        <ContainerHeader>
            <Logo>
                <img src={logo} alt="logo da empresa Jura? Board"/>
                <h4> Jura Board </h4>
            </Logo>
            <NavHeader>
                <Links>
                    <NavLink
                        href="dashboard"
                    >
                        Projetos
                    </NavLink>
                    <NavLink>
                        Pessoas
                    </NavLink>
                </Links>
                <UserArea>
                    <Avatar
                        name="UG"
                        size='large'
                    />
                </UserArea>
            </NavHeader>
        </ContainerHeader>
    )
}

export default Header