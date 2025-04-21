import Card from "./Card"

export default function FrontPageCards() {
    const servicesData = [
        {
            heading: 'General Contractor', 
            body: 'I offer advanced tests for the intestines, hormones, and heavy metals to reveal hidden burdens on your body.'},
        {heading: 'Renewable Energy Supplier', body: 'I know how exhausting it can be to do it all by yourself, especially when you dont feel like yourself!'},
        {heading: 'Assessment', body: 'I offer advanced tests for the intestines, hormones, and heavy metals to reveal hidden burdens on your body.'},
        {heading: ' Certiﬁcation', body: "I've realized that remedying chronic imbalances requires much more than just diet and exercise."},
        {heading: ' Operation', body: "I've realized that remedying chronic imbalances requires much more than just diet and exercise."},
        {heading: 'Maintenance', body: 'I know how exhausting it can be to do it all by yourself, especially when you dont feel like yourself!'},
    ]
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-10 justify-center">
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