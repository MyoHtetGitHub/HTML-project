	$(document).ready(function(){

				var d = new Date();
				var japanyear;
				var adyear = d.getFullYear();
				var admonth = d.getMonth() + 1;
				var addate = d.getDate();

				if(adyear < 1989){
								japanyear = (adyear - 1926) + 1;
								japanyeartext = "昭和" + japanyear + "年" + admonth  + "月" + addate + "日";
				}
				else if (adyear < 2018) {
								japanyear = (adyear - 1989) + 1;
								japanyeartext = "平成" + japanyear + "年" + admonth  + "月" + addate + "日";
				}
				else{
								japanyear = (adyear - 2019) + 1;
								japanyeartext = "令和" + japanyear + "年" + admonth  + "月" + addate + "日";
				}
				$(".active").text(japanyeartext);
});

function SendData(){
			var name=document.getElementById("name").value;
			var gender=document.getElementById("gender").value;
					var age=document.getElementById("age").value;
					var first1=document.getElementById("first1").value;
					var month=document.getElementById("month").value;
					var day=document.getElementById("day").value;
				var url="画面2.html?"+"name="+name+ "&gender="+ gender +"&age="+age+"&first1="+first1+"&mohth="+month+"&day="+day;
				window.location.href=url;
}
function processUser(){
					var parameters = location.search.substring(1).split("&");
				var temp = parameters[0].split("=");
				l = unescape(temp[1]);
				temp = parameters[1].split("=");
				p = unescape(temp[1]);
					temp = parameters[2].split("=");
				a = unescape(temp[1]);
					temp = parameters[3].split("=");
				first1= unescape(temp[1]);
						temp = parameters[4].split("=");
				month= unescape(temp[1]);
					temp = parameters[5].split("=");
				day= unescape(temp[1]);
				document.getElementById("result").innerHTML = l;
				document.getElementById("gender").innerHTML = p;
				document.getElementById("age").innerHTML = a;
				document.getElementById("first1").innerHTML = first1;
				document.getElementById("month").innerHTML = month;
				document.getElementById("day").innerHTML = day;
				}
				function ChangePage(){
     window.location.href="画面2.html";
				}
				function firstPage(){
					 window.location.href="画面1.html";
				}
				function myAlert(){
					alert("登録しました");
				}