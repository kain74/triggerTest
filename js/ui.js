$(document).ready(function() {
    ui_init();
});

var ui_init = function(){
    if($('.main').length > 0){
        // section1
        mainUI.section1.timeline01(".sec1");
        mainUI.section1.timeline02(".sec2");

        // section2
        mainUI.section2();

        // section3
        mainUI.section3();

        // section4
        mainUI.section4();
    }
}

var mainUI = {
    section1 : {
        timeline01 : function(sec1){
            gsap.timeline({  
                scrollTrigger: {
                    trigger: sec1, // 객체기준범위
                    pin: true, // 고정
                    pinSpacing: false,
                    start: "top top", // 시작점
                    end: "bottom bottom", // 끝점
                    scrub: 1, // 모션바운스
                    markers: true, // 개발가이드선
                }
            }).to('.sec1_tit2', {
                scale: 14,
            })
            .to('.sec1_tit2', {
                duration: 100,
                scale: 1,
                top: `18vw`
            })
            .to('.sec1_tit2', {
                duration: 30,
                top: `16vw`
            })
            .to('.sec1_tit2', {
                duration: 30,
                x: 60
            })

            gsap.timeline({  
                scrollTrigger: {
                    trigger: sec1, // 객체기준범위
                    pin: true, // 고정
                    start: "top top", // 시작점
                    end: "bottom bottom", // 끝점
                    scrub: 1, // 모션바운스
                    markers: true, // 개발가이드선
                }
            }).to('.sec1_tit1', {
                duration: 100,
                x: 60,
                opacity: 1,
                marginLeft: '-15%',
                delay: 140
            })

            gsap.timeline({  
                scrollTrigger: {
                    trigger: sec1, // 객체기준범위
                    pin: true, // 고정
                    start: "top top", // 시작점
                    end: "bottom bottom", // 끝점
                    scrub: 1, // 모션바운스
                    markers: true, // 개발가이드선
                }
            }).to('.sec1_tit3', {
                duration: 100,
                x: 60,
                opacity: 1,
                marginRight: '15%',
                delay: 140
            })

            gsap.timeline({  
                scrollTrigger: {
                    trigger: sec1, // 객체기준범위
                    pin: true, // 고정
                    start: "top top", // 시작점
                    end: "bottom bottom", // 끝점
                    scrub: 1, // 모션바운스
                    markers: true, // 개발가이드선
                }
            }).to('.sec1_tit4', {
                duration: 100,
                x: 60,
                opacity: 1,
                marginLeft: '10%',
                delay: 140,
                onComplete: function(){
                    console.log('높이값 조절');
                }
            })
            
        },
        timeline02 : function(sec2){
            gsap.timeline({  
                scrollTrigger: {
                    trigger: sec2, // 객체기준범위
                    pin: true, // 고정
                    start: "top top", // 시작점
                    end: "bottom bottom", // 끝점
                    scrub: 0.5, // 모션바운스
                    markers: true, // 개발가이드선
                    onLeave: function(){
                        console.log('end');
                    }
                }
            })
            .to('.sec2_tit1', {
                duration: 5,
                opacity: 0,
                y: -30,
                delay: 50
            })
    
            .to('.sec2_tit2', {
                duration: 5,
                opacity: 1,
                y: 0,
                onComplete: function(){
                    console.log('두번째 문구등장!');
                }
            })
            .to('.sec2_tit2', {
                duration: 5,
                delay: 1
            })
            .to('.sec2_tit2', {
                duration: 5,
                opacity: 0,
                y: -30
            })
    
            .to('.sec2_tit3', {
                duration: 5,
                opacity: 1,
                y: 0,
               
            }) 
            .to('.sec2_tit3', {
                duration: 5,
                delay: 1
            })
        }
    },
    section2 : function(){
        
    },
    section3 : function(){
    
    },
    section4 : function(){

    }
}