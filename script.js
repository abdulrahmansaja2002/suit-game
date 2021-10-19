const imgs = document.querySelectorAll(".imgs .img img");
function compChosen() {
    const comp = Math.random();
    if ( comp < 0.34) return "batu";
    if ( comp > 0.67) return "kertas";
    return "gunting";   
}
function getResult(comp, player) {
    if (comp == player) return "DRAW!!!";
    if (comp == "batu") return (player == "kertas") ? "YOU WIN!" : "YOU LOSE";
    if (comp == "kertas") return (player == "gunting")? "YOU WIN!" : "YOU LOSE";
    if (comp == "gunting") return (player == "batu") ? "YOU WIN!" : "YOU LOSE";
}
function makeRandom() {
    const imgComp = document.querySelector("img[alt=imgComp]");
    const imgs = [
        "img/batu.png",
        "img/gunting.png",
        "img/kertas.png",
    ]
    let i = 0;
    const start = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - start > 1000){
            return;
        }
        imgComp.setAttribute("src", imgs[i%3]);
        i++;
    }, 50); // 50 = 0.05 detik
}
imgs.forEach(function(el){
    // console.log(el.getAttribute("alt"));

    el.addEventListener('click', function(e){
        const imgComp = document.querySelector("img[alt=imgComp]");
        // console.log(imgComp);
        const info = document.getElementsByClassName("result")[0];

        const player = e.target.getAttribute("alt");
        const comp = compChosen();
        const result = getResult(comp, player);
        makeRandom();
        setTimeout(function(){
            imgComp.setAttribute("src", "img/"+comp+".png");
            info.innerHTML = result;
            if (result == "YOU WIN!") {
                const score = document.getElementsByClassName("playerScore")[0].children[1];
                score.innerHTML = parseInt(score.innerHTML) + 1;
                // console.log(parseInt(score.innerHTML));
            } else if (result == "YOU LOSE") {
                const score = document.getElementsByClassName("compScore")[0].children[1];
                score.innerHTML = parseInt(score.innerHTML) + 1;
                // console.log(parseInt(score.innerHTML));
            }
        },1000);


    });
});
// console.log();