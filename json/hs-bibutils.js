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
        "word": "hs-bibutils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere is a simple program using hs-bibutils to conver a MODS\n collection into a bibtex file, sending the output to stdout:\n\u003c/p\u003e\u003cpre\u003e import Text.Bibutils\n\n main :: IO ()\n main = do\n   bibl  \u003c- bibl_init\n   param \u003c- bibl_initparams mods_in bibtex_out \"mods2bibtex\"\n   setFormatOpts param [bibout_brackets, bibout_uppercase]\n   setBOM        param\n   setVerbose    param\n   bibl_read     param bibl \"/path/to/bibtex.bib\"\n   bibl_write    param bibl \"-\"\n   bibl_free       bibl\n   bibl_freeparams param\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Bibutils",
          "name": "Bibutils",
          "package": "hs-bibutils",
          "source": "src/Text-Bibutils.html",
          "type": "module"
        },
        "index": {
          "description": "Here is simple program using hs-bibutils to conver MODS collection into bibtex file sending the output to stdout import Text.Bibutils main IO main do bibl bibl init param bibl initparams mods in bibtex out mods2bibtex setFormatOpts param bibout brackets bibout uppercase setBOM param setVerbose param bibl read param bibl path to bibtex.bib bibl write param bibl bibl free bibl bibl freeparams param",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "Bibutils",
          "package": "hs-bibutils",
          "partial": "Bibutils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for storing the C struct with the bibliography data.\n Mostly opaque to the Haskell side. See \u003ccode\u003e\u003ca\u003enumberOfRefs\u003c/a\u003e\u003c/code\u003e to retrieve\n the number of references stored in the struct.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "Bibl",
          "package": "hs-bibutils",
          "source": "src/Text-Bibutils.html#Bibl",
          "type": "data"
        },
        "index": {
          "description": "type for storing the struct with the bibliography data Mostly opaque to the Haskell side See numberOfRefs to retrieve the number of references stored in the struct",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "Bibl",
          "package": "hs-bibutils",
          "partial": "Bibl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:Bibl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "BiblioIn",
          "package": "hs-bibutils",
          "source": "src/Text-Bibutils.html#BiblioIn",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "BiblioIn",
          "package": "hs-bibutils",
          "partial": "Biblio In",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:BiblioIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "BiblioOut",
          "package": "hs-bibutils",
          "source": "src/Text-Bibutils.html#BiblioOut",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "BiblioOut",
          "package": "hs-bibutils",
          "partial": "Biblio Out",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:BiblioOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "Charset",
          "package": "hs-bibutils",
          "source": "src/Text-Bibutils.html#Charset",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "Charset",
          "package": "hs-bibutils",
          "partial": "Charset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:Charset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "FormatOpt",
          "package": "hs-bibutils",
          "source": "src/Text-Bibutils.html#FormatOpt",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "FormatOpt",
          "package": "hs-bibutils",
          "partial": "Format Opt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:FormatOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type for storing the Param C struct. It should be accessed with\n the functions provided, such as \u003ccode\u003e\u003ca\u003esetCharsetIn\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "Param",
          "package": "hs-bibutils",
          "source": "src/Text-Bibutils.html#Param",
          "type": "data"
        },
        "index": {
          "description": "type for storing the Param struct It should be accessed with the functions provided such as setCharsetIn etc",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "Param",
          "package": "hs-bibutils",
          "partial": "Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "Status",
          "package": "hs-bibutils",
          "source": "src/Text-Bibutils.html#Status",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "Status",
          "package": "hs-bibutils",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "Param",
          "package": "hs-bibutils",
          "signature": "Param",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "Param",
          "package": "hs-bibutils",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "addcount",
          "package": "hs-bibutils",
          "signature": "CInt",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "addcount",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:addcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "adsab_out",
          "package": "hs-bibutils",
          "signature": "BiblioOut",
          "source": "src/Text-Bibutils.html#adsab_out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "adsab_out",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:adsab_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_addtoasis",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e String -\u003e IO ()",
          "source": "src/Text-Bibutils.html#bibl_addtoasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_addtoasis",
          "normalized": "ForeignPtr Param-\u003eString-\u003eIO()",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_addtoasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_addtocorps",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e String -\u003e IO ()",
          "source": "src/Text-Bibutils.html#bibl_addtocorps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_addtocorps",
          "normalized": "ForeignPtr Param-\u003eString-\u003eIO()",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_addtocorps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_charset_default",
          "package": "hs-bibutils",
          "signature": "Charset",
          "source": "src/Text-Bibutils.html#bibl_charset_default",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_charset_default",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_charset_default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_charset_gb18030",
          "package": "hs-bibutils",
          "signature": "Charset",
          "source": "src/Text-Bibutils.html#bibl_charset_gb18030",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_charset_gb18030",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_charset_gb18030"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_charset_unicode",
          "package": "hs-bibutils",
          "signature": "Charset",
          "source": "src/Text-Bibutils.html#bibl_charset_unicode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_charset_unicode",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_charset_unicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_charset_unknown",
          "package": "hs-bibutils",
          "signature": "Charset",
          "source": "src/Text-Bibutils.html#bibl_charset_unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_charset_unknown",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_charset_unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_err_badinput",
          "package": "hs-bibutils",
          "signature": "Status",
          "source": "src/Text-Bibutils.html#bibl_err_badinput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_err_badinput",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_err_badinput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_err_cantopen",
          "package": "hs-bibutils",
          "signature": "Status",
          "source": "src/Text-Bibutils.html#bibl_err_cantopen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_err_cantopen",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_err_cantopen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_err_memerr",
          "package": "hs-bibutils",
          "signature": "Status",
          "source": "src/Text-Bibutils.html#bibl_err_memerr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_err_memerr",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_err_memerr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree the \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e C struct.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "bibl_free",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Bibl -\u003e IO ()",
          "source": "src/Text-Bibutils.html#bibl_free",
          "type": "function"
        },
        "index": {
          "description": "Free the Bibl struct",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_free",
          "normalized": "ForeignPtr Bibl-\u003eIO()",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Bibl-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree the \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e C struct.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "bibl_freeparams",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#bibl_freeparams",
          "type": "function"
        },
        "index": {
          "description": "Free the Param struct",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_freeparams",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_freeparams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e C struct. Usually the first function being\n called.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "bibl_init",
          "package": "hs-bibutils",
          "signature": "IO (ForeignPtr Bibl)",
          "source": "src/Text-Bibutils.html#bibl_init",
          "type": "function"
        },
        "index": {
          "description": "Initialize the Bibl struct Usually the first function being called",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_init",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e C struct, given the input bibliographic\n format, the output bibliographic format, and the program name to\n be used for displaying debugging information.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "bibl_initparams",
          "package": "hs-bibutils",
          "signature": "BiblioIn -\u003e BiblioOut -\u003e String -\u003e IO (ForeignPtr Param)",
          "source": "src/Text-Bibutils.html#bibl_initparams",
          "type": "function"
        },
        "index": {
          "description": "Initialize the Param struct given the input bibliographic format the output bibliographic format and the program name to be used for displaying debugging information",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_initparams",
          "normalized": "BiblioIn-\u003eBiblioOut-\u003eString-\u003eIO(ForeignPtr Param)",
          "package": "hs-bibutils",
          "signature": "BiblioIn-\u003eBiblioOut-\u003eString-\u003eIO(ForeignPtr Param)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_initparams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_ok",
          "package": "hs-bibutils",
          "signature": "Status",
          "source": "src/Text-Bibutils.html#bibl_ok",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_ok",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e C structure, a \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e C structure, the path to\n the input file (\u003ccode\u003e\"-\"\u003c/code\u003e for the standard input), read the file,\n storing the data in the \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e struct, and report a \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "bibl_read",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e ForeignPtr Bibl -\u003e FilePath -\u003e IO Status",
          "source": "src/Text-Bibutils.html#bibl_read",
          "type": "function"
        },
        "index": {
          "description": "Given Param structure Bibl structure the path to the input file for the standard input read the file storing the data in the Bibl struct and report Status",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_read",
          "normalized": "ForeignPtr Param-\u003eForeignPtr Bibl-\u003eFilePath-\u003eIO Status",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param-\u003eForeignPtr Bibl-\u003eFilePath-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_readasis",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e FilePath -\u003e IO ()",
          "source": "src/Text-Bibutils.html#bibl_readasis",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_readasis",
          "normalized": "ForeignPtr Param-\u003eFilePath-\u003eIO()",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_readasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_readcorps",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e FilePath -\u003e IO ()",
          "source": "src/Text-Bibutils.html#bibl_readcorps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_readcorps",
          "normalized": "ForeignPtr Param-\u003eFilePath-\u003eIO()",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_readcorps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibl_reporterr",
          "package": "hs-bibutils",
          "signature": "Status -\u003e IO ()",
          "source": "src/Text-Bibutils.html#bibl_reporterr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_reporterr",
          "normalized": "Status-\u003eIO()",
          "package": "hs-bibutils",
          "signature": "Status-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_reporterr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e C structure, a \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e C structure, the path to an\n output file (\u003ccode\u003e\"-\"\u003c/code\u003e for the standard output), write the file\n returning a \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "bibl_write",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e ForeignPtr Bibl -\u003e FilePath -\u003e IO Status",
          "source": "src/Text-Bibutils.html#bibl_write",
          "type": "function"
        },
        "index": {
          "description": "Given Param structure Bibl structure the path to an output file for the standard output write the file returning Status",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibl_write",
          "normalized": "ForeignPtr Param-\u003eForeignPtr Bibl-\u003eFilePath-\u003eIO Status",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param-\u003eForeignPtr Bibl-\u003eFilePath-\u003eIO Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "biblatex_in",
          "package": "hs-bibutils",
          "signature": "BiblioIn",
          "source": "src/Text-Bibutils.html#biblatex_in",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "biblatex_in",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:biblatex_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibout_brackets",
          "package": "hs-bibutils",
          "signature": "FormatOpt",
          "source": "src/Text-Bibutils.html#bibout_brackets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibout_brackets",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibout_finalcomma",
          "package": "hs-bibutils",
          "signature": "FormatOpt",
          "source": "src/Text-Bibutils.html#bibout_finalcomma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibout_finalcomma",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_finalcomma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibout_singledash",
          "package": "hs-bibutils",
          "signature": "FormatOpt",
          "source": "src/Text-Bibutils.html#bibout_singledash",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibout_singledash",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_singledash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibout_strictkey",
          "package": "hs-bibutils",
          "signature": "FormatOpt",
          "source": "src/Text-Bibutils.html#bibout_strictkey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibout_strictkey",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_strictkey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibout_uppercase",
          "package": "hs-bibutils",
          "signature": "FormatOpt",
          "source": "src/Text-Bibutils.html#bibout_uppercase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibout_uppercase",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_uppercase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibout_whitespace",
          "package": "hs-bibutils",
          "signature": "FormatOpt",
          "source": "src/Text-Bibutils.html#bibout_whitespace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibout_whitespace",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_whitespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibtex_in",
          "package": "hs-bibutils",
          "signature": "BiblioIn",
          "source": "src/Text-Bibutils.html#bibtex_in",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibtex_in",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibtex_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "bibtex_out",
          "package": "hs-bibutils",
          "signature": "BiblioOut",
          "source": "src/Text-Bibutils.html#bibtex_out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "bibtex_out",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibtex_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "charsetin",
          "package": "hs-bibutils",
          "signature": "CInt",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "charsetin",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:charsetin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "charsetin_src",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "charsetin_src",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:charsetin_src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "charsetout",
          "package": "hs-bibutils",
          "signature": "CInt",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "charsetout",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:charsetout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "charsetout_src",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "charsetout_src",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:charsetout_src"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "copac_in",
          "package": "hs-bibutils",
          "signature": "BiblioIn",
          "source": "src/Text-Bibutils.html#copac_in",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "copac_in",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:copac_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "endnote_in",
          "package": "hs-bibutils",
          "signature": "BiblioIn",
          "source": "src/Text-Bibutils.html#endnote_in",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "endnote_in",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:endnote_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "endnote_out",
          "package": "hs-bibutils",
          "signature": "BiblioOut",
          "source": "src/Text-Bibutils.html#endnote_out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "endnote_out",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:endnote_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "endnotexml_in",
          "package": "hs-bibutils",
          "signature": "BiblioIn",
          "source": "src/Text-Bibutils.html#endnotexml_in",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "endnotexml_in",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:endnotexml_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "format_opts",
          "package": "hs-bibutils",
          "signature": "CInt",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "format_opts",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:format_opts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "isi_in",
          "package": "hs-bibutils",
          "signature": "BiblioIn",
          "source": "src/Text-Bibutils.html#isi_in",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "isi_in",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:isi_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "isi_out",
          "package": "hs-bibutils",
          "signature": "BiblioOut",
          "source": "src/Text-Bibutils.html#isi_out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "isi_out",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:isi_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "latexin",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "latexin",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:latexin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "latexout",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "latexout",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:latexout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "medline_in",
          "package": "hs-bibutils",
          "signature": "BiblioIn",
          "source": "src/Text-Bibutils.html#medline_in",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "medline_in",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:medline_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "mods_in",
          "package": "hs-bibutils",
          "signature": "BiblioIn",
          "source": "src/Text-Bibutils.html#mods_in",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "mods_in",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:mods_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "mods_out",
          "package": "hs-bibutils",
          "signature": "BiblioOut",
          "source": "src/Text-Bibutils.html#mods_out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "mods_out",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:mods_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "modsout_dropkey",
          "package": "hs-bibutils",
          "signature": "FormatOpt",
          "source": "src/Text-Bibutils.html#modsout_dropkey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "modsout_dropkey",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:modsout_dropkey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "nosplittitle",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "nosplittitle",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:nosplittitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the number of references from a \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e C struct.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "numberOfRefs",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Bibl -\u003e IO Int",
          "source": "src/Text-Bibutils.html#numberOfRefs",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the number of references from Bibl struct",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "numberOfRefs",
          "normalized": "ForeignPtr Bibl-\u003eIO Int",
          "package": "hs-bibutils",
          "partial": "Of Refs",
          "signature": "ForeignPtr Bibl-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:numberOfRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "output_raw",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "output_raw",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:output_raw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "redaformat",
          "package": "hs-bibutils",
          "signature": "CInt",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "redaformat",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:redaformat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "ris_in",
          "package": "hs-bibutils",
          "signature": "BiblioIn",
          "source": "src/Text-Bibutils.html#ris_in",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "ris_in",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:ris_in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "ris_out",
          "package": "hs-bibutils",
          "signature": "BiblioOut",
          "source": "src/Text-Bibutils.html#ris_out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "ris_out",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:ris_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd reference count to reference id.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setAddcount",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setAddcount",
          "type": "function"
        },
        "index": {
          "description": "Add reference count to reference id",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setAddcount",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Addcount",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setAddcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite utf8 byte-order-mark.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setBOM",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setBOM",
          "type": "function"
        },
        "index": {
          "description": "Write utf8 byte-order-mark",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setBOM",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "BOM",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setBOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the input charset. Default is Latin-1 (ISO8859-1). See\n \u003ccode\u003e\u003ca\u003eCharset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setCharsetIn",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e Charset -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setCharsetIn",
          "type": "function"
        },
        "index": {
          "description": "Set the input charset Default is Latin-1 ISO8859-1 See Charset",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setCharsetIn",
          "normalized": "ForeignPtr Param-\u003eCharset-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Charset In",
          "signature": "ForeignPtr Param-\u003eCharset-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setCharsetIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the output charset.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setCharsetOut",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e Charset -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setCharsetOut",
          "type": "function"
        },
        "index": {
          "description": "Set the output charset",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setCharsetOut",
          "normalized": "ForeignPtr Param-\u003eCharset-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Charset Out",
          "signature": "ForeignPtr Param-\u003eCharset-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setCharsetOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet output format specific options. See \u003ccode\u003e\u003ca\u003eFormatOpt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setFormatOpts",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e [FormatOpt] -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setFormatOpts",
          "type": "function"
        },
        "index": {
          "description": "Set output format specific options See FormatOpt",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setFormatOpts",
          "normalized": "ForeignPtr Param-\u003e[FormatOpt]-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Format Opts",
          "signature": "ForeignPtr Param-\u003e[FormatOpt]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setFormatOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite Latex codes.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setLatexOut",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setLatexOut",
          "type": "function"
        },
        "index": {
          "description": "Write Latex codes",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setLatexOut",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Latex Out",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setLatexOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not split titles.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setNoSplitTitle",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setNoSplitTitle",
          "type": "function"
        },
        "index": {
          "description": "Do not split titles",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setNoSplitTitle",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "No Split Title",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setNoSplitTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet fields of the \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e C struct directly.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setParam",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e (Param -\u003e Param) -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setParam",
          "type": "function"
        },
        "index": {
          "description": "Set fields of the Param struct directly",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setParam",
          "normalized": "ForeignPtr Param-\u003e(Param-\u003eParam)-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Param",
          "signature": "ForeignPtr Param-\u003e(Param-\u003eParam)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput a single reference for each file.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setSinglerefperfile",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setSinglerefperfile",
          "type": "function"
        },
        "index": {
          "description": "Output single reference for each file",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setSinglerefperfile",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Singlerefperfile",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setSinglerefperfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerbose output.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setVerbose",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setVerbose",
          "type": "function"
        },
        "index": {
          "description": "Verbose output",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setVerbose",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Verbose",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite characters in XML entities.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "setXmlOut",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#setXmlOut",
          "type": "function"
        },
        "index": {
          "description": "Write characters in XML entities",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "setXmlOut",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Xml Out",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setXmlOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "singlerefperfile",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "singlerefperfile",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:singlerefperfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "status",
          "package": "hs-bibutils",
          "signature": "Status -\u003e CInt",
          "source": "src/Text-Bibutils.html#status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "status",
          "normalized": "Status-\u003eCInt",
          "package": "hs-bibutils",
          "signature": "Status-\u003eCInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "unsetAddcount",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#unsetAddcount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "unsetAddcount",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Addcount",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetAddcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "unsetBOM",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#unsetBOM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "unsetBOM",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "BOM",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetBOM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "unsetLatexOut",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#unsetLatexOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "unsetLatexOut",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Latex Out",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetLatexOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit titles.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "unsetNoSplitTitle",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#unsetNoSplitTitle",
          "type": "function"
        },
        "index": {
          "description": "Split titles",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "unsetNoSplitTitle",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "No Split Title",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetNoSplitTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "unsetSinglerefperfile",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#unsetSinglerefperfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "unsetSinglerefperfile",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Singlerefperfile",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetSinglerefperfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuppress verbose output.\n\u003c/p\u003e",
          "module": "Text.Bibutils",
          "name": "unsetVerbose",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#unsetVerbose",
          "type": "function"
        },
        "index": {
          "description": "Suppress verbose output",
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "unsetVerbose",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Verbose",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "unsetXmlOut",
          "package": "hs-bibutils",
          "signature": "ForeignPtr Param -\u003e IO ()",
          "source": "src/Text-Bibutils.html#unsetXmlOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "unsetXmlOut",
          "normalized": "ForeignPtr Param-\u003eIO()",
          "package": "hs-bibutils",
          "partial": "Xml Out",
          "signature": "ForeignPtr Param-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetXmlOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "utf8bom",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "utf8bom",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:utf8bom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "utf8in",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "utf8in",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:utf8in"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "utf8out",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "utf8out",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:utf8out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "verbose",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "verbose",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "word2007_out",
          "package": "hs-bibutils",
          "signature": "BiblioOut",
          "source": "src/Text-Bibutils.html#word2007_out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "word2007_out",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:word2007_out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "wordout_dropkey",
          "package": "hs-bibutils",
          "signature": "FormatOpt",
          "source": "src/Text-Bibutils.html#wordout_dropkey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "wordout_dropkey",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:wordout_dropkey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "writeformat",
          "package": "hs-bibutils",
          "signature": "CInt",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "writeformat",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:writeformat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "xmlin",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "xmlin",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:xmlin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Bibutils",
          "name": "xmlout",
          "package": "hs-bibutils",
          "signature": "CUChar",
          "source": "src/Text-Bibutils.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Bibutils",
          "module": "Text.Bibutils",
          "name": "xmlout",
          "package": "hs-bibutils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:xmlout"
      }
    }
  ]
]