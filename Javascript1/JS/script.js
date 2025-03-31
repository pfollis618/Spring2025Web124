/*Patrick Follis 3/30/2025*/
/* JavaScript Adapted from https://javascript30.com/
    Follow Along Links */

/*New Elements: getBoundingClientRect, transform, scrollY, scrollX, setProperty*/
/* added constants buttonR, buttonG, buttonB, and buttonP, added functions overwriteBackgroundR, overwriteBackgroundG, overwriteBackgroundB, and overwriteBackgroundP*/

/*changes 'a' to 'img' in all causes to switch it to be on images*/
const triggers = document.querySelectorAll('img');
  const highlight = document.createElement('span');
  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

  function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
      width: linkCoords.width,
      height: linkCoords.height,
      top: linkCoords.top + window.scrollY,
      left: linkCoords.left + window.scrollX
    };
        /* changed it to have a + 5 to fit around the pictures */
    highlight.style.width = `${coords.width + 5}px`;
    highlight.style.height = `${coords.height + 5}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    
    //Test to see if the change would work
    //console.log(coords.width + 1)
    //console.log(coords.width)
  }

  triggers.forEach(img => img.addEventListener('mouseenter', highlightLink));

/* JavaScript for the Buttons that change the color of the highlight */
/* help from https://alvarotrigo.com/blog/change-css-javascript/ */
const buttonR = document.querySelector(".buttonR");

buttonR.addEventListener("click", overwriteBackgroundR);

function overwriteBackgroundR(){
    const rBackground = document.querySelector('.highlight');
    rBackground.style.setProperty('background-color', 'lightcoral');
}

const buttonG = document.querySelector(".buttonG");

buttonG.addEventListener("click", overwriteBackgroundG);

function overwriteBackgroundG(){
    const gBackground = document.querySelector('.highlight');
    gBackground.style.setProperty('background-color', 'lightgreen');
}

const buttonB = document.querySelector(".buttonB");

buttonB.addEventListener("click", overwriteBackgroundB);

function overwriteBackgroundB(){
    const bBackground = document.querySelector('.highlight');
    bBackground.style.setProperty('background-color', 'lightblue');
}

const buttonP = document.querySelector(".buttonP");

buttonP.addEventListener("click", overwriteBackgroundP);

function overwriteBackgroundP(){
    const pBackground = document.querySelector('.highlight');
    pBackground.style.setProperty('background-color', '#e0b3ff');
}
