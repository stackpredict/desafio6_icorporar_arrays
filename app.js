class Producto{
    constructor(nombre, precio, detalle, cantidad){
        this.nombre = nombre;
        this.precio  = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;

    }
    sumarIva() {
        return this.precio  *1.21;

    }
    vender() {
        this.disponible = false;
    }
    precioSugerido() {
        return this.precio *1.21  *1.25;
    }
}
let arrayProductos = [];
do {
    var comprobacion = prompt("Ingrese un nombre del producto o fin para terminar de agregar");
    if (comprobacion === "fin"|| comprobacion === "FIN" || comprobacion === "Fin" ) {
        break;
    }else {
        nombreP = comprobacion;
        const precioP = prompt("Ingrese el precio del producto");
        const detalleP = prompt("Ingrese el detalle  del producto");
        const cantidadP = prompt("Ingrese la cantidad comprada del producto");
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));

        
    }

}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")
console.log(arrayProductos);
// document.write(<h3> El precio de costo del producto a calcular es: "+precioCostoM+"</h3>") 

for (let producto of arrayProductos) {
    document.write("<h3> El producto ingresado es:  " + producto.nombre + "</h3>");
    document.write("<h3> El  detalle del producto ingresado es:  " + producto.detalle + "</h3>");
    document.write("<h3> La cantidad en stock del producto producto ingresado es:  " + producto.cantidad + "</h3>");
    document.write("<h3> El  precio del producto con IVA es:  " + producto.sumarIva() + "</h3>");

    console.log(producto.nombre);
    console.log(producto.detalle);
    console.log(producto.cantidad);
    console.log(producto.sumarIva());

}
