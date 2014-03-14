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
        "word": "acme-dont"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Acme.Dont module provides the indispensable don't command,\n ported from Perl.\n\u003c/p\u003e\u003cp\u003eFor more information see influential documentation:\n \u003ca\u003ehttp://search.cpan.org/~dconway/Acme-Don-t-1.01/t.pm\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eUsage:\n\u003c/p\u003e\u003cpre\u003e main = don't $ do\n     name \u003c- getLine\n     putStrLn $ \"hello \" ++ name\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Acme.Dont",
          "name": "Dont",
          "package": "acme-dont",
          "source": "src/Acme-Dont.html",
          "type": "module"
        },
        "index": {
          "description": "The Acme.Dont module provides the indispensable don command ported from Perl For more information see influential documentation http search.cpan.org dconway Acme-Don-t-1.01 t.pm Usage main don do name getLine putStrLn hello name",
          "hierarchy": "Acme Dont",
          "module": "Acme.Dont",
          "name": "Dont",
          "package": "acme-dont",
          "partial": "Dont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-dont/docs/Acme-Dont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Acme.Dont module provides a don't command, which is the\n opposite of Haskell's built-in do.  It is used exactly like the do\n monadic construct except that, instead of executing the block it\n controls, it... well... doesn't.\n\u003c/p\u003e\u003cp\u003eRegardless of the contents of the block, don't returns ().\n\u003c/p\u003e",
          "module": "Acme.Dont",
          "name": "don't",
          "package": "acme-dont",
          "signature": "m a -\u003e m ()",
          "source": "src/Acme-Dont.html#don%27t",
          "type": "function"
        },
        "index": {
          "description": "The Acme.Dont module provides don command which is the opposite of Haskell built-in do It is used exactly like the do monadic construct except that instead of executing the block it controls it well doesn Regardless of the contents of the block don returns",
          "hierarchy": "Acme Dont",
          "module": "Acme.Dont",
          "name": "don't",
          "normalized": "a b-\u003ea()",
          "package": "acme-dont",
          "signature": "m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-dont/docs/Acme-Dont.html#v:don-39-t"
      }
    }
  ]
]