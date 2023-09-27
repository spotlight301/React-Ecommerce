const compare= (txt,sub)=> txt.toLocaleLowerCase().includes(sub.toLocaleLowerCase())

function filterData(data,filterTxt) {
    return data.filter(
        item => compare(item.name,filterTxt) || compare(item.brand,filterTxt)
    )
}

export default filterData