<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport"
		content="width=device-width; initial-scale=0.8;  user-scalable=0;" />
	<title>新增路由下供货商品-选择</title> <%@ include file="/inc/inc.jsp"%>
</head>

<body>
	<!--头部和菜单-->
	<%@ include file="/inc/head.jsp"%>
	<!--头部和菜单结束-->
	<!--左侧菜单-->
	<%@ include file="/inc/leftmenu.jsp"%>
	<!--左侧菜单结束-->
	<div class="wrapper">
		<!--外围框架-->
		<!--右侧框架-->
		<div class="wrapper-right">
			<!--公告位置-->
			<div class="right-topnav">
				<p class="gongg">
					<A href="#">［公告］:</A>
				</p>
				<div id="elem">
					<ul id="elem1">
						<li><A href="#">公告位置！比如说系统维护，哪些功能在什么时间段可能不可用之类的，针对后台</A></li>
						<li><A href="#">公告位置！比如说系统维护，哪些功能在什么时间段可能不可用之类的，针对后台</A></li>
						<li><A href="#">公告位置！比如说系统维护，哪些功能在什么时间段可能不可用之类的，针对后台</A></li>
						<li><A href="#">公告位置！比如说系统维护，哪些功能在什么时间段可能不可用之类的，针对后台</A></li>
					</ul>
					<ul id="elem2">
					</ul>
				</div>
				<p class="dclose">
					<A href="#"><i class="icon-remove"></i></A>
				</p>
			</div>
			<!--公告位置结束-->
			<!--标签-->
			<div class="right-tags">
				<ul>
					<li>您现在的位置：路由管理 > 新增路由下供货商品-选择</li>
				</ul>
			</div>

			<!--标签结束-->
			<!--查询区域-->
			<!--查询结果-->
			<div class="form-wrapper">
				<!--白底内侧-->
				<div class="nav-tplist-wrapper">
					<!--白底内侧-->
					<div class="nav-form" id="addForm">
						<ul class="big-word">
							<li>
								<p class="word">路由ID：</p>
								<p>${ruleId }</p>
							</li>
							<li>
								<p class="word">路由名称：</p>
								<p>${ruleName }</p>
							</li>
						</ul>
					</div>
					<div class="nav-tplist-title nav-tplist-title-border">
						<ul>
							<li>请从标准品库选择商品</li>
						</ul>
					</div>
					<!--选择商品-->
					<div class="selection-goods">
						<div class="nav-form">
							<ul>
								<li class="width-xlag">
									<p class="word">商品类目：</p>
									<p>
										<select class="select-small"></select>
									</p>
									<p>
										<select class="select-small"></select>
									</p>
									<p>
										<select class="select-small"></select>
									</p>
								</li>
							</ul>
						</div>
					</div>
					<!--查询结果列表-->
					<div class="nav-tplist-table">
						<table width="100%" border="0">
							<tr class="bj">
								<td><input type="checkbox" class="checkbox-medium"></td>
								<td>标准品ID</td>
								<td>标准品名称</td>
								<td>关键属性1</td>
								<td>关键属性2</td>
								<td>供货数量</td>
							</tr>
							<tbody id="listData"></tbody>
							<!-- 定义JsRender模版 -->
							<script id="listDataTmpl" type="text/x-jsrender">
                      		<tr>
					   			<td><input type="checkbox" class="checkbox-medium"></td>   
					   			<td>{{:standedProdId}}</td>
					    		<td>{{:standedProductName}} </td>
					    		<td>{{:mustAttrValue1}}</td>
					   			<td>{{:mustAttrValue2}}</td>
					    		<td><input type="text" id="totalNum" class="table-int-mini"></td>
					  		</tr>
					      </script>
						</table>
					</div>
					<!--分页-->
					<div id="pageview">
						<ul id="pagination-ul">

						</ul>
					</div>
					<!--分页结束-->
					<div class="pst-bttton">
						<input type="button" id="SAVE_BTN" class="blling-btn pst-btn" value="提交"><input
							type="button" id="SAVE_CONTINUE_BTN" class="blling-btn pst-btn" value="继续添加">
					</div>


				</div>
			</div>
			<!--查询结果结束-->
		</div>
	</div>
	<%@ include file="/inc/foot.jsp"%>
	<script type="text/javascript">
		(function() {
			seajs.use('app/jsp/route/proSupplyCreate', function(ProSupplyCreate) {
				var pager = new ProSupplyCreate({
					element : document.body
				});
				pager.render();
			});
		})();
	</script>

</body>
</html>
