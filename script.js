function bañoParaPerros() {
    alert("Bienvenido a la ducha preferida de tu compañero perruno!");
    let tamaño;
    let tiempoDeBaño = 0;

    while (true) {
        tamaño = prompt("¿Tu perro es pequeño, mediano o grande?");
        switch (tamaño) {
            case "pequeño":
                tiempoDeBaño = 30;
                alert("El baño puede durar aproximadamente " + tiempoDeBaño + " minutos.");
                return
            case "mediano":
                tiempoDeBaño = 45;
                alert("El baño puede durar aproximadamente " + tiempoDeBaño + " minutos.");
                return
            case "grande":
                tiempoDeBaño = 60;
                alert("El baño puede durar aproximadamente " + tiempoDeBaño + " minutos.");
                return
            default:
                alert("No reconozco ese tamaño de perro. Por favor, vuelve a intentarlo.");
        }
    }
}
function pelajePerruno() {
    let pelajeShampoo;
    while (true) {
        pelajeShampoo = prompt("tu perro tiene pelo largo, intermedio o corto?")
        switch (pelajeShampoo){
            case "largo":
                alert("vamos a usar shampoo y acondicionador!!");
                return
            case "intermedio":
                alert("Shampoo, acondicionador y peindaro para sacar pelo");
                return
            case "corto":
                alert("solo shampoo!!");
                return
            default:
                alert("No reconozco ese tipo de pelo, tu perro tiene pelo corto, intermedio o largo?");
        }
    }
}

function tiendaPerruna() {

    let productos = [
        {nombre: "pelota", precio: 500},
        {nombre: "hueso", precio: 600},
        {nombre: "poncho", precio: 1500},
    ];
    
    let valorProductos = 0;

    let comprar = confirm("Bienvenido a la tienda perruna! Quiere comprarle algo bonito a su amiguirijillo?")
    
    if(comprar == true){
        let productoAComprar = prompt("¿Qué quiere comprar? hueso, poncho, pelota")
    
        while(comprar){
            switch(productoAComprar){
                case "hueso":
                    productos.push("hueso") 
                    valorProductos += 600; 
                    break
                case "poncho":
                    productos.push("poncho")
                    valorProductos += 1500;   
                    break
                case "pelota":
                    productos.push("pelota")
                    valorProductos += 500;   
                    break
                default:
                    alert("Disculpe, no tenemos ese producto!")
    
            }
            comprar = confirm("¿Quiere comprar algo más?");
            if(comprar){
                productoAComprar = prompt("¿Qué quiere comprar? Hueso, Poncho, o Pelota?").toLowerCase();
            }
        }
    
        let resumenCompra
        for (const producto of productos) {
        }
        resumenCompra = "Total: $" + valorProductos + ". Gracias por su compra.";
        alert(resumenCompra);
    } else {
        alert("Gracias por su visita!");
    }
}
bañoParaPerros();
pelajePerruno()
tiendaPerruna();