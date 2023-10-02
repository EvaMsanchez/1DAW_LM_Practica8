$(function()
{
    $(".ejercicio").hide();
    

    // ejercicio 17
    function mostrarEjercicio1()
    {
        $(".ejercicio").hide();
        $("#ej1").show();

        let numero = prompt("Introduce un número:");  

        $("#ej1").empty();

        alertify.confirm('Confirmación', '¿Estás seguro de continuar?',
        function(){tablaMultiplicar(numero);},
        function(){alertify.error('Cancel')}
        );

        function tablaMultiplicar(numero)
        {
            if (numero==null)
            {
                alert('Introduce un número, por favor.');
            }
            else if(isNaN(numero))
            {
                alert("El valor introducido no es un número.");
            }
            else
            {
                $("#ej1").append("<h3>Ejercicio 1</h3>");

                for(i=0; i<=10; i++)
                {
                    $("#ej1").append(numero+ "x" +i+ "=" +(i*numero) +"<br>");
                }
            }
        }
    }


    // ejercicio 18
    function mostrarEjercicio2()
    {
        $(".ejercicio").hide();
        $("#ej2").show();

        let numero1 = prompt("Introduce un número:");
        let numero2 = prompt("Introduce otro número:");

        $("#ej2").empty();
        $("#ej2").append("<h3>Ejercicio 2</h3>");

        if(numero1==null || numero2==null)
        {
            alert("Introduce un número, por favor.");
        }
        else if(isNaN(numero1)|| isNaN(numero2))
        {
            alert("El valor introducido no es un número.");
        }
        else
        {
            if(numero1==numero2)
            {
                $("#ej2").append("Son iguales");
            }
            else
            {
                $("#ej2").append("Son distintos");
            }
        }
    }


    // ejercicio 19
    function mostrarEjercicio3()
    {
        $(".ejercicio").hide();
        $("#ej3").show();

        let fecha = prompt("Introduce tu fecha de nacimiento (DD/MM/YYYY):");

        if(fecha==null)
        {
            alertify.alert("Introduce una fecha, por favor.");
        }
        else
        {
            $("#ej3").empty();

            let fechaSeparada = fecha.split("/"); //Se separa la fecha y se guarda en array por partes.
        
            let diaNacimiento = fechaSeparada[0];
            let mesNacimiento = fechaSeparada[1] - 1; //Restamos 1 porque los meses en JavaScript van de 0 a 11.
            let anioNacimiento = fechaSeparada[2];
        
            let fechaNacimiento = new Date(anioNacimiento, mesNacimiento, diaNacimiento); //Se mete al revés la fecha.
        
        
            let hoy = new Date(); //Se guarda la fecha actual.
        
            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear(); //Se resta el año de cada fecha.
            let mes = hoy.getMonth() - fechaNacimiento.getMonth(); //Se restan los meses porque se obtiene el número del mes.
        
            if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate()))
            {
                edad--;
            }
        
            $("#ej3").append("<h3>Ejercicio 3</h3>");

            $("#ej3").append("Tienes " +edad+ " años");
        }
    }


    // ejercicio 20
    function mostrarEjercicio4()
    {
        $(".ejercicio").hide();
        $("#ej4").show();

        function unclick()
        {
            alertify.dialog('alert').set({transition:'flipy', message:'Has hecho click'}).show();
            //alert("Has hecho click");
        }

        function dobleclick()
        {
            alertify.dialog('alert').set({transition:'flipy', message:'Has hecho doble click'}).show();
            //alert("Has hecho doble click");
        }

        $("h1.uno").on("click", unclick);
        $("h1.dos").on("dblclick", dobleclick);
    }


    // ejercicio 21
    function mostrarEjercicio5()
    {
        $(".ejercicio").hide();
        $("#ej5").show();

        function cambiarColor() //color del cuadro
        {
            let color = $(this).css("background-color");
        
            document.body.style.backgroundColor = color; //se le asigna el color.
        } 

        function quitarColor()
        {
            document.body.style.backgroundColor = "";
        }

        $("div.cuadro").on("mouseover", cambiarColor);
        $("div.cuadro").on("mouseout", quitarColor);
    }


    // ejercicio 3
    function mostrarEjercicio6()
    {
        $(".ejercicio").hide();
        $("#ej6").show();

        let dni = prompt("Escriba su DNI:");
        let letra = prompt("Ahora la letra de su DNI:");

        if (dni === null || letra === null)
        {
            alert("Error: Debe introducir un valor.");
        }
        else if(dni<0 || dni>99999999)
        {
            alert("El número de DNI no es válido");
        }
        else
        {
            let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

            let resto = dni % 23;

            let letraCalculada = letras[resto];
            letra = letra.toUpperCase();

            if(letraCalculada==letra)
            {
                alert("El número y la letra de DNI son correctos");
            }
            else
            {
                alert("La letra que ha indicado no es correcta");
            }
        }
    }


    // ejercicio 6
    function mostrarEjercicio7()
    {
        $(".ejercicio").hide();
        $("#ej7").show();

        let sumas = [];

        // Inicializar el array de sumas
        for (let i = 2; i <= 12; i++)
        {
            sumas[i] = 0;
        }
 
        $("#ej7").empty();

        for(let j=0; j<36000; j++)
        {
            dado1 = Math.floor(Math.random()* 6+1);

            dado2 = Math.floor(Math.random()* 6+1);
   
            resultado = dado1 + dado2;

            sumas[resultado]++;
        }

        $("#ej7").append("<h3>Ejercicio 7</h3>");

        for (let k = 2; k <= 12; k++)
        {
            $("#ej7").append("Suma " + k + ": " + sumas[k] + " apariciones <br/>");
        }
    }


    // ejercicio 8
    function mostrarEjercicio8()
    {
        $(".ejercicio").hide();
        $("#ej8").show();

        let cadena = prompt("Introduce una frase:");
        comprobarPalindromo(cadena);

        function comprobarPalindromo(cadena)
        {
            if(cadena==null)
            {
                alert("Introduce una frase, por favor.");
            }
            else if(!isNaN(cadena))
            {
                alert("El valor introducido no es un texto.");
            }
            else
            {
                let nuevaCadena = "";

                cadena = cadena.toLowerCase().replace(/\s/g, ""); //espacios en blanco y g: para reemplazar todas no la primera nada más.

                for(i=cadena.length-1; i>=0; i--)
                {
                    nuevaCadena = nuevaCadena + cadena[i];
                }

                if(nuevaCadena===cadena)
                {
                    alert("Es un palíndromo: " + cadena);
                }
                else
                {
                    alert("No es un palíndromo");
                }
            }
        }
    }


    // ejercicio 10
    function mostrarEjercicio9()
    {
        $(".ejercicio").hide();
        $("#ej9").show();

        
        function evento()
        {
            let pais = $(this).attr("pais"); // attr para coger el valor del atributo.
            let capital = $(this).attr("capital");

            alertify.alert("La capital de "+pais+" es "+capital);
        }

        $("span").on("mouseenter", evento);
    }


    // ejercicio 2
    function mostrarEjercicio10()
    {
        $(".ejercicio").hide();
        $("#ej10").show();

        let nombre = prompt("Introduzca su nombre:");

        if(nombre==null)
        {
            alert("Introduzca un nombre, por favor.");
        }
        else if(!isNaN(nombre))
        {
            alert("El valor introducido no es un texto.");
        }
        else
        {
            let fecha = new Date(); //fecha de ahora.

            let hora = fecha.getHours(); //cogemos la hora de ese mismo momento.
    
            let saludo;
    

            if (hora >= 6 && hora < 12)
            {
                saludo = "¡Buenos días, " + nombre + "!";
            }
            else if (hora >= 12 && hora < 20)
            {
                saludo = "¡Buenas tardes, " + nombre + "!";
            }
            else
            {
                saludo = "¡Buenas noches, " + nombre + "!";
            }
    
            $("#ej10").empty();
            $("#ej10").append("<h3>Ejercicio 10</h3>");
    
            $("#ej10").append("<h1>" + saludo + "</h1>");
            $("#ej10 h1").css("font-family", "Comic Sans MS");
            $("#ej10 h1").css("font-size", "10px");
        }
    }


    $(".ejercicio1").on("click", mostrarEjercicio1);
    $(".ejercicio2").on("click", mostrarEjercicio2);
    $(".ejercicio3").on("click", mostrarEjercicio3);
    $(".ejercicio4").on("click", mostrarEjercicio4);
    $(".ejercicio5").on("click", mostrarEjercicio5);
    $(".ejercicio6").on("click", mostrarEjercicio6);
    $(".ejercicio7").on("click", mostrarEjercicio7);
    $(".ejercicio8").on("click", mostrarEjercicio8);
    $(".ejercicio9").on("click", mostrarEjercicio9);
    $(".ejercicio10").on("click", mostrarEjercicio10);
    
});


