!function($){var t;return t={},$.widget("webfont.wfselect",{options:{fonts:{google:{families:[{name:"Droid Sans",url:null},{name:"Signika",url:null}],url_generation:{base_url:"https://fonts.googleapis.com/css?family=$font",space_char:"+"}}},merge_list:!1,load_all_fonts:!1},_create:function(){var t,n,e,i;e=this,n=this.options,t=this.element,i=n.fonts||this.options.fonts,t.addClass("webfont-input").wrap($("<div/>").addClass("webfont-wrapper")),t.on("keyup paste",{instance:e},e._searchFontList),this.wrapper=t.closest(".webfont-wrappers"),t.after(e._createFontList(i,this.options.merge_list).hide()),e._selectFontByName(t.val()),e.toggle=$("<div/>").addClass("ui-icon ui-icon-triangle-1-s").insertAfter(t),e._bindHandlers(),n.load_all_fonts&&e._loadAllFonts()},_createFontList:function(t,n){var e,i;return null==n&&(n=!1),this.fontList=$("<ul/>").addClass("webfont-list"),i=this,e=this._createFontObjects(t,n),$.each(e,function(t,n){$("<li/>").html(n.font).data("font_name",n.font).data("font_type",n.type).data("font_url",n.url).css(i._fontToStyle(n.font)).appendTo(i.fontList)}),this.fontList},_searchFontList:function(t){var n,e,i,o,s;s=t.data.instance,n=$(this).val(),o=s.options.fonts,i=null,e=$.extend(!0,{},o),$.each(e,function(t,i){var o;o=i.families,e[t].families=o.filter(s._filterFontList,n)}),s.element.nextAll().remove(),s.element.after(s._createFontList(e,s.options.merge_list)),s._selectFontByName(s._getFirstFontInList(e),13!==t.keyCode),s._bindHandlers()},_filterFontList:function(t){return"string"==typeof t?t.toLowerCase().indexOf(this.toString().toLowerCase())>=0:t.name.toLowerCase().indexOf(this.toString().toLowerCase())>=0},_getFirstFontInList:function(t){var n,e;return n=t[Object.keys(t)[0]].families,n.length<1?null:(e=n[0],"string"==typeof e?e:e.name)},_createFontObjects:function(t,n){var e,i;return null==n&&(n=!1),e=[],i=this,$.each(t,function(n,o){var s;s=o.families.map(function(e){return"string"==typeof e?{font:e,type:n,url:i._generateFontUrl(t,n,e)}:{font:e.name,type:n,url:e.url||i._generateFontUrl(t,n,e.name)}}),e=e.concat(s)}),n&&(e=e.sort(function(t,n){return t.font>n.font})),e},_generateFontUrl:function(t,n,e){return void 0===t[n].url_generation?null:(void 0!==t[n].url_generation.space_char&&(e=e.split(" ").join(t[n].url_generation.space_char)),t[n].url_generation.base_url.replace("$font",e))},_fontToStyle:function(t){var n;return n=t.split(":"),{"font-family":this._readableFontName(n[0]),"font-weight":n[1]||400}},_readableFontName:function(t){return t.replace(/[\+|:]/g," ")},_selectFontByName:function(t,n){var e,i;return null==n&&(n=!1),e=this.fontList.find("li"),i=$.grep(e,function(n,e){return $(n).data("font_name")===t}),!!i.length&&(this._selectFontListItem($(i).first(),n),!0)},_selectFontListItem:function(t,n){var e,i,o,s;return null==n&&(n=!1),t.hasClass("selected")?null:(this.fontList.find("li.selected").removeClass("selected"),t=$(t).addClass("selected"),e=t.data("font_name"),i=t.data("font_type"),o=t.data("font_url"),s=this._fontToStyle(e),this.element.css(s),this._trigger("change",null,s),this._loadFonts([{font:e,type:i}]),void(n||(this.element.val()!==e&&this.element.val(e).attr("font_url",o).trigger("change"),this._toggleFontList(!1))))},_loadFonts:function(n){var e,i;return e=$.grep(n,function(n){return t[n.font]},!0),e.length?(i={},$.each(e,function(n,e){t[e.font]=!0,Object.keys(i).indexOf(e.type)===-1&&(i[e.type]={}),Object.keys(i[e.type]).indexOf("families")===-1&&(i[e.type].families=[]),i[e.type].families.push(e.font)}),void WebFont.load(i)):null},_loadAllFonts:function(){var n,e,i,o;return i=[{}],e=0,n=0,$.each(this.options.fonts,function(o,s){return i[e][o]={families:[]},$.each(s.families,function(s,l){return n++,n>=40&&(e++,n=0,i[e]={},i[e][o]={families:[]}),"string"==typeof l?(i[e][o].families.push(l),t[l]=!0):(i[e][o].families.push(l.name),t[l.name]=!0)})}),o=0,$.each(i,function(t,n){return setTimeout(function(){WebFont.load(n)},o+=200)})},_loadVisibleFonts:function(){var t,n,e,i,o;return this.fontList.is(":visible")?(o=this.fontList.scrollTop(),i=this.fontList.height(),e=o+i,t=this.fontList.find("li"),n=[],$.each(t,function(t,e){var o,s;e=$(e),s=e.position().top,o=s+e.outerHeight(),o>=0&&s<i&&n.push({font:e.data("font_name"),type:e.data("font_type")})}),void this._loadFonts(n)):null},_toggleFontList:function(t){var n;t?(this.wrapper.css({"z-index":999999}),this.fontList.show(),this._loadVisibleFonts(),n=this.fontList.find("li.selected"),n.length&&this.fontList.scrollTop(n.position().top)):(this.wrapper.css({"z-index":"auto"}),this.fontList.hide())},_bindHandlers:function(){var t,n,e;e=this,t=null,$("html").bind("click.webfont",function(t){e._toggleFontList(!1)}),n=function(t){e._toggleFontList(!0),t.stopPropagation()},this.element.bind("click.webfont",n),this.toggle.bind("click.webfont",n),this.fontList.bind("scroll.webfont",function(n){window.clearTimeout(t),t=window.setTimeout(function(){e._loadVisibleFonts()},250)}).bind("click.webfont",function(t){var n;return n=$(t.target),n.is("li")?void e._selectFontListItem(n):null})},destory:function(){this.fontList.remove(),this.toggle.remove(),this.element.removeClass("webfont-input").removeAttr("readonly").unbind("click.webfont").unwrap(),$("html").unbind("click.webfont"),$.Widget.prototype.destory.call(this)}})}(jQuery);
//# sourceMappingURL=./webfont.select.js.map