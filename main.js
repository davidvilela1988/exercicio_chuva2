// import { enableProdMode } from "@angular/core";
// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// import { AppModule } from "./app/app.module";
// import { environment } from "./environments/environment";

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

function viewMore() {
  let btnShowMore = document.getElementById("btn-show-more");
  let open = document.getElementById("open");
  let btnViewMore = document.getElementById("btn-view-more");

  if (btnShowMore.style.display === "none") {
    btnShowMore.style.display = "inline";
    open.style.display = "none";
    btnViewMore.innerHTML = "Ver mais";
  } else {
    btnShowMore.style.display = "none";
    open.style.display = "inline";
    btnViewMore.innerHTML = "Ver menos";
  }
}

function show1() {
  document.getElementById("discussion-open").style.display = "none";
  document.getElementById("discussion-opened").style.display = "block";
}
function show2() {
  document.getElementById("discussion-opened").style.display = "none";
  document.getElementById("discussion-sent").style.display = "block";
  document.getElementById("discussion-sent-waiting").style.display = "block";
}
function show3() {
  document.getElementById("discussion-sent").style.display = "none";
  document.getElementById("discussion-sent-waiting").style.display = "none";
  document.getElementById("discussion-open").style.display = "block";
}
function showComments() {
  let comment = document.getElementById("comment");
  let btnIcon1 = document.getElementById("btn-icon1");
  let btnIcon2 = document.getElementById("btn-icon2");

  if (comment.style.display === "inline") {
    comment.style.display = "none";
    btnIcon1.innerHTML = "1 like";
    btnIcon2.innerHTML = "1 resposta";
  } else {
    comment.style.display = "inline";
    btnIcon1.innerHTML = "4 likes";
    btnIcon2.innerHTML = "4 respostas";
  }
}
