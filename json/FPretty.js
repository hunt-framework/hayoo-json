[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast pretty-printing library\n\u003c/p\u003e\u003cp\u003eA pretty printer turns a tree structure into indented text, such that the\n indentation reflects the tree structure. To minimise the number of lines,\n substructures are put on a single line as far as possible within the given \n line-width limit.\n\u003c/p\u003e\u003cp\u003eAn pretty-printed example with 35 characters line-width:\n\u003c/p\u003e\u003cpre\u003e if True\n    then if True then True else True\n    else\n       if False \n          then False \n          else False\n\u003c/pre\u003e\u003cp\u003eTo obtain the above the user of a library only has to convert their tree \n structure into a document of type \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e data Exp = ETrue | EFalse | If Exp Exp Exp\n\n toDoc :: Exp -\u003e Doc\n toDoc ETrue = text \"True\"\n toDoc EFalse = text \"False\"\n toDoc (If e1 e2 e3) =\n   group (nest 3 (\n     group (nest 3 (text \"if\" \u003c\u003e line \u003c\u003e toDoc e1)) \u003c\u003e line \u003c\u003e\n     group (nest 3 (text \"then\" \u003c\u003e line \u003c\u003e toDoc e2)) \u003c\u003e line \u003c\u003e\n     group (nest 3 (text \"else\" \u003c\u003e line \u003c\u003e toDoc e3))))\n\u003c/pre\u003e\u003cp\u003eA document represents a set of layouts. The function \u003ccode\u003e\u003ca\u003epretty\u003c/a\u003e\u003c/code\u003e then takes\n a desired maximal printing width and a document and selects the layout that fits\n best.\n\u003c/p\u003e\u003cp\u003eAnother example filling lines with elements of a list:\n\u003c/p\u003e\u003cpre\u003e list2Doc :: Show a =\u003e [a] -\u003e Doc\n list2Doc xs = text \"[\" \u003c\u003e go xs \u003c\u003e text \"]\"\n   where\n   go [] = empty\n   go [x] = text (show x)\n   go (x:y:ys) = text (show x) \u003c/\u003e text \", \" \u003c\u003e go (y:ys)\n\n main = putStrLn (pretty 40 (list2Doc [1..20]))\n\u003c/pre\u003e\u003cp\u003eThe output is\n\u003c/p\u003e\u003cpre\u003e [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10\n , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18\n , 19 , 20]\n\u003c/pre\u003e\u003cp\u003eFPretty is an implementation of the simple combinators designed by Phil Wadler.\n The library uses a single associative combinator \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e to concatenate documents with\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e as identity. There is a primitive document for potential line breaks, i.e.,\n its two layouts are both a line break and a space. The \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e combinator then\n enforces that all potential line breaks within a document must be layouted in the\n same way, i.e. either line breaks or spaces.\n\u003c/p\u003e\u003cp\u003eThe time complexity is linear in the output size.\n In contrast, all other pretty printing libraries\n (original Phil Wadler, PPrint by Leijen, Hughes / Peyton Jones) \n use more or less backtracking, and their speed depends unpredictably on the \n desired output width.\n\u003c/p\u003e\u003cp\u003eAlso FPretty provides both relative and absolute indentation via\n nest and align, whereas HughesPJ provides only relative indentation.\n\u003c/p\u003e\u003cp\u003eUnlike other libraries, FPretty does not provide several rendering modes,\n but could be extended to do so.\n\u003c/p\u003e\u003cp\u003eThe combinators are a subset of those of PPrint and are similar to HughesPJ\n to make moving from one library to the other as painless as possible.\n\u003c/p\u003e\u003cp\u003eFor more implementation notes see \u003ca\u003ehttp://www.cs.kent.ac.uk/~oc/pretty.html\u003c/a\u003e or\n Doitse Swierstra and Olaf Chitil: Linear, bounded, functional pretty-printing.\n Journal of Functional Programming, 19(1):1-16, January 2009.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "module",
        "fct-source": "src/Text-PrettyPrint-FPretty.html",
        "fct-type": "module",
        "title": "FPretty"
      },
      "index": {
        "description": "Fast pretty-printing library pretty printer turns tree structure into indented text such that the indentation reflects the tree structure To minimise the number of lines substructures are put on single line as far as possible within the given line-width limit An pretty-printed example with characters line-width if True then if True then True else True else if False then False else False To obtain the above the user of library only has to convert their tree structure into document of type Doc data Exp ETrue EFalse If Exp Exp Exp toDoc Exp Doc toDoc ETrue text True toDoc EFalse text False toDoc If e1 e2 e3 group nest group nest text if line toDoc e1 line group nest text then line toDoc e2 line group nest text else line toDoc e3 document represents set of layouts The function pretty then takes desired maximal printing width and document and selects the layout that fits best Another example filling lines with elements of list list2Doc Show Doc list2Doc xs text go xs text where go empty go text show go ys text show text go ys main putStrLn pretty list2Doc The output is FPretty is an implementation of the simple combinators designed by Phil Wadler The library uses single associative combinator to concatenate documents with empty as identity There is primitive document for potential line breaks i.e its two layouts are both line break and space The group combinator then enforces that all potential line breaks within document must be layouted in the same way i.e either line breaks or spaces The time complexity is linear in the output size In contrast all other pretty printing libraries original Phil Wadler PPrint by Leijen Hughes Peyton Jones use more or less backtracking and their speed depends unpredictably on the desired output width Also FPretty provides both relative and absolute indentation via nest and align whereas HughesPJ provides only relative indentation Unlike other libraries FPretty does not provide several rendering modes but could be extended to do so The combinators are subset of those of PPrint and are similar to HughesPJ to make moving from one library to the other as painless as possible For more implementation notes see http www.cs.kent.ac.uk oc pretty.html or Doitse Swierstra and Olaf Chitil Linear bounded functional pretty-printing Journal of Functional Programming January",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "FPretty",
        "normalized": "",
        "package": "FPretty",
        "partial": "FPretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eA Document represents a *set* of layouts.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "data",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "Document represents set of layouts",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "Doc",
        "normalized": "",
        "package": "FPretty",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:-60--36--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine with a \u003ccode\u003e\u003ca\u003elinebreak\u003c/a\u003e\u003c/code\u003e in between.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#%3C%24%24%3E",
        "fct-type": "function",
        "title": "(\u003c$$\u003e)"
      },
      "index": {
        "description": "Combine with linebreak in between",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "(\u003c$$\u003e) \u003c$$\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:-60--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine with a \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e in between.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#%3C%24%3E",
        "fct-type": "function",
        "title": "(\u003c$\u003e)"
      },
      "index": {
        "description": "Combine with line in between",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "(\u003c$\u003e) \u003c$\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:-60--43--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine with a space in between.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#%3C%2B%3E",
        "fct-type": "function",
        "title": "(\u003c+\u003e)"
      },
      "index": {
        "description": "Combine with space in between",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "(\u003c+\u003e) \u003c+\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:-60--47--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine with a \u003ccode\u003e\u003ca\u003esoftbreak\u003c/a\u003e\u003c/code\u003e in between.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#%3C%2F%2F%3E",
        "fct-type": "function",
        "title": "(\u003c//\u003e)"
      },
      "index": {
        "description": "Combine with softbreak in between",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "(\u003c//\u003e) \u003c//\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:-60--47--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombine with a \u003ccode\u003e\u003ca\u003esoftline\u003c/a\u003e\u003c/code\u003e in between.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#%3C%2F%3E",
        "fct-type": "function",
        "title": "(\u003c/\u003e)"
      },
      "index": {
        "description": "Combine with softline in between",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "(\u003c/\u003e) \u003c/\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eHorizontal composition of two documents. \n Is associative with identity \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "Horizontal composition of two documents Is associative with identity empty",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "Doc-\u003eDoc-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "Doc-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:align",
      "description": {
        "fct-descr": "\u003cp\u003eSet indentation to current column.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#align",
        "fct-type": "function",
        "title": "align"
      },
      "index": {
        "description": "Set indentation to current column",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "align",
        "normalized": "Doc-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:cat",
      "description": {
        "fct-descr": "\u003cp\u003eCombine non-empty list of documents, filling lines as far as possible.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#cat",
        "fct-type": "function",
        "title": "cat"
      },
      "index": {
        "description": "Combine non-empty list of documents filling lines as far as possible",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "cat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty document; equal to text \"\".\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty document equal to text",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "empty",
        "normalized": "",
        "package": "FPretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:fillCat",
      "description": {
        "fct-descr": "\u003cp\u003eCombine non-empty list of documents with \u003ccode\u003e\u003ca\u003e\u003c//\u003e\u003c/a\u003e\u003c/code\u003e, i.e., a \u003ccode\u003e\u003ca\u003esoftbreak\u003c/a\u003e\u003c/code\u003e separator.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#fillCat",
        "fct-type": "function",
        "title": "fillCat"
      },
      "index": {
        "description": "Combine non-empty list of documents with i.e softbreak separator",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "fillCat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "FPretty",
        "partial": "Cat",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:fillSep",
      "description": {
        "fct-descr": "\u003cp\u003eCombine non-empty list of documents with \u003ccode\u003e\u003ca\u003e\u003c/\u003e\u003c/a\u003e\u003c/code\u003e, i.e., a \u003ccode\u003e\u003ca\u003esoftline\u003c/a\u003e\u003c/code\u003e separator.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#fillSep",
        "fct-type": "function",
        "title": "fillSep"
      },
      "index": {
        "description": "Combine non-empty list of documents with i.e softline separator",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "fillSep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "FPretty",
        "partial": "Sep",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eMark document as group, that is, layout as a single line if possible.\n Within a group for all basic documents with several layouts the same layout\n is chosen, that is, they are all horizontal or all new lines.\n Within a vertical group there can be a horizontal group, but within a \n horizontal group all groups are also layouted horizontally.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "Mark document as group that is layout as single line if possible Within group for all basic documents with several layouts the same layout is chosen that is they are all horizontal or all new lines Within vertical group there can be horizontal group but within horizontal group all groups are also layouted horizontally",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "group",
        "normalized": "Doc-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "Doc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:hang",
      "description": {
        "fct-descr": "\u003cp\u003eIncrease identation relative to the *current* column.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Int -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#hang",
        "fct-type": "function",
        "title": "hang"
      },
      "index": {
        "description": "Increase identation relative to the current column",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "hang",
        "normalized": "Int-\u003eDoc-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "Int-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:hcat",
      "description": {
        "fct-descr": "\u003cp\u003eCombine non-empty list of documents with \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#hcat",
        "fct-type": "function",
        "title": "hcat"
      },
      "index": {
        "description": "Combine non-empty list of documents with",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "hcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:hsep",
      "description": {
        "fct-descr": "\u003cp\u003eCombine non-empty list of documents with \u003ccode\u003e\u003ca\u003e\u003c+\u003e\u003c/a\u003e\u003c/code\u003e, i.e., a space separator.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#hsep",
        "fct-type": "function",
        "title": "hsep"
      },
      "index": {
        "description": "Combine non-empty list of documents with i.e space separator",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "hsep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eEither a space or a new line.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "Either space or new line",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "line",
        "normalized": "",
        "package": "FPretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:linebreak",
      "description": {
        "fct-descr": "\u003cp\u003eEither nothing (\u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e) or a new line.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#linebreak",
        "fct-type": "function",
        "title": "linebreak"
      },
      "index": {
        "description": "Either nothing empty or new line",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "linebreak",
        "normalized": "",
        "package": "FPretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:nest",
      "description": {
        "fct-descr": "\u003cp\u003eIncreases current indentation level (absolute). Assumes argument \u003e= 0.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Int -\u003e Doc -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#nest",
        "fct-type": "function",
        "title": "nest"
      },
      "index": {
        "description": "Increases current indentation level absolute Assumes argument",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "nest",
        "normalized": "Int-\u003eDoc-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "Int-\u003eDoc-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:pretty",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print within given width.\n Selects from the *set* of layouts that the document represents the widest\n that fits within the given width.\n If no such layout exists, then it will choose the narrowest that exceeds the given\n width.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Int -\u003e Doc -\u003e String",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#pretty",
        "fct-type": "function",
        "title": "pretty"
      },
      "index": {
        "description": "Pretty print within given width Selects from the set of layouts that the document represents the widest that fits within the given width If no such layout exists then it will choose the narrowest that exceeds the given width",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "pretty",
        "normalized": "Int-\u003eDoc-\u003eString",
        "package": "FPretty",
        "partial": "",
        "signature": "Int-\u003eDoc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:sep",
      "description": {
        "fct-descr": "\u003cp\u003eCombine non-empty list of documents vertically as a group.\n Seperated by space instead if all fit on one line.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#sep",
        "fct-type": "function",
        "title": "sep"
      },
      "index": {
        "description": "Combine non-empty list of documents vertically as group Seperated by space instead if all fit on one line",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "sep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:softbreak",
      "description": {
        "fct-descr": "\u003cp\u003eNothing, if the following still fits on the current line, otherwise newline.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#softbreak",
        "fct-type": "function",
        "title": "softbreak"
      },
      "index": {
        "description": "Nothing if the following still fits on the current line otherwise newline",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "softbreak",
        "normalized": "",
        "package": "FPretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:softline",
      "description": {
        "fct-descr": "\u003cp\u003eA space, if the following still fits on the current line, otherwise newline.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#softline",
        "fct-type": "function",
        "title": "softline"
      },
      "index": {
        "description": "space if the following still fits on the current line otherwise newline",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "softline",
        "normalized": "",
        "package": "FPretty",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eAtomic document consisting of just the given text.\n There should be no newline \\n in the string.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "String -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Atomic document consisting of just the given text There should be no newline in the string",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "text",
        "normalized": "String-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:vcat",
      "description": {
        "fct-descr": "\u003cp\u003eCombine non-empty list of documents with \u003ccode\u003e\u003ca\u003e\u003c$$\u003e\u003c/a\u003e\u003c/code\u003e, i.e., a \u003ccode\u003e\u003ca\u003elinebreak\u003c/a\u003e\u003c/code\u003e separator.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#vcat",
        "fct-type": "function",
        "title": "vcat"
      },
      "index": {
        "description": "Combine non-empty list of documents with i.e linebreak separator",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "vcat",
        "normalized": "[Doc]-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FPretty/docs/Text-PrettyPrint-FPretty.html#v:vsep",
      "description": {
        "fct-descr": "\u003cp\u003eCombine non-empty list of documents with \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e, i.e., a \u003ccode\u003e\u003ca\u003eline\u003c/a\u003e\u003c/code\u003e separator.\n\u003c/p\u003e",
        "fct-module": "Text.PrettyPrint.FPretty",
        "fct-package": "FPretty",
        "fct-signature": "[Doc] -\u003e Doc",
        "fct-source": "src/Text-PrettyPrint-FPretty.html#vsep",
        "fct-type": "function",
        "title": "vsep"
      },
      "index": {
        "description": "Combine non-empty list of documents with i.e line separator",
        "hierarchy": "Text PrettyPrint FPretty",
        "module": "Text.PrettyPrint.FPretty",
        "name": "vsep",
        "normalized": "[Doc]-\u003eDoc",
        "package": "FPretty",
        "partial": "",
        "signature": "[Doc]-\u003eDoc"
      }
    }
  }
]