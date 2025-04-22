import companylogo from "../assets/media/company-logo.svg"
import { constColors } from "../lib/const"
import '../styles/global.css'
import { useAnimate } from "framer-motion"
import { useEffect } from "react"
import { useIntersectionObserver } from "@uidotdev/usehooks"
import ButtonAnimated from "./animated/ButtonAnimated"


export default function Footer({}) {
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

    const [scope, animate] = useAnimate()
    const [ref, entry] = useIntersectionObserver({
        threshold: 0.1,
        // root: null,
        // rootMargin: "0px",
    });

    useEffect(() => {
        if (entry?.isIntersecting) {
            animate(scope.current, {
            //   y: 0,
              opacity: 1
            }, { duration: 3, type: "inertia" });
            animate(scope.current, {
                opacity: 1
            }, {
                duration: 3, type: "spring"
            })
          } else {
            animate(scope.current, {
              opacity: 0,
            //   y: 300,
            }, { duration: 1 });
          }
    })

    return (
        <div ref={ref} className="z-[99]">
            <div ref={scope} className="w-full flex flex-col  text-sm
            py-20 md:py-20 px-6 md:px-20
            border-t-[0.1px] border-zinc-50/35 grainy-bg glassmorphism inset-shadow-sm" style={{
                background: constColors.darkGreen2,
                // transform: 'translateY(300px)'
                opacity:0
            }}>
                <div className="flex flex-col md:flex-col lg:flex-row w-full justify-between">
                    <div className="flex flex-col align-start gap-6 mb-24">
                        <div className="flex flex-row items-center gap-2">
                            <img src={companylogo.src} alt="company-logo" width={50}/>
                            <a href="/mitra-adikarsa" className="leading-[0.8rem]">
                                MITRA <br></br>ADIKARSA
                            </a>
                        </div>
                        <div className="text-xs leading-[0.8rem] font-thin">
                            <p>Copyright 2025 © PT. Mitra Adikarsa <br></br> All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-24">
                        <div className="flex flex-col">
                            <p className="mb-10 font-black">PAGES</p>
                            {
                                tabs.map((item, index) => (
                                    <a href={item.route} key={index} className="font-thin">{item.label}</a>
                                ))
                            }
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-10 font-black">LOCATIONS</p>
                            <p className="">KALIDERES</p>
                            <p className="font-extralight leading-tight text-zinc-300 pb-4">Jl. Peta Barat Citra Business Park <br></br>Blok F No.33 Kalideres<br></br>Jakarta Barat, DKI Jakarta 11840</p>
                            <p className="">BEKASI</p>
                            <p className="font-extralight leading-tight text-zinc-300">Workshop<br></br>Jl. Bambu Kuning Raya No.23<br></br>Bekasi Timur</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-10 font-black">CONTACT</p>
                            <p>021 - 29020311</p>
                            <p>021 - 29020312</p>
                            <p>mitradikarsa@gmail.com</p>
                            <br></br>
                            <ButtonAnimated
                                client:load
                                label={'↗ CONTACT US'}
                                href={'/mitra-adikarsa/contact'}
                                className={"font-black"}
                                initColor={constColors.darkGreen}
                                initBgColor={constColors.white}
                                hoverBgColor={constColors.yellowGreen2}
                                hoverColor={constColors.darkGreen}
                            >
                              ↗ CONTACT US
                            </ButtonAnimated>
                        </div>
                    </div>
                </div>
                <div className="py-6 mt-36 text-xs">
                    <p>MADE BY BENJAMIN BERNARD CHENIER</p>
                </div>
            </div>
        </div>
    )
}
