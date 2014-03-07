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
        "word": "universe-th"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Universe",
          "name": "Universe",
          "package": "universe-th",
          "source": "src/Language-Haskell-TH-Universe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell TH Universe",
          "module": "Language.Haskell.TH.Universe",
          "name": "Universe",
          "package": "universe-th",
          "partial": "Universe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/universe-th/docs/Language-Haskell-TH-Universe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Universe",
          "name": "Universe",
          "package": "universe-th",
          "source": "src/Language-Haskell-TH-Universe.html#Universe",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell TH Universe",
          "module": "Language.Haskell.TH.Universe",
          "name": "Universe",
          "package": "universe-th",
          "partial": "Universe",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/universe-th/docs/Language-Haskell-TH-Universe.html#t:Universe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Universe",
          "name": "collect_dec_type_names",
          "package": "universe-th",
          "signature": "Dec -\u003e [Name]",
          "source": "src/Language-Haskell-TH-Universe.html#collect_dec_type_names",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Universe",
          "module": "Language.Haskell.TH.Universe",
          "name": "collect_dec_type_names",
          "normalized": "Dec-\u003e[Name]",
          "package": "universe-th",
          "signature": "Dec-\u003e[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe-th/docs/Language-Haskell-TH-Universe.html#v:collect_dec_type_names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Universe",
          "name": "collect_new_dec_names",
          "package": "universe-th",
          "signature": "Dec -\u003e m [Name]",
          "source": "src/Language-Haskell-TH-Universe.html#collect_new_dec_names",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Universe",
          "module": "Language.Haskell.TH.Universe",
          "name": "collect_new_dec_names",
          "normalized": "Dec-\u003ea[Name]",
          "package": "universe-th",
          "signature": "Dec-\u003em[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe-th/docs/Language-Haskell-TH-Universe.html#v:collect_new_dec_names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Universe",
          "name": "eval_state",
          "package": "universe-th",
          "signature": "ErrorStateT e [a1] m a -\u003e m (Either e a)",
          "source": "src/Language-Haskell-TH-Universe.html#eval_state",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Universe",
          "module": "Language.Haskell.TH.Universe",
          "name": "eval_state",
          "normalized": "ErrorStateT a[b]c b-\u003ec(Either a b)",
          "package": "universe-th",
          "signature": "ErrorStateT e[a]m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe-th/docs/Language-Haskell-TH-Universe.html#v:eval_state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Universe",
          "name": "filter_dups'",
          "package": "universe-th",
          "signature": "[a] -\u003e [(a, b)] -\u003e [a]",
          "source": "src/Language-Haskell-TH-Universe.html#filter_dups%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Universe",
          "module": "Language.Haskell.TH.Universe",
          "name": "filter_dups'",
          "normalized": "[a]-\u003e[(a,b)]-\u003e[a]",
          "package": "universe-th",
          "signature": "[a]-\u003e[(a,b)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe-th/docs/Language-Haskell-TH-Universe.html#v:filter_dups-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Universe",
          "name": "get_type_names",
          "package": "universe-th",
          "signature": "Type -\u003e [Name]",
          "source": "src/Language-Haskell-TH-Universe.html#get_type_names",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Universe",
          "module": "Language.Haskell.TH.Universe",
          "name": "get_type_names",
          "normalized": "Type-\u003e[Name]",
          "package": "universe-th",
          "signature": "Type-\u003e[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe-th/docs/Language-Haskell-TH-Universe.html#v:get_type_names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCollect all the ancestor Dec's for whatever is passed in by name. \n   For instance if we have\n\u003c/p\u003e\u003cpre\u003e data Otherthing = Otherthing Float\n\u003c/pre\u003e\u003cpre\u003e data Thing = Thing OtherThing Int\n\u003c/pre\u003e\u003cp\u003ethen \n\u003c/p\u003e\u003cpre\u003e get_universe ''Thing\n\u003c/pre\u003e\u003cp\u003ewould return the Dec's for Thing, OtherThing, Int and Float\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Universe",
          "name": "get_universe",
          "package": "universe-th",
          "signature": "Name -\u003e Q Universe",
          "source": "src/Language-Haskell-TH-Universe.html#get_universe",
          "type": "function"
        },
        "index": {
          "description": "Collect all the ancestor Dec for whatever is passed in by name For instance if we have data Otherthing Otherthing Float data Thing Thing OtherThing Int then get universe Thing would return the Dec for Thing OtherThing Int and Float",
          "hierarchy": "Language Haskell TH Universe",
          "module": "Language.Haskell.TH.Universe",
          "name": "get_universe",
          "normalized": "Name-\u003eQ Universe",
          "package": "universe-th",
          "signature": "Name-\u003eQ Universe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe-th/docs/Language-Haskell-TH-Universe.html#v:get_universe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the type in the passed in universe of Decs ([Dec]), and all of the ancestors in the universe.  \n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Universe",
          "name": "sub_universe",
          "package": "universe-th",
          "signature": "[Dec] -\u003e Name -\u003e Universe",
          "source": "src/Language-Haskell-TH-Universe.html#sub_universe",
          "type": "function"
        },
        "index": {
          "description": "Find the type in the passed in universe of Decs Dec and all of the ancestors in the universe",
          "hierarchy": "Language Haskell TH Universe",
          "module": "Language.Haskell.TH.Universe",
          "name": "sub_universe",
          "normalized": "[Dec]-\u003eName-\u003eUniverse",
          "package": "universe-th",
          "signature": "[Dec]-\u003eName-\u003eUniverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe-th/docs/Language-Haskell-TH-Universe.html#v:sub_universe"
      }
    }
  ]
]