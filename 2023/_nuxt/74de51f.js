(window.webpackJsonp=window.webpackJsonp||[]).push([[20,7],{524:function(t,e,o){var content=o(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("7b369a60",content,!0,{sourceMap:!1})},526:function(t,e,o){var r=o(50),n=o(26),d=/"/g;t.exports=function(t,e,o,l){var c=n(r(t)),f="<"+e;return""!==o&&(f+=" "+o+'="'+n(l).replace(d,"&quot;")+'"'),f+">"+c+"</"+e+">"}},527:function(t,e,o){var r=o(8);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},529:function(t,e,o){"use strict";var r=o(5),n=o(526);r({target:"String",proto:!0,forced:o(527)("small")},{small:function(){return n(this,"small","","")}})},530:function(t,e,o){"use strict";var r=o(81);e.a=Object(r.a)({"en-us":{pyconWelcome:"Welcome to PyCon TW 2023",pyconIntro:"PyCon Taiwan",achieveFirstStatLine:"Hold",achieveFirstEndLine:"years",achieveSecondStatLine:"Every Year",achieveSecondEndLine:"Speeches",achieveThirdStatLine:"Audience",achieveThirdEndLine:"People",sponsor:"Sponsor Us",sponsorList:"Sponsors",sponsorUs:"Be a Sponsor",bulletinList:"Latest Announcement",joinUs:"Join Us",callForProposals:"Call for Proposals",checkEvents:"Event Schedule",buyTickets:"Buy Tickets Now",typhoonInfoTitle:"Typhoon Preparedness Measures",typhoonInfo:"The event on September 2nd-3rd, 2023, depends on Taipei City Government's Closure Announcement. Stay updated via PyCon Taiwan official website and social media.{br}The organizer reserves the right to make final revisions, changes, interpretations of the event, and cancellations of “PyCon TW 2023”.{br}Let's say it:\"PyCon TW 2023 will definitely be held successfully!\""},"zh-hant":{pyconWelcome:"歡迎來到 PyCon TW 2023",pyconIntro:"PyCon Taiwan",achieveFirstStatLine:"持續舉辦",achieveFirstEndLine:"年",achieveSecondStatLine:"每年議程",achieveSecondEndLine:"場以上",achieveThirdStatLine:"參與會眾",achieveThirdEndLine:"人以上",sponsor:"贊助我們",sponsorList:"贊助夥伴",sponsorUs:"成為贊助夥伴",bulletinList:"最新公告",joinUs:"成為志工",callForProposals:"投稿募集",checkEvents:"查看議程",buyTickets:"立即購票",typhoonInfoTitle:"颱風因應措施",typhoonInfo:"本次活動期間 (2023 年 09 月 02 日至 03 日) 將依照「臺北市政府之停班公告」決定是否舉行，最新消息請關注「PyCon Taiwan 官網與社群媒體」之公告。{br}主辦單位保有對「PyCon TW 2023」的最終修改、變更、活動解釋及取消本活動之權利。{br}請跟我一起唸：PyCon TW 2023 一定可以順利舉行！"}})},531:function(t,e,o){"use strict";o.r(e);o(529);var r=o(530),n=o(44),d={i18n:r.a,name:"CoreTextButton",components:{ExtLink:n.a,LocaleLink:n.b},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},large:{type:Boolean,default:!1},small:{type:Boolean,default:!1},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0},uppercase:{type:Boolean,default:!1},bulletin:{type:Boolean,default:!1}},computed:{getLocale:function(){return this.$i18n.locale},coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--bordered":this.bordered,"--large":this.large,"--medium":this.medium,"--small":this.small,"--block":this.block,"--is-link":this.isLink,"--uppercase":this.uppercase,"--bulletin":this.bulletin,"--largeEn":"en-us"===this.getLocale}},medium:function(){return!this.large&&!this.small},isLink:function(){return this.href||this.to}}},l=(o(532),o(7)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.coreButtonClasses},[t.href?o("ext-link",{attrs:{href:t.href}},[o("span",[t._t("default")],2)]):t.to?o("locale-link",{attrs:{to:t.to,customized:""}},[o("span",[t._t("default")],2)]):t._t("default")],2)}),[],!1,null,"7bd0f299",null);e.default=component.exports},532:function(t,e,o){"use strict";o(524)},533:function(t,e,o){var r=o(18)((function(i){return i[1]}));r.push([t.i,'.core-button[data-v-7bd0f299]{position:relative}.core-button>a[data-v-7bd0f299]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;outline:2px solid transparent;outline-offset:2px}.core-button.--is-link>a[data-v-7bd0f299], .core-button[data-v-7bd0f299]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;outline:2px solid transparent;outline-offset:2px}.core-button.--is-link>a[data-v-7bd0f299],.core-button[data-v-7bd0f299]:not(.--is-link){line-height:1.25rem;border-radius:40px}.core-button[data-v-7bd0f299]:not(.--is-link){cursor:default;--tw-border-opacity:1;border-color:rgba(168, 180, 202, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(168, 180, 202, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.core-button.--uppercase>a[data-v-7bd0f299]{text-transform:uppercase}.core-button.--primary>a[data-v-7bd0f299]{z-index:10;border-width:0;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity));background-image:linear-gradient(276.15deg,#61c8a4 .74%,#548fcb 32.18%,#3849de 53.25%,#be3692 93.14%)}.core-button.--primary>a span[data-v-7bd0f299]{position:relative;z-index:30}.core-button.--primary>a[data-v-7bd0f299]:hover:after{opacity:1}.core-button.--primary.--large[data-v-7bd0f299]:not(.--is-link), .core-button.--primary.--large>a[data-v-7bd0f299]{font-weight:700}.core-button.--primary.--large[data-v-7bd0f299]:not(.--is-link),.core-button.--primary.--large>a[data-v-7bd0f299]{height:86px;font-size:28px;padding:24px 48px;min-width:128px}.core-button.--primary.--largeEn>a[data-v-7bd0f299]{min-width:323px}.core-button.--primary.--medium[data-v-7bd0f299]:not(.--is-link), .core-button.--primary.--medium>a[data-v-7bd0f299]{font-weight:600}.core-button.--primary.--medium[data-v-7bd0f299]:not(.--is-link),.core-button.--primary.--medium>a[data-v-7bd0f299]{height:68px;font-size:24px;padding:16px 48px;min-width:108px}.core-button.--primary.--small[data-v-7bd0f299]:not(.--is-link), .core-button.--primary.--small>a[data-v-7bd0f299]{height:3rem;font-size:1rem;line-height:1.5rem;font-weight:600}.core-button.--primary.--small[data-v-7bd0f299]:not(.--is-link),.core-button.--primary.--small>a[data-v-7bd0f299]{padding:10px 22px;min-width:80px;height:60px;font-size:20px}.core-button.--primary>a[data-v-7bd0f299]:after{position:absolute;left:0px;top:0px;height:100%;width:100%;z-index:20;opacity:0;border-radius:inherit;content:"";background-image:linear-gradient(96.26deg,#5fbeab 5.5%,#66b4e2 31.92%,#4454df 53.53%,#be3692 82.35%);transition:opacity .5s ease-out}.core-button.--bordered>a[data-v-7bd0f299]{z-index:10;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity));background:linear-gradient(#121023,#121023) padding-box,linear-gradient(276.15deg,#61c8a4 .74%,#548fcb 32.18%,#3849de 53.25%,#be3692 93.14%) border-box;border:5px solid transparent;border-radius:40px}.core-button.--bordered>a span[data-v-7bd0f299]{position:relative;z-index:30}.core-button.--bordered>a[data-v-7bd0f299]:hover:after{opacity:1}.core-button.--bordered.--large[data-v-7bd0f299]:not(.--is-link), .core-button.--bordered.--large>a[data-v-7bd0f299]{font-weight:700}.core-button.--bordered.--large[data-v-7bd0f299]:not(.--is-link),.core-button.--bordered.--large>a[data-v-7bd0f299]{height:86px;font-size:28px;padding:24px 48px;min-width:128px}.core-button.--bordered.--largeEn>a[data-v-7bd0f299]{min-width:323px}.core-button.--bordered.--medium[data-v-7bd0f299]:not(.--is-link), .core-button.--bordered.--medium>a[data-v-7bd0f299]{font-weight:600}.core-button.--bordered.--medium[data-v-7bd0f299]:not(.--is-link),.core-button.--bordered.--medium>a[data-v-7bd0f299]{height:68px;font-size:24px;padding:16px 48px;min-width:108px}.core-button.--bordered.--small[data-v-7bd0f299]:not(.--is-link), .core-button.--bordered.--small>a[data-v-7bd0f299]{height:3rem;font-size:1rem;line-height:1.5rem;font-weight:600}.core-button.--bordered.--small[data-v-7bd0f299]:not(.--is-link),.core-button.--bordered.--small>a[data-v-7bd0f299]{padding:10px 22px;min-width:80px;height:60px;font-size:20px}.core-button.--bordered>a[data-v-7bd0f299]:after{position:absolute;left:0px;top:0px;height:100%;width:100%;z-index:20;opacity:0;border-radius:inherit;content:"";background:linear-gradient(#121023,#121023) padding-box,linear-gradient(96.26deg,#5fbeab 5.5%,#66b4e2 31.92%,#4454df 53.53%,#be3692 82.35%) border-box;border:5px solid transparent;transition:opacity .5s ease-out}.core-button.--secondary>a[data-v-7bd0f299]{z-index:10;--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));background-image:none}.core-button.--secondary>a span[data-v-7bd0f299]{position:relative;z-index:30;--tw-text-opacity:1;color:rgba(26, 26, 48, var(--tw-text-opacity))}.core-button.--secondary>a:hover span[data-v-7bd0f299]{--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}.core-button.--secondary>a[data-v-7bd0f299]:hover:after{opacity:1}.core-button.--secondary.--large[data-v-7bd0f299]:not(.--is-link), .core-button.--secondary.--large>a[data-v-7bd0f299]{font-weight:700}.core-button.--secondary.--large[data-v-7bd0f299]:not(.--is-link),.core-button.--secondary.--large>a[data-v-7bd0f299]{height:57px;font-size:18px;padding:16px 36px}.core-button.--secondary.--medium[data-v-7bd0f299]:not(.--is-link), .core-button.--secondary.--medium>a[data-v-7bd0f299], .core-button.--secondary.--small[data-v-7bd0f299]:not(.--is-link), .core-button.--secondary.--small>a[data-v-7bd0f299]{font-weight:700}.core-button.--secondary.--medium[data-v-7bd0f299]:not(.--is-link),.core-button.--secondary.--medium>a[data-v-7bd0f299],.core-button.--secondary.--small[data-v-7bd0f299]:not(.--is-link),.core-button.--secondary.--small>a[data-v-7bd0f299]{height:42px;font-size:20px;padding:10px 22px}.core-button.--secondary>a[data-v-7bd0f299]:after{position:absolute;left:0px;top:0px;height:100%;width:100%;--tw-border-opacity:1;border-color:rgba(218, 139, 220, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(26, 26, 48, var(--tw-bg-opacity));z-index:20;opacity:0;content:"";background-image:none;border-radius:inherit;transition:opacity .5s ease-out}.core-button.--secondary.--medium>a[data-v-7bd0f299]:after,.core-button.--secondary.--small>a[data-v-7bd0f299]:after{border-width:3px}.core-button.--secondary.--large>a[data-v-7bd0f299]:after{border-width:2px}.core-button.--medium.--bulletin.--is-link>a[data-v-7bd0f299],.core-button.--medium.--bulletin[data-v-7bd0f299]:not(.--is-link){border-width:3px}',""]),r.locals={},t.exports=r},540:function(t,e,o){var content=o(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("0fbbaa4a",content,!0,{sourceMap:!1})},549:function(t,e,o){"use strict";o(540)},550:function(t,e,o){var r=o(18)((function(i){return i[1]}));r.push([t.i,".modal[data-v-af04c12e]{position:fixed;left:0px;top:0px;z-index:9998;display:flex;height:100vh;width:100%;align-items:center;justify-content:center;background-color:rgba(18,16,35,.6);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.closingArea[data-v-af04c12e]{position:absolute;z-index:9999;height:100%;width:100%}.lightBox[data-v-af04c12e]{position:relative;display:flex;width:91.666667%;flex-direction:column;border-radius:1.5rem;border-width:3px;--tw-border-opacity:1;border-color:rgba(195, 134, 174, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(18, 16, 35, var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:1.25rem;padding-bottom:1.25rem;z-index:10000}@media (min-width: 768px){.lightBox[data-v-af04c12e]{width:80%}.lightBox[data-v-af04c12e]{max-width:42rem}.lightBox[data-v-af04c12e]{border-width:2px}.lightBox[data-v-af04c12e]{padding-left:3rem;padding-right:3rem}.lightBox[data-v-af04c12e]{padding-bottom:1.5rem}.lightBox[data-v-af04c12e]{padding-top:3.5rem}}.lightBox__closeButtonContainer[data-v-af04c12e]{position:absolute;right:17px;top:17px;margin-left:auto;display:flex;cursor:pointer;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity))}@media (min-width:768px){.lightBox__closeButtonContainer[data-v-af04c12e]{right:38.5px}.lightBox__closeButtonContainer[data-v-af04c12e]{top:39.25px}}.lightBox__closeButton[data-v-af04c12e]{height:1.25rem;width:1.25rem}.lightBox__photo__box[data-v-af04c12e]{position:relative;margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px;display:flex}.lightBox__photo[data-v-af04c12e]{height:4rem;width:4rem}@media (min-width: 768px){.lightBox__photo[data-v-af04c12e]{height:6rem}.lightBox__photo[data-v-af04c12e]{width:6rem}}.lightBox__photo[data-v-af04c12e]{position:relative;margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:1rem;transform:translateX(-20px)}.lightBox__photo[data-v-af04c12e]:first-of-type{transform:translateX(0)}.lightBox__photo>img[data-v-af04c12e]{position:absolute;border-radius:inherit;-o-object-fit:contain;object-fit:contain;width:calc(100% - 10px)}.img__bg[data-v-af04c12e]{--tw-bg-opacity:1;background-color:rgba(247, 246, 254, var(--tw-bg-opacity))}.lightBox__header[data-v-af04c12e]{display:flex;flex-direction:column;align-items:center}.lightBox__title[data-v-af04c12e]{margin-top:0.75rem;font-family:Noto Serif TC, -apple-system, serif;font-size:1.125rem;line-height:1.75rem;font-weight:600}@media (min-width: 768px){.lightBox__title[data-v-af04c12e]{margin-top:1.5rem}.lightBox__title[data-v-af04c12e]{font-size:1.25rem;line-height:1.75rem}}.lightBox__intro[data-v-af04c12e]{margin-top:0.875rem;display:flex;flex-direction:column;overflow-y:auto;font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-size:1rem;line-height:1.5rem;font-weight:400;max-height:10rem;white-space:pre-line}@media (min-width: 768px){.lightBox__intro[data-v-af04c12e]{margin-top:1rem}.lightBox__intro[data-v-af04c12e]{font-size:1.125rem;line-height:1.75rem}}.lightBox__buttons[data-v-af04c12e]{margin-left:auto;margin-right:auto;margin-top:1.5rem}@media (min-width: 768px){.lightBox__buttons[data-v-af04c12e]{margin-top:1.5rem;margin-bottom:1.5rem}}",""]),r.locals={},t.exports=r},557:function(t,e,o){"use strict";o.r(e);var r=o(81),n={i18n:Object(r.a)({"en-us":{website:"Website"},"zh-hant":{website:"官方網站"}}),name:"Modal",components:{TextButton:o(531).default},props:{value:{type:Boolean,default:!1},imgUrls:{type:[Array,String],default:""},imgBg:{type:Boolean,default:!1},name:{type:String,default:""},intro:{type:String,default:""},websiteUrl:{type:String,default:""},description:{type:Array,default:function(){return[]}}},data:function(){return{shouldShowModal:this.value}},watch:{value:function(t){this.shouldShowModal=t}},methods:{close:function(){this.shouldShowModal=!1,this.$emit("input",!1)},getImgUrlArr:function(){var t=[];return!0===Array.isArray(this.imgUrls)?t=this.imgUrls:t.push(this.imgUrls),t}}},d=(o(549),o(7)),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowModal,expression:"shouldShowModal"}],staticClass:"modal"},[o("div",{staticClass:"closingArea",on:{click:t.close}}),t._v(" "),o("div",{staticClass:"lightBox"},[o("div",{staticClass:"lightBox__closeButtonContainer",on:{click:t.close}},[o("fa",{staticClass:"lightBox__closeButton",attrs:{icon:"times"}})],1),t._v(" "),o("div",{staticClass:"lightBox__photo__box"},t._l(t.getImgUrlArr(),(function(e){return o("div",{key:e,staticClass:"lightBox__photo",class:{img__bg:t.imgBg}},[o("img",{attrs:{src:e,alt:"photo"}})])})),0),t._v(" "),o("div",{staticClass:"lightBox__header"},[o("h1",{staticClass:"lightBox__title"},[t._v("\n                "+t._s(t.name)+"\n            ")])]),t._v(" "),o("div",{staticClass:"lightBox__intro"},[o("p",{staticClass:"text-sm"},[t._v(t._s(t.intro))]),t._v(" "),t._l(t.description,(function(e){return o("div",{key:e.id},t._l(e,(function(line){return o("p",{key:line.id,staticClass:"text-sm"},[t._v("\n                    "+t._s(line)+"\n                ")])})),0)}))],2),t._v(" "),t.websiteUrl?o("div",{staticClass:"lightBox__buttons"},[o("text-button",{attrs:{href:t.websiteUrl,secondary:!0,primary:!1}},[t._v(t._s(t.$t("website")))])],1):t._e()])])}),[],!1,null,"af04c12e",null);e.default=component.exports}}]);