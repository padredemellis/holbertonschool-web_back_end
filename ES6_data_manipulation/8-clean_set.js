export default function cleanSet(set, startString){
    let result = [];
    for (let a of set){
        if (a.startsWith(startString)){
            result.push(a.substring(startString.length));
        };
    };
    return result.join('-'); 
}