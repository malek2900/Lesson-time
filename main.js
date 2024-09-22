let table = document.getElementById("outputTable");
table.addEventListener("click", function (event) {
    let target = event.target;
    if (target.tagName === "TD") {

        let nameInput1 = prompt('اكتب اسم الماده', target.textcontent)
        let nameInput2 = prompt('اكتب اسم الاستاذ', target.textcontent)
        if(nameInput1 !== null && nameInput1  !=="" || nameInput2 !== null && nameInput2  !=="" ){
            target.innerHTML = 'المادة : ' + nameInput1 + '<br>' + 'الاستاذ : ' + nameInput2;
        }else{
            target.innerHTML = "";
        }
    }
});

function printPage(){
    window.resizeTo(1200 , 800);
    window.print();
}