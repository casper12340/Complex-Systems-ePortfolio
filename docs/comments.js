document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentSection = document.getElementById("comment-section");

    if (!commentForm || !commentSection) {
        console.error("Comment form or section not found.");
        return;
    }

    // Load comments from localStorage
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        commentSection.innerHTML = "";
        comments.forEach((comment) => {
            displayComment(comment);
        });
    }

    // Display a single comment
    function displayComment({ name, text }) {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `<strong>${name}</strong>: ${text}`;
        commentSection.appendChild(commentDiv);
    }

    // Handle form submission
    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const nameInput = document.getElementById("name").value.trim();
        const commentInput = document.getElementById("comment").value.trim();

        if (nameInput === "" || commentInput === "") {
            alert("Please enter your name and a comment.");
            return;
        }

        const newComment = { name: nameInput, text: commentInput };
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(newComment);
        localStorage.setItem("comments", JSON.stringify(comments));

        displayComment(newComment);

        // Clear form
        commentForm.reset();
    });

    // Load existing comments on page load
    loadComments();
});
