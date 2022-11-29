window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002F2021\u002F_nuxt\u002Fstatic\u002F1671038722",layout:"default",error:a,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:193,begin_time:"2021-10-03T05:55:00Z",end_time:"2021-10-03T06:25:00Z",is_remote:false,location:"6-r2",youtube_id:"urOLJqX0lZ0",title:"嫌 Django 的 Validator 不好用 !?  不如自幹一個",category:"WEB",language:"ZHEN",python_level:"INTERMEDIATE",recording_policy:b,abstract:"Django Validator 可以是資料在進入 DB 前最終的守門員，但難道我們必須走到最後一步(準備寫入 DB)才能發現外部傳來的資料沒有符合規範嗎？ 若之前業務邏輯已觸碰髒資料而導致問題, 我們是否要在程式碼裡面加上許多錯誤處理? 這樣的問題在引入 DRF(Django Rest Framework)的 ModelSerializer 後會有解決辦法嗎？\r\n\r\n我希望透過介紹 Django Validator\u002FSerializer 的設計目的與使用時機, 並引出在公司專案內使用上的不便之處.\r\n如果上述各種方法都有痛點, 那不如就自做一套 HTTP request validation 的機制吧 !\r\n\r\n想要達成哪些目標 ?\r\n1. 夠簡單用, 且依賴低\r\n2. 不只在 Django Framework 內可用, 單純 Python 函式參數驗證也能使用\r\n3. 便於日後製作 API spec document\r\n4. 容易擴展新的驗證條件\r\n5. 盡可能 functional programming (純粹爽)\r\n\r\n向各位介紹 HARDCORE - \"SPEC\"",detailed_description:"Django framework 一開始誕生的主要的目標是為了簡化以資料庫為驅動的網站開發, 實際使用上則是將架構分成 Template\u002FView\u002FModel 三大區塊並做直接的串接. 這也讓其設計的 Serializer 系統著重在不同資料類型(xml\u002Fymal\u002Fjson\u002Fpython\u002Fqueryset)的序列化轉換而忽略了驗證資料的合規性. 而其 Validator 的資料驗證系統只著重在 a) 資料進入資料庫欄位時的驗證 b) 將 Template 表單欄位輸入值轉換成 view 內變數時的驗證. 這產生了兩個問題 1) 無法針對 GET 使用的 query paramerter 進行驗證 2) Validator 必須搭配表單 (Form) 使用, 等同於各欄位設計必須基於 Field, 才能將 validator 植入 Field 的 default_validators list 內.\r\n\r\n上述的使用情境與限制, 無法充分地滿足公司內部專案的需求, 現實的狀況是當專案爆長, 許多頁面開始利用前端框架進行渲染, template 上不一定會使用 form; 而後端更引入 DRF, 使得 API 的設計規範出現更多分歧(function v.s view class v.s. APIView-like), ModelSerializer 的出現導致工程師容易在 APIView 內濫用 `serializer.is_valid` 作為 API request 與資料進入 model 的唯一檢查手段.  久之, 當 view 裡面的商業邏輯越來越多, 但卻都希望勁量靠近圍繞著 serializer 來確保使用資料合乎規範, 程式碼耦合性變高, 越難職責切割, 開始容易疊床架屋...\r\n\r\n幾經思考, 決定明確將 API 設計方向切成數個部分, \r\n1. API 進入點部分\r\n2. 商業邏輯部分\r\n3. API 返回值部分\r\n\r\n第一部分: API 進入點.\r\n這裡會有 HTTP request 透過 view 的 `get\u002Fpost` function 被傳入, 我們可以在此處進行所有參數的驗證.\r\n一來避免錯誤或惡意的參數在接下來的程式碼中被使用導致不預期的錯誤, 二來儘早參數驗證也能減少後面不必要的檢查程式碼.\r\n\r\n第二部分: 商業邏輯部分\r\n此處可以放心將參數拿出來使用, 並且專注在商業邏輯.\r\n\r\n第三部分: 將上述產生的結果, 經由客製化的 response serializer 轉換成前端使用的資料格式.\r\n\r\n這裡可以看出另一個問題, DRF APIView 的設計只讓使用者指定一個 serializer class, 但其實這三個部分都有需要做類似的事情而且欄位可能不同. (題外話)\r\n\r\n於是我們專注在第一部分, 將 View\u002FAPIView 的 HTTP method 介面做了分析, 概念上是將資料( `request.GET\u002Frequest.POST` (Django View) 或是 `request.query_params, request.data` (DRF APIView)) 從 request 截出, 進入參數驗證流程, 將驗證結果(成功或失敗)收集起來, 並根據例外優先權來決定要回傳哪個錯誤.\r\n更多細節介紹經會透過投影片, 用程式碼的方式來解講.",slide_link:c,slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002Fuypsfqvw",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FH1d5N45Mt\u002Fedit",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F4d\u002F44\u002F4d44f605f1b5bfe6d32e3c276bcb7755.jpg",name:"Kilik Kuo",github_profile_url:"https:\u002F\u002Fgithub.com\u002Fkilikkuo",twitter_profile_url:c,facebook_profile_url:"https:\u002F\u002Fwww.facebook.com\u002Fkilik.kuo",bio:"改變自己先, 影響世界後.\r\n\r\nhttps:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fkilik-kuo-3923a454\u002F"}],event_type:"talk"},i18n:{routeParams:{}}},serverRendered:b,routePath:"\u002Fen-us\u002Fconference\u002Ftalk\u002F193",config:{gtm:{id:void 0},_app:{basePath:"\u002F2021\u002F",assetsPath:"\u002F2021\u002F_nuxt\u002F",cdnURL:a}}}}(null,true,""));