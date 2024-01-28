const list = document.getElementById("fruits");
const items = list.getElementsByTagName("li");

let count = 0;

function showNextItem() {
  if (count <= items.length - 1) {
    items[count].style.visibility = "visible";
    count++;
    // delay in milliseconds (one second)
    setTimeout(showNextItem, 1000);
  }
}

showNextItem();
