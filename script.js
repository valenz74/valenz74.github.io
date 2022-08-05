//Funcion que aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada
function Seleccionar(link){
    let opciones = document.querySelectorAll("#links a")
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    link.className = "seleccionado"

    //Desaparecemos menu una vez se selecciona algo en el modo responsivo
    let x = document.getElementById("nav")
    x.className=""
}


//Funcion que muestra el menú responsivo
function ResponsiveMenu() {
    let x = document.getElementById("nav")
    if (x.className === "") {
        x.className = "responsive"
    } else {
        x.className = ""
    }
}

//Animacion de los skills, detectando el scroll
window.onscroll = function(){
    EfectoHabilidades()
}

//Funcion que aplica animaciones a la barra de skills
function EfectoHabilidades(){
    let Skills = document.getElementById("skills")
    let distancia_skills = window.innerHeight - Skills.getBoundingClientRect().top
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1")
        document.getElementById("js").classList.add("barra-progreso2")
        document.getElementById("git").classList.add("barra-progreso3")
        document.getElementById("github").classList.add("barra-progreso4")
    }
}


