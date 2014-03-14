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
        "word": "CSPM-cspm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Assert",
          "name": "Assert",
          "package": "CSPM-cspm",
          "source": "src/CSPM-Assert.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CSPM Assert",
          "module": "CSPM.Assert",
          "name": "Assert",
          "package": "CSPM-cspm",
          "partial": "Assert",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-Assert.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Assert",
          "name": "checkFileAsserts",
          "package": "CSPM-cspm",
          "signature": "FilePath -\u003e Bool -\u003e IO [AssertResult]",
          "source": "src/CSPM-Assert.html#checkFileAsserts",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Assert",
          "module": "CSPM.Assert",
          "name": "checkFileAsserts",
          "normalized": "FilePath-\u003eBool-\u003eIO[AssertResult]",
          "package": "CSPM-cspm",
          "partial": "File Asserts",
          "signature": "FilePath-\u003eBool-\u003eIO[AssertResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-Assert.html#v:checkFileAsserts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Assert",
          "name": "formatAssertResults",
          "package": "CSPM-cspm",
          "signature": "[AssertResult] -\u003e Doc",
          "source": "src/CSPM-Assert.html#formatAssertResults",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Assert",
          "module": "CSPM.Assert",
          "name": "formatAssertResults",
          "normalized": "[AssertResult]-\u003eDoc",
          "package": "CSPM-cspm",
          "partial": "Assert Results",
          "signature": "[AssertResult]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-Assert.html#v:formatAssertResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSearch the state-space of a CSPM process for deadlock states\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.LTS.Deadlock",
          "name": "Deadlock",
          "package": "CSPM-cspm",
          "source": "src/CSPM-LTS-Deadlock.html",
          "type": "module"
        },
        "index": {
          "description": "Search the state-space of CSPM process for deadlock states",
          "hierarchy": "CSPM LTS Deadlock",
          "module": "CSPM.LTS.Deadlock",
          "name": "Deadlock",
          "package": "CSPM-cspm",
          "partial": "Deadlock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-Deadlock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch the statespace of a process for deadlock states.\n returns the shortes trace to a deadlock.\n\u003c/p\u003e",
          "module": "CSPM.LTS.Deadlock",
          "name": "findDeadlock",
          "package": "CSPM-cspm",
          "signature": "Sigma INT-\u003e Process INT-\u003e Maybe [Rule INT]",
          "type": "function"
        },
        "index": {
          "description": "Search the statespace of process for deadlock states returns the shortes trace to deadlock",
          "hierarchy": "CSPM LTS Deadlock",
          "module": "CSPM.LTS.Deadlock",
          "name": "findDeadlock",
          "normalized": "Sigma INT-\u003eProcess INT-\u003eMaybe[Rule INT]",
          "package": "CSPM-cspm",
          "partial": "Deadlock",
          "signature": "Sigma INT-\u003eProcess INT-\u003eMaybe[Rule INT]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-Deadlock.html#v:findDeadlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.LTS.LTS",
          "name": "LTS",
          "package": "CSPM-cspm",
          "source": "src/CSPM-LTS-LTS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CSPM LTS LTS",
          "module": "CSPM.LTS.LTS",
          "name": "LTS",
          "package": "CSPM-cspm",
          "partial": "LTS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-LTS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.LTS.LTS",
          "name": "LTS",
          "package": "CSPM-cspm",
          "source": "src/CSPM-LTS-LTS.html#LTS",
          "type": "type"
        },
        "index": {
          "hierarchy": "CSPM LTS LTS",
          "module": "CSPM.LTS.LTS",
          "name": "LTS",
          "package": "CSPM-cspm",
          "partial": "LTS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-LTS.html#t:LTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.LTS.LTS",
          "name": "LtsNode",
          "package": "CSPM-cspm",
          "source": "src/CSPM-LTS-LTS.html#LtsNode",
          "type": "data"
        },
        "index": {
          "hierarchy": "CSPM LTS LTS",
          "module": "CSPM.LTS.LTS",
          "name": "LtsNode",
          "package": "CSPM-cspm",
          "partial": "Lts Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-LTS.html#t:LtsNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.LTS.LTS",
          "name": "LtsNode",
          "package": "CSPM-cspm",
          "signature": "LtsNode",
          "source": "src/CSPM-LTS-LTS.html#LtsNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM LTS LTS",
          "module": "CSPM.LTS.LTS",
          "name": "LtsNode",
          "package": "CSPM-cspm",
          "partial": "Lts Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-LTS.html#v:LtsNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the hash value of an LTS. (Warning: This does not include entry process)\n\u003c/p\u003e",
          "module": "CSPM.LTS.LTS",
          "name": "hashLTS",
          "package": "CSPM-cspm",
          "signature": "LTS -\u003e Digest",
          "source": "src/CSPM-LTS-LTS.html#hashLTS",
          "type": "function"
        },
        "index": {
          "description": "Compute the hash value of an LTS Warning This does not include entry process",
          "hierarchy": "CSPM LTS LTS",
          "module": "CSPM.LTS.LTS",
          "name": "hashLTS",
          "normalized": "LTS-\u003eDigest",
          "package": "CSPM-cspm",
          "partial": "LTS",
          "signature": "LTS-\u003eDigest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-LTS.html#v:hashLTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.LTS.LTS",
          "name": "mkLtsNode",
          "package": "CSPM-cspm",
          "signature": "Process -\u003e LtsNode",
          "source": "src/CSPM-LTS-LTS.html#mkLtsNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM LTS LTS",
          "module": "CSPM.LTS.LTS",
          "name": "mkLtsNode",
          "normalized": "Process-\u003eLtsNode",
          "package": "CSPM-cspm",
          "partial": "Lts Node",
          "signature": "Process-\u003eLtsNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-LTS.html#v:mkLtsNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.LTS.LTS",
          "name": "nodeDigest",
          "package": "CSPM-cspm",
          "signature": "Digest",
          "source": "src/CSPM-LTS-LTS.html#LtsNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM LTS LTS",
          "module": "CSPM.LTS.LTS",
          "name": "nodeDigest",
          "package": "CSPM-cspm",
          "partial": "Digest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-LTS.html#v:nodeDigest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.LTS.LTS",
          "name": "nodeProcess",
          "package": "CSPM-cspm",
          "signature": "Process",
          "source": "src/CSPM-LTS-LTS.html#LtsNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM LTS LTS",
          "module": "CSPM.LTS.LTS",
          "name": "nodeProcess",
          "package": "CSPM-cspm",
          "partial": "Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-LTS.html#v:nodeProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompute the labled transition system of a process.\n Uses depth first search and runs in the IO-Monad.\n A Timeout can be set and the function can return a partial LTS\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.LTS.MkLtsDFS",
          "name": "MkLtsDFS",
          "package": "CSPM-cspm",
          "source": "src/CSPM-LTS-MkLtsDFS.html",
          "type": "module"
        },
        "index": {
          "description": "Compute the labled transition system of process Uses depth first search and runs in the IO-Monad Timeout can be set and the function can return partial LTS",
          "hierarchy": "CSPM LTS MkLtsDFS",
          "module": "CSPM.LTS.MkLtsDFS",
          "name": "MkLtsDFS",
          "package": "CSPM-cspm",
          "partial": "Mk Lts DFS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-MkLtsDFS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform one iteration of the DFS loop\n\u003c/p\u003e",
          "module": "CSPM.LTS.MkLtsDFS",
          "name": "dfsStep",
          "package": "CSPM-cspm",
          "signature": "Sigma INT -\u003e DFSState -\u003e (DFSState, Bool)",
          "source": "src/CSPM-LTS-MkLtsDFS.html#dfsStep",
          "type": "function"
        },
        "index": {
          "description": "perform one iteration of the DFS loop",
          "hierarchy": "CSPM LTS MkLtsDFS",
          "module": "CSPM.LTS.MkLtsDFS",
          "name": "dfsStep",
          "normalized": "Sigma INT-\u003eDFSState-\u003e(DFSState,Bool)",
          "package": "CSPM-cspm",
          "partial": "Step",
          "signature": "Sigma INT-\u003eDFSState-\u003e(DFSState,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-MkLtsDFS.html#v:dfsStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eWarning: mkLts leaks memory: TODO : fix this\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eGenerate an LTS with a DFS\n\u003c/p\u003e",
          "module": "CSPM.LTS.MkLtsDFS",
          "name": "mkLtsDFS",
          "package": "CSPM-cspm",
          "signature": "Bool -\u003e Maybe Double -\u003e Sigma INT -\u003e Process INT -\u003e IO (LTS, Bool)",
          "source": "src/CSPM-LTS-MkLtsDFS.html#mkLtsDFS",
          "type": "function"
        },
        "index": {
          "description": "Warning mkLts leaks memory TODO fix this Generate an LTS with DFS",
          "hierarchy": "CSPM LTS MkLtsDFS",
          "module": "CSPM.LTS.MkLtsDFS",
          "name": "mkLtsDFS",
          "normalized": "Bool-\u003eMaybe Double-\u003eSigma INT-\u003eProcess INT-\u003eIO(LTS,Bool)",
          "package": "CSPM-cspm",
          "partial": "Lts DFS",
          "signature": "Bool-\u003eMaybe Double-\u003eSigma INT-\u003eProcess INT-\u003eIO(LTS,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-MkLtsDFS.html#v:mkLtsDFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompute the labled transition system of a process.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.LTS.MkLtsPar",
          "name": "MkLtsPar",
          "package": "CSPM-cspm",
          "source": "src/CSPM-LTS-MkLtsPar.html",
          "type": "module"
        },
        "index": {
          "description": "Compute the labled transition system of process",
          "hierarchy": "CSPM LTS MkLtsPar",
          "module": "CSPM.LTS.MkLtsPar",
          "name": "MkLtsPar",
          "package": "CSPM-cspm",
          "partial": "Mk Lts Par",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-MkLtsPar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the LTS of a Process using parallel strategies\n\u003c/p\u003e",
          "module": "CSPM.LTS.MkLtsPar",
          "name": "mkLtsPar",
          "package": "CSPM-cspm",
          "signature": "Sigma INT -\u003e Process INT -\u003e LTS",
          "source": "src/CSPM-LTS-MkLtsPar.html#mkLtsPar",
          "type": "function"
        },
        "index": {
          "description": "Compute the LTS of Process using parallel strategies",
          "hierarchy": "CSPM LTS MkLtsPar",
          "module": "CSPM.LTS.MkLtsPar",
          "name": "mkLtsPar",
          "normalized": "Sigma INT-\u003eProcess INT-\u003eLTS",
          "package": "CSPM-cspm",
          "partial": "Lts Par",
          "signature": "Sigma INT-\u003eProcess INT-\u003eLTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-MkLtsPar.html#v:mkLtsPar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.LTS.ToCsp",
          "name": "ToCsp",
          "package": "CSPM-cspm",
          "source": "src/CSPM-LTS-ToCsp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "CSPM LTS ToCsp",
          "module": "CSPM.LTS.ToCsp",
          "name": "ToCsp",
          "package": "CSPM-cspm",
          "partial": "To Csp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-ToCsp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate an LTS to a CSP specification suitable for reloading it with FDR.\n\u003c/p\u003e",
          "module": "CSPM.LTS.ToCsp",
          "name": "ltsToCsp",
          "package": "CSPM-cspm",
          "signature": "Process INT-\u003e LTS-\u003e Doc",
          "type": "function"
        },
        "index": {
          "description": "Translate an LTS to CSP specification suitable for reloading it with FDR",
          "hierarchy": "CSPM LTS ToCsp",
          "module": "CSPM.LTS.ToCsp",
          "name": "ltsToCsp",
          "normalized": "Process INT-\u003eLTS-\u003eDoc",
          "package": "CSPM-cspm",
          "partial": "To Csp",
          "signature": "Process INT-\u003eLTS-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-ToCsp.html#v:ltsToCsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003edump a Lts as a Dot-file\n todo : completely rewrite (use dot-library)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.LTS.ToDot",
          "name": "ToDot",
          "package": "CSPM-cspm",
          "source": "src/CSPM-LTS-ToDot.html",
          "type": "module"
        },
        "index": {
          "description": "dump Lts as Dot-file todo completely rewrite use dot-library",
          "hierarchy": "CSPM LTS ToDot",
          "module": "CSPM.LTS.ToDot",
          "name": "ToDot",
          "package": "CSPM-cspm",
          "partial": "To Dot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-ToDot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump a LTS as a .dot-file.\n\u003c/p\u003e",
          "module": "CSPM.LTS.ToDot",
          "name": "mkDotFile",
          "package": "CSPM-cspm",
          "signature": "FilePath -\u003e LTS -\u003e IO ()",
          "source": "src/CSPM-LTS-ToDot.html#mkDotFile",
          "type": "function"
        },
        "index": {
          "description": "Dump LTS as dot-file",
          "hierarchy": "CSPM LTS ToDot",
          "module": "CSPM.LTS.ToDot",
          "name": "mkDotFile",
          "normalized": "FilePath-\u003eLTS-\u003eIO()",
          "package": "CSPM-cspm",
          "partial": "Dot File",
          "signature": "FilePath-\u003eLTS-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-LTS-ToDot.html#v:mkDotFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Lua interface for the CSPM tool.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "CSPM.Lua",
          "name": "Lua",
          "package": "CSPM-cspm",
          "source": "src/CSPM-Lua.html",
          "type": "module"
        },
        "index": {
          "description": "Lua interface for the CSPM tool",
          "hierarchy": "CSPM Lua",
          "module": "CSPM.Lua",
          "name": "Lua",
          "package": "CSPM-cspm",
          "partial": "Lua",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-Lua.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CSPM.Lua",
          "name": "runLua",
          "package": "CSPM-cspm",
          "signature": "String -\u003e String -\u003e [String] -\u003e IO ()",
          "source": "src/CSPM-Lua.html#runLua",
          "type": "function"
        },
        "index": {
          "hierarchy": "CSPM Lua",
          "module": "CSPM.Lua",
          "name": "runLua",
          "normalized": "String-\u003eString-\u003e[String]-\u003eIO()",
          "package": "CSPM-cspm",
          "partial": "Lua",
          "signature": "String-\u003eString-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/CSPM-Lua.html#v:runLua"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvert an AST to XML\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.CSPM.AstToXML",
          "name": "AstToXML",
          "package": "CSPM-cspm",
          "source": "src/Language-CSPM-AstToXML.html",
          "type": "module"
        },
        "index": {
          "description": "Convert an AST to XML",
          "hierarchy": "Language CSPM AstToXML",
          "module": "Language.CSPM.AstToXML",
          "name": "AstToXML",
          "package": "CSPM-cspm",
          "partial": "Ast To XML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Language-CSPM-AstToXML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate an AST node to an XML Element.\n This is an \u003ccode\u003ealmost\u003c/code\u003e totally generic translation which\n works for any Haskell type, but it handles some special cases.\n\u003c/p\u003e",
          "module": "Language.CSPM.AstToXML",
          "name": "astToXML",
          "package": "CSPM-cspm",
          "signature": "a -\u003e Element",
          "source": "src/Language-CSPM-AstToXML.html#astToXML",
          "type": "function"
        },
        "index": {
          "description": "Translate an AST node to an XML Element This is an almost totally generic translation which works for any Haskell type but it handles some special cases",
          "hierarchy": "Language CSPM AstToXML",
          "module": "Language.CSPM.AstToXML",
          "name": "astToXML",
          "normalized": "a-\u003eElement",
          "package": "CSPM-cspm",
          "partial": "To XML",
          "signature": "a-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Language-CSPM-AstToXML.html#v:astToXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a Module to XML\n\u003c/p\u003e",
          "module": "Language.CSPM.AstToXML",
          "name": "moduleToXML",
          "package": "CSPM-cspm",
          "signature": "Module a -\u003e Element",
          "source": "src/Language-CSPM-AstToXML.html#moduleToXML",
          "type": "function"
        },
        "index": {
          "description": "Translate Module to XML",
          "hierarchy": "Language CSPM AstToXML",
          "module": "Language.CSPM.AstToXML",
          "name": "moduleToXML",
          "normalized": "Module a-\u003eElement",
          "package": "CSPM-cspm",
          "partial": "To XML",
          "signature": "Module a-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Language-CSPM-AstToXML.html#v:moduleToXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the \u003ca\u003e?xml?\u003c/a\u003e header.\n\u003c/p\u003e",
          "module": "Language.CSPM.AstToXML",
          "name": "showTopElement",
          "package": "CSPM-cspm",
          "signature": "Element -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Adds the xml header",
          "hierarchy": "Language CSPM AstToXML",
          "module": "Language.CSPM.AstToXML",
          "name": "showTopElement",
          "normalized": "Element-\u003eString",
          "package": "CSPM-cspm",
          "partial": "Top Element",
          "signature": "Element-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Language-CSPM-AstToXML.html#v:showTopElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArgument parser for the command line interface\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Main.Args",
          "name": "Args",
          "package": "CSPM-cspm",
          "source": "src/Main-Args.html",
          "type": "module"
        },
        "index": {
          "description": "Argument parser for the command line interface",
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "Args",
          "package": "CSPM-cspm",
          "partial": "Args",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "Args",
          "package": "CSPM-cspm",
          "source": "src/Main-Args.html#Args",
          "type": "data"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "Args",
          "package": "CSPM-cspm",
          "partial": "Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#t:Args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "Assert",
          "package": "CSPM-cspm",
          "signature": "Assert",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "Assert",
          "package": "CSPM-cspm",
          "partial": "Assert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:Assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "Eval",
          "package": "CSPM-cspm",
          "signature": "Eval",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "Eval",
          "package": "CSPM-cspm",
          "partial": "Eval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:Eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "Info",
          "package": "CSPM-cspm",
          "signature": "Info",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "Info",
          "package": "CSPM-cspm",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:Info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "LTS",
          "package": "CSPM-cspm",
          "signature": "LTS",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "LTS",
          "package": "CSPM-cspm",
          "partial": "LTS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:LTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "Lua",
          "package": "CSPM-cspm",
          "signature": "Lua",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "Lua",
          "package": "CSPM-cspm",
          "partial": "Lua",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:Lua"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "Trace",
          "package": "CSPM-cspm",
          "signature": "Trace",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "Trace",
          "package": "CSPM-cspm",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "Translate",
          "package": "CSPM-cspm",
          "signature": "Translate",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "Translate",
          "package": "CSPM-cspm",
          "partial": "Translate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:Translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "addUnicode",
          "package": "CSPM-cspm",
          "signature": "Maybe FilePath",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "addUnicode",
          "package": "CSPM-cspm",
          "partial": "Unicode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:addUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand line argument parser using cmdargs library.\n\u003c/p\u003e",
          "module": "Main.Args",
          "name": "argParser",
          "package": "CSPM-cspm",
          "signature": "Mode (CmdArgs Args)",
          "source": "src/Main-Args.html#argParser",
          "type": "function"
        },
        "index": {
          "description": "Command line argument parser using cmdargs library",
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "argParser",
          "package": "CSPM-cspm",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:argParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "dfs",
          "package": "CSPM-cspm",
          "signature": "Bool",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "dfs",
          "package": "CSPM-cspm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:dfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "dotOut",
          "package": "CSPM-cspm",
          "signature": "Maybe FilePath",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "dotOut",
          "package": "CSPM-cspm",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:dotOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "entry",
          "package": "CSPM-cspm",
          "signature": "String",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "entry",
          "package": "CSPM-cspm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "evalContext",
          "package": "CSPM-cspm",
          "signature": "Maybe FilePath",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "evalContext",
          "package": "CSPM-cspm",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:evalContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "evalExpr",
          "package": "CSPM-cspm",
          "signature": "String",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "evalExpr",
          "package": "CSPM-cspm",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:evalExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "fdrOut",
          "package": "CSPM-cspm",
          "signature": "Maybe FilePath",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "fdrOut",
          "package": "CSPM-cspm",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:fdrOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "file",
          "package": "CSPM-cspm",
          "signature": "FilePath",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "file",
          "package": "CSPM-cspm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "prettyOut",
          "package": "CSPM-cspm",
          "signature": "Maybe FilePath",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "prettyOut",
          "package": "CSPM-cspm",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:prettyOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "prologOut",
          "package": "CSPM-cspm",
          "signature": "Maybe FilePath",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "prologOut",
          "package": "CSPM-cspm",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:prologOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "removeUnicode",
          "package": "CSPM-cspm",
          "signature": "Maybe FilePath",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "removeUnicode",
          "package": "CSPM-cspm",
          "partial": "Unicode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:removeUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "rename",
          "package": "CSPM-cspm",
          "signature": "Bool",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "rename",
          "package": "CSPM-cspm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "rest",
          "package": "CSPM-cspm",
          "signature": "[String]",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "rest",
          "normalized": "[String]",
          "package": "CSPM-cspm",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:rest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "src",
          "package": "CSPM-cspm",
          "signature": "FilePath",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "src",
          "package": "CSPM-cspm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "timeout",
          "package": "CSPM-cspm",
          "signature": "Maybe Double",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "timeout",
          "package": "CSPM-cspm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:timeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "verbose",
          "package": "CSPM-cspm",
          "signature": "Bool",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "verbose",
          "package": "CSPM-cspm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.Args",
          "name": "xmlOut",
          "package": "CSPM-cspm",
          "signature": "Maybe FilePath",
          "source": "src/Main-Args.html#Args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main Args",
          "module": "Main.Args",
          "name": "xmlOut",
          "package": "CSPM-cspm",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-Args.html#v:xmlOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExceptionHandler for the command line interface\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Main.ExceptionHandler",
          "name": "ExceptionHandler",
          "package": "CSPM-cspm",
          "source": "src/Main-ExceptionHandler.html",
          "type": "module"
        },
        "index": {
          "description": "ExceptionHandler for the command line interface",
          "hierarchy": "Main ExceptionHandler",
          "module": "Main.ExceptionHandler",
          "name": "ExceptionHandler",
          "package": "CSPM-cspm",
          "partial": "Exception Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-ExceptionHandler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe top-level exception handler.\n\u003c/p\u003e",
          "module": "Main.ExceptionHandler",
          "name": "handleException",
          "package": "CSPM-cspm",
          "signature": "IO () -\u003e IO ()",
          "source": "src/Main-ExceptionHandler.html#handleException",
          "type": "function"
        },
        "index": {
          "description": "The top-level exception handler",
          "hierarchy": "Main ExceptionHandler",
          "module": "Main.ExceptionHandler",
          "name": "handleException",
          "normalized": "IO()-\u003eIO()",
          "package": "CSPM-cspm",
          "partial": "Exception",
          "signature": "IO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-ExceptionHandler.html#v:handleException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComand line interface for the CSPM tools.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Main.ExecCommand",
          "name": "ExecCommand",
          "package": "CSPM-cspm",
          "source": "src/Main-ExecCommand.html",
          "type": "module"
        },
        "index": {
          "description": "Comand line interface for the CSPM tools",
          "hierarchy": "Main ExecCommand",
          "module": "Main.ExecCommand",
          "name": "ExecCommand",
          "package": "CSPM-cspm",
          "partial": "Exec Command",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-ExecCommand.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexecute the command according to command line arguments\n\u003c/p\u003e",
          "module": "Main.ExecCommand",
          "name": "execCommand",
          "package": "CSPM-cspm",
          "signature": "Args -\u003e IO ()",
          "source": "src/Main-ExecCommand.html#execCommand",
          "type": "function"
        },
        "index": {
          "description": "execute the command according to command line arguments",
          "hierarchy": "Main ExecCommand",
          "module": "Main.ExecCommand",
          "name": "execCommand",
          "normalized": "Args-\u003eIO()",
          "package": "CSPM-cspm",
          "partial": "Command",
          "signature": "Args-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-ExecCommand.html#v:execCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main.ExecCommand",
          "name": "mkProcess",
          "package": "CSPM-cspm",
          "signature": "FilePath -\u003e String -\u003e IO (Process, Sigma)",
          "source": "src/Main-ExecCommand.html#mkProcess",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main ExecCommand",
          "module": "Main.ExecCommand",
          "name": "mkProcess",
          "normalized": "FilePath-\u003eString-\u003eIO(Process,Sigma)",
          "package": "CSPM-cspm",
          "partial": "Process",
          "signature": "FilePath-\u003eString-\u003eIO(Process,Sigma)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CSPM-cspm/docs/Main-ExecCommand.html#v:mkProcess"
      }
    }
  ]
]