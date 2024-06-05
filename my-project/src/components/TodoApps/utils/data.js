const dataGet = () => {
    return [
        {
            id : 1 ,
            title : "test 1",
            body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            createdArt : "2022-04-14T04:27:34.572Z",
            archive: false
        },
        {
            id : 2 ,
            title : "test 2",
            body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            createdArt : "2022-04-14T04:27:34.572Z",
            archive: false
        },
        {
            id : 3 ,
            title : "test 3",
            body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            createdArt : "2022-04-14T04:27:34.572Z",
            archive: false
        },
        {
            id : 4 ,
            title : "test 4",
            body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            createdArt : "2022-04-14T04:27:34.572Z",
            archive: false
        },
    ]
}


const showFormatedDates = () => {
    const option = {
        weekday : "long",
        years: "numeric",
        month: "long",
        day : "numeric"
    }
}

export {dataGet , showFormatedDates}