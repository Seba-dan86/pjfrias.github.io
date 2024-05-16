const imagenes=["./assets/Elaion_AURO_FR530.webp",
"./assets/Elaion_AURO_HYBRID_D1020.webp",
"./assets/Elaion_AURO_PLUS540.webp",
"./assets/Elaion_COMPETICION.webp",
"./assets/extravida_xv_300.png"];

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