
import Image from "astro/components/Image.astro"
import ButtonAnimated from './animated/ButtonAnimated'
import companylogo from "../assets/media/company-logo.svg"
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks"
import '../styles/global.css'
import { constColors } from "../lib/const"
import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
import Hero from "./texts/Hero"
import {MoveUpRight} from 'lucide-react'

export default function Header({currentPath}) {
    const {width, height} = useWindowSize()
    const [{ x, y }, scrollTo] = useWindowScroll()
    const [overlayScope, overlayAnimate] = useAnimate()

    const [useOpenTab,setOpenTab] = useState(false)
    const [useCloseTab,setCloseTab] = useState(true)

    const tabs = [
        {
            label: 'HOME',
            route: '/mitra-adikarsa'
        },
        {
            label: 'SERVICES',
            route: '/mitra-adikarsa/services'
        },
        {
            label: 'ABOUT',
            route: '/mitra-adikarsa/about'
        },
    ]

    // Find out if the last letter is a slash. If so, removing it.
    let pathToArr = currentPath.split('')
    const checkLastElement = pathToArr[pathToArr.length - 1]
    if (checkLastElement == '/') {
        pathToArr.pop()
        currentPath = pathToArr.join("")
    }

    function handleClose() {
        overlayAnimate(overlayScope.current,
            {
                y: -100,
                opacity: 0
            },
            {
                duration: 0.75,
                type: 'spring'
            }
        ).then(()=> setOpenTab(!useOpenTab))

    }

    useEffect(() => {
        if (useOpenTab) {
            overlayAnimate(overlayScope.current,
                {
                    y: 0,
                    opacity: 1
                },
                {
                    duration: 0.5,
                    type: 'spring'
                }
            )
        }
        // if (useCloseTab) {
        //     overlayAnimate(overlayScope.current,
        //         {
        //             y: -800,
        //             opacity: 0
        //         },
        //         {
        //             duration: 0.5,
        //             type: 'spring'
        //         }
        //     )
        // }
    }, [useOpenTab])

    return (
        <div
            // ref={scope}
            className="w-full h-[30px] flex flex-row justify-between py-10 md:py-10 px-10 md:px-20 text-sm sticky top-0 z-[99] bg-dark-green"
            // style={regularState}

        >
            <div className="flex flex-row items-center gap-2">
                <img src={companylogo.src} alt="company-logo" className="w-[50px]" />
                <a href="/mitra-adikarsa" className="max-w-1.5 leading-[0.8rem] visible md:visible">
                    MITRA ADIKARSA
                </a>
            </div>
            {
                width > 768 && (
                    <>
                    <div className="flex flex-row items-center gap-2 ">
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
                                            >
                                              {item.label}
                                            </ButtonAnimated>
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
                                    >{item.label}</ButtonAnimated>
                                )
                            })
                        }
                    </div>
                    <div className="items-center flex flex-row">
                        <ButtonAnimated
                            client:load
                            label={'CONTACT US'}
                            href={'/mitra-adikarsa/contact'}
                            className={"font-black"}
                            initColor={constColors.darkGreen}
                            initBgColor={constColors.white}
                            hoverBgColor={constColors.yellowGreen2}
                            hoverColor={constColors.darkGreen}
                        >
                          <div className="flex flex-row gap-2">
                            <MoveUpRight size={20}/>
                            CONTACT US
                          </div>
                        </ButtonAnimated>
                    </div>
                  </>
                )
            // }
            // {
            //     width < 768 && (
            //         <div className="">
            //             <button onClick={() => {
            //                 setOpenTab(!useOpenTab)
            //                 // setCloseTab(false)
            //                 }}>MENU</button>
            //             {
            //                 useOpenTab && (
            //                     <div>
            //                         <div
            //                             className="fixed top-0 left-0 h-[50vh] w-full z-[95] items-end -mt-24"
            //                             >
            //                             <div
            //                                 className="h-full w-full border-b-[0.1px] grainy-bg shadow-2xl flex flex-col justify-end"
            //                                 ref={overlayScope}
            //                                 style={{
            //                                     backgroundColor: constColors.darkGreen2,
            //                                     transform: 'translateY(-800px)',
            //                                     opacity:0
            //                                 }}
            //                             >
            //                                 <div className="flex flex-col p-10 gap-10 w-full items-center">
            //                                     <div className="flex flex-row gap-4 w-full justify-between">
            //                                         <img src={companylogo.src} alt="company-logo" className="w-[50px]" />
            //                                         <button className="text-2xl" onClick={() =>{

            //                                             // setCloseTab(true)
            //                                             handleClose()
            //                                             }}>✖</button>
            //                                     </div>
            //                                     <div className="flex flex-col gap-2 w-full sm:w-1/3 md:w-1/2 place-self-end pb-2">
            //                                         {
            //                                             tabs.map((item, index) => {
            //                                                 if (currentPath == item.route) {
            //                                                     return (
            //                                                         <ButtonAnimated
            //                                                             client:load
            //                                                             label={item.label}
            //                                                             href={item.route}
            //                                                             className={"w-full"}
            //                                                             initColor={constColors.darkGreen}
            //                                                             initBgColor={constColors.yellowGreen}
            //                                                             hoverBgColor={constColors.white}
            //                                                             hoverColor={constColors.darkGreen}
            //                                                             >{item.label}</ButtonAnimated>
            //                                                         )
            //                                                     }
            //                                                     return (
            //                                                         <ButtonAnimated
            //                                                         client:load
            //                                                         className="w-full "
            //                                                         label={item.label}
            //                                                         href={item.route}
            //                                                         initColor={constColors.white}
            //                                                         hoverColor={constColors.yellowGreen}
            //                                                         initBgColor={constColors.white + '00'}
            //                                                         hoverBgColor={constColors.white + '00'}
            //                                                     >{item.label}</ButtonAnimated>
            //                                                 )
            //                                             })
            //                                         }
            //                                         <ButtonAnimated
            //                                             client:load
            //                                             label={'↗ CONTACT US'}
            //                                             href={'/mitra-adikarsa/contact'}
            //                                             className={"font-black mt-12"}
            //                                             initColor={constColors.darkGreen}
            //                                             initBgColor={constColors.white}
            //                                             hoverBgColor={constColors.yellowGreen2}
            //                                             hoverColor={constColors.darkGreen}
            //                                         >{item.label}</ButtonAnimated>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>


            //                 )
            //             }
            //         </div>
            //     )
            }
        </div>
    )
}
