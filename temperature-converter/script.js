function convertTemp(){

    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unit").value;
    let result = "";

    if(isNaN(temp)){
        document.getElementById("result").innerHTML =
        "Please enter a valid number";
        return;
    }

    if(unit === "celsius"){

        let fahrenheit = (temp * 9/5) + 32;
        let kelvin = temp + 273.15;

        result =
        `${temp} °C = ${fahrenheit.toFixed(2)} °F<br>
         ${temp} °C = ${kelvin.toFixed(2)} K`;

    }

    else if(unit === "fahrenheit"){

        let celsius = (temp - 32) * 5/9;
        let kelvin = celsius + 273.15;

        result =
        `${temp} °F = ${celsius.toFixed(2)} °C<br>
         ${temp} °F = ${kelvin.toFixed(2)} K`;

    }

    else{

        let celsius = temp - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;

        result =
        `${temp} K = ${celsius.toFixed(2)} °C<br>
         ${temp} K = ${fahrenheit.toFixed(2)} °F`;

    }

    document.getElementById("result").innerHTML = result;
}