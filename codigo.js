const datosPersonajes = document.querySelector(".datosPersonajes")
const sonidoPortal = new Audio("./sonidoPortal.mp3")


const btnDerecha = document.querySelector(".btnDerecha")
const btnIzquierda = document.querySelector(".btnIzquierda")
btnDerecha.addEventListener("click", moverDerecha)
btnIzquierda.addEventListener("click", moverIzquierda)

let sliderinicio = 0


async function cargarUrl(url)
{
    respuesta = await fetch(url)
    return respuesta.json()
}


async function cargarJson()
{
    json = await cargarUrl("https://rickandmortyapi.com/api/character")
    listaPersonajes = json.results 
}

function personajes()
{
    const personaje = document.querySelector(".personaje") 
    const nombre = document.querySelector(".nombre") 
    const especie = document.querySelector(".especie") 
    const genero = document.querySelector(".genero")
    const location = document.querySelector(".location") 

    personaje.setAttribute("src", listaPersonajes[sliderinicio].image)
    nombre.innerHTML = `nombre: ${listaPersonajes[sliderinicio].name}` 
    especie.innerHTML = `especie: ${listaPersonajes[sliderinicio].species}`
    genero.innerHTML = `genero: ${listaPersonajes[sliderinicio].gender}`
    location.innerHTML = `localización: ${listaPersonajes[sliderinicio].location.name}`
}

function moverDerecha()
{
    sonidoPortal.play()
    
    if(sliderinicio < 19)
    {
        sliderinicio++
        personajes()
    }

    datosPersonajes.classList.add("datosPersonajesAnimacion")

    setTimeout(() =>
    {
        datosPersonajes.classList.remove('datosPersonajesAnimacion');
    }, 4500)
}

function moverIzquierda()
{
    sonidoPortal.play()
    
    if(sliderinicio > 0)
    {
        sliderinicio--
        personajes()
    }   
    
    datosPersonajes.classList.add("datosPersonajesAnimacion")

    setTimeout(() =>
    {
        datosPersonajes.classList.remove('datosPersonajesAnimacion');
    }, 4000)
}
 



cargarJson()






