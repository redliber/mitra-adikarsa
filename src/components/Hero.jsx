'use client'

import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useAnimate } from "framer-motion"
import { useEffect } from "react";

export default function Hero ({title}) {
    const [scope, animate] = useAnimate()

    const [ref, entry] = useIntersectionObserver({
        threshold: 0.1,
        // root: null,
        // rootMargin: "0px",
    });

    useEffect(() => {
        if (entry?.isIntersecting) {
            animate(scope.current, {
              opacity: 1,
              y: 0,
            }, { duration: 0.5 });
          } else {
            animate(scope.current, {
              opacity: 0,
              y: 20,
            }, { duration: 0.5 });
          }
    })

    console.log("entry --> ", entry);

    return (
        <div
            ref={ref}
            
        >
            <p
                ref={scope}
                className="text-[12rem] font-black leading-[10rem] max-w-5xl"
                style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
                {title} 
            </p>
        </div>


    )
}