
import Image from "astro/components/Image.astro"
import ButtonAnimated from "./Button-Animated"
import companylogo from "../assets/media/company-logo.svg"
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks"
import '../assets/styles/global.css'
import { constColors } from "../lib/const"
import { useAnimate } from "framer-motion"
import { useEffect } from "react"

export default function Header({currentPath}) {
    const {width, height} = useWindowSize()
    const [{ x, y }, scrollTo] = useWindowScroll()
    const [scope, animate] = useAnimate()

    const tabs = [
        {
            label: 'HOME',
            route: '/mitra-adikarsa'
        },
        {
            label: 'ABOUT US',
            route: '/mitra-adikarsa/about'
        },
        {
            label: 'OUR SERVICES',
            route: '/mitra-adikarsa/services'
        },
        // {
        //     label: 'CONTACT US',
        //     route: '/mitra-adikarsa/contact'
        // },
    ]

    // Find out if the last letter is a slash. If so, removing it.
    let pathToArr = currentPath.split('')
    const checkLastElement = pathToArr[pathToArr.length - 1]
    if (checkLastElement == '/') {
        pathToArr.pop()
        currentPath = pathToArr.join("")
    }

    const animateState = {
        backgroundColor: constColors.darkGreen
    }
    const animateTransition = {
        duration: 0.5, type : 'spring'
    }

    const regularState = {
        backgroundColor: constColors.darkGreen3
    }
    const regularTransition = {
        duration: 2, type: 'spring'
    }

    useEffect(() => {
        if (y > 50) {
            animate(scope.current, animateState, animateTransition)
        } else {
            animate(scope.current, regularState, regularTransition)
        }
    })

    return (
        <div 
            ref={scope}
            className="w-full min-h-[25px] flex flex-row justify-between py-6 px-24 text-sm border-b-[0.1px] border-zinc-50/35 sticky top-0 grainy-bg z-[99]"
            style={regularState}

        >
            <div className="flex flex-row items-center gap-2">
                <img src={companylogo.src} alt="company-logo" className="w-[50px]" />
                <a href="/mitra-adikarsa" className="max-w-1.5 leading-[0.8rem]">
                    MITRA ADIKARSA
                </a>
            </div>
            {
                width > 756 && (
                    <>
                    <div className="flex flex-row items-center gap-4 font-extrabold">
                        {
                            tabs.map((item, index) => {
                                if (currentPath == item.route) {
                                    return (
                                        <ButtonAnimated 
                                            client:load 
                                            label={item.label}
                                            href={item.route}
                                            className={"border-[0.1px]  border-zinc-50/50"}
                                            initColor={constColors.white}
                                            initBgColor={constColors.white + '00'} 
                                            hoverBgColor={constColors.white}
                                            hoverColor={constColors.darkGreen}
                                            />
                                        )
                                    }
                                    return (
                                        <ButtonAnimated 
                                        client:load
                                        className=""
                                        label={item.label}
                                        href={item.route}
                                        initColor={constColors.white}
                                        hoverColor={constColors.yellowGreen}
                                        initBgColor={constColors.white + '00'}
                                        hoverBgColor={constColors.white + '00'}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="items-center flex flex-row">
                        <ButtonAnimated 
                            client:load 
                            label={'↗ CONTACT US'}
                            href={'/mitra-adikarsa/contact'}
                            className={"font-black"}
                            initColor={constColors.darkGreen}
                            initBgColor={constColors.white} 
                            hoverBgColor={constColors.yellowGreen2}
                            hoverColor={constColors.darkGreen}
                        />
                    </div>
                    </>
                )
            }
            {
                width < 756 && (
                    <div>
                        =
                    </div>
                )
            }
        </div>
    )
}