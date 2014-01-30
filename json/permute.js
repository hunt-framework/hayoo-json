[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permute/docs/Text-ParserCombinators-Perm.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements permutation parsers, and is a generalisation\n of \u003ccode\u003eText.Parsec.Perm\u003c/code\u003e that will work with any parser combinator\n library.  The algorithm is described in:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eParsing Permutation Phrases,\u003c/em\u003e\n by Arthur Baars, Andres Loh and Doaitse Swierstra.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.ParserCombinators.Perm",
        "fct-package": "permute",
        "fct-signature": "module",
        "fct-source": "src/Text-ParserCombinators-Perm.html",
        "fct-type": "module",
        "title": "Perm"
      },
      "index": {
        "description": "This module implements permutation parsers and is generalisation of Text.Parsec.Perm that will work with any parser combinator library The algorithm is described in Parsing Permutation Phrases by Arthur Baars Andres Loh and Doaitse Swierstra",
        "hierarchy": "Text ParserCombinators Perm",
        "module": "Text.ParserCombinators.Perm",
        "name": "Perm",
        "normalized": "",
        "package": "permute",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permute/docs/Text-ParserCombinators-Perm.html#t:PermParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe type \u003ccode\u003ePermParser p a\u003c/code\u003e denotes a permutation parser that,\n when converted by the \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e function, parses \n \u003ccode\u003es\u003c/code\u003e streams with user state \u003ccode\u003est\u003c/code\u003e and returns a value of\n type \u003ccode\u003ea\u003c/code\u003e on success.\n\u003c/p\u003e\u003cp\u003eNormally, a permutation parser is first build with special operators\n like (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) and than transformed into a normal parser\n using \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Perm",
        "fct-package": "permute",
        "fct-signature": "data",
        "fct-source": "src/Text-ParserCombinators-Perm.html#PermParser",
        "fct-type": "data",
        "title": "PermParser"
      },
      "index": {
        "description": "The type PermParser denotes permutation parser that when converted by the permute function parses streams with user state st and returns value of type on success Normally permutation parser is first build with special operators like and than transformed into normal parser using permute",
        "hierarchy": "Text ParserCombinators Perm",
        "module": "Text.ParserCombinators.Perm",
        "name": "PermParser",
        "normalized": "",
        "package": "permute",
        "partial": "Perm Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permute/docs/Text-ParserCombinators-Perm.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e p\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the permutation\n parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input -\n use the optional combinator (\u003ccode\u003e\u003ca\u003e\u003c|?\u003e\u003c/a\u003e\u003c/code\u003e) instead. Returns a\n new permutation parser that includes \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Perm",
        "fct-package": "permute",
        "fct-signature": "PermParser p (a -\u003e b) -\u003e p a -\u003e PermParser p b",
        "fct-source": "src/Text-ParserCombinators-Perm.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "The expression perm adds parser to the permutation parser perm The parser is not allowed to accept empty input use the optional combinator instead Returns new permutation parser that includes",
        "hierarchy": "Text ParserCombinators Perm",
        "module": "Text.ParserCombinators.Perm",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "PermParser a(b-\u003ec)-\u003ea b-\u003ePermParser a c",
        "package": "permute",
        "partial": "",
        "signature": "PermParser p(a-\u003eb)-\u003ep a-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permute/docs/Text-ParserCombinators-Perm.html#v:-60--124--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e (x,p)\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the\n permutation parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can\n not be applied, the default value \u003ccode\u003ex\u003c/code\u003e will be used instead. Returns\n a new permutation parser that includes the optional parser \u003ccode\u003ep\u003c/code\u003e. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Perm",
        "fct-package": "permute",
        "fct-signature": "PermParser p (a -\u003e b) -\u003e (a, p a) -\u003e PermParser p b",
        "fct-source": "src/Text-ParserCombinators-Perm.html#%3C%7C%3F%3E",
        "fct-type": "function",
        "title": "(\u003c|?\u003e)"
      },
      "index": {
        "description": "The expression perm adds parser to the permutation parser perm The parser is optional if it can not be applied the default value will be used instead Returns new permutation parser that includes the optional parser",
        "hierarchy": "Text ParserCombinators Perm",
        "module": "Text.ParserCombinators.Perm",
        "name": "(\u003c|?\u003e) \u003c|?\u003e",
        "normalized": "PermParser a(b-\u003ec)-\u003e(b,a b)-\u003ePermParser a c",
        "package": "permute",
        "partial": "",
        "signature": "PermParser p(a-\u003eb)-\u003e(a,p a)-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permute/docs/Text-ParserCombinators-Perm.html#v:-60--36--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$$\u003e p\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input - use the optional\n combinator (\u003ccode\u003e\u003ca\u003e\u003c$?\u003e\u003c/a\u003e\u003c/code\u003e) instead.\n\u003c/p\u003e\u003cp\u003eIf the function \u003ccode\u003ef\u003c/code\u003e takes more than one parameter, the type variable\n \u003ccode\u003eb\u003c/code\u003e is instantiated to a functional type which combines nicely with\n the adds parser \u003ccode\u003ep\u003c/code\u003e to the (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) combinator. This\n results in stylized code where a permutation parser starts with a\n combining function \u003ccode\u003ef\u003c/code\u003e followed by the parsers. The function \u003ccode\u003ef\u003c/code\u003e\n gets its parameters in the order in which the parsers are specified,\n but actual input can be in any order.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Perm",
        "fct-package": "permute",
        "fct-signature": "(a -\u003e b) -\u003e p a -\u003e PermParser p b",
        "fct-source": "src/Text-ParserCombinators-Perm.html#%3C%24%24%3E",
        "fct-type": "function",
        "title": "(\u003c$$\u003e)"
      },
      "index": {
        "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is not allowed to accept empty input use the optional combinator instead If the function takes more than one parameter the type variable is instantiated to functional type which combines nicely with the adds parser to the combinator This results in stylized code where permutation parser starts with combining function followed by the parsers The function gets its parameters in the order in which the parsers are specified but actual input can be in any order",
        "hierarchy": "Text ParserCombinators Perm",
        "module": "Text.ParserCombinators.Perm",
        "name": "(\u003c$$\u003e) \u003c$$\u003e",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ePermParser c b",
        "package": "permute",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ep a-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permute/docs/Text-ParserCombinators-Perm.html#v:-60--36--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$?\u003e (x,p)\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can not be applied, the default value\n \u003ccode\u003ex\u003c/code\u003e will be used instead. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Perm",
        "fct-package": "permute",
        "fct-signature": "(a -\u003e b) -\u003e (a, p a) -\u003e PermParser p b",
        "fct-source": "src/Text-ParserCombinators-Perm.html#%3C%24%3F%3E",
        "fct-type": "function",
        "title": "(\u003c$?\u003e)"
      },
      "index": {
        "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is optional if it can not be applied the default value will be used instead",
        "hierarchy": "Text ParserCombinators Perm",
        "module": "Text.ParserCombinators.Perm",
        "name": "(\u003c$?\u003e) \u003c$?\u003e",
        "normalized": "(a-\u003eb)-\u003e(a,c a)-\u003ePermParser c b",
        "package": "permute",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(a,p a)-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/permute/docs/Text-ParserCombinators-Perm.html#v:permute",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003epermute perm\u003c/code\u003e parses a permutation of parser described\n by \u003ccode\u003eperm\u003c/code\u003e. For example, suppose we want to parse a permutation of:\n an optional string of \u003ccode\u003ea\u003c/code\u003e's, the character \u003ccode\u003eb\u003c/code\u003e and an optional \u003ccode\u003ec\u003c/code\u003e.\n This can be described by:\n\u003c/p\u003e\u003cpre\u003e  test  = permute (tuple \u003c$?\u003e (\"\",many1 (char 'a'))\n                         \u003c||\u003e char 'b' \n                         \u003c|?\u003e ('_',char 'c'))\n        where\n          tuple a b c  = (a,b,c)\n\u003c/pre\u003e",
        "fct-module": "Text.ParserCombinators.Perm",
        "fct-package": "permute",
        "fct-signature": "PermParser p a -\u003e p a",
        "fct-source": "src/Text-ParserCombinators-Perm.html#permute",
        "fct-type": "function",
        "title": "permute"
      },
      "index": {
        "description": "The parser permute perm parses permutation of parser described by perm For example suppose we want to parse permutation of an optional string of the character and an optional This can be described by test permute tuple many1 char char char where tuple",
        "hierarchy": "Text ParserCombinators Perm",
        "module": "Text.ParserCombinators.Perm",
        "name": "permute",
        "normalized": "PermParser a b-\u003ea b",
        "package": "permute",
        "partial": "",
        "signature": "PermParser p a-\u003ep a"
      }
    }
  }
]