[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCoadjute is a generic build tool, intended as an easier to use and more\n portable (in the sense that implementations don't differ) replacement for\n make. It's not tailored toward any particular language, and is not meant to\n replace tools which target a specific environment.\n\u003c/p\u003e\u003cp\u003eAn example of simple usage:\n\u003c/p\u003e\u003cpre\u003e import Coadjute\n import System.Directory\n\n main = coadjute $ do\n    rule' \"Copy foo from src to obj\"\n          (\\[s] t -\u003e copyFile s t)\n          (sourceDatum' ((\"obj\"++) . drop 3) [\"src/foo\"])\n\u003c/pre\u003e\u003cp\u003eBy convention, this file should be called \u003cem\u003eAdjutant.hs\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eCompiled and run, it would copy \u003ccode\u003esrc/foo\u003c/code\u003e to \u003ccode\u003eobj/foo\u003c/code\u003e whenever \u003ccode\u003esrc/foo\u003c/code\u003e\n is older than \u003ccode\u003eobj/foo\u003c/code\u003e. With \u003ccode\u003e-d\u003c/code\u003e or \u003ccode\u003e--use-db\u003c/code\u003e passed, it would hash\n (currently MD5) \u003ccode\u003esrc/foo\u003c/code\u003e, using that instead of modification time data to\n decide whether to run the \u003ccode\u003ecopyFile\u003c/code\u003e or not.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Coadjute",
        "fct-package": "Coadjute",
        "fct-signature": "module",
        "fct-source": "src/Coadjute.html",
        "fct-type": "module",
        "title": "Coadjute"
      },
      "index": {
        "description": "Coadjute is generic build tool intended as an easier to use and more portable in the sense that implementations don differ replacement for make It not tailored toward any particular language and is not meant to replace tools which target specific environment An example of simple usage import Coadjute import System.Directory main coadjute do rule Copy foo from src to obj copyFile sourceDatum obj drop src foo By convention this file should be called Adjutant.hs Compiled and run it would copy src foo to obj foo whenever src foo is older than obj foo With or use-db passed it would hash currently MD5 src foo using that instead of modification time data to decide whether to run the copyFile or not",
        "hierarchy": "Coadjute",
        "module": "Coadjute",
        "name": "Coadjute",
        "normalized": "",
        "package": "Coadjute",
        "partial": "Coadjute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#t:Coadjute",
      "description": {
        "fct-descr": "\u003cp\u003eCoadjute is the main monad you'll be working in. You can use the \u003ccode\u003e\u003ca\u003erule\u003c/a\u003e\u003c/code\u003e\n family of functions to add rules whilst within this monad, and you can have\n a look at what arguments were given to you with \u003ccode\u003e\u003ca\u003egetUserArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor your convenience, a \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e instance is provided.\n\u003c/p\u003e",
        "fct-module": "Coadjute",
        "fct-package": "Coadjute",
        "fct-signature": "data",
        "fct-source": "src/Coadjute-Rule.html#Coadjute",
        "fct-type": "data",
        "title": "Coadjute"
      },
      "index": {
        "description": "Coadjute is the main monad you ll be working in You can use the rule family of functions to add rules whilst within this monad and you can have look at what arguments were given to you with getUserArgs For your convenience MonadIO instance is provided",
        "hierarchy": "Coadjute",
        "module": "Coadjute",
        "name": "Coadjute",
        "normalized": "",
        "package": "Coadjute",
        "partial": "Coadjute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#t:Source",
      "description": {
        "fct-module": "Coadjute",
        "fct-package": "Coadjute",
        "fct-signature": "type",
        "fct-source": "src/Coadjute-Task.html#Source",
        "fct-type": "type",
        "title": "Source"
      },
      "index": {
        "description": "",
        "hierarchy": "Coadjute",
        "module": "Coadjute",
        "name": "Source",
        "normalized": "",
        "package": "Coadjute",
        "partial": "Source",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#t:Target",
      "description": {
        "fct-module": "Coadjute",
        "fct-package": "Coadjute",
        "fct-signature": "type",
        "fct-source": "src/Coadjute-Task.html#Target",
        "fct-type": "type",
        "title": "Target"
      },
      "index": {
        "description": "",
        "hierarchy": "Coadjute",
        "module": "Coadjute",
        "name": "Target",
        "normalized": "",
        "package": "Coadjute",
        "partial": "Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:coadjute",
      "description": {
        "fct-module": "Coadjute",
        "fct-package": "Coadjute",
        "fct-signature": "Coadjute a -\u003e IO a",
        "fct-source": "src/Coadjute-Main.html#coadjute",
        "fct-type": "function",
        "title": "coadjute"
      },
      "index": {
        "description": "",
        "hierarchy": "Coadjute",
        "module": "Coadjute",
        "name": "coadjute",
        "normalized": "Coadjute a-\u003eIO a",
        "package": "Coadjute",
        "partial": "",
        "signature": "Coadjute a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:getUserArgs",
      "description": {
        "fct-descr": "\u003cp\u003eYou should use this instead of \u003ccode\u003eSystem.Environment.getArgs\u003c/code\u003e, to let\n Coadjute handle its own command line arguments first.\n\u003c/p\u003e",
        "fct-module": "Coadjute",
        "fct-package": "Coadjute",
        "fct-signature": "Coadjute [String]",
        "fct-source": "src/Coadjute-Rule.html#getUserArgs",
        "fct-type": "function",
        "title": "getUserArgs"
      },
      "index": {
        "description": "You should use this instead of System.Environment.getArgs to let Coadjute handle its own command line arguments first",
        "hierarchy": "Coadjute",
        "module": "Coadjute",
        "name": "getUserArgs",
        "normalized": "Coadjute[String]",
        "package": "Coadjute",
        "partial": "User Args",
        "signature": "Coadjute[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:rule",
      "description": {
        "fct-descr": "\u003cp\u003eA rule for building targets individually.\n\u003c/p\u003e",
        "fct-module": "Coadjute",
        "fct-package": "Coadjute",
        "fct-signature": "String -\u003e [String] -\u003e ([Source] -\u003e Target -\u003e IO ()) -\u003e [([Source], Target)] -\u003e Coadjute ()",
        "fct-source": "src/Coadjute-Rule.html#rule",
        "fct-type": "function",
        "title": "rule"
      },
      "index": {
        "description": "rule for building targets individually",
        "hierarchy": "Coadjute",
        "module": "Coadjute",
        "name": "rule",
        "normalized": "String-\u003e[String]-\u003e([Source]-\u003eTarget-\u003eIO())-\u003e[([Source],Target)]-\u003eCoadjute()",
        "package": "Coadjute",
        "partial": "",
        "signature": "String-\u003e[String]-\u003e([Source]-\u003eTarget-\u003eIO())-\u003e[([Source],Target)]-\u003eCoadjute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:rule-39-",
      "description": {
        "fct-descr": "\u003cpre\u003e rule' = flip rule []\n\u003c/pre\u003e",
        "fct-module": "Coadjute",
        "fct-package": "Coadjute",
        "fct-signature": "String -\u003e ([Source] -\u003e Target -\u003e IO ()) -\u003e [([Source], Target)] -\u003e Coadjute ()",
        "fct-source": "src/Coadjute-Rule.html#rule%27",
        "fct-type": "function",
        "title": "rule'"
      },
      "index": {
        "description": "rule flip rule",
        "hierarchy": "Coadjute",
        "module": "Coadjute",
        "name": "rule'",
        "normalized": "String-\u003e([Source]-\u003eTarget-\u003eIO())-\u003e[([Source],Target)]-\u003eCoadjute()",
        "package": "Coadjute",
        "partial": "",
        "signature": "String-\u003e([Source]-\u003eTarget-\u003eIO())-\u003e[([Source],Target)]-\u003eCoadjute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:ruleM",
      "description": {
        "fct-descr": "\u003cp\u003eA rule for building multiple targets at once.\n\u003c/p\u003e",
        "fct-module": "Coadjute",
        "fct-package": "Coadjute",
        "fct-signature": "String -\u003e [String] -\u003e ([Source] -\u003e [Target] -\u003e IO ()) -\u003e [([Source], [Target])] -\u003e Coadjute ()",
        "fct-source": "src/Coadjute-Rule.html#ruleM",
        "fct-type": "function",
        "title": "ruleM"
      },
      "index": {
        "description": "rule for building multiple targets at once",
        "hierarchy": "Coadjute",
        "module": "Coadjute",
        "name": "ruleM",
        "normalized": "String-\u003e[String]-\u003e([Source]-\u003e[Target]-\u003eIO())-\u003e[([Source],[Target])]-\u003eCoadjute()",
        "package": "Coadjute",
        "partial": "",
        "signature": "String-\u003e[String]-\u003e([Source]-\u003e[Target]-\u003eIO())-\u003e[([Source],[Target])]-\u003eCoadjute()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:ruleM-39-",
      "description": {
        "fct-descr": "\u003cpre\u003e ruleM' = flip ruleM []\n\u003c/pre\u003e",
        "fct-module": "Coadjute",
        "fct-package": "Coadjute",
        "fct-signature": "String -\u003e ([Source] -\u003e [Target] -\u003e IO ()) -\u003e [([Source], [Target])] -\u003e Coadjute ()",
        "fct-source": "src/Coadjute-Rule.html#ruleM%27",
        "fct-type": "function",
        "title": "ruleM'"
      },
      "index": {
        "description": "ruleM flip ruleM",
        "hierarchy": "Coadjute",
        "module": "Coadjute",
        "name": "ruleM'",
        "normalized": "String-\u003e([Source]-\u003e[Target]-\u003eIO())-\u003e[([Source],[Target])]-\u003eCoadjute()",
        "package": "Coadjute",
        "partial": "M'",
        "signature": "String-\u003e([Source]-\u003e[Target]-\u003eIO())-\u003e[([Source],[Target])]-\u003eCoadjute()"
      }
    }
  }
]