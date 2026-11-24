console.log("REVIEW.JS IS RUNNING");
const reviewCountElement = document.querySelector("#reviewCount");
const reviewMessage = document.querySelector("#reviewMessage");

const params = new URLSearchParams(window.location.search);

const product = params.get("product");
const rating = params.get("rating");
const installDate = params.get("installDate");

// Verify that the review was submitted
if (product && rating && installDate) {

    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    reviewCountElement.textContent = reviewCount;
}

else {
    reviewMessage.textContent = "No review submitted. Please submit a review first.";
    reviewCountElement.textContent = Number(localStorage.getItem("reviewCount")) || 0;
}

console.log("Product:", params.get("product"));
console.log("Rating:", params.get("rating"));
console.log("Installation date:", params.get("installDate"));

console.log("Review count:", localStorage.getItem("reviewCount"));