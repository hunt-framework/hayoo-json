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
        "word": "double-conversion"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast, efficient support for converting between double precision\n floating point values and text.\n\u003c/p\u003e\u003cp\u003eAlthough about 15 times faster than plain \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, these functions\n are \u003cem\u003eslower\u003c/em\u003e than their \u003ccode\u003eText\u003c/code\u003e counterparts, at roughly half the\n speed.  (This seems to be due to the cost of allocating\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values via \u003ccode\u003emalloc\u003c/code\u003e.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Double.Conversion.ByteString",
          "name": "ByteString",
          "package": "double-conversion",
          "source": "src/Data-Double-Conversion-ByteString.html",
          "type": "module"
        },
        "index": {
          "description": "Fast efficient support for converting between double precision floating point values and text Although about times faster than plain show these functions are slower than their Text counterparts at roughly half the speed This seems to be due to the cost of allocating ByteString values via malloc",
          "hierarchy": "Data Double Conversion ByteString",
          "module": "Data.Double.Conversion.ByteString",
          "name": "ByteString",
          "package": "double-conversion",
          "partial": "Byte String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-ByteString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a representation in exponential format with the requested\n number of digits after the decimal point. The last emitted digit is\n rounded.  If -1 digits are requested, then the shortest exponential\n representation is computed.\n\u003c/p\u003e",
          "module": "Data.Double.Conversion.ByteString",
          "name": "toExponential",
          "package": "double-conversion",
          "signature": "Int -\u003e Double -\u003e ByteString",
          "source": "src/Data-Double-Conversion-ByteString.html#toExponential",
          "type": "function"
        },
        "index": {
          "description": "Compute representation in exponential format with the requested number of digits after the decimal point The last emitted digit is rounded If digits are requested then the shortest exponential representation is computed",
          "hierarchy": "Data Double Conversion ByteString",
          "module": "Data.Double.Conversion.ByteString",
          "name": "toExponential",
          "normalized": "Int-\u003eDouble-\u003eByteString",
          "package": "double-conversion",
          "partial": "Exponential",
          "signature": "Int-\u003eDouble-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-ByteString.html#v:toExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a decimal representation with a fixed number of digits\n after the decimal point. The last emitted digit is rounded.\n\u003c/p\u003e",
          "module": "Data.Double.Conversion.ByteString",
          "name": "toFixed",
          "package": "double-conversion",
          "signature": "Int -\u003e Double -\u003e ByteString",
          "source": "src/Data-Double-Conversion-ByteString.html#toFixed",
          "type": "function"
        },
        "index": {
          "description": "Compute decimal representation with fixed number of digits after the decimal point The last emitted digit is rounded",
          "hierarchy": "Data Double Conversion ByteString",
          "module": "Data.Double.Conversion.ByteString",
          "name": "toFixed",
          "normalized": "Int-\u003eDouble-\u003eByteString",
          "package": "double-conversion",
          "partial": "Fixed",
          "signature": "Int-\u003eDouble-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-ByteString.html#v:toFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute \u003ccode\u003eprecision\u003c/code\u003e leading digits of the given value either in\n exponential or decimal format. The last computed digit is rounded.\n\u003c/p\u003e",
          "module": "Data.Double.Conversion.ByteString",
          "name": "toPrecision",
          "package": "double-conversion",
          "signature": "Int -\u003e Double -\u003e ByteString",
          "source": "src/Data-Double-Conversion-ByteString.html#toPrecision",
          "type": "function"
        },
        "index": {
          "description": "Compute precision leading digits of the given value either in exponential or decimal format The last computed digit is rounded",
          "hierarchy": "Data Double Conversion ByteString",
          "module": "Data.Double.Conversion.ByteString",
          "name": "toPrecision",
          "normalized": "Int-\u003eDouble-\u003eByteString",
          "package": "double-conversion",
          "partial": "Precision",
          "signature": "Int-\u003eDouble-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-ByteString.html#v:toPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the shortest string of digits that correctly represent\n the input number.\n\u003c/p\u003e",
          "module": "Data.Double.Conversion.ByteString",
          "name": "toShortest",
          "package": "double-conversion",
          "signature": "Double -\u003e ByteString",
          "source": "src/Data-Double-Conversion-ByteString.html#toShortest",
          "type": "function"
        },
        "index": {
          "description": "Compute the shortest string of digits that correctly represent the input number",
          "hierarchy": "Data Double Conversion ByteString",
          "module": "Data.Double.Conversion.ByteString",
          "name": "toShortest",
          "normalized": "Double-\u003eByteString",
          "package": "double-conversion",
          "partial": "Shortest",
          "signature": "Double-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-ByteString.html#v:toShortest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast, efficient support for converting between double precision\n floating point values and text.\n\u003c/p\u003e\u003cp\u003eThese functions are about 30 times faster than the default \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n implementation for the \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Double.Conversion.Text",
          "name": "Text",
          "package": "double-conversion",
          "source": "src/Data-Double-Conversion-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Fast efficient support for converting between double precision floating point values and text These functions are about times faster than the default show implementation for the Double type",
          "hierarchy": "Data Double Conversion Text",
          "module": "Data.Double.Conversion.Text",
          "name": "Text",
          "package": "double-conversion",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a representation in exponential format with the requested\n number of digits after the decimal point. The last emitted digit is\n rounded.  If -1 digits are requested, then the shortest exponential\n representation is computed.\n\u003c/p\u003e",
          "module": "Data.Double.Conversion.Text",
          "name": "toExponential",
          "package": "double-conversion",
          "signature": "Int -\u003e Double -\u003e Text",
          "source": "src/Data-Double-Conversion-Text.html#toExponential",
          "type": "function"
        },
        "index": {
          "description": "Compute representation in exponential format with the requested number of digits after the decimal point The last emitted digit is rounded If digits are requested then the shortest exponential representation is computed",
          "hierarchy": "Data Double Conversion Text",
          "module": "Data.Double.Conversion.Text",
          "name": "toExponential",
          "normalized": "Int-\u003eDouble-\u003eText",
          "package": "double-conversion",
          "partial": "Exponential",
          "signature": "Int-\u003eDouble-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-Text.html#v:toExponential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a decimal representation with a fixed number of digits\n after the decimal point. The last emitted digit is rounded.\n\u003c/p\u003e",
          "module": "Data.Double.Conversion.Text",
          "name": "toFixed",
          "package": "double-conversion",
          "signature": "Int -\u003e Double -\u003e Text",
          "source": "src/Data-Double-Conversion-Text.html#toFixed",
          "type": "function"
        },
        "index": {
          "description": "Compute decimal representation with fixed number of digits after the decimal point The last emitted digit is rounded",
          "hierarchy": "Data Double Conversion Text",
          "module": "Data.Double.Conversion.Text",
          "name": "toFixed",
          "normalized": "Int-\u003eDouble-\u003eText",
          "package": "double-conversion",
          "partial": "Fixed",
          "signature": "Int-\u003eDouble-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-Text.html#v:toFixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute \u003ccode\u003eprecision\u003c/code\u003e leading digits of the given value either in\n exponential or decimal format. The last computed digit is rounded.\n\u003c/p\u003e",
          "module": "Data.Double.Conversion.Text",
          "name": "toPrecision",
          "package": "double-conversion",
          "signature": "Int -\u003e Double -\u003e Text",
          "source": "src/Data-Double-Conversion-Text.html#toPrecision",
          "type": "function"
        },
        "index": {
          "description": "Compute precision leading digits of the given value either in exponential or decimal format The last computed digit is rounded",
          "hierarchy": "Data Double Conversion Text",
          "module": "Data.Double.Conversion.Text",
          "name": "toPrecision",
          "normalized": "Int-\u003eDouble-\u003eText",
          "package": "double-conversion",
          "partial": "Precision",
          "signature": "Int-\u003eDouble-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-Text.html#v:toPrecision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the shortest string of digits that correctly represent\n the input number.\n\u003c/p\u003e",
          "module": "Data.Double.Conversion.Text",
          "name": "toShortest",
          "package": "double-conversion",
          "signature": "Double -\u003e Text",
          "source": "src/Data-Double-Conversion-Text.html#toShortest",
          "type": "function"
        },
        "index": {
          "description": "Compute the shortest string of digits that correctly represent the input number",
          "hierarchy": "Data Double Conversion Text",
          "module": "Data.Double.Conversion.Text",
          "name": "toShortest",
          "normalized": "Double-\u003eText",
          "package": "double-conversion",
          "partial": "Shortest",
          "signature": "Double-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-Text.html#v:toShortest"
      }
    }
  ]
]