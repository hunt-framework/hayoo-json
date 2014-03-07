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
        "word": "optional"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType-classes to model optional function arguments. Use with care.\n\u003c/p\u003e\u003cp\u003eLots of helpful type-inference is lost in using this technique.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Args.Optional",
          "name": "Optional",
          "package": "optional",
          "source": "src/System-Args-Optional.html",
          "type": "module"
        },
        "index": {
          "description": "Type-classes to model optional function arguments Use with care Lots of helpful type-inference is lost in using this technique",
          "hierarchy": "System Args Optional",
          "module": "System.Args.Optional",
          "name": "Optional",
          "package": "optional",
          "partial": "Optional",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/optional/docs/System-Args-Optional.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne optional argument.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet timesTwo :: Optional1 Integer Integer x =\u003e x; timesTwo = optional1 (*2) 7 in timesTwo :: Integer\n\u003c/code\u003e\u003c/strong\u003e14\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet timesTwo :: Optional1 Integer Integer x =\u003e x; timesTwo = optional1 (*2) 7 in timesTwo (12 :: Integer) :: Integer\n\u003c/code\u003e\u003c/strong\u003e24\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet reverseI :: Optional1 [Integer] [Integer] x =\u003e x; reverseI = optional1 reverse ([] :: [Integer]) in reverseI ([1,2,3] :: [Integer]) :: [Integer]\n\u003c/code\u003e\u003c/strong\u003e[3,2,1]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet reverseI :: Optional1 [Integer] [Integer] x =\u003e x; reverseI = optional1 reverse ([] :: [Integer]) in reverseI :: [Integer]\n\u003c/code\u003e\u003c/strong\u003e[]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet reverseI :: Optional1 [Integer] [Integer] x =\u003e x; reverseI = optional1 reverse [99, 98, 97] in reverseI :: [Integer]\n\u003c/code\u003e\u003c/strong\u003e[97,98,99]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet filterI :: Optional1 (Integer -\u003e Bool) [Integer] x =\u003e x; filterI = optional1 (\\p -\u003e filter p [1..20]) (even :: Integer -\u003e Bool) in filterI :: [Integer]\n\u003c/code\u003e\u003c/strong\u003e[2,4,6,8,10,12,14,16,18,20]\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet filterI :: Optional1 (Integer -\u003e Bool) [Integer] x =\u003e x; filterI = optional1 (\\p -\u003e filter p [1..20]) (even :: Integer -\u003e Bool) in filterI (odd :: Integer -\u003e Bool) :: [Integer]\n\u003c/code\u003e\u003c/strong\u003e[1,3,5,7,9,11,13,15,17,19]\n\u003c/pre\u003e",
          "module": "System.Args.Optional",
          "name": "Optional1",
          "package": "optional",
          "source": "src/System-Args-Optional.html#Optional1",
          "type": "class"
        },
        "index": {
          "description": "One optional argument let timesTwo Optional1 Integer Integer timesTwo optional1 in timesTwo Integer let timesTwo Optional1 Integer Integer timesTwo optional1 in timesTwo Integer Integer let reverseI Optional1 Integer Integer reverseI optional1 reverse Integer in reverseI Integer Integer let reverseI Optional1 Integer Integer reverseI optional1 reverse Integer in reverseI Integer let reverseI Optional1 Integer Integer reverseI optional1 reverse in reverseI Integer let filterI Optional1 Integer Bool Integer filterI optional1 filter even Integer Bool in filterI Integer let filterI Optional1 Integer Bool Integer filterI optional1 filter even Integer Bool in filterI odd Integer Bool Integer",
          "hierarchy": "System Args Optional",
          "module": "System.Args.Optional",
          "name": "Optional1",
          "package": "optional",
          "partial": "Optional",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/optional/docs/System-Args-Optional.html#t:Optional1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo optional arguments, in the order of \u003ccode\u003ea\u003c/code\u003e then \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet append :: Optional2 String String String x =\u003e x; append = optional2 (++) \"abc\" \"def\" in append :: String\n\u003c/code\u003e\u003c/strong\u003e\"abcdef\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet append :: Optional2 String String String x =\u003e x; append = optional2 (++) \"abc\" \"def\" in append \"xyz\" :: String\n\u003c/code\u003e\u003c/strong\u003e\"xyzdef\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet append :: Optional2 String String String x =\u003e x; append = optional2 (++) \"abc\" \"def\" in append \"uvw\" :: String\n\u003c/code\u003e\u003c/strong\u003e\"uvwdef\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet append :: Optional2 String String String x =\u003e x; append = optional2 (++) \"abc\" \"def\" in append \"uvw\" \"xyz\" :: String\n\u003c/code\u003e\u003c/strong\u003e\"uvwxyz\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet filterS :: Optional2 (Char -\u003e Bool) String String x =\u003e x; filterS = optional2 filter isUpper \"AbCdEfGhI\" in filterS :: String\n\u003c/code\u003e\u003c/strong\u003e\"ACEGI\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet filterS :: Optional2 (Char -\u003e Bool) String String x =\u003e x; filterS = optional2 filter isUpper \"AbCdEfGhI\" in filterS isLower :: String\n\u003c/code\u003e\u003c/strong\u003e\"bdfh\"\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet filterS :: Optional2 (Char -\u003e Bool) String String x =\u003e x; filterS = optional2 filter isUpper \"AbCdEfGhI\" in filterS isLower \"tUvWxYz\" :: String\n\u003c/code\u003e\u003c/strong\u003e\"tvxz\"\n\u003c/pre\u003e",
          "module": "System.Args.Optional",
          "name": "Optional2",
          "package": "optional",
          "source": "src/System-Args-Optional.html#Optional2",
          "type": "class"
        },
        "index": {
          "description": "Two optional arguments in the order of then let append Optional2 String String String append optional2 abc def in append String abcdef let append Optional2 String String String append optional2 abc def in append xyz String xyzdef let append Optional2 String String String append optional2 abc def in append uvw String uvwdef let append Optional2 String String String append optional2 abc def in append uvw xyz String uvwxyz let filterS Optional2 Char Bool String String filterS optional2 filter isUpper AbCdEfGhI in filterS String ACEGI let filterS Optional2 Char Bool String String filterS optional2 filter isUpper AbCdEfGhI in filterS isLower String bdfh let filterS Optional2 Char Bool String String filterS optional2 filter isUpper AbCdEfGhI in filterS isLower tUvWxYz String tvxz",
          "hierarchy": "System Args Optional",
          "module": "System.Args.Optional",
          "name": "Optional2",
          "package": "optional",
          "partial": "Optional",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/optional/docs/System-Args-Optional.html#t:Optional2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Args.Optional",
          "name": "optional1",
          "package": "optional",
          "signature": "(a -\u003e b) -\u003e a -\u003e x",
          "source": "src/System-Args-Optional.html#optional1",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Args Optional",
          "module": "System.Args.Optional",
          "name": "optional1",
          "normalized": "(a-\u003eb)-\u003ea-\u003ec",
          "package": "optional",
          "signature": "(a-\u003eb)-\u003ea-\u003ex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/optional/docs/System-Args-Optional.html#v:optional1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Args.Optional",
          "name": "optional2",
          "package": "optional",
          "signature": "(a -\u003e b -\u003e c) -\u003e a -\u003e b -\u003e x",
          "source": "src/System-Args-Optional.html#optional2",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Args Optional",
          "module": "System.Args.Optional",
          "name": "optional2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ed",
          "package": "optional",
          "signature": "(a-\u003eb-\u003ec)-\u003ea-\u003eb-\u003ex",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/optional/docs/System-Args-Optional.html#v:optional2"
      }
    }
  ]
]