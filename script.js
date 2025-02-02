
let currentReviewIndex = 0; // Renamed from currentIndex
const reviewElements = document.querySelectorAll('.reviews .review'); // Renamed from reviews
const totalReviewCount = reviewElements.length; // Renamed from totalReviews

function displayReview(index) { // Renamed from showReview
    reviewElements.forEach((reviewElement, i) => {
        reviewElement.classList.remove('active'); // Remove active class from all reviews
        if (i === index) {
            reviewElement.classList.add('active'); // Add active class to the current review
        }
    });
}

function changeReview(direction) {
    currentReviewIndex = (currentReviewIndex + direction + totalReviewCount) % totalReviewCount; // Update the index
    displayReview(currentReviewIndex); // Show the new review
}

// Show the first review initially
displayReview(currentReviewIndex);
setInterval(()=>{
    changeReview(1)
},2000)
gsap.from("nav ", {
    y:-100,
    opacity:0,
    duration: 1,
  })
  gsap.to(".logos-slide",{
    transform:"translateX(-100%)",
    duration:9,
    // delay:1,
    repeat:-1,
    ease:"none",
  })
  gsap.from(".pcard ",{
    opacity:0,
    y:200,
    scrollTrigger:{
        trigger:".pcard",
        scroller:"body",

    },
    duration:1
  })