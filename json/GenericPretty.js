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
        "word": "GenericPretty"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenericPretty is a Haskell library that supports automatic\n  derivation of pretty printing functions on user defined data\n  types.\n\u003c/p\u003e\u003cp\u003eThe output provided is a pretty printed version of that provided by\n  \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e.  That is, rendering the document provided by this pretty\n  printer yields an output identical to that of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, except\n  for extra whitespace.\n\u003c/p\u003e\u003cp\u003eFor examples of usage please see the README file included in the package.\n\u003c/p\u003e\u003cp\u003eFor more information see the HackageDB project page: \u003ca\u003ehttp://hackage.haskell.org/package/GenericPretty\u003c/a\u003e \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "GenericPretty",
          "package": "GenericPretty",
          "source": "src/Text-PrettyPrint-GenericPretty.html",
          "type": "module"
        },
        "index": {
          "description": "GenericPretty is Haskell library that supports automatic derivation of pretty printing functions on user defined data types The output provided is pretty printed version of that provided by show That is rendering the document provided by this pretty printer yields an output identical to that of show except for extra whitespace For examples of usage please see the README file included in the package For more information see the HackageDB project page http hackage.haskell.org package GenericPretty",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "GenericPretty",
          "package": "GenericPretty",
          "partial": "Generic Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentable types of kind *.\n This class is derivable in GHC with the DeriveGeneric flag on.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "Generic",
          "package": "GenericPretty",
          "type": "class"
        },
        "index": {
          "description": "Representable types of kind This class is derivable in GHC with the DeriveGeneric flag on",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "Generic",
          "package": "GenericPretty",
          "partial": "Generic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#t:Generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eOut\u003c/a\u003e\u003c/code\u003e is the equivalent of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eIt provides conversion of values to pretty printable Pretty.Doc's.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003edocPrec\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003edoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDerived instances of \u003ccode\u003e\u003ca\u003eOut\u003c/a\u003e\u003c/code\u003e have the following properties\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The result of \u003ccode\u003e\u003ca\u003edocPrec\u003c/a\u003e\u003c/code\u003e is a syntactically correct Haskell\n   expression containing only constants, given the fixity\n   declarations in force at the point where the type is declared.\n   It contains only the constructor names defined in the data type,\n   parentheses, and spaces.  When labelled constructor fields are\n   used, braces, commas, field names, and equal signs are also used.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined to be an infix operator, then\n   \u003ccode\u003e\u003ca\u003edocPrec\u003c/a\u003e\u003c/code\u003e will produce infix applications of the constructor.\n\u003c/li\u003e\u003cli\u003e the representation will be enclosed in parentheses if the\n   precedence of the top-level constructor in \u003ccode\u003ex\u003c/code\u003e is less than \u003ccode\u003ed\u003c/code\u003e\n   (associativity is ignored).  Thus, if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e0\u003c/code\u003e then the result\n   is never surrounded in parentheses; if \u003ccode\u003ed\u003c/code\u003e is \u003ccode\u003e11\u003c/code\u003e it is always\n   surrounded in parentheses, unless it is an atomic expression.\n\u003c/li\u003e\u003cli\u003e If the constructor is defined using record syntax, then \u003ccode\u003e\u003ca\u003edocPrec\u003c/a\u003e\u003c/code\u003e\n   will produce the record-syntax form, with the fields given in the\n   same order as the original declaration.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor example, given the declarations\n\u003c/p\u003e\u003cpre\u003e data Tree a =  Leaf a  |  Node (Tree a) (Tree a) deriving (Generic)\n\u003c/pre\u003e\u003cp\u003eThe derived instance of \u003ccode\u003e\u003ca\u003eOut\u003c/a\u003e\u003c/code\u003e is equivalent to:\n\u003c/p\u003e\u003cpre\u003e instance (Out a) =\u003e Out (Tree a) where\n  \n         docPrec d (Leaf m) = Pretty.sep $ wrapParens (d \u003e appPrec) $\n              text \"Leaf\" : [nest (constrLen + parenLen) (docPrec (appPrec+1) m)]\n           where appPrec = 10\n                 constrLen = 5;\n                 parenLen = if(d \u003e appPrec) then 1 else 0\n \n         docPrec d (Node u v) = Pretty.sep $ wrapParens (d \u003e appPrec) $\n              text \"Node\" : \n              nest (constrLen + parenLen) (docPrec (appPrec+1) u) : \n              [nest (constrLen + parenLen) (docPrec (appPrec+1) v)]\n           where appPrec = 10\n                 constrLen = 5\n                 parenLen = if(d \u003e appPrec) then 1 else 0\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "Out",
          "package": "GenericPretty",
          "source": "src/Text-PrettyPrint-GenericPretty.html#Out",
          "type": "class"
        },
        "index": {
          "description": "The class Out is the equivalent of Show It provides conversion of values to pretty printable Pretty.Doc Minimal complete definition docPrec or doc Derived instances of Out have the following properties The result of docPrec is syntactically correct Haskell expression containing only constants given the fixity declarations in force at the point where the type is declared It contains only the constructor names defined in the data type parentheses and spaces When labelled constructor fields are used braces commas field names and equal signs are also used If the constructor is defined to be an infix operator then docPrec will produce infix applications of the constructor the representation will be enclosed in parentheses if the precedence of the top-level constructor in is less than associativity is ignored Thus if is then the result is never surrounded in parentheses if is it is always surrounded in parentheses unless it is an atomic expression If the constructor is defined using record syntax then docPrec will produce the record-syntax form with the fields given in the same order as the original declaration For example given the declarations data Tree Leaf Node Tree Tree deriving Generic The derived instance of Out is equivalent to instance Out Out Tree where docPrec Leaf Pretty.sep wrapParens appPrec text Leaf nest constrLen parenLen docPrec appPrec where appPrec constrLen parenLen if appPrec then else docPrec Node Pretty.sep wrapParens appPrec text Node nest constrLen parenLen docPrec appPrec nest constrLen parenLen docPrec appPrec where appPrec constrLen parenLen if appPrec then else",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "Out",
          "package": "GenericPretty",
          "partial": "Out",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#t:Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edoc\u003c/a\u003e\u003c/code\u003e is the equivalent of \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis is a specialised variant of \u003ccode\u003e\u003ca\u003edocPrec\u003c/a\u003e\u003c/code\u003e, using precedence context zero.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "doc",
          "package": "GenericPretty",
          "signature": "a -\u003e Doc",
          "source": "src/Text-PrettyPrint-GenericPretty.html#doc",
          "type": "method"
        },
        "index": {
          "description": "doc is the equivalent of show This is specialised variant of docPrec using precedence context zero",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "doc",
          "normalized": "a-\u003eDoc",
          "package": "GenericPretty",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edocList\u003c/a\u003e\u003c/code\u003e is the equivalent of \u003ccode\u003e\u003ca\u003eshowList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe method \u003ccode\u003e\u003ca\u003edocList\u003c/a\u003e\u003c/code\u003e is provided to allow the programmer to\n give a specialised way of showing lists of values.\n For example, this is used by the predefined \u003ccode\u003e\u003ca\u003eOut\u003c/a\u003e\u003c/code\u003e instance of\n the \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e type, where values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be shown\n in double quotes, rather than between square brackets.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "docList",
          "package": "GenericPretty",
          "signature": "[a] -\u003e Doc",
          "source": "src/Text-PrettyPrint-GenericPretty.html#docList",
          "type": "method"
        },
        "index": {
          "description": "docList is the equivalent of showList The method docList is provided to allow the programmer to give specialised way of showing lists of values For example this is used by the predefined Out instance of the Char type where values of type String should be shown in double quotes rather than between square brackets",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "docList",
          "normalized": "[a]-\u003eDoc",
          "package": "GenericPretty",
          "partial": "List",
          "signature": "[a]-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:docList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edocPrec\u003c/a\u003e\u003c/code\u003e is the equivalent of \u003ccode\u003e\u003ca\u003eshowsPrec\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConvert a value to a pretty printable \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "docPrec",
          "package": "GenericPretty",
          "signature": "docPrec",
          "source": "src/Text-PrettyPrint-GenericPretty.html#docPrec",
          "type": "method"
        },
        "index": {
          "description": "docPrec is the equivalent of showsPrec Convert value to pretty printable Doc",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "docPrec",
          "package": "GenericPretty",
          "partial": "Prec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:docPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efullPP\u003c/a\u003e\u003c/code\u003e is a fully customizable Pretty Printer\n\u003c/p\u003e\u003cp\u003eEvery other pretty printer just gives some default values to \u003ccode\u003e\u003ca\u003efullPP\u003c/a\u003e\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "fullPP",
          "package": "GenericPretty",
          "signature": "(TextDetails -\u003e b -\u003e b)-\u003e b-\u003e Style-\u003e a-\u003e b",
          "type": "function"
        },
        "index": {
          "description": "fullPP is fully customizable Pretty Printer Every other pretty printer just gives some default values to fullPP",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "fullPP",
          "normalized": "(TextDetails-\u003ea-\u003ea)-\u003ea-\u003eStyle-\u003eb-\u003ea",
          "package": "GenericPretty",
          "partial": "PP",
          "signature": "(TextDetails-\u003eb-\u003eb)-\u003eb-\u003eStyle-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:fullPP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function that handles the text conversion for \u003ccode\u003e\u003ca\u003efullPP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eoutputIO\u003c/a\u003e\u003c/code\u003e transforms the text into \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es and outputs it directly.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "outputIO",
          "package": "GenericPretty",
          "signature": "TextDetails -\u003e IO () -\u003e IO ()",
          "source": "src/Text-PrettyPrint-GenericPretty.html#outputIO",
          "type": "function"
        },
        "index": {
          "description": "Utility function that handles the text conversion for fullPP outputIO transforms the text into String and outputs it directly",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "outputIO",
          "normalized": "TextDetails-\u003eIO()-\u003eIO()",
          "package": "GenericPretty",
          "partial": "IO",
          "signature": "TextDetails-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:outputIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function that handles the text conversion for \u003ccode\u003e\u003ca\u003efullPP\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eoutputStr\u003c/a\u003e\u003c/code\u003e just leaves the text as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e which is usefull if you want \n to further process the pretty printed result.\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "outputStr",
          "package": "GenericPretty",
          "signature": "TextDetails -\u003e String -\u003e String",
          "source": "src/Text-PrettyPrint-GenericPretty.html#outputStr",
          "type": "function"
        },
        "index": {
          "description": "Utility function that handles the text conversion for fullPP outputStr just leaves the text as String which is usefull if you want to further process the pretty printed result",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "outputStr",
          "normalized": "TextDetails-\u003eString-\u003eString",
          "package": "GenericPretty",
          "partial": "Str",
          "signature": "TextDetails-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:outputStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default Pretty Printer,\n\u003c/p\u003e\u003cp\u003eEquivalent to:\n\u003c/p\u003e\u003cpre\u003e ppStyle defaultStyle\n\u003c/pre\u003e\u003cp\u003eWhere defaultStyle = (mode=PageMode, lineLength=80, ribbonsPerLine=1.5)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "pp",
          "package": "GenericPretty",
          "signature": "a -\u003e IO ()",
          "source": "src/Text-PrettyPrint-GenericPretty.html#pp",
          "type": "function"
        },
        "index": {
          "description": "The default Pretty Printer Equivalent to ppStyle defaultStyle Where defaultStyle mode PageMode lineLength ribbonsPerLine",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "pp",
          "normalized": "a-\u003eIO()",
          "package": "GenericPretty",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemi-customizable pretty printer. \n\u003c/p\u003e\u003cp\u003eEquivalent to:\n\u003c/p\u003e\u003cpre\u003e ppStyle customStyle\n\u003c/pre\u003e\u003cp\u003eWhere customStyle uses the specified line length, mode = PageMode and ribbonsPerLine = 1. \n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "ppLen",
          "package": "GenericPretty",
          "signature": "Int -\u003e a -\u003e IO ()",
          "source": "src/Text-PrettyPrint-GenericPretty.html#ppLen",
          "type": "function"
        },
        "index": {
          "description": "Semi-customizable pretty printer Equivalent to ppStyle customStyle Where customStyle uses the specified line length mode PageMode and ribbonsPerLine",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "ppLen",
          "normalized": "Int-\u003ea-\u003eIO()",
          "package": "GenericPretty",
          "partial": "Len",
          "signature": "Int-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:ppLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustomizable pretty printer.\n\u003c/p\u003e\u003cp\u003eTakes a user defined \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e as a parameter and uses \u003ccode\u003e\u003ca\u003eoutputIO\u003c/a\u003e\u003c/code\u003e to obtain the result\n\u003c/p\u003e\u003cp\u003eEquivalent to:\n\u003c/p\u003e\u003cpre\u003e fullPP outputIO (putChar '\\n')\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "ppStyle",
          "package": "GenericPretty",
          "signature": "Style -\u003e a -\u003e IO ()",
          "source": "src/Text-PrettyPrint-GenericPretty.html#ppStyle",
          "type": "function"
        },
        "index": {
          "description": "Customizable pretty printer Takes user defined Style as parameter and uses outputIO to obtain the result Equivalent to fullPP outputIO putChar",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "ppStyle",
          "normalized": "Style-\u003ea-\u003eIO()",
          "package": "GenericPretty",
          "partial": "Style",
          "signature": "Style-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:ppStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default pretty printer returning \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003cp\u003eEquivalent to\n\u003c/p\u003e\u003cpre\u003e prettyStyle defaultStyle\n\u003c/pre\u003e\u003cp\u003eWhere defaultStyle = (mode=PageMode, lineLength=80, ribbonsPerLine=1.5)\n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "pretty",
          "package": "GenericPretty",
          "signature": "a -\u003e String",
          "source": "src/Text-PrettyPrint-GenericPretty.html#pretty",
          "type": "function"
        },
        "index": {
          "description": "The default pretty printer returning String Equivalent to prettyStyle defaultStyle Where defaultStyle mode PageMode lineLength ribbonsPerLine",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "pretty",
          "normalized": "a-\u003eString",
          "package": "GenericPretty",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSemi-customizable pretty printer. \n\u003c/p\u003e\u003cp\u003eEquivalent to:\n\u003c/p\u003e\u003cpre\u003e prettyStyle customStyle\n\u003c/pre\u003e\u003cp\u003eWhere customStyle uses the specified line length, mode = PageMode and ribbonsPerLine = 1. \n\u003c/p\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "prettyLen",
          "package": "GenericPretty",
          "signature": "Int -\u003e a -\u003e String",
          "source": "src/Text-PrettyPrint-GenericPretty.html#prettyLen",
          "type": "function"
        },
        "index": {
          "description": "Semi-customizable pretty printer Equivalent to prettyStyle customStyle Where customStyle uses the specified line length mode PageMode and ribbonsPerLine",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "prettyLen",
          "normalized": "Int-\u003ea-\u003eString",
          "package": "GenericPretty",
          "partial": "Len",
          "signature": "Int-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:prettyLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCustomizable pretty printer \n\u003c/p\u003e\u003cp\u003eTakes a user defined \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e as a parameter and uses \u003ccode\u003e\u003ca\u003eoutputStr\u003c/a\u003e\u003c/code\u003e to obtain the result\n\u003c/p\u003e\u003cp\u003eEquivalent to:\n\u003c/p\u003e\u003cpre\u003e fullPP outputStr \"\"\n\u003c/pre\u003e",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "prettyStyle",
          "package": "GenericPretty",
          "signature": "Style -\u003e a -\u003e String",
          "source": "src/Text-PrettyPrint-GenericPretty.html#prettyStyle",
          "type": "function"
        },
        "index": {
          "description": "Customizable pretty printer Takes user defined Style as parameter and uses outputStr to obtain the result Equivalent to fullPP outputStr",
          "hierarchy": "Text PrettyPrint GenericPretty",
          "module": "Text.PrettyPrint.GenericPretty",
          "name": "prettyStyle",
          "normalized": "Style-\u003ea-\u003eString",
          "package": "GenericPretty",
          "partial": "Style",
          "signature": "Style-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/GenericPretty/docs/Text-PrettyPrint-GenericPretty.html#v:prettyStyle"
      }
    }
  ]
]