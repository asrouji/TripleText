const inputBox = document.querySelector('#input')
const answerSpan = document.querySelector('#str')

inputBox.addEventListener('input', () => {
    const input = inputBox.value;
    if(input.isNan || input === ''){
        answerSpan.textContent = '?';
    }else{
        answerSpan.textContent = input.repeat(3);
    }
})  