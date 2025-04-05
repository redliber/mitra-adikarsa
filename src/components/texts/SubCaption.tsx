"use client";
import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion"
import { useIntersectionObserver } from "@uidotdev/usehooks";
import WordAnimated from "../animated/WordAnimated";

export default function SubCaption  ({
  words,
  className,
  filter,
  duration,
  stagger
}: {
    words: string,
    className?: string,
    filter?: boolean,
    duration: number,
    stagger: number
})  {
    const [startAnimation, setStartAnimation] = useState(false)
    const wordsArray = words.split(' ')

    const [ref, entry] = useIntersectionObserver({
        threshold: 0.1,
    });

    useEffect(() => {
        entry?.isIntersecting ? setStartAnimation(true) : ''
    })

    return (
        <div ref={ref}>
            <p className={className + ' text-lg md:text-2xl leading-[1.25rem] md:leading-[1.5rem] font-thin max-w-5xl'}>
                {
                    wordsArray.map((item, idx) => {
                        return (
                            <WordAnimated key={idx} stagger={idx} staggerAmt={stagger} word={item} startAnimation={startAnimation} duration={duration}/>
                        )
                    })
                }
            </p>
        </div>


    )
};

