__NUXT_JSONP__("/zh-hant/conference/talk/228", (function(a){a.id=228;a.begin_time="2022-09-03T04:55:00Z";a.end_time="2022-09-03T05:25:00Z";a.is_remote=false;a.location="5-r1";a.youtube_id="0DiDUrhhU30";a.title="Revisit Python from statements and PEG";a.category="CORE";a.language="ENEN";a.python_level="INTERMEDIATE";a.recording_policy=true;a.abstract="In learning Python, everyone learns `if` statements, `for` statements, and function definitions.  \r\nAt that time, you will also learn that `if` and `for` lines must be followed by a colon and that the following line must be indented (because SyntaxError will be raised).  \r\n\r\nSo why are these colons and indentations necessary?  \r\n\r\nIt is because Python is designed to be so[1][2], but a deep dive into \"statements\" in the Python Language Reference led me to an explanation that makes sense to me.  \r\nIn this talk, I will take you a tour of the syntax definition, expressed concisely and without omissions in PEG (Parsing Expression Grammar).\r\n\r\n[1] https:\u002F\u002Fdocs.python.org\u002F3\u002Ffaq\u002Fdesign.html#why-are-colons-required-for-the-if-while-def-class-statements  \r\n[2] https:\u002F\u002Fdocs.python.org\u002F3\u002Ffaq\u002Fdesign.html#why-does-python-use-indentation-for-grouping-of-statements";a.detailed_description="This is a talk on the subject of Python **concrete syntax** (in a word, **the appearance**), reading and savoring together the PEG in [The Python Language Reference](https:\u002F\u002Fdocs.python.org\u002F3\u002Freference\u002Findex.html).  \r\nI'm going to talk mainly about [Compound statements](https:\u002F\u002Fdocs.python.org\u002F3\u002Freference\u002Fcompound_stmts.html) from the reference.\r\n\r\n## Target statements\r\n\r\nLet's read PEG of the following compound statements in this talk:\r\n\r\n- `if` statements\r\n- `for` statements\r\n- `while` statements\r\n- Function definitions\r\n- `match` statements\r\n\r\n## What's PEG?\r\n\r\nActually, dramatic changes occurred in Python 3.9 silently.  \r\nPEP 617 [4] introduces PEG in Python.  \r\n\r\nCurrently the language reference is a mixture of BNF (until Python 3.8) and PEG (from Python 3.9).  \r\nI hope this talk helps you read the reference without confusion between BNF and PEG.\r\n\r\n[4] https:\u002F\u002Fpeps.python.org\u002Fpep-0617\u002F\r\n\r\n## Why this talk?\r\n\r\nI have co-authored an introductory Python book for the past few years in Japanese.  \r\nExplaining `if` statements to those who knew nothing about programming and Python was tough for me.  \r\nI divided the cases by the presence or absence of `else` and the number of `elif`s, \r\n\r\n- `if ...`\r\n- `if ... else ...`\r\n- `if ... elif ... else ...`\r\n- e.t.c.\r\n\r\nbut it was very difficult to verify the omissions in the explanations.  \r\nLater, when I read the reference, I was very impressed that the PEG showed the `if` statement in just **two lines** without omissions.\r\n\r\nMany people may think that the Python Language Reference is difficult, but I hope that more people will become interested in the references by sharing the excitement I gained from them.  \r\nI myself have grown as a Python user because of my interest in the language reference, and I think it would be wonderful if this talk leads to the growth of those who listen to it.\r\n\r\nI've already talked BNF focused version (30 minutes) in [PyCon Kyushu 2022 Kumamoto](https:\u002F\u002Fkyushu.pycon.jp\u002F2022\u002F) this January.  \r\nSome feedback inspired me to talk about PEG, so wrote this proposal as the updated version.";a.slide_link="https:\u002F\u002Fftnext.github.io\u002F2022_slides\u002Fpyconapac_peg\u002Frevisit_python_statements.html";a.slido_embed_link="https:\u002F\u002Fapp.sli.do\u002Fevent\u002F9SZY8fXP6EyYUYKY5kCaTQ";a.hackmd_embed_link="https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FSyWp86XJo";a.speakers=[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F33\u002Fdf\u002F33df9d25a96a31596837360c85a04169.jpg",name:"nikkie",github_profile_url:"https:\u002F\u002Fgithub.com\u002Fftnext",twitter_profile_url:"https:\u002F\u002Ftwitter.com\u002Fftnext",facebook_profile_url:"",bio:"Nikkie began his career as a software engineer in 2016.  \r\nHe started Python as a hobby in 2017 and fell in love with it.  \r\nHe is engaged in Natural Language Processing as a data scientist at Uzabase, inc. Tokyo, Japan from 2019.\r\n\r\nHe is working on the Python community in Japan as a staff of the following event:\r\n\r\n- [PyCon Japan](https:\u002F\u002Fwww.pycon.jp\u002Forganizer\u002Findex.html): the largest PyCon in Japan\r\n  - staff on 2019 and 2020 (Program committee, lead on 2020)\r\n  - [chair](https:\u002F\u002Fpyconjp.blogspot.com\u002F2020\u002F10\u002Fpyconjp-2021-chair.html) on 2021\r\n\r\nHe gave a talk (and lightning talks) at many PyCons in Japan and abroad.\r\n\r\n- EuroPython 2020, [PyCon APAC 2020](https:\u002F\u002Fyoutu.be\u002FJiXnEA7pM7U) (English)\r\n\r\nHe loves anime (Japanese animetation) as much as Python, and implements ideas related to some anime with Python.  \r\nIn 2022, he write code related to \"Sing a Bit of Harmony\" (e.g. Twitter bot, prototyping AI character, e.t.c.)."}];a.event_type="talk";return {data:[{speechData:a}],fetch:{},mutations:[["setSpeechData",a]]}}({})));