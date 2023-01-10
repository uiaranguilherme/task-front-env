import React from "react"
import { ContainerSubHeader } from './styles'
import ButtonSubHeader from "../button-sub-header"

const SubHeader = ({buttons = []}) => {
    return(
        <ContainerSubHeader>
            {
                buttons.map(({title, Icon, ...restPropsButton}, index) => {
                    return(
                        <ButtonSubHeader key={index + title} {...restPropsButton}>
                            {Icon && <Icon/>}
                            {title}
                        </ButtonSubHeader>
                    )    
                })
            }
        </ContainerSubHeader>
    )
}

export default SubHeader