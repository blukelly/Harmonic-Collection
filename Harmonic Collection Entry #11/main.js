    let currentImageIndex = 1;
    const totalImages = 10; // Update the total number of images

    function changeImage(event) {
      const imageElement = document.getElementById('mainImage');
      const audioElement = document.getElementById('audio');
      const audioSource = document.getElementById('audioSource');

      currentImageIndex = (currentImageIndex % totalImages) + 1;
      imageElement.src = `images/image${currentImageIndex}.jpg`;
      audioSource.src = `songs/song${currentImageIndex}.mp3`;
      
      audioElement.load();
      audioElement.play();
    }