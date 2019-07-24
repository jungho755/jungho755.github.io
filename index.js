//retrieve the topping divs

const $pepperoni = document.querySelector('.pepperoni')
const $olives = document.querySelector('.olives')
const $sausage = document.querySelector('.sausage')

//create an array of buttons
const $buttons = document.querySelectorAll('.button')

//retrieve the size selector box
const $sizeSelector = document.getElementById('sizes')
const $size = document.querySelector('.sizes')

//add an event listener ot the size selector
$sizeSelector.addEventListener('change', function (event){
    $size.innerHTML = (event.target.value)
})

//add event listener to the buttons using a "for of" loop and conditional statements based on the id
//for of loop here: looping over the buttons
    //add event listener to each of the buttons using $button

for (let $button of $buttons) {
    $button.addEventListener('click', function (event){
        if (event.target.id == 'pepperoni'){
            $pepperoni.classList.toggle('show')
            $button.classList.toggle('checked')
        } 
        else if (event.target.id =='olives'){
            $olives.classList.toggle('show')
            $button.classList.toggle('checked')
        }
        else {
            $sausage.classList.toggle('show')
            $button.classList.toggle('checked')
        }
    })
}
