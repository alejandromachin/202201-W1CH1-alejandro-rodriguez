//VARIABLES

var preguntasContestadas = [];
var preguntasAcertadas = [];
let numeroPreguntas = 0;
var preguntasPasadas = [];

// DOM

let inicio = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let puntuacion= document.querySelector('.puntuacion')
let pasapalabraLogo = document.querySelector('.toggle__pasapalabra')

let instrucciones = document.querySelector('.instrucciones')
let jugando = document.querySelector('.jugando')
let intro = document.querySelector('.intro')
let botonJugar = document.querySelector('.boton__jugar')
var tiempo = 149;
let botonEnter = document.querySelector(".boton__enter")
let botonPasapalabra = document.querySelector(".boton__pasapalabra")
let recuento = document.querySelector(".recuento")
let a = document.querySelector(".letraA");
var respuesta;
var letra;

//BOTONES 
inicio.addEventListener("click", iniciar)



  // primero obtengo la respuesta, luego compruebo
botonEnter.addEventListener("click", obtenerRespuesta)
botonEnter.addEventListener("click", comprobar)


botonJugar.addEventListener("click", jugar)
botonJugar.addEventListener("click", preguntas)


//boton pasapalabra

botonPasapalabra.addEventListener("click", pasapalabra)



  //FUNCIONES 

function iniciar(){ //OCULTA Y MUESTRA ELEMENTOS EN EL HTML

    menu.classList.toggle("active");

    document.querySelector(".toggle__pasapalabra").style.display = "flex"; 
       
    document.querySelector('.toggle').style.display = "none"; 
      
    document.querySelector('.puntuacion').style.display = 'grid'; 
        
    document.querySelector('.instrucciones').style.display = 'grid'; 
 
    document.querySelector('.intro').style.display = 'none'; 

  };

function pasapalabra(){

    respuesta = "pasapalabra"
    comprobar();


};

function obtenerRespuesta(){ //CAPTURA RESPUESTA

    respuesta = document.getElementById("respuesta").value;
 
  
};

function comprobar(){ //COMPRUEBA RESPUESTA
  
  if (respuesta.toLowerCase() === "pasapalabra"){


    preguntasPasadas.push({letter: letra, answer: questions[numeroPreguntas].answer, question: questions[numeroPreguntas].question, status: null, incorrecta: false})
    console.log(preguntasPasadas)
    numeroPreguntas++;
    if(numeroPreguntas === 27) {
        
      segundaVuelta();
      numeroPreguntas = 0;
      console.log("hola")

    }
    preguntas();

  }
  else if (respuesta.toLowerCase() != questions[numeroPreguntas].answer && respuesta.toLowerCase() != "pasapalabra"){ 
    
    questions[numeroPreguntas].status = false;
    document.getElementById(letra).classList.add("letra--fallada");
    numeroPreguntas++;
    if(numeroPreguntas === 27) {
       
      segundaVuelta();
      numeroPreguntas = 0;
      console.log("hola")
    }
    preguntas();

  }


  else if (respuesta.toLowerCase() === questions[numeroPreguntas].answer){ 

    questions[numeroPreguntas].status = true;
    preguntasAcertadas.push(1);
    document.getElementById(letra).classList.add("letra--acertada");
    numeroPreguntas++;
    if(numeroPreguntas === 27) {
        
      segundaVuelta();    
      numeroPreguntas = 0;
      console.log("hola")

    }
    preguntas();
  }



  };

  function segundaVuelta(){

    questions = preguntasPasadas;
  }

  function preguntas(x){ //MUESTRA LAS PREGUNTAS
    var x = numeroPreguntas
    if (questions[x].status === null) {
      
      var pregunta = questions[x].question
      letra = questions[x].letter
      document.getElementById("preguntaActual").innerHTML = pregunta;

      // if(x === 3) {
        
      //   segundaVuelta();
      //   numeroPreguntas = 0;
      // return;
      // }
  
    }

    
  };


    

function jugar(){ //ACTUALIZA EL TABLERO Y MUESTRA EL TIMER Y PUNTOS

  document.querySelector('.instrucciones').style.display = 'none'; 
   
  document.querySelector('.jugando').style.display = 'grid'; 

  // preguntas();

  setInterval(function(){
  tiempo--;

  if( tiempo >= 0) {
      id = document.getElementById("tiempo");
      id.innerHTML = tiempo;
  }
  if(tiempo === 0) {

      recuento1()
  }

}, 1000);


};

