/* 验证邮箱格式是否正确，格式正确返回true，否则返回false */
function checkMail(value) {
	var reg = /^[a-z|A-Z|0-9]+@[a-z|A-Z|0-9]+\.(com|cn)$/;

	if (reg.test(value)) {
		// 邮箱格式验证未通过
		return true;
	} else {
		// 邮箱格式验证未通过
		return false;
	}
}

/* 
	验证数字格式是否正确，正确返回true，否则返回false
	该方法不允许出现数字中出现0或负数
*/
function checkNumber(value) {
	var reg = /^([1-9][0-9]*|[1-9][0-9]*\.[0-9]+|0\.[0-9]+)$/;

	if (reg.test(value)) {
		return true;
	} else {
		return false;
	}
}

/* 验证手机号码格式是否正确，正确返回true，否则返回false */
function checkPhone(value){
	var reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|8[0135678])\d{8}$/;
	
	if (reg.test(value)) {
		return true;
	} else {
		return false;
	}
}

/* 验证数字是否为正整数，是返回true，否则返回false */
function checkInt(value){
	var reg = /^([1-9][0-9]*)$/;
	
	if (reg.test(value)) {
		return true;
	} else {
		return false;
	}
}

/* 验证邮政编码格式是否正确，正确返回true，否则返回false */
function checkPostalcode(value){
	var reg = /^[0-9]{6}$/;
	
	if (reg.test(value)) {
		return true;
	} else {
		return false;
	}
}