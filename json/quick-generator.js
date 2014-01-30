[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#",
      "description": {
        "fct-module": "Testing.QuickGenerator",
        "fct-package": "quick-generator",
        "fct-signature": "module",
        "fct-source": "src/Testing-QuickGenerator.html",
        "fct-type": "module",
        "title": "QuickGenerator"
      },
      "index": {
        "description": "",
        "hierarchy": "Testing QuickGenerator",
        "module": "Testing.QuickGenerator",
        "name": "QuickGenerator",
        "normalized": "",
        "package": "quick-generator",
        "partial": "Quick Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:-63--42-",
      "description": {
        "fct-descr": "\u003cpre\u003e sample $ ['a'..'z'] ??* (0,2) ?* (3,3)\n   [\"zc\",\"jf\",\"gwgob\",\"uc\",\"rll\",\"jnxjjr\",\"bycd\",\"s\",\"nja\",\"cm\",\"tu\"]\n\u003c/pre\u003e",
        "fct-module": "Testing.QuickGenerator",
        "fct-package": "quick-generator",
        "fct-signature": "Gen [a] -\u003e (Int, Int) -\u003e Gen [a]",
        "fct-source": "src/Testing-QuickGenerator.html#%3F%2A",
        "fct-type": "function",
        "title": "(?*)"
      },
      "index": {
        "description": "sample zc jf gwgob uc rll jnxjjr bycd nja cm tu",
        "hierarchy": "Testing QuickGenerator",
        "module": "Testing.QuickGenerator",
        "name": "(?*) ?*",
        "normalized": "Gen[a]-\u003e(Int,Int)-\u003eGen[a]",
        "package": "quick-generator",
        "partial": "",
        "signature": "Gen[a]-\u003e(Int,Int)-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:-63--63--42-",
      "description": {
        "fct-descr": "\u003cpre\u003e sample $ \"abcd\" ??* (0,2)\n  [\"\",\"da\",\"\",\"\",\"c\",\"bc\",\"d\",\"d\",\"\",\"ab\",\"c\"]\n\u003c/pre\u003e",
        "fct-module": "Testing.QuickGenerator",
        "fct-package": "quick-generator",
        "fct-signature": "[a] -\u003e (Int, Int) -\u003e Gen [a]",
        "fct-source": "src/Testing-QuickGenerator.html#%3F%3F%2A",
        "fct-type": "function",
        "title": "(??*)"
      },
      "index": {
        "description": "sample abcd da bc ab",
        "hierarchy": "Testing QuickGenerator",
        "module": "Testing.QuickGenerator",
        "name": "(??*) ??*",
        "normalized": "[a]-\u003e(Int,Int)-\u003eGen[a]",
        "package": "quick-generator",
        "partial": "",
        "signature": "[a]-\u003e(Int,Int)-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:.-124-",
      "description": {
        "fct-descr": "\u003cp\u003eOr .\n\u003c/p\u003e",
        "fct-module": "Testing.QuickGenerator",
        "fct-package": "quick-generator",
        "fct-signature": "Gen a -\u003e Gen a -\u003e Gen a",
        "fct-source": "src/Testing-QuickGenerator.html#.%7C",
        "fct-type": "function",
        "title": "(.|)"
      },
      "index": {
        "description": "Or",
        "hierarchy": "Testing QuickGenerator",
        "module": "Testing.QuickGenerator",
        "name": "(.|) .|",
        "normalized": "Gen a-\u003eGen a-\u003eGen a",
        "package": "quick-generator",
        "partial": "",
        "signature": "Gen a-\u003eGen a-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:.-43--43-",
      "description": {
        "fct-descr": "\u003cp\u003eConcatetion.\n\u003c/p\u003e",
        "fct-module": "Testing.QuickGenerator",
        "fct-package": "quick-generator",
        "fct-signature": "Gen [a] -\u003e Gen [a] -\u003e Gen [a]",
        "fct-source": "src/Testing-QuickGenerator.html#.%2B%2B",
        "fct-type": "function",
        "title": "(.++)"
      },
      "index": {
        "description": "Concatetion",
        "hierarchy": "Testing QuickGenerator",
        "module": "Testing.QuickGenerator",
        "name": "(.++) .++",
        "normalized": "Gen[a]-\u003eGen[a]-\u003eGen[a]",
        "package": "quick-generator",
        "partial": "",
        "signature": "Gen[a]-\u003eGen[a]-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:el",
      "description": {
        "fct-descr": "\u003cp\u003eCastom \u003ccode\u003e\u003ca\u003eelements\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e el xs =  (\\x -\u003e [x]) `fmap` elements xs   \n\u003c/pre\u003e",
        "fct-module": "Testing.QuickGenerator",
        "fct-package": "quick-generator",
        "fct-signature": "[a] -\u003e Gen [a]",
        "fct-source": "src/Testing-QuickGenerator.html#el",
        "fct-type": "function",
        "title": "el"
      },
      "index": {
        "description": "Castom elements el xs fmap elements xs",
        "hierarchy": "Testing QuickGenerator",
        "module": "Testing.QuickGenerator",
        "name": "el",
        "normalized": "[a]-\u003eGen[a]",
        "package": "quick-generator",
        "partial": "",
        "signature": "[a]-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quick-generator/docs/Testing-QuickGenerator.html#v:repeatWithInter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003erepeatWithInter  g i (min, max)\u003c/code\u003e\n   repeat \u003ccode\u003eg\u003c/code\u003e with inset \u003ccode\u003ei\u003c/code\u003e from \u003ccode\u003emin\u003c/code\u003e to \u003ccode\u003emax\u003c/code\u003e times.\n\u003c/p\u003e",
        "fct-module": "Testing.QuickGenerator",
        "fct-package": "quick-generator",
        "fct-signature": "Gen [a] -\u003e Gen [a] -\u003e (Int, Int) -\u003e Gen [a]",
        "fct-source": "src/Testing-QuickGenerator.html#repeatWithInter",
        "fct-type": "function",
        "title": "repeatWithInter"
      },
      "index": {
        "description": "repeatWithInter min max repeat with inset from min to max times",
        "hierarchy": "Testing QuickGenerator",
        "module": "Testing.QuickGenerator",
        "name": "repeatWithInter",
        "normalized": "Gen[a]-\u003eGen[a]-\u003e(Int,Int)-\u003eGen[a]",
        "package": "quick-generator",
        "partial": "With Inter",
        "signature": "Gen[a]-\u003eGen[a]-\u003e(Int,Int)-\u003eGen[a]"
      }
    }
  }
]