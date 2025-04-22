import React from "react"
import ServiceSection from "./sections/ServiceSection"
import MailingListSection from "./sections/MailingListSection"

export default function ServicesSections({
    children
}: {
    children?: React.ReactNode
}) {
    const servicesDetails = [
        {
            heading: 'Kontraktor Umum',
            body: 'Kami ahli dalam perancangan, pembangunan, dan implementasi jaringan. Listrik MV hingga LV, mencakup SKTM, SKTR, SUTM, SUTR, Gardu. Distribusi, Panel Industri, Genset, dan Infrastruktur Lainnya. Kami bekerja. Dengan penyedia material berkualitas, Baik Nasional maupun Internasional, sesuai standar industri.'},
        {
            heading: 'Konsultan Perancanaan',
            body: 'Kami menyediakan SDM berkualitas untuk perencanaan Infrastruktur. Kelistrikan di Sektor Bisnis, Industri, dan Sistem Kompleks lainnya. Tim Profesional kami siap memberikan layanan terbaik sesuai kebutuhan.'},
        {
            heading: 'Penyediaan Tenaga Kelistrikan',
            body: 'Kami menyediakan tenaga kerja terampil dan bersertifikat, termasuk teknisi listrik dan operator, untuk mendukung operasional serta pemeliharaan sistem kelistrikan di berbagai sektor bisnis dan industri. SDM kami memiliki kompetensi sesuai kebutuhan era Industri 4.0.'
        },
        {
            heading: 'Pemeliharaan Instalasi Tenaga Listrik',
            body: 'Kami menyediakan layanan pemeliharaan rutin, preventif, dan prediktif untuk komponen kelistrikan seperti trafo, panel listrik, dan cubicle. Dengan inspeksi berkala dan teknologi canggih seperti thermal imaging dan ultrasonic vibration analysis, kami memastikan sistem beroperasi optimal, mencegah downtime, dan menghindari kecelakaan.'
        },
        {
            heading: 'Sertifikat Kelistrikan SLO',
            body: 'Kami membantu pengurusan Sertifikat Laik Operasi (SLO) untuk memastikan instalasi listrik aman, legal, dan sesuai standar. Layanan kami mencakup inspeksi, rekomendasi perbaikan, dan pendampingan hingga sertifikat terbit.'
        },
        {
            heading: 'Infrastruktur Kendaraan Listrik',
            body: 'Kami menyediakan solusi infrastruktur charging station untuk kendaraan listrik, mencakup perancangan, instalasi, dan pemeliharaan. Dengan peralatan berkualitas dan standar keamanan tinggi, kami mendukung transisi ke energi ramah lingkungan.'
        },
        {
            heading: 'Fiber Optik',
            body: 'Perencanaan dan desain jaringan, pembangunan dan instalasi fiber optik, pemeliharaan dan troubleshooting, serta upgrade dan migrasi jaringan.'
        },
        {
            heading: 'Sipil',
            body: 'Konstruksi sipil, pembangunan jalan, jembatan, gedung, dan infrastruktur lainnya.'
        }
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
            <MailingListSection id="services-mailing-section"/>
        </>
    )
}
