import { lazy } from 'react'
import { WhapperHeaderTask, LinkTitle } from './styles'
import { AiFillFire } from 'react-icons/ai'
import React from 'react'

const HeaderTask = ({color, title, number}) => {

    return(
        <WhapperHeaderTask>
            <AiFillFire/> <LinkTitle href=''>{number} - {title}</LinkTitle> 
        </WhapperHeaderTask>
    )
}

export default HeaderTask