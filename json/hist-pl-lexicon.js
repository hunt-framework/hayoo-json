[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides functions for working with the binary\n    representation of the historical dictionary of Polish.\n\u003c/p\u003e\u003cp\u003eIt is intended to be imported qualified, to avoid name\n    clashes with Prelude functions, e.g. \n\u003c/p\u003e\u003cpre\u003e import qualified NLP.HistPL.Lexicon as H\n\u003c/pre\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eload\u003c/a\u003e\u003c/code\u003e functions to save/load\n    the entire dictionary in/from a given directory.\n\u003c/p\u003e\u003cp\u003eTo search the dictionary, open the binary directory with an\n    \u003ccode\u003e\u003ca\u003eopen\u003c/a\u003e\u003c/code\u003e function.  For example, during a \u003ccode\u003eGHCi\u003c/code\u003e session:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ehpl \u003c- H.open \"srpsdp.bin\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eSet the OverloadedStrings extension for convenience:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eTo search the dictionary use the \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e function, e.g.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eentries \u003c- H.lookup hpl \"dufliwego\"\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e\u003cp\u003eYou can use functions defined in the \u003ca\u003eNLP.HistPL.Types\u003c/a\u003e module\n    to query the entries for a particular feature, e.g.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap (H.text . H.lemma) entries\n\u003c/code\u003e\u003c/strong\u003e[[\"dufliwy\"]]\n\u003c/pre\u003e\u003cp\u003eFinally, if you need to follow an ID pointer kept in one entry\n    as a reference to another one, use the \u003ccode\u003e\u003ca\u003eloadI\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003etryLoadI\u003c/a\u003e\u003c/code\u003e\n    functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "module",
        "fct-source": "src/NLP-HistPL-Lexicon.html",
        "fct-type": "module",
        "title": "Lexicon"
      },
      "index": {
        "description": "The module provides functions for working with the binary representation of the historical dictionary of Polish It is intended to be imported qualified to avoid name clashes with Prelude functions e.g import qualified NLP.HistPL.Lexicon as Use save and load functions to save load the entire dictionary in from given directory To search the dictionary open the binary directory with an open function For example during GHCi session hpl H.open srpsdp.bin Set the OverloadedStrings extension for convenience set XOverloadedStrings To search the dictionary use the lookup function e.g entries H.lookup hpl dufliwego You can use functions defined in the NLP.HistPL.Types module to query the entries for particular feature e.g map H.text H.lemma entries dufliwy Finally if you need to follow an ID pointer kept in one entry as reference to another one use the loadI or tryLoadI functions",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "Lexicon",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "Lexicon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#t:Code",
      "description": {
        "fct-descr": "\u003cp\u003eCode represents a word origin.  See the \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003e function to\n learn why do we provide this information.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "data",
        "fct-source": "src/NLP-HistPL-Lexicon.html#Code",
        "fct-type": "data",
        "title": "Code"
      },
      "index": {
        "description": "Code represents word origin See the save function to learn why do we provide this information",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "Code",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#t:HistPL",
      "description": {
        "fct-descr": "\u003cp\u003eA binary version of the old Polish dictionary.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "data",
        "fct-source": "src/NLP-HistPL-Lexicon.html#HistPL",
        "fct-type": "data",
        "title": "HistPL"
      },
      "index": {
        "description": "binary version of the old Polish dictionary",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "HistPL",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "Hist PL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eA dictionary key which uniquely identifies the lexical entry.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Lexicon.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "dictionary key which uniquely identifies the lexical entry",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "Key",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#t:UID",
      "description": {
        "fct-descr": "\u003cp\u003eA unique identifier among entries with the same \u003ccode\u003ekeyForm\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "type",
        "fct-source": "src/NLP-HistPL-Lexicon.html#UID",
        "fct-type": "type",
        "title": "UID"
      },
      "index": {
        "description": "unique identifier among entries with the same keyForm",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "UID",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "UID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:Both",
      "description": {
        "fct-descr": "\u003cp\u003efrom both historical and another dictionary\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "Both",
        "fct-source": "src/NLP-HistPL-Lexicon.html#Code",
        "fct-type": "function",
        "title": "Both"
      },
      "index": {
        "description": "from both historical and another dictionary",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "Both",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "Both",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:Copy",
      "description": {
        "fct-descr": "\u003cp\u003eonly from another dictionary\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "Copy",
        "fct-source": "src/NLP-HistPL-Lexicon.html#Code",
        "fct-type": "function",
        "title": "Copy"
      },
      "index": {
        "description": "only from another dictionary",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "Copy",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:HistPL",
      "description": {
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL",
        "fct-source": "src/NLP-HistPL-Lexicon.html#HistPL",
        "fct-type": "function",
        "title": "HistPL"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "HistPL",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "Hist PL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:Orig",
      "description": {
        "fct-descr": "\u003cp\u003eonly from historical dictionary\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "Orig",
        "fct-source": "src/NLP-HistPL-Lexicon.html#Code",
        "fct-type": "function",
        "title": "Orig"
      },
      "index": {
        "description": "only from historical dictionary",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "Orig",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "Orig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:dictIDs",
      "description": {
        "fct-descr": "\u003cp\u003eList of dictionary IDs.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e Producer Text IO ()",
        "fct-source": "src/NLP-HistPL-Lexicon.html#dictIDs",
        "fct-type": "function",
        "title": "dictIDs"
      },
      "index": {
        "description": "List of dictionary IDs",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "dictIDs",
        "normalized": "HistPL-\u003eProducer Text IO()",
        "package": "hist-pl-lexicon",
        "partial": "IDs",
        "signature": "HistPL-\u003eProducer Text IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:dictKeys",
      "description": {
        "fct-descr": "\u003cp\u003eList of dictionary keys.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e Producer Key IO ()",
        "fct-source": "src/NLP-HistPL-Lexicon.html#dictKeys",
        "fct-type": "function",
        "title": "dictKeys"
      },
      "index": {
        "description": "List of dictionary keys",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "dictKeys",
        "normalized": "HistPL-\u003eProducer Key IO()",
        "package": "hist-pl-lexicon",
        "partial": "Keys",
        "signature": "HistPL-\u003eProducer Key IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:dictPath",
      "description": {
        "fct-descr": "\u003cp\u003eA path to the binary dictionary.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "FilePath",
        "fct-source": "src/NLP-HistPL-Lexicon.html#HistPL",
        "fct-type": "function",
        "title": "dictPath"
      },
      "index": {
        "description": "path to the binary dictionary",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "dictPath",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:formMap",
      "description": {
        "fct-descr": "\u003cp\u003eA dictionary with lexicon forms.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "DAWG UID () Code",
        "fct-source": "src/NLP-HistPL-Lexicon.html#HistPL",
        "fct-type": "function",
        "title": "formMap"
      },
      "index": {
        "description": "dictionary with lexicon forms",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "formMap",
        "normalized": "DAWG UID()Code",
        "package": "hist-pl-lexicon",
        "partial": "Map",
        "signature": "DAWG UID()Code"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eA producer of all dictionary entries.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e Producer (Key, LexEntry) IO ()",
        "fct-source": "src/NLP-HistPL-Lexicon.html#load",
        "fct-type": "function",
        "title": "load"
      },
      "index": {
        "description": "producer of all dictionary entries",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "load",
        "normalized": "HistPL-\u003eProducer(Key,LexEntry)IO()",
        "package": "hist-pl-lexicon",
        "partial": "",
        "signature": "HistPL-\u003eProducer(Key,LexEntry)IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:loadI",
      "description": {
        "fct-descr": "\u003cp\u003eLoad lexical entry given its ID.  Raise error if there\n is no entry with such a key.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e Text -\u003e IO LexEntry",
        "fct-source": "src/NLP-HistPL-Lexicon.html#loadI",
        "fct-type": "function",
        "title": "loadI"
      },
      "index": {
        "description": "Load lexical entry given its ID Raise error if there is no entry with such key",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "loadI",
        "normalized": "HistPL-\u003eText-\u003eIO LexEntry",
        "package": "hist-pl-lexicon",
        "partial": "",
        "signature": "HistPL-\u003eText-\u003eIO LexEntry"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:loadK",
      "description": {
        "fct-descr": "\u003cp\u003eLoad lexical entry given its key.  Raise error if there\n is no entry with such a key.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e Key -\u003e IO LexEntry",
        "fct-source": "src/NLP-HistPL-Lexicon.html#loadK",
        "fct-type": "function",
        "title": "loadK"
      },
      "index": {
        "description": "Load lexical entry given its key Raise error if there is no entry with such key",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "loadK",
        "normalized": "HistPL-\u003eKey-\u003eIO LexEntry",
        "package": "hist-pl-lexicon",
        "partial": "",
        "signature": "HistPL-\u003eKey-\u003eIO LexEntry"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the form in the dictionary.\n The resultant list constitutes a map from entries to \u003ccode\u003e\u003ca\u003eCode\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e Text -\u003e IO [(LexEntry, Code)]",
        "fct-source": "src/NLP-HistPL-Lexicon.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the form in the dictionary The resultant list constitutes map from entries to Code",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "lookup",
        "normalized": "HistPL-\u003eText-\u003eIO[(LexEntry,Code)]",
        "package": "hist-pl-lexicon",
        "partial": "",
        "signature": "HistPL-\u003eText-\u003eIO[(LexEntry,Code)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:lookupMany",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a set of forms in the dictionary.\n The resultant list constitutes a map from entries to \u003ccode\u003e\u003ca\u003eCode\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e [Text] -\u003e IO [(LexEntry, Code)]",
        "fct-source": "src/NLP-HistPL-Lexicon.html#lookupMany",
        "fct-type": "function",
        "title": "lookupMany"
      },
      "index": {
        "description": "Lookup set of forms in the dictionary The resultant list constitutes map from entries to Code",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "lookupMany",
        "normalized": "HistPL-\u003e[Text]-\u003eIO[(LexEntry,Code)]",
        "package": "hist-pl-lexicon",
        "partial": "Many",
        "signature": "HistPL-\u003e[Text]-\u003eIO[(LexEntry,Code)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:nthSuffix",
      "description": {
        "fct-descr": "\u003cp\u003eGet suffix of the \u003ccode\u003ei\u003c/code\u003e-th form starting with a given prefix.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e Text -\u003e Int -\u003e Maybe Text",
        "fct-source": "src/NLP-HistPL-Lexicon.html#nthSuffix",
        "fct-type": "function",
        "title": "nthSuffix"
      },
      "index": {
        "description": "Get suffix of the th form starting with given prefix",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "nthSuffix",
        "normalized": "HistPL-\u003eText-\u003eInt-\u003eMaybe Text",
        "package": "hist-pl-lexicon",
        "partial": "Suffix",
        "signature": "HistPL-\u003eText-\u003eInt-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003eOpen the binary dictionary residing in the given directory.\n Raise an error if the directory doesn't exist or if it doesn't\n constitute a dictionary.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "FilePath -\u003e IO HistPL",
        "fct-source": "src/NLP-HistPL-Lexicon.html#open",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "Open the binary dictionary residing in the given directory Raise an error if the directory doesn exist or if it doesn constitute dictionary",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "open",
        "normalized": "FilePath-\u003eIO HistPL",
        "package": "hist-pl-lexicon",
        "partial": "",
        "signature": "FilePath-\u003eIO HistPL"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:save",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct dictionary from a list of lexical entries and save it in\n the given directory.  To each entry an additional set of forms can\n be assigned.  The stream of entry pairs should be terminated by the\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "FilePath -\u003e Consumer (Maybe (LexEntry, Set Text)) IO ()",
        "fct-source": "src/NLP-HistPL-Lexicon.html#save",
        "fct-type": "function",
        "title": "save"
      },
      "index": {
        "description": "Construct dictionary from list of lexical entries and save it in the given directory To each entry an additional set of forms can be assigned The stream of entry pairs should be terminated by the Nothing value",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "save",
        "normalized": "FilePath-\u003eConsumer(Maybe(LexEntry,Set Text))IO()",
        "package": "hist-pl-lexicon",
        "partial": "",
        "signature": "FilePath-\u003eConsumer(Maybe(LexEntry,Set Text))IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:tryLoadI",
      "description": {
        "fct-descr": "\u003cp\u003eLoad lexical entry given its ID.  Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there\n is no entry with such ID.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e Text -\u003e IO (Maybe LexEntry)",
        "fct-source": "src/NLP-HistPL-Lexicon.html#tryLoadI",
        "fct-type": "function",
        "title": "tryLoadI"
      },
      "index": {
        "description": "Load lexical entry given its ID Return Nothing if there is no entry with such ID",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "tryLoadI",
        "normalized": "HistPL-\u003eText-\u003eIO(Maybe LexEntry)",
        "package": "hist-pl-lexicon",
        "partial": "Load",
        "signature": "HistPL-\u003eText-\u003eIO(Maybe LexEntry)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:tryLoadK",
      "description": {
        "fct-descr": "\u003cp\u003eLoad lexical entry given its key.  Return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there\n is no entry with such a key.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e Key -\u003e IO (Maybe LexEntry)",
        "fct-source": "src/NLP-HistPL-Lexicon.html#tryLoadK",
        "fct-type": "function",
        "title": "tryLoadK"
      },
      "index": {
        "description": "Load lexical entry given its key Return Nothing if there is no entry with such key",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "tryLoadK",
        "normalized": "HistPL-\u003eKey-\u003eIO(Maybe LexEntry)",
        "package": "hist-pl-lexicon",
        "partial": "Load",
        "signature": "HistPL-\u003eKey-\u003eIO(Maybe LexEntry)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:tryOpen",
      "description": {
        "fct-descr": "\u003cp\u003eOpen the binary dictionary residing in the given directory.\n Return Nothing if the directory doesn't exist or if it doesn't\n constitute a dictionary.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "FilePath -\u003e IO (Maybe HistPL)",
        "fct-source": "src/NLP-HistPL-Lexicon.html#tryOpen",
        "fct-type": "function",
        "title": "tryOpen"
      },
      "index": {
        "description": "Open the binary dictionary residing in the given directory Return Nothing if the directory doesn exist or if it doesn constitute dictionary",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "tryOpen",
        "normalized": "FilePath-\u003eIO(Maybe HistPL)",
        "package": "hist-pl-lexicon",
        "partial": "Open",
        "signature": "FilePath-\u003eIO(Maybe HistPL)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Lexicon.html#v:withPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the number of entries with a given prefix.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Lexicon",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "HistPL -\u003e Text -\u003e Int",
        "fct-source": "src/NLP-HistPL-Lexicon.html#withPrefix",
        "fct-type": "function",
        "title": "withPrefix"
      },
      "index": {
        "description": "Compute the number of entries with given prefix",
        "hierarchy": "NLP HistPL Lexicon",
        "module": "NLP.HistPL.Lexicon",
        "name": "withPrefix",
        "normalized": "HistPL-\u003eText-\u003eInt",
        "package": "hist-pl-lexicon",
        "partial": "Prefix",
        "signature": "HistPL-\u003eText-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSome utility functions for working with the dictionary.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "NLP.HistPL.Util",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "module",
        "fct-source": "src/NLP-HistPL-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "Some utility functions for working with the dictionary",
        "hierarchy": "NLP HistPL Util",
        "module": "NLP.HistPL.Util",
        "name": "Util",
        "normalized": "",
        "package": "hist-pl-lexicon",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Util.html#v:addForm",
      "description": {
        "fct-descr": "\u003cp\u003eAdd new word form to the lexeme description.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Util",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "WordForm -\u003e LexEntry -\u003e LexEntry",
        "fct-source": "src/NLP-HistPL-Util.html#addForm",
        "fct-type": "function",
        "title": "addForm"
      },
      "index": {
        "description": "Add new word form to the lexeme description",
        "hierarchy": "NLP HistPL Util",
        "module": "NLP.HistPL.Util",
        "name": "addForm",
        "normalized": "WordForm-\u003eLexEntry-\u003eLexEntry",
        "package": "hist-pl-lexicon",
        "partial": "Form",
        "signature": "WordForm-\u003eLexEntry-\u003eLexEntry"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Util.html#v:allForms",
      "description": {
        "fct-descr": "\u003cp\u003eAll format (base form + other forms) of the lexeme.\n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Util",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "LexEntry -\u003e [Text]",
        "fct-source": "src/NLP-HistPL-Util.html#allForms",
        "fct-type": "function",
        "title": "allForms"
      },
      "index": {
        "description": "All format base form other forms of the lexeme",
        "hierarchy": "NLP HistPL Util",
        "module": "NLP.HistPL.Util",
        "name": "allForms",
        "normalized": "LexEntry-\u003e[Text]",
        "package": "hist-pl-lexicon",
        "partial": "Forms",
        "signature": "LexEntry-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hist-pl-lexicon/docs/NLP-HistPL-Util.html#v:hasForm",
      "description": {
        "fct-descr": "\u003cp\u003eDoes lexeme take the given form? \n\u003c/p\u003e",
        "fct-module": "NLP.HistPL.Util",
        "fct-package": "hist-pl-lexicon",
        "fct-signature": "LexEntry -\u003e Text -\u003e Bool",
        "fct-source": "src/NLP-HistPL-Util.html#hasForm",
        "fct-type": "function",
        "title": "hasForm"
      },
      "index": {
        "description": "Does lexeme take the given form",
        "hierarchy": "NLP HistPL Util",
        "module": "NLP.HistPL.Util",
        "name": "hasForm",
        "normalized": "LexEntry-\u003eText-\u003eBool",
        "package": "hist-pl-lexicon",
        "partial": "Form",
        "signature": "LexEntry-\u003eText-\u003eBool"
      }
    }
  }
]