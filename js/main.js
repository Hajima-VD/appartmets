function sumElements() {
    let elements = document.querySelectorAll('#sum');
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
        sum += parseInt(elements[i].innerHTML);
    }
    return sum;
}

document.getElementById('result').innerHTML = sumElements();