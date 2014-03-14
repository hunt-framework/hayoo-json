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
        "word": "acme-strfry"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eByteString\u003c/code\u003e-based interface to \u003ccode\u003estrfry\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Acme.Strfry.ByteString",
          "name": "ByteString",
          "package": "acme-strfry",
          "source": "src/Acme-Strfry-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "The ByteString based interface to strfry",
          "hierarchy": "Acme Strfry ByteString",
          "module": "Acme.Strfry.ByteString",
          "name": "ByteString",
          "package": "acme-strfry",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-strfry/docs/Acme-Strfry-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estrfry s\u003c/code\u003e returns a pseudorandom anagram of \u003ccode\u003es\u003c/code\u003e. For more\n information, consult the glibc manual:\n \u003ca\u003ehttp://www.gnu.org/software/libc/manual/html_node/strfry.html\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Acme.Strfry.ByteString",
          "name": "strfry",
          "package": "acme-strfry",
          "signature": "ByteString -\u003e IO ByteString",
          "source": "src/Acme-Strfry-ByteString.html#strfry",
          "type": "function"
        },
        "index": {
          "description": "strfry returns pseudorandom anagram of For more information consult the glibc manual http www.gnu.org software libc manual html node strfry.html",
          "hierarchy": "Acme Strfry ByteString",
          "module": "Acme.Strfry.ByteString",
          "name": "strfry",
          "normalized": "ByteString-\u003eIO ByteString",
          "package": "acme-strfry",
          "signature": "ByteString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-strfry/docs/Acme-Strfry-ByteString.html#v:strfry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe raw FFI binding to \u003ccode\u003estrfry\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Acme.Strfry.Foreign",
          "name": "Foreign",
          "package": "acme-strfry",
          "source": "src/Acme-Strfry-Foreign.html",
          "type": "module"
        },
        "index": {
          "description": "The raw FFI binding to strfry",
          "hierarchy": "Acme Strfry Foreign",
          "module": "Acme.Strfry.Foreign",
          "name": "Foreign",
          "package": "acme-strfry",
          "partial": "Foreign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-strfry/docs/Acme-Strfry-Foreign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Acme.Strfry.Foreign",
          "name": "c_strfry",
          "package": "acme-strfry",
          "signature": "CString -\u003e IO CString",
          "source": "src/Acme-Strfry-Foreign.html#c_strfry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Acme Strfry Foreign",
          "module": "Acme.Strfry.Foreign",
          "name": "c_strfry",
          "normalized": "CString-\u003eIO CString",
          "package": "acme-strfry",
          "signature": "CString-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-strfry/docs/Acme-Strfry-Foreign.html#v:c_strfry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eString\u003c/code\u003e-based interface to \u003ccode\u003estrfry\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Acme.Strfry.String",
          "name": "String",
          "package": "acme-strfry",
          "source": "src/Acme-Strfry-String.html",
          "type": "module"
        },
        "index": {
          "description": "The String based interface to strfry",
          "hierarchy": "Acme Strfry String",
          "module": "Acme.Strfry.String",
          "name": "String",
          "package": "acme-strfry",
          "partial": "String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-strfry/docs/Acme-Strfry-String.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estrfry s\u003c/code\u003e returns a pseudorandom anagram of \u003ccode\u003es\u003c/code\u003e. For more\n information, consult the glibc manual:\n \u003ca\u003ehttp://www.gnu.org/software/libc/manual/html_node/strfry.html\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis interface is based on \u003ccode\u003eString\u003c/code\u003e, and is likely to behave\n unpredictably on codepoints above 255. The \u003ccode\u003eByteString\u003c/code\u003e-based\n interface in \u003ca\u003eAcme.Strfry.ByteString\u003c/a\u003e is recommended for serious use.\n\u003c/p\u003e",
          "module": "Acme.Strfry.String",
          "name": "strfry",
          "package": "acme-strfry",
          "signature": "String -\u003e IO String",
          "source": "src/Acme-Strfry-String.html#strfry",
          "type": "function"
        },
        "index": {
          "description": "strfry returns pseudorandom anagram of For more information consult the glibc manual http www.gnu.org software libc manual html node strfry.html This interface is based on String and is likely to behave unpredictably on codepoints above The ByteString based interface in Acme.Strfry.ByteString is recommended for serious use",
          "hierarchy": "Acme Strfry String",
          "module": "Acme.Strfry.String",
          "name": "strfry",
          "normalized": "String-\u003eIO String",
          "package": "acme-strfry",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/acme-strfry/docs/Acme-Strfry-String.html#v:strfry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module just re-exports the \u003ccode\u003eString\u003c/code\u003e-based interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Acme.Strfry",
          "name": "Strfry",
          "package": "acme-strfry",
          "source": "src/Acme-Strfry.html",
          "type": "module"
        },
        "index": {
          "description": "This module just re-exports the String based interface",
          "hierarchy": "Acme Strfry",
          "module": "Acme.Strfry",
          "name": "Strfry",
          "package": "acme-strfry",
          "partial": "Strfry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/acme-strfry/docs/Acme-Strfry.html#"
      }
    }
  ]
]