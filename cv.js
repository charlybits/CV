

// cambiar imagen de miniatura
const $image = document.querySelector("#image"),
$icono = document.querySelector("#icono");
$image.addEventListener("change", () => {
  const archivos = $image.files;
  if (!archivos || !archivos.length) {
    $icono.src = "";
    return;
  }
  const primerArchivo = archivos[0];
  const objectURL = URL.createObjectURL(primerArchivo);
  $icono.src = objectURL;
});

//limpiamos el formulario lleno
  function limpiarFormulario() {
    document.getElementById("formulario").reset();
    $icono.src = $image;
  }
//Mensaje de cv enviado y limpiado
  function guardarinformacion() {
    document.getElementById("docuemntoscargados").style.display = 'block';
    document.getElementById("docuemntoscargados").style.color = 'red';
    document.getElementById("docuemntoscargados").style.fontFamily = 'Crimson Pro';
    document.getElementById("docuemntoscargados").style.fontSize = '40px';
    document.getElementById("formulario").reset();
  }

