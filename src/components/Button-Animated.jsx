'use client'
import { color, hover, useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
import { constColors } from "../lib/const"

export default function ButtonAnimated({
    label, 
    className, 
    href,
    initColor,
    initBgColor,
    hoverColor,
    hoverBgColor
}) {
    const [scope, animate] = useAnimate()
    const [useHovered, setHovered] = useState(false)

    // Animation States and Transitions

    const hoveredAnim = { scale: 1.125, rotation: 25, 
        background: hoverBgColor, 
        color: hoverColor, backdropFilter: 'blur(10px)' }
    const hoveredTransition = { duration: 0.5, type: "spring" }

    const regularStyle = { scale: 1, rotate: 0, 
        background: initBgColor, 
        color: initColor, backdropFilter: ''}
    const regularTransition = { duration: 1, type: "spring", }

    const mouseDownAnim = { scale: 1, }
    const mouseDownTransition = { duration : 0.75, type: "spring"}

    
    
    // Callback Functions for DOM Events

    function hoverOver () {
        animate(scope.current, hoveredAnim, hoveredTransition)
    }

    function hoverOverEnd() {
        animate(scope.current, regularStyle, regularTransition)
    }

    function mouseDown() {
        animate(scope.current, mouseDownAnim, mouseDownTransition)
    }

    useEffect(() => {
        useHovered ? hoverOver() : hoverOverEnd()
    }, [useHovered, hoveredAnim, hoveredTransition])
    
    return (
        <a
            ref={scope}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            onMouseDown={() => mouseDown()}
            // onMouseUp={}
            className={className + ' rounded-xs px-4 py-2'}
            href={href}
        >
            {label}
        </a>
    )
}