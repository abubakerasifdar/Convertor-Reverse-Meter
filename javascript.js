
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let a = Number(document.getElementById('input').value);
            let convertor = document.getElementById("convertor").value;
            let result;
            switch (convertor) {
                case "inch_to_centimeter": {
                    result = a * 2.54;
                    output = `Your Entered ${a} and Conversion Form ${a}   Inch to centimeter is ${result} cm`
                    document.getElementById("output").style.background = "brown";
                    break;
                }
                case "centimeter_to_inch": {
                    result = a / 2.54;
                    output = `Your Entered ${a} and Conversion Form ${a} cm to inch is ${result} inch`
                    document.getElementById("output").style.background = "black";
                    break;
                }
                case "gallon_to_liter": {
                    result = a * 3.785;
                    output = `Your Entered ${a} and Conversion Form ${a} gallon to liter is ${result} liter`
                    document.getElementById("output").style.background = "brown";
                    break;
                }
                case "liter_to_gallon": {
                    result = a / 3.785;
                    output = `Your Entered ${a} and Conversion Form ${a} liter to gallon is ${result} gallon`
                    document.getElementById("output").style.background = "black";
                    break;
                }
                case "mile_to_kilometers": {
                    result = a * 1.609;
                    output = `Your Entered ${a} and Conversion Form ${a} miles to kilometers is ${result} km`
                    document.getElementById("output").style.background = "brown";
                    break;
                }

                case "pound_to_kilogram": {
                    result = a * .4534;
                    output = `Your Entered ${a} and Conversion Form ${a} pound to kg is ${result} kg`
                    document.getElementById("output").style.background = "brown";
                    break;
                }
                case "kilogram_to_pound": {
                    result = a / 1.609;
                    output = `Your Entered ${a} and Conversion Form ${a} kg to pounds is ${result} pounds`
                    document.getElementById("output").style.background = "black";
                    break;
                }

                default: {
                    output = "Please Input a right feild."
                    document.getElementById("output").style.background = "red";
                }
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = output;
        }
 