


$('#hamburger').click(function(){

	$('header nav, #hamburger').toggleClass('open');

});


// // GALLERY

// var twoCol;

// var width = $(window).width();

// $(window).on('resize', function(){
// 	if (typeof variable !== 'undefined'){
// 	lightbox.destroy();
// 	}
//    if($(this).width() != width){
//       width = $(this).width();
//       if (width < 992 && twoCol == false) {
//       	twoCol = true
//       	$('.gallery-col-1').html('')
//       	$('.gallery-col-2').html('')
//       	$('.gallery-col-3').html('')
//       	twoColLayout()
//       } else if (width > 992 && twoCol == true){
//       	twoCol = false
//       	$('.gallery-col-1').html('')
//       	$('.gallery-col-2').html('')
//       	$('.gallery-col-3').html('')
//       	threeColLayout()
//       }
//    }
// });

// if (width < 992) {
// 	twoColLayout()
// 	twoCol = true
// } else {
// 	threeColLayout()
// 	twoCol = false
// }

// function threeColLayout() {
	
// 	for( var i = 0; i <= 20; i++) {

// 		var imgBox = '<a id="image-' + i + '" class="image-box" href="images/big-img-' + i + '.jpg"><img src="images/img-' + i + '.jpg"/></a>';

// 		if (i < 7) {

// 			$('.gallery-col-1').append(imgBox);
			
// 		} else if (i >= 7 && i < 14) {

// 			$('.gallery-col-2').append(imgBox);

// 		} else {
// 			$('.gallery-col-3').append(imgBox);
// 		}
// 	};


// 	var waypoints = $('#image-18').waypoint({
// 	  handler: function(direction) {


// 		for( var j = 21; j <= 41; j++) {

// 			var imgBox = '<a id="image-' + j + '" class="image-box" href="images/big-img-' + j + '.jpg"><img src="images/img-' + j + '.jpg" /></a>';

// 			if (j < 28) {

// 				$('.gallery-col-1').append(imgBox);
				
// 			} else if (j >= 28 && j < 35) {

// 				$('.gallery-col-2').append(imgBox);

// 			} else {
// 				$('.gallery-col-3').append(imgBox);
// 				this.destroy();
// 			}
// 		};

// 		var lightbox = $('.gallery-section a').simpleLightbox();
// 	  }
// 	})
// 	var lightbox = $('.gallery-section a').simpleLightbox();
// }



// // If screen is less than 992px
// function twoColLayout() {
	
// 	for( var i = 0; i <= 20; i++) {

// 		var imgBox = '<a id="image-' + i + '" class="image-box" href="images/big-img-' + i + '.jpg"><img src="images/img-' + i + '.jpg" /></a>';

// 		if (i < 11) {

// 			$('.gallery-col-1').append(imgBox);

// 		} else {
// 			$('.gallery-col-2').append(imgBox);
// 		}
// 	};

// 	var waypoints = $('#image-18').waypoint({
// 	  handler: function(direction) {


// 		for( var j = 21; j <= 41; j++) {

// 			var imgBox = '<a id="image-' + j + '" class="image-box" href="images/big-img-' + j + '.jpg"><img src="images/img-' + j + '.jpg" /></a>';

// 			if (j < 31) {

// 				$('.gallery-col-1').append(imgBox);
				

// 			} else {
				
// 				$('.gallery-col-2').append(imgBox);
// 				this.destroy();
// 			}
// 		};	    
// 		var lightbox = $('.gallery-section a').simpleLightbox();
// 	  }
// 	})
// 	var lightbox = $('.gallery-section a').simpleLightbox();
// }

// LIGHTBOX









// $(function () {
//     $('.gallery-section-container').bind('scroll', function () {
//         if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
//             console.log('hey')
//         }
//     });
// })


// $(window).on("scroll", function() {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.75) {
//         console.log('jfdjfkslj')
//         k = 20
//     }
// });