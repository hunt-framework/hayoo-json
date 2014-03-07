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
        "word": "quick-generator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Testing.QuickGenerator",
          "name": "QuickGenerator",
          "package": "quick-generator",
          "source": "src/Testing-QuickGenerator.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Testing QuickGenerator",
          "module": "Testing.QuickGenerator",
          "name": "QuickGenerator",
          "package": "quick-generator",
          "partial": "Quick Generator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e sample $ ['a'..'z'] ??* (0,2) ?* (3,3)\n   [\"zc\",\"jf\",\"gwgob\",\"uc\",\"rll\",\"jnxjjr\",\"bycd\",\"s\",\"nja\",\"cm\",\"tu\"]\n\u003c/pre\u003e",
          "module": "Testing.QuickGenerator",
          "name": "(?*)",
          "package": "quick-generator",
          "signature": "Gen [a] -\u003e (Int, Int) -\u003e Gen [a]",
          "source": "src/Testing-QuickGenerator.html#%3F%2A",
          "type": "function"
        },
        "index": {
          "description": "sample zc jf gwgob uc rll jnxjjr bycd nja cm tu",
          "hierarchy": "Testing QuickGenerator",
          "module": "Testing.QuickGenerator",
          "name": "(?*) ?*",
          "normalized": "Gen[a]-\u003e(Int,Int)-\u003eGen[a]",
          "package": "quick-generator",
          "signature": "Gen[a]-\u003e(Int,Int)-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:-63--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e sample $ \"abcd\" ??* (0,2)\n  [\"\",\"da\",\"\",\"\",\"c\",\"bc\",\"d\",\"d\",\"\",\"ab\",\"c\"]\n\u003c/pre\u003e",
          "module": "Testing.QuickGenerator",
          "name": "(??*)",
          "package": "quick-generator",
          "signature": "[a] -\u003e (Int, Int) -\u003e Gen [a]",
          "source": "src/Testing-QuickGenerator.html#%3F%3F%2A",
          "type": "function"
        },
        "index": {
          "description": "sample abcd da bc ab",
          "hierarchy": "Testing QuickGenerator",
          "module": "Testing.QuickGenerator",
          "name": "(??*) ??*",
          "normalized": "[a]-\u003e(Int,Int)-\u003eGen[a]",
          "package": "quick-generator",
          "signature": "[a]-\u003e(Int,Int)-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:-63--63--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOr .\n\u003c/p\u003e",
          "module": "Testing.QuickGenerator",
          "name": "(.|)",
          "package": "quick-generator",
          "signature": "Gen a -\u003e Gen a -\u003e Gen a",
          "source": "src/Testing-QuickGenerator.html#.%7C",
          "type": "function"
        },
        "index": {
          "description": "Or",
          "hierarchy": "Testing QuickGenerator",
          "module": "Testing.QuickGenerator",
          "name": "(.|) .|",
          "normalized": "Gen a-\u003eGen a-\u003eGen a",
          "package": "quick-generator",
          "signature": "Gen a-\u003eGen a-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:.-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatetion.\n\u003c/p\u003e",
          "module": "Testing.QuickGenerator",
          "name": "(.++)",
          "package": "quick-generator",
          "signature": "Gen [a] -\u003e Gen [a] -\u003e Gen [a]",
          "source": "src/Testing-QuickGenerator.html#.%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Concatetion",
          "hierarchy": "Testing QuickGenerator",
          "module": "Testing.QuickGenerator",
          "name": "(.++) .++",
          "normalized": "Gen[a]-\u003eGen[a]-\u003eGen[a]",
          "package": "quick-generator",
          "signature": "Gen[a]-\u003eGen[a]-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:.-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCastom \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e el xs =  (\\x -\u003e [x]) `fmap` elements xs   \n\u003c/pre\u003e",
          "module": "Testing.QuickGenerator",
          "name": "el",
          "package": "quick-generator",
          "signature": "[a] -\u003e Gen [a]",
          "source": "src/Testing-QuickGenerator.html#el",
          "type": "function"
        },
        "index": {
          "description": "Castom elements el xs fmap elements xs",
          "hierarchy": "Testing QuickGenerator",
          "module": "Testing.QuickGenerator",
          "name": "el",
          "normalized": "[a]-\u003eGen[a]",
          "package": "quick-generator",
          "signature": "[a]-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:el"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003erepeatWithInter  g i (min, max)\u003c/code\u003e\n   repeat \u003ccode\u003eg\u003c/code\u003e with inset \u003ccode\u003ei\u003c/code\u003e from \u003ccode\u003emin\u003c/code\u003e to \u003ccode\u003emax\u003c/code\u003e times.\n\u003c/p\u003e",
          "module": "Testing.QuickGenerator",
          "name": "repeatWithInter",
          "package": "quick-generator",
          "signature": "Gen [a] -\u003e Gen [a] -\u003e (Int, Int) -\u003e Gen [a]",
          "source": "src/Testing-QuickGenerator.html#repeatWithInter",
          "type": "function"
        },
        "index": {
          "description": "repeatWithInter min max repeat with inset from min to max times",
          "hierarchy": "Testing QuickGenerator",
          "module": "Testing.QuickGenerator",
          "name": "repeatWithInter",
          "normalized": "Gen[a]-\u003eGen[a]-\u003e(Int,Int)-\u003eGen[a]",
          "package": "quick-generator",
          "partial": "With Inter",
          "signature": "Gen[a]-\u003eGen[a]-\u003e(Int,Int)-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:repeatWithInter"
      }
    }
  ]
]