$(document).ready(function(){
	

	$("button").on('click',function(){
		 // alert(this.innerHTML);
		 var a = this.innerHTML;
		 $('.tab').removeClass('active');
		  // console.log(a.index());
		  console.log($(".tab").not(":first").innerHTML);
		 $("#"+ a).addClass("active");
		 // $(".tab").not(":first").hide();
		// this.$(".tab").addClass('active');

	})
	// $('button').on('click', function(){
	// 	// $('.tabs').
		
	// 	var b = getComputedStyle(document.getElementsByTagName('h1')[0]);
	// 	var a = document.getElementsByTagName('h1');
	// 	// alert(a[1].innerHTML);
	// 	for(x=0;x<a.length;x++){
	// 		console.log(a[x].innerHTML);
	// 	}
	// 	// console.log(b.innerHTML);
	// 	var tab = document.getElementsByClassName('h1');
	// 	for(i=0; i<tab.length;i++){
	// 		// console.log(tab[i].innerHTML);
	// 	}
	// 	var tabs =  document.getElementsByClassName('tabs')[0];
	// 	tabs.style.width = "1200px!important;";
	// 	$('.tab').css('display','block');
	// })
})