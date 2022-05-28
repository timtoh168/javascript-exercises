const removeFromArray = function(list) {
    let args = Array.prototype.slice.call(arguments, 1);

    for (let i=0;i<args.length;i++) {
        for (let j=0;j<list.length;j++) {
            if (args[i]===list[j]){
                list.splice(j,1);
            }
        }
        
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
