$(document).ready(function () {
    // Open/Close menu mobile
    $(".icon").click(function() {
        $(this).toggleClass('active');
        $(".navbar").toggleClass("active");
    });

    // Actions that are executed when generating when selecting the character that will sign the letter.
    $(".opt-radius").click(function() {
        $(this).toggleClass('selected');
        var val = $(this).val();
        console.log(val);
        $('.img-capture').attr('src', '/assets/images/letter-from-'+val+'.jpg');
        switch (val) { 
          case 'santa':
            console.log('Selected Santa');
            $('#capture').addClass('letter-santa');
            $('#capture').removeClass('letter-kings');  
            $('#capture').removeClass('letter-olentzero');  
            $('#capture').removeClass('letter-cagatio');            
            break;
          case 'kings': 
            console.log('Selected kings');
            $('#capture').addClass('letter-kings');
            $('#capture').removeClass('letter-santa letter-olentzero letter-cagatio');
            break;
          case 'olentzero': 
            console.log('Selected olentzero');
            $('#capture').addClass('letter-olentzero');
            $('#capture').removeClass('letter-santa letter-kings letter-cagatio');
            break;	
          case 'cagatio': 
            console.log('Selected cagatio');
            $('#capture').addClass('letter-cagatio');
            $('#capture').removeClass('letter-santa letter-kings letter-olentzero');
            break;
          default:
            return;
        }
    });

    // Character counter of the textarea where the message of the letter is added.
    $('#message').keyup(function() {    
        var characterCount = 
            $(this).val().length,
            current = $('#current'),
            maximum = $('#maximum'),
            theCount = $('#the-count');
        current.text(characterCount);
        if (characterCount >= 350) {
          maximum.css('color', '#AD081B');
          current.css('color', '#AD081B');
          theCount.css('font-weight','bold');
        }
        $('.step-three').css('display', 'block');
        $('.open-letter').css('display', 'inline-block');
    });

    //Add child's name 
    $("#nameChild").keyup(function () {
        $("#addName").html(this.value);
    });

    // Add message for child
    $("#message").keyup(function () {
        $("#msg-to-kid").html(this.value);
    });

    // Generate personalized image and download letter.
    function download(url){
      var a = $("<a style='display:none' id='js-downloder'>")
      .attr("href", url)
      .attr("download", "mi-carta.jpg")
      .appendTo("body");      
      a[0].click();      
      a.remove();
    }
      
    function saveCapture(element) {
      html2canvas(element).then(function(canvas) {
        download(canvas.toDataURL("image/jpg"));
      })
    }
    
    $('#btnDownload').click(function(){
      var element = document.querySelector("#capture");
      saveCapture(element)
    })

    // Actions Modal
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    
    // Open Modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // Close modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Snow animation
    function documentReady()
    {
      var MAX_SNOW 		= 200;
      var MAX_SNOW_SIZE 	= 7;
      var MAX_SNOW_SPEED 	= 2;

      snowStart();
      function snowStart() {
        console.log("// Snow animation start");
        createSnows();
      }

      function createSnows() {
        var container = $("#myModal");
        for (var i = 0; i < MAX_SNOW; i++) {
          var appendItem	= getRandomItem(i);
          container.append(appendItem);
          var animateItem = $(".snow" + String(i));
          var randomTime 	= Math.random() * MAX_SNOW_SPEED;
          goAnimate(animateItem, i, randomTime);
          goAnimate2(animateItem);
        };
        console.log("// Create snows");
      }

      function goAnimate(item, id, randomTime) {
        TweenMax.to(item, randomTime, {css:{marginTop:"+=100"}, ease:Linear.easeNone, onComplete:function() { 
          var topPosition = item.css("margin-top").replace("px","");
          if (topPosition > $(window).height()) {
            changePosition(item);
            randomTime = Math.random() * MAX_SNOW_SPEED;
            goAnimate(item, id, randomTime);
          }
          else {
            goAnimate(item, id, randomTime);
          }
        }});
      }

      function goAnimate2(item) {
        var directionTime 	= 1 + Math.floor( Math.random() * 5 );
        var randomDirection = 1 + Math.floor( Math.random() * 4 );
        var delayTime		= 1 + Math.floor( Math.random() * 3 );
        if (randomDirection == 1){
          TweenMax.to(item, directionTime, {css:{marginLeft:"+=100"}, ease:Linear.easeOut, onComplete:function() {
            TweenMax.to(item, directionTime, {css:{marginLeft:"-=100"}, delay:delayTime, ease:Linear.easeOut, onComplete:function() { 
              goAnimate2(item);
            }});
          }});
        }
        else if(randomDirection == 2)
        {
          TweenMax.to(item, directionTime, {css:{marginLeft:"-=100"}, ease:Linear.easeOut, onComplete:function() { 
            TweenMax.to(item, directionTime, {css:{marginLeft:"+=100"}, delay:delayTime, ease:Linear.easeOut, onComplete:function() {
              goAnimate2(item);
            }});
          }});
        }
        else if(randomDirection == 3)
        {

          TweenMax.to(item, directionTime, {css:{marginLeft:"+=100"}, ease:Linear.easeOut, onComplete:function() { 
            goAnimate2(item);

          }});
        }
        else if(randomDirection == 4)
        {
          TweenMax.to(item, directionTime, {css:{marginLeft:"-=100"}, ease:Linear.easeOut, onComplete:function() { 
            goAnimate2(item);
          }});
        }
      }

      function changePosition(item) {
        var _width 	= Math.floor( Math.random() * MAX_SNOW_SIZE );
        var _height = _width;
        var _blur 	= Math.floor( Math.random() * 5+2 );
        var _left 	= Math.floor( Math.random() * ($(window).width() - _width) );
        var _top 	= -$(window).height() + Math.floor( Math.random() * ($(window).height() - _height) );

        item.css("width", _width);
        item.css("height", _height);
        item.css("margin-left", _left);
        item.css("margin-top", _top);
        item.css("-webkit-filter", "blur(" + String(_blur) + "px)");
        item.css("-moz-filter", "blur(" + String(_blur) + "px)");
        item.css("-o-filter", "blur(" + String(_blur) + "px)");
        item.css("-ms-filter", "blur(" + String(_blur) + "px)");
        item.css("filter", "blur(" + String(_blur) + "px)");
      }

      function getRandomItem(id) {
        var _width 	= Math.floor( Math.random() * MAX_SNOW_SIZE );
        var _height = _width;
        var _blur 	= Math.floor( Math.random() * 5+2 );
        var _left 	= Math.floor( Math.random() * ($(window).width() - _width) );
        var _top 	= -$(window).height() + Math.floor( Math.random() * ($(window).height() - _height) );
        var _id 	= id;
        return getSmallSnow(_width, _height, _blur, _left, _top, _id);
      }

      function getSmallSnow(width, height, blur, left, top, id) {
        var item = "<div class='snow" + id + "' style='position:absolute; margin-left: " + left + "px; margin-top: " + top + "px; width: " + width + "px; height: " + height + "px; border-radius: 50%; background-color: white; -webkit-filter: blur(" + blur +"px); -moz-filter: blur(" + blur + "px); -o-filter: blur(" + blur + "px); -ms-filter: blur(" + blur + "px); filter: blur(" + blur + "px);'></div>"
        return item;
      }
    }
});