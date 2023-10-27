function sumElements() {
    let elements = document.querySelectorAll('#sum');
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
        sum += parseInt(elements[i].innerHTML);
    }
    return sum;
}

document.getElementById('result').innerHTML = sumElements();

function sumElements2() {
    let elements2 = document.querySelectorAll('#sum2');
    let sum2 = 0;
    for (let i = 0; i < elements2.length; i++) {
        sum2 += parseInt(elements2[i].innerHTML);
    }
    return sum2;
}

document.getElementById('result2').innerHTML = sumElements2();