function recuento1(){

  document.querySelector('.jugando').style.display = 'none'; 
  document.querySelector('.recuento').style.display = 'grid'; 
  


  var puntuacion = `Enhorabuena, has acertado un total de ${preguntasAcertadas.length} preguntas`;

  document.querySelector('.resultado').innerHTML = puntuacion;





};




  // CODIGO
  var questions = []
  let numeroPackPreguntas = Math.floor(Math.random()*3+1);
    
  if (numeroPackPreguntas === 1){
          
          questions.push({ letter: "a", answer: "abducir", status: null, incorrecta: false, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"});
      
          questions.push({ letter: "b", answer: "bingo", status: null, incorrecta: false, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"});
      
          questions.push({ letter: "c", answer: "churumbel", status: null, incorrecta: false, question: "CON LA C. Niño, crío, bebé"});
      
          questions.push({ letter: "d", answer: "diarrea", status: null, incorrecta: false, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"});
      
          questions.push({ letter: "e", answer: "ectoplasma", status: null,incorrecta: false, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"});
      
          questions.push({ letter: "f", answer: "fácil", status: null,incorrecta: false, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"});
      
          questions.push({ letter: "g", answer: "galaxia", status: null,incorrecta: false, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"});
      
          questions.push({ letter: "h", answer: "harakiri", status: null,incorrecta: false, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"});
      
          questions.push({ letter: "i", answer: "iglesia", status: null,incorrecta: false, question: "CON LA I. Templo cristiano"});
      
          questions.push({ letter: "j", answer: "jabalí", status: null,incorrecta: false, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"});
      
          questions.push({ letter: "k", answer: "kamikaze", status: null,incorrecta: false, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"});
      
          questions.push({ letter: "l", answer: "licántropo", status: null,incorrecta: false, question: "CON LA L. Hombre lobo"});
      
          questions.push({ letter: "m", answer: "misántropo", status: null,incorrecta: false, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"});
      
          questions.push({ letter: "n", answer: "necedad", status: null,incorrecta: false, question: "CON LA N. Demostración de poca inteligencia"});
      
          questions.push({ letter: "ñ", answer: "señal", status: null,incorrecta: false, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."});
      
          questions.push({ letter: "o", answer: "orco", status: null,incorrecta: false, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"});
      
          questions.push({ letter: "p", answer: "protoss", status: null,incorrecta: false, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"});
      
          questions.push({ letter: "q", answer: "queso", status: null,incorrecta: false, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"});
      
          questions.push({ letter: "r", answer: "ratón", status: null,incorrecta: false, question: "CON LA R. Roedor"});
      
          questions.push({ letter: "s", answer: "stackoverflow", status: null,incorrecta: false, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"});
      
          questions.push({ letter: "t", answer: "terminator", status: null,incorrecta: false, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"});
      
          questions.push({ letter: "u", answer: "unamuno", status: null,incorrecta: false, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"});
      
          questions.push({ letter: "v", answer: "vikingos", status: null,incorrecta: false, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"});
      
          questions.push({ letter: "w", answer: "sándwich", status: null,incorrecta: false, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"});
      
          questions.push({ letter: "x", answer: "bótox", status: null,incorrecta: false, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"});
      
          questions.push({ letter: "y", answer: "peyote", status: null,incorrecta: false, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"});
      
          questions.push({ letter: "z", answer: "zen", status: null,incorrecta: false, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"});
  
  }
  
   else if (numeroPackPreguntas === 2) {
  
          questions.push({ letter: "a", answer: "anarquía", status: null, incorrecta: false, question: "CON LA A. Ausencia total de estructura gubernamental en un Estado."});
      
          questions.push({ letter: "b", answer: "balanza", status: null, incorrecta: false, question: "CON LA B. Instrumento que sirve para medir la masa de los objetos."});
      
          questions.push({ letter: "c", answer: "capo", status: null, incorrecta: false, question: "CON LA C. Jefe de la mafia, especialmente de narcotraficantes."});
      
          questions.push({ letter: "d", answer: "desodorante", status: null, incorrecta: false, question: "CON LA D. Producto que se utiliza para suprimir el olor corporal o de algún recinto."});
      
          questions.push({ letter: "e", answer: "efímero", status: null,incorrecta: false, question: "CON LA E. Pasajero, de corta duración."});
      
          questions.push({ letter: "f", answer: "faja", status: null,incorrecta: false, question: "CON LA F. Prenda interior elástica que ciñe la cintura, o la cintura y las caderas."});
      
          questions.push({ letter: "g", answer: "gominola", status: null,incorrecta: false, question: "CON LA G. Golosina blanca masticable, generalmente recubierta de azúcar."});
      
          questions.push({ letter: "h", answer: "historia", status: null,incorrecta: false, question: "CON LA H. Conjunto de todos los hechos ocurridos en tiempos pasados."});
      
          questions.push({ letter: "i", answer: "ilves", status: null,incorrecta: false, question: "CON LA I. Apellido del político que fue presidente de Estonia entre los años 2006 y 2016."});
      
          questions.push({ letter: "j", answer: "judión", status: null,incorrecta: false, question: "CON LA J. Variedad de judía de vainas anchas y semilla grande."});
      
          questions.push({ letter: "k", answer: "kilo", status: null,incorrecta: false, question: "CON LA K. Unidad de medida de peso."});
      
          questions.push({ letter: "l", answer: "linaje", status: null,incorrecta: false, question: "CON LA L. Ascendencia o descendencia de una familia, especialmente noble."});
      
          questions.push({ letter: "m", answer: "madrigrera", status: null,incorrecta: false, question: "CON LA M. Cueva en la que habitan ciertos animales, especialmente los conejos."});
      
          questions.push({ letter: "n", answer: "novato", status: null,incorrecta: false, question: "CON LA N. Inexperto en algo."});
      
          questions.push({ letter: "ñ", answer: "acuñar", status: null,incorrecta: false, question: "CONTIENE LA Ñ. Hacer o fabricar moneda."});
      
          questions.push({ letter: "o", answer: "onírico", status: null,incorrecta: false, question: "CON LA O. Perteneciente o relativo a los sueños."});
      
          questions.push({ letter: "p", answer: "pico", status: null,incorrecta: false, question: "CON LA P. cumbre de una montaña."});
      
          questions.push({ letter: "q", answer: "equilátero", status: null,incorrecta: false, question: "CONTIENE LA Q. Triángulo que tiene todos sus lados iguales."});
      
          questions.push({ letter: "r", answer: "rata", status: null,incorrecta: false, question: "CON LA R. Prima grande del ratón"});
      
          questions.push({ letter: "s", answer: "silla", status: null,incorrecta: false, question: "CON LA S. Objeto donde solemos sentarnos"});
      
          questions.push({ letter: "t", answer: "tierra", status: null,incorrecta: false, question: "CON LA T. Planeta donde vivimos"});
      
          questions.push({ letter: "u", answer: "uno", status: null,incorrecta: false, question: "CON LA U. Juego de cartas para toda la familia"});
      
          questions.push({ letter: "v", answer: "villano", status: null,incorrecta: false, question: "CON LA V. Personaje antagonista al héroe."});
      
          questions.push({ letter: "w", answer: "windows", status: null,incorrecta: false, question: "CON LA W. Eterno rival de Apple."});
      
          questions.push({ letter: "x", answer: "xilófono", status: null,incorrecta: false, question: "CON LA X. Instrumento musical."});
      
          questions.push({ letter: "y", answer: "yuca", status: null,incorrecta: false, question: "CON LA Y. Tubérculo cultivado principalmente en países tropicales."});
      
          questions.push({ letter: "z", answer: "zika", status: null,incorrecta: false, question: "CON LA Z. Virus transmitido por los mosquitos."});
  
  
  
  }
  
  else if (numeroPackPreguntas === 3) {
  
  
      questions.push({ letter: "a", answer: "anteayer", status: null, incorrecta: false, question: "CON LA A. Dícese de hace dos días."});
      
      questions.push({ letter: "b", answer: "barco", status: null, incorrecta: false, question: "CON LA B. Vehículo de grandes dimensiones con el que trasladarse marítimamente"});
  
      questions.push({ letter: "c", answer: "calamar", status: null, incorrecta: false, question: "CON LA C. Primo del pulpo"});
  
      questions.push({ letter: "d", answer: "dinosaurios", status: null, incorrecta: false, question: "CON LA D. Bestias no muy amigas de los asteroides"});
  
      questions.push({ letter: "e", answer: "electricista", status: null,incorrecta: false, question: "CON LA E. Persona entendida en el arte de la electricidad"});
  
      questions.push({ letter: "f", answer: "fauna", status: null,incorrecta: false, question: "CON LA F. Conjunto de animales que acompañan a la flora"});
  
      questions.push({ letter: "g", answer: "gato", status: null,incorrecta: false, question: "CON LA G. Felino doméstico"});
  
      questions.push({ letter: "h", answer: "hipo", status: null,incorrecta: false, question: "CON LA H. Espasmo molesto que te da y nunca sabes porqué"});
  
      questions.push({ letter: "i", answer: "independencia", status: null,incorrecta: false, question: "CON LA I. La consigues cuando te separas de alguien."});
  
      questions.push({ letter: "j", answer: "juguetes", status: null,incorrecta: false, question: "CON LA J. instrumentos de diversión."});
  
      questions.push({ letter: "k", answer: "karate", status: null,incorrecta: false, question: "CON LA K. Arte marcial caracterizado por el uso de los puños"});
  
      questions.push({ letter: "l", answer: "lima", status: null,incorrecta: false, question: "CON LA L. Prima del limón"});
  
      questions.push({ letter: "m", answer: "manifestación", status: null,incorrecta: false, question: "CON LA M. Quedada multitudinaria de personas con fines reivindicativos"});
  
      questions.push({ letter: "n", answer: "nadar", status: null,incorrecta: false, question: "CON LA N. Acción de desplazarse en el agua"});
  
      questions.push({ letter: "ñ", answer: "dañar", status: null,incorrecta: false, question: "CONTIENE LA Ñ. Sinónimo de estropear"});
  
      questions.push({ letter: "o", answer: "omnipresente", status: null,incorrecta: false, question: "CON LA O. Que su presencia se encuentra en todas partes"});
  
      questions.push({ letter: "p", answer: "pepino", status: null,incorrecta: false, question: "CON LA P. Vegetal usado en la preparación de gin tonics"});
  
      questions.push({ letter: "q", answer: "paquete", status: null,incorrecta: false, question: "CONTIENE LA Q. Objeto que manda Amazon cada micra de segundo"});
  
      questions.push({ letter: "r", answer: "reanimar", status: null,incorrecta: false, question: "CON LA R. Devolver a la vida a alguien"});
  
      questions.push({ letter: "s", answer: "sofá", status: null,incorrecta: false, question: "CON LA S. Mueble de grandes dimensiones y muy amigo de Netflix"});
  
      questions.push({ letter: "t", answer: "tacones", status: null,incorrecta: false, question: "CON LA T. Alzas para los zapatos"});
  
      questions.push({ letter: "u", answer: "uruguay", status: null,incorrecta: false, question: "CON LA U. País primo-hermano de argentina"});
  
      questions.push({ letter: "v", answer: "villano", status: null,incorrecta: false, question: "CON LA V. Época del año que todo trabajador espera con anhelo."});
  
      questions.push({ letter: "w", answer: "whatsapp", status: null,incorrecta: false, question: "CON LA W. Aplicación de mensajería"});
  
      questions.push({ letter: "x", answer: "ántrax", status: null,incorrecta: false, question: "CONTIENE LA X. Enfermedad bacteriosa altamente mortífera"});
  
      questions.push({ letter: "y", answer: "youtube", status: null,incorrecta: false, question: "CON LA Y. Plataforma online líder en el contenido audiovisual"});
  
      questions.push({ letter: "z", answer: "zara", status: null,incorrecta: false, question: "CON LA Z. Marca de ropa que hizo rico a Amancio."});
  
  };








//   for( j=0; j<10; j++){
        
//     do {
        
//         for(i=0; i<questions.length; i++){
        
//         if (questions[i].status === false && questions[i].incorrecta === false) {
        

        
        
//             let preguntaA = prompt(`${questions[i].question}`);
        
//             if (preguntaA.toLowerCase() === questions[i].answer) {
//             alert("Correcto!")
//             questions[i].status = true;
//             preguntasContestadas.push(1);
//             };
        
          
//             if (preguntaA.toLowerCase() === "pasapalabra") {
        
//             alert("SIGUIENTE")
//             segundaVuelta.push(1);
//             };
        
//             if (preguntaA.toLowerCase() != questions[i].answer && preguntaA.toLowerCase() != "pasapalabra" && preguntaA.toLowerCase() != "end") {
           
//             alert(`INCORRECTO! La respuesta correcta es ${questions[i].answer}`)
            
//             questions[i].incorrecta = true;
//             preguntasContestadas.push(1);
//             };
    
    
//             if (preguntaA.toLowerCase() === "end"){
    
//                 alert("Claro, paramos! Aquí tienes tu resultado")
//                 recuento();
//                 console.log(`Has acertado ${preguntasAcertadas.length} un pregunta!`)
//                 end.push(1);
    
                
//                     break;
//             };
    
            
//         };

    
//     }
//   if (end.length > 0){

//     break;
//   }
// }
//     while (preguntasContestadas.length < 27);


 
//     break;

// };