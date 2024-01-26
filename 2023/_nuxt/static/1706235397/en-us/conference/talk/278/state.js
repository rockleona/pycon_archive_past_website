window.__NUXT__=(function(a,b,c,d){return {staticAssetsBase:"\u002F2023\u002F_nuxt\u002Fstatic\u002F1706235397",layout:"default",error:c,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:278,begin_time:"2023-09-02T05:05:00Z",end_time:"2023-09-02T05:35:00Z",is_remote:b,location:"5-r1",youtube_id:d,title:"Spark Task Optimization Journey: How I Increased 10x Speed by Performance Tuning",category:"PRAC",language:"ZHZH",python_level:"INTERMEDIATE",recording_policy:a,abstract:"公司長期以來存在某些工作排程需要較長的執行時間，由於專案使用的資料表本身就較為肥大，大家很容易\"自然\"的就接受了這些排程需要較長執行時間、資源的現狀。然而隨著上線的工作排程數量的快速增加，系統負擔、效能的問題也就開始受到越來越多的重視。在盲目加大硬體資源的處理方案外，其實我們還可以從 spark的資源配置、pyspark參數設定以及程式邏輯等面向進行優化，讓工作排程能有最佳的執行效率，同時又不佔用過多的系統資源\r\n用說的很簡單，實際要開始優化程式時還是得先了解 spark 的運作邏輯，以及 pyspark 提供的 API 參數意義開始。在這次的演講中我將以公司某項工作排程為例，和大家分享我分析這項工作排程的思路，並說明我逐步測試、優化的過程，最終成功將排程的執行時間從 5 小時大幅縮短至 30 分鐘。希望通過這次的分享幫助資料科學家、商業分析師與資料工程師更有效率的完成手上的工作!",detailed_description:"雖然網路上已經有許多資料示範透過 pyspark 操作資料庫的基礎語法，然而這些方法在面對極度肥大的資料表時仍會面臨許多資源與效能上的問題，無法充分發揮 spark 分佈式運算與加速的威力，甚至還可能會造成額外的系統負擔。\r\n在這次的演講中我會先介紹幾種 python 中常見的操作資料庫的方式(sqoop, jaydebe, pyspark)與實際測試的結果，接著分別介紹 spark 的運作邏輯與環境配置方式，以及 pyspark 提供的操作資料庫 API 參數意義與影響，通過逐步的測試和優化來幫大家了解 spark 在處理任務的運作邏輯，並提供一些常見的 pyspark 問題解方和使用技巧，幫大家\r\nspark: executor nums, executor cores, memory, etc.\r\npyspark: PartitionNum, PartitionColumn, upperbound, lowerbound, fetch size, ect.",slide_link:"https:\u002F\u002Fspeakerdeck.com\u002Ftlyu0419\u002Fwhy-we-want-to-become-pycon-tw-volunteers",slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002F6vCfHeYisHgtWXAh3DwVCF",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FSk14UoQph",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Fprs\u002Fmedia\u002Fcache\u002F9c\u002F3a\u002F9c3a02f7b483fd6490dc5038c0aa445e.jpg",name:"游騰林",github_profile_url:"https:\u002F\u002Fgithub.com\u002Ftlyu0419",twitter_profile_url:d,facebook_profile_url:"https:\u002F\u002Fwww.facebook.com\u002Ftlyu0419",bio:"Hi, I'm a Data scientist from Cathay United Bank in Taiwan. I have over eight years of hands-on experience in large-scale backend and AI\u002FML technology applications in digital marketing and customer service."}],event_type:"talk"},relatedData:[],configs:{conferenceName:"PyCon TW",conferenceYear:"2023",conferenceDate:"2023-09-02",showSpeakingPage:b,showAboutStaffPage:a,showSchedulePage:a,showSponsorPage:b,showRegistrationPage:a,showEventOverviewPage:a,showEventsPage:a,showConferencePage:a,showVenuePage:a,showIndexSponsorSection:a,showIndexSecondaryBtn:b,aboutHideItems:["apacCommunity"],eventsHideItems:[],conferenceHideItems:[],registrationHideItems:[],venueHideItems:[]},i18n:{routeParams:{}}},serverRendered:a,routePath:"\u002Fen-us\u002Fconference\u002Ftalk\u002F278",config:{gtm:{id:void 0},_app:{basePath:"\u002F2023\u002F",assetsPath:"\u002F2023\u002F_nuxt\u002F",cdnURL:c}}}}(true,false,null,""));