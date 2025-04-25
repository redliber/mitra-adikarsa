'use client'

import Image from "astro/components/Image.astro"
import ButtonAnimated from './animated/ButtonAnimated'
import companylogo from "../assets/media/company-logo.svg"
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks"
import '../styles/global.css'
import { constColors } from "../lib/const"
import { px, useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
import Hero from "./texts/Hero"
import {Menu, MoveUpRight} from 'lucide-react'
import { NoToneMapping } from "three"

export default function Header({currentPath}) {
    const {width, height} = useWindowSize()
    const [{ x, y }, scrollTo] = useWindowScroll()
    const [overlayScope, overlayAnimate] = useAnimate()

    const [useOpenTab,setOpenTab] = useState(false)
    const [useCloseTab,setCloseTab] = useState(false)

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
                y: '-800px',
                opacity: 0,
                display: 'none',
                visibility: 'hidden'
            },
            {
                duration: 1,
                type: 'spring'
            }
        )

    }

    function handleOpen() {
        overlayAnimate(overlayScope.current,
            {
                y: 0,
                opacity: 1,
                display: 'inline',
                visibility: 'visible'
            },
            {
                duration: 0.75,
                type: 'spring'
            }
        )
    }


    return (
        <div
            // ref={scope}
            className="w-full md:h-[30px] flex flex-row align-middle justify-between py-10 md:py-10 px-6 md:px-10 text-sm sticky top-0 z-[99] bg-dark-green"
            // style={regularState}

        >
            <div className="flex flex-row items-center gap-2 h-full">
                <img src={companylogo.src} alt="company-logo" className="w-[50px]" />
                <a href="/mitra-adikarsa" className="max-w-1.5 leading-[0.8rem] invisible md:visible">
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
            }
            {
                width < 768 && (
                    <div className="h-full">
                        <Menu onClick={() => handleOpen()} size={25} color={'white'} />
                        <div
                            className="fixed top-0 left-0 h-[100vh] w-full z-[99999] items-center"
                            ref={overlayScope}
                            style={{
                                backgroundColor: constColors.darkGreen2,
                                transform: 'translateY(-800px)',
                                opacity:0,
                                visibility: 'hidden',
                                // display: 'none',
                            }}
                            >
                            <div
                                className="h-full w-full flex flex-col justify-center"

                            >
                                <div className="flex flex-col gap-10 w-full h-full items-center">
                                    <div className="flex flex-row gap-4 p-10 w-full justify-center">
                                        <button className="text-4xl active:rotate-[360deg] transition-all duration-100 " onClick={() => handleClose()}>✖</button>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full h-full  pb-2">
                                        {
                                            tabs.map((item, index) => {
                                                if (currentPath == item.route) {
                                                    return (
                                                        <ButtonAnimated
                                                            client:load
                                                            label={item.label}
                                                            href={item.route}
                                                            className={"w-full text-3xl text-center"}
                                                            initColor={constColors.yellowGreen}
                                                            initBgColor={constColors.darkGreen}
                                                            hoverBgColor={constColors.yellowGreen}
                                                            hoverColor={constColors.darkGreen}
                                                        >{item.label}</ButtonAnimated>
                                                        )
                                                    }
                                                    return (
                                                        <ButtonAnimated
                                                            client:load
                                                            className="w-full text-3xl text-center"
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
                                        <ButtonAnimated
                                            client:load
                                            label={'↗ CONTACT US'}
                                            href={'/mitra-adikarsa/contact'}
                                            className={"w-full text-3xl text-center mt-32 font-black bottom-0"}
                                            initColor={constColors.darkGreen}
                                            initBgColor={constColors.white}
                                            hoverBgColor={constColors.yellowGreen2}
                                            hoverColor={constColors.darkGreen}
                                        >CONTACT US</ButtonAnimated>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
