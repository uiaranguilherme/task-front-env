import { useState } from 'react'
import Avatar from '../../../../../../../../components/avatar'
import Typography from '../../../../../../../../components/typograpfy'
import { WhapperReponsabilyUser, Container, Line } from './styles'
import React from 'react'

const dataEmils = [
    {
        name: 'CG',
        email: 'abidoral@hotmail.com',
    },
    {
        name: 'BG',
        email: 'abk_333@hotmail.com'
    },
    {
        name: 'AB',
        email: 'abner_bim@hotmail.com'
    },
    {
        name: 'AC',
        email: 'acacio_divix@hotmail.com'
    }
]

const User = ({name, email, ...otherProps}) => {
    return(
        <Line {...otherProps}>
            <Avatar
                name={name}
                color='red'
            />
            <Typography 
                style={{padding: '0 10px', 'white-space': 'nowrap', 'overflow': 'hidden', 'text-overflow': 'ellipsis'}} 
                component='p'
            >
                {email}
            </Typography>
        </Line>
    )
}

const Responsable = () => {
    const [open, setOpen] = useState(false);

    return(
        <WhapperReponsabilyUser>
            <Container>
                <User
                    onClick={() => setOpen(!open)}
                    name='UG'
                    email='uiaran@hotmail.com'
                />
                {
                    open && dataEmils.map((user) => <User {...user}/>)
                }
            </Container>
        </WhapperReponsabilyUser>
    )
}

export default Responsable