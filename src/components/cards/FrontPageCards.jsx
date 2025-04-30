import Card from "./Card"

export default function FrontPageCards({data}) {
    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center py-24 md:py-32">
            {
                data.map((item, idx) => {
                    return (
                        <Card heading={item.heading} body={item.body} key={idx}/>
                    )
                })
            }
        </div>
    )
}
