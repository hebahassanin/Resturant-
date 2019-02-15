
/* change background color to active link*/

/*
$(document).ready(function(){
    $(".mainmenu >li").click(function(){
        $(".mainmenu >li").removeClass('active');
        $(this).addClass('active');
    });
});

*/


/*
jQuery(document).ready(function($){
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();
    
    // Account for home page with empty path
    if ( path == '' ) {
      path = 'index.html';
    }
        
    var target = $('nav a[href="'+path+'"]');
    // Add active class to target link
    target.addClass('active');
  });

  */

/*
 function setActive() {
    aObj = document.getElementById('nav').getElementsByTagName('a');
    for(i=0;i<aObj.length;i++) { 
      if(document.location.href.indexOf(aObj[i].href)>=0) {
        aObj[i].className='active';
      }
    }
  }

  window.onload = setActive;

  */

/*
 jQuery(function($) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('ul a').each(function() {
     if (this.href === path) {
      $(this).addClass('active');
     }
    });
   });
*/

var path=window.location.href;
$(document).ready(function(){
  $('ul a').each(function(){
    if(this.href===path)
    {
      $(this).addClass('active');
    }
  })
})


