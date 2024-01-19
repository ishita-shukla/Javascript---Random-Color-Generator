function splitNumber() {
    const number = parseInt(document.getElementById('numberInput').value);
    const splitTimes = parseInt(document.getElementById('splitInput').value);

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';

    const splitAmount = Math.floor(number / splitTimes);
    let remainingAmount = number;

    for (let i = 0; i < splitTimes; i++) {
        const currentAmount = i === splitTimes - 1 ? remainingAmount : splitAmount;
        remainingAmount -= currentAmount;

        const div = document.createElement('div');
        div.className = 'split-box';
        div.style.width = (currentAmount / number) * 100 + '%';
        div.style.backgroundColor = getRandomColor();
        div.textContent = currentAmount;
        resultContainer.appendChild(div);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}