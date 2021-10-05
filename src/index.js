//Se declara el arreglo:
const messages = [
    "Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro - Colin Powell",
    "La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar - Albert Einstein",
    "Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso - Bill Cosby",
    "La vida es una aventura, atrévete - Teresa de Calcuta",
    "Tienes que hacer las cosas que crees que no puedes hacer - Eleanor Roosevelt",
    "Si te caíste ayer, levántate hoy - H. G. Wells",
    "Siempre parece imposible... hasta que se hace - Nelson Mandela",
    "Si no pierdes, no puedes disfrutar de las victorias - Rafael Nadal",
    "Si puedes soñarlo, puedes hacerlo - Walt Disney",
    "El 80% del éxito se basa simplemente en insistir - Woody Allen",
    "Entrega siempre más de lo que esperan de ti - Larry Page",
    "Cuando piensas en positivo, cosas buenas ocurren - Matt Kemp"
]

//Creamos la función para enviar aleatoriamente los nombres del arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

// Exportar como un módulo
module.exports = { randomMsg };