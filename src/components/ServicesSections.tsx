'use client'
import React from "react"
import ServiceSection from "./sections/ServiceSection"
import MailingListSection from "./sections/MailingListSection"

export default function ServicesSections({
    children,
    data
}: {
    children?: React.ReactNode,
    data: {heading: string, body: string}[]
}) {
    return (
        <>
            {
                data.map((item, idx) => {
                    return (
                        <ServiceSection key={idx} id={idx} heading={item.heading} body={item.body}/>
                    )
                })
            }
        </>
    )
}
