// Function to load predefined images into the listings
function loadListingsImages(imageFilenames) {
    const listingsContainer = document.getElementById('listing-container');
    listingsContainer.innerHTML = ''; // Clear any existing images

    imageFilenames.forEach(filename => {
        const listingItem = document.createElement('div');
        listingItem.classList.add('listing-item');

        // Create image element
        const imgElement = document.createElement('img');
        imgElement.src = `assets/images/listings/${filename}`;
        imgElement.alt = filename;
        listingItem.appendChild(imgElement);

        // Create "View Ad" button
        const adButton = document.createElement('button');
        adButton.textContent = 'View Ad';
        adButton.onclick = () => {
            // Redirect to the Facebook page
            window.open('https://www.facebook.com/9PropertyWala', '_blank');
        };
        listingItem.appendChild(adButton);

        // Create "Call on WhatsApp" button
        const callButton = document.createElement('button');
        callButton.textContent = 'Call on WhatsApp';
        callButton.classList.add('call-button');
        callButton.onclick = () => {
            // WhatsApp link with the provided number
            window.open('https://wa.me/918700612665', '_blank');
        };
        listingItem.appendChild(callButton);

        listingsContainer.appendChild(listingItem);
    });
}

// Predefined image filenames for listings (update this array as needed)
const listingImages = [
    'image_ (1).jpeg',
    'image_ (1).png',
    'image_ (2).jpeg',
    'image_ (2).jpg',
    'image_ (3).jpeg',
    'image_ (3).jpg',
    'image_ (4).jpg'
];

// Load images when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadListingsImages(listingImages);
});
