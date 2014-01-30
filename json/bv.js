[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplementation of bit-vectors as wrappers over \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Bit-vectors are interpreted as unsigned integers\n   (i.e. natural numbers) except for some very specific cases.\n\u003c/li\u003e\u003cli\u003e Bit-vectors are \u003cem\u003esize-polymorphic\u003c/em\u003e insofar as most operations treat\n   a bit-vector of size \u003cem\u003en\u003c/em\u003e as of size \u003cem\u003em\u003c/em\u003e for \u003cem\u003em \u003e= n\u003c/em\u003e if required.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor documentation purposes we will write \u003ccode\u003e[n]k\u003c/code\u003e to denote a bit-vector\n of size \u003ccode\u003en\u003c/code\u003e representing the natural number \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "module",
        "fct-source": "src/Data-BitVector.html",
        "fct-type": "module",
        "title": "BitVector"
      },
      "index": {
        "description": "Implementation of bit-vectors as wrappers over Integer Bit-vectors are interpreted as unsigned integers i.e natural numbers except for some very specific cases Bit-vectors are size-polymorphic insofar as most operations treat bit-vector of size as of size for if required For documentation purposes we will write to denote bit-vector of size representing the natural number",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "BitVector",
        "normalized": "",
        "package": "bv",
        "partial": "Bit Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#t:BV",
      "description": {
        "fct-descr": "\u003cp\u003eBig-endian \u003cem\u003epseudo size-polymorphic\u003c/em\u003e bit-vectors.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "data",
        "fct-source": "src/Data-BitVector.html#BV",
        "fct-type": "data",
        "title": "BV"
      },
      "index": {
        "description": "Big-endian pseudo size-polymorphic bit-vectors",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "BV",
        "normalized": "",
        "package": "bv",
        "partial": "BV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#t:BitVector",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003eBV\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "type",
        "fct-source": "src/Data-BitVector.html#BitVector",
        "fct-type": "type",
        "title": "BitVector"
      },
      "index": {
        "description": "An alias for BV",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "BitVector",
        "normalized": "",
        "package": "bv",
        "partial": "Bit Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-33-.",
      "description": {
        "fct-descr": "\u003cp\u003eReverse bit-indexing.\n\u003c/p\u003e\u003cp\u003eIndex starting from the most significant bit.\n\u003c/p\u003e\u003cpre\u003eu !. i == u @. (size u - i - 1)\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[3]3 !. 0\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e ix -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#%21.",
        "fct-type": "function",
        "title": "(!.)"
      },
      "index": {
        "description": "Reverse bit-indexing Index starting from the most significant bit size False",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(!.) !.",
        "normalized": "BV-\u003ea-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eix-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-35-",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenation of two bit-vectors.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#%23",
        "fct-type": "function",
        "title": "(#)"
      },
      "index": {
        "description": "Concatenation of two bit-vectors",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(#) #",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-47--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-size inequality.\n\u003c/p\u003e\u003cp\u003eThe negated version of \u003ccode\u003e\u003ca\u003e==.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#%2F%3D.",
        "fct-type": "function",
        "title": "(/=.)"
      },
      "index": {
        "description": "Fixed-size inequality The negated version of",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(/=.) /=.",
        "normalized": "BV-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-60--60--60-.",
      "description": {
        "fct-descr": "\u003cp\u003eRotate left.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#%3C%3C%3C.",
        "fct-type": "function",
        "title": "(\u003c\u003c\u003c.)"
      },
      "index": {
        "description": "Rotate left",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(\u003c\u003c\u003c.) \u003c\u003c\u003c.",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-60--60-.",
      "description": {
        "fct-descr": "\u003cp\u003eLeft shift.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#%3C%3C.",
        "fct-type": "function",
        "title": "(\u003c\u003c.)"
      },
      "index": {
        "description": "Left shift",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(\u003c\u003c.) \u003c\u003c.",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-60--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-size \u003cem\u003eless-than-or-equals\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#%3C%3D.",
        "fct-type": "function",
        "title": "(\u003c=.)"
      },
      "index": {
        "description": "Fixed-size less-than-or-equals",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(\u003c=.) \u003c=.",
        "normalized": "BV-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-60-.",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-size \u003cem\u003eless-than\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#%3C.",
        "fct-type": "function",
        "title": "(\u003c.)"
      },
      "index": {
        "description": "Fixed-size less-than",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(\u003c.) \u003c.",
        "normalized": "BV-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-61--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-size equality.\n\u003c/p\u003e\u003cp\u003eIn contrast with \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e, which is \u003cem\u003esize-polymorphic\u003c/em\u003e, this equality\n requires both bit-vectors to be of equal size.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[n]k ==. [m]k\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[n]k ==. [n]k\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#%3D%3D.",
        "fct-type": "function",
        "title": "(==.)"
      },
      "index": {
        "description": "Fixed-size equality In contrast with which is size-polymorphic this equality requires both bit-vectors to be of equal size False True",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(==.) ==.",
        "normalized": "BV-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-62--61-.",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-size \u003cem\u003egreater-than-or-equals\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#%3E%3D.",
        "fct-type": "function",
        "title": "(\u003e=.)"
      },
      "index": {
        "description": "Fixed-size greater-than-or-equals",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(\u003e=.) \u003e=.",
        "normalized": "BV-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-62--62--62-.",
      "description": {
        "fct-descr": "\u003cp\u003eRotate right.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#%3E%3E%3E.",
        "fct-type": "function",
        "title": "(\u003e\u003e\u003e.)"
      },
      "index": {
        "description": "Rotate right",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(\u003e\u003e\u003e.) \u003e\u003e\u003e.",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-62--62-.",
      "description": {
        "fct-descr": "\u003cp\u003eLogical right shift.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#%3E%3E.",
        "fct-type": "function",
        "title": "(\u003e\u003e.)"
      },
      "index": {
        "description": "Logical right shift",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(\u003e\u003e.) \u003e\u003e.",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-62-.",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-size \u003cem\u003egreater-than\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#%3E.",
        "fct-type": "function",
        "title": "(\u003e.)"
      },
      "index": {
        "description": "Fixed-size greater-than",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(\u003e.) \u003e.",
        "normalized": "BV-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-64--64-",
      "description": {
        "fct-descr": "\u003cp\u003eBit-string extraction.\n\u003c/p\u003e\u003cpre\u003eu @@ (j,i) == fromBits (map (u @.) [j,j-1..i])\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[4]7 @@ (3,1)\n\u003c/code\u003e\u003c/strong\u003e[3]3\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e (ix, ix) -\u003e BV",
        "fct-source": "src/Data-BitVector.html#%40%40",
        "fct-type": "function",
        "title": "(@@)"
      },
      "index": {
        "description": "Bit-string extraction fromBits map j-1..i",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(@@) @@",
        "normalized": "BV-\u003e(a,a)-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003e(ix,ix)-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:-64-.",
      "description": {
        "fct-descr": "\u003cp\u003eBit indexing.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eu @. i\u003c/code\u003e stands for the \u003cem\u003ei\u003c/em\u003e-th bit of \u003cem\u003eu\u003c/em\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[4]2 @. 0\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[4]2 @. 1\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e ix -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#%40.",
        "fct-type": "function",
        "title": "(@.)"
      },
      "index": {
        "description": "Bit indexing stands for the th bit of False True",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "(@.) @.",
        "normalized": "BV-\u003ea-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eix-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:and_",
      "description": {
        "fct-descr": "\u003cp\u003eConjunction.\n\u003c/p\u003e\u003cpre\u003eand_ == foldr1 (.&.)\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "[BV] -\u003e BV",
        "fct-source": "src/Data-BitVector.html#and_",
        "fct-type": "function",
        "title": "and_"
      },
      "index": {
        "description": "Conjunction and foldr1",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "and_",
        "normalized": "[BV]-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "[BV]-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:ashr",
      "description": {
        "fct-descr": "\u003cp\u003eArithmetic right shift\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#ashr",
        "fct-type": "function",
        "title": "ashr"
      },
      "index": {
        "description": "Arithmetic right shift",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "ashr",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:bitVec",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a bit-vector given a size and an integer value.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebitVec 4 3\n\u003c/code\u003e\u003c/strong\u003e[4]3\n\u003c/pre\u003e\u003cp\u003eThis function also handles negative values.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ebitVec 4 (-1)\n\u003c/code\u003e\u003c/strong\u003e[4]15\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "Int -\u003e a -\u003e BV",
        "fct-source": "src/Data-BitVector.html#bitVec",
        "fct-type": "function",
        "title": "bitVec"
      },
      "index": {
        "description": "Create bit-vector given size and an integer value bitVec This function also handles negative values bitVec",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "bitVec",
        "normalized": "Int-\u003ea-\u003eBV",
        "package": "bv",
        "partial": "Vec",
        "signature": "Int-\u003ea-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenation of two bit-vectors.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "Concatenation of two bit-vectors",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "cat",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:extract",
      "description": {
        "fct-descr": "\u003cpre\u003eextract j i a == a @@ (j,i)\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "ix -\u003e ix -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "extract",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "extract",
        "normalized": "a-\u003ea-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "ix-\u003eix-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:foldl_",
      "description": {
        "fct-descr": "\u003cpre\u003efoldl_ f z (fromBits [un, ..., u1, u0]) == ((((z `f` un) `f` ...) `f` u1) `f` u0)\u003c/pre\u003e\u003cpre\u003efoldl_ f e = fromBits . foldl f e . toBits\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "(a -\u003e Bool -\u003e a) -\u003e a -\u003e BV -\u003e a",
        "fct-source": "src/Data-BitVector.html#foldl_",
        "fct-type": "function",
        "title": "foldl_"
      },
      "index": {
        "description": "foldl fromBits un u1 u0 un u1 u0 foldl fromBits foldl toBits",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "foldl_",
        "normalized": "(a-\u003eBool-\u003ea)-\u003ea-\u003eBV-\u003ea",
        "package": "bv",
        "partial": "",
        "signature": "(a-\u003eBool-\u003ea)-\u003ea-\u003eBV-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:foldr_",
      "description": {
        "fct-descr": "\u003cpre\u003efoldr_ f z (fromBits [un, ..., u1, u0]) == un `f` (... `f` (u1 `f` (u0 `f` z)))\u003c/pre\u003e\u003cpre\u003efoldr_ f e = fromBits . foldr f e . toBits\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "(Bool -\u003e a -\u003e a) -\u003e a -\u003e BV -\u003e a",
        "fct-source": "src/Data-BitVector.html#foldr_",
        "fct-type": "function",
        "title": "foldr_"
      },
      "index": {
        "description": "foldr fromBits un u1 u0 un u1 u0 foldr fromBits foldr toBits",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "foldr_",
        "normalized": "(Bool-\u003ea-\u003ea)-\u003ea-\u003eBV-\u003ea",
        "package": "bv",
        "partial": "",
        "signature": "(Bool-\u003ea-\u003ea)-\u003ea-\u003eBV-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:fromBits",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a bit-vector from a big-endian list of bits.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromBits [False, False, True]\n\u003c/code\u003e\u003c/strong\u003e[3]1\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "[Bool] -\u003e BV",
        "fct-source": "src/Data-BitVector.html#fromBits",
        "fct-type": "function",
        "title": "fromBits"
      },
      "index": {
        "description": "Create bit-vector from big-endian list of bits fromBits False False True",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "fromBits",
        "normalized": "[Bool]-\u003eBV",
        "package": "bv",
        "partial": "Bits",
        "signature": "[Bool]-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:fromBool",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a bit-vector from a single bit.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "Bool -\u003e BV",
        "fct-source": "src/Data-BitVector.html#fromBool",
        "fct-type": "function",
        "title": "fromBool"
      },
      "index": {
        "description": "Create bit-vector from single bit",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "fromBool",
        "normalized": "Bool-\u003eBV",
        "package": "bv",
        "partial": "Bool",
        "signature": "Bool-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:group_",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a bit-vector into \u003cem\u003en\u003c/em\u003e-wide pieces.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003egroup_ 3 [4]15\n\u003c/code\u003e\u003c/strong\u003e[[3]1,[3]7]\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "size -\u003e BV -\u003e [BV]",
        "fct-source": "src/Data-BitVector.html#group_",
        "fct-type": "function",
        "title": "group_"
      },
      "index": {
        "description": "Split bit-vector into wide pieces group",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "group_",
        "normalized": "a-\u003eBV-\u003e[BV]",
        "package": "bv",
        "partial": "",
        "signature": "size-\u003eBV-\u003e[BV]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:index",
      "description": {
        "fct-descr": "\u003cpre\u003eindex i a == a @. i\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "ix -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "index",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "index",
        "normalized": "a-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "ix-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003e2's complement value of a bit-vector.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e Integer",
        "fct-source": "src/Data-BitVector.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "complement value of bit-vector",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "int",
        "normalized": "BV-\u003eInteger",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:integerWidth",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum width of a bit-vector to represent a given integer number.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eintegerWith 4\n\u003c/code\u003e\u003c/strong\u003e3\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eintegerWith (-4)\n\u003c/code\u003e\u003c/strong\u003e4\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "Integer -\u003e Int",
        "fct-source": "src/Data-BitVector.html#integerWidth",
        "fct-type": "function",
        "title": "integerWidth"
      },
      "index": {
        "description": "Minimum width of bit-vector to represent given integer number integerWith integerWith",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "integerWidth",
        "normalized": "Integer-\u003eInt",
        "package": "bv",
        "partial": "Width",
        "signature": "Integer-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:isNat",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the signed value of a bit-vector is a natural number.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#isNat",
        "fct-type": "function",
        "title": "isNat"
      },
      "index": {
        "description": "Test if the signed value of bit-vector is natural number",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "isNat",
        "normalized": "BV-\u003eBool",
        "package": "bv",
        "partial": "Nat",
        "signature": "BV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:isPos",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the signed value of a bit-vector is a positive number.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#isPos",
        "fct-type": "function",
        "title": "isPos"
      },
      "index": {
        "description": "Test if the signed value of bit-vector is positive number",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "isPos",
        "normalized": "BV-\u003eBool",
        "package": "bv",
        "partial": "Pos",
        "signature": "BV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate a list of bit-vectors.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ejoin [[2]3,[2]2]\n\u003c/code\u003e\u003c/strong\u003e[4]14\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "[BV] -\u003e BV",
        "fct-source": "src/Data-BitVector.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "Concatenate list of bit-vectors join",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "join",
        "normalized": "[BV]-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "[BV]-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:least",
      "description": {
        "fct-descr": "\u003cp\u003eTake least significant bits.\n\u003c/p\u003e\u003cpre\u003eleast m u == u @@ (m-1,0)\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "ix -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#least",
        "fct-type": "function",
        "title": "least"
      },
      "index": {
        "description": "Take least significant bits least m-1",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "least",
        "normalized": "a-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "ix-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:lg2",
      "description": {
        "fct-descr": "\u003cp\u003eCeiling logarithm base 2.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePre\u003c/em\u003e: input bit-vector must be non-zero.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#lg2",
        "fct-type": "function",
        "title": "lg2"
      },
      "index": {
        "description": "Ceiling logarithm base Pre input bit-vector must be non-zero",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "lg2",
        "normalized": "BV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:lsb",
      "description": {
        "fct-descr": "\u003cp\u003eLeast significant bit.\n\u003c/p\u003e\u003cpre\u003elsb u == u @. 0\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#lsb",
        "fct-type": "function",
        "title": "lsb"
      },
      "index": {
        "description": "Least significant bit lsb",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "lsb",
        "normalized": "BV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:maxNat",
      "description": {
        "fct-descr": "\u003cp\u003eGreatest natural number representable with \u003cem\u003en\u003c/em\u003e bits.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Data-BitVector.html#maxNat",
        "fct-type": "function",
        "title": "maxNat"
      },
      "index": {
        "description": "Greatest natural number representable with bits",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "maxNat",
        "normalized": "a-\u003eb",
        "package": "bv",
        "partial": "Nat",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:most",
      "description": {
        "fct-descr": "\u003cp\u003eTake most significant bits.\n\u003c/p\u003e\u003cpre\u003emost m u == u @@ (n-1,n-m)\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "ix -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#most",
        "fct-type": "function",
        "title": "most"
      },
      "index": {
        "description": "Take most significant bits most n-1 n-m",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "most",
        "normalized": "a-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "ix-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:msb",
      "description": {
        "fct-descr": "\u003cp\u003eMost significant bit.\n\u003c/p\u003e\u003cpre\u003emsb u == u !. 0\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#msb",
        "fct-type": "function",
        "title": "msb"
      },
      "index": {
        "description": "Most significant bit msb",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "msb",
        "normalized": "BV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:msb1",
      "description": {
        "fct-descr": "\u003cp\u003eMost significant 1-bit.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePre\u003c/em\u003e: input must be non-zero.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emsb1 [4]2\n\u003c/code\u003e\u003c/strong\u003e1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emsb1 [4]4\n\u003c/code\u003e\u003c/strong\u003e2\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e Int",
        "fct-source": "src/Data-BitVector.html#msb1",
        "fct-type": "function",
        "title": "msb1"
      },
      "index": {
        "description": "Most significant bit Pre input must be non-zero msb1 msb1",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "msb1",
        "normalized": "BV-\u003eInt",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:nand",
      "description": {
        "fct-descr": "\u003cp\u003eNegated \u003ccode\u003e\u003ca\u003e.&.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#nand",
        "fct-type": "function",
        "title": "nand"
      },
      "index": {
        "description": "Negated",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "nand",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:nat",
      "description": {
        "fct-descr": "\u003cp\u003eThe value of a bit-vector, as a natural number.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e Integer",
        "fct-source": "src/Data-BitVector.html#nat",
        "fct-type": "function",
        "title": "nat"
      },
      "index": {
        "description": "The value of bit-vector as natural number",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "nat",
        "normalized": "BV-\u003eInteger",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:nor",
      "description": {
        "fct-descr": "\u003cp\u003eNegated \u003ccode\u003e\u003ca\u003e.|.\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#nor",
        "fct-type": "function",
        "title": "nor"
      },
      "index": {
        "description": "Negated",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "nor",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:not_",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003ecomplement\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#not_",
        "fct-type": "function",
        "title": "not_"
      },
      "index": {
        "description": "An alias for complement",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "not_",
        "normalized": "BV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:ones",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a mask of ones.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "Int -\u003e BV",
        "fct-source": "src/Data-BitVector.html#ones",
        "fct-type": "function",
        "title": "ones"
      },
      "index": {
        "description": "Create mask of ones",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "ones",
        "normalized": "Int-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "Int-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:or_",
      "description": {
        "fct-descr": "\u003cp\u003eDisjunction.\n\u003c/p\u003e\u003cpre\u003eor_ == foldr1 (.|.)\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "[BV] -\u003e BV",
        "fct-source": "src/Data-BitVector.html#or_",
        "fct-type": "function",
        "title": "or_"
      },
      "index": {
        "description": "Disjunction or foldr1",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "or_",
        "normalized": "[BV]-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "[BV]-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:replicate_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003ePre\u003c/em\u003e: if \u003ccode\u003ereplicate_ n u\u003c/code\u003e then \u003ccode\u003en \u003e 0\u003c/code\u003e must hold.\n\u003c/p\u003e\u003cpre\u003ereplicate_ n == fromBits . concat . replicate n . toBits\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "size -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#replicate_",
        "fct-type": "function",
        "title": "replicate_"
      },
      "index": {
        "description": "Pre if replicate then must hold replicate fromBits concat replicate toBits",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "replicate_",
        "normalized": "a-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "size-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:reverse_",
      "description": {
        "fct-descr": "\u003cpre\u003ereverse_ == fromBits . reverse . toBits\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#reverse_",
        "fct-type": "function",
        "title": "reverse_"
      },
      "index": {
        "description": "reverse fromBits reverse toBits",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "reverse_",
        "normalized": "BV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:rol",
      "description": {
        "fct-descr": "\u003cp\u003eRotate left.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#rol",
        "fct-type": "function",
        "title": "rol"
      },
      "index": {
        "description": "Rotate left",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "rol",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:ror",
      "description": {
        "fct-descr": "\u003cp\u003eRotate right.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#ror",
        "fct-type": "function",
        "title": "ror"
      },
      "index": {
        "description": "Rotate right",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "ror",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:sdiv",
      "description": {
        "fct-descr": "\u003cp\u003e2's complement signed division.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#sdiv",
        "fct-type": "function",
        "title": "sdiv"
      },
      "index": {
        "description": "complement signed division",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "sdiv",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:sge",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-size signed \u003cem\u003egreater-than-or-equals\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#sge",
        "fct-type": "function",
        "title": "sge"
      },
      "index": {
        "description": "Fixed-size signed greater-than-or-equals",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "sge",
        "normalized": "BV-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:sgt",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-size signed \u003cem\u003egreater-than\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#sgt",
        "fct-type": "function",
        "title": "sgt"
      },
      "index": {
        "description": "Fixed-size signed greater-than",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "sgt",
        "normalized": "BV-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:shl",
      "description": {
        "fct-descr": "\u003cp\u003eLeft shift.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#shl",
        "fct-type": "function",
        "title": "shl"
      },
      "index": {
        "description": "Left shift",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "shl",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:showBin",
      "description": {
        "fct-descr": "\u003cp\u003eShow a bit-vector in binary form.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e String",
        "fct-source": "src/Data-BitVector.html#showBin",
        "fct-type": "function",
        "title": "showBin"
      },
      "index": {
        "description": "Show bit-vector in binary form",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "showBin",
        "normalized": "BV-\u003eString",
        "package": "bv",
        "partial": "Bin",
        "signature": "BV-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:showHex",
      "description": {
        "fct-descr": "\u003cp\u003eShow a bit-vector in hexadecimal form.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e String",
        "fct-source": "src/Data-BitVector.html#showHex",
        "fct-type": "function",
        "title": "showHex"
      },
      "index": {
        "description": "Show bit-vector in hexadecimal form",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "showHex",
        "normalized": "BV-\u003eString",
        "package": "bv",
        "partial": "Hex",
        "signature": "BV-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:showOct",
      "description": {
        "fct-descr": "\u003cp\u003eShow a bit-vector in octal form.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e String",
        "fct-source": "src/Data-BitVector.html#showOct",
        "fct-type": "function",
        "title": "showOct"
      },
      "index": {
        "description": "Show bit-vector in octal form",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "showOct",
        "normalized": "BV-\u003eString",
        "package": "bv",
        "partial": "Oct",
        "signature": "BV-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:shr",
      "description": {
        "fct-descr": "\u003cp\u003eLogical right shift.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#shr",
        "fct-type": "function",
        "title": "shr"
      },
      "index": {
        "description": "Logical right shift",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "shr",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:signExtend",
      "description": {
        "fct-descr": "\u003cp\u003eArithmetic extension.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esignExtend 2 [2]1\n\u003c/code\u003e\u003c/strong\u003e[4]1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esignExtend 2 [2]3\n\u003c/code\u003e\u003c/strong\u003e[4]15\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "size -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#signExtend",
        "fct-type": "function",
        "title": "signExtend"
      },
      "index": {
        "description": "Arithmetic extension signExtend signExtend",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "signExtend",
        "normalized": "a-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "Extend",
        "signature": "size-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:signumI",
      "description": {
        "fct-descr": "\u003cp\u003eBit-vector \u003ccode\u003e\u003ca\u003esignum\u003c/a\u003e\u003c/code\u003e as an \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e a",
        "fct-source": "src/Data-BitVector.html#signumI",
        "fct-type": "function",
        "title": "signumI"
      },
      "index": {
        "description": "Bit-vector signum as an Integral",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "signumI",
        "normalized": "BV-\u003ea",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003cem\u003esize\u003c/em\u003e of a bit-vector.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e Int",
        "fct-source": "src/Data-BitVector.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The size of bit-vector",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "size",
        "normalized": "BV-\u003eInt",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:sle",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-size signed \u003cem\u003eless-than-or-equals\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#sle",
        "fct-type": "function",
        "title": "sle"
      },
      "index": {
        "description": "Fixed-size signed less-than-or-equals",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "sle",
        "normalized": "BV-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:slt",
      "description": {
        "fct-descr": "\u003cp\u003eFixed-size signed \u003cem\u003eless-than\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e Bool",
        "fct-source": "src/Data-BitVector.html#slt",
        "fct-type": "function",
        "title": "slt"
      },
      "index": {
        "description": "Fixed-size signed less-than",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "slt",
        "normalized": "BV-\u003eBV-\u003eBool",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:smod",
      "description": {
        "fct-descr": "\u003cp\u003e2's complement signed remainder (sign follows divisor).\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#smod",
        "fct-type": "function",
        "title": "smod"
      },
      "index": {
        "description": "complement signed remainder sign follows divisor",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "smod",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a bit-vector \u003cem\u003ek\u003c/em\u003e times.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esplit 3 [4]15\n\u003c/code\u003e\u003c/strong\u003e[[2]0,[2]3,[2]3]\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "times -\u003e BV -\u003e [BV]",
        "fct-source": "src/Data-BitVector.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Split bit-vector times split",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "split",
        "normalized": "a-\u003eBV-\u003e[BV]",
        "package": "bv",
        "partial": "",
        "signature": "times-\u003eBV-\u003e[BV]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:srem",
      "description": {
        "fct-descr": "\u003cp\u003e2's complement signed remainder (sign follows dividend).\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#srem",
        "fct-type": "function",
        "title": "srem"
      },
      "index": {
        "description": "complement signed remainder sign follows dividend",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "srem",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:toBits",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a big-endian list of bits from a bit-vector.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoBits [4]11\n\u003c/code\u003e\u003c/strong\u003e[True, False, True, True]\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e [Bool]",
        "fct-source": "src/Data-BitVector.html#toBits",
        "fct-type": "function",
        "title": "toBits"
      },
      "index": {
        "description": "Create big-endian list of bits from bit-vector toBits True False True True",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "toBits",
        "normalized": "BV-\u003e[Bool]",
        "package": "bv",
        "partial": "Bits",
        "signature": "BV-\u003e[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:uint",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003enat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e Integer",
        "fct-source": "src/Data-BitVector.html#uint",
        "fct-type": "function",
        "title": "uint"
      },
      "index": {
        "description": "An alias for nat",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "uint",
        "normalized": "BV-\u003eInteger",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:width",
      "description": {
        "fct-descr": "\u003cp\u003eAn alias for \u003ccode\u003e\u003ca\u003esize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e Int",
        "fct-source": "src/Data-BitVector.html#width",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "An alias for size",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "width",
        "normalized": "BV-\u003eInt",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:xnor",
      "description": {
        "fct-descr": "\u003cp\u003eNegated \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "BV -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#xnor",
        "fct-type": "function",
        "title": "xnor"
      },
      "index": {
        "description": "Negated xor",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "xnor",
        "normalized": "BV-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "BV-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:zeroExtend",
      "description": {
        "fct-descr": "\u003cp\u003eLogical extension.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ezeroExtend 3 [1]1\n\u003c/code\u003e\u003c/strong\u003e[4]1\n\u003c/pre\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "size -\u003e BV -\u003e BV",
        "fct-source": "src/Data-BitVector.html#zeroExtend",
        "fct-type": "function",
        "title": "zeroExtend"
      },
      "index": {
        "description": "Logical extension zeroExtend",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "zeroExtend",
        "normalized": "a-\u003eBV-\u003eBV",
        "package": "bv",
        "partial": "Extend",
        "signature": "size-\u003eBV-\u003eBV"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bv/docs/Data-BitVector.html#v:zeros",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a mask of zeros.\n\u003c/p\u003e",
        "fct-module": "Data.BitVector",
        "fct-package": "bv",
        "fct-signature": "Int -\u003e BV",
        "fct-source": "src/Data-BitVector.html#zeros",
        "fct-type": "function",
        "title": "zeros"
      },
      "index": {
        "description": "Create mask of zeros",
        "hierarchy": "Data BitVector",
        "module": "Data.BitVector",
        "name": "zeros",
        "normalized": "Int-\u003eBV",
        "package": "bv",
        "partial": "",
        "signature": "Int-\u003eBV"
      }
    }
  }
]