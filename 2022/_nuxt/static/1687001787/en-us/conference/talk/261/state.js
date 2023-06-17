window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002F2022\u002F_nuxt\u002Fstatic\u002F1687001787",layout:"default",error:a,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:261,begin_time:"2022-09-03T05:30:00Z",end_time:"2022-09-03T06:00:00Z",is_remote:false,location:"4-r0",youtube_id:"fssvxxq7mLk",title:"Building Customized Async Web Protocol from AsyncIO: Exploring the low-level APIs Protocol and Transport",category:"CORE",language:"ZHEN",python_level:"EXPERIENCED",recording_policy:b,abstract:"Despite their powerful features and flexibility, the low-level APIs for library and framework developers provided in Asyncio are underutilized. One reason might be the high entry barrier – prerequisites like understanding protocols knowledge and asynchronous design patterns. I am sharing my humble experience with Asyncio here. I show you how to implement a network protocol, specifically Websocket, with Protocol and Transport, two of the staple low-level APIs in the package. You will learn how to establish a consensual connection and communicate between the server and the client. While the main focus is on low-level APIs (e.g., we will use Transport to send messages to another endpoint) , we will be using some high-level APIs (e.g., StreamReader, Queue) for auxiliary purposes like message handling. It is hoped that the techniques and familiarity gained with asyncio serve as the basis for your customized network protocol and libraries, even for commercial purposes, in the future.",detailed_description:"Asynchronous web services and frameworks have become ubiquitous in recent years due to their efficiency. In Python development, these very commonly translate to using packages like aiohttp, for sending async network requests, or Uvicorn for setting up web servers for other backend services like FastApi, just to name a few. Though these packages cover most common scenarios and are production ready, their one-size-fits-all approach may fail Python web developers with more flexible and specialized use in mind. As such, for more customizability and specialized feature development, we delve into lower-level APIs like  Protocol, Transport provided in Asyncio, which serves as the basis on which the aforementioned packages were built. Doing so, for example, allows us to develop a self-defined inter-process communication (IPC) library or create network protocol. \r\n\r\nIn this sharing, I will implement application-layer protocol, specifically, WebSocket, as the motivating example, using the low-level API Transport and Protocol from the package asyncio to handle the connection and communication between the server and the client, which is the main focus of the proposed presentation. However, due to the constraint of time, I will still use high-level APIs to expedite  the building of part of data reception from the client.\r\nThis presentation will familiarize you with \r\n* asyncio low-level API like Protocol and Transport: you will be able to build your async framework, Inter-process communication, Network Protocols etc.\r\n* the patterns of async development",slide_link:"https:\u002F\u002Fdocs.google.com\u002Fpresentation\u002Fd\u002F1OEAJF6cP_m62QMiprRzWEg6jOclR-kHdLl8g9hk9iZw\u002Fedit?usp=sharing",slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002FaH6RxX7bYGg8WR3GvM3Q3X",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FB17AUTXks",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F47\u002F78\u002F4778bcad59764f7df33268aada1e1abf.jpg",name:"姜韋辰(daniel)",github_profile_url:"https:\u002F\u002Fgithub.com\u002Fqwp8510",twitter_profile_url:c,facebook_profile_url:c,bio:"我是一名後端工程師，熟悉常用的python web框架，喜歡挑戰各種業務場景的服務。專注於系統開發以及服務優化，因應業務需求，偶而也會下海寫寫前端，最近比較著迷infra相關建置及維護。"}],event_type:"talk"},relatedData:[],i18n:{routeParams:{}}},serverRendered:b,routePath:"\u002Fen-us\u002Fconference\u002Ftalk\u002F261",config:{gtm:{id:void 0},_app:{basePath:"\u002F2022\u002F",assetsPath:"\u002F2022\u002F_nuxt\u002F",cdnURL:a}}}}(null,true,""));