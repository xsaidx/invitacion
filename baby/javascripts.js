const fechaEvento = new Date("2025-11-25T15:00:00"); // Puedes ajustar la hora si lo deseas

const cuentaRegresiva = setInterval(() => {
  const ahora = new Date();
  const diferencia = fechaEvento - ahora;

  if (diferencia <= 0) {
    document.querySelector(".contador").innerHTML = "¡El Baby Shower ha comenzado! 🎉";
    clearInterval(cuentaRegresiva);
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.querySelector(".contador").innerHTML = `
    Faltan <span>${dias}</span> días, <span>${horas}</span> horas, 
    <span>${minutos}</span> minutos y <span>${segundos}</span> segundos para el evento.
  `;
}, 1000);