
const modal = document.getElementById("videoModal");
const modalPlayer = document.getElementById("modalPlayer");
const modalTitle = document.getElementById("modalTitle");
const closeButton = document.getElementById("modalClose");

function getEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    // YouTube
    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }

    if (host.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
      }

      if (parsed.pathname.startsWith("/shorts/")) {
        return `https://www.youtube.com/embed/${parsed.pathname.split("/")[2]}`;
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return url;
      }
    }

    // Google Drive
    if (host === "drive.google.com") {
      const match = parsed.pathname.match(/\/file\/d\/([^/]+)/);
      if (match) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }

    // Instagram
    if (host.includes("instagram.com")) {
      const match = parsed.pathname.match(/\/(p|reel|tv)\/([^/]+)/);
      if (match) {
        return `https://www.instagram.com/${match[1]}/${match[2]}/embed`;
      }
    }

    return "";
  } catch {
    return "";
  }
}

function openVideo(url, title) {
  const embedUrl = getEmbedUrl(url);

  if (!embedUrl) {
    alert("This project doesn't have a video link yet.");
    return;
  }

  const isInstagram = embedUrl.includes("instagram.com");

  modalPlayer.innerHTML = `
    <iframe
      src="${embedUrl}"
      title="${title}"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
      loading="lazy">
    </iframe>
  `;

  modalPlayer.querySelector("iframe").style.aspectRatio =
    isInstagram ? "9 / 16" : "16 / 9";

  modalTitle.textContent = title;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeVideo() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  modalPlayer.innerHTML = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".video-card").forEach(card => {
  card.addEventListener("click", () => {
    openVideo(card.dataset.video, card.dataset.title);
  });
});

closeButton.addEventListener("click", closeVideo);

modal.addEventListener("click", event => {
  if (event.target === modal) closeVideo();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeVideo();
});
