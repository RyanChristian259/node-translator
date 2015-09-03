// add scripts

$('.start-quiz').on('click', function() {
  $('#translated-word').hide();
  $('.flashcard').show();
  $('#answer-form').show();
  $('#results').hide();
  $('#translate').hide();
  $('.translator').show();

});

$('.translator').on('click', function() {
  $('#translated-word').show();
  $('.flashcard').hide();
  $('#answer-form').hide();
  $('#results').show();
  $('#translate').show();
  $('.translator').hide();

});

$(document).on('ready', function() {
  $('.translator').hide();
  $('.flashcard').hide();
  $('#answer-form').hide();
  $('.flashcard').on('click', function() {
    $('.flashcard').toggleClass('flipped');
  });


  $('.start-quiz').on('click', function() {
    $.ajax({
      method: 'get',
      url: '/quiz',
    })
    .done(function(data){
      console.log(data);
    });
  });

  $('form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: 'post',
      url: '/',
      data: {
        fromLanguage: $('#fromLanguage').val(),
        toLanguage: $('#toLanguage').val(),
        translateWord: $('#translateWord').val()
      }
    })
    .done(function(data){
      console.log(data);
      $('#results').text(data.translated_text);
    })
    .fail(function(err){
      console.log(err);
    });
  });
});
