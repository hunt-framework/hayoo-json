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
        "word": "HandsomeSoup"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "Parser",
          "package": "HandsomeSoup",
          "source": "src/Text-CSS-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "Parser",
          "package": "HandsomeSoup",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "Selector",
          "package": "HandsomeSoup",
          "source": "src/Text-CSS-Parser.html#Selector",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "Selector",
          "package": "HandsomeSoup",
          "partial": "Selector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#t:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "ChildOf",
          "package": "HandsomeSoup",
          "signature": "ChildOf",
          "source": "src/Text-CSS-Parser.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "ChildOf",
          "package": "HandsomeSoup",
          "partial": "Child Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:ChildOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "FollowedBy",
          "package": "HandsomeSoup",
          "signature": "FollowedBy",
          "source": "src/Text-CSS-Parser.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "FollowedBy",
          "package": "HandsomeSoup",
          "partial": "Followed By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:FollowedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "Selector",
          "package": "HandsomeSoup",
          "signature": "Selector",
          "source": "src/Text-CSS-Parser.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "Selector",
          "package": "HandsomeSoup",
          "partial": "Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:Selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "Space",
          "package": "HandsomeSoup",
          "signature": "Space",
          "source": "src/Text-CSS-Parser.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "Space",
          "package": "HandsomeSoup",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselects attributes, like \u003ccode\u003e [id] \u003c/code\u003e (element must have id) or \u003ccode\u003e [id=foo] \u003c/code\u003e (element must have id foo).\n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "attributeSelector",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity ([Char], [Char])",
          "source": "src/Text-CSS-Parser.html#attributeSelector",
          "type": "function"
        },
        "index": {
          "description": "selects attributes like id element must have id or id foo element must have id foo",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "attributeSelector",
          "normalized": "ParsecT[Char]a Identity([Char],[Char])",
          "package": "HandsomeSoup",
          "partial": "Selector",
          "signature": "ParsecT[Char]u Identity([Char],[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:attributeSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "childOf",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity Selector",
          "source": "src/Text-CSS-Parser.html#childOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "childOf",
          "normalized": "ParsecT[Char]a Identity Selector",
          "package": "HandsomeSoup",
          "partial": "Of",
          "signature": "ParsecT[Char]u Identity Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:childOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eclass selector, selects \u003ccode\u003e .foo \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "classSelector",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity ([Char], [Char])",
          "source": "src/Text-CSS-Parser.html#classSelector",
          "type": "function"
        },
        "index": {
          "description": "class selector selects foo",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "classSelector",
          "normalized": "ParsecT[Char]a Identity([Char],[Char])",
          "package": "HandsomeSoup",
          "partial": "Selector",
          "signature": "ParsecT[Char]u Identity([Char],[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:classSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "css",
          "package": "HandsomeSoup",
          "signature": "[Char] -\u003e Either ParseError [[Selector]]",
          "source": "src/Text-CSS-Parser.html#css",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "css",
          "normalized": "[Char]-\u003eEither ParseError[[Selector]]",
          "package": "HandsomeSoup",
          "signature": "[Char]-\u003eEither ParseError[[Selector]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "followedBy",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity Selector",
          "source": "src/Text-CSS-Parser.html#followedBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "followedBy",
          "normalized": "ParsecT[Char]a Identity Selector",
          "package": "HandsomeSoup",
          "partial": "By",
          "signature": "ParsecT[Char]u Identity Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:followedBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eid selector, selects \u003ccode\u003e #foo \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "idSelector",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity ([Char], [Char])",
          "source": "src/Text-CSS-Parser.html#idSelector",
          "type": "function"
        },
        "index": {
          "description": "id selector selects foo",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "idSelector",
          "normalized": "ParsecT[Char]a Identity([Char],[Char])",
          "package": "HandsomeSoup",
          "partial": "Selector",
          "signature": "ParsecT[Char]u Identity([Char],[Char])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:idSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "ident",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity String",
          "source": "src/Text-CSS-Parser.html#ident",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "ident",
          "normalized": "ParsecT[Char]a Identity String",
          "package": "HandsomeSoup",
          "signature": "ParsecT[Char]u Identity String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "nmchar",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity Char",
          "source": "src/Text-CSS-Parser.html#nmchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "nmchar",
          "normalized": "ParsecT[Char]a Identity Char",
          "package": "HandsomeSoup",
          "signature": "ParsecT[Char]u Identity Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:nmchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "nmstart",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity Char",
          "source": "src/Text-CSS-Parser.html#nmstart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "nmstart",
          "normalized": "ParsecT[Char]a Identity Char",
          "package": "HandsomeSoup",
          "signature": "ParsecT[Char]u Identity Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:nmstart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "pp",
          "package": "HandsomeSoup",
          "signature": "Selector -\u003e [Char]",
          "source": "src/Text-CSS-Parser.html#pp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "pp",
          "normalized": "Selector-\u003e[Char]",
          "package": "HandsomeSoup",
          "signature": "Selector-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselects a pseudo-element or pseudo-class, like \u003ccode\u003e :link \u003c/code\u003e, \u003ccode\u003e :first-child \u003c/code\u003e etc.\n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "pseudoSelector",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity [Char]",
          "source": "src/Text-CSS-Parser.html#pseudoSelector",
          "type": "function"
        },
        "index": {
          "description": "selects pseudo-element or pseudo-class like link first-child etc",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "pseudoSelector",
          "normalized": "ParsecT[Char]a Identity[Char]",
          "package": "HandsomeSoup",
          "partial": "Selector",
          "signature": "ParsecT[Char]u Identity[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:pseudoSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "sAttrs",
          "package": "HandsomeSoup",
          "signature": "[(String, String)]",
          "source": "src/Text-CSS-Parser.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "sAttrs",
          "normalized": "[(String,String)]",
          "package": "HandsomeSoup",
          "partial": "Attrs",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:sAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "sName",
          "package": "HandsomeSoup",
          "signature": "String",
          "source": "src/Text-CSS-Parser.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "sName",
          "package": "HandsomeSoup",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:sName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselector for everything after the type except pseudoSelectores\n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "secondarySelector",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity [([Char], [Char])]",
          "source": "src/Text-CSS-Parser.html#secondarySelector",
          "type": "function"
        },
        "index": {
          "description": "selector for everything after the type except pseudoSelectores",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "secondarySelector",
          "normalized": "ParsecT[Char]a Identity[([Char],[Char])]",
          "package": "HandsomeSoup",
          "partial": "Selector",
          "signature": "ParsecT[Char]u Identity[([Char],[Char])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:secondarySelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOne or more simple selectors separated by combinators. \n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "selector",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity [[Selector]]",
          "source": "src/Text-CSS-Parser.html#selector",
          "type": "function"
        },
        "index": {
          "description": "One or more simple selectors separated by combinators",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "selector",
          "normalized": "ParsecT[Char]a Identity[[Selector]]",
          "package": "HandsomeSoup",
          "signature": "ParsecT[Char]u Identity[[Selector]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:selector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple selector is either a type selector or universal selector followed immediately by zero or more attribute selectors, ID selectors, or pseudo-classes, in any order.\n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "simpleSelector",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity Selector",
          "source": "src/Text-CSS-Parser.html#simpleSelector",
          "type": "function"
        },
        "index": {
          "description": "simple selector is either type selector or universal selector followed immediately by zero or more attribute selectors ID selectors or pseudo-classes in any order",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "simpleSelector",
          "normalized": "ParsecT[Char]a Identity Selector",
          "package": "HandsomeSoup",
          "partial": "Selector",
          "signature": "ParsecT[Char]u Identity Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:simpleSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselects one or more secondary selectors\n and automatically prepends the universal selector to them.\n example: \u003ccode\u003e .foo \u003c/code\u003e, \u003ccode\u003e #hello \u003c/code\u003e etc\n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "simpleSelectorNoTag",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity Selector",
          "source": "src/Text-CSS-Parser.html#simpleSelectorNoTag",
          "type": "function"
        },
        "index": {
          "description": "selects one or more secondary selectors and automatically prepends the universal selector to them example foo hello etc",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "simpleSelectorNoTag",
          "normalized": "ParsecT[Char]a Identity Selector",
          "package": "HandsomeSoup",
          "partial": "Selector No Tag",
          "signature": "ParsecT[Char]u Identity Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:simpleSelectorNoTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselects a tagname followed by one or more secondary selectors\n example: \u003ccode\u003e a.foo \u003c/code\u003e, \u003ccode\u003e *#hello \u003c/code\u003e, \u003ccode\u003e h1 \u003c/code\u003e etc\n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "simpleSelectorTag",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity Selector",
          "source": "src/Text-CSS-Parser.html#simpleSelectorTag",
          "type": "function"
        },
        "index": {
          "description": "selects tagname followed by one or more secondary selectors example a.foo hello h1 etc",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "simpleSelectorTag",
          "normalized": "ParsecT[Char]a Identity Selector",
          "package": "HandsomeSoup",
          "partial": "Selector Tag",
          "signature": "ParsecT[Char]u Identity Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:simpleSelectorTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "space_",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity Selector",
          "source": "src/Text-CSS-Parser.html#space_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "space_",
          "normalized": "ParsecT[Char]a Identity Selector",
          "package": "HandsomeSoup",
          "signature": "ParsecT[Char]u Identity Selector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:space_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CSS.Parser",
          "name": "spseudoSelectores",
          "package": "HandsomeSoup",
          "signature": "[String]",
          "source": "src/Text-CSS-Parser.html#Selector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "spseudoSelectores",
          "normalized": "[String]",
          "package": "HandsomeSoup",
          "partial": "Selectores",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:spseudoSelectores"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eselects a tag name, like \u003ccode\u003e h1 \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "typeSelector",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity [Char]",
          "source": "src/Text-CSS-Parser.html#typeSelector",
          "type": "function"
        },
        "index": {
          "description": "selects tag name like h1",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "typeSelector",
          "normalized": "ParsecT[Char]a Identity[Char]",
          "package": "HandsomeSoup",
          "partial": "Selector",
          "signature": "ParsecT[Char]u Identity[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:typeSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003euniversal selector, selects \u003ccode\u003e * \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.CSS.Parser",
          "name": "universalSelector",
          "package": "HandsomeSoup",
          "signature": "ParsecT [Char] u Identity String",
          "source": "src/Text-CSS-Parser.html#universalSelector",
          "type": "function"
        },
        "index": {
          "description": "universal selector selects",
          "hierarchy": "Text CSS Parser",
          "module": "Text.CSS.Parser",
          "name": "universalSelector",
          "normalized": "ParsecT[Char]a Identity String",
          "package": "HandsomeSoup",
          "partial": "Selector",
          "signature": "ParsecT[Char]u Identity String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-CSS-Parser.html#v:universalSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HandsomeSoup",
          "name": "HandsomeSoup",
          "package": "HandsomeSoup",
          "source": "src/Text-HandsomeSoup.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text HandsomeSoup",
          "module": "Text.HandsomeSoup",
          "name": "HandsomeSoup",
          "package": "HandsomeSoup",
          "partial": "Handsome Soup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-HandsomeSoup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut for getting attributes. Example:\n\u003c/p\u003e\u003cpre\u003e doc \u003e\u003e\u003e css \"a\" ! \"href\"\n\u003c/pre\u003e",
          "module": "Text.HandsomeSoup",
          "name": "(!)",
          "package": "HandsomeSoup",
          "signature": "cat a XmlTree -\u003e String -\u003e cat a String",
          "source": "src/Text-HandsomeSoup.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Shortcut for getting attributes Example doc css href",
          "hierarchy": "Text HandsomeSoup",
          "module": "Text.HandsomeSoup",
          "name": "(!) !",
          "normalized": "a b XmlTree-\u003eString-\u003ea b String",
          "package": "HandsomeSoup",
          "signature": "cat a XmlTree-\u003eString-\u003ecat a String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-HandsomeSoup.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA css selector for getting elements from a document. Example:\n\u003c/p\u003e\u003cpre\u003e doc \u003e\u003e\u003e css \"#menu li\"\n\u003c/pre\u003e",
          "module": "Text.HandsomeSoup",
          "name": "css",
          "package": "HandsomeSoup",
          "signature": "[Char] -\u003e a (NTree XNode) (NTree XNode)",
          "source": "src/Text-HandsomeSoup.html#css",
          "type": "function"
        },
        "index": {
          "description": "css selector for getting elements from document Example doc css menu li",
          "hierarchy": "Text HandsomeSoup",
          "module": "Text.HandsomeSoup",
          "name": "css",
          "normalized": "[Char]-\u003ea(NTree XNode)(NTree XNode)",
          "package": "HandsomeSoup",
          "signature": "[Char]-\u003ea(NTree XNode)(NTree XNode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-HandsomeSoup.html#v:css"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a url, returns a document. Example:\n\u003c/p\u003e\u003cpre\u003e doc = fromUrl \"http://foo.com\"\n doc = fromUrl \"tests/test.html\"\n\u003c/pre\u003e",
          "module": "Text.HandsomeSoup",
          "name": "fromUrl",
          "package": "HandsomeSoup",
          "signature": "String -\u003e IOSArrow XmlTree (NTree XNode)",
          "source": "src/Text-HandsomeSoup.html#fromUrl",
          "type": "function"
        },
        "index": {
          "description": "Given url returns document Example doc fromUrl http foo.com doc fromUrl tests test.html",
          "hierarchy": "Text HandsomeSoup",
          "module": "Text.HandsomeSoup",
          "name": "fromUrl",
          "normalized": "String-\u003eIOSArrow XmlTree(NTree XNode)",
          "package": "HandsomeSoup",
          "partial": "Url",
          "signature": "String-\u003eIOSArrow XmlTree(NTree XNode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-HandsomeSoup.html#v:fromUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for getting page content. Example:\n\u003c/p\u003e\u003cpre\u003e contents \u003c- runMaybeT $ openUrl \"http://foo.com\"\n\u003c/pre\u003e",
          "module": "Text.HandsomeSoup",
          "name": "openUrl",
          "package": "HandsomeSoup",
          "signature": "String -\u003e MaybeT IO String",
          "source": "src/Text-HandsomeSoup.html#openUrl",
          "type": "function"
        },
        "index": {
          "description": "Helper function for getting page content Example contents runMaybeT openUrl http foo.com",
          "hierarchy": "Text HandsomeSoup",
          "module": "Text.HandsomeSoup",
          "name": "openUrl",
          "normalized": "String-\u003eMaybeT IO String",
          "package": "HandsomeSoup",
          "partial": "Url",
          "signature": "String-\u003eMaybeT IO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-HandsomeSoup.html#v:openUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a string, parses it and returns a document. Example:\n\u003c/p\u003e\u003cpre\u003e doc = parseHtml \"\u003ch1\u003ehello!\u003c/h1\u003e\"\n\u003c/pre\u003e",
          "module": "Text.HandsomeSoup",
          "name": "parseHtml",
          "package": "HandsomeSoup",
          "signature": "String -\u003e IOSArrow XmlTree (NTree XNode)",
          "source": "src/Text-HandsomeSoup.html#parseHtml",
          "type": "function"
        },
        "index": {
          "description": "Given string parses it and returns document Example doc parseHtml h1 hello h1",
          "hierarchy": "Text HandsomeSoup",
          "module": "Text.HandsomeSoup",
          "name": "parseHtml",
          "normalized": "String-\u003eIOSArrow XmlTree(NTree XNode)",
          "package": "HandsomeSoup",
          "partial": "Html",
          "signature": "String-\u003eIOSArrow XmlTree(NTree XNode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandsomeSoup/docs/Text-HandsomeSoup.html#v:parseHtml"
      }
    }
  ]
]