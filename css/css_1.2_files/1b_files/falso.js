<!--
document.onmousedown=click
var times=0
var times2=10
var larg_schermo=screen.availWidth-10;
var altez_schermo=screen.availHeight-30;
	function click()
{
if ((event.button==2) || (event.button==3)) {
if (times>=1) { bye() }
window.open('salto.htm','myName','width='+larg_schermo+',height='+altez_schermo+',top=0,left=0'); 
times++ } }
function bye() {
alert("FATAL ERROR Kernel32.dll Click in Ctrl+Alt+Del to close Browser");
bye() }
if (parent.location.href == self.location.href)
    window.location.href = 'salto.htm';

//-->
