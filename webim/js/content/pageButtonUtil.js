/* 
	在页面中显示分页按钮
	pageButtonBody：显示分页按钮的容器
	pages：分页的信息
	clickFunction：点击分页按钮时需要调用的方法
	other：需要传递的其它参数
*/
function showPageButton1(pageButtonBody, pages, clickFunction, other) {
	// 在分页按钮容器中查找所有的li，并移除
	pageButtonBody.find("li").remove();

	// 获得总页数
	var pageCount = pages.pages;
	// 如果总页数大于1，需要在页面中显示分页按钮
	if (pageCount > 1) {
		// 获得当前页码
		var pageNumber = pages.pageNum;
		/* 上一页 */
		// 如果当前为第一页，则上一页无效
		if (pages.isFirstPage) {
			pageButtonBody.append('<li><a><i class="fa fa-angle-left" style="color: #FFFFFF;"></i></a></li>');
		} else {
			pageButtonBody.append('<li><a href="' + (pageNumber - 1) +
				'" class="pageButtonHref"><i class="fa fa-angle-left" style="color: #FFFFFF;"></i></a></li>');
		}
		/* 普通分页按钮 */
		// 获得分页按钮的数组
		var pageButtonList = pages.navigatepageNums;
		for (var i = 0; i < pageButtonList.length; i++) {
			page = pageButtonList[i];
			if (page == pageNumber) {
				pageButtonBody.append('<li class="active"><a style="color: #FFFFFF;">' + page + '</a></li>');
			} else {
				pageButtonBody.append('<li><a href="' + page + '" class="pageButtonHref" style="color: #FFFFFF;">' + page +
					'</a></li>');
			}
		}

		/* 下一页 */
		// 如果当前为最后一页，则下一页无效
		if (pages.isLastPage) {
			pageButtonBody.append('<li><a><i class="fa fa-angle-right" style="color: #FFFFFF;"></i></a></li>');
		} else {
			pageButtonBody.append('<li><a href="' + parseInt((pageNumber) + 1) +
				'" class="pageButtonHref"><i class="fa fa-angle-right" style="color: #FFFFFF;"></i></a></li>');
		}

		/* 为分页按钮绑定单机事件 */
		$(".pageButtonHref").on("click", function() {
			// 获得被点击超链接href属性的值
			var href = $(this).attr("href");

			if (other == null) {
				clickFunction(href);
			} else {
				clickFunction(other, href);
			}

			// 阻止超链接发出请求
			return false;
		});
	}
}

function showPageButton(pageButtonBody, pages, clickFunction) {
	showPageButton1(pageButtonBody, pages, clickFunction, null);
}
