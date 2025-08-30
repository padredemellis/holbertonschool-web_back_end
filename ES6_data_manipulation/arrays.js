const tecnologias = [20, 30, 40, true, "React.js"]

console.log(tecnologias)
console.table(tecnologias)
console.log(tecnologias[0])

//Metodos de arreglos, agregar un elemento al arreglo
const tec = ['HTML','CSS', 'JavaScript', 'React', 'Node.js']
const nuevoArreglo = [...tec, "Nest.js"] //cree un nuevo arreglo copiando el anterior y le agregue una palabra al final
const otroArreglo = ["Python", ...nuevoArreglo] // aqui le puse una palabra a otro arreglo pero al principio]
console.table(otroArreglo)


tec.shift() //elimina el primer elemento del arreglo

const tec2 = tec.filter(function(tech){
    if(tech !== "HTML") {
        return tech
    }
})

const tec3 = tec.map(function(tech){
    if(tech === "Node.js") {
        return 'Nest.js'
    } else {
        return tech
    }
})
console.log(tec3)