window.addEventListener("wheel", function (dets) {
    if (dets.deltaY>0) {
        gsap.to(".child", {
            transform: "translateX(-200%)",
            duration: 7,
            ease: "none",
            repeat: -1,
        })

        gsap.to(".child img",{
            rotate:180,
        })

    }else{
        gsap.to(".child", {
            transform: "translateX(0)",
            duration: 2,
            ease: "none",
            repeat: -1,
        })

        gsap.to(".child img",{
            rotate:0,
        })
    }
})