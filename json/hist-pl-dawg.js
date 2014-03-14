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
        "word": "hist-pl-dawg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDAWG\u003c/a\u003e\u003c/code\u003e-based dictionary with additional information\n assigned to lexical entries and word forms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "DAWG",
          "package": "hist-pl-dawg",
          "source": "src/NLP-HistPL-DAWG.html",
          "type": "module"
        },
        "index": {
          "description": "DAWG based dictionary with additional information assigned to lexical entries and word forms",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "DAWG",
          "package": "hist-pl-dawg",
          "partial": "DAWG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dictionary parametrized over ID \u003ccode\u003ei\u003c/code\u003e, with info \u003ccode\u003ea\u003c/code\u003e for every\n (key, i) pair and info \u003ccode\u003eb\u003c/code\u003e for every (key, i, apply rule key) triple.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "DAWG",
          "package": "hist-pl-dawg",
          "source": "src/NLP-HistPL-DAWG.html#DAWG",
          "type": "type"
        },
        "index": {
          "description": "dictionary parametrized over ID with info for every key pair and info for every key apply rule key triple",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "DAWG",
          "package": "hist-pl-dawg",
          "partial": "DAWG",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#t:DAWG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDAWG\u003c/a\u003e\u003c/code\u003e initialization structure (a dynamic DAWG).\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "DAWG'Init",
          "package": "hist-pl-dawg",
          "source": "src/NLP-HistPL-DAWG.html#DAWG%27Init",
          "type": "type"
        },
        "index": {
          "description": "DAWG initialization structure dynamic DAWG",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "DAWG'Init",
          "package": "hist-pl-dawg",
          "partial": "DAWG' Init",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#t:DAWG-39-Init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key of a dictionary entry.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "Key",
          "package": "hist-pl-dawg",
          "source": "src/NLP-HistPL-DAWG.html#Key",
          "type": "data"
        },
        "index": {
          "description": "key of dictionary entry",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "Key",
          "package": "hist-pl-dawg",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dictionary entry consists of a \u003ccode\u003e\u003ca\u003eKey\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eVal\u003c/a\u003e\u003c/code\u003eue.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "Lex",
          "package": "hist-pl-dawg",
          "source": "src/NLP-HistPL-DAWG.html#Lex",
          "type": "data"
        },
        "index": {
          "description": "dictionary entry consists of Key and Val ue",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "Lex",
          "package": "hist-pl-dawg",
          "partial": "Lex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#t:Lex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of dictionary entries.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "LexSet",
          "package": "hist-pl-dawg",
          "source": "src/NLP-HistPL-DAWG.html#LexSet",
          "type": "type"
        },
        "index": {
          "description": "set of dictionary entries",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "LexSet",
          "package": "hist-pl-dawg",
          "partial": "Lex Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#t:LexSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActual values stored in automaton states contain\n all entry information but \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "Node",
          "package": "hist-pl-dawg",
          "source": "src/NLP-HistPL-DAWG.html#Node",
          "type": "type"
        },
        "index": {
          "description": "Actual values stored in automaton states contain all entry information but path",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "Node",
          "package": "hist-pl-dawg",
          "partial": "Node",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rule for translating a form into another form.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "Rule",
          "package": "hist-pl-dawg",
          "source": "src/NLP-HistPL-DAWG.html#Rule",
          "type": "data"
        },
        "index": {
          "description": "rule for translating form into another form",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "Rule",
          "package": "hist-pl-dawg",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of the entry.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "Val",
          "package": "hist-pl-dawg",
          "source": "src/NLP-HistPL-DAWG.html#Val",
          "type": "data"
        },
        "index": {
          "description": "value of the entry",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "Val",
          "package": "hist-pl-dawg",
          "partial": "Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#t:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWeight of a node corresponds to the number of final states\n reachable from the node.  Weight of an edge is a sum of weights\n of preceding nodes outgoing from the same parent node.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "Weight",
          "package": "hist-pl-dawg",
          "type": "type"
        },
        "index": {
          "description": "Weight of node corresponds to the number of final states reachable from the node Weight of an edge is sum of weights of preceding nodes outgoing from the same parent node",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "Weight",
          "package": "hist-pl-dawg",
          "partial": "Weight",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#t:Weight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.HistPL.DAWG",
          "name": "Key",
          "package": "hist-pl-dawg",
          "signature": "Key",
          "source": "src/NLP-HistPL-DAWG.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "Key",
          "package": "hist-pl-dawg",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.HistPL.DAWG",
          "name": "Lex",
          "package": "hist-pl-dawg",
          "signature": "Lex",
          "source": "src/NLP-HistPL-DAWG.html#Lex",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "Lex",
          "package": "hist-pl-dawg",
          "partial": "Lex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:Lex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.HistPL.DAWG",
          "name": "Rule",
          "package": "hist-pl-dawg",
          "signature": "Rule",
          "source": "src/NLP-HistPL-DAWG.html#Rule",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "Rule",
          "package": "hist-pl-dawg",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.HistPL.DAWG",
          "name": "Val",
          "package": "hist-pl-dawg",
          "signature": "Val",
          "source": "src/NLP-HistPL-DAWG.html#Val",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "Val",
          "package": "hist-pl-dawg",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:Val"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the rule.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "apply",
          "package": "hist-pl-dawg",
          "signature": "Rule -\u003e Text -\u003e Text",
          "source": "src/NLP-HistPL-DAWG.html#apply",
          "type": "function"
        },
        "index": {
          "description": "Apply the rule",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "apply",
          "normalized": "Rule-\u003eText-\u003eText",
          "package": "hist-pl-dawg",
          "signature": "Rule-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine a rule which translates between two strings.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "between",
          "package": "hist-pl-dawg",
          "signature": "Text -\u003e Text -\u003e Rule",
          "source": "src/NLP-HistPL-DAWG.html#between",
          "type": "function"
        },
        "index": {
          "description": "Determine rule which translates between two strings",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "between",
          "normalized": "Text-\u003eText-\u003eRule",
          "package": "hist-pl-dawg",
          "signature": "Text-\u003eText-\u003eRule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind dictionary entry given its index with respect to the\n lexicographic order.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "byIndex",
          "package": "hist-pl-dawg",
          "signature": "Int -\u003e DAWG i a b -\u003e Maybe Text",
          "source": "src/NLP-HistPL-DAWG.html#byIndex",
          "type": "function"
        },
        "index": {
          "description": "Find dictionary entry given its index with respect to the lexicographic order",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "byIndex",
          "normalized": "Int-\u003eDAWG a b c-\u003eMaybe Text",
          "package": "hist-pl-dawg",
          "partial": "Index",
          "signature": "Int-\u003eDAWG i a b-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:byIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of characters to cut from the end of the form.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "cut",
          "package": "hist-pl-dawg",
          "signature": "Int",
          "source": "src/NLP-HistPL-DAWG.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "Number of characters to cut from the end of the form",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "cut",
          "package": "hist-pl-dawg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:cut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode dictionary value given \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "decode",
          "package": "hist-pl-dawg",
          "signature": "Text -\u003e Node i a b -\u003e LexSet i a b",
          "source": "src/NLP-HistPL-DAWG.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Decode dictionary value given path",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "decode",
          "normalized": "Text-\u003eNode a b c-\u003eLexSet a b c",
          "package": "hist-pl-dawg",
          "signature": "Text-\u003eNode i a b-\u003eLexSet i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty DAWG.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "empty",
          "package": "hist-pl-dawg",
          "signature": "DAWG a b",
          "type": "function"
        },
        "index": {
          "description": "Empty DAWG",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "empty",
          "package": "hist-pl-dawg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList dictionary lexical entries.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "entries",
          "package": "hist-pl-dawg",
          "signature": "DAWG i a b -\u003e [Lex i a b]",
          "source": "src/NLP-HistPL-DAWG.html#entries",
          "type": "function"
        },
        "index": {
          "description": "List dictionary lexical entries",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "entries",
          "normalized": "DAWG a b c-\u003e[Lex a b c]",
          "package": "hist-pl-dawg",
          "signature": "DAWG i a b-\u003e[Lex i a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:entries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map of forms with additional info of type \u003ccode\u003eb\u003c/code\u003e assigned.\n Invariant: in case of a reverse dictionary (from word forms\n to base forms) this map should contain exactly one element\n (a base form and a corresonding information).\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "forms",
          "package": "hist-pl-dawg",
          "signature": "Map w b",
          "source": "src/NLP-HistPL-DAWG.html#Val",
          "type": "function"
        },
        "index": {
          "description": "map of forms with additional info of type assigned Invariant in case of reverse dictionary from word forms to base forms this map should contain exactly one element base form and corresonding information",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "forms",
          "package": "hist-pl-dawg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:forms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct immutable version of the automaton.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "freeze",
          "package": "hist-pl-dawg",
          "signature": "DAWG a b -\u003e DAWG a () b",
          "type": "function"
        },
        "index": {
          "description": "Construct immutable version of the automaton",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "freeze",
          "normalized": "DAWG a b-\u003eDAWG a()b",
          "package": "hist-pl-dawg",
          "signature": "DAWG a b-\u003eDAWG a()b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:freeze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake dictionary from a list of (key, ID, entry info, form,\n entry/form info) tuples.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "fromList",
          "package": "hist-pl-dawg",
          "signature": "[(Text, i, a, Text, b)] -\u003e DAWG i a b",
          "source": "src/NLP-HistPL-DAWG.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Make dictionary from list of key ID entry info form entry form info tuples",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "fromList",
          "normalized": "[(Text,a,b,Text,c)]-\u003eDAWG a b c",
          "package": "hist-pl-dawg",
          "partial": "List",
          "signature": "[(Text,i,a,Text,b)]-\u003eDAWG i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition in a set of all dictionary entries with respect\n to the lexicographic order.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "index",
          "package": "hist-pl-dawg",
          "signature": "Text -\u003e DAWG i a b -\u003e Maybe Int",
          "source": "src/NLP-HistPL-DAWG.html#index",
          "type": "function"
        },
        "index": {
          "description": "Position in set of all dictionary entries with respect to the lexicographic order",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "index",
          "normalized": "Text-\u003eDAWG a b c-\u003eMaybe Int",
          "package": "hist-pl-dawg",
          "signature": "Text-\u003eDAWG i a b-\u003eMaybe Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional information assigned to the entry.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "info",
          "package": "hist-pl-dawg",
          "signature": "a",
          "source": "src/NLP-HistPL-DAWG.html#Val",
          "type": "function"
        },
        "index": {
          "description": "Additional information assigned to the entry",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "info",
          "package": "hist-pl-dawg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a (key, ID, entry info, form, entry/form info) into a\n \u003ccode\u003e\u003ca\u003eDAWG'Init\u003c/a\u003e\u003c/code\u003e structure.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "insert",
          "package": "hist-pl-dawg",
          "signature": "(Text, i, a, Text, b) -\u003e DAWG'Init i a b -\u003e DAWG'Init i a b",
          "source": "src/NLP-HistPL-DAWG.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert key ID entry info form entry form info into DAWG Init structure",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "insert",
          "normalized": "(Text,a,b,Text,c)-\u003eDAWG'Init a b c-\u003eDAWG'Init a b c",
          "package": "hist-pl-dawg",
          "signature": "(Text,i,a,Text,b)-\u003eDAWG'Init i a b-\u003eDAWG'Init i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry key.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "lexKey",
          "package": "hist-pl-dawg",
          "signature": "Key i",
          "source": "src/NLP-HistPL-DAWG.html#Lex",
          "type": "function"
        },
        "index": {
          "description": "Entry key",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "lexKey",
          "package": "hist-pl-dawg",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:lexKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry value.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "lexVal",
          "package": "hist-pl-dawg",
          "signature": "Val a Text b",
          "source": "src/NLP-HistPL-DAWG.html#Lex",
          "type": "function"
        },
        "index": {
          "description": "Entry value",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "lexVal",
          "package": "hist-pl-dawg",
          "partial": "Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:lexVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the key in the dictionary.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "lookup",
          "package": "hist-pl-dawg",
          "signature": "Text -\u003e DAWG i a b -\u003e LexSet i a b",
          "source": "src/NLP-HistPL-DAWG.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup the key in the dictionary",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "lookup",
          "normalized": "Text-\u003eDAWG a b c-\u003eLexSet a b c",
          "package": "hist-pl-dawg",
          "signature": "Text-\u003eDAWG i a b-\u003eLexSet i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake lexical set from a list of entries.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "mkLexSet",
          "package": "hist-pl-dawg",
          "signature": "[Lex i a b] -\u003e LexSet i a b",
          "source": "src/NLP-HistPL-DAWG.html#mkLexSet",
          "type": "function"
        },
        "index": {
          "description": "Make lexical set from list of entries",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "mkLexSet",
          "normalized": "[Lex a b c]-\u003eLexSet a b c",
          "package": "hist-pl-dawg",
          "partial": "Lex Set",
          "signature": "[Lex i a b]-\u003eLexSet i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:mkLexSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path of the entry, i.e. DAWG key.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "path",
          "package": "hist-pl-dawg",
          "signature": "Text",
          "source": "src/NLP-HistPL-DAWG.html#Key",
          "type": "function"
        },
        "index": {
          "description": "path of the entry i.e DAWG key",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "path",
          "package": "hist-pl-dawg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse the dictionary.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "revDAWG",
          "package": "hist-pl-dawg",
          "signature": "DAWG i a b -\u003e DAWG i a b",
          "source": "src/NLP-HistPL-DAWG.html#revDAWG",
          "type": "function"
        },
        "index": {
          "description": "Reverse the dictionary",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "revDAWG",
          "normalized": "DAWG a b c-\u003eDAWG a b c",
          "package": "hist-pl-dawg",
          "partial": "DAWG",
          "signature": "DAWG i a b-\u003eDAWG i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:revDAWG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA number of distinct (key, value) pairs in the weighted DAWG.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "size",
          "package": "hist-pl-dawg",
          "signature": "DAWG a Weight c -\u003e Int",
          "type": "function"
        },
        "index": {
          "description": "number of distinct key value pairs in the weighted DAWG",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "size",
          "normalized": "DAWG a Weight b-\u003eInt",
          "package": "hist-pl-dawg",
          "signature": "DAWG a Weight c-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the sub-dictionary containing all keys beginning with a prefix.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "submap",
          "package": "hist-pl-dawg",
          "signature": "Text -\u003e DAWG i a b -\u003e DAWG i a b",
          "source": "src/NLP-HistPL-DAWG.html#submap",
          "type": "function"
        },
        "index": {
          "description": "Return the sub-dictionary containing all keys beginning with prefix",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "submap",
          "normalized": "Text-\u003eDAWG a b c-\u003eDAWG a b c",
          "package": "hist-pl-dawg",
          "signature": "Text-\u003eDAWG i a b-\u003eDAWG i a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:submap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA suffix to paste.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "suffix",
          "package": "hist-pl-dawg",
          "signature": "Text",
          "source": "src/NLP-HistPL-DAWG.html#Rule",
          "type": "function"
        },
        "index": {
          "description": "suffix to paste",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "suffix",
          "package": "hist-pl-dawg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:suffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform dictionary back into the list of (key, ID, key/ID info, elem,\n key/ID/elem info) tuples.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "toList",
          "package": "hist-pl-dawg",
          "signature": "DAWG i a b -\u003e [(Text, i, a, Text, b)]",
          "source": "src/NLP-HistPL-DAWG.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Transform dictionary back into the list of key ID key ID info elem key ID elem info tuples",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "toList",
          "normalized": "DAWG a b c-\u003e[(Text,a,b,Text,c)]",
          "package": "hist-pl-dawg",
          "partial": "List",
          "signature": "DAWG i a b-\u003e[(Text,i,a,Text,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique identifier among entries with the same \u003ccode\u003e\u003ca\u003epath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "uid",
          "package": "hist-pl-dawg",
          "signature": "i",
          "source": "src/NLP-HistPL-DAWG.html#Key",
          "type": "function"
        },
        "index": {
          "description": "Unique identifier among entries with the same path",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "uid",
          "package": "hist-pl-dawg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:uid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList lexical entries.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "unLexSet",
          "package": "hist-pl-dawg",
          "signature": "LexSet i a b -\u003e [Lex i a b]",
          "source": "src/NLP-HistPL-DAWG.html#unLexSet",
          "type": "function"
        },
        "index": {
          "description": "List lexical entries",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "unLexSet",
          "normalized": "LexSet a b c-\u003e[Lex a b c]",
          "package": "hist-pl-dawg",
          "partial": "Lex Set",
          "signature": "LexSet i a b-\u003e[Lex i a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:unLexSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute node weights and store corresponding values in transition labels.\n Be aware, that the entire DAWG will be weighted, even when (because of the use of\n the \u003ccode\u003e\u003ca\u003esubmap\u003c/a\u003e\u003c/code\u003e function) only a part of the DAWG is currently selected.\n\u003c/p\u003e",
          "module": "NLP.HistPL.DAWG",
          "name": "weigh",
          "package": "hist-pl-dawg",
          "signature": "DAWG a b c -\u003e DAWG a Weight c",
          "type": "function"
        },
        "index": {
          "description": "Compute node weights and store corresponding values in transition labels Be aware that the entire DAWG will be weighted even when because of the use of the submap function only part of the DAWG is currently selected",
          "hierarchy": "NLP HistPL DAWG",
          "module": "NLP.HistPL.DAWG",
          "name": "weigh",
          "normalized": "DAWG a b c-\u003eDAWG a Weight c",
          "package": "hist-pl-dawg",
          "signature": "DAWG a b c-\u003eDAWG a Weight c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-dawg/docs/NLP-HistPL-DAWG.html#v:weigh"
      }
    }
  ]
]