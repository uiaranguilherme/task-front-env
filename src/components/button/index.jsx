import ButtonText from './button-text'
import ButtonContained from './button-contained'
import ButtonOutlined from './button-outlined'
import React from 'react'

const Button = ({
    children,
    variant,
    adornIcon = { position: '', Icon: '' },
    ...restPropsButton
}) => {

    switch(variant){
        case 'text':
            return(
                <ButtonText {...restPropsButton}>
                    {adornIcon.position === 'start' ? adornIcon.Icon : ''}
                    {children}
                    {adornIcon.position === 'end' ? adornIcon.Icon : ''}
                </ButtonText>
            ) 
        case 'contained':
            return(
                <ButtonContained {...restPropsButton}>
                    {adornIcon.position === 'start' ? adornIcon.Icon : ''}
                    {children}
                    {adornIcon.position === 'end' ? adornIcon.Icon : ''}
                </ButtonContained>
            )
        case 'outlined':
            return(
                <ButtonOutlined {...restPropsButton}>
                    {adornIcon.position === 'start' ? adornIcon.Icon : ''}
                    {children}
                    {adornIcon.position === 'end' ? adornIcon.Icon : ''}
                </ButtonOutlined>
            )
        default: 
            throw 'é necessario informar a variant'
    }
}

export default Button