const Typography = ({children, component, ...restProps}) => {
    switch(component){
        case 'h1':
            return <h1 {...restProps}>{children}</h1>
        case 'h2':
            return <h2 {...restProps}>{children}</h2>
        case 'h3':
            return <h3 {...restProps}>{children}</h3>
        case 'h4':
            return <h4 {...restProps}>{children}</h4>
    }   

    return <p {...restProps}>{children}</p>
}

export default Typography