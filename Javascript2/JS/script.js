/*Patrick Follis 4/13/2025*/
// Adapted from https://javascript30.com/
// Mouse Move Shadow

/*New Elements: offsetx, offsety offsetWidth, offsetHeight, offsetLeft, offsetTop, textShadow*/
// New Code from me: changed 500 to 30, changed h1 to nav, and changed color of last one to white & changed the orientation of the last 2 by .5, added a -.3 to the second to last line and added a -.2 to the second one
const hero = document.querySelector('.hero');
const text = hero.querySelector('nav'); // changed the h1 to nav
  // changed the 500 to 30
  const walk = 30; // 500px 

  function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    //changed color of last one to white & changed the orientation of the last 2 by .5, added a -.3 to the second to last line and added a -.2 to the second one
    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk -.2}px 0 rgba(0,255,255,0.7),
      ${yWalk -.3}px ${xWalk * -1.5}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1.5}px ${xWalk}px 0 rgba(255,255,255,0.7) 
    `;

  }


  hero.addEventListener('mousemove', shadow);
