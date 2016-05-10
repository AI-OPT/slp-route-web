package com.ai.slp.route.web.controller.route;

import java.util.List;

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
import com.ai.slp.route.api.routeconfig.param.ProSupplyVo;
import com.ai.slp.route.api.routeconfig.param.RouteCreateResult;
import com.ai.slp.route.api.routeconfig.param.RouteCreateVo;
import com.ai.slp.route.api.routeconfig.param.RouteProSupplyAddResult;
import com.ai.slp.route.api.routeconfig.param.RouteProSupplyAddVo;
import com.ai.slp.route.web.model.RouteParam;
import com.ai.slp.route.web.model.RouteProSupplyParam;

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
        RouteCreateVo routeCreateVo = new RouteCreateVo();
        ResponseData<BaseResponse> responseData = null;
        try {
            HttpSession session = request.getSession();
            SSOClientUser user = (SSOClientUser) session
                    .getAttribute(SSOClientConstants.USER_SESSION_KEY);
            routeCreateVo.setTenantId(user.getTenantId());
            routeCreateVo.setBeginDate(param.getBeginDate());
            routeCreateVo.setCityCode(param.getCityCode());
            routeCreateVo.setContractCode(param.getContractCode());
            routeCreateVo.setEndDate(param.getEndDate());
            routeCreateVo.setOperId(0);
            routeCreateVo.setProvCode(param.getProvCode());
            routeCreateVo.setRouteName(param.getRouteName());
            routeCreateVo.setRouteType(param.getRouteType());
            routeCreateVo.setSplServId(param.getSplServId());

            IRouteConfigSV iRouteConfigSV = DubboConsumerFactory.getService(IRouteConfigSV.class);
            RouteCreateResult routeCreate = iRouteConfigSV.routeCreate(routeCreateVo);
            responseData = new ResponseData<BaseResponse>(ResponseData.AJAX_STATUS_SUCCESS, "添加成功",
                    routeCreate);
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

    @RequestMapping("/addProSupply")
    @ResponseBody
    public ResponseData<BaseResponse> addProSupply(RouteProSupplyParam param,
            HttpServletRequest request) {
        List<ProSupplyVo> proSupplyList = param.getProSupplyList();
        RouteProSupplyAddVo routeProSupplyAddVo = new RouteProSupplyAddVo();
        ResponseData<BaseResponse> responseData = null;
        try {
            HttpSession session = request.getSession();
            SSOClientUser user = (SSOClientUser) session
                    .getAttribute(SSOClientConstants.USER_SESSION_KEY);
            routeProSupplyAddVo.setTenantId(user.getTenantId());
            routeProSupplyAddVo.setRouteId(param.getRoutId());
            routeProSupplyAddVo.setProSupplyList(proSupplyList);
            routeProSupplyAddVo.setOperId(0);

            IRouteConfigSV iRouteConfigSV = DubboConsumerFactory.getService(IRouteConfigSV.class);
            RouteProSupplyAddResult routeMaintain = iRouteConfigSV
                    .routeProSupplyAdd(routeProSupplyAddVo);
            responseData = new ResponseData<BaseResponse>(ResponseData.AJAX_STATUS_SUCCESS, "添加成功",
                    routeMaintain);
        } catch (Exception e) {
            responseData = new ResponseData<BaseResponse>(ResponseData.AJAX_STATUS_FAILURE, "添加失败",
                    null);
            LOG.info(e);
        }

        return responseData;
    }
    @RequestMapping("/servQuery")
    public ModelAndView servQuery(HttpServletRequest request) {
        ModelAndView view = new ModelAndView("jsp/route/servQuery");
        return view;
    }

}
