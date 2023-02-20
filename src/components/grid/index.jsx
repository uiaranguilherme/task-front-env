import React, { useEffect, useState } from 'react'
import { WhapperGridContainer, WhapperGridItem, WhapperTemplateAreaContainer, WhapperTemplateArea } from './styles'

const Grid = ({children, variant, coll, ...restProps}) => {

    if(variant === 'template-area-container'){
        if(!restProps['total-columns']){
            return new Error("A propriedade total-columns tem que ser configurada...")
        }

        if(!restProps['large-columns']){
            return new Error("A propriedade large-columns tem que ser configurada...")
        }
    }

    switch(variant){
        case 'container': 
            return(
                <WhapperGridContainer {...restProps}>
                    {children}
                </WhapperGridContainer>
            )
        case 'template-area-container': 
            return(
                <WhapperTemplateAreaContainer {...restProps}>
                    {children}
                </WhapperTemplateAreaContainer>
            )
        case 'template-area':
            return(
                <WhapperTemplateArea {...restProps}>
                    {children}
                </WhapperTemplateArea>
            )
    }
    
    return(
        <WhapperGridItem coll={coll} {...restProps}>
            {children}
        </WhapperGridItem>
    );
}

export default Grid