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
        "word": "anansi-hscolour"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi.HsColour",
          "name": "HsColour",
          "package": "anansi-hscolour",
          "source": "src/Anansi-HsColour.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Anansi HsColour",
          "module": "Anansi.HsColour",
          "name": "HsColour",
          "package": "anansi-hscolour",
          "partial": "Hs Colour",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/anansi-hscolour/docs/Anansi-HsColour.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi.HsColour",
          "name": "loomHTML",
          "package": "anansi-hscolour",
          "signature": "Loom",
          "source": "src/Anansi-HsColour-HTML.html#loomHTML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi HsColour",
          "module": "Anansi.HsColour",
          "name": "loomHTML",
          "package": "anansi-hscolour",
          "partial": "HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi-hscolour/docs/Anansi-HsColour.html#v:loomHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi.HsColour",
          "name": "loomLaTeX",
          "package": "anansi-hscolour",
          "signature": "Loom",
          "source": "src/Anansi-HsColour-LaTeX.html#loomLaTeX",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi HsColour",
          "module": "Anansi.HsColour",
          "name": "loomLaTeX",
          "package": "anansi-hscolour",
          "partial": "La Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi-hscolour/docs/Anansi-HsColour.html#v:loomLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooms which use HsColour to produce colorized code blocks.\n\u003c/p\u003e\u003cp\u003eUse this with \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e #!/usr/bin/env runhaskell\n import Anansi\n import Anansi.HsColour\n import Data.Map\n\n main = defaultMain (unions [Anansi.looms, Anansi.HsColour.looms])\n\u003c/pre\u003e",
          "module": "Anansi.HsColour",
          "name": "looms",
          "package": "anansi-hscolour",
          "signature": "Map Text Loom",
          "source": "src/Anansi-HsColour.html#looms",
          "type": "function"
        },
        "index": {
          "description": "Looms which use HsColour to produce colorized code blocks Use this with defaultMain usr bin env runhaskell import Anansi import Anansi.HsColour import Data.Map main defaultMain unions Anansi.looms Anansi.HsColour.looms",
          "hierarchy": "Anansi HsColour",
          "module": "Anansi.HsColour",
          "name": "looms",
          "package": "anansi-hscolour",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi-hscolour/docs/Anansi-HsColour.html#v:looms"
      }
    }
  ]
]