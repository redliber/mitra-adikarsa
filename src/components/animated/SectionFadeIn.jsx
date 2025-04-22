"use client";
import { useEffect, useState } from "react";
// import { motion, stagger, useAnimate } from "motion/react";
import { useAnimate } from "framer-motion"
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { filter } from "framer-motion/client";

export default function SectionFadeIn  ({
    children,
    className
})  {
    const [scope, animate] = useAnimate()
    const [ref, entry] = useIntersectionObserver({
        threshold: 0.05,
        // root: null,
        // rootMargin: "0px",
    });

    useEffect(() => {
        if (entry?.isIntersecting) {
            animate(scope.current, {
                opacity: 1,
                // filter: 'blur(0px)'
            }, {duration: 0.5, type: "ease"})
        }
    })

    return (
        <div
            ref={ref}
            className={className}
        >
            <div ref={scope}
                style={{
                  opacity:0,
                  // filter: 'blur(50px)'
                  }}
            >
                {children}
            </div>
        </div>


    )
};
