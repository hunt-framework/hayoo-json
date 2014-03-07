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
        "word": "Coadjute"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCoadjute is a generic build tool, intended as an easier to use and more\n portable (in the sense that implementations don't differ) replacement for\n make. It's not tailored toward any particular language, and is not meant to\n replace tools which target a specific environment.\n\u003c/p\u003e\u003cp\u003eAn example of simple usage:\n\u003c/p\u003e\u003cpre\u003e import Coadjute\n import System.Directory\n\n main = coadjute $ do\n    rule' \"Copy foo from src to obj\"\n          (\\[s] t -\u003e copyFile s t)\n          (sourceDatum' ((\"obj\"++) . drop 3) [\"src/foo\"])\n\u003c/pre\u003e\u003cp\u003eBy convention, this file should be called \u003cem\u003eAdjutant.hs\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eCompiled and run, it would copy \u003ccode\u003esrc/foo\u003c/code\u003e to \u003ccode\u003eobj/foo\u003c/code\u003e whenever \u003ccode\u003esrc/foo\u003c/code\u003e\n is older than \u003ccode\u003eobj/foo\u003c/code\u003e. With \u003ccode\u003e-d\u003c/code\u003e or \u003ccode\u003e--use-db\u003c/code\u003e passed, it would hash\n (currently MD5) \u003ccode\u003esrc/foo\u003c/code\u003e, using that instead of modification time data to\n decide whether to run the \u003ccode\u003ecopyFile\u003c/code\u003e or not.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Coadjute",
          "name": "Coadjute",
          "package": "Coadjute",
          "source": "src/Coadjute.html",
          "type": "module"
        },
        "index": {
          "description": "Coadjute is generic build tool intended as an easier to use and more portable in the sense that implementations don differ replacement for make It not tailored toward any particular language and is not meant to replace tools which target specific environment An example of simple usage import Coadjute import System.Directory main coadjute do rule Copy foo from src to obj copyFile sourceDatum obj drop src foo By convention this file should be called Adjutant.hs Compiled and run it would copy src foo to obj foo whenever src foo is older than obj foo With or use-db passed it would hash currently MD5 src foo using that instead of modification time data to decide whether to run the copyFile or not",
          "hierarchy": "Coadjute",
          "module": "Coadjute",
          "name": "Coadjute",
          "package": "Coadjute",
          "partial": "Coadjute",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoadjute is the main monad you'll be working in. You can use the \u003ccode\u003e\u003ca\u003erule\u003c/a\u003e\u003c/code\u003e\n family of functions to add rules whilst within this monad, and you can have\n a look at what arguments were given to you with \u003ccode\u003e\u003ca\u003egetUserArgs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor your convenience, a \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e instance is provided.\n\u003c/p\u003e",
          "module": "Coadjute",
          "name": "Coadjute",
          "package": "Coadjute",
          "source": "src/Coadjute-Rule.html#Coadjute",
          "type": "data"
        },
        "index": {
          "description": "Coadjute is the main monad you ll be working in You can use the rule family of functions to add rules whilst within this monad and you can have look at what arguments were given to you with getUserArgs For your convenience MonadIO instance is provided",
          "hierarchy": "Coadjute",
          "module": "Coadjute",
          "name": "Coadjute",
          "package": "Coadjute",
          "partial": "Coadjute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#t:Coadjute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Coadjute",
          "name": "Source",
          "package": "Coadjute",
          "source": "src/Coadjute-Task.html#Source",
          "type": "type"
        },
        "index": {
          "hierarchy": "Coadjute",
          "module": "Coadjute",
          "name": "Source",
          "package": "Coadjute",
          "partial": "Source",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Coadjute",
          "name": "Target",
          "package": "Coadjute",
          "source": "src/Coadjute-Task.html#Target",
          "type": "type"
        },
        "index": {
          "hierarchy": "Coadjute",
          "module": "Coadjute",
          "name": "Target",
          "package": "Coadjute",
          "partial": "Target",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#t:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Coadjute",
          "name": "coadjute",
          "package": "Coadjute",
          "signature": "Coadjute a -\u003e IO a",
          "source": "src/Coadjute-Main.html#coadjute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Coadjute",
          "module": "Coadjute",
          "name": "coadjute",
          "normalized": "Coadjute a-\u003eIO a",
          "package": "Coadjute",
          "signature": "Coadjute a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:coadjute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou should use this instead of \u003ccode\u003eSystem.Environment.getArgs\u003c/code\u003e, to let\n Coadjute handle its own command line arguments first.\n\u003c/p\u003e",
          "module": "Coadjute",
          "name": "getUserArgs",
          "package": "Coadjute",
          "signature": "Coadjute [String]",
          "source": "src/Coadjute-Rule.html#getUserArgs",
          "type": "function"
        },
        "index": {
          "description": "You should use this instead of System.Environment.getArgs to let Coadjute handle its own command line arguments first",
          "hierarchy": "Coadjute",
          "module": "Coadjute",
          "name": "getUserArgs",
          "normalized": "Coadjute[String]",
          "package": "Coadjute",
          "partial": "User Args",
          "signature": "Coadjute[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:getUserArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rule for building targets individually.\n\u003c/p\u003e",
          "module": "Coadjute",
          "name": "rule",
          "package": "Coadjute",
          "signature": "String -\u003e [String] -\u003e ([Source] -\u003e Target -\u003e IO ()) -\u003e [([Source], Target)] -\u003e Coadjute ()",
          "source": "src/Coadjute-Rule.html#rule",
          "type": "function"
        },
        "index": {
          "description": "rule for building targets individually",
          "hierarchy": "Coadjute",
          "module": "Coadjute",
          "name": "rule",
          "normalized": "String-\u003e[String]-\u003e([Source]-\u003eTarget-\u003eIO())-\u003e[([Source],Target)]-\u003eCoadjute()",
          "package": "Coadjute",
          "signature": "String-\u003e[String]-\u003e([Source]-\u003eTarget-\u003eIO())-\u003e[([Source],Target)]-\u003eCoadjute()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e rule' = flip rule []\n\u003c/pre\u003e",
          "module": "Coadjute",
          "name": "rule'",
          "package": "Coadjute",
          "signature": "String -\u003e ([Source] -\u003e Target -\u003e IO ()) -\u003e [([Source], Target)] -\u003e Coadjute ()",
          "source": "src/Coadjute-Rule.html#rule%27",
          "type": "function"
        },
        "index": {
          "description": "rule flip rule",
          "hierarchy": "Coadjute",
          "module": "Coadjute",
          "name": "rule'",
          "normalized": "String-\u003e([Source]-\u003eTarget-\u003eIO())-\u003e[([Source],Target)]-\u003eCoadjute()",
          "package": "Coadjute",
          "signature": "String-\u003e([Source]-\u003eTarget-\u003eIO())-\u003e[([Source],Target)]-\u003eCoadjute()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:rule-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rule for building multiple targets at once.\n\u003c/p\u003e",
          "module": "Coadjute",
          "name": "ruleM",
          "package": "Coadjute",
          "signature": "String -\u003e [String] -\u003e ([Source] -\u003e [Target] -\u003e IO ()) -\u003e [([Source], [Target])] -\u003e Coadjute ()",
          "source": "src/Coadjute-Rule.html#ruleM",
          "type": "function"
        },
        "index": {
          "description": "rule for building multiple targets at once",
          "hierarchy": "Coadjute",
          "module": "Coadjute",
          "name": "ruleM",
          "normalized": "String-\u003e[String]-\u003e([Source]-\u003e[Target]-\u003eIO())-\u003e[([Source],[Target])]-\u003eCoadjute()",
          "package": "Coadjute",
          "signature": "String-\u003e[String]-\u003e([Source]-\u003e[Target]-\u003eIO())-\u003e[([Source],[Target])]-\u003eCoadjute()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:ruleM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e ruleM' = flip ruleM []\n\u003c/pre\u003e",
          "module": "Coadjute",
          "name": "ruleM'",
          "package": "Coadjute",
          "signature": "String -\u003e ([Source] -\u003e [Target] -\u003e IO ()) -\u003e [([Source], [Target])] -\u003e Coadjute ()",
          "source": "src/Coadjute-Rule.html#ruleM%27",
          "type": "function"
        },
        "index": {
          "description": "ruleM flip ruleM",
          "hierarchy": "Coadjute",
          "module": "Coadjute",
          "name": "ruleM'",
          "normalized": "String-\u003e([Source]-\u003e[Target]-\u003eIO())-\u003e[([Source],[Target])]-\u003eCoadjute()",
          "package": "Coadjute",
          "partial": "M'",
          "signature": "String-\u003e([Source]-\u003e[Target]-\u003eIO())-\u003e[([Source],[Target])]-\u003eCoadjute()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Coadjute/docs/Coadjute.html#v:ruleM-39-"
      }
    }
  ]
]