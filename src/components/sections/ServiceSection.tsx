'use client'
import type React from "react"
import GeneralSection from "./GeneralSection"
import Hero from "../texts/Hero"
import { constColors } from "../../lib/const"
import '../../styles/global.css'
import { useAnimate, useInView } from "framer-motion"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import SectionFadeIn from "../animated/SectionFadeIn"
import { MoveDownRight } from 'lucide-react'
import FullImageSection from "./FullImageSection"

// Images
// Images
import electricLines from "../../assets/media/stock/electric-lines.jpg"
import field from "../../assets/media/stock/field.jpg"
import contact1 from "../../assets/media/stock/contact1.jpg"
import bulldozer from "../../assets/media/stock/bulldozer.jpg"
import { navigate } from "astro:transitions/client"


export default function ServiceSection({children, id, heading = 'Empty Service', body = 'Empty Service Body'}: {
    children?: React.ReactNode,
    id: string | number,
    heading?: string,
    body?: string
}) {
    const [scope, animate] = useAnimate()
    const [iconScope, iconAnimate] = useAnimate()
    const [bodyScope, bodyAnimate] = useAnimate()
    const [bodyScopeHeight, setBodyScopeHeight] = useState('')

    const headingRef = useRef(null)

    const [useHover, setHover] = useState(false)
    const [useModal, setModal] = useState(false)
    const [useColor, setColor] = useState(constColors.darkGreen)
    const [useInvertColor, setInvertColor] = useState(constColors.yellowGreen)

    useEffect(() => {
      if (useHover) {
        setColor(constColors.yellowGreen)
        setInvertColor(constColors.darkGreen)

      } else {
        setColor(constColors.darkGreen)
        setInvertColor(constColors.yellowGreen)

      }
    })

    useLayoutEffect(() => {
      function updateHeight () {
        if (bodyScope.current) {
          setBodyScopeHeight(bodyScope.current.clientHeight);
        }
      }

      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }, []);

    useEffect(() => {
      if (useModal) {
        bodyAnimate(bodyScope.current,
          {
            // y:0
            height: bodyScopeHeight
          }, {
            duration: 0.5,
            type: 'spring'
          }
        )

        animate(scope.current, {
          scale: 1.05,
          x: '-50px',
        }, {
          duration: 0.5,
          type: 'spring'
        })

        iconAnimate(iconScope.current, {
          rotate:405,
          scale:1.5
        },{
          duration: 0.5,
          type: 'spring'
        })

      } else {
        bodyAnimate(bodyScope.current,
          {
            // y:'-200px'
            height: '0px'
          }, {
            duration: 0.5,
            type: 'spring'
          }
        )

        animate(scope.current, {
          scale: 1,
          x: '0px',
        }, {
          duration: 0.5,
          type: 'spring'
        })

        iconAnimate(iconScope.current, {
          rotate:0,
          scale:1
        },{
          duration: 0.5,
          type: 'spring'
        })
      }
    })

    return (
      <div
      >
        <div
          className=""
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onClick={() => {
            if (useModal) {
            }
            // navigate(`#heading-${Number(id) + 2}`)
            setModal(!useModal)
          }}

        >
            <GeneralSection
              id={`heading-${id}`} additionalClasses="border-b-[0.5px]
              transition delay-50 duration-100
              cursor-pointer
              z-50
              sticky top-[35px]
              " style={{
                backgroundColor: useColor,
                color: useInvertColor
              }}>
              <div className="flex flex-row justify-between items-end"
              >
                <div className="" ref={iconScope}>
                  <SectionFadeIn className={''}>
                    <MoveDownRight size={50} color={useInvertColor} />
                  </SectionFadeIn>
                </div>
                <div ref={scope}>
                  <SectionFadeIn
                    className={''}>
                    <Hero
                      className=" text-right "
                      words={heading}
                      duration={0.3}
                      stagger={0.05}
                    />
                  </SectionFadeIn>
                </div>
              </div>
            </GeneralSection>
            <div
              className=""
              ref={bodyScope}
              style={{
              // transform: 'translateY(-200px)'
              height: '0px'
            }}>
              <FullImageSection id="index-hero-picture" additionalClasses={'h-[50vh]'}>
                <img src={field.src} alt="electric lines" className="w-full"/>
              </FullImageSection>
              <GeneralSection id={`body ${id}`} additionalClasses=" ">
                <div >
                  <p className="text-3xl text-white">{ body }</p>
                </div>
              </GeneralSection>
            </div>
        </div>
      </div>
    )
}
