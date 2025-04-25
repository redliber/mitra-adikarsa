"use client";
import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion"
import { useIntersectionObserver } from "@uidotdev/usehooks";
import WordAnimated from "../animated/WordAnimated";

export default function Hero  ({
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
    const [scope, animate] = useAnimate()
    const wordsArray = words.split(' ')

    const [ref, entry] = useIntersectionObserver({
        threshold: 0.05,
    });

    useEffect(() => {
        entry?.isIntersecting ? setStartAnimation(true) : ''
    })

    return (
        <div ref={scope} >
            <div ref={ref}>
                <p className={className + ' font-black text-[12vw] leading-[11vw] md:text-5xl md:leading-[2.75rem] lg:text-5xl lg:leading-[3rem] xl:text-7xl xl:leading-[4.5rem] md:max-w-xl lg:max-w-3xl'}>
                    {
                        wordsArray.map((item, idx) => {
                            return (
                                <WordAnimated key={idx} stagger={idx} staggerAmt={stagger} word={item} startAnimation={startAnimation} duration={duration}/>
                            )
                        })
                    }
                </p>
            </div>
        </div>

    )
};
