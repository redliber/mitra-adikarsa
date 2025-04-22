'use client'

import React from "react"
import GeneralSection from "./GeneralSection"
import Hero from "../texts/Hero"

export default function MailingListSection({id, style} : {
    id: string,
    style?: Object
}) {
    return (
        <GeneralSection id={id} additionalClasses={' bg-dark-green '} style={style}>
          <div className="w-full flex flex-col">
    				<Hero
     					duration={1.5}
     					stagger={0.05}
     					filter={true}
              className="text-yellow-green"
     					words={'Subscribe to Our Mailing List'}/>
            <p className="my-4 w-1/3">Get the latest news and promotional communications from Mitra Adikarsa directly to your inbox!</p>
            <div className="w-1/2 my-10">
              <input type="text" placeholder="Enter your e-mail address" className="w-full bg-zinc-50 text-dark-green p-4"/>
              <p className="my-4 text-xs text-yellow-green">By subscribing to our newsletter, you are giving consent to receive promotional communications from Mitra Adikarsa. We will never share your personal data with third parties.</p>
            </div>
          </div>
        </GeneralSection>
    )
}
