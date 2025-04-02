import Image from "astro/components/Image.astro"
import ButtonAnimated from "./Button-Animated"

export default function Header() {
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

    return (
        <div className="w-full min-h-[25px] flex flex-row justify-between py-2 px-6">
            <div className="flex flex-row items-center gap-2">
                <img src={"src/assets/media/company-logo.svg"} alt="company-logo" className="w-[50px]" />
                <a href="/mitra-adikarsa">MITRA ADIKARSA</a>
            </div>
            <div className="flex flex-row items-center">
                {
                    tabs.map((item, index) => {
                        return (
                            <a href={item.route} className="font-light text-sm p-2">
                                <ButtonAnimated client:load label={item.label}/>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}