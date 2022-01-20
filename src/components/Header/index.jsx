import React from 'react'
import { Container, SearchMenu, Search, Settings } from './styles';
import Logo from '../../assides/logo.png';

export default function Header() {
    return (
        <Container>
            <div>
                <img src={Logo} alt="" srcset="" />
            </div>
            <SearchMenu>
                <Search/>
                <input type="text" placeholder='What are you looking for?'/>
            </SearchMenu>
            <div>
                <Settings/>
            </div>
        </Container>
    )
}
