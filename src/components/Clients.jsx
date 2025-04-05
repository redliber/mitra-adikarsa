'use client'
import clientPLN from '../assets/media/clients/client-pln.png'
import clientPLNPLUS from '../assets/media/clients/client-pln-plus.png'
import clientBit from '../assets/media/clients/client-bit.png'
import clientGBK from '../assets/media/clients/client-gbk.png'
import clientPatriot from '../assets/media/clients/client-patriot.png'
import clientSwatantra from '../assets/media/clients/client-swatantra.png'
import clientFiberstar from '../assets/media/clients/client-fiberstar.png'

import Marquee from "react-fast-marquee";
import { constColors } from '../lib/const'


export default function Clients() {
    const clientsPath = [ 
        clientPLN.src,
        clientPLNPLUS.src,
        clientBit.src,
        clientGBK.src,
        clientPatriot.src,
        clientSwatantra.src,
        clientFiberstar.src,
    ]
    return (
        <div className='flex flex-col align-middle items-center justify-center' 
        // style={{backgroundColor: constColors.white}}
        >
            <div className='w-full flex flex-row'>
                {   
                    clientsPath.map((item, idx) => (
                        <img src={item} alt="company-logo" className="m-2 w-[10vw]" />
                    ))
                }
            </div>

        </div>
    )
}