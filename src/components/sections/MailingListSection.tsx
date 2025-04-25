'use client'

import React from "react"
import GeneralSection from "./GeneralSection"
import Hero from "../texts/Hero"
import Caption from "../texts/Caption"
import SubCaption from "../texts/SubCaption"

export default function MailingListSection({id, style} : {
    id: string,
    style?: Object
}) {
    return (
        <GeneralSection id={id} additionalClasses={' bg-yellow-green '} style={style}>
          <div className="w-full flex flex-col">
    				<Hero
     					duration={1.5}
     					stagger={0.05}
     					filter={true}
              className="text-dark-green"
     					words={'Subscribe to Our Mailing List'}/>
    				<SubCaption
     					duration={1.5}
     					stagger={0.05}
     					filter={true}
              className="text-black my-4"
     					words={'Get the latest news and promotional communications from Mitra Adikarsa directly to your inbox!'}/>
            <div className="w-full md:w-1/2 my-10">
              <input type="text" placeholder="Enter your e-mail address" className="w-full bg-zinc-50 text-dark-green p-4"/>
              <p className="my-4 text-xs text-dark-green">By subscribing to our newsletter, you are giving consent to receive promotional communications from Mitra Adikarsa. We will never share your personal data with third parties.</p>
            </div>
          </div>
        </GeneralSection>
    )
}
