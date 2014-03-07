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
        "word": "xss-sanitize"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSanatize HTML to prevent XSS attacks.\n\u003c/p\u003e\u003cp\u003eSee README.md \u003ca\u003ehttp://github.com/gregwebs/haskell-xss-sanitize\u003c/a\u003e for more details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HTML.SanitizeXSS",
          "name": "SanitizeXSS",
          "package": "xss-sanitize",
          "source": "src/Text-HTML-SanitizeXSS.html",
          "type": "module"
        },
        "index": {
          "description": "Sanatize HTML to prevent XSS attacks See README.md http github.com gregwebs haskell-xss-sanitize for more details",
          "hierarchy": "Text HTML SanitizeXSS",
          "module": "Text.HTML.SanitizeXSS",
          "name": "SanitizeXSS",
          "package": "xss-sanitize",
          "partial": "Sanitize XSS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/xss-sanitize/docs/Text-HTML-SanitizeXSS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter which makes sure the tags are balanced.  Use with \u003ccode\u003e\u003ca\u003efilterTags\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esafeTags\u003c/a\u003e\u003c/code\u003e to create a custom filter.\n\u003c/p\u003e",
          "module": "Text.HTML.SanitizeXSS",
          "name": "balanceTags",
          "package": "xss-sanitize",
          "signature": "[Tag Text] -\u003e [Tag Text]",
          "source": "src/Text-HTML-SanitizeXSS.html#balanceTags",
          "type": "function"
        },
        "index": {
          "description": "Filter which makes sure the tags are balanced Use with filterTags and safeTags to create custom filter",
          "hierarchy": "Text HTML SanitizeXSS",
          "module": "Text.HTML.SanitizeXSS",
          "name": "balanceTags",
          "normalized": "[Tag Text]-\u003e[Tag Text]",
          "package": "xss-sanitize",
          "partial": "Tags",
          "signature": "[Tag Text]-\u003e[Tag Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xss-sanitize/docs/Text-HTML-SanitizeXSS.html#v:balanceTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given text to a list of tags, apply the given filtering function, and render back to HTML.\n   You can insert your own custom filtering but make sure you compose your filtering function with \u003ccode\u003e\u003ca\u003esafeTags\u003c/a\u003e\u003c/code\u003e!\n\u003c/p\u003e",
          "module": "Text.HTML.SanitizeXSS",
          "name": "filterTags",
          "package": "xss-sanitize",
          "signature": "([Tag Text] -\u003e [Tag Text]) -\u003e Text -\u003e Text",
          "source": "src/Text-HTML-SanitizeXSS.html#filterTags",
          "type": "function"
        },
        "index": {
          "description": "Parse the given text to list of tags apply the given filtering function and render back to HTML You can insert your own custom filtering but make sure you compose your filtering function with safeTags",
          "hierarchy": "Text HTML SanitizeXSS",
          "module": "Text.HTML.SanitizeXSS",
          "name": "filterTags",
          "normalized": "([Tag Text]-\u003e[Tag Text])-\u003eText-\u003eText",
          "package": "xss-sanitize",
          "partial": "Tags",
          "signature": "([Tag Text]-\u003e[Tag Text])-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xss-sanitize/docs/Text-HTML-SanitizeXSS.html#v:filterTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters out any usafe tags and attributes. Use with filterTags to create a custom filter.\n\u003c/p\u003e",
          "module": "Text.HTML.SanitizeXSS",
          "name": "safeTags",
          "package": "xss-sanitize",
          "signature": "[Tag Text] -\u003e [Tag Text]",
          "source": "src/Text-HTML-SanitizeXSS.html#safeTags",
          "type": "function"
        },
        "index": {
          "description": "Filters out any usafe tags and attributes Use with filterTags to create custom filter",
          "hierarchy": "Text HTML SanitizeXSS",
          "module": "Text.HTML.SanitizeXSS",
          "name": "safeTags",
          "normalized": "[Tag Text]-\u003e[Tag Text]",
          "package": "xss-sanitize",
          "partial": "Tags",
          "signature": "[Tag Text]-\u003e[Tag Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xss-sanitize/docs/Text-HTML-SanitizeXSS.html#v:safeTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSanitize HTML to prevent XSS attacks.  This is equivalent to \u003ccode\u003efilterTags safeTags\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.SanitizeXSS",
          "name": "sanitize",
          "package": "xss-sanitize",
          "signature": "Text -\u003e Text",
          "source": "src/Text-HTML-SanitizeXSS.html#sanitize",
          "type": "function"
        },
        "index": {
          "description": "Sanitize HTML to prevent XSS attacks This is equivalent to filterTags safeTags",
          "hierarchy": "Text HTML SanitizeXSS",
          "module": "Text.HTML.SanitizeXSS",
          "name": "sanitize",
          "normalized": "Text-\u003eText",
          "package": "xss-sanitize",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xss-sanitize/docs/Text-HTML-SanitizeXSS.html#v:sanitize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elow-level API if you have your own HTML parser. Used by safeTags.\n\u003c/p\u003e",
          "module": "Text.HTML.SanitizeXSS",
          "name": "sanitizeAttribute",
          "package": "xss-sanitize",
          "signature": "(Text, Text) -\u003e Maybe (Text, Text)",
          "source": "src/Text-HTML-SanitizeXSS.html#sanitizeAttribute",
          "type": "function"
        },
        "index": {
          "description": "low-level API if you have your own HTML parser Used by safeTags",
          "hierarchy": "Text HTML SanitizeXSS",
          "module": "Text.HTML.SanitizeXSS",
          "name": "sanitizeAttribute",
          "normalized": "(Text,Text)-\u003eMaybe(Text,Text)",
          "package": "xss-sanitize",
          "partial": "Attribute",
          "signature": "(Text,Text)-\u003eMaybe(Text,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xss-sanitize/docs/Text-HTML-SanitizeXSS.html#v:sanitizeAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSanitize HTML to prevent XSS attacks and also make sure the tags are balanced.\n   This is equivalent to \u003ccode\u003efilterTags (balanceTags . safeTags)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.HTML.SanitizeXSS",
          "name": "sanitizeBalance",
          "package": "xss-sanitize",
          "signature": "Text -\u003e Text",
          "source": "src/Text-HTML-SanitizeXSS.html#sanitizeBalance",
          "type": "function"
        },
        "index": {
          "description": "Sanitize HTML to prevent XSS attacks and also make sure the tags are balanced This is equivalent to filterTags balanceTags safeTags",
          "hierarchy": "Text HTML SanitizeXSS",
          "module": "Text.HTML.SanitizeXSS",
          "name": "sanitizeBalance",
          "normalized": "Text-\u003eText",
          "package": "xss-sanitize",
          "partial": "Balance",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xss-sanitize/docs/Text-HTML-SanitizeXSS.html#v:sanitizeBalance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealias of sanitize function\n\u003c/p\u003e",
          "module": "Text.HTML.SanitizeXSS",
          "name": "sanitizeXSS",
          "package": "xss-sanitize",
          "signature": "Text -\u003e Text",
          "source": "src/Text-HTML-SanitizeXSS.html#sanitizeXSS",
          "type": "function"
        },
        "index": {
          "description": "alias of sanitize function",
          "hierarchy": "Text HTML SanitizeXSS",
          "module": "Text.HTML.SanitizeXSS",
          "name": "sanitizeXSS",
          "normalized": "Text-\u003eText",
          "package": "xss-sanitize",
          "partial": "XSS",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/xss-sanitize/docs/Text-HTML-SanitizeXSS.html#v:sanitizeXSS"
      }
    }
  ]
]