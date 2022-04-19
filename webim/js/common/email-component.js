/* 创建数组，保存常用邮箱的后缀 */
var emailArray = new Array();
emailArray[0] = "@163.com";
emailArray[1] = "@139.com";
emailArray[2] = "@qq.com";
emailArray[3] = "@sina.com";

/* 将常用邮箱的后缀添加到id属性为emailList控件中 */
var emailList = $("#emailList");

for(var i = 0 ; i < emailArray.length ; i++){
	emailList.append($("<option>" + emailArray[i] + "</option>"));
}

/* 设置class属性为email-input控件的键盘抬起事件 */
$(".email-input").keyup(function(e){
	//获得用户输入的信息
	var msg = $(this).val();
	
	//判断：如果用户输入的信息中包含了@，则停止自动填充邮箱后缀
	if(msg.indexOf("@") != -1){
		return false;
	}
	
	//移出emailList控件中所有的option
	emailList.find("option").remove();
	
	for(var i = 0 ; i < emailArray.length ; i++){
		emailList.append($("<option>" + msg + emailArray[i] + "</option>"));
	}
});