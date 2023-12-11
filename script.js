let faq1 = document.querySelector("#faq1")
let faq2 = document.querySelector("#faq2")
let faq3 = document.querySelector("#faq3")
let faq4 = document.querySelector("#faq4")

let plus1 = document.querySelector("#plus1")
let plus2 = document.querySelector("#plus2")
let plus3 = document.querySelector("#plus3")
let plus4 = document.querySelector("#plus4")

let minus1 = document.querySelector("#minus1")
let minus2 = document.querySelector("#minus2")
let minus3 = document.querySelector("#minus3")
let minus4 = document.querySelector("#minus4")

function faqTog1() {
  if (faq1.style.display === "none") {
    faq1.style.display = "block";
    minus1.style.display = "block";
    plus1.style.display = "none";
  }
  else {
    faq1.style.display = "none";
    minus1.style.display = "none";
    plus1.style.display = "block";
  }
}

function faqTog2() {
  if (faq2.style.display === "none") {
    faq2.style.display = "block";
    minus2.style.display = "block";
    plus2.style.display = "none";
  }
  else {
    faq2.style.display = "none";
    minus2.style.display = "none";
    plus2.style.display = "block";
  }
}

function faqTog3() {
  if (faq3.style.display === "none") {
    faq3.style.display = "block";
    minus3.style.display = "block";
    plus3.style.display = "none";
  }
  else {
    faq3.style.display = "none";
    minus3.style.display = "none";
    plus3.style.display = "block";
  }
}

function faqTog4() {
  if (faq4.style.display === "none") {
    faq4.style.display = "block";
    minus4.style.display = "block";
    plus4.style.display = "none";
  }
  else {
    faq4.style.display = "none";
    minus4.style.display = "none";
    plus4.style.display = "block";
  }
}

faqTog1()
faqTog2()
faqTog3()
faqTog4()