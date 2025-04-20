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

    useEffect(() => {
        if (useHover) {
            animate(scope.current, {
                y:0
            }, {
                duration: 2,
                type: 'spring'
            })
            // animate(scope.current, {
            //     y: -200
            // }, {
            //     duration: 1,
            //     type: "spring"
            // })
        } else {
            animate(scope.current, {
                y: '-50vh'
            }, {
                duration: 1,
                type: 'spring'
            })
        }
    })
    return (
        <div
            className="border-t-[1px] border-b-[1px] border-zinc-50/35 h-[50vh]" 
            >
                <div 
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    className="py-24 md:py-20 px-6 md:px-20 lg:px-24 2xl:px-32">
                    <p className={' text-[12vw] leading-[11vw] md:text-5xl md:leading-[2.75rem] lg:text-6xl lg:leading-[4rem] xl:text-8xl xl:leading-[6rem] '}>
                        {heading}
                    </p>
                </div>
                <div
                    ref={scope} 
                    className="h-full bg-zinc-300/50"
                    style={{
                        transform: 'translateY(-50vh)'
                    }}
                >
                </div>

        </div>
    )    
}