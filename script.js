const burgerBtn = document.querySelector("#burger");
const closeBtn = document.querySelector("#closeBtn");
const exitbth = document.querySelector(".exit__popup");
const blur = document.querySelector(".wrapper__blur");
const popup = document.querySelector(".wrapper__popup");
const openBtns = document.querySelectorAll(".nav-btn");
const select = document.querySelector(".nav__select");

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    blur.classList.add("active");
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
    exitbth.addEventListener("click", () => {
      blur.classList.remove("active");
      popup.classList.remove("active");
      document.body.style.overflow = "";
    });
    blur.addEventListener("click", () => {
      blur.classList.remove("active");
      popup.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});

const allLang = ["ru", "en", "cz"];
const changeUrlLang = () => {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  changeLanguage();
};
select.addEventListener("change", changeUrlLang);
const changeLanguage = () => {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    hash = "ru";
  }
  select.value = hash;
  for (let key in langArr) {
    const el = document.querySelector(".lang-" + key);
    if (el) el.innerHTML = langArr[key][hash];
  }
};
changeLanguage();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 },
);
document.querySelectorAll(".animate").forEach((el) => {
  observer.observe(el);
});
