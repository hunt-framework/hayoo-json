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
        "word": "sym-plot"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePlot permutations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.Sym.Plot",
          "name": "Plot",
          "package": "sym-plot",
          "source": "src/Math-Sym-Plot.html",
          "type": "module"
        },
        "index": {
          "description": "Plot permutations",
          "hierarchy": "Math Sym Plot",
          "module": "Math.Sym.Plot",
          "name": "Plot",
          "package": "sym-plot",
          "partial": "Plot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/sym-plot/docs/Math-Sym-Plot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA plot is represented by Cairo diagram\n\u003c/p\u003e",
          "module": "Math.Sym.Plot",
          "name": "Plot",
          "package": "sym-plot",
          "source": "src/Math-Sym-Plot.html#Plot",
          "type": "type"
        },
        "index": {
          "description": "plot is represented by Cairo diagram",
          "hierarchy": "Math Sym Plot",
          "module": "Math.Sym.Plot",
          "name": "Plot",
          "package": "sym-plot",
          "partial": "Plot",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/sym-plot/docs/Math-Sym-Plot.html#t:Plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe plot of a permutation.\n\u003c/p\u003e",
          "module": "Math.Sym.Plot",
          "name": "plotPerm",
          "package": "sym-plot",
          "signature": "a -\u003e Plot",
          "source": "src/Math-Sym-Plot.html#plotPerm",
          "type": "function"
        },
        "index": {
          "description": "The plot of permutation",
          "hierarchy": "Math Sym Plot",
          "module": "Math.Sym.Plot",
          "name": "plotPerm",
          "normalized": "a-\u003ePlot",
          "package": "sym-plot",
          "partial": "Perm",
          "signature": "a-\u003ePlot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym-plot/docs/Math-Sym-Plot.html#v:plotPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe plot of a list of permutations. The first argument specifies\n how many permutations are on each row.\n\u003c/p\u003e",
          "module": "Math.Sym.Plot",
          "name": "plotPerms",
          "package": "sym-plot",
          "signature": "Int -\u003e [a] -\u003e Plot",
          "source": "src/Math-Sym-Plot.html#plotPerms",
          "type": "function"
        },
        "index": {
          "description": "The plot of list of permutations The first argument specifies how many permutations are on each row",
          "hierarchy": "Math Sym Plot",
          "module": "Math.Sym.Plot",
          "name": "plotPerms",
          "normalized": "Int-\u003e[a]-\u003ePlot",
          "package": "sym-plot",
          "partial": "Perms",
          "signature": "Int-\u003e[a]-\u003ePlot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym-plot/docs/Math-Sym-Plot.html#v:plotPerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave plot as a png, ps, pdf, or svg (determined automatically from\n the file extension).\n\u003c/p\u003e",
          "module": "Math.Sym.Plot",
          "name": "savePlot",
          "package": "sym-plot",
          "signature": "Double -\u003e String -\u003e Plot -\u003e IO ()",
          "source": "src/Math-Sym-Plot.html#savePlot",
          "type": "function"
        },
        "index": {
          "description": "Save plot as png ps pdf or svg determined automatically from the file extension",
          "hierarchy": "Math Sym Plot",
          "module": "Math.Sym.Plot",
          "name": "savePlot",
          "normalized": "Double-\u003eString-\u003ePlot-\u003eIO()",
          "package": "sym-plot",
          "partial": "Plot",
          "signature": "Double-\u003eString-\u003ePlot-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/sym-plot/docs/Math-Sym-Plot.html#v:savePlot"
      }
    }
  ]
]