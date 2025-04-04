import { useAnimate } from 'framer-motion'
import '../assets/styles/global.css'
import { constColors } from '../lib/const'
import { useEffect, useState } from 'react'

export default function Card({heading, body}) {
    const [scope, animate] = useAnimate()
    const [textScope, textAnimate] = useAnimate()
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        if (hovered) {
            animate(scope.current, {
                scale: 0.95, backgroundColor: constColors.yellowGreen2
            }, {
                duration: 0.1, transition: "ease"
            })
            textAnimate(textScope.current, {
                scale: 1.1,
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
            ref={scope} className="min-h-1/2 max-w-lg border-[0.1px] flex flex-col  border-zinc-50/35 p-16 rounded-xs grainy-bg" 
            // style={{ backgroundColor: 'rgba(4, 17, 16, 1)'}}
        >
            <div ref={textScope} className='flex flex-col gap-10'>
                <p className="font-black text-2xl" >{heading}</p>
                <div className='max-w-1/3 border-zinc-50/35 border-[1px]'></div>
                <p>{body}</p>
            </div>
        </div>
    )
}