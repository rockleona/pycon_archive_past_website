__NUXT_JSONP__("/zh-hant/conference/talk/244", (function(a){a.id=244;a.begin_time="2022-09-03T05:30:00Z";a.end_time="2022-09-03T06:00:00Z";a.is_remote=false;a.location="4-r0-1";a.youtube_id="X0HryRZ7BnQ";a.title="Integrate Schema Registry & Kafka in Python to Build Streaming Processing";a.category="APPL";a.language="ZHEN";a.python_level="INTERMEDIATE";a.recording_policy=true;a.abstract="In the current data-driven world, we are often faced with how to process and analyze data effectively and in real time. And streaming processing will be an important application. In addition, the data will have different schemas for different applications and needs. In order to effectively achieve data correctness and availability in the application of streaming, it is necessary to integrate schema verification into the streaming process.\r\n\r\nIn order to achieve this objective, I will start with introducing the concept and use cases or scenarios of streaming process and two services, Apache Kafka and Schema Registry. The Kafka is a message queue system that can handle a large amount of streaming data. And Schema Registry is a service which based on Kafka, it can help us do schema verification during producing data to Kafka or consuming data from Kafka. Lastly, I will share how to use python to integrate these two service to implement a reliable streaming process.";a.detailed_description="### Abstract\r\nIn this session, i will start with sharing the difference between batch and streaming to help participants establish a basic concept, also introduce importance and use cases or scenarios about streaming process. And i will highlight Apache Kafka and Schema Registry architecture and purpose. Then, i will discuss how to use python to implement streaming process, include produce data, consume data and achieve data schema verification through example code and demo. Lastly, i also share some important settings and how to finetune producer and consumer to improve high throughput and latency on streaming process.\r\n\r\n### Session Outline\r\n1. Batch vs. Streaming\r\n    * Introducing the concept of difference between batch and streaming.\r\n2. Why need streaming process?\r\n    * Introducing importance and use cases about streaming processing.\r\n3. Talk about Apache Kafka\r\n    * Introducing Apache Kafka, include purpose, architecture and components.\r\n4. Talk about Schema Registry\r\n    * Introducing Schema Registry, include purpose, schema evolution strategy and schema verification.\r\n5. Python lib - confluent kafka client\r\n    * Introducing the key python lib to help integrate Apache Kafka and Schema Registry.\r\n6. How to produce message?\r\n    * Demo example the producer code with python.\r\n7. How to consume message?\r\n    * Demo example the consumer code with python.\r\n8. Finetune producer and consumer.\r\n    * Introducing important settings and how to achieve high throughput on producer and consumer side.\r\n9. Conclusion\r\n\r\n### Reference\r\n1. [Apache Kafka Introduction](https:\u002F\u002Fkafka.apache.org\u002Fintro)\r\n2. [Schema Registry Introduction on Confluent](https:\u002F\u002Fdocs.confluent.io\u002Fplatform\u002Fcurrent\u002Fschema-registry\u002Findex.html)\r\n3. [Schema Registry Introduction on Confluent youtube](https:\u002F\u002Fwww.google.com\u002Furl?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjg0p-B7sX2AhVkJaYKHcPwDo4QwqsBegQIBRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_x9RacHDQY0&usg=AOvVaw3fDpPkciE2fMTQijPh2Mkx)\r\n4. [Confluent's Kafka Python Client - GitHub](https:\u002F\u002Fgithub.com\u002Fconfluentinc\u002Fconfluent-kafka-python)\r\n5. [Streaming Data: How it Works, Benefits, and Use Cases](https:\u002F\u002Fwww.confluent.io\u002Flearn\u002Fdata-streaming\u002F)\r\n6. [6 Most Common Streaming Data Use Cases](https:\u002F\u002Fwww.upsolver.com\u002Fblog\u002F6-most-common-streaming-data-use-cases)";a.slide_link="https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F1NdBaMqZjVTucV_Z2EY2iFub826hF92ga\u002Fview?usp=sharing";a.slido_embed_link="https:\u002F\u002Fapp.sli.do\u002Fevent\u002FsE3aaBEUsYZ7HiLkrvcrAp";a.hackmd_embed_link="https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FBkwCLT7Ji";a.speakers=[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F5e\u002F45\u002F5e450bb916fc55fa20ff8ac3d0b1fa05.jpg",name:"蘇揮原 Mars Su",github_profile_url:"https:\u002F\u002Fgithub.com\u002Fhueiyuan",twitter_profile_url:"",facebook_profile_url:"https:\u002F\u002Fwww.facebook.com\u002Fprofile.php?id=100000271047129",bio:"A Senior ML\u002FData Engineer in Gogolook. Currently i am in charge of implementing streaming etl infrastructure and nlp related ml model and application. Having 4+ years experience of data science and data engineering, include NLP and Streaming(micro-batch) ETL design. \r\n\r\nMy research interests include nlp related algorithm model and paper, streaming data pipeline and cloud service. Hope i can contribute something in data world."}];a.event_type="talk";return {data:[{speechData:a}],fetch:{},mutations:[["setSpeechData",a]]}}({})));