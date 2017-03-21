document.addEventListener("DOMContentLoaded", function(){

$('#close-call').bind('click', function(){
    $('#call-me').hide();
});

$('#toch').bind('click', callFormShow);
$('#call-img').bind('click', callFormShow);

function callFormShow(){
    var callFormConteiner = $('#call-form');
    var width = $(window).width();
    var height = $(window).height();
    callFormConteiner.css({'width':width, 'height': height});
    callFormConteiner.show();
    $('#call-me').hide();
}

$('#close-form').bind('click', function(){
    $('#call-form').hide();
    $('#call-me').show();
});

$('#form-button').bind('click', function(){
    console.log($('#form'));
    var text = 'Вам пришел новый запрос от - '+
        $('#name').val() +', номер телефона - '+
        $('#number').val() +', email - '+$('#email').val();
    console.log(text);

    $.post(
      "http://127.0.0.1:8000/request/email",
      {
        email: $('#email').val(),
        name: $('#name').val(),
        number: $('#number').val(),
        text: text
      },
      onAjaxSuccess
    ); 
    $('#call-form').hide();
    $('#call-me').show();
})

function onAjaxSuccess(){
    $('#call-form').hide();
    alert('Ваш запрос успешно отправлен')
} 
function onAjaxNotSuccess(){
    $('#call-form').hide();
    alert('Извините, произошла ошибка! Попробуйте еще разок!')
}
// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
function sameOrigin(url) {
    // test that a given url is a same-origin URL
    // url could be relative or scheme relative or absolute
    var host = document.location.host; // host + port
    var protocol = document.location.protocol;
    var sr_origin = '//' + host;
    var origin = protocol + sr_origin;
    // Allow absolute or scheme relative URLs to same origin
    return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
        (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
        // or any other URL that isn't scheme relative or absolute i.e relative.
        !(/^(\/\/|http:|https:).*/.test(url));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
            // Send the token to same-origin, relative URLs only.
            // Send the token only if the method warrants CSRF protection
            // Using the CSRFToken value acquired earlier
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});
  
   


})