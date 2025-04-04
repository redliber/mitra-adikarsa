import Card from "./Card"

export default function FrontPageCards() {
    const servicesData = [
        {heading: 'Advanced Microbiology', body: 'I offer advanced tests for the intestines, hormones, and heavy metals to reveal hidden burdens on your body. Based on your results, I will create an individual lifestyle and supplement protocol to bring your body back into balance.'},
        {heading: 'Personal support', body: 'I know how exhausting it can be to do it all by yourself, especially when you dont feel like yourself! Ill be here to support you and maintain your vision whenever you feel overwhelmed or frustrated.'},
        {heading: 'Advanced Microbiology', body: 'I offer advanced tests for the intestines, hormones, and heavy metals to reveal hidden burdens on your body. Based on your results, I will create an individual lifestyle and supplement protocol to bring your body back into balance.'},
        {heading: 'A multidimensional approach', body: "I've realized that remedying chronic imbalances requires much more than just diet and exercise. In my work, scientific principles flow together with old traditional techniques and mental strengthening — something that is not possible with medication alone."},
        {heading: 'A multidimensional approach', body: "I've realized that remedying chronic imbalances requires much more than just diet and exercise. In my work, scientific principles flow together with old traditional techniques and mental strengthening — something that is not possible with medication alone."},
        {heading: 'Personal support', body: 'I know how exhausting it can be to do it all by yourself, especially when you dont feel like yourself! Ill be here to support you and maintain your vision whenever you feel overwhelmed or frustrated.'},
    ]
    return (
        <div className="flex flex-wrap gap-10 place-content-center">
            {
                servicesData.map((item, idx) => {
                    return (
                        <Card heading={item.heading} body={item.body}/>
                    )
                })
            }
        </div>
    )
}