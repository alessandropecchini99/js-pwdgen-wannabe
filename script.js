// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23

const Name = prompt('Come ti chiami?');

const Surname = prompt('Il tuo cognome?');

const Color = prompt('Qual è il tuo colore preferito?');

document.getElementById('user').innerHTML = (Name + Surname + Color + '23');

document.writeln('<h1>' + Name + Surname + Color + '23</h1>');