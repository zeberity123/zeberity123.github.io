const images = ["bnbn1.jpg", "bnbn2.jpg", "bnbn3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundImage = 'url('+ chosenImage + ')';