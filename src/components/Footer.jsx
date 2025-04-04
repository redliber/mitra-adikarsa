import companylogo from "../assets/media/company-logo.svg"
import { constColors } from "../lib/const"
import '../assets/styles/global.css'
import { useAnimate } from "framer-motion"
import { useEffect } from "react"
import { useIntersectionObserver } from "@uidotdev/usehooks"
import ButtonAnimated from "./Button-Animated"


export default function Footer({}) {
    const [scope, animate] = useAnimate()
    const [ref, entry] = useIntersectionObserver({
        threshold: 0.1,
        // root: null,
        // rootMargin: "0px",
    });

    useEffect(() => {
        if (entry?.isIntersecting) {
            animate(scope.current, {
              y: 0,
            }, { duration: 3, type: "inertia" });
            animate(scope.current, {
                opacity: 1
            }, {
                duration: 3, type: "spring"
            })
          } else {
            animate(scope.current, {
              opacity: 0,
              y: 300,
            }, { duration: 1 });
          }
    })

    return (
        <div ref={ref}>
            <div ref={scope} className="w-full min-h-72 flex flex-col  px-24 pt-24 mt-10 border-t-[0.1px] border-zinc-50/35 grainy-bg glassmorphism inset-shadow-sm" style={{
                background: constColors.darkGreen2,
                transform: 'translateY(300px)'
            }}>
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-col align-start gap-6">
                        <div className="flex flex-row items-center gap-2">
                            <img src={companylogo.src} alt="company-logo" width={50}/>
                            <a href="/mitra-adikarsa" className="leading-[0.8rem]">
                                MITRA <br></br>ADIKARSA
                            </a>
                        </div>
                        <div className="text-xs leading-[0.8rem] font-thin">
                            <p>Copyright 2025 © Mitra Adikarsa <br></br> All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-24">
                        <div className="flex flex-col">
                            <p className="mb-10 font-black">PAGES</p>
                            <p>SERVICES</p>
                            <p>ABOUT US</p>
                            <p>CONTACTS</p>
                            <p>HOME</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="mb-10 font-black">LOCATION</p>
                            <p className="font-bold">KALIDERES</p>
                            <p className="font-extralight leading-tight text-zinc-50 pb-4">Jl. Peta Barat Citra Business Park <br></br>Blok F No.33 Kalideres<br></br>Jakarta Barat, DKI Jakarta 11840</p>
                            <p className="font-bold">BEKASI</p>
                            <p className="font-extralight leading-tight text-zinc-50">Workshop<br></br>Jl. Bambu Kuning Raya No.23<br></br>Bekasi Timur</p>
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
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t-[0.1px] border-zinc-50/35 py-6 mt-36">
                    <p>MADE BY BENJAMIN CLAUDE CHENIER</p>
                </div>
            </div>
        </div>
    )
}