const imagenes=["../assets/slide1.jpg", "../assets/slide2.jpg", "../assets/slide3.jpg", 
"../assets/slide4.jpg", "../assets/slide5.jpg", "../assets/slide6.webp", "../assets/slide7.jpg", "../assets/slides8.jpg", "../assets/slides9.jpg","../assets/slides10.jpg"];

document.Imagen.src=imagenes[0];
let contador=0;
const sliderDerecho=document.querySelector(".sliderDerecho");
const sliderIzquierdo=document.querySelector(".sliderIzquierdo");
const slider=document.querySelector(".slider");
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