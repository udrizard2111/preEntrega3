const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio 
    this.disponibilidad = stock

}

let producto1 = new Producto ("viandas congeladas", 3.000,100)
let producto2 = new Producto ("Mermeladas Caseras",1.500,100)
let producto3 = new Producto ("Budines Integrales",2.000,100)
let producto4 = new Producto ("Panes Integrales",1.300,100)
let producto5 = new Producto ("Alfajores",800,100)

let lista = [producto1,producto2,producto3,producto4,producto5]

const filtrarBtn = document.getElementById("filtar")
filtrarBtn.addEventListener("click", ()=>{filtrarProductos})


 function agregarProducto(){
    let nombre = prompt("ingresa el nombre del producto").trim()
    let precio = parseFloat (prompt("ingresa el precio"))
    let disponibilidad = parseInt(prompt("ingrsa disponibilidad"))

    if (isNaN(precio) ||nombre==="" || isNaN(disponibilidad)){
        alert("ingrese datos validos")
        return;
    }

    let producto = new Producto(nombre,precio,disponibilidad)
    lista.push(producto)
    console.table(lista)


 }
 
 

function filtrarProductos(){
    const body = document.querySelector("body")
    const input = document.getElementById("filtrarP").value 
    const palabraClave = input.trim().toUpperCase()

    if(resultado.length >0){
        const container = document.createElement("div")

        resultado.forEach((producto)=>{
            const card = document.createElement("div")

            const nombre= document.createElement("h2")
            nombre.textContent= producto.nombre
            card.appendChild(nombre)

            const precio = document.createElement("p")
            precio.textContent = precio: ${producto.precio}
            card.appendChild(precio)

            const stock = document.createElement("p")
            stock.textContent = stock: ${producto.stock}
            card.appendChild(stock)

            container.appendChild(card)


        })

        body.appendChild(container)
    }
}