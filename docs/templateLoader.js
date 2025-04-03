document.addEventListener("DOMContentLoaded", () => {
    loadTemplate("header", "components/header.html");
    // loadTemplate("nav", "components/nav.html");
    loadTemplate("footer", "components/footer.html");

    // Only load comments if the comments container exists
    if (document.getElementById("comments")) {
        loadTemplate("comments", "components/comments.html");
    }
});

function loadTemplate(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
            }
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}
