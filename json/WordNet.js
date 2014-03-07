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
        "word": "WordNet"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is the top level module to the Haskell WordNet interface.\n\u003c/p\u003e\u003cp\u003eThis module is maintained at:\n    \u003ca\u003ehttp://www.isi.edu/~hdaume/HWordNet/\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThis is the only module in the WordNet package you need to import.\n The others provide utility functions and primitives that this\n module is based on.\n\u003c/p\u003e\u003cp\u003eMore information about WordNet is available at:\n    \u003ca\u003ehttp://http://www.cogsci.princeton.edu/~wn/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.WordNet",
          "name": "WordNet",
          "package": "WordNet",
          "source": "src/NLP-WordNet.html",
          "type": "module"
        },
        "index": {
          "description": "This is the top level module to the Haskell WordNet interface This module is maintained at http www.isi.edu hdaume HWordNet This is the only module in the WordNet package you need to import The others provide utility functions and primitives that this module is based on More information about WordNet is available at http http www.cogsci.princeton.edu wn",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "WordNet",
          "package": "WordNet",
          "partial": "Word Net",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple bag class for our \u003ccode\u003e\u003ca\u003emeet\u003c/a\u003e\u003c/code\u003e implementation.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "Bag",
          "package": "WordNet",
          "source": "src/NLP-WordNet.html#Bag",
          "type": "class"
        },
        "index": {
          "description": "simple bag class for our meet implementation",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Bag",
          "package": "WordNet",
          "partial": "Bag",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#t:Bag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe different types of relations which can hold between WordNet Synsets.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "Form",
          "package": "WordNet",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "data"
        },
        "index": {
          "description": "The different types of relations which can hold between WordNet Synsets",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Form",
          "package": "WordNet",
          "partial": "Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#t:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e is a simple pointer into the database, which can be\n followed using \u003ccode\u003elookupKey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "Key",
          "package": "WordNet",
          "source": "src/NLP-WordNet-PrimTypes.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Key is simple pointer into the database which can be followed using lookupKey",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Key",
          "package": "WordNet",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e type is the return type which gives you an\n overview of a word, for all sense and for all parts of speech.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "Overview",
          "package": "WordNet",
          "source": "src/NLP-WordNet-PrimTypes.html#Overview",
          "type": "data"
        },
        "index": {
          "description": "The Overview type is the return type which gives you an overview of word for all sense and for all parts of speech",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Overview",
          "package": "WordNet",
          "partial": "Overview",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#t:Overview"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic part of speech type, either a \u003ccode\u003e\u003ca\u003eNoun\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eVerb\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAdj\u003c/a\u003e\u003c/code\u003eective or \u003ccode\u003e\u003ca\u003eAdv\u003c/a\u003e\u003c/code\u003eerb.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "POS",
          "package": "WordNet",
          "source": "src/NLP-WordNet-PrimTypes.html#POS",
          "type": "data"
        },
        "index": {
          "description": "The basic part of speech type either Noun Verb Adj ective or Adv erb",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "POS",
          "package": "WordNet",
          "partial": "POS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#t:POS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic type which holds search results.  Its \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance simply\n shows the string corresponding to the associated WordNet synset.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "SearchResult",
          "package": "WordNet",
          "source": "src/NLP-WordNet-PrimTypes.html#SearchResult",
          "type": "data"
        },
        "index": {
          "description": "The basic type which holds search results Its Show instance simply shows the string corresponding to the associated WordNet synset",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "SearchResult",
          "package": "WordNet",
          "partial": "Search Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#t:SearchResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSenseType\u003c/a\u003e\u003c/code\u003e is a way of controlling search.  Either you specify\n a certain sense (using \u003ccode\u003eSenseNumber n\u003c/code\u003e, or, since \u003ccode\u003e\u003ca\u003eSenseType\u003c/a\u003e\u003c/code\u003e is an\n instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e, you can juse use \u003ccode\u003en\u003c/code\u003e) or by searching using all\n senses, through \u003ccode\u003e\u003ca\u003eAllSenses\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e instance performs standard\n arithmetic on \u003ccode\u003e\u003ca\u003eSenseNumber\u003c/a\u003e\u003c/code\u003es, and \u003ccode\u003e\u003ca\u003efromInteger\u003c/a\u003e\u003c/code\u003e yields a \u003ccode\u003e\u003ca\u003eSenseNumber\u003c/a\u003e\u003c/code\u003e (always),\n but any arithmetic involving \u003ccode\u003e\u003ca\u003eAllSenses\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eAllSenses\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "SenseType",
          "package": "WordNet",
          "source": "src/NLP-WordNet-PrimTypes.html#SenseType",
          "type": "data"
        },
        "index": {
          "description": "SenseType is way of controlling search Either you specify certain sense using SenseNumber or since SenseType is an instance of Num you can juse use or by searching using all senses through AllSenses The Num instance performs standard arithmetic on SenseNumber and fromInteger yields SenseNumber always but any arithmetic involving AllSenses returns AllSenses",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "SenseType",
          "package": "WordNet",
          "partial": "Sense Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#t:SenseType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn actuality this type is:\n\u003c/p\u003e\u003cpre\u003e type WN a = (?wne :: WordNetEnv) =\u003e a\n\u003c/pre\u003e\u003cp\u003ebut Haddock cannot parse this at this time.\n type WN a = a\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "WN",
          "package": "WordNet",
          "source": "src/NLP-WordNet-Types.html#WN",
          "type": "type"
        },
        "index": {
          "description": "In actuality this type is type WN wne WordNetEnv but Haddock cannot parse this at this time type WN",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "WN",
          "package": "WordNet",
          "partial": "WN",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#t:WN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Word is just a String.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "Word",
          "package": "WordNet",
          "source": "src/NLP-WordNet-Types.html#Word",
          "type": "type"
        },
        "index": {
          "description": "Word is just String",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Word",
          "package": "WordNet",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "WordNetEnv",
          "package": "WordNet",
          "source": "src/NLP-WordNet-PrimTypes.html#WordNetEnv",
          "type": "data"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "WordNetEnv",
          "package": "WordNet",
          "partial": "Word Net Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#t:WordNetEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Adj",
          "package": "WordNet",
          "signature": "Adj",
          "source": "src/NLP-WordNet-PrimTypes.html#POS",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Adj",
          "package": "WordNet",
          "partial": "Adj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Adj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Adv",
          "package": "WordNet",
          "signature": "Adv",
          "source": "src/NLP-WordNet-PrimTypes.html#POS",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Adv",
          "package": "WordNet",
          "partial": "Adv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Adv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "AllSenses",
          "package": "WordNet",
          "signature": "AllSenses",
          "source": "src/NLP-WordNet-PrimTypes.html#SenseType",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "AllSenses",
          "package": "WordNet",
          "partial": "All Senses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:AllSenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Antonym",
          "package": "WordNet",
          "signature": "Antonym",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Antonym",
          "package": "WordNet",
          "partial": "Antonym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Antonym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Attribute",
          "package": "WordNet",
          "signature": "Attribute",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Attribute",
          "package": "WordNet",
          "partial": "Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "CauseTo",
          "package": "WordNet",
          "signature": "CauseTo",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "CauseTo",
          "package": "WordNet",
          "partial": "Cause To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:CauseTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Class",
          "package": "WordNet",
          "signature": "Class",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Class",
          "package": "WordNet",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Classification",
          "package": "WordNet",
          "signature": "Classification",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Classification",
          "package": "WordNet",
          "partial": "Classification",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Classification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Coords",
          "package": "WordNet",
          "signature": "Coords",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Coords",
          "package": "WordNet",
          "partial": "Coords",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Coords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Derivation",
          "package": "WordNet",
          "signature": "Derivation",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Derivation",
          "package": "WordNet",
          "partial": "Derivation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Derivation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Entailment",
          "package": "WordNet",
          "signature": "Entailment",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Entailment",
          "package": "WordNet",
          "partial": "Entailment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Entailment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Frames",
          "package": "WordNet",
          "signature": "Frames",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Frames",
          "package": "WordNet",
          "partial": "Frames",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Frames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Freq",
          "package": "WordNet",
          "signature": "Freq",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Freq",
          "package": "WordNet",
          "partial": "Freq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Freq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "HHolonym",
          "package": "WordNet",
          "signature": "HHolonym",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "HHolonym",
          "package": "WordNet",
          "partial": "HHolonym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:HHolonym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "HMeronym",
          "package": "WordNet",
          "signature": "HMeronym",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "HMeronym",
          "package": "WordNet",
          "partial": "HMeronym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:HMeronym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "HasMember",
          "package": "WordNet",
          "signature": "HasMember",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "HasMember",
          "package": "WordNet",
          "partial": "Has Member",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:HasMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "HasPart",
          "package": "WordNet",
          "signature": "HasPart",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "HasPart",
          "package": "WordNet",
          "partial": "Has Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:HasPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "HasStuff",
          "package": "WordNet",
          "signature": "HasStuff",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "HasStuff",
          "package": "WordNet",
          "partial": "Has Stuff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:HasStuff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Holonym",
          "package": "WordNet",
          "signature": "Holonym",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Holonym",
          "package": "WordNet",
          "partial": "Holonym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Holonym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Hypernym",
          "package": "WordNet",
          "signature": "Hypernym",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Hypernym",
          "package": "WordNet",
          "partial": "Hypernym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Hypernym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Hyponym",
          "package": "WordNet",
          "signature": "Hyponym",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Hyponym",
          "package": "WordNet",
          "partial": "Hyponym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Hyponym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "IsMember",
          "package": "WordNet",
          "signature": "IsMember",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "IsMember",
          "package": "WordNet",
          "partial": "Is Member",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:IsMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "IsPart",
          "package": "WordNet",
          "signature": "IsPart",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "IsPart",
          "package": "WordNet",
          "partial": "Is Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:IsPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "IsStuff",
          "package": "WordNet",
          "signature": "IsStuff",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "IsStuff",
          "package": "WordNet",
          "partial": "Is Stuff",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:IsStuff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Meronym",
          "package": "WordNet",
          "signature": "Meronym",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Meronym",
          "package": "WordNet",
          "partial": "Meronym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Meronym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Nominalization",
          "package": "WordNet",
          "signature": "Nominalization",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Nominalization",
          "package": "WordNet",
          "partial": "Nominalization",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Nominalization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Noun",
          "package": "WordNet",
          "signature": "Noun",
          "source": "src/NLP-WordNet-PrimTypes.html#POS",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Noun",
          "package": "WordNet",
          "partial": "Noun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Noun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "OverviewForm",
          "package": "WordNet",
          "signature": "OverviewForm",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "OverviewForm",
          "package": "WordNet",
          "partial": "Overview Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:OverviewForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "PPL",
          "package": "WordNet",
          "signature": "PPL",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "PPL",
          "package": "WordNet",
          "partial": "PPL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:PPL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Relatives",
          "package": "WordNet",
          "signature": "Relatives",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Relatives",
          "package": "WordNet",
          "partial": "Relatives",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Relatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "SeeAlso",
          "package": "WordNet",
          "signature": "SeeAlso",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "SeeAlso",
          "package": "WordNet",
          "partial": "See Also",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:SeeAlso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "SenseNumber",
          "package": "WordNet",
          "signature": "SenseNumber Int",
          "source": "src/NLP-WordNet-PrimTypes.html#SenseType",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "SenseNumber",
          "package": "WordNet",
          "partial": "Sense Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:SenseNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Similar",
          "package": "WordNet",
          "signature": "Similar",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Similar",
          "package": "WordNet",
          "partial": "Similar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Similar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Syns",
          "package": "WordNet",
          "signature": "Syns",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Syns",
          "package": "WordNet",
          "partial": "Syns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Syns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Unknown",
          "package": "WordNet",
          "signature": "Unknown",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Unknown",
          "package": "WordNet",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "Verb",
          "package": "WordNet",
          "signature": "Verb",
          "source": "src/NLP-WordNet-PrimTypes.html#POS",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "Verb",
          "package": "WordNet",
          "partial": "Verb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:Verb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "VerbGroup",
          "package": "WordNet",
          "signature": "VerbGroup",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "VerbGroup",
          "package": "WordNet",
          "partial": "Verb Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:VerbGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "WNGrep",
          "package": "WordNet",
          "signature": "WNGrep",
          "source": "src/NLP-WordNet-PrimTypes.html#Form",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "WNGrep",
          "package": "WordNet",
          "partial": "WNGrep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:WNGrep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "addListToBag",
          "package": "WordNet",
          "signature": "b a -\u003e [a] -\u003e b a",
          "source": "src/NLP-WordNet.html#addListToBag",
          "type": "method"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "addListToBag",
          "normalized": "a b-\u003e[b]-\u003ea b",
          "package": "WordNet",
          "partial": "List To Bag",
          "signature": "b a-\u003e[a]-\u003eb a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:addListToBag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "addToBag",
          "package": "WordNet",
          "signature": "b a -\u003e a -\u003e b a",
          "source": "src/NLP-WordNet.html#addToBag",
          "type": "method"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "addToBag",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "WordNet",
          "partial": "To Bag",
          "signature": "b a-\u003ea-\u003eb a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:addToBag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses all the handles associated with the \u003ccode\u003e\u003ca\u003eWordNetEnv\u003c/a\u003e\u003c/code\u003e.  Since\n the functions provided in the \u003ca\u003eNLP.WordNet.WordNet\u003c/a\u003e module\n are \u003cem\u003elazy\u003c/em\u003e, you shouldn't do this until you're really done.\n Or perhaps not at all (GC will eventually kick in).\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "closeWordNet",
          "package": "WordNet",
          "signature": "WordNetEnv -\u003e IO ()",
          "source": "src/NLP-WordNet.html#closeWordNet",
          "type": "function"
        },
        "index": {
          "description": "Closes all the handles associated with the WordNetEnv Since the functions provided in the NLP.WordNet.WordNet module are lazy you shouldn do this until you re really done Or perhaps not at all GC will eventually kick in",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "closeWordNet",
          "normalized": "WordNetEnv-\u003eIO()",
          "package": "WordNet",
          "partial": "Word Net",
          "signature": "WordNetEnv-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:closeWordNet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a utility function to build lazy trees from a function and a root.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "closure",
          "package": "WordNet",
          "signature": "(a -\u003e [a]) -\u003e a -\u003e Tree a",
          "source": "src/NLP-WordNet.html#closure",
          "type": "function"
        },
        "index": {
          "description": "This is utility function to build lazy trees from function and root",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "closure",
          "normalized": "(a-\u003e[a])-\u003ea-\u003eTree a",
          "package": "WordNet",
          "signature": "(a-\u003e[a])-\u003ea-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:closure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis enables \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e-based trees to be built.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e take 5 $ flatten $ closureOn Antonym (head (search \"happy\" Adj AllSenses)))\n [\u003chappy\u003e,\u003cunhappy\u003e,\u003chappy\u003e,\u003cunhappy\u003e,\u003chappy\u003e]\n\u003c/pre\u003e\u003cpre\u003e closureOn Hypernym (head (search \"dog\" Noun 1)))\n - \u003cdog domestic_dog Canis_familiaris\u003e --- \u003ccanine canid\u003e --- \u003ccarnivore\u003e\\-- \u003e   --- \u003cplacental placental_mammal eutherian eutherian_mammal\u003e --- \u003cmammal\u003e\\-- \u003e   --- \u003cvertebrate craniate\u003e --- \u003cchordate\u003e --- \u003canimal animate_being beast\\-- \u003e   brute creature fauna\u003e --- \u003corganism being\u003e --- \u003cliving_thing animate_thing\u003e\\-- \u003e   --- \u003cobject physical_object\u003e --- \u003centity\u003e \n\u003c/pre\u003e",
          "module": "NLP.WordNet",
          "name": "closureOn",
          "package": "WordNet",
          "signature": "WN (Form -\u003e SearchResult -\u003e Tree SearchResult)",
          "source": "src/NLP-WordNet.html#closureOn",
          "type": "function"
        },
        "index": {
          "description": "This enables Form based trees to be built For example take flatten closureOn Antonym head search happy Adj AllSenses happy unhappy happy unhappy happy closureOn Hypernym head search dog Noun dog domestic dog Canis familiaris canine canid carnivore placental placental mammal eutherian eutherian mammal mammal vertebrate craniate chordate animal animate being beast brute creature fauna organism being living thing animate thing object physical object entity",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "closureOn",
          "normalized": "WN(Form-\u003eSearchResult-\u003eTree SearchResult)",
          "package": "WordNet",
          "partial": "On",
          "signature": "WN(Form-\u003eSearchResult-\u003eTree SearchResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:closureOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "emptyBag",
          "package": "WordNet",
          "signature": "b a",
          "source": "src/NLP-WordNet.html#emptyBag",
          "type": "method"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "emptyBag",
          "package": "WordNet",
          "partial": "Bag",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:emptyBag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty queue.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "emptyQueue",
          "package": "WordNet",
          "signature": "Queue a",
          "source": "src/NLP-WordNet.html#emptyQueue",
          "type": "function"
        },
        "index": {
          "description": "An empty queue",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "emptyQueue",
          "package": "WordNet",
          "partial": "Queue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:emptyQueue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty stack.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "emptyStack",
          "package": "WordNet",
          "signature": "[a]",
          "source": "src/NLP-WordNet.html#emptyStack",
          "type": "function"
        },
        "index": {
          "description": "An empty stack",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "emptyStack",
          "normalized": "[a]",
          "package": "WordNet",
          "partial": "Stack",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:emptyStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis will give you the directory from which the databases are being read.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "getDataDirectory",
          "package": "WordNet",
          "signature": "WN FilePath",
          "source": "src/NLP-WordNet-Types.html#getDataDirectory",
          "type": "function"
        },
        "index": {
          "description": "This will give you the directory from which the databases are being read",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "getDataDirectory",
          "package": "WordNet",
          "partial": "Data Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:getDataDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis takes a word and returns an \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e of all its senses\n for all parts of speech.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "getOverview",
          "package": "WordNet",
          "signature": "WN (Word -\u003e Overview)",
          "source": "src/NLP-WordNet.html#getOverview",
          "type": "function"
        },
        "index": {
          "description": "This takes word and returns an Overview of all its senses for all parts of speech",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "getOverview",
          "normalized": "WN(Word-\u003eOverview)",
          "package": "WordNet",
          "partial": "Overview",
          "signature": "WN(Word-\u003eOverview)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:getOverview"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis will give you the current release of the WordNet databases\n we are using (if we know).\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "getReleaseVersion",
          "package": "WordNet",
          "signature": "WN (Maybe String)",
          "source": "src/NLP-WordNet-Types.html#getReleaseVersion",
          "type": "function"
        },
        "index": {
          "description": "This will give you the current release of the WordNet databases we are using if we know",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "getReleaseVersion",
          "package": "WordNet",
          "partial": "Release Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:getReleaseVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGives you a \u003ccode\u003e\u003ca\u003eWordNetEnv\u003c/a\u003e\u003c/code\u003e which can be passed to \u003ccode\u003e\u003ca\u003eruns\u003c/a\u003e\u003c/code\u003e or used\n as the implicit parameter to the other WordNet functions.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "initializeWordNet",
          "package": "WordNet",
          "signature": "IO WordNetEnv",
          "source": "src/NLP-WordNet.html#initializeWordNet",
          "type": "function"
        },
        "index": {
          "description": "Gives you WordNetEnv which can be passed to runs or used as the implicit parameter to the other WordNet functions",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "initializeWordNet",
          "package": "WordNet",
          "partial": "Word Net",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:initializeWordNet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a FilePath to the directory holding WordNet and\n a function to do with warnings, initializes \n the environment and returns a \u003ccode\u003e\u003ca\u003eWordNetEnv\u003c/a\u003e\u003c/code\u003e as in \u003ccode\u003e\u003ca\u003einitializeWordNet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "initializeWordNetWithOptions",
          "package": "WordNet",
          "signature": "Maybe FilePath -\u003e Maybe (String -\u003e SomeException -\u003e IO ()) -\u003e IO WordNetEnv",
          "source": "src/NLP-WordNet.html#initializeWordNetWithOptions",
          "type": "function"
        },
        "index": {
          "description": "Takes FilePath to the directory holding WordNet and function to do with warnings initializes the environment and returns WordNetEnv as in initializeWordNet",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "initializeWordNetWithOptions",
          "normalized": "Maybe FilePath-\u003eMaybe(String-\u003eSomeException-\u003eIO())-\u003eIO WordNetEnv",
          "package": "WordNet",
          "partial": "Word Net With Options",
          "signature": "Maybe FilePath-\u003eMaybe(String-\u003eSomeException-\u003eIO())-\u003eIO WordNetEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:initializeWordNetWithOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "isEmptyBag",
          "package": "WordNet",
          "signature": "b a -\u003e Bool",
          "source": "src/NLP-WordNet.html#isEmptyBag",
          "type": "method"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "isEmptyBag",
          "normalized": "a b-\u003eBool",
          "package": "WordNet",
          "partial": "Empty Bag",
          "signature": "b a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:isEmptyBag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis takes a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003esrToKey\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esrFormKeys\u003c/a\u003e\u003c/code\u003e) and looks it\n up in the databse.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "lookupKey",
          "package": "WordNet",
          "signature": "WN (Key -\u003e SearchResult)",
          "source": "src/NLP-WordNet.html#lookupKey",
          "type": "function"
        },
        "index": {
          "description": "This takes Key see srToKey and srFormKeys and looks it up in the databse",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "lookupKey",
          "normalized": "WN(Key-\u003eSearchResult)",
          "package": "WordNet",
          "partial": "Key",
          "signature": "WN(Key-\u003eSearchResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:lookupKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes an empty bag (in particular, this is to specify\n what type of search to perform), and the results of two search.\n It returns (maybe) the lowest point at which the two terms\n meet in the WordNet hierarchy.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e meet emptyQueue (head $ search \"cat\" Noun 1) (head $ search \"dog\" Noun 1)\n Just \u003ccarnivore\u003e\n\u003c/pre\u003e\u003cpre\u003e meet emptyQueue (head $ search \"run\" Verb 1) (head $ search \"walk\" Verb 1)\n Just \u003ctravel go move locomote\u003e\n\u003c/pre\u003e",
          "module": "NLP.WordNet",
          "name": "meet",
          "package": "WordNet",
          "signature": "WN (b (Tree SearchResult) -\u003e SearchResult -\u003e SearchResult -\u003e Maybe SearchResult)",
          "source": "src/NLP-WordNet.html#meet",
          "type": "function"
        },
        "index": {
          "description": "This function takes an empty bag in particular this is to specify what type of search to perform and the results of two search It returns maybe the lowest point at which the two terms meet in the WordNet hierarchy For example meet emptyQueue head search cat Noun head search dog Noun Just carnivore meet emptyQueue head search run Verb head search walk Verb Just travel go move locomote",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "meet",
          "normalized": "WN(a(Tree SearchResult)-\u003eSearchResult-\u003eSearchResult-\u003eMaybe SearchResult)",
          "package": "WordNet",
          "signature": "WN(b(Tree SearchResult)-\u003eSearchResult-\u003eSearchResult-\u003eMaybe SearchResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:meet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes an empty bag (see \u003ccode\u003e\u003ca\u003emeet\u003c/a\u003e\u003c/code\u003e), and the results of two searches.\n It returns (maybe) the lowest point at which the two terms\n meet in the WordNet hierarchy, as well as the paths leading from each\n term to this common term.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e meetPaths emptyQueue (head $ search \"cat\" Noun 1) (head $ search \"dog\" Noun 1)\n Just ([\u003ccat true_cat\u003e,\u003cfeline felid\u003e],\u003ccarnivore\u003e,[\u003ccanine canid\u003e,\u003cdog domestic_dog Canis_familiaris\u003e])\n\u003c/pre\u003e\u003cpre\u003e meetPaths emptyQueue (head $ search \"run\" Verb 1) (head $ search \"walk\" Verb 1)\n Just ([\u003crun\u003e,\u003ctravel_rapidly speed hurry zip\u003e],\u003ctravel go move locomote\u003e,[\u003cwalk\u003e])\n\u003c/pre\u003e\u003cp\u003eThis is marginally less efficient than just using \u003ccode\u003e\u003ca\u003emeet\u003c/a\u003e\u003c/code\u003e, since it uses\n linear-time lookup for the visited sets, whereas \u003ccode\u003e\u003ca\u003emeet\u003c/a\u003e\u003c/code\u003e uses log-time\n lookup.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "meetPaths",
          "package": "WordNet",
          "signature": "WN (b (Tree SearchResult) -\u003e SearchResult -\u003e SearchResult -\u003e Maybe ([SearchResult], SearchResult, [SearchResult]))",
          "source": "src/NLP-WordNet.html#meetPaths",
          "type": "function"
        },
        "index": {
          "description": "This function takes an empty bag see meet and the results of two searches It returns maybe the lowest point at which the two terms meet in the WordNet hierarchy as well as the paths leading from each term to this common term For example meetPaths emptyQueue head search cat Noun head search dog Noun Just cat true cat feline felid carnivore canine canid dog domestic dog Canis familiaris meetPaths emptyQueue head search run Verb head search walk Verb Just run travel rapidly speed hurry zip travel go move locomote walk This is marginally less efficient than just using meet since it uses linear-time lookup for the visited sets whereas meet uses log-time lookup",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "meetPaths",
          "normalized": "WN(a(Tree SearchResult)-\u003eSearchResult-\u003eSearchResult-\u003eMaybe([SearchResult],SearchResult,[SearchResult]))",
          "package": "WordNet",
          "partial": "Paths",
          "signature": "WN(b(Tree SearchResult)-\u003eSearchResult-\u003eSearchResult-\u003eMaybe([SearchResult],SearchResult,[SearchResult]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:meetPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "meetSearchPaths",
          "package": "WordNet",
          "signature": "b (Tree SearchResult) -\u003e Tree SearchResult -\u003e Tree SearchResult -\u003e Maybe ([SearchResult], SearchResult, [SearchResult])",
          "source": "src/NLP-WordNet.html#meetSearchPaths",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "meetSearchPaths",
          "normalized": "a(Tree SearchResult)-\u003eTree SearchResult-\u003eTree SearchResult-\u003eMaybe([SearchResult],SearchResult,[SearchResult])",
          "package": "WordNet",
          "partial": "Search Paths",
          "signature": "b(Tree SearchResult)-\u003eTree SearchResult-\u003eTree SearchResult-\u003eMaybe([SearchResult],SearchResult,[SearchResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:meetSearchPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e, this will tell you how many adjective senses the searched-for word has.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "numAdjSenses",
          "package": "WordNet",
          "signature": "Overview -\u003e Int",
          "source": "src/NLP-WordNet-Types.html#numAdjSenses",
          "type": "function"
        },
        "index": {
          "description": "Given an Overview this will tell you how many adjective senses the searched-for word has",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "numAdjSenses",
          "normalized": "Overview-\u003eInt",
          "package": "WordNet",
          "partial": "Adj Senses",
          "signature": "Overview-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:numAdjSenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e, this will tell you how many adverb senses the searched-for word has.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "numAdvSenses",
          "package": "WordNet",
          "signature": "Overview -\u003e Int",
          "source": "src/NLP-WordNet-Types.html#numAdvSenses",
          "type": "function"
        },
        "index": {
          "description": "Given an Overview this will tell you how many adverb senses the searched-for word has",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "numAdvSenses",
          "normalized": "Overview-\u003eInt",
          "package": "WordNet",
          "partial": "Adv Senses",
          "signature": "Overview-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:numAdvSenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e, this will tell you how many noun senses the searched-for word has.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "numNounSenses",
          "package": "WordNet",
          "signature": "Overview -\u003e Int",
          "source": "src/NLP-WordNet-Types.html#numNounSenses",
          "type": "function"
        },
        "index": {
          "description": "Given an Overview this will tell you how many noun senses the searched-for word has",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "numNounSenses",
          "normalized": "Overview-\u003eInt",
          "package": "WordNet",
          "partial": "Noun Senses",
          "signature": "Overview-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:numNounSenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e, this will tell you how many verb senses the searched-for word has.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "numVerbSenses",
          "package": "WordNet",
          "signature": "Overview -\u003e Int",
          "source": "src/NLP-WordNet-Types.html#numVerbSenses",
          "type": "function"
        },
        "index": {
          "description": "Given an Overview this will tell you how many verb senses the searched-for word has",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "numVerbSenses",
          "normalized": "Overview-\u003eInt",
          "package": "WordNet",
          "partial": "Verb Senses",
          "signature": "Overview-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:numVerbSenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis takes a \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eSearchResult\u003c/a\u003e\u003c/code\u003e and returns all\n \u003ccode\u003e\u003ca\u003eSearchResult\u003c/a\u003e\u003c/code\u003e related to the given one by the given \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e relatedBy Antonym (head (search \"happy\" Adj 1))\n [\u003cunhappy\u003e]\n\n relatedBy Hypernym (head (search \"dog\" Noun 1))\n [\u003ccanine canid\u003e]\n\u003c/pre\u003e",
          "module": "NLP.WordNet",
          "name": "relatedBy",
          "package": "WordNet",
          "signature": "WN (Form -\u003e SearchResult -\u003e [SearchResult])",
          "source": "src/NLP-WordNet.html#relatedBy",
          "type": "function"
        },
        "index": {
          "description": "This takes Form and SearchResult and returns all SearchResult related to the given one by the given Form For example relatedBy Antonym head search happy Adj unhappy relatedBy Hypernym head search dog Noun canine canid",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "relatedBy",
          "normalized": "WN(Form-\u003eSearchResult-\u003e[SearchResult])",
          "package": "WordNet",
          "partial": "By",
          "signature": "WN(Form-\u003eSearchResult-\u003e[SearchResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:relatedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a WordNet command, initializes the environment\n and returns the results in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  WordNet\n warnings are printed to stderr.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "runWordNet",
          "package": "WordNet",
          "signature": "WN a -\u003e IO a",
          "source": "src/NLP-WordNet.html#runWordNet",
          "type": "function"
        },
        "index": {
          "description": "Takes WordNet command initializes the environment and returns the results in the IO monad WordNet warnings are printed to stderr",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "runWordNet",
          "normalized": "WN a-\u003eIO a",
          "package": "WordNet",
          "partial": "Word Net",
          "signature": "WN a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:runWordNet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a WordNet command, initializes the environment\n and returns the results in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.  WordNet\n warnings are ignored.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "runWordNetQuiet",
          "package": "WordNet",
          "signature": "WN a -\u003e IO a",
          "source": "src/NLP-WordNet.html#runWordNetQuiet",
          "type": "function"
        },
        "index": {
          "description": "Takes WordNet command initializes the environment and returns the results in the IO monad WordNet warnings are ignored",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "runWordNetQuiet",
          "normalized": "WN a-\u003eIO a",
          "package": "WordNet",
          "partial": "Word Net Quiet",
          "signature": "WN a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:runWordNetQuiet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a FilePath to the directory holding WordNet and\n a function to do with warnings and a WordNet command, initializes \n the environment and returns the results in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "runWordNetWithOptions",
          "package": "WordNet",
          "signature": "Maybe FilePath -\u003e Maybe (String -\u003e SomeException -\u003e IO ()) -\u003e WN a -\u003e IO a",
          "source": "src/NLP-WordNet.html#runWordNetWithOptions",
          "type": "function"
        },
        "index": {
          "description": "Takes FilePath to the directory holding WordNet and function to do with warnings and WordNet command initializes the environment and returns the results in the IO monad",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "runWordNetWithOptions",
          "normalized": "Maybe FilePath-\u003eMaybe(String-\u003eSomeException-\u003eIO())-\u003eWN a-\u003eIO a",
          "package": "WordNet",
          "partial": "Word Net With Options",
          "signature": "Maybe FilePath-\u003eMaybe(String-\u003eSomeException-\u003eIO())-\u003eWN a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:runWordNetWithOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis simply takes a \u003ccode\u003e\u003ca\u003eWordNetEnv\u003c/a\u003e\u003c/code\u003e and provides it as the\n implicit parameter to the WordNet command.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "runs",
          "package": "WordNet",
          "signature": "WordNetEnv -\u003e WN a -\u003e a",
          "source": "src/NLP-WordNet.html#runs",
          "type": "function"
        },
        "index": {
          "description": "This simply takes WordNetEnv and provides it as the implicit parameter to the WordNet command",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "runs",
          "normalized": "WordNetEnv-\u003eWN a-\u003ea",
          "package": "WordNet",
          "signature": "WordNetEnv-\u003eWN a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:runs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis takes a \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e, a \u003ccode\u003e\u003ca\u003ePOS\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eSenseType\u003c/a\u003e\u003c/code\u003e and returns\n the equivalent of first running \u003ccode\u003e\u003ca\u003egetOverview\u003c/a\u003e\u003c/code\u003e and then \u003ccode\u003e\u003ca\u003esearchByOverview\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "search",
          "package": "WordNet",
          "signature": "WN (Word -\u003e POS -\u003e SenseType -\u003e [SearchResult])",
          "source": "src/NLP-WordNet.html#search",
          "type": "function"
        },
        "index": {
          "description": "This takes Word POS and SenseType and returns the equivalent of first running getOverview and then searchByOverview",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "search",
          "normalized": "WN(Word-\u003ePOS-\u003eSenseType-\u003e[SearchResult])",
          "package": "WordNet",
          "signature": "WN(Word-\u003ePOS-\u003eSenseType-\u003e[SearchResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis takes an \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003egetOverview\u003c/a\u003e\u003c/code\u003e), a \u003ccode\u003e\u003ca\u003ePOS\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eSenseType\u003c/a\u003e\u003c/code\u003e and returns\n a list of search results.  If \u003ccode\u003e\u003ca\u003eSenseType\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eAllSenses\u003c/a\u003e\u003c/code\u003e, there will be one\n \u003ccode\u003e\u003ca\u003eSearchResult\u003c/a\u003e\u003c/code\u003e in the results for each valid sense.  If \u003ccode\u003e\u003ca\u003eSenseType\u003c/a\u003e\u003c/code\u003e is\n a single sense number, there will be at most one element in the result list.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "searchByOverview",
          "package": "WordNet",
          "signature": "WN (Overview -\u003e POS -\u003e SenseType -\u003e [SearchResult])",
          "source": "src/NLP-WordNet.html#searchByOverview",
          "type": "function"
        },
        "index": {
          "description": "This takes an Overview see getOverview POS and SenseType and returns list of search results If SenseType is AllSenses there will be one SearchResult in the results for each valid sense If SenseType is single sense number there will be at most one element in the result list",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "searchByOverview",
          "normalized": "WN(Overview-\u003ePOS-\u003eSenseType-\u003e[SearchResult])",
          "package": "WordNet",
          "partial": "By Overview",
          "signature": "WN(Overview-\u003ePOS-\u003eSenseType-\u003e[SearchResult])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:searchByOverview"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.WordNet",
          "name": "splitBag",
          "package": "WordNet",
          "signature": "b a -\u003e (a, b a)",
          "source": "src/NLP-WordNet.html#splitBag",
          "type": "method"
        },
        "index": {
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "splitBag",
          "normalized": "a b-\u003e(b,a b)",
          "package": "WordNet",
          "partial": "Bag",
          "signature": "b a-\u003e(a,b a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:splitBag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis gives the definition of the sense of a word in a \u003ccode\u003e\u003ca\u003eSearchResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "srDefinition",
          "package": "WordNet",
          "signature": "SearchResult -\u003e String",
          "source": "src/NLP-WordNet-Types.html#srDefinition",
          "type": "function"
        },
        "index": {
          "description": "This gives the definition of the sense of word in SearchResult",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "srDefinition",
          "normalized": "SearchResult-\u003eString",
          "package": "WordNet",
          "partial": "Definition",
          "signature": "SearchResult-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:srDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis provides a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e (which can be searched for using \u003ccode\u003elookupKey\u003c/code\u003e) for\n a \u003ccode\u003e\u003ca\u003eSearchResult\u003c/a\u003e\u003c/code\u003e under a given form.  For instance, it can be used to\n get all \u003ccode\u003e\u003ca\u003eHypernym\u003c/a\u003e\u003c/code\u003es of a given word.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "srFormKeys",
          "package": "WordNet",
          "signature": "SearchResult -\u003e Form -\u003e [Key]",
          "source": "src/NLP-WordNet-Types.html#srFormKeys",
          "type": "function"
        },
        "index": {
          "description": "This provides Key which can be searched for using lookupKey for SearchResult under given form For instance it can be used to get all Hypernym of given word",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "srFormKeys",
          "normalized": "SearchResult-\u003eForm-\u003e[Key]",
          "package": "WordNet",
          "partial": "Form Keys",
          "signature": "SearchResult-\u003eForm-\u003e[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:srFormKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis gives all the \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003es a word has (i.e., what sort of relations hold between\n it and other words.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "srForms",
          "package": "WordNet",
          "signature": "SearchResult -\u003e [Form]",
          "source": "src/NLP-WordNet-Types.html#srForms",
          "type": "function"
        },
        "index": {
          "description": "This gives all the Form word has i.e what sort of relations hold between it and other words",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "srForms",
          "normalized": "SearchResult-\u003e[Form]",
          "package": "WordNet",
          "partial": "Forms",
          "signature": "SearchResult-\u003e[Form]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:srForms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis provides (maybe) the associated overview for a SearchResult.\n The \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e is only available if this \u003ccode\u003e\u003ca\u003eSearchResult\u003c/a\u003e\u003c/code\u003e was\n derived from a real search, rather than \u003ccode\u003elookupKey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "srOverview",
          "package": "WordNet",
          "signature": "SearchResult -\u003e Maybe Overview",
          "source": "src/NLP-WordNet-PrimTypes.html#srOverview",
          "type": "function"
        },
        "index": {
          "description": "This provides maybe the associated overview for SearchResult The Overview is only available if this SearchResult was derived from real search rather than lookupKey",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "srOverview",
          "normalized": "SearchResult-\u003eMaybe Overview",
          "package": "WordNet",
          "partial": "Overview",
          "signature": "SearchResult-\u003eMaybe Overview",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:srOverview"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis gives the part of speech of a \u003ccode\u003e\u003ca\u003eSearchResult\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "srPOS",
          "package": "WordNet",
          "signature": "SearchResult -\u003e POS",
          "source": "src/NLP-WordNet-Types.html#srPOS",
          "type": "function"
        },
        "index": {
          "description": "This gives the part of speech of SearchResult",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "srPOS",
          "normalized": "SearchResult-\u003ePOS",
          "package": "WordNet",
          "partial": "POS",
          "signature": "SearchResult-\u003ePOS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:srPOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis provides (maybe) the associated sense number for a SearchResult.\n The \u003ccode\u003e\u003ca\u003eSenseType\u003c/a\u003e\u003c/code\u003e is only available if this \u003ccode\u003e\u003ca\u003eSearchResult\u003c/a\u003e\u003c/code\u003e was\n derived from a real search, rather than \u003ccode\u003elookupKey\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "srSenseNum",
          "package": "WordNet",
          "signature": "SearchResult -\u003e Maybe SenseType",
          "source": "src/NLP-WordNet-PrimTypes.html#srSenseNum",
          "type": "function"
        },
        "index": {
          "description": "This provides maybe the associated sense number for SearchResult The SenseType is only available if this SearchResult was derived from real search rather than lookupKey",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "srSenseNum",
          "normalized": "SearchResult-\u003eMaybe SenseType",
          "package": "WordNet",
          "partial": "Sense Num",
          "signature": "SearchResult-\u003eMaybe SenseType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:srSenseNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis gives a list of senses the word has.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "srSenses",
          "package": "WordNet",
          "signature": "SearchResult -\u003e [SenseType]",
          "source": "src/NLP-WordNet-Types.html#srSenses",
          "type": "function"
        },
        "index": {
          "description": "This gives list of senses the word has",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "srSenses",
          "normalized": "SearchResult-\u003e[SenseType]",
          "package": "WordNet",
          "partial": "Senses",
          "signature": "SearchResult-\u003e[SenseType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:srSenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis converts a \u003ccode\u003e\u003ca\u003eSearchResult\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "srToKey",
          "package": "WordNet",
          "signature": "SearchResult -\u003e Key",
          "source": "src/NLP-WordNet-Types.html#srToKey",
          "type": "function"
        },
        "index": {
          "description": "This converts SearchResult into Key",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "srToKey",
          "normalized": "SearchResult-\u003eKey",
          "package": "WordNet",
          "partial": "To Key",
          "signature": "SearchResult-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:srToKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis gives the actual words used to describe the Synset of a search result.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "srWords",
          "package": "WordNet",
          "signature": "SearchResult -\u003e SenseType -\u003e [Word]",
          "source": "src/NLP-WordNet-Types.html#srWords",
          "type": "function"
        },
        "index": {
          "description": "This gives the actual words used to describe the Synset of search result",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "srWords",
          "normalized": "SearchResult-\u003eSenseType-\u003e[Word]",
          "package": "WordNet",
          "partial": "Words",
          "signature": "SearchResult-\u003eSenseType-\u003e[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:srWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e, this will tell you how many times this word was tagged as an adjective.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "taggedCountAdjSenses",
          "package": "WordNet",
          "signature": "Overview -\u003e Int",
          "source": "src/NLP-WordNet-Types.html#taggedCountAdjSenses",
          "type": "function"
        },
        "index": {
          "description": "Given an Overview this will tell you how many times this word was tagged as an adjective",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "taggedCountAdjSenses",
          "normalized": "Overview-\u003eInt",
          "package": "WordNet",
          "partial": "Count Adj Senses",
          "signature": "Overview-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:taggedCountAdjSenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e, this will tell you how many times this word was tagged as an adverb.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "taggedCountAdvSenses",
          "package": "WordNet",
          "signature": "Overview -\u003e Int",
          "source": "src/NLP-WordNet-Types.html#taggedCountAdvSenses",
          "type": "function"
        },
        "index": {
          "description": "Given an Overview this will tell you how many times this word was tagged as an adverb",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "taggedCountAdvSenses",
          "normalized": "Overview-\u003eInt",
          "package": "WordNet",
          "partial": "Count Adv Senses",
          "signature": "Overview-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:taggedCountAdvSenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e, this will tell you how many times this word was tagged as a noun.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "taggedCountNounSenses",
          "package": "WordNet",
          "signature": "Overview -\u003e Int",
          "source": "src/NLP-WordNet-Types.html#taggedCountNounSenses",
          "type": "function"
        },
        "index": {
          "description": "Given an Overview this will tell you how many times this word was tagged as noun",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "taggedCountNounSenses",
          "normalized": "Overview-\u003eInt",
          "package": "WordNet",
          "partial": "Count Noun Senses",
          "signature": "Overview-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:taggedCountNounSenses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an \u003ccode\u003e\u003ca\u003eOverview\u003c/a\u003e\u003c/code\u003e, this will tell you how many times this word was tagged as a verb.\n\u003c/p\u003e",
          "module": "NLP.WordNet",
          "name": "taggedCountVerbSenses",
          "package": "WordNet",
          "signature": "Overview -\u003e Int",
          "source": "src/NLP-WordNet-Types.html#taggedCountVerbSenses",
          "type": "function"
        },
        "index": {
          "description": "Given an Overview this will tell you how many times this word was tagged as verb",
          "hierarchy": "NLP WordNet",
          "module": "NLP.WordNet",
          "name": "taggedCountVerbSenses",
          "normalized": "Overview-\u003eInt",
          "package": "WordNet",
          "partial": "Count Verb Senses",
          "signature": "Overview-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WordNet/docs/NLP-WordNet.html#v:taggedCountVerbSenses"
      }
    }
  ]
]