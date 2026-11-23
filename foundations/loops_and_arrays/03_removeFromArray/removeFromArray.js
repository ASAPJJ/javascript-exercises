const removeFromArray = function(items, ...others) {
    /*
    let result = []
    for(let i = 0; i<items.length;i++){
        if(!others.includes(items[i])){
            result.push(items[i])
        }
    }
    return result;
    */
    return items.filter((item) => 
       !others.includes(item)
    );
};

// Do not edit below this line
module.exports = removeFromArray;
