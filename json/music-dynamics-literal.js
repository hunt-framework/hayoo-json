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
        "word": "music-dynamics-literal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides overloaded pitch literals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Music.Dynamics.Literal",
          "name": "Literal",
          "package": "music-dynamics-literal",
          "source": "src/Music-Dynamics-Literal.html",
          "type": "module"
        },
        "index": {
          "description": "Provides overloaded pitch literals",
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "Literal",
          "package": "music-dynamics-literal",
          "partial": "Literal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e&#160;\n Dynamics literal.\n\u003c/p\u003e\u003cp\u003eFirst value is start value, second is end value.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e(Just x, Nothing)\u003c/code\u003e is a constant dynamic of \u003ccode\u003ex\u003c/code\u003e\n * \u003ccode\u003e(Just x, Just y)\u003c/code\u003e is a dynamic varying from \u003ccode\u003ex\u003c/code\u003e to \u003ccode\u003ey\u003c/code\u003e\n * \u003ccode\u003e(Nothing, Just y)\u003c/code\u003e is a dynamic varying from the previous level to \u003ccode\u003ey\u003c/code\u003e\n * \u003ccode\u003e(Nothing, Nothing)\u003c/code\u003e is a dynamic varying from the previous level to the next.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor levels, we use \u003ccode\u003e-0.5\u003c/code\u003e for \u003cem\u003emp\u003c/em\u003e, \u003ccode\u003e0.5\u003c/code\u003e for \u003cem\u003emf\u003c/em\u003e and add or remove one for each level.\n \u003ccode\u003e0\u003c/code\u003e is an unspecified middle level dynamic.\n\u003c/p\u003e",
          "module": "Music.Dynamics.Literal",
          "name": "DynamicsL",
          "package": "music-dynamics-literal",
          "source": "src/Music-Dynamics-Literal.html#DynamicsL",
          "type": "newtype"
        },
        "index": {
          "description": "Dynamics literal First value is start value second is end value Just Nothing is constant dynamic of Just Just is dynamic varying from to Nothing Just is dynamic varying from the previous level to Nothing Nothing is dynamic varying from the previous level to the next For levels we use for mp for mf and add or remove one for each level is an unspecified middle level dynamic",
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "DynamicsL",
          "package": "music-dynamics-literal",
          "partial": "Dynamics",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#t:DynamicsL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "IsDynamics",
          "package": "music-dynamics-literal",
          "source": "src/Music-Dynamics-Literal.html#IsDynamics",
          "type": "class"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "IsDynamics",
          "package": "music-dynamics-literal",
          "partial": "Is Dynamics",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#t:IsDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "DynamicsL",
          "package": "music-dynamics-literal",
          "signature": "DynamicsL",
          "source": "src/Music-Dynamics-Literal.html#DynamicsL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "DynamicsL",
          "package": "music-dynamics-literal",
          "partial": "Dynamics",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:DynamicsL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "_f",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#_f",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "_f",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:_f"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "_p",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#_p",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "_p",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "ff",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#ff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "ff",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:ff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "fff",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#fff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "fff",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:fff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "ffff",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#ffff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "ffff",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:ffff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "fffff",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#fffff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "fffff",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:fffff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "ffffff",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#ffffff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "ffffff",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:ffffff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "fp",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#fp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "fp",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:fp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "fromDynamics",
          "package": "music-dynamics-literal",
          "signature": "DynamicsL -\u003e a",
          "source": "src/Music-Dynamics-Literal.html#fromDynamics",
          "type": "method"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "fromDynamics",
          "normalized": "DynamicsL-\u003ea",
          "package": "music-dynamics-literal",
          "partial": "Dynamics",
          "signature": "DynamicsL-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:fromDynamics"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "fz",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#fz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "fz",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:fz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "getDynamicsL",
          "package": "music-dynamics-literal",
          "signature": "(Maybe Double, Maybe Double)",
          "source": "src/Music-Dynamics-Literal.html#DynamicsL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "getDynamicsL",
          "normalized": "(Maybe Double,Maybe Double)",
          "package": "music-dynamics-literal",
          "partial": "Dynamics",
          "signature": "(Maybe Double,Maybe Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:getDynamicsL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "mf",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#mf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "mf",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:mf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "mp",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#mp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "mp",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:mp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "pp",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#pp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "pp",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "ppp",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#ppp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "ppp",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:ppp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "pppp",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#pppp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "pppp",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:pppp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "ppppp",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#ppppp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "ppppp",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:ppppp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "pppppp",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#pppppp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "pppppp",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:pppppp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "rfz",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#rfz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "rfz",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:rfz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "sffz",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#sffz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "sffz",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:sffz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Music.Dynamics.Literal",
          "name": "sfz",
          "package": "music-dynamics-literal",
          "signature": "a",
          "source": "src/Music-Dynamics-Literal.html#sfz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Music Dynamics Literal",
          "module": "Music.Dynamics.Literal",
          "name": "sfz",
          "package": "music-dynamics-literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/music-dynamics-literal/docs/Music-Dynamics-Literal.html#v:sfz"
      }
    }
  ]
]