function myLink() {
  let a = document.getElementById("number")
  const b = document.getElementById("url")
  tabX(a.value -1, b.value);
    window.open(b.value,"_self");
    window.open("index.html");
  
}

function tabX(a,b){
while (a--) {
  window.open(b, "_blank");
}
 
}