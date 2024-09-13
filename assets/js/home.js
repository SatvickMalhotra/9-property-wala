// Array to track the current slide for each slider
let currentSlide = [0, 0, 0, 0]; 

// Store autoplay intervals for each slider
let autoPlayIntervals = [];

// Function to move slides for each section
function moveSlides(n, sliderIndex) {
    const sliders = document.querySelectorAll('.slider');
    const slider = sliders[sliderIndex];
    const totalSlides = Math.ceil(slider.children.length / 4); // 4 images per slide

    // Update current slide index
    currentSlide[sliderIndex] = (currentSlide[sliderIndex] + n + totalSlides) % totalSlides;

    // Calculate the new position and apply the transform (moving by 4 images at a time)
    const slideWidth = slider.children[0].clientWidth * 4;
    slider.style.transform = `translateX(-${currentSlide[sliderIndex] * slideWidth}px)`;
}

// Function to load predefined images into the sliders
function loadPredefinedImages(sliderClass, folderPath, imageFilenames) {
    const slider = document.querySelector(`.${sliderClass}`);
    slider.innerHTML = ''; // Clear any existing images

    imageFilenames.forEach(filename => {
        const imgElement = document.createElement('img');
        imgElement.src = `${folderPath}/${filename}`;
        imgElement.alt = filename;
        imgElement.style.width = "300px"; 
        imgElement.style.height = "300px"; 
        imgElement.style.objectFit = "cover";
        slider.appendChild(imgElement);
    });
}

// Function to autoplay the sliders
function autoPlaySlider(sliderIndex) {
    autoPlayIntervals[sliderIndex] = setInterval(() => {
        moveSlides(1, sliderIndex); // Move slides automatically
    }, 6000); // 6 seconds interval
}

// Load images for all sliders
document.addEventListener('DOMContentLoaded', () => {
    // Catered image filenames from the provided reference
    const cateringImages = [
        'image_fx_fix_hands_of_people_they_are_not_wearing_glov - Copy - Copy.jpg',
        'image-3427KwQh7-transformed.png',
        'image-U5EMtzlo8-transformed - Copy - Copy.png',
        'WhatsApp Image 2024-07-15 at 2.41.01 PM - Copy - Copy.jpeg',
        'WhatsApp Image 2024-07-15 at 2.41.01 PM.jpeg'
    ];

    // Design image filenames from the provided reference
    const designImages = [
        'image (1).jpeg',
        'image (2).jpeg',
        'image (3).jpeg',
        'image (4).jpeg',
        'image (5).jpeg',
        'image (6).jpeg',
        'image (7).jpeg',
        'image (8).jpeg',
        'image (9).jpeg',
        'image (10).jpeg',
        'image (11).jpeg',
        'image (12).jpeg',
        'image (13).jpeg',
        'image (14).jpeg',
        'image (15).jpeg',
        'image (16).jpeg',
        'img (1).jpg',
        'img (2).jpg',
        'img (3).jpg',
        'img (4).jpg',
        'img (5).jpg',
        'img (6).jpg',
        'img (7).jpg'
    ];

    // Listings image filenames from the provided reference
    const listingImages = [
        'image (1).jpeg',
        'image (2).jpeg',
        'image (3).jpeg',
        'image (4).jpeg',
        'image (5).jpeg',
        'image (6).jpeg',
        'image (7).jpeg',
        'img (1).jpg',
        'img (2).jpg',
        'img (3).jpg',
        'img (4).jpg',
        'img (1).png'
    ];

    // Reviews image filenames from the provided reference
    const reviewImages = [
        'image (1).jpg',
        'image (2).jpg',
        'image (3).jpg',
        'image (4).jpg',
        'image (5).jpg',
        'image (6).jpg',
        'image (7).jpg',
        'image (8).jpg',
        'image (9).jpg',
        'image (10).jpg',
        'image (11).jpg',
        'image (12).jpg',
        'image (13).jpg',
        'image (14).jpg',
        'image (15).jpg',
        'img (1).png',
        'img (2).png'
    ];

    // Load the images into respective sliders
    loadPredefinedImages('real-estate-slider', 'assets/images/listings', listingImages);
    loadPredefinedImages('interior-designing-slider', 'assets/images/design', designImages);
    loadPredefinedImages('catering-slider', 'assets/images/catering', cateringImages);
    loadPredefinedImages('client-testimonial-slider', 'assets/images/reviews', reviewImages);

    // Initialize autoplay for all sliders
    autoPlaySlider(0); // Real Estate Slider
    autoPlaySlider(1); // Interior Designing Slider
    autoPlaySlider(2); // Catering Slider
    autoPlaySlider(3); // Testimonials Slider
});

// Pause autoplay on hover, resume on mouse leave
const sliders = document.querySelectorAll('.slider-container');
sliders.forEach((sliderContainer, index) => {
    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoPlayIntervals[index]));
    sliderContainer.addEventListener('mouseleave', () => autoPlaySlider(index)); // Resume autoplay
});
