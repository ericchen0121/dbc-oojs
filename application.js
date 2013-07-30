$(document).ready(function() {

  // Die
  function Die(){
    this.roll_value = 0;
  };


  // Dicebag
  function Dicebag(){
    this.contents = new Array();
  } 

  Dicebag.prototype.newdie = function() {
    this.contents.push(new Die());
  }

  Dicebag.prototype.rolldie = function() {
    for (var i = 0; i < this.contents.length; i++) {
      this.contents[i] = Math.floor((Math.random()*6)+1);
    }
  }

  Dicebag.prototype.displaydie = function() {
    $('.dice').children().remove(); //clear screen

    for (var i = 0; i < this.contents.length; i++) {
      $('.dice').append('<div class="die">' + this.contents[i] +'</div>');
    };
  }

  // Instantiate object
  var a = new Dicebag();

  // JS Handlers
  // Adds the die to the page
  $('#roller button.add').on('click', function() {
    a.newdie();
    $('.dice').append('<div class="die">' + a.contents[0].roll_value +'</div>');
  });

  $('#roller button.roll').on('click', function() {
    a.rolldie();
    a.displaydie();
  });

});
