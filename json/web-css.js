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
        "word": "web-css"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.CSS.Escaping",
          "name": "Escaping",
          "package": "web-css",
          "source": "src/Web-CSS-Escaping.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web CSS Escaping",
          "module": "Web.CSS.Escaping",
          "name": "Escaping",
          "package": "web-css",
          "partial": "Escaping",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/web-css/docs/Web-CSS-Escaping.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape a CSS identifier. This function is slightly more\n permissive than the CSS standard. For example, it does not reject\n identifiers that begin with two hyphens. The function always\n escapes \u003ccode\u003especial\u003c/code\u003e characters such as the tilde (\u003ccode\u003e~\u003c/code\u003e) or left\n bracket (\u003ccode\u003e[\u003c/code\u003e). As such, they will never be interpreted as special\n characters.\n\u003c/p\u003e",
          "module": "Web.CSS.Escaping",
          "name": "escapeIdentifier",
          "package": "web-css",
          "signature": "Text -\u003e Text",
          "source": "src/Web-CSS-Escaping.html#escapeIdentifier",
          "type": "function"
        },
        "index": {
          "description": "Escape CSS identifier This function is slightly more permissive than the CSS standard For example it does not reject identifiers that begin with two hyphens The function always escapes special characters such as the tilde or left bracket As such they will never be interpreted as special characters",
          "hierarchy": "Web CSS Escaping",
          "module": "Web.CSS.Escaping",
          "name": "escapeIdentifier",
          "normalized": "Text-\u003eText",
          "package": "web-css",
          "partial": "Identifier",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-css/docs/Web-CSS-Escaping.html#v:escapeIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape a CSS string value. This function is conservative and\n produces only output characters in the US-ASCII range. This comes\n at the cost of space usage, so this function should not be used to\n encode strings expected to contain a disproportionate amount of\n non-US-ASCII characters.\n\u003c/p\u003e",
          "module": "Web.CSS.Escaping",
          "name": "escapeString",
          "package": "web-css",
          "signature": "Text -\u003e Text",
          "source": "src/Web-CSS-Escaping.html#escapeString",
          "type": "function"
        },
        "index": {
          "description": "Escape CSS string value This function is conservative and produces only output characters in the US-ASCII range This comes at the cost of space usage so this function should not be used to encode strings expected to contain disproportionate amount of non-US-ASCII characters",
          "hierarchy": "Web CSS Escaping",
          "module": "Web.CSS.Escaping",
          "name": "escapeString",
          "normalized": "Text-\u003eText",
          "package": "web-css",
          "partial": "String",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/web-css/docs/Web-CSS-Escaping.html#v:escapeString"
      }
    }
  ]
]