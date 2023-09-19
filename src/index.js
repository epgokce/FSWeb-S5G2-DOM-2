import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

const imgNodeList = document.querySelectorAll("img");
imgNodeList.forEach((img) => {
  console.log(img);
  img.addEventListener("mouseover", function (e) {
    console.log(e);
    e.target.style.border = "5px solid red";
  });
  img.addEventListener("mouseout", function (e) {
    console.log(e);
    e.target.style.border = "none";
    e.target.style.transform = "rotate(0)";
  });

  img.addEventListener("dblclick", function (e) {
    console.log("cift tiklandi", e);
    // img.removeEventListener("wheel", function (e) {
    // console.log("viğıl patladı");
    // });
    img.addEventListener("wheel", function (e) {
      console.log("vigil", e);
      e.target.style.transform = "rotate(180deg)";
    });
  });
});
document.addEventListener("keydown", function (e) {
  console.log(e);
  if ((e.type = "keydown" && e.key === "Escape")) {
    document.querySelector("body").style.backgroundColor = "lime";
  }
  if (e.type === "keydown" && e.key === "ArrowUp") {
    console.log("Zıpla Mario");
  }
});

window.addEventListener("loadstart", function (e) {
  console.log("Yükleme başladı");
});

window.addEventListener("resize", function (e) {
  console.log(e);
  console.log("inner sizes", e.target.innerWidth, e.target.innerHeight);
});
console.log("Yeniden boyutlandırıldı");

window.addEventListener("scroll", function (e) {
  console.log(e);
  console.log("Scroll edildi", e.target.scrollingElement.scrollTop);
});

document.querySelector("input").addEventListener("select", (e) => {
  console.log(e);
  const log = document.getElementById("log");
  const selection = e.target.value.substring();
  e.target.selectionStart, e.target.selectionEnd;
  log.textContent = `Seçtiğin metin: ${selection}`;
  console.log("Seçildi");
});
const suruklenebilirler = document.querySelectorAll("[draggable='true']");
suruklenebilirler.forEach((suruklenen) => {
  suruklenen.addEventListener("dragstart", (e) => {
    suruklenen.classList.add("dragging");
    console.log("sürükleniyoooor", e.target);
  });

  suruklenen.addEventListener("dragend", (e) => {
    console.log("bitti", e.target);
  });
  suruklenen.addEventListener("drop", (e) => {
    console.log("bitti", e.target);
  });
});
// Kodlar buraya gelecek!
