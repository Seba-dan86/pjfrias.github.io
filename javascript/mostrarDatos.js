import { data } from "./formulario.js";




const Pdf=document.getElementById("confirmacion");
let descargarPdf=document.createElement("p");
Pdf.appendChild(descargarPdf);
descargarPdf.innerHTML = data;

console.log(data)


