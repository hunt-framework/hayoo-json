[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "module",
        "fct-source": "src/Csound-Typed-Control.html",
        "fct-type": "module",
        "title": "Control"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "Control",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Control",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:Channel",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-GlobalState-Cache.html#Channel",
        "fct-type": "type",
        "title": "Channel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "Channel",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Channel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:CsdEvent",
      "description": {
        "fct-descr": "\u003cp\u003eThe Csound note. It's a triple of\n\u003c/p\u003e\u003cpre\u003e (startTime, duration, parameters)\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "CsdEvent"
      },
      "index": {
        "description": "The Csound note It triple of startTime duration parameters",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "CsdEvent",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Csd Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:CsdEventList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCsdEventList\u003c/a\u003e\u003c/code\u003e is a canonical representation of the Csound scores.\n A scores is a list of events and we should know the total duration of the scores.\n It's not meant to be used directly. We can use a better alternative. More convenient\n type that belongs to \u003ccode\u003e\u003ca\u003eCsdSco\u003c/a\u003e\u003c/code\u003e type class (see temporal-csound package).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "CsdEventList"
      },
      "index": {
        "description": "CsdEventList is canonical representation of the Csound scores scores is list of events and we should know the total duration of the scores It not meant to be used directly We can use better alternative More convenient type that belongs to CsdSco type class see temporal-csound package",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "CsdEventList",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Csd Event List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:CsdSco",
      "description": {
        "fct-descr": "\u003cp\u003eA class that represents Csound scores. All functions that use score are defined\n in terms of this class. If you want to use your own score representation, just define\n two methods of the class.\n\u003c/p\u003e\u003cp\u003eThe properties:\n\u003c/p\u003e\u003cpre\u003e forall a . toCsdEventList (singleCsdEvent a) === CsdEventList 1 [(0, 1, a)]\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "CsdSco"
      },
      "index": {
        "description": "class that represents Csound scores All functions that use score are defined in terms of this class If you want to use your own score representation just define two methods of the class The properties forall toCsdEventList singleCsdEvent CsdEventList",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "CsdSco",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Csd Sco",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:LocalHistory",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "LocalHistory"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "LocalHistory",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Local History",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:Mix",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial type that represents a scores of sound signals.\n If an instrument is triggered with the scores the result is wrapped\n in the value of this type. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Control-Mix.html#Mix",
        "fct-type": "data",
        "title": "Mix"
      },
      "index": {
        "description": "Special type that represents scores of sound signals If an instrument is triggered with the scores the result is wrapped in the value of this type",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "Mix",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Mix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:Msg",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Msg",
        "fct-type": "data",
        "title": "Msg"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "Msg",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:SE",
      "description": {
        "fct-descr": "\u003cp\u003eThe Csound's \u003ccode\u003eIO\u003c/code\u003e-monad. All values that produce side effects are wrapped\n in the \u003ccode\u003eSE\u003c/code\u003e-monad.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#SE",
        "fct-type": "newtype",
        "title": "SE"
      },
      "index": {
        "description": "The Csound IO monad All values that produce side effects are wrapped in the SE monad",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "SE",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "SE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:SERef",
      "description": {
        "fct-descr": "\u003cp\u003eIt describes a reference to mutable values.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Control-SERef.html#SERef",
        "fct-type": "data",
        "title": "SERef"
      },
      "index": {
        "description": "It describes reference to mutable values",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "SERef",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "SERef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:CsdEventList",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "CsdEventList",
        "fct-type": "function",
        "title": "CsdEventList"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "CsdEventList",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Csd Event List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:LocalHistory",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "LocalHistory",
        "fct-type": "function",
        "title": "LocalHistory"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "LocalHistory",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Local History",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:SE",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#SE",
        "fct-type": "function",
        "title": "SE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "SE",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "SE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:SERef",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SERef",
        "fct-source": "src/Csound-Typed-Control-SERef.html#SERef",
        "fct-type": "function",
        "title": "SERef"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "SERef",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "SERef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:blosc",
      "description": {
        "fct-descr": "\u003cp\u003eA band-limited oscillator with user defined waveform (it's stored in the table).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Tab -\u003e Sig -\u003e Sig",
        "fct-source": "src/Csound-Typed-Control-Vco.html#blosc",
        "fct-type": "function",
        "title": "blosc"
      },
      "index": {
        "description": "band-limited oscillator with user defined waveform it stored in the table",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "blosc",
        "normalized": "Tab-\u003eSig-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Tab-\u003eSig-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:csdEventListDur",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Double",
        "fct-type": "function",
        "title": "csdEventListDur"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "csdEventListDur",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Event List Dur",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:csdEventListNotes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[CsdEvent a]",
        "fct-type": "function",
        "title": "csdEventListNotes"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "csdEventListNotes",
        "normalized": "[CsdEvent a]",
        "package": "csound-expression-typed",
        "partial": "Event List Notes",
        "signature": "[CsdEvent a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:eff",
      "description": {
        "fct-descr": "\u003cp\u003eApplies an effect to the sound. Effect is applied to the sound on the give track. \n\u003c/p\u003e\u003cpre\u003e res = eff effect sco \n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eeffect\u003c/code\u003e - a function that takes a tuple of signals and produces \n   a tuple of signals.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esco\u003c/code\u003e - something that is constructed with \u003ccode\u003e\u003ca\u003esco\u003c/a\u003e\u003c/code\u003e or \n   \u003ccode\u003e\u003ca\u003eeff\u003c/a\u003e\u003c/code\u003e. \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWith the function \u003ccode\u003e\u003ca\u003eeff\u003c/a\u003e\u003c/code\u003e you can apply a reverb or adjust the \n level of the signal. It functions like a mixing board but unlike mixing \n board it produces the value that you can arrange with functions from your\n favorite Score-generation library. You can delay it or mix with some other track and \n apply some another effect on top of it!\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE b) -\u003e f (Mix a) -\u003e f (Mix b)",
        "fct-source": "src/Csound-Typed-Control-Mix.html#eff",
        "fct-type": "function",
        "title": "eff"
      },
      "index": {
        "description": "Applies an effect to the sound Effect is applied to the sound on the give track res eff effect sco effect function that takes tuple of signals and produces tuple of signals sco something that is constructed with sco or eff With the function eff you can apply reverb or adjust the level of the signal It functions like mixing board but unlike mixing board it produces the value that you can arrange with functions from your favorite Score-generation library You can delay it or mix with some other track and apply some another effect on top of it",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "eff",
        "normalized": "(a-\u003eSE b)-\u003ec(Mix a)-\u003ec(Mix b)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(a-\u003eSE b)-\u003ef(Mix a)-\u003ef(Mix b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:evalSE",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE a -\u003e GE a",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#evalSE",
        "fct-type": "function",
        "title": "evalSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "evalSE",
        "normalized": "SE a-\u003eGE a",
        "package": "csound-expression-typed",
        "partial": "SE",
        "signature": "SE a-\u003eGE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:execGEinSE",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE (GE a) -\u003e SE a",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#execGEinSE",
        "fct-type": "function",
        "title": "execGEinSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "execGEinSE",
        "normalized": "SE(GE a)-\u003eSE a",
        "package": "csound-expression-typed",
        "partial": "GEin SE",
        "signature": "SE(GE a)-\u003eSE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:execSE",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE () -\u003e GE InstrBody",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#execSE",
        "fct-type": "function",
        "title": "execSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "execSE",
        "normalized": "SE()-\u003eGE InstrBody",
        "package": "csound-expression-typed",
        "partial": "SE",
        "signature": "SE()-\u003eGE InstrBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:expDependency",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Maybe E",
        "fct-type": "function",
        "title": "expDependency"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "expDependency",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Dependency",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:fromDep",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Dep a -\u003e SE (GE a)",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#fromDep",
        "fct-type": "function",
        "title": "fromDep"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "fromDep",
        "normalized": "Dep a-\u003eSE(GE a)",
        "package": "csound-expression-typed",
        "partial": "Dep",
        "signature": "Dep a-\u003eSE(GE a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:fromDep_",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Dep () -\u003e SE ()",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#fromDep_",
        "fct-type": "function",
        "title": "fromDep_"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "fromDep_",
        "normalized": "Dep()-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "Dep",
        "signature": "Dep()-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:geToSe",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE a -\u003e SE a",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#geToSe",
        "fct-type": "function",
        "title": "geToSe"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "geToSe",
        "normalized": "GE a-\u003eSE a",
        "package": "csound-expression-typed",
        "partial": "To Se",
        "signature": "GE a-\u003eSE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:getIns",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE a",
        "fct-source": "src/Csound-Typed-Control.html#getIns",
        "fct-type": "function",
        "title": "getIns"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "getIns",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Ins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:hideGEinDep",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE (Dep a) -\u003e Dep a",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#hideGEinDep",
        "fct-type": "function",
        "title": "hideGEinDep"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "hideGEinDep",
        "normalized": "GE(Dep a)-\u003eDep a",
        "package": "csound-expression-typed",
        "partial": "GEin Dep",
        "signature": "GE(Dep a)-\u003eDep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:instr0",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE a -\u003e SE a",
        "fct-source": "src/Csound-Typed-Control.html#instr0",
        "fct-type": "function",
        "title": "instr0"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "instr0",
        "normalized": "SE a-\u003eSE a",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "SE a-\u003eSE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:isaw",
      "description": {
        "fct-descr": "\u003cp\u003eIntegrated sawtooth: 4 * x * (1 - x).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e Sig",
        "fct-source": "src/Csound-Typed-Control-Vco.html#isaw",
        "fct-type": "function",
        "title": "isaw"
      },
      "index": {
        "description": "Integrated sawtooth",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "isaw",
        "normalized": "Sig-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Sig-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:midi",
      "description": {
        "fct-descr": "\u003cp\u003eTriggers a midi-instrument (aka Csound's massign) for all channels. \n It's useful to test a single instrument.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(Msg -\u003e SE a) -\u003e a",
        "fct-source": "src/Csound-Typed-Control-Midi.html#midi",
        "fct-type": "function",
        "title": "midi"
      },
      "index": {
        "description": "Triggers midi-instrument aka Csound massign for all channels It useful to test single instrument",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "midi",
        "normalized": "(Msg-\u003eSE a)-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(Msg-\u003eSE a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:midi_",
      "description": {
        "fct-descr": "\u003cp\u003eTriggers a midi-procedure (aka Csound's massign) for all channels. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(Msg -\u003e SE ()) -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Control-Midi.html#midi_",
        "fct-type": "function",
        "title": "midi_"
      },
      "index": {
        "description": "Triggers midi-procedure aka Csound massign for all channels",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "midi_",
        "normalized": "(Msg-\u003eSE())-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(Msg-\u003eSE())-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:midin",
      "description": {
        "fct-descr": "\u003cp\u003eTriggers a midi-instrument (aka Csound's massign) on the specified channel. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Channel -\u003e (Msg -\u003e SE a) -\u003e a",
        "fct-source": "src/Csound-Typed-Control-Midi.html#midin",
        "fct-type": "function",
        "title": "midin"
      },
      "index": {
        "description": "Triggers midi-instrument aka Csound massign on the specified channel",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "midin",
        "normalized": "Channel-\u003e(Msg-\u003eSE a)-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Channel-\u003e(Msg-\u003eSE a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:midin_",
      "description": {
        "fct-descr": "\u003cp\u003eTriggers a midi-procedure (aka Csound's pgmassign) on the given channel. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Channel -\u003e (Msg -\u003e SE ()) -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Control-Midi.html#midin_",
        "fct-type": "function",
        "title": "midin_"
      },
      "index": {
        "description": "Triggers midi-procedure aka Csound pgmassign on the given channel",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "midin_",
        "normalized": "Channel-\u003e(Msg-\u003eSE())-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Channel-\u003e(Msg-\u003eSE())-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:mix",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a scores to the sound signals. we can use it inside the other instruments.\n Warning: if we use a score that lasts for an hour in the note that lasts for 5 seconds\n all the events would be generated, though we will hear only first five seconds.\n So the semantics is good but implementation is inefficient for such a cases \n (consider event streams for such cases). \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "f (Mix a) -\u003e a",
        "fct-source": "src/Csound-Typed-Control-Mix.html#mix",
        "fct-type": "function",
        "title": "mix"
      },
      "index": {
        "description": "Renders scores to the sound signals we can use it inside the other instruments Warning if we use score that lasts for an hour in the note that lasts for seconds all the events would be generated though we will hear only first five seconds So the semantics is good but implementation is inefficient for such cases consider event streams for such cases",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "mix",
        "normalized": "a(Mix b)-\u003eb",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "f(Mix a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:mixBy",
      "description": {
        "fct-descr": "\u003cp\u003eImitates a closure for a bunch of notes to be played within another instrument. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e f (Mix b)) -\u003e a -\u003e b",
        "fct-source": "src/Csound-Typed-Control-Mix.html#mixBy",
        "fct-type": "function",
        "title": "mixBy"
      },
      "index": {
        "description": "Imitates closure for bunch of notes to be played within another instrument",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "mixBy",
        "normalized": "(a-\u003eb(Mix c))-\u003ea-\u003ec",
        "package": "csound-expression-typed",
        "partial": "By",
        "signature": "(a-\u003ef(Mix b))-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:mixBy_",
      "description": {
        "fct-descr": "\u003cp\u003eImitates a closure for a bunch of procedures to be played within another instrument. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e f (Mix Unit)) -\u003e a -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Control-Mix.html#mixBy_",
        "fct-type": "function",
        "title": "mixBy_"
      },
      "index": {
        "description": "Imitates closure for bunch of procedures to be played within another instrument",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "mixBy_",
        "normalized": "(a-\u003eb(Mix Unit))-\u003ea-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "By",
        "signature": "(a-\u003ef(Mix Unit))-\u003ea-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:mix_",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a bunch of procedures scheduled with scores to a single procedure.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "f (Mix Unit) -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Control-Mix.html#mix_",
        "fct-type": "function",
        "title": "mix_"
      },
      "index": {
        "description": "Converts bunch of procedures scheduled with scores to single procedure",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "mix_",
        "normalized": "a(Mix Unit)-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "f(Mix Unit)-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:newLocalVar",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Rate -\u003e GE E -\u003e SE Var",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#newLocalVar",
        "fct-type": "function",
        "title": "newLocalVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "newLocalVar",
        "normalized": "Rate-\u003eGE E-\u003eSE Var",
        "package": "csound-expression-typed",
        "partial": "Local Var",
        "signature": "Rate-\u003eGE E-\u003eSE Var"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:newLocalVarId",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-type": "function",
        "title": "newLocalVarId"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "newLocalVarId",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Local Var Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:newLocalVars",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[Rate] -\u003e GE [E] -\u003e SE [Var]",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#newLocalVars",
        "fct-type": "function",
        "title": "newLocalVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "newLocalVars",
        "normalized": "[Rate]-\u003eGE[E]-\u003eSE[Var]",
        "package": "csound-expression-typed",
        "partial": "Local Vars",
        "signature": "[Rate]-\u003eGE[E]-\u003eSE[Var]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:newSERef",
      "description": {
        "fct-descr": "\u003cp\u003eAllocates a new mutable value and initializes it with value. \n A reference can contain a tuple of variables.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e SE (SERef a)",
        "fct-source": "src/Csound-Typed-Control-SERef.html#newSERef",
        "fct-type": "function",
        "title": "newSERef"
      },
      "index": {
        "description": "Allocates new mutable value and initializes it with value reference can contain tuple of variables",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "newSERef",
        "normalized": "a-\u003eSE(SERef a)",
        "package": "csound-expression-typed",
        "partial": "SERef",
        "signature": "a-\u003eSE(SERef a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:pgmidi",
      "description": {
        "fct-descr": "\u003cp\u003eTriggers a midi-instrument (aka Csound's pgmassign) on the specified programm bank. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Maybe Int -\u003e Channel -\u003e (Msg -\u003e SE a) -\u003e a",
        "fct-source": "src/Csound-Typed-Control-Midi.html#pgmidi",
        "fct-type": "function",
        "title": "pgmidi"
      },
      "index": {
        "description": "Triggers midi-instrument aka Csound pgmassign on the specified programm bank",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "pgmidi",
        "normalized": "Maybe Int-\u003eChannel-\u003e(Msg-\u003eSE a)-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Maybe Int-\u003eChannel-\u003e(Msg-\u003eSE a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:pgmidi_",
      "description": {
        "fct-descr": "\u003cp\u003eTriggers a midi-procedure (aka Csound's pgmassign) on the given programm bank. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Maybe Int -\u003e Channel -\u003e (Msg -\u003e SE ()) -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Control-Midi.html#pgmidi_",
        "fct-type": "function",
        "title": "pgmidi_"
      },
      "index": {
        "description": "Triggers midi-procedure aka Csound pgmassign on the given programm bank",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "pgmidi_",
        "normalized": "Maybe Int-\u003eChannel-\u003e(Msg-\u003eSE())-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Maybe Int-\u003eChannel-\u003e(Msg-\u003eSE())-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:pulse",
      "description": {
        "fct-descr": "\u003cp\u003ePulse (not normalized).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e Sig",
        "fct-source": "src/Csound-Typed-Control-Vco.html#pulse",
        "fct-type": "function",
        "title": "pulse"
      },
      "index": {
        "description": "Pulse not normalized",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "pulse",
        "normalized": "Sig-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Sig-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:readSERef",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE a",
        "fct-source": "src/Csound-Typed-Control-SERef.html#SERef",
        "fct-type": "function",
        "title": "readSERef"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "readSERef",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "SERef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:runSE",
      "description": {
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE a -\u003e GE (a, LocalHistory)",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#runSE",
        "fct-type": "function",
        "title": "runSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "runSE",
        "normalized": "SE a-\u003eGE(a,LocalHistory)",
        "package": "csound-expression-typed",
        "partial": "SE",
        "signature": "SE a-\u003eGE(a,LocalHistory)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:saw",
      "description": {
        "fct-descr": "\u003cp\u003eA sawtooth.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e Sig",
        "fct-source": "src/Csound-Typed-Control-Vco.html#saw",
        "fct-type": "function",
        "title": "saw"
      },
      "index": {
        "description": "sawtooth",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "saw",
        "normalized": "Sig-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Sig-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sched",
      "description": {
        "fct-descr": "\u003cp\u003eIt's like the function \u003ccode\u003etrig\u003c/code\u003e, but delay is set to zero.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE b) -\u003e Evt (D, a) -\u003e b",
        "fct-source": "src/Csound-Typed-Control-Evt.html#sched",
        "fct-type": "function",
        "title": "sched"
      },
      "index": {
        "description": "It like the function trig but delay is set to zero",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "sched",
        "normalized": "(a-\u003eSE b)-\u003eEvt(D,a)-\u003eb",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(a-\u003eSE b)-\u003eEvt(D,a)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:schedBy",
      "description": {
        "fct-descr": "\u003cp\u003eA closure to trigger an instrument inside the body of another instrument.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE b) -\u003e (c -\u003e Evt (D, a)) -\u003e c -\u003e b",
        "fct-source": "src/Csound-Typed-Control-Evt.html#schedBy",
        "fct-type": "function",
        "title": "schedBy"
      },
      "index": {
        "description": "closure to trigger an instrument inside the body of another instrument",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "schedBy",
        "normalized": "(a-\u003eSE b)-\u003e(c-\u003eEvt(D,a))-\u003ec-\u003eb",
        "package": "csound-expression-typed",
        "partial": "By",
        "signature": "(a-\u003eSE b)-\u003e(c-\u003eEvt(D,a))-\u003ec-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:schedHarp",
      "description": {
        "fct-descr": "\u003cp\u003eAn instrument is triggered with event stream and delay time is set to zero \n (event fires immediately) and duration is set to inifinite time. The note is \n held while the instrument is producing something. If the instrument is silent\n for some seconds (specified in the first argument) then it's turned off.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "D -\u003e (a -\u003e SE b) -\u003e Evt a -\u003e b",
        "fct-source": "src/Csound-Typed-Control-Evt.html#schedHarp",
        "fct-type": "function",
        "title": "schedHarp"
      },
      "index": {
        "description": "An instrument is triggered with event stream and delay time is set to zero event fires immediately and duration is set to inifinite time The note is held while the instrument is producing something If the instrument is silent for some seconds specified in the first argument then it turned off",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "schedHarp",
        "normalized": "D-\u003e(a-\u003eSE b)-\u003eEvt a-\u003eb",
        "package": "csound-expression-typed",
        "partial": "Harp",
        "signature": "D-\u003e(a-\u003eSE b)-\u003eEvt a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:schedHarpBy",
      "description": {
        "fct-descr": "\u003cp\u003eA closure to trigger an instrument inside the body of another instrument.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "D -\u003e (a -\u003e SE b) -\u003e (c -\u003e Evt a) -\u003e c -\u003e b",
        "fct-source": "src/Csound-Typed-Control-Evt.html#schedHarpBy",
        "fct-type": "function",
        "title": "schedHarpBy"
      },
      "index": {
        "description": "closure to trigger an instrument inside the body of another instrument",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "schedHarpBy",
        "normalized": "D-\u003e(a-\u003eSE b)-\u003e(c-\u003eEvt a)-\u003ec-\u003eb",
        "package": "csound-expression-typed",
        "partial": "Harp By",
        "signature": "D-\u003e(a-\u003eSE b)-\u003e(c-\u003eEvt a)-\u003ec-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sched_",
      "description": {
        "fct-descr": "\u003cp\u003eTriggers a procedure on the event stream. A delay time is set to zero.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE ()) -\u003e Evt (D, a) -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Control-Evt.html#sched_",
        "fct-type": "function",
        "title": "sched_"
      },
      "index": {
        "description": "Triggers procedure on the event stream delay time is set to zero",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "sched_",
        "normalized": "(a-\u003eSE())-\u003eEvt(D,a)-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(a-\u003eSE())-\u003eEvt(D,a)-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sco",
      "description": {
        "fct-descr": "\u003cp\u003ePlays a bunch of notes with the given instrument.\n\u003c/p\u003e\u003cpre\u003e res = sco instrument scores \n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE b) -\u003e f a -\u003e f (Mix b)",
        "fct-source": "src/Csound-Typed-Control-Mix.html#sco",
        "fct-type": "function",
        "title": "sco"
      },
      "index": {
        "description": "Plays bunch of notes with the given instrument res sco instrument scores",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "sco",
        "normalized": "(a-\u003eSE b)-\u003ec a-\u003ec(Mix b)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(a-\u003eSE b)-\u003ef a-\u003ef(Mix b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sco_",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes a procedure for the given bunch of events.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE ()) -\u003e f a -\u003e f (Mix Unit)",
        "fct-source": "src/Csound-Typed-Control-Mix.html#sco_",
        "fct-type": "function",
        "title": "sco_"
      },
      "index": {
        "description": "Invokes procedure for the given bunch of events",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "sco_",
        "normalized": "(a-\u003eSE())-\u003eb a-\u003eb(Mix Unit)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(a-\u003eSE())-\u003ef a-\u003ef(Mix Unit)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sensorsSE",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for the function \u003ccode\u003enewSERef\u003c/code\u003e. It returns not the reference\n to mutable value but a pair of reader and writer functions.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e SE (SE a, a -\u003e SE ())",
        "fct-source": "src/Csound-Typed-Control-SERef.html#sensorsSE",
        "fct-type": "function",
        "title": "sensorsSE"
      },
      "index": {
        "description": "An alias for the function newSERef It returns not the reference to mutable value but pair of reader and writer functions",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "sensorsSE",
        "normalized": "a-\u003eSE(SE a,a-\u003eSE())",
        "package": "csound-expression-typed",
        "partial": "SE",
        "signature": "a-\u003eSE(SE a,a-\u003eSE())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:singleCsdEvent",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a scores that contains only one event. The event happens immediately and lasts for 1 second.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "CsdEvent a -\u003e f a",
        "fct-type": "method",
        "title": "singleCsdEvent"
      },
      "index": {
        "description": "Constructs scores that contains only one event The event happens immediately and lasts for second",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "singleCsdEvent",
        "normalized": "CsdEvent a-\u003eb a",
        "package": "csound-expression-typed",
        "partial": "Csd Event",
        "signature": "CsdEvent a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sqr",
      "description": {
        "fct-descr": "\u003cp\u003eA square wave.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e Sig",
        "fct-source": "src/Csound-Typed-Control-Vco.html#sqr",
        "fct-type": "function",
        "title": "sqr"
      },
      "index": {
        "description": "square wave",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "sqr",
        "normalized": "Sig-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Sig-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:toCsdEventList",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a given score representation to the canonical one.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "f a -\u003e CsdEventList a",
        "fct-type": "method",
        "title": "toCsdEventList"
      },
      "index": {
        "description": "Converts given score representation to the canonical one",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "toCsdEventList",
        "normalized": "a b-\u003eCsdEventList b",
        "package": "csound-expression-typed",
        "partial": "Csd Event List",
        "signature": "f a-\u003eCsdEventList a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:tri",
      "description": {
        "fct-descr": "\u003cp\u003eA triangle wave.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e Sig",
        "fct-source": "src/Csound-Typed-Control-Vco.html#tri",
        "fct-type": "function",
        "title": "tri"
      },
      "index": {
        "description": "triangle wave",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "tri",
        "normalized": "Sig-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Sig-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:trig",
      "description": {
        "fct-descr": "\u003cp\u003eTriggers an instrument with an event stream. The event stream\n contains triples:\n\u003c/p\u003e\u003cpre\u003e (delay_after_event_is_fired, duration_of_the_event, argument_for_the_instrument)\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE b) -\u003e Evt (D, D, a) -\u003e b",
        "fct-source": "src/Csound-Typed-Control-Evt.html#trig",
        "fct-type": "function",
        "title": "trig"
      },
      "index": {
        "description": "Triggers an instrument with an event stream The event stream contains triples delay after event is fired duration of the event argument for the instrument",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "trig",
        "normalized": "(a-\u003eSE b)-\u003eEvt(D,D,a)-\u003eb",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(a-\u003eSE b)-\u003eEvt(D,D,a)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:trigBy",
      "description": {
        "fct-descr": "\u003cp\u003eA closure to trigger an instrument inside the body of another instrument.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE b) -\u003e (c -\u003e Evt (D, D, a)) -\u003e c -\u003e b",
        "fct-source": "src/Csound-Typed-Control-Evt.html#trigBy",
        "fct-type": "function",
        "title": "trigBy"
      },
      "index": {
        "description": "closure to trigger an instrument inside the body of another instrument",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "trigBy",
        "normalized": "(a-\u003eSE b)-\u003e(c-\u003eEvt(D,D,a))-\u003ec-\u003eb",
        "package": "csound-expression-typed",
        "partial": "By",
        "signature": "(a-\u003eSE b)-\u003e(c-\u003eEvt(D,D,a))-\u003ec-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:trig_",
      "description": {
        "fct-descr": "\u003cp\u003eTriggers a procedure on the event stream.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE ()) -\u003e Evt (D, D, a) -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Control-Evt.html#trig_",
        "fct-type": "function",
        "title": "trig_"
      },
      "index": {
        "description": "Triggers procedure on the event stream",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "trig_",
        "normalized": "(a-\u003eSE())-\u003eEvt(D,D,a)-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(a-\u003eSE())-\u003eEvt(D,D,a)-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:unSE",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Dep a",
        "fct-source": "src/Csound-Typed-GlobalState-SE.html#SE",
        "fct-type": "function",
        "title": "unSE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "unSE",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "SE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:writeSERef",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Control",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Control-SERef.html#SERef",
        "fct-type": "function",
        "title": "writeSERef"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Control",
        "module": "Csound.Typed.Control",
        "name": "writeSERef",
        "normalized": "a-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "SERef",
        "signature": "a-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "module",
        "fct-source": "src/Csound-Typed-Gui.html",
        "fct-type": "module",
        "title": "Gui"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Gui",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:BorderType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BorderType",
        "fct-type": "data",
        "title": "BorderType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "BorderType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Border Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:BoxType",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the box. Some values are not implemented on the Csound level.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "data",
        "title": "BoxType"
      },
      "index": {
        "description": "The type of the box Some values are not implemented on the Csound level",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "BoxType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Box Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:ButtonType",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the button. It affects toggle buttons and button banks.\n\u003c/p\u003e\u003cp\u003eIn Csound buttons and toggle buttons\n are constructed with the same function (but with different button types). \n But in this library they are contructed by different functions (\u003ccode\u003ebutton\u003c/code\u003e and \u003ccode\u003etoggle\u003c/code\u003e). \n Normal button is a plain old button, but other values specify toggle buttons.\n So this property doesn't affect the buttons (since they could be only normal buttons).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ButtonType",
        "fct-type": "data",
        "title": "ButtonType"
      },
      "index": {
        "description": "The type of the button It affects toggle buttons and button banks In Csound buttons and toggle buttons are constructed with the same function but with different button types But in this library they are contructed by different functions button and toggle Normal button is plain old button but other values specify toggle buttons So this property doesn affect the buttons since they could be only normal buttons",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ButtonType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Button Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eThe Csound colours. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Color",
        "fct-type": "type",
        "title": "Color"
      },
      "index": {
        "description": "The Csound colours",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Color",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Display",
      "description": {
        "fct-descr": "\u003cp\u003eA static element. We can only look at it.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#Display",
        "fct-type": "type",
        "title": "Display"
      },
      "index": {
        "description": "static element We can only look at it",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Display",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Display",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Elem",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "data",
        "title": "Elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Elem",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Emphasis",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Emphasis",
        "fct-type": "data",
        "title": "Emphasis"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Emphasis",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Emphasis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:FontType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#FontType",
        "fct-type": "data",
        "title": "FontType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "FontType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Font Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Gui",
      "description": {
        "fct-descr": "\u003cp\u003eA visual representation of the GUI-element.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Gui",
        "fct-type": "newtype",
        "title": "Gui"
      },
      "index": {
        "description": "visual representation of the GUI-element",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Gui",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:GuiHandle",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#GuiHandle",
        "fct-type": "newtype",
        "title": "GuiHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "GuiHandle",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:GuiNode",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#GuiNode",
        "fct-type": "data",
        "title": "GuiNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "GuiNode",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:InitMe",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#InitMe",
        "fct-type": "data",
        "title": "InitMe"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "InitMe",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Init Me",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Inner",
      "description": {
        "fct-descr": "\u003cp\u003eWidgets that just do something inside them or have an inner state.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#Inner",
        "fct-type": "type",
        "title": "Inner"
      },
      "index": {
        "description": "Widgets that just do something inside them or have an inner state",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Inner",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Inner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Input",
      "description": {
        "fct-descr": "\u003cp\u003eWidgets that produce something has inputs.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#Input",
        "fct-type": "type",
        "title": "Input"
      },
      "index": {
        "description": "Widgets that produce something has inputs",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Input",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eKeys.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "Keys",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Key",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:KeyEvt",
      "description": {
        "fct-descr": "\u003cp\u003eKeyboard events.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#KeyEvt",
        "fct-type": "data",
        "title": "KeyEvt"
      },
      "index": {
        "description": "Keyboard events",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "KeyEvt",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Key Evt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:KnobType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#KnobType",
        "fct-type": "data",
        "title": "KnobType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "KnobType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Knob Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:LabelType",
      "description": {
        "fct-descr": "\u003cp\u003eSome values are not implemented on the Csound level.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#LabelType",
        "fct-type": "data",
        "title": "LabelType"
      },
      "index": {
        "description": "Some values are not implemented on the Csound level",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "LabelType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Label Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Material",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of the material of the element. It affects sliders and buttons.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Material",
        "fct-type": "data",
        "title": "Material"
      },
      "index": {
        "description": "The type of the material of the element It affects sliders and buttons",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Material",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Material",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Orient",
      "description": {
        "fct-descr": "\u003cp\u003eThe orientation of the widget (slider, roller). This property is \n never needs to be set in practice. If this property is not set then \n default orientation is calculated from the bounding box of the widget.\n If the width is greater than the height then we need to use a horizontal\n widget otherwise it should be a vertical one.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Orient",
        "fct-type": "data",
        "title": "Orient"
      },
      "index": {
        "description": "The orientation of the widget slider roller This property is never needs to be set in practice If this property is not set then default orientation is calculated from the bounding box of the widget If the width is greater than the height then we need to use horizontal widget otherwise it should be vertical one",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Orient",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Orient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Output",
      "description": {
        "fct-descr": "\u003cp\u003eWidgets that consume something has outputs.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#Output",
        "fct-type": "type",
        "title": "Output"
      },
      "index": {
        "description": "Widgets that consume something has outputs",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Output",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Panel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Panel",
        "fct-type": "data",
        "title": "Panel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Panel",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Panel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Prop",
      "description": {
        "fct-descr": "\u003cp\u003eProperties of the widgets.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "data",
        "title": "Prop"
      },
      "index": {
        "description": "Properties of the widgets",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Prop",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Prop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Rect",
      "description": {
        "fct-descr": "\u003cp\u003eA rectangle.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
        "fct-type": "data",
        "title": "Rect"
      },
      "index": {
        "description": "rectangle",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Rect",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Rect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Sink",
      "description": {
        "fct-descr": "\u003cp\u003eA consumer of the values.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#Sink",
        "fct-type": "type",
        "title": "Sink"
      },
      "index": {
        "description": "consumer of the values",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Sink",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:SliderType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#SliderType",
        "fct-type": "data",
        "title": "SliderType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SliderType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Slider Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Source",
      "description": {
        "fct-descr": "\u003cp\u003eA producer of the values.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#Source",
        "fct-type": "type",
        "title": "Source"
      },
      "index": {
        "description": "producer of the values",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Source",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:TextType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#TextType",
        "fct-type": "data",
        "title": "TextType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "TextType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Text Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:ValDiap",
      "description": {
        "fct-descr": "\u003cp\u003eThe diapason of the continuous value.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValDiap",
        "fct-type": "data",
        "title": "ValDiap"
      },
      "index": {
        "description": "The diapason of the continuous value",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ValDiap",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Val Diap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:ValScaleType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValScaleType",
        "fct-type": "data",
        "title": "ValScaleType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ValScaleType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Val Scale Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:ValSpan",
      "description": {
        "fct-descr": "\u003cp\u003eA value span is a diapason of the value and a type \n of the scale (can be linear or exponential).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValSpan",
        "fct-type": "data",
        "title": "ValSpan"
      },
      "index": {
        "description": "value span is diapason of the value and type of the scale can be linear or exponential",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ValSpan",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Val Span",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:ValStep",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValStep",
        "fct-type": "type",
        "title": "ValStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ValStep",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Val Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Widget",
      "description": {
        "fct-descr": "\u003cp\u003eA widget consists of visible element (Gui), value consumer (Output) \n and producer (Input) and an inner state (Inner).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#Widget",
        "fct-type": "type",
        "title": "Widget"
      },
      "index": {
        "description": "widget consists of visible element Gui value consumer Output and producer Input and an inner state Inner",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Widget",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Widget",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Win",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Win",
        "fct-type": "data",
        "title": "Win"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Win",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Win",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ArrowDown",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ArrowDown",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "ArrowDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ArrowDown",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Arrow Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ArrowLeft",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ArrowLeft",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "ArrowLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ArrowLeft",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Arrow Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ArrowRight",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ArrowRight",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "ArrowRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ArrowRight",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Arrow Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ArrowUp",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ArrowUp",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "ArrowUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ArrowUp",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Arrow Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Backspace",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Backspace",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Backspace"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Backspace",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Backspace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:BlackLine",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BlackLine",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BorderType",
        "fct-type": "function",
        "title": "BlackLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "BlackLine",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Black Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Bold",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Bold",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Emphasis",
        "fct-type": "function",
        "title": "Bold"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Bold",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Bold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:BoldItalic",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BoldItalic",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Emphasis",
        "fct-type": "function",
        "title": "BoldItalic"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "BoldItalic",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Bold Italic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:BorderBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BorderBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "BorderBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "BorderBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Border Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Box",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Box String",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Box"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Box",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ButBank",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ButBank Int Int",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "ButBank"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ButBank",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "But Bank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Button",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Button InstrId",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Button"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Button",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:CapsLook",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "CapsLook",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "CapsLook"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "CapsLook",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Caps Look",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:CharKey",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "CharKey Char",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "CharKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "CharKey",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Char Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:CheckButton",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "CheckButton",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ButtonType",
        "fct-type": "function",
        "title": "CheckButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "CheckButton",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Check Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Clock",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Clock",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#KnobType",
        "fct-type": "function",
        "title": "Clock"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Clock",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Clock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Count",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Count ValDiap ValStep (Maybe ValStep)",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Count"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Count",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Courier",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Courier",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#FontType",
        "fct-type": "function",
        "title": "Courier"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Courier",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Courier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Delete",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Delete",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Delete",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:DiamondDownBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "DiamondDownBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "DiamondDownBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "DiamondDownBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Diamond Down Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:DiamondUpBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "DiamondUpBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "DiamondUpBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "DiamondUpBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Diamond Up Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Dingbats",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Dingbats",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#FontType",
        "fct-type": "function",
        "title": "Dingbats"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Dingbats",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Dingbats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:DownBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "DownBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "DownBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "DownBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Down Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:DownBoxBorder",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "DownBoxBorder",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BorderType",
        "fct-type": "function",
        "title": "DownBoxBorder"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "DownBoxBorder",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Down Box Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EmbossedBorder",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "EmbossedBorder",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BorderType",
        "fct-type": "function",
        "title": "EmbossedBorder"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "EmbossedBorder",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Embossed Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EmbossedBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "EmbossedBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "EmbossedBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "EmbossedBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Embossed Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EmbossedLabel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "EmbossedLabel",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#LabelType",
        "fct-type": "function",
        "title": "EmbossedLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "EmbossedLabel",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Embossed Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:End",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "End",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "End"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "End",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Engraved",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Engraved",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#SliderType",
        "fct-type": "function",
        "title": "Engraved"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Engraved",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Engraved",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EngravedBorder",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "EngravedBorder",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BorderType",
        "fct-type": "function",
        "title": "EngravedBorder"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "EngravedBorder",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Engraved Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EngravedBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "EngravedBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "EngravedBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "EngravedBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Engraved Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EngravedLabel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "EngravedLabel",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#LabelType",
        "fct-type": "function",
        "title": "EngravedLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "EngravedLabel",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Engraved Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Enter",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Enter",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Enter"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Enter",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Enter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Exponential",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Exponential",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValScaleType",
        "fct-type": "function",
        "title": "Exponential"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Exponential",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Exponential",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F1",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F1",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F1"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F1",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F10",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F10",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F10"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F10",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F11",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F11",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F11"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F11",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F12",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F12",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F12"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F12",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F2",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F2",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F2"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F2",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F3",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F3",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F3"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F3",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F4",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F4",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F4"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F4",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F5",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F5",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F5"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F5",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F6",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F6",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F6"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F6",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F7",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F7",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F7"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F7",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F8",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F8",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F8"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F8",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F9",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "F9",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "F9"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "F9",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Fill",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Fill",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#SliderType",
        "fct-type": "function",
        "title": "Fill"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Fill",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Fill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Flat",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Flat",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#KnobType",
        "fct-type": "function",
        "title": "Flat"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Flat",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Flat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:FlatBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "FlatBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "FlatBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "FlatBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Flat Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Gui",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Gui",
        "fct-type": "function",
        "title": "Gui"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Gui",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:GuiHandle",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GuiHandle",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#GuiHandle",
        "fct-type": "function",
        "title": "GuiHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "GuiHandle",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:GuiNode",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GuiNode",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#GuiNode",
        "fct-type": "function",
        "title": "GuiNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "GuiNode",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:GuiVar",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GuiVar GuiHandle",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "GuiVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "GuiVar",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Helvetica",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Helvetica",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#FontType",
        "fct-type": "function",
        "title": "Helvetica"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Helvetica",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Helvetica",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Home",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Home",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Home"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Home",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Home",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Hor",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Hor",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Orient",
        "fct-type": "function",
        "title": "Hor"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Hor",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Hor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:InitMe",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "InitMe",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#InitMe",
        "fct-type": "function",
        "title": "InitMe"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "InitMe",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Init Me",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Insert",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Insert",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Insert",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Insert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Italic",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Italic",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Emphasis",
        "fct-type": "function",
        "title": "Italic"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Italic",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Italic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Joy",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Joy ValSpan ValSpan",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Joy"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Joy",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Joy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Knob",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Knob ValSpan",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Knob"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Knob",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Knob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:LeftAlt",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "LeftAlt",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "LeftAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "LeftAlt",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Left Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:LeftCtrl",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "LeftCtrl",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "LeftCtrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "LeftCtrl",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Left Ctrl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:LeftShift",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "LeftShift",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "LeftShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "LeftShift",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Left Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:LeftWinKey",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "LeftWinKey",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "LeftWinKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "LeftWinKey",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Left Win Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:LightButton",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "LightButton",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ButtonType",
        "fct-type": "function",
        "title": "LightButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "LightButton",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Light Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Linear",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Linear",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValScaleType",
        "fct-type": "function",
        "title": "Linear"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Linear",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Linear",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Nice",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Nice",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#SliderType",
        "fct-type": "function",
        "title": "Nice"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Nice",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Nice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoBorder",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NoBorder",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BorderType",
        "fct-type": "function",
        "title": "NoBorder"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NoBorder",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "No Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoDrag",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NoDrag",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#TextType",
        "fct-type": "function",
        "title": "NoDrag"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NoDrag",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "No Drag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoEdit",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NoEdit",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#TextType",
        "fct-type": "function",
        "title": "NoEdit"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NoEdit",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "No Edit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoEmphasis",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NoEmphasis",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Emphasis",
        "fct-type": "function",
        "title": "NoEmphasis"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NoEmphasis",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "No Emphasis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoLabel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NoLabel",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#LabelType",
        "fct-type": "function",
        "title": "NoLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NoLabel",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "No Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoPlastic",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NoPlastic",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Material",
        "fct-type": "function",
        "title": "NoPlastic"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NoPlastic",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "No Plastic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NormalButton",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NormalButton",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ButtonType",
        "fct-type": "function",
        "title": "NormalButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NormalButton",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Normal Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NormalLabel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NormalLabel",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#LabelType",
        "fct-type": "function",
        "title": "NormalLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NormalLabel",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Normal Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NormalText",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NormalText",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#TextType",
        "fct-type": "function",
        "title": "NormalText"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NormalText",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Normal Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num0",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Num0",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Num0"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Num0",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num1",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Num1",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Num1"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Num1",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num2",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Num2",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Num2"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Num2",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num3",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Num3",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Num3"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Num3",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num4",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Num4",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Num4"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Num4",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num5",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Num5",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Num5"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Num5",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num6",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Num6",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Num6"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Num6",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num7",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Num7",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Num7"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Num7",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num8",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Num8",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Num8"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Num8",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num9",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Num9",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Num9"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Num9",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumArrowDown",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumArrowDown",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumArrowDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumArrowDown",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Arrow Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumArrowLeft",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumArrowLeft",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumArrowLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumArrowLeft",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Arrow Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumArrowRight",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumArrowRight",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumArrowRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumArrowRight",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Arrow Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumArrowUp",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumArrowUp",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumArrowUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumArrowUp",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Arrow Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumDel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumDel",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumDel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumDel",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Del",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumDiv",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumDiv",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumDiv",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumDot",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumDot",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumDot"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumDot",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Dot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumEnd",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumEnd",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumEnd",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumEnter",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumEnter",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumEnter"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumEnter",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Enter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumHome",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumHome",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumHome"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumHome",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Home",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumIns",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumIns",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumIns"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumIns",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Ins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumLock",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumLock",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumLock"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumLock",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumMul",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumMul",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumMul"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumMul",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Mul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumPgDown",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumPgDown",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumPgDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumPgDown",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Pg Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumPgUp",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumPgUp",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumPgUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumPgUp",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Pg Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumPlus",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumPlus",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumPlus",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumSpace",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumSpace",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumSpace",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumSub",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "NumSub",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "NumSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "NumSub",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Num Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:OvalBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "OvalBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "OvalBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "OvalBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Oval Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:OvalFlatBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "OvalFlatBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "OvalFlatBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "OvalFlatBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Oval Flat Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:OvalShadowBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "OvalShadowBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "OvalShadowBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "OvalShadowBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Oval Shadow Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:PgDown",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "PgDown",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "PgDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "PgDown",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Pg Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:PgUp",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "PgUp",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "PgUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "PgUp",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Pg Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Pie",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Pie",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#KnobType",
        "fct-type": "function",
        "title": "Pie"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Pie",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Pie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Plastic",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Plastic",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Material",
        "fct-type": "function",
        "title": "Plastic"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Plastic",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Plastic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Press",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Press Key",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#KeyEvt",
        "fct-type": "function",
        "title": "Press"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Press",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Press",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Rect",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Rect",
        "fct-source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
        "fct-type": "function",
        "title": "Rect"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Rect",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Rect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Release",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Release Key",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#KeyEvt",
        "fct-type": "function",
        "title": "Release"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Release",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Release",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RightAlt",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "RightAlt",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "RightAlt"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "RightAlt",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Right Alt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RightCtrl",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "RightCtrl",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "RightCtrl"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "RightCtrl",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Right Ctrl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RightShift",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "RightShift",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "RightShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "RightShift",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Right Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RightWinKey",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "RightWinKey",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "RightWinKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "RightWinKey",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Right Win Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Roller",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Roller ValSpan ValStep",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Roller"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Roller",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Roller",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RoundButton",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "RoundButton",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ButtonType",
        "fct-type": "function",
        "title": "RoundButton"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "RoundButton",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Round Button",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RoundedDownBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "RoundedDownBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "RoundedDownBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "RoundedDownBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Rounded Down Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RoundedFlatBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "RoundedFlatBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "RoundedFlatBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "RoundedFlatBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Rounded Flat Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RoundedShadowBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "RoundedShadowBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "RoundedShadowBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "RoundedShadowBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Rounded Shadow Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RoundedUpBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "RoundedUpBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "RoundedUpBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "RoundedUpBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Rounded Up Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Roundedbox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Roundedbox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "Roundedbox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Roundedbox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Roundedbox",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Screen",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Screen",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#FontType",
        "fct-type": "function",
        "title": "Screen"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Screen",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Screen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Scroll",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Scroll",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#Key",
        "fct-type": "function",
        "title": "Scroll"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Scroll",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Scroll",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetBoxType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetBoxType BoxType",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetBoxType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetBoxType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Box Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetButtonType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetButtonType ButtonType",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetButtonType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetButtonType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Button Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetColor1",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetColor1 Color",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetColor1"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetColor1",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetColor2",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetColor2 Color",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetColor2"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetColor2",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetEmphasis",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetEmphasis Emphasis",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetEmphasis"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetEmphasis",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Emphasis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetFontSize",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetFontSize Int",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetFontSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetFontSize",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Font Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetFontType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetFontType FontType",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetFontType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetFontType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Font Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetKnobType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetKnobType KnobType",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetKnobType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetKnobType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Knob Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetLabel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetLabel String",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetLabel",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetLabelType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetLabelType LabelType",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetLabelType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetLabelType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Label Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetMaterial",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetMaterial Material",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetMaterial"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetMaterial",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Material",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetOrient",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetOrient Orient",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetOrient"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetOrient",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Orient",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetSliderType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetSliderType SliderType",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetSliderType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetSliderType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Slider Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetTextColor",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetTextColor Color",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetTextColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetTextColor",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Text Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetTextType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SetTextType TextType",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Prop",
        "fct-type": "function",
        "title": "SetTextType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SetTextType",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Set Text Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ShadowBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ShadowBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "ShadowBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ShadowBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Shadow Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ShadowLabel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ShadowLabel",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#LabelType",
        "fct-type": "function",
        "title": "ShadowLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ShadowLabel",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Shadow Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Single",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Single",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Panel",
        "fct-type": "function",
        "title": "Single"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Single",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Slider",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Slider ValSpan",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Slider"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Slider",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Slider",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Symbol",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Symbol",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#FontType",
        "fct-type": "function",
        "title": "Symbol"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Symbol",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Symbol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SymbolLabel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SymbolLabel",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#LabelType",
        "fct-type": "function",
        "title": "SymbolLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "SymbolLabel",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Symbol Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Tabs",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Tabs",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Panel",
        "fct-type": "function",
        "title": "Tabs"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Tabs",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tabs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Text",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Text ValDiap ValStep",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Text",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ThinDown",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ThinDown",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BorderType",
        "fct-type": "function",
        "title": "ThinDown"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ThinDown",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Thin Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ThinDownBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ThinDownBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "ThinDownBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ThinDownBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Thin Down Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ThinUp",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ThinUp",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BorderType",
        "fct-type": "function",
        "title": "ThinUp"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ThinUp",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Thin Up",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ThinUpBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ThinUpBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "ThinUpBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ThinUpBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Thin Up Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ThreeD",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ThreeD (Maybe Int)",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#KnobType",
        "fct-type": "function",
        "title": "ThreeD"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ThreeD",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Three",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Times",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Times",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#FontType",
        "fct-type": "function",
        "title": "Times"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Times",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Toggle",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Toggle",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Toggle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Toggle",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Toggle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:UpBox",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "UpBox",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BoxType",
        "fct-type": "function",
        "title": "UpBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "UpBox",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Up Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:UpBoxBorder",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "UpBoxBorder",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#BorderType",
        "fct-type": "function",
        "title": "UpBoxBorder"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "UpBoxBorder",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Up Box Border",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ValDiap",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ValDiap",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValDiap",
        "fct-type": "function",
        "title": "ValDiap"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ValDiap",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Val Diap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ValSpan",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ValSpan",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValSpan",
        "fct-type": "function",
        "title": "ValSpan"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ValSpan",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Val Span",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Value",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Value",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Value",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Ver",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Ver",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Orient",
        "fct-type": "function",
        "title": "Ver"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Ver",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Ver",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Vkeybd",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Vkeybd",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Elem",
        "fct-type": "function",
        "title": "Vkeybd"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Vkeybd",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Vkeybd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Win",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Win",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Win",
        "fct-type": "function",
        "title": "Win"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "Win",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Win",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:box",
      "description": {
        "fct-descr": "\u003cp\u003eA FLTK widget that displays text inside of a box.\n If the text is longer than 255 characters the text\n is split on several parts (Csound limitations).\n\u003c/p\u003e\u003cpre\u003e box text\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLbox.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Display",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#box",
        "fct-type": "function",
        "title": "box"
      },
      "index": {
        "description": "FLTK widget that displays text inside of box If the text is longer than characters the text is split on several parts Csound limitations box text doc http www.csounds.com manual html FLbox.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "box",
        "normalized": "String-\u003eDisplay",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "String-\u003eDisplay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:bspan",
      "description": {
        "fct-descr": "\u003cp\u003eBipolar unit span. A special case:\n\u003c/p\u003e\u003cpre\u003e uspan = linSpan (-1) 1\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ValSpan",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#bspan",
        "fct-type": "function",
        "title": "bspan"
      },
      "index": {
        "description": "Bipolar unit span special case uspan linSpan",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "bspan",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:butBank",
      "description": {
        "fct-descr": "\u003cp\u003eA FLTK widget opcode that creates a bank of buttons.\n Result is (x, y) coordinate of the triggered button.\n\u003c/p\u003e\u003cpre\u003e butBank xNumOfButtons yNumOfButtons\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLbutBank.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Source (Evt (D, D))",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#butBank",
        "fct-type": "function",
        "title": "butBank"
      },
      "index": {
        "description": "FLTK widget opcode that creates bank of buttons Result is coordinate of the triggered button butBank xNumOfButtons yNumOfButtons doc http www.csounds.com manual html FLbutBank.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "butBank",
        "normalized": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Evt(D,D))",
        "package": "csound-expression-typed",
        "partial": "Bank",
        "signature": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Evt(D,D))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:butBank1",
      "description": {
        "fct-descr": "\u003cp\u003eA FLTK widget opcode that creates a bank of buttons.\n\u003c/p\u003e\u003cpre\u003e butBank xNumOfButtons yNumOfButtons\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLbutBank.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Source (Evt D)",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#butBank1",
        "fct-type": "function",
        "title": "butBank1"
      },
      "index": {
        "description": "FLTK widget opcode that creates bank of buttons butBank xNumOfButtons yNumOfButtons doc http www.csounds.com manual html FLbutBank.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "butBank1",
        "normalized": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Evt D)",
        "package": "csound-expression-typed",
        "partial": "Bank",
        "signature": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Evt D)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:butBankSig",
      "description": {
        "fct-descr": "\u003cp\u003eA variance on the function \u003ccode\u003e\u003ca\u003ebutBank\u003c/a\u003e\u003c/code\u003e, but it produces \n a signal of piecewise constant function. \n Result is (x, y) coordinate of the triggered button.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Source (Sig, Sig)",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#butBankSig",
        "fct-type": "function",
        "title": "butBankSig"
      },
      "index": {
        "description": "variance on the function butBank but it produces signal of piecewise constant function Result is coordinate of the triggered button",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "butBankSig",
        "normalized": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Sig,Sig)",
        "package": "csound-expression-typed",
        "partial": "Bank Sig",
        "signature": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Sig,Sig)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:butBankSig1",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Source Sig",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#butBankSig1",
        "fct-type": "function",
        "title": "butBankSig1"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "butBankSig1",
        "normalized": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource Sig",
        "package": "csound-expression-typed",
        "partial": "Bank Sig",
        "signature": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource Sig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:button",
      "description": {
        "fct-descr": "\u003cp\u003eA FLTK widget opcode that creates a button. \n\u003c/p\u003e\u003cpre\u003e button text\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLbutton.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Source (Evt Unit)",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#button",
        "fct-type": "function",
        "title": "button"
      },
      "index": {
        "description": "FLTK widget opcode that creates button button text doc http www.csounds.com manual html FLbutton.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "button",
        "normalized": "String-\u003eSource(Evt Unit)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "String-\u003eSource(Evt Unit)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003eAllows the user to increase/decrease a value with mouse \n clicks on a corresponding arrow button. Output is an event stream that contains \n values when counter changes.\n\u003c/p\u003e\u003cpre\u003e count diapason fineValStep maybeCoarseValStep initValue \n\u003c/pre\u003e\u003cp\u003edoc: http:\u003cem/\u003ewww.csounds.com\u003cem\u003emanual\u003c/em\u003ehtml/FLcount.html\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ValDiap -\u003e ValStep -\u003e Maybe ValStep -\u003e Double -\u003e Source (Evt D)",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "Allows the user to increase decrease value with mouse clicks on corresponding arrow button Output is an event stream that contains values when counter changes count diapason fineValStep maybeCoarseValStep initValue doc http www.csounds.com manual html FLcount.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "count",
        "normalized": "ValDiap-\u003eValStep-\u003eMaybe ValStep-\u003eDouble-\u003eSource(Evt D)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "ValDiap-\u003eValStep-\u003eMaybe ValStep-\u003eDouble-\u003eSource(Evt D)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:countSig",
      "description": {
        "fct-descr": "\u003cp\u003eA variance on the function \u003ccode\u003e\u003ca\u003ecount\u003c/a\u003e\u003c/code\u003e, but it produces \n a signal of piecewise constant function. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ValDiap -\u003e ValStep -\u003e Maybe ValStep -\u003e Double -\u003e Source Sig",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#countSig",
        "fct-type": "function",
        "title": "countSig"
      },
      "index": {
        "description": "variance on the function count but it produces signal of piecewise constant function",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "countSig",
        "normalized": "ValDiap-\u003eValStep-\u003eMaybe ValStep-\u003eDouble-\u003eSource Sig",
        "package": "csound-expression-typed",
        "partial": "Sig",
        "signature": "ValDiap-\u003eValStep-\u003eMaybe ValStep-\u003eDouble-\u003eSource Sig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:display",
      "description": {
        "fct-descr": "\u003cp\u003eA display constructor.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE Gui -\u003e Display",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#display",
        "fct-type": "function",
        "title": "display"
      },
      "index": {
        "description": "display constructor",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "display",
        "normalized": "SE Gui-\u003eDisplay",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "SE Gui-\u003eDisplay"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:expSpan",
      "description": {
        "fct-descr": "\u003cp\u003eMakes an exponential \u003ccode\u003eValSpan\u003c/code\u003e with specified boundaries.\n\u003c/p\u003e\u003cpre\u003e expSpan minVal maxVal\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Double -\u003e Double -\u003e ValSpan",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#expSpan",
        "fct-type": "function",
        "title": "expSpan"
      },
      "index": {
        "description": "Makes an exponential ValSpan with specified boundaries expSpan minVal maxVal",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "expSpan",
        "normalized": "Double-\u003eDouble-\u003eValSpan",
        "package": "csound-expression-typed",
        "partial": "Span",
        "signature": "Double-\u003eDouble-\u003eValSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:forceProps",
      "description": {
        "fct-descr": "\u003cp\u003eSets the properties for a GUI element on all levels.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[Prop] -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#forceProps",
        "fct-type": "function",
        "title": "forceProps"
      },
      "index": {
        "description": "Sets the properties for GUI element on all levels",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "forceProps",
        "normalized": "[Prop]-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Props",
        "signature": "[Prop]-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:fromElem",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ElemOuts -\u003e [InitMe] -\u003e Elem -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#fromElem",
        "fct-type": "function",
        "title": "fromElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "fromElem",
        "normalized": "ElemOuts-\u003e[InitMe]-\u003eElem-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Elem",
        "signature": "ElemOuts-\u003e[InitMe]-\u003eElem-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:fromGuiHandle",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GuiHandle -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#fromGuiHandle",
        "fct-type": "function",
        "title": "fromGuiHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "fromGuiHandle",
        "normalized": "GuiHandle-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Gui Handle",
        "signature": "GuiHandle-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:guiMap",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[GuiNode] -\u003e GuiMap",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#guiMap",
        "fct-type": "function",
        "title": "guiMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "guiMap",
        "normalized": "[GuiNode]-\u003eGuiMap",
        "package": "csound-expression-typed",
        "partial": "Map",
        "signature": "[GuiNode]-\u003eGuiMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:guiNodeElem",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#GuiNode",
        "fct-type": "function",
        "title": "guiNodeElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "guiNodeElem",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Node Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:guiNodeHandle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GuiHandle",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#GuiNode",
        "fct-type": "function",
        "title": "guiNodeHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "guiNodeHandle",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Node Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:guiStmt",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[Panel] -\u003e DepT m ()",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#guiStmt",
        "fct-type": "function",
        "title": "guiStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "guiStmt",
        "normalized": "[Panel]-\u003eDepT a()",
        "package": "csound-expression-typed",
        "partial": "Stmt",
        "signature": "[Panel]-\u003eDepT m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:height",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "height",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:hor",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal groupping of the elements. All elements are \n placed in the stright horizontal line and aligned by Y-coordinate\n and height.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[Gui] -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#hor",
        "fct-type": "function",
        "title": "hor"
      },
      "index": {
        "description": "Horizontal groupping of the elements All elements are placed in the stright horizontal line and aligned by Y-coordinate and height",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "hor",
        "normalized": "[Gui]-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "[Gui]-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:horSca",
      "description": {
        "fct-descr": "\u003cp\u003eWeighted horizontal grouping. \n It takes a list of scaling factors and elements.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[(Double, Gui)] -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#horSca",
        "fct-type": "function",
        "title": "horSca"
      },
      "index": {
        "description": "Weighted horizontal grouping It takes list of scaling factors and elements",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "horSca",
        "normalized": "[(Double,Gui)]-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Sca",
        "signature": "[(Double,Gui)]-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:initHandle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Var",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#InitMe",
        "fct-type": "function",
        "title": "initHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "initHandle",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:initValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Double",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#InitMe",
        "fct-type": "function",
        "title": "initValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "initValue",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:joy",
      "description": {
        "fct-descr": "\u003cp\u003eIt is a squared area that allows the user to modify two output values \n at the same time. It acts like a joystick. \n\u003c/p\u003e\u003cpre\u003e joy valueSpanX valueSpanY (initX, initY) \n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLjoy.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ValSpan -\u003e ValSpan -\u003e (Double, Double) -\u003e Source (Sig, Sig)",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#joy",
        "fct-type": "function",
        "title": "joy"
      },
      "index": {
        "description": "It is squared area that allows the user to modify two output values at the same time It acts like joystick joy valueSpanX valueSpanY initX initY doc http www.csounds.com manual html FLjoy.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "joy",
        "normalized": "ValSpan-\u003eValSpan-\u003e(Double,Double)-\u003eSource(Sig,Sig)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "ValSpan-\u003eValSpan-\u003e(Double,Double)-\u003eSource(Sig,Sig)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyIn",
      "description": {
        "fct-descr": "\u003cp\u003eThe stream of keyboard press/release events.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "KeyEvt -\u003e Evt Unit",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#keyIn",
        "fct-type": "function",
        "title": "keyIn"
      },
      "index": {
        "description": "The stream of keyboard press release events",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "keyIn",
        "normalized": "KeyEvt-\u003eEvt Unit",
        "package": "csound-expression-typed",
        "partial": "In",
        "signature": "KeyEvt-\u003eEvt Unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyPanel",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the GUI elements on the window. Rectangle is calculated\n automatically (window listens for keyboard events).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Gui -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#keyPanel",
        "fct-type": "function",
        "title": "keyPanel"
      },
      "index": {
        "description": "Renders the GUI elements on the window Rectangle is calculated automatically window listens for keyboard events",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "keyPanel",
        "normalized": "Gui-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "Panel",
        "signature": "Gui-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyPanelBy",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the GUI elements on the window. We can specify the window title\n and rectangle of the window. Panesls are sensitive to keyboard events.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Maybe Rect -\u003e Gui -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#keyPanelBy",
        "fct-type": "function",
        "title": "keyPanelBy"
      },
      "index": {
        "description": "Renders the GUI elements on the window We can specify the window title and rectangle of the window Panesls are sensitive to keyboard events",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "keyPanelBy",
        "normalized": "String-\u003eMaybe Rect-\u003eGui-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "Panel By",
        "signature": "String-\u003eMaybe Rect-\u003eGui-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyPanels",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a list of panels. Panels are sensitive to keyboard events.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[Gui] -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#keyPanels",
        "fct-type": "function",
        "title": "keyPanels"
      },
      "index": {
        "description": "Renders list of panels Panels are sensitive to keyboard events",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "keyPanels",
        "normalized": "[Gui]-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "Panels",
        "signature": "[Gui]-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyTabs",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the GUI elements with tabs. Rectangles are calculated\n automatically.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[(String, Gui)] -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#keyTabs",
        "fct-type": "function",
        "title": "keyTabs"
      },
      "index": {
        "description": "Renders the GUI elements with tabs Rectangles are calculated automatically",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "keyTabs",
        "normalized": "[(String,Gui)]-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "Tabs",
        "signature": "[(String,Gui)]-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyTabsBy",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the GUI elements with tabs. We can specify the window title and\n rectangles for all tabs and for the main window. Tabs are sensitive to keyboard events.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Maybe Rect -\u003e [(String, Maybe Rect, Gui)] -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#keyTabsBy",
        "fct-type": "function",
        "title": "keyTabsBy"
      },
      "index": {
        "description": "Renders the GUI elements with tabs We can specify the window title and rectangles for all tabs and for the main window Tabs are sensitive to keyboard events",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "keyTabsBy",
        "normalized": "String-\u003eMaybe Rect-\u003e[(String,Maybe Rect,Gui)]-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "Tabs By",
        "signature": "String-\u003eMaybe Rect-\u003e[(String,Maybe Rect,Gui)]-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:knob",
      "description": {
        "fct-descr": "\u003cp\u003eA FLTK widget opcode that creates a knob.\n\u003c/p\u003e\u003cpre\u003e knob valueSpan initValue\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLknob.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e ValSpan -\u003e Double -\u003e Source Sig",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#knob",
        "fct-type": "function",
        "title": "knob"
      },
      "index": {
        "description": "FLTK widget opcode that creates knob knob valueSpan initValue doc http www.csounds.com manual html FLknob.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "knob",
        "normalized": "String-\u003eValSpan-\u003eDouble-\u003eSource Sig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "String-\u003eValSpan-\u003eDouble-\u003eSource Sig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:linSpan",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a linear \u003ccode\u003eValSpan\u003c/code\u003e with specified boundaries.\n\u003c/p\u003e\u003cpre\u003e linSpan minVal maxVal\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Double -\u003e Double -\u003e ValSpan",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#linSpan",
        "fct-type": "function",
        "title": "linSpan"
      },
      "index": {
        "description": "Makes linear ValSpan with specified boundaries linSpan minVal maxVal",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "linSpan",
        "normalized": "Double-\u003eDouble-\u003eValSpan",
        "package": "csound-expression-typed",
        "partial": "Span",
        "signature": "Double-\u003eDouble-\u003eValSpan"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:mapGuiOnPanel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(Gui -\u003e Gui) -\u003e Panel -\u003e Panel",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#mapGuiOnPanel",
        "fct-type": "function",
        "title": "mapGuiOnPanel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "mapGuiOnPanel",
        "normalized": "(Gui-\u003eGui)-\u003ePanel-\u003ePanel",
        "package": "csound-expression-typed",
        "partial": "Gui On Panel",
        "signature": "(Gui-\u003eGui)-\u003ePanel-\u003ePanel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:margin",
      "description": {
        "fct-descr": "\u003cp\u003eSets the margin of the element. How much empty space\n to reserve between the elements within the group. It affects\n only compound elements.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#margin",
        "fct-type": "function",
        "title": "margin"
      },
      "index": {
        "description": "Sets the margin of the element How much empty space to reserve between the elements within the group It affects only compound elements",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "margin",
        "normalized": "Int-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Int-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:meter",
      "description": {
        "fct-descr": "\u003cp\u003eA slider that serves as indicator. It consumes values instead of producing.\n\u003c/p\u003e\u003cpre\u003e meter valueSpan initValue\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e ValSpan -\u003e Double -\u003e Sink Sig",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#meter",
        "fct-type": "function",
        "title": "meter"
      },
      "index": {
        "description": "slider that serves as indicator It consumes values instead of producing meter valueSpan initValue",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "meter",
        "normalized": "String-\u003eValSpan-\u003eDouble-\u003eSink Sig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "String-\u003eValSpan-\u003eDouble-\u003eSink Sig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:noInner",
      "description": {
        "fct-descr": "\u003cp\u003eA value for stateless widgets.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Inner",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#noInner",
        "fct-type": "function",
        "title": "noInner"
      },
      "index": {
        "description": "value for stateless widgets",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "noInner",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Inner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:noInput",
      "description": {
        "fct-descr": "\u003cp\u003eA value for widgets that produce nothing.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Input ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#noInput",
        "fct-type": "function",
        "title": "noInput"
      },
      "index": {
        "description": "value for widgets that produce nothing",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "noInput",
        "normalized": "Input()",
        "package": "csound-expression-typed",
        "partial": "Input",
        "signature": "Input()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:noOutput",
      "description": {
        "fct-descr": "\u003cp\u003eA value for widgets that consume nothing.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Output ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#noOutput",
        "fct-type": "function",
        "title": "noOutput"
      },
      "index": {
        "description": "value for widgets that consume nothing",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "noOutput",
        "normalized": "Output()",
        "package": "csound-expression-typed",
        "partial": "Output",
        "signature": "Output()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:numeric",
      "description": {
        "fct-descr": "\u003cp\u003enumeric (originally FLtext in the Csound) allows the user to modify \n a parameter value by directly typing it into a text field.\n\u003c/p\u003e\u003cpre\u003e numeric diapason step initValue \n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLtext.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e ValDiap -\u003e ValStep -\u003e Double -\u003e Source Sig",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#numeric",
        "fct-type": "function",
        "title": "numeric"
      },
      "index": {
        "description": "numeric originally FLtext in the Csound allows the user to modify parameter value by directly typing it into text field numeric diapason step initValue doc http www.csounds.com manual html FLtext.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "numeric",
        "normalized": "String-\u003eValDiap-\u003eValStep-\u003eDouble-\u003eSource Sig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "String-\u003eValDiap-\u003eValStep-\u003eDouble-\u003eSource Sig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:padding",
      "description": {
        "fct-descr": "\u003cp\u003eSets the padding of the element. How much empty space\n to reserve outside the element.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#padding",
        "fct-type": "function",
        "title": "padding"
      },
      "index": {
        "description": "Sets the padding of the element How much empty space to reserve outside the element",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "padding",
        "normalized": "Int-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Int-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:panel",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the GUI elements on the window. Rectangle is calculated\n automatically (window doesn't listens for keyboard events).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Gui -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#panel",
        "fct-type": "function",
        "title": "panel"
      },
      "index": {
        "description": "Renders the GUI elements on the window Rectangle is calculated automatically window doesn listens for keyboard events",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "panel",
        "normalized": "Gui-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Gui-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:panelBy",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the GUI elements on the window. We can specify the window title\n and rectangle of the window.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Maybe Rect -\u003e Gui -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#panelBy",
        "fct-type": "function",
        "title": "panelBy"
      },
      "index": {
        "description": "Renders the GUI elements on the window We can specify the window title and rectangle of the window",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "panelBy",
        "normalized": "String-\u003eMaybe Rect-\u003eGui-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "By",
        "signature": "String-\u003eMaybe Rect-\u003eGui-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:panels",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a list of panels.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[Gui] -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#panels",
        "fct-type": "function",
        "title": "panels"
      },
      "index": {
        "description": "Renders list of panels",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "panels",
        "normalized": "[Gui]-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "[Gui]-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:props",
      "description": {
        "fct-descr": "\u003cp\u003eSets the properties for a GUI element.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[Prop] -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#props",
        "fct-type": "function",
        "title": "props"
      },
      "index": {
        "description": "Sets the properties for GUI element",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "props",
        "normalized": "[Prop]-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "[Prop]-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:px",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
        "fct-type": "function",
        "title": "px"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "px",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:py",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
        "fct-type": "function",
        "title": "py"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "py",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:restoreTree",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GuiMap -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#restoreTree",
        "fct-type": "function",
        "title": "restoreTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "restoreTree",
        "normalized": "GuiMap-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Tree",
        "signature": "GuiMap-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:roller",
      "description": {
        "fct-descr": "\u003cp\u003eFLroller is a sort of knob, but put transversally. \n\u003c/p\u003e\u003cpre\u003e roller valueSpan step initVal\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLroller.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e ValSpan -\u003e ValStep -\u003e Double -\u003e Source Sig",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#roller",
        "fct-type": "function",
        "title": "roller"
      },
      "index": {
        "description": "FLroller is sort of knob but put transversally roller valueSpan step initVal doc http www.csounds.com manual html FLroller.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "roller",
        "normalized": "String-\u003eValSpan-\u003eValStep-\u003eDouble-\u003eSource Sig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "String-\u003eValSpan-\u003eValStep-\u003eDouble-\u003eSource Sig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:sca",
      "description": {
        "fct-descr": "\u003cp\u003eScales an element within the group. It depends on the type\n of the alignment (horizontal or vertical) which side of the bounding\n box is scaled. If it's a horizontal group then the width is scaled\n and height is scaled otherwise.\n\u003c/p\u003e\u003cp\u003eEvery element in the group has a scaling factor. By \n default it equals to one. During rendering all scaling factors are summed\n and divided on the sum of all factors. So that factors become weights \n or proportions. This process is called normalization. \n Scaling one element affects not only this element but \n all other elements in the group! \n\u003c/p\u003e\u003cp\u003eAn example:\n\u003c/p\u003e\u003cp\u003eOne element is twice as large as the other two:\n\u003c/p\u003e\u003cpre\u003e hor [a, b, sca 2 c]\n\u003c/pre\u003e\u003cp\u003eWhy is it so? Let's look at the hidden scaling factors:\n\u003c/p\u003e\u003cpre\u003e hor [sca 1 a, sca 1 b, sca 2 c]\n\u003c/pre\u003e\u003cp\u003eDuring rendering we scale all the scaling fators so that\n total sum equals to one:\n\u003c/p\u003e\u003cpre\u003e hor [sca 0.25 a, sca 0.25 b, sca 0.5 c]\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Double -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#sca",
        "fct-type": "function",
        "title": "sca"
      },
      "index": {
        "description": "Scales an element within the group It depends on the type of the alignment horizontal or vertical which side of the bounding box is scaled If it horizontal group then the width is scaled and height is scaled otherwise Every element in the group has scaling factor By default it equals to one During rendering all scaling factors are summed and divided on the sum of all factors So that factors become weights or proportions This process is called normalization Scaling one element affects not only this element but all other elements in the group An example One element is twice as large as the other two hor sca Why is it so Let look at the hidden scaling factors hor sca sca sca During rendering we scale all the scaling fators so that total sum equals to one hor sca sca sca",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "sca",
        "normalized": "Double-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Double-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setBorder",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BorderType -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setBorder",
        "fct-type": "function",
        "title": "setBorder"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setBorder",
        "normalized": "BorderType-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Border",
        "signature": "BorderType-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setBoxType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BoxType -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setBoxType",
        "fct-type": "function",
        "title": "setBoxType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setBoxType",
        "normalized": "BoxType-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Box Type",
        "signature": "BoxType-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setButtonType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ButtonType -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setButtonType",
        "fct-type": "function",
        "title": "setButtonType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setButtonType",
        "normalized": "ButtonType-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Button Type",
        "signature": "ButtonType-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setColor1",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Color -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setColor1",
        "fct-type": "function",
        "title": "setColor1"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setColor1",
        "normalized": "Color-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Color",
        "signature": "Color-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setColor2",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Color -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setColor2",
        "fct-type": "function",
        "title": "setColor2"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setColor2",
        "normalized": "Color-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Color",
        "signature": "Color-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setColors",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Color -\u003e Color -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setColors",
        "fct-type": "function",
        "title": "setColors"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setColors",
        "normalized": "Color-\u003eColor-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Colors",
        "signature": "Color-\u003eColor-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setEmphasis",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Emphasis -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setEmphasis",
        "fct-type": "function",
        "title": "setEmphasis"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setEmphasis",
        "normalized": "Emphasis-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Emphasis",
        "signature": "Emphasis-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setFontSize",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setFontSize",
        "fct-type": "function",
        "title": "setFontSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setFontSize",
        "normalized": "Int-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Font Size",
        "signature": "Int-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setFontType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "FontType -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setFontType",
        "fct-type": "function",
        "title": "setFontType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setFontType",
        "normalized": "FontType-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Font Type",
        "signature": "FontType-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setKnobType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "KnobType -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setKnobType",
        "fct-type": "function",
        "title": "setKnobType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setKnobType",
        "normalized": "KnobType-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Knob Type",
        "signature": "KnobType-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setLabel",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setLabel",
        "fct-type": "function",
        "title": "setLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setLabel",
        "normalized": "String-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Label",
        "signature": "String-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setLabelType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "LabelType -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setLabelType",
        "fct-type": "function",
        "title": "setLabelType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setLabelType",
        "normalized": "LabelType-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Label Type",
        "signature": "LabelType-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setMaterial",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Material -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setMaterial",
        "fct-type": "function",
        "title": "setMaterial"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setMaterial",
        "normalized": "Material-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Material",
        "signature": "Material-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setOrient",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Orient -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setOrient",
        "fct-type": "function",
        "title": "setOrient"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setOrient",
        "normalized": "Orient-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Orient",
        "signature": "Orient-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setSliderType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SliderType -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setSliderType",
        "fct-type": "function",
        "title": "setSliderType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setSliderType",
        "normalized": "SliderType-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Slider Type",
        "signature": "SliderType-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setTextColor",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Color -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setTextColor",
        "fct-type": "function",
        "title": "setTextColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setTextColor",
        "normalized": "Color-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Text Color",
        "signature": "Color-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setTextType",
      "description": {
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "TextType -\u003e Gui -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#setTextType",
        "fct-type": "function",
        "title": "setTextType"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setTextType",
        "normalized": "TextType-\u003eGui-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Text Type",
        "signature": "TextType-\u003eGui-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setTitle",
      "description": {
        "fct-descr": "\u003cp\u003eAppends a title to a group of widgets.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Gui -\u003e SE Gui",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#setTitle",
        "fct-type": "function",
        "title": "setTitle"
      },
      "index": {
        "description": "Appends title to group of widgets",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "setTitle",
        "normalized": "String-\u003eGui-\u003eSE Gui",
        "package": "csound-expression-typed",
        "partial": "Title",
        "signature": "String-\u003eGui-\u003eSE Gui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:singleContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Win",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Panel",
        "fct-type": "function",
        "title": "singleContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "singleContent",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:singleIsKeybdSensitive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Bool",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Panel",
        "fct-type": "function",
        "title": "singleIsKeybdSensitive"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "singleIsKeybdSensitive",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Is Keybd Sensitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:sink",
      "description": {
        "fct-descr": "\u003cp\u003eA consumer constructor.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE (Gui, Output a) -\u003e Sink a",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#sink",
        "fct-type": "function",
        "title": "sink"
      },
      "index": {
        "description": "consumer constructor",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "sink",
        "normalized": "SE(Gui,Output a)-\u003eSink a",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "SE(Gui,Output a)-\u003eSink a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:slider",
      "description": {
        "fct-descr": "\u003cp\u003eFLslider puts a slider into the corresponding container.\n\u003c/p\u003e\u003cpre\u003e slider valueSpan initVal \n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLslider.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e ValSpan -\u003e Double -\u003e Source Sig",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#slider",
        "fct-type": "function",
        "title": "slider"
      },
      "index": {
        "description": "FLslider puts slider into the corresponding container slider valueSpan initVal doc http www.csounds.com manual html FLslider.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "slider",
        "normalized": "String-\u003eValSpan-\u003eDouble-\u003eSource Sig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "String-\u003eValSpan-\u003eDouble-\u003eSource Sig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:sliderBank",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a list of linear unit sliders (ranges in [0, 1]). It takes a list\n of init values.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e [Double] -\u003e Source [Sig]",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#sliderBank",
        "fct-type": "function",
        "title": "sliderBank"
      },
      "index": {
        "description": "Constructs list of linear unit sliders ranges in It takes list of init values",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "sliderBank",
        "normalized": "String-\u003e[Double]-\u003eSource[Sig]",
        "package": "csound-expression-typed",
        "partial": "Bank",
        "signature": "String-\u003e[Double]-\u003eSource[Sig]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:source",
      "description": {
        "fct-descr": "\u003cp\u003eA producer constructor.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE (Gui, Input a) -\u003e Source a",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#source",
        "fct-type": "function",
        "title": "source"
      },
      "index": {
        "description": "producer constructor",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "source",
        "normalized": "SE(Gui,Input a)-\u003eSource a",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "SE(Gui,Input a)-\u003eSource a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty space.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "An empty space",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "space",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabs",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the GUI elements with tabs. Rectangles are calculated\n automatically.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[(String, Gui)] -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#tabs",
        "fct-type": "function",
        "title": "tabs"
      },
      "index": {
        "description": "Renders the GUI elements with tabs Rectangles are calculated automatically",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "tabs",
        "normalized": "[(String,Gui)]-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "[(String,Gui)]-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabsBy",
      "description": {
        "fct-descr": "\u003cp\u003eRenders the GUI elements with tabs. We can specify the window title and\n rectangles for all tabs and for the main window.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Maybe Rect -\u003e [(String, Maybe Rect, Gui)] -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#tabsBy",
        "fct-type": "function",
        "title": "tabsBy"
      },
      "index": {
        "description": "Renders the GUI elements with tabs We can specify the window title and rectangles for all tabs and for the main window",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "tabsBy",
        "normalized": "String-\u003eMaybe Rect-\u003e[(String,Maybe Rect,Gui)]-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "By",
        "signature": "String-\u003eMaybe Rect-\u003e[(String,Maybe Rect,Gui)]-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabsContent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[Win]",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Panel",
        "fct-type": "function",
        "title": "tabsContent"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "tabsContent",
        "normalized": "[Win]",
        "package": "csound-expression-typed",
        "partial": "Content",
        "signature": "[Win]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabsIsKeybdSensitive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Bool",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Panel",
        "fct-type": "function",
        "title": "tabsIsKeybdSensitive"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "tabsIsKeybdSensitive",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Is Keybd Sensitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabsRect",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Maybe Rect",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Panel",
        "fct-type": "function",
        "title": "tabsRect"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "tabsRect",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Rect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabsTitle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Panel",
        "fct-type": "function",
        "title": "tabsTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "tabsTitle",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:toggle",
      "description": {
        "fct-descr": "\u003cp\u003eA FLTK widget opcode that creates a toggle button.\n\u003c/p\u003e\u003cpre\u003e button text\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLbutton.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Source (Evt D)",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#toggle",
        "fct-type": "function",
        "title": "toggle"
      },
      "index": {
        "description": "FLTK widget opcode that creates toggle button button text doc http www.csounds.com manual html FLbutton.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "toggle",
        "normalized": "String-\u003eSource(Evt D)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "String-\u003eSource(Evt D)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:toggleSig",
      "description": {
        "fct-descr": "\u003cp\u003eA variance on the function \u003ccode\u003e\u003ca\u003etoggle\u003c/a\u003e\u003c/code\u003e, but it produces \n a signal of piecewise constant function. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Source Sig",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#toggleSig",
        "fct-type": "function",
        "title": "toggleSig"
      },
      "index": {
        "description": "variance on the function toggle but it produces signal of piecewise constant function",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "toggleSig",
        "normalized": "String-\u003eSource Sig",
        "package": "csound-expression-typed",
        "partial": "Sig",
        "signature": "String-\u003eSource Sig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:unGui",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "LowGui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Gui",
        "fct-type": "function",
        "title": "unGui"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "unGui",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:unGuiHandle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#GuiHandle",
        "fct-type": "function",
        "title": "unGuiHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "unGuiHandle",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:uspan",
      "description": {
        "fct-descr": "\u003cp\u003eUnit span. A special case:\n\u003c/p\u003e\u003cpre\u003e uspan = linSpan 0 1\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ValSpan",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#uspan",
        "fct-type": "function",
        "title": "uspan"
      },
      "index": {
        "description": "Unit span special case uspan linSpan",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "uspan",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:uspanExp",
      "description": {
        "fct-descr": "\u003cp\u003eAn exponential unit span. A special case:\n\u003c/p\u003e\u003cpre\u003e uspan = expSpan 0 1\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ValSpan",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#uspanExp",
        "fct-type": "function",
        "title": "uspanExp"
      },
      "index": {
        "description": "An exponential unit span special case uspan expSpan",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "uspanExp",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:valDiapMax",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Double",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValDiap",
        "fct-type": "function",
        "title": "valDiapMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "valDiapMax",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Diap Max",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:valDiapMin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Double",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValDiap",
        "fct-type": "function",
        "title": "valDiapMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "valDiapMin",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Diap Min",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:valSpanDiap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ValDiap",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValSpan",
        "fct-type": "function",
        "title": "valSpanDiap"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "valSpanDiap",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Span Diap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:valSpanScale",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ValScaleType",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ValSpan",
        "fct-type": "function",
        "title": "valSpanScale"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "valSpanScale",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Span Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eFLvalue shows current the value of a valuator in a text field.\n\u003c/p\u003e\u003cpre\u003e value initVal\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLvalue.html\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Double -\u003e Sink Sig",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "FLvalue shows current the value of valuator in text field value initVal doc http www.csounds.com manual html FLvalue.html",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "value",
        "normalized": "String-\u003eDouble-\u003eSink Sig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "String-\u003eDouble-\u003eSink Sig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ver",
      "description": {
        "fct-descr": "\u003cp\u003eVertical groupping of the elements. All elements are \n placed in the stright vertical line and aligned by X-coordinate\n and width.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[Gui] -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#ver",
        "fct-type": "function",
        "title": "ver"
      },
      "index": {
        "description": "Vertical groupping of the elements All elements are placed in the stright vertical line and aligned by X-coordinate and width",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "ver",
        "normalized": "[Gui]-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "[Gui]-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:verSca",
      "description": {
        "fct-descr": "\u003cp\u003eWeighted vertical grouping. \n It takes a list of scaling factors and elements.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[(Double, Gui)] -\u003e Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#verSca",
        "fct-type": "function",
        "title": "verSca"
      },
      "index": {
        "description": "Weighted vertical grouping It takes list of scaling factors and elements",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "verSca",
        "normalized": "[(Double,Gui)]-\u003eGui",
        "package": "csound-expression-typed",
        "partial": "Sca",
        "signature": "[(Double,Gui)]-\u003eGui"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:widget",
      "description": {
        "fct-descr": "\u003cp\u003eA widget constructor.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE (Gui, Output a, Input b, Inner) -\u003e Widget a b",
        "fct-source": "src/Csound-Typed-Gui-Widget.html#widget",
        "fct-type": "function",
        "title": "widget"
      },
      "index": {
        "description": "widget constructor",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "widget",
        "normalized": "SE(Gui,Output a,Input b,Inner)-\u003eWidget a b",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "SE(Gui,Output a,Input b,Inner)-\u003eWidget a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:width",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "width",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:winGui",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Gui",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Win",
        "fct-type": "function",
        "title": "winGui"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "winGui",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gui",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:winRect",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Maybe Rect",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Win",
        "fct-type": "function",
        "title": "winRect"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "winRect",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Rect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:winTitle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Gui",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String",
        "fct-source": "src/Csound-Typed-Gui-Gui.html#Win",
        "fct-type": "function",
        "title": "winTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Gui",
        "module": "Csound.Typed.Gui",
        "name": "winTitle",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "module",
        "fct-source": "src/Csound-Typed-Render.html",
        "fct-type": "module",
        "title": "Render"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "Render",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Render",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#t:Options",
      "description": {
        "fct-descr": "\u003cp\u003eCsound options. The default values are\n\u003c/p\u003e\u003cpre\u003e flags      = def     -- the only flag set by default is \"no-displays\" \n                      -- to supress the display of the tables\n sampleRate = 44100\n blockSize  = 64\n gain       = 0.5\n tabFi      = fineFi 13 [(idLins, 11), (idExps, 11), (idConsts, 9), (idSplines, 11), (idStartEnds, 12)] }\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#Options",
        "fct-type": "data",
        "title": "Options"
      },
      "index": {
        "description": "Csound options The default values are flags def the only flag set by default is no-displays to supress the display of the tables sampleRate blockSize gain tabFi fineFi idLins idExps idConsts idSplines idStartEnds",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "Options",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#t:TabFi",
      "description": {
        "fct-descr": "\u003cp\u003eTable size fidelity (how many points in the table by default).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#TabFi",
        "fct-type": "data",
        "title": "TabFi"
      },
      "index": {
        "description": "Table size fidelity how many points in the table by default",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "TabFi",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tab Fi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:Options",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Options",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#Options",
        "fct-type": "function",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "Options",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:TabFi",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "TabFi",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#TabFi",
        "fct-type": "function",
        "title": "TabFi"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "TabFi",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tab Fi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:coarseFi",
      "description": {
        "fct-descr": "\u003cp\u003eSets the same table size for all tables. \n\u003c/p\u003e\u003cpre\u003e coarseFi n\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003en\u003c/code\u003e  is a degree of 2. For example, \u003ccode\u003en = 10\u003c/code\u003e sets size to 1024 points for all tables by default.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int -\u003e TabFi",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#coarseFi",
        "fct-type": "function",
        "title": "coarseFi"
      },
      "index": {
        "description": "Sets the same table size for all tables coarseFi where is degree of For example sets size to points for all tables by default",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "coarseFi",
        "normalized": "Int-\u003eTabFi",
        "package": "csound-expression-typed",
        "partial": "Fi",
        "signature": "Int-\u003eTabFi"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:csdBlockSize",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of audio samples in one control step\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#Options",
        "fct-type": "function",
        "title": "csdBlockSize"
      },
      "index": {
        "description": "The number of audio samples in one control step",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "csdBlockSize",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:csdFlags",
      "description": {
        "fct-descr": "\u003cp\u003eCsound command line flags\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Flags",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#Options",
        "fct-type": "function",
        "title": "csdFlags"
      },
      "index": {
        "description": "Csound command line flags",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "csdFlags",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Flags",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:csdGain",
      "description": {
        "fct-descr": "\u003cp\u003eA gain of the final output\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Maybe Double",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#Options",
        "fct-type": "function",
        "title": "csdGain"
      },
      "index": {
        "description": "gain of the final output",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "csdGain",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Gain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:csdSampleRate",
      "description": {
        "fct-descr": "\u003cp\u003eThe sample rate\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Maybe Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#Options",
        "fct-type": "function",
        "title": "csdSampleRate"
      },
      "index": {
        "description": "The sample rate",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "csdSampleRate",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sample Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:csdTabFi",
      "description": {
        "fct-descr": "\u003cp\u003eDefault fidelity of the arrays\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Maybe TabFi",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#Options",
        "fct-type": "function",
        "title": "csdTabFi"
      },
      "index": {
        "description": "Default fidelity of the arrays",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "csdTabFi",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tab Fi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:defBlockSize",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Options -\u003e Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#defBlockSize",
        "fct-type": "function",
        "title": "defBlockSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "defBlockSize",
        "normalized": "Options-\u003eInt",
        "package": "csound-expression-typed",
        "partial": "Block Size",
        "signature": "Options-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:defGain",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Options -\u003e Double",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#defGain",
        "fct-type": "function",
        "title": "defGain"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "defGain",
        "normalized": "Options-\u003eDouble",
        "package": "csound-expression-typed",
        "partial": "Gain",
        "signature": "Options-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:defSampleRate",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Options -\u003e Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#defSampleRate",
        "fct-type": "function",
        "title": "defSampleRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "defSampleRate",
        "normalized": "Options-\u003eInt",
        "package": "csound-expression-typed",
        "partial": "Sample Rate",
        "signature": "Options-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:defTabFi",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Options -\u003e TabFi",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#defTabFi",
        "fct-type": "function",
        "title": "defTabFi"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "defTabFi",
        "normalized": "Options-\u003eTabFi",
        "package": "csound-expression-typed",
        "partial": "Tab Fi",
        "signature": "Options-\u003eTabFi"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:fineFi",
      "description": {
        "fct-descr": "\u003cp\u003eSets different table size for different GEN-routines. \n\u003c/p\u003e\u003cpre\u003e fineFi n ps \n\u003c/pre\u003e\u003cp\u003ewhere \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e is the default value for table size (size is a \u003ccode\u003en\u003c/code\u003e power of 2) for all gen routines that are not listed in the next argument \u003ccode\u003eps\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eps\u003c/code\u003e is a list of pairs \u003ccode\u003e(genRoutineId, tableSizeDegreeOf2)\u003c/code\u003e that sets the given table size for a \n   given GEN-routine.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ewith this function we can set lower table sizes for tables that are usually used in the envelopes.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int -\u003e [(Int, Int)] -\u003e TabFi",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#fineFi",
        "fct-type": "function",
        "title": "fineFi"
      },
      "index": {
        "description": "Sets different table size for different GEN-routines fineFi ps where is the default value for table size size is power of for all gen routines that are not listed in the next argument ps ps is list of pairs genRoutineId tableSizeDegreeOf2 that sets the given table size for given GEN-routine with this function we can set lower table sizes for tables that are usually used in the envelopes",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "fineFi",
        "normalized": "Int-\u003e[(Int,Int)]-\u003eTabFi",
        "package": "csound-expression-typed",
        "partial": "Fi",
        "signature": "Int-\u003e[(Int,Int)]-\u003eTabFi"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idBessels",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idBessels",
        "fct-type": "function",
        "title": "idBessels"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idBessels",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Bessels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idBuzzes",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idBuzzes",
        "fct-type": "function",
        "title": "idBuzzes"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idBuzzes",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Buzzes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idChebs1",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idChebs1",
        "fct-type": "function",
        "title": "idChebs1"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idChebs1",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Chebs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idChebs2",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idChebs2",
        "fct-type": "function",
        "title": "idChebs2"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idChebs2",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Chebs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idConsts",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idConsts",
        "fct-type": "function",
        "title": "idConsts"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idConsts",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Consts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idCubes",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idCubes",
        "fct-type": "function",
        "title": "idCubes"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idCubes",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Cubes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idDoubles",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idDoubles",
        "fct-type": "function",
        "title": "idDoubles"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idDoubles",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Doubles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idExps",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idExps",
        "fct-type": "function",
        "title": "idExps"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idExps",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Exps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idLins",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idLins",
        "fct-type": "function",
        "title": "idLins"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idLins",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Lins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idMp3s",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idMp3s",
        "fct-type": "function",
        "title": "idMp3s"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idMp3s",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Mp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idPartials",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idPartials",
        "fct-type": "function",
        "title": "idPartials"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idPartials",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Partials",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idPolys",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idPolys",
        "fct-type": "function",
        "title": "idPolys"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idPolys",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Polys",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idSines",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idSines",
        "fct-type": "function",
        "title": "idSines"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idSines",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idSines2",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idSines2",
        "fct-type": "function",
        "title": "idSines2"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idSines2",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idSines3",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idSines3",
        "fct-type": "function",
        "title": "idSines3"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idSines3",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idSines4",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idSines4",
        "fct-type": "function",
        "title": "idSines4"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idSines4",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idSplines",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idSplines",
        "fct-type": "function",
        "title": "idSplines"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idSplines",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Splines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idStartEnds",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idStartEnds",
        "fct-type": "function",
        "title": "idStartEnds"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idStartEnds",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Start Ends",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idWavs",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idWavs",
        "fct-type": "function",
        "title": "idWavs"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idWavs",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Wavs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idWins",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#idWins",
        "fct-type": "function",
        "title": "idWins"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "idWins",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Wins",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderEff",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE b) -\u003e IO String",
        "fct-source": "src/Csound-Typed-Render.html#renderEff",
        "fct-type": "function",
        "title": "renderEff"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "renderEff",
        "normalized": "(a-\u003eSE b)-\u003eIO String",
        "package": "csound-expression-typed",
        "partial": "Eff",
        "signature": "(a-\u003eSE b)-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderEffBy",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Options -\u003e (a -\u003e SE b) -\u003e IO String",
        "fct-source": "src/Csound-Typed-Render.html#renderEffBy",
        "fct-type": "function",
        "title": "renderEffBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "renderEffBy",
        "normalized": "Options-\u003e(a-\u003eSE b)-\u003eIO String",
        "package": "csound-expression-typed",
        "partial": "Eff By",
        "signature": "Options-\u003e(a-\u003eSE b)-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderOut",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE a -\u003e IO String",
        "fct-source": "src/Csound-Typed-Render.html#renderOut",
        "fct-type": "function",
        "title": "renderOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "renderOut",
        "normalized": "SE a-\u003eIO String",
        "package": "csound-expression-typed",
        "partial": "Out",
        "signature": "SE a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderOutBy",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Options -\u003e SE a -\u003e IO String",
        "fct-source": "src/Csound-Typed-Render.html#renderOutBy",
        "fct-type": "function",
        "title": "renderOutBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "renderOutBy",
        "normalized": "Options-\u003eSE a-\u003eIO String",
        "package": "csound-expression-typed",
        "partial": "Out By",
        "signature": "Options-\u003eSE a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderOutBy_",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Options -\u003e SE () -\u003e IO String",
        "fct-source": "src/Csound-Typed-Render.html#renderOutBy_",
        "fct-type": "function",
        "title": "renderOutBy_"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "renderOutBy_",
        "normalized": "Options-\u003eSE()-\u003eIO String",
        "package": "csound-expression-typed",
        "partial": "Out By",
        "signature": "Options-\u003eSE()-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderOut_",
      "description": {
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE () -\u003e IO String",
        "fct-source": "src/Csound-Typed-Render.html#renderOut_",
        "fct-type": "function",
        "title": "renderOut_"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "renderOut_",
        "normalized": "SE()-\u003eIO String",
        "package": "csound-expression-typed",
        "partial": "Out",
        "signature": "SE()-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:tabFiBase",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#TabFi",
        "fct-type": "function",
        "title": "tabFiBase"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "tabFiBase",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Fi Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:tabFiGens",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Render",
        "fct-package": "csound-expression-typed",
        "fct-signature": "IntMap Int",
        "fct-source": "src/Csound-Typed-GlobalState-Options.html#TabFi",
        "fct-type": "function",
        "title": "tabFiGens"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Render",
        "module": "Csound.Typed.Render",
        "name": "tabFiGens",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Fi Gens",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#",
      "description": {
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "module",
        "fct-source": "src/Csound-Typed-Types-Evt.html",
        "fct-type": "module",
        "title": "Evt"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "Evt",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Evt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#t:Bam",
      "description": {
        "fct-descr": "\u003cp\u003eA procedure. Something that takes a value and suddenly bams with it.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-source": "src/Csound-Typed-Types-Evt.html#Bam",
        "fct-type": "type",
        "title": "Bam"
      },
      "index": {
        "description": "procedure Something that takes value and suddenly bams with it",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "Bam",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Bam",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#t:Evt",
      "description": {
        "fct-descr": "\u003cp\u003eA stream of events. We can convert a stream of events to\n the procedure with the function \u003ccode\u003erunEvt\u003c/code\u003e. It waits for events\n and invokes the given procedure when the event happens.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Types-Evt.html#Evt",
        "fct-type": "data",
        "title": "Evt"
      },
      "index": {
        "description": "stream of events We can convert stream of events to the procedure with the function runEvt It waits for events and invokes the given procedure when the event happens",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "Evt",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Evt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#t:Snap",
      "description": {
        "fct-descr": "\u003cp\u003eA snapshot of the signal. It converts a type of the signal to the \n type of the value in the given moment. Instances:\n\u003c/p\u003e\u003cpre\u003e type instance Snap D   = D\n type instance Snap Str = Str\n type instance Snap Tab = Tab\n\n type instance Snap Sig = D\n \n type instance Snap (a, b) = (Snap a, Snap b)\n type instance Snap (a, b, c) = (Snap a, Snap b, Snap c)\n type instance Snap (a, b, c, d) = (Snap a, Snap b, Snap c, Snap d)\n type instance Snap (a, b, c, d, e) = (Snap a, Snap b, Snap c, Snap d, Snap e)\n type instance Snap (a, b, c, d, e, f) = (Snap a, Snap b, Snap c, Snap d, Snap e, Snap f)\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Snap",
        "fct-type": "function",
        "title": "Snap"
      },
      "index": {
        "description": "snapshot of the signal It converts type of the signal to the type of the value in the given moment Instances type instance Snap type instance Snap Str Str type instance Snap Tab Tab type instance Snap Sig type instance Snap Snap Snap type instance Snap Snap Snap Snap type instance Snap Snap Snap Snap Snap type instance Snap Snap Snap Snap Snap Snap type instance Snap Snap Snap Snap Snap Snap Snap",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "Snap",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Snap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:Evt",
      "description": {
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Evt",
        "fct-source": "src/Csound-Typed-Types-Evt.html#Evt",
        "fct-type": "function",
        "title": "Evt"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "Evt",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Evt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:accumE",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulator for events.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "s -\u003e (a -\u003e s -\u003e (b, s)) -\u003e Evt a -\u003e Evt b",
        "fct-source": "src/Csound-Typed-Types-Evt.html#accumE",
        "fct-type": "function",
        "title": "accumE"
      },
      "index": {
        "description": "Accumulator for events",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "accumE",
        "normalized": "a-\u003e(b-\u003ea-\u003e(c,a))-\u003eEvt b-\u003eEvt c",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "s-\u003e(a-\u003es-\u003e(b,s))-\u003eEvt a-\u003eEvt b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:accumSE",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulator for events with side effects.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "s -\u003e (a -\u003e s -\u003e SE (b, s)) -\u003e Evt a -\u003e Evt b",
        "fct-source": "src/Csound-Typed-Types-Evt.html#accumSE",
        "fct-type": "function",
        "title": "accumSE"
      },
      "index": {
        "description": "Accumulator for events with side effects",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "accumSE",
        "normalized": "a-\u003e(b-\u003ea-\u003eSE(c,a))-\u003eEvt b-\u003eEvt c",
        "package": "csound-expression-typed",
        "partial": "SE",
        "signature": "s-\u003e(a-\u003es-\u003eSE(b,s))-\u003eEvt a-\u003eEvt b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:boolToEvt",
      "description": {
        "fct-descr": "\u003cp\u003eConverts booleans to events.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BoolSig -\u003e Evt Unit",
        "fct-source": "src/Csound-Typed-Types-Evt.html#boolToEvt",
        "fct-type": "function",
        "title": "boolToEvt"
      },
      "index": {
        "description": "Converts booleans to events",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "boolToEvt",
        "normalized": "BoolSig-\u003eEvt Unit",
        "package": "csound-expression-typed",
        "partial": "To Evt",
        "signature": "BoolSig-\u003eEvt Unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:evtToBool",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an event to boolean signal. It forgets\n everything about the event values. Signal equals to one when \n an event happens and zero otherwise.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Evt a -\u003e SE BoolSig",
        "fct-source": "src/Csound-Typed-Types-Evt.html#evtToBool",
        "fct-type": "function",
        "title": "evtToBool"
      },
      "index": {
        "description": "Converts an event to boolean signal It forgets everything about the event values Signal equals to one when an event happens and zero otherwise",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "evtToBool",
        "normalized": "Evt a-\u003eSE BoolSig",
        "package": "csound-expression-typed",
        "partial": "To Bool",
        "signature": "Evt a-\u003eSE BoolSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:filterAccumE",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulator with filtering. It can skip the events from the event stream.\n If the third element of the triple equals to 1 then we should include the\n event in the resulting stream. If the element equals to 0 we skip the event.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "s -\u003e (a -\u003e s -\u003e (BoolD, b, s)) -\u003e Evt a -\u003e Evt b",
        "fct-source": "src/Csound-Typed-Types-Evt.html#filterAccumE",
        "fct-type": "function",
        "title": "filterAccumE"
      },
      "index": {
        "description": "Accumulator with filtering It can skip the events from the event stream If the third element of the triple equals to then we should include the event in the resulting stream If the element equals to we skip the event",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "filterAccumE",
        "normalized": "a-\u003e(b-\u003ea-\u003e(BoolD,c,a))-\u003eEvt b-\u003eEvt c",
        "package": "csound-expression-typed",
        "partial": "Accum",
        "signature": "s-\u003e(a-\u003es-\u003e(BoolD,b,s))-\u003eEvt a-\u003eEvt b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:filterAccumSE",
      "description": {
        "fct-descr": "\u003cp\u003eAccumulator for events with side effects and filtering. Event triggers\n only if the first element in the tripplet is true.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "s -\u003e (a -\u003e s -\u003e SE (BoolD, b, s)) -\u003e Evt a -\u003e Evt b",
        "fct-source": "src/Csound-Typed-Types-Evt.html#filterAccumSE",
        "fct-type": "function",
        "title": "filterAccumSE"
      },
      "index": {
        "description": "Accumulator for events with side effects and filtering Event triggers only if the first element in the tripplet is true",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "filterAccumSE",
        "normalized": "a-\u003e(b-\u003ea-\u003eSE(BoolD,c,a))-\u003eEvt b-\u003eEvt c",
        "package": "csound-expression-typed",
        "partial": "Accum SE",
        "signature": "s-\u003e(a-\u003es-\u003eSE(BoolD,b,s))-\u003eEvt a-\u003eEvt b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:filterE",
      "description": {
        "fct-descr": "\u003cp\u003eFilters events with predicate.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e BoolD) -\u003e Evt a -\u003e Evt a",
        "fct-source": "src/Csound-Typed-Types-Evt.html#filterE",
        "fct-type": "function",
        "title": "filterE"
      },
      "index": {
        "description": "Filters events with predicate",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "filterE",
        "normalized": "(a-\u003eBoolD)-\u003eEvt a-\u003eEvt a",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(a-\u003eBoolD)-\u003eEvt a-\u003eEvt a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:filterSE",
      "description": {
        "fct-descr": "\u003cp\u003eFilters events with effectful predicate.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e SE BoolD) -\u003e Evt a -\u003e Evt a",
        "fct-source": "src/Csound-Typed-Types-Evt.html#filterSE",
        "fct-type": "function",
        "title": "filterSE"
      },
      "index": {
        "description": "Filters events with effectful predicate",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "filterSE",
        "normalized": "(a-\u003eSE BoolD)-\u003eEvt a-\u003eEvt a",
        "package": "csound-expression-typed",
        "partial": "SE",
        "signature": "(a-\u003eSE BoolD)-\u003eEvt a-\u003eEvt a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:readSnap",
      "description": {
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e Snap a",
        "fct-source": "src/Csound-Typed-Types-Evt.html#readSnap",
        "fct-type": "function",
        "title": "readSnap"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "readSnap",
        "normalized": "a-\u003eSnap a",
        "package": "csound-expression-typed",
        "partial": "Snap",
        "signature": "a-\u003eSnap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:runEvt",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Bam a -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Types-Evt.html#Evt",
        "fct-type": "function",
        "title": "runEvt"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "runEvt",
        "normalized": "Bam a-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "Evt",
        "signature": "Bam a-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:sigToEvt",
      "description": {
        "fct-descr": "\u003cp\u003eTriggers an event when signal equals to 1.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e Evt Unit",
        "fct-source": "src/Csound-Typed-Types-Evt.html#sigToEvt",
        "fct-type": "function",
        "title": "sigToEvt"
      },
      "index": {
        "description": "Triggers an event when signal equals to",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "sigToEvt",
        "normalized": "Sig-\u003eEvt Unit",
        "package": "csound-expression-typed",
        "partial": "To Evt",
        "signature": "Sig-\u003eEvt Unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:snaps",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an event stream that contains values from the\n given signal. Events happens only when the signal changes.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e Evt D",
        "fct-source": "src/Csound-Typed-Types-Evt.html#snaps",
        "fct-type": "function",
        "title": "snaps"
      },
      "index": {
        "description": "Constructs an event stream that contains values from the given signal Events happens only when the signal changes",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "snaps",
        "normalized": "Sig-\u003eEvt D",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Sig-\u003eEvt D"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:snapshot",
      "description": {
        "fct-descr": "\u003cp\u003eGet values of some signal at the given events.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(Snap a -\u003e b -\u003e c) -\u003e a -\u003e Evt b -\u003e Evt c",
        "fct-source": "src/Csound-Typed-Types-Evt.html#snapshot",
        "fct-type": "function",
        "title": "snapshot"
      },
      "index": {
        "description": "Get values of some signal at the given events",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "snapshot",
        "normalized": "(Snap a-\u003eb-\u003ec)-\u003ea-\u003eEvt b-\u003eEvt c",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(Snap a-\u003eb-\u003ec)-\u003ea-\u003eEvt b-\u003eEvt c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:stepper",
      "description": {
        "fct-descr": "\u003cp\u003eConverts events to signals.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e Evt a -\u003e SE a",
        "fct-source": "src/Csound-Typed-Types-Evt.html#stepper",
        "fct-type": "function",
        "title": "stepper"
      },
      "index": {
        "description": "Converts events to signals",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "stepper",
        "normalized": "a-\u003eEvt a-\u003eSE a",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003eEvt a-\u003eSE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:sync",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes actions synchronized with global tempo (in Hz).\n\u003c/p\u003e\u003cpre\u003e runEvtSync tempoCps evt proc\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Types.Evt",
        "fct-package": "csound-expression-typed",
        "fct-signature": "D -\u003e Evt a -\u003e Evt a",
        "fct-source": "src/Csound-Typed-Types-Evt.html#sync",
        "fct-type": "function",
        "title": "sync"
      },
      "index": {
        "description": "Executes actions synchronized with global tempo in Hz runEvtSync tempoCps evt proc",
        "hierarchy": "Csound Typed Types Evt",
        "module": "Csound.Typed.Types.Evt",
        "name": "sync",
        "normalized": "D-\u003eEvt a-\u003eEvt a",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "D-\u003eEvt a-\u003eEvt a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "module",
        "fct-source": "src/Csound-Typed-Types-Lift.html",
        "fct-type": "module",
        "title": "Lift"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "Lift",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Lift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:DirtyMulti",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-source": "src/Csound-Typed-Types-Lift.html#DirtyMulti",
        "fct-type": "class",
        "title": "DirtyMulti"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "DirtyMulti",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Dirty Multi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:DirtySingle",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-source": "src/Csound-Typed-Types-Lift.html#DirtySingle",
        "fct-type": "class",
        "title": "DirtySingle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "DirtySingle",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Dirty Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:Dm",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Types-Lift.html#Dm",
        "fct-type": "data",
        "title": "Dm"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "Dm",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Dm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:E",
      "description": {
        "fct-descr": "\u003cp\u003eThe inner representation of csound expressions.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "E"
      },
      "index": {
        "description": "The inner representation of csound expressions",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "E",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:GE",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-GlobalState-GE.html#GE",
        "fct-type": "data",
        "title": "GE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "GE",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "GE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:Pm",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Types-Lift.html#Pm",
        "fct-type": "data",
        "title": "Pm"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "Pm",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Pm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:Procedure",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-source": "src/Csound-Typed-Types-Lift.html#Procedure",
        "fct-type": "class",
        "title": "Procedure"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "Procedure",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Procedure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:PureMulti",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-source": "src/Csound-Typed-Types-Lift.html#PureMulti",
        "fct-type": "class",
        "title": "PureMulti"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "PureMulti",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Pure Multi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:PureSingle",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-source": "src/Csound-Typed-Types-Lift.html#PureSingle",
        "fct-type": "class",
        "title": "PureSingle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "PureSingle",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Pure Single",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:dirtyMulti",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "([E] -\u003e MultiOut (Dep [E])) -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Lift.html#dirtyMulti",
        "fct-type": "function",
        "title": "dirtyMulti"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "dirtyMulti",
        "normalized": "([E]-\u003eMultiOut(Dep[E]))-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Multi",
        "signature": "([E]-\u003eMultiOut(Dep[E]))-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:dirtySingle",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "([E] -\u003e Dep E) -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Lift.html#dirtySingle",
        "fct-type": "function",
        "title": "dirtySingle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "dirtySingle",
        "normalized": "([E]-\u003eDep E)-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Single",
        "signature": "([E]-\u003eDep E)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:fromDm",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Dm -\u003e SE a",
        "fct-source": "src/Csound-Typed-Types-Lift.html#fromDm",
        "fct-type": "function",
        "title": "fromDm"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "fromDm",
        "normalized": "Dm-\u003eSE a",
        "package": "csound-expression-typed",
        "partial": "Dm",
        "signature": "Dm-\u003eSE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:fromPm",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Pm -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Lift.html#fromPm",
        "fct-type": "function",
        "title": "fromPm"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "fromPm",
        "normalized": "Pm-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Pm",
        "signature": "Pm-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:procedure",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "([E] -\u003e Dep ()) -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Lift.html#procedure",
        "fct-type": "function",
        "title": "procedure"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "procedure",
        "normalized": "([E]-\u003eDep())-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "([E]-\u003eDep())-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:pureMulti",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "([E] -\u003e MultiOut [E]) -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Lift.html#pureMulti",
        "fct-type": "function",
        "title": "pureMulti"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "pureMulti",
        "normalized": "([E]-\u003eMultiOut[E])-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Multi",
        "signature": "([E]-\u003eMultiOut[E])-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:pureSingle",
      "description": {
        "fct-module": "Csound.Typed.Types.Lift",
        "fct-package": "csound-expression-typed",
        "fct-signature": "([E] -\u003e E) -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Lift.html#pureSingle",
        "fct-type": "function",
        "title": "pureSingle"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Lift",
        "module": "Csound.Typed.Types.Lift",
        "name": "pureSingle",
        "normalized": "([E]-\u003eE)-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Single",
        "signature": "([E]-\u003eE)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "module",
        "fct-source": "src/Csound-Typed-Types-Prim.html",
        "fct-type": "module",
        "title": "Prim"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Prim",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:BoolD",
      "description": {
        "fct-descr": "\u003cp\u003eA constant boolean value.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-Types-Prim.html#BoolD",
        "fct-type": "newtype",
        "title": "BoolD"
      },
      "index": {
        "description": "constant boolean value",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "BoolD",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:BoolSig",
      "description": {
        "fct-descr": "\u003cp\u003eA signal of booleans.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-Types-Prim.html#BoolSig",
        "fct-type": "newtype",
        "title": "BoolSig"
      },
      "index": {
        "description": "signal of booleans",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "BoolSig",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Bool Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:D",
      "description": {
        "fct-descr": "\u003cp\u003eConstant numbers\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-Types-Prim.html#D",
        "fct-type": "newtype",
        "title": "D"
      },
      "index": {
        "description": "Constant numbers",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "D",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Sig",
      "description": {
        "fct-descr": "\u003cp\u003eSignals\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Sig",
        "fct-type": "newtype",
        "title": "Sig"
      },
      "index": {
        "description": "Signals",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Sig",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:SigOrD",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-source": "src/Csound-Typed-Types-Prim.html#SigOrD",
        "fct-type": "class",
        "title": "SigOrD"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "SigOrD",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sig Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Spec",
      "description": {
        "fct-descr": "\u003cp\u003eSpectrum. It's \u003ccode\u003efsig\u003c/code\u003e in the Csound.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Spec",
        "fct-type": "newtype",
        "title": "Spec"
      },
      "index": {
        "description": "Spectrum It fsig in the Csound",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Spec",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Str",
      "description": {
        "fct-descr": "\u003cp\u003eStrings\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Str",
        "fct-type": "newtype",
        "title": "Str"
      },
      "index": {
        "description": "Strings",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Str",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Tab",
      "description": {
        "fct-descr": "\u003cp\u003eTables (or arrays)\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Tab",
        "fct-type": "data",
        "title": "Tab"
      },
      "index": {
        "description": "Tables or arrays",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Tab",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tab",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:TabArgs",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Types-Prim.html#TabArgs",
        "fct-type": "data",
        "title": "TabArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "TabArgs",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tab Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:TabSize",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Types-Prim.html#TabSize",
        "fct-type": "data",
        "title": "TabSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "TabSize",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tab Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Unit",
      "description": {
        "fct-descr": "\u003cp\u003eCsound's empty tuple.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Unit",
        "fct-type": "newtype",
        "title": "Unit"
      },
      "index": {
        "description": "Csound empty tuple",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Unit",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Val",
      "description": {
        "fct-descr": "\u003cp\u003eContains all Csound values.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Val",
        "fct-type": "class",
        "title": "Val"
      },
      "index": {
        "description": "Contains all Csound values",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Val",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Wspec",
      "description": {
        "fct-descr": "\u003cp\u003eAnother type for spectrum. It's \u003ccode\u003ewsig\u003c/code\u003e in the Csound.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "newtype",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Wspec",
        "fct-type": "newtype",
        "title": "Wspec"
      },
      "index": {
        "description": "Another type for spectrum It wsig in the Csound",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Wspec",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Wspec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ArgsGen16",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ArgsGen16 [Double]",
        "fct-source": "src/Csound-Typed-Types-Prim.html#TabArgs",
        "fct-type": "function",
        "title": "ArgsGen16"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "ArgsGen16",
        "normalized": "ArgsGen[Double]",
        "package": "csound-expression-typed",
        "partial": "Args Gen",
        "signature": "ArgsGen[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ArgsPlain",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ArgsPlain [Double]",
        "fct-source": "src/Csound-Typed-Types-Prim.html#TabArgs",
        "fct-type": "function",
        "title": "ArgsPlain"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "ArgsPlain",
        "normalized": "ArgsPlain[Double]",
        "package": "csound-expression-typed",
        "partial": "Args Plain",
        "signature": "ArgsPlain[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ArgsRelative",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "ArgsRelative [Double]",
        "fct-source": "src/Csound-Typed-Types-Prim.html#TabArgs",
        "fct-type": "function",
        "title": "ArgsRelative"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "ArgsRelative",
        "normalized": "ArgsRelative[Double]",
        "package": "csound-expression-typed",
        "partial": "Args Relative",
        "signature": "ArgsRelative[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:BoolD",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BoolD",
        "fct-source": "src/Csound-Typed-Types-Prim.html#BoolD",
        "fct-type": "function",
        "title": "BoolD"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "BoolD",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:BoolSig",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BoolSig",
        "fct-source": "src/Csound-Typed-Types-Prim.html#BoolSig",
        "fct-type": "function",
        "title": "BoolSig"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "BoolSig",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Bool Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:D",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "D",
        "fct-source": "src/Csound-Typed-Types-Prim.html#D",
        "fct-type": "function",
        "title": "D"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "D",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:FileAccess",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "FileAccess String [Double]",
        "fct-source": "src/Csound-Typed-Types-Prim.html#TabArgs",
        "fct-type": "function",
        "title": "FileAccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "FileAccess",
        "normalized": "FileAccess String[Double]",
        "package": "csound-expression-typed",
        "partial": "File Access",
        "signature": "FileAccess String[Double]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Sig",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Sig",
        "fct-type": "function",
        "title": "Sig"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Sig",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:SizeDegree",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SizeDegree",
        "fct-source": "src/Csound-Typed-Types-Prim.html#TabSize",
        "fct-type": "function",
        "title": "SizeDegree"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "SizeDegree",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Size Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:SizePlain",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SizePlain Int",
        "fct-source": "src/Csound-Typed-Types-Prim.html#TabSize",
        "fct-type": "function",
        "title": "SizePlain"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "SizePlain",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Size Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Spec",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Spec",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Spec",
        "fct-type": "function",
        "title": "Spec"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Spec",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Str",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Str",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Str",
        "fct-type": "function",
        "title": "Str"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Str",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Tab",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Tab (GE E)",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Tab",
        "fct-type": "function",
        "title": "Tab"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Tab",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tab",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:TabPre",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "TabPre PreTab",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Tab",
        "fct-type": "function",
        "title": "TabPre"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "TabPre",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tab Pre",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Unit",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Unit",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Unit",
        "fct-type": "function",
        "title": "Unit"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Unit",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Wspec",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Wspec",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Wspec",
        "fct-type": "function",
        "title": "Wspec"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "Wspec",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Wspec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ar",
      "description": {
        "fct-descr": "\u003cp\u003eSets a rate of the signal to audio rate.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e Sig",
        "fct-source": "src/Csound-Typed-Types-Prim.html#ar",
        "fct-type": "function",
        "title": "ar"
      },
      "index": {
        "description": "Sets rate of the signal to audio rate",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "ar",
        "normalized": "Sig-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Sig-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:boolSig",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a constant boolean signal.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BoolD -\u003e BoolSig",
        "fct-source": "src/Csound-Typed-Types-Prim.html#boolSig",
        "fct-type": "function",
        "title": "boolSig"
      },
      "index": {
        "description": "Creates constant boolean signal",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "boolSig",
        "normalized": "BoolD-\u003eBoolSig",
        "package": "csound-expression-typed",
        "partial": "Sig",
        "signature": "BoolD-\u003eBoolSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ceil-39-",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#ceil%27",
        "fct-type": "function",
        "title": "ceil'"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "ceil'",
        "normalized": "a-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:div-39-",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#div%27",
        "fct-type": "function",
        "title": "div'"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "div'",
        "normalized": "a-\u003ea-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:double",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a number.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Double -\u003e D",
        "fct-source": "src/Csound-Typed-Types-Prim.html#double",
        "fct-type": "function",
        "title": "double"
      },
      "index": {
        "description": "Constructs number",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "double",
        "normalized": "Double-\u003eD",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Double-\u003eD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:floor-39-",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#floor%27",
        "fct-type": "function",
        "title": "floor'"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "floor'",
        "normalized": "a-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:forceNorm",
      "description": {
        "fct-descr": "\u003cp\u003eForce normalization (sets table size to positive value).\n Might be useful to restore normalization for table \u003ccode\u003e\u003ca\u003edoubles\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Tab -\u003e Tab",
        "fct-source": "src/Csound-Typed-Types-Prim.html#forceNorm",
        "fct-type": "function",
        "title": "forceNorm"
      },
      "index": {
        "description": "Force normalization sets table size to positive value Might be useful to restore normalization for table doubles",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "forceNorm",
        "normalized": "Tab-\u003eTab",
        "package": "csound-expression-typed",
        "partial": "Norm",
        "signature": "Tab-\u003eTab"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:frac-39-",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#frac%27",
        "fct-type": "function",
        "title": "frac'"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "frac'",
        "normalized": "a-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:fromE",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "E -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#fromE",
        "fct-type": "method",
        "title": "fromE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "fromE",
        "normalized": "E-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "E-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:fromGE",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE E -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#fromGE",
        "fct-type": "method",
        "title": "fromGE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "fromGE",
        "normalized": "GE E-\u003ea",
        "package": "csound-expression-typed",
        "partial": "GE",
        "signature": "GE E-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:fromPreTab",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "PreTab -\u003e GE Gen",
        "fct-source": "src/Csound-Typed-Types-Prim.html#fromPreTab",
        "fct-type": "function",
        "title": "fromPreTab"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "fromPreTab",
        "normalized": "PreTab-\u003eGE Gen",
        "package": "csound-expression-typed",
        "partial": "Pre Tab",
        "signature": "PreTab-\u003eGE Gen"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:getBlockSize",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "D",
        "fct-source": "src/Csound-Typed-Types-Prim.html#getBlockSize",
        "fct-type": "function",
        "title": "getBlockSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "getBlockSize",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Block Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:getControlRate",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "D",
        "fct-source": "src/Csound-Typed-Types-Prim.html#getControlRate",
        "fct-type": "function",
        "title": "getControlRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "getControlRate",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Control Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:getPreTabUnsafe",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Tab -\u003e PreTab",
        "fct-source": "src/Csound-Typed-Types-Prim.html#getPreTabUnsafe",
        "fct-type": "function",
        "title": "getPreTabUnsafe"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "getPreTabUnsafe",
        "normalized": "String-\u003eTab-\u003ePreTab",
        "package": "csound-expression-typed",
        "partial": "Pre Tab Unsafe",
        "signature": "String-\u003eTab-\u003ePreTab"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:getSampleRate",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "D",
        "fct-source": "src/Csound-Typed-Types-Prim.html#getSampleRate",
        "fct-type": "function",
        "title": "getSampleRate"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "getSampleRate",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sample Rate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:getZeroDbfs",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "D",
        "fct-source": "src/Csound-Typed-Types-Prim.html#getZeroDbfs",
        "fct-type": "function",
        "title": "getZeroDbfs"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "getZeroDbfs",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Zero Dbfs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:hasGuardPoint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Bool",
        "fct-source": "src/Csound-Typed-Types-Prim.html#TabSize",
        "fct-type": "function",
        "title": "hasGuardPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "hasGuardPoint",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Guard Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:hideGE",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#hideGE",
        "fct-type": "function",
        "title": "hideGE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "hideGE",
        "normalized": "GE a-\u003ea",
        "package": "csound-expression-typed",
        "partial": "GE",
        "signature": "GE a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:idur",
      "description": {
        "fct-descr": "\u003cp\u003eQuerries a total duration of the note. It's equivallent to Csound's \u003ccode\u003ep3\u003c/code\u003e field.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "D",
        "fct-source": "src/Csound-Typed-Types-Prim.html#idur",
        "fct-type": "function",
        "title": "idur"
      },
      "index": {
        "description": "Querries total duration of the note It equivallent to Csound p3 field",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "idur",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an integer.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int -\u003e D",
        "fct-source": "src/Csound-Typed-Types-Prim.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "Constructs an integer",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "int",
        "normalized": "Int-\u003eD",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Int-\u003eD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:int-39-",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#int%27",
        "fct-type": "function",
        "title": "int'"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "int'",
        "normalized": "a-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ir",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a signal to the number (initial value of the signal).\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e D",
        "fct-source": "src/Csound-Typed-Types-Prim.html#ir",
        "fct-type": "function",
        "title": "ir"
      },
      "index": {
        "description": "Converts signal to the number initial value of the signal",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "ir",
        "normalized": "Sig-\u003eD",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Sig-\u003eD"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:kr",
      "description": {
        "fct-descr": "\u003cp\u003eSets a rate of the signal to control rate.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e Sig",
        "fct-source": "src/Csound-Typed-Types-Prim.html#kr",
        "fct-type": "function",
        "title": "kr"
      },
      "index": {
        "description": "Sets rate of the signal to control rate",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "kr",
        "normalized": "Sig-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Sig-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:mod-39-",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#mod%27",
        "fct-type": "function",
        "title": "mod'"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "mod'",
        "normalized": "a-\u003ea-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:on0",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "E -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#on0",
        "fct-type": "function",
        "title": "on0"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "on0",
        "normalized": "E-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "E-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:on1",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(E -\u003e E) -\u003e a -\u003e b",
        "fct-source": "src/Csound-Typed-Types-Prim.html#on1",
        "fct-type": "function",
        "title": "on1"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "on1",
        "normalized": "(E-\u003eE)-\u003ea-\u003eb",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(E-\u003eE)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:on2",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(E -\u003e E -\u003e E) -\u003e a -\u003e b -\u003e c",
        "fct-source": "src/Csound-Typed-Types-Prim.html#on2",
        "fct-type": "function",
        "title": "on2"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "on2",
        "normalized": "(E-\u003eE-\u003eE)-\u003ea-\u003eb-\u003ec",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(E-\u003eE-\u003eE)-\u003ea-\u003eb-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:on3",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(E -\u003e E -\u003e E -\u003e E) -\u003e a -\u003e b -\u003e c -\u003e d",
        "fct-source": "src/Csound-Typed-Types-Prim.html#on3",
        "fct-type": "function",
        "title": "on3"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "on3",
        "normalized": "(E-\u003eE-\u003eE-\u003eE)-\u003ea-\u003eb-\u003ec-\u003ed",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(E-\u003eE-\u003eE-\u003eE)-\u003ea-\u003eb-\u003ec-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:preTab",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "TabSize -\u003e Int -\u003e TabArgs -\u003e Tab",
        "fct-source": "src/Csound-Typed-Types-Prim.html#preTab",
        "fct-type": "function",
        "title": "preTab"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "preTab",
        "normalized": "TabSize-\u003eInt-\u003eTabArgs-\u003eTab",
        "package": "csound-expression-typed",
        "partial": "Tab",
        "signature": "TabSize-\u003eInt-\u003eTabArgs-\u003eTab"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:quot-39-",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#quot%27",
        "fct-type": "function",
        "title": "quot'"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "quot'",
        "normalized": "a-\u003ea-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:rem-39-",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#rem%27",
        "fct-type": "function",
        "title": "rem'"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "rem'",
        "normalized": "a-\u003ea-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:round-39-",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Prim.html#round%27",
        "fct-type": "function",
        "title": "round'"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "round'",
        "normalized": "a-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:sig",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a constant signal from the number.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "D -\u003e Sig",
        "fct-source": "src/Csound-Typed-Types-Prim.html#sig",
        "fct-type": "function",
        "title": "sig"
      },
      "index": {
        "description": "Makes constant signal from the number",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "sig",
        "normalized": "D-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "D-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:sizeDegree",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int",
        "fct-source": "src/Csound-Typed-Types-Prim.html#TabSize",
        "fct-type": "function",
        "title": "sizeDegree"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "sizeDegree",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Degree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:skipNorm",
      "description": {
        "fct-descr": "\u003cp\u003eSkips normalization (sets table size to negative value)\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Tab -\u003e Tab",
        "fct-source": "src/Csound-Typed-Types-Prim.html#skipNorm",
        "fct-type": "function",
        "title": "skipNorm"
      },
      "index": {
        "description": "Skips normalization sets table size to negative value",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "skipNorm",
        "normalized": "Tab-\u003eTab",
        "package": "csound-expression-typed",
        "partial": "Norm",
        "signature": "Tab-\u003eTab"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs a string.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "String -\u003e Str",
        "fct-source": "src/Csound-Typed-Types-Prim.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Constructs string",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "text",
        "normalized": "String-\u003eStr",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "String-\u003eStr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:toGE",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e GE E",
        "fct-source": "src/Csound-Typed-Types-Prim.html#toGE",
        "fct-type": "method",
        "title": "toGE"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "toGE",
        "normalized": "a-\u003eGE E",
        "package": "csound-expression-typed",
        "partial": "GE",
        "signature": "a-\u003eGE E"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unBoolD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE E",
        "fct-source": "src/Csound-Typed-Types-Prim.html#BoolD",
        "fct-type": "function",
        "title": "unBoolD"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "unBoolD",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unBoolSig",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE E",
        "fct-source": "src/Csound-Typed-Types-Prim.html#BoolSig",
        "fct-type": "function",
        "title": "unBoolSig"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "unBoolSig",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Bool Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unD",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE E",
        "fct-source": "src/Csound-Typed-Types-Prim.html#D",
        "fct-type": "function",
        "title": "unD"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "unD",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unSig",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE E",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Sig",
        "fct-type": "function",
        "title": "unSig"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "unSig",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unSpec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE E",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Spec",
        "fct-type": "function",
        "title": "unSpec"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "unSpec",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unStr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE E",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Str",
        "fct-type": "function",
        "title": "unStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "unStr",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unTab",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Tab -\u003e GE E",
        "fct-source": "src/Csound-Typed-Types-Prim.html#unTab",
        "fct-type": "function",
        "title": "unTab"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "unTab",
        "normalized": "Tab-\u003eGE E",
        "package": "csound-expression-typed",
        "partial": "Tab",
        "signature": "Tab-\u003eGE E"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unUnit",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE ()",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Unit",
        "fct-type": "function",
        "title": "unUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "unUnit",
        "normalized": "GE()",
        "package": "csound-expression-typed",
        "partial": "Unit",
        "signature": "GE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unWspec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE E",
        "fct-source": "src/Csound-Typed-Types-Prim.html#Wspec",
        "fct-type": "function",
        "title": "unWspec"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "unWspec",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Wspec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unit",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs Csound's empty tuple.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Unit",
        "fct-source": "src/Csound-Typed-Types-Prim.html#unit",
        "fct-type": "function",
        "title": "unit"
      },
      "index": {
        "description": "Constructs Csound empty tuple",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "unit",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:updateTabSize",
      "description": {
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(TabSize -\u003e TabSize) -\u003e Tab -\u003e Tab",
        "fct-source": "src/Csound-Typed-Types-Prim.html#updateTabSize",
        "fct-type": "function",
        "title": "updateTabSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "updateTabSize",
        "normalized": "(TabSize-\u003eTabSize)-\u003eTab-\u003eTab",
        "package": "csound-expression-typed",
        "partial": "Tab Size",
        "signature": "(TabSize-\u003eTabSize)-\u003eTab-\u003eTab"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:when1",
      "description": {
        "fct-descr": "\u003cp\u003eInvokes the given procedure if the boolean signal is true.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BoolSig -\u003e SE () -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Types-Prim.html#when1",
        "fct-type": "function",
        "title": "when1"
      },
      "index": {
        "description": "Invokes the given procedure if the boolean signal is true",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "when1",
        "normalized": "BoolSig-\u003eSE()-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "BoolSig-\u003eSE()-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:whens",
      "description": {
        "fct-descr": "\u003cp\u003eThe chain of \u003ccode\u003ewhen1\u003c/code\u003es. Tests all the conditions in sequence\n if everything is false it invokes the procedure given in the second argument.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Prim",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[(BoolSig, SE ())] -\u003e SE () -\u003e SE ()",
        "fct-source": "src/Csound-Typed-Types-Prim.html#whens",
        "fct-type": "function",
        "title": "whens"
      },
      "index": {
        "description": "The chain of when1 Tests all the conditions in sequence if everything is false it invokes the procedure given in the second argument",
        "hierarchy": "Csound Typed Types Prim",
        "module": "Csound.Typed.Types.Prim",
        "name": "whens",
        "normalized": "[(BoolSig,SE())]-\u003eSE()-\u003eSE()",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "[(BoolSig,SE())]-\u003eSE()-\u003eSE()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "module",
        "fct-source": "src/Csound-Typed-Types-Tuple.html",
        "fct-type": "module",
        "title": "Tuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "Tuple",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#t:Arg",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#Arg",
        "fct-type": "class",
        "title": "Arg"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "Arg",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#t:Sigs",
      "description": {
        "fct-descr": "\u003cp\u003eThe tuples of signals.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#Sigs",
        "fct-type": "class",
        "title": "Sigs"
      },
      "index": {
        "description": "The tuples of signals",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "Sigs",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Sigs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#t:Tuple",
      "description": {
        "fct-descr": "\u003cp\u003eA tuple of Csound values.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "class",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#Tuple",
        "fct-type": "class",
        "title": "Tuple"
      },
      "index": {
        "description": "tuple of Csound values",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "Tuple",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#t:TupleMethods",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "data",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#TupleMethods",
        "fct-type": "data",
        "title": "TupleMethods"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "TupleMethods",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tuple Methods",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ar1",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Sig -\u003e Sig",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#ar1",
        "fct-type": "function",
        "title": "ar1"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "ar1",
        "normalized": "Sig-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Sig-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ar2",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(Sig, Sig) -\u003e (Sig, Sig)",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#ar2",
        "fct-type": "function",
        "title": "ar2"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "ar2",
        "normalized": "(Sig,Sig)-\u003e(Sig,Sig)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(Sig,Sig)-\u003e(Sig,Sig)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ar4",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(Sig, Sig, Sig, Sig) -\u003e (Sig, Sig, Sig, Sig)",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#ar4",
        "fct-type": "function",
        "title": "ar4"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "ar4",
        "normalized": "(Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ar6",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(Sig, Sig, Sig, Sig, Sig, Sig) -\u003e (Sig, Sig, Sig, Sig, Sig, Sig)",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#ar6",
        "fct-type": "function",
        "title": "ar6"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "ar6",
        "normalized": "(Sig,Sig,Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig,Sig,Sig)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(Sig,Sig,Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig,Sig,Sig)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ar8",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(Sig, Sig, Sig, Sig, Sig, Sig, Sig, Sig) -\u003e (Sig, Sig, Sig, Sig, Sig, Sig, Sig, Sig)",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#ar8",
        "fct-type": "function",
        "title": "ar8"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "ar8",
        "normalized": "(Sig,Sig,Sig,Sig,Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig,Sig,Sig,Sig,Sig)",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "(Sig,Sig,Sig,Sig,Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig,Sig,Sig,Sig,Sig)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:arg",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "Int -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#arg",
        "fct-type": "function",
        "title": "arg"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "arg",
        "normalized": "Int-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "Int-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:argArity",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#argArity",
        "fct-type": "function",
        "title": "argArity"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "argArity",
        "normalized": "a-\u003eInt",
        "package": "csound-expression-typed",
        "partial": "Arity",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:caseArg",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecaseB\u003c/code\u003e for constants.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e [(a -\u003e BoolD, b)] -\u003e b -\u003e b",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#caseArg",
        "fct-type": "function",
        "title": "caseArg"
      },
      "index": {
        "description": "caseB for constants",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "caseArg",
        "normalized": "a-\u003e[(a-\u003eBoolD,b)]-\u003eb-\u003eb",
        "package": "csound-expression-typed",
        "partial": "Arg",
        "signature": "a-\u003e[(a-\u003eBoolD,b)]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:caseTuple",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ecaseB\u003c/code\u003e for tuples of csound values.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e [(a -\u003e BoolSig, b)] -\u003e b -\u003e b",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#caseTuple",
        "fct-type": "function",
        "title": "caseTuple"
      },
      "index": {
        "description": "caseB for tuples of csound values",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "caseTuple",
        "normalized": "a-\u003e[(a-\u003eBoolSig,b)]-\u003eb-\u003eb",
        "package": "csound-expression-typed",
        "partial": "Tuple",
        "signature": "a-\u003e[(a-\u003eBoolSig,b)]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:defTuple",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#defTuple",
        "fct-type": "function",
        "title": "defTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "defTuple",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:dirtyTuple",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE (MultiOut [E]) -\u003e SE a",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#dirtyTuple",
        "fct-type": "function",
        "title": "dirtyTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "dirtyTuple",
        "normalized": "GE(MultiOut[E])-\u003eSE a",
        "package": "csound-expression-typed",
        "partial": "Tuple",
        "signature": "GE(MultiOut[E])-\u003eSE a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:fromTuple",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e GE [E]",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#fromTuple",
        "fct-type": "function",
        "title": "fromTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "fromTuple",
        "normalized": "a-\u003eGE[E]",
        "package": "csound-expression-typed",
        "partial": "Tuple",
        "signature": "a-\u003eGE[E]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:guardedArg",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eguardedB\u003c/code\u003e for constants.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[(BoolD, b)] -\u003e b -\u003e b",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#guardedArg",
        "fct-type": "function",
        "title": "guardedArg"
      },
      "index": {
        "description": "guardedB for constants",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "guardedArg",
        "normalized": "[(BoolD,a)]-\u003ea-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Arg",
        "signature": "[(BoolD,b)]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:guardedTuple",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eguardedB\u003c/code\u003e for tuples of csound values.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "[(BoolSig, b)] -\u003e b -\u003e b",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#guardedTuple",
        "fct-type": "function",
        "title": "guardedTuple"
      },
      "index": {
        "description": "guardedB for tuples of csound values",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "guardedTuple",
        "normalized": "[(BoolSig,a)]-\u003ea-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Tuple",
        "signature": "[(BoolSig,b)]-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ifArg",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eifB\u003c/code\u003e for constants.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BoolD -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#ifArg",
        "fct-type": "function",
        "title": "ifArg"
      },
      "index": {
        "description": "ifB for constants",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "ifArg",
        "normalized": "BoolD-\u003ea-\u003ea-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Arg",
        "signature": "BoolD-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ifTuple",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eifB\u003c/code\u003e for tuples of csound values.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "BoolSig -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#ifTuple",
        "fct-type": "function",
        "title": "ifTuple"
      },
      "index": {
        "description": "ifB for tuples of csound values",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "ifTuple",
        "normalized": "BoolSig-\u003ea-\u003ea-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Tuple",
        "signature": "BoolSig-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:makeTupleMethods",
      "description": {
        "fct-descr": "\u003cp\u003eDefines instance of type class \u003ccode\u003e\u003ca\u003eTuple\u003c/a\u003e\u003c/code\u003e for a new type in terms of an already defined one.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e TupleMethods b",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#makeTupleMethods",
        "fct-type": "function",
        "title": "makeTupleMethods"
      },
      "index": {
        "description": "Defines instance of type class Tuple for new type in terms of an already defined one",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "makeTupleMethods",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eTupleMethods b",
        "package": "csound-expression-typed",
        "partial": "Tuple Methods",
        "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eTupleMethods b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:multiOuts",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "E -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#multiOuts",
        "fct-type": "function",
        "title": "multiOuts"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "multiOuts",
        "normalized": "E-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Outs",
        "signature": "E-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:outArity",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE a -\u003e Int",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#outArity",
        "fct-type": "function",
        "title": "outArity"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "outArity",
        "normalized": "SE a-\u003eInt",
        "package": "csound-expression-typed",
        "partial": "Arity",
        "signature": "SE a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:pureTuple",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE (MultiOut [E]) -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#pureTuple",
        "fct-type": "function",
        "title": "pureTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "pureTuple",
        "normalized": "GE(MultiOut[E])-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Tuple",
        "signature": "GE(MultiOut[E])-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:toArg",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#toArg",
        "fct-type": "function",
        "title": "toArg"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "toArg",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:toNote",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e GE [E]",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#toNote",
        "fct-type": "function",
        "title": "toNote"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "toNote",
        "normalized": "a-\u003eGE[E]",
        "package": "csound-expression-typed",
        "partial": "Note",
        "signature": "a-\u003eGE[E]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:toTuple",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "GE [E] -\u003e a",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#toTuple",
        "fct-type": "function",
        "title": "toTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "toTuple",
        "normalized": "GE[E]-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Tuple",
        "signature": "GE[E]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:tupleArity",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#tupleArity",
        "fct-type": "function",
        "title": "tupleArity"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "tupleArity",
        "normalized": "a-\u003eInt",
        "package": "csound-expression-typed",
        "partial": "Arity",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:tupleMethods",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "TupleMethods a",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#tupleMethods",
        "fct-type": "method",
        "title": "tupleMethods"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "tupleMethods",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Methods",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:tupleRates",
      "description": {
        "fct-module": "Csound.Typed.Types.Tuple",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e [Rate]",
        "fct-source": "src/Csound-Typed-Types-Tuple.html#tupleRates",
        "fct-type": "function",
        "title": "tupleRates"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types Tuple",
        "module": "Csound.Typed.Types.Tuple",
        "name": "tupleRates",
        "normalized": "a-\u003e[Rate]",
        "package": "csound-expression-typed",
        "partial": "Rates",
        "signature": "a-\u003e[Rate]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#",
      "description": {
        "fct-module": "Csound.Typed.Types",
        "fct-package": "csound-expression-typed",
        "fct-signature": "module",
        "fct-source": "src/Csound-Typed-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed Types",
        "module": "Csound.Typed.Types",
        "name": "Types",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withD",
      "description": {
        "fct-descr": "\u003cp\u003eAppends an init value which is a number.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e D -\u003e a",
        "fct-source": "src/Csound-Typed-Types.html#withD",
        "fct-type": "function",
        "title": "withD"
      },
      "index": {
        "description": "Appends an init value which is number",
        "hierarchy": "Csound Typed Types",
        "module": "Csound.Typed.Types",
        "name": "withD",
        "normalized": "a-\u003eD-\u003ea",
        "package": "csound-expression-typed",
        "partial": "",
        "signature": "a-\u003eD-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withDs",
      "description": {
        "fct-descr": "\u003cp\u003eA special case of \u003ccode\u003ewithInits\u003c/code\u003e. Here all inits are numbers. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e [D] -\u003e a",
        "fct-source": "src/Csound-Typed-Types.html#withDs",
        "fct-type": "function",
        "title": "withDs"
      },
      "index": {
        "description": "special case of withInits Here all inits are numbers",
        "hierarchy": "Csound Typed Types",
        "module": "Csound.Typed.Types",
        "name": "withDs",
        "normalized": "a-\u003e[D]-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Ds",
        "signature": "a-\u003e[D]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withInits",
      "description": {
        "fct-descr": "\u003cp\u003eAppends initialisation arguments. It's up to user to supply arguments with the right types. For example:\n\u003c/p\u003e\u003cpre\u003e oscil 0.5 440 sinWave `withInits` (0.5 :: D)\n\u003c/pre\u003e",
        "fct-module": "Csound.Typed.Types",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e b -\u003e a",
        "fct-source": "src/Csound-Typed-Types.html#withInits",
        "fct-type": "function",
        "title": "withInits"
      },
      "index": {
        "description": "Appends initialisation arguments It up to user to supply arguments with the right types For example oscil sinWave withInits",
        "hierarchy": "Csound Typed Types",
        "module": "Csound.Typed.Types",
        "name": "withInits",
        "normalized": "a-\u003eb-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Inits",
        "signature": "a-\u003eb-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withSeed",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a seed to the random value. \n It's equivalent to the \u003ccode\u003ewithD\u003c/code\u003e but it has a special \n meaning of canceling the side effect. When random\n opcode is provided with seed value it's no longer\n contains a side effect so we don't need to restrict it.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types",
        "fct-package": "csound-expression-typed",
        "fct-signature": "SE Sig -\u003e D -\u003e Sig",
        "fct-source": "src/Csound-Typed-Types.html#withSeed",
        "fct-type": "function",
        "title": "withSeed"
      },
      "index": {
        "description": "Applies seed to the random value It equivalent to the withD but it has special meaning of canceling the side effect When random opcode is provided with seed value it no longer contains side effect so we don need to restrict it",
        "hierarchy": "Csound Typed Types",
        "module": "Csound.Typed.Types",
        "name": "withSeed",
        "normalized": "SE Sig-\u003eD-\u003eSig",
        "package": "csound-expression-typed",
        "partial": "Seed",
        "signature": "SE Sig-\u003eD-\u003eSig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withSig",
      "description": {
        "fct-descr": "\u003cp\u003eAppends an init value which is a signal.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e Sig -\u003e a",
        "fct-source": "src/Csound-Typed-Types.html#withSig",
        "fct-type": "function",
        "title": "withSig"
      },
      "index": {
        "description": "Appends an init value which is signal",
        "hierarchy": "Csound Typed Types",
        "module": "Csound.Typed.Types",
        "name": "withSig",
        "normalized": "a-\u003eSig-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Sig",
        "signature": "a-\u003eSig-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withSigs",
      "description": {
        "fct-descr": "\u003cp\u003eA special case of \u003ccode\u003ewithInits\u003c/code\u003e. Here all inits are signals. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e [Sig] -\u003e a",
        "fct-source": "src/Csound-Typed-Types.html#withSigs",
        "fct-type": "function",
        "title": "withSigs"
      },
      "index": {
        "description": "special case of withInits Here all inits are signals",
        "hierarchy": "Csound Typed Types",
        "module": "Csound.Typed.Types",
        "name": "withSigs",
        "normalized": "a-\u003e[Sig]-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Sigs",
        "signature": "a-\u003e[Sig]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withTab",
      "description": {
        "fct-descr": "\u003cp\u003eAppends an init value which is a table.\n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e Tab -\u003e a",
        "fct-source": "src/Csound-Typed-Types.html#withTab",
        "fct-type": "function",
        "title": "withTab"
      },
      "index": {
        "description": "Appends an init value which is table",
        "hierarchy": "Csound Typed Types",
        "module": "Csound.Typed.Types",
        "name": "withTab",
        "normalized": "a-\u003eTab-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Tab",
        "signature": "a-\u003eTab-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withTabs",
      "description": {
        "fct-descr": "\u003cp\u003eA special case of \u003ccode\u003ewithInits\u003c/code\u003e. Here all inits are arrays. \n\u003c/p\u003e",
        "fct-module": "Csound.Typed.Types",
        "fct-package": "csound-expression-typed",
        "fct-signature": "a -\u003e [Tab] -\u003e a",
        "fct-source": "src/Csound-Typed-Types.html#withTabs",
        "fct-type": "function",
        "title": "withTabs"
      },
      "index": {
        "description": "special case of withInits Here all inits are arrays",
        "hierarchy": "Csound Typed Types",
        "module": "Csound.Typed.Types",
        "name": "withTabs",
        "normalized": "a-\u003e[Tab]-\u003ea",
        "package": "csound-expression-typed",
        "partial": "Tabs",
        "signature": "a-\u003e[Tab]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed.html#",
      "description": {
        "fct-module": "Csound.Typed",
        "fct-package": "csound-expression-typed",
        "fct-signature": "module",
        "fct-source": "src/Csound-Typed.html",
        "fct-type": "module",
        "title": "Typed"
      },
      "index": {
        "description": "",
        "hierarchy": "Csound Typed",
        "module": "Csound.Typed",
        "name": "Typed",
        "normalized": "",
        "package": "csound-expression-typed",
        "partial": "Typed",
        "signature": ""
      }
    }
  }
]