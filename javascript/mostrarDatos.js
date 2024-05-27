

const nombre=document.getElementById("nombre").value;

const apellido=document.getElementById("apellido").value;

const email=document.getElementById("email").value;

const telefono=document.getElementById("telefono").value;

const service=document.getElementById("service").value;



const Pdf=document.getElementById("confirmacion");
let descargarPdf=document.createElement("p");
Pdf.appendChild(descargarPdf);
descargarPdf.textContent = mostrarTicket();



