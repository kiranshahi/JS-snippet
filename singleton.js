(function ($) {
    $.CreateSingleton = function (p) {
        var Singleton = {
            config: {
                isPostBack: false,
                async: false,
                cache: false,
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                data: { data: '' },
                dataType: 'json',
                baseURL: "Web Service url",
                method: "",
                ajaxCallMode: 0,
                successMethod: "",
                failureMethod: ""
            },
            init: function () {
                
                
            },
            
            ajaxCall: function () {
                $.ajax({
                    type: Singleton.config.type,
                    contentType: Singleton.config.contentType,
                    cache: Singleton.config.cache,
                    url: Singleton.config.baseURL + Singleton.config.method,
                    data: Singleton.config.data,
                    dataType: Singleton.config.dataType,
                    success: Singleton.config.successMethod,
                    error: Singleton.config.failureMethod,
                    async: Singleton.config.async
                });
            },

            invokeAjax: function(){
                Singleton.config.method = "method";
                Singleton.config.data = JSON.stringify({
                    param1: value1
                });
                Singleton.config.successMethod = Singleton.invokeAjaxSuccess;
                Singleton.config.failureMethod = Singleton.invokeAjaxFailure;
                Singleton.ajaxCall(Singleton.config);
            },

            invokeAjaxSuccess: function(data){
            	console.log(data.d);
            },

            invokeAjaxFailure: function(){
            	console.log("Something went wrong.", "error");
            }
        };
        Singleton.init();
    };
    $.fn.CallSingleton = function (p) {
        $.CreateSingleton(p);
    };
})(jQuery);