// Add multiple text in input placeholder.

const placeholderTexts = [
      "Filet Mignon",
      "NY Strip",
      "Ribeye"
    ];
    
    let currentIndex = 0;
    let currentText = placeholderTexts[currentIndex];
    let placeholderInterval;
    let charIndex = 0;
    let typingSpeed = 100; // Typing speed in milliseconds
    
    function typeText() {
      if (charIndex < currentText.length) {
        let placeholder = currentText.substr(0, charIndex + 1); // Get the substring of the current text
        document.getElementById("Search").setAttribute("placeholder", placeholder);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(eraseText, 1000); // Wait before erasing text
      }
    }
    
    function eraseText() {
      if (charIndex >= 0) {
        let placeholder = currentText.substr(0, charIndex); // Get the substring of the current text
        document.getElementById("Search").setAttribute("placeholder", placeholder);
        charIndex--;
        setTimeout(eraseText, typingSpeed);
      } else {
        currentIndex = (currentIndex + 1) % placeholderTexts.length;
        currentText = placeholderTexts[currentIndex];
        charIndex = 0;
        setTimeout(typeText, 500); // Wait before typing next text
      }
    }
    
    function startTypingEffect() {
      placeholderInterval = setTimeout(typeText, 500); // Start typing effect
    }
    
    function stopTypingEffect() {
      clearTimeout(placeholderInterval); // Stop typing effect
    }
    
    // Start the typing effect when the page loads
    window.onload = function() {
      startTypingEffect();
    };
    
    // Stop the typing effect if the input field is focused
    document.getElementById("Search").addEventListener("focus", function() {
      stopTypingEffect();
    });
    
    // Restart the typing effect if the input field loses focus
    document.getElementById("Search").addEventListener("blur", function() {
      startTypingEffect();
    });
