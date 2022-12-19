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
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
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
        $('.step-three.only-mobile').css('display', 'block');
        $('.open-letter.only-mobile').css('display', 'inline-block');
      });
    } else{
      // false for not mobile device
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
        $('.step-three.only-desktop').css('display', 'block');
        $('.open-letter.only-desktop').css('display', 'inline-block');
      });
    }

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
    });

    /* Agregar acordeon aqui */
    var acc = document.getElementsByClassName('faqs-title');
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }

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

});