
document.getElementById('btn').addEventListener('click', generatePassword)

function generatePassword() {
    let upperCase = "",

        lowerCase = "",

        number = "",

        symbol = ""

    let upper = document.getElementById("uppercase").checked

    let lower = document.getElementById("lowercase").checked

    let num = document.getElementById("numbers").checked

    let sym = document.getElementById("symbols").checked

    if (upper) {
        upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lower) {
        lowerCase = "abcdefghijklmnopqrstuvwxyz";
    }
    if (num) {
        number = "0123456789";
    }
    if (sym) {
        symbol = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
    }

    const characters = upperCase + lowerCase + number + symbol;


    // here i get the value from range start
    function charLength() {

        let charLength = document.getElementById('length').value;
        document.getElementById('result').innerHTML = charLength;
        console.log(charLength)
        return charLength;

    }
    document.getElementById('length').addEventListener('change', charLength)
    // here i get the value from range end


    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < charLength(); i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.getElementById('password__result').value = result;
}








