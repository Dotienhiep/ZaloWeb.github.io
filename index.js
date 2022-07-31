var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  draggable: false,
  wrapAround: true,
  groupCells: 1,
  autoPlay: 1500
});
function handleToggleListZalo() {
  const listZaloElement = document.getElementsByClassName("list-zalo");
  if (listZaloElement.length) {
    const firstElement = listZaloElement[0];
    console.log("firstElement===", firstElement);
    firstElement.classList.toggle("show");
  }
}
function handleToggleClassic() {
  const listClassicElement = document.getElementsByClassName("list-classify");
  if (listClassicElement.length) {
    const secondElement = listClassicElement[0];
    console.log("secondElement===", secondElement);
    secondElement.classList.toggle("hehe");
  }
}
function handleToggleSelect() {
  const listSelectElement = document.getElementsByClassName("list-select");
  if (listSelectElement.length) {
    const thirdElement = listSelectElement[0];
    console.log("secondElement===", thirdElement);
    thirdElement.classList.toggle("hihi");
  }
}
function outsideClick(event, notelem)	{
  notelem = $(notelem); // jquerize (optional)
  // check outside click for multiple elements
  var clickedOut = true, i, len = notelem.length;
  for (i = 0;i < len;i++)  {
      if (event.target == notelem[i] || notelem[i].contains(event.target)) {
          clickedOut = false;
      }
  }
  if (clickedOut) return true;
  else return false;
}