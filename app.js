function getnumber(num) {
    var results=document.getElementById("results");
    results.value+=num;
}
function clearresults() {
    var results=document.getElementById("results");
    results.value=""

}
function getresults(){
    var results=document.getElementById("results");
    results.value=eval(results.value);
}
function backspace() {
 var remove=results.value;
 results.value=remove.substr(0,remove.length-1);
}
function square() {
    var results=document.getElementById("results");
    results.value=Math.pow(results.value,2);
}
function cube() {
    var results=document.getElementById("results");
    results.value=Math.pow(results.value,3);
}
function sqrt() {
    var results=document.getElementById("results");
    results.value=Math.pow(results.value,1/2);
}
