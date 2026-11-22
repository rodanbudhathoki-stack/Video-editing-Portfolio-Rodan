function getEmbedUrl(rawUrl){
 if(!rawUrl||!rawUrl.trim())return ""; const url=rawUrl.trim();
 try{const parsed=new URL(url),host=parsed.hostname.replace(/^www\./,"");
  if(host==="youtu.be"){const id=parsed.pathname.split("/").filter(Boolean)[0];return id?`https://www.youtube-nocookie.com/embed/${id}`:"";}
  if(host.endsWith("youtube.com")){if(parsed.pathname.startsWith("/embed/"))return url;
   const id=parsed.searchParams.get("v")||parsed.pathname.match(/^\/(?:shorts|live)\/([^/?]+)/)?.[1];
   return id?`https://www.youtube-nocookie.com/embed/${id}`:"";}
  if(host==="drive.google.com"){const id=parsed.pathname.match(/\/file\/d\/([^/]+)/)?.[1]||parsed.searchParams.get("id");
   return id?`https://drive.google.com/file/d/${id}/preview`:"";}
 }catch(e){return "";} return "";
}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function renderPortfolio(){
 const root=document.getElementById("portfolio-groups"); if(!root||!Array.isArray(portfolioGroups))return;
 root.innerHTML=portfolioGroups.map((group,i)=>{
  const videos=group.videos||[];
  const cards=videos.map(video=>{
   const embed=getEmbedUrl(video.url);
   const frame=embed?`<iframe src="${embed}" title="${escapeHtml(video.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`:
    `<div class="video-placeholder"><span class="play-mark">▶</span><small>${video.url?"Check video link format":"Video link goes here"}</small></div>`;
   return `<article class="video-card"><div class="video-frame">${frame}</div><div class="video-meta"><div><h4>${escapeHtml(video.title)}</h4><p>${escapeHtml(video.description||"")}</p></div><span class="video-type">${escapeHtml(video.type||"VIDEO")}</span></div></article>`;
  }).join("");
  return `<section class="group"><div class="group-head"><h3>${escapeHtml(group.title)}</h3><span class="group-count">${String(videos.length).padStart(2,"0")} PROJECTS</span></div><div class="video-grid">${cards}</div></section>`;
 }).join("");
}
document.getElementById("year").textContent=new Date().getFullYear(); renderPortfolio();
