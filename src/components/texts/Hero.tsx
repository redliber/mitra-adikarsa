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
        threshold: 0.1,
    });

    useEffect(() => {
        entry?.isIntersecting ? setStartAnimation(true) : ''
        startAnimation ? animate(scope.current, {y:0}, {duration:1, type:'spring'}) : ''
    })

    return (
        <div ref={scope} style={{transform: 'translateY(200px)'}}>
            <div ref={ref}>
                <p className={className + ' font-extrabold text-[12vw] leading-[11vw] md:text-5xl md:leading-[2.75rem] lg:text-6xl lg:leading-[4rem] xl:text-8xl xl:leading-[6rem] md:max-w-2xl lg:max-w-4xl text-yellow-green'}>
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

