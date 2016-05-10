package com.ai.slp.route.web.model;

import java.util.List;

import com.ai.slp.route.api.routeconfig.param.ProSupplyVo;

public class RouteProSupplyParam {

    /**
     * 路由Id
     */
    private String routId;

    /**
     * 供应商品列表
     */
    private List<ProSupplyVo> proSupplyList;

    public String getRoutId() {
        return routId;
    }

    public void setRoutId(String routId) {
        this.routId = routId;
    }

    public List<ProSupplyVo> getProSupplyList() {
        return proSupplyList;
    }

    public void setProSupplyList(List<ProSupplyVo> proSupplyList) {
        this.proSupplyList = proSupplyList;
    }

}
