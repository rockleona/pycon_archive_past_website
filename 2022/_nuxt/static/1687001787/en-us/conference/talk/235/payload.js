__NUXT_JSONP__("/en-us/conference/talk/235", (function(a){a.id=235;a.begin_time="2022-09-03T04:55:00Z";a.end_time="2022-09-03T05:25:00Z";a.is_remote=false;a.location="6-r2-1";a.youtube_id="T6Q2fPnPgUU";a.title="Finding the Perfect Shift Schedule";a.category="APPL";a.language="ENEN";a.python_level="INTERMEDIATE";a.recording_policy=true;a.abstract="Finding a working shift schedule can be a tedious task, there’s usually various requirements to juggle all at once, from time-offs, shift types, conflicting schedules, to personal preferences; and one may easily miss a requirement or two by mistake. Instead, we can use so called “solvers” and leave the hard lifting up to computer to find not just a valid schedule, but a good one; and as it turns out, the same technique also works for a broad spectrum of problems such as conference scheduling, vehicle routing, bin packing, and more.";a.detailed_description="This talk will likely interest those who likes to explore using Python to solve logical problems, because in some way, finding a shift schedule is a lot like playing [Sudoku](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSudoku). There’s a lot of holes that you need to fill, but only certain element can fit in the holes. So if we can write [programs that solves Sudoku](http:\u002F\u002Fnorvig.com\u002Fsudoku.html), then surely we can write programs that produces a good shift schedule, right?\r\n\r\nIndeed we can, but there’s an even better approach. Instead of writing our own custom program that specifically schedules shifts, we can use off-the-shelve solvers that are very good at solving [a more general kind problem](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FBoolean_satisfiability_problem), and transform our original problem into a form that it understands. Behind the scene these off-the shelve solvers use similar technique used by the [Sudoku solver mentioned above](http:\u002F\u002Fnorvig.com\u002Fsudoku.html) (e.g. backtracking and constrain propagation), albeit [much more advanced](https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=d76e4hV1iJY), since tons of optimization and clever tuning have went into make them work well.\r\n\r\nBy then end of the talk, you’ll know the basic of [Z3](https:\u002F\u002Fgithub.com\u002FZ3Prover\u002Fz3)’s [Python API](https:\u002F\u002Fericpony.github.io\u002Fz3py-tutorial\u002Fguide-examples.htm), how to formulate the [shift scheduling](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FShift_plan) problem in propositional logic, and a slight idea of how it can be applied to solve similar problems such as conference scheduling, [vehicle routing](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FVehicle_routing_problem), [bin packing](https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FBin_packing_problem), and more.\r\n\r\nAudience are suggested to have a good understand of [list comprehension](https:\u002F\u002Fdocs.python.org\u002F3\u002Ftutorial\u002Fdatastructures.html#list-comprehensions) and [itertools](https:\u002F\u002Fdocs.python.org\u002F3\u002Flibrary\u002Fitertools.html#itertools.combinations) since both will be heavily used throughout the talk. Ideally, some experience with predicate logic is preferred, though it is not strictly necessary. However, no domain knowledge is required.\r\n\r\n---\r\n\r\n**Side note**: Z3 is an immensely powerful tool; this talk can only covers a tip of iceberg in terms of what it can do. Other interesting use of Z3 includes: [software verification](https:\u002F\u002Fresearch.nccgroup.com\u002F2021\u002F01\u002F29\u002Fsoftware-verification-and-analysis-using-z3\u002F), [program synthesis](https:\u002F\u002Fgithub.com\u002Fnickgildea\u002Fz3_codegen), [exploit generation](https:\u002F\u002Fopenwall.info\u002Fwiki\u002F_media\u002Fpeople\u002Fjvanegue\u002Ffiles\u002Fwoot12.pdf), [code simplification](https:\u002F\u002Fgithub.com\u002Fmatthewhague\u002Fsat-css-tool), etc.";a.slide_link="https:\u002F\u002Fdocs.google.com\u002Fpresentation\u002Fd\u002F167mhDI-mMvvWy3QDbG4o30w07t-JZREp9dn-2jkjQss\u002F";a.slido_embed_link="https:\u002F\u002Fapp.sli.do\u002Fevent\u002Fek2NTzkytzYkU1XVkpvdzk";a.hackmd_embed_link="https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FrJ5aL67yo";a.speakers=[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F55\u002F35\u002F5535faf7e1c176278dfd22c7c74ed64a.jpg",name:"Shung-Hsi Yu",github_profile_url:"https:\u002F\u002Fgithub.com\u002Fshunghsiyu",twitter_profile_url:"https:\u002F\u002Ftwitter.com\u002Fshunghsiyu",facebook_profile_url:"",bio:"Kernel Engineer at SUSE working on BPF"}];a.event_type="talk";return {data:[{speechData:a}],fetch:{},mutations:[["setSpeechData",a]]}}({})));