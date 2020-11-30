/*
Увеличивайте значение счётчика при каждом клике на печеньку
Чередуйте уменьшение и увеличение печеньки при каждом клике (уменьшайте и увеличивайте значения width/height)
*/
function cookie() {

  const elementClick = document.getElementById("clicker__counter");
  const image = document.getElementById("cookie");

  function countClick() {
    let numberClick = parseInt(elementClick.textContent);
    numberClick = numberClick + 1;
    console.log("это numberClick " + numberClick);
    elementClick.textContent = numberClick;
    console.log(elementClick.textContent);

  }
    elementClick.onclick = countClick; 
    image.onclick = changeMinSizesCookie;
    image.onclick = changeMaxSizesCookie;
    
  function changeMinSizesCookie() {
    image.width = 100;
    image.height = 80;
  }
  
  function changeMaxSizesCookie() {
    image.width = 220;
    image.height = 180;
  }

}

cookie();