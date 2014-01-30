[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions and functions for parsing and formatting prefix units.\n\u003c/p\u003e\u003cp\u003eThis module defines the type \u003ccode\u003e\u003ca\u003eUnit\u003c/a\u003e\u003c/code\u003e and associated functions for\nparsing numbers containing a prefix unit (e.g. \u003ccode\u003e100M\u003c/code\u003e) into\ncorespondingly scaled values (for the above example, \u003ccode\u003e100000000\u003c/code\u003e), and\nfor formatting numbers.\n\u003c/p\u003e\u003cp\u003eThe units definition is taken from the man page \u003ccode\u003eunits(7)\u003c/code\u003e and the web\nsites \u003ca\u003ehttp://physics.nist.gov/cuu/Units/prefixes.html\u003c/a\u003e and\n\u003ca\u003ehttp://physics.nist.gov/cuu/Units/binary.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince a give prefix unit (e.g. \u003ccode\u003em\u003c/code\u003e) can be interpreted in different\nways, the module offers various ways to interpret this:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e in a binary context (e.g. when talking about memory), this will be\n  interpreted as 2^20 (see \u003ccode\u003e\u003ca\u003eParseBinary\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e in a SI context dealing with multiples, this will be intepreted as\n  10^3 (see \u003ccode\u003e\u003ca\u003eParseKMGT\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e in an exact parsing mode, this will be interpreded as the \"milli\"\n  prefix, i.e. 10^-3 (see \u003ccode\u003e\u003ca\u003eParseExact\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe different parsing mode are offered as different contexts will have\ndifferent \"natural\" units, and always forcing precise parsing (which\nalso implies case-sensitivity) will lead to confusing user interfaces.\n\u003c/p\u003e\u003cp\u003eThe internal calculations when converting values are done via the\n\u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e type (with arbitrary precision), and precision loss happens\nonly at the last step of converting to the target type; for\nfloat/doubles this is \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e, for integral types this is\n\u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA few examples are given below:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshowValue (Left FormatBinary) 2048\n\u003c/code\u003e\u003c/strong\u003e\"2.0Ki\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshowValue (Left FormatSiAll) 0.0001\n\u003c/code\u003e\u003c/strong\u003e\"100.0u\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshowValue (Right Mebi) 1048576\n\u003c/code\u003e\u003c/strong\u003e\"1Mi\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseValue ParseExact \"2.5Ki\"::Either String Double\n\u003c/code\u003e\u003c/strong\u003eRight 2560.0\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseValue ParseBinary \"2M\"::Either String Int\n\u003c/code\u003e\u003c/strong\u003eRight 2097152\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseValue ParseExact \"2ki\"\n\u003c/code\u003e\u003c/strong\u003eLeft \"Unrecognised unit 'ki'\"\n\u003c/pre\u003e\u003cp\u003eThe failure in the last example is due to the fact that \u003ccode\u003e\u003ca\u003eParseExact\u003c/a\u003e\u003c/code\u003e\nis case-sensitive.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "module",
        "fct-source": "src/Data-Prefix-Units.html",
        "fct-type": "module",
        "title": "Units"
      },
      "index": {
        "description": "Definitions and functions for parsing and formatting prefix units This module defines the type Unit and associated functions for parsing numbers containing prefix unit e.g into corespondingly scaled values for the above example and for formatting numbers The units definition is taken from the man page units and the web sites http physics.nist.gov cuu Units prefixes.html and http physics.nist.gov cuu Units binary.html Since give prefix unit e.g can be interpreted in different ways the module offers various ways to interpret this in binary context e.g when talking about memory this will be interpreted as see ParseBinary in SI context dealing with multiples this will be intepreted as see ParseKMGT in an exact parsing mode this will be interpreded as the milli prefix i.e see ParseExact The different parsing mode are offered as different contexts will have different natural units and always forcing precise parsing which also implies case-sensitivity will lead to confusing user interfaces The internal calculations when converting values are done via the Rational type with arbitrary precision and precision loss happens only at the last step of converting to the target type for float doubles this is fromRational for integral types this is round few examples are given below showValue Left FormatBinary Ki showValue Left FormatSiAll showValue Right Mebi Mi parseValue ParseExact Ki Either String Double Right parseValue ParseBinary Either String Int Right parseValue ParseExact ki Left Unrecognised unit ki The failure in the last example is due to the fact that ParseExact is case-sensitive",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Units",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Units",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#t:FormatMode",
      "description": {
        "fct-descr": "\u003cp\u003eDefines the formatting modes.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "data",
        "fct-source": "src/Data-Prefix-Units.html#FormatMode",
        "fct-type": "data",
        "title": "FormatMode"
      },
      "index": {
        "description": "Defines the formatting modes",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "FormatMode",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Format Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#t:ParseMode",
      "description": {
        "fct-descr": "\u003cp\u003eDefines available parse modes.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "data",
        "fct-source": "src/Data-Prefix-Units.html#ParseMode",
        "fct-type": "data",
        "title": "ParseMode"
      },
      "index": {
        "description": "Defines available parse modes",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "ParseMode",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Parse Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#t:ParseOptions",
      "description": {
        "fct-descr": "\u003cp\u003eDefines unit handling mode on parse.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "data",
        "fct-source": "src/Data-Prefix-Units.html#ParseOptions",
        "fct-type": "data",
        "title": "ParseOptions"
      },
      "index": {
        "description": "Defines unit handling mode on parse",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "ParseOptions",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Parse Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#t:RationalConvertible",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass for handling values that can be converted to/from\n \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "class",
        "fct-source": "src/Data-Prefix-Units.html#RationalConvertible",
        "fct-type": "class",
        "title": "RationalConvertible"
      },
      "index": {
        "description": "Typeclass for handling values that can be converted to from Rational",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "RationalConvertible",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Rational Convertible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#t:Unit",
      "description": {
        "fct-descr": "\u003cp\u003eThe unit type.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "data",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "data",
        "title": "Unit"
      },
      "index": {
        "description": "The unit type",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Unit",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Atto",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Atto",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Atto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Atto",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Atto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Centi",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Centi",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Centi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Centi",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Centi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Deci",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Deci",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Deci"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Deci",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Deci",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Deka",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Deka",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Deka"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Deka",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Deka",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Exa",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Exa",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Exa"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Exa",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Exa",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Exbi",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Exbi",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Exbi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Exbi",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Exbi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Femto",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Femto",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Femto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Femto",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Femto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:FormatBinary",
      "description": {
        "fct-descr": "\u003cp\u003eFormats the value using binary units.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "FormatBinary",
        "fct-source": "src/Data-Prefix-Units.html#FormatMode",
        "fct-type": "function",
        "title": "FormatBinary"
      },
      "index": {
        "description": "Formats the value using binary units",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "FormatBinary",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Format Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:FormatSiAll",
      "description": {
        "fct-descr": "\u003cp\u003eFormats the value using any SI unit.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "FormatSiAll",
        "fct-source": "src/Data-Prefix-Units.html#FormatMode",
        "fct-type": "function",
        "title": "FormatSiAll"
      },
      "index": {
        "description": "Formats the value using any SI unit",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "FormatSiAll",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Format Si All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:FormatSiKMGT",
      "description": {
        "fct-descr": "\u003cp\u003eFormats the value using units greater or\n equal to \u003ccode\u003e\u003ca\u003eKilo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "FormatSiKMGT",
        "fct-source": "src/Data-Prefix-Units.html#FormatMode",
        "fct-type": "function",
        "title": "FormatSiKMGT"
      },
      "index": {
        "description": "Formats the value using units greater or equal to Kilo",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "FormatSiKMGT",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Format Si KMGT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:FormatSiSupraunitary",
      "description": {
        "fct-descr": "\u003cp\u003eFormats the value using supraunitary SI\n units only (which means that e.g. \u003ccode\u003e0.001\u003c/code\u003e\n will remain as such instead of being\n formatted as \u003ccode\u003e1m\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "FormatSiSupraunitary",
        "fct-source": "src/Data-Prefix-Units.html#FormatMode",
        "fct-type": "function",
        "title": "FormatSiSupraunitary"
      },
      "index": {
        "description": "Formats the value using supraunitary SI units only which means that e.g will remain as such instead of being formatted as",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "FormatSiSupraunitary",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Format Si Supraunitary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Gibi",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Gibi",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Gibi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Gibi",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Gibi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Giga",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Giga",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Giga"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Giga",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Giga",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Hecto",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Hecto",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Hecto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Hecto",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Hecto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Kibi",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Kibi",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Kibi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Kibi",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Kibi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Kilo",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Kilo",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Kilo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Kilo",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Kilo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Mebi",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Mebi",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Mebi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Mebi",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Mebi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Mega",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Mega",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Mega"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Mega",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Mega",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Micro",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Micro",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Micro"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Micro",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Micro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Milli",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Milli",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Milli"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Milli",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Milli",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Nano",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Nano",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Nano"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Nano",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Nano",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:ParseBinary",
      "description": {
        "fct-descr": "\u003cp\u003eParses binary units only. In this mode, both the\n exact and shortened forms are accepted (e.g. both\n \"k\" and \"ki\" will be converted into\n \u003ccode\u003e\u003ca\u003eKibi\u003c/a\u003e\u003c/code\u003e). Furthermore, the parsing is\n case-insensitive.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "ParseBinary",
        "fct-source": "src/Data-Prefix-Units.html#ParseMode",
        "fct-type": "function",
        "title": "ParseBinary"
      },
      "index": {
        "description": "Parses binary units only In this mode both the exact and shortened forms are accepted e.g both and ki will be converted into Kibi Furthermore the parsing is case-insensitive",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "ParseBinary",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Parse Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:ParseExact",
      "description": {
        "fct-descr": "\u003cp\u003eExact parser mode. This mode is fully\n case-sensitive.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "ParseExact",
        "fct-source": "src/Data-Prefix-Units.html#ParseMode",
        "fct-type": "function",
        "title": "ParseExact"
      },
      "index": {
        "description": "Exact parser mode This mode is fully case-sensitive",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "ParseExact",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Parse Exact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:ParseKMGT",
      "description": {
        "fct-descr": "\u003cp\u003eParses only units with bigger than \u003ccode\u003e\u003ca\u003eKilo\u003c/a\u003e\u003c/code\u003e,\n respectively \u003ccode\u003e\u003ca\u003eKibi\u003c/a\u003e\u003c/code\u003e (for binary units). This allows\n the parser to be case-insensitive.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "ParseKMGT",
        "fct-source": "src/Data-Prefix-Units.html#ParseMode",
        "fct-type": "function",
        "title": "ParseKMGT"
      },
      "index": {
        "description": "Parses only units with bigger than Kilo respectively Kibi for binary units This allows the parser to be case-insensitive",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "ParseKMGT",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Parse KMGT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Pebi",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Pebi",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Pebi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Pebi",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Pebi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Peta",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Peta",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Peta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Peta",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Peta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Pico",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Pico",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Pico"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Pico",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Pico",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Tebi",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Tebi",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Tebi"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Tebi",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Tebi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Tera",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Tera",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Tera"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Tera",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Tera",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:UnitDefault",
      "description": {
        "fct-descr": "\u003cp\u003eIf unit is missing, use a\n default one.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "UnitDefault Unit",
        "fct-source": "src/Data-Prefix-Units.html#ParseOptions",
        "fct-type": "function",
        "title": "UnitDefault"
      },
      "index": {
        "description": "If unit is missing use default one",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "UnitDefault",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Unit Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:UnitOptional",
      "description": {
        "fct-descr": "\u003cp\u003eThe unit is optional, a missing\n one means the value is not\n scaled.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "UnitOptional",
        "fct-source": "src/Data-Prefix-Units.html#ParseOptions",
        "fct-type": "function",
        "title": "UnitOptional"
      },
      "index": {
        "description": "The unit is optional missing one means the value is not scaled",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "UnitOptional",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Unit Optional",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:UnitRequired",
      "description": {
        "fct-descr": "\u003cp\u003eRequires that the input string\n has a unit.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "UnitRequired",
        "fct-source": "src/Data-Prefix-Units.html#ParseOptions",
        "fct-type": "function",
        "title": "UnitRequired"
      },
      "index": {
        "description": "Requires that the input string has unit",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "UnitRequired",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Unit Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Yocto",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Yocto",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Yocto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Yocto",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Yocto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Yotta",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Yotta",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Yotta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Yotta",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Yotta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Zepto",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Zepto",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Zepto"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Zepto",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Zepto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Zetta",
      "description": {
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Zetta",
        "fct-source": "src/Data-Prefix-Units.html#Unit",
        "fct-type": "function",
        "title": "Zetta"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "Zetta",
        "normalized": "",
        "package": "prefix-units",
        "partial": "Zetta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:binaryUnits",
      "description": {
        "fct-descr": "\u003cp\u003eList of binary units.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "[Unit]",
        "fct-source": "src/Data-Prefix-Units.html#binaryUnits",
        "fct-type": "function",
        "title": "binaryUnits"
      },
      "index": {
        "description": "List of binary units",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "binaryUnits",
        "normalized": "[Unit]",
        "package": "prefix-units",
        "partial": "Units",
        "signature": "[Unit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:convFromRational",
      "description": {
        "fct-descr": "\u003cp\u003eConverts the value from Ratioal\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Rational -\u003e a",
        "fct-source": "src/Data-Prefix-Units.html#convFromRational",
        "fct-type": "method",
        "title": "convFromRational"
      },
      "index": {
        "description": "Converts the value from Ratioal",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "convFromRational",
        "normalized": "Rational-\u003ea",
        "package": "prefix-units",
        "partial": "From Rational",
        "signature": "Rational-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:fancySymbol",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the unit symbol, which for the \u003ccode\u003e\u003ca\u003eMicro\u003c/a\u003e\u003c/code\u003e unit is not ASCII.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Unit -\u003e String",
        "fct-source": "src/Data-Prefix-Units.html#fancySymbol",
        "fct-type": "function",
        "title": "fancySymbol"
      },
      "index": {
        "description": "Returns the unit symbol which for the Micro unit is not ASCII",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "fancySymbol",
        "normalized": "Unit-\u003eString",
        "package": "prefix-units",
        "partial": "Symbol",
        "signature": "Unit-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:formatValue",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the scaled value and unit for a given value\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "FormatOption-\u003e a-\u003e (a, Maybe Unit)",
        "fct-type": "function",
        "title": "formatValue"
      },
      "index": {
        "description": "Computes the scaled value and unit for given value",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "formatValue",
        "normalized": "FormatOption-\u003ea-\u003e(a,Maybe Unit)",
        "package": "prefix-units",
        "partial": "Value",
        "signature": "FormatOption-\u003ea-\u003e(a,Maybe Unit)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseBinarySymbol",
      "description": {
        "fct-descr": "\u003cp\u003eParses a binary symbol. See \u003ccode\u003e\u003ca\u003eParseBinary\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "String -\u003e Either String Unit",
        "fct-source": "src/Data-Prefix-Units.html#parseBinarySymbol",
        "fct-type": "function",
        "title": "parseBinarySymbol"
      },
      "index": {
        "description": "Parses binary symbol See ParseBinary for details",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "parseBinarySymbol",
        "normalized": "String-\u003eEither String Unit",
        "package": "prefix-units",
        "partial": "Binary Symbol",
        "signature": "String-\u003eEither String Unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseExactSymbol",
      "description": {
        "fct-descr": "\u003cp\u003eParses a symbol in the exact mode. See \u003ccode\u003e\u003ca\u003eParseExact\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "String -\u003e Either String Unit",
        "fct-source": "src/Data-Prefix-Units.html#parseExactSymbol",
        "fct-type": "function",
        "title": "parseExactSymbol"
      },
      "index": {
        "description": "Parses symbol in the exact mode See ParseExact for details",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "parseExactSymbol",
        "normalized": "String-\u003eEither String Unit",
        "package": "prefix-units",
        "partial": "Exact Symbol",
        "signature": "String-\u003eEither String Unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseGeneric",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric parse routine. Takes two function arguments which fix the\n initial and final conversion, a parse mode and the string to be\n parsed.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "ParseOptions-\u003e [Unit]-\u003e ParseMode-\u003e String-\u003e Either String a",
        "fct-type": "function",
        "title": "parseGeneric"
      },
      "index": {
        "description": "Generic parse routine Takes two function arguments which fix the initial and final conversion parse mode and the string to be parsed",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "parseGeneric",
        "normalized": "ParseOptions-\u003e[Unit]-\u003eParseMode-\u003eString-\u003eEither String a",
        "package": "prefix-units",
        "partial": "Generic",
        "signature": "ParseOptions-\u003e[Unit]-\u003eParseMode-\u003eString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseKMGTSymbol",
      "description": {
        "fct-descr": "\u003cp\u003eParses the given symbol as one of the \"big\" units (kilo/kibi\n and above). This allows the parsing to be case-insensitive.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "String -\u003e Either String Unit",
        "fct-source": "src/Data-Prefix-Units.html#parseKMGTSymbol",
        "fct-type": "function",
        "title": "parseKMGTSymbol"
      },
      "index": {
        "description": "Parses the given symbol as one of the big units kilo kibi and above This allows the parsing to be case-insensitive",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "parseKMGTSymbol",
        "normalized": "String-\u003eEither String Unit",
        "package": "prefix-units",
        "partial": "KMGTSymbol",
        "signature": "String-\u003eEither String Unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseSymbol",
      "description": {
        "fct-descr": "\u003cp\u003eParses a unit from a string. The exact parsing mode determines\n the rules for parsing and the range of possible units.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "ParseMode -\u003e String -\u003e Either String Unit",
        "fct-source": "src/Data-Prefix-Units.html#parseSymbol",
        "fct-type": "function",
        "title": "parseSymbol"
      },
      "index": {
        "description": "Parses unit from string The exact parsing mode determines the rules for parsing and the range of possible units",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "parseSymbol",
        "normalized": "ParseMode-\u003eString-\u003eEither String Unit",
        "package": "prefix-units",
        "partial": "Symbol",
        "signature": "ParseMode-\u003eString-\u003eEither String Unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseValue",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric parse routine. Takes two function arguments which fix the\n initial and final conversion, a parse mode and the string to be\n parsed.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "ParseMode-\u003e String-\u003e Either String a",
        "fct-type": "function",
        "title": "parseValue"
      },
      "index": {
        "description": "Generic parse routine Takes two function arguments which fix the initial and final conversion parse mode and the string to be parsed",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "parseValue",
        "normalized": "ParseMode-\u003eString-\u003eEither String a",
        "package": "prefix-units",
        "partial": "Value",
        "signature": "ParseMode-\u003eString-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:recommendedUnit",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the recommended unit for displaying a given value. The\n simple algorithm uses the first unit for which we have a\n supraunitary representation. In case we don't find any such value\n (e.g. for a zero value), then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "FormatMode -\u003e a -\u003e Maybe Unit",
        "fct-source": "src/Data-Prefix-Units.html#recommendedUnit",
        "fct-type": "function",
        "title": "recommendedUnit"
      },
      "index": {
        "description": "Computes the recommended unit for displaying given value The simple algorithm uses the first unit for which we have supraunitary representation In case we don find any such value e.g for zero value then Nothing is returned",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "recommendedUnit",
        "normalized": "FormatMode-\u003ea-\u003eMaybe Unit",
        "package": "prefix-units",
        "partial": "Unit",
        "signature": "FormatMode-\u003ea-\u003eMaybe Unit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:showValue",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates a final string representation of a value.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "FormatOption-\u003e a-\u003e String",
        "fct-type": "function",
        "title": "showValue"
      },
      "index": {
        "description": "Generates final string representation of value",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "showValue",
        "normalized": "FormatOption-\u003ea-\u003eString",
        "package": "prefix-units",
        "partial": "Value",
        "signature": "FormatOption-\u003ea-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:showValueWith",
      "description": {
        "fct-descr": "\u003cp\u003eSimple helper to generate the full string representation of an\n integral value.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "(Unit -\u003e String)-\u003e FormatOption-\u003e a-\u003e String",
        "fct-type": "function",
        "title": "showValueWith"
      },
      "index": {
        "description": "Simple helper to generate the full string representation of an integral value",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "showValueWith",
        "normalized": "(Unit-\u003eString)-\u003eFormatOption-\u003ea-\u003eString",
        "package": "prefix-units",
        "partial": "Value With",
        "signature": "(Unit-\u003eString)-\u003eFormatOption-\u003ea-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:siKMGT",
      "description": {
        "fct-descr": "\u003cp\u003eList of SI units which are greater or equal to \u003ccode\u003e\u003ca\u003eKilo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "[Unit]",
        "fct-source": "src/Data-Prefix-Units.html#siKMGT",
        "fct-type": "function",
        "title": "siKMGT"
      },
      "index": {
        "description": "List of SI units which are greater or equal to Kilo",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "siKMGT",
        "normalized": "[Unit]",
        "package": "prefix-units",
        "partial": "KMGT",
        "signature": "[Unit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:siSupraunitary",
      "description": {
        "fct-descr": "\u003cp\u003eList of units which are supraunitary (their multiplier is greater\n than one).\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "[Unit]",
        "fct-source": "src/Data-Prefix-Units.html#siSupraunitary",
        "fct-type": "function",
        "title": "siSupraunitary"
      },
      "index": {
        "description": "List of units which are supraunitary their multiplier is greater than one",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "siSupraunitary",
        "normalized": "[Unit]",
        "package": "prefix-units",
        "partial": "Supraunitary",
        "signature": "[Unit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:siUnits",
      "description": {
        "fct-descr": "\u003cp\u003eList of all SI units.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "[Unit]",
        "fct-source": "src/Data-Prefix-Units.html#siUnits",
        "fct-type": "function",
        "title": "siUnits"
      },
      "index": {
        "description": "List of all SI units",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "siUnits",
        "normalized": "[Unit]",
        "package": "prefix-units",
        "partial": "Units",
        "signature": "[Unit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:unitMultiplier",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the unit scaling \"multiplier\" (which can be either\n supra- or sub-unitary):\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunitMultiplier Micro\n\u003c/code\u003e\u003c/strong\u003e1 % 1000000\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunitMultiplier Mebi\n\u003c/code\u003e\u003c/strong\u003e1048576 % 1\n\u003c/pre\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Unit -\u003e Rational",
        "fct-source": "src/Data-Prefix-Units.html#unitMultiplier",
        "fct-type": "function",
        "title": "unitMultiplier"
      },
      "index": {
        "description": "Returns the unit scaling multiplier which can be either supra or sub-unitary unitMultiplier Micro unitMultiplier Mebi",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "unitMultiplier",
        "normalized": "Unit-\u003eRational",
        "package": "prefix-units",
        "partial": "Multiplier",
        "signature": "Unit-\u003eRational"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:unitName",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the unit full name.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Unit -\u003e String",
        "fct-source": "src/Data-Prefix-Units.html#unitName",
        "fct-type": "function",
        "title": "unitName"
      },
      "index": {
        "description": "Returns the unit full name",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "unitName",
        "normalized": "Unit-\u003eString",
        "package": "prefix-units",
        "partial": "Name",
        "signature": "Unit-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:unitRange",
      "description": {
        "fct-descr": "\u003cp\u003eThe available units range for various format modes.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "FormatMode -\u003e [Unit]",
        "fct-source": "src/Data-Prefix-Units.html#unitRange",
        "fct-type": "function",
        "title": "unitRange"
      },
      "index": {
        "description": "The available units range for various format modes",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "unitRange",
        "normalized": "FormatMode-\u003e[Unit]",
        "package": "prefix-units",
        "partial": "Range",
        "signature": "FormatMode-\u003e[Unit]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:unitSymbol",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the unit ASCII symbol.\n\u003c/p\u003e",
        "fct-module": "Data.Prefix.Units",
        "fct-package": "prefix-units",
        "fct-signature": "Unit -\u003e String",
        "fct-source": "src/Data-Prefix-Units.html#unitSymbol",
        "fct-type": "function",
        "title": "unitSymbol"
      },
      "index": {
        "description": "Returns the unit ASCII symbol",
        "hierarchy": "Data Prefix Units",
        "module": "Data.Prefix.Units",
        "name": "unitSymbol",
        "normalized": "Unit-\u003eString",
        "package": "prefix-units",
        "partial": "Symbol",
        "signature": "Unit-\u003eString"
      }
    }
  }
]