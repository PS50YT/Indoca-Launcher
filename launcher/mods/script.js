const items = [
  {
    type: "modpacks", title: "Astra Client 2", author: "BarneyTheGod",
    desc: "A PvP-focused Minecraft client with Mod Menu Tweaks", version: "1.8", icon: "⚔️", category: "adventure",
    image: "https://raw.githubusercontent.com/PS50YT/Indoca-Launcher/refs/heads/main/images/m-logo7.png",
    url:"https://indoca-launcher-extras.netlify.app/astra18.html"
  },
  {
    type: "modpacks", title: "[Unofficial] FTB Ultimate", author: "q13x",
    desc: "An unofficial port of modpack FTB Ultimate.", updated: "29 January 2026", version: "1.6.4", icon: "🌏", category: "technology",
    image: "https://cdn.feed-the-beast.com/blob/9c/9ccbf7003241804f2e298e1fb13b1c549e5ae954cf3086e6fa4ce2319095f3ab.png",
    url:"https://eaglercraft.q13x.com/eagler-modpack-snapshot/ultimate/wasm/?retina=true"
  },
  {
    type: "modpacks", title: "[Unofficial] FTB Explore", author: "q13x",
    desc: "An unofficial port of modpack FTB Explore.",
     updated: "29 January 2026", version: "1.6.4", icon: "🌏", category: "technology",
    image: "https://feed-the-beast.com/_next/image?url=https%3A%2F%2Fmedia.forgecdn.net%2Favatars%2F850%2F409%2F638251965015898859.png&w=640&q=75",
    url:"https://eaglercraft.q13x.com/eagler-modpack-snapshot/explore/wasm/?retina=true"
  },
  {
    type: "modpacks", title: "[Unofficial] FTB Lite", author: "q13x",
    desc: "An unofficial port of modpack FTB Lite.",
     updated: "29 January 2026", version: "1.6.4", icon: "🌏", category: "technology",
    image: "https://cdn.feed-the-beast.com/blob/8c/8c72eeb4ea18cf27899da6cab319241f0ea0afc57a057f41405e848fb9e055a3.png",
    url:"https://eaglercraft.q13x.com/eagler-modpack-snapshot/lite/wasm/?retina=true"
  },
  {
    type: "modpacks", title: "[Unofficial] FTB Magic", author: "q13x",
    desc: "An unofficial port of modpack FTB Magic.",
     updated: "29 January 2026", version: "1.6.4", icon: "🌏", category: "technology",
    image: "https://cdn.feed-the-beast.com/blob/be/bed4650add18c48e1429228871368a92ef6201621878742d50ca95c659c78cb3.png",
    url:"https://eaglercraft.q13x.com/eagler-modpack-snapshot/magic/wasm/?retina=true"
  },
  {
    type: "modpacks", title: "[Unofficial] FTB Skyfactory", author: "q13x",
    desc: "An unofficial port of modpack FTB Skyfactory.",
     updated: "29 January 2026", version: "1.6.4", icon: "🌏", category: "technology",
    image: "https://cdn.feed-the-beast.com/blob/b0/b0e989c9bdef8d8e289d9c679c7c68e6a6788129c8b605e342f598843dc52c27.png",
    url:"https://eaglercraft.q13x.com/eagler-modpack-snapshot/tech/wasm/?retina=true"
  },
  {
    type: "modpacks", title: "[Unofficial] FTB Vanilla", author: "q13x",
    desc: "An unofficial port of modpack FTB Vanilla.",
     updated: "29 January 2026", version: "1.6.4", icon: "🌏", category: "technology",
    image: "https://cdn.feed-the-beast.com/blob/33/3314b337354ed7d50b2bd20e0564e53d91e1171e84cfc9991bf47312d4b2dd31.png",
    url:"https://eaglercraft.q13x.com/eagler-modpack-snapshot/vanilla/wasm/?retina=true"
  },
  {
    type: "modpacks", title: "[Unofficial] FTB Tech", author: "q13x",
    desc: "An unofficial port of modpack FTB Tech.",
     updated: "29 January 2026", version: "1.6.4", icon: "🌏", category: "technology",
    image: "https://cdn.feed-the-beast.com/blob/b5/b583ea1bdf34da3946b1b2fcbf155419ea2de50f87ad40ef56047dadb36686c8.png",
    url:"https://eaglercraft.q13x.com/eagler-modpack-snapshot/lite/wasm/?retina=true"
  },
  {
    type: "mods", title: "EaglerForge Injector", author: "EaglerForge",
    desc: "Go here for mods for EaglerForge", version: "EaglerForge Injector", icon: "📚", category: "optimization",
    image: "https://raw.githubusercontent.com/PS50YT/Indoca-Launcher/refs/heads/main/images/157155680.png",
    url:"https://github.com/eaglerforge/EaglerForgeInjector/tree/main/examplemods"
  },
  {
    type: "mods", title: "EaglerForge Old", author: "EaglerForge",
    desc: "Go here for mods for Old", version: "EaglerForge Old", icon: "📚", category: "optimization",
    image: "https://raw.githubusercontent.com/PS50YT/Indoca-Launcher/refs/heads/main/images/157155680.png",
    url:"https://github.com/AstralisLLC/EaglerForge-Mods"
  },
  {
    type: "resourcepacks", title: "Any Resource Pack", author: "#",
    desc: "Download any resource pack from Curseforge and Modrinth according to your version.", icon: "🎨", category: "optimization",
    image: "https://raw.githubusercontent.com/PS50YT/Indoca-Launcher/refs/heads/main/images/curseforge-vs-modrinth_-which-is-better-to-use-1786047347210.webp",
    url:"https://modrinth.com/discover/resourcepacks"
  },
  {
    type: "shaderpacks", title: "Default Shader", author: "EaglerDev",
    desc: "Shader pre-installed by default",
    downloads: "x", updated: "14 March 2026", version: "Every", icon: "✨", category: "pbr",
    image: "https://cdn.modrinth.com/data/HVnmMxH1/images/17a9de3ec65eb86b70a8e9806b4a563413a31076.png",
    url:"https://example.com/my-project"
  },
  {
    type: "maps", title: "Download any Minecraft World", author: "#",
    desc: "Download any Maps/Worlds according to your version", icon: "🏚️", category: "horror",
    image: "https://media.forgecdn.net/attachments/492/65/2.png",
    url:"https://www.curseforge.com/minecraft/search?class=worlds&page=1&pageSize=20&sortBy=relevancy"
  }
];

