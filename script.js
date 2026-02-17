/* Loader */
window.addEventListener("load",()=>{
    document.getElementById("loader").style.display="none";
});

/* Mobile Menu */
document.getElementById("menu-toggle").addEventListener("click",()=>{
    document.querySelector(".nav-links").classList.toggle("active");
});

/* Formspree AJAX */
document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector(".contact-form");
    const successMessage = document.getElementById("form-success");

    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            form.reset();
            successMessage.style.display = "block";
        } else {
            alert("Something went wrong.");
        }
    });
});


