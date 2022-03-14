var tl = gsap.timeline({});


tl
.from("#overlay h1", {

    y : 200,
    duration : 3,
    opacity : 0,
    ease : "expo.inOut"

})

.to("#overlay", {

    y : -800,
    duration : 3,
    opacity : 0,
    ease : "expo.inOut"

})

.from("#topcontent", {

    x : -100,
    duration : 2,
    opacity : 0,
    ease : "expo.inOut"

})


.from("#middelcontent", {

    x : 100,
    duration : 2,
    opacity : 0,
    ease : "expo.inOut"

})


.from("#middelcontent #line", {

    x : 100,
    duration : 2,
    opacity : 0,
    ease : "expo.inOut"

})


.from("#bigcontent", {

    x : -100,
    duration : 2,
    opacity : 0,
    ease : "expo.inOut"

})


.from("#lastcontent", {

    x : 100,
    duration : 2,
    opacity : 0,
    ease : "expo.inOut"

})

