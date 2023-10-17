document.getElementById("roleFilter").addEventListener("change", function () {
    const selectedRole = this.value;
    const divs = document.querySelectorAll('#szv div'); 

    for (let div of divs) {
        const role = div.querySelector(".card-text").textContent;
        if (selectedRole === "" || role.includes(selectedRole)) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
});

document.getElementById('pracowansko').addEventListener('submit', function(event) {
event.preventDefault(); 

alert('CV wysłane');
});