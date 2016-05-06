package com.ai.slp.route.web.controller.route;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ai.opt.base.vo.BaseResponse;
import com.ai.opt.sdk.util.DubboConsumerFactory;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.opt.sso.client.filter.SSOClientConstants;
import com.ai.opt.sso.client.filter.SSOClientUser;
import com.ai.slp.route.api.routeconfig.interfaces.IRouteConfigSV;
import com.ai.slp.route.api.routeconfig.param.RouteMaintainResult;
import com.ai.slp.route.api.routeconfig.param.RouteMaintainVo;
import com.ai.slp.route.web.model.RouteParam;

@RestController
@RequestMapping("/route")
public class RouteController {
    private static final Logger LOG = Logger.getLogger(RouteController.class);

    @RequestMapping("/toAdd")
    public ModelAndView routeCreate(HttpServletRequest request) {
        ModelAndView view = new ModelAndView("jsp/route/routeCreate");
        return view;
    }

    @RequestMapping("/addRoute")
    @ResponseBody
    public ResponseData<BaseResponse> addRoute(RouteParam param, HttpServletRequest request) {
        RouteMaintainVo routeMaintainVo = new RouteMaintainVo();
        ResponseData<BaseResponse> responseData = null;
        try {
            HttpSession session = request.getSession();
            SSOClientUser user = (SSOClientUser) session
                    .getAttribute(SSOClientConstants.USER_SESSION_KEY);
            routeMaintainVo.setChgFlag("N");
            routeMaintainVo.setTenantId(user.getTenantId());
            routeMaintainVo.setBeginDate(param.getBeginDate());
            routeMaintainVo.setCityCode(param.getCityCode());
            routeMaintainVo.setContractCode(param.getContractCode());
            routeMaintainVo.setEndDate(param.getEndDate());
            routeMaintainVo.setOperId(123);
            routeMaintainVo.setProvCode(param.getProvCode());
            routeMaintainVo.setRouteName(param.getRouteName());
            routeMaintainVo.setRouteType(param.getRouteType());
            routeMaintainVo.setSplServId(param.getSplServId());

            IRouteConfigSV iRouteConfigSV = DubboConsumerFactory.getService(IRouteConfigSV.class);
            RouteMaintainResult routeMaintain = iRouteConfigSV.routeMaintain(routeMaintainVo);
            responseData = new ResponseData<BaseResponse>(ResponseData.AJAX_STATUS_SUCCESS, "添加成功",
                    routeMaintain);
        } catch (Exception e) {
            responseData = new ResponseData<BaseResponse>(ResponseData.AJAX_STATUS_FAILURE, "添加失败",
                    null);
            LOG.info(e);
        }

        return responseData;
    }
    @RequestMapping("/toProSupplyAdd")
    public ModelAndView toProSupplyAdd(HttpServletRequest request) {
        ModelAndView view = new ModelAndView("jsp/route/proSupplyCreate");
        return view;
    }

}
