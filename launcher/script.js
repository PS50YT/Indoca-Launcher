const versionSelect=document.getElementById("versionSelect");
const playButton=document.getElementById("playButton");
const refreshButton=document.getElementById("refreshButton");
const settingsButton=document.getElementById("settingsButton");
const forceUpdate=document.getElementById("forceUpdate");
const toast=document.getElementById("toast");

function showToast(message){
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>toast.classList.remove("show"),2200);
}

playButton.addEventListener("click",()=>{
  const page=versionSelect.value;
  const name=versionSelect.options[versionSelect.selectedIndex].text;
  window.open(page,"_blank");
});

versionSelect.addEventListener("change",()=>{
  showToast(`Selected: ${versionSelect.options[versionSelect.selectedIndex].text}`);
});

forceUpdate.addEventListener("change",()=>{
  showToast(forceUpdate.checked ? "Force update enabled." : "Force update disabled.");
});

refreshButton.addEventListener("click",()=>location.reload());

settingsButton.addEventListener("click",()=>window.open("settings.html","_blank"));

const toolbar=document.querySelectorAll(".toolbar button");
if(toolbar[0]) toolbar[0].addEventListener("click",()=>window.open("mods.html","_blank"));
if(toolbar[2]) toolbar[2].addEventListener("click",()=>window.open("folder.html","_blank"));
