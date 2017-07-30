
google.charts.load('current', {'packages':['corechart']});
// days charts
google.charts.setOnLoadCallback(viewsChart);
// months charts
google.charts.setOnLoadCallback(monthsChart);


function viewsChart() {
var data = google.visualization.arrayToDataTable([
  ['Days', 'Views'],
  ['MON',  45],
  ['TUE',  50],
  ['WED',  35],
  ['THU',  75],
  ['FRI',  100],
  ['SAT',  90],
  ['SUN',  120]
]);

var options = {
  backgroundColor: 'transparent',
  focusTarget: 'category',
  chartArea: {
  	left: 30,
  	top: 10,
  	width: '100%',
  	height: '80%'
  },
  legend: 'none',
  vAxis: {
	  minValue: 0,
	  ticks: [0, 50, 100, 150],
	  textStyle: {
        fontSize: 12,
		color: '#e094a1'
      },
	  },
  hAxis: {
	  textStyle: {
        fontSize: 12,
		color: '#e094a1'
      }
  },
  colors: ['#fff'],
  pointSize: 12,
  pointShape: 'circle',

};

var chart = new google.visualization.LineChart(document.getElementById('views_chart'));
chart.draw(data, options);
}


function monthsChart() {

var data = google.visualization.arrayToDataTable([
	 ['Months', 'Views'],
	 ['JAN', 8.94],
	 ['FEB', 10.49],
	 ['MAR', 19.30],
	 ['APR', 21.45],
	 ['MAY', 8.94],
	 ['JUN', 10.49],
	 ['JUL', 19.30],
	 ['AUG', 21.45],
	 ['OCT', 8.94],
	 ['NOV', 10.49],
	 ['DEC', 19.30],
  ]);

var options = {
  backgroundColor: 'transparent',
  colors: ['#29c0a5'],
  focusTarget: 'category',
  chartArea: {
  	left: 30,
  	top: 10,
  	width: '100%',
  	height: '80%'
  },
  legend: 'none',
  hAxis: {
      textStyle: {
        fontSize: 12,
		color: '#e5d9db'
      }
    },
  vAxis: {
    }
};

var chart = new google.visualization.ColumnChart(
document.getElementById('months_chart'));

chart.draw(data, options);
}