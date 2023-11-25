let buttons = document.querySelectorAll('.btn')// Selecting all elements with the class 'btn'

// Getting the elements by their IDs
let expression = document.getElementById('Expression')
let screen = document.getElementById('Display')
let string = '' // Initializing an empty string to store the expression

// Adding an event listener to each button
buttons.forEach(select);



function select(btn) {
    btn.addEventListener('click', get_texts)// Function to handle button clicks
}

function get_texts(get_text) {
    let inner_text = get_text.target
    let text = inner_text.innerHTML;
    expression.innerHTML = text

    let result=document.getElementById('Result')

    // Switch statement to handle different button clicks
    switch (text) {
        case "=":
            expression.innerHTML = string
            string = eval(string)// Evaluating the expression using eval
            result.innerHTML= "= "+string
            break;

        case "C":
            string = ""//Clear the Expression
            result.innerHTML=string
            expression.innerText = string
            break;

        case "⌫":
            string = string.slice(0, -1)// Removing the last character from the expression
            expression.innerText = string
            break;

        default:
            string = string + text// Concatenating the clicked button's text to the expression
            expression.innerText = string
            break;
    }
}