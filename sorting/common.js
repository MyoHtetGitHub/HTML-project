var arr =[["1","H30.03.09","1111100000","電子　花子","01.更新","昭夫　山田","備考1"],["2","H30.03.10","1111100001","電子　花子","01.更新","昭夫　山田","備考1"],["3","H30.03.11","1111100002","電子　花子","01.更新","桜　田中","備考1"],
        ["4","H30.03.12","1111100000","電子　花子","01.更新","昭夫　山田","備考1"],["5","H30.03.08","1111100001","電子　花子","02.新規","昭夫　山田","備考1"],["6","H30.03.07","1111100002","電子　花子","02.新規","桜　田中","備考1"],
        ["7","H30.03.00","1111100000","電子　花子","02.新規","桜　田中","備考1"],["8","H30.04.09","1111100000","電子　花子","02.新規","桜　田中","備考1"],["9","H30.04.10","1111100001","電子　花子","03.修正","昭夫　山田","備考1"],
        ["10","H30.04.11","1111100002","電子　花子","03.修正","桜　山田","備考1"]];
        var temp=Array(10,7);
function sort(){
	//Get class name asc
var name=document.getElementById("asc").className;
if(name=="asc"){
	//Call sort Asending order
	arr.sort(arrsortfunction);
	  console.log(arr);
	  
	  temp=arr;
	  //Call Show Funciton
	  display(temp);
	  //Change class name to "Desc"
	  $("#asc").removeClass("asc").addClass("desc");
}else{
	//Get Call Name desc
	var name1=document.getElementById("asc").className;
	if(name1=="desc"){
		//Call sort Desending order
		arr.sort(arrsortfunction1);
		temp=arr;
	 console.log(arr);
	 display(temp);
	 //Change class name "Ascending"
	 	  $("#asc").removeClass("desc").addClass("asc");
	}
}
}
//Ascending Order
function arrsortfunction (a, b) {
 var avalue = a[1],
        bvalue = b[1];
    if (avalue < bvalue) {
        return -1;
    }
    if (avalue > bvalue) {
        return 1;
    }
    return 0;
}
//Dsending Order
function arrsortfunction1 (a, b) {
 var avalue = a[1],
        bvalue = b[1];
    if (avalue < bvalue) {
        return 1;
    }
    if (avalue > bvalue) {
        return -1;
    }
    return 0;
}
function display(temp){
		// $("#col0-"+0).html(temp[0][0]);
		// $("#col0-"+1).html(temp[0][1]);
		// $("#col0-"+2).html(temp[0][2]);
		// $("#col0-"+3).html(temp[0][3]);
		// $("#col0-"+4).html(temp[0][4]);
		// $("#col0-"+5).html(temp[0][5]);
		// $("#col0-"+6).html(temp[0][6]);

		// $("#col1-"+0).html(temp[1][0]);
		// $("#col1-"+1).html(temp[1][1]);
		// $("#col1-"+2).html(temp[1][2]);
		// $("#col1-"+3).html(temp[1][3]);
		// $("#col1-"+4).html(temp[1][4]);
		// $("#col1-"+5).html(temp[1][5]);
		// $("#col1-"+6).html(temp[1][6]);
		for(var i=0;i<10;i++){
			for(var j=0;j<6;j++){
				$("#col"+i+"-"+j).html(temp[i][j]);
			}
		}
	}
	
