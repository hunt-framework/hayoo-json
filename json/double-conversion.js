[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-ByteString.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast, efficient support for converting between double precision\n floating point values and text.\n\u003c/p\u003e\u003cp\u003eAlthough about 15 times faster than plain \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e, these functions\n are \u003cem\u003eslower\u003c/em\u003e than their \u003ccode\u003eText\u003c/code\u003e counterparts, at roughly half the\n speed.  (This seems to be due to the cost of allocating\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e values via \u003ccode\u003emalloc\u003c/code\u003e.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Double.Conversion.ByteString",
        "fct-package": "double-conversion",
        "fct-signature": "module",
        "fct-source": "src/Data-Double-Conversion-ByteString.html",
        "fct-type": "module",
        "title": "ByteString"
      },
      "index": {
        "description": "Fast efficient support for converting between double precision floating point values and text Although about times faster than plain show these functions are slower than their Text counterparts at roughly half the speed This seems to be due to the cost of allocating ByteString values via malloc",
        "hierarchy": "Data Double Conversion ByteString",
        "module": "Data.Double.Conversion.ByteString",
        "name": "ByteString",
        "normalized": "",
        "package": "double-conversion",
        "partial": "Byte String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-ByteString.html#v:toExponential",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a representation in exponential format with the requested\n number of digits after the decimal point. The last emitted digit is\n rounded.  If -1 digits are requested, then the shortest exponential\n representation is computed.\n\u003c/p\u003e",
        "fct-module": "Data.Double.Conversion.ByteString",
        "fct-package": "double-conversion",
        "fct-signature": "Int -\u003e Double -\u003e ByteString",
        "fct-source": "src/Data-Double-Conversion-ByteString.html#toExponential",
        "fct-type": "function",
        "title": "toExponential"
      },
      "index": {
        "description": "Compute representation in exponential format with the requested number of digits after the decimal point The last emitted digit is rounded If digits are requested then the shortest exponential representation is computed",
        "hierarchy": "Data Double Conversion ByteString",
        "module": "Data.Double.Conversion.ByteString",
        "name": "toExponential",
        "normalized": "Int-\u003eDouble-\u003eByteString",
        "package": "double-conversion",
        "partial": "Exponential",
        "signature": "Int-\u003eDouble-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-ByteString.html#v:toFixed",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a decimal representation with a fixed number of digits\n after the decimal point. The last emitted digit is rounded.\n\u003c/p\u003e",
        "fct-module": "Data.Double.Conversion.ByteString",
        "fct-package": "double-conversion",
        "fct-signature": "Int -\u003e Double -\u003e ByteString",
        "fct-source": "src/Data-Double-Conversion-ByteString.html#toFixed",
        "fct-type": "function",
        "title": "toFixed"
      },
      "index": {
        "description": "Compute decimal representation with fixed number of digits after the decimal point The last emitted digit is rounded",
        "hierarchy": "Data Double Conversion ByteString",
        "module": "Data.Double.Conversion.ByteString",
        "name": "toFixed",
        "normalized": "Int-\u003eDouble-\u003eByteString",
        "package": "double-conversion",
        "partial": "Fixed",
        "signature": "Int-\u003eDouble-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-ByteString.html#v:toPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eCompute \u003ccode\u003eprecision\u003c/code\u003e leading digits of the given value either in\n exponential or decimal format. The last computed digit is rounded.\n\u003c/p\u003e",
        "fct-module": "Data.Double.Conversion.ByteString",
        "fct-package": "double-conversion",
        "fct-signature": "Int -\u003e Double -\u003e ByteString",
        "fct-source": "src/Data-Double-Conversion-ByteString.html#toPrecision",
        "fct-type": "function",
        "title": "toPrecision"
      },
      "index": {
        "description": "Compute precision leading digits of the given value either in exponential or decimal format The last computed digit is rounded",
        "hierarchy": "Data Double Conversion ByteString",
        "module": "Data.Double.Conversion.ByteString",
        "name": "toPrecision",
        "normalized": "Int-\u003eDouble-\u003eByteString",
        "package": "double-conversion",
        "partial": "Precision",
        "signature": "Int-\u003eDouble-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-ByteString.html#v:toShortest",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the shortest string of digits that correctly represent\n the input number.\n\u003c/p\u003e",
        "fct-module": "Data.Double.Conversion.ByteString",
        "fct-package": "double-conversion",
        "fct-signature": "Double -\u003e ByteString",
        "fct-source": "src/Data-Double-Conversion-ByteString.html#toShortest",
        "fct-type": "function",
        "title": "toShortest"
      },
      "index": {
        "description": "Compute the shortest string of digits that correctly represent the input number",
        "hierarchy": "Data Double Conversion ByteString",
        "module": "Data.Double.Conversion.ByteString",
        "name": "toShortest",
        "normalized": "Double-\u003eByteString",
        "package": "double-conversion",
        "partial": "Shortest",
        "signature": "Double-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast, efficient support for converting between double precision\n floating point values and text.\n\u003c/p\u003e\u003cp\u003eThese functions are about 30 times faster than the default \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e\n implementation for the \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Double.Conversion.Text",
        "fct-package": "double-conversion",
        "fct-signature": "module",
        "fct-source": "src/Data-Double-Conversion-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "Fast efficient support for converting between double precision floating point values and text These functions are about times faster than the default show implementation for the Double type",
        "hierarchy": "Data Double Conversion Text",
        "module": "Data.Double.Conversion.Text",
        "name": "Text",
        "normalized": "",
        "package": "double-conversion",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-Text.html#v:toExponential",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a representation in exponential format with the requested\n number of digits after the decimal point. The last emitted digit is\n rounded.  If -1 digits are requested, then the shortest exponential\n representation is computed.\n\u003c/p\u003e",
        "fct-module": "Data.Double.Conversion.Text",
        "fct-package": "double-conversion",
        "fct-signature": "Int -\u003e Double -\u003e Text",
        "fct-source": "src/Data-Double-Conversion-Text.html#toExponential",
        "fct-type": "function",
        "title": "toExponential"
      },
      "index": {
        "description": "Compute representation in exponential format with the requested number of digits after the decimal point The last emitted digit is rounded If digits are requested then the shortest exponential representation is computed",
        "hierarchy": "Data Double Conversion Text",
        "module": "Data.Double.Conversion.Text",
        "name": "toExponential",
        "normalized": "Int-\u003eDouble-\u003eText",
        "package": "double-conversion",
        "partial": "Exponential",
        "signature": "Int-\u003eDouble-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-Text.html#v:toFixed",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a decimal representation with a fixed number of digits\n after the decimal point. The last emitted digit is rounded.\n\u003c/p\u003e",
        "fct-module": "Data.Double.Conversion.Text",
        "fct-package": "double-conversion",
        "fct-signature": "Int -\u003e Double -\u003e Text",
        "fct-source": "src/Data-Double-Conversion-Text.html#toFixed",
        "fct-type": "function",
        "title": "toFixed"
      },
      "index": {
        "description": "Compute decimal representation with fixed number of digits after the decimal point The last emitted digit is rounded",
        "hierarchy": "Data Double Conversion Text",
        "module": "Data.Double.Conversion.Text",
        "name": "toFixed",
        "normalized": "Int-\u003eDouble-\u003eText",
        "package": "double-conversion",
        "partial": "Fixed",
        "signature": "Int-\u003eDouble-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-Text.html#v:toPrecision",
      "description": {
        "fct-descr": "\u003cp\u003eCompute \u003ccode\u003eprecision\u003c/code\u003e leading digits of the given value either in\n exponential or decimal format. The last computed digit is rounded.\n\u003c/p\u003e",
        "fct-module": "Data.Double.Conversion.Text",
        "fct-package": "double-conversion",
        "fct-signature": "Int -\u003e Double -\u003e Text",
        "fct-source": "src/Data-Double-Conversion-Text.html#toPrecision",
        "fct-type": "function",
        "title": "toPrecision"
      },
      "index": {
        "description": "Compute precision leading digits of the given value either in exponential or decimal format The last computed digit is rounded",
        "hierarchy": "Data Double Conversion Text",
        "module": "Data.Double.Conversion.Text",
        "name": "toPrecision",
        "normalized": "Int-\u003eDouble-\u003eText",
        "package": "double-conversion",
        "partial": "Precision",
        "signature": "Int-\u003eDouble-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/double-conversion/docs/Data-Double-Conversion-Text.html#v:toShortest",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the shortest string of digits that correctly represent\n the input number.\n\u003c/p\u003e",
        "fct-module": "Data.Double.Conversion.Text",
        "fct-package": "double-conversion",
        "fct-signature": "Double -\u003e Text",
        "fct-source": "src/Data-Double-Conversion-Text.html#toShortest",
        "fct-type": "function",
        "title": "toShortest"
      },
      "index": {
        "description": "Compute the shortest string of digits that correctly represent the input number",
        "hierarchy": "Data Double Conversion Text",
        "module": "Data.Double.Conversion.Text",
        "name": "toShortest",
        "normalized": "Double-\u003eText",
        "package": "double-conversion",
        "partial": "Shortest",
        "signature": "Double-\u003eText"
      }
    }
  }
]