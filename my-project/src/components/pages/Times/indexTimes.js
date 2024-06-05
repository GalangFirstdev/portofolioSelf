function FormatDUration (seconds) {
    
    if (seconds === 0 ) return "now"


    const Interval = [
        ['year' , 60 * 60 * 24 * 365],
        ['day' , 60 * 60 * 24 ],
        ['hour' , 60 * 60 ],
        ['minute'  , 60 ],
        ['second'  , 1 ]
    ]

    const dataSeconds = [];
    for ( const [name , durasi ] of Interval) {
        if (seconds >= durasi) {
            const amount = Math.floor(seconds / durasi);
            seconds %= durasi;
            dataSeconds.push(`${amount} ${name}${amount !== 1 ? 's' : ''}` )
        }
    }

        if (dataSeconds.length > 1) {
            const dataSecondEnd = dataSeconds.pop();
            return dataSeconds.join(", ") + " and " + dataSecondEnd;
        } else {
            return dataSeconds[0]
        }


}
    // console.log(FormatDUration(5789));

export default FormatDUration