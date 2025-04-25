import type { ReactNode } from "react";
import { constColors } from "../../lib/const";
import ButtonAnimated from "../animated/ButtonAnimated";
import SectionFadeIn from "../animated/SectionFadeIn";
import Hero from "../texts/Hero";
import SubCaption from "../texts/SubCaption";
import FullImageSection from "./FullImageSection";
import GeneralSection from "./GeneralSection";

export default function HeroTopSection({
    id,
    heroText,
    heroCaption,
    heroImgSrc,
    children
    }:{
        id: string,
        heroText: string,
        heroCaption: string,
        heroImgSrc: ImageMetadata,
        children?: ReactNode
    }) {

        return (
            <div>
                <GeneralSection id={`${id}-hero-top`} additionalClasses='sticky top-[80px] bg-dark-green'>
                    <div className="flex flex-col md:flex-row justify-between gap-10 sticky top-[80px] bg-dark-green">
                        <div className="max-w-lg">
                            <Hero
                                duration={1.5}
                                stagger={0.05}
                                filter={true}
                                className='text-yellow-green'
                                words={heroText}
                                />
                        </div>
                        <div className="text-xl flex flex-col self-stretch justify-between items-start md:items-end gap-10">
                            <SubCaption 
                                duration={0.5}
                                stagger={0.02}
                                filter={true}
                                className={'text-left md:text-right max-w-lg'}
                                words={heroCaption}/>
                            { children }
                        </div>
                    </div>
                </GeneralSection>
                <SectionFadeIn  className="w-full">
                    <FullImageSection id={`${id}-hero-picture`} additionalClasses={'w-full'}>
                        <img src={heroImgSrc.src} alt={heroImgSrc.src} height={1000} className="w-full"/>
                    </FullImageSection>
                </SectionFadeIn>
            </div>
        )
}