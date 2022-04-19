/* 存入与供应商和材料种类相关的JS代码 */

// 从浏览器缓存中获得所有供应商的信息
var providerList = JSON.parse(sessionStorage.getItem("providerList"));
// 从浏览器缓存中获得所有材料种类的信息
var kindList = JSON.parse(sessionStorage.getItem("kindList"));
// 如果providerList或者kindList为null，表示没有找到供应商或材料种类信息，需要向服务器发出请求，获得所有供应商与材料种类信息
if (providerList == null || kindList == null) {
	// 创建url
	var url = url_prefix_materials + "selectProviderAndKind";
	// 向服务器发出get模式的请求，并获得响应的结果
	$.get(url, null, function(result) {
		if (result.code == 0) {
			// 供应商
			providerList = result.resultData.providerList;
			sessionStorage.setItem("providerList", JSON.stringify(providerList));
			// 材料种类
			kindList = result.resultData.kindList;
			sessionStorage.setItem("kindList", JSON.stringify(kindList));
		} else {
			alert(result.message);
		}
	});
}

var materialsByKind;

function getMaterialsByKind(kindId) {
	var url = url_prefix_materials + "selectMaterials";
	var args = {
		"kindId": kindId,
		"providerId": -1,
		"pageNumber": -1
	}
	// 向服务器发出post模式的请求，并获得响应的结果
	$.post(url, args, function(result) {
		if (result.code == 0) {
			materialsByKind = result.resultData.pages.list;
			return materialsByKind;
		} else {
			// 获取失败则重新调用本方法，重新获取;
			// getMaterialsByKind(kindId);
			alert(result.message);
		}
	});
}

function materialsNameInit(body) {
	for (var i = 0; i < materialsByKind.length; i++) {
		var option = $("<option></option>");
		option.attr("value", materialsByKind[i].materialsId);
		option.text(materialsByKind[i].materialsName);
		body.append(option);
	}
}

function materialsNameInit1(body, MaterialsId, kindId) {
	var url = url_prefix_materials + "selectMaterials";
	var args = {
		"kindId": kindId,
		"providerId": -1,
		"pageNumber": -1
	}
	// 向服务器发出post模式的请求，并获得响应的结果
	$.post(url, args, function(result) {
		if (result.code == 0) {
			materialsByKind = result.resultData.pages.list;
			for (var i = 0; i < materialsByKind.length; i++) {
				var option = $("<option " + (MaterialsId == materialsByKind[i].materialsId ? (selected = 'selected') : '') +
					"></option>");
				option.attr("value", materialsByKind[i].materialsId);
				option.text(materialsByKind[i].materialsName);
				body.append(option);
			}
		} else {
			// 获取失败则重新调用本方法，重新获取;
			// getMaterialsByKind(kindId);
			alert(result.message);
		}
	});
}

function updateProviderAndKind(provider, kind) {
	provider.find("option[class='providerOption']").remove();
	kind.find("option[class='kindOption']").remove();
	setProviderAndKind(provider, kind);
}

function setProviderAndKind(provider, kind) {
	// 创建url
	var url = url_prefix_materials + "selectProviderAndKind";
	// 向服务器发出get模式的请求，并获得响应的结果
	$.get(url, null, function(result) {
		if (result.code == 0) {
			// 供应商
			providerList = result.resultData.providerList;
			sessionStorage.setItem("providerList", JSON.stringify(providerList));
			// 材料种类
			kindList = result.resultData.kindList;
			sessionStorage.setItem("kindList", JSON.stringify(kindList));
			providerInit(provider);
			kindInit(kind);
		} else {
			alert(result.message);
		}
	});
}

/* 
 初始化供应商
 provider参数：需要进行初始化的供应商下拉列表
 */
function providerInit(provider) {
	if (providerList != null) {
		for (var i = 0; i < providerList.length; i++) {
			var option = $("<option class='providerOption'></option>");
			option.attr("value", providerList[i].providerId);
			option.text(providerList[i].providerName);
			provider.append(option);
		}
	}
}

/* 
 初始化材料种类
 kind参数：需要进行初始化的供应商下拉列表
 */
function kindInit(kind) {
	if (kindList != null) {
		for (var i = 0; i < kindList.length; i++) {
			var option = $("<option class='kindOption'></option>");
			option.attr("value", kindList[i].kindId);
			option.text(kindList[i].kindName);
			kind.append(option);
		}
	}
}

/* 
 初始化材料种类
 kind参数：需要进行初始化的供应商下拉列表
 */
function orderKindInit(kind, orderKindId) {
	if (kindList != null) {
		for (var i = 0; i < kindList.length; i++) {
			var option = $("<option " + (orderKindId == kindList[i].kindId ? (selected = 'selected') : '') +
				"></option>");
			option.attr("value", kindList[i].kindId);
			option.text(kindList[i].kindName);
			kind.append(option);
		}
	}
}
