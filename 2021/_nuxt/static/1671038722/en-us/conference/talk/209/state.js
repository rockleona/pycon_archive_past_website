window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002F2021\u002F_nuxt\u002Fstatic\u002F1671038722",layout:"default",error:a,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:209,begin_time:"2021-10-03T05:00:00Z",end_time:"2021-10-03T05:45:00Z",is_remote:false,location:"5-r1",youtube_id:"iRGEG-Lft40",title:"用Python刻一個深度學習圖片重點裁切系統 (Implementation of a deep learning-based saliency detection system by Python)",category:"ML",language:"ZHEN",python_level:"INTERMEDIATE",recording_policy:b,abstract:"在現代社群媒體興起下，許多網站、app都能允許使用者上傳圖片與文字發布貼文，然而圖片\u002F照片大小不一很容易使頁面排版混亂，要求使用者每次上傳時都手動裁切也非常耗時，而通常圖片都隱含著重點區域，本演講將講述如何以python實作、應用已開源的深度學習模型來做出圖片自動裁切系統。本演講將會簡單引入深度學習，接著分享三個開源的相關模型(圖片重點、臉、文字)細節、單一使用的缺點、如何疊加三個模型來達到最好的效果，而過程中也會說明實作方法。",detailed_description:"整體而言，本演講將會介紹三個以python開發的模型(或有python接口)以及其開源專案，並舉出單一使用缺點及如何同時使用達到最佳效果\r\n1. Salient object detection (https:\u002F\u002Fgithub.com\u002Fsairajk\u002FPyTorch-Pyramid-Feature-Attention-Network-for-Saliency-Detection)\r\nZhao, T., & Wu, X. (2019). Pyramid feature attention network for saliency detection. In Proceedings of the IEEE\u002FCVF Conference on Computer Vision and Pattern Recognition (pp. 3085-3094).\r\n2. Face recognition (https:\u002F\u002Fgithub.com\u002Fageitgey\u002Fface_recognition)\r\n3. Chinese OCR (https:\u002F\u002Fgithub.com\u002FDayBreak-u\u002Fchineseocr_lite)\r\nwith PSENet (Wang, W., Xie, E., Li, X., Hou, W., Lu, T., Yu, G., & Shao, S. (2019). Shape robust text detection with progressive scale expansion network. In Proceedings of the IEEE\u002FCVF Conference on Computer Vision and Pattern Recognition (pp. 9336-9345).)\r\n\r\n**以上模型皆已訓練完畢並也提供了所有參數權重，使用者僅須從github clone下來或是從PyPI安裝使用，不須花時間重新訓練模型，故可以很快將整個架構建起來。**\r\n\r\n演講過程首先先提出許多社群媒體有圖片裁切需求但不可能在使用者上傳圖片時都有人工幫忙裁切，因此有一個自動裁切系統將會有所助益。然而若單一使用Salient object detection模型(previous work)，那結果會忽略許多文字且著重奇怪的物件，故後續會需要加入臉部與文字偵測，藉由三者的輸出以不同權重疊加，最後利用dynamic programming計算疊加權重最大的矩陣區域，來得到最終裁切結果，另外會分享在不同情境下三個權重該如何調整。\r\n\r\n**本演講也會在介紹每個模型時說明如何以python實作及使用，整個大專案屆時將會提供code置於github上讓會眾可以直接使用或參考。**",slide_link:c,slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002F5ukyqu8o",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FBkzKJVqMt\u002Fedit",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002Fcb\u002Ff0\u002Fcbf0a912a002e54281f4f7186e7d9c33.jpg",name:"何明洋",github_profile_url:"https:\u002F\u002Fgithub.com\u002FKaminyou",twitter_profile_url:c,facebook_profile_url:"https:\u002F\u002Fwww.facebook.com\u002Fikaminyou\u002F",bio:"A passionate data scientist and full stack developer who excels at solving practical problems, especially in 2D\u002F3D CV, audio, and medical signal, by designing ML\u002FDL algorithms and building full-stack web applications to provide service. In addition, I am also a graphic designer and clinical pharmacist familiar with psychiatry."}],event_type:"talk"},i18n:{routeParams:{}}},serverRendered:b,routePath:"\u002Fen-us\u002Fconference\u002Ftalk\u002F209",config:{gtm:{id:void 0},_app:{basePath:"\u002F2021\u002F",assetsPath:"\u002F2021\u002F_nuxt\u002F",cdnURL:a}}}}(null,true,""));