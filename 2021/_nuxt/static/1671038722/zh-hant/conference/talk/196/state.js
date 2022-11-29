window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002F2021\u002F_nuxt\u002Fstatic\u002F1671038722",layout:"default",error:a,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:196,begin_time:"2021-10-02T06:05:00Z",end_time:"2021-10-02T06:35:00Z",is_remote:false,location:"6-r2",youtube_id:"yaAEoMSepqQ",title:"Reborn Quark-Engine with Rizin",category:"SEC",language:"ENEN",python_level:"INTERMEDIATE",recording_policy:b,abstract:"In this talk, we will share the complete process of how Quark-Engine replaced its core library to enhance resilience and performance. Also, we will share the situations we came across and the strategies of keeping growing in the open-source community.\r\n\r\nQuark-Engine is a well-known open-source Android malware analysis engine written in python. Many essential features inside are based on Androguard, an open-source Python package for analyzing Android files. However, Androguard is no longer maintained by its author. To ensure the health of Quark-Engine, we had decided to replace Androguard with Rizin, one of the most popular open-source reverse engineering frameworks. There are many challenges behind this work, and we will share how we overcome each of them.",detailed_description:"**Introduction of Quark-Engine**\r\nIn this talk, we will briefly introduce [Quark-Engine](https:\u002F\u002Fgithub.com\u002Fquark-engine\u002Fquark-engine), which covers the key features of Quark, the design of the scoring system, and the usage of Quark. Also, we will take an Android malware sample to show how Quark can analyze malware in a simple but practical way, and how Quark enhances the efficiency of malware analysis.\r\n\r\n**Why does Quark-Engine need to change the core library?**\r\n[Androguard](https:\u002F\u002Fgithub.com\u002Fandroguard\u002Fandroguard) is an open-source Python package for analyzing Android files. With the help of Androguard, Quark can implement its essential features. However, the project is no longer maintained recently. The health of Quark-Engine is getting dangerous. Therefore, we decided to replace Androguard with Rizin, one of the most popular open-source reverse engineering frameworks and supported by a strong community.\r\n\r\n**What is Rizin?**\r\n[Rizin](https:\u002F\u002Fgithub.com\u002Frizinorg\u002Frizin) supports executable file formats on most platforms. It can analyze files, reassemble, and debug, etc. Also, Rizin has a robust community to support the entire project. Besides, Rizin has almost all the features that Androguard has. It is a perfect solution for replacing Androguard. After the replacement, we found that not only Quark's health is getting better, but the performance also gets significantly improved.\r\n\r\n**What’s the challenge of core library replacement**\r\nFurthermore, the usage of the two libraries is different. Many functions in Quark are needed to redesign. During replacing the core library, we must ensure that everything goes on smoothly, which brings us a lot of challenges, but it also brings us a lot of fun. We will share all these interesting findings in this talk.\r\n\r\n\r\n**The comparison of the two Quark-Engine**\r\nFinally, we will compare the differences between Rizin and Androguard. We will deep dive into the detail, including performance and accuracy. Then, we will talk about how to evaluate the performance by common tools and the strategy we used to optimize the Rizin-based Quark.",slide_link:c,slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002Fknnvlkuo",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FBJMCsZKfF\u002Fedit",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002Fc7\u002Fbe\u002Fc7bed001944fa4084dafb5efe9f26fee.jpg",name:"Sheng-Fone Lu",github_profile_url:"https:\u002F\u002Fgithub.com\u002Fhaeter525",twitter_profile_url:"https:\u002F\u002Ftwitter.com\u002Fhaeter525",facebook_profile_url:c,bio:"I'm a Taiwanese college student, majoring in Computer Science and Engineering. I am passionate about cyber-security, reverse engineering, and operating system. A freshman of the open-source community, and a core member of Quark-Engine Team."}],event_type:"talk"},i18n:{routeParams:{}}},serverRendered:b,routePath:"\u002Fzh-hant\u002Fconference\u002Ftalk\u002F196",config:{gtm:{id:void 0},_app:{basePath:"\u002F2021\u002F",assetsPath:"\u002F2021\u002F_nuxt\u002F",cdnURL:a}}}}(null,true,""));