<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport"
		content="width=device-width; initial-scale=0.8;  user-scalable=0;" />
	<title>服务查询</title> <%@ include file="/inc/inc.jsp"%>
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
					<li>您现在的位置：服务配置管理</li>
				</ul>
			</div>

			<!--标签结束-->
			<!--查询区域-->
			<div class="form-wrapper">
				<!--白底外侧-->
				<div class="nav-tplist-wrapper">
					<!--白底内侧-->
					<div class="nav-form-title">访问类服务</div>
					<!--选择商品-->
					<div class="selection-goods">
						<div class="nav-form">
							<ul>
								<li>
									<p class="word">服务名称</p>
									<p>
										<input type="text" class="int-medium">
									</p>
								</li>
								<li>
									<p class="word">服务配置类型</p>
									<p>
										<select id="servType" class="select-medium">
										<option value="">请选择服务类型</option>
										<option value="P">页面跳转类</option>
										<option value="H">HTTP类</option>
										</select>
									</p>
									<p>
										<input type="button" value="查询" class="blling-btn blue-btn">
									</p>
								</li>
								<div class="title-right">
									<p class="plus">
										<a href="#"><i class="icon-plus"></i></a>
									</p>
									<p class="plus-word">
										<a href="${_base}/serv/toServAdd">新建访问服务</a>
									</p>
								</div>
							</ul>
						</div>
					</div>

					<!--选择商品结束-->
					<!--查询结果-->
					<!--结果表格-->
					<div class="nav-tplist-table">
						<table width="100%" border="0">
							<tr class="bj">
								<td>服务ID</td>
								<td>服务名称</td>
								<td>服务类型</td>
								<td>配置信息</td>
								<td>操作</td>
							</tr>
							<tbody id="listData"></tbody>
							<!-- 定义JsRender模版 -->
							<script id="listDataTmpl" type="text/x-jsrender">
                      		<tr>
					   			<td>{{:servId}}</td>
					   			<td>{{:servName}}</td>
					    		<td>{{:servType}} </td>
					    		<td><a href="#" class="blue">查看配置信息</a></td>
								<td><A href="服务配置信息管理(修改).html" class="blue">编辑</A><a
									href="预警接受人列表.html" class="blue">预警接收人</a></td>
					  		</tr>
					      </script>
						</table>

					</div>
					<!--结果表格结束-->
					<!--分页-->
					<div id="pageview">
						<ul id="pagination-ul">

						</ul>
					</div>

				</div>

			</div>

		</div>
	</div>
	<%@ include file="/inc/foot.jsp"%>
	<script type="text/javascript">
		(function() {
			seajs.use('app/jsp/serv/servQuery', function(RouteCreatePager) {
				var pager = new RouteCreatePager({
					element : document.body
				});
				pager.render();
			});
		})();
	</script>

</body>
</html>
