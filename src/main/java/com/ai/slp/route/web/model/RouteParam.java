package com.ai.slp.route.web.model;

public class RouteParam {

    /**
     * 路由名称
     */
    private String routeName;

    /**
     * 路由类型
     */
    private String routeType;

    /**
     * 所在省
     */
    private String provCode;

    /**
     * 所在市
     */
    private String cityCode;

    /**
     * 服务标识
     */
    private String splServId;

    /**
     * 供应商账号
     */
    private String userLoginName;

    /**
     * 合同编号
     */
    private String contractCode;

    /**
     * 供货开始时间
     */
    private String beginDate;

    /**
     * 供货结束时间
     */
    private String endDate;

    public String getRouteName() {
        return routeName;
    }

    public String getRouteType() {
        return routeType;
    }

    public String getProvCode() {
        return provCode;
    }

    public String getCityCode() {
        return cityCode;
    }

    public String getSplServId() {
        return splServId;
    }

    public String getUserLoginName() {
        return userLoginName;
    }

    public String getContractCode() {
        return contractCode;
    }

    public String getBeginDate() {
        return beginDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setRouteName(String routeName) {
        this.routeName = routeName;
    }

    public void setRouteType(String routeType) {
        this.routeType = routeType;
    }

    public void setProvCode(String provCode) {
        this.provCode = provCode;
    }

    public void setCityCode(String cityCode) {
        this.cityCode = cityCode;
    }

    public void setSplServId(String splServId) {
        this.splServId = splServId;
    }

    public void setUserLoginName(String userLoginName) {
        this.userLoginName = userLoginName;
    }

    public void setContractCode(String contractCode) {
        this.contractCode = contractCode;
    }

    public void setBeginDate(String beginDate) {
        this.beginDate = beginDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

}
