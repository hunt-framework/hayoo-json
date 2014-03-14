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
        "word": "toolshed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tMiscellaneous polymorphic operations on \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e types.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Data.Foldable",
          "name": "Foldable",
          "package": "toolshed",
          "source": "src/ToolShed-Data-Foldable.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Miscellaneous polymorphic operations on Foldable types",
          "hierarchy": "ToolShed Data Foldable",
          "module": "ToolShed.Data.Foldable",
          "name": "Foldable",
          "package": "toolshed",
          "partial": "Foldable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Foldable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific instance of \u003ccode\u003e\u003ca\u003egatherBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Foldable",
          "name": "gather",
          "package": "toolshed",
          "signature": "f a -\u003e [[a]]",
          "source": "src/ToolShed-Data-Foldable.html#gather",
          "type": "function"
        },
        "index": {
          "description": "specific instance of gatherBy",
          "hierarchy": "ToolShed Data Foldable",
          "module": "ToolShed.Data.Foldable",
          "name": "gather",
          "normalized": "a b-\u003e[[b]]",
          "package": "toolshed",
          "signature": "f a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Foldable.html#v:gather"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Group equal (though not necessarily adjacent; c.f. \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e) elements, according to the specified comparator.\n\u003c/li\u003e\u003cli\u003e The groups are returned in ascending order, whilst their elements remain in their original order.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.Data.Foldable",
          "name": "gatherBy",
          "package": "toolshed",
          "signature": "(a -\u003e b) -\u003e f a -\u003e [[a]]",
          "source": "src/ToolShed-Data-Foldable.html#gatherBy",
          "type": "function"
        },
        "index": {
          "description": "Group equal though not necessarily adjacent c.f groupBy elements according to the specified comparator The groups are returned in ascending order whilst their elements remain in their original order",
          "hierarchy": "ToolShed Data Foldable",
          "module": "ToolShed.Data.Foldable",
          "name": "gatherBy",
          "normalized": "(a-\u003eb)-\u003ec a-\u003e[[a]]",
          "package": "toolshed",
          "partial": "By",
          "signature": "(a-\u003eb)-\u003ef a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Foldable.html#v:gatherBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether the specified collection contains any equal items.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Foldable",
          "name": "hasDuplicates",
          "package": "toolshed",
          "signature": "f a -\u003e Bool",
          "source": "src/ToolShed-Data-Foldable.html#hasDuplicates",
          "type": "function"
        },
        "index": {
          "description": "Whether the specified collection contains any equal items",
          "hierarchy": "ToolShed Data Foldable",
          "module": "ToolShed.Data.Foldable",
          "name": "hasDuplicates",
          "normalized": "a b-\u003eBool",
          "package": "toolshed",
          "partial": "Duplicates",
          "signature": "f a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Foldable.html#v:hasDuplicates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tRun-length encoder and decoder.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Data.List.Runlength",
          "name": "Runlength",
          "package": "toolshed",
          "source": "src/ToolShed-Data-List-Runlength.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Run-length encoder and decoder",
          "hierarchy": "ToolShed Data List Runlength",
          "module": "ToolShed.Data.List.Runlength",
          "name": "Runlength",
          "package": "toolshed",
          "partial": "Runlength",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List-Runlength.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the number of consecutive equal items in a list.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List.Runlength",
          "name": "Code",
          "package": "toolshed",
          "source": "src/ToolShed-Data-List-Runlength.html#Code",
          "type": "type"
        },
        "index": {
          "description": "Describes the number of consecutive equal items in list",
          "hierarchy": "ToolShed Data List Runlength",
          "module": "ToolShed.Data.List.Runlength",
          "name": "Code",
          "package": "toolshed",
          "partial": "Code",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List-Runlength.html#t:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms \u003cem\u003erun-length\u003c/em\u003e decoding to retrieve the original unencoded list.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List.Runlength",
          "name": "decode",
          "package": "toolshed",
          "signature": "[Code a] -\u003e [a]",
          "source": "src/ToolShed-Data-List-Runlength.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Performs run-length decoding to retrieve the original unencoded list",
          "hierarchy": "ToolShed Data List Runlength",
          "module": "ToolShed.Data.List.Runlength",
          "name": "decode",
          "normalized": "[Code a]-\u003e[a]",
          "package": "toolshed",
          "signature": "[Code a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List-Runlength.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eRun-length\u003c/em\u003e encodes the specified list.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List.Runlength",
          "name": "encode",
          "package": "toolshed",
          "signature": "[a] -\u003e [Code a]",
          "source": "src/ToolShed-Data-List-Runlength.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Run-length encodes the specified list",
          "hierarchy": "ToolShed Data List Runlength",
          "module": "ToolShed.Data.List.Runlength",
          "name": "encode",
          "normalized": "[a]-\u003e[Code a]",
          "package": "toolshed",
          "signature": "[a]-\u003e[Code a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List-Runlength.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List.Runlength",
          "name": "getDatum",
          "package": "toolshed",
          "signature": "Code a -\u003e a",
          "source": "src/ToolShed-Data-List-Runlength.html#getDatum",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "ToolShed Data List Runlength",
          "module": "ToolShed.Data.List.Runlength",
          "name": "getDatum",
          "normalized": "Code a-\u003ea",
          "package": "toolshed",
          "partial": "Datum",
          "signature": "Code a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List-Runlength.html#v:getDatum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List.Runlength",
          "name": "getLength",
          "package": "toolshed",
          "signature": "Code a -\u003e Int",
          "source": "src/ToolShed-Data-List-Runlength.html#getLength",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "ToolShed Data List Runlength",
          "module": "ToolShed.Data.List.Runlength",
          "name": "getLength",
          "normalized": "Code a-\u003eInt",
          "package": "toolshed",
          "partial": "Length",
          "signature": "Code a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List-Runlength.html#v:getLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Data.List.Splits",
          "name": "Splits",
          "package": "toolshed",
          "source": "src/ToolShed-Data-List-Splits.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION",
          "hierarchy": "ToolShed Data List Splits",
          "module": "ToolShed.Data.List.Splits",
          "name": "Splits",
          "package": "toolshed",
          "partial": "Splits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List-Splits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Create the set of all \u003ccode\u003eSplit\u003c/code\u003es, migrating left from the specified location.\n\u003c/li\u003e\u003cli\u003e CAVEAT: \u003ccode\u003e\u003ca\u003einit\u003c/a\u003e\u003c/code\u003e fails when \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e has been reduced to null.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.Data.List.Splits",
          "name": "splitsLeftFrom",
          "package": "toolshed",
          "signature": "Int-\u003e [a]-\u003e [Split a]",
          "type": "function"
        },
        "index": {
          "description": "Create the set of all Split migrating left from the specified location CAVEAT init fails when fst has been reduced to null",
          "hierarchy": "ToolShed Data List Splits",
          "module": "ToolShed.Data.List.Splits",
          "name": "splitsLeftFrom",
          "normalized": "Int-\u003e[a]-\u003e[Split a]",
          "package": "toolshed",
          "partial": "Left From",
          "signature": "Int-\u003e[a]-\u003e[Split a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List-Splits.html#v:splitsLeftFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Create the set of all \u003ccode\u003eSplit\u003c/code\u003es, migrating right from the specified location.\n\u003c/li\u003e\u003cli\u003e CAVEAT: pattern-match against \u003ccode\u003e : \u003c/code\u003e fails, when \u003ccode\u003e\u003ca\u003esnd\u003c/a\u003e\u003c/code\u003e has been reduced to \u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.Data.List.Splits",
          "name": "splitsRightFrom",
          "package": "toolshed",
          "signature": "Int-\u003e [a]-\u003e [Split a]",
          "type": "function"
        },
        "index": {
          "description": "Create the set of all Split migrating right from the specified location CAVEAT pattern-match against fails when snd has been reduced to null",
          "hierarchy": "ToolShed Data List Splits",
          "module": "ToolShed.Data.List.Splits",
          "name": "splitsRightFrom",
          "normalized": "Int-\u003e[a]-\u003e[Split a]",
          "package": "toolshed",
          "partial": "Right From",
          "signature": "Int-\u003e[a]-\u003e[Split a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List-Splits.html#v:splitsRightFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tMiscellaneous polymorphic list-operations.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Data.List",
          "name": "List",
          "package": "toolshed",
          "source": "src/ToolShed-Data-List.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Miscellaneous polymorphic list-operations",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "List",
          "package": "toolshed",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe length of the chunks into which a list is split.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List",
          "name": "ChunkLength",
          "package": "toolshed",
          "source": "src/ToolShed-Data-List.html#ChunkLength",
          "type": "type"
        },
        "index": {
          "description": "The length of the chunks into which list is split",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "ChunkLength",
          "package": "toolshed",
          "partial": "Chunk Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#t:ChunkLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of function required by \u003ccode\u003e\u003ca\u003efindConvergenceBy\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epermutationsBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List",
          "name": "Matches",
          "package": "toolshed",
          "source": "src/ToolShed-Data-List.html#Matches",
          "type": "type"
        },
        "index": {
          "description": "The type of function required by findConvergenceBy permutationsBy",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "Matches",
          "package": "toolshed",
          "partial": "Matches",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#t:Matches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Splits a list into chunks of the specified length.\n\u003c/li\u003e\u003cli\u003e The last chunk will be shorter, if the chunk-length isn't an aliquot part of the input list-length.\n\u003c/li\u003e\u003cli\u003e If the chunk-length is zero, the resulting list will be an infinite sequence of null lists.\n\u003c/li\u003e\u003cli\u003e CAVEAT: a similar function is available in the module \u003cem\u003eData.List.Split\u003c/em\u003e, though this one checks for \u003ccode\u003e(chunkLength \u003c 0)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.Data.List",
          "name": "chunk",
          "package": "toolshed",
          "signature": "ChunkLength-\u003e [a]-\u003e [[a]]",
          "type": "function"
        },
        "index": {
          "description": "Splits list into chunks of the specified length The last chunk will be shorter if the chunk-length isn an aliquot part of the input list-length If the chunk-length is zero the resulting list will be an infinite sequence of null lists CAVEAT similar function is available in the module Data.List.Split though this one checks for chunkLength",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "chunk",
          "normalized": "ChunkLength-\u003e[a]-\u003e[[a]]",
          "package": "toolshed",
          "signature": "ChunkLength-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenient way to compose the \u003ccode\u003e\u003ca\u003eMatches\u003c/a\u003e\u003c/code\u003e-function required by \u003ccode\u003e\u003ca\u003efindConvergenceBy\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003epermutationsBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List",
          "name": "equalityBy",
          "package": "toolshed",
          "signature": "(a -\u003e b) -\u003e Matches a",
          "source": "src/ToolShed-Data-List.html#equalityBy",
          "type": "function"
        },
        "index": {
          "description": "convenient way to compose the Matches function required by findConvergenceBy permutationsBy",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "equalityBy",
          "normalized": "(a-\u003eb)-\u003eMatches a",
          "package": "toolshed",
          "partial": "By",
          "signature": "(a-\u003eb)-\u003eMatches a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:equalityBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the single indexed element from the list.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List",
          "name": "excise",
          "package": "toolshed",
          "signature": "Int-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Remove the single indexed element from the list",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "excise",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "toolshed",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:excise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific instance of \u003ccode\u003e\u003ca\u003efindConvergenceBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List",
          "name": "findConvergence",
          "package": "toolshed",
          "signature": "[a] -\u003e a",
          "source": "src/ToolShed-Data-List.html#findConvergence",
          "type": "function"
        },
        "index": {
          "description": "specific instance of findConvergenceBy",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "findConvergence",
          "normalized": "[a]-\u003ea",
          "package": "toolshed",
          "partial": "Convergence",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:findConvergence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the first element from the (potentially infinite) list, which matches the subsequent element, according to the specified function.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List",
          "name": "findConvergenceBy",
          "package": "toolshed",
          "signature": "Matches a -\u003e [a] -\u003e a",
          "source": "src/ToolShed-Data-List.html#findConvergenceBy",
          "type": "function"
        },
        "index": {
          "description": "Take the first element from the potentially infinite list which matches the subsequent element according to the specified function",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "findConvergenceBy",
          "normalized": "Matches a-\u003e[a]-\u003ea",
          "package": "toolshed",
          "partial": "Convergence By",
          "signature": "Matches a-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:findConvergenceBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of \u003cem\u003ePairs\u003c/em\u003e, into a narrower list.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List",
          "name": "linearise",
          "package": "toolshed",
          "signature": "[(a, a)] -\u003e [a]",
          "source": "src/ToolShed-Data-List.html#linearise",
          "type": "function"
        },
        "index": {
          "description": "Converts list of Pairs into narrower list",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "linearise",
          "normalized": "[(a,a)]-\u003e[a]",
          "package": "toolshed",
          "signature": "[(a,a)]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:linearise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specific instance of \u003ccode\u003e\u003ca\u003emergeBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List",
          "name": "merge",
          "package": "toolshed",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/ToolShed-Data-List.html#merge",
          "type": "function"
        },
        "index": {
          "description": "specific instance of mergeBy",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "merge",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "toolshed",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Merge two sorted lists, according to the specified order, to product a single sorted list.\n\u003c/li\u003e\u003cli\u003e The merge-process is \u003cem\u003estable\u003c/em\u003e, in that where items from each list are equal, they remain in the original order.\n\u003c/li\u003e\u003cli\u003e CAVEAT: duplicates are preserved.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.Data.List",
          "name": "mergeBy",
          "package": "toolshed",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/ToolShed-Data-List.html#mergeBy",
          "type": "function"
        },
        "index": {
          "description": "Merge two sorted lists according to the specified order to product single sorted list The merge-process is stable in that where items from each list are equal they remain in the original order CAVEAT duplicates are preserved",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "mergeBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "toolshed",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:mergeBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A strict version of \u003ccode\u003e\u003ca\u003enub\u003c/a\u003e\u003c/code\u003e with better time-complexity.\n\u003c/li\u003e\u003cli\u003e CAVEAT: the specified list must be finite, since the entire set is constructed before streaming to a list.\n\u003c/li\u003e\u003cli\u003e CAVEAT: it sorts the output as a side-effect, & consequently it requires a type which implements \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.Data.List",
          "name": "nub'",
          "package": "toolshed",
          "signature": "[a] -\u003e [a]",
          "source": "src/ToolShed-Data-List.html#nub%27",
          "type": "function"
        },
        "index": {
          "description": "strict version of nub with better time-complexity CAVEAT the specified list must be finite since the entire set is constructed before streaming to list CAVEAT it sorts the output as side-effect consequently it requires type which implements Ord",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "nub'",
          "normalized": "[a]-\u003e[a]",
          "package": "toolshed",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:nub-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The list of all permutations, generated by selecting any one datum from each sub-list in turn, from the specified list of lists.\n\u003c/li\u003e\u003cli\u003e A specific instance of \u003ccode\u003e\u003ca\u003epermutationsBy\u003c/a\u003e\u003c/code\u003e, in which no filtering of subsequent lists is performed after each item is selected.\n\u003c/li\u003e\u003cli\u003e NB: differs from \u003ccode\u003e\u003ca\u003epermutations\u003c/a\u003e\u003c/code\u003e, which selects items from a single input list.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.Data.List",
          "name": "permutations",
          "package": "toolshed",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/ToolShed-Data-List.html#permutations",
          "type": "function"
        },
        "index": {
          "description": "The list of all permutations generated by selecting any one datum from each sub-list in turn from the specified list of lists specific instance of permutationsBy in which no filtering of subsequent lists is performed after each item is selected NB differs from permutations which selects items from single input list",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "permutations",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "toolshed",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:permutations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The list of all permutations, generated by selecting any one datum from each sub-list in turn, from the specified list of lists.\n\u003c/li\u003e\u003cli\u003e As each item is selected, the remaining lists are filtered according to the specified \u003ccode\u003e\u003ca\u003eMatches\u003c/a\u003e\u003c/code\u003e-function.\n\u003c/li\u003e\u003cli\u003e Thus \u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e could be used to select a different item from each list.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.Data.List",
          "name": "permutationsBy",
          "package": "toolshed",
          "signature": "Matches a -\u003e [[a]] -\u003e [[a]]",
          "source": "src/ToolShed-Data-List.html#permutationsBy",
          "type": "function"
        },
        "index": {
          "description": "The list of all permutations generated by selecting any one datum from each sub-list in turn from the specified list of lists As each item is selected the remaining lists are filtered according to the specified Matches function Thus could be used to select different item from each list",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "permutationsBy",
          "normalized": "Matches a-\u003e[[a]]-\u003e[[a]]",
          "package": "toolshed",
          "partial": "By",
          "signature": "Matches a-\u003e[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:permutationsBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a list, delimited by the specified tokens.\n\u003c/p\u003e",
          "module": "ToolShed.Data.List",
          "name": "showListWith",
          "package": "toolshed",
          "signature": "(token, token, token)-\u003e [element]-\u003e ShowS",
          "type": "function"
        },
        "index": {
          "description": "Show list delimited by the specified tokens",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "showListWith",
          "normalized": "(a,a,a)-\u003e[b]-\u003eShowS",
          "package": "toolshed",
          "partial": "List With",
          "signature": "(token,token,token)-\u003e[element]-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:showListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Take until the specified predicate is satisfied; \u003cem\u003eincluding\u003c/em\u003e the item which satisfied it.\n\u003c/li\u003e\u003cli\u003e NB: \u003ccode\u003etakeWhile (not . test)\u003c/code\u003e would return one fewer item.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.Data.List",
          "name": "takeUntil",
          "package": "toolshed",
          "signature": "(a -\u003e Bool)-\u003e [a]-\u003e [a]",
          "type": "function"
        },
        "index": {
          "description": "Take until the specified predicate is satisfied including the item which satisfied it NB takeWhile not test would return one fewer item",
          "hierarchy": "ToolShed Data List",
          "module": "ToolShed.Data.List",
          "name": "takeUntil",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "package": "toolshed",
          "partial": "Until",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-List.html#v:takeUntil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tMiscellaneous operations on Pairs.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Data.Pair",
          "name": "Pair",
          "package": "toolshed",
          "source": "src/ToolShed-Data-Pair.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Miscellaneous operations on Pairs",
          "hierarchy": "ToolShed Data Pair",
          "module": "ToolShed.Data.Pair",
          "name": "Pair",
          "package": "toolshed",
          "partial": "Pair",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Pair.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Apply the same transformation to both halves of a \u003cem\u003ePair\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: the pair is required to have identical types.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.Data.Pair",
          "name": "mirror",
          "package": "toolshed",
          "signature": "(a -\u003e b) -\u003e (a, a) -\u003e (b, b)",
          "source": "src/ToolShed-Data-Pair.html#mirror",
          "type": "function"
        },
        "index": {
          "description": "Apply the same transformation to both halves of Pair CAVEAT the pair is required to have identical types",
          "hierarchy": "ToolShed Data Pair",
          "module": "ToolShed.Data.Pair",
          "name": "mirror",
          "normalized": "(a-\u003eb)-\u003e(a,a)-\u003e(b,b)",
          "package": "toolshed",
          "signature": "(a-\u003eb)-\u003e(a,a)-\u003e(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Pair.html#v:mirror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tMiscellaneous operations on quadruples.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCAVEAT\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tImport fully qualified, since some identifiers clash with \u003ccode\u003e\u003ca\u003eTriple\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Data.Quadruple",
          "name": "Quadruple",
          "package": "toolshed",
          "source": "src/ToolShed-Data-Quadruple.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Miscellaneous operations on quadruples CAVEAT Import fully qualified since some identifiers clash with Triple",
          "hierarchy": "ToolShed Data Quadruple",
          "module": "ToolShed.Data.Quadruple",
          "name": "Quadruple",
          "package": "toolshed",
          "partial": "Quadruple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Quadruple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtends the concept of \u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Quadruple",
          "name": "curry4",
          "package": "toolshed",
          "signature": "((a, b, c, d) -\u003e result) -\u003e a -\u003e b -\u003e c -\u003e d -\u003e result",
          "source": "src/ToolShed-Data-Quadruple.html#curry4",
          "type": "function"
        },
        "index": {
          "description": "Extends the concept of curry",
          "hierarchy": "ToolShed Data Quadruple",
          "module": "ToolShed.Data.Quadruple",
          "name": "curry4",
          "normalized": "((a,b,c,d)-\u003ee)-\u003ea-\u003eb-\u003ec-\u003ed-\u003ee",
          "package": "toolshed",
          "signature": "((a,b,c,d)-\u003eresult)-\u003ea-\u003eb-\u003ec-\u003ed-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Quadruple.html#v:curry4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the first datum from the specified quadruple.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Quadruple",
          "name": "getFirst",
          "package": "toolshed",
          "signature": "(a, b, c, d) -\u003e a",
          "source": "src/ToolShed-Data-Quadruple.html#getFirst",
          "type": "function"
        },
        "index": {
          "description": "Access the first datum from the specified quadruple",
          "hierarchy": "ToolShed Data Quadruple",
          "module": "ToolShed.Data.Quadruple",
          "name": "getFirst",
          "normalized": "(a,b,c,d)-\u003ea",
          "package": "toolshed",
          "partial": "First",
          "signature": "(a,b,c,d)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Quadruple.html#v:getFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the fourth datum from the specified quadruple.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Quadruple",
          "name": "getFourth",
          "package": "toolshed",
          "signature": "(a, b, c, d) -\u003e d",
          "source": "src/ToolShed-Data-Quadruple.html#getFourth",
          "type": "function"
        },
        "index": {
          "description": "Access the fourth datum from the specified quadruple",
          "hierarchy": "ToolShed Data Quadruple",
          "module": "ToolShed.Data.Quadruple",
          "name": "getFourth",
          "normalized": "(a,b,c,d)-\u003ed",
          "package": "toolshed",
          "partial": "Fourth",
          "signature": "(a,b,c,d)-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Quadruple.html#v:getFourth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the second datum from the specified quadruple.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Quadruple",
          "name": "getSecond",
          "package": "toolshed",
          "signature": "(a, b, c, d) -\u003e b",
          "source": "src/ToolShed-Data-Quadruple.html#getSecond",
          "type": "function"
        },
        "index": {
          "description": "Access the second datum from the specified quadruple",
          "hierarchy": "ToolShed Data Quadruple",
          "module": "ToolShed.Data.Quadruple",
          "name": "getSecond",
          "normalized": "(a,b,c,d)-\u003eb",
          "package": "toolshed",
          "partial": "Second",
          "signature": "(a,b,c,d)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Quadruple.html#v:getSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the third datum from the specified quadruple.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Quadruple",
          "name": "getThird",
          "package": "toolshed",
          "signature": "(a, b, c, d) -\u003e c",
          "source": "src/ToolShed-Data-Quadruple.html#getThird",
          "type": "function"
        },
        "index": {
          "description": "Access the third datum from the specified quadruple",
          "hierarchy": "ToolShed Data Quadruple",
          "module": "ToolShed.Data.Quadruple",
          "name": "getThird",
          "normalized": "(a,b,c,d)-\u003ec",
          "package": "toolshed",
          "partial": "Third",
          "signature": "(a,b,c,d)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Quadruple.html#v:getThird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtends the concept of \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Quadruple",
          "name": "uncurry4",
          "package": "toolshed",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e result) -\u003e (a, b, c, d) -\u003e result",
          "source": "src/ToolShed-Data-Quadruple.html#uncurry4",
          "type": "function"
        },
        "index": {
          "description": "Extends the concept of uncurry",
          "hierarchy": "ToolShed Data Quadruple",
          "module": "ToolShed.Data.Quadruple",
          "name": "uncurry4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003e(a,b,c,d)-\u003ee",
          "package": "toolshed",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003eresult)-\u003e(a,b,c,d)-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Quadruple.html#v:uncurry4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tMiscellaneous operations on triples.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCAVEAT\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tImport fully qualified, since some identifiers clash with \u003ccode\u003e\u003ca\u003eQuadruple\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Data.Triple",
          "name": "Triple",
          "package": "toolshed",
          "source": "src/ToolShed-Data-Triple.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Miscellaneous operations on triples CAVEAT Import fully qualified since some identifiers clash with Quadruple",
          "hierarchy": "ToolShed Data Triple",
          "module": "ToolShed.Data.Triple",
          "name": "Triple",
          "package": "toolshed",
          "partial": "Triple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Triple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtends the concept of \u003ccode\u003e\u003ca\u003ecurry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Triple",
          "name": "curry3",
          "package": "toolshed",
          "signature": "((a, b, c) -\u003e result) -\u003e a -\u003e b -\u003e c -\u003e result",
          "source": "src/ToolShed-Data-Triple.html#curry3",
          "type": "function"
        },
        "index": {
          "description": "Extends the concept of curry",
          "hierarchy": "ToolShed Data Triple",
          "module": "ToolShed.Data.Triple",
          "name": "curry3",
          "normalized": "((a,b,c)-\u003ed)-\u003ea-\u003eb-\u003ec-\u003ed",
          "package": "toolshed",
          "signature": "((a,b,c)-\u003eresult)-\u003ea-\u003eb-\u003ec-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Triple.html#v:curry3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the first datum from the specified triple.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Triple",
          "name": "getFirst",
          "package": "toolshed",
          "signature": "(a, b, c) -\u003e a",
          "source": "src/ToolShed-Data-Triple.html#getFirst",
          "type": "function"
        },
        "index": {
          "description": "Access the first datum from the specified triple",
          "hierarchy": "ToolShed Data Triple",
          "module": "ToolShed.Data.Triple",
          "name": "getFirst",
          "normalized": "(a,b,c)-\u003ea",
          "package": "toolshed",
          "partial": "First",
          "signature": "(a,b,c)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Triple.html#v:getFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the second datum from the specified triple.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Triple",
          "name": "getSecond",
          "package": "toolshed",
          "signature": "(a, b, c) -\u003e b",
          "source": "src/ToolShed-Data-Triple.html#getSecond",
          "type": "function"
        },
        "index": {
          "description": "Access the second datum from the specified triple",
          "hierarchy": "ToolShed Data Triple",
          "module": "ToolShed.Data.Triple",
          "name": "getSecond",
          "normalized": "(a,b,c)-\u003eb",
          "package": "toolshed",
          "partial": "Second",
          "signature": "(a,b,c)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Triple.html#v:getSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccess the third datum from the specified triple.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Triple",
          "name": "getThird",
          "package": "toolshed",
          "signature": "(a, b, c) -\u003e c",
          "source": "src/ToolShed-Data-Triple.html#getThird",
          "type": "function"
        },
        "index": {
          "description": "Access the third datum from the specified triple",
          "hierarchy": "ToolShed Data Triple",
          "module": "ToolShed.Data.Triple",
          "name": "getThird",
          "normalized": "(a,b,c)-\u003ec",
          "package": "toolshed",
          "partial": "Third",
          "signature": "(a,b,c)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Triple.html#v:getThird"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtends the concept of \u003ccode\u003e\u003ca\u003euncurry\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.Data.Triple",
          "name": "uncurry3",
          "package": "toolshed",
          "signature": "(a -\u003e b -\u003e c -\u003e result) -\u003e (a, b, c) -\u003e result",
          "source": "src/ToolShed-Data-Triple.html#uncurry3",
          "type": "function"
        },
        "index": {
          "description": "Extends the concept of uncurry",
          "hierarchy": "ToolShed Data Triple",
          "module": "ToolShed.Data.Triple",
          "name": "uncurry3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003e(a,b,c)-\u003ed",
          "package": "toolshed",
          "signature": "(a-\u003eb-\u003ec-\u003eresult)-\u003e(a,b,c)-\u003eresult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Data-Triple.html#v:uncurry3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tA simple interface which data-types with a default-value can implement.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Defaultable",
          "name": "Defaultable",
          "package": "toolshed",
          "source": "src/ToolShed-Defaultable.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION simple interface which data-types with default-value can implement",
          "hierarchy": "ToolShed Defaultable",
          "module": "ToolShed.Defaultable",
          "name": "Defaultable",
          "package": "toolshed",
          "partial": "Defaultable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Defaultable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interface to which data which have a default-value can adhere.\n\u003c/p\u003e",
          "module": "ToolShed.Defaultable",
          "name": "Defaultable",
          "package": "toolshed",
          "source": "src/ToolShed-Defaultable.html#Defaultable",
          "type": "class"
        },
        "index": {
          "description": "An interface to which data which have default-value can adhere",
          "hierarchy": "ToolShed Defaultable",
          "module": "ToolShed.Defaultable",
          "name": "Defaultable",
          "package": "toolshed",
          "partial": "Defaultable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Defaultable.html#t:Defaultable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ToolShed.Defaultable",
          "name": "defaultValue",
          "package": "toolshed",
          "signature": "defaultValue",
          "source": "src/ToolShed-Defaultable.html#defaultValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "ToolShed Defaultable",
          "module": "ToolShed.Defaultable",
          "name": "defaultValue",
          "package": "toolshed",
          "partial": "Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Defaultable.html#v:defaultValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDefines a standard interface to which various options-related data can conform.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Options",
          "name": "Options",
          "package": "toolshed",
          "source": "src/ToolShed-Options.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines standard interface to which various options-related data can conform",
          "hierarchy": "ToolShed Options",
          "module": "ToolShed.Options",
          "name": "Options",
          "package": "toolshed",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to the class \u003ccode\u003e\u003ca\u003eRegexOptions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.Options",
          "name": "Options",
          "package": "toolshed",
          "source": "src/ToolShed-Options.html#Options",
          "type": "class"
        },
        "index": {
          "description": "Similar to the class RegexOptions",
          "hierarchy": "ToolShed Options",
          "module": "ToolShed.Options",
          "name": "Options",
          "package": "toolshed",
          "partial": "Options",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Options.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ToolShed.Options",
          "name": "blankValue",
          "package": "toolshed",
          "signature": "blankValue",
          "source": "src/ToolShed-Options.html#blankValue",
          "type": "method"
        },
        "index": {
          "hierarchy": "ToolShed Options",
          "module": "ToolShed.Options",
          "name": "blankValue",
          "package": "toolshed",
          "partial": "Value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Options.html#v:blankValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tA class to define the simple interface, to which data which can self-validation, should conform.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.SelfValidate",
          "name": "SelfValidate",
          "package": "toolshed",
          "source": "src/ToolShed-SelfValidate.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION class to define the simple interface to which data which can self-validation should conform",
          "hierarchy": "ToolShed SelfValidate",
          "module": "ToolShed.SelfValidate",
          "name": "SelfValidate",
          "package": "toolshed",
          "partial": "Self Validate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-SelfValidate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe interface to which data which can self-validate should conform.\n\u003c/p\u003e",
          "module": "ToolShed.SelfValidate",
          "name": "SelfValidator",
          "package": "toolshed",
          "source": "src/ToolShed-SelfValidate.html#SelfValidator",
          "type": "class"
        },
        "index": {
          "description": "The interface to which data which can self-validate should conform",
          "hierarchy": "ToolShed SelfValidate",
          "module": "ToolShed.SelfValidate",
          "name": "SelfValidator",
          "package": "toolshed",
          "partial": "Self Validator",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-SelfValidate.html#t:SelfValidator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters failed tests amongst those specified.\n\u003c/p\u003e",
          "module": "ToolShed.SelfValidate",
          "name": "extractErrors",
          "package": "toolshed",
          "signature": "[(Bool, String)] -\u003e [String]",
          "source": "src/ToolShed-SelfValidate.html#extractErrors",
          "type": "function"
        },
        "index": {
          "description": "Filters failed tests amongst those specified",
          "hierarchy": "ToolShed SelfValidate",
          "module": "ToolShed.SelfValidate",
          "name": "extractErrors",
          "normalized": "[(Bool,String)]-\u003e[String]",
          "package": "toolshed",
          "partial": "Errors",
          "signature": "[(Bool,String)]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-SelfValidate.html#v:extractErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ToolShed.SelfValidate",
          "name": "getErrors",
          "package": "toolshed",
          "signature": "getErrors",
          "source": "src/ToolShed-SelfValidate.html#getErrors",
          "type": "method"
        },
        "index": {
          "hierarchy": "ToolShed SelfValidate",
          "module": "ToolShed.SelfValidate",
          "name": "getErrors",
          "package": "toolshed",
          "partial": "Errors",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-SelfValidate.html#v:getErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the first error only (so only call on failure of \u003ccode\u003e\u003ca\u003eisValid\u003c/a\u003e\u003c/code\u003e), since subsequent tests may be based on invalid data.\n\u003c/p\u003e",
          "module": "ToolShed.SelfValidate",
          "name": "getFirstError",
          "package": "toolshed",
          "signature": "v -\u003e String",
          "source": "src/ToolShed-SelfValidate.html#getFirstError",
          "type": "function"
        },
        "index": {
          "description": "Returns the first error only so only call on failure of isValid since subsequent tests may be based on invalid data",
          "hierarchy": "ToolShed SelfValidate",
          "module": "ToolShed.SelfValidate",
          "name": "getFirstError",
          "normalized": "a-\u003eString",
          "package": "toolshed",
          "partial": "First Error",
          "signature": "v-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-SelfValidate.html#v:getFirstError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ToolShed.SelfValidate",
          "name": "isValid",
          "package": "toolshed",
          "signature": "isValid",
          "source": "src/ToolShed-SelfValidate.html#isValid",
          "type": "method"
        },
        "index": {
          "hierarchy": "ToolShed SelfValidate",
          "module": "ToolShed.SelfValidate",
          "name": "isValid",
          "package": "toolshed",
          "partial": "Valid",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-SelfValidate.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tFile-operations.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.System.File",
          "name": "File",
          "package": "toolshed",
          "source": "src/ToolShed-System-File.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION File-operations",
          "hierarchy": "ToolShed System File",
          "module": "ToolShed.System.File",
          "name": "File",
          "package": "toolshed",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA file-path, and the contents read from it.\n\u003c/p\u003e",
          "module": "ToolShed.System.File",
          "name": "LocatedData",
          "package": "toolshed",
          "source": "src/ToolShed-System-File.html#LocatedData",
          "type": "type"
        },
        "index": {
          "description": "file-path and the contents read from it",
          "hierarchy": "ToolShed System File",
          "module": "ToolShed.System.File",
          "name": "LocatedData",
          "package": "toolshed",
          "partial": "Located Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-File.html#t:LocatedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ordered sequence of directories, searched for a file.\n\u003c/p\u003e",
          "module": "ToolShed.System.File",
          "name": "SearchPath",
          "package": "toolshed",
          "source": "src/ToolShed-System-File.html#SearchPath",
          "type": "type"
        },
        "index": {
          "description": "The ordered sequence of directories searched for file",
          "hierarchy": "ToolShed System File",
          "module": "ToolShed.System.File",
          "name": "SearchPath",
          "package": "toolshed",
          "partial": "Search Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-File.html#t:SearchPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Returns the polymorphic data, read from the first matching file on the \u003cem\u003esearch-path\u003c/em\u003e, along with the path from which it was read.\n\u003c/li\u003e\u003cli\u003e Returns an error on failure to parse the contents of the first matching file found on the \u003cem\u003esearch-path\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.System.File",
          "name": "fromFile",
          "package": "toolshed",
          "signature": "FilePath -\u003e SearchPath -\u003e IO (LocatedData a)",
          "source": "src/ToolShed-System-File.html#fromFile",
          "type": "function"
        },
        "index": {
          "description": "Returns the polymorphic data read from the first matching file on the search-path along with the path from which it was read Returns an error on failure to parse the contents of the first matching file found on the search-path",
          "hierarchy": "ToolShed System File",
          "module": "ToolShed.System.File",
          "name": "fromFile",
          "normalized": "FilePath-\u003eSearchPath-\u003eIO(LocatedData a)",
          "package": "toolshed",
          "partial": "File",
          "signature": "FilePath-\u003eSearchPath-\u003eIO(LocatedData a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-File.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "ToolShed.System.File",
          "name": "getData",
          "package": "toolshed",
          "signature": "LocatedData a -\u003e a",
          "source": "src/ToolShed-System-File.html#getData",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "ToolShed System File",
          "module": "ToolShed.System.File",
          "name": "getData",
          "normalized": "LocatedData a-\u003ea",
          "package": "toolshed",
          "partial": "Data",
          "signature": "LocatedData a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-File.html#v:getData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse the \u003cem\u003esearch-path\u003c/em\u003e, looking for matching instances of the specified file-name,\n\tand either throw an exception, or return a pair composed from the path to the first matching file, together with its contents.\n\u003c/p\u003e",
          "module": "ToolShed.System.File",
          "name": "getFile",
          "package": "toolshed",
          "signature": "FilePath -\u003e SearchPath -\u003e IO (LocatedData String)",
          "source": "src/ToolShed-System-File.html#getFile",
          "type": "function"
        },
        "index": {
          "description": "Traverse the search-path looking for matching instances of the specified file-name and either throw an exception or return pair composed from the path to the first matching file together with its contents",
          "hierarchy": "ToolShed System File",
          "module": "ToolShed.System.File",
          "name": "getFile",
          "normalized": "FilePath-\u003eSearchPath-\u003eIO(LocatedData String)",
          "package": "toolshed",
          "partial": "File",
          "signature": "FilePath-\u003eSearchPath-\u003eIO(LocatedData String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-File.html#v:getFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "ToolShed.System.File",
          "name": "getFilePath",
          "package": "toolshed",
          "signature": "LocatedData a -\u003e FilePath",
          "source": "src/ToolShed-System-File.html#getFilePath",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "ToolShed System File",
          "module": "ToolShed.System.File",
          "name": "getFilePath",
          "normalized": "LocatedData a-\u003eFilePath",
          "package": "toolshed",
          "partial": "File Path",
          "signature": "LocatedData a-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-File.html#v:getFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e When supplied with an \u003cem\u003eabsolute\u003c/em\u003e file-path, the \u003cem\u003esearch-path\u003c/em\u003e is ignored and an exception is thrown if either the file-path is invalid or the file doesn't exist.\n\u003c/li\u003e\u003cli\u003e If the specified file-name is \u003cem\u003erelative\u003c/em\u003e, all matching instances on the specified \u003cem\u003esearch-path\u003c/em\u003e are returned.\n\u003c/li\u003e\u003cli\u003e CAVEAT: doesn't perform file-globbing.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.System.File",
          "name": "locate",
          "package": "toolshed",
          "signature": "FilePath -\u003e SearchPath -\u003e IO [FilePath]",
          "source": "src/ToolShed-System-File.html#locate",
          "type": "function"
        },
        "index": {
          "description": "When supplied with an absolute file-path the search-path is ignored and an exception is thrown if either the file-path is invalid or the file doesn exist If the specified file-name is relative all matching instances on the specified search-path are returned CAVEAT doesn perform file-globbing",
          "hierarchy": "ToolShed System File",
          "module": "ToolShed.System.File",
          "name": "locate",
          "normalized": "FilePath-\u003eSearchPath-\u003eIO[FilePath]",
          "package": "toolshed",
          "signature": "FilePath-\u003eSearchPath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-File.html#v:locate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tUtilities related to random-numbers.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.System.Random",
          "name": "Random",
          "package": "toolshed",
          "source": "src/ToolShed-System-Random.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Utilities related to random-numbers",
          "hierarchy": "ToolShed System Random",
          "module": "ToolShed.System.Random",
          "name": "Random",
          "package": "toolshed",
          "partial": "Random",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-Random.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Generate an infinite list of items, each independently randomly selected from the specified finite list.\n\u003c/li\u003e\u003cli\u003e CAVEAT: because the selections are made non-destructively, duplicates may be returned; cf. \u003ccode\u003e\u003ca\u003eshuffle\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.System.Random",
          "name": "generateSelection",
          "package": "toolshed",
          "signature": "randomGen -\u003e [a] -\u003e [a]",
          "source": "src/ToolShed-System-Random.html#generateSelection",
          "type": "function"
        },
        "index": {
          "description": "Generate an infinite list of items each independently randomly selected from the specified finite list CAVEAT because the selections are made non-destructively duplicates may be returned cf shuffle",
          "hierarchy": "ToolShed System Random",
          "module": "ToolShed.System.Random",
          "name": "generateSelection",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "toolshed",
          "partial": "Selection",
          "signature": "randomGen-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-Random.html#v:generateSelection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Generate an infinite list of data, each independently selected random instances of the specified \u003cem\u003ebounded\u003c/em\u003e type.\n\u003c/li\u003e\u003cli\u003e E.g. \u003ccode\u003e (generateSelectionFromBounded \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e System.Random.getStdGen) :: IO [Bool] \u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.System.Random",
          "name": "generateSelectionFromBounded",
          "package": "toolshed",
          "signature": "randomGen -\u003e [a]",
          "source": "src/ToolShed-System-Random.html#generateSelectionFromBounded",
          "type": "function"
        },
        "index": {
          "description": "Generate an infinite list of data each independently selected random instances of the specified bounded type E.g generateSelectionFromBounded fmap System.Random.getStdGen IO Bool",
          "hierarchy": "ToolShed System Random",
          "module": "ToolShed.System.Random",
          "name": "generateSelectionFromBounded",
          "normalized": "a-\u003e[b]",
          "package": "toolshed",
          "partial": "Selection From Bounded",
          "signature": "randomGen-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-Random.html#v:generateSelectionFromBounded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an infinite list of independent random-generators.\n\u003c/p\u003e",
          "module": "ToolShed.System.Random",
          "name": "randomGens",
          "package": "toolshed",
          "signature": "randomGen -\u003e [randomGen]",
          "source": "src/ToolShed-System-Random.html#randomGens",
          "type": "function"
        },
        "index": {
          "description": "Constructs an infinite list of independent random-generators",
          "hierarchy": "ToolShed System Random",
          "module": "ToolShed.System.Random",
          "name": "randomGens",
          "normalized": "a-\u003e[a]",
          "package": "toolshed",
          "partial": "Gens",
          "signature": "randomGen-\u003e[randomGen]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-Random.html#v:randomGens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a randomly selected element from the specified list.\n\u003c/p\u003e",
          "module": "ToolShed.System.Random",
          "name": "select",
          "package": "toolshed",
          "signature": "randomGen -\u003e [a] -\u003e a",
          "source": "src/ToolShed-System-Random.html#select",
          "type": "function"
        },
        "index": {
          "description": "Return randomly selected element from the specified list",
          "hierarchy": "ToolShed System Random",
          "module": "ToolShed.System.Random",
          "name": "select",
          "normalized": "a-\u003e[b]-\u003eb",
          "package": "toolshed",
          "signature": "randomGen-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-Random.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Shuffles the specified finite list, using the \u003cem\u003eFisher-Yates\u003c/em\u003e algorithm; \u003ca\u003ehttp://en.wikipedia.org/wiki/Fisher-Yates_shuffle\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e The resulting list has the same length and constituents as the original; only the order has changed.\n\u003c/li\u003e\u003cli\u003e The input list is traversed, but the items aren't evaluated.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.System.Random",
          "name": "shuffle",
          "package": "toolshed",
          "signature": "randomGen -\u003e [a] -\u003e [a]",
          "source": "src/ToolShed-System-Random.html#shuffle",
          "type": "function"
        },
        "index": {
          "description": "Shuffles the specified finite list using the Fisher-Yates algorithm http en.wikipedia.org wiki Fisher-Yates shuffle The resulting list has the same length and constituents as the original only the order has changed The input list is traversed but the items aren evaluated",
          "hierarchy": "ToolShed System Random",
          "module": "ToolShed.System.Random",
          "name": "shuffle",
          "normalized": "a-\u003e[b]-\u003e[b]",
          "package": "toolshed",
          "signature": "randomGen-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-Random.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDetermines the CPU-time, required to evaluate the specified IO-action.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.System.TimeAction",
          "name": "TimeAction",
          "package": "toolshed",
          "source": "src/ToolShed-System-TimeAction.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Determines the CPU-time required to evaluate the specified IO-action",
          "hierarchy": "ToolShed System TimeAction",
          "module": "ToolShed.System.TimeAction",
          "name": "TimeAction",
          "package": "toolshed",
          "partial": "Time Action",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-TimeAction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime the specified IO-action, returning the required number of CPU-seconds and the result, as a \u003ccode\u003ePair\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "ToolShed.System.TimeAction",
          "name": "getCPUSeconds",
          "package": "toolshed",
          "signature": "IO result -\u003e IO (seconds, result)",
          "source": "src/ToolShed-System-TimeAction.html#getCPUSeconds",
          "type": "function"
        },
        "index": {
          "description": "Time the specified IO-action returning the required number of CPU-seconds and the result as Pair",
          "hierarchy": "ToolShed System TimeAction",
          "module": "ToolShed.System.TimeAction",
          "name": "getCPUSeconds",
          "normalized": "IO a-\u003eIO(b,a)",
          "package": "toolshed",
          "partial": "CPUSeconds",
          "signature": "IO result-\u003eIO(seconds,result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-TimeAction.html#v:getCPUSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint the time required by the specified IO-action.\n\u003c/p\u003e",
          "module": "ToolShed.System.TimeAction",
          "name": "printCPUSeconds",
          "package": "toolshed",
          "signature": "IO result -\u003e IO result",
          "source": "src/ToolShed-System-TimeAction.html#printCPUSeconds",
          "type": "function"
        },
        "index": {
          "description": "Print the time required by the specified IO-action",
          "hierarchy": "ToolShed System TimeAction",
          "module": "ToolShed.System.TimeAction",
          "name": "printCPUSeconds",
          "normalized": "IO a-\u003eIO a",
          "package": "toolshed",
          "partial": "CPUSeconds",
          "signature": "IO result-\u003eIO result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-TimeAction.html#v:printCPUSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDetermines the CPU-time, required to evaluate the specified pure expression.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.System.TimePure",
          "name": "TimePure",
          "package": "toolshed",
          "source": "src/ToolShed-System-TimePure.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Determines the CPU-time required to evaluate the specified pure expression",
          "hierarchy": "ToolShed System TimePure",
          "module": "ToolShed.System.TimePure",
          "name": "TimePure",
          "package": "toolshed",
          "partial": "Time Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-TimePure.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Time the specified pure expression, returning the required number of CPU-seconds and the result, as a \u003ccode\u003ePair\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: as a side-effect, the expression is \u003cem\u003edeep\u003c/em\u003e evaluated.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.System.TimePure",
          "name": "getCPUSeconds",
          "package": "toolshed",
          "signature": "expression-\u003e IO (seconds, expression)",
          "type": "function"
        },
        "index": {
          "description": "Time the specified pure expression returning the required number of CPU-seconds and the result as Pair CAVEAT as side-effect the expression is deep evaluated",
          "hierarchy": "ToolShed System TimePure",
          "module": "ToolShed.System.TimePure",
          "name": "getCPUSeconds",
          "normalized": "a-\u003eIO(b,a)",
          "package": "toolshed",
          "partial": "CPUSeconds",
          "signature": "expression-\u003eIO(seconds,expression)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-TimePure.html#v:getCPUSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Print the time required by the specified pure expression.\n\u003c/li\u003e\u003cli\u003e CAVEAT: as a side-effect, the expression is \u003cem\u003edeep\u003c/em\u003e evaluated.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ToolShed.System.TimePure",
          "name": "printCPUSeconds",
          "package": "toolshed",
          "signature": "expression -\u003e IO expression",
          "source": "src/ToolShed-System-TimePure.html#printCPUSeconds",
          "type": "function"
        },
        "index": {
          "description": "Print the time required by the specified pure expression CAVEAT as side-effect the expression is deep evaluated",
          "hierarchy": "ToolShed System TimePure",
          "module": "ToolShed.System.TimePure",
          "name": "printCPUSeconds",
          "normalized": "a-\u003eIO a",
          "package": "toolshed",
          "partial": "CPUSeconds",
          "signature": "expression-\u003eIO expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-System-TimePure.html#v:printCPUSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tImplements \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEXAMPLE\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\t\u003ccode\u003eTest.QuickCheck.sample (Test.QuickCheck.arbitrary :: Test.QuickCheck.Gen.Gen (Data.Array.IArray.Array Char Int))\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCAVEAT\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tAn array with arbitrary indices isn't very useful.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Test.QuickCheck.Arbitrary.Array",
          "name": "Array",
          "package": "toolshed",
          "source": "src/ToolShed-Test-QuickCheck-Arbitrary-Array.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Implements Arbitrary for Array EXAMPLE Test.QuickCheck.sample Test.QuickCheck.arbitrary Test.QuickCheck.Gen.Gen Data.Array.IArray.Array Char Int CAVEAT An array with arbitrary indices isn very useful",
          "hierarchy": "ToolShed Test QuickCheck Arbitrary Array",
          "module": "ToolShed.Test.QuickCheck.Arbitrary.Array",
          "name": "Array",
          "package": "toolshed",
          "partial": "Array",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Test-QuickCheck-Arbitrary-Array.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eImplements \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e,\n\twhere the array-index is required to be a \u003cem\u003ebounded enumerable\u003c/em\u003e type.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eEXAMPLE\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\t\u003ccode\u003eTest.QuickCheck.sample (Test.QuickCheck.arbitrary :: Test.QuickCheck.Gen.Gen (Data.Array.IArray.Array Data.Int.Int8 Int))\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Test.QuickCheck.Arbitrary.ArrayElem",
          "name": "ArrayElem",
          "package": "toolshed",
          "source": "src/ToolShed-Test-QuickCheck-Arbitrary-ArrayElem.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Implements Arbitrary for Array where the array-index is required to be bounded enumerable type EXAMPLE Test.QuickCheck.sample Test.QuickCheck.arbitrary Test.QuickCheck.Gen.Gen Data.Array.IArray.Array Data.Int.Int8 Int",
          "hierarchy": "ToolShed Test QuickCheck Arbitrary ArrayElem",
          "module": "ToolShed.Test.QuickCheck.Arbitrary.ArrayElem",
          "name": "ArrayElem",
          "package": "toolshed",
          "partial": "Array Elem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Test-QuickCheck-Arbitrary-ArrayElem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tImplements \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEXAMPLE\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\t\u003ccode\u003eTest.QuickCheck.sample (Test.QuickCheck.arbitrary :: Test.QuickCheck.Gen.Gen (Data.Map.Map Char Int))\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Test.QuickCheck.Arbitrary.Map",
          "name": "Map",
          "package": "toolshed",
          "source": "src/ToolShed-Test-QuickCheck-Arbitrary-Map.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Implements Arbitrary for Map EXAMPLE Test.QuickCheck.sample Test.QuickCheck.arbitrary Test.QuickCheck.Gen.Gen Data.Map.Map Char Int",
          "hierarchy": "ToolShed Test QuickCheck Arbitrary Map",
          "module": "ToolShed.Test.QuickCheck.Arbitrary.Map",
          "name": "Map",
          "package": "toolshed",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Test-QuickCheck-Arbitrary-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tImplements \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eEXAMPLE\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\t\u003ccode\u003eTest.QuickCheck.sample (Test.QuickCheck.arbitrary :: Test.QuickCheck.Gen.Gen (Data.Set.Set Int))\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Test.QuickCheck.Arbitrary.Set",
          "name": "Set",
          "package": "toolshed",
          "source": "src/ToolShed-Test-QuickCheck-Arbitrary-Set.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Implements Arbitrary for Set EXAMPLE Test.QuickCheck.sample Test.QuickCheck.arbitrary Test.QuickCheck.Gen.Gen Data.Set.Set Int",
          "hierarchy": "ToolShed Test QuickCheck Arbitrary Set",
          "module": "ToolShed.Test.QuickCheck.Arbitrary.Set",
          "name": "Set",
          "package": "toolshed",
          "partial": "Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Test-QuickCheck-Arbitrary-Set.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tFacilities testing of custom implementations of \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Test.ReversibleBoundedEnum",
          "name": "ReversibleBoundedEnum",
          "package": "toolshed",
          "source": "src/ToolShed-Test-ReversibleBoundedEnum.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Facilities testing of custom implementations of Enum",
          "hierarchy": "ToolShed Test ReversibleBoundedEnum",
          "module": "ToolShed.Test.ReversibleBoundedEnum",
          "name": "ReversibleBoundedEnum",
          "package": "toolshed",
          "partial": "Reversible Bounded Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Test-ReversibleBoundedEnum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that composing \u003ccode\u003e\u003ca\u003epred\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e is equivalent to the identity.\n\u003c/p\u003e",
          "module": "ToolShed.Test.ReversibleBoundedEnum",
          "name": "isReversible",
          "package": "toolshed",
          "signature": "r -\u003e Bool",
          "source": "src/ToolShed-Test-ReversibleBoundedEnum.html#isReversible",
          "type": "function"
        },
        "index": {
          "description": "Checks that composing pred succ is equivalent to the identity",
          "hierarchy": "ToolShed Test ReversibleBoundedEnum",
          "module": "ToolShed.Test.ReversibleBoundedEnum",
          "name": "isReversible",
          "normalized": "a-\u003eBool",
          "package": "toolshed",
          "partial": "Reversible",
          "signature": "r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Test-ReversibleBoundedEnum.html#v:isReversible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tFacilities testing of custom implementations of \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "ToolShed.Test.ReversibleEnum",
          "name": "ReversibleEnum",
          "package": "toolshed",
          "source": "src/ToolShed-Test-ReversibleEnum.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Facilities testing of custom implementations of Enum",
          "hierarchy": "ToolShed Test ReversibleEnum",
          "module": "ToolShed.Test.ReversibleEnum",
          "name": "ReversibleEnum",
          "package": "toolshed",
          "partial": "Reversible Enum",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Test-ReversibleEnum.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that composing \u003ccode\u003e\u003ca\u003etoEnum\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003efromEnum\u003c/a\u003e\u003c/code\u003e is equivalent to the identity.\n\u003c/p\u003e",
          "module": "ToolShed.Test.ReversibleEnum",
          "name": "isReversible",
          "package": "toolshed",
          "signature": "r -\u003e Bool",
          "source": "src/ToolShed-Test-ReversibleEnum.html#isReversible",
          "type": "function"
        },
        "index": {
          "description": "Checks that composing toEnum fromEnum is equivalent to the identity",
          "hierarchy": "ToolShed Test ReversibleEnum",
          "module": "ToolShed.Test.ReversibleEnum",
          "name": "isReversible",
          "normalized": "a-\u003eBool",
          "package": "toolshed",
          "partial": "Reversible",
          "signature": "r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Test-ReversibleEnum.html#v:isReversible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Facilities testing of custom implementations of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: it doesn't actually do any IO.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "ToolShed.Test.ReversibleIO",
          "name": "ReversibleIO",
          "package": "toolshed",
          "source": "src/ToolShed-Test-ReversibleIO.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Facilities testing of custom implementations of Read Show CAVEAT it doesn actually do any IO",
          "hierarchy": "ToolShed Test ReversibleIO",
          "module": "ToolShed.Test.ReversibleIO",
          "name": "ReversibleIO",
          "package": "toolshed",
          "partial": "Reversible IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Test-ReversibleIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that composing \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e is equivalent to the identity.\n\u003c/p\u003e",
          "module": "ToolShed.Test.ReversibleIO",
          "name": "isReversible",
          "package": "toolshed",
          "signature": "r -\u003e Bool",
          "source": "src/ToolShed-Test-ReversibleIO.html#isReversible",
          "type": "function"
        },
        "index": {
          "description": "Checks that composing read show is equivalent to the identity",
          "hierarchy": "ToolShed Test ReversibleIO",
          "module": "ToolShed.Test.ReversibleIO",
          "name": "isReversible",
          "normalized": "a-\u003eBool",
          "package": "toolshed",
          "partial": "Reversible",
          "signature": "r-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/toolshed/docs/ToolShed-Test-ReversibleIO.html#v:isReversible"
      }
    }
  ]
]