
; (function backToTop() {
    // 获取返回顶部按钮元素
    const btn = document.querySelector('.backtop');

    document.addEventListener("scroll", (e) => {
        // 获取当前页面的scrollTop值
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 670) {
            btn.classList.remove("none")
        } else {
            btn.classList.add("none")
        }
    })



    // 监听按钮的点击事件
    btn?.addEventListener('click', () => {
        // 将页面滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}());

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

(function(){
    var spans = document.querySelectorAll(".m-tab-th span");
    for(let i=0; i<spans.length; i++){
        spans[i].onclick = function(){
            for(var j=0; j<spans.length; j++){
                spans[j].classList.remove("active");
            }
            this.classList.add("active");
            
            var newsDivs = document.querySelectorAll(".m-news");
            for(var k=0; k<newsDivs.length; k++){
                newsDivs[k].style.display = "none";
            }
      
            newsDivs[i].style.display = "block";
        }
    }
})();