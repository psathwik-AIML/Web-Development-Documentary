let preview = document.querySelector(".preview");

preview.addEventListener("paste", assignFiles);

function assignFiles(e) {
  const { files, items } = e.clipboardData;
  console.log(files.length);
  console.log(items.length);

  for (let eachFile of files) {
    let url = URL.createObjectURL(eachFile);
    if (eachFile.type.startsWith("image")) {
      let image = document.createElement("img");
      image.src = url;
      image.classList.add("child");
      preview.appendChild(image);
    } else if (eachFile.type.startsWith("audio")) {
      let audio = document.createElement("audio");
      audio.src = url;
      audio.classList.add("child");
      audio.controls = true;
      preview.appendChild(audio);
    } else if (eachFile.type.startsWith("video")) {
      let video = document.createElement("video");
      video.src = url;
      video.classList.add("child");
      video.controls = true;
      preview.appendChild(video);
    }
  }
}
