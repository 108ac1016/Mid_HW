$(document).ready(function(){

    var image = new Array();

    for(var i = 0;i < 4;i++){
        image[i] = new Image();
    }
    image[0].src = "mat/btn/but1-3.png";
    image[1].src = "mat/btn/but2-3.png";
    image[2].src = "mat/btn/but3-3.png";
    image[3].src = "mat/btn/but4-3.png";

    // mainpage
    $('#news').hover(
        function(){
            $('#news').attr("src", "mat/btn/but1-2.png")
            $('#news_holder').append(image[0])
            $(image[0]).css({'max-width':'100%','max-height':'100%'});
        },
        function(){
            $('#news').attr("src", "mat/btn/but1-1.png")
            $('#news_holder').empty()
        }
    );
    $('#dining').hover(
        function(){
            $('#dining').attr("src", "mat/btn/but2-2.png")
            $('#dining_holder').append(image[1])
        },
        function(){
            $('#dining').attr("src", "mat/btn/but2-1.png")
            $('#dining_holder').empty()
        }
    );
    $('#location').hover(
        function(){
            $('#location').attr("src", "mat/btn/but3-2.png")
            $('#location_holder').append(image[2])
        },
        function(){
            $('#location').attr("src", "mat/btn/but3-1.png")
            $('#location_holder').empty()
        }
    );
    $('#review').hover(
        function(){
            $('#review').attr("src", "mat/btn/but4-2.png")
            $('#review_holder').append(image[3])
        },
        function(){
            $('#review').attr("src", "mat/btn/but4-1.png")
            $('#review_holder').empty()
        }
    );

    // slick
    $('.panel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1
    });
    $('#dining').click(function(){
        $('aside').html('<div class="panel">'
        + '<img src="mat/atmos/01.JPG" alt="用餐環境">'
        + '<img src="mat/atmos/02.jpg" alt="用餐環境">'
        + '<img src="mat/atmos/03.jpg" alt="用餐環境">'
        + '<img src="mat/atmos/04.jpg" alt="用餐環境">'
        + '<img src="mat/atmos/05.jpg" alt="用餐環境">'
        + '<img src="mat/atmos/06.jpg" alt="用餐環境">'
        + '</div>')
        $('.panel').slick({
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1
        })
    });
    $('#location').click(function(){
        $('.panel').html('<img src="mat/location.png" alt="餐廳分布">')
    });
});
