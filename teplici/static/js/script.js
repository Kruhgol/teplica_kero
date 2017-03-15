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

    div.bind('click', function(event){
        var img = event.target;
        console.log(img.src);

        var divTable = $('<div>',{
                'id' : 'div-table'
            }).css({
                'position' : 'fixed',
                'top' : '0px',
                'width' : width + 'px',
                'height' : height + 'px',
                'display' : 'table',
                'z-index' : '30'
            })

        var divTableCell = $('<div>').css({
            'width' : '80%',
            'display' : 'table-cell',
            'vertical-align' : 'middle',
            'text-align' : 'center'
        })

        divTableCell.append($('<img>', {
            src: img.src
        }).css({
            'width' : '100%'
        }));

        divTable.append(divTableCell);
        $('#photo-container').append(divTable);

        $('#div-table').bind('click', function(){
            console.log('remove');
            $('#div-table').remove();
       })

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