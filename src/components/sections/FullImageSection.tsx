import React from "react"

export default function FullImageSection({children, id, additionalClasses} : {
    children: React.ReactNode,
    id?: string,
    additionalClasses?: string
}) {
    return (
        <section id={id} className={additionalClasses + 'w-full'}>
            {children}
        </section>
    )
}