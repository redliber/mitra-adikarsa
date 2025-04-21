import type React from "react"
import GeneralSection from "./GeneralSection"
import Hero from "../texts/Hero"
import { constColors } from "../../lib/const"
import '../../styles/global.css'
import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"

export default function ServiceSection({children, id, heading = 'Empty Service', body = 'Empty Service Body'}: {
    children?: React.ReactNode,
    id: string,
    heading?: string,
    body?: string
}) {
    const [scope, animate] = useAnimate()
    const [bodyScope, bodyAnimate] = useAnimate()
    const [useHover, setHover] = useState(false)
    return (
        <div
            className="border-t-[1px] border-b-[1px] border-zinc-50/35" 
            >
                <div 
                    className="py-24 md:py-20 px-6 md:px-20 lg:px-24 2xl:px-32">
                    <p className={' text-[12vw] leading-[11vw] md:text-5xl md:leading-[2.75rem] lg:text-6xl lg:leading-[4rem] xl:text-8xl xl:leading-[6rem] '}>
                        {heading}
                    </p>
                    <div ref={scope} style={{
                        
                    }}>
                        <p className=" text-5xl">{body}</p>
                    </div>
                </div>
        </div>
    )    
}