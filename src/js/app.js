$(document).ready(function () {
  //nav btn
  $(".header__btn").click(function () {
    $(".header__nav").toggleClass("active");
  });

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top - 106,
      },
      1000,
      "swing"
    );
  });

  $(".header__item a").click(function () {
    $(".header__nav").removeClass("active");

    const target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - 106,
      },
      800
    );

    return false;
  });
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const budget = document.querySelector("#budget");
  const subject = document.querySelector("#subject");
  const sendBtn = document.querySelector(".send");
  const popup = document.querySelector(".popup");
  const closeBtn = document.querySelector(".footer__popup .footer__btn");
  const form = document.querySelector(".footer__form");
  const scrollButton = document.querySelector(".main__scroll");
  const targetElement = document.querySelector(".footer");

  const showError = (input) => {
    input.classList.add("error");
  };

  const clearError = (input) => {
    input.classList.remove("error");
  };

  const checkForm = (inputs) => {
    inputs.forEach((el) => {
      if (el.value === "") {
        showError(el, el.placeholder);
      } else {
        clearError(el);
      }
    });
  };
  const checkLength = (input, min) => {
    if (input.value.length < min) {
      showError(input);
    }
  };

  const checkMail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value)) {
      clearError(email);
    } else {
      showError(email);
    }
  };
  const checkErrors = () => {
    const allInputs = document.querySelectorAll(".footer__form-box");
    let errorCount = 0;

    allInputs.forEach((el) => {
      if (el.classList.contains("error")) {
        errorCount++;
      }
    });
    if (errorCount === 0) {
      popup.classList.add("show-popup");
    }
    console.log(errorCount);
  };
  const clearForm = () => {
    form.reset();
  };

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkForm([username, email, budget, subject]);
    checkLength(username, 2);
    checkLength(budget, 2);
    checkMail(email);
    checkErrors();
    clearForm();
  });
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closePopup();
  });
  const closePopup = () => {
    popup.classList.remove("show-popup");
    clearForm();
  };
  scrollButton.addEventListener("click", () => {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
