current = document.getElementById("pc-for-in-progress");
divs = current.getElementsByClassName("span6");
var tot = divs.length;
for (var i = 0; i < tot / 2; i++) {
  var x = divs[i].innerHTML;
  divs[i].innerHTML = divs[tot - i - 1].innerHTML;
  divs[tot - i - 1].innerHTML = x;
}
