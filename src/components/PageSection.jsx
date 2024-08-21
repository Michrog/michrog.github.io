import React from "react";
import SeriousSection from './SeriousSection'
import ComedySection from './ComedySection'

export default function PageSection({section}){
    return (
        <>
        {
            section === 'serious' ?
            <SeriousSection></SeriousSection> :
            <ComedySection></ComedySection>
        }
        </>
    )
}