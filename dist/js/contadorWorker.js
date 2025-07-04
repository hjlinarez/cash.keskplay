// public/contadorWorker.js

let tiempoRestante = 0;
let intervalo = null;

self.onmessage = function (e) {
  const { comando, tiempoInicial } = e.data;

  if (comando === "iniciar") {
    tiempoRestante = tiempoInicial;
    clearInterval(intervalo);
    intervalo = setInterval(() => {
      tiempoRestante--;
      self.postMessage({ tiempo: tiempoRestante });
      if (tiempoRestante <= 0) {
        clearInterval(intervalo);
      }
    }, 1000);
  }

  if (comando === "detener") {
    clearInterval(intervalo);
  }
};
