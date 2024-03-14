function updateInput(value) {
    var input = document.getElementById('employeeID');
    if (value === 'delete') {
        input.value = input.value.slice(0, -1); // Delete the last character
    } else {
        input.value += value; // Append the provided value
    }
}

function toggleKeypad() {
    var numpad = document.querySelector('.numpad-container');
    var letterKeypad = document.querySelector('.letter-keypad-container');

    if (numpad.classList.contains('hidden')) {
        // Switching from letter keypad to numpad
        numpad.classList.remove('hidden');
        letterKeypad.classList.add('hidden');
    } else {
        // Switching from numpad to letter keypad
        numpad.classList.add('hidden');
        letterKeypad.classList.remove('hidden');
    }
}

function deleteLast() {
    var input = document.getElementById('employeeID');
    input.value = input.value.slice(0, -1);
}

function appendToInput(value) {
    document.getElementById('employeeID').value += value;
}
