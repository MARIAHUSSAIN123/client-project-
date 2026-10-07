function birthday() {

    let now = new Date();
    let birth = new Date(document.getElementById("dob").value);

    let year = now.getFullYear() - birth.getFullYear();
    let month = now.getMonth() - birth.getMonth();
    let date = now.getDate() - birth.getDate();

    if (month < 0 || (month === 0 && date < 0)) {
        year--;
    }

    document.getElementById("result").textContent =
        "You are " + year + " years old";
}