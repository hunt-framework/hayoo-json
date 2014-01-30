[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/murmurhash3/docs/Data-Digest-Murmur.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFor details of the implementation of MurmurHash3, see the following webpages:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://code.google.com/p/smhasher/\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/MurmurHash\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Digest.Murmur",
        "fct-package": "murmurhash3",
        "fct-signature": "module",
        "fct-source": "src/Data-Digest-Murmur.html",
        "fct-type": "module",
        "title": "Murmur"
      },
      "index": {
        "description": "For details of the implementation of MurmurHash3 see the following webpages http code.google.com smhasher http en.wikipedia.org wiki MurmurHash",
        "hierarchy": "Data Digest Murmur",
        "module": "Data.Digest.Murmur",
        "name": "Murmur",
        "normalized": "",
        "package": "murmurhash3",
        "partial": "Murmur",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/murmurhash3/docs/Data-Digest-Murmur.html#t:Hash",
      "description": {
        "fct-descr": "\u003cp\u003eA 32-bit hash.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Murmur",
        "fct-package": "murmurhash3",
        "fct-signature": "type",
        "fct-source": "src/Data-Digest-Murmur.html#Hash",
        "fct-type": "type",
        "title": "Hash"
      },
      "index": {
        "description": "bit hash",
        "hierarchy": "Data Digest Murmur",
        "module": "Data.Digest.Murmur",
        "name": "Hash",
        "normalized": "",
        "package": "murmurhash3",
        "partial": "Hash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/murmurhash3/docs/Data-Digest-Murmur.html#t:HashGen",
      "description": {
        "fct-descr": "\u003cp\u003eA hash generator is a function that maps a hash state into a new hash state.\n The internal representation of hash states is kept transparent.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Murmur",
        "fct-package": "murmurhash3",
        "fct-signature": "data",
        "fct-source": "src/Data-Digest-Murmur.html#HashGen",
        "fct-type": "data",
        "title": "HashGen"
      },
      "index": {
        "description": "hash generator is function that maps hash state into new hash state The internal representation of hash states is kept transparent",
        "hierarchy": "Data Digest Murmur",
        "module": "Data.Digest.Murmur",
        "name": "HashGen",
        "normalized": "",
        "package": "murmurhash3",
        "partial": "Hash Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/murmurhash3/docs/Data-Digest-Murmur.html#t:Hashable",
      "description": {
        "fct-descr": "\u003cp\u003eType class for computing hash generators from values.\n\u003c/p\u003e\u003cp\u003eMaking custom data types instantiate \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e is straightforward; given\n the following tree data structure:\n\u003c/p\u003e\u003cpre\u003e data Tree a\n   = Tip\n   | Bin a (Tree a) (Tree a)\n\u003c/pre\u003e\u003cp\u003e...we make it instantiate \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e like this:\n\u003c/p\u003e\u003cpre\u003e instance Hashable a =\u003e Hashable (Tree a) where\n   hashGen Tip         = salt 0x0\n   hashGen (Bin x l r) = hashGen x `combine` hashGen l `combine` hashGen r\n\u003c/pre\u003e\u003cp\u003eFor sum data types such as \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e we typically want to avoid that\n\u003c/p\u003e\u003cpre\u003e Left \"foo\"\n\u003c/pre\u003e\u003cp\u003ehashes to the same hash as\n\u003c/p\u003e\u003cpre\u003e Right \"foo\"\n\u003c/pre\u003e\u003cp\u003e...hence we add some \u003ccode\u003e\u003ca\u003esalt\u003c/a\u003e\u003c/code\u003e for each constructor:\n\u003c/p\u003e\u003cpre\u003e instance (Hashable a, Hashable b) =\u003e Hashable (Either a b) where\n   hashGen (Left  x) = salt 0x1 `combine` hashGen x\n   hashGen (Right y) = salt 0x2 `combine` hashGen y\n\u003c/pre\u003e",
        "fct-module": "Data.Digest.Murmur",
        "fct-package": "murmurhash3",
        "fct-signature": "class",
        "fct-source": "src/Data-Digest-Murmur.html#Hashable",
        "fct-type": "class",
        "title": "Hashable"
      },
      "index": {
        "description": "Type class for computing hash generators from values Making custom data types instantiate Hashable is straightforward given the following tree data structure data Tree Tip Bin Tree Tree we make it instantiate Hashable like this instance Hashable Hashable Tree where hashGen Tip salt x0 hashGen Bin hashGen combine hashGen combine hashGen For sum data types such as Either we typically want to avoid that Left foo hashes to the same hash as Right foo hence we add some salt for each constructor instance Hashable Hashable Hashable Either where hashGen Left salt x1 combine hashGen hashGen Right salt x2 combine hashGen",
        "hierarchy": "Data Digest Murmur",
        "module": "Data.Digest.Murmur",
        "name": "Hashable",
        "normalized": "",
        "package": "murmurhash3",
        "partial": "Hashable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/murmurhash3/docs/Data-Digest-Murmur.html#v:combine",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two hash generators such that the output of the first generator is\n piped into the next. This works similar to function composition.\n Indeed, for all \u003cem\u003ef\u003c/em\u003e, \u003cem\u003eg\u003c/em\u003e, \u003cem\u003eh\u003c/em\u003e, we have that\n\u003c/p\u003e\u003cpre\u003e f `combine` (g `combine` h) == (f `combine` g) `combine` h\n\u003c/pre\u003e",
        "fct-module": "Data.Digest.Murmur",
        "fct-package": "murmurhash3",
        "fct-signature": "HashGen -\u003e HashGen -\u003e HashGen",
        "fct-source": "src/Data-Digest-Murmur.html#combine",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "Combines two hash generators such that the output of the first generator is piped into the next This works similar to function composition Indeed for all we have that combine combine combine combine",
        "hierarchy": "Data Digest Murmur",
        "module": "Data.Digest.Murmur",
        "name": "combine",
        "normalized": "HashGen-\u003eHashGen-\u003eHashGen",
        "package": "murmurhash3",
        "partial": "",
        "signature": "HashGen-\u003eHashGen-\u003eHashGen"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/murmurhash3/docs/Data-Digest-Murmur.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eComputes a 32-bit hash from a \u003cem\u003ehashable\u003c/em\u003e value.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Murmur",
        "fct-package": "murmurhash3",
        "fct-signature": "a -\u003e Hash",
        "fct-source": "src/Data-Digest-Murmur.html#hash",
        "fct-type": "function",
        "title": "hash"
      },
      "index": {
        "description": "Computes bit hash from hashable value",
        "hierarchy": "Data Digest Murmur",
        "module": "Data.Digest.Murmur",
        "name": "hash",
        "normalized": "a-\u003eHash",
        "package": "murmurhash3",
        "partial": "",
        "signature": "a-\u003eHash"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/murmurhash3/docs/Data-Digest-Murmur.html#v:hashGen",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a hash generator for the argument.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Murmur",
        "fct-package": "murmurhash3",
        "fct-signature": "a -\u003e HashGen",
        "fct-source": "src/Data-Digest-Murmur.html#hashGen",
        "fct-type": "method",
        "title": "hashGen"
      },
      "index": {
        "description": "Returns hash generator for the argument",
        "hierarchy": "Data Digest Murmur",
        "module": "Data.Digest.Murmur",
        "name": "hashGen",
        "normalized": "a-\u003eHashGen",
        "package": "murmurhash3",
        "partial": "Gen",
        "signature": "a-\u003eHashGen"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/murmurhash3/docs/Data-Digest-Murmur.html#v:salt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a hash generator that mixes its input with a 32-bit word.\n Is typically used for enumerating constructors when deriving \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Digest.Murmur",
        "fct-package": "murmurhash3",
        "fct-signature": "Word32 -\u003e HashGen",
        "fct-source": "src/Data-Digest-Murmur.html#salt",
        "fct-type": "function",
        "title": "salt"
      },
      "index": {
        "description": "Returns hash generator that mixes its input with bit word Is typically used for enumerating constructors when deriving Hashable",
        "hierarchy": "Data Digest Murmur",
        "module": "Data.Digest.Murmur",
        "name": "salt",
        "normalized": "Word-\u003eHashGen",
        "package": "murmurhash3",
        "partial": "",
        "signature": "Word-\u003eHashGen"
      }
    }
  }
]