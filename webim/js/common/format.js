/* 将传入的数字转换为货币格式 */
function formatNumberToCurrency(val) {
	val = val.toString();
	var reg1 = /^[0-9]+$/;
	var reg2 = /^[0-9]+\.[0-9]+$/;

	//用于保存最后的结束
	var result = "";
	//用于保存最后整数部分的结果
	var result1 = "";
	//用于保存最后小数部分的结果
	var result2 = "";
	var index = val.indexOf(".");
	//用于保存未处理的整数部分
	var temp1 = "";
	//处理小数部分
	if (reg1.test(val)) {
		result2 = ".00";
		temp1 = val;
	} else if (reg2.test(val)) {
		var temp = val.substring(index);
		if (temp.length < 3) {
			temp = temp + "00";
		}
		temp = temp.substring(0, 3);
		result2 = temp;
		temp1 = val.substring(0, index);
	} else {
		return "error";
	}
	//处理整数部分
	var count = 0;
	if (temp1.length > 3) {
		for (var i = temp1.length - 1; i >= 0; i--) {
			result1 = temp1[i] + result1;
			count++;
			if (count == 3 && i != 0) {
				result1 = "," + result1;
				count = 0;
			}
		}
	} else {
		result1 = temp1;
	}

	result = result1 + result2;
	return result;
}

function formatPhoneNumber(val) {
	var phoneNumber = val.substring(0, 3) + "****" + val.substring(7);
	return phoneNumber;
}

