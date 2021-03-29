document.getElementById("boton").addEventListener('click',mostrar);

function mostrar(evento){
    var inputs  =    document.getElementsByClassName("formulario-input");
    var contenidos = document.getElementsByClassName("contenido");
    for(var i=0;i<contenidos.length;i++)
        contenidos[i].innerHTML=(inputs[i].name).replace(/^\w/, (c) => c.toUpperCase())+": <i class=\"texto-nuevo\">"+ inputs[i].value+"<\i>";
    /*         
    Expresion Regular: /Expresion/
        /^\w/
        -> "^"  indica el comienzo del string
        -> "\w" indica que sea palabra
        Por lo tanto, la expresion regular buscara
        la primera letra del string que en dado caso
        se guardara en la variable "c" luego la convierte
        en mayuscula.

    */ 
}