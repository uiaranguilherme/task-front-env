import { lazy } from 'react'
import { WhapperHeaderTask, LinkTitle } from './styles'
import { AiFillFire } from 'react-icons/ai'
const HeaderTask = ({color, title}) => {

    return(
        <WhapperHeaderTask>
            <AiFillFire/> <LinkTitle href=''>{title}</LinkTitle> 
        </WhapperHeaderTask>
    )
}

export default HeaderTask