// Function to load predefined images into the testimonials section
function loadTestimonialImages(imageFilenames) {
    const testimonialsContainer = document.getElementById('testimonial-container');
    testimonialsContainer.innerHTML = ''; // Clear any existing images

    imageFilenames.forEach(filename => {
        const testimonialItem = document.createElement('div');
        testimonialItem.classList.add('testimonial-item');

        // Create image element
        const imgElement = document.createElement('img');
        imgElement.src = `assets/images/reviews/${filename}`;
        imgElement.alt = filename;
        testimonialItem.appendChild(imgElement);

        testimonialsContainer.appendChild(testimonialItem);
    });

    // Create the central WhatsApp button
    const whatsappButton = document.createElement('button');
    whatsappButton.textContent = 'Chat on WhatsApp';
    whatsappButton.classList.add('central-whatsapp');
    whatsappButton.onclick = () => {
        window.open('https://wa.me/918700612665', '_blank');
    };
    testimonialsContainer.parentElement.appendChild(whatsappButton);
}

// Predefined image filenames for testimonials
const testimonialImages = [
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

// Load images when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTestimonialImages(testimonialImages);
});
