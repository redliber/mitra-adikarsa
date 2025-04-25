import React from "react"

export default function GeneralSection({children, id, additionalClasses, innerClasses, style} : {
    children: React.ReactNode,
    id: string,
    additionalClasses?: string,
    innerClasses?: string,
    style?: Object
}) {
    return (
        <section id={id} className={additionalClasses + ' '} style={style}>
            <div className={innerClasses + ' flex flex-col py-20 md:py-24 px-6 md:px-20 lg:px-24 2xl:px-32 h-full'}>
                {children}
            </div>
        </section>
    )
}
