
             var caja_dni = prompt("dni");
             var str_dni = caja_dni.value;
             var num_dni = parseInt (str_dni);
             var longitudDni = 8
             if(caja_dni != longitudDni)
             {//caso de que el dni no tenga 8 digitos
                alert ("Mete un dni valido");
                alert ("Todo correcto, continue");
            } else { //Es un dni valido lo que ha metido                    
            }

             if (isNaN(num_dni))
            {//caso de que NO es un número
                alert ("Mete un número");
            } else { //Es un número lo que ha metido
                var resto = num_dni%23;//SECUENCIA_DNI.lenght
                var letra = SECUENCIA_DNI.charAt(resto)
                console.log ("LEtra = " + letra);

                document.getElementById("letra").value=letra;
            }