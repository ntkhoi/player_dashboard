var myChart = new Chart(document.getElementById("donutChart"), {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// BARCHART

new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// HOZ_BARCHART

new Chart(document.getElementById("horizontalBarChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
      },
    ],
  },
  options: {
    indexAxis: "y",
  },
});

// BUBBLE

new Chart(document.getElementById("bubbleChar"), {
  type: "bubble",
  data: {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: 20,
            y: 10,
            r: 15,
          },
          {
            x: 5,
            y: 10,
            r: 15,
          },
          {
            x: 5,
            y: 10,
            r: 15,
          },

          { x: 16, y: 15, r: 15 },
          {
            x: 40,
            y: 20,
            r: 10,
          },
        ],
        backgroundColor: "rgb(255,250,205)",
      },
      {
        label: "Second Dataset",
        data: [
          {
            x: 5,
            y: 5,
            r: 6,
          },
          {
            x: 5,
            y: 12,
            r: 15,
          },
          {
            x: 5,
            y: 11,
            r: 15,
          },

          { x: 16, y: 15, r: 15 },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
        backgroundColor: "rgb(54, 162, 235)",
      }
    ],

  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
});


//BOWLING

new Chart(document.getElementById("bow_donutChart"), {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// BARCHART

new Chart(document.getElementById("bow_barChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// HOZ_BARCHART

new Chart(document.getElementById("bow_horizontalBarChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
      },
    ],
  },
  options: {
    indexAxis: "y",
  },
});

// BUBBLE

new Chart(document.getElementById("bow_bubbleChar"), {
  type: "bubble",
  data: {
    datasets: [
      {
        label: "First Dataset",
        data: [
          {
            x: 20,
            y: 10,
            r: 15,
          },
          {
            x: 5,
            y: 10,
            r: 15,
          },
          {
            x: 5,
            y: 10,
            r: 15,
          },

          { x: 16, y: 15, r: 15 },
          {
            x: 40,
            y: 20,
            r: 10,
          },
        ],
        backgroundColor: "rgb(255,250,205)",
      },
      {
        label: "Second Dataset",
        data: [
          {
            x: 5,
            y: 5,
            r: 6,
          },
          {
            x: 5,
            y: 12,
            r: 15,
          },
          {
            x: 5,
            y: 11,
            r: 15,
          },

          { x: 16, y: 15, r: 15 },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
        backgroundColor: "rgb(54, 162, 235)",
      }
    ],

  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
});


