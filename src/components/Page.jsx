import React, {useState} from "react";
import SectionChoice from './SectionChoice'
import PageSection from './PageSection'

export default function Page(){
    const [section, setSection] = useState('serious')
    return (
        <>
            <SectionChoice onChangeSection={setSection}></SectionChoice>
            <PageSection section={section}></PageSection>
        </>
    )
}