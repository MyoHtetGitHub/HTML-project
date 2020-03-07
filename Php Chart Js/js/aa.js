$(document).ready(function(){
 $.ajax({
  url: "http://localhost/chartjs/api/data.php",
  type: "get",
  dataType : 'json',
  success: function(data) {
     var score = {
	aa : [],
	bb : []
};
for (var i=0; i<data.length;i++){
	if(data[i].team == "TeamA"){
		score.aa.push(data[i].score);
	}
	else if(data[i].team == "TeamB"){
		score.bb.push(data[i].score);
	}
}
console.log(score);
var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.scale.ticks.beginAtZero = true;
var data ={
	labels: ['March1', 'March2',"March3","March4","March5"],
	  datasets: [
	  {
	  	label: "TeamA score",
	  	data: score.aa,
	  	backgroundColor: "blue",
	  	borderColor: "lightblue",
        fill:false,
        lineTension:0,
         pointRadious:5
	  },
	   {
	  	label: "TeamB score",
	  	data: score.bb,
	  	backgroundColor: "red",
	  	borderColor: "lightgreen",
        fill:false,
        lineTension:0,
         pointRadious:5
	  }
	  ]
};
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
    	   legend: {
            display: true,
            position: "right",
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            },
        },
          title: {
            display: true,
            text: 'MY CHART JS WITH PHP MYADMIN'
        },
    }
});
      }     
 });
});

//Ajax send Data
function mySendData(){
	var team = document.getElementById("team").value;
	var score = document.getElementById("score").value;
	$.ajax({
      type: "POST",
      url:"http://localhost/chartjs/api/sendData.php",
      data: {team:team, score:score},
       success:function(data){
       console.log(data);
       }

	});
}