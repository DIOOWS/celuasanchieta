// update-sw.js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (let registration of registrations) {
      registration.update();
    }
  });

  // Força atualização quando uma nova versão do SW é detectada
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    window.location.reload();
  });
}
