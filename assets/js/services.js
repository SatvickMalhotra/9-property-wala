// Function to load predefined images into the services section
function loadServicesImages(imageFilenames) {
    const servicesContainer = document.getElementById('service-container');
    servicesContainer.innerHTML = ''; // Clear any existing images

    imageFilenames.forEach(filename => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');

        // Create image element
        const imgElement = document.createElement('img');
        imgElement.src = `assets/images/design/${filename}`;
        imgElement.alt = filename;
        serviceItem.appendChild(imgElement);

        // Create "View Ad" button
        const adButton = document.createElement('button');
        adButton.textContent = 'View Ad';
        adButton.onclick = () => {
            // Redirect to the Facebook page
            window.open('https://www.facebook.com/9PropertyWala', '_blank');
        };
        serviceItem.appendChild(adButton);

        // Create "Call on WhatsApp" button
        const callButton = document.createElement('button');
        callButton.textContent = 'Call on WhatsApp';
        callButton.classList.add('call-button');
        callButton.onclick = () => {
            // WhatsApp link with the provided number
            window.open('https://wa.me/918700612665', '_blank');
        };
        serviceItem.appendChild(callButton);

        servicesContainer.appendChild(serviceItem);
    });
}

// Updated image filenames for services
const serviceImages = [
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

// Load images when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadServicesImages(serviceImages);
});
