// might be doing this whole thing wrong


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arrow Functions</title>
</head>
<body id="body">
    <h1>My Boring Website</h1>
    <p id="paragraph">
        This website is boring, with very little CSS. 
        However, we really just care about the javascript. 
        For example, if you click <button id="button">this button</button>, the background of this paragraph tag will change to blue.
    </p>
    <p>We also have a <button id="alert">alert</button> button that will grab the text from the input below and show it in a popup.</p>
    <div>
        <input type="text" id="popup-input">
    </div>
    <p>
        We just like random interactivity in the site, including a fun effect if you hover over <span id="hover-this">        <b>this.</b></span>
    </p>
    <p onmouseover="mouseOverFunction(this)">
        Another task: This should be another feature. 
        I want to click anywhere in this paragraph tag and I want to be able to change the background color to whatever is in this input: <input type="text"/>.
    </p>
    <script>
        const setBackgroundColorById = document.createElement("p");
        const setBackgroundColorById = document.createElement("popup-input");
        const setBackgroundColorById = document.createElement("body");

        const button = document.getElementById("button", event => () {
            event.p = (color:blue);
        }
        app.appendChild(p);

        const alert => document.getElementById("alert", event => (){
            alert = event.target.value);
            form.appendChild(p)
        }
        const hover-this = document.getElementById("hover-this" => (){
            event.body (color:red);
        }
        const hover-this = document.getElementById("hover-this", => (){
            event.body(color:white);
        }

        app.appendChild(body);

        var getValueFromId = (id) => document.getElementById(id).value;
        
        var setBackgroundColorById = (id, color) => document.getElementById(id).style = "background-color: " + color;
    
        var mouseOverFunction = (el) => el.style = "background-color: black";
    </script>
</body>
</html>