const content=document.getElementById("content"), search=document.getElementById("searchInput"), category=document.getElementById("categorySelect"), sort=document.getElementById("sortSelect");
let activeType="modpacks";

function render(){
 let q=search.value.trim().toLowerCase(), c=category.value;
 let list=items.filter(x=>x.type===activeType);
 if(q) list=list.filter(x=>(x.title+x.author+x.desc).toLowerCase().includes(q));
 if(c!=="all") list=list.filter(x=>x.category===c);
 if(sort.value==="name") list.sort((a,b)=>a.title.localeCompare(b.title));
 if(sort.value==="new") list.sort((a,b)=>b.updated.localeCompare(a.updated));
 content.innerHTML=list.length?list.map(x=>`
 <article class="card">
  <img class="thumb" src="${x.image}" alt="">
  <div><h2 class="card-title">${x.title}</h2><div class="author">Author: ${x.author}</div>
  <div class="description">${x.desc}</div><div class="meta"><span>Downloads: ${x.downloads}</span><span>Updated: ${x.updated}</span><span>The latest version: ${x.version}</span></div></div>
  <div class="card-side"><span class="badge">${x.icon}</span><button class="star">☆</button><button class="install" data-url="${x.url}">Install</button></div>
 </article>`).join(""):'<div class="empty"><strong>No results found</strong>Try another search or category.</div>';
 document.querySelectorAll(".install").forEach(b=>b.onclick=()=>{ window.location.href=b.dataset.url; });
}

document.querySelectorAll(".tab").forEach(tab=>tab.onclick=()=>{
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
 tab.classList.add("active"); activeType=tab.dataset.type; category.value="all"; render();
});
search.oninput=render; category.onchange=render; sort.onchange=render;
document.getElementById("refreshBtn").onclick=()=>{search.value="";category.value="all";sort.value="top";render()};
document.getElementById("createBtn").onclick=()=>alert("Create a new project.");
document.getElementById("playBtn").onclick=()=>alert("Demo launcher: the game would start here.");
render();