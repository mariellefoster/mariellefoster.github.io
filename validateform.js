function validateForm() {
    var numer = parseInt(document.getElementById('num_input').value);
  	var denom = parseInt(document.getElementById('denom_input').value);
  	var mod = parseInt(document.getElementById('mod_input').value);
    if (numer < 1 || denom < 1 || mod < 1) {
        alert("All fields must be filled with positive integers");
        return 0;
    }
    return 1;
}
