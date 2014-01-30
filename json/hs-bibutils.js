[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHere is a simple program using hs-bibutils to conver a MODS\n collection into a bibtex file, sending the output to stdout:\n\u003c/p\u003e\u003cpre\u003e import Text.Bibutils\n\n main :: IO ()\n main = do\n   bibl  \u003c- bibl_init\n   param \u003c- bibl_initparams mods_in bibtex_out \"mods2bibtex\"\n   setFormatOpts param [bibout_brackets, bibout_uppercase]\n   setBOM        param\n   setVerbose    param\n   bibl_read     param bibl \"/path/to/bibtex.bib\"\n   bibl_write    param bibl \"-\"\n   bibl_free       bibl\n   bibl_freeparams param\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "module",
        "fct-source": "src/Text-Bibutils.html",
        "fct-type": "module",
        "title": "Bibutils"
      },
      "index": {
        "description": "Here is simple program using hs-bibutils to conver MODS collection into bibtex file sending the output to stdout import Text.Bibutils main IO main do bibl bibl init param bibl initparams mods in bibtex out mods2bibtex setFormatOpts param bibout brackets bibout uppercase setBOM param setVerbose param bibl read param bibl path to bibtex.bib bibl write param bibl bibl free bibl bibl freeparams param",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "Bibutils",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "Bibutils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:Bibl",
      "description": {
        "fct-descr": "\u003cp\u003eA type for storing the C struct with the bibliography data.\n Mostly opaque to the Haskell side. See \u003ccode\u003e\u003ca\u003enumberOfRefs\u003c/a\u003e\u003c/code\u003e to retrieve\n the number of references stored in the struct.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "data",
        "fct-source": "src/Text-Bibutils.html#Bibl",
        "fct-type": "data",
        "title": "Bibl"
      },
      "index": {
        "description": "type for storing the struct with the bibliography data Mostly opaque to the Haskell side See numberOfRefs to retrieve the number of references stored in the struct",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "Bibl",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "Bibl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:BiblioIn",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "data",
        "fct-source": "src/Text-Bibutils.html#BiblioIn",
        "fct-type": "data",
        "title": "BiblioIn"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "BiblioIn",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "Biblio In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:BiblioOut",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "data",
        "fct-source": "src/Text-Bibutils.html#BiblioOut",
        "fct-type": "data",
        "title": "BiblioOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "BiblioOut",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "Biblio Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:Charset",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "data",
        "fct-source": "src/Text-Bibutils.html#Charset",
        "fct-type": "data",
        "title": "Charset"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "Charset",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "Charset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:FormatOpt",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "data",
        "fct-source": "src/Text-Bibutils.html#FormatOpt",
        "fct-type": "data",
        "title": "FormatOpt"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "FormatOpt",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "Format Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:Param",
      "description": {
        "fct-descr": "\u003cp\u003eA type for storing the Param C struct. It should be accessed with\n the functions provided, such as \u003ccode\u003e\u003ca\u003esetCharsetIn\u003c/a\u003e\u003c/code\u003e, etc.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "data",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "data",
        "title": "Param"
      },
      "index": {
        "description": "type for storing the Param struct It should be accessed with the functions provided such as setCharsetIn etc",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "Param",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#t:Status",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "data",
        "fct-source": "src/Text-Bibutils.html#Status",
        "fct-type": "data",
        "title": "Status"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "Status",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:Param",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Param",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "Param",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:addcount",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CInt",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "addcount"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "addcount",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:adsab_out",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioOut",
        "fct-source": "src/Text-Bibutils.html#adsab_out",
        "fct-type": "function",
        "title": "adsab_out"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "adsab_out",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_addtoasis",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e String -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#bibl_addtoasis",
        "fct-type": "function",
        "title": "bibl_addtoasis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_addtoasis",
        "normalized": "ForeignPtr Param-\u003eString-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "ForeignPtr Param-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_addtocorps",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e String -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#bibl_addtocorps",
        "fct-type": "function",
        "title": "bibl_addtocorps"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_addtocorps",
        "normalized": "ForeignPtr Param-\u003eString-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "ForeignPtr Param-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_charset_default",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Charset",
        "fct-source": "src/Text-Bibutils.html#bibl_charset_default",
        "fct-type": "function",
        "title": "bibl_charset_default"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_charset_default",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_charset_gb18030",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Charset",
        "fct-source": "src/Text-Bibutils.html#bibl_charset_gb18030",
        "fct-type": "function",
        "title": "bibl_charset_gb18030"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_charset_gb18030",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_charset_unicode",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Charset",
        "fct-source": "src/Text-Bibutils.html#bibl_charset_unicode",
        "fct-type": "function",
        "title": "bibl_charset_unicode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_charset_unicode",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_charset_unknown",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Charset",
        "fct-source": "src/Text-Bibutils.html#bibl_charset_unknown",
        "fct-type": "function",
        "title": "bibl_charset_unknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_charset_unknown",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_err_badinput",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Status",
        "fct-source": "src/Text-Bibutils.html#bibl_err_badinput",
        "fct-type": "function",
        "title": "bibl_err_badinput"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_err_badinput",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_err_cantopen",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Status",
        "fct-source": "src/Text-Bibutils.html#bibl_err_cantopen",
        "fct-type": "function",
        "title": "bibl_err_cantopen"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_err_cantopen",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_err_memerr",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Status",
        "fct-source": "src/Text-Bibutils.html#bibl_err_memerr",
        "fct-type": "function",
        "title": "bibl_err_memerr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_err_memerr",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_free",
      "description": {
        "fct-descr": "\u003cp\u003eFree the \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e C struct.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Bibl -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#bibl_free",
        "fct-type": "function",
        "title": "bibl_free"
      },
      "index": {
        "description": "Free the Bibl struct",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_free",
        "normalized": "ForeignPtr Bibl-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "ForeignPtr Bibl-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_freeparams",
      "description": {
        "fct-descr": "\u003cp\u003eFree the \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e C struct.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#bibl_freeparams",
        "fct-type": "function",
        "title": "bibl_freeparams"
      },
      "index": {
        "description": "Free the Param struct",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_freeparams",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_init",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e C struct. Usually the first function being\n called.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "IO (ForeignPtr Bibl)",
        "fct-source": "src/Text-Bibutils.html#bibl_init",
        "fct-type": "function",
        "title": "bibl_init"
      },
      "index": {
        "description": "Initialize the Bibl struct Usually the first function being called",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_init",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_initparams",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize the \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e C struct, given the input bibliographic\n format, the output bibliographic format, and the program name to\n be used for displaying debugging information.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioIn -\u003e BiblioOut -\u003e String -\u003e IO (ForeignPtr Param)",
        "fct-source": "src/Text-Bibutils.html#bibl_initparams",
        "fct-type": "function",
        "title": "bibl_initparams"
      },
      "index": {
        "description": "Initialize the Param struct given the input bibliographic format the output bibliographic format and the program name to be used for displaying debugging information",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_initparams",
        "normalized": "BiblioIn-\u003eBiblioOut-\u003eString-\u003eIO(ForeignPtr Param)",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "BiblioIn-\u003eBiblioOut-\u003eString-\u003eIO(ForeignPtr Param)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_ok",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Status",
        "fct-source": "src/Text-Bibutils.html#bibl_ok",
        "fct-type": "function",
        "title": "bibl_ok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_ok",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_read",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e C structure, a \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e C structure, the path to\n the input file (\u003ccode\u003e\"-\"\u003c/code\u003e for the standard input), read the file,\n storing the data in the \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e struct, and report a \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e ForeignPtr Bibl -\u003e FilePath -\u003e IO Status",
        "fct-source": "src/Text-Bibutils.html#bibl_read",
        "fct-type": "function",
        "title": "bibl_read"
      },
      "index": {
        "description": "Given Param structure Bibl structure the path to the input file for the standard input read the file storing the data in the Bibl struct and report Status",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_read",
        "normalized": "ForeignPtr Param-\u003eForeignPtr Bibl-\u003eFilePath-\u003eIO Status",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "ForeignPtr Param-\u003eForeignPtr Bibl-\u003eFilePath-\u003eIO Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_readasis",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#bibl_readasis",
        "fct-type": "function",
        "title": "bibl_readasis"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_readasis",
        "normalized": "ForeignPtr Param-\u003eFilePath-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "ForeignPtr Param-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_readcorps",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#bibl_readcorps",
        "fct-type": "function",
        "title": "bibl_readcorps"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_readcorps",
        "normalized": "ForeignPtr Param-\u003eFilePath-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "ForeignPtr Param-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_reporterr",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Status -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#bibl_reporterr",
        "fct-type": "function",
        "title": "bibl_reporterr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_reporterr",
        "normalized": "Status-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "Status-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibl_write",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e C structure, a \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e C structure, the path to an\n output file (\u003ccode\u003e\"-\"\u003c/code\u003e for the standard output), write the file\n returning a \u003ccode\u003e\u003ca\u003eStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e ForeignPtr Bibl -\u003e FilePath -\u003e IO Status",
        "fct-source": "src/Text-Bibutils.html#bibl_write",
        "fct-type": "function",
        "title": "bibl_write"
      },
      "index": {
        "description": "Given Param structure Bibl structure the path to an output file for the standard output write the file returning Status",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibl_write",
        "normalized": "ForeignPtr Param-\u003eForeignPtr Bibl-\u003eFilePath-\u003eIO Status",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "ForeignPtr Param-\u003eForeignPtr Bibl-\u003eFilePath-\u003eIO Status"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:biblatex_in",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioIn",
        "fct-source": "src/Text-Bibutils.html#biblatex_in",
        "fct-type": "function",
        "title": "biblatex_in"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "biblatex_in",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_brackets",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "FormatOpt",
        "fct-source": "src/Text-Bibutils.html#bibout_brackets",
        "fct-type": "function",
        "title": "bibout_brackets"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibout_brackets",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_finalcomma",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "FormatOpt",
        "fct-source": "src/Text-Bibutils.html#bibout_finalcomma",
        "fct-type": "function",
        "title": "bibout_finalcomma"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibout_finalcomma",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_singledash",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "FormatOpt",
        "fct-source": "src/Text-Bibutils.html#bibout_singledash",
        "fct-type": "function",
        "title": "bibout_singledash"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibout_singledash",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_strictkey",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "FormatOpt",
        "fct-source": "src/Text-Bibutils.html#bibout_strictkey",
        "fct-type": "function",
        "title": "bibout_strictkey"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibout_strictkey",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_uppercase",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "FormatOpt",
        "fct-source": "src/Text-Bibutils.html#bibout_uppercase",
        "fct-type": "function",
        "title": "bibout_uppercase"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibout_uppercase",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibout_whitespace",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "FormatOpt",
        "fct-source": "src/Text-Bibutils.html#bibout_whitespace",
        "fct-type": "function",
        "title": "bibout_whitespace"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibout_whitespace",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibtex_in",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioIn",
        "fct-source": "src/Text-Bibutils.html#bibtex_in",
        "fct-type": "function",
        "title": "bibtex_in"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibtex_in",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:bibtex_out",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioOut",
        "fct-source": "src/Text-Bibutils.html#bibtex_out",
        "fct-type": "function",
        "title": "bibtex_out"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "bibtex_out",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:charsetin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CInt",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "charsetin"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "charsetin",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:charsetin_src",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "charsetin_src"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "charsetin_src",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:charsetout",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CInt",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "charsetout"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "charsetout",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:charsetout_src",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "charsetout_src"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "charsetout_src",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:copac_in",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioIn",
        "fct-source": "src/Text-Bibutils.html#copac_in",
        "fct-type": "function",
        "title": "copac_in"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "copac_in",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:endnote_in",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioIn",
        "fct-source": "src/Text-Bibutils.html#endnote_in",
        "fct-type": "function",
        "title": "endnote_in"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "endnote_in",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:endnote_out",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioOut",
        "fct-source": "src/Text-Bibutils.html#endnote_out",
        "fct-type": "function",
        "title": "endnote_out"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "endnote_out",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:endnotexml_in",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioIn",
        "fct-source": "src/Text-Bibutils.html#endnotexml_in",
        "fct-type": "function",
        "title": "endnotexml_in"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "endnotexml_in",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:format_opts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CInt",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "format_opts"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "format_opts",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:isi_in",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioIn",
        "fct-source": "src/Text-Bibutils.html#isi_in",
        "fct-type": "function",
        "title": "isi_in"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "isi_in",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:isi_out",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioOut",
        "fct-source": "src/Text-Bibutils.html#isi_out",
        "fct-type": "function",
        "title": "isi_out"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "isi_out",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:latexin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "latexin"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "latexin",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:latexout",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "latexout"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "latexout",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:medline_in",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioIn",
        "fct-source": "src/Text-Bibutils.html#medline_in",
        "fct-type": "function",
        "title": "medline_in"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "medline_in",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:mods_in",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioIn",
        "fct-source": "src/Text-Bibutils.html#mods_in",
        "fct-type": "function",
        "title": "mods_in"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "mods_in",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:mods_out",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioOut",
        "fct-source": "src/Text-Bibutils.html#mods_out",
        "fct-type": "function",
        "title": "mods_out"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "mods_out",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:modsout_dropkey",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "FormatOpt",
        "fct-source": "src/Text-Bibutils.html#modsout_dropkey",
        "fct-type": "function",
        "title": "modsout_dropkey"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "modsout_dropkey",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:nosplittitle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "nosplittitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "nosplittitle",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:numberOfRefs",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the number of references from a \u003ccode\u003e\u003ca\u003eBibl\u003c/a\u003e\u003c/code\u003e C struct.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Bibl -\u003e IO Int",
        "fct-source": "src/Text-Bibutils.html#numberOfRefs",
        "fct-type": "function",
        "title": "numberOfRefs"
      },
      "index": {
        "description": "Retrieve the number of references from Bibl struct",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "numberOfRefs",
        "normalized": "ForeignPtr Bibl-\u003eIO Int",
        "package": "hs-bibutils",
        "partial": "Of Refs",
        "signature": "ForeignPtr Bibl-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:output_raw",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "output_raw"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "output_raw",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:redaformat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CInt",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "redaformat"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "redaformat",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:ris_in",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioIn",
        "fct-source": "src/Text-Bibutils.html#ris_in",
        "fct-type": "function",
        "title": "ris_in"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "ris_in",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:ris_out",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioOut",
        "fct-source": "src/Text-Bibutils.html#ris_out",
        "fct-type": "function",
        "title": "ris_out"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "ris_out",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setAddcount",
      "description": {
        "fct-descr": "\u003cp\u003eAdd reference count to reference id.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setAddcount",
        "fct-type": "function",
        "title": "setAddcount"
      },
      "index": {
        "description": "Add reference count to reference id",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setAddcount",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Addcount",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setBOM",
      "description": {
        "fct-descr": "\u003cp\u003eWrite utf8 byte-order-mark.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setBOM",
        "fct-type": "function",
        "title": "setBOM"
      },
      "index": {
        "description": "Write utf8 byte-order-mark",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setBOM",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "BOM",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setCharsetIn",
      "description": {
        "fct-descr": "\u003cp\u003eSet the input charset. Default is Latin-1 (ISO8859-1). See\n \u003ccode\u003e\u003ca\u003eCharset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e Charset -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setCharsetIn",
        "fct-type": "function",
        "title": "setCharsetIn"
      },
      "index": {
        "description": "Set the input charset Default is Latin-1 ISO8859-1 See Charset",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setCharsetIn",
        "normalized": "ForeignPtr Param-\u003eCharset-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Charset In",
        "signature": "ForeignPtr Param-\u003eCharset-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setCharsetOut",
      "description": {
        "fct-descr": "\u003cp\u003eSet the output charset.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e Charset -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setCharsetOut",
        "fct-type": "function",
        "title": "setCharsetOut"
      },
      "index": {
        "description": "Set the output charset",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setCharsetOut",
        "normalized": "ForeignPtr Param-\u003eCharset-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Charset Out",
        "signature": "ForeignPtr Param-\u003eCharset-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setFormatOpts",
      "description": {
        "fct-descr": "\u003cp\u003eSet output format specific options. See \u003ccode\u003e\u003ca\u003eFormatOpt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e [FormatOpt] -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setFormatOpts",
        "fct-type": "function",
        "title": "setFormatOpts"
      },
      "index": {
        "description": "Set output format specific options See FormatOpt",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setFormatOpts",
        "normalized": "ForeignPtr Param-\u003e[FormatOpt]-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Format Opts",
        "signature": "ForeignPtr Param-\u003e[FormatOpt]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setLatexOut",
      "description": {
        "fct-descr": "\u003cp\u003eWrite Latex codes.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setLatexOut",
        "fct-type": "function",
        "title": "setLatexOut"
      },
      "index": {
        "description": "Write Latex codes",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setLatexOut",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Latex Out",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setNoSplitTitle",
      "description": {
        "fct-descr": "\u003cp\u003eDo not split titles.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setNoSplitTitle",
        "fct-type": "function",
        "title": "setNoSplitTitle"
      },
      "index": {
        "description": "Do not split titles",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setNoSplitTitle",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "No Split Title",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setParam",
      "description": {
        "fct-descr": "\u003cp\u003eSet fields of the \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e C struct directly.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e (Param -\u003e Param) -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setParam",
        "fct-type": "function",
        "title": "setParam"
      },
      "index": {
        "description": "Set fields of the Param struct directly",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setParam",
        "normalized": "ForeignPtr Param-\u003e(Param-\u003eParam)-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Param",
        "signature": "ForeignPtr Param-\u003e(Param-\u003eParam)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setSinglerefperfile",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a single reference for each file.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setSinglerefperfile",
        "fct-type": "function",
        "title": "setSinglerefperfile"
      },
      "index": {
        "description": "Output single reference for each file",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setSinglerefperfile",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Singlerefperfile",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setVerbose",
      "description": {
        "fct-descr": "\u003cp\u003eVerbose output.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setVerbose",
        "fct-type": "function",
        "title": "setVerbose"
      },
      "index": {
        "description": "Verbose output",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setVerbose",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Verbose",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:setXmlOut",
      "description": {
        "fct-descr": "\u003cp\u003eWrite characters in XML entities.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#setXmlOut",
        "fct-type": "function",
        "title": "setXmlOut"
      },
      "index": {
        "description": "Write characters in XML entities",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "setXmlOut",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Xml Out",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:singlerefperfile",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "singlerefperfile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "singlerefperfile",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:status",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "Status -\u003e CInt",
        "fct-source": "src/Text-Bibutils.html#status",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "status",
        "normalized": "Status-\u003eCInt",
        "package": "hs-bibutils",
        "partial": "",
        "signature": "Status-\u003eCInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetAddcount",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#unsetAddcount",
        "fct-type": "function",
        "title": "unsetAddcount"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "unsetAddcount",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Addcount",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetBOM",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#unsetBOM",
        "fct-type": "function",
        "title": "unsetBOM"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "unsetBOM",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "BOM",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetLatexOut",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#unsetLatexOut",
        "fct-type": "function",
        "title": "unsetLatexOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "unsetLatexOut",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Latex Out",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetNoSplitTitle",
      "description": {
        "fct-descr": "\u003cp\u003eSplit titles.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#unsetNoSplitTitle",
        "fct-type": "function",
        "title": "unsetNoSplitTitle"
      },
      "index": {
        "description": "Split titles",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "unsetNoSplitTitle",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "No Split Title",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetSinglerefperfile",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#unsetSinglerefperfile",
        "fct-type": "function",
        "title": "unsetSinglerefperfile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "unsetSinglerefperfile",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Singlerefperfile",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetVerbose",
      "description": {
        "fct-descr": "\u003cp\u003eSuppress verbose output.\n\u003c/p\u003e",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#unsetVerbose",
        "fct-type": "function",
        "title": "unsetVerbose"
      },
      "index": {
        "description": "Suppress verbose output",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "unsetVerbose",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Verbose",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:unsetXmlOut",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "ForeignPtr Param -\u003e IO ()",
        "fct-source": "src/Text-Bibutils.html#unsetXmlOut",
        "fct-type": "function",
        "title": "unsetXmlOut"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "unsetXmlOut",
        "normalized": "ForeignPtr Param-\u003eIO()",
        "package": "hs-bibutils",
        "partial": "Xml Out",
        "signature": "ForeignPtr Param-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:utf8bom",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "utf8bom"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "utf8bom",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:utf8in",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "utf8in"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "utf8in",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:utf8out",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "utf8out"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "utf8out",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:verbose",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "verbose"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "verbose",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:word2007_out",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "BiblioOut",
        "fct-source": "src/Text-Bibutils.html#word2007_out",
        "fct-type": "function",
        "title": "word2007_out"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "word2007_out",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:wordout_dropkey",
      "description": {
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "FormatOpt",
        "fct-source": "src/Text-Bibutils.html#wordout_dropkey",
        "fct-type": "function",
        "title": "wordout_dropkey"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "wordout_dropkey",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:writeformat",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CInt",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "writeformat"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "writeformat",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:xmlin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "xmlin"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "xmlin",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hs-bibutils/docs/Text-Bibutils.html#v:xmlout",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Bibutils",
        "fct-package": "hs-bibutils",
        "fct-signature": "CUChar",
        "fct-source": "src/Text-Bibutils.html#Param",
        "fct-type": "function",
        "title": "xmlout"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Bibutils",
        "module": "Text.Bibutils",
        "name": "xmlout",
        "normalized": "",
        "package": "hs-bibutils",
        "partial": "",
        "signature": ""
      }
    }
  }
]