__NUXT_JSONP__("/conference/talk/225", (function(a){return {data:[{speechData:{id:225,begin_time:"2022-09-04T03:15:00Z",end_time:"2022-09-04T03:45:00Z",is_remote:false,location:"5-r1",youtube_id:"zgytV3Kb8lM",title:"Molecular Dynamics is no longer scary with Python! Learn to do it yourself with FIRE and LAMMPS.",category:"SCI",language:"ENEN",python_level:"INTERMEDIATE",recording_policy:true,abstract:"Molecular Dynamics (MD) is a powerful numerical technique to predict the behavior of atoms and complex materials without a full quantum mechanical treatment. It makes it much faster to do simulation\u002Foptimization for a wide range of sciences and technologies, from designing new drugs and genetic treatments of disease to nano- & next-gen semiconductor materials to industrial chemical & semiconductor processing to fundamental surface sciences. In this talk I’ll first explain the basics in an easy-to-understand way and run some pure python “DIY” implementations so we can see “under the hood” what’s going on. Then I’ll introduce LAMMPS via Python and associated packages, build some molecular structures, evolve them dynamically and see the results in 3D. https:\u002F\u002Fwww.lammps.org\u002Fpictures.html#lammpspaper\r\n\r\nYou’ll understand the basics and be able to install LAMMPS and start simple MD calculations right away, then refer to the tutorials and examples provided at the end of the talk.",detailed_description:"Molecular Dynamics (MD) is a powerful simulation\u002Foptimization tool for a wide range of sciences and technologies from designing new drugs and genetic treatments of disease to nano- & next-gen semiconductor materials to industrial chemical & semiconductor processing to fundamental surface sciences.\r\n\r\nMD allows us to calculate\u002Fpredict how molecules move, interact & form new structures and to realistically optimize these processes theoretically using a mix of basic physics (ball-and-spring models) and just enough quantum mechanics to get the job done. Sounds complicated but the basic idea is still pretty simple to understand. \r\n\r\nWe’ll first run simple Python scripts that use SciPy & NumPy to build multi-atomic systems and let them move to find their minimum energy configuration comparing minimizers scipy.optimize.minimize and scipy.optimize.dual_annealing. Then we’ll do true dynamical calculations using scipy.integrate.solve_ivp and the FIRE[1, 2] algorithm. We’ll look at how to move this calculation to GPU via CuPy[3]. \r\n\r\nThen we’ll move to a big, full-blown calculation using very popular and flexible program LAMMPS[4-7] (now thankfully wrapped in friendly and easy-to-use Python wrapper) and some “helper” packages and the many open-source force-field options - the models for the way atoms interact. We’ll run through several well-documented examples and see what resources are available for further study.\r\n\r\n[1] FIRE: “Structural Relaxation Made Simple” Bitzek et al. (2006) Phys. Rev. Lett. 97, 170201 \r\n[2] http:\u002F\u002Fusers.jyu.fi\u002F~pekkosk\u002Fresources\u002Fpdf\u002FFIRE.pdf\r\n[3] CuPy: https:\u002F\u002Fcupy.dev\u002F\r\n[4] https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FLAMMPS\r\n[5] https:\u002F\u002Fwww.lammps.org\u002F\r\n[6] “LAMMPS - a flexible simulation tool for particle-based materials modeling at the atomic, meso, and continuum scales” https:\u002F\u002Fdoi.org\u002F10.1016\u002Fj.cpc.2021.108171 \r\n[7] Cool Pictures from LAMMPS Simulations https:\u002F\u002Fwww.lammps.org\u002Fpictures.html#lammpspaper",slide_link:"https:\u002F\u002Fgithub.com\u002Fdgm9\u002FDavidM-Pycon-APAC-2022",slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002FvfJvpCnMQH1ymLxcfcgbxZ",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FrJ9-wp7Js",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F28\u002F1d\u002F281da5e8ee4e0d4747763e13ded43adc.jpg",name:"David Mikolas",github_profile_url:a,twitter_profile_url:a,facebook_profile_url:"https:\u002F\u002Fdelete.facebook",bio:"BS. Astronomy, Ph.D. Physics, then some nanofabrication and then some fiber optics, then on to semiconductor process development and then critical dimension and thin film crystallographic texture metrology, now back to Physics, surface science and 2D materials."}],event_type:"talk"}}],fetch:{},mutations:[]}}("")));