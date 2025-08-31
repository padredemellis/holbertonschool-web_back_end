export default function updateUniqueItems(mapa){
    if (!(mapa instanceof Map)){
        throw new Error ("Cannot process");
    }
    for(let [clave, valor] of mapa){
        if (valor === 1){
            mapa.set(clave,100);
        };
    };
}