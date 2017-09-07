import $ from "zepto"

let affix = {
  // 当绑定元素插入到 DOM 中。
  inserted (el,binding) {

    let elTop = $(el).offset().top;


    function isSupportSticky() {
        var prefixTestList = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
        var stickyText = '';
        for (var i = 0; i < prefixTestList.length; i++ ) {
            stickyText += 'position:' + prefixTestList[i] + 'sticky;';
        }
        // 创建一个dom来检查
        var div = document.createElement('div');
        var body = document.body;
        div.style.cssText = 'display:none;' + stickyText;
        body.appendChild(div);
        var isSupport = /sticky/i.test(window.getComputedStyle(div).position);
        body.removeChild(div);
        div = null;
        return isSupport;
    }
    if(  isSupportSticky() ){
      $(el).css({
        "position": "sticky",
        "position": "-webkit-sticky",
        "top": 0,
        "z-index": 100
      });

    }else{

      $( document ).on( "scroll" , function(){
        let scrollTop = this.body.scrollTop;
        elTop = $(el).offset().top;
        if( scrollTop >= elTop ){
          $(el).css({
            "position": "fixed",
            "top": binding.value,
            "z-index": 100
          }).parent().css({
            "padding-top": $(el).height()
          })
        }else{
          $(el).css({
            "position": "relative",
            "top": 0
          }).parent().css({
            "padding-top": 0
          })
        }
      })
    }
  },
  unbind () {
      $( document ).off( "scroll" )
  }
}

export default affix;
