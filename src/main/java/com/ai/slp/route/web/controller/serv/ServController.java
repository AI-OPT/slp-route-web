package com.ai.slp.route.web.controller.serv;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ai.opt.base.vo.BaseResponse;
import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.slp.route.api.serverconfig.interfaces.IServerConfigSV;
import com.ai.slp.route.api.serverconfig.param.ServerCreateResult;
import com.ai.slp.route.api.serverconfig.param.ServerCreateVo;
import com.ai.slp.route.web.model.ServCreateParam;

@RestController
@RequestMapping("/serv")
public class ServController {
    private static final Logger LOG = Logger.getLogger(ServController.class);

    @RequestMapping("/servQuery")
    public ModelAndView servQuery(HttpServletRequest request) {
        ModelAndView view = new ModelAndView("jsp/serv/servQuery");
        return view;
    }

    @RequestMapping("/toServAdd")
    public ModelAndView toServAdd(HttpServletRequest request) {
        ModelAndView view = new ModelAndView("jsp/serv/servCreate");
        return view;
    }

    @RequestMapping("/addServConfig")
    @ResponseBody
    public ResponseData<BaseResponse> addServConfig(ServCreateParam param) {
        ServerCreateVo serverCreateVo = new ServerCreateVo();
        ResponseData<BaseResponse> responseData = null;
        try {
            serverCreateVo.setServName(param.getServName());
            serverCreateVo.setServType(param.getServType());
            serverCreateVo.setUrl(param.getUrl());
            serverCreateVo.setServContent(param.getServContent());
            serverCreateVo.setRequestParam(param.getRequestParam());
            serverCreateVo.setReturnParam(param.getReturnParam());
            serverCreateVo.setOperId(0);

            IServerConfigSV iServerConfigSV = DubboConsumerFactory
                    .getService(IServerConfigSV.class);
            ServerCreateResult servCreate = iServerConfigSV.servCreate(serverCreateVo);
            responseData = new ResponseData<BaseResponse>(ResponseData.AJAX_STATUS_SUCCESS, "添加成功",
                    servCreate);
        } catch (Exception e) {
            responseData = new ResponseData<BaseResponse>(ResponseData.AJAX_STATUS_FAILURE, "添加失败",
                    null);
            LOG.info(e);
        }

        return responseData;
    }

}
