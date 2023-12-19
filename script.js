function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.getElementById('playButton').addEventListener('click', function() {
    // URL of the image to be opened in a new window
    var imageUrl = './assets/Vishal Bhashyaam best paper certificate.jpg'; // Replace 'path_to_your_image.jpg' with your image URL

    // Open the image in a new window
    window.open(imageUrl, '_blank');
  });

