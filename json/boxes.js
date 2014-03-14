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
        "word": "boxes"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA pretty-printing library for laying out text in two dimensions,\n using a simple box model.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "Boxes",
          "package": "boxes",
          "source": "src/Text-PrettyPrint-Boxes.html",
          "type": "module"
        },
        "index": {
          "description": "pretty-printing library for laying out text in two dimensions using simple box model",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "Boxes",
          "package": "boxes",
          "partial": "Boxes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type for specifying the alignment of boxes.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "Alignment",
          "package": "boxes",
          "source": "src/Text-PrettyPrint-Boxes.html#Alignment",
          "type": "data"
        },
        "index": {
          "description": "Data type for specifying the alignment of boxes",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "Alignment",
          "package": "boxes",
          "partial": "Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic data type.  A box has a specified size and some sort of\n   contents.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "Box",
          "package": "boxes",
          "source": "src/Text-PrettyPrint-Boxes.html#Box",
          "type": "data"
        },
        "index": {
          "description": "The basic data type box has specified size and some sort of contents",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "Box",
          "package": "boxes",
          "partial": "Box",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#t:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePaste two boxes together vertically with a single intervening row\n   of space, using a default (left) alignment.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "(/+/)",
          "package": "boxes",
          "signature": "Box -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#%2F%2B%2F",
          "type": "function"
        },
        "index": {
          "description": "Paste two boxes together vertically with single intervening row of space using default left alignment",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "(/+/) /+/",
          "normalized": "Box-\u003eBox-\u003eBox",
          "package": "boxes",
          "signature": "Box-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:-47--43--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePaste two boxes together vertically, using a default (left)\n   alignment.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "(//)",
          "package": "boxes",
          "signature": "Box -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "Paste two boxes together vertically using default left alignment",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "(//) //",
          "normalized": "Box-\u003eBox-\u003eBox",
          "package": "boxes",
          "signature": "Box-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePaste two boxes together horizontally with a single intervening\n   column of space, using a default (top) alignment.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "(\u003c+\u003e)",
          "package": "boxes",
          "signature": "Box -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "Paste two boxes together horizontally with single intervening column of space using default top alignment",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "Box-\u003eBox-\u003eBox",
          "package": "boxes",
          "signature": "Box-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePaste two boxes together horizontally, using a default (top)\n   alignment.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "(\u003c\u003e)",
          "package": "boxes",
          "signature": "Box -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "Paste two boxes together horizontally using default top alignment",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "Box-\u003eBox-\u003eBox",
          "package": "boxes",
          "signature": "Box-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ealign ah av r c bx\u003c/code\u003e creates an \u003ccode\u003er\u003c/code\u003e x \u003ccode\u003ec\u003c/code\u003e box with the contents\n   of \u003ccode\u003ebx\u003c/code\u003e, aligned horizontally according to \u003ccode\u003eah\u003c/code\u003e and vertically\n   according to \u003ccode\u003eav\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "align",
          "package": "boxes",
          "signature": "Alignment -\u003e Alignment -\u003e Int -\u003e Int -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#align",
          "type": "function"
        },
        "index": {
          "description": "align ah av bx creates an box with the contents of bx aligned horizontally according to ah and vertically according to av",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "align",
          "normalized": "Alignment-\u003eAlignment-\u003eInt-\u003eInt-\u003eBox-\u003eBox",
          "package": "boxes",
          "signature": "Alignment-\u003eAlignment-\u003eInt-\u003eInt-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ealignHoriz algn n bx\u003c/code\u003e creates a box of width \u003ccode\u003en\u003c/code\u003e, with the\n   contents and height of \u003ccode\u003ebx\u003c/code\u003e, horizontally aligned according to\n   \u003ccode\u003ealgn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "alignHoriz",
          "package": "boxes",
          "signature": "Alignment -\u003e Int -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#alignHoriz",
          "type": "function"
        },
        "index": {
          "description": "alignHoriz algn bx creates box of width with the contents and height of bx horizontally aligned according to algn",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "alignHoriz",
          "normalized": "Alignment-\u003eInt-\u003eBox-\u003eBox",
          "package": "boxes",
          "partial": "Horiz",
          "signature": "Alignment-\u003eInt-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:alignHoriz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ealignVert algn n bx\u003c/code\u003e creates a box of height \u003ccode\u003en\u003c/code\u003e, with the\n   contents and width of \u003ccode\u003ebx\u003c/code\u003e, vertically aligned according to\n   \u003ccode\u003ealgn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "alignVert",
          "package": "boxes",
          "signature": "Alignment -\u003e Int -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#alignVert",
          "type": "function"
        },
        "index": {
          "description": "alignVert algn bx creates box of height with the contents and width of bx vertically aligned according to algn",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "alignVert",
          "normalized": "Alignment-\u003eInt-\u003eBox-\u003eBox",
          "package": "boxes",
          "partial": "Vert",
          "signature": "Alignment-\u003eInt-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:alignVert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign boxes along their bottoms.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "bottom",
          "package": "boxes",
          "signature": "Alignment",
          "source": "src/Text-PrettyPrint-Boxes.html#bottom",
          "type": "function"
        },
        "index": {
          "description": "Align boxes along their bottoms",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "bottom",
          "package": "boxes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign boxes centered, but biased to the left/top in case of\n   unequal parities.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "center1",
          "package": "boxes",
          "signature": "Alignment",
          "source": "src/Text-PrettyPrint-Boxes.html#center1",
          "type": "function"
        },
        "index": {
          "description": "Align boxes centered but biased to the left top in case of unequal parities",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "center1",
          "package": "boxes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:center1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign boxes centered, but biased to the right/bottom in case of\n   unequal parities.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "center2",
          "package": "boxes",
          "signature": "Alignment",
          "source": "src/Text-PrettyPrint-Boxes.html#center2",
          "type": "function"
        },
        "index": {
          "description": "Align boxes centered but biased to the right bottom in case of unequal parities",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "center2",
          "package": "boxes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:center2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e1x1\u003c/code\u003e box containing a single character.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "char",
          "package": "boxes",
          "signature": "Char -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#char",
          "type": "function"
        },
        "index": {
          "description": "x1 box containing single character",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "char",
          "normalized": "Char-\u003eBox",
          "package": "boxes",
          "signature": "Char-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Boxes",
          "name": "cols",
          "package": "boxes",
          "signature": "Box -\u003e Int",
          "source": "src/Text-PrettyPrint-Boxes.html#cols",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "cols",
          "normalized": "Box-\u003eInt",
          "package": "boxes",
          "signature": "Box-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:cols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecolumns w h t\u003c/code\u003e is a list of boxes, each of width \u003ccode\u003ew\u003c/code\u003e and height\n   at most \u003ccode\u003eh\u003c/code\u003e, containing text \u003ccode\u003et\u003c/code\u003e flowed into as many columns as\n   necessary.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "columns",
          "package": "boxes",
          "signature": "Alignment -\u003e Int -\u003e Int -\u003e String -\u003e [Box]",
          "source": "src/Text-PrettyPrint-Boxes.html#columns",
          "type": "function"
        },
        "index": {
          "description": "columns is list of boxes each of width and height at most containing text flowed into as many columns as necessary",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "columns",
          "normalized": "Alignment-\u003eInt-\u003eInt-\u003eString-\u003e[Box]",
          "package": "boxes",
          "signature": "Alignment-\u003eInt-\u003eInt-\u003eString-\u003e[Box]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:columns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eemptyBox r c\u003c/code\u003e is an empty box with \u003ccode\u003er\u003c/code\u003e rows and \u003ccode\u003ec\u003c/code\u003e columns.\n   Useful for effecting more fine-grained positioning of other\n   boxes, by inserting empty boxes of the desired size in between\n   them.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "emptyBox",
          "package": "boxes",
          "signature": "Int -\u003e Int -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#emptyBox",
          "type": "function"
        },
        "index": {
          "description": "emptyBox is an empty box with rows and columns Useful for effecting more fine-grained positioning of other boxes by inserting empty boxes of the desired size in between them",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "emptyBox",
          "normalized": "Int-\u003eInt-\u003eBox",
          "package": "boxes",
          "partial": "Box",
          "signature": "Int-\u003eInt-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:emptyBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlue a list of boxes together horizontally, with the given alignment.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "hcat",
          "package": "boxes",
          "signature": "Alignment -\u003e [Box] -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#hcat",
          "type": "function"
        },
        "index": {
          "description": "Glue list of boxes together horizontally with the given alignment",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "hcat",
          "normalized": "Alignment-\u003e[Box]-\u003eBox",
          "package": "boxes",
          "signature": "Alignment-\u003e[Box]-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:hcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ehsep sep a bs\u003c/code\u003e lays out \u003ccode\u003ebs\u003c/code\u003e horizontally with alignment \u003ccode\u003ea\u003c/code\u003e,\n   with \u003ccode\u003esep\u003c/code\u003e amount of space in between each.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "hsep",
          "package": "boxes",
          "signature": "Int -\u003e Alignment -\u003e [Box] -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#hsep",
          "type": "function"
        },
        "index": {
          "description": "hsep sep bs lays out bs horizontally with alignment with sep amount of space in between each",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "hsep",
          "normalized": "Int-\u003eAlignment-\u003e[Box]-\u003eBox",
          "package": "boxes",
          "signature": "Int-\u003eAlignment-\u003e[Box]-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:hsep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign boxes to the left.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "left",
          "package": "boxes",
          "signature": "Alignment",
          "source": "src/Text-PrettyPrint-Boxes.html#left",
          "type": "function"
        },
        "index": {
          "description": "Align boxes to the left",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "left",
          "package": "boxes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a box down by putting it in a larger box with extra rows,\n   aligned to the bottom.  See the disclaimer for \u003ccode\u003e\u003ca\u003emoveLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "moveDown",
          "package": "boxes",
          "signature": "Int -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#moveDown",
          "type": "function"
        },
        "index": {
          "description": "Move box down by putting it in larger box with extra rows aligned to the bottom See the disclaimer for moveLeft",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "moveDown",
          "normalized": "Int-\u003eBox-\u003eBox",
          "package": "boxes",
          "partial": "Down",
          "signature": "Int-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:moveDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a box left by putting it in a larger box with extra columns,\n   aligned left.  Note that the name of this function is\n   something of a white lie, as this will only result in the box\n   being moved left by the specified amount if it is already in a\n   larger right-aligned context.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "moveLeft",
          "package": "boxes",
          "signature": "Int -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#moveLeft",
          "type": "function"
        },
        "index": {
          "description": "Move box left by putting it in larger box with extra columns aligned left Note that the name of this function is something of white lie as this will only result in the box being moved left by the specified amount if it is already in larger right-aligned context",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "moveLeft",
          "normalized": "Int-\u003eBox-\u003eBox",
          "package": "boxes",
          "partial": "Left",
          "signature": "Int-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:moveLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a box right by putting it in a larger box with extra\n   columns, aligned right.  See the disclaimer for \u003ccode\u003e\u003ca\u003emoveLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "moveRight",
          "package": "boxes",
          "signature": "Int -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#moveRight",
          "type": "function"
        },
        "index": {
          "description": "Move box right by putting it in larger box with extra columns aligned right See the disclaimer for moveLeft",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "moveRight",
          "normalized": "Int-\u003eBox-\u003eBox",
          "package": "boxes",
          "partial": "Right",
          "signature": "Int-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:moveRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a box \"up\" by putting it in a larger box with extra rows,\n   aligned to the top.  See the disclaimer for \u003ccode\u003e\u003ca\u003emoveLeft\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "moveUp",
          "package": "boxes",
          "signature": "Int -\u003e Box -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#moveUp",
          "type": "function"
        },
        "index": {
          "description": "Move box up by putting it in larger box with extra rows aligned to the top See the disclaimer for moveLeft",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "moveUp",
          "normalized": "Int-\u003eBox-\u003eBox",
          "package": "boxes",
          "partial": "Up",
          "signature": "Int-\u003eBox-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:moveUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe null box, which has no content and no size.  It is quite\n   useless.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "nullBox",
          "package": "boxes",
          "signature": "Box",
          "source": "src/Text-PrettyPrint-Boxes.html#nullBox",
          "type": "function"
        },
        "index": {
          "description": "The null box which has no content and no size It is quite useless",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "nullBox",
          "package": "boxes",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:nullBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epara algn w t\u003c/code\u003e is a box of width \u003ccode\u003ew\u003c/code\u003e, containing text \u003ccode\u003et\u003c/code\u003e,\n   aligned according to \u003ccode\u003ealgn\u003c/code\u003e, flowed to fit within the given\n   width.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "para",
          "package": "boxes",
          "signature": "Alignment -\u003e Int -\u003e String -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#para",
          "type": "function"
        },
        "index": {
          "description": "para algn is box of width containing text aligned according to algn flowed to fit within the given width",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "para",
          "normalized": "Alignment-\u003eInt-\u003eString-\u003eBox",
          "package": "boxes",
          "signature": "Alignment-\u003eInt-\u003eString-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function for rendering a box to stdout.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "printBox",
          "package": "boxes",
          "signature": "Box -\u003e IO ()",
          "source": "src/Text-PrettyPrint-Boxes.html#printBox",
          "type": "function"
        },
        "index": {
          "description": "convenience function for rendering box to stdout",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "printBox",
          "normalized": "Box-\u003eIO()",
          "package": "boxes",
          "partial": "Box",
          "signature": "Box-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:printBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epunctuateH a p bs\u003c/code\u003e horizontally lays out the boxes \u003ccode\u003ebs\u003c/code\u003e with a\n   copy of \u003ccode\u003ep\u003c/code\u003e interspersed between each.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "punctuateH",
          "package": "boxes",
          "signature": "Alignment -\u003e Box -\u003e [Box] -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#punctuateH",
          "type": "function"
        },
        "index": {
          "description": "punctuateH bs horizontally lays out the boxes bs with copy of interspersed between each",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "punctuateH",
          "normalized": "Alignment-\u003eBox-\u003e[Box]-\u003eBox",
          "package": "boxes",
          "signature": "Alignment-\u003eBox-\u003e[Box]-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:punctuateH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vertical version of \u003ccode\u003e\u003ca\u003epunctuateH\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "punctuateV",
          "package": "boxes",
          "signature": "Alignment -\u003e Box -\u003e [Box] -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#punctuateV",
          "type": "function"
        },
        "index": {
          "description": "vertical version of punctuateH",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "punctuateV",
          "normalized": "Alignment-\u003eBox-\u003e[Box]-\u003eBox",
          "package": "boxes",
          "signature": "Alignment-\u003eBox-\u003e[Box]-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:punctuateV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a \u003ccode\u003e\u003ca\u003eBox\u003c/a\u003e\u003c/code\u003e as a String, suitable for writing to the screen or\n   a file.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "render",
          "package": "boxes",
          "signature": "Box -\u003e String",
          "source": "src/Text-PrettyPrint-Boxes.html#render",
          "type": "function"
        },
        "index": {
          "description": "Render Box as String suitable for writing to the screen or file",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "render",
          "normalized": "Box-\u003eString",
          "package": "boxes",
          "signature": "Box-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign boxes to the right.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "right",
          "package": "boxes",
          "signature": "Alignment",
          "source": "src/Text-PrettyPrint-Boxes.html#right",
          "type": "function"
        },
        "index": {
          "description": "Align boxes to the right",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "right",
          "package": "boxes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.PrettyPrint.Boxes",
          "name": "rows",
          "package": "boxes",
          "signature": "Box -\u003e Int",
          "source": "src/Text-PrettyPrint-Boxes.html#rows",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "rows",
          "normalized": "Box-\u003eInt",
          "package": "boxes",
          "signature": "Box-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:rows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA (\u003ccode\u003e1 x len\u003c/code\u003e) box containing a string of length \u003ccode\u003elen\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "text",
          "package": "boxes",
          "signature": "String -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#text",
          "type": "function"
        },
        "index": {
          "description": "len box containing string of length len",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "text",
          "normalized": "String-\u003eBox",
          "package": "boxes",
          "signature": "String-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign boxes along their tops.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "top",
          "package": "boxes",
          "signature": "Alignment",
          "source": "src/Text-PrettyPrint-Boxes.html#top",
          "type": "function"
        },
        "index": {
          "description": "Align boxes along their tops",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "top",
          "package": "boxes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlue a list of boxes together vertically, with the given alignment.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "vcat",
          "package": "boxes",
          "signature": "Alignment -\u003e [Box] -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#vcat",
          "type": "function"
        },
        "index": {
          "description": "Glue list of boxes together vertically with the given alignment",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "vcat",
          "normalized": "Alignment-\u003e[Box]-\u003eBox",
          "package": "boxes",
          "signature": "Alignment-\u003e[Box]-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:vcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evsep sep a bs\u003c/code\u003e lays out \u003ccode\u003ebs\u003c/code\u003e vertically with alignment \u003ccode\u003ea\u003c/code\u003e,\n   with \u003ccode\u003esep\u003c/code\u003e amount of space in between each.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.Boxes",
          "name": "vsep",
          "package": "boxes",
          "signature": "Int -\u003e Alignment -\u003e [Box] -\u003e Box",
          "source": "src/Text-PrettyPrint-Boxes.html#vsep",
          "type": "function"
        },
        "index": {
          "description": "vsep sep bs lays out bs vertically with alignment with sep amount of space in between each",
          "hierarchy": "Text PrettyPrint Boxes",
          "module": "Text.PrettyPrint.Boxes",
          "name": "vsep",
          "normalized": "Int-\u003eAlignment-\u003e[Box]-\u003eBox",
          "package": "boxes",
          "signature": "Int-\u003eAlignment-\u003e[Box]-\u003eBox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boxes/docs/Text-PrettyPrint-Boxes.html#v:vsep"
      }
    }
  ]
]