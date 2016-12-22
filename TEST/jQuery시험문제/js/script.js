var 오버 = function(){$(this).css("background-color","maroon").find('a').css("color","white")}
var 아웃 =  function(){$(this).css('background-color','initial').find('a').css("color","initial")}

//문서 시작

//hover menu
$(function(){
  $('nav ul li').mouseover(오버).mouseout(아웃)
  //   $('header ul li').css('background-color','maroon').find('a').css('color','white')
  //    console.log('aaa')
  // },
  //                         function(){
  // $('header ul li').css('background-color','#ccc').find('a').css('color','#000')
 //hover와 enter out에 대해 세심한 관찰을 하자

 //scrollmove
var a = []
$('.content section').each(function(){
  a.push($(this).offset().top)
})
// console.log(a)
$('nav ul li').click(function(){
  var idx = $(this).index();
  // console.log(idx)
  $('body,html').animate({
    scrollTop:a[idx]
  })
})
//슬라이드 배너

$('.slidebanner li .next').click(function(){
  var Swidth = $('.slidebanner').width();
  console.log(Swidth)
  $(this).find('img').animate({
    'left':-Swidth
  },1000).parent().next().css({
    'display':'block', 'left': Swidth
  }).stop().animate({
    'left' : 0
  },1000)
 })

//페이드 배너
// var Fidx;
// $('.fadebanner li a').click(function(){
//   Fidx = $(this).parent().index();
//   $('.fadebanner li.on').removeClass('on').find('img').fadeOut();
//   console.log('aaa')
//   $('.fadebanner li').eq(Fidx).addClass('on').find('img').fadeIn();
//
// })
// $('.fadebanner li.on').find(img).fadeOut(4800,function(){
//     $(this).removeClass().next().addClass('on')
// })

//iframe
// var Ucode =[];
// Ucode.push($('.movie-view li a').attr("href"))
// alert(Ucode)
var Iidx = 0;
$('.movie-view li').click(function(){
  Iidx = $(this).index();//Iindx : li의 순서
  //a link 이동 안하기!!!
  var Isrc = $('.view iframe').attr('src')//iframe 주소
  alert(Isrc)
  var code = $('.movie-view li a').eq(Iidx).attr('href')//li의 영상 코드
  alert(code)//li 코드 나왔쪄!
  $('.view iframe').attr('src','https://www.youtube.com/embed/'+code+'?rel=0&amp;controls=0&amp;showinfo=0')
  console.log($('.view iframe').attr('src','https://www.youtube.com/embed/'+code+'?rel=0&amp;controls=0&amp;showinfo=0'))


return false



  // Iidx = Ucode.index();
  // console.log(Iidx)
  // $('.view').find('a').attr(src,"https://www.youtube.com/embed/"+Iidx+"?rel=0&amp;controls=0&amp;showinfo=0")


})




//윙배너

$(window).resize(function(){
  $('.wing').css('left',$('.wing').offset().right + $('.wing').width() - 90)
});
$(window).scroll(function(){
  $('.wing').stop().animate({
    top : $(this).scrollTop()
  },1000)
})
$(window).trigger('resize')

//pop up
var Bidx = 0;
$('.btngroup button').click(function(){
var Bidx =$('.btngroup button').index();
$('.btngroup div').eq(Bidx).fadeIn();
});



















})
