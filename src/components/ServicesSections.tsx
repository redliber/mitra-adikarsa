import React from "react"
import ServiceSection from "./sections/ServiceSection"

export default function ServicesSections({
    children
}: {
    children?: React.ReactNode
}) {
    const servicesDetails = [
        {heading: 'Kontraktor Umum', body: 'Donec ultrices eu felis ac vehicula. Duis tempor ex tortor, quis consequat turpis tempus vel. Nullam ut pretium diam. Nam cursus orci et massa aliquam, consequat posuere nisi volutpat.'},
        {heading: 'Konsultan Perancanaan', body: 'Donec et lectus quis lacus gravida fermentum. Cras mattis, turpis laoreet tristique auctor, mi turpis porttitor sem, quis pretium turpis leo vitae lectus.'},
        {heading: 'Penyediaan Tenaga Kelistrikan', body: 'Cras sollicitudin vitae neque sit amet rutrum. Etiam lacinia elit dolor. Nulla scelerisque justo rutrum, faucibus dui eget, euismod metus.'},
        {heading: 'Pemeliharaan Instalasi Tenaga Listrik', body: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer eget lectus vitae nulla hendrerit rhoncus.'},
        {heading: 'Penyediaan Energi Baru dan Terbarukan', body: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam luctus feugiat semper.'},
        {heading: 'Assessment dan Pengujian Instalasi Listrik', body: 'Morbi vitae magna blandit, lobortis nulla sed, suscipit est. Phasellus quam orci, lobortis sagittis nisi a, malesuada interdum lacus.'},
        {heading: 'Infrastruktur Telekomunikasi Fiber Optik', body: 'Pellentesque sit amet diam ultrices, luctus lorem quis, aliquam justo. Phasellus finibus est vitae blandit ornare.'},
    ]
    return (
        <>
            {
                servicesDetails.map((item, idx) => {
                    return (
                        <ServiceSection id={`service #${idx}`} heading={item.heading} body={item.body}/>
                    )
                })
            }
        </>
    )
}