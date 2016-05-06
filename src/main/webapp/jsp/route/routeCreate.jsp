<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport"
		content="width=device-width; initial-scale=0.8;  user-scalable=0;" />
	<title>新建路由</title> <%@ include file="/inc/inc.jsp"%>
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
					<li>您现在的位置：路由管理  >  新建路由</li>
				</ul>
			</div>

			<!--标签结束-->
			<!--查询区域-->


			<div class="form-wrapper">
				<!--白底内侧-->
				<div class="nav-tplist-wrapper" id="addForm">
					<!--白底内侧-->

					<div class="nav-form-title">路由信息</div>
					<div class="nav-form">
						<ul>
							<li>
								<p class="word">路由名称</p>
								<p>
									<input type="text" id="ruleName" class="int-medium">
								</p>
							</li>
							<li>
								<p class="word">路由类型</p>
								<p>
									<select id="routeType" class="select-medium">
										<option value="">请选择路由类型</option>
										<option value="O">自有类</option>
										<option value="S">采购类</option>
										<option value="L">物流类</option>
										<option value="P">支付类</option>
									</select>
								</p>
							</li>
						</ul>
						<ul>
							<li class="width-xlag">
								<p class="word">所在地区</p>
								<p>
									<select id="provCode" class="select-small">
										<option value="">省份</option>
									</select>
								</p>
								<p>
									<select id="cityCode" class="select-small">
										<option value="">请选择城市</option>
									</select>
								</p>
							</li>
						</ul>
					</div>
					<div class="nav-form-border"></div>

					<div class="nav-form-title">关联服务</div>
					<div class="nav-form">
						<ul>
							<li>
								<p class="word">服务类型</p>
								<p>
									<select id="servType" class="select-medium">
										<option value="">请选择服务类型</option>
										<option value="P">页面跳转类</option>
										<option value="H">HTTP类</option>
									</select>
								</p>
							</li>
							<li>
								<p class="word">请选择服务</p>
								<p>
									<select id="servId" class="select-medium">
										<option value="">请选择服务</option>
									</select>
								</p>
							</li>
						</ul>
					</div>
					<div class="nav-form-border"></div>

					<div class="nav-form-title">关联供应商</div>
					<div class="nav-form">
						<ul>
							<li>
								<p class="word">供应商帐号</p>
								<p>
									<input type="text" id="sellerId" class="int-medium">
								</p>
								<p>
									<input type="button" value="查询" class="blling-btn blue-btn">
								</p>
							</li>
							<li>
								<p class="word">供应商名称</p>
								<p>
									<input type="text" id="sellerName" class="int-medium">
								</p>
							</li>
						</ul>
						<ul>
							<li>
								<p class="word">合同编号</p>
								<p>
									<select id="contractCode" class="select-medium">
										<option value="">请选择合同编号</option>
									</select>
								</p>
							</li>
							<li>
								<p class="word">行业类型</p>
								<p>
									<select id="cateGoryType" class="select-medium">
										<option value="">请选择行业类型</option>
									</select>
								</p>
							</li>
						</ul>
						<ul>
							<li class="width-xlag">
								<p class="word">供货时间</p>
								<p>
									<input type="text" id="beginDate" class="int-small"><a
										href="#" class="ccc"><i class="icon-calendar"></i></a>
								</p>
								<p>~</p>
								<p>
									<input type="text" id="endDate" class="int-small"><a
										href="#" class="ccc"><i class="icon-calendar"></i></a>
								</p>
							</li>
						</ul>
						<ul>
							<li class="width-xlag">
								<p class="word">&nbsp;</p>
								<p>
									<input type="button" id="SAVE_BTN" class="blling-btn width-btn" value="保  存">
								</p>
								<p>
									<input type="button" id="SAVE_NEXT_BTN" class="blling-btn width-btn" value="保存下一步"
								</p>
							</li>
						</ul>
					</div>
				</div>
				<!--查询区域结束-->
			</div>
		</div>
	</div>
	<%@ include file="/inc/foot.jsp"%>
	<script type="text/javascript">
		(function() {
			seajs.use('app/jsp/route/routeCreate', function(RouteCreatePager) {
				var pager = new RouteCreatePager({
					element : document.body
				});
				pager.render();
			});
		})();
	</script>

</body>
</html>
