





/* HAY QUE VALIDAR LOS DATOS INGRESADOS */
const btn=document.getElementById('btn');
const img = document.querySelector('.msgError');
const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const email=document.getElementById('email');
const telefono=document.getElementById('telefono');
const select=document.getElementById('service');
const padre=document.getElementById('datos');




btn.addEventListener("click", function (e) {

    if (validar()){
        mostrarTicket();
        let data= nombre.value +apellido.value +email.value +telefono.value +select.value ;

        nombre.style.borderColor='black';
        apellido.style.borderColor='black';
        email.style.borderColor='black';
        telefono.style.borderColor='black';
        btn.disabled = true;
        nombre.disabled = true;
        apellido.disabled = true;
        email.disabled = true;
        telefono.disabled = true;



    }else{
        mostrarError();

    }
});


function validar(){
    if(nombre.value==''||apellido.value==''||email.value==''||telefono.value==''||select.value ==''){
        nombre.style.borderColor='red';
        nombre.placeholder='Debe ingresar un nombre';
        apellido.style.borderColor='red';
        apellido.placeholder='Debe ingresar un apellido';
        email.style.borderColor='red';
        email.placeholder='Debe ingresar un email valido';
        telefono.style.borderColor='red';
        telefono.placeholder='Debe ingresar numero de telefono de 10 digitos';

        return false;
    }

    /* REGEX*/
    let validarNombre= /^[a-zA-Z\W]{1,20}$/;
    let validarApellido= /^[a-zA-Z\W]{1,20}$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let validarTelefono=/^\d{1,10}$/;




    if ( validarNombre.test(nombre.value)) {
        nombre.style.borderColor='green';

    } else {

        nombre.style.borderColor='red';
        return false;
    }

    if (validarApellido.test(apellido.value)) {
        apellido.style.borderColor='green';
    } else {

        apellido.style.borderColor='red';
        return false;
    }

    if (emailPattern.test(email.value)) {
        email.style.borderColor='green';
    } else {

        email.style.borderColor='red';
        return false;
    }

    if(telefono.value.length == 10 && validarTelefono.test(telefono.value)) {
        telefono.style.borderColor='green';
    }else{

        telefono.style.borderColor='red';
        return false;
    }
    return true;
}




function mostrarTicket(){

    padre.style.visibility="visible";
    let encabezado=document.createElement('p');
    padre.appendChild(encabezado);
    encabezado.setAttribute('class','datosTexto');
    encabezado.innerHTML='Ticket Registrado';
    let br = document.createElement('br');
    padre.appendChild(br);

    let infoNombre=document.createElement('p');
    padre.appendChild(infoNombre);
    infoNombre.setAttribute("class","datosTexto");
    infoNombre.innerHTML='Cliente = '+nombre.value+' '+apellido.value;

    let infoEmail=document.createElement('p');
    padre.appendChild(infoEmail);
    infoEmail.setAttribute("class","datosTexto");
    infoEmail.innerHTML='Email = '+email.value;

    let infoTelefono=document.createElement('p');
    padre.appendChild(infoTelefono);
    infoTelefono.setAttribute("class","datosTexto");
    infoTelefono.innerHTML='Telefono = '+telefono.value;

    let infoServicio=document.createElement('p');
    padre.appendChild(infoServicio);
    infoServicio.setAttribute("class","datosTexto");
    infoServicio.innerHTML='Servicio = '+select.value;

    let br2 = document.createElement('br');
    padre.appendChild(br2);
    let pie=document.createElement('p');
    padre.appendChild(pie);
    pie.setAttribute('class','datosTexto');
    pie.innerHTML='Gracias por elegirnos ! En breve nos contactaremos para su cita';

    let aceptar = document.createElement('button');
    padre.appendChild(aceptar);
    aceptar.innerText='Aceptar';

    let ancla= document.createElement('a');
    padre.appendChild(ancla);
    ancla.innerText='Descargar Comprobante';


    ancla.setAttribute('href','../html/comprobante.html');






    aceptar.addEventListener("click", function (e) {
        nombre.disabled=false;
        apellido.disabled=false;
        email.disabled=false;
        telefono.disabled=false;
        btn.disabled=false;
        nombre.value='';
        apellido.value='';
        email.value='';
        telefono.value='';

        padre.style.visibility="hidden";
        padre.removeChild(encabezado);
        padre.removeChild(aceptar);
        padre.removeChild(br);
        padre.removeChild(br2);
        padre.removeChild(infoNombre);
        padre.removeChild(infoEmail);
        padre.removeChild(infoTelefono);
        padre.removeChild(infoServicio);
        padre.removeChild(pie);
    });


}

function mostrarError(){
    if(!nombre){
        nombre.appendChild(msgError());
    }
    let padre=document.getElementById('datos');
    padre.style.visibility="visible";
    let error=document.createElement('p');
    padre.appendChild(error);
    error.setAttribute('class','datosTexto');
    error.innerHTML='Error ! Verifique los datos ingresados';
    btn.disabled = false;
}


export {data} ;