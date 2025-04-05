import React from "react"

export default function GeneralSection({children, id, additionalClasses, innerClasses, style} : {
    children: React.ReactNode,
    id: string,
    additionalClasses?: string,
    innerClasses?: string,
    style?: Object
}) {
    return (
        <section id={id} className={additionalClasses + ' border-t-[1px] border-b-[1px] border-zinc-50/35 shadow-2xl'} style={style}>
            <div className={innerClasses + ' flex flex-col py-24 md:py-20 px-6 md:px-20 lg:px-24 2xl:px-32 h-full'}>
                {children}
            </div>
        </section>
    )
}