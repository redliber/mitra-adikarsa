"use client";
import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion"
import { useIntersectionObserver } from "@uidotdev/usehooks";
import WordAnimated from "../animated/WordAnimated";

export default function Caption  ({
  words,
  className,
  filter,
  animateText = true,
  duration,
  threshold = 0.1,
  stagger
}: {
    words: string,
    className?: string,
    filter?: boolean,
    threshold?: number,
    animateText?: boolean,
    duration?: number,
    stagger?: number
})  {
    const [startAnimation, setStartAnimation] = useState(false)
    const wordsArray = words.split(' ')

    const [ref, entry] = useIntersectionObserver({
        threshold: threshold,
    });

    useEffect(() => {
        entry?.isIntersecting ? setStartAnimation(true) : ''
    })

    return (
        <div ref={ref} className="w-full">
            <p className={className + ' text-center text-lg leading-[1.25rem] md:text-4xl md:leading-[2.5rem] font-thin'}>

                {
                    animateText && wordsArray.map((item, idx) => {
                        return (
                            <WordAnimated key={idx} stagger={idx} staggerAmt={stagger} word={item} startAnimation={startAnimation} duration={duration}/>
                        )
                    })
                }
                {
                    !animateText && words
                }
            </p>
        </div>


    )
};
