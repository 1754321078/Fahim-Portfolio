// Sample video and image URLs
const videoUrls = ["url1", "url2", "url3"]; // Replace with actual video URLs
const imageUrls = ["url4", "url5", "url6"]; // Replace with actual image URLs

const galleryContent = document.getElementById("gallery-content");

function showAll() {
  clearGallery();
  displayItems(videoUrls.concat(imageUrls));
}

function showVideos() {
  clearGallery();
  displayItems(videoUrls);
}

function showImages() {
  clearGallery();
  displayItems(imageUrls);
}

function displayItems(items) {
  items.forEach((itemUrl) => {
    const itemType = itemUrl.includes(".mp4") ? "video" : "image";
    const item = document.createElement(itemType);
    item.className = "gallery-item";
    
    if (itemType === "video") {
      item.innerHTML = `<video controls><source src="${itemUrl}" type="video/mp4"></video>`;
    } else {
      item.innerHTML = `<img src="${itemUrl}" alt="Image">`;
    }

    galleryContent.appendChild(item);
  });
}

function clearGallery() {
  galleryContent.innerHTML = "";
}
