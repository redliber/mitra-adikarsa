'use client'

import { useState } from 'react';

import Hero from '../texts/Hero';
import { useWindowSize } from '@uidotdev/usehooks';

export default function Organization() {

    const {width} = useWindowSize();

    const operationalNode = [
        {
            label: 'Budiman',
            expanded: true,
            data: {role: 'Manajer Operasional'}, 
            children: [
                {
                    label: 'Ace Badrudin',
                    expanded: true,
                    data: {role: 'Pelaksana Lapangan'},
                },
                {
                    label: 'Awaldi',
                    expanded: true,
                    data: {role: 'Pelaksana Lapangan'},
                },
                {
                    label: 'Agung Sudrajat',
                    expanded: true,
                    data: {role: 'Pelaksana Lapangan'},
                },
                {
                    label: 'Arif Anggara',
                    expanded: true,
                    data: {role: 'Pelaksana Lapangan'},
                },
            ]
        }
    ]

    const SingleNode = ({name, role}: {name: string, role: string}) => {
        return (
            <div className=' hover:bg-yellow-green/50 hover:text-dark-green text-[#e5e7eb] border-[0.1px] border-white/15 p-3 justify-items-center text-center flex flex-col gap-1 min-w-[120px]'>
                <div className="node-header font-bold text-md leading-[1.2rem]">{name}</div>
                <div className="node-content text-xs text-yellow-green">
                    <div>{role}</div>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full'>
            <div className='flex flex-col gap-10 w-full overflow-x-scroll p-12 border-[0.1px] border-yellow-green/50'>
                {/* <Chart data={
                    [
                        {
                            label: 'Silvia Kirana',
                            expanded: true,
                            data: {role: 'Direktur Utama'},
                            children: [
                                {
                                    label: "Puspa Gita",
                                    expanded: true,
                                    data: {role: "Direktur Pemasaran"},
                                },
                                {
                                    label: "Adjie Darmajie",
                                    expanded: true,
                                    data: {role: "Direktur Operasional"},
                                    children: operationalNode
                                },
                                {
                                    label: "Titis H. Marlina",
                                    expanded: true,
                                    data: {role: "HRD"},
                                    children: [
                                        {
                                            label: "Revita Eliyasari",
                                            expanded: true,
                                            data: {role: "Finance"},
                                        },
                                        {
                                            label: "Rizka L. Agustin",
                                            expanded: true,
                                            data: {role: "Administrasi"},
                                        },

                                    ]
                                },
                            ] 

                        }
                    ]
                }/> */}

                <div className='flex flex-col gap-10 w-[1000px]'>
                    <div className='flex flex-col w-full'>
                        <SingleNode name="Silvia Kirana" role='Direktur Utama'/>
                        <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                        <div className=' border-t-[1px] border-[#e5e7eb] w-full self-center'></div>
                        <div className='flex flex-row gap-20 justify-between'>
                            <div className='flex flex-col justify-center place-self-start'>
                                <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                <SingleNode name="Puspa Gita" role='Direktur Pemasaran'/>
                            </div>
                            <div className='flex flex-col justify-center place-self-start'>
                                <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                <SingleNode name="Adjie Darmajie" role='Direktur Operasional'/>
                                <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                <SingleNode name="Budiman" role='Manajer Operasional'/>
                                <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                <div className=' border-t-[1px] border-[#e5e7eb] w-full self-center'></div>
                                <div className='flex flex-row justify-center place-self-start'>
                                    <div className='flex flex-col justify-center place-self-start'>
                                        <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                        <SingleNode name="Ace Badrudin" role='Pelaksana Lapangan'/>
                                    </div>
                                    <div className='flex flex-col justify-center place-self-start'>
                                        <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                        <SingleNode name="Awaldi" role='Pelaksana Lapangan'/>
                                    </div>
                                    <div className='flex flex-col justify-center place-self-start'>
                                        <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                        <SingleNode name="Agung Sudrajat" role='Pelaksana Lapangan'/>
                                    </div>
                                    <div className='flex flex-col justify-center place-self-start'>
                                        <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                        <SingleNode name="Arif Anggara" role='Pelaksana Lapangan'/>
                                    </div>
                                </div>


                            </div>
                            <div className='flex flex-col justify-center place-self-start'>
                                <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                <SingleNode name="Titis H. Marlina" role='HRD'/>
                                <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                <div className=' border-t-[1px] border-[#e5e7eb] w-full self-center'></div>
                                <div className='flex flex-row justify-center place-self-start'>
                                    <div className='flex flex-col justify-center place-self-start'>
                                        <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                        <SingleNode name="Revita Eliyasari" role='Finance'/>
                                    </div>
                                    <div className='flex flex-col justify-center place-self-start'>
                                        <div className=' border-l-[1px] border-[#e5e7eb] h-5 self-center'></div>
                                        <SingleNode name="Rizka L. Agustin" role='Administrasi'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-row w-full'>
                        <SingleNode name="Teguh Nugraha" role='E-Procurement'/>
                        <div className=' border-b-[1px] border-[#e5e7eb] w-5 self-center'></div>
                        <SingleNode name="Yayuk Rahayu" role='E-Procurement'/>
                    </div>
                    <div className='flex flex-row w-full'>
                        <SingleNode name="Yenny Hirmaleny" role='Perpajakan'/>
                        <div className=' border-b-[1px] border-[#e5e7eb] w-5 self-center'></div>
                        <SingleNode name="Saefudin" role='Akuntan'/>
                    </div>
                    <div className='flex flex-row min-w-[1000px]'>
                        <SingleNode name="Idham Budiyana" role='Logistik'/>
                        <div className=' border-b-[1px] border-[#e5e7eb] w-5 self-center'></div>
                        <SingleNode name="Omin" role='Bagian Umum'/>
                        <div className=' border-b-[1px] border-[#e5e7eb] w-5 self-center'></div>
                        <SingleNode name="Tatang Matofani" role='Pekerja Umum'/>
                        <div className=' border-b-[1px] border-[#e5e7eb] w-5 self-center'></div>
                        <SingleNode name="Saefulloh" role='Pekerja Umum'/>
                    </div>
                </div>
            </div>
        </div>

    )
}

// function NodeTemplate (node:any) {
//     const Role = () => {
//         if (node.data?.role) {
//             return (
//                 <div className="node-content text-xs text-yellow-green">
//                     <div>{node.data.role}</div>
//                 </div>
//             )
//         }
//     }

//     return (
//         <div className=' hover:bg-yellow-green/50 text-[#e5e7eb] hover:text-dark-green border-[0.1px] border-white/15 p-3 justify-items-center text-center flex flex-col gap-1 min-w-[120px]'>
//             <div className="node-header font-bold text-md leading-[1.2rem]">{node.label}</div>
//             <Role/>
//         </div>
//     )
// }

// function Chart({data} : {data:any[]}) {

//     return (
//         <div className="organizationchart-demo">
//             <OrganizationChart
//                 className='w-full align-middle justify-items-center'
//                 value={data}
//                 selectionMode='multiple'
//                 // @ts-ignore
//                 onSelectionChange={(e) => setSelection(e.data)}
//                 nodeTemplate={NodeTemplate}
//                 />
//             <style>
//                 {
//                     `
//                     .p-node-toggler {
//                         display: none !important;
//                         }
    
//                     .p-organizationchart-nodes {
//                         vertical-align: top;
//                     }
//                     .p-organizationchart .p-organizationchart-node-content {
//                         background: none;
//                         border: none;
//                     }
//                     .p-organizationchart .p-organizationchart-node-content {
//                         padding: 0px;
//                     }
                                    
//                     `
//                 }
//             </style>
//         </div>
//     )
// }


