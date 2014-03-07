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
        "word": "regional-pointers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLifts functions and types from \u003ccode\u003eForeign.C.String\u003c/code\u003e to regional pointers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.C.String.Region",
          "name": "Region",
          "package": "regional-pointers",
          "source": "src/Foreign-C-String-Region.html",
          "type": "module"
        },
        "index": {
          "description": "Lifts functions and types from Foreign.C.String to regional pointers",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "Region",
          "package": "regional-pointers",
          "partial": "Region",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy type synonym for a regional pointer to an array of C characters\n terminated by a NUL.\n\u003c/p\u003e\u003cp\u003eThis should provide a safer replacement for \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003eCString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "RegionalCString",
          "package": "regional-pointers",
          "source": "src/Foreign-C-String-Region.html#RegionalCString",
          "type": "type"
        },
        "index": {
          "description": "Handy type synonym for regional pointer to an array of characters terminated by NUL This should provide safer replacement for Foreign.C.String CString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "RegionalCString",
          "package": "regional-pointers",
          "partial": "Regional CString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#t:RegionalCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy type synonym for a regional pointer to an array of C characters which\n is paired with the length of the array instead of terminated by a NUL.\n (Thus allowing NUL characters in the middle of the string)\n\u003c/p\u003e\u003cp\u003eThis should provide a safer replacement for \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003eCStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "RegionalCStringLen",
          "package": "regional-pointers",
          "source": "src/Foreign-C-String-Region.html#RegionalCStringLen",
          "type": "type"
        },
        "index": {
          "description": "Handy type synonym for regional pointer to an array of characters which is paired with the length of the array instead of terminated by NUL Thus allowing NUL characters in the middle of the string This should provide safer replacement for Foreign.C.String CStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "RegionalCStringLen",
          "package": "regional-pointers",
          "partial": "Regional CString Len",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#t:RegionalCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy type synonym for a regional pointer to an array of C wide characters\n terminated by a NUL.\n\u003c/p\u003e\u003cp\u003eThis should provide a safer replacement for \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003eCWString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "RegionalCWString",
          "package": "regional-pointers",
          "source": "src/Foreign-C-String-Region.html#RegionalCWString",
          "type": "type"
        },
        "index": {
          "description": "Handy type synonym for regional pointer to an array of wide characters terminated by NUL This should provide safer replacement for Foreign.C.String CWString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "RegionalCWString",
          "package": "regional-pointers",
          "partial": "Regional CWString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#t:RegionalCWString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandy type synonym for a regional pointer to an array of C wide characters\n which is paired with the length of the array instead of terminated by a NUL.\n (Thus allowing NUL characters in the middle of the string)\n\u003c/p\u003e\u003cp\u003eThis should provide a safer replacement for \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003eCWStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "RegionalCWStringLen",
          "package": "regional-pointers",
          "source": "src/Foreign-C-String-Region.html#RegionalCWStringLen",
          "type": "type"
        },
        "index": {
          "description": "Handy type synonym for regional pointer to an array of wide characters which is paired with the length of the array instead of terminated by NUL Thus allowing NUL characters in the middle of the string This should provide safer replacement for Foreign.C.String CWStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "RegionalCWStringLen",
          "package": "regional-pointers",
          "partial": "Regional CWString Len",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#t:RegionalCWStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a C byte, representing a Latin-1 character, to the corresponding\n Haskell character.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "castCCharToChar",
          "package": "regional-pointers",
          "signature": "CChar -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert byte representing Latin-1 character to the corresponding Haskell character",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "castCCharToChar",
          "normalized": "CChar-\u003eChar",
          "package": "regional-pointers",
          "partial": "CChar To Char",
          "signature": "CChar-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:castCCharToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a C \u003ccode\u003esigned char\u003c/code\u003e, representing a Latin-1 character, to the\n corresponding Haskell character.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "castCSCharToChar",
          "package": "regional-pointers",
          "signature": "CSChar -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert signed char representing Latin-1 character to the corresponding Haskell character",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "castCSCharToChar",
          "normalized": "CSChar-\u003eChar",
          "package": "regional-pointers",
          "partial": "CSChar To Char",
          "signature": "CSChar-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:castCSCharToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a C \u003ccode\u003eunsigned char\u003c/code\u003e, representing a Latin-1 character, to\n the corresponding Haskell character.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "castCUCharToChar",
          "package": "regional-pointers",
          "signature": "CUChar -\u003e Char",
          "type": "function"
        },
        "index": {
          "description": "Convert unsigned char representing Latin-1 character to the corresponding Haskell character",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "castCUCharToChar",
          "normalized": "CUChar-\u003eChar",
          "package": "regional-pointers",
          "partial": "CUChar To Char",
          "signature": "CUChar-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:castCUCharToChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell character to a C character.\n This function is only safe on the first 256 characters.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "castCharToCChar",
          "package": "regional-pointers",
          "signature": "Char -\u003e CChar",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell character to character This function is only safe on the first characters",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "castCharToCChar",
          "normalized": "Char-\u003eCChar",
          "package": "regional-pointers",
          "partial": "Char To CChar",
          "signature": "Char-\u003eCChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:castCharToCChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell character to a C \u003ccode\u003esigned char\u003c/code\u003e.\n This function is only safe on the first 256 characters.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "castCharToCSChar",
          "package": "regional-pointers",
          "signature": "Char -\u003e CSChar",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell character to signed char This function is only safe on the first characters",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "castCharToCSChar",
          "normalized": "Char-\u003eCSChar",
          "package": "regional-pointers",
          "partial": "Char To CSChar",
          "signature": "Char-\u003eCSChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:castCharToCSChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell character to a C \u003ccode\u003eunsigned char\u003c/code\u003e.\n This function is only safe on the first 256 characters.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "castCharToCUChar",
          "package": "regional-pointers",
          "signature": "Char -\u003e CUChar",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell character to unsigned char This function is only safe on the first characters",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "castCharToCUChar",
          "normalized": "Char-\u003eCUChar",
          "package": "regional-pointers",
          "partial": "Char To CUChar",
          "signature": "Char-\u003eCUChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:castCharToCUChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralizes \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003echarIsRepresentable\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to any \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "charIsRepresentable",
          "package": "regional-pointers",
          "signature": "Char -\u003e m Bool",
          "source": "src/Foreign-C-String-Region.html#charIsRepresentable",
          "type": "function"
        },
        "index": {
          "description": "Generalizes Foreign.C.String charIsRepresentable to any MonadIO",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "charIsRepresentable",
          "normalized": "Char-\u003ea Bool",
          "package": "regional-pointers",
          "partial": "Is Representable",
          "signature": "Char-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:charIsRepresentable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C string.\n\u003c/p\u003e\u003cp\u003eThe Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003enewCAString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "newCAString",
          "package": "regional-pointers",
          "signature": "String -\u003e RegionT s pr (RegionalCString RegionalPtr (RegionT s pr))",
          "source": "src/Foreign-C-String-Region.html#newCAString",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated string The Haskell string may not contain any NUL characters Wraps Foreign.C.String newCAString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "newCAString",
          "normalized": "String-\u003eRegionT a b(RegionalCString RegionalPtr(RegionT a b))",
          "package": "regional-pointers",
          "partial": "CAString",
          "signature": "String-\u003eRegionT s pr(RegionalCString RegionalPtr(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:newCAString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C string (ie, character array) with\n explicit length information.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003enewCAStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "newCAStringLen",
          "package": "regional-pointers",
          "signature": "String -\u003e RegionT s pr (RegionalCStringLen RegionalPtr (RegionT s pr))",
          "source": "src/Foreign-C-String-Region.html#newCAStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into string ie character array with explicit length information Wraps Foreign.C.String newCAStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "newCAStringLen",
          "normalized": "String-\u003eRegionT a b(RegionalCStringLen RegionalPtr(RegionT a b))",
          "package": "regional-pointers",
          "partial": "CAString Len",
          "signature": "String-\u003eRegionT s pr(RegionalCStringLen RegionalPtr(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:newCAStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C string.\n\u003c/p\u003e\u003cp\u003eThe Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003enewCString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "newCString",
          "package": "regional-pointers",
          "signature": "String -\u003e RegionT s pr (RegionalCString RegionalPtr (RegionT s pr))",
          "source": "src/Foreign-C-String-Region.html#newCString",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated string The Haskell string may not contain any NUL characters Wraps Foreign.C.String newCString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "newCString",
          "normalized": "String-\u003eRegionT a b(RegionalCString RegionalPtr(RegionT a b))",
          "package": "regional-pointers",
          "partial": "CString",
          "signature": "String-\u003eRegionT s pr(RegionalCString RegionalPtr(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:newCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C string (ie, character array) with\n explicit length information.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003enewCStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "newCStringLen",
          "package": "regional-pointers",
          "signature": "String -\u003e RegionT s pr (RegionalCStringLen RegionalPtr (RegionT s pr))",
          "source": "src/Foreign-C-String-Region.html#newCStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into string ie character array with explicit length information Wraps Foreign.C.String newCStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "newCStringLen",
          "normalized": "String-\u003eRegionT a b(RegionalCStringLen RegionalPtr(RegionT a b))",
          "package": "regional-pointers",
          "partial": "CString Len",
          "signature": "String-\u003eRegionT s pr(RegionalCStringLen RegionalPtr(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:newCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C wide string.\n\u003c/p\u003e\u003cp\u003eThe Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003enewCWString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "newCWString",
          "package": "regional-pointers",
          "signature": "String -\u003e RegionT s pr (RegionalCWString RegionalPtr (RegionT s pr))",
          "source": "src/Foreign-C-String-Region.html#newCWString",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated wide string The Haskell string may not contain any NUL characters Wraps Foreign.C.String newCWString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "newCWString",
          "normalized": "String-\u003eRegionT a b(RegionalCWString RegionalPtr(RegionT a b))",
          "package": "regional-pointers",
          "partial": "CWString",
          "signature": "String-\u003eRegionT s pr(RegionalCWString RegionalPtr(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:newCWString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C wide string (ie, wide character array)\n with explicit length information.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003enewCWStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "newCWStringLen",
          "package": "regional-pointers",
          "signature": "String -\u003e RegionT s pr (RegionalCWStringLen RegionalPtr (RegionT s pr))",
          "source": "src/Foreign-C-String-Region.html#newCWStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into wide string ie wide character array with explicit length information Wraps Foreign.C.String newCWStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "newCWStringLen",
          "normalized": "String-\u003eRegionT a b(RegionalCWStringLen RegionalPtr(RegionT a b))",
          "package": "regional-pointers",
          "partial": "CWString Len",
          "signature": "String-\u003eRegionT s pr(RegionalCWStringLen RegionalPtr(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:newCWStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a NUL terminated C string into a Haskell string.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003epeekCAString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "peekCAString",
          "package": "regional-pointers",
          "signature": "RegionalCString pointer pr -\u003e cr String",
          "source": "src/Foreign-C-String-Region.html#peekCAString",
          "type": "function"
        },
        "index": {
          "description": "Marshal NUL terminated string into Haskell string Wraps Foreign.C.String peekCAString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "peekCAString",
          "normalized": "RegionalCString a b-\u003ec String",
          "package": "regional-pointers",
          "partial": "CAString",
          "signature": "RegionalCString pointer pr-\u003ecr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:peekCAString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a C string with explicit length into a Haskell string.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003epeekCAStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "peekCAStringLen",
          "package": "regional-pointers",
          "signature": "RegionalCStringLen pointer pr -\u003e cr String",
          "source": "src/Foreign-C-String-Region.html#peekCAStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal string with explicit length into Haskell string Wraps Foreign.C.String peekCAStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "peekCAStringLen",
          "normalized": "RegionalCStringLen a b-\u003ec String",
          "package": "regional-pointers",
          "partial": "CAString Len",
          "signature": "RegionalCStringLen pointer pr-\u003ecr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:peekCAStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a NUL terminated C string into a Haskell string.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003epeekCString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "peekCString",
          "package": "regional-pointers",
          "signature": "RegionalCString pointer pr -\u003e cr String",
          "source": "src/Foreign-C-String-Region.html#peekCString",
          "type": "function"
        },
        "index": {
          "description": "Marshal NUL terminated string into Haskell string Wraps Foreign.C.String peekCString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "peekCString",
          "normalized": "RegionalCString a b-\u003ec String",
          "package": "regional-pointers",
          "partial": "CString",
          "signature": "RegionalCString pointer pr-\u003ecr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:peekCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a C string with explicit length into a Haskell string.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003epeekCStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "peekCStringLen",
          "package": "regional-pointers",
          "signature": "RegionalCStringLen pointer pr -\u003e cr String",
          "source": "src/Foreign-C-String-Region.html#peekCStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal string with explicit length into Haskell string Wraps Foreign.C.String peekCStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "peekCStringLen",
          "normalized": "RegionalCStringLen a b-\u003ec String",
          "package": "regional-pointers",
          "partial": "CString Len",
          "signature": "RegionalCStringLen pointer pr-\u003ecr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:peekCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a NUL terminated C wide string into a Haskell string.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003epeekCWString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "peekCWString",
          "package": "regional-pointers",
          "signature": "RegionalCWString pointer pr -\u003e cr String",
          "source": "src/Foreign-C-String-Region.html#peekCWString",
          "type": "function"
        },
        "index": {
          "description": "Marshal NUL terminated wide string into Haskell string Wraps Foreign.C.String peekCWString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "peekCWString",
          "normalized": "RegionalCWString a b-\u003ec String",
          "package": "regional-pointers",
          "partial": "CWString",
          "signature": "RegionalCWString pointer pr-\u003ecr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:peekCWString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a C wide string with explicit length into a Haskell string.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003epeekCWStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "peekCWStringLen",
          "package": "regional-pointers",
          "signature": "RegionalCWStringLen pointer pr -\u003e cr String",
          "source": "src/Foreign-C-String-Region.html#peekCWStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal wide string with explicit length into Haskell string Wraps Foreign.C.String peekCWStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "peekCWStringLen",
          "normalized": "RegionalCWStringLen a b-\u003ec String",
          "package": "regional-pointers",
          "partial": "CWString Len",
          "signature": "RegionalCWStringLen pointer pr-\u003ecr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:peekCWStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C string using temporary\n storage.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/li\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either normally or\n via an exception).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003ewithCAString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "withCAString",
          "package": "regional-pointers",
          "signature": "String -\u003e (forall sl.  RegionalCString LocalPtr (LocalRegion sl s) -\u003e RegionT (Local s) pr α) -\u003e RegionT s pr α",
          "source": "src/Foreign-C-String-Region.html#withCAString",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated string using temporary storage the Haskell string may not contain any NUL characters the memory is freed when the subcomputation terminates either normally or via an exception Wraps Foreign.C.String withCAString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "withCAString",
          "normalized": "String-\u003e(a b RegionalCString LocalPtr(LocalRegion c d)-\u003eRegionT(Local d)e f)-\u003eRegionT d e f",
          "package": "regional-pointers",
          "partial": "CAString",
          "signature": "String-\u003e(forall sl. RegionalCString LocalPtr(LocalRegion sl s)-\u003eRegionT(Local s)pr α)-\u003eRegionT s pr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:withCAString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C string (ie, character array) in temporary\n storage, with explicit length information.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either normally or\n   via an exception).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003ewithCAStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "withCAStringLen",
          "package": "regional-pointers",
          "signature": "String -\u003e (forall sl.  RegionalCStringLen LocalPtr (LocalRegion sl s) -\u003e RegionT (Local s) pr α) -\u003e RegionT s pr α",
          "source": "src/Foreign-C-String-Region.html#withCAStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into string ie character array in temporary storage with explicit length information the memory is freed when the subcomputation terminates either normally or via an exception Wraps Foreign.C.String withCAStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "withCAStringLen",
          "normalized": "String-\u003e(a b RegionalCStringLen LocalPtr(LocalRegion c d)-\u003eRegionT(Local d)e f)-\u003eRegionT d e f",
          "package": "regional-pointers",
          "partial": "CAString Len",
          "signature": "String-\u003e(forall sl. RegionalCStringLen LocalPtr(LocalRegion sl s)-\u003eRegionT(Local s)pr α)-\u003eRegionT s pr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:withCAStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C string using temporary\n storage.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/li\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either normally or\n   via an exception).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003ewithCString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "withCString",
          "package": "regional-pointers",
          "signature": "String -\u003e (forall sl.  RegionalCString LocalPtr (LocalRegion sl s) -\u003e RegionT (Local s) pr α) -\u003e RegionT s pr α",
          "source": "src/Foreign-C-String-Region.html#withCString",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated string using temporary storage the Haskell string may not contain any NUL characters the memory is freed when the subcomputation terminates either normally or via an exception Wraps Foreign.C.String withCString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "withCString",
          "normalized": "String-\u003e(a b RegionalCString LocalPtr(LocalRegion c d)-\u003eRegionT(Local d)e f)-\u003eRegionT d e f",
          "package": "regional-pointers",
          "partial": "CString",
          "signature": "String-\u003e(forall sl. RegionalCString LocalPtr(LocalRegion sl s)-\u003eRegionT(Local s)pr α)-\u003eRegionT s pr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:withCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a C string (ie, character array) in temporary\n storage, with explicit length information.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either normally or\n   via an exception).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003ewithCStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "withCStringLen",
          "package": "regional-pointers",
          "signature": "String -\u003e (forall sl.  RegionalCStringLen LocalPtr (LocalRegion sl s) -\u003e RegionT (Local s) pr α) -\u003e RegionT s pr α",
          "source": "src/Foreign-C-String-Region.html#withCStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into string ie character array in temporary storage with explicit length information the memory is freed when the subcomputation terminates either normally or via an exception Wraps Foreign.C.String withCStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "withCStringLen",
          "normalized": "String-\u003e(a b RegionalCStringLen LocalPtr(LocalRegion c d)-\u003eRegionT(Local d)e f)-\u003eRegionT d e f",
          "package": "regional-pointers",
          "partial": "CString Len",
          "signature": "String-\u003e(forall sl. RegionalCStringLen LocalPtr(LocalRegion sl s)-\u003eRegionT(Local s)pr α)-\u003eRegionT s pr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:withCStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C wide string using\n temporary storage.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters\n\u003c/li\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either\n   normally or via an exception).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003ewithCWString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "withCWString",
          "package": "regional-pointers",
          "signature": "String -\u003e (forall sl.  RegionalCWString LocalPtr (LocalRegion sl s) -\u003e RegionT (Local s) pr α) -\u003e RegionT s pr α",
          "source": "src/Foreign-C-String-Region.html#withCWString",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated wide string using temporary storage the Haskell string may not contain any NUL characters the memory is freed when the subcomputation terminates either normally or via an exception Wraps Foreign.C.String withCWString",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "withCWString",
          "normalized": "String-\u003e(a b RegionalCWString LocalPtr(LocalRegion c d)-\u003eRegionT(Local d)e f)-\u003eRegionT d e f",
          "package": "regional-pointers",
          "partial": "CWString",
          "signature": "String-\u003e(forall sl. RegionalCWString LocalPtr(LocalRegion sl s)-\u003eRegionT(Local s)pr α)-\u003eRegionT s pr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:withCWString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMarshal a Haskell string into a NUL terminated C wide string using\n temporary storage.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e the Haskell string may \u003cem\u003enot\u003c/em\u003e contain any NUL characters.\n\u003c/li\u003e\u003cli\u003e the memory is freed when the subcomputation terminates (either\n   normally or via an exception).\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.C.String.\u003ccode\u003e\u003ca\u003ewithCWStringLen\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.C.String.Region",
          "name": "withCWStringLen",
          "package": "regional-pointers",
          "signature": "String -\u003e (forall sl.  RegionalCWStringLen LocalPtr (LocalRegion sl s) -\u003e RegionT (Local s) pr α) -\u003e RegionT s pr α",
          "source": "src/Foreign-C-String-Region.html#withCWStringLen",
          "type": "function"
        },
        "index": {
          "description": "Marshal Haskell string into NUL terminated wide string using temporary storage the Haskell string may not contain any NUL characters the memory is freed when the subcomputation terminates either normally or via an exception Wraps Foreign.C.String withCWStringLen",
          "hierarchy": "Foreign C String Region",
          "module": "Foreign.C.String.Region",
          "name": "withCWStringLen",
          "normalized": "String-\u003e(a b RegionalCWStringLen LocalPtr(LocalRegion c d)-\u003eRegionT(Local d)e f)-\u003eRegionT d e f",
          "package": "regional-pointers",
          "partial": "CWString Len",
          "signature": "String-\u003e(forall sl. RegionalCWStringLen LocalPtr(LocalRegion sl s)-\u003eRegionT(Local s)pr α)-\u003eRegionT s pr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-C-String-Region.html#v:withCWStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "Region",
          "package": "regional-pointers",
          "source": "src/Foreign-Marshal-Alloc-Region.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign Marshal Alloc Region",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "Region",
          "package": "regional-pointers",
          "partial": "Region",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Alloc-Region.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regional pointer to memory which was locally allocated\n by one of the \u003ccode\u003ealloca\u003c/code\u003e-like functions.\n\u003c/p\u003e\u003cp\u003eNote that a \u003ccode\u003eLocalPtr\u003c/code\u003e can not be \u003ccode\u003e\u003ca\u003edup\u003c/a\u003e\u003c/code\u003elicated to a parent region.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "LocalPtr",
          "package": "regional-pointers",
          "source": "src/Foreign-Ptr-Region-Internal.html#LocalPtr",
          "type": "data"
        },
        "index": {
          "description": "regional pointer to memory which was locally allocated by one of the alloca like functions Note that LocalPtr can not be dup licated to parent region",
          "hierarchy": "Foreign Marshal Alloc Region",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "LocalPtr",
          "package": "regional-pointers",
          "partial": "Local Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Alloc-Region.html#t:LocalPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealloca\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e executes the computation \u003ccode\u003ef\u003c/code\u003e, passing as argument a pointer to\na temporarily allocated block of memory sufficient to hold values of type \u003ccode\u003e&#945;\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe memory is freed when \u003ccode\u003ef\u003c/code\u003e terminates (either normally or via an exception).\n\u003c/p\u003e\u003cp\u003eThis should provide a safer replacement for:\n\u003ccode\u003eForeign.Marshal.Alloc.\u003ccode\u003e\u003ca\u003ealloca\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "alloca",
          "package": "regional-pointers",
          "signature": "(forall sl.  LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Marshal-Alloc-Region.html#alloca",
          "type": "function"
        },
        "index": {
          "description": "alloca executes the computation passing as argument pointer to temporarily allocated block of memory sufficient to hold values of type The memory is freed when terminates either normally or via an exception This should provide safer replacement for Foreign.Marshal.Alloc alloca",
          "hierarchy": "Foreign Marshal Alloc Region",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "alloca",
          "normalized": "(a b LocalPtr c(LocalRegion d e)-\u003eRegionT(Local e)f g)-\u003eRegionT e f g",
          "package": "regional-pointers",
          "signature": "(forall sl. LocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Alloc-Region.html#v:alloca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eallocaBytes\u003c/a\u003e\u003c/code\u003e n f\u003c/code\u003e executes the computation \u003ccode\u003ef\u003c/code\u003e, passing as argument a\npointer to a temporarily allocated block of memory of \u003ccode\u003en\u003c/code\u003e bytes.\nThe block of memory is sufficiently aligned for any of the basic foreign types\nthat fits into a memory block of the allocated size.\n\u003c/p\u003e\u003cp\u003eThe memory is freed when \u003ccode\u003ef\u003c/code\u003e terminates (either normally or via an exception).\n\u003c/p\u003e\u003cp\u003eThis should provide a safer replacement for:\n\u003ccode\u003eForeign.Marshal.Alloc.\u003ccode\u003e\u003ca\u003eallocaBytes\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "allocaBytes",
          "package": "regional-pointers",
          "signature": "Int -\u003e (forall sl.  LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Marshal-Alloc-Region.html#allocaBytes",
          "type": "function"
        },
        "index": {
          "description": "allocaBytes executes the computation passing as argument pointer to temporarily allocated block of memory of bytes The block of memory is sufficiently aligned for any of the basic foreign types that fits into memory block of the allocated size The memory is freed when terminates either normally or via an exception This should provide safer replacement for Foreign.Marshal.Alloc allocaBytes",
          "hierarchy": "Foreign Marshal Alloc Region",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "allocaBytes",
          "normalized": "Int-\u003e(a b LocalPtr c(LocalRegion d e)-\u003eRegionT(Local e)f g)-\u003eRegionT e f g",
          "package": "regional-pointers",
          "partial": "Bytes",
          "signature": "Int-\u003e(forall sl. LocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Alloc-Region.html#v:allocaBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis should provide a safer replacement for:\n \u003ccode\u003eForeign.Marshal.Alloc.\u003ccode\u003e\u003ca\u003eallocaBytesAligned\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "allocaBytesAligned",
          "package": "regional-pointers",
          "signature": "Int -\u003e Int -\u003e (forall sl.  LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Marshal-Alloc-Region.html#allocaBytesAligned",
          "type": "function"
        },
        "index": {
          "description": "This should provide safer replacement for Foreign.Marshal.Alloc allocaBytesAligned",
          "hierarchy": "Foreign Marshal Alloc Region",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "allocaBytesAligned",
          "normalized": "Int-\u003eInt-\u003e(a b LocalPtr c(LocalRegion d e)-\u003eRegionT(Local e)f g)-\u003eRegionT e f g",
          "package": "regional-pointers",
          "partial": "Bytes Aligned",
          "signature": "Int-\u003eInt-\u003e(forall sl. LocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Alloc-Region.html#v:allocaBytesAligned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a block of memory that is sufficient to hold values of type \u003ccode\u003e&#945;\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that: \u003ccode\u003emalloc = \u003ccode\u003e\u003ca\u003emallocBytes\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e (undefined :: &#945;)\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis should provide a safer replacement for:\n\u003ccode\u003eForeign.Marshal.Alloc.\u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "malloc",
          "package": "regional-pointers",
          "signature": "RegionT s pr (RegionalPtr α (RegionT s pr))",
          "source": "src/Foreign-Marshal-Alloc-Region.html#malloc",
          "type": "function"
        },
        "index": {
          "description": "Allocate block of memory that is sufficient to hold values of type Note that malloc mallocBytes sizeOf undefined This should provide safer replacement for Foreign.Marshal.Alloc malloc",
          "hierarchy": "Foreign Marshal Alloc Region",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "malloc",
          "package": "regional-pointers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Alloc-Region.html#v:malloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a block of memory of the given number of bytes.\nThe block of memory is sufficiently aligned for any of the basic foreign types\nthat fits into a memory block of the allocated size.\n\u003c/p\u003e\u003cp\u003eThis should provide a safer replacement for:\n\u003ccode\u003eForeign.Marshal.Alloc.\u003ccode\u003e\u003ca\u003emallocBytes\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "mallocBytes",
          "package": "regional-pointers",
          "signature": "Int -\u003e RegionT s pr (RegionalPtr α (RegionT s pr))",
          "source": "src/Foreign-Marshal-Alloc-Region.html#mallocBytes",
          "type": "function"
        },
        "index": {
          "description": "Allocate block of memory of the given number of bytes The block of memory is sufficiently aligned for any of the basic foreign types that fits into memory block of the allocated size This should provide safer replacement for Foreign.Marshal.Alloc mallocBytes",
          "hierarchy": "Foreign Marshal Alloc Region",
          "module": "Foreign.Marshal.Alloc.Region",
          "name": "mallocBytes",
          "normalized": "Int-\u003eRegionT a b(RegionalPtr c(RegionT a b))",
          "package": "regional-pointers",
          "partial": "Bytes",
          "signature": "Int-\u003eRegionT s pr(RegionalPtr α(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Alloc-Region.html#v:mallocBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Marshal.Array.Region",
          "name": "Region",
          "package": "regional-pointers",
          "source": "src/Foreign-Marshal-Array-Region.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "Region",
          "package": "regional-pointers",
          "partial": "Region",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvance a pointer into an array by the given number of elements.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Marshal.Array.\u003ccode\u003e\u003ca\u003eadvancePtr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "advancePtr",
          "package": "regional-pointers",
          "signature": "pointer α pr -\u003e Int -\u003e pointer α pr",
          "source": "src/Foreign-Marshal-Array-Region.html#advancePtr",
          "type": "function"
        },
        "index": {
          "description": "Advance pointer into an array by the given number of elements Wraps Foreign.Marshal.Array advancePtr",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "advancePtr",
          "normalized": "a b c-\u003eInt-\u003ea b c",
          "package": "regional-pointers",
          "partial": "Ptr",
          "signature": "pointer α pr-\u003eInt-\u003epointer α pr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:advancePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily allocate space for the given number of elements (like \u003ccode\u003e\u003ca\u003ealloca\u003c/a\u003e\u003c/code\u003e,\n but for multiple elements).\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "allocaArray",
          "package": "regional-pointers",
          "signature": "Int -\u003e (forall sl.  LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Marshal-Array-Region.html#allocaArray",
          "type": "function"
        },
        "index": {
          "description": "Temporarily allocate space for the given number of elements like alloca but for multiple elements",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "allocaArray",
          "normalized": "Int-\u003e(a b LocalPtr c(LocalRegion d e)-\u003eRegionT(Local e)f g)-\u003eRegionT e f g",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "Int-\u003e(forall sl. LocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:allocaArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eallocaArray\u003c/a\u003e\u003c/code\u003e, but add an extra position to hold a special termination\n element.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "allocaArray0",
          "package": "regional-pointers",
          "signature": "Int -\u003e (forall sl.  LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Marshal-Array-Region.html#allocaArray0",
          "type": "function"
        },
        "index": {
          "description": "Like allocaArray but add an extra position to hold special termination element",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "allocaArray0",
          "normalized": "Int-\u003e(a b LocalPtr c(LocalRegion d e)-\u003eRegionT(Local e)f g)-\u003eRegionT e f g",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "Int-\u003e(forall sl. LocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:allocaArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the given number of elements from the second array (source) into the\n first array (destination); the copied areas may \u003cem\u003enot\u003c/em\u003e overlap.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Marshal.Array.\u003ccode\u003e\u003ca\u003ecopyArray\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "copyArray",
          "package": "regional-pointers",
          "signature": "pointer1 α pr1-\u003e pointer2 α pr2-\u003e Int-\u003e cr ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the given number of elements from the second array source into the first array destination the copied areas may not overlap Wraps Foreign.Marshal.Array copyArray",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "copyArray",
          "normalized": "a b c-\u003ea b c-\u003eInt-\u003ed()",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "pointer α pr-\u003epointer α pr-\u003eInt-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:copyArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of elements in an array, excluding the terminator.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Marshal.Array.\u003ccode\u003e\u003ca\u003elengthArray0\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "lengthArray0",
          "package": "regional-pointers",
          "signature": "α -\u003e pointer α pr -\u003e cr Int",
          "source": "src/Foreign-Marshal-Array-Region.html#lengthArray0",
          "type": "function"
        },
        "index": {
          "description": "Return the number of elements in an array excluding the terminator Wraps Foreign.Marshal.Array lengthArray0",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "lengthArray0",
          "normalized": "a-\u003eb a c-\u003ed Int",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "α-\u003epointer α pr-\u003ecr Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:lengthArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate storage for the given number of elements of a storable type.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emalloc\u003c/a\u003e\u003c/code\u003e, but for multiple elements.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "mallocArray",
          "package": "regional-pointers",
          "signature": "Int -\u003e RegionT s pr (RegionalPtr α (RegionT s pr))",
          "source": "src/Foreign-Marshal-Array-Region.html#mallocArray",
          "type": "function"
        },
        "index": {
          "description": "Allocate storage for the given number of elements of storable type Like malloc but for multiple elements",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "mallocArray",
          "normalized": "Int-\u003eRegionT a b(RegionalPtr c(RegionT a b))",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "Int-\u003eRegionT s pr(RegionalPtr α(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:mallocArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emallocArray\u003c/a\u003e\u003c/code\u003e, but add an extra position to hold a special termination\n element.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "mallocArray0",
          "package": "regional-pointers",
          "signature": "Int -\u003e RegionT s pr (RegionalPtr α (RegionT s pr))",
          "source": "src/Foreign-Marshal-Array-Region.html#mallocArray0",
          "type": "function"
        },
        "index": {
          "description": "Like mallocArray but add an extra position to hold special termination element",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "mallocArray0",
          "normalized": "Int-\u003eRegionT a b(RegionalPtr c(RegionT a b))",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "Int-\u003eRegionT s pr(RegionalPtr α(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:mallocArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the given number of elements from the second array (source) into the\n first array (destination); the copied areas \u003cem\u003emay\u003c/em\u003e overlap.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Marshal.Array.\u003ccode\u003e\u003ca\u003emoveArray\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "moveArray",
          "package": "regional-pointers",
          "signature": "pointer1 α pr1-\u003e pointer2 α pr2-\u003e Int-\u003e cr ()",
          "type": "function"
        },
        "index": {
          "description": "Copy the given number of elements from the second array source into the first array destination the copied areas may overlap Wraps Foreign.Marshal.Array moveArray",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "moveArray",
          "normalized": "a b c-\u003ea b c-\u003eInt-\u003ed()",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "pointer α pr-\u003epointer α pr-\u003eInt-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:moveArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a list of storable elements into a newly allocated, consecutive\n sequence of storable values.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e, but for multiple elements.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "newArray",
          "package": "regional-pointers",
          "signature": "[α] -\u003e RegionT s pr (RegionalPtr α (RegionT s pr))",
          "source": "src/Foreign-Marshal-Array-Region.html#newArray",
          "type": "function"
        },
        "index": {
          "description": "Write list of storable elements into newly allocated consecutive sequence of storable values Like new but for multiple elements",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "newArray",
          "normalized": "[a]-\u003eRegionT b c(RegionalPtr a(RegionT b c))",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "[α]-\u003eRegionT s pr(RegionalPtr α(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:newArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a list of storable elements into a newly allocated, consecutive\n sequence of storable values, where the end is fixed by the given end marker.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "newArray0",
          "package": "regional-pointers",
          "signature": "α -\u003e [α] -\u003e RegionT s pr (RegionalPtr α (RegionT s pr))",
          "source": "src/Foreign-Marshal-Array-Region.html#newArray0",
          "type": "function"
        },
        "index": {
          "description": "Write list of storable elements into newly allocated consecutive sequence of storable values where the end is fixed by the given end marker",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "newArray0",
          "normalized": "a-\u003e[a]-\u003eRegionT b c(RegionalPtr a(RegionT b c))",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "α-\u003e[α]-\u003eRegionT s pr(RegionalPtr α(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:newArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array of given length into a Haskell list.\n\u003c/p\u003e\u003cp\u003e(This version traverses the array backwards using an accumulating parameter,\n which uses constant stack space. The previous version using \u003ccode\u003emapM\u003c/code\u003e needed\n linear stack space.)\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Marshal.Array.\u003ccode\u003e\u003ca\u003epeekArray\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "peekArray",
          "package": "regional-pointers",
          "signature": "Int -\u003e pointer α pr -\u003e cr [α]",
          "source": "src/Foreign-Marshal-Array-Region.html#peekArray",
          "type": "function"
        },
        "index": {
          "description": "Convert an array of given length into Haskell list This version traverses the array backwards using an accumulating parameter which uses constant stack space The previous version using mapM needed linear stack space Wraps Foreign.Marshal.Array peekArray",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "peekArray",
          "normalized": "Int-\u003ea b c-\u003ed[b]",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "Int-\u003epointer α pr-\u003ecr[α]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:peekArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array terminated by the given end marker into a Haskell list.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Marshal.Array.\u003ccode\u003e\u003ca\u003epeekArray0\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "peekArray0",
          "package": "regional-pointers",
          "signature": "α -\u003e pointer α pr -\u003e cr [α]",
          "source": "src/Foreign-Marshal-Array-Region.html#peekArray0",
          "type": "function"
        },
        "index": {
          "description": "Convert an array terminated by the given end marker into Haskell list Wraps Foreign.Marshal.Array peekArray0",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "peekArray0",
          "normalized": "a-\u003eb a c-\u003ed[a]",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "α-\u003epointer α pr-\u003ecr[α]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:peekArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the list elements consecutive into memory.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Marshal.Array.\u003ccode\u003e\u003ca\u003epokeArray\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "pokeArray",
          "package": "regional-pointers",
          "signature": "pointer α pr -\u003e [α] -\u003e cr ()",
          "source": "src/Foreign-Marshal-Array-Region.html#pokeArray",
          "type": "function"
        },
        "index": {
          "description": "Write the list elements consecutive into memory Wraps Foreign.Marshal.Array pokeArray",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "pokeArray",
          "normalized": "a b c-\u003e[b]-\u003ed()",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "pointer α pr-\u003e[α]-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:pokeArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the list elements consecutive into memory and terminate them with the\n given marker element.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Marshal.Array.\u003ccode\u003e\u003ca\u003epokeArray0\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "pokeArray0",
          "package": "regional-pointers",
          "signature": "α -\u003e pointer α pr -\u003e [α] -\u003e cr ()",
          "source": "src/Foreign-Marshal-Array-Region.html#pokeArray0",
          "type": "function"
        },
        "index": {
          "description": "Write the list elements consecutive into memory and terminate them with the given marker element Wraps Foreign.Marshal.Array pokeArray0",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "pokeArray0",
          "normalized": "a-\u003eb a c-\u003e[a]-\u003ed()",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "α-\u003epointer α pr-\u003e[α]-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:pokeArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily store a list of storable values in memory.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e, but for multiple elements.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "withArray",
          "package": "regional-pointers",
          "signature": "[α] -\u003e (forall sl.  LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Marshal-Array-Region.html#withArray",
          "type": "function"
        },
        "index": {
          "description": "Temporarily store list of storable values in memory Like with but for multiple elements",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "withArray",
          "normalized": "[a]-\u003e(b c LocalPtr a(LocalRegion d e)-\u003eRegionT(Local e)f g)-\u003eRegionT e f g",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "[α]-\u003e(forall sl. LocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:withArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithArray\u003c/a\u003e\u003c/code\u003e, but a terminator indicates where the array ends.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "withArray0",
          "package": "regional-pointers",
          "signature": "α -\u003e [α] -\u003e (forall sl.  LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Marshal-Array-Region.html#withArray0",
          "type": "function"
        },
        "index": {
          "description": "Like withArray but terminator indicates where the array ends",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "withArray0",
          "normalized": "a-\u003e[a]-\u003e(b c LocalPtr a(LocalRegion d e)-\u003eRegionT(Local e)f g)-\u003eRegionT e f g",
          "package": "regional-pointers",
          "partial": "Array",
          "signature": "α-\u003e[α]-\u003e(forall sl. LocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:withArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithArray\u003c/a\u003e\u003c/code\u003e, but the action gets the number of values as an additional\n parameter.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "withArrayLen",
          "package": "regional-pointers",
          "signature": "[α] -\u003e (forall sl.  Int -\u003e LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Marshal-Array-Region.html#withArrayLen",
          "type": "function"
        },
        "index": {
          "description": "Like withArray but the action gets the number of values as an additional parameter",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "withArrayLen",
          "normalized": "[a]-\u003e(b c Int-\u003eLocalPtr a(LocalRegion d e)-\u003eRegionT(Local e)f g)-\u003eRegionT e f g",
          "package": "regional-pointers",
          "partial": "Array Len",
          "signature": "[α]-\u003e(forall sl. Int-\u003eLocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:withArrayLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithArrayLen\u003c/a\u003e\u003c/code\u003e, but a terminator indicates where the array ends.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Array.Region",
          "name": "withArrayLen0",
          "package": "regional-pointers",
          "signature": "α -\u003e [α] -\u003e (forall sl.  Int -\u003e LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Marshal-Array-Region.html#withArrayLen0",
          "type": "function"
        },
        "index": {
          "description": "Like withArrayLen but terminator indicates where the array ends",
          "hierarchy": "Foreign Marshal Array Region",
          "module": "Foreign.Marshal.Array.Region",
          "name": "withArrayLen0",
          "normalized": "a-\u003e[a]-\u003e(b c Int-\u003eLocalPtr a(LocalRegion d e)-\u003eRegionT(Local e)f g)-\u003eRegionT e f g",
          "package": "regional-pointers",
          "partial": "Array Len",
          "signature": "α-\u003e[α]-\u003e(forall sl. Int-\u003eLocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Array-Region.html#v:withArrayLen0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Marshal.Utils.Region",
          "name": "Region",
          "package": "regional-pointers",
          "source": "src/Foreign-Marshal-Utils-Region.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "Region",
          "package": "regional-pointers",
          "partial": "Region",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Marshal.Utils.Region",
          "name": "MaybePeek",
          "package": "regional-pointers",
          "source": "src/Foreign-Marshal-Utils-Region.html#MaybePeek",
          "type": "class"
        },
        "index": {
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "MaybePeek",
          "package": "regional-pointers",
          "partial": "Maybe Peek",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#t:MaybePeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybePointer\u003c/a\u003e\u003c/code\u003e &#945;\u003c/code\u003e corresponds to a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e &#945;\u003c/code\u003e\n but additionally introduces some type equalities to the type-checker.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "MaybePointer",
          "package": "regional-pointers",
          "source": "src/Foreign-Marshal-Utils-Region.html#MaybePointer",
          "type": "data"
        },
        "index": {
          "description": "MaybePointer corresponds to Maybe but additionally introduces some type equalities to the type-checker",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "MaybePointer",
          "package": "regional-pointers",
          "partial": "Maybe Pointer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#t:MaybePointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Marshal.Utils.Region",
          "name": "JustPointer",
          "package": "regional-pointers",
          "signature": "α -\u003e MaybePointer α (RegionalPtr β r) β r",
          "source": "src/Foreign-Marshal-Utils-Region.html#MaybePointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "JustPointer",
          "normalized": "a-\u003eMaybePointer a(RegionalPtr b c)b c",
          "package": "regional-pointers",
          "partial": "Just Pointer",
          "signature": "α-\u003eMaybePointer α(RegionalPtr β r)β r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:JustPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Marshal.Utils.Region",
          "name": "NullPointer",
          "package": "regional-pointers",
          "signature": "MaybePointer α (NullPtr β RootRegion) β RootRegion",
          "source": "src/Foreign-Marshal-Utils-Region.html#MaybePointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "NullPointer",
          "package": "regional-pointers",
          "partial": "Null Pointer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:NullPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies the given number of bytes from the second area (source) into the\n first (destination); the copied areas may \u003cem\u003enot\u003c/em\u003e overlap\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Marshal.Utils.\u003ccode\u003e\u003ca\u003ecopyBytes\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "copyBytes",
          "package": "regional-pointers",
          "signature": "pointer1 α pr1-\u003e pointer2 α pr2-\u003e Int-\u003e cr ()",
          "type": "function"
        },
        "index": {
          "description": "Copies the given number of bytes from the second area source into the first destination the copied areas may not overlap Wraps Foreign.Marshal.Utils copyBytes",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "copyBytes",
          "normalized": "a b c-\u003ea b c-\u003eInt-\u003ed()",
          "package": "regional-pointers",
          "partial": "Bytes",
          "signature": "pointer α pr-\u003epointer α pr-\u003eInt-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:copyBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e to its numeric representation\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "fromBool",
          "package": "regional-pointers",
          "signature": "Bool -\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell Bool to its numeric representation",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "fromBool",
          "normalized": "Bool-\u003ea",
          "package": "regional-pointers",
          "partial": "Bool",
          "signature": "Bool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:fromBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate storage and marshal a storable value wrapped into a \u003ccode\u003e\u003ca\u003eMaybePointer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e is used to represent \u003ccode\u003e\u003ca\u003eNullPointer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlternative for \u003ccode\u003e\u003ca\u003emaybeNew\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "maybeNew",
          "package": "regional-pointers",
          "signature": "(α -\u003e m (RegionalPtr β r))-\u003e MaybePointer α pointer β r -\u003e m pointer",
          "type": "function"
        },
        "index": {
          "description": "Allocate storage and marshal storable value wrapped into MaybePointer The nullPtr is used to represent NullPointer Alternative for maybeNew",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "maybeNew",
          "normalized": "(a-\u003eb(RegionalPtr c d))-\u003eMaybePointer a e c d-\u003eb e",
          "package": "regional-pointers",
          "partial": "New",
          "signature": "(α-\u003em(RegionalPtr β r))-\u003eMaybePointer α pointer β r-\u003em pointer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:maybeNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003epeek\u003c/code\u003e combinator into a one returning \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if applied to a \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlternative for \u003ccode\u003e\u003ca\u003emaybePeek\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "maybePeek",
          "package": "regional-pointers",
          "signature": "maybePeek",
          "source": "src/Foreign-Marshal-Utils-Region.html#maybePeek",
          "type": "method"
        },
        "index": {
          "description": "Convert peek combinator into one returning Nothing if applied to nullPtr Alternative for maybePeek",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "maybePeek",
          "package": "regional-pointers",
          "partial": "Peek",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:maybePeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003ewithXXX\u003c/code\u003e combinator into one marshalling a value wrapped\n into a \u003ccode\u003e\u003ca\u003eMaybePointer\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e to represent \u003ccode\u003eNoPointer\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAlternative for \u003ccode\u003e\u003ca\u003emaybeWith\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "maybeWith",
          "package": "regional-pointers",
          "signature": "(α -\u003e (pointer -\u003e m γ) -\u003e m γ)-\u003e MaybePointer α pointer β r -\u003e (pointer -\u003e m γ) -\u003e m γ",
          "type": "function"
        },
        "index": {
          "description": "Converts withXXX combinator into one marshalling value wrapped into MaybePointer using nullPtr to represent NoPointer Alternative for maybeWith",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "maybeWith",
          "normalized": "(a-\u003e(b-\u003ec d)-\u003ec d)-\u003eMaybePointer a b e f-\u003e(b-\u003ec d)-\u003ec d",
          "package": "regional-pointers",
          "partial": "With",
          "signature": "(α-\u003e(pointer-\u003em γ)-\u003em γ)-\u003eMaybePointer α pointer β r-\u003e(pointer-\u003em γ)-\u003em γ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:maybeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopies the given number of bytes from the second area (source) into the\n first (destination); the copied areas \u003cem\u003emay\u003c/em\u003e overlap\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Marshal.Utils.\u003ccode\u003e\u003ca\u003emoveBytes\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "moveBytes",
          "package": "regional-pointers",
          "signature": "pointer1 α pr1-\u003e pointer2 α pr2-\u003e Int-\u003e cr ()",
          "type": "function"
        },
        "index": {
          "description": "Copies the given number of bytes from the second area source into the first destination the copied areas may overlap Wraps Foreign.Marshal.Utils moveBytes",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "moveBytes",
          "normalized": "a b c-\u003ea b c-\u003eInt-\u003ed()",
          "package": "regional-pointers",
          "partial": "Bytes",
          "signature": "pointer α pr-\u003epointer α pr-\u003eInt-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:moveBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a block of memory and marshal a value into it (the combination of\n \u003ccode\u003emalloc\u003c/code\u003e and \u003ccode\u003epoke\u003c/code\u003e).  The size of the area allocated is determined by the\n \u003ccode\u003e\u003ca\u003esizeOf\u003c/a\u003e\u003c/code\u003e method from the instance of \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e for the appropriate type.\n\u003c/p\u003e\u003cp\u003eThis provides a safer replacement for \u003ccode\u003eForeign.Marshal.Utils.\u003ccode\u003e\u003ca\u003enew\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "new",
          "package": "regional-pointers",
          "signature": "α -\u003e RegionT s pr (RegionalPtr α (RegionT s pr))",
          "source": "src/Foreign-Marshal-Utils-Region.html#new",
          "type": "function"
        },
        "index": {
          "description": "Allocate block of memory and marshal value into it the combination of malloc and poke The size of the area allocated is determined by the sizeOf method from the instance of Storable for the appropriate type This provides safer replacement for Foreign.Marshal.Utils new",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "new",
          "normalized": "a-\u003eRegionT b c(RegionalPtr a(RegionT b c))",
          "package": "regional-pointers",
          "signature": "α-\u003eRegionT s pr(RegionalPtr α(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Boolean in numeric representation to a Haskell value\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "toBool",
          "package": "regional-pointers",
          "signature": "a -\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Convert Boolean in numeric representation to Haskell value",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "toBool",
          "normalized": "a-\u003eBool",
          "package": "regional-pointers",
          "partial": "Bool",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:toBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e val f\u003c/code\u003e executes the computation \u003ccode\u003ef\u003c/code\u003e, passing as argument a regional\n pointer to a temporarily allocated block of memory into which \u003ccode\u003eval\u003c/code\u003e has been\n marshalled (the combination of \u003ccode\u003ealloca\u003c/code\u003e and \u003ccode\u003epoke\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe memory is freed when \u003ccode\u003ef\u003c/code\u003e terminates (either normally or via an\n exception).\n\u003c/p\u003e\u003cp\u003eThis provides a safer replacement for \u003ccode\u003eForeign.Marshal.Utils.\u003ccode\u003e\u003ca\u003ewith\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "with",
          "package": "regional-pointers",
          "signature": "α-\u003e (forall sl.  LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β)-\u003e RegionT s pr β",
          "type": "function"
        },
        "index": {
          "description": "with val executes the computation passing as argument regional pointer to temporarily allocated block of memory into which val has been marshalled the combination of alloca and poke The memory is freed when terminates either normally or via an exception This provides safer replacement for Foreign.Marshal.Utils with",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "with",
          "normalized": "a-\u003e(b c LocalPtr a(LocalRegion d e)-\u003eRegionT(Local e)f g)-\u003eRegionT e f g",
          "package": "regional-pointers",
          "signature": "α-\u003e(forall sl. LocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplicates a \u003ccode\u003ewithXXX\u003c/code\u003e combinator over a list of objects, yielding a list of\n marshalled objects\n\u003c/p\u003e",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "withMany",
          "package": "regional-pointers",
          "signature": "(a -\u003e (b -\u003e res) -\u003e res) -\u003e [a] -\u003e ([b] -\u003e res) -\u003e res",
          "type": "function"
        },
        "index": {
          "description": "Replicates withXXX combinator over list of objects yielding list of marshalled objects",
          "hierarchy": "Foreign Marshal Utils Region",
          "module": "Foreign.Marshal.Utils.Region",
          "name": "withMany",
          "normalized": "(a-\u003e(b-\u003ec)-\u003ec)-\u003e[a]-\u003e([b]-\u003ec)-\u003ec",
          "package": "regional-pointers",
          "partial": "Many",
          "signature": "(a-\u003e(b-\u003eres)-\u003eres)-\u003e[a]-\u003e([b]-\u003eres)-\u003eres",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Marshal-Utils-Region.html#v:withMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eUnsafe\u003c/em\u003e functions for constructing regional pointers, retrieving the native\n \u003ccode\u003ePtr\u003c/code\u003e from a regional pointer and for lifting operations on \u003ccode\u003ePtrs\u003c/code\u003e to\n \u003ccode\u003eRegionalPtrs\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "Unsafe",
          "package": "regional-pointers",
          "source": "src/Foreign-Ptr-Region-Unsafe.html",
          "type": "module"
        },
        "index": {
          "description": "Unsafe functions for constructing regional pointers retrieving the native Ptr from regional pointer and for lifting operations on Ptrs to RegionalPtrs",
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "Unsafe",
          "package": "regional-pointers",
          "partial": "Unsafe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the native pointer from a regional pointer.\n\u003c/p\u003e\u003cp\u003eThis function is unsafe because it allows you to both \u003ccode\u003efree\u003c/code\u003e the pointer\n before the region terminates and use the pointer outside the region when it\n is already freed.\n\u003c/p\u003e",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafePtr",
          "package": "regional-pointers",
          "signature": "pointer α r -\u003e Ptr α",
          "source": "src/Foreign-Ptr-Region-Internal.html#unsafePtr",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the native pointer from regional pointer This function is unsafe because it allows you to both free the pointer before the region terminates and use the pointer outside the region when it is already freed",
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafePtr",
          "normalized": "a b c-\u003ePtr b",
          "package": "regional-pointers",
          "partial": "Ptr",
          "signature": "pointer α r-\u003ePtr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:unsafePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a regional pointer from a native pointer and an \u003ccode\u003eIO\u003c/code\u003e computation that\nfinalizes the pointer (like \u003ccode\u003efree ptr\u003c/code\u003e) which is performed when the region\nterminates.\n\u003c/p\u003e\u003cp\u003eThis function is unsafe because this library can't guarantee that the\nfinalizer will actually finalize the pointer (suppose having \u003ccode\u003ereturn ()\u003c/code\u003e as\nthe finalizer). You have to verify the correct finalisation yourself.\n\u003c/p\u003e",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafeRegionalPtr",
          "package": "regional-pointers",
          "signature": "Ptr α -\u003e Finalizer -\u003e RegionT s pr (RegionalPtr α (RegionT s pr))",
          "source": "src/Foreign-Ptr-Region-Internal.html#unsafeRegionalPtr",
          "type": "function"
        },
        "index": {
          "description": "Construct regional pointer from native pointer and an IO computation that finalizes the pointer like free ptr which is performed when the region terminates This function is unsafe because this library can guarantee that the finalizer will actually finalize the pointer suppose having return as the finalizer You have to verify the correct finalisation yourself",
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafeRegionalPtr",
          "normalized": "Ptr a-\u003eFinalizer-\u003eRegionT b c(RegionalPtr a(RegionT b c))",
          "package": "regional-pointers",
          "partial": "Regional Ptr",
          "signature": "Ptr α-\u003eFinalizer-\u003eRegionT s pr(RegionalPtr α(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:unsafeRegionalPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafeWrap",
          "package": "regional-pointers",
          "signature": "(Ptr α -\u003e IO β) -\u003e pointer α r -\u003e m β",
          "source": "src/Foreign-Ptr-Region-Internal.html#unsafeWrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafeWrap",
          "normalized": "(Ptr a-\u003eIO b)-\u003ec a d-\u003ee b",
          "package": "regional-pointers",
          "partial": "Wrap",
          "signature": "(Ptr α-\u003eIO β)-\u003epointer α r-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:unsafeWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafeWrap2",
          "package": "regional-pointers",
          "signature": "(Ptr α -\u003e γ -\u003e IO β) -\u003e pointer α r -\u003e γ -\u003e m β",
          "source": "src/Foreign-Ptr-Region-Internal.html#unsafeWrap2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafeWrap2",
          "normalized": "(Ptr a-\u003eb-\u003eIO c)-\u003ed a e-\u003eb-\u003ef c",
          "package": "regional-pointers",
          "partial": "Wrap",
          "signature": "(Ptr α-\u003eγ-\u003eIO β)-\u003epointer α r-\u003eγ-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:unsafeWrap2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafeWrap2flp",
          "package": "regional-pointers",
          "signature": "(γ -\u003e Ptr α -\u003e IO β) -\u003e γ -\u003e pointer α r -\u003e m β",
          "source": "src/Foreign-Ptr-Region-Internal.html#unsafeWrap2flp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafeWrap2flp",
          "normalized": "(a-\u003ePtr b-\u003eIO c)-\u003ea-\u003ed b e-\u003ef c",
          "package": "regional-pointers",
          "partial": "Wrap",
          "signature": "(γ-\u003ePtr α-\u003eIO β)-\u003eγ-\u003epointer α r-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:unsafeWrap2flp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafeWrap3",
          "package": "regional-pointers",
          "signature": "(Ptr α -\u003e γ -\u003e δ -\u003e IO β) -\u003e pointer α r -\u003e γ -\u003e δ -\u003e m β",
          "source": "src/Foreign-Ptr-Region-Internal.html#unsafeWrap3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "unsafeWrap3",
          "normalized": "(Ptr a-\u003eb-\u003ec-\u003eIO d)-\u003ee a f-\u003eb-\u003ec-\u003eg d",
          "package": "regional-pointers",
          "partial": "Wrap",
          "signature": "(Ptr α-\u003eγ-\u003eδ-\u003eIO β)-\u003epointer α r-\u003eγ-\u003eδ-\u003em β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:unsafeWrap3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapAlloca",
          "package": "regional-pointers",
          "signature": "((Ptr α -\u003e IO (RegionT s pr β)) -\u003e IO (RegionT s pr β)) -\u003e (forall sl.  LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Ptr-Region-Internal.html#wrapAlloca",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapAlloca",
          "normalized": "((Ptr a-\u003eIO(RegionT b c d))-\u003eIO(RegionT b c d))-\u003e(e f LocalPtr a(LocalRegion g b)-\u003eRegionT(Local b)c d)-\u003eRegionT b c d",
          "package": "regional-pointers",
          "partial": "Alloca",
          "signature": "((Ptr α-\u003eIO(RegionT s pr β))-\u003eIO(RegionT s pr β))-\u003e(forall sl. LocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:wrapAlloca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapAlloca2",
          "package": "regional-pointers",
          "signature": "((γ -\u003e Ptr α -\u003e IO (RegionT s pr β)) -\u003e IO (RegionT s pr β)) -\u003e (forall sl.  γ -\u003e LocalPtr α (LocalRegion sl s) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Ptr-Region-Internal.html#wrapAlloca2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapAlloca2",
          "normalized": "((a-\u003ePtr b-\u003eIO(RegionT c d e))-\u003eIO(RegionT c d e))-\u003e(f g a-\u003eLocalPtr b(LocalRegion h c)-\u003eRegionT(Local c)d e)-\u003eRegionT c d e",
          "package": "regional-pointers",
          "partial": "Alloca",
          "signature": "((γ-\u003ePtr α-\u003eIO(RegionT s pr β))-\u003eIO(RegionT s pr β))-\u003e(forall sl. γ-\u003eLocalPtr α(LocalRegion sl s)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:wrapAlloca2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapMalloc",
          "package": "regional-pointers",
          "signature": "IO (Ptr α) -\u003e RegionT s pr (RegionalPtr α (RegionT s pr))",
          "source": "src/Foreign-Ptr-Region-Internal.html#wrapMalloc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapMalloc",
          "normalized": "IO(Ptr a)-\u003eRegionT b c(RegionalPtr a(RegionT b c))",
          "package": "regional-pointers",
          "partial": "Malloc",
          "signature": "IO(Ptr α)-\u003eRegionT s pr(RegionalPtr α(RegionT s pr))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:wrapMalloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapNewStringLen",
          "package": "regional-pointers",
          "signature": "IO (Ptr α, Int) -\u003e RegionT s pr (RegionalPtr α (RegionT s pr), Int)",
          "source": "src/Foreign-Ptr-Region-Internal.html#wrapNewStringLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapNewStringLen",
          "normalized": "IO(Ptr a,Int)-\u003eRegionT b c(RegionalPtr a(RegionT b c),Int)",
          "package": "regional-pointers",
          "partial": "New String Len",
          "signature": "IO(Ptr α,Int)-\u003eRegionT s pr(RegionalPtr α(RegionT s pr),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:wrapNewStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapPeekStringLen",
          "package": "regional-pointers",
          "signature": "((Ptr α, Int) -\u003e IO String) -\u003e (pointer α pr, Int) -\u003e cr String",
          "source": "src/Foreign-Ptr-Region-Internal.html#wrapPeekStringLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapPeekStringLen",
          "normalized": "((Ptr a,Int)-\u003eIO String)-\u003e(b a c,Int)-\u003ed String",
          "package": "regional-pointers",
          "partial": "Peek String Len",
          "signature": "((Ptr α,Int)-\u003eIO String)-\u003e(pointer α pr,Int)-\u003ecr String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:wrapPeekStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapWithStringLen",
          "package": "regional-pointers",
          "signature": "(((Ptr α, Int) -\u003e IO (RegionT s pr β)) -\u003e IO (RegionT s pr β)) -\u003e (forall sl.  (LocalPtr α (LocalRegion sl s), Int) -\u003e RegionT (Local s) pr β) -\u003e RegionT s pr β",
          "source": "src/Foreign-Ptr-Region-Internal.html#wrapWithStringLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region Unsafe",
          "module": "Foreign.Ptr.Region.Unsafe",
          "name": "wrapWithStringLen",
          "normalized": "(((Ptr a,Int)-\u003eIO(RegionT b c d))-\u003eIO(RegionT b c d))-\u003e(e f(LocalPtr a(LocalRegion g b),Int)-\u003eRegionT(Local b)c d)-\u003eRegionT b c d",
          "package": "regional-pointers",
          "partial": "With String Len",
          "signature": "(((Ptr α,Int)-\u003eIO(RegionT s pr β))-\u003eIO(RegionT s pr β))-\u003e(forall sl.(LocalPtr α(LocalRegion sl s),Int)-\u003eRegionT(Local s)pr β)-\u003eRegionT s pr β",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region-Unsafe.html#v:wrapWithStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region",
          "name": "Region",
          "package": "regional-pointers",
          "source": "src/Foreign-Ptr-Region.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "Region",
          "package": "regional-pointers",
          "partial": "Region",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of pointers which point to allocated memory. \u003ccode\u003e\u003ca\u003eNullPtr\u003c/a\u003e\u003c/code\u003e is the only\n pointer which is not an instance of this class.\n\u003c/p\u003e\u003cp\u003eThe super class \u003ccode\u003ePrivateAllocatedPointer\u003c/code\u003e is not exported by this module\n which ensures you can't accidentally make \u003ccode\u003e\u003ca\u003eNullPtr\u003c/a\u003e\u003c/code\u003e an instance of this class.\n\u003c/p\u003e",
          "module": "Foreign.Ptr.Region",
          "name": "AllocatedPointer",
          "package": "regional-pointers",
          "source": "src/Foreign-Ptr-Region-Internal.html#AllocatedPointer",
          "type": "class"
        },
        "index": {
          "description": "Class of pointers which point to allocated memory NullPtr is the only pointer which is not an instance of this class The super class PrivateAllocatedPointer is not exported by this module which ensures you can accidentally make NullPtr an instance of this class",
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "AllocatedPointer",
          "package": "regional-pointers",
          "partial": "Allocated Pointer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#t:AllocatedPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region",
          "name": "NullPtr",
          "package": "regional-pointers",
          "source": "src/Foreign-Ptr-Region-Internal.html#NullPtr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "NullPtr",
          "package": "regional-pointers",
          "partial": "Null Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#t:NullPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Foreign.Ptr.Region",
          "name": "Pointer",
          "package": "regional-pointers",
          "source": "src/Foreign-Ptr-Region-Internal.html#Pointer",
          "type": "class"
        },
        "index": {
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "Pointer",
          "package": "regional-pointers",
          "partial": "Pointer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#t:Pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA regional pointer to memory.\n\u003c/p\u003e\u003cp\u003eThis should provide a safer replacement for \u003ccode\u003eForeign.Ptr.\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.Ptr.Region",
          "name": "RegionalPtr",
          "package": "regional-pointers",
          "source": "src/Foreign-Ptr-Region-Internal.html#RegionalPtr",
          "type": "data"
        },
        "index": {
          "description": "regional pointer to memory This should provide safer replacement for Foreign.Ptr Ptr",
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "RegionalPtr",
          "package": "regional-pointers",
          "partial": "Regional Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#t:RegionalPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an arbitrary address and an alignment constraint, \u003ccode\u003ealignPtr\u003c/code\u003e yields\n the next higher address that fulfills the alignment constraint. An alignment\n constraint \u003ccode\u003ex\u003c/code\u003e is fulfilled by any address divisible by \u003ccode\u003ex\u003c/code\u003e.  This operation\n is idempotent.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Ptr.\u003c/code\u003e\u003ccode\u003e\u003ca\u003ealignPtr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.Ptr.Region",
          "name": "alignPtr",
          "package": "regional-pointers",
          "signature": "pointer α r -\u003e Int -\u003e pointer α r",
          "source": "src/Foreign-Ptr-Region.html#alignPtr",
          "type": "function"
        },
        "index": {
          "description": "Given an arbitrary address and an alignment constraint alignPtr yields the next higher address that fulfills the alignment constraint An alignment constraint is fulfilled by any address divisible by This operation is idempotent Wraps Foreign.Ptr alignPtr",
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "alignPtr",
          "normalized": "a b c-\u003eInt-\u003ea b c",
          "package": "regional-pointers",
          "partial": "Ptr",
          "signature": "pointer α r-\u003eInt-\u003epointer α r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#v:alignPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003ecastPtr\u003c/code\u003e function casts a pointer from one type to another.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Ptr.\u003c/code\u003e\u003ccode\u003e\u003ca\u003ecastPtr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.Ptr.Region",
          "name": "castPtr",
          "package": "regional-pointers",
          "signature": "pointer α r -\u003e pointer β r",
          "source": "src/Foreign-Ptr-Region.html#castPtr",
          "type": "function"
        },
        "index": {
          "description": "The castPtr function casts pointer from one type to another Wraps Foreign.Ptr castPtr",
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "castPtr",
          "normalized": "a b c-\u003ea d c",
          "package": "regional-pointers",
          "partial": "Ptr",
          "signature": "pointer α r-\u003epointer β r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#v:castPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a \u003cem\u003epure\u003c/em\u003e function to the inner pointer of a regional pointer.\n\u003c/p\u003e",
          "module": "Foreign.Ptr.Region",
          "name": "mapPointer",
          "package": "regional-pointers",
          "signature": "(Ptr α -\u003e Ptr β) -\u003e pointer α r -\u003e pointer β r",
          "source": "src/Foreign-Ptr-Region-Internal.html#mapPointer",
          "type": "method"
        },
        "index": {
          "description": "Apply pure function to the inner pointer of regional pointer",
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "mapPointer",
          "normalized": "(Ptr a-\u003ePtr b)-\u003ec a d-\u003ec b d",
          "package": "regional-pointers",
          "partial": "Pointer",
          "signature": "(Ptr α-\u003ePtr β)-\u003epointer α r-\u003epointer β r",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#v:mapPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the offset required to get from the second to the first\n argument. We have\n\u003c/p\u003e\u003cpre\u003e p2 == p1 `plusPtr` (p2 `minusPtr` p1)\n\u003c/pre\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Ptr.\u003c/code\u003e\u003ccode\u003e\u003ca\u003eminusPtr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.Ptr.Region",
          "name": "minusPtr",
          "package": "regional-pointers",
          "signature": "pointer α r1 -\u003e pointer β r2 -\u003e Int",
          "source": "src/Foreign-Ptr-Region.html#minusPtr",
          "type": "function"
        },
        "index": {
          "description": "Computes the offset required to get from the second to the first argument We have p2 p1 plusPtr p2 minusPtr p1 Wraps Foreign.Ptr minusPtr",
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "minusPtr",
          "normalized": "a b c-\u003ea d c-\u003eInt",
          "package": "regional-pointers",
          "partial": "Ptr",
          "signature": "pointer α r-\u003epointer β r-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#v:minusPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constant \u003ccode\u003enullPtr\u003c/code\u003e is a pointer which is not associated with a valid\nmemory location.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003enullPtr\u003c/code\u003e is a pure value. This means it does not perform the\nside-effect of registering a finalizer like \"\u003ccode\u003efree nullPtr\u003c/code\u003e\"\nin the \u003ccode\u003e\u003ca\u003eRegionT\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eFinally note that the region parameter of the \u003ccode\u003e\u003ca\u003eNullPtr\u003c/a\u003e\u003c/code\u003e is set to\n\u003ccode\u003e\u003ca\u003eRootRegion\u003c/a\u003e\u003c/code\u003e which is the ancestor of any region.\nThis allows \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e to be used in any region.\n\u003c/p\u003e",
          "module": "Foreign.Ptr.Region",
          "name": "nullPtr",
          "package": "regional-pointers",
          "signature": "NullPtr α RootRegion",
          "source": "src/Foreign-Ptr-Region-Internal.html#nullPtr",
          "type": "function"
        },
        "index": {
          "description": "The constant nullPtr is pointer which is not associated with valid memory location Note that nullPtr is pure value This means it does not perform the side-effect of registering finalizer like free nullPtr in the RegionT monad Finally note that the region parameter of the NullPtr is set to RootRegion which is the ancestor of any region This allows nullPtr to be used in any region",
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "nullPtr",
          "package": "regional-pointers",
          "partial": "Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#v:nullPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvances the given address by the given offset in bytes.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Ptr.\u003c/code\u003e\u003ccode\u003e\u003ca\u003eplusPtr\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Foreign.Ptr.Region",
          "name": "plusPtr",
          "package": "regional-pointers",
          "signature": "pointer α r -\u003e Int -\u003e pointer β r",
          "source": "src/Foreign-Ptr-Region.html#plusPtr",
          "type": "function"
        },
        "index": {
          "description": "Advances the given address by the given offset in bytes Wraps Foreign.Ptr plusPtr",
          "hierarchy": "Foreign Ptr Region",
          "module": "Foreign.Ptr.Region",
          "name": "plusPtr",
          "normalized": "a b c-\u003eInt-\u003ea d c",
          "package": "regional-pointers",
          "partial": "Ptr",
          "signature": "pointer α r-\u003eInt-\u003epointer β r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Ptr-Region.html#v:plusPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLifts methods of the \u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e type class from \u003ccode\u003eForeign.Storable\u003c/code\u003e to\n regional pointers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Foreign.Storable.Region",
          "name": "Region",
          "package": "regional-pointers",
          "source": "src/Foreign-Storable-Region.html",
          "type": "module"
        },
        "index": {
          "description": "Lifts methods of the Storable type class from Foreign.Storable to regional pointers",
          "hierarchy": "Foreign Storable Region",
          "module": "Foreign.Storable.Region",
          "name": "Region",
          "package": "regional-pointers",
          "partial": "Region",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Storable-Region.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from the given memory location.\n\u003c/p\u003e\u003cp\u003eNote that the peek and poke functions might require properly aligned\n addresses to function correctly.  This is architecture dependent; thus,\n portable code should ensure that when peeking or poking values of some type\n \u003ccode\u003ea\u003c/code\u003e, the alignment constraint for \u003ccode\u003ea\u003c/code\u003e, as given by the function \u003ccode\u003ealignment\u003c/code\u003e\n is fulfilled.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Storable.\u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Storable.Region",
          "name": "peek",
          "package": "regional-pointers",
          "signature": "pointer α pr -\u003e cr α",
          "source": "src/Foreign-Storable-Region.html#peek",
          "type": "function"
        },
        "index": {
          "description": "Read value from the given memory location Note that the peek and poke functions might require properly aligned addresses to function correctly This is architecture dependent thus portable code should ensure that when peeking or poking values of some type the alignment constraint for as given by the function alignment is fulfilled Wraps Foreign.Storable peek",
          "hierarchy": "Foreign Storable Region",
          "module": "Foreign.Storable.Region",
          "name": "peek",
          "normalized": "a b c-\u003ed b",
          "package": "regional-pointers",
          "signature": "pointer α pr-\u003ecr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Storable-Region.html#v:peek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from a memory location given by a base address and offset.\n The following equality holds:\n\u003c/p\u003e\u003cpre\u003e peekByteOff addr off = peek (addr `plusPtr` off)\n\u003c/pre\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Storable.\u003ccode\u003e\u003ca\u003epeekByteOff\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Storable.Region",
          "name": "peekByteOff",
          "package": "regional-pointers",
          "signature": "pointer β pr -\u003e Int -\u003e cr α",
          "source": "src/Foreign-Storable-Region.html#peekByteOff",
          "type": "function"
        },
        "index": {
          "description": "Read value from memory location given by base address and offset The following equality holds peekByteOff addr off peek addr plusPtr off Wraps Foreign.Storable peekByteOff",
          "hierarchy": "Foreign Storable Region",
          "module": "Foreign.Storable.Region",
          "name": "peekByteOff",
          "normalized": "a b c-\u003eInt-\u003ed e",
          "package": "regional-pointers",
          "partial": "Byte Off",
          "signature": "pointer β pr-\u003eInt-\u003ecr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Storable-Region.html#v:peekByteOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a value from a memory area regarded as an array of values of the same\n kind. The first argument specifies the start address of the array and the\n second the index into the array (the first element of the array has index\n \u003ccode\u003e0\u003c/code\u003e). The following equality holds,\n\u003c/p\u003e\u003cpre\u003e peekElemOff addr idx = IOExts.fixIO $ \\result -\u003e\n   peek (addr `plusPtr` (idx * sizeOf result))\n\u003c/pre\u003e\u003cp\u003eNote that this is only a specification, not necessarily the concrete\n implementation of the function.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Storable.\u003ccode\u003e\u003ca\u003epeekElemOff\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Storable.Region",
          "name": "peekElemOff",
          "package": "regional-pointers",
          "signature": "pointer α pr -\u003e Int -\u003e cr α",
          "source": "src/Foreign-Storable-Region.html#peekElemOff",
          "type": "function"
        },
        "index": {
          "description": "Read value from memory area regarded as an array of values of the same kind The first argument specifies the start address of the array and the second the index into the array the first element of the array has index The following equality holds peekElemOff addr idx IOExts.fixIO result peek addr plusPtr idx sizeOf result Note that this is only specification not necessarily the concrete implementation of the function Wraps Foreign.Storable peekElemOff",
          "hierarchy": "Foreign Storable Region",
          "module": "Foreign.Storable.Region",
          "name": "peekElemOff",
          "normalized": "a b c-\u003eInt-\u003ed b",
          "package": "regional-pointers",
          "partial": "Elem Off",
          "signature": "pointer α pr-\u003eInt-\u003ecr α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Storable-Region.html#v:peekElemOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the given value to the given memory location.  Alignment restrictions\n might apply; see \u003ccode\u003e\u003ca\u003epeek\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Storable.\u003ccode\u003e\u003ca\u003epoke\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Storable.Region",
          "name": "poke",
          "package": "regional-pointers",
          "signature": "pointer α pr -\u003e α -\u003e cr ()",
          "source": "src/Foreign-Storable-Region.html#poke",
          "type": "function"
        },
        "index": {
          "description": "Write the given value to the given memory location Alignment restrictions might apply see peek Wraps Foreign.Storable poke",
          "hierarchy": "Foreign Storable Region",
          "module": "Foreign.Storable.Region",
          "name": "poke",
          "normalized": "a b c-\u003eb-\u003ed()",
          "package": "regional-pointers",
          "signature": "pointer α pr-\u003eα-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Storable-Region.html#v:poke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a memory location given by a base address and offset.  The\n following equality holds:\n\u003c/p\u003e\u003cpre\u003e pokeByteOff addr off x = poke (addr `plusPtr` off) x\n\u003c/pre\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Storable.\u003ccode\u003e\u003ca\u003epokeByteOff\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Storable.Region",
          "name": "pokeByteOff",
          "package": "regional-pointers",
          "signature": "pointer β pr -\u003e Int -\u003e α -\u003e cr ()",
          "source": "src/Foreign-Storable-Region.html#pokeByteOff",
          "type": "function"
        },
        "index": {
          "description": "Write value to memory location given by base address and offset The following equality holds pokeByteOff addr off poke addr plusPtr off Wraps Foreign.Storable pokeByteOff",
          "hierarchy": "Foreign Storable Region",
          "module": "Foreign.Storable.Region",
          "name": "pokeByteOff",
          "normalized": "a b c-\u003eInt-\u003ed-\u003ee()",
          "package": "regional-pointers",
          "partial": "Byte Off",
          "signature": "pointer β pr-\u003eInt-\u003eα-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Storable-Region.html#v:pokeByteOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value to a memory area regarded as an array of values of the same\n kind.  The following equality holds:\n\u003c/p\u003e\u003cpre\u003e pokeElemOff addr idx x =\n   poke (addr `plusPtr` (idx * sizeOf x)) x\n\u003c/pre\u003e\u003cp\u003eWraps: \u003ccode\u003eForeign.Storable.\u003ccode\u003e\u003ca\u003epokeElemOff\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Foreign.Storable.Region",
          "name": "pokeElemOff",
          "package": "regional-pointers",
          "signature": "pointer α pr -\u003e Int -\u003e α -\u003e cr ()",
          "source": "src/Foreign-Storable-Region.html#pokeElemOff",
          "type": "function"
        },
        "index": {
          "description": "Write value to memory area regarded as an array of values of the same kind The following equality holds pokeElemOff addr idx poke addr plusPtr idx sizeOf Wraps Foreign.Storable pokeElemOff",
          "hierarchy": "Foreign Storable Region",
          "module": "Foreign.Storable.Region",
          "name": "pokeElemOff",
          "normalized": "a b c-\u003eInt-\u003eb-\u003ed()",
          "package": "regional-pointers",
          "partial": "Elem Off",
          "signature": "pointer α pr-\u003eInt-\u003eα-\u003ecr()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regional-pointers/docs/Foreign-Storable-Region.html#v:pokeElemOff"
      }
    }
  ]
]