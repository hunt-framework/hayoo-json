[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides overloaded pitch literals.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "module",
        "fct-source": "src/Music-Dynamics-Literal.html",
        "fct-type": "module",
        "title": "Literal"
      },
      "index": {
        "description": "Provides overloaded pitch literals",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "Literal",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#t:DynamicsL",
      "description": {
        "fct-descr": "\u003cp\u003e&#160;\n Dynamics literal.\n\u003c/p\u003e\u003cp\u003eFirst value is start value, second is end value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(Just x, Nothing)\u003c/code\u003e is a constant dynamic of \u003ccode\u003ex\u003c/code\u003e\n * \u003ccode\u003e(Just x, Just y)\u003c/code\u003e is a dynamic varying from \u003ccode\u003ex\u003c/code\u003e to \u003ccode\u003ey\u003c/code\u003e\n * \u003ccode\u003e(Nothing, Just y)\u003c/code\u003e is a dynamic varying from the previous level to \u003ccode\u003ey\u003c/code\u003e\n * \u003ccode\u003e(Nothing, Nothing)\u003c/code\u003e is a dynamic varying from the previous level to the next.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor levels, we use \u003ccode\u003e-0.5\u003c/code\u003e for \u003cem\u003emp\u003c/em\u003e, \u003ccode\u003e0.5\u003c/code\u003e for \u003cem\u003emf\u003c/em\u003e and add or remove one for each level.\n \u003ccode\u003e0\u003c/code\u003e is an unspecified middle level dynamic.\n\u003c/p\u003e",
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "newtype",
        "fct-source": "src/Music-Dynamics-Literal.html#DynamicsL",
        "fct-type": "newtype",
        "title": "DynamicsL"
      },
      "index": {
        "description": "Dynamics literal First value is start value second is end value Just Nothing is constant dynamic of Just Just is dynamic varying from to Nothing Just is dynamic varying from the previous level to Nothing Nothing is dynamic varying from the previous level to the next For levels we use for mp for mf and add or remove one for each level is an unspecified middle level dynamic",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "DynamicsL",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "Dynamics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#t:IsDynamics",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "class",
        "fct-source": "src/Music-Dynamics-Literal.html#IsDynamics",
        "fct-type": "class",
        "title": "IsDynamics"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "IsDynamics",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "Is Dynamics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:DynamicsL",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "DynamicsL",
        "fct-source": "src/Music-Dynamics-Literal.html#DynamicsL",
        "fct-type": "function",
        "title": "DynamicsL"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "DynamicsL",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "Dynamics",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:_f",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#_f",
        "fct-type": "function",
        "title": "_f"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "_f",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:_p",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#_p",
        "fct-type": "function",
        "title": "_p"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "_p",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:ff",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#ff",
        "fct-type": "function",
        "title": "ff"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "ff",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:fff",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#fff",
        "fct-type": "function",
        "title": "fff"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "fff",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:ffff",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#ffff",
        "fct-type": "function",
        "title": "ffff"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "ffff",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:fffff",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#fffff",
        "fct-type": "function",
        "title": "fffff"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "fffff",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:ffffff",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#ffffff",
        "fct-type": "function",
        "title": "ffffff"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "ffffff",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:fp",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#fp",
        "fct-type": "function",
        "title": "fp"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "fp",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:fromDynamics",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "DynamicsL -\u003e a",
        "fct-source": "src/Music-Dynamics-Literal.html#fromDynamics",
        "fct-type": "method",
        "title": "fromDynamics"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "fromDynamics",
        "normalized": "DynamicsL-\u003ea",
        "package": "music-dynamics-literal",
        "partial": "Dynamics",
        "signature": "DynamicsL-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:fz",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#fz",
        "fct-type": "function",
        "title": "fz"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "fz",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:getDynamicsL",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "(Maybe Double, Maybe Double)",
        "fct-source": "src/Music-Dynamics-Literal.html#DynamicsL",
        "fct-type": "function",
        "title": "getDynamicsL"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "getDynamicsL",
        "normalized": "(Maybe Double,Maybe Double)",
        "package": "music-dynamics-literal",
        "partial": "Dynamics",
        "signature": "(Maybe Double,Maybe Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:mf",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#mf",
        "fct-type": "function",
        "title": "mf"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "mf",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:mp",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#mp",
        "fct-type": "function",
        "title": "mp"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "mp",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:pp",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#pp",
        "fct-type": "function",
        "title": "pp"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "pp",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:ppp",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#ppp",
        "fct-type": "function",
        "title": "ppp"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "ppp",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:pppp",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#pppp",
        "fct-type": "function",
        "title": "pppp"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "pppp",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:ppppp",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#ppppp",
        "fct-type": "function",
        "title": "ppppp"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "ppppp",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:pppppp",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#pppppp",
        "fct-type": "function",
        "title": "pppppp"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "pppppp",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:rfz",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#rfz",
        "fct-type": "function",
        "title": "rfz"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "rfz",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:sffz",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#sffz",
        "fct-type": "function",
        "title": "sffz"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "sffz",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:sfz",
      "description": {
        "fct-module": "Music.Dynamics.Literal",
        "fct-package": "music-dynamics-literal",
        "fct-signature": "a",
        "fct-source": "src/Music-Dynamics-Literal.html#sfz",
        "fct-type": "function",
        "title": "sfz"
      },
      "index": {
        "description": "",
        "hierarchy": "Music Dynamics Literal",
        "module": "Music.Dynamics.Literal",
        "name": "sfz",
        "normalized": "",
        "package": "music-dynamics-literal",
        "partial": "",
        "signature": ""
      }
    }
  }
]