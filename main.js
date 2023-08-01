// Users should be able to:
// - View the optimal layout for the interface depending on their device's screen size

const nextButtons = document.querySelectorAll(".info .next");
const infoDivs = document.querySelectorAll(".info-step");
const steps = document.querySelectorAll(".step .index");
const backButtons = document.querySelectorAll(".back");
const inputs = document.querySelectorAll(".step--one-info input");
const monthlyPlan = document.querySelector(".monthly");
const yearlyPlan = document.querySelector(".yearly");
const plans = document.querySelectorAll(".type h5");
const switchButton = document.querySelector(".type label");
const addons = document.querySelectorAll(".addon input");
const addonsLabels = document.querySelectorAll(".addon label");
const yearlyAddons = document.querySelectorAll(".addons .price");
const serviceAddons = document.querySelector(".service-addons");
const planInputs = document.querySelectorAll(".plan input");
const summaryplanPrice = document.querySelector(".plan-price");
const summaryPlanTitle = document.querySelector(".summary h3");
const changeButton = document.querySelector(".summary a");
const horLine = document.querySelector(".summary hr");
const details = document.querySelectorAll(".details");
const planTitle = document.querySelectorAll(".details h4");
const planPrice = document.querySelector(".details p");
const addonPrice = document.querySelectorAll(".addon-price");
const totalPrice = document.querySelector(".total-price span");
const totalTitle = document.querySelector(".total-title");
const nameInp = document.querySelector(".name");
const emailInp = document.querySelector(".email");
const numberInp = document.querySelector(".number");
const total = document.querySelector(".total");
const finalPriceEl = document.querySelector(".total-price");

const showSteps = function () {
  steps.forEach((step, i) => {
    step.style.pointerEvents = "none";
    step.addEventListener("click", (e) => {
      steps.forEach((st) => {
        st.classList.remove("active");
      });
      e.currentTarget.classList.toggle("active");
      infoDivs.forEach((div) => (div.style.display = "none"));
      infoDivs[i].style.display = "flex";
    });
  });
};

const buttons = function () {
  //1
  nextButtons.forEach((btn, i) =>
    btn.addEventListener("click", function () {
      if (!btn) return;

      // Form Validation
      if (
        inputs[0].value != "" &&
        inputs[1].value != "" &&
        inputs[2].value != ""
      ) {
        nameInp.classList.remove("invalid");
        numberInp.classList.remove("invalid");
        emailInp.classList.remove("invalid");
      }

      if (inputs[0].value == "") {
        nameInp.classList.add("invalid");
        return;
      } else {
        nameInp.classList.remove("invalid");
      }

      if (inputs[1].value == "") {
        emailInp.classList.add("invalid");
        return;
      } else {
        emailInp.classList.remove("invalid");
      }

      if (inputs[2].value == "") {
        numberInp.classList.add("invalid");
        return;
      } else {
        numberInp.classList.remove("invalid");
      }

      infoDivs[i].style.display = "none";
      infoDivs[i + 1].style.display = "flex";
      steps.forEach((st) => {
        st.classList.remove("active");
      });

      if (!steps[steps[i].innerHTML]) {
        steps[3].classList.add("active");
        return;
      }

      steps[steps[i].innerHTML].classList.add("active");
    })
  );

  //2
  backButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      steps[i].click();
      if (document.querySelector(".total-price") != null) {
        document.querySelector(".total-price").remove();
      }
    });
  });

  //3
  changeButton.onclick = () => {
    document.querySelector(".total-price").remove();
    steps[1].click();
  };
};

