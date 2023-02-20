import React from "react"
import { WhapperPeopleList, People, Info, WhapperTolls } from './styles'
import Avatar from "../../../../../../components/avatar";
import ButtonIcon from "../../../../../../components/button/button-icon";
import { MdDelete } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'

const Tolls = () => {
    return(
        <WhapperTolls>
            <ButtonIcon
                hg='2.5rem'
                wd='2.5rem'
                title="Deletar"
            >
                <BiEdit
                    style={{height: '1.3rem', width: '1.3rem'}}
                />
            </ButtonIcon>
            <ButtonIcon
                hg='2.5rem'
                wd='2.5rem'
                title="Deletar"
            >
                <MdDelete
                    style={{height: '1.3rem', width: '1.3rem'}}
                />
            </ButtonIcon>
        </WhapperTolls>
    );
}

const PeoplesTable = ({ peoples = [] }) => {

    const infoUser = [
        {
            label: 'name',
            fnx: (name) => <Avatar size="large" name={name} />,
            wd: '10%'
        },
        {
            label: 'name',
            wd: '50%'
        },
        {
            label: 'id',
            fnx: (id) => <Tolls id={id} />,
            wd: '40%'
        },

    ]

    return(
        <WhapperPeopleList>
            {
                peoples.map((people, index) => (
                    <People>
                        {infoUser.map((info) => (
                            <Info
                                key={index}
                                wd={info.wd}
                            >
                                { info.fnx !== undefined ? info.fnx(people[info.label]) : people[info.label] }
                            </Info>
                        ))}
                    </People>
                ))
            }
        </WhapperPeopleList>
    )
}

export default PeoplesTable