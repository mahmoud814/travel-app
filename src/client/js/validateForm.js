
export function validate(departInput , returnInput , destinationInput) {
    let todayDefault = new Date();
    let year = todayDefault.getFullYear();
    let month = todayDefault.getMonth() + 1;
    let monthCustom = month < 10 ? '0' + month : month; 
    let day = todayDefault.getDate();
    let dayCustom = day < 10 ? '0' + day : day;
    let todayCustom = `${year}-${monthCustom}-${dayCustom}`;

    if(departInput.length === 0 ){
        var departSpan = document.getElementById("feed-depart");
        departSpan.classList.add("inValid");
    }
    if(returnInput.length === 0 ){
        var returnSpan = document.getElementById("feed-return");
        returnSpan.classList.add("inValid");
    }
    if(destinationInput.length  === 0 ){
        var distSpan = document.getElementById("feed-dist");
        distSpan.classList.add("inValid");
    }

    let tripDay = Client.dayDiffrence(todayCustom , departInput); 
    if(tripDay  <  0 ){
        var warrndiv = document.getElementById("warrn");
        warrndiv.classList.add("inValid");
    }
   

    if(departInput.length === 0 || returnInput.length === 0 || destinationInput.length === 0 || tripDay  <  0){
        return false
    } else {
        return true;
    }



}