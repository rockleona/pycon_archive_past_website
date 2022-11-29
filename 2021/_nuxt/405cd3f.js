(window.webpackJsonp=window.webpackJsonp||[]).push([[39,36],{478:function(t,e,o){"use strict";o.r(e);var n=o(16),r={name:"ScheduleBlock",components:{LocaleLink:o(107).default},props:{primary:{type:Boolean,default:!1},secondary:{type:Boolean,default:!1},tertiary:{type:Boolean,default:!1},active:{type:Boolean,default:!1},mini:{type:Boolean,default:!1},textAlignCenter:{type:Boolean,default:!0},paddingX:{type:String,default:"px-2"},paddingY:{type:String,default:"py-3.5"},to:{type:String,default:""}},data:function(){return{isHovering:!1}},computed:{transparent:function(){return!this.primary&&!this.secondary&&!this.tertiary},classObject:function(){var t;return t={scheduleBlock:!0,"-primary":this.primary,"-secondary":this.secondary,"-tertiary":this.tertiary,"-active":this.active,"-mini":this.mini,"-transparent":this.transparent,"text-center":this.textAlignCenter,"cursor-pointer":this.primary,hover:this.isHovering},Object(n.a)(t,this.paddingX,!0),Object(n.a)(t,this.paddingY,!0),t}},methods:{onClick:function(t){this.$emit("click",t)},setHoveringState:function(){this.isHovering=!0},removeHoveringState:function(){this.isHovering=!1}}},c=(o(495),o(6)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.classObject,on:{click:t.onClick}},[t.to?o("locale-link",{attrs:{to:t.to,customized:""},on:{mouseenter:t.setHoveringState,mouseleave:t.removeHoveringState}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"69bf1442",null);e.default=component.exports},486:function(t,e,o){var content=o(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("1f8cf1d0",content,!0,{sourceMap:!1})},495:function(t,e,o){"use strict";o(486)},496:function(t,e,o){var n=o(18)((function(i){return i[1]}));n.push([t.i,".scheduleBlock[data-v-69bf1442]{position:relative;font-family:Noto Serif TC, -apple-system, serif;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;min-width:120px;border-radius:10px}.scheduleBlock.-mini[data-v-69bf1442],.scheduleBlock.-transparent[data-v-69bf1442]{min-width:unset}.scheduleBlock.-primary.-active[data-v-69bf1442]{color:#c7c7c7;background-color:#354970}.scheduleBlock.-primary.-active.hover[data-v-69bf1442]{color:#000;background-color:#d1ac23}.scheduleBlock.-primary[data-v-69bf1442]:not(.-active):hover{color:#7568f6}.scheduleBlock.-secondary[data-v-69bf1442]{color:#c2a53a;background-color:rgba(6,35,85,.8)}.scheduleBlock.-secondary[data-v-69bf1442]:active{color:#d1ac23;background-color:rgba(31,63,92,.8)}.scheduleBlock.-tertiary[data-v-69bf1442]{color:#d1ac23;background-color:#243f73}.scheduleBlock.-mini[data-v-69bf1442]{font-size:0.75rem;line-height:1rem}",""]),n.locals={},t.exports=n},503:function(t,e,o){t.exports=o.p+"img/ENEN.26dc887.svg"},504:function(t,e,o){t.exports=o.p+"img/ZHEN.61dbcf2.svg"},505:function(t,e,o){t.exports=o.p+"img/ZHZH.35289a5.svg"},506:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bTEuMDg4IDMuNzNsLTEuNjUxLTIuNzNINy4zNDNMNS42OSAxNC4zMWgxMi41MTR6TTEwLjUwMyAzLjI2N2wuMDEzLS4wMmMuNjU5LS45OTcgMi4yMDUtLjk5NyAyLjg3Ny4wMmwzLjc3MyA2LjMzOEg2LjczbDMuNzczLTYuMzM4em0yLjA0My41MzFjLS4yNjItLjM5Ni0uOTIzLS4zOTktMS4xOS0uMDA4TDguNDg4IDguNjA2aDYuOTE4TDEyLjU0NyAzLjh6bTguMjY0IDEyLjkwNmwxLjc2NCAyLjM3YTEgMSAwIDAgMS0uODAyIDEuNTk3SDIuMThhMSAxIDAgMCAxLS44MS0xLjU4NWwxLjcxOC0yLjM4MkgyMC44MXoiIC8+Cjwvc3ZnPg=="},507:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptMS4xOTYuNTUyYy0uMDY0LS4wOTctLjI4MS0uMS0uMzU1LS4wMUw5LjM2OSA4LjEwN2g1LjE1OWwtMi4zOTktNC4wMzF6bTguNjggMTIuNjNsMS43NjUgMi4zN2ExIDEgMCAwIDEtLjgwMiAxLjU5N0gyLjE4YTEgMSAwIDAgMS0uODEtMS41ODVsMS43MTgtMi4zODJIMjAuODF6IiAvPgo8L3N2Zz4="},508:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptOS44NzcgMTMuMTgybDEuNzY0IDIuMzdhMSAxIDAgMCAxLS44MDIgMS41OTdIMi4xOGExIDEgMCAwIDEtLjgxLTEuNTg1bDEuNzE4LTIuMzgySDIwLjgxeiIgLz4KPC9zdmc+"},532:function(t,e,o){var content=o(640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("f09e78d0",content,!0,{sourceMap:!1})},639:function(t,e,o){"use strict";o(532)},640:function(t,e,o){var n=o(18)((function(i){return i[1]}));n.push([t.i,".scheduleEvent__context[data-v-02968c86]{top:132px}.scheduleEvent__icon>img[data-v-02968c86]{display:inline;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;filter:brightness(0) invert(1)}.scheduleEvent__context:hover>.scheduleEvent__icon>img[data-v-02968c86]{filter:brightness(0)}",""]),n.locals={},t.exports=n},685:function(t,e,o){"use strict";o.r(e);var n=o(35),r=(o(45),o(108),o(44),o(30),o(38),o(87),{name:"ScheduleEvent",components:{ScheduleBlock:o(478).default},props:{value:{type:void 0,default:function(){return{room:"",event_id:0,event_type:"Type",title:"Title",speakers:[],is_remote:!1,recording_policy:!1,break_event:!1,language:"",python_level:"",begin_time:"",end_time:""}}},timelineBegin:{type:String,default:"08:30"},inList:{type:Boolean,default:!1}},data:function(){var t="HH:mm";return{format:t,options:{outputFormat:t},startPoint:this.$parseDate(this.$padTimezone(this.timelineBegin)),icon:{lang:{ENEN:o(503),ZHEN:o(504),ZHZH:o(505)},level:{NOVICE:o(506),INTERMEDIATE:o(507),EXPERIENCED:o(508)}}}},computed:{isCustomEvent:function(){return"custom"===this.value.event_type},textAlignCenter:function(){return["custom","keynote"].includes(this.value.event_type)},byLine:function(){var t=this;return this.value.speakers.map((function(e){return t.getValueByLocale(e)})).join(", ")},duration:function(){var t=this.$datetimeToString(this.$padTimezone(this.value.begin_time),this.options),e=this.$datetimeToString(this.$padTimezone(this.value.end_time),this.options);return"".concat(t," ~ ").concat(e)},roomClass:function(){return"room-".concat(this.value.room)},classes:function(){return["scheduleEvent","p-0",this.roomClass]},styles:function(){if(!this.inList)return{gridRowStart:this.getGridRow(this.value.begin_time),gridRowEnd:this.getGridRow(this.value.end_time)}},eventPagePath:function(){var t=this.value,e=t.event_type,o=t.event_id,n=t.speakers;if("keynote"===e){var r=n[0].en_us.split(" ").join("_");return"/conference/keynotes#".concat(r)}return["talk","tutorial","sponsored"].includes(e)?"/conference/".concat(e,"/").concat(o,"/"):""}},methods:{getGridRow:function(t){var time=this.$padTimezone(t),e=this.$parseDate(time).diff(this.startPoint,"minute");return parseInt("".concat(e/5),10)+1},getValueByLocale:function(data){if("object"===Object(n.a)(data)){return data[{"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]]}return data}}}),c=(o(639),o(6)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("schedule-block",{class:t.classes,style:t.styles,attrs:{"text-align-center":t.textAlignCenter,primary:!t.isCustomEvent,secondary:t.isCustomEvent,to:t.eventPagePath,active:""}},[t.$slots.prepend?o("div",{staticClass:"scheduleEvent__prepend flex"},[t._t("prepend")],2):t._e(),t._v(" "),o("div",{staticClass:"scheduleEvent__context sticky"},[o("div",{staticClass:"font-bold"},[t._v(t._s(t.getValueByLocale(t.value.title)))]),t._v(" "),t.isCustomEvent?t._e():o("br"),t._v(" "),t.byLine?o("div",{staticClass:"font-medium text-sm"},[t._v("by "+t._s(t.byLine))]):t._e(),t._v(" "),o("div",{staticClass:"scheduleEvent__icon"},[o("img",{attrs:{src:t.icon.level[t.value.python_level]}}),t._v(" "),o("img",{attrs:{src:t.icon.lang[t.value.language]}})]),t._v(" "),t.duration?o("div",{staticClass:"font-medium text-sm"},[t._v("\n            "+t._s(t.duration)+"\n        ")]):t._e()])])}),[],!1,null,"02968c86",null);e.default=component.exports;installComponents(component,{ScheduleBlock:o(478).default})}}]);