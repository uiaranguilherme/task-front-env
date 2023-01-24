import React, { useEffect, useState } from "react"
import { WhapperLazyComponent, LoadDiv, Load } from './styles'
import Logo from '../../assets/logo.png'

const LazySuspense = () => {
    const [retisensses, setRetisensses] = useState('');

    useEffect(() => {
        if(retisensses === '....'){
            setRetisensses('')
        }else{
            setTimeout(() => {
                setRetisensses(state => state += '.')
            }, 1000)
        }
    }, [retisensses])

    return(
        <WhapperLazyComponent>
            <LoadDiv>
                <Load/>
            </LoadDiv>
            <img src={Logo} alt="" srcset="" />
            <h1>Jura Board {retisensses}</h1>
        </WhapperLazyComponent>
    )
}

export default LazySuspense