$(document).ready(function() {

  var randomElement = function(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  var randomMessage = function() {
    return [
      randomElement(opening),
      randomElement(verbs),
      randomElement(objects),
      randomElement(nouns),
      randomElement(tags)
    ];
  };

  $('#generate-poem').click(function(event) {
    event.preventDefault();

    var boxStyle = 'style="display: flex; justify-content: center; \
      align-text: center; height: 25px; border: 2px solid gray; padding: 20px"';

    $( 'p' ).remove();

    var poem = randomMessage();

    for(var i = 0; i < poem.length; i++) {
      if(poem[i] !== '') {
        $( '#magnets' ).append( '<p id="poem-word' + i + '" ' + boxStyle + '>' + poem[i] + '</p>' );
        $( '#poem-word' + i ).draggable();
      }
    }

  });

});