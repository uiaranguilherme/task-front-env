import React from "react"

const Stepper = ({children, step, currentStep}) => {
    return(
        <>
            {
                step === currentStep && children
            }
        </>
    )
}

export default Stepper