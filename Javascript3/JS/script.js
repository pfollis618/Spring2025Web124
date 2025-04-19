// Patrick Follis 4/18/2025
// Adapted from https://javascript30.com/
//     Key Sequence Detection
/*New Elements:  .push, .splice, .includes, .join, 'keyup'*/
const pressed = [];
      const secretCode = "dobbk";
    //   added two other codes
      const secretCodeTwo = "tefqb";
      const secretCodeThree = "yixzh";

      window.addEventListener("keyup", (e) => {
        console.log(e.key);
        pressed.push(e.key);
        pressed.splice(
          -secretCode.length - 1,
          pressed.length - secretCode.length
        );
        if (pressed.join("").includes(secretCode)) {
          console.log("DING DING!");
        //   help from https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
        //   Made it so that the background and text color change when the code is put in
            document.body.style.backgroundColor = "#00aa00"
            document.body.style.color = "#000000"
        //   cornify_add();
        // added two 'else if's to it to include more code reactions
        } else if (pressed.join("").includes(secretCodeTwo)) {
            document.body.style.backgroundColor = "#FFFFFF"
            document.body.style.color = "#000000"
        } else if (pressed.join("").includes(secretCodeThree)){
            document.body.style.backgroundColor = "#000000"
            document.body.style.color = "#FFFFFF"
        }
        console.log(pressed);
      });
