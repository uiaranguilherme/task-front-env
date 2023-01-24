import { Helmet } from "react-helmet"

const Page = ({children, title}) => {
    return(
        <>
            <Helmet>
                <title> Jura board - {title}</title>
            </Helmet>
            {children}
        </>
    )
}

export default Page