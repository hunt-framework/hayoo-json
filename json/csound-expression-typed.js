[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "csound-expression-typed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "Control",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Control.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "Control",
          "package": "csound-expression-typed",
          "partial": "Control",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "Channel",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-GlobalState-Cache.html#Channel",
          "type": "type"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "Channel",
          "package": "csound-expression-typed",
          "partial": "Channel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Csound note. It's a triple of\n\u003c/p\u003e\u003cpre\u003e (startTime, duration, parameters)\n\u003c/pre\u003e",
          "module": "Csound.Typed.Control",
          "name": "CsdEvent",
          "package": "csound-expression-typed",
          "type": "type"
        },
        "index": {
          "description": "The Csound note It triple of startTime duration parameters",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "CsdEvent",
          "package": "csound-expression-typed",
          "partial": "Csd Event",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:CsdEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eCsdEventList\u003c/a\u003e\u003c/code\u003e is a canonical representation of the Csound scores.\n A scores is a list of events and we should know the total duration of the scores.\n It's not meant to be used directly. We can use a better alternative. More convenient\n type that belongs to \u003ccode\u003e\u003ca\u003eCsdSco\u003c/a\u003e\u003c/code\u003e type class (see temporal-csound package).\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "CsdEventList",
          "package": "csound-expression-typed",
          "type": "data"
        },
        "index": {
          "description": "CsdEventList is canonical representation of the Csound scores scores is list of events and we should know the total duration of the scores It not meant to be used directly We can use better alternative More convenient type that belongs to CsdSco type class see temporal-csound package",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "CsdEventList",
          "package": "csound-expression-typed",
          "partial": "Csd Event List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:CsdEventList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class that represents Csound scores. All functions that use score are defined\n in terms of this class. If you want to use your own score representation, just define\n two methods of the class.\n\u003c/p\u003e\u003cp\u003eThe properties:\n\u003c/p\u003e\u003cpre\u003e forall a . toCsdEventList (singleCsdEvent a) === CsdEventList 1 [(0, 1, a)]\n\u003c/pre\u003e",
          "module": "Csound.Typed.Control",
          "name": "CsdSco",
          "package": "csound-expression-typed",
          "type": "class"
        },
        "index": {
          "description": "class that represents Csound scores All functions that use score are defined in terms of this class If you want to use your own score representation just define two methods of the class The properties forall toCsdEventList singleCsdEvent CsdEventList",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "CsdSco",
          "package": "csound-expression-typed",
          "partial": "Csd Sco",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:CsdSco"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "LocalHistory",
          "package": "csound-expression-typed",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "LocalHistory",
          "package": "csound-expression-typed",
          "partial": "Local History",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:LocalHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial type that represents a scores of sound signals.\n If an instrument is triggered with the scores the result is wrapped\n in the value of this type. \n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "Mix",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Control-Mix.html#Mix",
          "type": "data"
        },
        "index": {
          "description": "Special type that represents scores of sound signals If an instrument is triggered with the scores the result is wrapped in the value of this type",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "Mix",
          "package": "csound-expression-typed",
          "partial": "Mix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:Mix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "Msg",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-GlobalState-GE.html#Msg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "Msg",
          "package": "csound-expression-typed",
          "partial": "Msg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:Msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Csound's \u003ccode\u003eIO\u003c/code\u003e-monad. All values that produce side effects are wrapped\n in the \u003ccode\u003eSE\u003c/code\u003e-monad.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "SE",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-GlobalState-SE.html#SE",
          "type": "newtype"
        },
        "index": {
          "description": "The Csound IO monad All values that produce side effects are wrapped in the SE monad",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "SE",
          "package": "csound-expression-typed",
          "partial": "SE",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:SE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt describes a reference to mutable values.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "SERef",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Control-SERef.html#SERef",
          "type": "data"
        },
        "index": {
          "description": "It describes reference to mutable values",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "SERef",
          "package": "csound-expression-typed",
          "partial": "SERef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#t:SERef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "CsdEventList",
          "package": "csound-expression-typed",
          "signature": "CsdEventList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "CsdEventList",
          "package": "csound-expression-typed",
          "partial": "Csd Event List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:CsdEventList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "LocalHistory",
          "package": "csound-expression-typed",
          "signature": "LocalHistory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "LocalHistory",
          "package": "csound-expression-typed",
          "partial": "Local History",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:LocalHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "SE",
          "package": "csound-expression-typed",
          "signature": "SE",
          "source": "src/Csound-Typed-GlobalState-SE.html#SE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "SE",
          "package": "csound-expression-typed",
          "partial": "SE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:SE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "SERef",
          "package": "csound-expression-typed",
          "signature": "SERef",
          "source": "src/Csound-Typed-Control-SERef.html#SERef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "SERef",
          "package": "csound-expression-typed",
          "partial": "SERef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:SERef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA band-limited oscillator with user defined waveform (it's stored in the table).\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "blosc",
          "package": "csound-expression-typed",
          "signature": "Tab -\u003e Sig -\u003e Sig",
          "source": "src/Csound-Typed-Control-Vco.html#blosc",
          "type": "function"
        },
        "index": {
          "description": "band-limited oscillator with user defined waveform it stored in the table",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "blosc",
          "normalized": "Tab-\u003eSig-\u003eSig",
          "package": "csound-expression-typed",
          "signature": "Tab-\u003eSig-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:blosc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "csdEventListDur",
          "package": "csound-expression-typed",
          "signature": "Double",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "csdEventListDur",
          "package": "csound-expression-typed",
          "partial": "Event List Dur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:csdEventListDur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "csdEventListNotes",
          "package": "csound-expression-typed",
          "signature": "[CsdEvent a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "csdEventListNotes",
          "normalized": "[CsdEvent a]",
          "package": "csound-expression-typed",
          "partial": "Event List Notes",
          "signature": "[CsdEvent a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:csdEventListNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies an effect to the sound. Effect is applied to the sound on the give track. \n\u003c/p\u003e\u003cpre\u003e res = eff effect sco \n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eeffect\u003c/code\u003e - a function that takes a tuple of signals and produces \n   a tuple of signals.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003esco\u003c/code\u003e - something that is constructed with \u003ccode\u003e\u003ca\u003esco\u003c/a\u003e\u003c/code\u003e or \n   \u003ccode\u003e\u003ca\u003eeff\u003c/a\u003e\u003c/code\u003e. \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWith the function \u003ccode\u003e\u003ca\u003eeff\u003c/a\u003e\u003c/code\u003e you can apply a reverb or adjust the \n level of the signal. It functions like a mixing board but unlike mixing \n board it produces the value that you can arrange with functions from your\n favorite Score-generation library. You can delay it or mix with some other track and \n apply some another effect on top of it!\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "eff",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE b) -\u003e f (Mix a) -\u003e f (Mix b)",
          "source": "src/Csound-Typed-Control-Mix.html#eff",
          "type": "function"
        },
        "index": {
          "description": "Applies an effect to the sound Effect is applied to the sound on the give track res eff effect sco effect function that takes tuple of signals and produces tuple of signals sco something that is constructed with sco or eff With the function eff you can apply reverb or adjust the level of the signal It functions like mixing board but unlike mixing board it produces the value that you can arrange with functions from your favorite Score-generation library You can delay it or mix with some other track and apply some another effect on top of it",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "eff",
          "normalized": "(a-\u003eSE b)-\u003ec(Mix a)-\u003ec(Mix b)",
          "package": "csound-expression-typed",
          "signature": "(a-\u003eSE b)-\u003ef(Mix a)-\u003ef(Mix b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:eff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "evalSE",
          "package": "csound-expression-typed",
          "signature": "SE a -\u003e GE a",
          "source": "src/Csound-Typed-GlobalState-SE.html#evalSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "evalSE",
          "normalized": "SE a-\u003eGE a",
          "package": "csound-expression-typed",
          "partial": "SE",
          "signature": "SE a-\u003eGE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:evalSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "execGEinSE",
          "package": "csound-expression-typed",
          "signature": "SE (GE a) -\u003e SE a",
          "source": "src/Csound-Typed-GlobalState-SE.html#execGEinSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "execGEinSE",
          "normalized": "SE(GE a)-\u003eSE a",
          "package": "csound-expression-typed",
          "partial": "GEin SE",
          "signature": "SE(GE a)-\u003eSE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:execGEinSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "execSE",
          "package": "csound-expression-typed",
          "signature": "SE () -\u003e GE InstrBody",
          "source": "src/Csound-Typed-GlobalState-SE.html#execSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "execSE",
          "normalized": "SE()-\u003eGE InstrBody",
          "package": "csound-expression-typed",
          "partial": "SE",
          "signature": "SE()-\u003eGE InstrBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:execSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "expDependency",
          "package": "csound-expression-typed",
          "signature": "Maybe E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "expDependency",
          "package": "csound-expression-typed",
          "partial": "Dependency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:expDependency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "fromDep",
          "package": "csound-expression-typed",
          "signature": "Dep a -\u003e SE (GE a)",
          "source": "src/Csound-Typed-GlobalState-SE.html#fromDep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "fromDep",
          "normalized": "Dep a-\u003eSE(GE a)",
          "package": "csound-expression-typed",
          "partial": "Dep",
          "signature": "Dep a-\u003eSE(GE a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:fromDep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "fromDep_",
          "package": "csound-expression-typed",
          "signature": "Dep () -\u003e SE ()",
          "source": "src/Csound-Typed-GlobalState-SE.html#fromDep_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "fromDep_",
          "normalized": "Dep()-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "Dep",
          "signature": "Dep()-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:fromDep_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "geToSe",
          "package": "csound-expression-typed",
          "signature": "GE a -\u003e SE a",
          "source": "src/Csound-Typed-GlobalState-SE.html#geToSe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "geToSe",
          "normalized": "GE a-\u003eSE a",
          "package": "csound-expression-typed",
          "partial": "To Se",
          "signature": "GE a-\u003eSE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:geToSe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "getIns",
          "package": "csound-expression-typed",
          "signature": "SE a",
          "source": "src/Csound-Typed-Control.html#getIns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "getIns",
          "package": "csound-expression-typed",
          "partial": "Ins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:getIns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "hideGEinDep",
          "package": "csound-expression-typed",
          "signature": "GE (Dep a) -\u003e Dep a",
          "source": "src/Csound-Typed-GlobalState-SE.html#hideGEinDep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "hideGEinDep",
          "normalized": "GE(Dep a)-\u003eDep a",
          "package": "csound-expression-typed",
          "partial": "GEin Dep",
          "signature": "GE(Dep a)-\u003eDep a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:hideGEinDep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "instr0",
          "package": "csound-expression-typed",
          "signature": "SE a -\u003e SE a",
          "source": "src/Csound-Typed-Control.html#instr0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "instr0",
          "normalized": "SE a-\u003eSE a",
          "package": "csound-expression-typed",
          "signature": "SE a-\u003eSE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:instr0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegrated sawtooth: 4 * x * (1 - x).\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "isaw",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e Sig",
          "source": "src/Csound-Typed-Control-Vco.html#isaw",
          "type": "function"
        },
        "index": {
          "description": "Integrated sawtooth",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "isaw",
          "normalized": "Sig-\u003eSig",
          "package": "csound-expression-typed",
          "signature": "Sig-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:isaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggers a midi-instrument (aka Csound's massign) for all channels. \n It's useful to test a single instrument.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "midi",
          "package": "csound-expression-typed",
          "signature": "(Msg -\u003e SE a) -\u003e a",
          "source": "src/Csound-Typed-Control-Midi.html#midi",
          "type": "function"
        },
        "index": {
          "description": "Triggers midi-instrument aka Csound massign for all channels It useful to test single instrument",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "midi",
          "normalized": "(Msg-\u003eSE a)-\u003ea",
          "package": "csound-expression-typed",
          "signature": "(Msg-\u003eSE a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:midi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggers a midi-procedure (aka Csound's massign) for all channels. \n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "midi_",
          "package": "csound-expression-typed",
          "signature": "(Msg -\u003e SE ()) -\u003e SE ()",
          "source": "src/Csound-Typed-Control-Midi.html#midi_",
          "type": "function"
        },
        "index": {
          "description": "Triggers midi-procedure aka Csound massign for all channels",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "midi_",
          "normalized": "(Msg-\u003eSE())-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "(Msg-\u003eSE())-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:midi_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggers a midi-instrument (aka Csound's massign) on the specified channel. \n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "midin",
          "package": "csound-expression-typed",
          "signature": "Channel -\u003e (Msg -\u003e SE a) -\u003e a",
          "source": "src/Csound-Typed-Control-Midi.html#midin",
          "type": "function"
        },
        "index": {
          "description": "Triggers midi-instrument aka Csound massign on the specified channel",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "midin",
          "normalized": "Channel-\u003e(Msg-\u003eSE a)-\u003ea",
          "package": "csound-expression-typed",
          "signature": "Channel-\u003e(Msg-\u003eSE a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:midin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggers a midi-procedure (aka Csound's pgmassign) on the given channel. \n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "midin_",
          "package": "csound-expression-typed",
          "signature": "Channel -\u003e (Msg -\u003e SE ()) -\u003e SE ()",
          "source": "src/Csound-Typed-Control-Midi.html#midin_",
          "type": "function"
        },
        "index": {
          "description": "Triggers midi-procedure aka Csound pgmassign on the given channel",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "midin_",
          "normalized": "Channel-\u003e(Msg-\u003eSE())-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "Channel-\u003e(Msg-\u003eSE())-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:midin_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a scores to the sound signals. we can use it inside the other instruments.\n Warning: if we use a score that lasts for an hour in the note that lasts for 5 seconds\n all the events would be generated, though we will hear only first five seconds.\n So the semantics is good but implementation is inefficient for such a cases \n (consider event streams for such cases). \n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "mix",
          "package": "csound-expression-typed",
          "signature": "f (Mix a) -\u003e a",
          "source": "src/Csound-Typed-Control-Mix.html#mix",
          "type": "function"
        },
        "index": {
          "description": "Renders scores to the sound signals we can use it inside the other instruments Warning if we use score that lasts for an hour in the note that lasts for seconds all the events would be generated though we will hear only first five seconds So the semantics is good but implementation is inefficient for such cases consider event streams for such cases",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "mix",
          "normalized": "a(Mix b)-\u003eb",
          "package": "csound-expression-typed",
          "signature": "f(Mix a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:mix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImitates a closure for a bunch of notes to be played within another instrument. \n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "mixBy",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e f (Mix b)) -\u003e a -\u003e b",
          "source": "src/Csound-Typed-Control-Mix.html#mixBy",
          "type": "function"
        },
        "index": {
          "description": "Imitates closure for bunch of notes to be played within another instrument",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "mixBy",
          "normalized": "(a-\u003eb(Mix c))-\u003ea-\u003ec",
          "package": "csound-expression-typed",
          "partial": "By",
          "signature": "(a-\u003ef(Mix b))-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:mixBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImitates a closure for a bunch of procedures to be played within another instrument. \n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "mixBy_",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e f (Mix Unit)) -\u003e a -\u003e SE ()",
          "source": "src/Csound-Typed-Control-Mix.html#mixBy_",
          "type": "function"
        },
        "index": {
          "description": "Imitates closure for bunch of procedures to be played within another instrument",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "mixBy_",
          "normalized": "(a-\u003eb(Mix Unit))-\u003ea-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "By",
          "signature": "(a-\u003ef(Mix Unit))-\u003ea-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:mixBy_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a bunch of procedures scheduled with scores to a single procedure.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "mix_",
          "package": "csound-expression-typed",
          "signature": "f (Mix Unit) -\u003e SE ()",
          "source": "src/Csound-Typed-Control-Mix.html#mix_",
          "type": "function"
        },
        "index": {
          "description": "Converts bunch of procedures scheduled with scores to single procedure",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "mix_",
          "normalized": "a(Mix Unit)-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "f(Mix Unit)-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:mix_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "newLocalVar",
          "package": "csound-expression-typed",
          "signature": "Rate -\u003e GE E -\u003e SE Var",
          "source": "src/Csound-Typed-GlobalState-SE.html#newLocalVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "newLocalVar",
          "normalized": "Rate-\u003eGE E-\u003eSE Var",
          "package": "csound-expression-typed",
          "partial": "Local Var",
          "signature": "Rate-\u003eGE E-\u003eSE Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:newLocalVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "newLocalVarId",
          "package": "csound-expression-typed",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "newLocalVarId",
          "package": "csound-expression-typed",
          "partial": "Local Var Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:newLocalVarId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "newLocalVars",
          "package": "csound-expression-typed",
          "signature": "[Rate] -\u003e GE [E] -\u003e SE [Var]",
          "source": "src/Csound-Typed-GlobalState-SE.html#newLocalVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "newLocalVars",
          "normalized": "[Rate]-\u003eGE[E]-\u003eSE[Var]",
          "package": "csound-expression-typed",
          "partial": "Local Vars",
          "signature": "[Rate]-\u003eGE[E]-\u003eSE[Var]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:newLocalVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocates a new mutable value and initializes it with value. \n A reference can contain a tuple of variables.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "newSERef",
          "package": "csound-expression-typed",
          "signature": "a -\u003e SE (SERef a)",
          "source": "src/Csound-Typed-Control-SERef.html#newSERef",
          "type": "function"
        },
        "index": {
          "description": "Allocates new mutable value and initializes it with value reference can contain tuple of variables",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "newSERef",
          "normalized": "a-\u003eSE(SERef a)",
          "package": "csound-expression-typed",
          "partial": "SERef",
          "signature": "a-\u003eSE(SERef a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:newSERef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggers a midi-instrument (aka Csound's pgmassign) on the specified programm bank. \n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "pgmidi",
          "package": "csound-expression-typed",
          "signature": "Maybe Int -\u003e Channel -\u003e (Msg -\u003e SE a) -\u003e a",
          "source": "src/Csound-Typed-Control-Midi.html#pgmidi",
          "type": "function"
        },
        "index": {
          "description": "Triggers midi-instrument aka Csound pgmassign on the specified programm bank",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "pgmidi",
          "normalized": "Maybe Int-\u003eChannel-\u003e(Msg-\u003eSE a)-\u003ea",
          "package": "csound-expression-typed",
          "signature": "Maybe Int-\u003eChannel-\u003e(Msg-\u003eSE a)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:pgmidi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggers a midi-procedure (aka Csound's pgmassign) on the given programm bank. \n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "pgmidi_",
          "package": "csound-expression-typed",
          "signature": "Maybe Int -\u003e Channel -\u003e (Msg -\u003e SE ()) -\u003e SE ()",
          "source": "src/Csound-Typed-Control-Midi.html#pgmidi_",
          "type": "function"
        },
        "index": {
          "description": "Triggers midi-procedure aka Csound pgmassign on the given programm bank",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "pgmidi_",
          "normalized": "Maybe Int-\u003eChannel-\u003e(Msg-\u003eSE())-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "Maybe Int-\u003eChannel-\u003e(Msg-\u003eSE())-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:pgmidi_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePulse (not normalized).\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "pulse",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e Sig",
          "source": "src/Csound-Typed-Control-Vco.html#pulse",
          "type": "function"
        },
        "index": {
          "description": "Pulse not normalized",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "pulse",
          "normalized": "Sig-\u003eSig",
          "package": "csound-expression-typed",
          "signature": "Sig-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:pulse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "readSERef",
          "package": "csound-expression-typed",
          "signature": "SE a",
          "source": "src/Csound-Typed-Control-SERef.html#SERef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "readSERef",
          "package": "csound-expression-typed",
          "partial": "SERef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:readSERef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "runSE",
          "package": "csound-expression-typed",
          "signature": "SE a -\u003e GE (a, LocalHistory)",
          "source": "src/Csound-Typed-GlobalState-SE.html#runSE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "runSE",
          "normalized": "SE a-\u003eGE(a,LocalHistory)",
          "package": "csound-expression-typed",
          "partial": "SE",
          "signature": "SE a-\u003eGE(a,LocalHistory)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:runSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sawtooth.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "saw",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e Sig",
          "source": "src/Csound-Typed-Control-Vco.html#saw",
          "type": "function"
        },
        "index": {
          "description": "sawtooth",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "saw",
          "normalized": "Sig-\u003eSig",
          "package": "csound-expression-typed",
          "signature": "Sig-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:saw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt's like the function \u003ccode\u003etrig\u003c/code\u003e, but delay is set to zero.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "sched",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE b) -\u003e Evt (D, a) -\u003e b",
          "source": "src/Csound-Typed-Control-Evt.html#sched",
          "type": "function"
        },
        "index": {
          "description": "It like the function trig but delay is set to zero",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "sched",
          "normalized": "(a-\u003eSE b)-\u003eEvt(D,a)-\u003eb",
          "package": "csound-expression-typed",
          "signature": "(a-\u003eSE b)-\u003eEvt(D,a)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closure to trigger an instrument inside the body of another instrument.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "schedBy",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE b) -\u003e (c -\u003e Evt (D, a)) -\u003e c -\u003e b",
          "source": "src/Csound-Typed-Control-Evt.html#schedBy",
          "type": "function"
        },
        "index": {
          "description": "closure to trigger an instrument inside the body of another instrument",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "schedBy",
          "normalized": "(a-\u003eSE b)-\u003e(c-\u003eEvt(D,a))-\u003ec-\u003eb",
          "package": "csound-expression-typed",
          "partial": "By",
          "signature": "(a-\u003eSE b)-\u003e(c-\u003eEvt(D,a))-\u003ec-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:schedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn instrument is triggered with event stream and delay time is set to zero \n (event fires immediately) and duration is set to inifinite time. The note is \n held while the instrument is producing something. If the instrument is silent\n for some seconds (specified in the first argument) then it's turned off.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "schedHarp",
          "package": "csound-expression-typed",
          "signature": "D -\u003e (a -\u003e SE b) -\u003e Evt a -\u003e b",
          "source": "src/Csound-Typed-Control-Evt.html#schedHarp",
          "type": "function"
        },
        "index": {
          "description": "An instrument is triggered with event stream and delay time is set to zero event fires immediately and duration is set to inifinite time The note is held while the instrument is producing something If the instrument is silent for some seconds specified in the first argument then it turned off",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "schedHarp",
          "normalized": "D-\u003e(a-\u003eSE b)-\u003eEvt a-\u003eb",
          "package": "csound-expression-typed",
          "partial": "Harp",
          "signature": "D-\u003e(a-\u003eSE b)-\u003eEvt a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:schedHarp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closure to trigger an instrument inside the body of another instrument.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "schedHarpBy",
          "package": "csound-expression-typed",
          "signature": "D -\u003e (a -\u003e SE b) -\u003e (c -\u003e Evt a) -\u003e c -\u003e b",
          "source": "src/Csound-Typed-Control-Evt.html#schedHarpBy",
          "type": "function"
        },
        "index": {
          "description": "closure to trigger an instrument inside the body of another instrument",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "schedHarpBy",
          "normalized": "D-\u003e(a-\u003eSE b)-\u003e(c-\u003eEvt a)-\u003ec-\u003eb",
          "package": "csound-expression-typed",
          "partial": "Harp By",
          "signature": "D-\u003e(a-\u003eSE b)-\u003e(c-\u003eEvt a)-\u003ec-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:schedHarpBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggers a procedure on the event stream. A delay time is set to zero.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "sched_",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE ()) -\u003e Evt (D, a) -\u003e SE ()",
          "source": "src/Csound-Typed-Control-Evt.html#sched_",
          "type": "function"
        },
        "index": {
          "description": "Triggers procedure on the event stream delay time is set to zero",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "sched_",
          "normalized": "(a-\u003eSE())-\u003eEvt(D,a)-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "(a-\u003eSE())-\u003eEvt(D,a)-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sched_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlays a bunch of notes with the given instrument.\n\u003c/p\u003e\u003cpre\u003e res = sco instrument scores \n\u003c/pre\u003e",
          "module": "Csound.Typed.Control",
          "name": "sco",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE b) -\u003e f a -\u003e f (Mix b)",
          "source": "src/Csound-Typed-Control-Mix.html#sco",
          "type": "function"
        },
        "index": {
          "description": "Plays bunch of notes with the given instrument res sco instrument scores",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "sco",
          "normalized": "(a-\u003eSE b)-\u003ec a-\u003ec(Mix b)",
          "package": "csound-expression-typed",
          "signature": "(a-\u003eSE b)-\u003ef a-\u003ef(Mix b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sco"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvokes a procedure for the given bunch of events.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "sco_",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE ()) -\u003e f a -\u003e f (Mix Unit)",
          "source": "src/Csound-Typed-Control-Mix.html#sco_",
          "type": "function"
        },
        "index": {
          "description": "Invokes procedure for the given bunch of events",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "sco_",
          "normalized": "(a-\u003eSE())-\u003eb a-\u003eb(Mix Unit)",
          "package": "csound-expression-typed",
          "signature": "(a-\u003eSE())-\u003ef a-\u003ef(Mix Unit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sco_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn alias for the function \u003ccode\u003enewSERef\u003c/code\u003e. It returns not the reference\n to mutable value but a pair of reader and writer functions.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "sensorsSE",
          "package": "csound-expression-typed",
          "signature": "a -\u003e SE (SE a, a -\u003e SE ())",
          "source": "src/Csound-Typed-Control-SERef.html#sensorsSE",
          "type": "function"
        },
        "index": {
          "description": "An alias for the function newSERef It returns not the reference to mutable value but pair of reader and writer functions",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "sensorsSE",
          "normalized": "a-\u003eSE(SE a,a-\u003eSE())",
          "package": "csound-expression-typed",
          "partial": "SE",
          "signature": "a-\u003eSE(SE a,a-\u003eSE())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sensorsSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a scores that contains only one event. The event happens immediately and lasts for 1 second.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "singleCsdEvent",
          "package": "csound-expression-typed",
          "signature": "CsdEvent a -\u003e f a",
          "type": "method"
        },
        "index": {
          "description": "Constructs scores that contains only one event The event happens immediately and lasts for second",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "singleCsdEvent",
          "normalized": "CsdEvent a-\u003eb a",
          "package": "csound-expression-typed",
          "partial": "Csd Event",
          "signature": "CsdEvent a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:singleCsdEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA square wave.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "sqr",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e Sig",
          "source": "src/Csound-Typed-Control-Vco.html#sqr",
          "type": "function"
        },
        "index": {
          "description": "square wave",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "sqr",
          "normalized": "Sig-\u003eSig",
          "package": "csound-expression-typed",
          "signature": "Sig-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:sqr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a given score representation to the canonical one.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "toCsdEventList",
          "package": "csound-expression-typed",
          "signature": "f a -\u003e CsdEventList a",
          "type": "method"
        },
        "index": {
          "description": "Converts given score representation to the canonical one",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "toCsdEventList",
          "normalized": "a b-\u003eCsdEventList b",
          "package": "csound-expression-typed",
          "partial": "Csd Event List",
          "signature": "f a-\u003eCsdEventList a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:toCsdEventList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA triangle wave.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "tri",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e Sig",
          "source": "src/Csound-Typed-Control-Vco.html#tri",
          "type": "function"
        },
        "index": {
          "description": "triangle wave",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "tri",
          "normalized": "Sig-\u003eSig",
          "package": "csound-expression-typed",
          "signature": "Sig-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:tri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggers an instrument with an event stream. The event stream\n contains triples:\n\u003c/p\u003e\u003cpre\u003e (delay_after_event_is_fired, duration_of_the_event, argument_for_the_instrument)\n\u003c/pre\u003e",
          "module": "Csound.Typed.Control",
          "name": "trig",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE b) -\u003e Evt (D, D, a) -\u003e b",
          "source": "src/Csound-Typed-Control-Evt.html#trig",
          "type": "function"
        },
        "index": {
          "description": "Triggers an instrument with an event stream The event stream contains triples delay after event is fired duration of the event argument for the instrument",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "trig",
          "normalized": "(a-\u003eSE b)-\u003eEvt(D,D,a)-\u003eb",
          "package": "csound-expression-typed",
          "signature": "(a-\u003eSE b)-\u003eEvt(D,D,a)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:trig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closure to trigger an instrument inside the body of another instrument.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "trigBy",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE b) -\u003e (c -\u003e Evt (D, D, a)) -\u003e c -\u003e b",
          "source": "src/Csound-Typed-Control-Evt.html#trigBy",
          "type": "function"
        },
        "index": {
          "description": "closure to trigger an instrument inside the body of another instrument",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "trigBy",
          "normalized": "(a-\u003eSE b)-\u003e(c-\u003eEvt(D,D,a))-\u003ec-\u003eb",
          "package": "csound-expression-typed",
          "partial": "By",
          "signature": "(a-\u003eSE b)-\u003e(c-\u003eEvt(D,D,a))-\u003ec-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:trigBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggers a procedure on the event stream.\n\u003c/p\u003e",
          "module": "Csound.Typed.Control",
          "name": "trig_",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE ()) -\u003e Evt (D, D, a) -\u003e SE ()",
          "source": "src/Csound-Typed-Control-Evt.html#trig_",
          "type": "function"
        },
        "index": {
          "description": "Triggers procedure on the event stream",
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "trig_",
          "normalized": "(a-\u003eSE())-\u003eEvt(D,D,a)-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "(a-\u003eSE())-\u003eEvt(D,D,a)-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:trig_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "unSE",
          "package": "csound-expression-typed",
          "signature": "Dep a",
          "source": "src/Csound-Typed-GlobalState-SE.html#SE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "unSE",
          "package": "csound-expression-typed",
          "partial": "SE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:unSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Control",
          "name": "writeSERef",
          "package": "csound-expression-typed",
          "signature": "a -\u003e SE ()",
          "source": "src/Csound-Typed-Control-SERef.html#SERef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Control",
          "module": "Csound.Typed.Control",
          "name": "writeSERef",
          "normalized": "a-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "SERef",
          "signature": "a-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Control.html#v:writeSERef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Gui",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Gui",
          "package": "csound-expression-typed",
          "partial": "Gui",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "BorderType",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#BorderType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "BorderType",
          "package": "csound-expression-typed",
          "partial": "Border Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:BorderType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the box. Some values are not implemented on the Csound level.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "BoxType",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "data"
        },
        "index": {
          "description": "The type of the box Some values are not implemented on the Csound level",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "BoxType",
          "package": "csound-expression-typed",
          "partial": "Box Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:BoxType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the button. It affects toggle buttons and button banks.\n\u003c/p\u003e\u003cp\u003eIn Csound buttons and toggle buttons\n are constructed with the same function (but with different button types). \n But in this library they are contructed by different functions (\u003ccode\u003ebutton\u003c/code\u003e and \u003ccode\u003etoggle\u003c/code\u003e). \n Normal button is a plain old button, but other values specify toggle buttons.\n So this property doesn't affect the buttons (since they could be only normal buttons).\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "ButtonType",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#ButtonType",
          "type": "data"
        },
        "index": {
          "description": "The type of the button It affects toggle buttons and button banks In Csound buttons and toggle buttons are constructed with the same function but with different button types But in this library they are contructed by different functions button and toggle Normal button is plain old button but other values specify toggle buttons So this property doesn affect the buttons since they could be only normal buttons",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ButtonType",
          "package": "csound-expression-typed",
          "partial": "Button Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:ButtonType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Csound colours. \n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Color",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#Color",
          "type": "type"
        },
        "index": {
          "description": "The Csound colours",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Color",
          "package": "csound-expression-typed",
          "partial": "Color",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA static element. We can only look at it.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Display",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Widget.html#Display",
          "type": "type"
        },
        "index": {
          "description": "static element We can only look at it",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Display",
          "package": "csound-expression-typed",
          "partial": "Display",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Elem",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Elem",
          "package": "csound-expression-typed",
          "partial": "Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Emphasis",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#Emphasis",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Emphasis",
          "package": "csound-expression-typed",
          "partial": "Emphasis",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Emphasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "FontType",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#FontType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "FontType",
          "package": "csound-expression-typed",
          "partial": "Font Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:FontType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA visual representation of the GUI-element.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Gui",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#Gui",
          "type": "newtype"
        },
        "index": {
          "description": "visual representation of the GUI-element",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Gui",
          "package": "csound-expression-typed",
          "partial": "Gui",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Gui"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "GuiHandle",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#GuiHandle",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "GuiHandle",
          "package": "csound-expression-typed",
          "partial": "Gui Handle",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:GuiHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "GuiNode",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#GuiNode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "GuiNode",
          "package": "csound-expression-typed",
          "partial": "Gui Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:GuiNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "InitMe",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#InitMe",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "InitMe",
          "package": "csound-expression-typed",
          "partial": "Init Me",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:InitMe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidgets that just do something inside them or have an inner state.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Inner",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Widget.html#Inner",
          "type": "type"
        },
        "index": {
          "description": "Widgets that just do something inside them or have an inner state",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Inner",
          "package": "csound-expression-typed",
          "partial": "Inner",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Inner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidgets that produce something has inputs.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Input",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Widget.html#Input",
          "type": "type"
        },
        "index": {
          "description": "Widgets that produce something has inputs",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Input",
          "package": "csound-expression-typed",
          "partial": "Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeys.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Key",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Keys",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Key",
          "package": "csound-expression-typed",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeyboard events.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "KeyEvt",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-GlobalState-GE.html#KeyEvt",
          "type": "data"
        },
        "index": {
          "description": "Keyboard events",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "KeyEvt",
          "package": "csound-expression-typed",
          "partial": "Key Evt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:KeyEvt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "KnobType",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#KnobType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "KnobType",
          "package": "csound-expression-typed",
          "partial": "Knob Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:KnobType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome values are not implemented on the Csound level.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "LabelType",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#LabelType",
          "type": "data"
        },
        "index": {
          "description": "Some values are not implemented on the Csound level",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "LabelType",
          "package": "csound-expression-typed",
          "partial": "Label Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:LabelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the material of the element. It affects sliders and buttons.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Material",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#Material",
          "type": "data"
        },
        "index": {
          "description": "The type of the material of the element It affects sliders and buttons",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Material",
          "package": "csound-expression-typed",
          "partial": "Material",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Material"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe orientation of the widget (slider, roller). This property is \n never needs to be set in practice. If this property is not set then \n default orientation is calculated from the bounding box of the widget.\n If the width is greater than the height then we need to use a horizontal\n widget otherwise it should be a vertical one.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Orient",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#Orient",
          "type": "data"
        },
        "index": {
          "description": "The orientation of the widget slider roller This property is never needs to be set in practice If this property is not set then default orientation is calculated from the bounding box of the widget If the width is greater than the height then we need to use horizontal widget otherwise it should be vertical one",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Orient",
          "package": "csound-expression-typed",
          "partial": "Orient",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Orient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWidgets that consume something has outputs.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Output",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Widget.html#Output",
          "type": "type"
        },
        "index": {
          "description": "Widgets that consume something has outputs",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Output",
          "package": "csound-expression-typed",
          "partial": "Output",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Panel",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#Panel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Panel",
          "package": "csound-expression-typed",
          "partial": "Panel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Panel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperties of the widgets.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Prop",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "data"
        },
        "index": {
          "description": "Properties of the widgets",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Prop",
          "package": "csound-expression-typed",
          "partial": "Prop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rectangle.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Rect",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
          "type": "data"
        },
        "index": {
          "description": "rectangle",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Rect",
          "package": "csound-expression-typed",
          "partial": "Rect",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA consumer of the values.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Sink",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Widget.html#Sink",
          "type": "type"
        },
        "index": {
          "description": "consumer of the values",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Sink",
          "package": "csound-expression-typed",
          "partial": "Sink",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SliderType",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#SliderType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SliderType",
          "package": "csound-expression-typed",
          "partial": "Slider Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:SliderType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA producer of the values.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Source",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Widget.html#Source",
          "type": "type"
        },
        "index": {
          "description": "producer of the values",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Source",
          "package": "csound-expression-typed",
          "partial": "Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "TextType",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#TextType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "TextType",
          "package": "csound-expression-typed",
          "partial": "Text Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:TextType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe diapason of the continuous value.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "ValDiap",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#ValDiap",
          "type": "data"
        },
        "index": {
          "description": "The diapason of the continuous value",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ValDiap",
          "package": "csound-expression-typed",
          "partial": "Val Diap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:ValDiap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ValScaleType",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#ValScaleType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ValScaleType",
          "package": "csound-expression-typed",
          "partial": "Val Scale Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:ValScaleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value span is a diapason of the value and a type \n of the scale (can be linear or exponential).\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "ValSpan",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#ValSpan",
          "type": "data"
        },
        "index": {
          "description": "value span is diapason of the value and type of the scale can be linear or exponential",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ValSpan",
          "package": "csound-expression-typed",
          "partial": "Val Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:ValSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ValStep",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#ValStep",
          "type": "type"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ValStep",
          "package": "csound-expression-typed",
          "partial": "Val Step",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:ValStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA widget consists of visible element (Gui), value consumer (Output) \n and producer (Input) and an inner state (Inner).\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "Widget",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Widget.html#Widget",
          "type": "type"
        },
        "index": {
          "description": "widget consists of visible element Gui value consumer Output and producer Input and an inner state Inner",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Widget",
          "package": "csound-expression-typed",
          "partial": "Widget",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Win",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Gui-Gui.html#Win",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Win",
          "package": "csound-expression-typed",
          "partial": "Win",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#t:Win"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ArrowDown",
          "package": "csound-expression-typed",
          "signature": "ArrowDown",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ArrowDown",
          "package": "csound-expression-typed",
          "partial": "Arrow Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ArrowDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ArrowLeft",
          "package": "csound-expression-typed",
          "signature": "ArrowLeft",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ArrowLeft",
          "package": "csound-expression-typed",
          "partial": "Arrow Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ArrowLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ArrowRight",
          "package": "csound-expression-typed",
          "signature": "ArrowRight",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ArrowRight",
          "package": "csound-expression-typed",
          "partial": "Arrow Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ArrowRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ArrowUp",
          "package": "csound-expression-typed",
          "signature": "ArrowUp",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ArrowUp",
          "package": "csound-expression-typed",
          "partial": "Arrow Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ArrowUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Backspace",
          "package": "csound-expression-typed",
          "signature": "Backspace",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Backspace",
          "package": "csound-expression-typed",
          "partial": "Backspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Backspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "BlackLine",
          "package": "csound-expression-typed",
          "signature": "BlackLine",
          "source": "src/Csound-Typed-Gui-Gui.html#BorderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "BlackLine",
          "package": "csound-expression-typed",
          "partial": "Black Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:BlackLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Bold",
          "package": "csound-expression-typed",
          "signature": "Bold",
          "source": "src/Csound-Typed-Gui-Gui.html#Emphasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Bold",
          "package": "csound-expression-typed",
          "partial": "Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "BoldItalic",
          "package": "csound-expression-typed",
          "signature": "BoldItalic",
          "source": "src/Csound-Typed-Gui-Gui.html#Emphasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "BoldItalic",
          "package": "csound-expression-typed",
          "partial": "Bold Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:BoldItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "BorderBox",
          "package": "csound-expression-typed",
          "signature": "BorderBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "BorderBox",
          "package": "csound-expression-typed",
          "partial": "Border Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:BorderBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Box",
          "package": "csound-expression-typed",
          "signature": "Box String",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Box",
          "package": "csound-expression-typed",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ButBank",
          "package": "csound-expression-typed",
          "signature": "ButBank Int Int",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ButBank",
          "package": "csound-expression-typed",
          "partial": "But Bank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ButBank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Button",
          "package": "csound-expression-typed",
          "signature": "Button InstrId",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Button",
          "package": "csound-expression-typed",
          "partial": "Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "CapsLook",
          "package": "csound-expression-typed",
          "signature": "CapsLook",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "CapsLook",
          "package": "csound-expression-typed",
          "partial": "Caps Look",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:CapsLook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "CharKey",
          "package": "csound-expression-typed",
          "signature": "CharKey Char",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "CharKey",
          "package": "csound-expression-typed",
          "partial": "Char Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:CharKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "CheckButton",
          "package": "csound-expression-typed",
          "signature": "CheckButton",
          "source": "src/Csound-Typed-Gui-Gui.html#ButtonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "CheckButton",
          "package": "csound-expression-typed",
          "partial": "Check Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:CheckButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Clock",
          "package": "csound-expression-typed",
          "signature": "Clock",
          "source": "src/Csound-Typed-Gui-Gui.html#KnobType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Clock",
          "package": "csound-expression-typed",
          "partial": "Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Clock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Count",
          "package": "csound-expression-typed",
          "signature": "Count ValDiap ValStep (Maybe ValStep)",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Count",
          "package": "csound-expression-typed",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Courier",
          "package": "csound-expression-typed",
          "signature": "Courier",
          "source": "src/Csound-Typed-Gui-Gui.html#FontType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Courier",
          "package": "csound-expression-typed",
          "partial": "Courier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Courier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Delete",
          "package": "csound-expression-typed",
          "signature": "Delete",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Delete",
          "package": "csound-expression-typed",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "DiamondDownBox",
          "package": "csound-expression-typed",
          "signature": "DiamondDownBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "DiamondDownBox",
          "package": "csound-expression-typed",
          "partial": "Diamond Down Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:DiamondDownBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "DiamondUpBox",
          "package": "csound-expression-typed",
          "signature": "DiamondUpBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "DiamondUpBox",
          "package": "csound-expression-typed",
          "partial": "Diamond Up Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:DiamondUpBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Dingbats",
          "package": "csound-expression-typed",
          "signature": "Dingbats",
          "source": "src/Csound-Typed-Gui-Gui.html#FontType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Dingbats",
          "package": "csound-expression-typed",
          "partial": "Dingbats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Dingbats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "DownBox",
          "package": "csound-expression-typed",
          "signature": "DownBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "DownBox",
          "package": "csound-expression-typed",
          "partial": "Down Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:DownBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "DownBoxBorder",
          "package": "csound-expression-typed",
          "signature": "DownBoxBorder",
          "source": "src/Csound-Typed-Gui-Gui.html#BorderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "DownBoxBorder",
          "package": "csound-expression-typed",
          "partial": "Down Box Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:DownBoxBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "EmbossedBorder",
          "package": "csound-expression-typed",
          "signature": "EmbossedBorder",
          "source": "src/Csound-Typed-Gui-Gui.html#BorderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "EmbossedBorder",
          "package": "csound-expression-typed",
          "partial": "Embossed Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EmbossedBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "EmbossedBox",
          "package": "csound-expression-typed",
          "signature": "EmbossedBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "EmbossedBox",
          "package": "csound-expression-typed",
          "partial": "Embossed Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EmbossedBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "EmbossedLabel",
          "package": "csound-expression-typed",
          "signature": "EmbossedLabel",
          "source": "src/Csound-Typed-Gui-Gui.html#LabelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "EmbossedLabel",
          "package": "csound-expression-typed",
          "partial": "Embossed Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EmbossedLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "End",
          "package": "csound-expression-typed",
          "signature": "End",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "End",
          "package": "csound-expression-typed",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:End"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Engraved",
          "package": "csound-expression-typed",
          "signature": "Engraved",
          "source": "src/Csound-Typed-Gui-Gui.html#SliderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Engraved",
          "package": "csound-expression-typed",
          "partial": "Engraved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Engraved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "EngravedBorder",
          "package": "csound-expression-typed",
          "signature": "EngravedBorder",
          "source": "src/Csound-Typed-Gui-Gui.html#BorderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "EngravedBorder",
          "package": "csound-expression-typed",
          "partial": "Engraved Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EngravedBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "EngravedBox",
          "package": "csound-expression-typed",
          "signature": "EngravedBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "EngravedBox",
          "package": "csound-expression-typed",
          "partial": "Engraved Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EngravedBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "EngravedLabel",
          "package": "csound-expression-typed",
          "signature": "EngravedLabel",
          "source": "src/Csound-Typed-Gui-Gui.html#LabelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "EngravedLabel",
          "package": "csound-expression-typed",
          "partial": "Engraved Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:EngravedLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Enter",
          "package": "csound-expression-typed",
          "signature": "Enter",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Enter",
          "package": "csound-expression-typed",
          "partial": "Enter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Exponential",
          "package": "csound-expression-typed",
          "signature": "Exponential",
          "source": "src/Csound-Typed-Gui-Gui.html#ValScaleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Exponential",
          "package": "csound-expression-typed",
          "partial": "Exponential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Exponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F1",
          "package": "csound-expression-typed",
          "signature": "F1",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F1",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F10",
          "package": "csound-expression-typed",
          "signature": "F10",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F10",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F11",
          "package": "csound-expression-typed",
          "signature": "F11",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F11",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F12",
          "package": "csound-expression-typed",
          "signature": "F12",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F12",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F2",
          "package": "csound-expression-typed",
          "signature": "F2",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F2",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F3",
          "package": "csound-expression-typed",
          "signature": "F3",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F3",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F4",
          "package": "csound-expression-typed",
          "signature": "F4",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F4",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F5",
          "package": "csound-expression-typed",
          "signature": "F5",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F5",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F6",
          "package": "csound-expression-typed",
          "signature": "F6",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F6",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F7",
          "package": "csound-expression-typed",
          "signature": "F7",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F7",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F8",
          "package": "csound-expression-typed",
          "signature": "F8",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F8",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "F9",
          "package": "csound-expression-typed",
          "signature": "F9",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "F9",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:F9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Fill",
          "package": "csound-expression-typed",
          "signature": "Fill",
          "source": "src/Csound-Typed-Gui-Gui.html#SliderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Fill",
          "package": "csound-expression-typed",
          "partial": "Fill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Flat",
          "package": "csound-expression-typed",
          "signature": "Flat",
          "source": "src/Csound-Typed-Gui-Gui.html#KnobType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Flat",
          "package": "csound-expression-typed",
          "partial": "Flat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Flat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "FlatBox",
          "package": "csound-expression-typed",
          "signature": "FlatBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "FlatBox",
          "package": "csound-expression-typed",
          "partial": "Flat Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:FlatBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Gui",
          "package": "csound-expression-typed",
          "signature": "Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#Gui",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Gui",
          "package": "csound-expression-typed",
          "partial": "Gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Gui"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "GuiHandle",
          "package": "csound-expression-typed",
          "signature": "GuiHandle",
          "source": "src/Csound-Typed-Gui-Gui.html#GuiHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "GuiHandle",
          "package": "csound-expression-typed",
          "partial": "Gui Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:GuiHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "GuiNode",
          "package": "csound-expression-typed",
          "signature": "GuiNode",
          "source": "src/Csound-Typed-Gui-Gui.html#GuiNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "GuiNode",
          "package": "csound-expression-typed",
          "partial": "Gui Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:GuiNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "GuiVar",
          "package": "csound-expression-typed",
          "signature": "GuiVar GuiHandle",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "GuiVar",
          "package": "csound-expression-typed",
          "partial": "Gui Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:GuiVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Helvetica",
          "package": "csound-expression-typed",
          "signature": "Helvetica",
          "source": "src/Csound-Typed-Gui-Gui.html#FontType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Helvetica",
          "package": "csound-expression-typed",
          "partial": "Helvetica",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Helvetica"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Home",
          "package": "csound-expression-typed",
          "signature": "Home",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Home",
          "package": "csound-expression-typed",
          "partial": "Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Home"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Hor",
          "package": "csound-expression-typed",
          "signature": "Hor",
          "source": "src/Csound-Typed-Gui-Gui.html#Orient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Hor",
          "package": "csound-expression-typed",
          "partial": "Hor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Hor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "InitMe",
          "package": "csound-expression-typed",
          "signature": "InitMe",
          "source": "src/Csound-Typed-Gui-Gui.html#InitMe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "InitMe",
          "package": "csound-expression-typed",
          "partial": "Init Me",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:InitMe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Insert",
          "package": "csound-expression-typed",
          "signature": "Insert",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Insert",
          "package": "csound-expression-typed",
          "partial": "Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Italic",
          "package": "csound-expression-typed",
          "signature": "Italic",
          "source": "src/Csound-Typed-Gui-Gui.html#Emphasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Italic",
          "package": "csound-expression-typed",
          "partial": "Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Italic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Joy",
          "package": "csound-expression-typed",
          "signature": "Joy ValSpan ValSpan",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Joy",
          "package": "csound-expression-typed",
          "partial": "Joy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Joy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Knob",
          "package": "csound-expression-typed",
          "signature": "Knob ValSpan",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Knob",
          "package": "csound-expression-typed",
          "partial": "Knob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Knob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "LeftAlt",
          "package": "csound-expression-typed",
          "signature": "LeftAlt",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "LeftAlt",
          "package": "csound-expression-typed",
          "partial": "Left Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:LeftAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "LeftCtrl",
          "package": "csound-expression-typed",
          "signature": "LeftCtrl",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "LeftCtrl",
          "package": "csound-expression-typed",
          "partial": "Left Ctrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:LeftCtrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "LeftShift",
          "package": "csound-expression-typed",
          "signature": "LeftShift",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "LeftShift",
          "package": "csound-expression-typed",
          "partial": "Left Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:LeftShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "LeftWinKey",
          "package": "csound-expression-typed",
          "signature": "LeftWinKey",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "LeftWinKey",
          "package": "csound-expression-typed",
          "partial": "Left Win Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:LeftWinKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "LightButton",
          "package": "csound-expression-typed",
          "signature": "LightButton",
          "source": "src/Csound-Typed-Gui-Gui.html#ButtonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "LightButton",
          "package": "csound-expression-typed",
          "partial": "Light Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:LightButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Linear",
          "package": "csound-expression-typed",
          "signature": "Linear",
          "source": "src/Csound-Typed-Gui-Gui.html#ValScaleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Linear",
          "package": "csound-expression-typed",
          "partial": "Linear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Linear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Nice",
          "package": "csound-expression-typed",
          "signature": "Nice",
          "source": "src/Csound-Typed-Gui-Gui.html#SliderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Nice",
          "package": "csound-expression-typed",
          "partial": "Nice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Nice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NoBorder",
          "package": "csound-expression-typed",
          "signature": "NoBorder",
          "source": "src/Csound-Typed-Gui-Gui.html#BorderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NoBorder",
          "package": "csound-expression-typed",
          "partial": "No Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NoDrag",
          "package": "csound-expression-typed",
          "signature": "NoDrag",
          "source": "src/Csound-Typed-Gui-Gui.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NoDrag",
          "package": "csound-expression-typed",
          "partial": "No Drag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoDrag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NoEdit",
          "package": "csound-expression-typed",
          "signature": "NoEdit",
          "source": "src/Csound-Typed-Gui-Gui.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NoEdit",
          "package": "csound-expression-typed",
          "partial": "No Edit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoEdit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NoEmphasis",
          "package": "csound-expression-typed",
          "signature": "NoEmphasis",
          "source": "src/Csound-Typed-Gui-Gui.html#Emphasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NoEmphasis",
          "package": "csound-expression-typed",
          "partial": "No Emphasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoEmphasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NoLabel",
          "package": "csound-expression-typed",
          "signature": "NoLabel",
          "source": "src/Csound-Typed-Gui-Gui.html#LabelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NoLabel",
          "package": "csound-expression-typed",
          "partial": "No Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NoPlastic",
          "package": "csound-expression-typed",
          "signature": "NoPlastic",
          "source": "src/Csound-Typed-Gui-Gui.html#Material",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NoPlastic",
          "package": "csound-expression-typed",
          "partial": "No Plastic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NoPlastic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NormalButton",
          "package": "csound-expression-typed",
          "signature": "NormalButton",
          "source": "src/Csound-Typed-Gui-Gui.html#ButtonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NormalButton",
          "package": "csound-expression-typed",
          "partial": "Normal Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NormalButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NormalLabel",
          "package": "csound-expression-typed",
          "signature": "NormalLabel",
          "source": "src/Csound-Typed-Gui-Gui.html#LabelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NormalLabel",
          "package": "csound-expression-typed",
          "partial": "Normal Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NormalLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NormalText",
          "package": "csound-expression-typed",
          "signature": "NormalText",
          "source": "src/Csound-Typed-Gui-Gui.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NormalText",
          "package": "csound-expression-typed",
          "partial": "Normal Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NormalText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Num0",
          "package": "csound-expression-typed",
          "signature": "Num0",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Num0",
          "package": "csound-expression-typed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Num1",
          "package": "csound-expression-typed",
          "signature": "Num1",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Num1",
          "package": "csound-expression-typed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Num2",
          "package": "csound-expression-typed",
          "signature": "Num2",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Num2",
          "package": "csound-expression-typed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Num3",
          "package": "csound-expression-typed",
          "signature": "Num3",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Num3",
          "package": "csound-expression-typed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Num4",
          "package": "csound-expression-typed",
          "signature": "Num4",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Num4",
          "package": "csound-expression-typed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Num5",
          "package": "csound-expression-typed",
          "signature": "Num5",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Num5",
          "package": "csound-expression-typed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Num6",
          "package": "csound-expression-typed",
          "signature": "Num6",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Num6",
          "package": "csound-expression-typed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Num7",
          "package": "csound-expression-typed",
          "signature": "Num7",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Num7",
          "package": "csound-expression-typed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Num8",
          "package": "csound-expression-typed",
          "signature": "Num8",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Num8",
          "package": "csound-expression-typed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Num9",
          "package": "csound-expression-typed",
          "signature": "Num9",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Num9",
          "package": "csound-expression-typed",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Num9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumArrowDown",
          "package": "csound-expression-typed",
          "signature": "NumArrowDown",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumArrowDown",
          "package": "csound-expression-typed",
          "partial": "Num Arrow Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumArrowDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumArrowLeft",
          "package": "csound-expression-typed",
          "signature": "NumArrowLeft",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumArrowLeft",
          "package": "csound-expression-typed",
          "partial": "Num Arrow Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumArrowLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumArrowRight",
          "package": "csound-expression-typed",
          "signature": "NumArrowRight",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumArrowRight",
          "package": "csound-expression-typed",
          "partial": "Num Arrow Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumArrowRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumArrowUp",
          "package": "csound-expression-typed",
          "signature": "NumArrowUp",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumArrowUp",
          "package": "csound-expression-typed",
          "partial": "Num Arrow Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumArrowUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumDel",
          "package": "csound-expression-typed",
          "signature": "NumDel",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumDel",
          "package": "csound-expression-typed",
          "partial": "Num Del",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumDel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumDiv",
          "package": "csound-expression-typed",
          "signature": "NumDiv",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumDiv",
          "package": "csound-expression-typed",
          "partial": "Num Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumDot",
          "package": "csound-expression-typed",
          "signature": "NumDot",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumDot",
          "package": "csound-expression-typed",
          "partial": "Num Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumEnd",
          "package": "csound-expression-typed",
          "signature": "NumEnd",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumEnd",
          "package": "csound-expression-typed",
          "partial": "Num End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumEnter",
          "package": "csound-expression-typed",
          "signature": "NumEnter",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumEnter",
          "package": "csound-expression-typed",
          "partial": "Num Enter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumHome",
          "package": "csound-expression-typed",
          "signature": "NumHome",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumHome",
          "package": "csound-expression-typed",
          "partial": "Num Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumIns",
          "package": "csound-expression-typed",
          "signature": "NumIns",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumIns",
          "package": "csound-expression-typed",
          "partial": "Num Ins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumIns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumLock",
          "package": "csound-expression-typed",
          "signature": "NumLock",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumLock",
          "package": "csound-expression-typed",
          "partial": "Num Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumMul",
          "package": "csound-expression-typed",
          "signature": "NumMul",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumMul",
          "package": "csound-expression-typed",
          "partial": "Num Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumPgDown",
          "package": "csound-expression-typed",
          "signature": "NumPgDown",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumPgDown",
          "package": "csound-expression-typed",
          "partial": "Num Pg Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumPgDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumPgUp",
          "package": "csound-expression-typed",
          "signature": "NumPgUp",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumPgUp",
          "package": "csound-expression-typed",
          "partial": "Num Pg Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumPgUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumPlus",
          "package": "csound-expression-typed",
          "signature": "NumPlus",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumPlus",
          "package": "csound-expression-typed",
          "partial": "Num Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumSpace",
          "package": "csound-expression-typed",
          "signature": "NumSpace",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumSpace",
          "package": "csound-expression-typed",
          "partial": "Num Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "NumSub",
          "package": "csound-expression-typed",
          "signature": "NumSub",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "NumSub",
          "package": "csound-expression-typed",
          "partial": "Num Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:NumSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "OvalBox",
          "package": "csound-expression-typed",
          "signature": "OvalBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "OvalBox",
          "package": "csound-expression-typed",
          "partial": "Oval Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:OvalBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "OvalFlatBox",
          "package": "csound-expression-typed",
          "signature": "OvalFlatBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "OvalFlatBox",
          "package": "csound-expression-typed",
          "partial": "Oval Flat Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:OvalFlatBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "OvalShadowBox",
          "package": "csound-expression-typed",
          "signature": "OvalShadowBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "OvalShadowBox",
          "package": "csound-expression-typed",
          "partial": "Oval Shadow Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:OvalShadowBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "PgDown",
          "package": "csound-expression-typed",
          "signature": "PgDown",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "PgDown",
          "package": "csound-expression-typed",
          "partial": "Pg Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:PgDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "PgUp",
          "package": "csound-expression-typed",
          "signature": "PgUp",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "PgUp",
          "package": "csound-expression-typed",
          "partial": "Pg Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:PgUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Pie",
          "package": "csound-expression-typed",
          "signature": "Pie",
          "source": "src/Csound-Typed-Gui-Gui.html#KnobType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Pie",
          "package": "csound-expression-typed",
          "partial": "Pie",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Pie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Plastic",
          "package": "csound-expression-typed",
          "signature": "Plastic",
          "source": "src/Csound-Typed-Gui-Gui.html#Material",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Plastic",
          "package": "csound-expression-typed",
          "partial": "Plastic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Plastic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Press",
          "package": "csound-expression-typed",
          "signature": "Press Key",
          "source": "src/Csound-Typed-GlobalState-GE.html#KeyEvt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Press",
          "package": "csound-expression-typed",
          "partial": "Press",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Press"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Rect",
          "package": "csound-expression-typed",
          "signature": "Rect",
          "source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Rect",
          "package": "csound-expression-typed",
          "partial": "Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Rect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Release",
          "package": "csound-expression-typed",
          "signature": "Release Key",
          "source": "src/Csound-Typed-GlobalState-GE.html#KeyEvt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Release",
          "package": "csound-expression-typed",
          "partial": "Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "RightAlt",
          "package": "csound-expression-typed",
          "signature": "RightAlt",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "RightAlt",
          "package": "csound-expression-typed",
          "partial": "Right Alt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RightAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "RightCtrl",
          "package": "csound-expression-typed",
          "signature": "RightCtrl",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "RightCtrl",
          "package": "csound-expression-typed",
          "partial": "Right Ctrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RightCtrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "RightShift",
          "package": "csound-expression-typed",
          "signature": "RightShift",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "RightShift",
          "package": "csound-expression-typed",
          "partial": "Right Shift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RightShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "RightWinKey",
          "package": "csound-expression-typed",
          "signature": "RightWinKey",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "RightWinKey",
          "package": "csound-expression-typed",
          "partial": "Right Win Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RightWinKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Roller",
          "package": "csound-expression-typed",
          "signature": "Roller ValSpan ValStep",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Roller",
          "package": "csound-expression-typed",
          "partial": "Roller",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Roller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "RoundButton",
          "package": "csound-expression-typed",
          "signature": "RoundButton",
          "source": "src/Csound-Typed-Gui-Gui.html#ButtonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "RoundButton",
          "package": "csound-expression-typed",
          "partial": "Round Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RoundButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "RoundedDownBox",
          "package": "csound-expression-typed",
          "signature": "RoundedDownBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "RoundedDownBox",
          "package": "csound-expression-typed",
          "partial": "Rounded Down Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RoundedDownBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "RoundedFlatBox",
          "package": "csound-expression-typed",
          "signature": "RoundedFlatBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "RoundedFlatBox",
          "package": "csound-expression-typed",
          "partial": "Rounded Flat Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RoundedFlatBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "RoundedShadowBox",
          "package": "csound-expression-typed",
          "signature": "RoundedShadowBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "RoundedShadowBox",
          "package": "csound-expression-typed",
          "partial": "Rounded Shadow Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RoundedShadowBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "RoundedUpBox",
          "package": "csound-expression-typed",
          "signature": "RoundedUpBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "RoundedUpBox",
          "package": "csound-expression-typed",
          "partial": "Rounded Up Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:RoundedUpBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Roundedbox",
          "package": "csound-expression-typed",
          "signature": "Roundedbox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Roundedbox",
          "package": "csound-expression-typed",
          "partial": "Roundedbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Roundedbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Screen",
          "package": "csound-expression-typed",
          "signature": "Screen",
          "source": "src/Csound-Typed-Gui-Gui.html#FontType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Screen",
          "package": "csound-expression-typed",
          "partial": "Screen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Screen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Scroll",
          "package": "csound-expression-typed",
          "signature": "Scroll",
          "source": "src/Csound-Typed-GlobalState-GE.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Scroll",
          "package": "csound-expression-typed",
          "partial": "Scroll",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Scroll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetBoxType",
          "package": "csound-expression-typed",
          "signature": "SetBoxType BoxType",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetBoxType",
          "package": "csound-expression-typed",
          "partial": "Set Box Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetBoxType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetButtonType",
          "package": "csound-expression-typed",
          "signature": "SetButtonType ButtonType",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetButtonType",
          "package": "csound-expression-typed",
          "partial": "Set Button Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetButtonType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetColor1",
          "package": "csound-expression-typed",
          "signature": "SetColor1 Color",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetColor1",
          "package": "csound-expression-typed",
          "partial": "Set Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetColor1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetColor2",
          "package": "csound-expression-typed",
          "signature": "SetColor2 Color",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetColor2",
          "package": "csound-expression-typed",
          "partial": "Set Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetColor2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetEmphasis",
          "package": "csound-expression-typed",
          "signature": "SetEmphasis Emphasis",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetEmphasis",
          "package": "csound-expression-typed",
          "partial": "Set Emphasis",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetEmphasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetFontSize",
          "package": "csound-expression-typed",
          "signature": "SetFontSize Int",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetFontSize",
          "package": "csound-expression-typed",
          "partial": "Set Font Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetFontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetFontType",
          "package": "csound-expression-typed",
          "signature": "SetFontType FontType",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetFontType",
          "package": "csound-expression-typed",
          "partial": "Set Font Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetFontType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetKnobType",
          "package": "csound-expression-typed",
          "signature": "SetKnobType KnobType",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetKnobType",
          "package": "csound-expression-typed",
          "partial": "Set Knob Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetKnobType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetLabel",
          "package": "csound-expression-typed",
          "signature": "SetLabel String",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetLabel",
          "package": "csound-expression-typed",
          "partial": "Set Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetLabelType",
          "package": "csound-expression-typed",
          "signature": "SetLabelType LabelType",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetLabelType",
          "package": "csound-expression-typed",
          "partial": "Set Label Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetLabelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetMaterial",
          "package": "csound-expression-typed",
          "signature": "SetMaterial Material",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetMaterial",
          "package": "csound-expression-typed",
          "partial": "Set Material",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetMaterial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetOrient",
          "package": "csound-expression-typed",
          "signature": "SetOrient Orient",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetOrient",
          "package": "csound-expression-typed",
          "partial": "Set Orient",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetOrient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetSliderType",
          "package": "csound-expression-typed",
          "signature": "SetSliderType SliderType",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetSliderType",
          "package": "csound-expression-typed",
          "partial": "Set Slider Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetSliderType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetTextColor",
          "package": "csound-expression-typed",
          "signature": "SetTextColor Color",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetTextColor",
          "package": "csound-expression-typed",
          "partial": "Set Text Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetTextColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SetTextType",
          "package": "csound-expression-typed",
          "signature": "SetTextType TextType",
          "source": "src/Csound-Typed-Gui-Gui.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SetTextType",
          "package": "csound-expression-typed",
          "partial": "Set Text Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SetTextType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ShadowBox",
          "package": "csound-expression-typed",
          "signature": "ShadowBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ShadowBox",
          "package": "csound-expression-typed",
          "partial": "Shadow Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ShadowBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ShadowLabel",
          "package": "csound-expression-typed",
          "signature": "ShadowLabel",
          "source": "src/Csound-Typed-Gui-Gui.html#LabelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ShadowLabel",
          "package": "csound-expression-typed",
          "partial": "Shadow Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ShadowLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Single",
          "package": "csound-expression-typed",
          "signature": "Single",
          "source": "src/Csound-Typed-Gui-Gui.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Single",
          "package": "csound-expression-typed",
          "partial": "Single",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Slider",
          "package": "csound-expression-typed",
          "signature": "Slider ValSpan",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Slider",
          "package": "csound-expression-typed",
          "partial": "Slider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Slider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Symbol",
          "package": "csound-expression-typed",
          "signature": "Symbol",
          "source": "src/Csound-Typed-Gui-Gui.html#FontType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Symbol",
          "package": "csound-expression-typed",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "SymbolLabel",
          "package": "csound-expression-typed",
          "signature": "SymbolLabel",
          "source": "src/Csound-Typed-Gui-Gui.html#LabelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "SymbolLabel",
          "package": "csound-expression-typed",
          "partial": "Symbol Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:SymbolLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Tabs",
          "package": "csound-expression-typed",
          "signature": "Tabs",
          "source": "src/Csound-Typed-Gui-Gui.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Tabs",
          "package": "csound-expression-typed",
          "partial": "Tabs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Tabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Text",
          "package": "csound-expression-typed",
          "signature": "Text ValDiap ValStep",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Text",
          "package": "csound-expression-typed",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ThinDown",
          "package": "csound-expression-typed",
          "signature": "ThinDown",
          "source": "src/Csound-Typed-Gui-Gui.html#BorderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ThinDown",
          "package": "csound-expression-typed",
          "partial": "Thin Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ThinDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ThinDownBox",
          "package": "csound-expression-typed",
          "signature": "ThinDownBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ThinDownBox",
          "package": "csound-expression-typed",
          "partial": "Thin Down Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ThinDownBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ThinUp",
          "package": "csound-expression-typed",
          "signature": "ThinUp",
          "source": "src/Csound-Typed-Gui-Gui.html#BorderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ThinUp",
          "package": "csound-expression-typed",
          "partial": "Thin Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ThinUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ThinUpBox",
          "package": "csound-expression-typed",
          "signature": "ThinUpBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ThinUpBox",
          "package": "csound-expression-typed",
          "partial": "Thin Up Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ThinUpBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ThreeD",
          "package": "csound-expression-typed",
          "signature": "ThreeD (Maybe Int)",
          "source": "src/Csound-Typed-Gui-Gui.html#KnobType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ThreeD",
          "package": "csound-expression-typed",
          "partial": "Three",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ThreeD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Times",
          "package": "csound-expression-typed",
          "signature": "Times",
          "source": "src/Csound-Typed-Gui-Gui.html#FontType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Times",
          "package": "csound-expression-typed",
          "partial": "Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Toggle",
          "package": "csound-expression-typed",
          "signature": "Toggle",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Toggle",
          "package": "csound-expression-typed",
          "partial": "Toggle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Toggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "UpBox",
          "package": "csound-expression-typed",
          "signature": "UpBox",
          "source": "src/Csound-Typed-Gui-Gui.html#BoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "UpBox",
          "package": "csound-expression-typed",
          "partial": "Up Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:UpBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "UpBoxBorder",
          "package": "csound-expression-typed",
          "signature": "UpBoxBorder",
          "source": "src/Csound-Typed-Gui-Gui.html#BorderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "UpBoxBorder",
          "package": "csound-expression-typed",
          "partial": "Up Box Border",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:UpBoxBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ValDiap",
          "package": "csound-expression-typed",
          "signature": "ValDiap",
          "source": "src/Csound-Typed-Gui-Gui.html#ValDiap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ValDiap",
          "package": "csound-expression-typed",
          "partial": "Val Diap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ValDiap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "ValSpan",
          "package": "csound-expression-typed",
          "signature": "ValSpan",
          "source": "src/Csound-Typed-Gui-Gui.html#ValSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ValSpan",
          "package": "csound-expression-typed",
          "partial": "Val Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ValSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Value",
          "package": "csound-expression-typed",
          "signature": "Value",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Value",
          "package": "csound-expression-typed",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Ver",
          "package": "csound-expression-typed",
          "signature": "Ver",
          "source": "src/Csound-Typed-Gui-Gui.html#Orient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Ver",
          "package": "csound-expression-typed",
          "partial": "Ver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Ver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Vkeybd",
          "package": "csound-expression-typed",
          "signature": "Vkeybd",
          "source": "src/Csound-Typed-Gui-Gui.html#Elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Vkeybd",
          "package": "csound-expression-typed",
          "partial": "Vkeybd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Vkeybd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "Win",
          "package": "csound-expression-typed",
          "signature": "Win",
          "source": "src/Csound-Typed-Gui-Gui.html#Win",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "Win",
          "package": "csound-expression-typed",
          "partial": "Win",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:Win"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA FLTK widget that displays text inside of a box.\n If the text is longer than 255 characters the text\n is split on several parts (Csound limitations).\n\u003c/p\u003e\u003cpre\u003e box text\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLbox.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "box",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Display",
          "source": "src/Csound-Typed-Gui-Widget.html#box",
          "type": "function"
        },
        "index": {
          "description": "FLTK widget that displays text inside of box If the text is longer than characters the text is split on several parts Csound limitations box text doc http www.csounds.com manual html FLbox.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "box",
          "normalized": "String-\u003eDisplay",
          "package": "csound-expression-typed",
          "signature": "String-\u003eDisplay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBipolar unit span. A special case:\n\u003c/p\u003e\u003cpre\u003e uspan = linSpan (-1) 1\n\u003c/pre\u003e",
          "module": "Csound.Typed.Gui",
          "name": "bspan",
          "package": "csound-expression-typed",
          "signature": "ValSpan",
          "source": "src/Csound-Typed-Gui-Gui.html#bspan",
          "type": "function"
        },
        "index": {
          "description": "Bipolar unit span special case uspan linSpan",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "bspan",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:bspan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA FLTK widget opcode that creates a bank of buttons.\n Result is (x, y) coordinate of the triggered button.\n\u003c/p\u003e\u003cpre\u003e butBank xNumOfButtons yNumOfButtons\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLbutBank.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "butBank",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Source (Evt (D, D))",
          "source": "src/Csound-Typed-Gui-Widget.html#butBank",
          "type": "function"
        },
        "index": {
          "description": "FLTK widget opcode that creates bank of buttons Result is coordinate of the triggered button butBank xNumOfButtons yNumOfButtons doc http www.csounds.com manual html FLbutBank.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "butBank",
          "normalized": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Evt(D,D))",
          "package": "csound-expression-typed",
          "partial": "Bank",
          "signature": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Evt(D,D))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:butBank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA FLTK widget opcode that creates a bank of buttons.\n\u003c/p\u003e\u003cpre\u003e butBank xNumOfButtons yNumOfButtons\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLbutBank.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "butBank1",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Source (Evt D)",
          "source": "src/Csound-Typed-Gui-Widget.html#butBank1",
          "type": "function"
        },
        "index": {
          "description": "FLTK widget opcode that creates bank of buttons butBank xNumOfButtons yNumOfButtons doc http www.csounds.com manual html FLbutBank.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "butBank1",
          "normalized": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Evt D)",
          "package": "csound-expression-typed",
          "partial": "Bank",
          "signature": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Evt D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:butBank1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variance on the function \u003ccode\u003e\u003ca\u003ebutBank\u003c/a\u003e\u003c/code\u003e, but it produces \n a signal of piecewise constant function. \n Result is (x, y) coordinate of the triggered button.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "butBankSig",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Source (Sig, Sig)",
          "source": "src/Csound-Typed-Gui-Widget.html#butBankSig",
          "type": "function"
        },
        "index": {
          "description": "variance on the function butBank but it produces signal of piecewise constant function Result is coordinate of the triggered button",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "butBankSig",
          "normalized": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Sig,Sig)",
          "package": "csound-expression-typed",
          "partial": "Bank Sig",
          "signature": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource(Sig,Sig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:butBankSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "butBankSig1",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Int -\u003e Int -\u003e (Int, Int) -\u003e Source Sig",
          "source": "src/Csound-Typed-Gui-Widget.html#butBankSig1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "butBankSig1",
          "normalized": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource Sig",
          "package": "csound-expression-typed",
          "partial": "Bank Sig",
          "signature": "String-\u003eInt-\u003eInt-\u003e(Int,Int)-\u003eSource Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:butBankSig1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA FLTK widget opcode that creates a button. \n\u003c/p\u003e\u003cpre\u003e button text\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLbutton.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "button",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Source (Evt Unit)",
          "source": "src/Csound-Typed-Gui-Widget.html#button",
          "type": "function"
        },
        "index": {
          "description": "FLTK widget opcode that creates button button text doc http www.csounds.com manual html FLbutton.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "button",
          "normalized": "String-\u003eSource(Evt Unit)",
          "package": "csound-expression-typed",
          "signature": "String-\u003eSource(Evt Unit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows the user to increase/decrease a value with mouse \n clicks on a corresponding arrow button. Output is an event stream that contains \n values when counter changes.\n\u003c/p\u003e\u003cpre\u003e count diapason fineValStep maybeCoarseValStep initValue \n\u003c/pre\u003e\u003cp\u003edoc: http:\u003cem/\u003ewww.csounds.com\u003cem\u003emanual\u003c/em\u003ehtml/FLcount.html\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "count",
          "package": "csound-expression-typed",
          "signature": "ValDiap -\u003e ValStep -\u003e Maybe ValStep -\u003e Double -\u003e Source (Evt D)",
          "source": "src/Csound-Typed-Gui-Widget.html#count",
          "type": "function"
        },
        "index": {
          "description": "Allows the user to increase decrease value with mouse clicks on corresponding arrow button Output is an event stream that contains values when counter changes count diapason fineValStep maybeCoarseValStep initValue doc http www.csounds.com manual html FLcount.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "count",
          "normalized": "ValDiap-\u003eValStep-\u003eMaybe ValStep-\u003eDouble-\u003eSource(Evt D)",
          "package": "csound-expression-typed",
          "signature": "ValDiap-\u003eValStep-\u003eMaybe ValStep-\u003eDouble-\u003eSource(Evt D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variance on the function \u003ccode\u003e\u003ca\u003ecount\u003c/a\u003e\u003c/code\u003e, but it produces \n a signal of piecewise constant function. \n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "countSig",
          "package": "csound-expression-typed",
          "signature": "ValDiap -\u003e ValStep -\u003e Maybe ValStep -\u003e Double -\u003e Source Sig",
          "source": "src/Csound-Typed-Gui-Widget.html#countSig",
          "type": "function"
        },
        "index": {
          "description": "variance on the function count but it produces signal of piecewise constant function",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "countSig",
          "normalized": "ValDiap-\u003eValStep-\u003eMaybe ValStep-\u003eDouble-\u003eSource Sig",
          "package": "csound-expression-typed",
          "partial": "Sig",
          "signature": "ValDiap-\u003eValStep-\u003eMaybe ValStep-\u003eDouble-\u003eSource Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:countSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA display constructor.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "display",
          "package": "csound-expression-typed",
          "signature": "SE Gui -\u003e Display",
          "source": "src/Csound-Typed-Gui-Widget.html#display",
          "type": "function"
        },
        "index": {
          "description": "display constructor",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "display",
          "normalized": "SE Gui-\u003eDisplay",
          "package": "csound-expression-typed",
          "signature": "SE Gui-\u003eDisplay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes an exponential \u003ccode\u003eValSpan\u003c/code\u003e with specified boundaries.\n\u003c/p\u003e\u003cpre\u003e expSpan minVal maxVal\n\u003c/pre\u003e",
          "module": "Csound.Typed.Gui",
          "name": "expSpan",
          "package": "csound-expression-typed",
          "signature": "Double -\u003e Double -\u003e ValSpan",
          "source": "src/Csound-Typed-Gui-Gui.html#expSpan",
          "type": "function"
        },
        "index": {
          "description": "Makes an exponential ValSpan with specified boundaries expSpan minVal maxVal",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "expSpan",
          "normalized": "Double-\u003eDouble-\u003eValSpan",
          "package": "csound-expression-typed",
          "partial": "Span",
          "signature": "Double-\u003eDouble-\u003eValSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:expSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the properties for a GUI element on all levels.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "forceProps",
          "package": "csound-expression-typed",
          "signature": "[Prop] -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#forceProps",
          "type": "function"
        },
        "index": {
          "description": "Sets the properties for GUI element on all levels",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "forceProps",
          "normalized": "[Prop]-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Props",
          "signature": "[Prop]-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:forceProps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "fromElem",
          "package": "csound-expression-typed",
          "signature": "ElemOuts -\u003e [InitMe] -\u003e Elem -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#fromElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "fromElem",
          "normalized": "ElemOuts-\u003e[InitMe]-\u003eElem-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Elem",
          "signature": "ElemOuts-\u003e[InitMe]-\u003eElem-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:fromElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "fromGuiHandle",
          "package": "csound-expression-typed",
          "signature": "GuiHandle -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#fromGuiHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "fromGuiHandle",
          "normalized": "GuiHandle-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Gui Handle",
          "signature": "GuiHandle-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:fromGuiHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "guiMap",
          "package": "csound-expression-typed",
          "signature": "[GuiNode] -\u003e GuiMap",
          "source": "src/Csound-Typed-Gui-Gui.html#guiMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "guiMap",
          "normalized": "[GuiNode]-\u003eGuiMap",
          "package": "csound-expression-typed",
          "partial": "Map",
          "signature": "[GuiNode]-\u003eGuiMap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:guiMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "guiNodeElem",
          "package": "csound-expression-typed",
          "signature": "Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#GuiNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "guiNodeElem",
          "package": "csound-expression-typed",
          "partial": "Node Elem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:guiNodeElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "guiNodeHandle",
          "package": "csound-expression-typed",
          "signature": "GuiHandle",
          "source": "src/Csound-Typed-Gui-Gui.html#GuiNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "guiNodeHandle",
          "package": "csound-expression-typed",
          "partial": "Node Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:guiNodeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "guiStmt",
          "package": "csound-expression-typed",
          "signature": "[Panel] -\u003e DepT m ()",
          "source": "src/Csound-Typed-Gui-Gui.html#guiStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "guiStmt",
          "normalized": "[Panel]-\u003eDepT a()",
          "package": "csound-expression-typed",
          "partial": "Stmt",
          "signature": "[Panel]-\u003eDepT m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:guiStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "height",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "height",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal groupping of the elements. All elements are \n placed in the stright horizontal line and aligned by Y-coordinate\n and height.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "hor",
          "package": "csound-expression-typed",
          "signature": "[Gui] -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#hor",
          "type": "function"
        },
        "index": {
          "description": "Horizontal groupping of the elements All elements are placed in the stright horizontal line and aligned by Y-coordinate and height",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "hor",
          "normalized": "[Gui]-\u003eGui",
          "package": "csound-expression-typed",
          "signature": "[Gui]-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:hor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeighted horizontal grouping. \n It takes a list of scaling factors and elements.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "horSca",
          "package": "csound-expression-typed",
          "signature": "[(Double, Gui)] -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#horSca",
          "type": "function"
        },
        "index": {
          "description": "Weighted horizontal grouping It takes list of scaling factors and elements",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "horSca",
          "normalized": "[(Double,Gui)]-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Sca",
          "signature": "[(Double,Gui)]-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:horSca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "initHandle",
          "package": "csound-expression-typed",
          "signature": "Var",
          "source": "src/Csound-Typed-Gui-Gui.html#InitMe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "initHandle",
          "package": "csound-expression-typed",
          "partial": "Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:initHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "initValue",
          "package": "csound-expression-typed",
          "signature": "Double",
          "source": "src/Csound-Typed-Gui-Gui.html#InitMe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "initValue",
          "package": "csound-expression-typed",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:initValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt is a squared area that allows the user to modify two output values \n at the same time. It acts like a joystick. \n\u003c/p\u003e\u003cpre\u003e joy valueSpanX valueSpanY (initX, initY) \n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLjoy.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "joy",
          "package": "csound-expression-typed",
          "signature": "ValSpan -\u003e ValSpan -\u003e (Double, Double) -\u003e Source (Sig, Sig)",
          "source": "src/Csound-Typed-Gui-Widget.html#joy",
          "type": "function"
        },
        "index": {
          "description": "It is squared area that allows the user to modify two output values at the same time It acts like joystick joy valueSpanX valueSpanY initX initY doc http www.csounds.com manual html FLjoy.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "joy",
          "normalized": "ValSpan-\u003eValSpan-\u003e(Double,Double)-\u003eSource(Sig,Sig)",
          "package": "csound-expression-typed",
          "signature": "ValSpan-\u003eValSpan-\u003e(Double,Double)-\u003eSource(Sig,Sig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:joy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe stream of keyboard press/release events.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "keyIn",
          "package": "csound-expression-typed",
          "signature": "KeyEvt -\u003e Evt Unit",
          "source": "src/Csound-Typed-Gui-Widget.html#keyIn",
          "type": "function"
        },
        "index": {
          "description": "The stream of keyboard press release events",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "keyIn",
          "normalized": "KeyEvt-\u003eEvt Unit",
          "package": "csound-expression-typed",
          "partial": "In",
          "signature": "KeyEvt-\u003eEvt Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the GUI elements on the window. Rectangle is calculated\n automatically (window listens for keyboard events).\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "keyPanel",
          "package": "csound-expression-typed",
          "signature": "Gui -\u003e SE ()",
          "source": "src/Csound-Typed-Gui-Widget.html#keyPanel",
          "type": "function"
        },
        "index": {
          "description": "Renders the GUI elements on the window Rectangle is calculated automatically window listens for keyboard events",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "keyPanel",
          "normalized": "Gui-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "Panel",
          "signature": "Gui-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyPanel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the GUI elements on the window. We can specify the window title\n and rectangle of the window. Panesls are sensitive to keyboard events.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "keyPanelBy",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Maybe Rect -\u003e Gui -\u003e SE ()",
          "source": "src/Csound-Typed-Gui-Widget.html#keyPanelBy",
          "type": "function"
        },
        "index": {
          "description": "Renders the GUI elements on the window We can specify the window title and rectangle of the window Panesls are sensitive to keyboard events",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "keyPanelBy",
          "normalized": "String-\u003eMaybe Rect-\u003eGui-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "Panel By",
          "signature": "String-\u003eMaybe Rect-\u003eGui-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyPanelBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a list of panels. Panels are sensitive to keyboard events.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "keyPanels",
          "package": "csound-expression-typed",
          "signature": "[Gui] -\u003e SE ()",
          "source": "src/Csound-Typed-Gui-Widget.html#keyPanels",
          "type": "function"
        },
        "index": {
          "description": "Renders list of panels Panels are sensitive to keyboard events",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "keyPanels",
          "normalized": "[Gui]-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "Panels",
          "signature": "[Gui]-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyPanels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the GUI elements with tabs. Rectangles are calculated\n automatically.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "keyTabs",
          "package": "csound-expression-typed",
          "signature": "[(String, Gui)] -\u003e SE ()",
          "source": "src/Csound-Typed-Gui-Widget.html#keyTabs",
          "type": "function"
        },
        "index": {
          "description": "Renders the GUI elements with tabs Rectangles are calculated automatically",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "keyTabs",
          "normalized": "[(String,Gui)]-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "Tabs",
          "signature": "[(String,Gui)]-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyTabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the GUI elements with tabs. We can specify the window title and\n rectangles for all tabs and for the main window. Tabs are sensitive to keyboard events.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "keyTabsBy",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Maybe Rect -\u003e [(String, Maybe Rect, Gui)] -\u003e SE ()",
          "source": "src/Csound-Typed-Gui-Widget.html#keyTabsBy",
          "type": "function"
        },
        "index": {
          "description": "Renders the GUI elements with tabs We can specify the window title and rectangles for all tabs and for the main window Tabs are sensitive to keyboard events",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "keyTabsBy",
          "normalized": "String-\u003eMaybe Rect-\u003e[(String,Maybe Rect,Gui)]-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "Tabs By",
          "signature": "String-\u003eMaybe Rect-\u003e[(String,Maybe Rect,Gui)]-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:keyTabsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA FLTK widget opcode that creates a knob.\n\u003c/p\u003e\u003cpre\u003e knob valueSpan initValue\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLknob.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "knob",
          "package": "csound-expression-typed",
          "signature": "String -\u003e ValSpan -\u003e Double -\u003e Source Sig",
          "source": "src/Csound-Typed-Gui-Widget.html#knob",
          "type": "function"
        },
        "index": {
          "description": "FLTK widget opcode that creates knob knob valueSpan initValue doc http www.csounds.com manual html FLknob.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "knob",
          "normalized": "String-\u003eValSpan-\u003eDouble-\u003eSource Sig",
          "package": "csound-expression-typed",
          "signature": "String-\u003eValSpan-\u003eDouble-\u003eSource Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:knob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a linear \u003ccode\u003eValSpan\u003c/code\u003e with specified boundaries.\n\u003c/p\u003e\u003cpre\u003e linSpan minVal maxVal\n\u003c/pre\u003e",
          "module": "Csound.Typed.Gui",
          "name": "linSpan",
          "package": "csound-expression-typed",
          "signature": "Double -\u003e Double -\u003e ValSpan",
          "source": "src/Csound-Typed-Gui-Gui.html#linSpan",
          "type": "function"
        },
        "index": {
          "description": "Makes linear ValSpan with specified boundaries linSpan minVal maxVal",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "linSpan",
          "normalized": "Double-\u003eDouble-\u003eValSpan",
          "package": "csound-expression-typed",
          "partial": "Span",
          "signature": "Double-\u003eDouble-\u003eValSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:linSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "mapGuiOnPanel",
          "package": "csound-expression-typed",
          "signature": "(Gui -\u003e Gui) -\u003e Panel -\u003e Panel",
          "source": "src/Csound-Typed-Gui-Gui.html#mapGuiOnPanel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "mapGuiOnPanel",
          "normalized": "(Gui-\u003eGui)-\u003ePanel-\u003ePanel",
          "package": "csound-expression-typed",
          "partial": "Gui On Panel",
          "signature": "(Gui-\u003eGui)-\u003ePanel-\u003ePanel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:mapGuiOnPanel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the margin of the element. How much empty space\n to reserve between the elements within the group. It affects\n only compound elements.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "margin",
          "package": "csound-expression-typed",
          "signature": "Int -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#margin",
          "type": "function"
        },
        "index": {
          "description": "Sets the margin of the element How much empty space to reserve between the elements within the group It affects only compound elements",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "margin",
          "normalized": "Int-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "signature": "Int-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:margin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA slider that serves as indicator. It consumes values instead of producing.\n\u003c/p\u003e\u003cpre\u003e meter valueSpan initValue\n\u003c/pre\u003e",
          "module": "Csound.Typed.Gui",
          "name": "meter",
          "package": "csound-expression-typed",
          "signature": "String -\u003e ValSpan -\u003e Double -\u003e Sink Sig",
          "source": "src/Csound-Typed-Gui-Widget.html#meter",
          "type": "function"
        },
        "index": {
          "description": "slider that serves as indicator It consumes values instead of producing meter valueSpan initValue",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "meter",
          "normalized": "String-\u003eValSpan-\u003eDouble-\u003eSink Sig",
          "package": "csound-expression-typed",
          "signature": "String-\u003eValSpan-\u003eDouble-\u003eSink Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:meter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value for stateless widgets.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "noInner",
          "package": "csound-expression-typed",
          "signature": "Inner",
          "source": "src/Csound-Typed-Gui-Widget.html#noInner",
          "type": "function"
        },
        "index": {
          "description": "value for stateless widgets",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "noInner",
          "package": "csound-expression-typed",
          "partial": "Inner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:noInner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value for widgets that produce nothing.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "noInput",
          "package": "csound-expression-typed",
          "signature": "Input ()",
          "source": "src/Csound-Typed-Gui-Widget.html#noInput",
          "type": "function"
        },
        "index": {
          "description": "value for widgets that produce nothing",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "noInput",
          "normalized": "Input()",
          "package": "csound-expression-typed",
          "partial": "Input",
          "signature": "Input()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:noInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value for widgets that consume nothing.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "noOutput",
          "package": "csound-expression-typed",
          "signature": "Output ()",
          "source": "src/Csound-Typed-Gui-Widget.html#noOutput",
          "type": "function"
        },
        "index": {
          "description": "value for widgets that consume nothing",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "noOutput",
          "normalized": "Output()",
          "package": "csound-expression-typed",
          "partial": "Output",
          "signature": "Output()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:noOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumeric (originally FLtext in the Csound) allows the user to modify \n a parameter value by directly typing it into a text field.\n\u003c/p\u003e\u003cpre\u003e numeric diapason step initValue \n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLtext.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "numeric",
          "package": "csound-expression-typed",
          "signature": "String -\u003e ValDiap -\u003e ValStep -\u003e Double -\u003e Source Sig",
          "source": "src/Csound-Typed-Gui-Widget.html#numeric",
          "type": "function"
        },
        "index": {
          "description": "numeric originally FLtext in the Csound allows the user to modify parameter value by directly typing it into text field numeric diapason step initValue doc http www.csounds.com manual html FLtext.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "numeric",
          "normalized": "String-\u003eValDiap-\u003eValStep-\u003eDouble-\u003eSource Sig",
          "package": "csound-expression-typed",
          "signature": "String-\u003eValDiap-\u003eValStep-\u003eDouble-\u003eSource Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:numeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the padding of the element. How much empty space\n to reserve outside the element.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "padding",
          "package": "csound-expression-typed",
          "signature": "Int -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#padding",
          "type": "function"
        },
        "index": {
          "description": "Sets the padding of the element How much empty space to reserve outside the element",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "padding",
          "normalized": "Int-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "signature": "Int-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:padding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the GUI elements on the window. Rectangle is calculated\n automatically (window doesn't listens for keyboard events).\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "panel",
          "package": "csound-expression-typed",
          "signature": "Gui -\u003e SE ()",
          "source": "src/Csound-Typed-Gui-Widget.html#panel",
          "type": "function"
        },
        "index": {
          "description": "Renders the GUI elements on the window Rectangle is calculated automatically window doesn listens for keyboard events",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "panel",
          "normalized": "Gui-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "Gui-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:panel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the GUI elements on the window. We can specify the window title\n and rectangle of the window.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "panelBy",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Maybe Rect -\u003e Gui -\u003e SE ()",
          "source": "src/Csound-Typed-Gui-Widget.html#panelBy",
          "type": "function"
        },
        "index": {
          "description": "Renders the GUI elements on the window We can specify the window title and rectangle of the window",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "panelBy",
          "normalized": "String-\u003eMaybe Rect-\u003eGui-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "By",
          "signature": "String-\u003eMaybe Rect-\u003eGui-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:panelBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a list of panels.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "panels",
          "package": "csound-expression-typed",
          "signature": "[Gui] -\u003e SE ()",
          "source": "src/Csound-Typed-Gui-Widget.html#panels",
          "type": "function"
        },
        "index": {
          "description": "Renders list of panels",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "panels",
          "normalized": "[Gui]-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "[Gui]-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:panels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the properties for a GUI element.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "props",
          "package": "csound-expression-typed",
          "signature": "[Prop] -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#props",
          "type": "function"
        },
        "index": {
          "description": "Sets the properties for GUI element",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "props",
          "normalized": "[Prop]-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "signature": "[Prop]-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:props"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "px",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "px",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:px"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "py",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "py",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:py"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "restoreTree",
          "package": "csound-expression-typed",
          "signature": "GuiMap -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#restoreTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "restoreTree",
          "normalized": "GuiMap-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Tree",
          "signature": "GuiMap-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:restoreTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFLroller is a sort of knob, but put transversally. \n\u003c/p\u003e\u003cpre\u003e roller valueSpan step initVal\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLroller.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "roller",
          "package": "csound-expression-typed",
          "signature": "String -\u003e ValSpan -\u003e ValStep -\u003e Double -\u003e Source Sig",
          "source": "src/Csound-Typed-Gui-Widget.html#roller",
          "type": "function"
        },
        "index": {
          "description": "FLroller is sort of knob but put transversally roller valueSpan step initVal doc http www.csounds.com manual html FLroller.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "roller",
          "normalized": "String-\u003eValSpan-\u003eValStep-\u003eDouble-\u003eSource Sig",
          "package": "csound-expression-typed",
          "signature": "String-\u003eValSpan-\u003eValStep-\u003eDouble-\u003eSource Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:roller"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScales an element within the group. It depends on the type\n of the alignment (horizontal or vertical) which side of the bounding\n box is scaled. If it's a horizontal group then the width is scaled\n and height is scaled otherwise.\n\u003c/p\u003e\u003cp\u003eEvery element in the group has a scaling factor. By \n default it equals to one. During rendering all scaling factors are summed\n and divided on the sum of all factors. So that factors become weights \n or proportions. This process is called normalization. \n Scaling one element affects not only this element but \n all other elements in the group! \n\u003c/p\u003e\u003cp\u003eAn example:\n\u003c/p\u003e\u003cp\u003eOne element is twice as large as the other two:\n\u003c/p\u003e\u003cpre\u003e hor [a, b, sca 2 c]\n\u003c/pre\u003e\u003cp\u003eWhy is it so? Let's look at the hidden scaling factors:\n\u003c/p\u003e\u003cpre\u003e hor [sca 1 a, sca 1 b, sca 2 c]\n\u003c/pre\u003e\u003cp\u003eDuring rendering we scale all the scaling fators so that\n total sum equals to one:\n\u003c/p\u003e\u003cpre\u003e hor [sca 0.25 a, sca 0.25 b, sca 0.5 c]\n\u003c/pre\u003e",
          "module": "Csound.Typed.Gui",
          "name": "sca",
          "package": "csound-expression-typed",
          "signature": "Double -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#sca",
          "type": "function"
        },
        "index": {
          "description": "Scales an element within the group It depends on the type of the alignment horizontal or vertical which side of the bounding box is scaled If it horizontal group then the width is scaled and height is scaled otherwise Every element in the group has scaling factor By default it equals to one During rendering all scaling factors are summed and divided on the sum of all factors So that factors become weights or proportions This process is called normalization Scaling one element affects not only this element but all other elements in the group An example One element is twice as large as the other two hor sca Why is it so Let look at the hidden scaling factors hor sca sca sca During rendering we scale all the scaling fators so that total sum equals to one hor sca sca sca",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "sca",
          "normalized": "Double-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "signature": "Double-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:sca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setBorder",
          "package": "csound-expression-typed",
          "signature": "BorderType -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setBorder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setBorder",
          "normalized": "BorderType-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Border",
          "signature": "BorderType-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setBorder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setBoxType",
          "package": "csound-expression-typed",
          "signature": "BoxType -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setBoxType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setBoxType",
          "normalized": "BoxType-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Box Type",
          "signature": "BoxType-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setBoxType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setButtonType",
          "package": "csound-expression-typed",
          "signature": "ButtonType -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setButtonType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setButtonType",
          "normalized": "ButtonType-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Button Type",
          "signature": "ButtonType-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setButtonType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setColor1",
          "package": "csound-expression-typed",
          "signature": "Color -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setColor1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setColor1",
          "normalized": "Color-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Color",
          "signature": "Color-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setColor1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setColor2",
          "package": "csound-expression-typed",
          "signature": "Color -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setColor2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setColor2",
          "normalized": "Color-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Color",
          "signature": "Color-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setColor2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setColors",
          "package": "csound-expression-typed",
          "signature": "Color -\u003e Color -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setColors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setColors",
          "normalized": "Color-\u003eColor-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Colors",
          "signature": "Color-\u003eColor-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setEmphasis",
          "package": "csound-expression-typed",
          "signature": "Emphasis -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setEmphasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setEmphasis",
          "normalized": "Emphasis-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Emphasis",
          "signature": "Emphasis-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setEmphasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setFontSize",
          "package": "csound-expression-typed",
          "signature": "Int -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setFontSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setFontSize",
          "normalized": "Int-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Font Size",
          "signature": "Int-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setFontSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setFontType",
          "package": "csound-expression-typed",
          "signature": "FontType -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setFontType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setFontType",
          "normalized": "FontType-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Font Type",
          "signature": "FontType-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setFontType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setKnobType",
          "package": "csound-expression-typed",
          "signature": "KnobType -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setKnobType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setKnobType",
          "normalized": "KnobType-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Knob Type",
          "signature": "KnobType-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setKnobType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setLabel",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setLabel",
          "normalized": "String-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Label",
          "signature": "String-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setLabelType",
          "package": "csound-expression-typed",
          "signature": "LabelType -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setLabelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setLabelType",
          "normalized": "LabelType-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Label Type",
          "signature": "LabelType-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setLabelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setMaterial",
          "package": "csound-expression-typed",
          "signature": "Material -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setMaterial",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setMaterial",
          "normalized": "Material-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Material",
          "signature": "Material-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setMaterial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setOrient",
          "package": "csound-expression-typed",
          "signature": "Orient -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setOrient",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setOrient",
          "normalized": "Orient-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Orient",
          "signature": "Orient-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setOrient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setSliderType",
          "package": "csound-expression-typed",
          "signature": "SliderType -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setSliderType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setSliderType",
          "normalized": "SliderType-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Slider Type",
          "signature": "SliderType-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setSliderType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setTextColor",
          "package": "csound-expression-typed",
          "signature": "Color -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setTextColor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setTextColor",
          "normalized": "Color-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Text Color",
          "signature": "Color-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setTextColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "setTextType",
          "package": "csound-expression-typed",
          "signature": "TextType -\u003e Gui -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#setTextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setTextType",
          "normalized": "TextType-\u003eGui-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Text Type",
          "signature": "TextType-\u003eGui-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setTextType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends a title to a group of widgets.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "setTitle",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Gui -\u003e SE Gui",
          "source": "src/Csound-Typed-Gui-Widget.html#setTitle",
          "type": "function"
        },
        "index": {
          "description": "Appends title to group of widgets",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "setTitle",
          "normalized": "String-\u003eGui-\u003eSE Gui",
          "package": "csound-expression-typed",
          "partial": "Title",
          "signature": "String-\u003eGui-\u003eSE Gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:setTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "singleContent",
          "package": "csound-expression-typed",
          "signature": "Win",
          "source": "src/Csound-Typed-Gui-Gui.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "singleContent",
          "package": "csound-expression-typed",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:singleContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "singleIsKeybdSensitive",
          "package": "csound-expression-typed",
          "signature": "Bool",
          "source": "src/Csound-Typed-Gui-Gui.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "singleIsKeybdSensitive",
          "package": "csound-expression-typed",
          "partial": "Is Keybd Sensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:singleIsKeybdSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA consumer constructor.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "sink",
          "package": "csound-expression-typed",
          "signature": "SE (Gui, Output a) -\u003e Sink a",
          "source": "src/Csound-Typed-Gui-Widget.html#sink",
          "type": "function"
        },
        "index": {
          "description": "consumer constructor",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "sink",
          "normalized": "SE(Gui,Output a)-\u003eSink a",
          "package": "csound-expression-typed",
          "signature": "SE(Gui,Output a)-\u003eSink a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFLslider puts a slider into the corresponding container.\n\u003c/p\u003e\u003cpre\u003e slider valueSpan initVal \n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLslider.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "slider",
          "package": "csound-expression-typed",
          "signature": "String -\u003e ValSpan -\u003e Double -\u003e Source Sig",
          "source": "src/Csound-Typed-Gui-Widget.html#slider",
          "type": "function"
        },
        "index": {
          "description": "FLslider puts slider into the corresponding container slider valueSpan initVal doc http www.csounds.com manual html FLslider.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "slider",
          "normalized": "String-\u003eValSpan-\u003eDouble-\u003eSource Sig",
          "package": "csound-expression-typed",
          "signature": "String-\u003eValSpan-\u003eDouble-\u003eSource Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:slider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a list of linear unit sliders (ranges in [0, 1]). It takes a list\n of init values.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "sliderBank",
          "package": "csound-expression-typed",
          "signature": "String -\u003e [Double] -\u003e Source [Sig]",
          "source": "src/Csound-Typed-Gui-Widget.html#sliderBank",
          "type": "function"
        },
        "index": {
          "description": "Constructs list of linear unit sliders ranges in It takes list of init values",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "sliderBank",
          "normalized": "String-\u003e[Double]-\u003eSource[Sig]",
          "package": "csound-expression-typed",
          "partial": "Bank",
          "signature": "String-\u003e[Double]-\u003eSource[Sig]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:sliderBank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA producer constructor.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "source",
          "package": "csound-expression-typed",
          "signature": "SE (Gui, Input a) -\u003e Source a",
          "source": "src/Csound-Typed-Gui-Widget.html#source",
          "type": "function"
        },
        "index": {
          "description": "producer constructor",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "source",
          "normalized": "SE(Gui,Input a)-\u003eSource a",
          "package": "csound-expression-typed",
          "signature": "SE(Gui,Input a)-\u003eSource a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty space.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "space",
          "package": "csound-expression-typed",
          "signature": "Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#space",
          "type": "function"
        },
        "index": {
          "description": "An empty space",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "space",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the GUI elements with tabs. Rectangles are calculated\n automatically.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "tabs",
          "package": "csound-expression-typed",
          "signature": "[(String, Gui)] -\u003e SE ()",
          "source": "src/Csound-Typed-Gui-Widget.html#tabs",
          "type": "function"
        },
        "index": {
          "description": "Renders the GUI elements with tabs Rectangles are calculated automatically",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "tabs",
          "normalized": "[(String,Gui)]-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "[(String,Gui)]-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders the GUI elements with tabs. We can specify the window title and\n rectangles for all tabs and for the main window.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "tabsBy",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Maybe Rect -\u003e [(String, Maybe Rect, Gui)] -\u003e SE ()",
          "source": "src/Csound-Typed-Gui-Widget.html#tabsBy",
          "type": "function"
        },
        "index": {
          "description": "Renders the GUI elements with tabs We can specify the window title and rectangles for all tabs and for the main window",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "tabsBy",
          "normalized": "String-\u003eMaybe Rect-\u003e[(String,Maybe Rect,Gui)]-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "By",
          "signature": "String-\u003eMaybe Rect-\u003e[(String,Maybe Rect,Gui)]-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "tabsContent",
          "package": "csound-expression-typed",
          "signature": "[Win]",
          "source": "src/Csound-Typed-Gui-Gui.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "tabsContent",
          "normalized": "[Win]",
          "package": "csound-expression-typed",
          "partial": "Content",
          "signature": "[Win]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabsContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "tabsIsKeybdSensitive",
          "package": "csound-expression-typed",
          "signature": "Bool",
          "source": "src/Csound-Typed-Gui-Gui.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "tabsIsKeybdSensitive",
          "package": "csound-expression-typed",
          "partial": "Is Keybd Sensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabsIsKeybdSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "tabsRect",
          "package": "csound-expression-typed",
          "signature": "Maybe Rect",
          "source": "src/Csound-Typed-Gui-Gui.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "tabsRect",
          "package": "csound-expression-typed",
          "partial": "Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabsRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "tabsTitle",
          "package": "csound-expression-typed",
          "signature": "String",
          "source": "src/Csound-Typed-Gui-Gui.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "tabsTitle",
          "package": "csound-expression-typed",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:tabsTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA FLTK widget opcode that creates a toggle button.\n\u003c/p\u003e\u003cpre\u003e button text\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLbutton.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "toggle",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Source (Evt D)",
          "source": "src/Csound-Typed-Gui-Widget.html#toggle",
          "type": "function"
        },
        "index": {
          "description": "FLTK widget opcode that creates toggle button button text doc http www.csounds.com manual html FLbutton.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "toggle",
          "normalized": "String-\u003eSource(Evt D)",
          "package": "csound-expression-typed",
          "signature": "String-\u003eSource(Evt D)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:toggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variance on the function \u003ccode\u003e\u003ca\u003etoggle\u003c/a\u003e\u003c/code\u003e, but it produces \n a signal of piecewise constant function. \n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "toggleSig",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Source Sig",
          "source": "src/Csound-Typed-Gui-Widget.html#toggleSig",
          "type": "function"
        },
        "index": {
          "description": "variance on the function toggle but it produces signal of piecewise constant function",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "toggleSig",
          "normalized": "String-\u003eSource Sig",
          "package": "csound-expression-typed",
          "partial": "Sig",
          "signature": "String-\u003eSource Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:toggleSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "unGui",
          "package": "csound-expression-typed",
          "signature": "LowGui",
          "source": "src/Csound-Typed-Gui-Gui.html#Gui",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "unGui",
          "package": "csound-expression-typed",
          "partial": "Gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:unGui"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "unGuiHandle",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-Gui-Gui.html#GuiHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "unGuiHandle",
          "package": "csound-expression-typed",
          "partial": "Gui Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:unGuiHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnit span. A special case:\n\u003c/p\u003e\u003cpre\u003e uspan = linSpan 0 1\n\u003c/pre\u003e",
          "module": "Csound.Typed.Gui",
          "name": "uspan",
          "package": "csound-expression-typed",
          "signature": "ValSpan",
          "source": "src/Csound-Typed-Gui-Gui.html#uspan",
          "type": "function"
        },
        "index": {
          "description": "Unit span special case uspan linSpan",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "uspan",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:uspan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exponential unit span. A special case:\n\u003c/p\u003e\u003cpre\u003e uspan = expSpan 0 1\n\u003c/pre\u003e",
          "module": "Csound.Typed.Gui",
          "name": "uspanExp",
          "package": "csound-expression-typed",
          "signature": "ValSpan",
          "source": "src/Csound-Typed-Gui-Gui.html#uspanExp",
          "type": "function"
        },
        "index": {
          "description": "An exponential unit span special case uspan expSpan",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "uspanExp",
          "package": "csound-expression-typed",
          "partial": "Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:uspanExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "valDiapMax",
          "package": "csound-expression-typed",
          "signature": "Double",
          "source": "src/Csound-Typed-Gui-Gui.html#ValDiap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "valDiapMax",
          "package": "csound-expression-typed",
          "partial": "Diap Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:valDiapMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "valDiapMin",
          "package": "csound-expression-typed",
          "signature": "Double",
          "source": "src/Csound-Typed-Gui-Gui.html#ValDiap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "valDiapMin",
          "package": "csound-expression-typed",
          "partial": "Diap Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:valDiapMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "valSpanDiap",
          "package": "csound-expression-typed",
          "signature": "ValDiap",
          "source": "src/Csound-Typed-Gui-Gui.html#ValSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "valSpanDiap",
          "package": "csound-expression-typed",
          "partial": "Span Diap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:valSpanDiap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "valSpanScale",
          "package": "csound-expression-typed",
          "signature": "ValScaleType",
          "source": "src/Csound-Typed-Gui-Gui.html#ValSpan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "valSpanScale",
          "package": "csound-expression-typed",
          "partial": "Span Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:valSpanScale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFLvalue shows current the value of a valuator in a text field.\n\u003c/p\u003e\u003cpre\u003e value initVal\n\u003c/pre\u003e\u003cp\u003edoc: \u003ca\u003ehttp://www.csounds.com/manual/html/FLvalue.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "value",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Double -\u003e Sink Sig",
          "source": "src/Csound-Typed-Gui-Widget.html#value",
          "type": "function"
        },
        "index": {
          "description": "FLvalue shows current the value of valuator in text field value initVal doc http www.csounds.com manual html FLvalue.html",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "value",
          "normalized": "String-\u003eDouble-\u003eSink Sig",
          "package": "csound-expression-typed",
          "signature": "String-\u003eDouble-\u003eSink Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVertical groupping of the elements. All elements are \n placed in the stright vertical line and aligned by X-coordinate\n and width.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "ver",
          "package": "csound-expression-typed",
          "signature": "[Gui] -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#ver",
          "type": "function"
        },
        "index": {
          "description": "Vertical groupping of the elements All elements are placed in the stright vertical line and aligned by X-coordinate and width",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "ver",
          "normalized": "[Gui]-\u003eGui",
          "package": "csound-expression-typed",
          "signature": "[Gui]-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:ver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeighted vertical grouping. \n It takes a list of scaling factors and elements.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "verSca",
          "package": "csound-expression-typed",
          "signature": "[(Double, Gui)] -\u003e Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#verSca",
          "type": "function"
        },
        "index": {
          "description": "Weighted vertical grouping It takes list of scaling factors and elements",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "verSca",
          "normalized": "[(Double,Gui)]-\u003eGui",
          "package": "csound-expression-typed",
          "partial": "Sca",
          "signature": "[(Double,Gui)]-\u003eGui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:verSca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA widget constructor.\n\u003c/p\u003e",
          "module": "Csound.Typed.Gui",
          "name": "widget",
          "package": "csound-expression-typed",
          "signature": "SE (Gui, Output a, Input b, Inner) -\u003e Widget a b",
          "source": "src/Csound-Typed-Gui-Widget.html#widget",
          "type": "function"
        },
        "index": {
          "description": "widget constructor",
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "widget",
          "normalized": "SE(Gui,Output a,Input b,Inner)-\u003eWidget a b",
          "package": "csound-expression-typed",
          "signature": "SE(Gui,Output a,Input b,Inner)-\u003eWidget a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "width",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-Gui-BoxModel.html#Rect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "width",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "winGui",
          "package": "csound-expression-typed",
          "signature": "Gui",
          "source": "src/Csound-Typed-Gui-Gui.html#Win",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "winGui",
          "package": "csound-expression-typed",
          "partial": "Gui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:winGui"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "winRect",
          "package": "csound-expression-typed",
          "signature": "Maybe Rect",
          "source": "src/Csound-Typed-Gui-Gui.html#Win",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "winRect",
          "package": "csound-expression-typed",
          "partial": "Rect",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:winRect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Gui",
          "name": "winTitle",
          "package": "csound-expression-typed",
          "signature": "String",
          "source": "src/Csound-Typed-Gui-Gui.html#Win",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Gui",
          "module": "Csound.Typed.Gui",
          "name": "winTitle",
          "package": "csound-expression-typed",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Gui.html#v:winTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "Render",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Render.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "Render",
          "package": "csound-expression-typed",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCsound options. The default values are\n\u003c/p\u003e\u003cpre\u003e flags      = def     -- the only flag set by default is \"no-displays\" \n                      -- to supress the display of the tables\n sampleRate = 44100\n blockSize  = 64\n gain       = 0.5\n tabFi      = fineFi 13 [(idLins, 11), (idExps, 11), (idConsts, 9), (idSplines, 11), (idStartEnds, 12)] }\n\u003c/pre\u003e",
          "module": "Csound.Typed.Render",
          "name": "Options",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-GlobalState-Options.html#Options",
          "type": "data"
        },
        "index": {
          "description": "Csound options The default values are flags def the only flag set by default is no-displays to supress the display of the tables sampleRate blockSize gain tabFi fineFi idLins idExps idConsts idSplines idStartEnds",
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "Options",
          "package": "csound-expression-typed",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable size fidelity (how many points in the table by default).\n\u003c/p\u003e",
          "module": "Csound.Typed.Render",
          "name": "TabFi",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-GlobalState-Options.html#TabFi",
          "type": "data"
        },
        "index": {
          "description": "Table size fidelity how many points in the table by default",
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "TabFi",
          "package": "csound-expression-typed",
          "partial": "Tab Fi",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#t:TabFi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "Options",
          "package": "csound-expression-typed",
          "signature": "Options",
          "source": "src/Csound-Typed-GlobalState-Options.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "Options",
          "package": "csound-expression-typed",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "TabFi",
          "package": "csound-expression-typed",
          "signature": "TabFi",
          "source": "src/Csound-Typed-GlobalState-Options.html#TabFi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "TabFi",
          "package": "csound-expression-typed",
          "partial": "Tab Fi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:TabFi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the same table size for all tables. \n\u003c/p\u003e\u003cpre\u003e coarseFi n\n\u003c/pre\u003e\u003cp\u003ewhere \u003ccode\u003en\u003c/code\u003e  is a degree of 2. For example, \u003ccode\u003en = 10\u003c/code\u003e sets size to 1024 points for all tables by default.\n\u003c/p\u003e",
          "module": "Csound.Typed.Render",
          "name": "coarseFi",
          "package": "csound-expression-typed",
          "signature": "Int -\u003e TabFi",
          "source": "src/Csound-Typed-GlobalState-Options.html#coarseFi",
          "type": "function"
        },
        "index": {
          "description": "Sets the same table size for all tables coarseFi where is degree of For example sets size to points for all tables by default",
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "coarseFi",
          "normalized": "Int-\u003eTabFi",
          "package": "csound-expression-typed",
          "partial": "Fi",
          "signature": "Int-\u003eTabFi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:coarseFi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of audio samples in one control step\n\u003c/p\u003e",
          "module": "Csound.Typed.Render",
          "name": "csdBlockSize",
          "package": "csound-expression-typed",
          "signature": "Maybe Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#Options",
          "type": "function"
        },
        "index": {
          "description": "The number of audio samples in one control step",
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "csdBlockSize",
          "package": "csound-expression-typed",
          "partial": "Block Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:csdBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCsound command line flags\n\u003c/p\u003e",
          "module": "Csound.Typed.Render",
          "name": "csdFlags",
          "package": "csound-expression-typed",
          "signature": "Flags",
          "source": "src/Csound-Typed-GlobalState-Options.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Csound command line flags",
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "csdFlags",
          "package": "csound-expression-typed",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:csdFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA gain of the final output\n\u003c/p\u003e",
          "module": "Csound.Typed.Render",
          "name": "csdGain",
          "package": "csound-expression-typed",
          "signature": "Maybe Double",
          "source": "src/Csound-Typed-GlobalState-Options.html#Options",
          "type": "function"
        },
        "index": {
          "description": "gain of the final output",
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "csdGain",
          "package": "csound-expression-typed",
          "partial": "Gain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:csdGain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sample rate\n\u003c/p\u003e",
          "module": "Csound.Typed.Render",
          "name": "csdSampleRate",
          "package": "csound-expression-typed",
          "signature": "Maybe Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#Options",
          "type": "function"
        },
        "index": {
          "description": "The sample rate",
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "csdSampleRate",
          "package": "csound-expression-typed",
          "partial": "Sample Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:csdSampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault fidelity of the arrays\n\u003c/p\u003e",
          "module": "Csound.Typed.Render",
          "name": "csdTabFi",
          "package": "csound-expression-typed",
          "signature": "Maybe TabFi",
          "source": "src/Csound-Typed-GlobalState-Options.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Default fidelity of the arrays",
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "csdTabFi",
          "package": "csound-expression-typed",
          "partial": "Tab Fi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:csdTabFi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "defBlockSize",
          "package": "csound-expression-typed",
          "signature": "Options -\u003e Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#defBlockSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "defBlockSize",
          "normalized": "Options-\u003eInt",
          "package": "csound-expression-typed",
          "partial": "Block Size",
          "signature": "Options-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:defBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "defGain",
          "package": "csound-expression-typed",
          "signature": "Options -\u003e Double",
          "source": "src/Csound-Typed-GlobalState-Options.html#defGain",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "defGain",
          "normalized": "Options-\u003eDouble",
          "package": "csound-expression-typed",
          "partial": "Gain",
          "signature": "Options-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:defGain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "defSampleRate",
          "package": "csound-expression-typed",
          "signature": "Options -\u003e Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#defSampleRate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "defSampleRate",
          "normalized": "Options-\u003eInt",
          "package": "csound-expression-typed",
          "partial": "Sample Rate",
          "signature": "Options-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:defSampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "defTabFi",
          "package": "csound-expression-typed",
          "signature": "Options -\u003e TabFi",
          "source": "src/Csound-Typed-GlobalState-Options.html#defTabFi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "defTabFi",
          "normalized": "Options-\u003eTabFi",
          "package": "csound-expression-typed",
          "partial": "Tab Fi",
          "signature": "Options-\u003eTabFi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:defTabFi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets different table size for different GEN-routines. \n\u003c/p\u003e\u003cpre\u003e fineFi n ps \n\u003c/pre\u003e\u003cp\u003ewhere \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003en\u003c/code\u003e is the default value for table size (size is a \u003ccode\u003en\u003c/code\u003e power of 2) for all gen routines that are not listed in the next argument \u003ccode\u003eps\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eps\u003c/code\u003e is a list of pairs \u003ccode\u003e(genRoutineId, tableSizeDegreeOf2)\u003c/code\u003e that sets the given table size for a \n   given GEN-routine.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ewith this function we can set lower table sizes for tables that are usually used in the envelopes.\n\u003c/p\u003e",
          "module": "Csound.Typed.Render",
          "name": "fineFi",
          "package": "csound-expression-typed",
          "signature": "Int -\u003e [(Int, Int)] -\u003e TabFi",
          "source": "src/Csound-Typed-GlobalState-Options.html#fineFi",
          "type": "function"
        },
        "index": {
          "description": "Sets different table size for different GEN-routines fineFi ps where is the default value for table size size is power of for all gen routines that are not listed in the next argument ps ps is list of pairs genRoutineId tableSizeDegreeOf2 that sets the given table size for given GEN-routine with this function we can set lower table sizes for tables that are usually used in the envelopes",
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "fineFi",
          "normalized": "Int-\u003e[(Int,Int)]-\u003eTabFi",
          "package": "csound-expression-typed",
          "partial": "Fi",
          "signature": "Int-\u003e[(Int,Int)]-\u003eTabFi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:fineFi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idBessels",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idBessels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idBessels",
          "package": "csound-expression-typed",
          "partial": "Bessels",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idBessels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idBuzzes",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idBuzzes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idBuzzes",
          "package": "csound-expression-typed",
          "partial": "Buzzes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idBuzzes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idChebs1",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idChebs1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idChebs1",
          "package": "csound-expression-typed",
          "partial": "Chebs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idChebs1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idChebs2",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idChebs2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idChebs2",
          "package": "csound-expression-typed",
          "partial": "Chebs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idChebs2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idConsts",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idConsts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idConsts",
          "package": "csound-expression-typed",
          "partial": "Consts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idConsts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idCubes",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idCubes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idCubes",
          "package": "csound-expression-typed",
          "partial": "Cubes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idCubes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idDoubles",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idDoubles",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idDoubles",
          "package": "csound-expression-typed",
          "partial": "Doubles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idDoubles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idExps",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idExps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idExps",
          "package": "csound-expression-typed",
          "partial": "Exps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idExps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idLins",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idLins",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idLins",
          "package": "csound-expression-typed",
          "partial": "Lins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idLins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idMp3s",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idMp3s",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idMp3s",
          "package": "csound-expression-typed",
          "partial": "Mp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idMp3s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idPartials",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idPartials",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idPartials",
          "package": "csound-expression-typed",
          "partial": "Partials",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idPartials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idPolys",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idPolys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idPolys",
          "package": "csound-expression-typed",
          "partial": "Polys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idPolys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idSines",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idSines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idSines",
          "package": "csound-expression-typed",
          "partial": "Sines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idSines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idSines2",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idSines2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idSines2",
          "package": "csound-expression-typed",
          "partial": "Sines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idSines2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idSines3",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idSines3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idSines3",
          "package": "csound-expression-typed",
          "partial": "Sines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idSines3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idSines4",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idSines4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idSines4",
          "package": "csound-expression-typed",
          "partial": "Sines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idSines4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idSplines",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idSplines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idSplines",
          "package": "csound-expression-typed",
          "partial": "Splines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idSplines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idStartEnds",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idStartEnds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idStartEnds",
          "package": "csound-expression-typed",
          "partial": "Start Ends",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idStartEnds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idWavs",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idWavs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idWavs",
          "package": "csound-expression-typed",
          "partial": "Wavs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idWavs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "idWins",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#idWins",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "idWins",
          "package": "csound-expression-typed",
          "partial": "Wins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:idWins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "renderEff",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE b) -\u003e IO String",
          "source": "src/Csound-Typed-Render.html#renderEff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "renderEff",
          "normalized": "(a-\u003eSE b)-\u003eIO String",
          "package": "csound-expression-typed",
          "partial": "Eff",
          "signature": "(a-\u003eSE b)-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderEff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "renderEffBy",
          "package": "csound-expression-typed",
          "signature": "Options -\u003e (a -\u003e SE b) -\u003e IO String",
          "source": "src/Csound-Typed-Render.html#renderEffBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "renderEffBy",
          "normalized": "Options-\u003e(a-\u003eSE b)-\u003eIO String",
          "package": "csound-expression-typed",
          "partial": "Eff By",
          "signature": "Options-\u003e(a-\u003eSE b)-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderEffBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "renderOut",
          "package": "csound-expression-typed",
          "signature": "SE a -\u003e IO String",
          "source": "src/Csound-Typed-Render.html#renderOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "renderOut",
          "normalized": "SE a-\u003eIO String",
          "package": "csound-expression-typed",
          "partial": "Out",
          "signature": "SE a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "renderOutBy",
          "package": "csound-expression-typed",
          "signature": "Options -\u003e SE a -\u003e IO String",
          "source": "src/Csound-Typed-Render.html#renderOutBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "renderOutBy",
          "normalized": "Options-\u003eSE a-\u003eIO String",
          "package": "csound-expression-typed",
          "partial": "Out By",
          "signature": "Options-\u003eSE a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderOutBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "renderOutBy_",
          "package": "csound-expression-typed",
          "signature": "Options -\u003e SE () -\u003e IO String",
          "source": "src/Csound-Typed-Render.html#renderOutBy_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "renderOutBy_",
          "normalized": "Options-\u003eSE()-\u003eIO String",
          "package": "csound-expression-typed",
          "partial": "Out By",
          "signature": "Options-\u003eSE()-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderOutBy_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "renderOut_",
          "package": "csound-expression-typed",
          "signature": "SE () -\u003e IO String",
          "source": "src/Csound-Typed-Render.html#renderOut_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "renderOut_",
          "normalized": "SE()-\u003eIO String",
          "package": "csound-expression-typed",
          "partial": "Out",
          "signature": "SE()-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:renderOut_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "tabFiBase",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#TabFi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "tabFiBase",
          "package": "csound-expression-typed",
          "partial": "Fi Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:tabFiBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Render",
          "name": "tabFiGens",
          "package": "csound-expression-typed",
          "signature": "IntMap Int",
          "source": "src/Csound-Typed-GlobalState-Options.html#TabFi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Render",
          "module": "Csound.Typed.Render",
          "name": "tabFiGens",
          "package": "csound-expression-typed",
          "partial": "Fi Gens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Render.html#v:tabFiGens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Evt",
          "name": "Evt",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Evt.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "Evt",
          "package": "csound-expression-typed",
          "partial": "Evt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA procedure. Something that takes a value and suddenly bams with it.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "Bam",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Evt.html#Bam",
          "type": "type"
        },
        "index": {
          "description": "procedure Something that takes value and suddenly bams with it",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "Bam",
          "package": "csound-expression-typed",
          "partial": "Bam",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#t:Bam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stream of events. We can convert a stream of events to\n the procedure with the function \u003ccode\u003erunEvt\u003c/code\u003e. It waits for events\n and invokes the given procedure when the event happens.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "Evt",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Evt.html#Evt",
          "type": "data"
        },
        "index": {
          "description": "stream of events We can convert stream of events to the procedure with the function runEvt It waits for events and invokes the given procedure when the event happens",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "Evt",
          "package": "csound-expression-typed",
          "partial": "Evt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#t:Evt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA snapshot of the signal. It converts a type of the signal to the \n type of the value in the given moment. Instances:\n\u003c/p\u003e\u003cpre\u003e type instance Snap D   = D\n type instance Snap Str = Str\n type instance Snap Tab = Tab\n\n type instance Snap Sig = D\n \n type instance Snap (a, b) = (Snap a, Snap b)\n type instance Snap (a, b, c) = (Snap a, Snap b, Snap c)\n type instance Snap (a, b, c, d) = (Snap a, Snap b, Snap c, Snap d)\n type instance Snap (a, b, c, d, e) = (Snap a, Snap b, Snap c, Snap d, Snap e)\n type instance Snap (a, b, c, d, e, f) = (Snap a, Snap b, Snap c, Snap d, Snap e, Snap f)\n\u003c/pre\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "Snap",
          "package": "csound-expression-typed",
          "signature": "Snap",
          "type": "function"
        },
        "index": {
          "description": "snapshot of the signal It converts type of the signal to the type of the value in the given moment Instances type instance Snap type instance Snap Str Str type instance Snap Tab Tab type instance Snap Sig type instance Snap Snap Snap type instance Snap Snap Snap Snap type instance Snap Snap Snap Snap Snap type instance Snap Snap Snap Snap Snap Snap type instance Snap Snap Snap Snap Snap Snap Snap",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "Snap",
          "package": "csound-expression-typed",
          "partial": "Snap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#t:Snap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Evt",
          "name": "Evt",
          "package": "csound-expression-typed",
          "signature": "Evt",
          "source": "src/Csound-Typed-Types-Evt.html#Evt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "Evt",
          "package": "csound-expression-typed",
          "partial": "Evt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:Evt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulator for events.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "accumE",
          "package": "csound-expression-typed",
          "signature": "s -\u003e (a -\u003e s -\u003e (b, s)) -\u003e Evt a -\u003e Evt b",
          "source": "src/Csound-Typed-Types-Evt.html#accumE",
          "type": "function"
        },
        "index": {
          "description": "Accumulator for events",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "accumE",
          "normalized": "a-\u003e(b-\u003ea-\u003e(c,a))-\u003eEvt b-\u003eEvt c",
          "package": "csound-expression-typed",
          "signature": "s-\u003e(a-\u003es-\u003e(b,s))-\u003eEvt a-\u003eEvt b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:accumE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulator for events with side effects.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "accumSE",
          "package": "csound-expression-typed",
          "signature": "s -\u003e (a -\u003e s -\u003e SE (b, s)) -\u003e Evt a -\u003e Evt b",
          "source": "src/Csound-Typed-Types-Evt.html#accumSE",
          "type": "function"
        },
        "index": {
          "description": "Accumulator for events with side effects",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "accumSE",
          "normalized": "a-\u003e(b-\u003ea-\u003eSE(c,a))-\u003eEvt b-\u003eEvt c",
          "package": "csound-expression-typed",
          "partial": "SE",
          "signature": "s-\u003e(a-\u003es-\u003eSE(b,s))-\u003eEvt a-\u003eEvt b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:accumSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts booleans to events.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "boolToEvt",
          "package": "csound-expression-typed",
          "signature": "BoolSig -\u003e Evt Unit",
          "source": "src/Csound-Typed-Types-Evt.html#boolToEvt",
          "type": "function"
        },
        "index": {
          "description": "Converts booleans to events",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "boolToEvt",
          "normalized": "BoolSig-\u003eEvt Unit",
          "package": "csound-expression-typed",
          "partial": "To Evt",
          "signature": "BoolSig-\u003eEvt Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:boolToEvt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an event to boolean signal. It forgets\n everything about the event values. Signal equals to one when \n an event happens and zero otherwise.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "evtToBool",
          "package": "csound-expression-typed",
          "signature": "Evt a -\u003e SE BoolSig",
          "source": "src/Csound-Typed-Types-Evt.html#evtToBool",
          "type": "function"
        },
        "index": {
          "description": "Converts an event to boolean signal It forgets everything about the event values Signal equals to one when an event happens and zero otherwise",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "evtToBool",
          "normalized": "Evt a-\u003eSE BoolSig",
          "package": "csound-expression-typed",
          "partial": "To Bool",
          "signature": "Evt a-\u003eSE BoolSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:evtToBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulator with filtering. It can skip the events from the event stream.\n If the third element of the triple equals to 1 then we should include the\n event in the resulting stream. If the element equals to 0 we skip the event.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "filterAccumE",
          "package": "csound-expression-typed",
          "signature": "s -\u003e (a -\u003e s -\u003e (BoolD, b, s)) -\u003e Evt a -\u003e Evt b",
          "source": "src/Csound-Typed-Types-Evt.html#filterAccumE",
          "type": "function"
        },
        "index": {
          "description": "Accumulator with filtering It can skip the events from the event stream If the third element of the triple equals to then we should include the event in the resulting stream If the element equals to we skip the event",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "filterAccumE",
          "normalized": "a-\u003e(b-\u003ea-\u003e(BoolD,c,a))-\u003eEvt b-\u003eEvt c",
          "package": "csound-expression-typed",
          "partial": "Accum",
          "signature": "s-\u003e(a-\u003es-\u003e(BoolD,b,s))-\u003eEvt a-\u003eEvt b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:filterAccumE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulator for events with side effects and filtering. Event triggers\n only if the first element in the tripplet is true.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "filterAccumSE",
          "package": "csound-expression-typed",
          "signature": "s -\u003e (a -\u003e s -\u003e SE (BoolD, b, s)) -\u003e Evt a -\u003e Evt b",
          "source": "src/Csound-Typed-Types-Evt.html#filterAccumSE",
          "type": "function"
        },
        "index": {
          "description": "Accumulator for events with side effects and filtering Event triggers only if the first element in the tripplet is true",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "filterAccumSE",
          "normalized": "a-\u003e(b-\u003ea-\u003eSE(BoolD,c,a))-\u003eEvt b-\u003eEvt c",
          "package": "csound-expression-typed",
          "partial": "Accum SE",
          "signature": "s-\u003e(a-\u003es-\u003eSE(BoolD,b,s))-\u003eEvt a-\u003eEvt b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:filterAccumSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters events with predicate.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "filterE",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e BoolD) -\u003e Evt a -\u003e Evt a",
          "source": "src/Csound-Typed-Types-Evt.html#filterE",
          "type": "function"
        },
        "index": {
          "description": "Filters events with predicate",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "filterE",
          "normalized": "(a-\u003eBoolD)-\u003eEvt a-\u003eEvt a",
          "package": "csound-expression-typed",
          "signature": "(a-\u003eBoolD)-\u003eEvt a-\u003eEvt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:filterE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters events with effectful predicate.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "filterSE",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e SE BoolD) -\u003e Evt a -\u003e Evt a",
          "source": "src/Csound-Typed-Types-Evt.html#filterSE",
          "type": "function"
        },
        "index": {
          "description": "Filters events with effectful predicate",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "filterSE",
          "normalized": "(a-\u003eSE BoolD)-\u003eEvt a-\u003eEvt a",
          "package": "csound-expression-typed",
          "partial": "SE",
          "signature": "(a-\u003eSE BoolD)-\u003eEvt a-\u003eEvt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:filterSE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Evt",
          "name": "readSnap",
          "package": "csound-expression-typed",
          "signature": "a -\u003e Snap a",
          "source": "src/Csound-Typed-Types-Evt.html#readSnap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "readSnap",
          "normalized": "a-\u003eSnap a",
          "package": "csound-expression-typed",
          "partial": "Snap",
          "signature": "a-\u003eSnap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:readSnap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Evt",
          "name": "runEvt",
          "package": "csound-expression-typed",
          "signature": "Bam a -\u003e SE ()",
          "source": "src/Csound-Typed-Types-Evt.html#Evt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "runEvt",
          "normalized": "Bam a-\u003eSE()",
          "package": "csound-expression-typed",
          "partial": "Evt",
          "signature": "Bam a-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:runEvt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTriggers an event when signal equals to 1.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "sigToEvt",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e Evt Unit",
          "source": "src/Csound-Typed-Types-Evt.html#sigToEvt",
          "type": "function"
        },
        "index": {
          "description": "Triggers an event when signal equals to",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "sigToEvt",
          "normalized": "Sig-\u003eEvt Unit",
          "package": "csound-expression-typed",
          "partial": "To Evt",
          "signature": "Sig-\u003eEvt Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:sigToEvt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an event stream that contains values from the\n given signal. Events happens only when the signal changes.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "snaps",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e Evt D",
          "source": "src/Csound-Typed-Types-Evt.html#snaps",
          "type": "function"
        },
        "index": {
          "description": "Constructs an event stream that contains values from the given signal Events happens only when the signal changes",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "snaps",
          "normalized": "Sig-\u003eEvt D",
          "package": "csound-expression-typed",
          "signature": "Sig-\u003eEvt D",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:snaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet values of some signal at the given events.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "snapshot",
          "package": "csound-expression-typed",
          "signature": "(Snap a -\u003e b -\u003e c) -\u003e a -\u003e Evt b -\u003e Evt c",
          "source": "src/Csound-Typed-Types-Evt.html#snapshot",
          "type": "function"
        },
        "index": {
          "description": "Get values of some signal at the given events",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "snapshot",
          "normalized": "(Snap a-\u003eb-\u003ec)-\u003ea-\u003eEvt b-\u003eEvt c",
          "package": "csound-expression-typed",
          "signature": "(Snap a-\u003eb-\u003ec)-\u003ea-\u003eEvt b-\u003eEvt c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:snapshot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts events to signals.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "stepper",
          "package": "csound-expression-typed",
          "signature": "a -\u003e Evt a -\u003e SE a",
          "source": "src/Csound-Typed-Types-Evt.html#stepper",
          "type": "function"
        },
        "index": {
          "description": "Converts events to signals",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "stepper",
          "normalized": "a-\u003eEvt a-\u003eSE a",
          "package": "csound-expression-typed",
          "signature": "a-\u003eEvt a-\u003eSE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:stepper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes actions synchronized with global tempo (in Hz).\n\u003c/p\u003e\u003cpre\u003e runEvtSync tempoCps evt proc\n\u003c/pre\u003e",
          "module": "Csound.Typed.Types.Evt",
          "name": "sync",
          "package": "csound-expression-typed",
          "signature": "D -\u003e Evt a -\u003e Evt a",
          "source": "src/Csound-Typed-Types-Evt.html#sync",
          "type": "function"
        },
        "index": {
          "description": "Executes actions synchronized with global tempo in Hz runEvtSync tempoCps evt proc",
          "hierarchy": "Csound Typed Types Evt",
          "module": "Csound.Typed.Types.Evt",
          "name": "sync",
          "normalized": "D-\u003eEvt a-\u003eEvt a",
          "package": "csound-expression-typed",
          "signature": "D-\u003eEvt a-\u003eEvt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Evt.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "Lift",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Lift.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "Lift",
          "package": "csound-expression-typed",
          "partial": "Lift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "DirtyMulti",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Lift.html#DirtyMulti",
          "type": "class"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "DirtyMulti",
          "package": "csound-expression-typed",
          "partial": "Dirty Multi",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:DirtyMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "DirtySingle",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Lift.html#DirtySingle",
          "type": "class"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "DirtySingle",
          "package": "csound-expression-typed",
          "partial": "Dirty Single",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:DirtySingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "Dm",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Lift.html#Dm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "Dm",
          "package": "csound-expression-typed",
          "partial": "Dm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:Dm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inner representation of csound expressions.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Lift",
          "name": "E",
          "package": "csound-expression-typed",
          "type": "type"
        },
        "index": {
          "description": "The inner representation of csound expressions",
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "E",
          "package": "csound-expression-typed",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "GE",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-GlobalState-GE.html#GE",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "GE",
          "package": "csound-expression-typed",
          "partial": "GE",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:GE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "Pm",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Lift.html#Pm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "Pm",
          "package": "csound-expression-typed",
          "partial": "Pm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:Pm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "Procedure",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Lift.html#Procedure",
          "type": "class"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "Procedure",
          "package": "csound-expression-typed",
          "partial": "Procedure",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:Procedure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "PureMulti",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Lift.html#PureMulti",
          "type": "class"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "PureMulti",
          "package": "csound-expression-typed",
          "partial": "Pure Multi",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:PureMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "PureSingle",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Lift.html#PureSingle",
          "type": "class"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "PureSingle",
          "package": "csound-expression-typed",
          "partial": "Pure Single",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#t:PureSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "dirtyMulti",
          "package": "csound-expression-typed",
          "signature": "([E] -\u003e MultiOut (Dep [E])) -\u003e a",
          "source": "src/Csound-Typed-Types-Lift.html#dirtyMulti",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "dirtyMulti",
          "normalized": "([E]-\u003eMultiOut(Dep[E]))-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Multi",
          "signature": "([E]-\u003eMultiOut(Dep[E]))-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:dirtyMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "dirtySingle",
          "package": "csound-expression-typed",
          "signature": "([E] -\u003e Dep E) -\u003e a",
          "source": "src/Csound-Typed-Types-Lift.html#dirtySingle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "dirtySingle",
          "normalized": "([E]-\u003eDep E)-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Single",
          "signature": "([E]-\u003eDep E)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:dirtySingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "fromDm",
          "package": "csound-expression-typed",
          "signature": "Dm -\u003e SE a",
          "source": "src/Csound-Typed-Types-Lift.html#fromDm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "fromDm",
          "normalized": "Dm-\u003eSE a",
          "package": "csound-expression-typed",
          "partial": "Dm",
          "signature": "Dm-\u003eSE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:fromDm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "fromPm",
          "package": "csound-expression-typed",
          "signature": "Pm -\u003e a",
          "source": "src/Csound-Typed-Types-Lift.html#fromPm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "fromPm",
          "normalized": "Pm-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Pm",
          "signature": "Pm-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:fromPm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "procedure",
          "package": "csound-expression-typed",
          "signature": "([E] -\u003e Dep ()) -\u003e a",
          "source": "src/Csound-Typed-Types-Lift.html#procedure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "procedure",
          "normalized": "([E]-\u003eDep())-\u003ea",
          "package": "csound-expression-typed",
          "signature": "([E]-\u003eDep())-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:procedure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "pureMulti",
          "package": "csound-expression-typed",
          "signature": "([E] -\u003e MultiOut [E]) -\u003e a",
          "source": "src/Csound-Typed-Types-Lift.html#pureMulti",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "pureMulti",
          "normalized": "([E]-\u003eMultiOut[E])-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Multi",
          "signature": "([E]-\u003eMultiOut[E])-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:pureMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Lift",
          "name": "pureSingle",
          "package": "csound-expression-typed",
          "signature": "([E] -\u003e E) -\u003e a",
          "source": "src/Csound-Typed-Types-Lift.html#pureSingle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Lift",
          "module": "Csound.Typed.Types.Lift",
          "name": "pureSingle",
          "normalized": "([E]-\u003eE)-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Single",
          "signature": "([E]-\u003eE)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Lift.html#v:pureSingle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "Prim",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Prim",
          "package": "csound-expression-typed",
          "partial": "Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA constant boolean value.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "BoolD",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#BoolD",
          "type": "newtype"
        },
        "index": {
          "description": "constant boolean value",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "BoolD",
          "package": "csound-expression-typed",
          "partial": "Bool",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:BoolD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA signal of booleans.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "BoolSig",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#BoolSig",
          "type": "newtype"
        },
        "index": {
          "description": "signal of booleans",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "BoolSig",
          "package": "csound-expression-typed",
          "partial": "Bool Sig",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:BoolSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant numbers\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "D",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#D",
          "type": "newtype"
        },
        "index": {
          "description": "Constant numbers",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "D",
          "package": "csound-expression-typed",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignals\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "Sig",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#Sig",
          "type": "newtype"
        },
        "index": {
          "description": "Signals",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Sig",
          "package": "csound-expression-typed",
          "partial": "Sig",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Sig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "SigOrD",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#SigOrD",
          "type": "class"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "SigOrD",
          "package": "csound-expression-typed",
          "partial": "Sig Or",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:SigOrD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpectrum. It's \u003ccode\u003efsig\u003c/code\u003e in the Csound.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "Spec",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#Spec",
          "type": "newtype"
        },
        "index": {
          "description": "Spectrum It fsig in the Csound",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Spec",
          "package": "csound-expression-typed",
          "partial": "Spec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrings\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "Str",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#Str",
          "type": "newtype"
        },
        "index": {
          "description": "Strings",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Str",
          "package": "csound-expression-typed",
          "partial": "Str",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTables (or arrays)\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "Tab",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#Tab",
          "type": "data"
        },
        "index": {
          "description": "Tables or arrays",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Tab",
          "package": "csound-expression-typed",
          "partial": "Tab",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "TabArgs",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#TabArgs",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "TabArgs",
          "package": "csound-expression-typed",
          "partial": "Tab Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:TabArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "TabSize",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#TabSize",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "TabSize",
          "package": "csound-expression-typed",
          "partial": "Tab Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:TabSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCsound's empty tuple.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "Unit",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#Unit",
          "type": "newtype"
        },
        "index": {
          "description": "Csound empty tuple",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Unit",
          "package": "csound-expression-typed",
          "partial": "Unit",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains all Csound values.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "Val",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#Val",
          "type": "class"
        },
        "index": {
          "description": "Contains all Csound values",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Val",
          "package": "csound-expression-typed",
          "partial": "Val",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnother type for spectrum. It's \u003ccode\u003ewsig\u003c/code\u003e in the Csound.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "Wspec",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Prim.html#Wspec",
          "type": "newtype"
        },
        "index": {
          "description": "Another type for spectrum It wsig in the Csound",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Wspec",
          "package": "csound-expression-typed",
          "partial": "Wspec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#t:Wspec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "ArgsGen16",
          "package": "csound-expression-typed",
          "signature": "ArgsGen16 [Double]",
          "source": "src/Csound-Typed-Types-Prim.html#TabArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "ArgsGen16",
          "normalized": "ArgsGen[Double]",
          "package": "csound-expression-typed",
          "partial": "Args Gen",
          "signature": "ArgsGen[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ArgsGen16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "ArgsPlain",
          "package": "csound-expression-typed",
          "signature": "ArgsPlain [Double]",
          "source": "src/Csound-Typed-Types-Prim.html#TabArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "ArgsPlain",
          "normalized": "ArgsPlain[Double]",
          "package": "csound-expression-typed",
          "partial": "Args Plain",
          "signature": "ArgsPlain[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ArgsPlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "ArgsRelative",
          "package": "csound-expression-typed",
          "signature": "ArgsRelative [Double]",
          "source": "src/Csound-Typed-Types-Prim.html#TabArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "ArgsRelative",
          "normalized": "ArgsRelative[Double]",
          "package": "csound-expression-typed",
          "partial": "Args Relative",
          "signature": "ArgsRelative[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ArgsRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "BoolD",
          "package": "csound-expression-typed",
          "signature": "BoolD",
          "source": "src/Csound-Typed-Types-Prim.html#BoolD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "BoolD",
          "package": "csound-expression-typed",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:BoolD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "BoolSig",
          "package": "csound-expression-typed",
          "signature": "BoolSig",
          "source": "src/Csound-Typed-Types-Prim.html#BoolSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "BoolSig",
          "package": "csound-expression-typed",
          "partial": "Bool Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:BoolSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "D",
          "package": "csound-expression-typed",
          "signature": "D",
          "source": "src/Csound-Typed-Types-Prim.html#D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "D",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "FileAccess",
          "package": "csound-expression-typed",
          "signature": "FileAccess String [Double]",
          "source": "src/Csound-Typed-Types-Prim.html#TabArgs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "FileAccess",
          "normalized": "FileAccess String[Double]",
          "package": "csound-expression-typed",
          "partial": "File Access",
          "signature": "FileAccess String[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:FileAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "Sig",
          "package": "csound-expression-typed",
          "signature": "Sig",
          "source": "src/Csound-Typed-Types-Prim.html#Sig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Sig",
          "package": "csound-expression-typed",
          "partial": "Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Sig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "SizeDegree",
          "package": "csound-expression-typed",
          "signature": "SizeDegree",
          "source": "src/Csound-Typed-Types-Prim.html#TabSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "SizeDegree",
          "package": "csound-expression-typed",
          "partial": "Size Degree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:SizeDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "SizePlain",
          "package": "csound-expression-typed",
          "signature": "SizePlain Int",
          "source": "src/Csound-Typed-Types-Prim.html#TabSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "SizePlain",
          "package": "csound-expression-typed",
          "partial": "Size Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:SizePlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "Spec",
          "package": "csound-expression-typed",
          "signature": "Spec",
          "source": "src/Csound-Typed-Types-Prim.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Spec",
          "package": "csound-expression-typed",
          "partial": "Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "Str",
          "package": "csound-expression-typed",
          "signature": "Str",
          "source": "src/Csound-Typed-Types-Prim.html#Str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Str",
          "package": "csound-expression-typed",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "Tab",
          "package": "csound-expression-typed",
          "signature": "Tab (GE E)",
          "source": "src/Csound-Typed-Types-Prim.html#Tab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Tab",
          "package": "csound-expression-typed",
          "partial": "Tab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "TabPre",
          "package": "csound-expression-typed",
          "signature": "TabPre PreTab",
          "source": "src/Csound-Typed-Types-Prim.html#Tab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "TabPre",
          "package": "csound-expression-typed",
          "partial": "Tab Pre",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:TabPre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "Unit",
          "package": "csound-expression-typed",
          "signature": "Unit",
          "source": "src/Csound-Typed-Types-Prim.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Unit",
          "package": "csound-expression-typed",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "Wspec",
          "package": "csound-expression-typed",
          "signature": "Wspec",
          "source": "src/Csound-Typed-Types-Prim.html#Wspec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "Wspec",
          "package": "csound-expression-typed",
          "partial": "Wspec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:Wspec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a rate of the signal to audio rate.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "ar",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e Sig",
          "source": "src/Csound-Typed-Types-Prim.html#ar",
          "type": "function"
        },
        "index": {
          "description": "Sets rate of the signal to audio rate",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "ar",
          "normalized": "Sig-\u003eSig",
          "package": "csound-expression-typed",
          "signature": "Sig-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a constant boolean signal.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "boolSig",
          "package": "csound-expression-typed",
          "signature": "BoolD -\u003e BoolSig",
          "source": "src/Csound-Typed-Types-Prim.html#boolSig",
          "type": "function"
        },
        "index": {
          "description": "Creates constant boolean signal",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "boolSig",
          "normalized": "BoolD-\u003eBoolSig",
          "package": "csound-expression-typed",
          "partial": "Sig",
          "signature": "BoolD-\u003eBoolSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:boolSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "ceil'",
          "package": "csound-expression-typed",
          "signature": "a -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#ceil%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "ceil'",
          "normalized": "a-\u003ea",
          "package": "csound-expression-typed",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ceil-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "div'",
          "package": "csound-expression-typed",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#div%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "div'",
          "normalized": "a-\u003ea-\u003ea",
          "package": "csound-expression-typed",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:div-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a number.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "double",
          "package": "csound-expression-typed",
          "signature": "Double -\u003e D",
          "source": "src/Csound-Typed-Types-Prim.html#double",
          "type": "function"
        },
        "index": {
          "description": "Constructs number",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "double",
          "normalized": "Double-\u003eD",
          "package": "csound-expression-typed",
          "signature": "Double-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "floor'",
          "package": "csound-expression-typed",
          "signature": "a -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#floor%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "floor'",
          "normalized": "a-\u003ea",
          "package": "csound-expression-typed",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:floor-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce normalization (sets table size to positive value).\n Might be useful to restore normalization for table \u003ccode\u003e\u003ca\u003edoubles\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "forceNorm",
          "package": "csound-expression-typed",
          "signature": "Tab -\u003e Tab",
          "source": "src/Csound-Typed-Types-Prim.html#forceNorm",
          "type": "function"
        },
        "index": {
          "description": "Force normalization sets table size to positive value Might be useful to restore normalization for table doubles",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "forceNorm",
          "normalized": "Tab-\u003eTab",
          "package": "csound-expression-typed",
          "partial": "Norm",
          "signature": "Tab-\u003eTab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:forceNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "frac'",
          "package": "csound-expression-typed",
          "signature": "a -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#frac%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "frac'",
          "normalized": "a-\u003ea",
          "package": "csound-expression-typed",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:frac-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "fromE",
          "package": "csound-expression-typed",
          "signature": "E -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#fromE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "fromE",
          "normalized": "E-\u003ea",
          "package": "csound-expression-typed",
          "signature": "E-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:fromE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "fromGE",
          "package": "csound-expression-typed",
          "signature": "GE E -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#fromGE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "fromGE",
          "normalized": "GE E-\u003ea",
          "package": "csound-expression-typed",
          "partial": "GE",
          "signature": "GE E-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:fromGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "fromPreTab",
          "package": "csound-expression-typed",
          "signature": "PreTab -\u003e GE Gen",
          "source": "src/Csound-Typed-Types-Prim.html#fromPreTab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "fromPreTab",
          "normalized": "PreTab-\u003eGE Gen",
          "package": "csound-expression-typed",
          "partial": "Pre Tab",
          "signature": "PreTab-\u003eGE Gen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:fromPreTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "getBlockSize",
          "package": "csound-expression-typed",
          "signature": "D",
          "source": "src/Csound-Typed-Types-Prim.html#getBlockSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "getBlockSize",
          "package": "csound-expression-typed",
          "partial": "Block Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:getBlockSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "getControlRate",
          "package": "csound-expression-typed",
          "signature": "D",
          "source": "src/Csound-Typed-Types-Prim.html#getControlRate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "getControlRate",
          "package": "csound-expression-typed",
          "partial": "Control Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:getControlRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "getPreTabUnsafe",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Tab -\u003e PreTab",
          "source": "src/Csound-Typed-Types-Prim.html#getPreTabUnsafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "getPreTabUnsafe",
          "normalized": "String-\u003eTab-\u003ePreTab",
          "package": "csound-expression-typed",
          "partial": "Pre Tab Unsafe",
          "signature": "String-\u003eTab-\u003ePreTab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:getPreTabUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "getSampleRate",
          "package": "csound-expression-typed",
          "signature": "D",
          "source": "src/Csound-Typed-Types-Prim.html#getSampleRate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "getSampleRate",
          "package": "csound-expression-typed",
          "partial": "Sample Rate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:getSampleRate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "getZeroDbfs",
          "package": "csound-expression-typed",
          "signature": "D",
          "source": "src/Csound-Typed-Types-Prim.html#getZeroDbfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "getZeroDbfs",
          "package": "csound-expression-typed",
          "partial": "Zero Dbfs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:getZeroDbfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "hasGuardPoint",
          "package": "csound-expression-typed",
          "signature": "Bool",
          "source": "src/Csound-Typed-Types-Prim.html#TabSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "hasGuardPoint",
          "package": "csound-expression-typed",
          "partial": "Guard Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:hasGuardPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "hideGE",
          "package": "csound-expression-typed",
          "signature": "GE a -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#hideGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "hideGE",
          "normalized": "GE a-\u003ea",
          "package": "csound-expression-typed",
          "partial": "GE",
          "signature": "GE a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:hideGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuerries a total duration of the note. It's equivallent to Csound's \u003ccode\u003ep3\u003c/code\u003e field.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "idur",
          "package": "csound-expression-typed",
          "signature": "D",
          "source": "src/Csound-Typed-Types-Prim.html#idur",
          "type": "function"
        },
        "index": {
          "description": "Querries total duration of the note It equivallent to Csound p3 field",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "idur",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:idur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an integer.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "int",
          "package": "csound-expression-typed",
          "signature": "Int -\u003e D",
          "source": "src/Csound-Typed-Types-Prim.html#int",
          "type": "function"
        },
        "index": {
          "description": "Constructs an integer",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "int",
          "normalized": "Int-\u003eD",
          "package": "csound-expression-typed",
          "signature": "Int-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "int'",
          "package": "csound-expression-typed",
          "signature": "a -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#int%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "int'",
          "normalized": "a-\u003ea",
          "package": "csound-expression-typed",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:int-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a signal to the number (initial value of the signal).\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "ir",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e D",
          "source": "src/Csound-Typed-Types-Prim.html#ir",
          "type": "function"
        },
        "index": {
          "description": "Converts signal to the number initial value of the signal",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "ir",
          "normalized": "Sig-\u003eD",
          "package": "csound-expression-typed",
          "signature": "Sig-\u003eD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:ir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a rate of the signal to control rate.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "kr",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e Sig",
          "source": "src/Csound-Typed-Types-Prim.html#kr",
          "type": "function"
        },
        "index": {
          "description": "Sets rate of the signal to control rate",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "kr",
          "normalized": "Sig-\u003eSig",
          "package": "csound-expression-typed",
          "signature": "Sig-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:kr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "mod'",
          "package": "csound-expression-typed",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#mod%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "mod'",
          "normalized": "a-\u003ea-\u003ea",
          "package": "csound-expression-typed",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:mod-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "on0",
          "package": "csound-expression-typed",
          "signature": "E -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#on0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "on0",
          "normalized": "E-\u003ea",
          "package": "csound-expression-typed",
          "signature": "E-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:on0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "on1",
          "package": "csound-expression-typed",
          "signature": "(E -\u003e E) -\u003e a -\u003e b",
          "source": "src/Csound-Typed-Types-Prim.html#on1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "on1",
          "normalized": "(E-\u003eE)-\u003ea-\u003eb",
          "package": "csound-expression-typed",
          "signature": "(E-\u003eE)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:on1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "on2",
          "package": "csound-expression-typed",
          "signature": "(E -\u003e E -\u003e E) -\u003e a -\u003e b -\u003e c",
          "source": "src/Csound-Typed-Types-Prim.html#on2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "on2",
          "normalized": "(E-\u003eE-\u003eE)-\u003ea-\u003eb-\u003ec",
          "package": "csound-expression-typed",
          "signature": "(E-\u003eE-\u003eE)-\u003ea-\u003eb-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:on2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "on3",
          "package": "csound-expression-typed",
          "signature": "(E -\u003e E -\u003e E -\u003e E) -\u003e a -\u003e b -\u003e c -\u003e d",
          "source": "src/Csound-Typed-Types-Prim.html#on3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "on3",
          "normalized": "(E-\u003eE-\u003eE-\u003eE)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "csound-expression-typed",
          "signature": "(E-\u003eE-\u003eE-\u003eE)-\u003ea-\u003eb-\u003ec-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:on3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "preTab",
          "package": "csound-expression-typed",
          "signature": "TabSize -\u003e Int -\u003e TabArgs -\u003e Tab",
          "source": "src/Csound-Typed-Types-Prim.html#preTab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "preTab",
          "normalized": "TabSize-\u003eInt-\u003eTabArgs-\u003eTab",
          "package": "csound-expression-typed",
          "partial": "Tab",
          "signature": "TabSize-\u003eInt-\u003eTabArgs-\u003eTab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:preTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "quot'",
          "package": "csound-expression-typed",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#quot%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "quot'",
          "normalized": "a-\u003ea-\u003ea",
          "package": "csound-expression-typed",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:quot-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "rem'",
          "package": "csound-expression-typed",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#rem%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "rem'",
          "normalized": "a-\u003ea-\u003ea",
          "package": "csound-expression-typed",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:rem-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "round'",
          "package": "csound-expression-typed",
          "signature": "a -\u003e a",
          "source": "src/Csound-Typed-Types-Prim.html#round%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "round'",
          "normalized": "a-\u003ea",
          "package": "csound-expression-typed",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:round-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a constant signal from the number.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "sig",
          "package": "csound-expression-typed",
          "signature": "D -\u003e Sig",
          "source": "src/Csound-Typed-Types-Prim.html#sig",
          "type": "function"
        },
        "index": {
          "description": "Makes constant signal from the number",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "sig",
          "normalized": "D-\u003eSig",
          "package": "csound-expression-typed",
          "signature": "D-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:sig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "sizeDegree",
          "package": "csound-expression-typed",
          "signature": "Int",
          "source": "src/Csound-Typed-Types-Prim.html#TabSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "sizeDegree",
          "package": "csound-expression-typed",
          "partial": "Degree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:sizeDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkips normalization (sets table size to negative value)\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "skipNorm",
          "package": "csound-expression-typed",
          "signature": "Tab -\u003e Tab",
          "source": "src/Csound-Typed-Types-Prim.html#skipNorm",
          "type": "function"
        },
        "index": {
          "description": "Skips normalization sets table size to negative value",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "skipNorm",
          "normalized": "Tab-\u003eTab",
          "package": "csound-expression-typed",
          "partial": "Norm",
          "signature": "Tab-\u003eTab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:skipNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a string.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "text",
          "package": "csound-expression-typed",
          "signature": "String -\u003e Str",
          "source": "src/Csound-Typed-Types-Prim.html#text",
          "type": "function"
        },
        "index": {
          "description": "Constructs string",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "text",
          "normalized": "String-\u003eStr",
          "package": "csound-expression-typed",
          "signature": "String-\u003eStr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "toGE",
          "package": "csound-expression-typed",
          "signature": "a -\u003e GE E",
          "source": "src/Csound-Typed-Types-Prim.html#toGE",
          "type": "method"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "toGE",
          "normalized": "a-\u003eGE E",
          "package": "csound-expression-typed",
          "partial": "GE",
          "signature": "a-\u003eGE E",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:toGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "unBoolD",
          "package": "csound-expression-typed",
          "signature": "GE E",
          "source": "src/Csound-Typed-Types-Prim.html#BoolD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "unBoolD",
          "package": "csound-expression-typed",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unBoolD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "unBoolSig",
          "package": "csound-expression-typed",
          "signature": "GE E",
          "source": "src/Csound-Typed-Types-Prim.html#BoolSig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "unBoolSig",
          "package": "csound-expression-typed",
          "partial": "Bool Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unBoolSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "unD",
          "package": "csound-expression-typed",
          "signature": "GE E",
          "source": "src/Csound-Typed-Types-Prim.html#D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "unD",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "unSig",
          "package": "csound-expression-typed",
          "signature": "GE E",
          "source": "src/Csound-Typed-Types-Prim.html#Sig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "unSig",
          "package": "csound-expression-typed",
          "partial": "Sig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "unSpec",
          "package": "csound-expression-typed",
          "signature": "GE E",
          "source": "src/Csound-Typed-Types-Prim.html#Spec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "unSpec",
          "package": "csound-expression-typed",
          "partial": "Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "unStr",
          "package": "csound-expression-typed",
          "signature": "GE E",
          "source": "src/Csound-Typed-Types-Prim.html#Str",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "unStr",
          "package": "csound-expression-typed",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "unTab",
          "package": "csound-expression-typed",
          "signature": "Tab -\u003e GE E",
          "source": "src/Csound-Typed-Types-Prim.html#unTab",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "unTab",
          "normalized": "Tab-\u003eGE E",
          "package": "csound-expression-typed",
          "partial": "Tab",
          "signature": "Tab-\u003eGE E",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "unUnit",
          "package": "csound-expression-typed",
          "signature": "GE ()",
          "source": "src/Csound-Typed-Types-Prim.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "unUnit",
          "normalized": "GE()",
          "package": "csound-expression-typed",
          "partial": "Unit",
          "signature": "GE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "unWspec",
          "package": "csound-expression-typed",
          "signature": "GE E",
          "source": "src/Csound-Typed-Types-Prim.html#Wspec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "unWspec",
          "package": "csound-expression-typed",
          "partial": "Wspec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unWspec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs Csound's empty tuple.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "unit",
          "package": "csound-expression-typed",
          "signature": "Unit",
          "source": "src/Csound-Typed-Types-Prim.html#unit",
          "type": "function"
        },
        "index": {
          "description": "Constructs Csound empty tuple",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "unit",
          "package": "csound-expression-typed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Prim",
          "name": "updateTabSize",
          "package": "csound-expression-typed",
          "signature": "(TabSize -\u003e TabSize) -\u003e Tab -\u003e Tab",
          "source": "src/Csound-Typed-Types-Prim.html#updateTabSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "updateTabSize",
          "normalized": "(TabSize-\u003eTabSize)-\u003eTab-\u003eTab",
          "package": "csound-expression-typed",
          "partial": "Tab Size",
          "signature": "(TabSize-\u003eTabSize)-\u003eTab-\u003eTab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:updateTabSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvokes the given procedure if the boolean signal is true.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "when1",
          "package": "csound-expression-typed",
          "signature": "BoolSig -\u003e SE () -\u003e SE ()",
          "source": "src/Csound-Typed-Types-Prim.html#when1",
          "type": "function"
        },
        "index": {
          "description": "Invokes the given procedure if the boolean signal is true",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "when1",
          "normalized": "BoolSig-\u003eSE()-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "BoolSig-\u003eSE()-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:when1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe chain of \u003ccode\u003ewhen1\u003c/code\u003es. Tests all the conditions in sequence\n if everything is false it invokes the procedure given in the second argument.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Prim",
          "name": "whens",
          "package": "csound-expression-typed",
          "signature": "[(BoolSig, SE ())] -\u003e SE () -\u003e SE ()",
          "source": "src/Csound-Typed-Types-Prim.html#whens",
          "type": "function"
        },
        "index": {
          "description": "The chain of when1 Tests all the conditions in sequence if everything is false it invokes the procedure given in the second argument",
          "hierarchy": "Csound Typed Types Prim",
          "module": "Csound.Typed.Types.Prim",
          "name": "whens",
          "normalized": "[(BoolSig,SE())]-\u003eSE()-\u003eSE()",
          "package": "csound-expression-typed",
          "signature": "[(BoolSig,SE())]-\u003eSE()-\u003eSE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Prim.html#v:whens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "Tuple",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Tuple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "Tuple",
          "package": "csound-expression-typed",
          "partial": "Tuple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "Arg",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Tuple.html#Arg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "Arg",
          "package": "csound-expression-typed",
          "partial": "Arg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#t:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tuples of signals.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Tuple",
          "name": "Sigs",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Tuple.html#Sigs",
          "type": "class"
        },
        "index": {
          "description": "The tuples of signals",
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "Sigs",
          "package": "csound-expression-typed",
          "partial": "Sigs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#t:Sigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tuple of Csound values.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Tuple",
          "name": "Tuple",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Tuple.html#Tuple",
          "type": "class"
        },
        "index": {
          "description": "tuple of Csound values",
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "Tuple",
          "package": "csound-expression-typed",
          "partial": "Tuple",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#t:Tuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "TupleMethods",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types-Tuple.html#TupleMethods",
          "type": "data"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "TupleMethods",
          "package": "csound-expression-typed",
          "partial": "Tuple Methods",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#t:TupleMethods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "ar1",
          "package": "csound-expression-typed",
          "signature": "Sig -\u003e Sig",
          "source": "src/Csound-Typed-Types-Tuple.html#ar1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "ar1",
          "normalized": "Sig-\u003eSig",
          "package": "csound-expression-typed",
          "signature": "Sig-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ar1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "ar2",
          "package": "csound-expression-typed",
          "signature": "(Sig, Sig) -\u003e (Sig, Sig)",
          "source": "src/Csound-Typed-Types-Tuple.html#ar2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "ar2",
          "normalized": "(Sig,Sig)-\u003e(Sig,Sig)",
          "package": "csound-expression-typed",
          "signature": "(Sig,Sig)-\u003e(Sig,Sig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ar2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "ar4",
          "package": "csound-expression-typed",
          "signature": "(Sig, Sig, Sig, Sig) -\u003e (Sig, Sig, Sig, Sig)",
          "source": "src/Csound-Typed-Types-Tuple.html#ar4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "ar4",
          "normalized": "(Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig)",
          "package": "csound-expression-typed",
          "signature": "(Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ar4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "ar6",
          "package": "csound-expression-typed",
          "signature": "(Sig, Sig, Sig, Sig, Sig, Sig) -\u003e (Sig, Sig, Sig, Sig, Sig, Sig)",
          "source": "src/Csound-Typed-Types-Tuple.html#ar6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "ar6",
          "normalized": "(Sig,Sig,Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig,Sig,Sig)",
          "package": "csound-expression-typed",
          "signature": "(Sig,Sig,Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig,Sig,Sig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ar6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "ar8",
          "package": "csound-expression-typed",
          "signature": "(Sig, Sig, Sig, Sig, Sig, Sig, Sig, Sig) -\u003e (Sig, Sig, Sig, Sig, Sig, Sig, Sig, Sig)",
          "source": "src/Csound-Typed-Types-Tuple.html#ar8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "ar8",
          "normalized": "(Sig,Sig,Sig,Sig,Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig,Sig,Sig,Sig,Sig)",
          "package": "csound-expression-typed",
          "signature": "(Sig,Sig,Sig,Sig,Sig,Sig,Sig,Sig)-\u003e(Sig,Sig,Sig,Sig,Sig,Sig,Sig,Sig)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ar8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "arg",
          "package": "csound-expression-typed",
          "signature": "Int -\u003e a",
          "source": "src/Csound-Typed-Types-Tuple.html#arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "arg",
          "normalized": "Int-\u003ea",
          "package": "csound-expression-typed",
          "signature": "Int-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "argArity",
          "package": "csound-expression-typed",
          "signature": "a -\u003e Int",
          "source": "src/Csound-Typed-Types-Tuple.html#argArity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "argArity",
          "normalized": "a-\u003eInt",
          "package": "csound-expression-typed",
          "partial": "Arity",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:argArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecaseB\u003c/code\u003e for constants.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Tuple",
          "name": "caseArg",
          "package": "csound-expression-typed",
          "signature": "a -\u003e [(a -\u003e BoolD, b)] -\u003e b -\u003e b",
          "source": "src/Csound-Typed-Types-Tuple.html#caseArg",
          "type": "function"
        },
        "index": {
          "description": "caseB for constants",
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "caseArg",
          "normalized": "a-\u003e[(a-\u003eBoolD,b)]-\u003eb-\u003eb",
          "package": "csound-expression-typed",
          "partial": "Arg",
          "signature": "a-\u003e[(a-\u003eBoolD,b)]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:caseArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecaseB\u003c/code\u003e for tuples of csound values.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Tuple",
          "name": "caseTuple",
          "package": "csound-expression-typed",
          "signature": "a -\u003e [(a -\u003e BoolSig, b)] -\u003e b -\u003e b",
          "source": "src/Csound-Typed-Types-Tuple.html#caseTuple",
          "type": "function"
        },
        "index": {
          "description": "caseB for tuples of csound values",
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "caseTuple",
          "normalized": "a-\u003e[(a-\u003eBoolSig,b)]-\u003eb-\u003eb",
          "package": "csound-expression-typed",
          "partial": "Tuple",
          "signature": "a-\u003e[(a-\u003eBoolSig,b)]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:caseTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "defTuple",
          "package": "csound-expression-typed",
          "signature": "a",
          "source": "src/Csound-Typed-Types-Tuple.html#defTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "defTuple",
          "package": "csound-expression-typed",
          "partial": "Tuple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:defTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "dirtyTuple",
          "package": "csound-expression-typed",
          "signature": "GE (MultiOut [E]) -\u003e SE a",
          "source": "src/Csound-Typed-Types-Tuple.html#dirtyTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "dirtyTuple",
          "normalized": "GE(MultiOut[E])-\u003eSE a",
          "package": "csound-expression-typed",
          "partial": "Tuple",
          "signature": "GE(MultiOut[E])-\u003eSE a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:dirtyTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "fromTuple",
          "package": "csound-expression-typed",
          "signature": "a -\u003e GE [E]",
          "source": "src/Csound-Typed-Types-Tuple.html#fromTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "fromTuple",
          "normalized": "a-\u003eGE[E]",
          "package": "csound-expression-typed",
          "partial": "Tuple",
          "signature": "a-\u003eGE[E]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:fromTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eguardedB\u003c/code\u003e for constants.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Tuple",
          "name": "guardedArg",
          "package": "csound-expression-typed",
          "signature": "[(BoolD, b)] -\u003e b -\u003e b",
          "source": "src/Csound-Typed-Types-Tuple.html#guardedArg",
          "type": "function"
        },
        "index": {
          "description": "guardedB for constants",
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "guardedArg",
          "normalized": "[(BoolD,a)]-\u003ea-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Arg",
          "signature": "[(BoolD,b)]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:guardedArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eguardedB\u003c/code\u003e for tuples of csound values.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Tuple",
          "name": "guardedTuple",
          "package": "csound-expression-typed",
          "signature": "[(BoolSig, b)] -\u003e b -\u003e b",
          "source": "src/Csound-Typed-Types-Tuple.html#guardedTuple",
          "type": "function"
        },
        "index": {
          "description": "guardedB for tuples of csound values",
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "guardedTuple",
          "normalized": "[(BoolSig,a)]-\u003ea-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Tuple",
          "signature": "[(BoolSig,b)]-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:guardedTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eifB\u003c/code\u003e for constants.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Tuple",
          "name": "ifArg",
          "package": "csound-expression-typed",
          "signature": "BoolD -\u003e a -\u003e a -\u003e a",
          "source": "src/Csound-Typed-Types-Tuple.html#ifArg",
          "type": "function"
        },
        "index": {
          "description": "ifB for constants",
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "ifArg",
          "normalized": "BoolD-\u003ea-\u003ea-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Arg",
          "signature": "BoolD-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ifArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eifB\u003c/code\u003e for tuples of csound values.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Tuple",
          "name": "ifTuple",
          "package": "csound-expression-typed",
          "signature": "BoolSig -\u003e a -\u003e a -\u003e a",
          "source": "src/Csound-Typed-Types-Tuple.html#ifTuple",
          "type": "function"
        },
        "index": {
          "description": "ifB for tuples of csound values",
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "ifTuple",
          "normalized": "BoolSig-\u003ea-\u003ea-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Tuple",
          "signature": "BoolSig-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:ifTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines instance of type class \u003ccode\u003e\u003ca\u003eTuple\u003c/a\u003e\u003c/code\u003e for a new type in terms of an already defined one.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types.Tuple",
          "name": "makeTupleMethods",
          "package": "csound-expression-typed",
          "signature": "(a -\u003e b) -\u003e (b -\u003e a) -\u003e TupleMethods b",
          "source": "src/Csound-Typed-Types-Tuple.html#makeTupleMethods",
          "type": "function"
        },
        "index": {
          "description": "Defines instance of type class Tuple for new type in terms of an already defined one",
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "makeTupleMethods",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eTupleMethods b",
          "package": "csound-expression-typed",
          "partial": "Tuple Methods",
          "signature": "(a-\u003eb)-\u003e(b-\u003ea)-\u003eTupleMethods b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:makeTupleMethods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "multiOuts",
          "package": "csound-expression-typed",
          "signature": "E -\u003e a",
          "source": "src/Csound-Typed-Types-Tuple.html#multiOuts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "multiOuts",
          "normalized": "E-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Outs",
          "signature": "E-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:multiOuts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "outArity",
          "package": "csound-expression-typed",
          "signature": "SE a -\u003e Int",
          "source": "src/Csound-Typed-Types-Tuple.html#outArity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "outArity",
          "normalized": "SE a-\u003eInt",
          "package": "csound-expression-typed",
          "partial": "Arity",
          "signature": "SE a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:outArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "pureTuple",
          "package": "csound-expression-typed",
          "signature": "GE (MultiOut [E]) -\u003e a",
          "source": "src/Csound-Typed-Types-Tuple.html#pureTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "pureTuple",
          "normalized": "GE(MultiOut[E])-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Tuple",
          "signature": "GE(MultiOut[E])-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:pureTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "toArg",
          "package": "csound-expression-typed",
          "signature": "a",
          "source": "src/Csound-Typed-Types-Tuple.html#toArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "toArg",
          "package": "csound-expression-typed",
          "partial": "Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:toArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "toNote",
          "package": "csound-expression-typed",
          "signature": "a -\u003e GE [E]",
          "source": "src/Csound-Typed-Types-Tuple.html#toNote",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "toNote",
          "normalized": "a-\u003eGE[E]",
          "package": "csound-expression-typed",
          "partial": "Note",
          "signature": "a-\u003eGE[E]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:toNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "toTuple",
          "package": "csound-expression-typed",
          "signature": "GE [E] -\u003e a",
          "source": "src/Csound-Typed-Types-Tuple.html#toTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "toTuple",
          "normalized": "GE[E]-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Tuple",
          "signature": "GE[E]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:toTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "tupleArity",
          "package": "csound-expression-typed",
          "signature": "a -\u003e Int",
          "source": "src/Csound-Typed-Types-Tuple.html#tupleArity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "tupleArity",
          "normalized": "a-\u003eInt",
          "package": "csound-expression-typed",
          "partial": "Arity",
          "signature": "a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:tupleArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "tupleMethods",
          "package": "csound-expression-typed",
          "signature": "TupleMethods a",
          "source": "src/Csound-Typed-Types-Tuple.html#tupleMethods",
          "type": "method"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "tupleMethods",
          "package": "csound-expression-typed",
          "partial": "Methods",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:tupleMethods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types.Tuple",
          "name": "tupleRates",
          "package": "csound-expression-typed",
          "signature": "a -\u003e [Rate]",
          "source": "src/Csound-Typed-Types-Tuple.html#tupleRates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Csound Typed Types Tuple",
          "module": "Csound.Typed.Types.Tuple",
          "name": "tupleRates",
          "normalized": "a-\u003e[Rate]",
          "package": "csound-expression-typed",
          "partial": "Rates",
          "signature": "a-\u003e[Rate]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types-Tuple.html#v:tupleRates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed.Types",
          "name": "Types",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Csound Typed Types",
          "module": "Csound.Typed.Types",
          "name": "Types",
          "package": "csound-expression-typed",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends an init value which is a number.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types",
          "name": "withD",
          "package": "csound-expression-typed",
          "signature": "a -\u003e D -\u003e a",
          "source": "src/Csound-Typed-Types.html#withD",
          "type": "function"
        },
        "index": {
          "description": "Appends an init value which is number",
          "hierarchy": "Csound Typed Types",
          "module": "Csound.Typed.Types",
          "name": "withD",
          "normalized": "a-\u003eD-\u003ea",
          "package": "csound-expression-typed",
          "signature": "a-\u003eD-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special case of \u003ccode\u003ewithInits\u003c/code\u003e. Here all inits are numbers. \n\u003c/p\u003e",
          "module": "Csound.Typed.Types",
          "name": "withDs",
          "package": "csound-expression-typed",
          "signature": "a -\u003e [D] -\u003e a",
          "source": "src/Csound-Typed-Types.html#withDs",
          "type": "function"
        },
        "index": {
          "description": "special case of withInits Here all inits are numbers",
          "hierarchy": "Csound Typed Types",
          "module": "Csound.Typed.Types",
          "name": "withDs",
          "normalized": "a-\u003e[D]-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Ds",
          "signature": "a-\u003e[D]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withDs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends initialisation arguments. It's up to user to supply arguments with the right types. For example:\n\u003c/p\u003e\u003cpre\u003e oscil 0.5 440 sinWave `withInits` (0.5 :: D)\n\u003c/pre\u003e",
          "module": "Csound.Typed.Types",
          "name": "withInits",
          "package": "csound-expression-typed",
          "signature": "a -\u003e b -\u003e a",
          "source": "src/Csound-Typed-Types.html#withInits",
          "type": "function"
        },
        "index": {
          "description": "Appends initialisation arguments It up to user to supply arguments with the right types For example oscil sinWave withInits",
          "hierarchy": "Csound Typed Types",
          "module": "Csound.Typed.Types",
          "name": "withInits",
          "normalized": "a-\u003eb-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Inits",
          "signature": "a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withInits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a seed to the random value. \n It's equivalent to the \u003ccode\u003ewithD\u003c/code\u003e but it has a special \n meaning of canceling the side effect. When random\n opcode is provided with seed value it's no longer\n contains a side effect so we don't need to restrict it.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types",
          "name": "withSeed",
          "package": "csound-expression-typed",
          "signature": "SE Sig -\u003e D -\u003e Sig",
          "source": "src/Csound-Typed-Types.html#withSeed",
          "type": "function"
        },
        "index": {
          "description": "Applies seed to the random value It equivalent to the withD but it has special meaning of canceling the side effect When random opcode is provided with seed value it no longer contains side effect so we don need to restrict it",
          "hierarchy": "Csound Typed Types",
          "module": "Csound.Typed.Types",
          "name": "withSeed",
          "normalized": "SE Sig-\u003eD-\u003eSig",
          "package": "csound-expression-typed",
          "partial": "Seed",
          "signature": "SE Sig-\u003eD-\u003eSig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withSeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends an init value which is a signal.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types",
          "name": "withSig",
          "package": "csound-expression-typed",
          "signature": "a -\u003e Sig -\u003e a",
          "source": "src/Csound-Typed-Types.html#withSig",
          "type": "function"
        },
        "index": {
          "description": "Appends an init value which is signal",
          "hierarchy": "Csound Typed Types",
          "module": "Csound.Typed.Types",
          "name": "withSig",
          "normalized": "a-\u003eSig-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Sig",
          "signature": "a-\u003eSig-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special case of \u003ccode\u003ewithInits\u003c/code\u003e. Here all inits are signals. \n\u003c/p\u003e",
          "module": "Csound.Typed.Types",
          "name": "withSigs",
          "package": "csound-expression-typed",
          "signature": "a -\u003e [Sig] -\u003e a",
          "source": "src/Csound-Typed-Types.html#withSigs",
          "type": "function"
        },
        "index": {
          "description": "special case of withInits Here all inits are signals",
          "hierarchy": "Csound Typed Types",
          "module": "Csound.Typed.Types",
          "name": "withSigs",
          "normalized": "a-\u003e[Sig]-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Sigs",
          "signature": "a-\u003e[Sig]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withSigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends an init value which is a table.\n\u003c/p\u003e",
          "module": "Csound.Typed.Types",
          "name": "withTab",
          "package": "csound-expression-typed",
          "signature": "a -\u003e Tab -\u003e a",
          "source": "src/Csound-Typed-Types.html#withTab",
          "type": "function"
        },
        "index": {
          "description": "Appends an init value which is table",
          "hierarchy": "Csound Typed Types",
          "module": "Csound.Typed.Types",
          "name": "withTab",
          "normalized": "a-\u003eTab-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Tab",
          "signature": "a-\u003eTab-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special case of \u003ccode\u003ewithInits\u003c/code\u003e. Here all inits are arrays. \n\u003c/p\u003e",
          "module": "Csound.Typed.Types",
          "name": "withTabs",
          "package": "csound-expression-typed",
          "signature": "a -\u003e [Tab] -\u003e a",
          "source": "src/Csound-Typed-Types.html#withTabs",
          "type": "function"
        },
        "index": {
          "description": "special case of withInits Here all inits are arrays",
          "hierarchy": "Csound Typed Types",
          "module": "Csound.Typed.Types",
          "name": "withTabs",
          "normalized": "a-\u003e[Tab]-\u003ea",
          "package": "csound-expression-typed",
          "partial": "Tabs",
          "signature": "a-\u003e[Tab]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed-Types.html#v:withTabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Csound.Typed",
          "name": "Typed",
          "package": "csound-expression-typed",
          "source": "src/Csound-Typed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Csound Typed",
          "module": "Csound.Typed",
          "name": "Typed",
          "package": "csound-expression-typed",
          "partial": "Typed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/csound-expression-typed/docs/Csound-Typed.html#"
      }
    }
  ]
]