const imagenes=["../assets/Elaion.webp",
"../assets/Elaion_FS540.webp",
"../assets/Elaion_TS1040.webp",
"../assets/Elaion_MI1540.webp",
"../assets/Elaion_MI2050.webp",
"../assets/Elaion_COMPETICION.webp"];

document.Imagen.src=imagenes[0];
let contador=0;
const sliderDerecho=document.querySelector(".sliderDerecho");
const sliderIzquierdo=document.querySelector(".sliderIzquierdo");

sliderDerecho.addEventListener("click",function moverDerecha() {

contador++;
if(contador>imagenes.length-1){
    contador=0;
}
document.Imagen.src=imagenes[contador];


});
sliderIzquierdo.addEventListener("click",function moverIzquierda() {

    contador--;
    if(contador<0){
        contador=imagenes.length-1;
    }
    document.Imagen.src=imagenes[contador];
});

//  const btnInfo=document.getElementById('btnInfo');
//  const divLubricante=document.getElementById('lubricante');

// btnInfo.addEventListener('click',function info(){
//     console.log("funciona");
//     const newElement=document.createElement('p');
//     newElement.innerHTML="elemento creado";
//     divLubricante.appendChild(newElement);


// });