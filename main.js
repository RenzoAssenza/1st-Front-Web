let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Capital del sol y del buen vino')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  