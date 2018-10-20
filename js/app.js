// Select Element Customization

$(document).ready(function() {
  $('select').niceSelect();
});

// Chart Toggle Data

let hourlyLabels = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
let hourlyData = [150, 655, 365, 899, 1500, 1900, 1700, 322, 755, 2100, 900, 550, 430, 230, 780, 899, 988, 344, 236, 1300, 1000, 430, 911, 433];

let dailyLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
let dailyData = [200, 540, 365, 42, 911, 777, 590];

let weeklyLabels = ['31-6', '7-13', '14-20', '21-27', '28-3'];
let weeklyData = [365, 1005, 999, 538, 1140];

let monthlyLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let monthlyData = [1400, 800, 2700, 2500, 2800, 911, 365, 420, 747, 620, 1700, 1900];


// Line Chart

var ct1 = document.getElementById("lineChart");
var myLineChart = new Chart(ct1, {
    responsive: true,
    type: 'line',
    data: {
        labels: hourlyLabels,
        // labels: ['','16-22', '23-39', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: hourlyData,
            // data: [0, 350, 1200, 780, 2200, 650, 1800, 2200, 2800, 500, 900, 1400],
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

$('#notification-item').on("click", function() {
  $('#dropdown').toggle();
  $('.dot').css({
    'display': 'none'
  });
});

// Toggle Line Chart

function changeChart(chart, labels, data) {
  chart.data.labels = labels;
  chart.data.datasets.forEach((dataset) => {
    dataset.data = data;
  });
  chart.update();
};

function clickToggle(element, labels, data) {
  element.on('click', () => {
    changeChart(myLineChart, labels, data);
  });
};

clickToggle($('#hourly'), hourlyLabels, hourlyData);
clickToggle($('#daily'), dailyLabels, dailyData);
clickToggle($('#weekly'), weeklyLabels, weeklyData);
clickToggle($('#monthly'), monthlyLabels, monthlyData);

// Message User Autocomplete

const listUsers = ['Henry DeTamble', 'Hermione Granger', 'Kaz Brekker', 'Nycole Walsh', 'Phoebe Caulfield'];

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
};

autocomplete(document.getElementById("userSearch"), listUsers);

// Message Sent Confirmation
