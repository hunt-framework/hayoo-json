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
        "word": "zenc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Z-encoding\n\u003c/p\u003e\u003cp\u003eThis is the main name-encoding and decoding function.  It encodes any\nstring into a string that is acceptable as a C name.  This is done\nright before we emit a symbol name into the compiled C or asm code.\nZ-encoding of strings is cached in the FastString interface, so we\nnever encode the same string more than once.\n\u003c/p\u003e\u003cp\u003eThe basic encoding scheme is this.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Tuples (,,,) are coded as Z3T\n\u003c/li\u003e\u003cli\u003e Alphabetic characters (upper and lower) and digits\n        all translate to themselves;\n        except \u003ccode\u003eZ\u003c/code\u003e, which translates to \u003ccode\u003eZZ\u003c/code\u003e\n        and    \u003ccode\u003ez\u003c/code\u003e, which translates to \u003ccode\u003ezz\u003c/code\u003e\n  We need both so that we can preserve the variable/tycon distinction\n\u003c/li\u003e\u003cli\u003e Most other printable characters translate to \u003ccode\u003ezx\u003c/code\u003e or \u003ccode\u003eZx\u003c/code\u003e for some\n        alphabetic character x\n\u003c/li\u003e\u003cli\u003e The others translate as \u003ccode\u003eznnnU\u003c/code\u003e where \u003ccode\u003ennn\u003c/code\u003e is the decimal number\n        of the character\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\n        Before          After\n        --------------------------\n        Trak            Trak\n        foo_wib         foozuwib\n        \u003e               zg\n        \u003e1              zg1\n        foo#            foozh\n        foo##           foozhzh\n        foo##1          foozhzh1\n        fooZ            fooZZ\n        :+              ZCzp\n        ()              Z0T     0-tuple\n        (,,,,)          Z5T     5-tuple\n        (# #)           Z1H     unboxed 1-tuple (note the space)\n        (#,,,,#)        Z5H     unboxed 5-tuple\n                (NB: There is no Z1T nor Z0H.)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Encoding.Z",
          "name": "Z",
          "package": "zenc",
          "source": "src/Text-Encoding-Z.html",
          "type": "module"
        },
        "index": {
          "description": "The Z-encoding This is the main name-encoding and decoding function It encodes any string into string that is acceptable as name This is done right before we emit symbol name into the compiled or asm code Z-encoding of strings is cached in the FastString interface so we never encode the same string more than once The basic encoding scheme is this Tuples are coded as Z3T Alphabetic characters upper and lower and digits all translate to themselves except which translates to ZZ and which translates to zz We need both so that we can preserve the variable tycon distinction Most other printable characters translate to zx or Zx for some alphabetic character The others translate as znnnU where nnn is the decimal number of the character Before After Trak Trak foo wib foozuwib zg zg1 foo foozh foo foozhzh foo foozhzh1 fooZ fooZZ ZCzp Z0T tuple Z5T tuple Z1H unboxed tuple note the space Z5H unboxed tuple NB There is no Z1T nor Z0H",
          "hierarchy": "Text Encoding Z",
          "module": "Text.Encoding.Z",
          "name": "Z",
          "package": "zenc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zenc/docs/Text-Encoding-Z.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Encoding.Z",
          "name": "EncodedString",
          "package": "zenc",
          "source": "src/Text-Encoding-Z.html#EncodedString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Encoding Z",
          "module": "Text.Encoding.Z",
          "name": "EncodedString",
          "package": "zenc",
          "partial": "Encoded String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zenc/docs/Text-Encoding-Z.html#t:EncodedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Encoding.Z",
          "name": "UserString",
          "package": "zenc",
          "source": "src/Text-Encoding-Z.html#UserString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Encoding Z",
          "module": "Text.Encoding.Z",
          "name": "UserString",
          "package": "zenc",
          "partial": "User String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/zenc/docs/Text-Encoding-Z.html#t:UserString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Encoding.Z",
          "name": "zDecodeString",
          "package": "zenc",
          "signature": "EncodedString -\u003e UserString",
          "source": "src/Text-Encoding-Z.html#zDecodeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Encoding Z",
          "module": "Text.Encoding.Z",
          "name": "zDecodeString",
          "normalized": "EncodedString-\u003eUserString",
          "package": "zenc",
          "partial": "Decode String",
          "signature": "EncodedString-\u003eUserString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zenc/docs/Text-Encoding-Z.html#v:zDecodeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Encoding.Z",
          "name": "zEncodeString",
          "package": "zenc",
          "signature": "UserString -\u003e EncodedString",
          "source": "src/Text-Encoding-Z.html#zEncodeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Encoding Z",
          "module": "Text.Encoding.Z",
          "name": "zEncodeString",
          "normalized": "UserString-\u003eEncodedString",
          "package": "zenc",
          "partial": "Encode String",
          "signature": "UserString-\u003eEncodedString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zenc/docs/Text-Encoding-Z.html#v:zEncodeString"
      }
    }
  ]
]