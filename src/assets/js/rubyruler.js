/**
 * RUBY RULER JQUERY PLUGIN
 * @package         RubyRuler
 * @author          HaiBach
 * @link            http://haibach.net/
 * @version         1.x
 * @lastUpdate      30-10-2016
 */

!function(e){"use strict";window.rubyrulerVA||(window.rubyrulerVA={rubyName:"rubyruler",rubyData:"ruler",namespace:"rubyruler",$ruler:e()},rubyrulerVA.optsDefault={target:null,distanceLine:10,distanceNum:100,isRulerTop:!0,isRulerLeft:!0,isConner:!0}),e[rubyrulerVA.rubyName]=function(t,r){var n={rubykey:Math.ceil(1e9*Math.random()),ns:rubyrulerVA.namespace,data:{}},a={},s=function(){l.Ruler(),i.MergeAllOpts();var t=e(a.target);t.length&&(n.$target=t),u.Structure(),o.MoveToTarget(),f.Resize()},i={MergeAllOpts:function(){var n=rubyrulerVA.optsDefault,s=t.data(rubyrulerVA.rubyData);s=i.StringToJson(s),a=e.extend(!0,a,n,r,s)},NS:function(e){return"string"==typeof e?e.replace(/\{ns\}/g,n.ns):""},ProperCase:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},StringToJson:function(t,r){if("string"==typeof t){t=t.replace(/\u0027/g,'"');try{t=e.parseJSON(t)}catch(n){rs01VA.M.Message(r)}}return e.isPlainObject(t)?e.extend(!0,{},t):e.isArray(t)?e.extend(!0,[],t):{}}},u={Structure:function(){a.isRulerTop&&u.Item("top"),a.isRulerLeft&&u.Item("left"),a.isConner&&a.isRulerTop&&a.isRulerLeft&&u.Conner()},Item:function(r){var a=i.ProperCase(r),s="$ruler"+a,l="$ruler"+a+"Inner";n[s]=e("<div/>",{"class":i.NS("{ns}-item {ns}-"+r)}),n[l]=e("<div/>",{"class":i.NS("{ns}-inner")}),n[s].append(n[l]).appendTo(t),o.DistanceToTarget(),u.Line(r)},Line:function(t){var r=i.ProperCase(t),s=/^(top|bottom)$/.test(t),u=s?n.width:n.height,o=s?n.widthMaxLast:n.heightMaxLast,l=n["offsetRuler"+r],f="$ruler"+r+"Inner",c="$ruler"+r+"Line",d="$ruler"+r+"Num";if(!(o>=u)){!!n[c]&&n[c].remove(),!!n[d]&&n[d].remove();for(var h=a.distanceLine,p=l%h,g=-l+p-h,T=g+u+h;T>g;){var L=e("<span/>",{"class":i.NS("{ns}-line")}),y=e("<span/>",{"class":i.NS("{ns}-line {ns}-num"),text:g});0>g&&L.add(y).addClass(i.NS("{ns}-negative")),0===g&&L.add(y).addClass(i.NS("{ns}-zero")),g%a.distanceNum!==0?(L.css(s?"left":"top",g),n[c]=(n[c]||e()).add(L)):(y.css(s?"left":"top",g),n[d]=(n[d]||e()).add(y)),g+=a.distanceLine}n[f].append(n[c]).append(n[d])}},Conner:function(){n.$conner=e("<div/>",{"class":i.NS("{ns}-conner")}),t.append(n.$conner)}},o={DistanceToTarget:function(){var e,r,s=n.$target;s&&(a.isRulerTop&&(e=t.offset().left,r=s.offset().left,n.offsetRulerTop=Math.round(r-e)),a.isRulerLeft&&(e=t.offset().top,r=s.offset().top,n.offsetRulerLeft=Math.round(r-e)))},MoveToTarget:function(){n.$target&&(o.DistanceToTarget(),a.isRulerTop&&n.$rulerTopInner.css("left",n.offsetRulerTop),a.isRulerLeft&&n.$rulerLeftInner.css("top",n.offsetRulerLeft))}},l={Ruler:function(){n.widthMaxLast=n.widthMaxLast||0,n.heightMaxLast=n.heightMaxLast||0,n.widthMaxLast<n.width&&(n.widthMaxLast=n.width),n.heightMaxLast<n.height&&(n.heightMaxLast=n.height),n.width=t.outerWidth(),n.height=t.outerHeight()}},f={Resize:function(){function r(){clearTimeout(n.tiResize),n.tiResize=setTimeout(function(){var e=a.isRulerTop&&Math.abs(t.outerWidth()-n.width)>1,r=a.isRulerLeft&&Math.abs(t.outerHeight()-n.height)>1;(e||r)&&(l.Ruler(),o.DistanceToTarget(),a.isRulerTop&&u.Line("top"),a.isRulerLeft&&u.Line("left"),o.MoveToTarget())},0)}var s="resize."+n.ns+n.rubykey;e(window).off(s).on(s,r)}};s()},e.fn[rubyrulerVA.rubyName]=function(){var t=arguments,r=rubyrulerVA.rubyName,n=null;return e(this).each(function(){var a=e(this),s=a.data(r);void 0===t[0]&&(t[0]={}),e.isPlainObject(t[0])&&(s||new e[r](a,t[0]),n=a.data(r))}),n}}(jQuery);
