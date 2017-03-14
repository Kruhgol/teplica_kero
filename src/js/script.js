document.addEventListener("DOMContentLoaded", function(){

    var width = $('#photo-container').width();
    var height = $(window).height();
    console.log('w = ' + width);
    console.log('h = ' + height);

    var maxW = '300px';
    var arr = [
            'img/1.1.jpg',
            'img/1.2.jpg',
            'img/2.1.jpg',
            'img/2.2.1.jpg',
            'img/1.1.jpg',
            'img/1.2.jpg',
            'img/2.1.jpg',
            'img/2.2.1.jpg',
            'img/1.1.jpg',
            'img/1.2.jpg',
            'img/2.1.jpg',
            'img/2.2.1.jpg'
        ]

    var div = $('#photo-container');

    div.css({
        'height' : '500px',
        'position' : 'relative'
    })

    for(var i=0; i<arr.length; i++){
        var img = $('<img>',{
            src: arr[i],
            width: randomWidth() + 'px'
        });
        img.css({
            'position' : 'absolute',
            'z-index' : randomZindex(),
            'top' : randomTop() + 'px',
            'left' : randomLeft() + 'px'
        })
        div.append(img);
    }

    div.bind('mouseover', function(event){
        var img = event.target;
        console.log(img.src);
        div.append($('<img>', {
            src: img.src
        }).css({
            'position' : 'absolute',
            'z-index' : '30',
            'top' : height/2 + 'px',
            'left' : width/2 + 'px',
            'width' : width + 'px'
        }).bind('mouseout', function(){
            this.remove()
        }))

    })

    function randomTop(){
        min = 50;
        max = 500 - 150;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomLeft(){
        min = 0;
        max = width - 300;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomWidth(){
        max = 300;
        min = 100;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomZindex(){
        max = 20;
        min = 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }




})