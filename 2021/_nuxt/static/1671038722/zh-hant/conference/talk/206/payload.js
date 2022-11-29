__NUXT_JSONP__("/zh-hant/conference/talk/206", (function(a,b){b.id=206;b.begin_time="2021-10-03T05:55:00Z";b.end_time="2021-10-03T06:25:00Z";b.is_remote=false;b.location="1-r3";b.youtube_id="qCWYCVqB5oo";b.title="PyMetheus - A Python-based Monitoring System using Raspberry Pi";b.category="ADMIN";b.language="ENEN";b.python_level="INTERMEDIATE";b.recording_policy=true;b.abstract="PyMetheus is a project that the author started in order to monitor Raspberry PI units at home after the author found out that one of the RPis experiences intermittent failure. Although Prometheus can be a better choice in monitoring, however some RPis suffer crashing after installing the Prometheus' exporters. Hence the author started to learn about the Prometheus' architecture and began mimicking a Python based server-client monitoring system that can be installed on RPi zero, together with Grafana dashboard to display the monitoring data. \r\n\r\nApart from that the author also integrates email and sms\u002Fphone notification system using external mail API and QPython on Android when there is an alert triggered in the monitoring system. The author is also looking in implementating PyMetheus as alternative for IoT system monitoring. The author likes to take the opportunity to share his experience in crafting and implementing the monitoring system using embedded SOC system.";b.detailed_description="### The Motivation\r\nThe purpose of the talk is to demonstate how the author can design a monitoring system using small and portable embedded system with limited RAM such as Raspberry PI to monitor his home-made RPIs based data-centers.\r\n\r\n### The Architecture\r\n* The client\r\n    The client uses `requests` and posts the monitoring data to PyMetheus server via REST API. The client can also be crafted using `urequests` in MicroPython.\r\n\r\n* The server\r\n    The server consists of several components namely:\r\n    1. Aggregator\r\n        The Aggregator is responsible to collect and aggregate the data collected from clients via REST API, using `flask` framework. The Aggregator stores the data into the database, including the monitoring events from the client.\r\n\r\n    2. Database\r\n        The Database is responsible to store the data collected from the client. The default database used in current version are `sqlite3` and `postgressql`. The Database can be used as integration with the notification, reporting, as well as other third party applications via PyMetheus Open API.\r\n        \r\n    3. Notification\r\n        The current alert notification is integrated with external email API. The author also includes the Android integration system that the author had crafted previously using Qpython.\r\n        \r\n* The reporting\r\n    Grafana will be the current reporting dashboard but the author will be designing a new dashboard in coming version.\r\n    \r\n* Modular - You choose what to monitor\r\n    PyMetheus comes with some basic monitoring packages for monitoring, however it contains a base class that the user can design their own monitoring system, by overriding the class based on their requirements easily.\r\n\r\n### Third-party Integration\r\nSince PyMetheus contains Open API, therefore it allows the user to build their application using the PyMetheus Open API. Apart from that the user can also crafts their own monitoring system on the client side using the base class modular that the author builds.";b.slide_link=a;b.slido_embed_link="https:\u002F\u002Fapp.sli.do\u002Fevent\u002Fbcwodjnt";b.hackmd_embed_link="https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FS15SHN5ft\u002Fedit";b.speakers=[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F95\u002F89\u002F9589ea26a4817aa4056611105f9ca927.jpg",name:"Ing Wei Tang",github_profile_url:"https:\u002F\u002Fgithub.com\u002Ftangingw",twitter_profile_url:a,facebook_profile_url:a,bio:"Ing Wei is the chair for PyCon MY 2019, the co-chair of PyCon MY 2018, and vice president of MyPOP. He has spoken in various PyCons, particularly in PyCon APAC 2018, as well as involving in PyCon communities actively in Malaysia.\r\n\r\nHe uses python a lot in his daily work, especially coding the automation process and flow. During his past time, he likes to experience and perform hacking different things on operating system level.\r\n\r\nApart from programming language, he can also speak 5 different types of languages concurrently in one sentence. Please ask for demo if time permits."}];b.event_type="talk";return {data:[{speechData:b}],fetch:{},mutations:[["setSpeechData",b]]}}("",{})));