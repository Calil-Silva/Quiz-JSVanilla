const correctAnswers = ["B", "B", "B", "B"]
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    let sum = 0;
    const userAnswers = [
        event.target.inputQuestion1.value,
        event.target.inputQuestion2.value,
        event.target.inputQuestion3.value,
        event.target.inputQuestion4.value,
    ]

    correctAnswers.forEach((a, i) => {
        if(a === userAnswers[i]) {
            sum += 25;
        }
    });
    console.log(sum)
})