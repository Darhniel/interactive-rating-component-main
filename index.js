const rating = document.getElementById("rating");
const thanks = document.getElementById("thanks");
const form = document.getElementById("ratingForm");
const score = document.getElementById("score");

const ratingValues = rating.querySelectorAll("input[name='rate']");

const rateAgain = document.getElementById("rateAgain");
form.addEventListener('submit', (e) => {
    e.preventDefault()

    ratingValues.forEach((input) => {
        if (input.checked) {
            console.log(input.checked)
            score.textContent = input.value;
        }
    })
    
    rating.style.display = 'none'
    thanks.style.display = 'flex'


    rateAgain.addEventListener("click", () => {
        rating.style.display = "block";
        ratingValues.forEach((input) => {
            if (input.checked) {
                input.checked = false;
            }
        })
        thanks.style.display = "none";
    })
})


