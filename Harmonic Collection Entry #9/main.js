    // Functions to play specific sounds
    function playSound1() {
      var audio = document.getElementById('sound1');
      audio.currentTime = 0;
      audio.play();
    }

    function playSound2() {
      var audio = document.getElementById('sound2');
      audio.currentTime = 0;
      audio.play();
    }

    function playSound3() {
      var audio = document.getElementById('sound3');
      audio.currentTime = 0;
      audio.play();
    }

    function playSound4() {
      var audio = document.getElementById('sound4');
      audio.currentTime = 0;
      audio.play();
    }

    function playSound5() {
      var audio = document.getElementById('sound5');
      audio.currentTime = 0;
      audio.play();
    }

    function playSound6() {
      var audio = document.getElementById('sound6');
      audio.currentTime = 0;
      audio.play();
    }

    function playSound7() {
      var audio = document.getElementById('sound7');
      audio.currentTime = 0;
      audio.play();
    }

    function playSound8() {
      var audio = document.getElementById('sound8');
      audio.currentTime = 0;
      audio.play();
    }

    function playSound9() {
      var audio = document.getElementById('sound9');
      audio.currentTime = 0;
      audio.play();
    }

    function playSound10() {
      var audio = document.getElementById('sound10');
      audio.currentTime = 0;
      audio.play();
    }

    // Attach hover event listeners to each word/span
    document.getElementById('word1').addEventListener('mouseenter', function () {
      playSound1();
    });

    document.getElementById('word2').addEventListener('mouseenter', function () {
      playSound2();
    });

    document.getElementById('word3').addEventListener('mouseenter', function () {
      playSound3();
    });

    document.getElementById('word4').addEventListener('mouseenter', function () {
      playSound4();
    });

    document.getElementById('word5').addEventListener('mouseenter', function () {
      playSound5();
    });

    document.getElementById('word6').addEventListener('mouseenter', function () {
      playSound6();
    });

    document.getElementById('word7').addEventListener('mouseenter', function () {
      playSound7();
    });

    document.getElementById('word8').addEventListener('mouseenter', function () {
      playSound8();
    });

    document.getElementById('word9').addEventListener('mouseenter', function () {
      playSound9();
    });

    document.getElementById('word10').addEventListener('mouseenter', function () {
      playSound10();
    });