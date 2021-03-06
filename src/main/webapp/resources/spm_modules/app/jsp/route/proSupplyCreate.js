define('app/jsp/route/proSupplyCreate', function (require, exports, module) {
    'use strict';
    var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Calendar = require('arale-calendar/1.1.2/index'), 
	Select = require('arale-select/0.11.1/index'), 
	Dialog = require("artDialog/src/dialog"),
	AjaxController = require('opt-ajax/1.0.0/index');
	require("jsviews/jsrender.min");
	require("jsviews/jsviews.min");
	require("bootstrap-paginator/bootstrap-paginator.min");
	require("twbs-pagination/jquery.twbsPagination.min");
	require("opt-paging/aiopt.pagination");
	require("app/util/jsviews-ext");
	
	//实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    //定义页面组件类
    var ProSupplyCreatePager = Widget.extend({
    	//属性，使用时由类的构造函数传入
    	attrs: {
    	},
    	Statics: {
    		DEFAULT_PAGE_SIZE: 5
    	},
    	
    	//事件代理
    	events: {
    		//key的格式: 事件+空格+对象选择器;value:事件方法
    		 "click #SAVE_BTN":"_saveBtnClick",
    		 "click #SAVE_CONTINUE_BTN":"_saveContinueBtnClick",
             "click #PP_BTN":"_searchBtnClick",
             "click #MJ_PP_BTN":"_searchmjProductsClick",
    		 "click #pp_checkAll":"_ppcheckall",//产品全选
    		 "click #gp_checkAll":"_gpcheckall",  //赠品产品全选
    		 "click #mj_checkAll":"_mjcheckall",
    		 "click .BACK_BTN":"_goBack",
    		 "click #MZ_GP_BTN":"_searchGiftClick",

        },
        
        _goBack:function(){
			var this_=this;
			
			window.location.href=_base+"/preferentialProduct/list";
		},
		_searchmjProductsClick:function(){
			this._searchmjProducts(1,ProSupplyCreatePager.DEFAULT_PAGE_SIZE);
		},
		_searchGiftClick:function(){
			this._searchGiftProducts(1,ProSupplyCreatePager.DEFAULT_PAGE_SIZE);
		},
		_checkRule:function(){
	    		var ruleName = jQuery.trim($("#ruleAmount").val());
	    		 var reg = /^\d+(\.\d+)?$/;
	    		if(ruleName == "" || ruleName == null || ruleName == undefined){
	    			this._controlMsgText("ruleMsg","满赠金额不能为空");
	    			this._controlMsgAttr("ruleMsgDiv",2);
	    			return false;
	    		}else if(!reg.test(ruleName)){
	    			this._controlMsgText("ruleMsg","满赠金额为非负数");
	    			this._controlMsgAttr("ruleMsgDiv",2);
	    			return false;
	    		}else{
	    			this._controlMsgText("ruleMsg","");
	    			this._controlMsgAttr("ruleMsgDiv",1);
	    			return true;
	    		}
	    		
	    	},
      _checkName:function(){
    		var ruleName = jQuery.trim($("#ruleName").val());
    		if(ruleName == "" || ruleName == null || ruleName == undefined){
    			this._controlMsgText("ruleNameMsg","路由名称不能为空");
    			this._controlMsgAttr("ruleNameMsgDiv",2);
    			return false;
    		}else{
    			this._controlMsgText("ruleNameMsg","");
    			this._controlMsgAttr("ruleNameMsgDiv",1);
    			return true;
    		}
    		
    	},
    	//控制显示内容
		_controlMsgText: function(id,msg){
			var doc = document.getElementById(id+"");
			doc.innerText=msg;
		},
		//控制显隐属性 1:隐藏 2：显示
		_controlMsgAttr: function(id,flag){
			var doc = document.getElementById(id+"");
			if(flag == 1){
				doc.setAttribute("style","display:none");
			}else if(flag == 2){
				doc.setAttribute("style","display");
			}
		},
		_initPage: function(){
      		//面包屑导航
      		setBreadCrumb("优惠产品管理","添加优惠产品");
      		//左侧菜单选中样式
      		$("#mnu_bmc_config").addClass("current");
      	},
    	//重写父类
    	setup: function () {
    		ProSupplyCreatePager.superclass.setup.call(this);
    	//	this._bindEvents();
    		//初始化执行搜索,查询可销售产品
//    		this._searchProducts(1,ProSupplyCreatePager.DEFAULT_PAGE_SIZE);
//    		this._searchmjProducts(1,ProSupplyCreatePager.DEFAULT_PAGE_SIZE);
//    		this._searchProducts1(1,ProSupplyCreatePager.DEFAULT_PAGE_SIZE);
//    		this._searchGiftProducts(1,ProSupplyCreatePager.DEFAULT_PAGE_SIZE);
//    		this._bindUnitSelect();
//    		this._bindServiceSelect();
//    		this._bindActiveSelect();
//    		this._bindCycleSelect();
    		this._bindCalendar();
//    		this._initPage();
    	},
    	// 日期
		_bindCalendar : function() {
			new Calendar({
				trigger : '#beginDate'
			});
			new Calendar({
				trigger : '#endDate'
			});
			new Calendar({
				trigger : '#gOntime'
			});
			new Calendar({
				trigger : '#rActiveTime'
			});
			new Calendar({
				trigger : '#rInvalidTime'
			});
//
		},
    	_saveBtnClick : function() {
			var this_=this;
			var ruleName=$("#ruleName").val();
			var ruleType=$("#ruleType").val();
			var provCode=$("#provCode").val();
			var cityCode=$("#cityCode").val();
			var servId=$("#servId").val();
			var sellerId=$("#sellerId").val();
			var contractId=$("#contractId").val();
			var beginDate=$("#beginDate").val();
			var endDate=$("#endDate").val();
//			if(!this_._checkName()){
//				return;
//			}
//			if(!this_._checkRule()){
//				return;
//			}
//		  if(!this_._checkpUnit()){
//			return;
//	    	}
//	    	if(!this_._checkPOntime()){
//			return;
//		 }
//		 if(!this_._checkpOffTime()){
//		 	return;
//		 }
//		 if(!this_._checkComments()){
//			 	return;
//			 }
				
				ajaxController.ajax({
	                type: "post",
	                dataType : "json",
	                url : _base+ "/route/addProSupply",
	                processing: true,
	                message: "正在加载，请等待...",
	                data:$('#addForm').find("input,select").serializeArray(),
	                success: function(data){
	                    if(data){
	                        var d = Dialog({
	                            content:"添加成功",
	                            ok:function(){
	                                this.close();
	                                history.go(-1);
	                            }
	                        });
	                        d.showModal();
	                    }
	                }
	            });

		},
		_saveNextBtnClick : function() {
			var this_=this;
			var ruleName=$("#ruleName").val();
			var ruleType=$("#ruleType").val();
			var provCode=$("#provCode").val();
			var cityCode=$("#cityCode").val();
			var servId=$("#servId").val();
			var sellerId=$("#sellerId").val();
			var contractId=$("#contractId").val();
			var beginDate=$("#beginDate").val();
			var endDate=$("#endDate").val();
				
			ajaxController.ajax({
	                type: "post",
	                dataType : "json",
	                url : _base+ "/route/addRoute",
	                processing: true,
	                message: "正在加载，请等待...",
	                data:$('#addForm').find("input,select").serializeArray(),
	                success: function(data){
	                    if(data){
	                    	window.location.href=_base+"/route/toProSupplyAdd";
	                    }
	                }
	            });

		},
    	//生效方式
    	_bindCycleSelect : function() {
			var this_=this;
			
				$.ajax({
					type : "post",
					processing : false,
					url : _base+ "/preferentialProduct/getSelect",
					dataType : "json",
					data : {
						paramType:"ACTIVE_CYCLE"
						},
					message : "正在加载数据..",
					success : function(data) {
						var d=data.data.paramList;
						$.each(d,function(index,item){
							var paramName = d[index].paramName;
							var paramCode = d[index].paramCode;
							$("#cycleUnit").append('<option value="'+paramCode+'">'+paramName+'</option>');
						})
						
							
					}
				});

		},
    	//生效方式
    	_bindActiveSelect : function() {
			var this_=this;
			
				$.ajax({
					type : "post",
					processing : false,
					url : _base+ "/preferentialProduct/getSelect",
					dataType : "json",
					data : {
						paramType:"ACTIVE_TYPE"
						},
					message : "正在加载数据..",
					success : function(data) {
						var d=data.data.paramList;
						$.each(d,function(index,item){
							var paramName = d[index].paramName;
							var paramCode = d[index].paramCode;
							$("#activeType").append('<option value="'+paramCode+'">'+paramName+'</option>');
						})
						
							
					}
				});

		},
    	//满赠或者满减单位
    	_bindUnitSelect : function() {
			var this_=this;
			
				$.ajax({
					type : "post",
					processing : false,
					url : _base+ "/preferentialProduct/getSelect",
					dataType : "json",
					data : {
						paramType:"PRODUCT_UNIT"
						},
					message : "正在加载数据..",
					success : function(data) {
						var d=data.data.paramList;
						$.each(d,function(index,item){
							var paramName = d[index].paramName;
							var paramCode = d[index].paramCode;
							$("#pUnit").append('<option value="'+paramCode+'">'+paramName+'</option>');
							$("#mj_unit").append('<option value="'+paramCode+'">'+paramName+'</option>');

						})
						
							
					}
				});

		},
		//业务类型
		_bindServiceSelect : function() {
			var this_=this;
			
				$.ajax({
					type : "post",
					processing : false,
					url : _base+ "/preferentialProduct/getSelect",
					dataType : "json",
					data : {
						paramType:"SERVICE_TYPE"
						},
					message : "正在加载数据..",
					success : function(data) {
						var d=data.data.paramList;
						$.each(d,function(index,item){
							var paramName = d[index].paramName;
							var paramCode = d[index].paramCode;
							$("#serviceType").append('<option value="'+paramCode+'">'+paramName+'</option>');
							$("#sType").append('<option value="'+paramCode+'">'+paramName+'</option>');
						    $("#mj_serviceType").append('<option value="'+paramCode+'">'+paramName+'</option>');
						})
						
							
					}
				});

		},
    	_bindEvents: function(){
    		var _this = this;
    		$('#API_KEY').bind('keypress',function(event){
				if(event.keyCode == "13"){
					_this._searchProducts(1,ProSupplyCreatePager.DEFAULT_PAGE_SIZE);
				}
			});
    	},
    	_searchBtnClick: function(){
    		this._searchProducts(1,ProSupplyCreatePager.DEFAULT_PAGE_SIZE);	
    	},
    	//产品全选
    	_ppcheckall: function() {
    		var _this=this; 
			var chkflag=$("#pp_checkAll").prop("checked");
			$('input[type=checkbox][name=pp_checkbox]').prop("checked",chkflag);
			  _this._bindProductClick();
         },
         _gpcheckall: function() {
        	 var _this=this; 
 			var chkflag=$("#gp_checkAll").prop("checked");
 			$('input[type=checkbox][name=gp_checkbox]').prop("checked",chkflag);
 			 _this._bindProductClick1();
          },
          _mjcheckall: function() {
         	 var _this=this; 
  			var chkflag=$("#mj_checkAll").prop("checked");
  			$('input[type=checkbox][name=mj_checkbox]').prop("checked",chkflag);
  			 _this._bindmjProductClick();
           },
           _bindmjProductClick: function() {
          	 
          	 var _this = this;
          	 $('input[type=checkbox][name=mj_checkbox]').bind('change', function(){
          		
       			var checkFlag = $(this).prop("checked");//true选中，false取消
       			if(checkFlag){
       				//展示所选的产品
       				
       				var trHtml = $(this).parent().parent('tr').clone();
       				trHtml.children().first().remove();//删除第一个选择框
       				trHtml.append($('<td><img class="img_remove_class" src="'+_base+'/resources/baasop/images/stepclose.png"></td>'));//增加最后一个删除的差号
       				var tableHtml = $("<table width='100%' border='0' cellspacing='0' cellpadding='0'></table>");
       				tableHtml.append(trHtml);
       				$('#mj_products').append(tableHtml);
       				mjproductList.push($.trim($(this).parent().parent('tr').children('td').get(1).innerHTML));
       				
       				//绑定方法：删除选中的产品
       				_this._bindmjProductRemove();
       			}
          	 });
           },
       //产品绑定复选框选中事件
         _bindProductClick: function() {
        	 
        	 var _this = this;
        	 $('input[type=checkbox][name=pp_checkbox]').bind('click', function(){
        		
     			var checkFlag = $(this).prop("checked");//true选中，false取消
     			if(checkFlag){
     				//展示所选的产品
     				
     				var trHtml = $(this).parent().parent('tr').clone();
     				trHtml.children().first().remove();//删除第一个选择框
     				trHtml.append($('<td><img class="img_remove_class" src="'+_base+'/resources/baasop/images/stepclose.png"></td>'));//增加最后一个删除的差号
     				var tableHtml = $("<table width='100%' border='0' cellspacing='0' cellpadding='0'></table>");
     				tableHtml.append(trHtml);
     				$('#selectedProduct').append(tableHtml);
     				productList.push($.trim($(this).parent().parent('tr').children('td').get(1).innerHTML));
     				
     				//绑定方法：删除选中的产品
     				_this._bindProductRemove();
     			}
        	 });
         },
       //  var list=[];
         _bindProductClick1: function() {
        	 var _this = this;
        	 
        	 $('input[type=checkbox][name=gp_checkbox]').bind('click', function(){
     			var checkFlag = $(this).prop("checked");//true选中，false取消
     			
     			if(checkFlag){
     				//展示所选的产品
     				var trHtml = $(this).parent().parent('tr').clone();
     				trHtml.children().first().remove();//删除第一个选择框
     				trHtml.append($('<td><img class="img_remove_class" src="'+_base+'/resources/baasop/images/stepclose.png"></td>'));//增加最后一个删除的差号
     				var tableHtml = $("<table width='100%' border='0' cellspacing='0' cellpadding='0'></table>");
     				tableHtml.append(trHtml);
     				$('#selectedProduct1').append(tableHtml);
     				presentList.push($.trim($(this).parent().parent('tr').children('td').get(1).innerHTML));
     				
     				//绑定方法：删除选中的产品
     				_this._bindProductRemove1();
     			}
        	 });
         },
         _bindmjProductRemove: function() {
        	 $('.img_remove_class').bind('click', function(){
        		 $(this).parent().parent().parent().parent().remove();
        		 mjproductList.pop($.trim($(this).parent().parent('tr').children('td').get(0).innerHTML));
        		 
        	 });
         },
         //删除选中的产品
         _bindProductRemove: function() {
        	 $('.img_remove_class').bind('click', function(){
        		 $(this).parent().parent().parent().parent().remove();
        		 productList.pop($.trim($(this).parent().parent('tr').children('td').get(0).innerHTML));
        		
        	 });
         },
         _bindProductRemove1: function() {
        	 $('.img_remove_class').bind('click', function(){
        		 $(this).parent().parent().parent().parent().remove();
        		 presentList.pop($.trim($(this).parent().parent('tr').children('td').get(0).innerHTML));
        		
        	 });
         },
         _searchGiftProducts: function(pageNo,pageSize){
      		
      		//入参
  			var productId = $("#pId").val();
  			var productName = $("#pName").val();
  			var serviceType = $("#sType").val();
  			var _this = this;
  			var url = _base+ "/preferentialProduct/getProductList";
  			$("#pagination-ul1").runnerPagination({
  								url : url,
  								method : "POST",
  								dataType : "json",
  								processing : true,
  								data : {
  									productId:$.trim(productId),
  									productName:$.trim(productName),
  									serviceType:serviceType
  								},
  								pageSize : ProSupplyCreatePager.DEFAULT_PAGE_SIZE,
  								visiblePages : ProSupplyCreatePager.DEFAULT_PAGE_SIZE,
  								message : "正在为您查询数据..",
  								render : function(data) {
  									if (data != null&& data != 'undefined'&& data.length > 0) {
  										var template = $.templates("#listDataTmpl1");
  										var htmlOutput = template.render(data);
  										$("#listData1").html(htmlOutput);
  										_this._bindProductClick1();
  									} else {
  										$("#listData1").html(null);
  										$("#listData1").html("没有搜索到相关信息");
  									}
  										
  									}
  								
  							});
  			
      	},
       //选择满减产品
     	_searchmjProducts: function(pageNo,pageSize){
     		
     		//入参
 			var productId = $("#mj_proId").val();
 			var productName = $("#mj_productName").val();
 			var serviceType = $("#mj_serviceType").val();
 			var _this = this;
 			var url = _base+ "/preferentialProduct/getProductList";
 			$("#pagination-mj").runnerPagination({
 								url : url,
 								method : "POST",
 								dataType : "json",
 								processing : true,
 								data : {
 									productId:$.trim(productId),
 									productName:$.trim(productName),
 									serviceType:serviceType
 								},
 								pageSize : ProSupplyCreatePager.DEFAULT_PAGE_SIZE,
 								visiblePages : ProSupplyCreatePager.DEFAULT_PAGE_SIZE,
 								message : "正在为您查询数据..",
 								render : function(data) {
 									if (data != null&& data != 'undefined'&& data.length > 0) {
 										var template = $.templates("#mj_table");
 										var htmlOutput = template.render(data);
 										$("#rBody").html(htmlOutput);
 										_this._bindmjProductClick();
 									} else {
 										$("#rBody").html(null);
 										$("#rBody").html("没有搜索到相关信息");
 									}
 										
 									}
 								
 							});
 			
     	},
    	//选择参加产品
    	_searchProducts: function(pageNo,pageSize){
    		//入参
			var productId = $("#proId").val();
			var productName = $("#productName").val();
			var serviceType = $("#serviceType").val();
			var _this = this;
			var url = _base+ "/preferentialProduct/getProductList";
			$("#pagination-ul").runnerPagination({
								url : url,
								method : "POST",
								dataType : "json",
								processing : true,
								data : {
									productId:$.trim(productId),
									productName:$.trim(productName),
									serviceType:serviceType
								},
								pageSize : ProSupplyCreatePager.DEFAULT_PAGE_SIZE,
								visiblePages : ProSupplyCreatePager.DEFAULT_PAGE_SIZE,
								message : "正在为您查询数据..",
								render : function(data) {
									if (data != null&& data != 'undefined'&& data.length > 0) {
										var template = $.templates("#listDataTmpl");
										var htmlOutput = template.render(data);
										$("#listData").html(htmlOutput);
										_this._bindProductClick();
									} else {
										$("#listData").html(null);
										$("#listData").html("没有搜索到相关信息");
									}
										
									}
								
							});
			
    	},
    	//赠品产品
    	_searchProducts1: function(pageNo,pageSize){
    		//入参
    		
    		var productId = $("#pId").val();
			var productName = $("#pName").val();
			var serviceType = $("#sType").val();
			
			var _this = this;
			var url = _base+ "/preferentialProduct/getProductList";
			$("#pagination-ul1").runnerPagination({
								url : url,
								method : "POST",
								dataType : "json",
								processing : true,
								data : {
									productName:productName,
									productId:productId,
									serviceType:serviceType
								},
								pageSize : ProSupplyCreatePager.DEFAULT_PAGE_SIZE,
								visiblePages : ProSupplyCreatePager.DEFAULT_PAGE_SIZE,
								message : "正在为您查询数据..",
								render : function(data) {
									if (data != null&& data != 'undefined'&& data.length > 0) {
										var template = $.templates("#listDataTmpl1");
										var htmlOutput = template.render(data);
										$("#listData1").html(htmlOutput);
										_this._bindProductClick1();
									} else {
										$("#listData1").html(null);
										$("#listData1").html("没有搜索到相关信息");
									}
										
									}
								
							});
			
    	}
    });
    
    module.exports = ProSupplyCreatePager
});
