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
            }, { duration: 1.5, type: "spring" });
          } else {
            animate(scope.current, {
              opacity: 0,
              y: 20,
            }, { duration: 0.5 });
          }
    })

    return (
        <div
            ref={ref}
            
        >
            <p
                ref={scope}
                className="text-[12vw] leading-[11vw] max-w-5xl"
                style={{ opacity: 0, transform: 'translateY(75px)' }}
            >
                {title} 
            </p>
        </div>


    )
}