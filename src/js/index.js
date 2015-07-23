/**
 * author:<%=frontEnd%>
 * Date:<%=date%>
 */

var PAGE = (function () {
	var fn = {
        /**
         *  add fucntions here
         *  
         *      
         * setPlaceholder:function(container) {
		 * 			container.find('input').each(function (inx, input) {
		 * 				var $input = $(input);
		 * 				if ($input.attr('placeholder')) {
		 * 					$input.val($input.attr('placeholder'));
		 * 				}
		 * 				$input.bind('blur', function () {
		 * 					if ('' === $input.val()) {
		 * 						$input.val($input.attr('placeholder'));
		 * 					}
		 * 				});
		 * 				$input.bind('focus', function () {
		 * 					if ($input.attr('placeholder') === $input.val()) {
		 * 						$input.val('');
		 * 					}
		 * 				});
		 * 			});
		 * 		}
         *  
        */
		},
		init = function () {
			fn.setPlaceholder($('.message'));
		};
	return {
		fn: fn,
		init: init
	}
})();

$(function () {
	PAGE.init();
});