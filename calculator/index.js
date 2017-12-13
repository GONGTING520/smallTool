var aTd = document.getElementsByTagName('td');
var oResult; //定义显示结果的td
for (var i = 0; i < aTd.length; i++) {
	if (aTd[i].className === 'result') {
		oResult = aTd[i];
		oResult.bFlag = false; //false表示还未点击运算符，true表示点击了
	} else if (aTd[i].className === 'cal') { //=
		aTd[i].onclick = function () {
			oResult.innerHTML = eval(oResult.innerHTML);
			oResult.bFlag = false;
		}
	} else if (aTd[i].className === 'clear') { //C
		aTd[i].onclick = function () {
			oResult.innerHTML = '';
			oResult.bFlag = false;
		}
	} else if (aTd[i].className === 'operator') {
		aTd[i].onclick = function () {
			if (!oResult.bFlag) {
				oResult.innerHTML += this.innerHTML;
				oResult.bFlag = true;
			} else {
				var oReInner = oResult.innerHTML;
				oResult.innerHTML = oReInner.substring(0, oReInner.length - 1) + this.innerHTML;
			}
		}
	} else {
		aTd[i].onclick = function () {
			oResult.innerHTML += this.innerHTML;
			oResult.bFlag = false;
		};
	}
}