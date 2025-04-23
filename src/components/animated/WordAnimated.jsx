import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function WordAnimated ({startAnimation, word, stagger, staggerAmt, duration}) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        if (startAnimation) {
            animate(scope.current, {
                opacity: 1,
            }, { duration: duration, delay: stagger * staggerAmt, type: "spring" });
        }
    })
    
    return (
        <span
            ref={scope}
            style={{ opacity: 0 }}
        >
            {word}{" "} 
        </span>
    )
}