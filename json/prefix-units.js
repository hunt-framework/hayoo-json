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
        "word": "prefix-units"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions and functions for parsing and formatting prefix units.\n\u003c/p\u003e\u003cp\u003eThis module defines the type \u003ccode\u003e\u003ca\u003eUnit\u003c/a\u003e\u003c/code\u003e and associated functions for\nparsing numbers containing a prefix unit (e.g. \u003ccode\u003e100M\u003c/code\u003e) into\ncorespondingly scaled values (for the above example, \u003ccode\u003e100000000\u003c/code\u003e), and\nfor formatting numbers.\n\u003c/p\u003e\u003cp\u003eThe units definition is taken from the man page \u003ccode\u003eunits(7)\u003c/code\u003e and the web\nsites \u003ca\u003ehttp://physics.nist.gov/cuu/Units/prefixes.html\u003c/a\u003e and\n\u003ca\u003ehttp://physics.nist.gov/cuu/Units/binary.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSince a give prefix unit (e.g. \u003ccode\u003em\u003c/code\u003e) can be interpreted in different\nways, the module offers various ways to interpret this:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e in a binary context (e.g. when talking about memory), this will be\n  interpreted as 2^20 (see \u003ccode\u003e\u003ca\u003eParseBinary\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e in a SI context dealing with multiples, this will be intepreted as\n  10^3 (see \u003ccode\u003e\u003ca\u003eParseKMGT\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003cli\u003e in an exact parsing mode, this will be interpreded as the \"milli\"\n  prefix, i.e. 10^-3 (see \u003ccode\u003e\u003ca\u003eParseExact\u003c/a\u003e\u003c/code\u003e)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe different parsing mode are offered as different contexts will have\ndifferent \"natural\" units, and always forcing precise parsing (which\nalso implies case-sensitivity) will lead to confusing user interfaces.\n\u003c/p\u003e\u003cp\u003eThe internal calculations when converting values are done via the\n\u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e type (with arbitrary precision), and precision loss happens\nonly at the last step of converting to the target type; for\nfloat/doubles this is \u003ccode\u003e\u003ca\u003efromRational\u003c/a\u003e\u003c/code\u003e, for integral types this is\n\u003ccode\u003e\u003ca\u003eround\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eA few examples are given below:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshowValue (Left FormatBinary) 2048\n\u003c/code\u003e\u003c/strong\u003e\"2.0Ki\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshowValue (Left FormatSiAll) 0.0001\n\u003c/code\u003e\u003c/strong\u003e\"100.0u\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eshowValue (Right Mebi) 1048576\n\u003c/code\u003e\u003c/strong\u003e\"1Mi\"\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseValue ParseExact \"2.5Ki\"::Either String Double\n\u003c/code\u003e\u003c/strong\u003eRight 2560.0\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseValue ParseBinary \"2M\"::Either String Int\n\u003c/code\u003e\u003c/strong\u003eRight 2097152\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseValue ParseExact \"2ki\"\n\u003c/code\u003e\u003c/strong\u003eLeft \"Unrecognised unit 'ki'\"\n\u003c/pre\u003e\u003cp\u003eThe failure in the last example is due to the fact that \u003ccode\u003e\u003ca\u003eParseExact\u003c/a\u003e\u003c/code\u003e\nis case-sensitive.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Prefix.Units",
          "name": "Units",
          "package": "prefix-units",
          "source": "src/Data-Prefix-Units.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions and functions for parsing and formatting prefix units This module defines the type Unit and associated functions for parsing numbers containing prefix unit e.g into corespondingly scaled values for the above example and for formatting numbers The units definition is taken from the man page units and the web sites http physics.nist.gov cuu Units prefixes.html and http physics.nist.gov cuu Units binary.html Since give prefix unit e.g can be interpreted in different ways the module offers various ways to interpret this in binary context e.g when talking about memory this will be interpreted as see ParseBinary in SI context dealing with multiples this will be intepreted as see ParseKMGT in an exact parsing mode this will be interpreded as the milli prefix i.e see ParseExact The different parsing mode are offered as different contexts will have different natural units and always forcing precise parsing which also implies case-sensitivity will lead to confusing user interfaces The internal calculations when converting values are done via the Rational type with arbitrary precision and precision loss happens only at the last step of converting to the target type for float doubles this is fromRational for integral types this is round few examples are given below showValue Left FormatBinary Ki showValue Left FormatSiAll showValue Right Mebi Mi parseValue ParseExact Ki Either String Double Right parseValue ParseBinary Either String Int Right parseValue ParseExact ki Left Unrecognised unit ki The failure in the last example is due to the fact that ParseExact is case-sensitive",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Units",
          "package": "prefix-units",
          "partial": "Units",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the formatting modes.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "FormatMode",
          "package": "prefix-units",
          "source": "src/Data-Prefix-Units.html#FormatMode",
          "type": "data"
        },
        "index": {
          "description": "Defines the formatting modes",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "FormatMode",
          "package": "prefix-units",
          "partial": "Format Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#t:FormatMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines available parse modes.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "ParseMode",
          "package": "prefix-units",
          "source": "src/Data-Prefix-Units.html#ParseMode",
          "type": "data"
        },
        "index": {
          "description": "Defines available parse modes",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "ParseMode",
          "package": "prefix-units",
          "partial": "Parse Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#t:ParseMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines unit handling mode on parse.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "ParseOptions",
          "package": "prefix-units",
          "source": "src/Data-Prefix-Units.html#ParseOptions",
          "type": "data"
        },
        "index": {
          "description": "Defines unit handling mode on parse",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "ParseOptions",
          "package": "prefix-units",
          "partial": "Parse Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#t:ParseOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeclass for handling values that can be converted to/from\n \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "RationalConvertible",
          "package": "prefix-units",
          "source": "src/Data-Prefix-Units.html#RationalConvertible",
          "type": "class"
        },
        "index": {
          "description": "Typeclass for handling values that can be converted to from Rational",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "RationalConvertible",
          "package": "prefix-units",
          "partial": "Rational Convertible",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#t:RationalConvertible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unit type.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "Unit",
          "package": "prefix-units",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "data"
        },
        "index": {
          "description": "The unit type",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Unit",
          "package": "prefix-units",
          "partial": "Unit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Atto",
          "package": "prefix-units",
          "signature": "Atto",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Atto",
          "package": "prefix-units",
          "partial": "Atto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Atto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Centi",
          "package": "prefix-units",
          "signature": "Centi",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Centi",
          "package": "prefix-units",
          "partial": "Centi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Centi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Deci",
          "package": "prefix-units",
          "signature": "Deci",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Deci",
          "package": "prefix-units",
          "partial": "Deci",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Deci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Deka",
          "package": "prefix-units",
          "signature": "Deka",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Deka",
          "package": "prefix-units",
          "partial": "Deka",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Deka"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Exa",
          "package": "prefix-units",
          "signature": "Exa",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Exa",
          "package": "prefix-units",
          "partial": "Exa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Exa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Exbi",
          "package": "prefix-units",
          "signature": "Exbi",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Exbi",
          "package": "prefix-units",
          "partial": "Exbi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Exbi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Femto",
          "package": "prefix-units",
          "signature": "Femto",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Femto",
          "package": "prefix-units",
          "partial": "Femto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Femto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats the value using binary units.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "FormatBinary",
          "package": "prefix-units",
          "signature": "FormatBinary",
          "source": "src/Data-Prefix-Units.html#FormatMode",
          "type": "function"
        },
        "index": {
          "description": "Formats the value using binary units",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "FormatBinary",
          "package": "prefix-units",
          "partial": "Format Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:FormatBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats the value using any SI unit.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "FormatSiAll",
          "package": "prefix-units",
          "signature": "FormatSiAll",
          "source": "src/Data-Prefix-Units.html#FormatMode",
          "type": "function"
        },
        "index": {
          "description": "Formats the value using any SI unit",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "FormatSiAll",
          "package": "prefix-units",
          "partial": "Format Si All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:FormatSiAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats the value using units greater or\n equal to \u003ccode\u003e\u003ca\u003eKilo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "FormatSiKMGT",
          "package": "prefix-units",
          "signature": "FormatSiKMGT",
          "source": "src/Data-Prefix-Units.html#FormatMode",
          "type": "function"
        },
        "index": {
          "description": "Formats the value using units greater or equal to Kilo",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "FormatSiKMGT",
          "package": "prefix-units",
          "partial": "Format Si KMGT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:FormatSiKMGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats the value using supraunitary SI\n units only (which means that e.g. \u003ccode\u003e0.001\u003c/code\u003e\n will remain as such instead of being\n formatted as \u003ccode\u003e1m\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "FormatSiSupraunitary",
          "package": "prefix-units",
          "signature": "FormatSiSupraunitary",
          "source": "src/Data-Prefix-Units.html#FormatMode",
          "type": "function"
        },
        "index": {
          "description": "Formats the value using supraunitary SI units only which means that e.g will remain as such instead of being formatted as",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "FormatSiSupraunitary",
          "package": "prefix-units",
          "partial": "Format Si Supraunitary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:FormatSiSupraunitary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Gibi",
          "package": "prefix-units",
          "signature": "Gibi",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Gibi",
          "package": "prefix-units",
          "partial": "Gibi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Gibi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Giga",
          "package": "prefix-units",
          "signature": "Giga",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Giga",
          "package": "prefix-units",
          "partial": "Giga",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Giga"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Hecto",
          "package": "prefix-units",
          "signature": "Hecto",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Hecto",
          "package": "prefix-units",
          "partial": "Hecto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Hecto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Kibi",
          "package": "prefix-units",
          "signature": "Kibi",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Kibi",
          "package": "prefix-units",
          "partial": "Kibi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Kibi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Kilo",
          "package": "prefix-units",
          "signature": "Kilo",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Kilo",
          "package": "prefix-units",
          "partial": "Kilo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Kilo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Mebi",
          "package": "prefix-units",
          "signature": "Mebi",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Mebi",
          "package": "prefix-units",
          "partial": "Mebi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Mebi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Mega",
          "package": "prefix-units",
          "signature": "Mega",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Mega",
          "package": "prefix-units",
          "partial": "Mega",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Mega"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Micro",
          "package": "prefix-units",
          "signature": "Micro",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Micro",
          "package": "prefix-units",
          "partial": "Micro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Micro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Milli",
          "package": "prefix-units",
          "signature": "Milli",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Milli",
          "package": "prefix-units",
          "partial": "Milli",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Milli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Nano",
          "package": "prefix-units",
          "signature": "Nano",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Nano",
          "package": "prefix-units",
          "partial": "Nano",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Nano"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses binary units only. In this mode, both the\n exact and shortened forms are accepted (e.g. both\n \"k\" and \"ki\" will be converted into\n \u003ccode\u003e\u003ca\u003eKibi\u003c/a\u003e\u003c/code\u003e). Furthermore, the parsing is\n case-insensitive.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "ParseBinary",
          "package": "prefix-units",
          "signature": "ParseBinary",
          "source": "src/Data-Prefix-Units.html#ParseMode",
          "type": "function"
        },
        "index": {
          "description": "Parses binary units only In this mode both the exact and shortened forms are accepted e.g both and ki will be converted into Kibi Furthermore the parsing is case-insensitive",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "ParseBinary",
          "package": "prefix-units",
          "partial": "Parse Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:ParseBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExact parser mode. This mode is fully\n case-sensitive.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "ParseExact",
          "package": "prefix-units",
          "signature": "ParseExact",
          "source": "src/Data-Prefix-Units.html#ParseMode",
          "type": "function"
        },
        "index": {
          "description": "Exact parser mode This mode is fully case-sensitive",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "ParseExact",
          "package": "prefix-units",
          "partial": "Parse Exact",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:ParseExact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses only units with bigger than \u003ccode\u003e\u003ca\u003eKilo\u003c/a\u003e\u003c/code\u003e,\n respectively \u003ccode\u003e\u003ca\u003eKibi\u003c/a\u003e\u003c/code\u003e (for binary units). This allows\n the parser to be case-insensitive.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "ParseKMGT",
          "package": "prefix-units",
          "signature": "ParseKMGT",
          "source": "src/Data-Prefix-Units.html#ParseMode",
          "type": "function"
        },
        "index": {
          "description": "Parses only units with bigger than Kilo respectively Kibi for binary units This allows the parser to be case-insensitive",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "ParseKMGT",
          "package": "prefix-units",
          "partial": "Parse KMGT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:ParseKMGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Pebi",
          "package": "prefix-units",
          "signature": "Pebi",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Pebi",
          "package": "prefix-units",
          "partial": "Pebi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Pebi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Peta",
          "package": "prefix-units",
          "signature": "Peta",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Peta",
          "package": "prefix-units",
          "partial": "Peta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Peta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Pico",
          "package": "prefix-units",
          "signature": "Pico",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Pico",
          "package": "prefix-units",
          "partial": "Pico",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Pico"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Tebi",
          "package": "prefix-units",
          "signature": "Tebi",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Tebi",
          "package": "prefix-units",
          "partial": "Tebi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Tebi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Tera",
          "package": "prefix-units",
          "signature": "Tera",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Tera",
          "package": "prefix-units",
          "partial": "Tera",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Tera"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf unit is missing, use a\n default one.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "UnitDefault",
          "package": "prefix-units",
          "signature": "UnitDefault Unit",
          "source": "src/Data-Prefix-Units.html#ParseOptions",
          "type": "function"
        },
        "index": {
          "description": "If unit is missing use default one",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "UnitDefault",
          "package": "prefix-units",
          "partial": "Unit Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:UnitDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unit is optional, a missing\n one means the value is not\n scaled.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "UnitOptional",
          "package": "prefix-units",
          "signature": "UnitOptional",
          "source": "src/Data-Prefix-Units.html#ParseOptions",
          "type": "function"
        },
        "index": {
          "description": "The unit is optional missing one means the value is not scaled",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "UnitOptional",
          "package": "prefix-units",
          "partial": "Unit Optional",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:UnitOptional"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequires that the input string\n has a unit.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "UnitRequired",
          "package": "prefix-units",
          "signature": "UnitRequired",
          "source": "src/Data-Prefix-Units.html#ParseOptions",
          "type": "function"
        },
        "index": {
          "description": "Requires that the input string has unit",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "UnitRequired",
          "package": "prefix-units",
          "partial": "Unit Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:UnitRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Yocto",
          "package": "prefix-units",
          "signature": "Yocto",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Yocto",
          "package": "prefix-units",
          "partial": "Yocto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Yocto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Yotta",
          "package": "prefix-units",
          "signature": "Yotta",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Yotta",
          "package": "prefix-units",
          "partial": "Yotta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Yotta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Zepto",
          "package": "prefix-units",
          "signature": "Zepto",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Zepto",
          "package": "prefix-units",
          "partial": "Zepto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Zepto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prefix.Units",
          "name": "Zetta",
          "package": "prefix-units",
          "signature": "Zetta",
          "source": "src/Data-Prefix-Units.html#Unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "Zetta",
          "package": "prefix-units",
          "partial": "Zetta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:Zetta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of binary units.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "binaryUnits",
          "package": "prefix-units",
          "signature": "[Unit]",
          "source": "src/Data-Prefix-Units.html#binaryUnits",
          "type": "function"
        },
        "index": {
          "description": "List of binary units",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "binaryUnits",
          "normalized": "[Unit]",
          "package": "prefix-units",
          "partial": "Units",
          "signature": "[Unit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:binaryUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the value from Ratioal\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "convFromRational",
          "package": "prefix-units",
          "signature": "Rational -\u003e a",
          "source": "src/Data-Prefix-Units.html#convFromRational",
          "type": "method"
        },
        "index": {
          "description": "Converts the value from Ratioal",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "convFromRational",
          "normalized": "Rational-\u003ea",
          "package": "prefix-units",
          "partial": "From Rational",
          "signature": "Rational-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:convFromRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the unit symbol, which for the \u003ccode\u003e\u003ca\u003eMicro\u003c/a\u003e\u003c/code\u003e unit is not ASCII.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "fancySymbol",
          "package": "prefix-units",
          "signature": "Unit -\u003e String",
          "source": "src/Data-Prefix-Units.html#fancySymbol",
          "type": "function"
        },
        "index": {
          "description": "Returns the unit symbol which for the Micro unit is not ASCII",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "fancySymbol",
          "normalized": "Unit-\u003eString",
          "package": "prefix-units",
          "partial": "Symbol",
          "signature": "Unit-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:fancySymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the scaled value and unit for a given value\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "formatValue",
          "package": "prefix-units",
          "signature": "FormatOption-\u003e a-\u003e (a, Maybe Unit)",
          "type": "function"
        },
        "index": {
          "description": "Computes the scaled value and unit for given value",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "formatValue",
          "normalized": "FormatOption-\u003ea-\u003e(a,Maybe Unit)",
          "package": "prefix-units",
          "partial": "Value",
          "signature": "FormatOption-\u003ea-\u003e(a,Maybe Unit)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:formatValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a binary symbol. See \u003ccode\u003e\u003ca\u003eParseBinary\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "parseBinarySymbol",
          "package": "prefix-units",
          "signature": "String -\u003e Either String Unit",
          "source": "src/Data-Prefix-Units.html#parseBinarySymbol",
          "type": "function"
        },
        "index": {
          "description": "Parses binary symbol See ParseBinary for details",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "parseBinarySymbol",
          "normalized": "String-\u003eEither String Unit",
          "package": "prefix-units",
          "partial": "Binary Symbol",
          "signature": "String-\u003eEither String Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseBinarySymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a symbol in the exact mode. See \u003ccode\u003e\u003ca\u003eParseExact\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "parseExactSymbol",
          "package": "prefix-units",
          "signature": "String -\u003e Either String Unit",
          "source": "src/Data-Prefix-Units.html#parseExactSymbol",
          "type": "function"
        },
        "index": {
          "description": "Parses symbol in the exact mode See ParseExact for details",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "parseExactSymbol",
          "normalized": "String-\u003eEither String Unit",
          "package": "prefix-units",
          "partial": "Exact Symbol",
          "signature": "String-\u003eEither String Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseExactSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric parse routine. Takes two function arguments which fix the\n initial and final conversion, a parse mode and the string to be\n parsed.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "parseGeneric",
          "package": "prefix-units",
          "signature": "ParseOptions-\u003e [Unit]-\u003e ParseMode-\u003e String-\u003e Either String a",
          "type": "function"
        },
        "index": {
          "description": "Generic parse routine Takes two function arguments which fix the initial and final conversion parse mode and the string to be parsed",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "parseGeneric",
          "normalized": "ParseOptions-\u003e[Unit]-\u003eParseMode-\u003eString-\u003eEither String a",
          "package": "prefix-units",
          "partial": "Generic",
          "signature": "ParseOptions-\u003e[Unit]-\u003eParseMode-\u003eString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the given symbol as one of the \"big\" units (kilo/kibi\n and above). This allows the parsing to be case-insensitive.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "parseKMGTSymbol",
          "package": "prefix-units",
          "signature": "String -\u003e Either String Unit",
          "source": "src/Data-Prefix-Units.html#parseKMGTSymbol",
          "type": "function"
        },
        "index": {
          "description": "Parses the given symbol as one of the big units kilo kibi and above This allows the parsing to be case-insensitive",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "parseKMGTSymbol",
          "normalized": "String-\u003eEither String Unit",
          "package": "prefix-units",
          "partial": "KMGTSymbol",
          "signature": "String-\u003eEither String Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseKMGTSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a unit from a string. The exact parsing mode determines\n the rules for parsing and the range of possible units.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "parseSymbol",
          "package": "prefix-units",
          "signature": "ParseMode -\u003e String -\u003e Either String Unit",
          "source": "src/Data-Prefix-Units.html#parseSymbol",
          "type": "function"
        },
        "index": {
          "description": "Parses unit from string The exact parsing mode determines the rules for parsing and the range of possible units",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "parseSymbol",
          "normalized": "ParseMode-\u003eString-\u003eEither String Unit",
          "package": "prefix-units",
          "partial": "Symbol",
          "signature": "ParseMode-\u003eString-\u003eEither String Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric parse routine. Takes two function arguments which fix the\n initial and final conversion, a parse mode and the string to be\n parsed.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "parseValue",
          "package": "prefix-units",
          "signature": "ParseMode-\u003e String-\u003e Either String a",
          "type": "function"
        },
        "index": {
          "description": "Generic parse routine Takes two function arguments which fix the initial and final conversion parse mode and the string to be parsed",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "parseValue",
          "normalized": "ParseMode-\u003eString-\u003eEither String a",
          "package": "prefix-units",
          "partial": "Value",
          "signature": "ParseMode-\u003eString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:parseValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the recommended unit for displaying a given value. The\n simple algorithm uses the first unit for which we have a\n supraunitary representation. In case we don't find any such value\n (e.g. for a zero value), then \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "recommendedUnit",
          "package": "prefix-units",
          "signature": "FormatMode -\u003e a -\u003e Maybe Unit",
          "source": "src/Data-Prefix-Units.html#recommendedUnit",
          "type": "function"
        },
        "index": {
          "description": "Computes the recommended unit for displaying given value The simple algorithm uses the first unit for which we have supraunitary representation In case we don find any such value e.g for zero value then Nothing is returned",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "recommendedUnit",
          "normalized": "FormatMode-\u003ea-\u003eMaybe Unit",
          "package": "prefix-units",
          "partial": "Unit",
          "signature": "FormatMode-\u003ea-\u003eMaybe Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:recommendedUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a final string representation of a value.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "showValue",
          "package": "prefix-units",
          "signature": "FormatOption-\u003e a-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Generates final string representation of value",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "showValue",
          "normalized": "FormatOption-\u003ea-\u003eString",
          "package": "prefix-units",
          "partial": "Value",
          "signature": "FormatOption-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:showValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple helper to generate the full string representation of an\n integral value.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "showValueWith",
          "package": "prefix-units",
          "signature": "(Unit -\u003e String)-\u003e FormatOption-\u003e a-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Simple helper to generate the full string representation of an integral value",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "showValueWith",
          "normalized": "(Unit-\u003eString)-\u003eFormatOption-\u003ea-\u003eString",
          "package": "prefix-units",
          "partial": "Value With",
          "signature": "(Unit-\u003eString)-\u003eFormatOption-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:showValueWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of SI units which are greater or equal to \u003ccode\u003e\u003ca\u003eKilo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "siKMGT",
          "package": "prefix-units",
          "signature": "[Unit]",
          "source": "src/Data-Prefix-Units.html#siKMGT",
          "type": "function"
        },
        "index": {
          "description": "List of SI units which are greater or equal to Kilo",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "siKMGT",
          "normalized": "[Unit]",
          "package": "prefix-units",
          "partial": "KMGT",
          "signature": "[Unit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:siKMGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of units which are supraunitary (their multiplier is greater\n than one).\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "siSupraunitary",
          "package": "prefix-units",
          "signature": "[Unit]",
          "source": "src/Data-Prefix-Units.html#siSupraunitary",
          "type": "function"
        },
        "index": {
          "description": "List of units which are supraunitary their multiplier is greater than one",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "siSupraunitary",
          "normalized": "[Unit]",
          "package": "prefix-units",
          "partial": "Supraunitary",
          "signature": "[Unit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:siSupraunitary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of all SI units.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "siUnits",
          "package": "prefix-units",
          "signature": "[Unit]",
          "source": "src/Data-Prefix-Units.html#siUnits",
          "type": "function"
        },
        "index": {
          "description": "List of all SI units",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "siUnits",
          "normalized": "[Unit]",
          "package": "prefix-units",
          "partial": "Units",
          "signature": "[Unit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:siUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the unit scaling \"multiplier\" (which can be either\n supra- or sub-unitary):\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunitMultiplier Micro\n\u003c/code\u003e\u003c/strong\u003e1 % 1000000\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eunitMultiplier Mebi\n\u003c/code\u003e\u003c/strong\u003e1048576 % 1\n\u003c/pre\u003e",
          "module": "Data.Prefix.Units",
          "name": "unitMultiplier",
          "package": "prefix-units",
          "signature": "Unit -\u003e Rational",
          "source": "src/Data-Prefix-Units.html#unitMultiplier",
          "type": "function"
        },
        "index": {
          "description": "Returns the unit scaling multiplier which can be either supra or sub-unitary unitMultiplier Micro unitMultiplier Mebi",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "unitMultiplier",
          "normalized": "Unit-\u003eRational",
          "package": "prefix-units",
          "partial": "Multiplier",
          "signature": "Unit-\u003eRational",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:unitMultiplier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the unit full name.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "unitName",
          "package": "prefix-units",
          "signature": "Unit -\u003e String",
          "source": "src/Data-Prefix-Units.html#unitName",
          "type": "function"
        },
        "index": {
          "description": "Returns the unit full name",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "unitName",
          "normalized": "Unit-\u003eString",
          "package": "prefix-units",
          "partial": "Name",
          "signature": "Unit-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:unitName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe available units range for various format modes.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "unitRange",
          "package": "prefix-units",
          "signature": "FormatMode -\u003e [Unit]",
          "source": "src/Data-Prefix-Units.html#unitRange",
          "type": "function"
        },
        "index": {
          "description": "The available units range for various format modes",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "unitRange",
          "normalized": "FormatMode-\u003e[Unit]",
          "package": "prefix-units",
          "partial": "Range",
          "signature": "FormatMode-\u003e[Unit]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:unitRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the unit ASCII symbol.\n\u003c/p\u003e",
          "module": "Data.Prefix.Units",
          "name": "unitSymbol",
          "package": "prefix-units",
          "signature": "Unit -\u003e String",
          "source": "src/Data-Prefix-Units.html#unitSymbol",
          "type": "function"
        },
        "index": {
          "description": "Returns the unit ASCII symbol",
          "hierarchy": "Data Prefix Units",
          "module": "Data.Prefix.Units",
          "name": "unitSymbol",
          "normalized": "Unit-\u003eString",
          "package": "prefix-units",
          "partial": "Symbol",
          "signature": "Unit-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prefix-units/docs/Data-Prefix-Units.html#v:unitSymbol"
      }
    }
  ]
]