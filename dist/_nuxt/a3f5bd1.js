(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{263:function(t,e,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(103).default)("84333d56",content,!0,{sourceMap:!1})},264:function(t,e,r){"use strict";var n=r(11),o=r(1),c=r(3),d=r(105),f=r(19),l=r(14),v=r(191),m=r(40),_=r(104),h=r(190),N=r(4),x=r(73).f,y=r(33).f,I=r(17).f,C=r(265),E=r(266).trim,k="Number",w=o.Number,S=w.prototype,T=o.TypeError,A=c("".slice),L=c("".charCodeAt),O=function(t){var e=h(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,r,n,o,c,d,f,code,l=h(t,"number");if(_(l))throw T("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=E(l),43===(e=L(l,0))||45===e){if(88===(r=L(l,2))||120===r)return NaN}else if(48===e){switch(L(l,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+l}for(d=(c=A(l,2)).length,f=0;f<d;f++)if((code=L(c,f))<48||code>o)return NaN;return parseInt(c,n)}return+l};if(d(k,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var M,R=function(t){var e=arguments.length<1?0:w(O(t)),r=this;return m(S,r)&&N((function(){C(r)}))?v(Object(e),r,R):e},$=n?x(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;$.length>j;j++)l(w,M=$[j])&&!l(R,M)&&I(R,M,y(w,M));R.prototype=S,S.constructor=R,f(o,k,R)}},265:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},266:function(t,e,r){var n=r(3),o=r(22),c=r(12),d=r(267),f=n("".replace),l="["+d+"]",v=RegExp("^"+l+l+"*"),m=RegExp(l+l+"*$"),_=function(t){return function(e){var r=c(o(e));return 1&t&&(r=f(r,v,"")),2&t&&(r=f(r,m,"")),r}};t.exports={start:_(1),end:_(2),trim:_(3)}},267:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},268:function(t,e,r){"use strict";r(263)},269:function(t,e,r){var n=r(102)(!1);n.push([t.i,".card[data-v-4ff6e4e8]{border:2px solid #d3d3d3}.btn-orange[data-v-4ff6e4e8],.card[data-v-4ff6e4e8]:hover{border:2px solid orange}.btn-orange[data-v-4ff6e4e8]{background-color:orange}.card-image[data-v-4ff6e4e8]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:160px}",""]),t.exports=n},270:function(t,e,r){"use strict";r.r(e);r(264);var n={name:"CardComponent",props:{name:{type:String,required:!0},img:{type:String,required:!0},id:{type:Number,required:!0},breed:{type:String,required:!0}},methods:{goToDetails:function(){this.$router.push("/details/".concat(this.id))}}},o=(r(268),r(23)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",staticStyle:{width:"18rem"}},[r("div",{staticClass:"card-img-top card-image",style:{"background-image":"url("+t.img+")"}}),t._v(" "),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(t.name))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v("\n      "+t._s(t.breed)+"\n    ")]),t._v(" "),r("div",{staticClass:"btn btn-primary btn-orange",on:{click:function(e){return t.goToDetails()}}},[t._v("\n      See Details\n    ")])])])}),[],!1,null,"4ff6e4e8",null);e.default=component.exports},272:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(58),{name:"ListPage",components:{Card:r(270).default},data:function(){return{}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.get("/api/cats");case 3:return n=e.sent,data=n.data,e.abrupt("return",{catList:data});case 6:case"end":return e.stop()}}),e)})))()}}),c=r(23),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page container mt-5"},[r("h1",{staticClass:"display-4"},[t._v("List page")]),t._v(" "),r("div",{staticClass:"row mt-3"},t._l(t.catList,(function(t,e){return r("card",{key:"cat-index-"+e,staticClass:"col-sm-2 m-2",attrs:{id:t.id,name:t.name,img:t.img,breed:t.breed}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(270).default})}}]);