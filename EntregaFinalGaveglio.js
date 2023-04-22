let nuevoCliente = []

class Cliente {
    constructor (nombre, apellido, edad, salario, capital, cuotas, ){
        this.nombre=nombre;
        this.apellido= apellido;
        this.edad = edad;
        this.salario=salario
        this.capital = capital;
        this.cuotas= cuotas;

    }
}



// Mensaje de bienvenida  con libreria
const button = document.getElementById("button") 

button.addEventListener("click",function(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Bienvenido a CoderBank, puedes completar los datos',
        showConfirmButton: false,
        timer: 1000
    })
    
});





// Variables 

const calcularPrestamoCliente = document.querySelector('.formulario-datos')
const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector("#input-apellido")
const inputEdad = document.querySelector("#input-edad")
const inputSalario = document.querySelector("#input-salario")
const inputCapitalPrestamo = document.querySelector("#input-capital")
const inputCuotasPrestamo = document.querySelector("#input-cuotas")


// Formatear numeros 



// Eventos, asincronismo, ternario

let form = document.querySelector('.formulario-datos')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let nombre = e.target[0].value
        let envio = document.createElement('div')
        envio.innerHTML = ` ${nombre} gracias por su visita `
        document.body.appendChild(envio)
        setTimeout(() => {
        document.body.removeChild(envio)
        }, 5000)

        let salario = e.target[3].value 

        const clienteVip = (salario >= 400.000) ? true : false
      
        clienteVip ? Swal.fire ('Ud. puede ser cliente Vip, consultenos') 
      
        : Swal.fire ("consulte nuestros beneficios especiales")



       
    })
    
    
const btnNucleo = document.createElement("button");

btnNucleo.id = 'btnNucleo';

btnNucleo.innerHTML = 'Haz click para participar del sorteo de bonificacion de tasa';

btnNucleo.addEventListener('click', function () {
    const h3 = document.createElement('h3');
    h3.innerHTML = 'Tomaremos tus datos de contacto para el proximo sorteo';
    document.body.appendChild(h3);
    setTimeout(() => {
        document.body.removeChild(h3)
    }, 3000)

})
document.body.appendChild(btnNucleo);

btnNucleo.addEventListener('click', () => {
   
    Toastify({
        text: "Click aquí para cargar tus datos de contacto",
        duration: 3000,
        destination: 'https://www.coderbankdatos.com' //ejemplo de pagina
    }).showToast();


})

// Funciones 



let valorCuotasPrestamo = 0
let prestamoTotal = 0
let tasadeinteres=0.035



function calcularCuotas(capital, tasadeinteres, cuotas) {
    valorCuotasPrestamo = ((capital + (capital*tasadeinteres)) / cuotas);
}

function calcularPrestamo (cuotasPrestamo, cuotas) {
    prestamoTotal = cuotasPrestamo * cuotas
}

const prestamo = ( array ) => {
    const contenedor = document.querySelector(".informacion-prestamo")
    let simulacion = ""
    array.forEach((datoArray) => {
        calcularCuotas(datoArray.capital, tasadeinteres, datoArray.cuotas)
        calcularPrestamo(valorCuotasPrestamo, datoArray.cuotas)
        
        simulacion += `
            <div class= "informacion">
                <p> 
                 <br>
                    Usted solicito un prestamo de ${(datoArray.capital).toLocaleString()} a abonar en ${(datoArray.cuotas).toLocaleString()} mensuales. <br>
                    El valor de cada cuota es de: $${(valorCuotasPrestamo).toLocaleString()} y el total a abonar por el mismo es de: $${prestamoTotal.toLocaleString()}.
                    
                    <br>
                </p>
            </div>
        `
    })
    contenedor.innerHTML = simulacion


}
calcularPrestamoCliente.onsubmit = ( evento ) => {
    evento.preventDefault()
    if (inputNombre.value === '' || inputApellido.value === '' || inputEdad.value === '' || inputSalario.value === '' || inputCapitalPrestamo.value === '' || inputCuotasPrestamo.value === '' ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe llenar los campos de informacion para generar el prestamo',
           
          })
       
    } else {
        nuevoCliente.push({
            nombre: inputNombre.value,
            apellido: inputApellido.value,
            edad: Number(inputEdad.value),
            salario: Number (inputSalario.value),
            capital: Number(inputCapitalPrestamo.value),
            cuotas: Number(inputCuotasPrestamo.value),
        })

        calcularPrestamoCliente.reset()

        datoArray = nuevoCliente[nuevoCliente.length - 1]

        if (datoArray.length === 0) {
        console.log("no hay datos")
}

        prestamo(nuevoCliente)

        //local storage

        localStorage.clear
        localStorage.setItem("datosNuevoCliente", JSON.stringify(nuevoCliente))
        console.log(nuevoCliente)


        // let datosAlmacenadosNuevoCliente = JSON.parse(localStorage.getItem('datosNuevoCliente'))

        
        // if (datosAlmacenadosNuevoCliente != null) {
        // let array = JSON.parse(datosAlmacenadosNuevoCliente);

        //     array.forEach(nuevoCliente => { nuevoCliente.capital += (+1000)});
        //     localStorage.setItem('datosNuevoCliente', JSON.stringify(array));
        //     console.log(array)

        //     }

    
            
            
    }
}


const btn7 = document.createElement("button");

btn7.id = 'btn7';

btn7.innerHTML = 'Mostrar montos solicitados ';

btn7.addEventListener('click', function () {
    const prestamos = JSON.parse(localStorage.getItem("datosNuevoCliente")) || [];

if (prestamos.length > 0) {
	mostrarPrestamos(prestamos);
}         
                     
});
document.body.appendChild(btn7);


