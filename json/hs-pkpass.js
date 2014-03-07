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
        "word": "hs-pkpass"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides types and functions for type-safe generation of PassBook's \u003ccode\u003epass.json\u003c/code\u003e files.\n\u003c/p\u003e\u003cp\u003eThis is a complete implementation of the Passbook Package Format Reference, available at\n    \u003ca\u003ehttps://developer.apple.com/library/ios/#documentation/UserExperience/Reference/PassKit_Bundle/Chapters/Introduction.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eIt ensures that passes are created correctly wherever possible. Currently, NSBundle localization is not supported.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Passbook.Types",
          "name": "Types",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides types and functions for type-safe generation of PassBook pass.json files This is complete implementation of the Passbook Package Format Reference available at https developer.apple.com library ios documentation UserExperience Reference PassKit Bundle Chapters Introduction.html It ensures that passes are created correctly wherever possible Currently NSBundle localization is not supported",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Types",
          "package": "hs-pkpass",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass field alignment\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "Alignment",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#Alignment",
          "type": "data"
        },
        "index": {
          "description": "Pass field alignment",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Alignment",
          "package": "hs-pkpass",
          "partial": "Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pass barcode. In most cases the helper function \u003ccode\u003e\u003ca\u003emkBarcode\u003c/a\u003e\u003c/code\u003e should be sufficient.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "Barcode",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#Barcode",
          "type": "data"
        },
        "index": {
          "description": "pass barcode In most cases the helper function mkBarcode should be sufficient",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Barcode",
          "package": "hs-pkpass",
          "partial": "Barcode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:Barcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBarcode is constructed by a Barcode format, an encoding\n  type and the Barcode message.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "BarcodeFormat",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#BarcodeFormat",
          "type": "data"
        },
        "index": {
          "description": "Barcode is constructed by Barcode format an encoding type and the Barcode message",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "BarcodeFormat",
          "package": "hs-pkpass",
          "partial": "Barcode Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:BarcodeFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass field date/time display style\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "DateTimeStyle",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#DateTimeStyle",
          "type": "data"
        },
        "index": {
          "description": "Pass field date time display style",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "DateTimeStyle",
          "package": "hs-pkpass",
          "partial": "Date Time Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:DateTimeStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location field\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "Location",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#Location",
          "type": "data"
        },
        "index": {
          "description": "location field",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Location",
          "package": "hs-pkpass",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe manifest.json file\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "Manifest",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#Manifest",
          "type": "data"
        },
        "index": {
          "description": "The manifest.json file",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Manifest",
          "package": "hs-pkpass",
          "partial": "Manifest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:Manifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass field number display style\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "NumberStyle",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#NumberStyle",
          "type": "data"
        },
        "index": {
          "description": "Pass field number display style",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "NumberStyle",
          "package": "hs-pkpass",
          "partial": "Number Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:NumberStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA complete pass\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "Pass",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#Pass",
          "type": "data"
        },
        "index": {
          "description": "complete pass",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Pass",
          "package": "hs-pkpass",
          "partial": "Pass",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:Pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fields within a pass\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "PassContent",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#PassContent",
          "type": "data"
        },
        "index": {
          "description": "The fields within pass",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PassContent",
          "package": "hs-pkpass",
          "partial": "Pass Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:PassContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single pass field. The type \u003ccode\u003e\u003ca\u003ePassValue\u003c/a\u003e\u003c/code\u003e holds the fields value and ensures that the JSON output is compatible with Passbook.\n  To create a very simple key/value field containing text you can use the \u003ccode\u003e\u003ca\u003emkSimpleField\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "PassField",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#PassField",
          "type": "data"
        },
        "index": {
          "description": "single pass field The type PassValue holds the fields value and ensures that the JSON output is compatible with Passbook To create very simple key value field containing text you can use the mkSimpleField function",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PassField",
          "package": "hs-pkpass",
          "partial": "Pass Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:PassField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a pass including its fields\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "PassType",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#PassType",
          "type": "data"
        },
        "index": {
          "description": "The type of pass including its fields",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PassType",
          "package": "hs-pkpass",
          "partial": "Pass Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:PassType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuxiliary type to ensure that field values are rendered correctly\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "PassValue",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#PassValue",
          "type": "data"
        },
        "index": {
          "description": "Auxiliary type to ensure that field values are rendered correctly",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PassValue",
          "package": "hs-pkpass",
          "partial": "Pass Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:PassValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple RGB color value. In combination with the \u003ccode\u003e\u003ca\u003ergb\u003c/a\u003e\u003c/code\u003e function this can be written just like in\n  CSS, e.g. \u003ccode\u003ergb(43, 53, 65)\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003ergb\u003c/a\u003e\u003c/code\u003e function also ensures that the provided values are valid.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "RGBColor",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#RGBColor",
          "type": "data"
        },
        "index": {
          "description": "simple RGB color value In combination with the rgb function this can be written just like in CSS e.g rgb The rgb function also ensures that the provided values are valid",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "RGBColor",
          "package": "hs-pkpass",
          "partial": "RGBColor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:RGBColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "RelevantDate",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#RelevantDate",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "RelevantDate",
          "package": "hs-pkpass",
          "partial": "Relevant Date",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:RelevantDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoardingPass transit type. Only necessary for Boarding Passes.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "TransitType",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#TransitType",
          "type": "data"
        },
        "index": {
          "description": "BoardingPass transit type Only necessary for Boarding Passes",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "TransitType",
          "package": "hs-pkpass",
          "partial": "Transit Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:TransitType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "WebService",
          "package": "hs-pkpass",
          "source": "src/Passbook-Types.html#WebService",
          "type": "data"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "WebService",
          "package": "hs-pkpass",
          "partial": "Web Service",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#t:WebService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Air",
          "package": "hs-pkpass",
          "signature": "Air",
          "source": "src/Passbook-Types.html#TransitType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Air",
          "package": "hs-pkpass",
          "partial": "Air",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Air"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Aztec",
          "package": "hs-pkpass",
          "signature": "Aztec",
          "source": "src/Passbook-Types.html#BarcodeFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Aztec",
          "package": "hs-pkpass",
          "partial": "Aztec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Aztec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Barcode",
          "package": "hs-pkpass",
          "signature": "Barcode",
          "source": "src/Passbook-Types.html#Barcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Barcode",
          "package": "hs-pkpass",
          "partial": "Barcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Barcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "BoardingPass",
          "package": "hs-pkpass",
          "signature": "BoardingPass TransitType PassContent",
          "source": "src/Passbook-Types.html#PassType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "BoardingPass",
          "package": "hs-pkpass",
          "partial": "Boarding Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:BoardingPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Boat",
          "package": "hs-pkpass",
          "signature": "Boat",
          "source": "src/Passbook-Types.html#TransitType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Boat",
          "package": "hs-pkpass",
          "partial": "Boat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Boat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Bus",
          "package": "hs-pkpass",
          "signature": "Bus",
          "source": "src/Passbook-Types.html#TransitType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Bus",
          "package": "hs-pkpass",
          "partial": "Bus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Bus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Center",
          "package": "hs-pkpass",
          "signature": "Center",
          "source": "src/Passbook-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Center",
          "package": "hs-pkpass",
          "partial": "Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Coupon",
          "package": "hs-pkpass",
          "signature": "Coupon PassContent",
          "source": "src/Passbook-Types.html#PassType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Coupon",
          "package": "hs-pkpass",
          "partial": "Coupon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Coupon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Decimal",
          "package": "hs-pkpass",
          "signature": "Decimal",
          "source": "src/Passbook-Types.html#NumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Decimal",
          "package": "hs-pkpass",
          "partial": "Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Event",
          "package": "hs-pkpass",
          "signature": "Event PassContent",
          "source": "src/Passbook-Types.html#PassType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Event",
          "package": "hs-pkpass",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to \u003ccode\u003eNSDateFormatterFullStyle\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "Full",
          "package": "hs-pkpass",
          "signature": "Full",
          "source": "src/Passbook-Types.html#DateTimeStyle",
          "type": "function"
        },
        "index": {
          "description": "Corresponds to NSDateFormatterFullStyle",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Full",
          "package": "hs-pkpass",
          "partial": "Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Full"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "GenericPass",
          "package": "hs-pkpass",
          "signature": "GenericPass PassContent",
          "source": "src/Passbook-Types.html#PassType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "GenericPass",
          "package": "hs-pkpass",
          "partial": "Generic Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:GenericPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "GenericTransit",
          "package": "hs-pkpass",
          "signature": "GenericTransit",
          "source": "src/Passbook-Types.html#TransitType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "GenericTransit",
          "package": "hs-pkpass",
          "partial": "Generic Transit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:GenericTransit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "LeftAlign",
          "package": "hs-pkpass",
          "signature": "LeftAlign",
          "source": "src/Passbook-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "LeftAlign",
          "package": "hs-pkpass",
          "partial": "Left Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:LeftAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Location",
          "package": "hs-pkpass",
          "signature": "Location",
          "source": "src/Passbook-Types.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Location",
          "package": "hs-pkpass",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to \u003ccode\u003eNSDateFormatterLongStyle\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "Long",
          "package": "hs-pkpass",
          "signature": "Long",
          "source": "src/Passbook-Types.html#DateTimeStyle",
          "type": "function"
        },
        "index": {
          "description": "Corresponds to NSDateFormatterLongStyle",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Long",
          "package": "hs-pkpass",
          "partial": "Long",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Long"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(Filename, Hash)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "Manifest",
          "package": "hs-pkpass",
          "signature": "Manifest [(Text, Text)]",
          "source": "src/Passbook-Types.html#Manifest",
          "type": "function"
        },
        "index": {
          "description": "Filename Hash",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Manifest",
          "normalized": "Manifest[(Text,Text)]",
          "package": "hs-pkpass",
          "partial": "Manifest",
          "signature": "Manifest[(Text,Text)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Manifest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to \u003ccode\u003eNSDateFormatterMediumStyle\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "Medium",
          "package": "hs-pkpass",
          "signature": "Medium",
          "source": "src/Passbook-Types.html#DateTimeStyle",
          "type": "function"
        },
        "index": {
          "description": "Corresponds to NSDateFormatterMediumStyle",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Medium",
          "package": "hs-pkpass",
          "partial": "Medium",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Medium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Natural",
          "package": "hs-pkpass",
          "signature": "Natural",
          "source": "src/Passbook-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Natural",
          "package": "hs-pkpass",
          "partial": "Natural",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to \u003ccode\u003eNSDateFormatterNoStyle\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "None",
          "package": "hs-pkpass",
          "signature": "None",
          "source": "src/Passbook-Types.html#DateTimeStyle",
          "type": "function"
        },
        "index": {
          "description": "Corresponds to NSDateFormatterNoStyle",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "None",
          "package": "hs-pkpass",
          "partial": "None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:None"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "PDF417",
          "package": "hs-pkpass",
          "signature": "PDF417",
          "source": "src/Passbook-Types.html#BarcodeFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PDF417",
          "package": "hs-pkpass",
          "partial": "PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:PDF417"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Pass",
          "package": "hs-pkpass",
          "signature": "Pass",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Pass",
          "package": "hs-pkpass",
          "partial": "Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "PassContent",
          "package": "hs-pkpass",
          "signature": "PassContent",
          "source": "src/Passbook-Types.html#PassContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PassContent",
          "package": "hs-pkpass",
          "partial": "Pass Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:PassContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "PassDate",
          "package": "hs-pkpass",
          "signature": "PassDate UTCTime",
          "source": "src/Passbook-Types.html#PassValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PassDate",
          "package": "hs-pkpass",
          "partial": "Pass Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:PassDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "PassDouble",
          "package": "hs-pkpass",
          "signature": "PassDouble Double",
          "source": "src/Passbook-Types.html#PassValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PassDouble",
          "package": "hs-pkpass",
          "partial": "Pass Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:PassDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "PassField",
          "package": "hs-pkpass",
          "signature": "PassField",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PassField",
          "package": "hs-pkpass",
          "partial": "Pass Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:PassField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "PassInt",
          "package": "hs-pkpass",
          "signature": "PassInt Integer",
          "source": "src/Passbook-Types.html#PassValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PassInt",
          "package": "hs-pkpass",
          "partial": "Pass Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:PassInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "PassText",
          "package": "hs-pkpass",
          "signature": "PassText Text",
          "source": "src/Passbook-Types.html#PassValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "PassText",
          "package": "hs-pkpass",
          "partial": "Pass Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:PassText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Percent",
          "package": "hs-pkpass",
          "signature": "Percent",
          "source": "src/Passbook-Types.html#NumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Percent",
          "package": "hs-pkpass",
          "partial": "Percent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Percent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "QRCode",
          "package": "hs-pkpass",
          "signature": "QRCode",
          "source": "src/Passbook-Types.html#BarcodeFormat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "QRCode",
          "package": "hs-pkpass",
          "partial": "QRCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:QRCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "RelevantDate",
          "package": "hs-pkpass",
          "signature": "RelevantDate UTCTime",
          "source": "src/Passbook-Types.html#RelevantDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "RelevantDate",
          "package": "hs-pkpass",
          "partial": "Relevant Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:RelevantDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "RightAlign",
          "package": "hs-pkpass",
          "signature": "RightAlign",
          "source": "src/Passbook-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "RightAlign",
          "package": "hs-pkpass",
          "partial": "Right Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:RightAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Scientific",
          "package": "hs-pkpass",
          "signature": "Scientific",
          "source": "src/Passbook-Types.html#NumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Scientific",
          "package": "hs-pkpass",
          "partial": "Scientific",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Scientific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorresponds to \u003ccode\u003eNSDateFormatterShortStyle\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "Short",
          "package": "hs-pkpass",
          "signature": "Short",
          "source": "src/Passbook-Types.html#DateTimeStyle",
          "type": "function"
        },
        "index": {
          "description": "Corresponds to NSDateFormatterShortStyle",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Short",
          "package": "hs-pkpass",
          "partial": "Short",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Short"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "SpellOut",
          "package": "hs-pkpass",
          "signature": "SpellOut",
          "source": "src/Passbook-Types.html#NumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "SpellOut",
          "package": "hs-pkpass",
          "partial": "Spell Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:SpellOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "StoreCard",
          "package": "hs-pkpass",
          "signature": "StoreCard PassContent",
          "source": "src/Passbook-Types.html#PassType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "StoreCard",
          "package": "hs-pkpass",
          "partial": "Store Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:StoreCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "Train",
          "package": "hs-pkpass",
          "signature": "Train",
          "source": "src/Passbook-Types.html#TransitType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "Train",
          "package": "hs-pkpass",
          "partial": "Train",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:Train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Passbook.Types",
          "name": "WebService",
          "package": "hs-pkpass",
          "signature": "WebService",
          "source": "src/Passbook-Types.html#WebService",
          "type": "function"
        },
        "index": {
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "WebService",
          "package": "hs-pkpass",
          "partial": "Web Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:WebService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText displayed near the barcode (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "altText",
          "package": "hs-pkpass",
          "signature": "Maybe Text",
          "source": "src/Passbook-Types.html#Barcode",
          "type": "function"
        },
        "index": {
          "description": "Text displayed near the barcode optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "altText",
          "package": "hs-pkpass",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:altText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAltitude, in meters, of the location (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "altitude",
          "package": "hs-pkpass",
          "signature": "Maybe Double",
          "source": "src/Passbook-Types.html#Location",
          "type": "function"
        },
        "index": {
          "description": "Altitude in meters of the location optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "altitude",
          "package": "hs-pkpass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:altitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of iTunes Store item identifiers for associated apps (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "associatedStoreIdentifiers",
          "package": "hs-pkpass",
          "signature": "[Text]",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "list of iTunes Store item identifiers for associated apps optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "associatedStoreIdentifiers",
          "normalized": "[Text]",
          "package": "hs-pkpass",
          "partial": "Store Identifiers",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:associatedStoreIdentifiers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthentication token for use with the web service. Must be 16 characters or longer (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "authenticationToken",
          "package": "hs-pkpass",
          "signature": "Text",
          "source": "src/Passbook-Types.html#WebService",
          "type": "function"
        },
        "index": {
          "description": "Authentication token for use with the web service Must be characters or longer optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "authenticationToken",
          "package": "hs-pkpass",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:authenticationToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional fields to be displayed on the front of the pass.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "auxiliaryFields",
          "package": "hs-pkpass",
          "signature": "[PassField]",
          "source": "src/Passbook-Types.html#PassContent",
          "type": "function"
        },
        "index": {
          "description": "Additional fields to be displayed on the front of the pass",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "auxiliaryFields",
          "normalized": "[PassField]",
          "package": "hs-pkpass",
          "partial": "Fields",
          "signature": "[PassField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:auxiliaryFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFields to be on the back of the pass.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "backFields",
          "package": "hs-pkpass",
          "signature": "[PassField]",
          "source": "src/Passbook-Types.html#PassContent",
          "type": "function"
        },
        "index": {
          "description": "Fields to be on the back of the pass",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "backFields",
          "normalized": "[PassField]",
          "package": "hs-pkpass",
          "partial": "Fields",
          "signature": "[PassField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:backFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackground color of the pass (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "backgroundColor",
          "package": "hs-pkpass",
          "signature": "Maybe RGBColor",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Background color of the pass optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "backgroundColor",
          "package": "hs-pkpass",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:backgroundColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBarcode information (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "barcode",
          "package": "hs-pkpass",
          "signature": "Maybe Barcode",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Barcode information optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "barcode",
          "package": "hs-pkpass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:barcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage displayed when the pass is updated. May contain the \u003ccode\u003e%@\u003c/code\u003e placeholder for the value. (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "changeMessage",
          "package": "hs-pkpass",
          "signature": "Maybe Text",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "description": "Message displayed when the pass is updated May contain the placeholder for the value optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "changeMessage",
          "package": "hs-pkpass",
          "partial": "Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:changeMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eISO 4217 currency code for the field's value (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "currencyCode",
          "package": "hs-pkpass",
          "signature": "Maybe Text",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "description": "ISO currency code for the field value optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "currencyCode",
          "package": "hs-pkpass",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:currencyCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle of date to display (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "dateStyle",
          "package": "hs-pkpass",
          "signature": "Maybe DateTimeStyle",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "description": "Style of date to display optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "dateStyle",
          "package": "hs-pkpass",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:dateStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBrief description of the pass (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "description",
          "package": "hs-pkpass",
          "signature": "Text",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Brief description of the pass required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "description",
          "package": "hs-pkpass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForeground color of the pass (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "foregroundColor",
          "package": "hs-pkpass",
          "signature": "Maybe RGBColor",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Foreground color of the pass optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "foregroundColor",
          "package": "hs-pkpass",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:foregroundColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBarcode format (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "format",
          "package": "hs-pkpass",
          "signature": "BarcodeFormat",
          "source": "src/Passbook-Types.html#Barcode",
          "type": "function"
        },
        "index": {
          "description": "Barcode format required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "format",
          "package": "hs-pkpass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFields to be displayed on the front of the pass. Always shown in the stack.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "headerFields",
          "package": "hs-pkpass",
          "signature": "[PassField]",
          "source": "src/Passbook-Types.html#PassContent",
          "type": "function"
        },
        "index": {
          "description": "Fields to be displayed on the front of the pass Always shown in the stack",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "headerFields",
          "normalized": "[PassField]",
          "package": "hs-pkpass",
          "partial": "Fields",
          "signature": "[PassField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:headerFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the date/time displayed relative to the current time or absolute? Default: \u003ccode\u003eFalse\u003c/code\u003e (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "isRelative",
          "package": "hs-pkpass",
          "signature": "Maybe Bool",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "description": "Is the date time displayed relative to the current time or absolute Default False optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "isRelative",
          "package": "hs-pkpass",
          "partial": "Relative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:isRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMust be a unique key within the scope of the pass (e.g. \"departure-gate\") (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "key",
          "package": "hs-pkpass",
          "signature": "Text",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "description": "Must be unique key within the scope of the pass e.g departure-gate required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "key",
          "package": "hs-pkpass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel text for the field. (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "label",
          "package": "hs-pkpass",
          "signature": "Maybe Text",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "description": "Label text for the field optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "label",
          "package": "hs-pkpass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor of the label text. If omitted, the color is determined automatically. (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "labelColor",
          "package": "hs-pkpass",
          "signature": "Maybe Text",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Color of the label text If omitted the color is determined automatically optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "labelColor",
          "package": "hs-pkpass",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:labelColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLatitude, in degrees, of the location (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "latitude",
          "package": "hs-pkpass",
          "signature": "Double",
          "source": "src/Passbook-Types.html#Location",
          "type": "function"
        },
        "index": {
          "description": "Latitude in degrees of the location required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "latitude",
          "package": "hs-pkpass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:latitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocations where the pass is relevant (e.g. that of a store) (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "locations",
          "package": "hs-pkpass",
          "signature": "[Location]",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Locations where the pass is relevant e.g that of store optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "locations",
          "normalized": "[Location]",
          "package": "hs-pkpass",
          "signature": "[Location]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:locations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText displayed next to the logo on the pass (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "logoText",
          "package": "hs-pkpass",
          "signature": "Maybe Text",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Text displayed next to the logo on the pass optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "logoText",
          "package": "hs-pkpass",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:logoText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLongitude, in degrees, of the location (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "longitude",
          "package": "hs-pkpass",
          "signature": "Double",
          "source": "src/Passbook-Types.html#Location",
          "type": "function"
        },
        "index": {
          "description": "Longitude in degrees of the location required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "longitude",
          "package": "hs-pkpass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:longitude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMessage / payload to be displayed as a barcode (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "message",
          "package": "hs-pkpass",
          "signature": "Text",
          "source": "src/Passbook-Types.html#Barcode",
          "type": "function"
        },
        "index": {
          "description": "Message payload to be displayed as barcode required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "message",
          "package": "hs-pkpass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBarcode encoding. Default in the mkBarcode functions is iso-8859-1 (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "messageEncoding",
          "package": "hs-pkpass",
          "signature": "Text",
          "source": "src/Passbook-Types.html#Barcode",
          "type": "function"
        },
        "index": {
          "description": "Barcode encoding Default in the mkBarcode functions is iso-8859-1 required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "messageEncoding",
          "package": "hs-pkpass",
          "partial": "Encoding",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:messageEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function takes a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eBarcodeFormat\u003c/a\u003e\u003c/code\u003e and uses the text\n  for both the barcode message and the alternative text.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "mkBarcode",
          "package": "hs-pkpass",
          "signature": "Text -\u003e BarcodeFormat -\u003e Barcode",
          "source": "src/Passbook-Types.html#mkBarcode",
          "type": "function"
        },
        "index": {
          "description": "This function takes Text and BarcodeFormat and uses the text for both the barcode message and the alternative text",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "mkBarcode",
          "normalized": "Text-\u003eBarcodeFormat-\u003eBarcode",
          "package": "hs-pkpass",
          "partial": "Barcode",
          "signature": "Text-\u003eBarcodeFormat-\u003eBarcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:mkBarcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a simple \u003ccode\u003e\u003ca\u003ePassField\u003c/a\u003e\u003c/code\u003e with just a key, a value and an optional label.\n  All the other optional fields are set to \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "mkSimpleField",
          "package": "hs-pkpass",
          "signature": "Text-\u003e PassValue-\u003e Maybe Text-\u003e PassField",
          "type": "function"
        },
        "index": {
          "description": "Creates simple PassField with just key value and an optional label All the other optional fields are set to Nothing",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "mkSimpleField",
          "normalized": "Text-\u003ePassValue-\u003eMaybe Text-\u003ePassField",
          "package": "hs-pkpass",
          "partial": "Simple Field",
          "signature": "Text-\u003ePassValue-\u003eMaybe Text-\u003ePassField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:mkSimpleField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle of number to display. See \u003ccode\u003eNSNumberFormatterStyle\u003c/code\u003e docs for more information. (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "numberStyle",
          "package": "hs-pkpass",
          "signature": "Maybe NumberStyle",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "description": "Style of number to display See NSNumberFormatterStyle docs for more information optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "numberStyle",
          "package": "hs-pkpass",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:numberStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay name of the organization that signed the pass (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "organizationName",
          "package": "hs-pkpass",
          "signature": "Text",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Display name of the organization that signed the pass required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "organizationName",
          "package": "hs-pkpass",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:organizationName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe kind of pass and the passes' fields (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "passContent",
          "package": "hs-pkpass",
          "signature": "PassType",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "The kind of pass and the passes fields required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "passContent",
          "package": "hs-pkpass",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:passContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass type identifier, as issued by Apple (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "passTypeIdentifier",
          "package": "hs-pkpass",
          "signature": "Text",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Pass type identifier as issued by Apple required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "passTypeIdentifier",
          "package": "hs-pkpass",
          "partial": "Type Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:passTypeIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFields to be displayed prominently on the front of the pass.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "primaryFields",
          "package": "hs-pkpass",
          "signature": "[PassField]",
          "source": "src/Passbook-Types.html#PassContent",
          "type": "function"
        },
        "index": {
          "description": "Fields to be displayed prominently on the front of the pass",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "primaryFields",
          "normalized": "[PassField]",
          "package": "hs-pkpass",
          "partial": "Fields",
          "signature": "[PassField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:primaryFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eISO 8601 formatted date for when the pass becomes relevant (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "relevantDate",
          "package": "hs-pkpass",
          "signature": "Maybe RelevantDate",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "ISO formatted date for when the pass becomes relevant optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "relevantDate",
          "package": "hs-pkpass",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:relevantDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText displayed on the lock screen when the pass is relevant (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "relevantText",
          "package": "hs-pkpass",
          "signature": "Maybe Text",
          "source": "src/Passbook-Types.html#Location",
          "type": "function"
        },
        "index": {
          "description": "Text displayed on the lock screen when the pass is relevant optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "relevantText",
          "package": "hs-pkpass",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:relevantText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003eJust RGBColor\u003c/code\u003e if all supplied numbers are between 0 and 255.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "rgb",
          "package": "hs-pkpass",
          "signature": "(Int, Int, Int) -\u003e Maybe RGBColor",
          "source": "src/Passbook-Types.html#rgb",
          "type": "function"
        },
        "index": {
          "description": "Creates Just RGBColor if all supplied numbers are between and",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "rgb",
          "normalized": "(Int,Int,Int)-\u003eMaybe RGBColor",
          "package": "hs-pkpass",
          "signature": "(Int,Int,Int)-\u003eMaybe RGBColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFields to be displayed on the front of the pass.\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "secondaryFields",
          "package": "hs-pkpass",
          "signature": "[PassField]",
          "source": "src/Passbook-Types.html#PassContent",
          "type": "function"
        },
        "index": {
          "description": "Fields to be displayed on the front of the pass",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "secondaryFields",
          "normalized": "[PassField]",
          "package": "hs-pkpass",
          "partial": "Fields",
          "signature": "[PassField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:secondaryFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique serial number for the pass (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "serialNumber",
          "package": "hs-pkpass",
          "signature": "Text",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Unique serial number for the pass required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "serialNumber",
          "package": "hs-pkpass",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:serialNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003eTrue\u003c/code\u003e, the strip image is displayed without a shine effect. (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "suppressStripShine",
          "package": "hs-pkpass",
          "signature": "Maybe Bool",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "If True the strip image is displayed without shine effect optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "suppressStripShine",
          "package": "hs-pkpass",
          "partial": "Strip Shine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:suppressStripShine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTeam identifier for the organization (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "teamIdentifier",
          "package": "hs-pkpass",
          "signature": "Text",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Team identifier for the organization required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "teamIdentifier",
          "package": "hs-pkpass",
          "partial": "Identifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:teamIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlignment for the field's contents. Not allowed for primary fields. (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "textAlignment",
          "package": "hs-pkpass",
          "signature": "Maybe Alignment",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "description": "Alignment for the field contents Not allowed for primary fields optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "textAlignment",
          "package": "hs-pkpass",
          "partial": "Alignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:textAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle of time to display (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "timeStyle",
          "package": "hs-pkpass",
          "signature": "Maybe DateTimeStyle",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "description": "Style of time to display optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "timeStyle",
          "package": "hs-pkpass",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:timeStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue of the field. Must be a string, ISO 8601 date or a number. (required)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "value",
          "package": "hs-pkpass",
          "signature": "PassValue",
          "source": "src/Passbook-Types.html#PassField",
          "type": "function"
        },
        "index": {
          "description": "Value of the field Must be string ISO date or number required",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "value",
          "package": "hs-pkpass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains the authentication token (16 characters or longer) and the API end point for a Web Service\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "webService",
          "package": "hs-pkpass",
          "signature": "Maybe WebService",
          "source": "src/Passbook-Types.html#Pass",
          "type": "function"
        },
        "index": {
          "description": "Contains the authentication token characters or longer and the API end point for Web Service",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "webService",
          "package": "hs-pkpass",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:webService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe URL of a web service that conforms to the API described in the Passbook Web Service Reference (optional)\n\u003c/p\u003e",
          "module": "Passbook.Types",
          "name": "webServiceURL",
          "package": "hs-pkpass",
          "signature": "Text",
          "source": "src/Passbook-Types.html#WebService",
          "type": "function"
        },
        "index": {
          "description": "The URL of web service that conforms to the API described in the Passbook Web Service Reference optional",
          "hierarchy": "Passbook Types",
          "module": "Passbook.Types",
          "name": "webServiceURL",
          "package": "hs-pkpass",
          "partial": "Service URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook-Types.html#v:webServiceURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides different functions to sign a Passbook \u003ccode\u003e\u003ca\u003ePass\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003ePlease read the documentation!\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eOne set of functions uses the \u003ccode\u003esignpass\u003c/code\u003e tool included in Apple's Passbook\n    Support Materials to sign the pass. This uses the system keychain directly, but\n    works on OS X only.\n\u003c/p\u003e\u003cp\u003eThe other set of functions uses OpenSSL instead, in this case you need to export\n    your certificate using the process described in the OpenSSL section of this document.\n\u003c/p\u003e\u003cp\u003eIf you want to use this module with an existing .pkpass file, you can import it\n    using the function \u003ccode\u003e\u003ca\u003eloadPass\u003c/a\u003e\u003c/code\u003e. Please note that you still need to provide the\n    assets in a separate directory, \u003ccode\u003e\u003ca\u003eloadPass\u003c/a\u003e\u003c/code\u003e only parses the \u003ccode\u003epass.json\u003c/code\u003e file.\n\u003c/p\u003e\u003cp\u003eUsing these function is very simple, assuming you have created a \u003ccode\u003e\u003ca\u003ePass\u003c/a\u003e\u003c/code\u003e called\n    \u003ccode\u003emyPass\u003c/code\u003e and you have the related assets (e.g. the logo.png and icon.png files)\n    stored in a folder named \u003ccode\u003emyPass/\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou want the signed pass to be stored in a folder called \u003ccode\u003epasses/\u003c/code\u003e. You call\n    \u003ccode\u003e\u003ca\u003esignpass\u003c/a\u003e\u003c/code\u003e like this:\n\u003c/p\u003e\u003cpre\u003e (path, passId) \u003c- signpass \"myPass\" \"passes\" myPass\n\u003c/pre\u003e\u003cp\u003eYou will find the pass at \u003ccode\u003epath\u003c/code\u003e with the filename \u003ccode\u003epassId.pkpass\u003c/code\u003e. Using the\n    types from \u003ca\u003ePassbook.Types\u003c/a\u003e ensures that passes are generated correctly.\n\u003c/p\u003e\u003cp\u003ePlease note that an \u003ccode\u003eicon.png\u003c/code\u003e file \u003cem\u003emust be\u003c/em\u003e present in your asset folder,\n    otherwise the generated pass will not work. This is \u003cem\u003enot\u003c/em\u003e checked by this module.\n\u003c/p\u003e\u003cp\u003eRefer to Apple's Passbook documentation at \u003ca\u003ehttps://developer.apple.com/passbook/\u003c/a\u003e\n    for more information or to retrieve the \u003ccode\u003esignpass\u003c/code\u003e tool which is included in the\n    Passbook Support Materials. (iOS Developer Membership necessary)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Passbook",
          "name": "Passbook",
          "package": "hs-pkpass",
          "source": "src/Passbook.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides different functions to sign Passbook Pass Please read the documentation One set of functions uses the signpass tool included in Apple Passbook Support Materials to sign the pass This uses the system keychain directly but works on OS only The other set of functions uses OpenSSL instead in this case you need to export your certificate using the process described in the OpenSSL section of this document If you want to use this module with an existing pkpass file you can import it using the function loadPass Please note that you still need to provide the assets in separate directory loadPass only parses the pass.json file Using these function is very simple assuming you have created Pass called myPass and you have the related assets e.g the logo.png and icon.png files stored in folder named myPass You want the signed pass to be stored in folder called passes You call signpass like this path passId signpass myPass passes myPass You will find the pass at path with the filename passId.pkpass Using the types from Passbook.Types ensures that passes are generated correctly Please note that an icon.png file must be present in your asset folder otherwise the generated pass will not work This is not checked by this module Refer to Apple Passbook documentation at https developer.apple.com passbook for more information or to retrieve the signpass tool which is included in the Passbook Support Materials iOS Developer Membership necessary",
          "hierarchy": "Passbook",
          "module": "Passbook",
          "name": "Passbook",
          "package": "hs-pkpass",
          "partial": "Passbook",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates a random UUID for a Pass using \u003ca\u003eData.UUID\u003c/a\u003e and \u003ca\u003eSystem.Random\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Passbook",
          "name": "genPassId",
          "package": "hs-pkpass",
          "signature": "IO Text",
          "source": "src/Passbook.html#genPassId",
          "type": "function"
        },
        "index": {
          "description": "Generates random UUID for Pass using Data.UUID and System.Random",
          "hierarchy": "Passbook",
          "module": "Passbook",
          "name": "genPassId",
          "package": "hs-pkpass",
          "partial": "Pass Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook.html#v:genPassId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to parse the pass.json file contained in a .pkpass into a valid\n  \u003ccode\u003e\u003ca\u003ePass\u003c/a\u003e\u003c/code\u003e. If Passbook accepts the .pkpass file, this function should never\n  return \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Passbook",
          "name": "loadPass",
          "package": "hs-pkpass",
          "signature": "FilePath-\u003e IO (Maybe Pass)",
          "type": "function"
        },
        "index": {
          "description": "Tries to parse the pass.json file contained in pkpass into valid Pass If Passbook accepts the pkpass file this function should never return Nothing",
          "hierarchy": "Passbook",
          "module": "Passbook",
          "name": "loadPass",
          "normalized": "FilePath-\u003eIO(Maybe Pass)",
          "package": "hs-pkpass",
          "partial": "Pass",
          "signature": "FilePath-\u003eIO(Maybe Pass)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook.html#v:loadPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the filepaths to the folder containing the path assets\n  and the output folder, the paths to the certificate and the key,\n  a \u003ccode\u003e\u003ca\u003ePass\u003c/a\u003e\u003c/code\u003e and uses a random UUID to create and sign the pass.\n\u003c/p\u003e",
          "module": "Passbook",
          "name": "signOpen",
          "package": "hs-pkpass",
          "signature": "FilePath-\u003e FilePath-\u003e FilePath-\u003e FilePath-\u003e Pass-\u003e IO (FilePath, Text)",
          "type": "function"
        },
        "index": {
          "description": "Takes the filepaths to the folder containing the path assets and the output folder the paths to the certificate and the key Pass and uses random UUID to create and sign the pass",
          "hierarchy": "Passbook",
          "module": "Passbook",
          "name": "signOpen",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath-\u003ePass-\u003eIO(FilePath,Text)",
          "package": "hs-pkpass",
          "partial": "Open",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath-\u003ePass-\u003eIO(FilePath,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook.html#v:signOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigns the \u003ccode\u003e\u003ca\u003ePass\u003c/a\u003e\u003c/code\u003e using the provided ID, no random UUID generation happens here.\n\u003c/p\u003e",
          "module": "Passbook",
          "name": "signOpenWithId",
          "package": "hs-pkpass",
          "signature": "FilePath-\u003e FilePath-\u003e FilePath-\u003e FilePath-\u003e Pass-\u003e Text-\u003e IO FilePath",
          "type": "function"
        },
        "index": {
          "description": "Signs the Pass using the provided ID no random UUID generation happens here",
          "hierarchy": "Passbook",
          "module": "Passbook",
          "name": "signOpenWithId",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath-\u003ePass-\u003eText-\u003eIO FilePath",
          "package": "hs-pkpass",
          "partial": "Open With Id",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath-\u003ePass-\u003eText-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook.html#v:signOpenWithId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003esignOpen\u003c/a\u003e\u003c/code\u003e, except for the fourth argument which is a\n  modifier function that updates the pass with the generated UUID.\n  This is useful for cases where you want to store the UUID in the barcode\n  or some other field on the pass as well.\n\u003c/p\u003e\u003cp\u003eAn example function for use with this is \u003ccode\u003e\u003ca\u003eupdateBarcode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Passbook",
          "name": "signOpenWithModifier",
          "package": "hs-pkpass",
          "signature": "FilePath-\u003e FilePath-\u003e FilePath-\u003e FilePath-\u003e Pass-\u003e (Text -\u003e Pass -\u003e Pass)-\u003e IO (FilePath, Text)",
          "type": "function"
        },
        "index": {
          "description": "Works like signOpen except for the fourth argument which is modifier function that updates the pass with the generated UUID This is useful for cases where you want to store the UUID in the barcode or some other field on the pass as well An example function for use with this is updateBarcode",
          "hierarchy": "Passbook",
          "module": "Passbook",
          "name": "signOpenWithModifier",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath-\u003ePass-\u003e(Text-\u003ePass-\u003ePass)-\u003eIO(FilePath,Text)",
          "package": "hs-pkpass",
          "partial": "Open With Modifier",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath-\u003eFilePath-\u003ePass-\u003e(Text-\u003ePass-\u003ePass)-\u003eIO(FilePath,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook.html#v:signOpenWithModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes the filepaths to the folder containing the path assets\n  and the output folder, a \u003ccode\u003e\u003ca\u003ePass\u003c/a\u003e\u003c/code\u003e and uses a random UUID to\n  create and sign the pass.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eImportant:\u003c/em\u003e OS X only!\n\u003c/p\u003e",
          "module": "Passbook",
          "name": "signpass",
          "package": "hs-pkpass",
          "signature": "FilePath-\u003e FilePath-\u003e Pass-\u003e IO (FilePath, Text)",
          "type": "function"
        },
        "index": {
          "description": "Takes the filepaths to the folder containing the path assets and the output folder Pass and uses random UUID to create and sign the pass Important OS only",
          "hierarchy": "Passbook",
          "module": "Passbook",
          "name": "signpass",
          "normalized": "FilePath-\u003eFilePath-\u003ePass-\u003eIO(FilePath,Text)",
          "package": "hs-pkpass",
          "signature": "FilePath-\u003eFilePath-\u003ePass-\u003eIO(FilePath,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook.html#v:signpass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigns the \u003ccode\u003e\u003ca\u003ePass\u003c/a\u003e\u003c/code\u003e using the provided ID, no random UUID generation happens here.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eImportant:\u003c/em\u003e OS X only!\n\u003c/p\u003e",
          "module": "Passbook",
          "name": "signpassWithId",
          "package": "hs-pkpass",
          "signature": "Text-\u003e FilePath-\u003e FilePath-\u003e Pass-\u003e IO FilePath",
          "type": "function"
        },
        "index": {
          "description": "Signs the Pass using the provided ID no random UUID generation happens here Important OS only",
          "hierarchy": "Passbook",
          "module": "Passbook",
          "name": "signpassWithId",
          "normalized": "Text-\u003eFilePath-\u003eFilePath-\u003ePass-\u003eIO FilePath",
          "package": "hs-pkpass",
          "partial": "With Id",
          "signature": "Text-\u003eFilePath-\u003eFilePath-\u003ePass-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook.html#v:signpassWithId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWorks like \u003ccode\u003e\u003ca\u003esignpass\u003c/a\u003e\u003c/code\u003e, except for the fourth argument which is a\n  modifier function that updates the pass with the generated UUID.\n  This is useful for cases where you want to store the UUID in the barcode\n  or some other field on the pass as well.\n\u003c/p\u003e\u003cp\u003eAn example function for use with this is \u003ccode\u003e\u003ca\u003eupdateBarcode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eImportant:\u003c/em\u003e OS X only!\n\u003c/p\u003e",
          "module": "Passbook",
          "name": "signpassWithModifier",
          "package": "hs-pkpass",
          "signature": "FilePath-\u003e FilePath-\u003e Pass-\u003e (Text -\u003e Pass -\u003e Pass)-\u003e IO (FilePath, Text)",
          "type": "function"
        },
        "index": {
          "description": "Works like signpass except for the fourth argument which is modifier function that updates the pass with the generated UUID This is useful for cases where you want to store the UUID in the barcode or some other field on the pass as well An example function for use with this is updateBarcode Important OS only",
          "hierarchy": "Passbook",
          "module": "Passbook",
          "name": "signpassWithModifier",
          "normalized": "FilePath-\u003eFilePath-\u003ePass-\u003e(Text-\u003ePass-\u003ePass)-\u003eIO(FilePath,Text)",
          "package": "hs-pkpass",
          "partial": "With Modifier",
          "signature": "FilePath-\u003eFilePath-\u003ePass-\u003e(Text-\u003ePass-\u003ePass)-\u003eIO(FilePath,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook.html#v:signpassWithModifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates the barcode in a pass with the UUID. This can be passed to \u003ccode\u003e\u003ca\u003esignpassWithModifier\u003c/a\u003e\u003c/code\u003e\n  or \u003ccode\u003e\u003ca\u003esignOpenWithModifier\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Passbook",
          "name": "updateBarcode",
          "package": "hs-pkpass",
          "signature": "Text -\u003e Pass -\u003e Pass",
          "source": "src/Passbook.html#updateBarcode",
          "type": "function"
        },
        "index": {
          "description": "Updates the barcode in pass with the UUID This can be passed to signpassWithModifier or signOpenWithModifier",
          "hierarchy": "Passbook",
          "module": "Passbook",
          "name": "updateBarcode",
          "normalized": "Text-\u003ePass-\u003ePass",
          "package": "hs-pkpass",
          "partial": "Barcode",
          "signature": "Text-\u003ePass-\u003ePass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pkpass/docs/Passbook.html#v:updateBarcode"
      }
    }
  ]
]