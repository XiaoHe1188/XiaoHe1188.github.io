// 员工模块URL前缀
const url_prefix_employee = "http://localhost:9001/person/employee/";

// 文件服务模块URL前缀
const url_prefix_file = "http://localhost:9001/file/";

// 浏览图片URL前缀
const url_prefix_image = url_prefix_file + "img/";

// 客户模块URL前缀
const url_prefix_consumer = "http://localhost:9001/person/consumer/";

// 材料模块URL前缀
const url_prefix_materials = "http://localhost:9001/materials/";

// 订单模块URL前缀
const url_prefix_order = "http://localhost:9001/order/";

// 方案模块URL前缀
const url_prefix_scheme = "http://localhost:9001/scheme/";

const url_prefix_other = "http://localhost:9001/other/"


/* 权限判断，然后隐藏对应权限的功能 */
function gradeDetermination(grade) {
	var loginEmployee = JSON.parse(sessionStorage.getItem("loginEmployee"));
	var loginGrade = loginEmployee.employeeGrade;
	return (loginGrade < grade ? "hidden='hidden'" : "");
}

function gradeHidden(grade) {
	var loginEmployee = JSON.parse(sessionStorage.getItem("loginEmployee"));
	var loginGrade = loginEmployee.employeeGrade;
	return (loginGrade < grade ? 1 : 0);
}
