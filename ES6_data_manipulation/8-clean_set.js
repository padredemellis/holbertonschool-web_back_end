export default function cleanSet(set, startString){
    let result = [];
    for (_ of set){
        if (_.startsWith(startString)){
            result.push(_.substring(startString.length));
        };
    };
    return result.join('-'); 
}