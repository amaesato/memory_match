$(document).ready( function() {


  var $hidden = $('.hidden');
  var $alertText = $('.alertText');
  var click = null;
  var firstClick = null;
  var secondClick = null;
  var noClick1 = null;
  var noClick2 = null;
  var that = null;


  $('.toggleMenu').click(function() {
    $('.gameIntro').slideToggle();
    $hidden.slideToggle();
  });

  $('.reset').on('click', function() {
    var flipReset = $('div.disabled')
    flipReset.removeClass('disabled').toggleClass('black-bg')
    noClick1.val(null);
    noClick2.val(null);
    // numbers are shuffled
    // TODO figure out how to iterate over the newly shuffled array without reload
    $.ajax({
      url: '/index',
      type: 'GET',
      dataType: 'JSON'
    }).done(function(data) {
      console.log(data);
    }).fail(function(data) {
      console.log(data);
    });
  });

// TODO Replace numbers with images
  $('.card').on('click', function() {
    that = $(this);
    click = $(this).data('value');
    console.log(click)
    that.toggleClass('black-bg');
    that.find('h1:first').fadeIn('hidden');
    value();
  });

function value() {
  if (firstClick === null) {
    firstClick = click;
    noClick1 = that;
    noClick1.addClass('disabled');
    // noClicky();
    console.log(firstClick)
  } else {
    secondClick = click;
    noClick2 = that;
    noClick2.addClass('disabled');
    setTimeout(function() {
      isMatch();
    },600);
  }
}

function removeDisabled() {
  noClick1.removeClass('disabled');
  noClick2.removeClass('disabled');
}

function isMatch() {
  if (firstClick === secondClick) {
    matchCount();
    clearClick();
  } else {
    noMatch();
    clearClick();
  }
}

function clearClick() {
  firstClick = null;
  secondClick = null;
}

function noMatch() {
  noClick1.removeClass('disabled').toggleClass('black-bg');
  noClick2.removeClass('disabled').toggleClass('black-bg');
}


function matchCount() {
  var match = 0
  match ++;
  if (match === 8) {
    $alertText.text('You Won! Kind of... it took you really long.').fadeIn(500).delay(1200).fadeOut(500);
  } else {
    $alertText.text('MATCH!').fadeIn(500).delay(800).fadeOut(500);
  }
}

});
