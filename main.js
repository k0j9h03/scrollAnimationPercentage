let sectionNumber = 0;

/** 스크롤 섹션넘버 체크하는 함수 */
function checkSectionNumber() {
    const scrollY = window.scrollY;
    let sectionHeight1 = document.querySelector('.section1').offsetHeight;
    let sectionHeight2 = document.querySelector('.section2').offsetHeight + sectionHeight1;
    let sectionHeight3 = document.querySelector('.section3').offsetHeight + sectionHeight2;
    let sectionHeight4 = document.querySelector('.section4').offsetHeight + sectionHeight3;
    
    if (scrollY < sectionHeight1) {
        sectionNumber = 1;
    } else if (scrollY >= sectionHeight1 && scrollY < sectionHeight2) {
        sectionNumber = 2;
    } else if (scrollY >= sectionHeight2 && scrollY < sectionHeight3) {
        sectionNumber = 3;
    } else if (scrollY >= sectionHeight3 && scrollY < sectionHeight4) {
        sectionNumber = 4;
    }
    
    // console.log(sectionNumber);


    if(sectionNumber == 2){
        let pointPercentage2 = ((scrollY - (sectionHeight2 - ( 1.01 * window.innerHeight))) / ( window.innerHeight) ) * 100;
        let reversePointPercentage2 = 50- (pointPercentage2 /2 );
        document.querySelector('.image1').style.clipPath = `inset(0% ${reversePointPercentage2}% 0% ${reversePointPercentage2}%)`;
        console.log(reversePointPercentage2);

    }


    if (sectionNumber == 3){
        let pointPercentage = ((scrollY - sectionHeight2) / ((sectionHeight3 - sectionHeight2) - window.innerHeight)) * 100;
        let reversePointPercentage = 100-pointPercentage;
        document.querySelector('.image2').style.clipPath = `inset(${reversePointPercentage}% 0% 0% 0%)`;
    }
}

window.addEventListener('scroll', checkSectionNumber);


