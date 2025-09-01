export default function guardrail(mathFunction){
    const queue = [];
    try{
        let numero = mathFunction();
        queue.push(numero);
    }    
    catch(error){
        queue.push(error.toString());
    } 
    finally {
        queue.push("Guardrail was processed");
    }
    return queue;
}