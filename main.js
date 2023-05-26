// Create the script element
let darkReaderScript = document.createElement('script');
darkReaderScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/darkreader/4.9.58/darkreader.js';
darkReaderScript.integrity = 'sha512-SVegqt9Q4E2cRDZ5alp9NLqLLJEAh6Ske9I/iU37Jiq0fHSFbkIsIbaIGYPcadf1JBLzdxPrkqfH1cpTuBQJvw==';
darkReaderScript.crossOrigin = 'anonymous';
darkReaderScript.referrerPolicy = 'no-referrer';
darkReaderScript.onload = function (e) {
  DarkReader.enable();
}

// Append the script element to the head section
document.head.appendChild(darkReaderScript);

// /html/body/div[2]/div/section


// document.querySelector("#home")

function loadGIF(){
  let element = document.getElementById("home")
  element.style.backgroundImage = 'url("' + 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDZkZmYzOGNhNDE3NDE4M2RiNTQxMmUxMTM5YWZhYjVmZjdjMzA4NyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xT9IgzoKnwFNmISR8I/giphy.gif' + '")';
  // element.style.opacity = 0.2;
}


// Code to be executed every second
function runEverySecond() {
  // Your code here
  // DarkReader.enable();

  if (DarkReader.isEnabled()) {
      // clearInterval(interval); // Stop the interval timer
  }
    
}

// Start the interval timer
loadGIF();
// let interval = setInterval(runEverySecond, 1);

// this is a update

