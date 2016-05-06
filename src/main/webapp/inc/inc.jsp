<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%
    String _base = request.getContextPath();
    request.setAttribute("_base", _base);
    response.setHeader("Cache-Control", "no-cache");
    response.setDateHeader("Expires", 0);
    response.setHeader("Pragma", "No-cache");
%>
<script>
    var _base = "${_base}";
</script>

<script src="${_base}/resources/spm_modules/jquery/1.9.1/jquery.js"></script>
<script src="${_base}/resources/spm_modules/bootstrap/dist/js/bootstrap.js"></script>
<script src="${_base}/resources/spm_modules/seajs/2.3.0/dist/sea.js"></script>
<script src="${_base}/resources/spm_modules/seajs/seajs-css.js"></script>
<script src="${_base}/resources/spm_modules/app/core/config.js"></script>

<link href="${_base}/resources/slproute/styles/bootstrap.css"rel="stylesheet" type="text/css">
<link href="${_base}/resources/slproute/styles/font-awesome.css" rel="stylesheet" type="text/css">
<link href="${_base}/resources/slproute/styles/frame.css" rel="stylesheet" type="text/css">
<link href="${_base}/resources/slproute/styles/global.css" rel="stylesheet" type="text/css">
<link href="${_base}/resources/slproute/styles/modular.css" rel="stylesheet" type="text/css">

