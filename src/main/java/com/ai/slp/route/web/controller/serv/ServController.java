package com.ai.slp.route.web.controller.serv;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/serv")
public class ServController {
    private static final Logger LOG = Logger.getLogger(ServController.class);

    @RequestMapping("/servQuery")
    public ModelAndView servQuery(HttpServletRequest request) {
        ModelAndView view = new ModelAndView("jsp/serv/servQuery");
        return view;
    }

}
