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
  }
//Mensaje de cv enviado condifetentes estilos y limpiado del formulario
  function guardarinformacion() {

    var  image = document.getElementById('image').value;
    var  nombre = document.getElementById('nombre').value;
    var  fecha = document.getElementById('fecha').value;
    var  direccion = document.getElementById('direccion').value;
    var  correo = document.getElementById('correo').value;
    var  tel = document.getElementById('tel').value;
    //compruebo los campos vacios
    if((image === '') || (nombre === '') || (fecha === '') || (direccion === '') || (correo === '') || (tel === '')){ 
      alert("Los campos no pueden quedar vacios");
      return true;
    }else {
      $icono.src = src="icono perfil.jpg"; 
      document.getElementById("docuemntoscargados").style.display = 'block';
      document.getElementById("docuemntoscargados").style.color = 'red';
      document.getElementById("docuemntoscargados").style.fontFamily = 'Crimson Pro';
      document.getElementById("docuemntoscargados").style.fontSize = '40px';
      document.getElementById("formulario").reset();
    }
  }

