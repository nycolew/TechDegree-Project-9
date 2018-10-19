//============================
// CHARTS
//============================

// Select Element Customization

$(document).ready(function() {
  $('select').niceSelect();
});

// Line Chart

var ct1 = document.getElementById("lineChart");
var myLineChart = new Chart(ct1, {
    responsive: true,
    type: 'line',
    data: {
        labels: ['','16-22', '23-39', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [0, 350, 1200, 780, 2200, 650, 1800, 2200, 2800, 500, 900, 1400],
            lineTension: 0,
            backgroundColor: 'rgba(179, 205, 224,0.4)',
            borderColor: '#03396c',
            pointBackgroundColor: '#b3cde0',
            pointBorderColor: '#011f4b',
            pointRadius: 7,
            borderWidth: 2
        }]
    },
    options: {
        legend: {
          display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
        }
    }
});

// Bar Chart

var ct2 = document.getElementById('barChart');
var myBarChart = new Chart(ct2, {
  type: 'bar',
  responsive: true,
  maintainAspectRatio: false,
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
      data: [30, 75, 150, 250, 200, 125, 50],
      backgroundColor: ['#6497b1', '#005b96', '#6497b1', '#005b96', '#6497b1', '#005b96', '#6497b1'],
      hoverBackgroundColor: '#38a3d4',
    }]
  },
  options: {
    legend: {
      display: false,
    },
  }
});


// Donut Chart

var ct3 = document.getElementById('donutChart');
var myDonutChart = new Chart (ct3, {
  type: 'doughnut',
  responsive: true,
  data: {
    labels: ['Phone', 'Tablet', 'Desktop'],
    datasets: [{
      data: [20,35,45],
      backgroundColor: ['#38a3d4', '#246287', '#b3cde0']
    }]
  },
  options: {
    legend: {
      position: "right",
      boxWidth: 50,
      fontSize: 22
    }
  }
});

// Change Navigation Highlight


$(document).ready(function() {
$("#menu svg").click(function () {
    $(this).addClass("current");
    $("#menu svg").not(this).removeClass("current");
});

});

// Notifications Menu

$("#notification-item").on("click", function() {
  $('#dropdown').css({
     'display': 'block',
 });
  });

// Change graphs on toggle switch click

const dataHourly = {
    responsive: true,
    type: 'line',
    data: {
        labels: ['','16-22', '23-39', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [0, 350, 1200, 780, 2200, 650, 1800, 2200, 2800, 500, 900, 1400],
            lineTension: 0,
            backgroundColor: 'rgba(179, 205, 224,0.4)',
            borderColor: '#03396c',
            pointBackgroundColor: '#b3cde0',
            pointBorderColor: '#011f4b',
            pointRadius: 7,
            borderWidth: 2
        }]
    },
    options: {
        legend: {
          display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
        }
    }
};

const dataDaily = {
    responsive: true,
    type: 'line',
    data: {
        labels: ['','16-22', '23-39', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [0, 225, 1030, 990, 1200, 770, 1200, 1000, 2200, 200, 700, 800],
            lineTension: 0,
            backgroundColor: 'rgba(179, 205, 224,0.4)',
            borderColor: '#03396c',
            pointBackgroundColor: '#b3cde0',
            pointBorderColor: '#011f4b',
            pointRadius: 7,
            borderWidth: 2
        }]
    },
    options: {
        legend: {
          display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
        }
    }
};

const dataWeekly = {
    responsive: true,
    type: 'line',
    data: {
        labels: ['','16-22', '23-39', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [0, 500, 850, 920, 2700, 340, 1200, 1200, 2400, 700, 300, 1800],
            lineTension: 0,
            backgroundColor: 'rgba(179, 205, 224,0.4)',
            borderColor: '#03396c',
            pointBackgroundColor: '#b3cde0',
            pointBorderColor: '#011f4b',
            pointRadius: 7,
            borderWidth: 2
        }]
    },
    options: {
        legend: {
          display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
        }
    }
};

const dataMonthly = {
    responsive: true,
    type: 'line',
    data: {
        labels: ['','16-22', '23-39', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [0, 250, 1900, 700, 2500, 900, 1100, 1900, 2300, 800, 100, 1900],
            lineTension: 0,
            backgroundColor: 'rgba(179, 205, 224,0.4)',
            borderColor: '#03396c',
            pointBackgroundColor: '#b3cde0',
            pointBorderColor: '#011f4b',
            pointRadius: 7,
            borderWidth: 2
        }]
    },
    options: {
        legend: {
          display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
        }
    }
};


$("#hourly").on("click", function() {
     var context1 = document.querySelector('#lineChart').getContext('2d');
    new Chart(context1).Line(dataHourly);
  });

  $("#daily").on("click", function() {
       var context1 = document.querySelector('#lineChart').getContext('2d');
      new Chart(context1).Line(dataDaily);
    });
