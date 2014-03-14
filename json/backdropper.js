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
        "word": "backdropper"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cul\u003e\u003cli\u003e rotating_wallpaper\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAuthor\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Yann Golanski.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eMaintainer\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Yann Golanski \u003ca\u003eyann@kierun.org\u003c/a\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDescription\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Wallpapers/Backdrop changer back end.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003e(c)2008 Yann Golanski, GPLv3 or above.\n\u003c/p\u003e\u003cp\u003eThis program is free software: you can redistribute it and/or modify\n  it under the terms of the GNU General Public License as published by\n  the Free Software Foundation, either version 3 of the License, or\n  (at your option) any later version.\n\u003c/p\u003e\u003cp\u003eThis program is distributed in the hope that it will be useful,\n  but WITHOUT ANY WARRANTY; without even the implied warranty of\n  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  GNU General Public License for more details.\n\u003c/p\u003e\u003cp\u003eYou should have received a copy of the GNU General Public License\n  along with this program.  If not, see \u003ca\u003ehttp://www.gnu.org/licenses/\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Rotating_backdrop_logic",
          "name": "Rotating_backdrop_logic",
          "package": "backdropper",
          "source": "src/Rotating_backdrop_logic.html",
          "type": "module"
        },
        "index": {
          "description": "rotating wallpaper Author Yann Golanski Maintainer Yann Golanski yann@kierun.org Description Wallpapers Backdrop changer back end Yann Golanski GPLv3 or above This program is free software you can redistribute it and or modify it under the terms of the GNU General Public License as published by the Free Software Foundation either version of the License or at your option any later version This program is distributed in the hope that it will be useful but WITHOUT ANY WARRANTY without even the implied warranty of MERCHANTABILITY or FITNESS FOR PARTICULAR PURPOSE See the GNU General Public License for more details You should have received copy of the GNU General Public License along with this program If not see http www.gnu.org licenses",
          "hierarchy": "Rotating_backdrop_logic",
          "module": "Rotating_backdrop_logic",
          "name": "Rotating_backdrop_logic",
          "package": "backdropper",
          "partial": "Rotating",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/backdropper/docs/Rotating_backdrop_logic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Rotating_backdrop_logic",
          "name": "breaks",
          "package": "backdropper",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Rotating_backdrop_logic.html#breaks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Rotating_backdrop_logic",
          "module": "Rotating_backdrop_logic",
          "name": "breaks",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "backdropper",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backdropper/docs/Rotating_backdrop_logic.html#v:breaks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the desktop image using qiv: http:\u003cem/\u003ewww.klografx.net\u003cem\u003eqiv\u003c/em\u003eindex2.html\n\u003c/p\u003e",
          "module": "Rotating_backdrop_logic",
          "name": "changeDesktop",
          "package": "backdropper",
          "signature": "String-\u003e IO ExitCode",
          "type": "function"
        },
        "index": {
          "description": "Changes the desktop image using qiv http www.klografx.net qiv index2.html",
          "hierarchy": "Rotating_backdrop_logic",
          "module": "Rotating_backdrop_logic",
          "name": "changeDesktop",
          "normalized": "String-\u003eIO ExitCode",
          "package": "backdropper",
          "partial": "Desktop",
          "signature": "String-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backdropper/docs/Rotating_backdrop_logic.html#v:changeDesktop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a random number.\n\u003c/p\u003e",
          "module": "Rotating_backdrop_logic",
          "name": "getRandomNumber",
          "package": "backdropper",
          "signature": "Int-\u003e IO Int",
          "type": "function"
        },
        "index": {
          "description": "Gets random number",
          "hierarchy": "Rotating_backdrop_logic",
          "module": "Rotating_backdrop_logic",
          "name": "getRandomNumber",
          "normalized": "Int-\u003eIO Int",
          "package": "backdropper",
          "partial": "Random Number",
          "signature": "Int-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backdropper/docs/Rotating_backdrop_logic.html#v:getRandomNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIterates over all the images, picking a random one each the time.\n\u003c/p\u003e",
          "module": "Rotating_backdrop_logic",
          "name": "iterateImages",
          "package": "backdropper",
          "signature": "[String]-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Iterates over all the images picking random one each the time",
          "hierarchy": "Rotating_backdrop_logic",
          "module": "Rotating_backdrop_logic",
          "name": "iterateImages",
          "normalized": "[String]-\u003eInt-\u003eIO()",
          "package": "backdropper",
          "partial": "Images",
          "signature": "[String]-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backdropper/docs/Rotating_backdrop_logic.html#v:iterateImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads the list from the master file and starts iterating over it.\n\u003c/p\u003e",
          "module": "Rotating_backdrop_logic",
          "name": "mainLoop",
          "package": "backdropper",
          "signature": "FilePath-\u003e Int-\u003e IO t",
          "type": "function"
        },
        "index": {
          "description": "Reads the list from the master file and starts iterating over it",
          "hierarchy": "Rotating_backdrop_logic",
          "module": "Rotating_backdrop_logic",
          "name": "mainLoop",
          "normalized": "FilePath-\u003eInt-\u003eIO a",
          "package": "backdropper",
          "partial": "Loop",
          "signature": "FilePath-\u003eInt-\u003eIO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backdropper/docs/Rotating_backdrop_logic.html#v:mainLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a file and return a list those elements are lines.\n\u003c/p\u003e",
          "module": "Rotating_backdrop_logic",
          "name": "parseImageFile",
          "package": "backdropper",
          "signature": "FilePath-\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "description": "Reads file and return list those elements are lines",
          "hierarchy": "Rotating_backdrop_logic",
          "module": "Rotating_backdrop_logic",
          "name": "parseImageFile",
          "normalized": "FilePath-\u003eIO[String]",
          "package": "backdropper",
          "partial": "Image File",
          "signature": "FilePath-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backdropper/docs/Rotating_backdrop_logic.html#v:parseImageFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves an element from a list: Problem 20, 99 Haskell problems. \n\u003c/p\u003e",
          "module": "Rotating_backdrop_logic",
          "name": "removeElement",
          "package": "backdropper",
          "signature": "Int-\u003e [a]-\u003e (a, [a])",
          "type": "function"
        },
        "index": {
          "description": "Removes an element from list Problem Haskell problems",
          "hierarchy": "Rotating_backdrop_logic",
          "module": "Rotating_backdrop_logic",
          "name": "removeElement",
          "normalized": "Int-\u003e[a]-\u003e(a,[a])",
          "package": "backdropper",
          "partial": "Element",
          "signature": "Int-\u003e[a]-\u003e(a,[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/backdropper/docs/Rotating_backdrop_logic.html#v:removeElement"
      }
    }
  ]
]