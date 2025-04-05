import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function WordAnimated ({startAnimation, word, stagger, staggerAmt, duration}) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        if (startAnimation) {
            animate(scope.current, {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)'
            }, { duration: duration, delay: stagger * staggerAmt, type: "spring" });
        }
    })
    return (
        <span
            ref={scope}
            style={{ opacity: 0, transform: 'translateY(200px)', filter: 'blur(15px)' }}
        >
            {word}{" "} 
        </span>
    )
}