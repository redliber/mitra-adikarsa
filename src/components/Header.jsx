import Image from "astro/components/Image.astro"
import ButtonAnimated from "./Button-Animated"
import companylogo from "../assets/media/company-logo.svg"
import { useWindowSize } from "@uidotdev/usehooks"
import '../assets/styles/global.css'

export default function Header({currentPath}) {
    const {width, height} = useWindowSize()

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
        {
            label: 'CONTACT US',
            route: '/mitra-adikarsa/contact'
        },
    ]

    // Find out if the last letter is a slash. If so, removing it.
    let pathToArr = currentPath.split('')
    const checkLastElement = pathToArr[pathToArr.length - 1]
    if (checkLastElement == '/') {
        pathToArr.pop()
        currentPath = pathToArr.join("")
    }

    return (
        <div className="w-full min-h-[25px] flex flex-row justify-between py-6 px-6 text-sm border-b-[0.1px] border-zinc-50/35 sticky top-0 grainy-bg">
            <div className="flex flex-row items-center gap-2">
                <img src={companylogo.src} alt="company-logo" className="w-[50px]" />
                <a href="/mitra-adikarsa" className="max-w-1.5 leading-[0.8rem]">
                    MITRA ADIKARSA
                </a>
            </div>
            {
                width > 756 && (
                    <div className="flex flex-row items-center">
                        {
                            tabs.map((item, index) => {
                                if (currentPath == item.route) {
                                    return (
                                        <a href={item.route} className="border-[0.1px] rounded-sm px-4 py-1 font-extrabold border-zinc-50/50 text-amber-200 hover:text-amber-300">
                                            <ButtonAnimated client:load label={item.label}/>
                                        </a>
                                    )
                                }
                                return (
                                    <a href={item.route} className="font-light px-4">
                                        <ButtonAnimated client:load label={item.label}/>
                                    </a>
                                )
                            })
                        }
                    </div>
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