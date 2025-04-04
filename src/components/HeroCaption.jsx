"use client";
import { useEffect, useState } from "react";
// import { motion, stagger, useAnimate } from "motion/react";
import { useAnimate } from "framer-motion"
import { cn } from '../lib/utils.js'
import { useIntersectionObserver } from "@uidotdev/usehooks";

export default function HeroCaption  ({
  words,
  className,
  filter,
  duration,
  stagger
})  {
    const [startAnimation, setStartAnimation] = useState(false)
    const wordsArray = words.split(' ')

    const [ref, entry] = useIntersectionObserver({
        threshold: 0.1,
        // root: null,
        // rootMargin: "0px",
    });

    useEffect(() => {
        if (entry?.isIntersecting) {
            setStartAnimation(true)
            } 
    })

    return (
        <div
            ref={ref}
        >
            <p className={className}>

            {
                wordsArray.map((item, idx) => {
                    return (
                        <WordAnimated key={idx} stagger={idx} staggerAmt={stagger} word={item} startAnimation={startAnimation}/>
                    )
                })
            }
            </p>
        </div>


    )
};

function WordAnimated ({startAnimation, word, stagger, staggerAmt}) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        if (startAnimation) {
            animate(scope.current, {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)'
            }, { duration: 3, delay: stagger * staggerAmt, type: "spring" });
        }
    })
    return (
        <span
            ref={scope}
            style={{ opacity: 0, transform: 'translateY(200px)', filter: 'blur(20px)' }}
        >
            {word}{" "} 
        </span>
    )
}