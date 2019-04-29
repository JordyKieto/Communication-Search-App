module.exports = function (bst, relationship, comparison, value){
    let allValues = bst.betweenBounds({[comparison]: value})
    if (relationship == 'sent'){
        let sent = allValues.map((val)=>{
            return val.source
        });
        console.log([...new Set(sent)])
    }
    else if (relationship == 'recieved'){
        let recieved = allValues.map((val)=>{
            return val.target
        });
        console.log([...new Set(recieved)])
    }

    else if (relationship == 'sent/recieved'){
        console.log(allValues)
    }
}