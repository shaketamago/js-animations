const titles = document.getElementsByClassName("list-tit");

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener("click", function () {
    const content = this.nextElementSibling;

    if (content.className === "list-content") {
      content.className = "list-content active";
    } else {
      content.className = "list-content";
    }
  });
}