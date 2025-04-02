'use client'
import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"

export default function ButtonAnimated({label}) {
    const [scope, animate] = useAnimate()
    const [useHovered, setHovered] = useState(false)

    const hoveredAnim = { scale: 1.2, rotation: 25 }
    const hoveredTransition = { duration: 0.5, type: "spring" }

    function hoverOver () {
        animate(scope.current, hoveredAnim, hoveredTransition)
    }

    function hoverOverEnd() {
        animate(scope.current, { scale: 1, rotate: 0 }, { duration: 1, type: "spring", })
    }

    useEffect(() => {
        useHovered ? hoverOver() : hoverOverEnd()
    }, [useHovered, hoveredAnim, hoveredTransition])
    
    return (
        <>
            <p
                ref={scope}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                // onMouseDown={}
                // onMouseUp={}
            >
                {label}
            </p>
        </>
    )
}