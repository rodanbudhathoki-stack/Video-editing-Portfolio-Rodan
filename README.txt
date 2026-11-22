RODAN BUDHATHOKI — SIMPLE VIDEO PORTFOLIO
=========================================

FILES
- index.html: page text, name, about, email and tools
- style.css: colours, fonts, spacing and layout
- videos.js: project names, descriptions, categories and video links
- script.js: converts YouTube / Drive links into embedded players

ADD VIDEO LINKS
1. Open videos.js in Notepad.
2. Find the project you want to update.
3. Replace url:"" with your link, keeping the quotation marks.
   YouTube example: url:"https://www.youtube.com/watch?v=VIDEO_ID"
   Drive example: url:"https://drive.google.com/file/d/FILE_ID/view"
4. Save videos.js and refresh index.html in your browser.

YouTube videos should be Public or Unlisted, not Private.
For Google Drive: open Share > General access > Anyone with the link > Viewer.
Unlisted YouTube is generally the smoother option for portfolio playback.

CHANGE EMAIL / ABOUT / TOOLS
Open index.html in Notepad. Replace YOUR-EMAIL@example.com with your email
(both occurrences), edit the paragraph with class="about", and edit the tool
names inside the class="tools" section.

PUBLISH WITH GITHUB PAGES
1. Sign in at https://github.com
2. Click the + near the top-right > New repository.
3. Name it rodan-portfolio and choose Public. Click Create repository.
4. On the repository page choose Add file > Upload files.
5. Unzip this folder on your computer. Drag index.html, style.css, videos.js,
   script.js and README.txt into the GitHub upload area.
6. Scroll down and click Commit changes.
7. Open repository Settings.
8. In the left sidebar, select Pages.
9. Under Build and deployment choose Source: Deploy from a branch.
10. Choose Branch: main and Folder: /(root), then click Save.
11. Wait a minute or two and refresh the Pages screen. GitHub will show your
    website address, usually https://YOUR-USERNAME.github.io/rodan-portfolio/

UPDATE LATER
To add/change a video: open videos.js in GitHub, click the pencil icon, edit
the title/description/type/url, then Commit changes.
To change your about/email/tools: edit index.html in GitHub and commit.
To change colours/layout: edit style.css. Keep all files in the repository
root (not inside another folder). File names are case-sensitive.

TEST the site on desktop and mobile after publishing. Anyone who can view the
portfolio page may also be able to view the videos you embed, so do not use
private Drive files or confidential footage.
