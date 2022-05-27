let element = {
  searchBox: document.querySelector(".searchBox"),
};
let interupt = false;
let test = [
  {
    name: "About Me",
    path: "aboutme",
  },
  {
    name: "Works",
    path: "works",
  },
  {
    name: "Evaluate",
    path: "evaluate",
  },
];

let goto = (path) => {
    window.location.href = `/${path}/index.html`;
}

let genContent = (data) => {
    let content = '<div class="searchItem"><span class="material-icons searchIcon">search</span><p>Khemmathiti Wangsaptawee</p></div>';
    data.forEach((item) => {
        content += `<div class="searchItem selectHover" onclick="goto('${item.path}')"><p>${item.name}</p></div>`;
    });
    return content;
}

let getContent = genContent(test);



element.searchBox.addEventListener("click", () => {
    element.searchBox.dataset.ex = "open";
    element.searchBox.innerHTML = getContent;
});

element.searchBox.addEventListener('mouseleave',async () => {
    element.searchBox.dataset.ex = "close";
    element.searchBox.innerHTML = `<div class="searchItem"><span class="material-icons searchIcon">search</span><p>Click Me!</p></div>`;
});
