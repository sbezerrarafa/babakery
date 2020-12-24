!function(k,C){var _=k.loco,i=_&&_.conf,u=document.getElementById("loco-editor-inner");if(_&&i&&u){var D,r,n,z,m,l,d=!!i.WP_DEBUG,s=_.po.ref&&_.po.ref.init(_,i),p=null,a=null,o=i.multipart,T=_.l10n,b=_.string.sprintf,I=i.locale,y=_.po.init(I).wrap(i.powrap),c=!I,t=document.getElementById("loco-actions"),f=i.popath,g=i.potpath,v=String(i.syncmode).toLowerCase(),e=document.getElementById("loco-fs"),h=e&&_.fs.init(e),w=i.readonly,x=!w,j={},S=0,M={my:"top",at:"top",of:"#loco-content"};!o||k.FormData&&k.Blob||(o=!1,_.notices.warn("Your browser doesn't support Ajax file uploads. Falling back to standard postdata")),s||_.notices.warn("admin.js is out of date. Please empty your browser cache and reload the page.");var L,E,U=(E=parseInt(C(u).css("min-height")||0),function(){var n=function(n,t){for(var o=n.offsetTop||0;(n=n.offsetParent)&&n!==t;)o+=n.offsetTop||0;return o}(u,document.body),t=k.innerHeight,o=Math.max(E,t-n-20);L!==o&&(u.style.height=String(o)+"px",L=o)});U(),C(k).resize(U),u.innerHTML="",D=_.po.ed.init(u).localise(T),_.po.kbd.init(D).add("save",x?function(){D.dirty&&H()}:Y).add("hint",I&&x&&F||Y).enable("copy","clear","enter","next","prev","fuzzy","save","invis","hint");var P={save:x&&function(t){function o(){t.disabled=!0}function n(){t.disabled=!1}function e(){n(),C(t).removeClass("loco-loading")}return t,D.on("poUnsaved",function(){n(),C(t).addClass("button-primary")}).on("poSave",function(){o(),C(t).removeClass("button-primary")}),a=C.extend({path:f},i.project||{}),C(t).on("click",function(n){return n.preventDefault(),o(),C(t).addClass("loco-loading"),H(e),!1}),!0},sync:x&&function(t){var n=i.project;if(n){function o(){t.disabled=!0}function e(){t.disabled=!1}function a(){e(),C(t).removeClass("loco-loading")}D.on("poUnsaved",function(){o()}).on("poSave",function(){e()}),p={bundle:n.bundle,domain:n.domain,type:c?"pot":"po",path:f||"",sync:g||"",strip:"pot"===v?"1":""},C(t).on("click",function(n){return n.preventDefault(),o(),C(t).addClass("loco-loading"),q(a),!1}),e()}return!0},revert:function(n){return D.on("poUnsaved",function(){n.disabled=!1}).on("poSave",function(){n.disabled=!0}),C(n).on("click",function(n){return n.preventDefault(),location.reload(),!1}),!0},invs:function(n){var o=C(n);return n.disabled=!1,D.on("poInvs",function(n,t){o[t?"addClass":"removeClass"]("inverted")}),o.on("click",function(n){return n.preventDefault(),D.setInvs(!D.getInvs()),!1}),_.tooltip.init(o),!0},code:function(n){var o=C(n);return n.disabled=!1,o.on("click",function(n){n.preventDefault();var t=!D.getMono();return o[t?"addClass":"removeClass"]("inverted"),D.setMono(t),!1}),_.tooltip.init(o),!0},source:W,binary:c?null:W};c?(P.add=x&&function(n){return n.disabled=!1,C(n).on("click",function(n){n.preventDefault();var t,o=1,e=/(\d+)$/;for(t="New message";y.get(t);)o=e.exec(t)?Math.max(o,RegExp.$1):o,t="New message "+ ++o;return D.add(t),!1}),!0},P.del=x&&function(n){return n.disabled=!1,C(n).on("click",function(n){return n.preventDefault(),D.del(),!1}),!0}):P.auto=function(n){function t(){n.disabled=!1}return D.on("poUnsaved",function(){n.disabled=!0}).on("poSave poAuto",function(){t()}),C(n).on("click",N),t(),!0},C("#loco-editor > nav .button").each(function(n,t){var o=t.getAttribute("data-loco"),e=P[o];e&&e(t,o)||C(t).addClass("loco-noop")}),C(t).on("submit",Y),function(t){function e(n){C(t.parentNode)[n||null==n?"removeClass":"addClass"]("invalid")}D.searchable(_.fulltext.init()),t.disabled=!1,t.value="";var a=_.watchtext(t,function(n){e(D.filter(n,!0))});D.on("poFilter",function(n,t,o){a.val(t||""),e(o)}).on("poMerge",function(n,t){var o=a.val();o&&D.filter(o)})}(document.getElementById("loco-search")),D.on("poUnsaved",function(){k.onbeforeunload=$}).on("poSave",function(){G(),k.onbeforeunload=null}).on("poHint",F).on("poUpdate",G).on("poMeta",function(n,t){var o,e,a=(e="CODE",(o=t).tagName===e?o:o.getElementsByTagName(e)[0]);return!a||!s||(s.load(a.textContent),n.preventDefault(),!1)}),y.load(i.podata),D.load(y),(I=D.targetLocale)?I.isRTL()&&C(u).addClass("trg-rtl"):D.unlock(),G(),delete _.conf,i=P=null}function q(c){_.ajax.post("sync",p,function(n){var t=[],o=n.pot,e=n.po,a=n.done||{add:[],del:[],fuz:[]},i=a.add.length,r=a.del.length,l=a.fuz.length,s=T;y.clear().load(e),D.load(y),i||r||l?(o?t.push(b(s._("Merged from %s"),o)):t.push(s._("Merged from source code")),i&&t.push(b(s._n("1 new string added","%s new strings added",i),i)),r&&t.push(b(s._n("1 obsolete string removed","%s obsolete strings removed",r),r)),l&&t.push(b(s._n("1 string marked Fuzzy","%s strings marked Fuzzy",l),l)),C(u).trigger("poUnsaved",[]),G(),d&&k.console&&function(n,t){var o=-1,e=t.add.length;for(;++o<e;)n.log(" + "+String(t.add[o]));for(e=t.del.length,o=0;o<e;o++)n.log(" - "+String(t.del[o]));for(e=t.fuz.length,o=0;o<e;o++)n.log(" ~ "+String(t.fuz[o]))}(console,a)):o?t.push(b(s._("Strings up to date with %s"),o)):t.push(s._("Strings up to date with source code")),_.notices.success(t.join(". ")),C(u).trigger("poMerge",[n]),c&&c()},c)}function B(){return n=n||function(){for(var n,t=-1,o=[],e=r,a=e.length;++t<a;)try{n=e[t],o.push(_.apis.create(n))}catch(n){_.notices.error(String(n))}return o}()}function O(e){var a;function i(){return(new Date).getTime()}c||w?_.notices.error("Logic error. APIs not available in current mode"):null==r||0===r.length||10<Math.round((i()-S)/1e3)?(l&&l.remove(),l=null,m&&m.remove(),m=null,z&&z.remove(),r=z=null,a=C('<div><div class="loco-loading"></div></div>').dialog({dialogClass:"loco-modal loco-modal-no-close",appendTo:"#loco-admin.wrap",title:"Loading..",modal:!0,autoOpen:!0,closeOnEscape:!1,resizable:!1,draggable:!1,position:M,height:200}),_.ajax.get("apis",{locale:String(I)},function(n,t,o){S=i(),0===(r=n&&n.apis||[]).length?l=A("loco-apis-empty",n.html):m=A("loco-apis-batch",n.html),a.remove(),e(r)})):(S=i(),e(r))}function A(n,t){var o=C(t);return o.attr("id",n),o.dialog({dialogClass:"loco-modal",appendTo:"#loco-admin.wrap",title:o.attr("title"),modal:!0,autoOpen:!1,closeOnEscape:!0,resizable:!1,draggable:!1,position:M}),o}function F(){O(function(n){n.length?function(){var p=T,n=D.current(),t=D.getTargetOffset(),o=n&&n.source(null,t),f='lang="'+String(I)+'" dir="'+(I.isRTL()?"RTL":"LTR")+'"',g=99;if(!o)return;function e(n){return!n.isDefaultPrevented()&&(!(0<=(t=n.which-49)&&t<10&&(o=h&&h.find("button.button-primary").eq(t))&&1===o.length)||(n.preventDefault(),n.stopPropagation(),o.click(),!1));var t,o}function a(n,t,o,e){var a=e.getId(),i=x[a],r=String(i+1),l=e.getUrl(),s=p._("Use this translation"),c=String(e),u=y&&y[a],d=C('<button class="button button-primary"></button>').attr("tabindex",String(1+g+i)).on("click",function(e,a){return function(n){n.preventDefault(),n.stopPropagation(),v();var t=D.current(),o=D.getTargetOffset();t&&t.source(null,o)===e?(t.translate(a,o),D.focus().reloadMessage(t)):_.notices.warn("Source changed since suggestion")}}(n,t));d.attr("accesskey",r),1<m.length&&(s+=" ("+r+")"),d.text(s),u&&u.replaceWith(C('<div class="loco-api loco-api-'+a+'"></div>').append(C('<a class="loco-api-credit" target="_blank" tabindex="-1"></a>').attr("href",l).text(c)).append(C("<blockquote "+f+"></blockquote>").text(t||"FAILED")).append(d)),++w===b&&(h&&h.dialog("option","title",p._("Suggested translations")+" — "+o.label),g+=w),0===i&&d.focus()}function v(n){h&&null==n&&h.dialog("close"),y=h=null,C(k).off("keydown",e)}function i(e){return function(n,t,o){a(n,u[e.getId()]=t,o,e)}}var h=(z=z||A("loco-apis-hint","<div></div>")).html("").append(C('<div class="loco-api"><p>Source text:</p></div>').append(C('<blockquote lang="en"></blockquote>').text(o))).dialog("option","title",p._("Loading suggestions")+"...").off("dialogclose").on("dialogclose",v).dialog("open"),r=n.translation(t);r&&C('<div class="loco-api"><p>Current translation:</p></div>').append(C("<blockquote "+f+"></blockquote>").text(r)).append(C('<button class="button"></button>').attr("tabindex",String(++g)).text(p._("Keep this translation")).on("click",function(n){n.preventDefault(),v()})).appendTo(h);var l,s,m=B(),b=m.length,c=-1,u=j[o]||(j[o]={}),y={},w=0,x={};for(;++c<b;)l=m[c],h.append((d=l,void 0,S=C('<div class="loco-api loco-api-loading"></div>').text("Calling "+d+" ..."),y[d.getId()]=S)),s=l.getId(),x[s]=c,u[s]?a(o,u[s],I,l):l.translate(o,I,i(l));var d,S;C(k).on("keydown",e)}():R()})}function N(n){return n.preventDefault(),O(function(n){n.length?function(){var e,a,i,r=0,l=T,t=!1,s=m.dialog("open"),n=s.find("form"),c=n.find("button.button-primary"),o=C("#loco-job-progress");function u(){c[0].disabled=!0}function d(){c.removeClass("loco-loading")}function p(n){o.text(n)}function f(n){var t=function(n){for(var t,o=B(),e=o.length,a=-1;++a<e;)if((t=o[a]).getId()===n)return t;_.notices.error("No "+n+" client")}(C(n.api).val()),o=n.existing.checked;p("Calculating...."),(e=t.createJob()).init(y,o),a=t.toString(),p(b(l._("%s unique source strings."),e.length.format(0))+" "+b(l._("%s characters will be sent for translation."),e.chars.format(0))),e.length?c[0].disabled=!1:u(),i=null}function g(n){e&&(t&&n.fuzzy(0,!0),D.pasteMessage(n),n===D.active&&D.setStatus(n),D.unsave(n,0),r++)}function v(n,t){var o=t?100*n/t:0;p(b(l._("Translation progress %s%%"),o.format(0)))}function h(){if(d(),e&&i){var n=i.todo();n&&_.notices.warn(b(l._n("Translation job aborted with one string remaining","Translation job aborted with %s strings remaining",n),n.format(0))).slow();var t=[],o=i.did();o&&t.push(b(l._n("%s string translated via %s","%s strings translated via %s",o),o.format(0),a)),r?t.push(b(l._n("%s string updated","%s strings updated",r),r.format(0))):t.push(l._("Nothing needed updating")),_.notices.success(t.join(". ")).slow(),i=e=null}r&&(G(),D.rebuildSearch()),s&&(s.off("dialogclose").dialog("close"),s=null),D.fire("poAuto")}d(),u(),_.notices.clear(),n.off("submit change"),f(n[0]),n.on("change",function(n){var t=n.target,o=t.name;return"api"!==o&&"existing"!==o||f(t.form),!0}).on("submit",function(n){n.preventDefault(),c.addClass("loco-loading"),u(),v(r=0),t=n.target.fuzzy.checked,i=e.dispatch().done(h).each(g).prog(v).stat()}),s.off("dialogclose").on("dialogclose",function(){e.abort(),s=null,h()})}():R()}),!1}function R(){l?l.dialog("open"):_.notices.error("Logic error. Unconfigured API modal missing")}function H(t){var n=C.extend({locale:String(y.locale()||"")},a||{});h&&h.applyCreds(n),o?(n=function(n){var t,o=new FormData;for(t in n)n.hasOwnProperty(t)&&o.append(t,n[t]);return o}(n)).append("po",new Blob([String(y)],{type:"application/x-gettext"}),String(n.path).split("/").pop()||"untitled.po"):n.data=String(y),_.ajax.post("save",n,function(n){t&&t(),D.save(!0),C("#loco-po-modified").text(n.datetime||"[datetime error]")},t)}function $(){return T._("Your changes will be lost if you continue without saving")}function W(e,a){return e.disabled=!1,C(e).on("click",function(n){var t=e.form,o=f;return"binary"===a&&(o=o.replace(/\.po$/,".mo")),t.path.value=o,t.source.value=y.toString(),!0}),!0}function Y(n){return n.preventDefault(),!1}function G(){var n=T,t=D.stats(),o=t.t,e=t.f,a=t.u,i=b(n._n("1 string","%s strings",o),o.format(0)),r=[];I&&(i=b(n._("%s%% translated"),t.p.replace("%",""))+", "+i,e&&r.push(b(n._("%s fuzzy"),e.format(0))),a&&r.push(b(n._("%s untranslated"),a.format(0))),r.length&&(i+=" ("+r.join(", ")+")")),C("#loco-po-status").text(i)}}(window,window.jQuery);