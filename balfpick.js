(function($) {
  $.fn.extend({
    BalfPick: function(options) {
      var defaults = {};

      var options = $.extend(defaults, options);

      return this.each(function() {

        $(this).wrap('<span class="balfpick">');

        var selectBox = $(this);
        var wrapperBox = $(this).parent();

        $(wrapperBox).append('<span class="hidden_text"></span>');
        $(wrapperBox).append('<div class="bp_wrapper"><span class="text"></span><div class="arrow"></div></div>');

        $(wrapperBox).find('.text, .hidden_text').html($(selectBox).find('option:selected').text());
        $(selectBox).on("change", function(){
          $(wrapperBox).find('.text, .hidden_text').html($(selectBox).find('option:selected').text());
        });

        var max = 0;
        var i = 0;
        var max_text = "";
        $(selectBox).find('option').each(function(){
          $(wrapperBox).find('.hidden_text').text($(this).text());
          if($(wrapperBox).width() > max){
            max = $(wrapperBox).width();
            max_text = $(this).text();
            i++;
          }
        });

        $(wrapperBox).find('.hidden_text').text(max_text);

        $(selectBox).val($(selectBox).val()).change();


      });
    }
  });
})(jQuery);
