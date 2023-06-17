__NUXT_JSONP__("/conference/talk/270", (function(a){return {data:[{speechData:{id:270,begin_time:"2022-09-04T02:35:00Z",end_time:"2022-09-04T03:05:00Z",is_remote:false,location:"5-r1-1",youtube_id:"ddi58EcZPxw",title:"Make your photos better by image denoising",category:"GRAPH",language:"ENEN",python_level:"INTERMEDIATE",recording_policy:true,abstract:"There are many ways to make your photos and videos better and clear, such as super resolution, image colorization and video stabilization. One of the fundamental techniques is image denoising, i.e., to reduce noise from images. In the talk, we will firstly introduce the background and its related applications about image denoising. Then, a classic Deep Learning method: DnCNN will be taken as an example, to describe its main concepts and implementation in PyTorch. Finally, we will show a practical use case for old film restoration.",detailed_description:"#### Challenges for Image Denoising\r\nIn the past, many traditional image denoising algorithms assume that the noise is under some well-known distributions, such as Guassian distribution. However, the distribution is unknown in real scenarios, which usually makes two kinds of results: the image is still noisy or the image becomes blurred. We’ll illustrate the situation (with examples) and possible ways to solve the problem by using Deep Learning. The main difference between traditional methods and Deep Learning methods is the latter apply modern Neural Network architectures and learn how to denoise from data.\r\n\r\n#### Related Applications\r\nWe can apply the same image denoising technique to other tasks. For instance, DnCNN can directly solve the problem of super resolution (a task to enlarge the resolution of an image). In general, many applications about image restoration are well fit to the algorithms of image denoising.\r\n\r\n#### DnCNN and other Deep Learning Methods\r\nWe’ll show the main components of a DnCNN model: Convolutional layer, Batch Normalization, ReLU, but details are ignored because materials about complicated mathematics are *NOT* the targets. Such concepts help when people try to build the network architecture. We will also introduce Residual Learning, an important technique used by DnCNN. Then, we will show how to train a DnCNN model by PyTorch, a popular Python based Deep Learning framework. If time permits, we may also compare DnCNN with the other popular solution: U-Net, an Auto-Encoder based method.\r\n\r\n#### Applying to Old Film Restoration\r\nThe pain points of the old film restoration industry will be discussed. We'll tell the audience how to fit the problems of old film restoration to image denoising and use related techniques to solve the problems. Also, some difficulties we encountered in the processing of solving the problem, e.g., the trade-off between restoration capability and artifacts generation, will also be shared. The solutions include: the choice of Deep Learning models, the training method, data pre-processing and post-processing.",slide_link:"https:\u002F\u002Fbit.ly\u002Fpynoise",slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002F1BdbMfQK1qZCe1HRbbWyd4",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FS1tgw6Xki",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002Fac\u002Fe2\u002Face22123bf73b0ca46c6eb38c2eadbbf.jpg",name:"蘇嘉冠 (Jia-Kuan, Su)",github_profile_url:"https:\u002F\u002Fgithub.com\u002FSuJiaKuan",twitter_profile_url:a,facebook_profile_url:a,bio:"J.K. is an AI Researcher and Developer in startup, he is always willing to share and discuss AI techniques with people. He is also an advocate of Unconditional Basic Income (UBI) in Taiwan."}],event_type:"talk"}}],fetch:{},mutations:[]}}("")));