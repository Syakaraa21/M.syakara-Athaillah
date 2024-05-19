function checkNumber() {
    const number = parseInt(document.getElementById('number').value);
    let result = '';

    if (number > 0) {
        result = 'Angka positif';
    } else if (number < 0) {
        result = 'Angka negatif';
    } else if (number === 0) {
        result = 'Angka nol';
    } else {
        result = 'Input tidak valid';
    }

    document.getElementById('result').innerText = result;
}
