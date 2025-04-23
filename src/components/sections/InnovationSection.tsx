'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Hero from "../texts/Hero"
import Caption from "../texts/Caption"
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks"

export default function InnovationSection() {
  const bodyRef = useRef<HTMLDivElement>(null)
  const [useHeight, setHeight] = useState(bodyRef.current?.clientHeight)
  const [usePercentage, setPercentage] = useState(0)

  const size = useWindowSize();
  const [{ x, y }, scrollTo] = useWindowScroll();


  const [useTopPos, setTopPos] = useState<number | undefined>(0)
  const copyWriting = [
    'Inovasi Teknologi Ketenagalistrikan Berlanjutan',
    'Kebijakan K3 Operasi dan Kemitraan serta Solusi',
    'Komitmen Tenaga Ahli',
    'Pasar Nasional dan Adaptasi Kebutuhan Pasar',
  ]

  function scaleValue(value:number, originalRange:number[], targetRange:number[]) {
    return (value - originalRange[0]) * (targetRange[1] - targetRange[0]) / (originalRange[1] - originalRange[0]) + targetRange[0];
  }

  useEffect(() => {
    const topPos = bodyRef.current?.getBoundingClientRect()
    const offsetPos = bodyRef.current?.offsetTop
    const offsetParent = bodyRef.current?.offsetParent
    setTopPos(offsetPos)
    // console.log('POS -->', topPos)
    // console.log('offsetPos -->', offsetPos)
    // console.log('offsetParent -->', offsetParent?.getBoundingClientRect())

    const percentage = scaleValue(y!, [offsetPos! - (size?.height! * 0.5), offsetPos! + bodyRef.current?.clientHeight!], [0, 100])
    setPercentage(percentage + percentage * 0.5)
    console.log('percentage --> ', percentage)
    console.log('size --> ', size)

  }, [useWindowSize, y])
  return (
    <div className="h-min-[200vh] relative w-full" ref={bodyRef}>
      <div className="flex flex-col w-full">
        {
          copyWriting.map((item, index) => {
            const align = index % 2 == 0 ? ` text-left` : ' text-right place-self-end'

            return (
              <div className="my-40">
            		<Hero
             			duration={1}
             			stagger={0.05}
             			filter={true}
             			className={'text-yellow-green' + align}
             			words={String(index+1)}/>
            		<Caption
                  threshold={0.2}
             			duration={1}
             			stagger={0.01}
             			filter={true}
             			className={` w-1/3` + align}
             			words={item}/>
              </div>
          )})
        }
      </div>
      <div className="h-full place-self-center w-[10%] absolute top-0 left-[45%] origin-center -z-50" style={{
        background: `linear-gradient(
          to bottom,
          var(--color-yellow-green) ${usePercentage}%,
          var(--color-zinc-100) ${usePercentage}%
          )`
      }}></div>
    </div>
  )
}
