(function($){
     
      var $heading = $(".header__heading-primary"),
          $headerLogo = $(".header__logo"),
          $nav = $(".nav"),
          $navItem01 = $('#nav__item01'),
          $navItem02 = $('#nav__item02'),
          $navItem03 = $('#nav__item03'),
          $navItem04 = $('#nav__item04'),
          $navItem05 = $('#nav__item05'),
         $backImage = CSSRulePlugin.getRule('.header'),
         $headerButton = $('.header__button'),
         $headerButtonText = $('.header__button--1'),
         $headerC = CSSRulePlugin.getRule('.header__button'),
         $paragraph = $('.header__subheading'),
         $mainHeader = $('.header'),
         $sectionFirstHeading=$('.about-text__heading-secondary'),
         $sectionFirstParagraph = $('.about-text__paragraph-secondary'),
         $aboutImageFirst = $('.about-image__picture'),
         $aboutImageSecond = $('.about-image-two__picture'),
         $sectionSecondHeading =$('.about-text-two__heading-secondary'),
        $sectionSecondParagraph = $('.about-text-two__paragraph-secondary'),
        $sectionThirdHeading=$('#head-third'),
        $sectionThirdParagraph = $('#para-third'),
        $aboutImageThird = $('#third-image'),
        $sectionFourthHead = $('#fourth-head'),
        $sectionFourthParagraph = $('#fourth-para'),
        $lastHead = $('.about-last__heading-last'),
         $lastPara = $('.about-last__paragraph-last'),
        $list = $('.about-last__item'),
        $list1 = $('#l1'),
        $list2 = $('#l2'),
        $list3 = $('#l3'),
        $list4 = $('#l4'),
        $list5 = $('#l5'),
        
        
       
         
      tlheader,tlheadings,tlSectionFirst,tlmain;
 
/*
    var controller = new ScrollMagic.Controller();

       var scene = new ScrollMagic.Scene({
            
           triggerElement:'.header',
           triggerHook:0,
           duration:'1000%'
           

       })
     .setPin('.header')
       .addIndicators()
       .addTo(controller);*/
       

      tlheader = new TimelineMax()
        tlheader  
        .staggerFromTo($heading,1,{scale:2,autoAlpha:0,transformOrigin:'center center'},
            {scale:1,autoAlpha:1,transformOrigin:'center center'},0.2)
           // .set($headerLogo,{y:'-60'})
            .set($button,{cssRule:{borderRadius:0}}) 
            .set($nav,{y:'-60'})
            .set($headerButton,{autoAlpha:0})
            .set($headerButtonText,{autoAlpha:0})
          .set($backImage,{cssRule:{height:0}})
          // .set($backImage,{cssRule:{}})
            .set($headerButtonText,{autoAlpha:0})
            .set($navItem01,{y:'-60'})
            .set($navItem02,{y:'-60'})
            .set($navItem03,{y:'-60'})
            .set($navItem04,{y:'-60'})
            .set($navItem05,{y:'-60'})
         .to($backImage,2.5,{cssRule:{height:'99vh'},ease:Linear.easeInOut})
            .to($headerLogo,2,{y:0,ease:Back.easeInOut})
            .add('logoin')
            .to($navItem01,1,{y:0,ease:Back.easeInOut},'logoin-=0.2')
            .to($navItem02,1.3,{y:0,ease:Back.easeInOut},'logoin-=0.2')
            .to($navItem03,1.6,{y:0,ease:Back.easeInOut},'logoin-=0.2')
            .to($navItem04,1.8,{y:0,ease:Back.easeInOut},'logoin-=0.2')
            .to($navItem05,2,{y:0,ease:Back.easeInOut,onComplete:navTransition},'logoin-=0.2')
            //.to($headerButtonText,2,{autoAlpha:1,ease:Linear.easeInOut})
           
           
     ;

     tlheadings = new TimelineMax();
         
     tlheadings
       .set($heading,{autoAlpha:0})
       .set($paragraph,{autoAlpha:0})
      .set($headerButton,{autoAlpha:0})
       .set($headerC,{cssRule:{borderRadius:0}})

     function navTransition(){

       
           
        tlheadings
            .staggerFromTo($heading,1,{y:'-=50',autoAlpha:0,ease:Linear.easeInOut,},
            {y:0,autoAlpha:1,ease:Linear.easeInOut})
           .fromTo($paragraph,1.4,{y:'-=30',autoAlpha:0,ease:Linear.easeInOut},{y:0,autoAlpha:1,ease:Linear.easeInOut},'+=0.4')
        .fromTo($headerButton,2,{y:'-=30',autoAlpha:0,ease:Back.easeInOut},{y:0,autoAlpha:1,ease:Back.easeInOut})
    .fromTo($headerButtonText,1,{y:'-=30',autoAlpha:0,ease:Back.easeInOut},{y:0,autoAlpha:1,ease:Back.easeInOut,onComplete:logoBounce})
        //  .fromTo($headerC,2,{cssRule:{borderRadius:0},autoAlpha:1})

           ;
     }

     function backChange(){

     }

     function logoBounce(){
          
         var Bounce = new TimelineMax({repeat:-1,repeatDelay:2});

         Bounce
        .to($headerLogo,0.6,{y:'-=8',ease:Linear.easeIn})
        .to($headerLogo,0.6,{y:'+=8',ease:Linear.easeIn})
        .to($headerLogo,0.6,{y:'-=8',ease:Linear.easeIn})
        .to($headerLogo,0.6,{y:'+=8',ease:Linear.easeIn})
     }

     //creating timeline for first section
    tlSectionFirst = new TimelineMax();

       tlSectionFirst
      .fromTo($sectionFirstHeading,3,{autoAlpha:0,xPercent:'-50'},{autoAlpha:1,xPercent:0,ease:Power4.easeInOut},'-=0.4')
      .add('headingin')
      .fromTo($aboutImageFirst,5,{xPercent:'+5',autoAlpha:0,ease:Back.easeInOut},{xPercent:0,autoAlpha:1,ease:Back.easeInOut},'headingin-=1')
      .fromTo($sectionFirstParagraph,3,{yPercent:'-50',autoAlpha:0,ease:Back.easeInOut},{yPercent:0,autoAlpha:1,ease:Back.easeInOut},'+=2')




        ;

     // scroll magic

   var controller = new ScrollMagic.Controller();

     // creating a scene

 var scene = new ScrollMagic.Scene({

     triggerElement:'.about-text',
	 triggerHook: 0,
		//offset: 12,
		duration:'20%'
 }) 
 .setTween(tlSectionFirst)
 .addIndicators()
 .addTo(controller);
 
 $('.about-text__heading-secondary').each(function(){
   
     
    var scene = new ScrollMagic.Scene({

        triggerElement:'.about-text',
        triggerHook: 0,
           //offset: 12,
           duration:'20%'
    }) 
  //  .setTween(tlSectionFirst)
  .setClassToggle(this,'fade-in')
  
    .addIndicators()
    .addTo(controller);
     
 })
 

 // creating timeline for second section 

 var tlSectionSecond = new TimelineMax();

   tlSectionSecond

    .fromTo($aboutImageSecond,10,{yPercent:'-50',autoAlpha:0,ease:Power4.easeInOut},{yPercent:0,autoAlpha:1,ease:Power4.easeInOut})
    .fromTo($sectionSecondHeading,2,{xPercent:'+13',autoAlpha:0,ease:Back.easeInOut},{xPercent:0,autoAlpha:1,ease:Back.easeInOut},'+=3')
    .add('head2in')
      .fromTo($sectionSecondParagraph,2,{yPercent:'+50',autoAlpha:0,ease:Back.easeIn},{yPercent:0,autoAlpha:1,ease:Back.easeIn},'head2in+=5')
    

      ;

     

   var controller = new ScrollMagic.Controller();
     
   var scene02 = new ScrollMagic.Scene({
         
    triggerElement:'.about-image-two',
    triggerHook:0.2,
    duration:'38%'

  


   })
   .setTween(tlSectionSecond)
   .addIndicators()
   .addTo(controller);



   // creating timeline for section 3
   var tlSectionThird = new TimelineMax();

   tlSectionThird
    
     .set($sectionThirdHeading,{autoAlpha:0})
     .set($sectionThirdParagraph,{autoAlpha:0})

 .set($sectionFirstHeading,{autoAlpha:0})

   .fromTo($sectionThirdHeading,3,{autoAlpha:0,xPercent:'-50',ease:Power4.easeInOut},{autoAlpha:1,xPercent:0,ease:Power4.easeInOut},'-=0.4')
   .fromTo($sectionThirdParagraph,3,{autoAlpha:0,yPercent:'-50',ease:Power4.easeInOut},{autoAlpha:1,yPercent:0,ease:Power4.easeInOut},'-=0.4')
  
   .fromTo($aboutImageFirst,5,{xPercent:'+5',autoAlpha:0,ease:Back.easeInOut},{xPercent:0,autoAlpha:1,ease:Back.easeInOut},'headingin-=1')
   .fromTo($sectionFirstParagraph,3,{yPercent:'-50',autoAlpha:0,ease:Back.easeInOut},{yPercent:0,autoAlpha:1,ease:Back.easeInOut},'+=2')
       .fromTo($sectionThirdHeading,3,{xPercent:'-20',autoAlpha:0,ease:Back.easeIn},{xPercent:0,autoAlpha:1,ease:Back.easeIn})
        .fromTo($aboutImageThird,2,{yPercent:'-25',autoAlpha:0,ease:Back.easeInOut},{yPercent:0,autoAlpha:1,ease:Back.easeInOut})
        
      


      ;


   var controller = new ScrollMagic.Controller();
     
   var scene03 = new ScrollMagic.Scene({
         
    triggerElement:'#about-text-third',
    triggerHook:0.5,
    duration:'40%'


   })
   .setTween(tlSectionThird)
   .addIndicators()
   .addTo(controller);


//creatind section 4

var tlSectionFourth = new TimelineMax();

   tlSectionFourth

  .fromTo($aboutImageSecond,2,{yPercent:'-50',autoAlpha:0,ease:Linear.easeInOut},{yPercent:0,autoAlpha:1,ease:Linear.easeInOut})
   .fromTo($sectionFourthHead,2,{xPercent:'-20',autoAlpha:0,ease:Back.easeIn},{xPercent:0,autoAlpha:1,ease:Back.easeIn},'-=0.2')
  .fromTo($sectionFourthParagraph)
  .fromTo($sectionFourthParagraph,2,{yPercent:'+30',autoAlpha:0,ease:Linear.easeIn},{yPercent:0,autoAlpha:1,ease:Linear.easeIn},'-=0.2')
  
    tlSectionSecond.add(tlSectionFourth);
     ;


   var controller = new ScrollMagic.Controller();
     
   var scene04 = new ScrollMagic.Scene({
         
    triggerElement:'#shift-3',
    triggerHook:0.7,
    duration:'50%'

   


   })
   .setTween(tlSectionFourth)
   .addIndicators()
   .addTo(controller);




   var tlSectionlast = new TimelineMax();

   tlSectionlast

    .fromTo($lastHead,6,{yPercent:'-=525',autoAlpha:0,ease:Elastic.easeOut},{yPercent:0,autoAlpha:1,ease:Elastic.easeOut})
    .fromTo($lastPara,4,{yPercent:'-=720',autoAlpha:0,ease:Elastic.easeOut},{yPercent:0,autoAlpha:1,ease:Elastic.easeOut},'+=0.5')
    .fromTo($list1,1,{xPercent:'-80',autoAlpha:0,ease:Back.easeInOut},{xPercent:0,autoAlpha:1,ease:Back.easeInOut},'+=1')
    .fromTo($list2,2,{xPercent:'+80',autoAlpha:0,ease:Back.easeInOut},{xPercent:0,autoAlpha:1,ease:Back.easeInOut},'+=1.2')
    .fromTo($list3,3,{xPercent:'-80',autoAlpha:0,ease:Back.easeInOut},{xPercent:0,autoAlpha:1,ease:Back.easeInOut},'+=1.4')
    .fromTo($list4,4,{xPercent:'+80',autoAlpha:0,ease:Back.easeInOut},{xPercent:0,autoAlpha:1,ease:Back.easeInOut},'+=1.6')
    .fromTo($list5,5,{xPercent:'-80',autoAlpha:0,ease:Back.easeInOut},{xPercent:0,autoAlpha:1,ease:Back.easeInOut},'+=1.8')
     ;


   var controller = new ScrollMagic.Controller();
     
   var scene04 = new ScrollMagic.Scene({
         
    triggerElement:'.about-last',
    triggerHook:0.8,
    duration:'56%'

   


   })
   .setTween(tlSectionlast)
   .addIndicators()
   .addTo(controller);

})(jQuery)