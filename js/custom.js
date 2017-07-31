var app = angular.module('chartApp', []);

google.charts.load('current', {'packages':['corechart']});



app.controller('MainCtrl', ['$scope', '$http' ,'$location', function($scope, $http,$location) {
	$view = ($location.search().views)?$location.search().views:'week';
	$userID = ($location.search().userID)?$location.search().userID:1;
	
		
	if($userID == 1 ){
		$scope.switchUrl = '#/?views=month&userID=2';
	}
	if($userID == 2 ){
		$scope.switchUrl = '#/?views=month&userID=1';
	}
	
	
	
	$scope.getUser = function() {
		
		$http.get('http://internal.ats-digital.com:3011/api/stats/'+$userID).then(function(response) {

			$scope.User = response.data;
			console.log($scope.User);
			var weekDatas = new Array(8);
			
			weekDatas[0] = new Array("days","Views");
			var i = 1;
			angular.forEach($scope.User.views.perWeek, function(value, key) {
			   weekDatas[i] = new Array(key,value);
			   i++;
			}, weekDatas);
			
	console.log(weekDatas);
	
	// days charts
	google.charts.setOnLoadCallback(viewsChart);
	function viewsChart() {
		var data = google.visualization.arrayToDataTable(weekDatas);
		
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

	// months charts
	
	var monthsDatas = new Array(8);
			
		monthsDatas[0] = new Array("months","Views");
		var i = 1;
		angular.forEach($scope.User.views.perYear, function(value, key) {
		   monthsDatas[i] = new Array(key,value);
		   i++;
		}, monthsDatas);
			
	console.log(monthsDatas);
	
	google.charts.setOnLoadCallback(monthsChart);
	function monthsChart() {

	var data = google.visualization.arrayToDataTable(monthsDatas);
	
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
			
			
			

		})

	}
	


	$scope.getUser();
	
}])

