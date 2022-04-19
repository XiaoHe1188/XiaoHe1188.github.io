var args = {
	"departmentId": -1,
	"pageNumber": -1
};

var url = url_prefix_employee + "selectPages";

var employeeList;

$.get(url, args, function(result) {
	if (result.code == 0) {
		employeeList = result.resultData.pages.list;
	}
})

function showCreator(creatorId){
	for (var i = 0; i < employeeList.length; i++) {
		if(creatorId == employeeList[i].employeeId){
			return employeeList[i].employeeName;
		}
	}
}

function showEmployeeMessages(body, EmployeeId) {
	for (var i = 0; i < employeeList.length; i++) {
		var option = $("<option " + (EmployeeId == employeeList[i].employeeId ? (selected = 'selected') : '') +
			"></option>");
		option.attr("value", employeeList[i].employeeId);
		option.attr("salary", employeeList[i].employeeSalary);
		option.text(employeeList[i].employeeName);
		body.append(option);
	}
}
