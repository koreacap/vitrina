(function(g){var window=this;var g4=function(a,b){g.mf(a.u,8*b+2);var c=a.u.end();a.C.push(c);a.B+=c.length;c.push(a.B);return c},h4=function(a,b){var c=b.pop();
for(c=a.B+a.u.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.B++;b.push(c);a.B++},AEa=function(a,b,c){null!=c&&(g.mf(a.u,8*b+1),a=a.u,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.xf=b,g.yf=c,g.nf(a,g.xf),g.nf(a,g.yf))},i4=function(a,b,c){null!=c&&(g.mf(a.u,8*b),a.u.u.push(c?1:0))},j4=function(a,b,c){if(null!=c){b=g4(a,b);
for(var d=a.u,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.u.push(f);else if(2048>f)d.u.push(f>>6|192),d.u.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.u.push(f>>18|240),d.u.push(f>>12&63|128),d.u.push(f>>6&63|128),d.u.push(f&63|128),e++)}else d.u.push(f>>12|224),d.u.push(f>>6&63|128),d.u.push(f&63|128)}h4(a,b)}},k4=function(a,b,c,d){null!=c&&(b=g4(a,b),d(c,a),h4(a,b))},l4=function(a,b,c,d){if(null!=
c)for(var e=0;e<c.length;e++){var f=g4(a,b);
d(c[e],a);h4(a,f)}},BEa=function(a,b){var c=(b-a.u)/(a.B-a.u);
if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.Ln(a,c);var l=(g.Ln(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.Ln(a,c);return c},m4=function(a,b,c){a.u||(a.u={});
if(!a.u[c]){var d=g.Hf(a,c);d&&(a.u[c]=new b(d))}return a.u[c]},n4=function(a,b,c){g.Lf(a,b,c);
b=a.u[c];b==g.Df&&(b=a.u[c]=[]);return b},CEa=function(a,b,c){a.u||(a.u={});
c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].uf;a.u[b]=c;g.Jf(a,b,d)},o4=function(a,b,c,d){(c=g.Ff(a,c))&&c!==b&&void 0!==d&&(a.u&&c in a.u&&(a.u[c]=void 0),g.Jf(a,c,void 0));
g.Jf(a,b,d)},DEa=function(){return{G:"svg",
U:{height:"100%",viewBox:"0 0 16 16",width:"100%"},S:[{G:"path",U:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}},p4=function(){return{G:"svg",
U:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},S:[{G:"path",ob:!0,L:"ytp-svg-fill",U:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
EEa=function(a){this.GA=a},q4=function(a,b,c){this.D=a;
this.B=b;this.u=c||[];this.ym=new Map},r4=function(a,b){q4.call(this,a,3,b)},GEa=function(){this.I=new FEa;
this.B=new Map;this.F=new Set;this.C=0;this.D=100;this.flushInterval=3E4;this.u=new g.Tm(this.flushInterval);this.u.ua("tick",this.VF,!1,this)},HEa=function(a,b){return a.F.has(b)?void 0:a.B.get(b)},IEa=function(a){for(var b=0;b<a.length;b++)a[b].clear()},JEa=function(){if(!s4){s4=new GEa;
var a=g.vo("client_streamz_web_flush_count",-1);-1!==a&&(s4.D=a)}this.u=s4;this.u.LH("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe")},LEa=function(a){g.Gf(this,a,KEa,null)},MEa=function(a){g.Gf(this,a,null,null)},OEa=function(a,b){var c=n4(a,MEa,1);
0<c.length&&l4(b,1,c,NEa)},NEa=function(a,b){var c=g.Hf(a,1);
null!=c&&g.Af(b,1,c);c=g.Hf(a,2);null!=c&&g.zf(b,2,c)},QEa=function(a){g.Gf(this,a,PEa,null)},SEa=function(a){g.Gf(this,a,null,REa)},TEa=function(a){g.Gf(this,a,null,null)},UEa=function(a){g.Gf(this,a,null,null)},t4=function(a){g.Gf(this,a,VEa,null)},v4=function(a){g.Gf(this,a,null,u4)},x4=function(a){g.Gf(this,a,null,w4)},YEa=function(a,b){var c=m4(a,TEa,1);
null!=c&&k4(b,1,c,WEa);c=m4(a,UEa,2);null!=c&&k4(b,2,c,XEa)},WEa=function(a,b){var c=g.Hf(a,1);
null!=c&&j4(b,1,c);c=g.Hf(a,2);null!=c&&j4(b,2,c);c=g.Hf(a,3);null!=c&&i4(b,3,c)},XEa=function(a,b){var c=g.Hf(a,1);
null!=c&&j4(b,1,c);c=g.Hf(a,2);null!=c&&j4(b,2,c);c=g.Hf(a,3);null!=c&&g.wf(b,3,c);c=g.Hf(a,4);null!=c&&i4(b,4,c)},aFa=function(a,b){var c=n4(a,v4,1);
0<c.length&&l4(b,1,c,ZEa);c=m4(a,x4,2);null!=c&&k4(b,2,c,$Ea)},ZEa=function(a,b){var c=g.Hf(a,1);
null!=c&&j4(b,1,c);c=g.Hf(a,2);null!=c&&g.wf(b,2,c);c=g.Hf(a,3);null!=c&&i4(b,3,c)},$Ea=function(a,b){var c=g.Hf(a,1);
null!=c&&g.zf(b,1,c);c=g.Hf(a,2);null!=c&&g.Af(b,2,c);c=m4(a,LEa,3);null!=c&&k4(b,3,c,OEa)},FEa=function(){},y4=function(a){g.B.call(this);
this.callback=a;this.B=new g.Kn(0,0,.4,0,.2,1,1,1);this.delay=new g.qn(this.next,window,this);this.startTime=this.duration=this.u=this.from=NaN;g.C(this,this.delay)},z4=function(a){g.V.call(this,{G:"div",
L:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.I=this.B=0;this.animationDelay=1E3;this.N=new g.Sr(this);this.D=[];this.u=[];this.F=0;this.title=new g.V({G:"h2",L:"ytp-related-title",Z:"{{title}}"});this.previous=new g.V({G:"button",ia:["ytp-button","ytp-previous"],U:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},S:[g.bN()]});this.X=
new y4(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.C=0;this.K=!0;this.next=new g.V({G:"button",ia:["ytp-button","ytp-next"],U:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},S:[g.cN()]});g.C(this,this.N);a=a.T();this.V=a.B;g.C(this,this.title);this.title.ea(this.element);this.suggestions=new g.V({G:"div",L:"ytp-suggestions"});g.C(this,this.suggestions);this.suggestions.ea(this.element);
g.C(this,this.previous);this.previous.ea(this.element);this.previous.ua("click",this.sK,this);g.C(this,this.X);for(var c=0;16>c;c++){var d=new g.V({G:"a",L:"ytp-suggestion-link",U:{href:"{{link}}",target:a.F,"aria-label":"{{aria_label}}"},S:[{G:"div",L:"ytp-suggestion-image",S:[{G:"div",U:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",Z:"{{duration}}"}]},{G:"div",L:"ytp-suggestion-title",U:{title:"{{hover_title}}"},Z:"{{title}}"},{G:"div",L:"ytp-suggestion-author",Z:"{{views_or_author}}"}]});
g.C(this,d);d.ea(this.suggestions.element);var e=d.ga("ytp-suggestion-link");g.E(e,"transitionDelay",c/20+"s");this.N.R(e,"click",g.Wa(this.tK,c));this.D.push(d)}g.C(this,this.next);this.next.ea(this.element);this.next.ua("click",this.rK,this);this.N.R(this.api,"videodatachange",this.Pa);this.resize(g.nG(this.api).getPlayerSize());this.Pa();this.show()},A4=function(a){a.next.element.style.bottom=a.I+"px";
a.previous.element.style.bottom=a.I+"px";var b=a.C,c=a.F-a.u.length*(a.tileWidth+a.B);g.J(a.element,"ytp-scroll-min",0<=b);g.J(a.element,"ytp-scroll-max",b<=c)},bFa=function(a){for(var b=0;b<a.u.length;b++){var c=b,d=a.u[b].Ka();
c=a.D[c];var e=d.shortViewCount?d.shortViewCount:d.author,f=d.ak();g.JB(a.api.T())&&(f=g.Ld(f,g.IT({},"emb_rel_err")));c.element.style.display="";var h=c.ga("ytp-suggestion-title");g.In.test(d.title)?h.dir="rtl":g.AAa.test(d.title)&&(h.dir="ltr");h=c.ga("ytp-suggestion-author");g.In.test(e)?h.dir="rtl":g.AAa.test(e)&&(h.dir="ltr");h=void 0;d.isLivePlayback?h="\u0412 \u044d\u0444\u0438\u0440\u0435":h=d.lengthSeconds?g.IO(d.lengthSeconds):"";c.update({views_or_author:e,duration:h,link:f,hover_title:d.title,
title:d.title,aria_label:d.ko||null,is_live:d.isLivePlayback});c=c.ga("ytp-suggestion-image");d=d.Fd();c.style.backgroundImage=d?"url("+d+")":""}for(;b<a.D.length;b++)a.D[b].element.style.display="none";A4(a)},B4=function(a){g.BX.call(this,a);
var b=this,c=a.T();c=new g.V({G:"a",L:"ytp-small-redirect",U:{href:g.uC(c),target:c.F,"aria-label":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 YouTube \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0438\u0434\u0435\u043e"},S:[{G:"svg",U:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},S:[{G:"path",U:{d:"M0 0h24v24H0V0z",fill:"none"}},{G:"path",U:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]}]});
c.ea(this.element);g.C(this,c);this.u=new z4(a);this.u.ea(this.element);g.C(this,this.u);this.R(a,"videodatachange",function(){b.show()});
this.resize(g.nG(this.api).getPlayerSize())},cFa=function(a,b){a.ga("ytp-error-content").style.paddingTop="0px";
var c=a.ga("ytp-error-content"),d=c.clientHeight;a.u.resize(b,b.height-d);c.style.paddingTop=(b.height-a.u.element.clientHeight)/2-d/2+"px"},dFa=function(a,b){var c=a.api.T(),d;
b.reason&&(C4(b.reason)?d=g.jE(b.reason):d=g.CX(g.U(b.reason)),a.lc(d,"content"));var e;b.subreason&&(C4(b.subreason)?e=g.jE(b.subreason):e=g.CX(g.U(b.subreason)),a.lc(e,"subreason"));if(g.R(c.experiments,"embeds_enable_age_gating_playability_check")&&b.proceedButton&&b.proceedButton.buttonRenderer&&(e=b.proceedButton.buttonRenderer,c=a.ga("ytp-error-content-wrap-subreason"),d=g.Fe("A"),e.text&&e.text.simpleText)){var f=e.text.simpleText;d.textContent=f;a:{for(var h=(c||document).getElementsByTagName("A"),
l=0;l<h.length;l++)if(h[l].textContent===f){f=!0;break a}f=!1}f||(e.navigationEndpoint&&e.navigationEndpoint.urlEndpoint&&((f=e.navigationEndpoint.urlEndpoint.url)&&d.setAttribute("href",f),(e=e.navigationEndpoint.urlEndpoint.target)&&d.setAttribute("target",e)),c.appendChild(d))}},C4=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},D4=function(a,b){g.V.call(this,{G:"button",
ia:["ytp-impression-link","ytp-button"]});this.api=a;this.C=b;this.B=!1;this.u=null;var c=this.api.T();this.hide();g.bX(this.api,this.element,this,96714);var d=this.api.T(),e=this.api.getVideoData().Jc,f=d.Za,h=d.Af;d=!d.kb;var l=this.C.ag();f||h||l||e||d||(g.R(c.experiments,"embeds_impression_link_call_to_action")&&(g.I(this.element,"show-cta-button"),(new g.V({G:"div",L:"ytp-impression-link-content",S:[{G:"div",L:"ytp-impression-link-text",Z:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430"},
{G:"div",L:"ytp-impression-link-logo",S:[p4()]}]})).ea(this.element),this.show()),g.R(c.experiments,"embeds_impression_link_video_thumbnail")&&eFa(this),g.R(c.experiments,"embeds_impression_link_channel_thumbnail")&&fFa(this),g.R(c.experiments,"embeds_impression_link_occlusion")&&gFa(this),g.R(c.experiments,"embeds_impression_link_hover")&&hFa(this),this.R(this.api,"presentingplayerstatechange",this.Jf),this.R(this.api,"videoplayerreset",this.D),this.R(this.element,"click",this.onClick))},eFa=function(a){g.Ue(a,
function c(){var d=this,e,f,h,l,m;
return g.Aa(c,function(n){if(1==n.u)return e=d.api.getVideoData(),g.ra(n,E4(d,e),2);f=n.B;if(!f)return n["return"]();h=f[0];d.u=h;g.I(d.element,"show-video-thumbnail-button");l=new g.V({G:"div",L:"ytp-impression-link-header",Z:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 YouTube"});l.ea(d.element);m=new g.V({G:"div",L:"ytp-impression-link-content",S:[{G:"div",L:"ytp-impression-link-metadata",S:[{G:"div",L:"ytp-impression-link-title",Z:h.title},{G:"div",L:"ytp-impression-link-views-and-duration",
Z:"{{views_and_duration}}"}]},{G:"div",L:"ytp-impression-link-thumbnail"}]});m.ea(d.element);F4(d,m,h);G4(d,m,h);d.show();n.u=0})})},fFa=function(a){g.Ue(a,function c(){var d=this,e,f,h;
return g.Aa(c,function(l){if(1==l.u)return g.ra(l,iFa(d),2);e=l.B;if(!e)return l["return"]();d.u=e;g.I(d.element,"show-channel-thumbnail-button");f=new g.V({G:"div",L:"ytp-impression-link-header",Z:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 YouTube"});f.ea(d.element);h=new g.V({G:"div",L:"ytp-impression-link-content",S:[{G:"div",L:"ytp-impression-link-metadata",S:[{G:"div",L:"ytp-impression-link-title",Z:e.Ho},{G:"div",L:"ytp-impression-link-subscribers",Z:e.expandedSubtitle}]},
{G:"div",L:"ytp-impression-link-thumbnail"}]});h.ea(d.element);F4(d,h,e);d.show();l.u=0})})},gFa=function(a){g.Ue(a,function c(){var d=this,e,f,h,l,m,n,p,r,t,w,x;
return g.Aa(c,function(y){if(1==y.u)return e=d,f=d.api.getVideoData(),g.ra(y,E4(d,f),2);h=y.B;if(!h)return y["return"]();l=h[0];d.u=l;g.I(d.element,"show-occlusion-video-thumbnail-button");m=new g.V({G:"div",L:"ytp-impression-link-header",Z:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 YouTube"});m.ea(d.element);n=new g.V({G:"div",L:"ytp-impression-link-content",S:[{G:"div",L:"ytp-impression-link-metadata",S:[{G:"div",L:"ytp-impression-link-title",Z:l.title},{G:"div",
L:"ytp-impression-link-author",Z:l.author},{G:"div",L:"ytp-impression-link-views",Z:"{{views}}"}]},{G:"div",L:"ytp-impression-link-thumbnail-and-duration",S:[{G:"div",L:"ytp-impression-link-thumbnail"},{G:"div",L:"ytp-impression-link-duration",Z:"{{duration}}"}]}]});n.ea(d.element);F4(d,n,l);G4(d,n,l);p=new g.V({G:"button",ia:["ytp-button","ytp-impression-link-close"],S:[{G:"div",ia:["ytp-impression-link-close-icon"],S:[DEa()]}]});p.ea(d.element);p.ua("click",function(D){e.hide();g.VM(e.api,e.element,
!1);D.stopPropagation()},d);
r=function(D){!g.q(D).next().value.isIntersecting&&e.element&&e.show()};
try{t={threshold:.8},w=new IntersectionObserver(r,t),x=document.querySelector("body"),w.observe(x)}catch(D){g.M(D)}y.u=0})})},hFa=function(a){g.Ue(a,function c(){var d=this,e,f,h,l,m,n;
return g.Aa(c,function(p){if(1==p.u)return e=d,f=d.api.getVideoData(),g.ra(p,E4(d,f),2);h=p.B;if(!h)return p["return"]();l=h[0];d.u=l;g.I(d.element,"show-video-thumbnail-expanding-button");d.R(d.element,"mouseenter",function(){g.I(e.element,"show-expanded-metadata");g.Bn(e.element,"show-collapsed-metadata")});
d.R(d.element,"mouseleave",function(){g.Bn(e.element,"show-expanded-metadata");g.I(e.element,"show-collapsed-metadata")});
m=new g.V({G:"div",L:"ytp-impression-link-header",Z:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e"});m.ea(d.element);n=new g.V({G:"div",L:"ytp-impression-link-content",S:[{G:"div",L:"ytp-impression-link-metadata",S:[{G:"div",L:"ytp-impression-link-title",Z:l.title},{G:"div",L:"ytp-impression-link-views-and-duration",Z:"{{views_and_duration}}"}]},{G:"div",L:"ytp-impression-link-thumbnail"}]});n.ea(d.element);F4(d,n,l);G4(d,n,l);
d.show();p.u=0})})},F4=function(a,b,c){a=g.R(a.api.T().experiments,"embeds_impression_link_channel_thumbnail")?c.Ye:c.Fd();
b.ga("ytp-impression-link-thumbnail").style.backgroundImage=a?"url("+a+")":""},G4=function(a,b,c){a=a.api.T();
var d="";c.isLivePlayback?d="\u0412 \u044d\u0444\u0438\u0440\u0435":c.lengthSeconds&&(d=g.IO(c.lengthSeconds));c=c.shortViewCount?c.shortViewCount:"";var e="";c&&d?e=c+" \u2022 "+d:c?e=c:d&&(e=d);g.R(a.experiments,"embeds_impression_link_occlusion")?b.update({views:c,duration:d}):b.update({views_and_duration:e})},jFa=function(a,b){return g.Ue(a,function d(){var e,f,h,l;
return g.Aa(d,function(m){if(1==m.u)return e=g.CU(),f={isEmbedPreview:!0,videoId:b.videoId},h=g.tU(g.ova),g.ra(m,g.qG(e,f,h),2);l=m.B;return m["return"](l)})})},E4=function(a,b){return g.Ue(a,function d(){var e=this,f,h,l,m,n,p;
return g.Aa(d,function(r){if(1==r.u)return f=e,g.ra(r,jFa(e,b),2);h=r.B;if(!h)return r["return"](null);l=e.api.T();m=new g.SE(l,{raw_watch_next_response:h});n=g.Ke(m.suggestions,function(t){return t&&!t.list});
return(p=g.Pc(n,function(t){t=g.mZ(l,t);g.C(f,t);return t}))&&0!==p.length?r["return"](p):r["return"](null)})})},iFa=function(a){return g.Ue(a,function c(){var d=this,e,f,h,l,m,n,p;
return g.Aa(c,function(r){if(1==r.u)return e=d.api.getVideoData(),g.ra(r,E4(d,e),2);if(3!=r.u){f=r.B;if(!f)return r["return"](null);h=e.Ho;l=f.filter(function(t){return null!==t&&t.author!==h});
return(m=l[0])?g.ra(r,jFa(d,m),3):r["return"](null)}n=r.B;if(!n)return r["return"](null);p=new g.SE(d.api.T(),{raw_watch_next_response:n});return r["return"](p)})})},H4=function(a){g.V.call(this,{G:"div",
L:"ytp-muted-autoplay-endscreen-overlay",S:[{G:"div",L:"ytp-muted-autoplay-end-panel",S:[{G:"div",L:"ytp-muted-autoplay-end-text",Z:"{{text}}"}]}]});this.api=a;this.B=this.ga("ytp-muted-autoplay-end-panel");this.u=new g.uX(this.api);g.C(this,this.u);this.u.ea(this.B,0);g.bX(this.api,this.element,this,52428);this.R(this.api,"presentingplayerstatechange",this.C);this.ua("click",this.onClick);this.hide()},I4=function(a){g.V.call(this,{G:"div",
L:"ytp-muted-autoplay-overlay",S:[{G:"div",L:"ytp-muted-autoplay-bottom-buttons",S:[{G:"button",ia:["ytp-muted-autoplay-equalizer","ytp-button"],S:[{G:"div",ia:["ytp-muted-autoplay-equalizer-icon"],S:[{G:"svg",U:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},S:[{G:"g",U:{fill:"#fff"},S:[{G:"rect",L:"ytp-equalizer-bar-left",U:{height:"9",width:"4",x:"1",y:"7"}},{G:"rect",L:"ytp-equalizer-bar-middle",U:{height:"14",width:"4",x:"6",y:"2"}},{G:"rect",L:"ytp-equalizer-bar-right",U:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.ga("ytp-muted-autoplay-bottom-buttons");this.ga("ytp-muted-autoplay-equalizer");this.C=new g.H(this.B,4E3,this);g.bX(a,this.element,this,39306);this.R(a,"presentingplayerstatechange",this.u);this.R(a,"onMutedAutoplayStarts",this.u);this.ua("click",this.onClick);this.hide()},J4=function(a,b){g.V.call(this,{G:"div",
L:"ytp-pause-overlay"});var c=this;this.api=a;this.N=b;this.animationDelay=1E3;this.B=new g.Sr(this);this.I=new g.GN(this,1E3,!1,100);this.D=[];this.u=[];this.F=0;this.K=!1;this.ba=0;this.title=new g.V({G:"h2",L:"ytp-related-title",Z:"{{title}}"});this.previous=new g.V({G:"button",ia:["ytp-button","ytp-previous"],U:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},
S:[g.bN()]});this.X=new y4(function(m){c.suggestions.element.scrollLeft=-m});
this.Y=this.tileWidth=this.C=0;this.next=new g.V({G:"button",ia:["ytp-button","ytp-next"],U:{"aria-label":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},S:[g.cN()]});this.expandButton=new g.V({G:"button",ia:["ytp-button","ytp-expand"],Z:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e"});g.C(this,this.B);
g.C(this,this.I);var d=a.T();"0"===d.controlsType&&g.I(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.V=d.B;g.C(this,this.title);this.title.ea(this.element);this.suggestions=new g.V({G:"div",L:"ytp-suggestions"});g.C(this,this.suggestions);this.suggestions.ea(this.element);g.C(this,this.previous);this.previous.ea(this.element);this.previous.ua("click",this.pK,this);var e=g.bB||g.rg?{style:"will-change: opacity"}:void 0;g.C(this,this.X);for(var f=0;16>f;f++){var h=new g.V({G:"a",L:"ytp-suggestion-link",
U:{href:"{{link}}",target:d.F,"aria-label":"{{aria_label}}"},S:[{G:"div",L:"ytp-suggestion-image"},{G:"div",L:"ytp-suggestion-overlay",U:e,S:[{G:"div",L:"ytp-suggestion-title",Z:"{{title}}"},{G:"div",L:"ytp-suggestion-author",Z:"{{author_and_views}}"},{G:"div",U:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",Z:"{{duration}}"}]}]});g.C(this,h);h.ea(this.suggestions.element);var l=h.ga("ytp-suggestion-link");g.E(l,"transitionDelay",f/20+"s");this.B.R(l,"click",g.Wa(this.qK,f));this.D.push(h)}g.C(this,
this.next);this.next.ea(this.element);this.next.ua("click",this.oK,this);d=new g.V({G:"button",ia:["ytp-button","ytp-collapse"],U:{"aria-label":"\u0421\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"},S:[DEa()]});g.C(this,d);d.ea(this.element);d.ua("click",this.cN,this);g.C(this,this.expandButton);this.expandButton.ea(this.element);this.expandButton.ua("click",this.dN,this);this.B.R(this.api,"appresize",this.Qa);this.B.R(this.api,"fullscreentoggled",
this.wj);this.B.R(this.api,"presentingplayerstatechange",this.Wb);this.B.R(this.api,"videodatachange",this.Pa);this.Qa(g.nG(this.api).getPlayerSize());this.Pa()},K4=function(a){var b=a.N.Gd()?32:16;
b=a.Y/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.C;var c=a.F-a.u.length*(a.tileWidth+8);g.J(a.element,"ytp-scroll-min",0<=b);g.J(a.element,"ytp-scroll-max",b<=c)},kFa=function(a){for(var b=0;b<a.u.length;b++){var c=a.u[b].Ka(),d=a.D[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.zAa.test(c.title)&&(d.ga("ytp-suggestion-title").dir="rtl");g.zAa.test(e)&&(d.ga("ytp-suggestion-author").dir="rtl");var f=void 0;c.isLivePlayback?f="\u0412 \u044d\u0444\u0438\u0440\u0435":f=c.lengthSeconds?g.IO(c.lengthSeconds):"";var h=c.ak();g.JB(a.api.T())&&(h=g.Ld(h,g.IT({},"emb_rel_pause")));d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.ko||null,is_live:c.isLivePlayback});d=d.ga("ytp-suggestion-image");c=c.Fd();d.style.backgroundImage=
c?"url("+c+")":""}for(;b<a.D.length;b++)a.D[b].element.style.display="none";K4(a)},L4=function(a){var b=a.T();
g.V.call(this,{G:"a",ia:["ytp-watermark","yt-uix-sessionlink"],U:{target:b.F,href:"{{url}}","aria-label":g.gJ("\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u044d\u0442\u043e \u0432\u0438\u0434\u0435\u043e \u043d\u0430\u00a0$WEBSITE",{WEBSITE:g.eC(b)}),"data-sessionlink":"feature=player-watermark"},S:[p4()]});this.api=a;this.u=null;this.B=!1;this.state=g.jI(a);g.bX(a,this.element,this,76758);this.R(a,"videodatachange",this.lz);this.R(a,"videodatachange",this.Pa);this.R(a,"presentingplayerstatechange",
this.uK);this.R(a,"appresize",this.Qa);b=this.state;this.state!==b&&(this.state=b);this.lz();this.Pa();this.Qa(g.nG(a).getPlayerSize())},M4=function(a){g.sS.call(this,a);
this.J=a;this.B=new g.Sr(this);g.C(this,this.B);this.load()};g.k=q4.prototype;g.k.EQ=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.ym.set(this.FB(c),[new EEa(a)])};
g.k.xB=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.FB(b);return this.ym.has(b)?this.ym.get(b):void 0};
g.k.xI=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.xB(b))&&b.length?b[0]:void 0};
g.k.clear=function(){this.ym.clear()};
g.k.FB=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};g.u(r4,q4);r4.prototype.C=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.xI(c);e&&(d=e.GA);this.EQ(d+a,c)};g.k=GEa.prototype;g.k.VF=function(){var a=this.B.values();a=[].concat(g.la(a)).filter(function(b){return b.ym.size});
a.length&&this.I.flush(a);IEa(a);this.C=0;this.u.enabled&&this.u.stop()};
g.k.LH=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.B.has(a)||this.B.set(a,new r4(a,c))};
g.k.VJ=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.WJ.apply(this,[a,1].concat(g.la(c)))};
g.k.WJ=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=HEa(this,a))&&e instanceof r4&&(e.C(b,d),this.u.enabled||this.u.start(),this.C++,this.C>=this.D&&this.VF())};
g.k.zF=function(a,b,c){for(var d=2;d<arguments.length;++d);HEa(this,a)};g.Ya(LEa,g.Bf);g.Ya(MEa,g.Bf);var KEa=[1];g.Ya(QEa,g.Bf);g.Ya(SEa,g.Bf);g.Ya(TEa,g.Bf);g.Ya(UEa,g.Bf);g.Ya(t4,g.Bf);g.Ya(v4,g.Bf);g.Ya(x4,g.Bf);var PEa=[3,6,4],REa=[[1,2]],VEa=[1],u4=[[1,2,3]],w4=[[1,2,3]];FEa.prototype.flush=function(a){a=void 0===a?[]:a;if(g.uo("enable_client_streamz_web")){a=g.q(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new QEa;c=g.Jf(c,1,b.D);for(var d=b,e=[],f=0;f<d.u.length;f++)e.push(d.u[f].RV);c=g.Jf(c,3,e||[]);d=[];e=[];f=g.q(b.ym.keys());for(var h=f.next();!h.done;h=f.next())e.push(h.value.split(","));for(f=0;f<e.length;f++){h=e[f];var l=b.B;for(var m=b.xB(h)||[],n=[],p=0;p<m.length;p++){var r=m[p];r=r&&r.GA;var t=new x4;switch(l){case 3:o4(t,1,w4[0],Number(r));
break;case 2:o4(t,2,w4[0],Number(r))}n.push(t)}l=n;for(m=0;m<l.length;m++){p=l[m];n=new t4;n.u||(n.u={});r=p?p.uf:p;n.u[2]=p;n=g.Jf(n,2,r);p=h;r=[];t=b;for(var w=[],x=0;x<t.u.length;x++)w.push(t.u[x].SV);t=w;for(w=0;w<t.length;w++){x=t[w];var y=p[w],D=new v4;switch(x){case 3:o4(D,1,u4[0],String(y));break;case 2:o4(D,2,u4[0],Number(y));break;case 1:o4(D,3,u4[0],"true"==y)}r.push(D)}CEa(n,1,r);d.push(n)}}CEa(c,4,d);d=b=new g.uf;e=g.Hf(c,1);null!=e&&j4(d,1,e);e=g.Hf(c,5);null!=e&&AEa(d,5,e);e=m4(c,SEa,
2);null!=e&&k4(d,2,e,YEa);e=g.Hf(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)j4(d,3,e[f]);e=g.Hf(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)AEa(d,6,e[f]);e=n4(c,t4,4);0<e.length&&l4(d,4,e,aFa);b=g.vf(b);b={serializedIncrementBatch:g.qf(b)};g.Lq("streamzIncremented",b)}}};var s4;g.u(y4,g.B);y4.prototype.start=function(a,b,c){this.from=a;this.u=b;this.duration=c;this.startTime=(0,g.O)();this.next()};
y4.prototype.next=function(){var a=(0,g.O)()-this.startTime;var b=this.B;a=BEa(b,a/this.duration);if(0==a)b=b.F;else if(1==a)b=b.P;else{var c=g.de(b.F,b.I,a),d=g.de(b.I,b.K,a);b=g.de(b.K,b.P,a);c=g.de(c,d,a);d=g.de(d,b,a);b=g.de(c,d,a)}b=g.be(b,0,1);this.callback((this.u-this.from)*b+this.from);1>b&&this.delay.start()};g.u(z4,g.V);g.k=z4.prototype;g.k.hide=function(){this.K=!0;g.V.prototype.hide.call(this)};
g.k.show=function(){this.K=!1;g.V.prototype.show.call(this)};
g.k.isHidden=function(){return this.K};
g.k.rK=function(){this.scrollTo(this.C-this.F)};
g.k.sK=function(){this.scrollTo(this.C+this.F)};
g.k.tK=function(a,b){var c=this.u[a],d=c.rd;if(g.wX(b,this.api,this.V,d||void 0)){var e=c.Ka().videoId;c=c.getPlaylistId();g.M0(this.api.app,e,d,c,void 0,void 0)}};
g.k.resize=function(a,b){var c=this.api.T(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.u.length,this.D.length);if(150>=Math.min(a.width,a.height)||0===h||!c.kb)this.hide();else{var l;if(e){var m=l=28;this.B=16}else this.B=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;l=a.width-(48+l+m);m=Math.ceil(l/150);m=Math.min(3,m);m=l/m-this.B;var r=Math.floor(m/d);b&&r+100>b&&50<m&&(r=Math.max(b,50/d),m=Math.ceil(l/(d*(r-100)+this.B)),m=l/m-this.B,r=Math.floor(m/
d));50>m||g.OW(this.api)?this.hide():this.show();for(d=0;d<h;d++){var t=this.D[d],w=t.ga("ytp-suggestion-image");w.style.width=m+"px";w.style.height=r+"px";t.ga("ytp-suggestion-title").style.width=m+"px";t.ga("ytp-suggestion-author").style.width=m+"px";t=t.ga("ytp-suggestion-duration");t.style.display=t&&100>m?"none":""}h=e+n+p+4;this.I=h+c+(r-f)/2;this.suggestions.element.style.height=r+h+"px";this.tileWidth=m;this.F=l;this.C=0;this.suggestions.element.scrollLeft=-0;A4(this)}};
g.k.Pa=function(){var a=this,b=this.api.getVideoData(),c=this.api.T();this.V=b.Jc?!1:c.B;if(b.suggestions){var d=g.Ke(b.suggestions,function(e){return e&&!e.list});
this.u=g.Pc(d,function(e){e=g.mZ(c,e);g.C(a,e);return e})}else this.u.length=0;
bFa(this);b.Jc?this.title.update({title:g.gJ('\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u043a\u0430\u043d\u0430\u043b\u0435 "$DNI_RELATED_CHANNEL"',{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u044d\u0442\u0438 \u0440\u043e\u043b\u0438\u043a\u0438"})};
g.k.scrollTo=function(a){a=g.be(a,this.F-this.u.length*(this.tileWidth+this.B),0);this.X.start(this.C,a,this.animationDelay);this.C=a;A4(this)};g.u(B4,g.BX);B4.prototype.show=function(){g.BX.prototype.show.call(this);cFa(this,g.nG(this.api).getPlayerSize())};
B4.prototype.resize=function(a){g.BX.prototype.resize.call(this,a);cFa(this,a);g.J(this.element,"related-on-error-overlay-visible",!this.u.isHidden())};
B4.prototype.B=function(a){g.BX.prototype.B.call(this,a);var b=this.api.getVideoData();if(g.R(this.api.T().experiments,"embed_parse_error_renderer_killswitch")||!b.eB&&!b.playerErrorMessageRenderer){var c;a.Uh&&(b.Fr?C4(b.Fr)?c=g.jE(b.Fr):c=g.CX(g.U(b.Fr)):c=g.CX(a.Uh),this.lc(c,"subreason"))}else(a=b.eB)?dFa(this,a):b.playerErrorMessageRenderer&&dFa(this,b.playerErrorMessageRenderer)};g.u(D4,g.V);D4.prototype.Jf=function(){g.jI(this.api).isCued()||(this.hide(),g.VM(this.api,this.element,!1))};
D4.prototype.D=function(){this.B=!0;this.hide();g.VM(this.api,this.element,!1)};
D4.prototype.onClick=function(a){var b=this.api.T(),c;g.R(b.experiments,"embeds_impression_link_channel_thumbnail")?c=g.uC(b)+this.u.Ri:g.R(b.experiments,"embeds_impression_link_call_to_action")?c=this.api.getVideoUrl():c=this.u.ak();b=this.api.T();b=g.R(b.experiments,"embeds_impression_link_call_to_action")?"emb_imp_woyt":g.R(b.experiments,"embeds_impression_link_video_thumbnail")?"emb_imp_rv":g.R(b.experiments,"embeds_impression_link_channel_thumbnail")?"emb_imp_rc":g.R(b.experiments,"embeds_impression_link_occlusion")?
"emb_imp_rv_oc":"emb_imp_rv_ex";c=g.Ld(c,g.IT({},b));g.xX(c,this.api,a);g.cX(this.api,this.element)};
D4.prototype.show=function(){g.jI(this.api).isCued()&&!this.B&&(g.V.prototype.show.call(this),g.UM(this.api,this.element)&&g.VM(this.api,this.element,!0))};g.u(H4,g.V);H4.prototype.C=function(){var a=g.jI(this.api),b=this.api.getVideoData();g.R(this.api.T().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.T(a,2)&&!this.Wa?(this.show(),this.u.show(),a=this.api.getVideoData(),this.wa("text",a.ND),g.J(this.element,"ytp-muted-autoplay-show-end-panel",!0),g.VM(this.api,this.element,this.Wa),this.api.va("onMutedAutoplayEnds")):this.hide())};
H4.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;a.Le();this.api.loadVideoById(a.videoId,b);g.cX(this.api,this.element);this.hide()};g.u(I4,g.V);I4.prototype.u=function(){var a=g.jI(this.api),b=this.api.getVideoData();g.R(this.api.T().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.T(a,2)?this.Wa||(g.V.prototype.show.call(this),this.C.start(),g.VM(this.api,this.element,this.Wa)):this.hide()};
I4.prototype.B=function(){g.J(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
I4.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;a.Le();this.api.loadVideoById(a.videoId,b);g.cX(this.api,this.element)};g.u(J4,g.V);g.k=J4.prototype;g.k.hide=function(){g.Bn(this.api.getRootNode(),"ytp-expand-pause-overlay");g.V.prototype.hide.call(this)};
g.k.cN=function(){this.K=!0;g.Bn(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.dN=function(){this.K=!1;g.I(this.api.getRootNode(),"ytp-expand-pause-overlay")};
g.k.oK=function(){this.scrollTo(this.C-this.F)};
g.k.pK=function(){this.scrollTo(this.C+this.F)};
g.k.qK=function(a,b){if(1E3>(0,g.O)()-this.ba)g.ip(b),document.activeElement.blur();else{var c=this.u[a],d=c.rd;if(g.wX(b,this.api,this.V,d||void 0)){var e=c.Ka().videoId;c=c.getPlaylistId();g.M0(this.api.app,e,d,c,void 0,void 0)}}};
g.k.wj=function(){this.Qa(g.nG(this.api).getPlayerSize())};
g.k.Wb=function(a){if(!(g.T(a.state,1)||g.T(a.state,16)||g.T(a.state,32))){var b=!g.R(this.api.T().experiments,"embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.T(a.state,2048);!g.T(a.state,4)||g.T(a.state,2)||b?this.I.hide():this.u.length&&(this.K||(g.I(this.api.getRootNode(),"ytp-expand-pause-overlay"),K4(this)),this.I.show(),this.ba=(0,g.O)())}};
g.k.Qa=function(a){var b=16/9,c=this.N.Gd();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.D.length;d++){var e=this.D[d].ga("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.Y=b;this.F=a;this.C=0;this.suggestions.element.scrollLeft=-0;K4(this)};
g.k.Pa=function(){var a=this,b=this.api.T(),c=this.api.getVideoData();this.V=c.Jc?!1:b.B;if(c.suggestions){var d=g.Ke(c.suggestions,function(e){return e&&!e.list});
this.u=g.Pc(d,function(e){e=g.mZ(b,e);g.C(a,e);return e})}else this.u.length=0;
kFa(this);c.Jc?this.title.update({title:g.gJ('\u0414\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e \u043d\u0430 \u043a\u0430\u043d\u0430\u043b\u0435 "$DNI_RELATED_CHANNEL"',{DNI_RELATED_CHANNEL:c.author})}):this.title.update({title:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e"})};
g.k.scrollTo=function(a){a=g.be(a,this.F-this.u.length*(this.tileWidth+8),0);this.X.start(this.C,a,this.animationDelay);this.C=a;K4(this)};g.u(L4,g.V);g.k=L4.prototype;g.k.lz=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).Jc,c=this.api.T();a=(a.mutedAutoplay||c.Za&&!g.T(this.state,2))&&!(b&&c.pfpChazalUi);g.NM(this,a);g.VM(this.api,this.element,a)};
g.k.uK=function(a){a=a.state;this.state!==a&&(this.state=a);this.lz()};
g.k.Pa=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.wa("url",a);this.u||(this.u=this.ua("click",this.onClick))}else this.u&&(this.wa("url",null),this.Db(this.u),this.u=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.JO(a),!1,!0,!0);g.xX(b,this.api,a);g.cX(this.api,this.element)};
g.k.Qa=function(a){if((a=480>a.width)&&!this.B||!a&&this.B){var b=new g.V(p4()),c=this.ga("ytp-watermark");g.J(c,"ytp-watermark-small",a);g.He(c);b.ea(c);this.B=a}};g.u(M4,g.sS);g.k=M4.prototype;g.k.Bh=function(){return!1};
g.k.create=function(){var a=this.J.T(),b=g.FW(this.J);a.kb&&(this.F=new J4(this.J,b),g.C(this,this.F),g.mP(this.J,this.F.element,4));g.R(a.experiments,"embeds_enable_muted_autoplay")&&(this.u=new I4(this.J),g.C(this,this.u),g.mP(this.J,this.u.element,4),this.D=new H4(this.J),g.C(this,this.D),g.mP(this.J,this.D.element,4));if(a.Za||this.u)this.watermark=new L4(this.J),g.C(this,this.watermark),g.mP(this.J,this.watermark.element,7);g.R(a.experiments,"embeds_impression_link")&&(this.C=new D4(this.J,b),
g.C(this,this.C),g.mP(this.J,this.C.element,7));this.B.R(this.J,"appresize",this.Qa);this.B.R(this.J,"presentingplayerstatechange",this.Jf);this.B.R(this.J,"videodatachange",this.jR);this.B.R(this.J,"onMutedAutoplayStarts",this.hO);this.Jd(g.jI(this.J));g.$W(this.player,"embed");g.R(a.experiments,"enable_cookie_reissue_iframe")&&a.hd&&!g.wq("__Secure-3PAPISID")&&((new JEa).u.VJ("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe"),a=g.Fe("IFRAME"),a.src="/signin?go=true",a.style.display=
"none",document.body.appendChild(a))};
g.k.Qa=function(){var a=g.nG(this.J).getPlayerSize();this.ld&&this.ld.resize(a)};
g.k.Jf=function(a){this.Jd(a.state)};
g.k.Jd=function(a){g.T(a,128)?(this.ld||(this.ld=new B4(this.J),g.C(this,this.ld),g.mP(this.J,this.ld.element,4)),this.ld.B(a.getData()),this.ld.show(),g.I(this.J.getRootNode(),"ytp-embed-error")):this.ld&&(this.ld.dispose(),this.ld=null,g.Bn(this.J.getRootNode(),"ytp-embed-error"))};
g.k.hO=function(){this.J.getVideoData().mutedAutoplay&&this.u&&this.watermark&&this.watermark.ea(this.u.bottomButtons,0)};
g.k.jR=function(){var a=this.J.getVideoData();this.watermark&&this.u&&!a.mutedAutoplay&&g.Me(this.u.element,this.watermark.element)&&g.mP(this.J,this.watermark.element,7)};g.mX.embed=M4;})(_yt_player);