const btn9 = document.createElement("button");

btn9.id = 'btn9';

btn9.innerHTML = 'Mostrar montos mayores a 50000 ';

btn9.addEventListener('click', function () {
    const prestamos = JSON.parse(localStorage.getItem("datosNuevoCliente")) || [];

if (prestamos.length > 0) {
	filtrarPrestamos(prestamos);
}         
                     
});
    
document.body.appendChild(btn9);



const btn10 = document.createElement("button");

btn10.id = 'btn10';

btn10.innerHTML = 'Mostrar montos ordenados de menor a mayor ';

btn10.addEventListener('click', function () {
    const prestamos = JSON.parse(localStorage.getItem("datosNuevoCliente")) || [];

if (prestamos.length > 0) {
	ordenarPrestamos(prestamos);
}         
                     
});
document.body.appendChild(btn10);

    const mostrarPrestamos = (array) => {
	const contenedor = document.querySelector(".informacion-prestamo");
	let simulacion = "";
	array.forEach((prestamo) => {
		simulacion += `
	<div class= "informacion">
	<p><br>
	Nombre : ${prestamo.nombre}
	</p>
	<p>
	Apellido: ${prestamo.apellido}
	</p>
	<p>
	Capital: ${(prestamo.capital).toLocaleString()}
	</p>
	<p>
	Cuotas: ${(prestamo.cuotas).toLocaleString()}
	</p>
	<hr/>
	</div>
	`;
	});
	contenedor.innerHTML = simulacion;
}

const filtrarPrestamos = (array) => {
    const prestamosfiltrados =array.filter((prestamo)=>prestamo.capital> 50000)
	const contenedor = document.querySelector(".informacion-prestamo");
	let simulacion = "";
	prestamosfiltrados.forEach((prestamo) => {
		simulacion += `
	<div class= "informacion">
	<p><br>
	Nombre : ${prestamo.nombre}
	</p>
	<p>
	Apellido: ${prestamo.apellido}
	</p>
	<p>
	Capital: ${(prestamo.capital).toLocaleString()}
	</p>
	<p>
	Cuotas: ${(prestamo.cuotas).toLocaleString()}
	</p>
	<hr/>
	</div>
	`;
	});
	contenedor.innerHTML = simulacion;
};


const ordenarPrestamos = (array) => {
    const prestamosOrdenados =array.sort((prestamo1, prestamo2)=>prestamo1.capital-prestamo2.capital)
	const contenedor = document.querySelector(".informacion-prestamo");
	let simulacion = "";
	prestamosOrdenados.forEach((prestamo) => {
		simulacion += `
	<div class= "informacion">
	<p><br>
	Nombre : ${prestamo.nombre}
	</p>
	<p>
	Apellido: ${prestamo.apellido}
	</p>
	<p>
	Capital: ${(prestamo.capital).toLocaleString()}
	</p>
	<p>
	Cuotas: ${(prestamo.cuotas).toLocaleString()}
	</p>
	<hr/>
	</div>
	`;
	});
	contenedor.innerHTML = simulacion;
};



                // fetch

                const btn8 = document.createElement("button");

                btn8.id = 'btn8';
                
                btn8.innerHTML = 'Clientes que recomiendan CoderBank ';
                
                btn8.addEventListener('click', function () {       

                function cargarClientes(){
               (fetch('data.json'))

                .then(res=> res.json())
                .then ((clientesFetch) => {

                    
                let h4 = document.createElement("h4");
                h4.innerHTML = `<h4><br> Clientes que obtuvieron su prestamo al instante:</h4>`;
                document.body.appendChild(h4);

                setTimeout(() => {
                document.body.removeChild(h4)
                    } , 5000)  

                    clientesFetch.forEach((cliente) => {
                    const div = document.createElement('div')
                    div.innerHTML = ` <br>
                        <td>Cliente: ${cliente.id},</td>
                        <td>Nombre: ${cliente.nombre},</td>
                        <td>Apellido: ${cliente.apellido},</td>
                        <td>Capital solicitado: $${(cliente.capital).toLocaleString()},</td>
                        <td>Cantidad de cuotas: ${(cliente.cuotas).toLocaleString()}</td>
                        </br>
                        
                    `

                    document.body.appendChild(div)

                    setTimeout(() => {
                        document.body.removeChild(div)
                        }, 5000)

         
                    });
                    
                })
                .catch(error=> console.log("no se pudo leer el archivo:" + error.message))
            }
                    cargarClientes();

                });

                document.body.appendChild(btn8);



                // // Nombre y mail de clientes ganadores con async await desde API

                    const btn5 = document.createElement("button");

                    btn5.id = 'btn5';
                    
                    btn5.innerHTML = ' Datos ganadores del sorteo ';
                    
                    btn5.addEventListener('click', function () {

                        async function obtenerJson() {
                            try {
                                const resp = await fetch('https://jsonplaceholder.typicode.com/users')
                                const info = await resp.json()
                                const h5 = document.createElement('h5')
                                h5.innerHTML=` Clientes ganadores de la semana pasada`
                                document.body.appendChild(h5)
                                           
                
                        
                                         info.forEach ((user) => {
                                            
                                            const li = document.createElement('li')
                                            li.innerHTML = `
                                            <td>${user.username}</td>
                                            <p>${user.email}</p>
                                        `
                                            document.body.appendChild(li)

                                           
                                        })

                                
        
                                    } catch (error) {
                                        console.log(error)
                                    }
                                
                                }
                                obtenerJson()
            
                     
                                });
            
                                    
                    document.body.appendChild(btn5);
                    