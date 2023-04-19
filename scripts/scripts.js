// ГИСТОГРАММЫ
const saveChart = document.getElementById("save-chart");

new Chart(saveChart, {
  type: "bar",
  data: {
    labels: [
      "Year 1",
      "Year 2",
      "Year 3",
      "Year 4",
      "Year 5",
      "Year 6",
      "Year 7",
      "Year 8",
      "Year 9",
      "Year 10",
    ],
    datasets: [
      {
        label: "Natural Person",
        borderColor: "transparent",
        categoryPercentage: 0.5,
        barPercentage: 1,
        backgroundColor: "#35B984",
        data: [
          90000, 190000, 290000, 390000, 490000, 590000, 690000, 790000, 890000,
          990000,
        ],
      },
      {
        label: "Holding-Model",
        borderColor: "transparent",
        categoryPercentage: 0.5,
        barPercentage: 1,
        backgroundColor: "#FF9533",
        data: [
          110000, 220000, 390000, 500000, 640000, 810000, 1100000, 1220000,
          1500000, 1790000,
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          font: { family: "DM Sans", size: 11, weight: 500 },
        },
      },
      title: {
        display: true,
        text: "Wealth accumulation with and without tax comparison",
        font: {
          family: "DM Sans",
          weight: 500,
        },
        padding: {
          bottom: 18,
        },
      },
    },
    colors: {
      forceOverride: true,
    },
    scales: {
      x: {
        grid: {
          color: "transparent",
        },
        ticks: {
          color: "#171717",
          font: {
            family: "DM Sans",
            size: 11,
            weight: 500,
          },
        },
      },
      y: {
        ticks: {
          color: "#858585",
          font: {
            family: "DM Sans",
            size: 11,
            weight: 500,
            lineHeight: 2.05,
          },
        },
        border: {
          dash: [3, 3],
          color: "transparent",
        },
      },
    },
  },
});

const exampleChart = document.getElementById("example-chart");

new Chart(exampleChart, {
  type: "bar",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
    datasets: [
      {
        label: "No Tax",
        borderColor: "transparent",
        categoryPercentage: 0.5,
        barPercentage: 1,
        backgroundColor: "#35B984",
        data: [
          400000, 420000, 500000, 540000, 590000, 620000, 700000, 790000,
          880000, 930000, 1020000, 1120000, 1280000, 1380000, 1500000,
        ],
      },
      {
        label: "26,375% Tax",
        borderColor: "transparent",
        categoryPercentage: 0.5,
        barPercentage: 1,
        backgroundColor: "#FF9533",
        data: [
          400000, 410000, 480000, 520000, 580000, 610000, 690000, 780000,
          820000, 910000, 1000000, 1100000, 1200000, 1360000, 1480000,
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          font: { family: "DM Sans", size: 11, weight: 500 },
        },
      },
      title: {
        display: true,
        text: "Tax comparison",
        font: {
          family: "DM Sans",
          size: 15,
          weight: 500,
        },
        padding: {
          bottom: 27,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "transparent",
        },
        ticks: {
          color: "#171717",
          font: {
            family: "DM Sans",
            size: 11,
            weight: 500,
          },
        },
      },
      y: {
        ticks: {
          color: "#858585",
          font: {
            family: "DM Sans",
            size: 11,
            weight: 500,
            lineHeight: 2.73,
          },
        },
        border: {
          dash: [3, 3],
          color: "transparent",
        },
      },
    },
  },
});

// СЛАЙДЕР
new Swiper(".slider-reviews", {
  effect: "fade",
  navigation: {
    nextEl: ".slider-reviews__btn-next",
    prevEl: ".slider-reviews__btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".slider-team", {
  navigation: {
    nextEl: ".slider-team__btn-next",
    prevEl: ".slider-team__btn-prev",
  },
  pagination: {
    el: ".slider-team__pagination",
    clickable: true,
  },
});

// АККОРДЕОН
var acc = document.getElementsByClassName("accordion__title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var text = this.nextElementSibling;
    if (text.style.display == "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  });
}
