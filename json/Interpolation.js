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
        "word": "Interpolation"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a quasiquoter for interpolated strings. For example:\n\u003c/p\u003e\u003cpre\u003e\n  import qualified Data.Text.Lazy as LT\n  let fb x | x `mod` 15 == 0 = \"FizzBuzz\" \n           | x `mod` 5 == 0 = \"Buzz\" \n           | x `mod` 3 == 0 = \"Fizz\" \n           | otherwise = LT.pack (show x)\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eLT.take 85 [str|#x in [1..]:$fb x$|, #|] \u003c\u003e \".. \"\n\u003c/code\u003e\u003c/strong\u003e\"1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz.. \"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.String.Interpolation",
          "name": "Interpolation",
          "package": "Interpolation",
          "source": "src/Data-String-Interpolation.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines quasiquoter for interpolated strings For example import qualified Data.Text.Lazy as LT let fb mod FizzBuzz mod Buzz mod Fizz otherwise LT.pack show LT.take str in fb Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz",
          "hierarchy": "Data String Interpolation",
          "module": "Data.String.Interpolation",
          "name": "Interpolation",
          "package": "Interpolation",
          "partial": "Interpolation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Interpolation/docs/Data-String-Interpolation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd of the line  \n\u003c/p\u003e",
          "module": "Data.String.Interpolation",
          "name": "endline",
          "package": "Interpolation",
          "signature": "a",
          "source": "src/Data-String-Interpolation.html#endline",
          "type": "function"
        },
        "index": {
          "description": "End of the line",
          "hierarchy": "Data String Interpolation",
          "module": "Data.String.Interpolation",
          "name": "endline",
          "package": "Interpolation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Interpolation/docs/Data-String-Interpolation.html#v:endline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.Interpolation",
          "name": "prnt",
          "package": "Interpolation",
          "signature": "QuasiQuoter",
          "source": "src/Data-String-Interpolation.html#prnt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data String Interpolation",
          "module": "Data.String.Interpolation",
          "name": "prnt",
          "package": "Interpolation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Interpolation/docs/Data-String-Interpolation.html#v:prnt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiquote \u003ccode\u003e\u003ca\u003estr\u003c/a\u003e\u003c/code\u003e implements multiline strings with interpolation.\n   Interpolating a value into the string is done by \n   $\u003cString expression\u003e$\n   and interpolating anything with instance Show is \n   $:\u003cShow expression\u003e$. Due to pretty deep limitations, the parser\n   is not able to properly deduce associtivity of infix operators,\n   so use lots and lots of parenthesis.\n\u003c/p\u003e\u003cp\u003eRepetitive patterns can be made with # symbol: \n\u003c/p\u003e\u003cpre\u003e\n  #\u003cpattern\u003e in \u003clist\u003e: \u003cinterpolated string\u003e (|\u003cinterpolated string\u003e)#\n\u003c/pre\u003e\u003cp\u003eWhere (|\u003cinterpolated string\u003e) denotes optional separator for the \n   elements.\n\u003c/p\u003e\u003cp\u003eMultiline indentation is handled by aligning on smallest un-empty\n   line after the first. Neither pattern matching nor nested #-patterns\n   are supported, however, see example below.\n\u003c/p\u003e\u003cp\u003eNormal '\\\\n' style escaping of special characters\n   is intentionally not supported. Please use $endline$ or $\u003ca\u003en\u003c/a\u003e$ \n   style instead. \n\u003c/p\u003e\u003cp\u003eAs an example, let's plot set of vectors with gnuplot:\n\u003c/p\u003e\u003cpre\u003e\n   plotVecs :: [(String,[Double])] -\u003e String\n   plotVecs vs =  \n       [$str| ## Plot multiple vectors\n              plot #(n,_) in vs:\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e with lines lw 5 title $:n$ |, #\n              #d in map snd vs:$singleVec d$$endline$e$endline$# |]\n   where\n    singleVec n = [$str|#(e,i) in zip n [1..]: $:i$ $:e$|$endline$#|]\n\u003c/pre\u003e\u003cpre\u003e\n  *Gnuplotter\u003e plotVecs [(\"A\",[1..5]),(\"B\",[2..6])]\n  # Plot multiple vectors\n   plot \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e with lines lw 5 title \"A\" , \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e with lines lw 5 title \"B\" \n    1 1.0\n    2 2.0\n    3 3.0\n    4 4.0\n    5 5.0\n\ne\n    1 2.0\n    2 3.0\n    3 4.0\n    4 5.0\n    5 6.0\n\ne\n\u003c/pre\u003e",
          "module": "Data.String.Interpolation",
          "name": "str",
          "package": "Interpolation",
          "signature": "QuasiQuoter",
          "source": "src/Data-String-Interpolation.html#str",
          "type": "function"
        },
        "index": {
          "description": "Quasiquote str implements multiline strings with interpolation Interpolating value into the string is done by String expression and interpolating anything with instance Show is Show expression Due to pretty deep limitations the parser is not able to properly deduce associtivity of infix operators so use lots and lots of parenthesis Repetitive patterns can be made with symbol pattern in list interpolated string interpolated string Where interpolated string denotes optional separator for the elements Multiline indentation is handled by aligning on smallest un-empty line after the first Neither pattern matching nor nested patterns are supported however see example below Normal style escaping of special characters is intentionally not supported Please use endline or style instead As an example let plot set of vectors with gnuplot plotVecs String Double String plotVecs vs str Plot multiple vectors plot in vs with lines lw title in map snd vs singleVec endline endline where singleVec str in zip endline Gnuplotter plotVecs Plot multiple vectors plot with lines lw title with lines lw title",
          "hierarchy": "Data String Interpolation",
          "module": "Data.String.Interpolation",
          "name": "str",
          "package": "Interpolation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Interpolation/docs/Data-String-Interpolation.html#v:str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTab\n\u003c/p\u003e",
          "module": "Data.String.Interpolation",
          "name": "tab",
          "package": "Interpolation",
          "signature": "a",
          "source": "src/Data-String-Interpolation.html#tab",
          "type": "function"
        },
        "index": {
          "description": "Tab",
          "hierarchy": "Data String Interpolation",
          "module": "Data.String.Interpolation",
          "name": "tab",
          "package": "Interpolation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Interpolation/docs/Data-String-Interpolation.html#v:tab"
      }
    }
  ]
]