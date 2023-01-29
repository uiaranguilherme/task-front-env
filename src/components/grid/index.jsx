import React from 'react'
import { WhapperGridContainer, WhapperGridItem } from './styles'

const Grid = ({children, container, coll, ...restProps}) => {

    if(container === false && typeof coll !== 'number'){
        return new Error("A propriedade coll tem que ser do tipo number...")
    }

    if(container){
        return(
            <WhapperGridContainer {...restProps}>
                {children}
            </WhapperGridContainer>
        );
    }
    
    return(
        <WhapperGridItem coll={coll} {...restProps}>
            {children}
        </WhapperGridItem>
    );
}

export default Grid