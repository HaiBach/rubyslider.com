/**
 * RUBY FORM JQUERY PLUGIN
 * @package         RubyForm
 * @author          HaiBach
 * @link            http://haibach.net
 * @version         1.x
 */

(function(g){function l(d,f){return/^-?\d+/g.test(d)?parseInt(d,10):f?0:d}window.rt03VA||(window.rt03VA={});window.rt03VA.ev=g("<div></div>");(function(){var d={moreName:null,moreData:"rf01checkbox-more",valueOn:1,valueOff:0};g(".rf01checkbox, .rf01checkbox-text").each(function(){var f=g(this),b=f.find("input[type=hidden]"),a=b.length?!0:!1,c=!1,e=l(f.data("valueLast")),p=f.data("options"),k={};g.isPlainObject(p)?f.removeAttr("data-options"):p={};k=g.extend(!0,{},d,p);if(null!=k.moreName){var q=g("[data-"+
k.moreData+"="+k.moreName+"]");q.length&&(c=!0)}var h={active:function(){f.addClass("rt03selected");a&&b.val(k.valueOn).trigger("rubychange");c&&q.removeClass(k.deactived).addClass(k.actived)},deactive:function(){f.removeClass("rt03selected");a&&b.val(k.valueOff).trigger("rubychange");c&&q.removeClass(k.actived).addClass(k.deactived)}};void 0!=e&&e==k.valueOn?h.active():h.deactive();f.on("click.rf01checkbox",function(){f.hasClass("rt03selected")?h.deactive():h.active();p&&"optsAdvance"==p.name&&rt03VA.ev.trigger("editor-css-refresh");
return!1});b.on("change",function(){1==b.prop("value")?h.active():h.deactive()})})})();(function(){g(".rf01select-one").each(function(){var d=g(this),f=d.find(".rt03select-item"),b=d.find("input[type=hidden]"),a=b.length;if(f.length){var c=d.data("valueLast"),e=function(c){f.not(c).removeClass("rt03selected");c.addClass("rt03selected");if(a)for(var e=0;e<a;e++){var d="value"+(0<e?e+1:"");b.eq(e).prop("value",c.data(d))}},d=d.find('.rt03select-item[data-value="'+c+'"]');1==d.length&&e(d);f.on("click.rt03selectOne",
function(){var a=g(this);a.hasClass("rt03selected")||e(a);return!1});a&&b.on("change",function(a){a=g(this).prop("value");for(var e=null,c=0,b=f.length;c<b;c++){var d=f.eq(c);if(d.data("value")==a){e=d;break}}null!=e&&(f.not(e).removeClass("rt03selected"),e.addClass("rt03selected"))})}})})();(function(){g(".rf01input-updown").each(function(){var d=g(this),f=d.data("options"),b=g.extend(!0,{},{ns:"rf01input-updown-",plus:1,offset:0,min:0,max:1E6,unit:null,tActive:500,tInterval:50,html:{unit:'<span class="{ns}unit">{unit}</span>',
down:'<div class="{ns}down">&ndash;</div>',up:'<div class="{ns}up">+</div>'}},g.isPlainObject(f)?f:{}),a={$self:d,$value:d.find("."+b.ns+"value"),isTap:{up:!1,down:!1}},f={Render:function(){var c=b.html.down+b.html.up;null!=b.unit&&(c=b.html.unit.replace(/\{unit\}/g,b.unit)+c);c=c.replace(/\{ns\}/g,b.ns);d.append(c);0!=b.offset&&(a.$offset=g("<input>").attr({type:"text","class":a.$value.prop("class"),name:"rt03input-ghost"}),a.$value.after(a.$offset).prop("type","hidden").removeAttr("class"),a.$offset=
d.find('input[type="text"]'));null!=b.unit&&(a.$unit=d.find("."+b.ns+"unit"));a.$down=d.find("."+b.ns+"down");a.$up=d.find("."+b.ns+"up")},SetValueAtFirst:function(){var c=void 0!=d.data("valueLast")?d.data("valueLast"):0;a.$value.prop("value",c);a.$offset&&a.$offset.prop("value",c+b.offset);d.trigger("change")},Plus:function(c){var e=c?b.plus:-b.plus,f=c?b.max:b.min;c=c?1:-1;a.value=parseInt(a.$value.val())+e;a.value*c>f*c&&(a.value=f);a.value!=a.valueLast&&(a.valueLast=a.value,a.$value.val(a.value),
a.$offset&&a.$offset.val(a.value+b.offset),d.trigger("change"))},AutoRun:function(c){var e=this,d=c?"up":"down";clearInterval(a.timerLoop);a.timerLoop=setInterval(function(){a.isTap[d]?e.Plus(c):clearInterval(a.timerLoop)},b.tInterval)},Active:function(c){var e=this,d=c?"up":"down";setTimeout(function(){a.isTap[d]&&e.AutoRun(c)},b.tActive)},Events:function(c,e){var d=this,b=e?"up":"down";c.on("mousedown",function(c){a.isTap[b]=!0;d.Active(e);return!1});c.on("mouseup",function(c){a.isTap[b]&&d.Plus(e);
return a.isTap[b]=!1});c.on("mouseleave",function(c){return a.isTap[b]=!1})}};a.$value.length&&(f.Render(),f.SetValueAtFirst(),f.Events(a.$up,!0),f.Events(a.$down,!1))})})()})(jQuery);
(function(g){window.rr01VA||(window.rr01VA={codeName:"rubyranger",codeData:"ranger",namespace:"rr01"},rr01VA.optsDefault={valueBegin:0,range:[0,100],round:1,speed:100,html:{track:'<div class="{ns}track"></div>',thumb:'<div class="{ns}thumb"></div>',mark:'<div class="{ns}mark"></div>'}});g[rr01VA.codeName]=function(l,d){var f=rr01VA.namespace,b="."+f+Math.round(1E6*Math.random()),a={},c={},e={},p=g(document),k,q,h,m,v,w,A,x,B,r,u,C,y,D,z={MergeAllOpts:function(){var b=l.data(rr01VA.codeData);b||(b=
{});a=g.extend(!0,a,rr01VA.optsDefault,d,b);c=g.extend(!0,c,E);c.va=e;g.data(l[0],rr01VA.codeName,c)},OptsInit:function(){e.isTween=!!window.RubyTween;e.isTween&&(e.tween=new RubyTween);m=a.range;v=m[1]-m[0]},RenderElement:function(){k=l.find("input");q=g(a.html.track.replace(/\{ns\}/g,f));h=g(a.html.thumb.replace(/\{ns\}/g,f));l.append(q).append(h).append(k)}},t={InputValue:function(a){k.prop("value",a)},SizeAndPos:function(){w=l.outerWidth();A=q.outerWidth();x=h.outerWidth();B=Math.round(x/2);r=
w-x;u=h.offset().left},Resize:function(a){if(l.outerWidth()!=w||a)t.SizeAndPos(),n.TrackRange(),n.ThumbUpdate()}},n={Go:function(a,c){c&&(a=(m[1]-m[0])*a/100+m[0]);m[0]<=a&&a<=m[1]&&(e.valueCur=a,n.ThumbUpdate());t.InputValue(e.valueCur)},TrackRange:function(){y=Math.round(q.offset().left);D=y+A},ThumbMove:function(c,b){var d=e.xCur+c,f=null;0<d&&d<r?f=d:d>r?f=r:0>d&&(f=0);null!==f&&(e.isTween?b?e.tween.reset(!0).animate(h,{x:f},{duration:a.speed}):e.tween.css(h,{x:f}):b?h.animate({left:f},a.speed):
h.css("left",f),e.xCur=f,e.posCur=f/r*100,e.valueCur=f*v/r+m[0],null!==a.round&&(e.valueCur=Math.round(e.valueCur/a.round)*a.round),t.InputValue(e.valueCur))},ThumbUpdate:function(){var c=!1,b=e.valueCur;void 0===b&&(b=e.valueCur=a.valueBegin,c=!0);if(m[0]<=b&&b<=m[1]){var d=Math.round((b-m[0])*r/v);e.isTween?e.tween.css(h,{x:d}):h.css("left",d);e.xCur=d;e.posCur=d/r*100;c&&t.InputValue(b)}}},E={refresh:function(){t.Resize()},go:function(a,b){n.Go(a,b)},positionCur:function(){return e.posCur},ev:g("<div/>")};
z.MergeAllOpts();z.OptsInit();z.RenderElement();t.SizeAndPos();n.ThumbUpdate();n.TrackRange();(function(){h.on("mousedown",function(a){u=a.pageX;n.TrackRange();c.ev.trigger("tapDown");p.on("mousemove"+b,function(a){a=a.pageX;var b=a-u;y<=a&&a<=D&&(u=a,n.ThumbMove(b),c.ev.trigger("tapMove"))})});p.on("mouseup"+b,function(a){p.off("mousemove"+b)});q.on("click",function(a){u=h.offset().left;n.ThumbMove(a.pageX-u-B,!0);c.ev.trigger("tapOnTrack")});k.on("change",function(){n.Go(k.val())});g(window).on("resize"+
b,function(a){clearTimeout(C);C=setTimeout(function(){t.Resize()},100)})})()};g.fn[rr01VA.codeName]=function(){var l=arguments,d=rr01VA.codeName,f=null;g(this).each(function(){var b=g(this),a=b.data(d);void 0===l[0]&&(l[0]={});if(g.isPlainObject(l[0]))a||new g[d](b,l[0]),f=b.data(d);else try{a[l[0]](l[1])}catch(c){window.console&&console.warn("["+d+": function not exist!]")}});return f}})(jQuery);