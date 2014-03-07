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
        "word": "pcd-loader"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFacility to convert an ASCII PCD file to a Binary one.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "PCD.Conversion",
          "name": "Conversion",
          "package": "pcd-loader",
          "source": "src/PCD-Conversion.html",
          "type": "module"
        },
        "index": {
          "description": "Facility to convert an ASCII PCD file to Binary one",
          "hierarchy": "PCD Conversion",
          "module": "PCD.Conversion",
          "name": "Conversion",
          "package": "pcd-loader",
          "partial": "Conversion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Conversion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003easciiToBinary inputFile outputFile\u003c/code\u003e converts a PCD file from\n ASCII to Binary.\n\u003c/p\u003e",
          "module": "PCD.Conversion",
          "name": "asciiToBinary",
          "package": "pcd-loader",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/PCD-Conversion.html#asciiToBinary",
          "type": "function"
        },
        "index": {
          "description": "asciiToBinary inputFile outputFile converts PCD file from ASCII to Binary",
          "hierarchy": "PCD Conversion",
          "module": "PCD.Conversion",
          "name": "asciiToBinary",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "pcd-loader",
          "partial": "To Binary",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Conversion.html#v:asciiToBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for PCD (point cloud data) files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "PCD.Data",
          "name": "Data",
          "package": "pcd-loader",
          "source": "src/PCD-Data.html",
          "type": "module"
        },
        "index": {
          "description": "Parser for PCD point cloud data files",
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "Data",
          "package": "pcd-loader",
          "partial": "Data",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Data",
          "name": "FieldType",
          "package": "pcd-loader",
          "source": "src/PCD-Header.html#FieldType",
          "type": "data"
        },
        "index": {
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "FieldType",
          "package": "pcd-loader",
          "partial": "Field Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#t:FieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PCD.Data\",\"PCD.Header\"]",
          "name": "TChar",
          "package": "pcd-loader",
          "signature": "TChar !Int8",
          "source": "src/PCD-Header.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TChar\",\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:TChar\"]"
        },
        "index": {
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "TChar",
          "package": "pcd-loader",
          "partial": "TChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PCD.Data\",\"PCD.Header\"]",
          "name": "TDouble",
          "package": "pcd-loader",
          "signature": "TDouble !Double",
          "source": "src/PCD-Header.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TDouble\",\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:TDouble\"]"
        },
        "index": {
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "TDouble",
          "package": "pcd-loader",
          "partial": "TDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PCD.Data\",\"PCD.Header\"]",
          "name": "TFloat",
          "package": "pcd-loader",
          "signature": "TFloat !Float",
          "source": "src/PCD-Header.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TFloat\",\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:TFloat\"]"
        },
        "index": {
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "TFloat",
          "package": "pcd-loader",
          "partial": "TFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PCD.Data\",\"PCD.Header\"]",
          "name": "TInt",
          "package": "pcd-loader",
          "signature": "TInt !Int32",
          "source": "src/PCD-Header.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TInt\",\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:TInt\"]"
        },
        "index": {
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "TInt",
          "package": "pcd-loader",
          "partial": "TInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PCD.Data\",\"PCD.Header\"]",
          "name": "TShort",
          "package": "pcd-loader",
          "signature": "TShort !Int16",
          "source": "src/PCD-Header.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TShort\",\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:TShort\"]"
        },
        "index": {
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "TShort",
          "package": "pcd-loader",
          "partial": "TShort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TShort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PCD.Data\",\"PCD.Header\"]",
          "name": "TUchar",
          "package": "pcd-loader",
          "signature": "TUchar !Word8",
          "source": "src/PCD-Header.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TUchar\",\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:TUchar\"]"
        },
        "index": {
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "TUchar",
          "package": "pcd-loader",
          "partial": "TUchar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TUchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PCD.Data\",\"PCD.Header\"]",
          "name": "TUint",
          "package": "pcd-loader",
          "signature": "TUint !Word32",
          "source": "src/PCD-Header.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TUint\",\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:TUint\"]"
        },
        "index": {
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "TUint",
          "package": "pcd-loader",
          "partial": "TUint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TUint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"PCD.Data\",\"PCD.Header\"]",
          "name": "TUshort",
          "package": "pcd-loader",
          "signature": "TUshort !Word16",
          "source": "src/PCD-Header.html#FieldType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TUshort\",\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:TUshort\"]"
        },
        "index": {
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "TUshort",
          "package": "pcd-loader",
          "partial": "TUshort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:TUshort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse every field of every point in a PCD file. Returns a function\n that may be used to project out a named field.\n\u003c/p\u003e",
          "module": "PCD.Data",
          "name": "loadFieldsByName",
          "package": "pcd-loader",
          "signature": "FilePath -\u003e IO (Text -\u003e Vector FieldType)",
          "source": "src/PCD-Data.html#loadFieldsByName",
          "type": "function"
        },
        "index": {
          "description": "Parse every field of every point in PCD file Returns function that may be used to project out named field",
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "loadFieldsByName",
          "normalized": "FilePath-\u003eIO(Text-\u003eVector FieldType)",
          "package": "pcd-loader",
          "partial": "Fields By Name",
          "signature": "FilePath-\u003eIO(Text-\u003eVector FieldType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:loadFieldsByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of points, each represented as a \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of\n \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e fields. If you wish to use field names to access to the\n data, consider using \u003ccode\u003e\u003ca\u003eloadFieldsByName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PCD.Data",
          "name": "loadFlexiblePoints",
          "package": "pcd-loader",
          "signature": "Header -\u003e Handle -\u003e IO (Vector (Vector FieldType))",
          "source": "src/PCD-Data.html#loadFlexiblePoints",
          "type": "function"
        },
        "index": {
          "description": "Load Vector of points each represented as Vector of FieldType fields If you wish to use field names to access to the data consider using loadFieldsByName",
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "loadFlexiblePoints",
          "normalized": "Header-\u003eHandle-\u003eIO(Vector(Vector FieldType))",
          "package": "pcd-loader",
          "partial": "Flexible Points",
          "signature": "Header-\u003eHandle-\u003eIO(Vector(Vector FieldType))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:loadFlexiblePoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a PCD file consisting of floating point XYZ coordinates for\n each point.\n\u003c/p\u003e",
          "module": "PCD.Data",
          "name": "loadXyz",
          "package": "pcd-loader",
          "signature": "FilePath -\u003e IO (Vector (V3 a))",
          "source": "src/PCD-Data.html#loadXyz",
          "type": "function"
        },
        "index": {
          "description": "Read PCD file consisting of floating point XYZ coordinates for each point",
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "loadXyz",
          "normalized": "FilePath-\u003eIO(Vector(V a))",
          "package": "pcd-loader",
          "partial": "Xyz",
          "signature": "FilePath-\u003eIO(Vector(V a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:loadXyz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a PCD file consisting of floating point XYZW coordinates for\n each point (where the final \"W\" field may be an RGB triple\n encoded as a float).\n\u003c/p\u003e",
          "module": "PCD.Data",
          "name": "loadXyzw",
          "package": "pcd-loader",
          "signature": "FilePath -\u003e IO (Vector (V4 a))",
          "source": "src/PCD-Data.html#loadXyzw",
          "type": "function"
        },
        "index": {
          "description": "Read PCD file consisting of floating point XYZW coordinates for each point where the final field may be an RGB triple encoded as float",
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "loadXyzw",
          "normalized": "FilePath-\u003eIO(Vector(V a))",
          "package": "pcd-loader",
          "partial": "Xyzw",
          "signature": "FilePath-\u003eIO(Vector(V a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:loadXyzw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003emkHeaderXYZ sample n\u003c/code\u003e builds a \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003en\u003c/code\u003e points with\n fields \"x\", \"y\", and \"z\" of \u003ccode\u003e\u003ca\u003eDimType\u003c/a\u003e\u003c/code\u003e and size (in bytes)\n derived from the \u003ccode\u003e\u003ca\u003ePCDType\u003c/a\u003e\u003c/code\u003e instance of \u003ccode\u003esample\u003c/code\u003e. Example:\n\u003c/p\u003e\u003cpre\u003e mkHeaderXYZ (undefined::Float) 1000\n\u003c/pre\u003e",
          "module": "[\"PCD.Data\",\"PCD.Header\"]",
          "name": "mkHeaderXYZ",
          "package": "pcd-loader",
          "signature": "a -\u003e Int -\u003e Header",
          "source": "src/PCD-Header.html#mkHeaderXYZ",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:mkHeaderXYZ\",\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:mkHeaderXYZ\"]"
        },
        "index": {
          "description": "mkHeaderXYZ sample builds Header for points with fields and of DimType and size in bytes derived from the PCDType instance of sample Example mkHeaderXYZ undefined Float",
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "mkHeaderXYZ",
          "normalized": "a-\u003eInt-\u003eHeader",
          "package": "pcd-loader",
          "partial": "Header XYZ",
          "signature": "a-\u003eInt-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:mkHeaderXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a PCD header for a monotyped vector point\n type. \u003ccode\u003emkSimpleHeader fields (type,sz) n\u003c/code\u003e prepares a \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e for\n \u003ccode\u003en\u003c/code\u003e points with field names \u003ccode\u003efields\u003c/code\u003e, field type given by \u003ccode\u003etype\u003c/code\u003e,\n and field size given by \u003ccode\u003esz\u003c/code\u003e. Example to save 1000 3D points using\n a single-precision floating point number (4 bytes) for each field:\n\u003c/p\u003e\u003cpre\u003e mkSimpleHeader [\"x\",\"y\",\"z\"] (F,4) 1000\n\u003c/pre\u003e",
          "module": "[\"PCD.Data\",\"PCD.Header\"]",
          "name": "mkSimpleHeader",
          "package": "pcd-loader",
          "signature": "[Text] -\u003e (DimType, Int) -\u003e Int -\u003e Header",
          "source": "src/PCD-Header.html#mkSimpleHeader",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:mkSimpleHeader\",\"http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:mkSimpleHeader\"]"
        },
        "index": {
          "description": "Make PCD header for monotyped vector point type mkSimpleHeader fields type sz prepares Header for points with field names fields field type given by type and field size given by sz Example to save points using single-precision floating point number bytes for each field mkSimpleHeader",
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "mkSimpleHeader",
          "normalized": "[Text]-\u003e(DimType,Int)-\u003eInt-\u003eHeader",
          "package": "pcd-loader",
          "partial": "Simple Header",
          "signature": "[Text]-\u003e(DimType,Int)-\u003eInt-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:mkSimpleHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave a binary PCD file including only the named fields. This is\n useful when you have a PCD file that has more fields for each point\n than you care about. For instance, you may wish to extract just the\n \"x\", \"y\", and \"z\" fields for each point. This can be\n accomplished using, \u003ccode\u003eprojectBinaryFields [\"x\", \"y\", \"z\"]\n inputFile outputFile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PCD.Data",
          "name": "projectBinaryFields",
          "package": "pcd-loader",
          "signature": "[Text] -\u003e FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/PCD-Data.html#projectBinaryFields",
          "type": "function"
        },
        "index": {
          "description": "Save binary PCD file including only the named fields This is useful when you have PCD file that has more fields for each point than you care about For instance you may wish to extract just the and fields for each point This can be accomplished using projectBinaryFields inputFile outputFile",
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "projectBinaryFields",
          "normalized": "[Text]-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "package": "pcd-loader",
          "partial": "Binary Fields",
          "signature": "[Text]-\u003eFilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:projectBinaryFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse an existing PCD header to save binary point data to a\n file. The supplied header is used as-is, except that its format is\n set to \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "PCD.Data",
          "name": "saveBinaryPcd",
          "package": "pcd-loader",
          "signature": "FilePath -\u003e Header -\u003e Vector a -\u003e IO ()",
          "source": "src/PCD-Data.html#saveBinaryPcd",
          "type": "function"
        },
        "index": {
          "description": "Use an existing PCD header to save binary point data to file The supplied header is used as-is except that its format is set to Binary",
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "saveBinaryPcd",
          "normalized": "FilePath-\u003eHeader-\u003eVector a-\u003eIO()",
          "package": "pcd-loader",
          "partial": "Binary Pcd",
          "signature": "FilePath-\u003eHeader-\u003eVector a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:saveBinaryPcd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a raw Haskell value from the \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e variant. If you\n know what you've got, this frees from having to pattern match on\n the \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e constructor. If you're wrong, you'll get an\n exception.\n\u003c/p\u003e",
          "module": "PCD.Data",
          "name": "unsafeUnwrap",
          "package": "pcd-loader",
          "signature": "FieldType -\u003e a",
          "source": "src/PCD-Header.html#unsafeUnwrap",
          "type": "function"
        },
        "index": {
          "description": "Extract raw Haskell value from the FieldType variant If you know what you ve got this frees from having to pattern match on the FieldType constructor If you re wrong you ll get an exception",
          "hierarchy": "PCD Data",
          "module": "PCD.Data",
          "name": "unsafeUnwrap",
          "normalized": "FieldType-\u003ea",
          "package": "pcd-loader",
          "partial": "Unwrap",
          "signature": "FieldType-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Data.html#v:unsafeUnwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefine a data structure for a PCD file header and an associated\n parser.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "PCD.Header",
          "name": "Header",
          "package": "pcd-loader",
          "source": "src/PCD-Header.html",
          "type": "module"
        },
        "index": {
          "description": "Define data structure for PCD file header and an associated parser",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "Header",
          "package": "pcd-loader",
          "partial": "Header",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PCD format has both ASCII and binary variants.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "DataFormat",
          "package": "pcd-loader",
          "source": "src/PCD-Header.html#DataFormat",
          "type": "data"
        },
        "index": {
          "description": "The PCD format has both ASCII and binary variants",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "DataFormat",
          "package": "pcd-loader",
          "partial": "Data Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#t:DataFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFields attached to a point may be signed integers (I), unsigned\n integers (U), or floating point (F).\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "DimType",
          "package": "pcd-loader",
          "source": "src/PCD-Header.html#DimType",
          "type": "data"
        },
        "index": {
          "description": "Fields attached to point may be signed integers unsigned integers or floating point",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "DimType",
          "package": "pcd-loader",
          "partial": "Dim Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#t:DimType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "FieldType",
          "package": "pcd-loader",
          "source": "src/PCD-Header.html#FieldType",
          "type": "data"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "FieldType",
          "package": "pcd-loader",
          "partial": "Field Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#t:FieldType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "Header",
          "package": "pcd-loader",
          "source": "src/PCD-Header.html#Header",
          "type": "data"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "Header",
          "package": "pcd-loader",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "PCDType",
          "package": "pcd-loader",
          "source": "src/PCD-Header.html#PCDType",
          "type": "class"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "PCDType",
          "package": "pcd-loader",
          "partial": "PCDType",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#t:PCDType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "ASCII",
          "package": "pcd-loader",
          "signature": "ASCII",
          "source": "src/PCD-Header.html#DataFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "ASCII",
          "package": "pcd-loader",
          "partial": "ASCII",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:ASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "Binary",
          "package": "pcd-loader",
          "signature": "Binary",
          "source": "src/PCD-Header.html#DataFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "Binary",
          "package": "pcd-loader",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "F",
          "package": "pcd-loader",
          "signature": "F",
          "source": "src/PCD-Header.html#DimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "F",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "Header",
          "package": "pcd-loader",
          "signature": "Header",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "Header",
          "package": "pcd-loader",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "I",
          "package": "pcd-loader",
          "signature": "I",
          "source": "src/PCD-Header.html#DimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "I",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:I"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "U",
          "package": "pcd-loader",
          "signature": "U",
          "source": "src/PCD-Header.html#DimType",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "U",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:U"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "_counts",
          "package": "pcd-loader",
          "signature": "[Int]",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "_counts",
          "normalized": "[Int]",
          "package": "pcd-loader",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:_counts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "_dimTypes",
          "package": "pcd-loader",
          "signature": "[DimType]",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "_dimTypes",
          "normalized": "[DimType]",
          "package": "pcd-loader",
          "partial": "Types",
          "signature": "[DimType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:_dimTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "_fields",
          "package": "pcd-loader",
          "signature": "[Text]",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "_fields",
          "normalized": "[Text]",
          "package": "pcd-loader",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:_fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "_format",
          "package": "pcd-loader",
          "signature": "DataFormat",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "_format",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:_format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "_height",
          "package": "pcd-loader",
          "signature": "Int",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "_height",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:_height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "_points",
          "package": "pcd-loader",
          "signature": "Integer",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "_points",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:_points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "_sizes",
          "package": "pcd-loader",
          "signature": "[Int]",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "_sizes",
          "normalized": "[Int]",
          "package": "pcd-loader",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:_sizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "_version",
          "package": "pcd-loader",
          "signature": "Text",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "_version",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "_viewpoint",
          "package": "pcd-loader",
          "signature": "(V3 Double, Quaternion Double)",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "_viewpoint",
          "normalized": "(V Double,Quaternion Double)",
          "package": "pcd-loader",
          "signature": "(V Double,Quaternion Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:_viewpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "_width",
          "package": "pcd-loader",
          "signature": "Integer",
          "source": "src/PCD-Header.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "_width",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:_width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "counts",
          "package": "pcd-loader",
          "signature": "Lens' Header [Int]",
          "source": "src/PCD-Header.html#counts",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "counts",
          "normalized": "Lens' Header[Int]",
          "package": "pcd-loader",
          "signature": "Lens' Header[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:counts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "defaultHeader",
          "package": "pcd-loader",
          "signature": "Header",
          "source": "src/PCD-Header.html#defaultHeader",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "defaultHeader",
          "package": "pcd-loader",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:defaultHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default PCD version of 0.7.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "defaultVersion",
          "package": "pcd-loader",
          "signature": "Text",
          "source": "src/PCD-Header.html#defaultVersion",
          "type": "function"
        },
        "index": {
          "description": "The default PCD version of",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "defaultVersion",
          "package": "pcd-loader",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:defaultVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "dimTypes",
          "package": "pcd-loader",
          "signature": "Lens' Header [DimType]",
          "source": "src/PCD-Header.html#dimTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "dimTypes",
          "normalized": "Lens' Header[DimType]",
          "package": "pcd-loader",
          "partial": "Types",
          "signature": "Lens' Header[DimType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:dimTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a parser for a field based on its type and size.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "fieldParser",
          "package": "pcd-loader",
          "signature": "DimType -\u003e Int -\u003e Parser FieldType",
          "source": "src/PCD-Header.html#fieldParser",
          "type": "function"
        },
        "index": {
          "description": "Construct parser for field based on its type and size",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "fieldParser",
          "normalized": "DimType-\u003eInt-\u003eParser FieldType",
          "package": "pcd-loader",
          "partial": "Parser",
          "signature": "DimType-\u003eInt-\u003eParser FieldType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:fieldParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "fields",
          "package": "pcd-loader",
          "signature": "Lens' Header [Text]",
          "source": "src/PCD-Header.html#fields",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "fields",
          "normalized": "Lens' Header[Text]",
          "package": "pcd-loader",
          "signature": "Lens' Header[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:fields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e based on an existing one that keeps only the\n fields whose names pass the supplied predicate.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "filterFields",
          "package": "pcd-loader",
          "signature": "(Text -\u003e Bool) -\u003e Header -\u003e Header",
          "source": "src/PCD-Header.html#filterFields",
          "type": "function"
        },
        "index": {
          "description": "Create Header based on an existing one that keeps only the fields whose names pass the supplied predicate",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "filterFields",
          "normalized": "(Text-\u003eBool)-\u003eHeader-\u003eHeader",
          "package": "pcd-loader",
          "partial": "Fields",
          "signature": "(Text-\u003eBool)-\u003eHeader-\u003eHeader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:filterFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "format",
          "package": "pcd-loader",
          "signature": "Lens' Header DataFormat",
          "source": "src/PCD-Header.html#format",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "format",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssociate a \u003ccode\u003e\u003ca\u003eDimType\u003c/a\u003e\u003c/code\u003e and a size (in bytes) for every instance\n of \u003ccode\u003e\u003ca\u003ePCDType\u003c/a\u003e\u003c/code\u003e. The argument to \u003ccode\u003e\u003ca\u003efromHaskell\u003c/a\u003e\u003c/code\u003e is never evaluated.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "fromHaskell",
          "package": "pcd-loader",
          "signature": "a -\u003e (DimType, Int)",
          "source": "src/PCD-Header.html#fromHaskell",
          "type": "method"
        },
        "index": {
          "description": "Associate DimType and size in bytes for every instance of PCDType The argument to fromHaskell is never evaluated",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "fromHaskell",
          "normalized": "a-\u003e(DimType,Int)",
          "package": "pcd-loader",
          "partial": "Haskell",
          "signature": "a-\u003e(DimType,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:fromHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "height",
          "package": "pcd-loader",
          "signature": "Lens' Header Int",
          "source": "src/PCD-Header.html#height",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "height",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "namedIntegral",
          "package": "pcd-loader",
          "signature": "Text -\u003e Parser a",
          "source": "src/PCD-Header.html#namedIntegral",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "namedIntegral",
          "normalized": "Text-\u003eParser a",
          "package": "pcd-loader",
          "partial": "Integral",
          "signature": "Text-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:namedIntegral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "namedIntegrals",
          "package": "pcd-loader",
          "signature": "Text -\u003e Parser [a]",
          "source": "src/PCD-Header.html#namedIntegrals",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "namedIntegrals",
          "normalized": "Text-\u003eParser[a]",
          "package": "pcd-loader",
          "partial": "Integrals",
          "signature": "Text-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:namedIntegrals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next non-comment line.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "nextLine",
          "package": "pcd-loader",
          "signature": "Handle -\u003e IO Text",
          "source": "src/PCD-Header.html#nextLine",
          "type": "function"
        },
        "index": {
          "description": "Get the next non-comment line",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "nextLine",
          "normalized": "Handle-\u003eIO Text",
          "package": "pcd-loader",
          "partial": "Line",
          "signature": "Handle-\u003eIO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:nextLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssemble a parser for points by sequencing together all necessary\n field parsers.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "pointParser",
          "package": "pcd-loader",
          "signature": "Header -\u003e Parser [FieldType]",
          "source": "src/PCD-Header.html#pointParser",
          "type": "function"
        },
        "index": {
          "description": "Assemble parser for points by sequencing together all necessary field parsers",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "pointParser",
          "normalized": "Header-\u003eParser[FieldType]",
          "package": "pcd-loader",
          "partial": "Parser",
          "signature": "Header-\u003eParser[FieldType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:pointParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "points",
          "package": "pcd-loader",
          "signature": "Lens' Header Integer",
          "source": "src/PCD-Header.html#points",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "points",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:points"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "readFields",
          "package": "pcd-loader",
          "signature": "Parser [Text]",
          "source": "src/PCD-Header.html#readFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "readFields",
          "normalized": "Parser[Text]",
          "package": "pcd-loader",
          "partial": "Fields",
          "signature": "Parser[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:readFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "readFormat",
          "package": "pcd-loader",
          "signature": "Parser DataFormat",
          "source": "src/PCD-Header.html#readFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "readFormat",
          "package": "pcd-loader",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:readFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a PCD header. Returns the \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e and the rest of the file\n contents.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "readHeader",
          "package": "pcd-loader",
          "signature": "Handle -\u003e IO (Header, Maybe Text)",
          "source": "src/PCD-Header.html#readHeader",
          "type": "function"
        },
        "index": {
          "description": "Parse PCD header Returns the Header and the rest of the file contents",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "readHeader",
          "normalized": "Handle-\u003eIO(Header,Maybe Text)",
          "package": "pcd-loader",
          "partial": "Header",
          "signature": "Handle-\u003eIO(Header,Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:readHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "readTypes",
          "package": "pcd-loader",
          "signature": "Parser [DimType]",
          "source": "src/PCD-Header.html#readTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "readTypes",
          "normalized": "Parser[DimType]",
          "package": "pcd-loader",
          "partial": "Types",
          "signature": "Parser[DimType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:readTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "readVersion",
          "package": "pcd-loader",
          "signature": "Parser Text",
          "source": "src/PCD-Header.html#readVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "readVersion",
          "package": "pcd-loader",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:readVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "readViewpoint",
          "package": "pcd-loader",
          "signature": "Parser (V3 Double, Quaternion Double)",
          "source": "src/PCD-Header.html#readViewpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "readViewpoint",
          "normalized": "Parser(V Double,Quaternion Double)",
          "package": "pcd-loader",
          "partial": "Viewpoint",
          "signature": "Parser(V Double,Quaternion Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:readViewpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "sequence'",
          "package": "pcd-loader",
          "signature": "[m a] -\u003e m [a]",
          "source": "src/PCD-Header.html#sequence%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "sequence'",
          "normalized": "[a b]-\u003ea[b]",
          "package": "pcd-loader",
          "signature": "[m a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:sequence-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "sizes",
          "package": "pcd-loader",
          "signature": "Lens' Header [Int]",
          "source": "src/PCD-Header.html#sizes",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "sizes",
          "normalized": "Lens' Header[Int]",
          "package": "pcd-loader",
          "signature": "Lens' Header[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:sizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the number of bytes this point cloud would occupy if\n serialized with the \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e encoding.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "totalBinarySize",
          "package": "pcd-loader",
          "signature": "Header -\u003e Int",
          "source": "src/PCD-Header.html#totalBinarySize",
          "type": "function"
        },
        "index": {
          "description": "Compute the number of bytes this point cloud would occupy if serialized with the Binary encoding",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "totalBinarySize",
          "normalized": "Header-\u003eInt",
          "package": "pcd-loader",
          "partial": "Binary Size",
          "signature": "Header-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:totalBinarySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a raw Haskell value from the \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e variant. If you\n know what you've got, this frees from having to pattern match on\n the \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e constructor. If you're wrong, you'll get an\n exception.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "unsafeUnwrap",
          "package": "pcd-loader",
          "signature": "FieldType -\u003e a",
          "source": "src/PCD-Header.html#unsafeUnwrap",
          "type": "method"
        },
        "index": {
          "description": "Extract raw Haskell value from the FieldType variant If you know what you ve got this frees from having to pattern match on the FieldType constructor If you re wrong you ll get an exception",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "unsafeUnwrap",
          "normalized": "FieldType-\u003ea",
          "package": "pcd-loader",
          "partial": "Unwrap",
          "signature": "FieldType-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:unsafeUnwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "version",
          "package": "pcd-loader",
          "signature": "Lens' Header Text",
          "source": "src/PCD-Header.html#version",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "version",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "viewpoint",
          "package": "pcd-loader",
          "signature": "Lens' Header (V3 Double, Quaternion Double)",
          "source": "src/PCD-Header.html#viewpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "viewpoint",
          "normalized": "Lens' Header(V Double,Quaternion Double)",
          "package": "pcd-loader",
          "signature": "Lens' Header(V Double,Quaternion Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:viewpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Header",
          "name": "width",
          "package": "pcd-loader",
          "signature": "Lens' Header Integer",
          "source": "src/PCD-Header.html#width",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "width",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a \u003ccode\u003e\u003ca\u003eHeader\u003c/a\u003e\u003c/code\u003e to be compatible with the PCD specification.\n\u003c/p\u003e",
          "module": "PCD.Header",
          "name": "writeHeader",
          "package": "pcd-loader",
          "signature": "Header -\u003e Text",
          "source": "src/PCD-Header.html#writeHeader",
          "type": "function"
        },
        "index": {
          "description": "Format Header to be compatible with the PCD specification",
          "hierarchy": "PCD Header",
          "module": "PCD.Header",
          "name": "writeHeader",
          "normalized": "Header-\u003eText",
          "package": "pcd-loader",
          "partial": "Header",
          "signature": "Header-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Header.html#v:writeHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Internal.AsciiParsers",
          "name": "AsciiParsers",
          "package": "pcd-loader",
          "source": "src/PCD-Internal-AsciiParsers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PCD Internal AsciiParsers",
          "module": "PCD.Internal.AsciiParsers",
          "name": "AsciiParsers",
          "package": "pcd-loader",
          "partial": "Ascii Parsers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-AsciiParsers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead point data using a user-supplied ASCII point parser.\n\u003c/p\u003e",
          "module": "PCD.Internal.AsciiParsers",
          "name": "readPoints",
          "package": "pcd-loader",
          "signature": "Header -\u003e Handle -\u003e Parser a -\u003e IO (v a)",
          "source": "src/PCD-Internal-AsciiParsers.html#readPoints",
          "type": "function"
        },
        "index": {
          "description": "Read point data using user-supplied ASCII point parser",
          "hierarchy": "PCD Internal AsciiParsers",
          "module": "PCD.Internal.AsciiParsers",
          "name": "readPoints",
          "normalized": "Header-\u003eHandle-\u003eParser a-\u003eIO(b a)",
          "package": "pcd-loader",
          "partial": "Points",
          "signature": "Header-\u003eHandle-\u003eParser a-\u003eIO(v a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-AsciiParsers.html#v:readPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad points of arbitrary dimension into a boxed vector with a\n \u003ccode\u003e\u003ca\u003eVector\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eFieldType\u003c/a\u003e\u003c/code\u003e as the point representation.\n\u003c/p\u003e",
          "module": "PCD.Internal.AsciiParsers",
          "name": "readPointsDefault",
          "package": "pcd-loader",
          "signature": "Header -\u003e Handle -\u003e IO (Vector (Vector FieldType))",
          "source": "src/PCD-Internal-AsciiParsers.html#readPointsDefault",
          "type": "function"
        },
        "index": {
          "description": "Load points of arbitrary dimension into boxed vector with Vector of FieldType as the point representation",
          "hierarchy": "PCD Internal AsciiParsers",
          "module": "PCD.Internal.AsciiParsers",
          "name": "readPointsDefault",
          "normalized": "Header-\u003eHandle-\u003eIO(Vector(Vector FieldType))",
          "package": "pcd-loader",
          "partial": "Points Default",
          "signature": "Header-\u003eHandle-\u003eIO(Vector(Vector FieldType))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-AsciiParsers.html#v:readPointsDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse 3D points serialized in ASCII.\n\u003c/p\u003e",
          "module": "PCD.Internal.AsciiParsers",
          "name": "readXYZ",
          "package": "pcd-loader",
          "signature": "Parser (V3 a)",
          "source": "src/PCD-Internal-AsciiParsers.html#readXYZ",
          "type": "function"
        },
        "index": {
          "description": "Parse points serialized in ASCII",
          "hierarchy": "PCD Internal AsciiParsers",
          "module": "PCD.Internal.AsciiParsers",
          "name": "readXYZ",
          "package": "pcd-loader",
          "partial": "XYZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-AsciiParsers.html#v:readXYZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse 4D points serialized to ASCII. This is useful for points\n with X,Y,Z, and RGB fields each represented by a single float.\n\u003c/p\u003e",
          "module": "PCD.Internal.AsciiParsers",
          "name": "readXYZW",
          "package": "pcd-loader",
          "signature": "Parser (V4 a)",
          "source": "src/PCD-Internal-AsciiParsers.html#readXYZW",
          "type": "function"
        },
        "index": {
          "description": "Parse points serialized to ASCII This is useful for points with and RGB fields each represented by single float",
          "hierarchy": "PCD Internal AsciiParsers",
          "module": "PCD.Internal.AsciiParsers",
          "name": "readXYZW",
          "package": "pcd-loader",
          "partial": "XYZW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-AsciiParsers.html#v:readXYZW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Internal.StorableFieldType",
          "name": "StorableFieldType",
          "package": "pcd-loader",
          "source": "src/PCD-Internal-StorableFieldType.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "PCD Internal StorableFieldType",
          "module": "PCD.Internal.StorableFieldType",
          "name": "StorableFieldType",
          "package": "pcd-loader",
          "partial": "Storable Field Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-StorableFieldType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Internal.StorableFieldType",
          "name": "parseBinaryPoints",
          "package": "pcd-loader",
          "signature": "Header -\u003e Handle -\u003e IO (Vector (Vector FieldType))",
          "source": "src/PCD-Internal-StorableFieldType.html#parseBinaryPoints",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Internal StorableFieldType",
          "module": "PCD.Internal.StorableFieldType",
          "name": "parseBinaryPoints",
          "normalized": "Header-\u003eHandle-\u003eIO(Vector(Vector FieldType))",
          "package": "pcd-loader",
          "partial": "Binary Points",
          "signature": "Header-\u003eHandle-\u003eIO(Vector(Vector FieldType))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-StorableFieldType.html#v:parseBinaryPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Internal.StorableFieldType",
          "name": "pokeBinaryPoints",
          "package": "pcd-loader",
          "signature": "Ptr a -\u003e Vector (Vector FieldType) -\u003e IO ()",
          "source": "src/PCD-Internal-StorableFieldType.html#pokeBinaryPoints",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Internal StorableFieldType",
          "module": "PCD.Internal.StorableFieldType",
          "name": "pokeBinaryPoints",
          "normalized": "Ptr a-\u003eVector(Vector FieldType)-\u003eIO()",
          "package": "pcd-loader",
          "partial": "Binary Points",
          "signature": "Ptr a-\u003eVector(Vector FieldType)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-StorableFieldType.html#v:pokeBinaryPoints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCommon types for dealing with PCD files.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "PCD.Internal.Types",
          "name": "Types",
          "package": "pcd-loader",
          "source": "src/PCD-Internal-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Common types for dealing with PCD files",
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "Types",
          "package": "pcd-loader",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4x4 matrix with row-major representation\n\u003c/p\u003e",
          "module": "PCD.Internal.Types",
          "name": "M44",
          "package": "pcd-loader",
          "type": "type"
        },
        "index": {
          "description": "x4 matrix with row-major representation",
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "M44",
          "package": "pcd-loader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#t:M44"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuaternions\n\u003c/p\u003e",
          "module": "PCD.Internal.Types",
          "name": "Quaternion",
          "package": "pcd-loader",
          "type": "data"
        },
        "index": {
          "description": "Quaternions",
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "Quaternion",
          "package": "pcd-loader",
          "partial": "Quaternion",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#t:Quaternion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 2-dimensional vector\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epure 1 :: V2 Int\n\u003c/code\u003e\u003c/strong\u003eV2 1 1\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 + V2 3 4\n\u003c/code\u003e\u003c/strong\u003eV2 4 6\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eV2 1 2 * V2 3 4\n\u003c/code\u003e\u003c/strong\u003eV2 3 8\n\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003esum (V2 1 2)\n\u003c/code\u003e\u003c/strong\u003e3\n\u003c/pre\u003e",
          "module": "PCD.Internal.Types",
          "name": "V2",
          "package": "pcd-loader",
          "type": "data"
        },
        "index": {
          "description": "dimensional vector pure V2 Int V2 V2 V2 V2 V2 V2 V2 sum V2",
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "V2",
          "package": "pcd-loader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#t:V2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 3-dimensional vector\n\u003c/p\u003e",
          "module": "PCD.Internal.Types",
          "name": "V3",
          "package": "pcd-loader",
          "type": "data"
        },
        "index": {
          "description": "dimensional vector",
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "V3",
          "package": "pcd-loader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#t:V3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA 4-dimensional vector.\n\u003c/p\u003e",
          "module": "PCD.Internal.Types",
          "name": "V4",
          "package": "pcd-loader",
          "type": "data"
        },
        "index": {
          "description": "dimensional vector",
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "V4",
          "package": "pcd-loader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#t:V4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eStorable\u003c/a\u003e\u003c/code\u003e-based vectors\n\u003c/p\u003e",
          "module": "PCD.Internal.Types",
          "name": "Vector",
          "package": "pcd-loader",
          "type": "data"
        },
        "index": {
          "description": "Storable based vectors",
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "Vector",
          "package": "pcd-loader",
          "partial": "Vector",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit unsigned integer type\n\u003c/p\u003e",
          "module": "PCD.Internal.Types",
          "name": "Word8",
          "package": "pcd-loader",
          "type": "data"
        },
        "index": {
          "description": "bit unsigned integer type",
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "Word8",
          "package": "pcd-loader",
          "partial": "Word",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#t:Word8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Internal.Types",
          "name": "Quaternion",
          "package": "pcd-loader",
          "signature": "Quaternion a !(V3 a)",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "Quaternion",
          "package": "pcd-loader",
          "partial": "Quaternion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#v:Quaternion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Internal.Types",
          "name": "V2",
          "package": "pcd-loader",
          "signature": "V2 a a",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "V2",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#v:V2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Internal.Types",
          "name": "V3",
          "package": "pcd-loader",
          "signature": "V3 a a a",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "V3",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#v:V3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "PCD.Internal.Types",
          "name": "V4",
          "package": "pcd-loader",
          "signature": "V4 a a a a",
          "type": "function"
        },
        "index": {
          "hierarchy": "PCD Internal Types",
          "module": "PCD.Internal.Types",
          "name": "V4",
          "package": "pcd-loader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pcd-loader/docs/PCD-Internal-Types.html#v:V4"
      }
    }
  ]
]