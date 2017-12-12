var aTd = document.getElementsByTagName('td');
var oResult;//定义显示结果的td
for (var i = 0 ; i < aTd.length; i++) {
	if(aTd[i].className === 'result'){
		oResult=aTd[i];
	}else if(aTd[i].className === 'cal'){
		aTd[i].onclick = function(){
			oResult.innerHTML = eval(oResult.innerHTML);
		}
	}else if(aTd[i].className === 'clear'){
		aTd[i].onclick = function(){
			oResult.innerHTML = '';
		}
	}else{
		aTd[i].onclick = function(){
			oResult.innerHTML += this.innerHTML;
		};
	}
}