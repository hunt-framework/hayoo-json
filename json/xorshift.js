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
        "word": "xorshift"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a 32 bit Xorshift random generator. Use this if you\n   need a 32 bit random generator, usually \u003ccode\u003eXorshift\u003c/code\u003e itself is a good choice\n   for your platform. This generator has a period of 2^32-1 bits if\n   initialized with a value different from 0. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Random.Xorshift.Int32",
          "name": "Int32",
          "package": "xorshift",
          "source": "src/Random-Xorshift-Int32.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains bit Xorshift random generator Use this if you need bit random generator usually Xorshift itself is good choice for your platform This generator has period of bits if initialized with value different from",
          "hierarchy": "Random Xorshift Int32",
          "module": "Random.Xorshift.Int32",
          "name": "Int32",
          "package": "xorshift",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int32.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXorshift generator with 32 bits.\n   This Xorshift generator uses first a left shift, then a right shift and\n   again a left shift. It uses the parameters 13, 17 and 5. See the paper for\n   more details on how the parameters affect the generation of random numbers.\n\u003c/p\u003e\u003cp\u003eThe generator has a periode of 2^32-1, please notice that the\n   generator has to be initialized with a value different from 0, elseway all\n   future values will be zero as well.\n\u003c/p\u003e\u003cp\u003ePlease notice, that the function \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e is not implemented and will result\n   in a runtime error.\n\u003c/p\u003e",
          "module": "Random.Xorshift.Int32",
          "name": "Xorshift32",
          "package": "xorshift",
          "source": "src/Random-Xorshift-Int32.html#Xorshift32",
          "type": "newtype"
        },
        "index": {
          "description": "Xorshift generator with bits This Xorshift generator uses first left shift then right shift and again left shift It uses the parameters and See the paper for more details on how the parameters affect the generation of random numbers The generator has periode of please notice that the generator has to be initialized with value different from elseway all future values will be zero as well Please notice that the function split is not implemented and will result in runtime error",
          "hierarchy": "Random Xorshift Int32",
          "module": "Random.Xorshift.Int32",
          "name": "Xorshift32",
          "package": "xorshift",
          "partial": "Xorshift",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int32.html#t:Xorshift32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Random.Xorshift.Int32",
          "name": "Xorshift32",
          "package": "xorshift",
          "signature": "Xorshift32 Int32",
          "source": "src/Random-Xorshift-Int32.html#Xorshift32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Random Xorshift Int32",
          "module": "Random.Xorshift.Int32",
          "name": "Xorshift32",
          "package": "xorshift",
          "partial": "Xorshift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int32.html#v:Xorshift32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the raw contents of the random generator. This function is preferable\n   over direct usage of the constructor itself, as the internal representation\n   of the random generator may change in future releases.\n\u003c/p\u003e",
          "module": "Random.Xorshift.Int32",
          "name": "getInt32",
          "package": "xorshift",
          "signature": "Xorshift32 -\u003e Int32",
          "source": "src/Random-Xorshift-Int32.html#getInt32",
          "type": "function"
        },
        "index": {
          "description": "Get the raw contents of the random generator This function is preferable over direct usage of the constructor itself as the internal representation of the random generator may change in future releases",
          "hierarchy": "Random Xorshift Int32",
          "module": "Random.Xorshift.Int32",
          "name": "getInt32",
          "normalized": "Xorshift-\u003eInt",
          "package": "xorshift",
          "partial": "Int",
          "signature": "Xorshift-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int32.html#v:getInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new \u003ccode\u003e\u003ca\u003eXorshift32\u003c/a\u003e\u003c/code\u003e generator. This is essentially a wrapper around\n   the constructor.\n\u003c/p\u003e",
          "module": "Random.Xorshift.Int32",
          "name": "makeXorshift32",
          "package": "xorshift",
          "signature": "a -\u003e Xorshift32",
          "source": "src/Random-Xorshift-Int32.html#makeXorshift32",
          "type": "function"
        },
        "index": {
          "description": "Generate new Xorshift32 generator This is essentially wrapper around the constructor",
          "hierarchy": "Random Xorshift Int32",
          "module": "Random.Xorshift.Int32",
          "name": "makeXorshift32",
          "normalized": "a-\u003eXorshift",
          "package": "xorshift",
          "partial": "Xorshift",
          "signature": "a-\u003eXorshift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int32.html#v:makeXorshift32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a new Xorshift32 from the current time.\n\u003c/p\u003e",
          "module": "Random.Xorshift.Int32",
          "name": "newXorshift32",
          "package": "xorshift",
          "signature": "IO Xorshift32",
          "source": "src/Random-Xorshift-Int32.html#newXorshift32",
          "type": "function"
        },
        "index": {
          "description": "Generates new Xorshift32 from the current time",
          "hierarchy": "Random Xorshift Int32",
          "module": "Random.Xorshift.Int32",
          "name": "newXorshift32",
          "package": "xorshift",
          "partial": "Xorshift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int32.html#v:newXorshift32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a 64 bit Xorshift random generator. Use this if you\n   need a 64 bit random generator, usually \u003ccode\u003eXorshift\u003c/code\u003e itself is a good choice\n   for your platform. This generator has a period of 2^64-1 bits if\n   initialized with a value different from 0. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Random.Xorshift.Int64",
          "name": "Int64",
          "package": "xorshift",
          "source": "src/Random-Xorshift-Int64.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains bit Xorshift random generator Use this if you need bit random generator usually Xorshift itself is good choice for your platform This generator has period of bits if initialized with value different from",
          "hierarchy": "Random Xorshift Int64",
          "module": "Random.Xorshift.Int64",
          "name": "Int64",
          "package": "xorshift",
          "partial": "Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int64.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXorshift generator with 64 bits.\n   This Xorshift generator uses first a left shift, then a right shift and\n   again a left shift. It uses the parameters 13, 7 and 17. See the paper for\n   more details on how the parameters affect the generation of random numbers.\n\u003c/p\u003e\u003cp\u003eThe generator has a periode of 2^64-1, please notice that the\n   generator has to be initialized with a value different from 0, elseway all\n   future values will be zero as well.\n\u003c/p\u003e\u003cp\u003ePlease notice, that the function \u003ccode\u003e\u003ca\u003esplit\u003c/a\u003e\u003c/code\u003e is not implemented and will result\n   in a runtime error.\n\u003c/p\u003e",
          "module": "Random.Xorshift.Int64",
          "name": "Xorshift64",
          "package": "xorshift",
          "source": "src/Random-Xorshift-Int64.html#Xorshift64",
          "type": "newtype"
        },
        "index": {
          "description": "Xorshift generator with bits This Xorshift generator uses first left shift then right shift and again left shift It uses the parameters and See the paper for more details on how the parameters affect the generation of random numbers The generator has periode of please notice that the generator has to be initialized with value different from elseway all future values will be zero as well Please notice that the function split is not implemented and will result in runtime error",
          "hierarchy": "Random Xorshift Int64",
          "module": "Random.Xorshift.Int64",
          "name": "Xorshift64",
          "package": "xorshift",
          "partial": "Xorshift",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int64.html#t:Xorshift64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Random.Xorshift.Int64",
          "name": "Xorshift64",
          "package": "xorshift",
          "signature": "Xorshift64 Int64",
          "source": "src/Random-Xorshift-Int64.html#Xorshift64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Random Xorshift Int64",
          "module": "Random.Xorshift.Int64",
          "name": "Xorshift64",
          "package": "xorshift",
          "partial": "Xorshift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int64.html#v:Xorshift64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the raw contents of the random generator. This function is preferable\n   over direct usage of the constructor itself, as the internal representation\n   of the random generator may change in future releases.\n\u003c/p\u003e",
          "module": "Random.Xorshift.Int64",
          "name": "getInt64",
          "package": "xorshift",
          "signature": "Xorshift64 -\u003e Int64",
          "source": "src/Random-Xorshift-Int64.html#getInt64",
          "type": "function"
        },
        "index": {
          "description": "Get the raw contents of the random generator This function is preferable over direct usage of the constructor itself as the internal representation of the random generator may change in future releases",
          "hierarchy": "Random Xorshift Int64",
          "module": "Random.Xorshift.Int64",
          "name": "getInt64",
          "normalized": "Xorshift-\u003eInt",
          "package": "xorshift",
          "partial": "Int",
          "signature": "Xorshift-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int64.html#v:getInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new \u003ccode\u003e\u003ca\u003eXorshift64\u003c/a\u003e\u003c/code\u003e generator. This is essentially a wrapper around\n   the constructor.\n\u003c/p\u003e",
          "module": "Random.Xorshift.Int64",
          "name": "makeXorshift64",
          "package": "xorshift",
          "signature": "a -\u003e Xorshift64",
          "source": "src/Random-Xorshift-Int64.html#makeXorshift64",
          "type": "function"
        },
        "index": {
          "description": "Generate new Xorshift64 generator This is essentially wrapper around the constructor",
          "hierarchy": "Random Xorshift Int64",
          "module": "Random.Xorshift.Int64",
          "name": "makeXorshift64",
          "normalized": "a-\u003eXorshift",
          "package": "xorshift",
          "partial": "Xorshift",
          "signature": "a-\u003eXorshift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int64.html#v:makeXorshift64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a new Xorshift64 from the current time.\n\u003c/p\u003e",
          "module": "Random.Xorshift.Int64",
          "name": "newXorshift64",
          "package": "xorshift",
          "signature": "IO Xorshift64",
          "source": "src/Random-Xorshift-Int64.html#newXorshift64",
          "type": "function"
        },
        "index": {
          "description": "Generates new Xorshift64 from the current time",
          "hierarchy": "Random Xorshift Int64",
          "module": "Random.Xorshift.Int64",
          "name": "newXorshift64",
          "package": "xorshift",
          "partial": "Xorshift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift-Int64.html#v:newXorshift64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eXorshift random generators. The generators are implemented according to\n   the paper \u003ca\u003ehttp://www.jstatsoft.org/v08/i14/paper\u003c/a\u003e by George Marsaglia.\n   You can use the \u003ccode\u003e\u003ca\u003eRandomGen\u003c/a\u003e\u003c/code\u003e instances to generate random numbers easily.\n   This module only exports the Random generator that matches your word size,\n   if you want to use a specific length, try \u003ca\u003eRandom.Xorshift.Int32\u003c/a\u003e and\n   \u003ca\u003eRandom.Xorshift.Int64\u003c/a\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Random.Xorshift",
          "name": "Xorshift",
          "package": "xorshift",
          "source": "src/Random-Xorshift.html",
          "type": "module"
        },
        "index": {
          "description": "Xorshift random generators The generators are implemented according to the paper http www.jstatsoft.org v08 i14 paper by George Marsaglia You can use the RandomGen instances to generate random numbers easily This module only exports the Random generator that matches your word size if you want to use specific length try Random.Xorshift.Int32 and Random.Xorshift.Int64 instead",
          "hierarchy": "Random Xorshift",
          "module": "Random.Xorshift",
          "name": "Xorshift",
          "package": "xorshift",
          "partial": "Xorshift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type Xorshift is a wrapper around either Xorshift32 or Xorshift64,\n   depending on the bit size of your system. The idea behind this is, that\n   you may want to use this package as an uncomplicated, fast random\n   generator, but repeated conversion between different word sizes are an\n   absolute performance killer.\n\u003c/p\u003e\u003cp\u003eThus, if you don't really care about the period of your random generator or\n   how long the result is, use the \u003ccode\u003e\u003ca\u003eXorshift\u003c/a\u003e\u003c/code\u003e synonym, whenever possible.\n\u003c/p\u003e",
          "module": "Random.Xorshift",
          "name": "Xorshift",
          "package": "xorshift",
          "source": "src/Random-Xorshift.html#Xorshift",
          "type": "type"
        },
        "index": {
          "description": "The type Xorshift is wrapper around either Xorshift32 or Xorshift64 depending on the bit size of your system The idea behind this is that you may want to use this package as an uncomplicated fast random generator but repeated conversion between different word sizes are an absolute performance killer Thus if you don really care about the period of your random generator or how long the result is use the Xorshift synonym whenever possible",
          "hierarchy": "Random Xorshift",
          "module": "Random.Xorshift",
          "name": "Xorshift",
          "package": "xorshift",
          "partial": "Xorshift",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift.html#t:Xorshift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new \u003ccode\u003e\u003ca\u003eXorshift\u003c/a\u003e\u003c/code\u003e generator, regardless of whatever it's bytesize\n   is on your platform.\n\u003c/p\u003e",
          "module": "Random.Xorshift",
          "name": "makeXorshift",
          "package": "xorshift",
          "signature": "a -\u003e Xorshift",
          "source": "src/Random-Xorshift.html#makeXorshift",
          "type": "function"
        },
        "index": {
          "description": "Generate new Xorshift generator regardless of whatever it bytesize is on your platform",
          "hierarchy": "Random Xorshift",
          "module": "Random.Xorshift",
          "name": "makeXorshift",
          "normalized": "a-\u003eXorshift",
          "package": "xorshift",
          "partial": "Xorshift",
          "signature": "a-\u003eXorshift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift.html#v:makeXorshift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a new Xorshift from the current time. This is either a synonym\n   for \u003ccode\u003e\u003ca\u003enewXorshift32\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003enewXorshift64\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Random.Xorshift",
          "name": "newXorshift",
          "package": "xorshift",
          "signature": "IO Xorshift",
          "source": "src/Random-Xorshift.html#newXorshift",
          "type": "function"
        },
        "index": {
          "description": "Generates new Xorshift from the current time This is either synonym for newXorshift32 or newXorshift64",
          "hierarchy": "Random Xorshift",
          "module": "Random.Xorshift",
          "name": "newXorshift",
          "package": "xorshift",
          "partial": "Xorshift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xorshift/docs/Random-Xorshift.html#v:newXorshift"
      }
    }
  ]
]