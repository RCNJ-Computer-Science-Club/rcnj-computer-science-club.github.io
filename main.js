// Create the script element
let darkReaderScript = document.createElement('script');
darkReaderScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/darkreader/4.9.58/darkreader.js';
darkReaderScript.integrity = 'sha512-SVegqt9Q4E2cRDZ5alp9NLqLLJEAh6Ske9I/iU37Jiq0fHSFbkIsIbaIGYPcadf1JBLzdxPrkqfH1cpTuBQJvw==';
darkReaderScript.crossOrigin = 'anonymous';
darkReaderScript.referrerPolicy = 'no-referrer';
darkReaderScript.onload = () => DarkReader.enable();
document.head.insertBefore(darkReaderScript, document.head.firstChild);

function loadGIF(){
  let element = document.getElementById("home")
  element.style.backgroundImage = 'url("' + 'https://rcnj-computer-science-club.github.io/res/output.gif' + '")';
  // element.style.opacity = 0.2;
}

loadGIF();