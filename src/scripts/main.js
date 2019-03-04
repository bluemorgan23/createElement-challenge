const article = document.createElement("article");
article.id = "messages"

const body = document.querySelector("body");

const messages = document.querySelector("#messages");

const message1 = document.createElement("section");
message1.className = "message";
message1.textContent = "This is message1";
article.appendChild(message1);

const message2 = document.createElement("section");
message2.className = "message";
message2.textContent = "This is message2";
article.appendChild(message2);

const message3 = document.createElement("section");
message3.className = "message";
message3.textContent = "This is message3";
article.appendChild(message3);

const message4 = document.createElement("section");
message4.className = "message";
message4.textContent = "This is message4";
article.appendChild(message4);

const message5 = document.createElement("section");
message5.className = "message";
message5.textContent = "This is message5";
article.appendChild(message5);

console.log(article);
body.appendChild(article);

