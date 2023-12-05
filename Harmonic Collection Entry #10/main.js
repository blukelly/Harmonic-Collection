    const audioFiles = {
      'image1': 'audio/Chill Kill.mp3',
      'image2': 'audio/Knock Knock (Whos There).mp3',
      'image3': 'audio/Underwater.mp3',
      'image4': 'audio/Will I Ever See You Again.mp3',
      'image5': 'audio/Nightmare.mp3',
      'image6': 'audio/Iced Coffee.mp3',
      'image7': 'audio/One Kiss.mp3',
      'image8': 'audio/Bulldozer.mp3',
      'image9': 'audio/Wings.mp3',
      'image10': 'audio/Scenery.mp3'
    };

    const images = document.querySelectorAll('img');
    const audio = document.getElementById('audio');

    // Function to play the audio corresponding to the hovered image
    function playAudio(event) {
      const imageId = event.target.id;
      if (audioFiles.hasOwnProperty(imageId)) {
        audio.src = audioFiles[imageId];
        audio.play();
      }
    }

    // Attach event listener to each image for hovering
    images.forEach((image) => {
      image.addEventListener('mouseenter', playAudio);
    });