const insertMonthlyAndYearlyPrices = function () {
  // 1
  switchButton.addEventListener("click", function () {
    plans.forEach((plan) => {
      plan.classList.toggle("active");
    });
    if (monthlyPlan.classList.contains("active")) {
      switchButton.style.rotate = "0deg";
      insertMonthlyPrices();
    }
    if (yearlyPlan.classList.contains("active")) {
      switchButton.style.rotate = "180deg";
      insertYearlyPrices();
    }
  });

  // 2
  const insertMarkup = function (
    arcade,
    advanced,
    pro,
    arcadeAddons,
    advancedAddons,
    proAddons
  ) {
    details.forEach((det) => (det.innerHTML = ""));
    yearlyAddons.forEach((add) => (add.innerHTML = ""));

    const insertHTML = function (parent, el) {
      parent.insertAdjacentHTML("afterbegin", el);
    };
    insertHTML(details[0], arcade);
    insertHTML(details[1], advanced);
    insertHTML(details[2], pro);
    insertHTML(yearlyAddons[0], arcadeAddons);
    insertHTML(yearlyAddons[1], advancedAddons);
    insertHTML(yearlyAddons[2], proAddons);
  };

  //3
  const insertMonthlyPrices = function () {
    const arcade = `
     <h4>Arcade</h4>
     <p>$<span class="final-price">9</span>/mo</p>
  `;
    const advanced = `
     <h4>Advanced</h4>
     <p>$<span class="final-price">12</span>/mo</p>
  `;
    const pro = `
     <h4>Pro</h4>
     <p>$<span class="final-price">15</span>/mo</p>
  `;
    const arcadeAddons = `
      <span class="price">+$<span class="final-price">1</span>/mo</span>
  `;
    const advancedAddons = `
      <span class="price">+$<span class="final-price">1</span>/mo</span>
  `;
    const proAddons = `
      <span class="price">+$<span class="final-price">2</span>/mo</span>
  `;
    insertMarkup(
      arcade,
      advanced,
      pro,
      arcadeAddons,
      advancedAddons,
      proAddons
    );
  };

  const insertYearlyPrices = function () {
    const arcade = `
     <h4>Arcade</h4>
      <p>$<span class="final-price">90</span>/yr</p>
     <span>2 Months Free</span>
  `;
    const advanced = `
     <h4>Advanced</h4>
      <p>$<span class="final-price">120</span>/yr</p>
     <span>2 Months Free</span>
  `;
    const pro = `
     <h4>Pro</h4>
      <p>$<span class="final-price">150</span>/yr</p>
     <span>2 Months Free</span>
  `;
    const arcadeAddons = `+$<span class="final-price">10</span>/yr`;
    const advancedAddons = `+$<span class="final-price">20</span>/yr`;
    const proAddons = `+$<span class="final-price">20</span>/yr`;

    insertMarkup(
      arcade,
      advanced,
      pro,
      arcadeAddons,
      advancedAddons,
      proAddons
    );
  };
};

addons.forEach((ad) => {
  ad.addEventListener("click", () =>
    ad.parentElement.classList.toggle("active")
  );
});

const AddSummaryResult = function () {
  nextButtons[1].addEventListener("click", function () {
    planInputs.forEach((pl) => {
      if (pl.checked) {
        const planTitle =
          pl.parentElement.childNodes[2].childNodes[2].childNodes[1].innerHTML;
        const planPrice =
          pl.parentElement.childNodes[2].childNodes[2].childNodes[3].innerHTML;

        const checkForActivePlan = function (plan) {
          if (plan.classList.contains("active")) {
            summaryPlanTitle.innerHTML = `${planTitle} ${
              plan === monthlyPlan ? "(Monthly)" : "(Yearly)"
            }`;
            totalTitle.innerHTML = `Total ${
              plan === monthlyPlan ? "(Per Month)" : "(Per Year)"
            }`;
          } else {
            summaryplanPrice.innerHTML = planPrice;
          }
        };
        checkForActivePlan(monthlyPlan);
        checkForActivePlan(yearlyPlan);
      }
    });
  });

  const calcFinalPrice = function () {
    const planNumber = Number(
      document.querySelector(".summary .final-price").innerHTML
    );
    const addonsPrice = document.querySelectorAll(
      ".service-addons .final-price"
    );
    const array = [];
    array.push(planNumber);
    addonsPrice.forEach((p) => array.push(Number(p.innerHTML)));
    const finalPrice = array.reduce((acc, cur) => acc + cur);
    const html = `
        <span class="total-price">+$<span>${finalPrice}</span>${
      totalTitle.innerHTML === "Total (Per Year)" ? "/yr" : "/mo"
    }</span>
    `;
    total.insertAdjacentHTML("beforeend", html);
  };

  nextButtons[2].addEventListener("click", function () {
    serviceAddons.innerHTML = "";
    addons.forEach((ad) => {
      if (ad.checked) {
        const addonTitle =
          ad.parentElement.childNodes[3].childNodes[1].innerHTML;

        const addonPrice = ad.parentElement.childNodes[5].innerHTML;
        let html = `
            <div class="bonus flex-between">
              <h5>${addonTitle}</h5>
              <span class="addon-price">${addonPrice}</span>
            </div>
        `;

        serviceAddons.insertAdjacentHTML("beforeend", html);
        removeAddons(steps[0]);
        removeAddons(steps[1]);
        removeAddons(steps[2]);
        removeAddons(backButtons[0]);
        removeAddons(backButtons[1]);
        removeAddons(backButtons[2]);
      }
    });

    if (serviceAddons.innerHTML === "") {
      document.querySelector(".service").style.paddingBottom = "0px";
      serviceAddons.style.display = "none";
    }

    if (serviceAddons.innerHTML != "") {
      document.querySelector(".service").style.paddingBottom = "20px";
      serviceAddons.style.display = "block";
      const horline = `
                <hr />
            `;
      serviceAddons.insertAdjacentHTML("afterbegin", horline);
    }
    calcFinalPrice();
  });
};

const removeAddons = function (button) {
  button.addEventListener("click", function () {
    serviceAddons.innerHTML = "";
  });
};

const init = function () {
  buttons();
  showSteps();
  AddSummaryResult();
  insertMonthlyAndYearlyPrices();
};
init();
