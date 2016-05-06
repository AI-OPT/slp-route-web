package com.ai.slp.route.web.controller.demo;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ai.opt.sdk.web.model.ResponseData;

@RestController
@RequestMapping("/demo")
public class DemoController {

    private static final Logger LOG = Logger.getLogger(DemoController.class);

    @RequestMapping("/commlabel")
    public ModelAndView index(HttpServletRequest request) {

        ModelAndView view = new ModelAndView("demo/commlabel");
        return view;
    }

    @RequestMapping("/parent")
    public ModelAndView parent(HttpServletRequest request) {

        ModelAndView view = new ModelAndView("demo/parent");
        return view;
    }

    @RequestMapping("/paging")
    public JSONObject paging(HttpServletRequest request) {

        String str = "{'view':[{'name':'nimo','age':23},{'name':'potato','age':18},{'name':'little nimo','age':3}],'pagecount':10}";
        JSONObject data = JSONObject.fromObject(str);
        return data;
    }

    // 模拟下拉框数据
    @RequestMapping("/initSelect")
    public ResponseData<List<Select>> initSelect(HttpServletRequest request) {
        ResponseData<List<Select>> responseData = null;
        try {
            List<Select> selectList = new ArrayList<Select>();

            for (int i = 0; i < 5; i++) {
                Select select = new Select();
                select.setName("name" + i);
                select.setValue(i + "");
                selectList.add(select);
            }
            responseData = new ResponseData<List<Select>>(ResponseData.AJAX_STATUS_SUCCESS, "成功!",
                    selectList);
            LOG.error("成功！");
        } catch (Exception e) {
            responseData = new ResponseData<List<Select>>(ResponseData.AJAX_STATUS_FAILURE, "失败!");
            LOG.error("失败！");
        }

        return responseData;
    }
}

// 内部类，模拟数据用
class Select {
    private String name;

    private String value;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}