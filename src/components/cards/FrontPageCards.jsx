import Card from "./Card"

export default function FrontPageCards() {
    const servicesData = [
        {
          heading: 'General Contractor',
          body: 'I offer advanced tests for the intestines, hormones, and heavy metals to reveal hidden burdens on your body.'
        },
        {
          heading: 'Renewable Energy',
          body: 'I know how exhausting it can be to do it all by yourself, especially when you dont feel like yourself!'
        },
        {
          heading: 'Assessment',
          body: 'I offer advanced tests for the intestines, hormones, and heavy metals to reveal hidden burdens on your body.'
        }
    ]
    return (
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center py-24 md:py-32">
            {
                servicesData.map((item, idx) => {
                    return (
                        <Card heading={item.heading} body={item.body} key={idx}/>
                    )
                })
            }
        </div>
    )
}
