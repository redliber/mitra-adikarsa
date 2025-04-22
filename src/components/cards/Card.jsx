import { useAnimate } from 'framer-motion'
import '../../styles/global.css'
import { constColors } from '../../lib/const.js'
import { useEffect, useState } from 'react'

export default function Card({heading, body}) {
    const [scope, animate] = useAnimate()
    const [textScope, textAnimate] = useAnimate()
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        if (hovered) {
            animate(scope.current, {
                scale: 0.975, backgroundColor: constColors.yellowGreen2
            }, {
                duration: 0.1, transition: "ease"
            })
            textAnimate(textScope.current, {
                scale: 1.05,
                color: constColors.darkGreen
            }, {duration:0.25})
        } else {
            animate(scope.current, {
                scale: 1, backgroundColor: 'rgba(4, 17, 16, 1)'
            }, {
                duration: 0.1, transition: "ease"
            })
            textAnimate(textScope.current, {
                scale: 1,
                color: constColors.white
            }, {duration:0.25})
        }
    }, [hovered])

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            ref={scope}
            className="
                min-h-80
                w-full md:w-1/2 lg:w-1/3
                border-[0.1px]
                border-zinc-50/35
                py-16 px-10 md:px-10 md:py-10 rounded-xs grainy-bg shadow-2xl"
            // style={{ backgroundColor: 'rgba(4, 17, 16, 1)'}}
        >
            <div ref={textScope} className='flex flex-col h-full place-content-between'>
                <p className="font-black text-4xl self-start">{heading}</p>
                <div className='max-w-1/6 my-10'>
                    <div className='w-full border-zinc-50/35 border-[1px]'></div>
                </div>
                <p className='place-self-end'>{body}</p>
            </div>
        </div>
    )
}
