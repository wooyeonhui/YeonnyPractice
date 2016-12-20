var 오버 = function(){$(this).css({"background-color":"maroon","color":"white"})}
var 아웃 =  function(){$(this).css('background-color','initial')}





$(function(){
  $('nav ul li').mouseover(오버).mouseout(아웃)
  //   $('header ul li').css('background-color','maroon').find('a').css('color','white')
  //    console.log('aaa')
  // },
  //                         function(){
  // $('header ul li').css('background-color','#ccc').find('a').css('color','#000')
 //hover와 enter out에 대해 세심한 관찰을 하자
var a = []
$('section > div h2').each(function(){
  a.push($(this).offset().top)
})
console.log(a)
$('nav ul li').click(function(){
  var idx = $(this).index();
  console.log(idx)
  $('body,html').animate({
    scrollTop:a[idx]
  })
})
// var slide = {
//   b : 0,
//   motion : function(x,y,z,g,d){
//     g.find('.d-type ul li').eq(z).find('img')css({
//       'left':x,
//       'display':d
//     }).animate({
//       'left':y
//     })
//   },
//   event:function(){
//     $('.d-type').on('click','.next',function(){
//       slide.motion('0','-100%',slide.b,$('.d-type'),'block');
//       slide.b++
//       slide.motion('100%','0',slide.b,$('.d-type'),'block');
//     })
//   }
// }
var idxS;
  $('.next').click(function(){
    idxS = $('.d-type ul li').index();
    $('.d-type ul li').eq(idxS).find('img').animate({
      left:'-100%'
    }).parent().next().find('img').css({
      'display':'block','left':'100%'
    }).stop().animate({
      left:0
    })






  })


  })
