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
        "word": "hls"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLindenmayer system definition, expander and renderer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LSystem.LSystem",
          "name": "LSystem",
          "package": "hls",
          "source": "src/LSystem-LSystem.html",
          "type": "module"
        },
        "index": {
          "description": "Lindenmayer system definition expander and renderer",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "LSystem",
          "package": "hls",
          "partial": "LSystem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn axiom (sequence of \u003ccode\u003eElements\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "LSystem.LSystem",
          "name": "Axiom",
          "package": "hls",
          "source": "src/LSystem-LSystem.html#Axiom",
          "type": "type"
        },
        "index": {
          "description": "An axiom sequence of Elements",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "Axiom",
          "package": "hls",
          "partial": "Axiom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#t:Axiom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eElement of \u003ccode\u003e\u003ca\u003eAxiom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LSystem.LSystem",
          "name": "Element",
          "package": "hls",
          "source": "src/LSystem-LSystem.html#Element",
          "type": "type"
        },
        "index": {
          "description": "Element of Axiom",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "Element",
          "package": "hls",
          "partial": "Element",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eLSystem\u003c/a\u003e\u003c/code\u003e is an \u003ccode\u003e\u003ca\u003eAxiom\u003c/a\u003e\u003c/code\u003e and a set of \u003ccode\u003e\u003ca\u003eRules\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LSystem.LSystem",
          "name": "LSystem",
          "package": "hls",
          "source": "src/LSystem-LSystem.html#LSystem",
          "type": "data"
        },
        "index": {
          "description": "An LSystem is an Axiom and set of Rules",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "LSystem",
          "package": "hls",
          "partial": "LSystem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#t:LSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eElement\u003c/a\u003e\u003c/code\u003es to \u003ccode\u003e\u003ca\u003eAxiom\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "LSystem.LSystem",
          "name": "Rules",
          "package": "hls",
          "source": "src/LSystem-LSystem.html#Rules",
          "type": "type"
        },
        "index": {
          "description": "Map from Element to Axiom",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "Rules",
          "package": "hls",
          "partial": "Rules",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#t:Rules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.LSystem",
          "name": "LSystem",
          "package": "hls",
          "signature": "LSystem Axiom Rules",
          "source": "src/LSystem-LSystem.html#LSystem",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "LSystem",
          "package": "hls",
          "partial": "LSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#v:LSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRule application.\n\u003c/p\u003e",
          "module": "LSystem.LSystem",
          "name": "applyRule",
          "package": "hls",
          "signature": "[Element] -\u003e Rules -\u003e [Element]",
          "source": "src/LSystem-LSystem.html#applyRule",
          "type": "function"
        },
        "index": {
          "description": "Rule application",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "applyRule",
          "normalized": "[Element]-\u003eRules-\u003e[Element]",
          "package": "hls",
          "partial": "Rule",
          "signature": "[Element]-\u003eRules-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#v:applyRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperational \u003ccode\u003e\u003ca\u003eTurtle\u003c/a\u003e\u003c/code\u003e commands.\n\u003c/p\u003e",
          "module": "LSystem.LSystem",
          "name": "cmd",
          "package": "hls",
          "signature": "(Turtle -\u003e b -\u003e (Turtle, b)) -\u003e Element -\u003e Turtle -\u003e b -\u003e (Turtle, b)",
          "source": "src/LSystem-LSystem.html#cmd",
          "type": "function"
        },
        "index": {
          "description": "Operational Turtle commands",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "cmd",
          "normalized": "(Turtle-\u003ea-\u003e(Turtle,a))-\u003eElement-\u003eTurtle-\u003ea-\u003e(Turtle,a)",
          "package": "hls",
          "signature": "(Turtle-\u003eb-\u003e(Turtle,b))-\u003eElement-\u003eTurtle-\u003eb-\u003e(Turtle,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#v:cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003en\u003c/em\u003e iterations of the specified \u003ccode\u003e\u003ca\u003eLSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e expand (lSystem \"F+F+F\" [('F',\"F-F+F\")]) 1 == \"F-F+F+F-F+F+F-F+F\"\n\u003c/pre\u003e",
          "module": "LSystem.LSystem",
          "name": "expand",
          "package": "hls",
          "signature": "LSystem -\u003e Int -\u003e [Element]",
          "source": "src/LSystem-LSystem.html#expand",
          "type": "function"
        },
        "index": {
          "description": "iterations of the specified LSystem expand lSystem F-F F-F F-F F-F",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "expand",
          "normalized": "LSystem-\u003eInt-\u003e[Element]",
          "package": "hls",
          "signature": "LSystem-\u003eInt-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRule lookup.\n\u003c/p\u003e",
          "module": "LSystem.LSystem",
          "name": "getRule",
          "package": "hls",
          "signature": "Rules -\u003e Element -\u003e [Element]",
          "source": "src/LSystem-LSystem.html#getRule",
          "type": "function"
        },
        "index": {
          "description": "Rule lookup",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "getRule",
          "normalized": "Rules-\u003eElement-\u003e[Element]",
          "package": "hls",
          "partial": "Rule",
          "signature": "Rules-\u003eElement-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#v:getRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eL-System constructor.\n\u003c/p\u003e\u003cpre\u003e lSystem \"F+F+F\" [('F',\"F-F+F\")]\n\u003c/pre\u003e",
          "module": "LSystem.LSystem",
          "name": "lSystem",
          "package": "hls",
          "signature": "Axiom -\u003e [(Element, [Element])] -\u003e LSystem",
          "source": "src/LSystem-LSystem.html#lSystem",
          "type": "function"
        },
        "index": {
          "description": "L-System constructor lSystem F-F",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "lSystem",
          "normalized": "Axiom-\u003e[(Element,[Element])]-\u003eLSystem",
          "package": "hls",
          "partial": "System",
          "signature": "Axiom-\u003e[(Element,[Element])]-\u003eLSystem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#v:lSystem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold over an expanded L-system using standard turtle commands.\n\u003c/p\u003e",
          "module": "LSystem.LSystem",
          "name": "render",
          "package": "hls",
          "signature": "b -\u003e (b -\u003e Pt R -\u003e Pt R -\u003e b) -\u003e [Element] -\u003e Turtle -\u003e b",
          "source": "src/LSystem-LSystem.html#render",
          "type": "function"
        },
        "index": {
          "description": "Fold over an expanded L-system using standard turtle commands",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "render",
          "normalized": "a-\u003e(a-\u003ePt R-\u003ePt R-\u003ea)-\u003e[Element]-\u003eTurtle-\u003ea",
          "package": "hls",
          "signature": "b-\u003e(b-\u003ePt R-\u003ePt R-\u003eb)-\u003e[Element]-\u003eTurtle-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState transformer \u003ccode\u003e\u003ca\u003eTurtle\u003c/a\u003e\u003c/code\u003e commands.\n\u003c/p\u003e",
          "module": "LSystem.LSystem",
          "name": "stateT",
          "package": "hls",
          "signature": "Element -\u003e Turtle -\u003e Turtle",
          "source": "src/LSystem-LSystem.html#stateT",
          "type": "function"
        },
        "index": {
          "description": "State transformer Turtle commands",
          "hierarchy": "LSystem LSystem",
          "module": "LSystem.LSystem",
          "name": "stateT",
          "normalized": "Element-\u003eTurtle-\u003eTurtle",
          "package": "hls",
          "signature": "Element-\u003eTurtle-\u003eTurtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-LSystem.html#v:stateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePostscript renderer for \u003ccode\u003e\u003ca\u003eLSystem\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LSystem.Render.PS",
          "name": "PS",
          "package": "hls",
          "source": "src/LSystem-Render-PS.html",
          "type": "module"
        },
        "index": {
          "description": "Postscript renderer for LSystem",
          "hierarchy": "LSystem Render PS",
          "module": "LSystem.Render.PS",
          "name": "PS",
          "package": "hls",
          "partial": "PS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Render-PS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw output of \u003ccode\u003e\u003ca\u003erenderL\u003c/a\u003e\u003c/code\u003e normalised, scaled to \u003cem\u003em\u003c/em\u003e and translated\n by \u003cem\u003eo\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "LSystem.Render.PS",
          "name": "draw",
          "package": "hls",
          "signature": "R -\u003e R -\u003e [Ln R] -\u003e Image",
          "source": "src/LSystem-Render-PS.html#draw",
          "type": "function"
        },
        "index": {
          "description": "Draw output of renderL normalised scaled to and translated by",
          "hierarchy": "LSystem Render PS",
          "module": "LSystem.Render.PS",
          "name": "draw",
          "normalized": "R-\u003eR-\u003e[Ln R]-\u003eImage",
          "package": "hls",
          "signature": "R-\u003eR-\u003e[Ln R]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Render-PS.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven initial \u003ccode\u003e\u003ca\u003eta\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003els\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ells\u003c/a\u003e\u003c/code\u003e values render \u003cem\u003ei\u003c/em\u003e steps of an\n \u003ccode\u003e\u003ca\u003eLSystem\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LSystem.Render.PS",
          "name": "renderL",
          "package": "hls",
          "signature": "(LSystem, Double, Double) -\u003e Int -\u003e Double -\u003e [Ln R]",
          "source": "src/LSystem-Render-PS.html#renderL",
          "type": "function"
        },
        "index": {
          "description": "Given initial ta ls and lls values render steps of an LSystem",
          "hierarchy": "LSystem Render PS",
          "module": "LSystem.Render.PS",
          "name": "renderL",
          "normalized": "(LSystem,Double,Double)-\u003eInt-\u003eDouble-\u003e[Ln R]",
          "package": "hls",
          "signature": "(LSystem,Double,Double)-\u003eInt-\u003eDouble-\u003e[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Render-PS.html#v:renderL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious \u003ccode\u003e\u003ca\u003eLSystem\u003c/a\u003e\u003c/code\u003es.\n For \u003ccode\u003e\u003ca\u003el0\u003c/a\u003e\u003c/code\u003e through \u003ccode\u003e\u003ca\u003elB\u003c/a\u003e\u003c/code\u003e see \u003ca\u003ehttp://paulbourke.net/fractals/lsys/\u003c/a\u003e.\n For \u003ccode\u003e\u003ca\u003elC\u003c/a\u003e\u003c/code\u003e see \u003ca\u003ehttp://en.wikipedia.org/wiki/Penrose_tiling\u003c/a\u003e.\n For \u003ccode\u003e\u003ca\u003elD\u003c/a\u003e\u003c/code\u003e see \u003ca\u003ehttp://hackage.haskell.org/package/nymphaea\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LSystem.Systems",
          "name": "Systems",
          "package": "hls",
          "source": "src/LSystem-Systems.html",
          "type": "module"
        },
        "index": {
          "description": "Various LSystem For l0 through lB see http paulbourke.net fractals lsys For lC see http en.wikipedia.org wiki Penrose tiling For lD see http hackage.haskell.org package nymphaea",
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "Systems",
          "package": "hls",
          "partial": "Systems",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l0",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#l0",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l0",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l0d",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#l0d",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l0d",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l0d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l0l",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#l0l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l0l",
          "normalized": "[Ln R]",
          "package": "hls",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l0l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l1",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#l1",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l1",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l1d",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#l1d",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l1d",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l1d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l1l",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#l1l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l1l",
          "normalized": "[Ln R]",
          "package": "hls",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l1l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l2",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#l2",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l2",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l2d",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#l2d",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l2d",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l2d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l2l",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#l2l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l2l",
          "normalized": "[Ln R]",
          "package": "hls",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l2l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l3",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#l3",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l3",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l3d",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#l3d",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l3d",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l3d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l3l",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#l3l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l3l",
          "normalized": "[Ln R]",
          "package": "hls",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l3l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l4",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#l4",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l4",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l4d",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#l4d",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l4d",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l4d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l4l",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#l4l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l4l",
          "normalized": "[Ln R]",
          "package": "hls",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l4l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l5",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#l5",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l5",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l5d",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#l5d",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l5d",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l5d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l5l",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#l5l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l5l",
          "normalized": "[Ln R]",
          "package": "hls",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l5l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l6",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#l6",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l6",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l6d",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#l6d",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l6d",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l6d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l6l",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#l6l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l6l",
          "normalized": "[Ln R]",
          "package": "hls",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l6l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l7",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#l7",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l7",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l7d",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#l7d",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l7d",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l7d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l7l",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#l7l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l7l",
          "normalized": "[Ln R]",
          "package": "hls",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l7l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l8",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#l8",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l8",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l8d",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#l8d",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l8d",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l8d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l8l",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#l8l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l8l",
          "normalized": "[Ln R]",
          "package": "hls",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l8l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l9",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#l9",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l9",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l9d",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#l9d",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l9d",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l9d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "l9l",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#l9l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "l9l",
          "normalized": "[Ln R]",
          "package": "hls",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:l9l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lA",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#lA",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lA",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lAd",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#lAd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lAd",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "partial": "Ad",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lAd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lAl",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#lAl",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lAl",
          "normalized": "[Ln R]",
          "package": "hls",
          "partial": "Al",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lAl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lB",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#lB",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lB",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lBd",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#lBd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lBd",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "partial": "Bd",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lBd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lBl",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#lBl",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lBl",
          "normalized": "[Ln R]",
          "package": "hls",
          "partial": "Bl",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lBl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lC",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#lC",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lC",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lCd",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#lCd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lCd",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "partial": "Cd",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lCd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lCl",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#lCl",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lCl",
          "normalized": "[Ln R]",
          "package": "hls",
          "partial": "Cl",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lCl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lD",
          "package": "hls",
          "signature": "LSystem",
          "source": "src/LSystem-Systems.html#lD",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lD",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lDd",
          "package": "hls",
          "signature": "(LSystem, Double, Double)",
          "source": "src/LSystem-Systems.html#lDd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lDd",
          "normalized": "(LSystem,Double,Double)",
          "package": "hls",
          "partial": "Dd",
          "signature": "(LSystem,Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lDd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "lDl",
          "package": "hls",
          "signature": "[Ln R]",
          "source": "src/LSystem-Systems.html#lDl",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "lDl",
          "normalized": "[Ln R]",
          "package": "hls",
          "partial": "Dl",
          "signature": "[Ln R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:lDl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "systems_i",
          "package": "hls",
          "signature": "[Image]",
          "source": "src/LSystem-Systems.html#systems_i",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "systems_i",
          "normalized": "[Image]",
          "package": "hls",
          "signature": "[Image]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:systems_i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Systems",
          "name": "systems_l",
          "package": "hls",
          "signature": "[[Ln R]]",
          "source": "src/LSystem-Systems.html#systems_l",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "systems_l",
          "normalized": "[[Ln R]]",
          "package": "hls",
          "signature": "[[Ln R]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:systems_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate postscript file with drawings of \u003ccode\u003e\u003ca\u003el0\u003c/a\u003e\u003c/code\u003e through \u003ccode\u003e\u003ca\u003elD\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e systems_ps \"/tmp/hls.ps\"\n System.Process.system \"gv /tmp/hls.ps\"\n\u003c/pre\u003e",
          "module": "LSystem.Systems",
          "name": "systems_ps",
          "package": "hls",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/LSystem-Systems.html#systems_ps",
          "type": "function"
        },
        "index": {
          "description": "Generate postscript file with drawings of l0 through lD systems ps tmp hls.ps System.Process.system gv tmp hls.ps",
          "hierarchy": "LSystem Systems",
          "module": "LSystem.Systems",
          "name": "systems_ps",
          "normalized": "FilePath-\u003eIO()",
          "package": "hls",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Systems.html#v:systems_ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStandard \u003ccode\u003e\u003ca\u003eTurtle\u003c/a\u003e\u003c/code\u003e graphics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LSystem.Turtle",
          "name": "Turtle",
          "package": "hls",
          "source": "src/LSystem-Turtle.html",
          "type": "module"
        },
        "index": {
          "description": "Standard Turtle graphics",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "Turtle",
          "package": "hls",
          "partial": "Turtle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurtle.\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "Turtle",
          "package": "hls",
          "source": "src/LSystem-Turtle.html#Turtle",
          "type": "data"
        },
        "index": {
          "description": "Turtle",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "Turtle",
          "package": "hls",
          "partial": "Turtle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#t:Turtle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LSystem.Turtle",
          "name": "Turtle",
          "package": "hls",
          "signature": "Turtle",
          "source": "src/LSystem-Turtle.html#Turtle",
          "type": "function"
        },
        "index": {
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "Turtle",
          "package": "hls",
          "partial": "Turtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:Turtle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrement line length (\u003ccode\u003e\u003ca\u003ell\u003c/a\u003e\u003c/code\u003e) by dividing by line length scalar\n (\u003ccode\u003e\u003ca\u003ells\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "decrLine",
          "package": "hls",
          "signature": "Turtle -\u003e Turtle",
          "source": "src/LSystem-Turtle.html#decrLine",
          "type": "function"
        },
        "index": {
          "description": "Decrement line length ll by dividing by line length scalar lls",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "decrLine",
          "normalized": "Turtle-\u003eTurtle",
          "package": "hls",
          "partial": "Line",
          "signature": "Turtle-\u003eTurtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:decrLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove \u003ccode\u003e\u003ca\u003eloc\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eTurtle\u003c/a\u003e\u003c/code\u003e by \u003ccode\u003e\u003ca\u003ell\u003c/a\u003e\u003c/code\u003e on current \u003ccode\u003e\u003ca\u003ehdg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "forward",
          "package": "hls",
          "signature": "Turtle -\u003e Turtle",
          "source": "src/LSystem-Turtle.html#forward",
          "type": "function"
        },
        "index": {
          "description": "Move loc of Turtle by ll on current hdg",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "forward",
          "normalized": "Turtle-\u003eTurtle",
          "package": "hls",
          "signature": "Turtle-\u003eTurtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:forward"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eheading\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "hdg",
          "package": "hls",
          "signature": "Double",
          "source": "src/LSystem-Turtle.html#Turtle",
          "type": "function"
        },
        "index": {
          "description": "heading",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "hdg",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:hdg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement line length (\u003ccode\u003e\u003ca\u003ell\u003c/a\u003e\u003c/code\u003e) by multiplying by line length scalar\n (\u003ccode\u003e\u003ca\u003ells\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "incrLine",
          "package": "hls",
          "signature": "Turtle -\u003e Turtle",
          "source": "src/LSystem-Turtle.html#incrLine",
          "type": "function"
        },
        "index": {
          "description": "Increment line length ll by multiplying by line length scalar lls",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "incrLine",
          "normalized": "Turtle-\u003eTurtle",
          "package": "hls",
          "partial": "Line",
          "signature": "Turtle-\u003eTurtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:incrLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline length\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "ll",
          "package": "hls",
          "signature": "Double",
          "source": "src/LSystem-Turtle.html#Turtle",
          "type": "function"
        },
        "index": {
          "description": "line length",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "ll",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:ll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eline length scalar\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "lls",
          "package": "hls",
          "signature": "Double",
          "source": "src/LSystem-Turtle.html#Turtle",
          "type": "function"
        },
        "index": {
          "description": "line length scalar",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "lls",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:lls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elocation\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "loc",
          "package": "hls",
          "signature": "Pt Double",
          "source": "src/LSystem-Turtle.html#Turtle",
          "type": "function"
        },
        "index": {
          "description": "location",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "loc",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:loc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch \u003ccode\u003e\u003ca\u003eTurtle\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003estk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "pop",
          "package": "hls",
          "signature": "Turtle -\u003e Turtle",
          "source": "src/LSystem-Turtle.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Fetch Turtle from stk",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "pop",
          "normalized": "Turtle-\u003eTurtle",
          "package": "hls",
          "signature": "Turtle-\u003eTurtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush \u003ccode\u003e\u003ca\u003eTurtle\u003c/a\u003e\u003c/code\u003e onto \u003ccode\u003e\u003ca\u003estk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "push",
          "package": "hls",
          "signature": "Turtle -\u003e Turtle",
          "source": "src/LSystem-Turtle.html#push",
          "type": "function"
        },
        "index": {
          "description": "Push Turtle onto stk",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "push",
          "normalized": "Turtle-\u003eTurtle",
          "package": "hls",
          "signature": "Turtle-\u003eTurtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven state processing function \u003cem\u003ef\u003c/em\u003e, a \u003ccode\u003e\u003ca\u003eTurtle\u003c/a\u003e\u003c/code\u003e and an initial\n state, step \u003ccode\u003e\u003ca\u003eTurtle\u003c/a\u003e\u003c/code\u003e and state.\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "stepTurtle",
          "package": "hls",
          "signature": "(t -\u003e Pt R -\u003e Pt R -\u003e b) -\u003e Turtle -\u003e t -\u003e (Turtle, b)",
          "source": "src/LSystem-Turtle.html#stepTurtle",
          "type": "function"
        },
        "index": {
          "description": "Given state processing function Turtle and an initial state step Turtle and state",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "stepTurtle",
          "normalized": "(a-\u003ePt R-\u003ePt R-\u003eb)-\u003eTurtle-\u003ea-\u003e(Turtle,b)",
          "package": "hls",
          "partial": "Turtle",
          "signature": "(t-\u003ePt R-\u003ePt R-\u003eb)-\u003eTurtle-\u003et-\u003e(Turtle,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:stepTurtle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturtle stack\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "stk",
          "package": "hls",
          "signature": "[Turtle]",
          "source": "src/LSystem-Turtle.html#Turtle",
          "type": "function"
        },
        "index": {
          "description": "turtle stack",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "stk",
          "normalized": "[Turtle]",
          "package": "hls",
          "signature": "[Turtle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:stk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturning angle\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "ta",
          "package": "hls",
          "signature": "Double",
          "source": "src/LSystem-Turtle.html#Turtle",
          "type": "function"
        },
        "index": {
          "description": "turning angle",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "ta",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:ta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eturning angle increment\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "tai",
          "package": "hls",
          "signature": "Double",
          "source": "src/LSystem-Turtle.html#Turtle",
          "type": "function"
        },
        "index": {
          "description": "turning angle increment",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "tai",
          "package": "hls",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:tai"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e180\u003c/code\u003e degree turn.\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "turnBack",
          "package": "hls",
          "signature": "Turtle -\u003e Turtle",
          "source": "src/LSystem-Turtle.html#turnBack",
          "type": "function"
        },
        "index": {
          "description": "degree turn",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "turnBack",
          "normalized": "Turtle-\u003eTurtle",
          "package": "hls",
          "partial": "Back",
          "signature": "Turtle-\u003eTurtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:turnBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft turn by \u003ccode\u003e\u003ca\u003eta\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "turnLeft",
          "package": "hls",
          "signature": "Turtle -\u003e Turtle",
          "source": "src/LSystem-Turtle.html#turnLeft",
          "type": "function"
        },
        "index": {
          "description": "Left turn by ta",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "turnLeft",
          "normalized": "Turtle-\u003eTurtle",
          "package": "hls",
          "partial": "Left",
          "signature": "Turtle-\u003eTurtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:turnLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight turn by \u003ccode\u003e\u003ca\u003eta\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LSystem.Turtle",
          "name": "turnRight",
          "package": "hls",
          "signature": "Turtle -\u003e Turtle",
          "source": "src/LSystem-Turtle.html#turnRight",
          "type": "function"
        },
        "index": {
          "description": "Right turn by ta",
          "hierarchy": "LSystem Turtle",
          "module": "LSystem.Turtle",
          "name": "turnRight",
          "normalized": "Turtle-\u003eTurtle",
          "package": "hls",
          "partial": "Right",
          "signature": "Turtle-\u003eTurtle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hls/docs/LSystem-Turtle.html#v:turnRight"
      }
    }
  ]
]