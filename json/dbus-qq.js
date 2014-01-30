[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbus-qq/docs/DBus-QuasiQuoter.html#",
      "description": {
        "fct-module": "DBus.QuasiQuoter",
        "fct-package": "dbus-qq",
        "fct-signature": "module",
        "fct-source": "src/DBus-QuasiQuoter.html",
        "fct-type": "module",
        "title": "QuasiQuoter"
      },
      "index": {
        "description": "",
        "hierarchy": "DBus QuasiQuoter",
        "module": "DBus.QuasiQuoter",
        "name": "QuasiQuoter",
        "normalized": "",
        "package": "dbus-qq",
        "partial": "Quasi Quoter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbus-qq/docs/DBus-QuasiQuoter.html#v:dbus",
      "description": {
        "fct-descr": "\u003cp\u003eA quasi-quoter to convert a function of type \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e] -\u003e\n [\u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e into a function of a specified static type.\n\u003c/p\u003e\u003cp\u003eThis quasi-quoter takes a signature of the form:\n\u003c/p\u003e\u003cpre\u003e\n   \u003cdbus types\u003e -\u003e \u003cdbus types\u003e\n\u003c/pre\u003e\u003cp\u003eTypes on the left of the arrow correspond to argument types, while those on\n the right are return types.\n\u003c/p\u003e\u003cp\u003eThe result is a combinator which takes any function of type [\u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e] -\u003e\n [\u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e], assumes that its arguments and results are of the specified\n number and types, and returns a function of the corresponding static type.\n\u003c/p\u003e\u003cp\u003eFor example, if \u003ccode\u003ef :: [\u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e] -\u003e [\u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e,\n\u003c/p\u003e\u003cpre\u003e\n   [\u003ccode\u003e\u003ca\u003edbus\u003c/a\u003e\u003c/code\u003e| i s -\u003e s a{uv} |] f\n\u003c/pre\u003e\u003cp\u003ehas type\n\u003c/p\u003e\u003cpre\u003e\n   Int -\u003e String -\u003e (String, \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord32\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e",
        "fct-module": "DBus.QuasiQuoter",
        "fct-package": "dbus-qq",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/DBus-QuasiQuoter.html#dbus",
        "fct-type": "function",
        "title": "dbus"
      },
      "index": {
        "description": "quasi-quoter to convert function of type Variant Variant into function of specified static type This quasi-quoter takes signature of the form dbus types dbus types Types on the left of the arrow correspond to argument types while those on the right are return types The result is combinator which takes any function of type Variant Variant assumes that its arguments and results are of the specified number and types and returns function of the corresponding static type For example if Variant Variant dbus uv has type Int String String Map Word32 Variant",
        "hierarchy": "DBus QuasiQuoter",
        "module": "DBus.QuasiQuoter",
        "name": "dbus",
        "normalized": "",
        "package": "dbus-qq",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/dbus-qq/docs/DBus-QuasiQuoter.html#v:dbusF",
      "description": {
        "fct-descr": "\u003cp\u003eA generalized version of the \u003ccode\u003e\u003ca\u003edbus\u003c/a\u003e\u003c/code\u003e quasi-quoter which works on functions of\n type \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e] -\u003e f [\u003ccode\u003e\u003ca\u003eVariant\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e, for any \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DBus.QuasiQuoter",
        "fct-package": "dbus-qq",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/DBus-QuasiQuoter.html#dbusF",
        "fct-type": "function",
        "title": "dbusF"
      },
      "index": {
        "description": "generalized version of the dbus quasi-quoter which works on functions of type Variant Variant for any Functor",
        "hierarchy": "DBus QuasiQuoter",
        "module": "DBus.QuasiQuoter",
        "name": "dbusF",
        "normalized": "",
        "package": "dbus-qq",
        "partial": "",
        "signature": ""
      }
    }
  }
]