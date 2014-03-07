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
        "word": "hs-vcard"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "VCard",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "VCard",
          "package": "hs-vcard",
          "partial": "VCard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the various types or properties of an address.\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "AddrType",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html#AddrType",
          "type": "data"
        },
        "index": {
          "description": "Represents the various types or properties of an address",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AddrType",
          "package": "hs-vcard",
          "partial": "Addr Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#t:AddrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the data associated with a vCard's Agent. This could be a URI\n to such a vCard or the embedded contents of the vCard itself.\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "AgentData",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html#AgentData",
          "type": "data"
        },
        "index": {
          "description": "Represents the data associated with vCard Agent This could be URI to such vCard or the embedded contents of the vCard itself",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AgentData",
          "package": "hs-vcard",
          "partial": "Agent Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#t:AgentData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClassifies the vCard's intended access level.\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "Class",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html#Class",
          "type": "data"
        },
        "index": {
          "description": "Classifies the vCard intended access level",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Class",
          "package": "hs-vcard",
          "partial": "Class",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#t:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommon name of the represented person. E.g.,\n\u003c/p\u003e\u003cpre\u003e CommonName \"Mr. Michael A. F. Schade\"\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "CommonName",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html#CommonName",
          "type": "type"
        },
        "index": {
          "description": "Common name of the represented person E.g CommonName Mr Michael Schade",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "CommonName",
          "package": "hs-vcard",
          "partial": "Common Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#t:CommonName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the various types of data that can be included in a vCard.\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "Data",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html#Data",
          "type": "data"
        },
        "index": {
          "description": "Represents the various types of data that can be included in vCard",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Data",
          "package": "hs-vcard",
          "partial": "Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the various types or properties of an email address.\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "EmailType",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html#EmailType",
          "type": "data"
        },
        "index": {
          "description": "Represents the various types or properties of an email address",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "EmailType",
          "package": "hs-vcard",
          "partial": "Email Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#t:EmailType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA breakdown of the vCard entity's name, corresponding, in sequence, to\n Family Name, Given Name, Additional Names, Honorific Prefixes, and Honorific\n Suffixes. E.g.,\n\u003c/p\u003e\u003cpre\u003e IndividualNames [\"Schade\"] [\"Michael\"] [\"Anthony\", \"Fanetti\"] [] [\"Esq.\"]\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "IndividualNames",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html#IndividualNames",
          "type": "data"
        },
        "index": {
          "description": "breakdown of the vCard entity name corresponding in sequence to Family Name Given Name Additional Names Honorific Prefixes and Honorific Suffixes E.g IndividualNames Schade Michael Anthony Fanetti Esq",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "IndividualNames",
          "package": "hs-vcard",
          "partial": "Individual Names",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#t:IndividualNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the various types or properties of a telephone number.\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "TelType",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html#TelType",
          "type": "data"
        },
        "index": {
          "description": "Represents the various types or properties of telephone number",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelType",
          "package": "hs-vcard",
          "partial": "Tel Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#t:TelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalling \u003ccode\u003eshow\u003c/code\u003e on \u003ccode\u003eVCard\u003c/code\u003e will output a RFC 2426-compliant VCard that\n can, for example, be easily saved to a file and imported by any supporting\n program.\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "VCard",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html#VCard",
          "type": "data"
        },
        "index": {
          "description": "Calling show on VCard will output RFC compliant VCard that can for example be easily saved to file and imported by any supporting program",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "VCard",
          "package": "hs-vcard",
          "partial": "VCard",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#t:VCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "VCardProperty",
          "package": "hs-vcard",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "VCardProperty",
          "package": "hs-vcard",
          "partial": "VCard Property",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#t:VCardProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "AddrDomestic",
          "package": "hs-vcard",
          "signature": "AddrDomestic",
          "source": "src/Text-VCard.html#AddrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AddrDomestic",
          "package": "hs-vcard",
          "partial": "Addr Domestic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:AddrDomestic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "AddrHome",
          "package": "hs-vcard",
          "signature": "AddrHome",
          "source": "src/Text-VCard.html#AddrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AddrHome",
          "package": "hs-vcard",
          "partial": "Addr Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:AddrHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "AddrInternational",
          "package": "hs-vcard",
          "signature": "AddrInternational",
          "source": "src/Text-VCard.html#AddrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AddrInternational",
          "package": "hs-vcard",
          "partial": "Addr International",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:AddrInternational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "AddrParcel",
          "package": "hs-vcard",
          "signature": "AddrParcel",
          "source": "src/Text-VCard.html#AddrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AddrParcel",
          "package": "hs-vcard",
          "partial": "Addr Parcel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:AddrParcel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "AddrPostal",
          "package": "hs-vcard",
          "signature": "AddrPostal",
          "source": "src/Text-VCard.html#AddrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AddrPostal",
          "package": "hs-vcard",
          "partial": "Addr Postal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:AddrPostal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "AddrPreferred",
          "package": "hs-vcard",
          "signature": "AddrPreferred",
          "source": "src/Text-VCard.html#AddrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AddrPreferred",
          "package": "hs-vcard",
          "partial": "Addr Preferred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:AddrPreferred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "AddrWork",
          "package": "hs-vcard",
          "signature": "AddrWork",
          "source": "src/Text-VCard.html#AddrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AddrWork",
          "package": "hs-vcard",
          "partial": "Addr Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:AddrWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA physical address associated with the vCard entity. E.g.,\n\u003c/p\u003e\u003cpre\u003e Address [AddrParcel, AddrPostal] \"PO Box 935\" \"\" \"\" \"Fenton\" \"MO\"\n                                  \"63026\" \"USA\"\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Address",
          "package": "hs-vcard",
          "signature": "Address",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "physical address associated with the vCard entity E.g Address AddrParcel AddrPostal PO Box Fenton MO USA",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Address",
          "package": "hs-vcard",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates the vCard of an assistant or area administrator who is\n typically separately addressable. E.g.,\n\u003c/p\u003e\u003cpre\u003e Agent (AgentURI \"CID:JQPUBLIC.part3.960129T083020.xyzMail@host3.com\")\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e Agent (AgentVCard (VCard   [ CommonName \"James Q. Helpful\"\n                            , Email [EmailInternet] \"j@spearheaddev.com\"\n                            ]))\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Agent",
          "package": "hs-vcard",
          "signature": "Agent AgentData",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Indicates the vCard of an assistant or area administrator who is typically separately addressable E.g Agent AgentURI CID JQPUBLIC.part3.960129T083020.xyzMail@host3.com or Agent AgentVCard VCard CommonName James Helpful Email EmailInternet j@spearheaddev.com",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Agent",
          "package": "hs-vcard",
          "partial": "Agent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Agent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "AgentURI",
          "package": "hs-vcard",
          "signature": "AgentURI String",
          "source": "src/Text-VCard.html#AgentData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AgentURI",
          "package": "hs-vcard",
          "partial": "Agent URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:AgentURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "AgentVCard",
          "package": "hs-vcard",
          "signature": "AgentVCard VCard",
          "source": "src/Text-VCard.html#AgentData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "AgentVCard",
          "package": "hs-vcard",
          "partial": "Agent VCard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:AgentVCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "Binary",
          "package": "hs-vcard",
          "signature": "Binary String",
          "source": "src/Text-VCard.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Binary",
          "package": "hs-vcard",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the birth date of the VCard entity. E.g.,\n\u003c/p\u003e\u003cpre\u003e Birthday $ UTCTime (fromGregorian 1991 10 14) (secondsToDiffTime 0)\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Birthday",
          "package": "hs-vcard",
          "signature": "Birthday UTCTime",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Specifies the birth date of the VCard entity E.g Birthday UTCTime fromGregorian secondsToDiffTime",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Birthday",
          "package": "hs-vcard",
          "partial": "Birthday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Birthday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral categories to describe the vCard entity. E.g.,\n\u003c/p\u003e\u003cpre\u003e Categories [\"Internet\", \"Web Services\", \"Programmers\"]\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Categories",
          "package": "hs-vcard",
          "signature": "Categories [String]",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "General categories to describe the vCard entity E.g Categories Internet Web Services Programmers",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Categories",
          "normalized": "Categories[String]",
          "package": "hs-vcard",
          "partial": "Categories",
          "signature": "Categories[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Categories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the general intention of the vCard owner as to how\n accessible the included information should be. E.g.,\n\u003c/p\u003e\u003cpre\u003e Class ClassConfidential\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Class",
          "package": "hs-vcard",
          "signature": "Class Class",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Describes the general intention of the vCard owner as to how accessible the included information should be E.g Class ClassConfidential",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Class",
          "package": "hs-vcard",
          "partial": "Class",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Class"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "ClassConfidential",
          "package": "hs-vcard",
          "signature": "ClassConfidential",
          "source": "src/Text-VCard.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "ClassConfidential",
          "package": "hs-vcard",
          "partial": "Class Confidential",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:ClassConfidential"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "ClassPrivate",
          "package": "hs-vcard",
          "signature": "ClassPrivate",
          "source": "src/Text-VCard.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "ClassPrivate",
          "package": "hs-vcard",
          "partial": "Class Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:ClassPrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "ClassPublic",
          "package": "hs-vcard",
          "signature": "ClassPublic",
          "source": "src/Text-VCard.html#Class",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "ClassPublic",
          "package": "hs-vcard",
          "partial": "Class Public",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:ClassPublic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn email address for the VCard entity, including a list of properties\n describing it. E.g.,\n\u003c/p\u003e\u003cpre\u003e Email [EmailInternet, EmailPreferred] \"hackage@mschade.me\"\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Email",
          "package": "hs-vcard",
          "signature": "Email",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "An email address for the VCard entity including list of properties describing it E.g Email EmailInternet EmailPreferred hackage@mschade.me",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Email",
          "package": "hs-vcard",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "EmailInternet",
          "package": "hs-vcard",
          "signature": "EmailInternet",
          "source": "src/Text-VCard.html#EmailType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "EmailInternet",
          "package": "hs-vcard",
          "partial": "Email Internet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:EmailInternet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "EmailPreferred",
          "package": "hs-vcard",
          "signature": "EmailPreferred",
          "source": "src/Text-VCard.html#EmailType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "EmailPreferred",
          "package": "hs-vcard",
          "partial": "Email Preferred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:EmailPreferred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "EmailX400",
          "package": "hs-vcard",
          "signature": "EmailX400",
          "source": "src/Text-VCard.html#EmailType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "EmailX400",
          "package": "hs-vcard",
          "partial": "Email",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:EmailX400"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelates to the global positioning of the vCard entity. The value is\n (latitude, longitude) and must be specified as decimal degrees,\n preferably to six decimal places.\n\u003c/p\u003e\u003cpre\u003e Geo (37.386013, -122.082932)\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Geo",
          "package": "hs-vcard",
          "signature": "Geo (Double, Double)",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Relates to the global positioning of the vCard entity The value is latitude longitude and must be specified as decimal degrees preferably to six decimal places Geo",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Geo",
          "normalized": "Geo(Double,Double)",
          "package": "hs-vcard",
          "partial": "Geo",
          "signature": "Geo(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Geo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "IndividualNames",
          "package": "hs-vcard",
          "signature": "IndividualNames",
          "source": "src/Text-VCard.html#IndividualNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "IndividualNames",
          "package": "hs-vcard",
          "partial": "Individual Names",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:IndividualNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies a public key or authentication certificate associated with\n the vCard entity. E.g.,\n\u003c/p\u003e\u003cpre\u003e Key \"x509\" (Binary \"dGhpcyBjb3VsZCBiZSAKbXkgY2VydGlmaWNhdGUK\")\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Key",
          "package": "hs-vcard",
          "signature": "Key",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Specifies public key or authentication certificate associated with the vCard entity E.g Key x509 Binary dGhpcyBjb3VsZCBiZSAKbXkgY2VydGlmaWNhdGUK",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Key",
          "package": "hs-vcard",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormatted text about the delivery address. This is typically similar\n to the information in Address. E.g.,\n\u003c/p\u003e\u003cpre\u003e Label  [AddrParcel, AddrPostal]\n        [\"Michael Schade\", \"PO Box 935\", \"Fenton, MO 63026\"]\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Label",
          "package": "hs-vcard",
          "signature": "Label",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Formatted text about the delivery address This is typically similar to the information in Address E.g Label AddrParcel AddrPostal Michael Schade PO Box Fenton MO",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Label",
          "package": "hs-vcard",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image of the vCard entity's logo. This would typically relate to\n their organization. E.g.,\n\u003c/p\u003e\u003cpre\u003e Logo Nothing (URI \"http://spearheaddev.com/smedia/images/logo-trans.png\")\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Logo",
          "package": "hs-vcard",
          "signature": "Logo",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "An image of the vCard entity logo This would typically relate to their organization E.g Logo Nothing URI http spearheaddev.com smedia images logo-trans.png",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Logo",
          "package": "hs-vcard",
          "partial": "Logo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Logo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the mailing agent the vCard entity uses. E.g.,\n\u003c/p\u003e\u003cpre\u003e Mailer \"MichaelMail 4.2\" -- Not a real mailing agent, unfortunately :(\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Mailer",
          "package": "hs-vcard",
          "signature": "Mailer String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Specifies the mailing agent the vCard entity uses E.g Mailer MichaelMail Not real mailing agent unfortunately",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Mailer",
          "package": "hs-vcard",
          "partial": "Mailer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Mailer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of nicknames belonging to the VCard entity. E.g.,\n\u003c/p\u003e\u003cpre\u003e Nickname [\"Mike\", \"Mikey\"]\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Nickname",
          "package": "hs-vcard",
          "signature": "Nickname [String]",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "list of nicknames belonging to the VCard entity E.g Nickname Mike Mikey",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Nickname",
          "normalized": "Nickname[String]",
          "package": "hs-vcard",
          "partial": "Nickname",
          "signature": "Nickname[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Nickname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general note about the vCard entity. E.g.,\n\u003c/p\u003e\u003cpre\u003e Note \"Email is the absolute best contact method.\"\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Note",
          "package": "hs-vcard",
          "signature": "Note String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "general note about the vCard entity E.g Note Email is the absolute best contact method",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Note",
          "package": "hs-vcard",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe organization to which an entity belongs followed by organizational\n unit names. E.g.,\n\u003c/p\u003e\u003cpre\u003e Organization [\"Spearhead Development, L.L.C.\", \"Executive\"]\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Organization",
          "package": "hs-vcard",
          "signature": "Organization [String]",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "The organization to which an entity belongs followed by organizational unit names E.g Organization Spearhead Development L.L.C Executive",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Organization",
          "normalized": "Organization[String]",
          "package": "hs-vcard",
          "partial": "Organization",
          "signature": "Organization[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Organization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA photo of the VCard entity. E.g.,\n\u003c/p\u003e\u003cpre\u003e Photo Nothing (URI \"http://accentuate.us/smedia/images/michael.jpg\")\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Photo",
          "package": "hs-vcard",
          "signature": "Photo",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "photo of the VCard entity E.g Photo Nothing URI http accentuate.us smedia images michael.jpg",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Photo",
          "package": "hs-vcard",
          "partial": "Photo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Photo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the identifier of the product that created this vCard. E.g.,\n\u003c/p\u003e\u003cpre\u003e ProductId \"-//ONLINE DIRECTORY//NONSGML Version 1//EN\"\n\u003c/pre\u003e\u003cp\u003ePlease note well that, by RFC 2426 guidelines, \"implementations SHOULD\n use a method such as that specified for Formal Public Identifiers in ISO\n 9070 to assure that the text value is unique,\" but this module does not\n support that.\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "ProductId",
          "package": "hs-vcard",
          "signature": "ProductId String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Specifies the identifier of the product that created this vCard E.g ProductId ONLINE DIRECTORY NONSGML Version EN Please note well that by RFC guidelines implementations SHOULD use method such as that specified for Formal Public Identifiers in ISO to assure that the text value is unique but this module does not support that",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "ProductId",
          "package": "hs-vcard",
          "partial": "Product Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:ProductId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDistinguishes the current revision from other renditions. E.g.,\n\u003c/p\u003e\u003cpre\u003e Revision $ UTCTime (fromGregorian 2011 04 16) (secondsToDiffTime 0)\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Revision",
          "package": "hs-vcard",
          "signature": "Revision UTCTime",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Distinguishes the current revision from other renditions E.g Revision UTCTime fromGregorian secondsToDiffTime",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Revision",
          "package": "hs-vcard",
          "partial": "Revision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Revision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the role associated with the title. E.g.,\n\u003c/p\u003e\u003cpre\u003e Role \"Anything\"   -- For the co-founder, or\n Role \"Programmer\" -- For someone the title \"Research and Development\"\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Role",
          "package": "hs-vcard",
          "signature": "Role String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Specifies the role associated with the title E.g Role Anything For the co-founder or Role Programmer For someone the title Research and Development",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Role",
          "package": "hs-vcard",
          "partial": "Role",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Role"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a locale- or national-language-specific formatting of the\n formatted name based on the vCard entity's family or given name. E.g.,\n\u003c/p\u003e\u003cpre\u003e SortString \"Schade\"\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "SortString",
          "package": "hs-vcard",
          "signature": "SortString String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Provides locale or national-language-specific formatting of the formatted name based on the vCard entity family or given name E.g SortString Schade",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "SortString",
          "package": "hs-vcard",
          "partial": "Sort String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:SortString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies information in a digital sound format to annotate some\n aspect of the vCard. This is typically for the proper pronunciation of the\n vCard entity's name. E.g.,\n\u003c/p\u003e\u003cpre\u003e Sound  \"BASIC\"\n        (URI \"CID:JOHNQPUBLIC.part8.19960229T080000.xyzMail@host1.com\")\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Sound",
          "package": "hs-vcard",
          "signature": "Sound",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Specifies information in digital sound format to annotate some aspect of the vCard This is typically for the proper pronunciation of the vCard entity name E.g Sound BASIC URI CID JOHNQPUBLIC.part8.19960229T080000.xyzMail@host1.com",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Sound",
          "package": "hs-vcard",
          "partial": "Sound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Sound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the time zone of the vCard entity. E.g.,\n\u003c/p\u003e\u003cpre\u003e TZ (hoursToTimeZone (-6))\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "TZ",
          "package": "hs-vcard",
          "signature": "TZ TimeZone",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Represents the time zone of the vCard entity E.g TZ hoursToTimeZone",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TZ",
          "package": "hs-vcard",
          "partial": "TZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelBBS",
          "package": "hs-vcard",
          "signature": "TelBBS",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelBBS",
          "package": "hs-vcard",
          "partial": "Tel BBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelBBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelCar",
          "package": "hs-vcard",
          "signature": "TelCar",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelCar",
          "package": "hs-vcard",
          "partial": "Tel Car",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelCar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelCell",
          "package": "hs-vcard",
          "signature": "TelCell",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelCell",
          "package": "hs-vcard",
          "partial": "Tel Cell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelCell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelFax",
          "package": "hs-vcard",
          "signature": "TelFax",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelFax",
          "package": "hs-vcard",
          "partial": "Tel Fax",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelFax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelHome",
          "package": "hs-vcard",
          "signature": "TelHome",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelHome",
          "package": "hs-vcard",
          "partial": "Tel Home",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelISDN",
          "package": "hs-vcard",
          "signature": "TelISDN",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelISDN",
          "package": "hs-vcard",
          "partial": "Tel ISDN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelISDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelMessage",
          "package": "hs-vcard",
          "signature": "TelMessage",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelMessage",
          "package": "hs-vcard",
          "partial": "Tel Message",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelModem",
          "package": "hs-vcard",
          "signature": "TelModem",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelModem",
          "package": "hs-vcard",
          "partial": "Tel Modem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelModem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelPCS",
          "package": "hs-vcard",
          "signature": "TelPCS",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelPCS",
          "package": "hs-vcard",
          "partial": "Tel PCS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelPCS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelPager",
          "package": "hs-vcard",
          "signature": "TelPager",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelPager",
          "package": "hs-vcard",
          "partial": "Tel Pager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelPager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelPreferred",
          "package": "hs-vcard",
          "signature": "TelPreferred",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelPreferred",
          "package": "hs-vcard",
          "partial": "Tel Preferred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelPreferred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelVideo",
          "package": "hs-vcard",
          "signature": "TelVideo",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelVideo",
          "package": "hs-vcard",
          "partial": "Tel Video",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelVideo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelVoice",
          "package": "hs-vcard",
          "signature": "TelVoice",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelVoice",
          "package": "hs-vcard",
          "partial": "Tel Voice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelVoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "TelWork",
          "package": "hs-vcard",
          "signature": "TelWork",
          "source": "src/Text-VCard.html#TelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "TelWork",
          "package": "hs-vcard",
          "partial": "Tel Work",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:TelWork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA telephone number for the VCard entity, as well as a list of\n properties describing the telephone number. E.g.,\n\u003c/p\u003e\u003cpre\u003e Telephone [TelCell, TelPreferred] \"+1-555-555-5555\"\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Telephone",
          "package": "hs-vcard",
          "signature": "Telephone",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "telephone number for the VCard entity as well as list of properties describing the telephone number E.g Telephone TelCell TelPreferred",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Telephone",
          "package": "hs-vcard",
          "partial": "Telephone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Telephone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe VCard entity's job title or other position. E.g.,\n\u003c/p\u003e\u003cpre\u003e Title \"Co-Founder\"\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "Title",
          "package": "hs-vcard",
          "signature": "Title String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "The VCard entity job title or other position E.g Title Co-Founder",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "Title",
          "package": "hs-vcard",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value to uniquely identify the vCard. Please note well that this\n should be one of the registered IANA formats, but as of this time, this\n module does not support listing the UID type. E.g.,\n\u003c/p\u003e\u003cpre\u003e UID \"19950401-080045-40000F192713-0052\"\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "UID",
          "package": "hs-vcard",
          "signature": "UID String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "value to uniquely identify the vCard Please note well that this should be one of the registered IANA formats but as of this time this module does not support listing the UID type E.g UID F192713-0052",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "UID",
          "package": "hs-vcard",
          "partial": "UID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:UID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "URI",
          "package": "hs-vcard",
          "signature": "URI String",
          "source": "src/Text-VCard.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "URI",
          "package": "hs-vcard",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA website associated with the vCard entity. E.g.,\n\u003c/p\u003e\u003cpre\u003e URL \"http://spearheaddev.com/\"\n\u003c/pre\u003e",
          "module": "Text.VCard",
          "name": "URL",
          "package": "hs-vcard",
          "signature": "URL String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "website associated with the vCard entity E.g URL http spearheaddev.com",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "URL",
          "package": "hs-vcard",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:URL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "VCard",
          "package": "hs-vcard",
          "signature": "VCard CommonName IndividualNames [VCardProperty]",
          "source": "src/Text-VCard.html#VCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "VCard",
          "normalized": "VCard CommonName IndividualNames[VCardProperty]",
          "package": "hs-vcard",
          "partial": "VCard",
          "signature": "VCard CommonName IndividualNames[VCardProperty]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:VCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "additionalNames",
          "package": "hs-vcard",
          "signature": "[String]",
          "source": "src/Text-VCard.html#IndividualNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "additionalNames",
          "normalized": "[String]",
          "package": "hs-vcard",
          "partial": "Names",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:additionalNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "addrType",
          "package": "hs-vcard",
          "signature": "[AddrType]",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "addrType",
          "normalized": "[AddrType]",
          "package": "hs-vcard",
          "partial": "Type",
          "signature": "[AddrType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:addrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "countryName",
          "package": "hs-vcard",
          "signature": "String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "countryName",
          "package": "hs-vcard",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:countryName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "email",
          "package": "hs-vcard",
          "signature": "String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "email",
          "package": "hs-vcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:email"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "emailType",
          "package": "hs-vcard",
          "signature": "[EmailType]",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "emailType",
          "normalized": "[EmailType]",
          "package": "hs-vcard",
          "partial": "Type",
          "signature": "[EmailType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:emailType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "extAddress",
          "package": "hs-vcard",
          "signature": "String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "extAddress",
          "package": "hs-vcard",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:extAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "familyName",
          "package": "hs-vcard",
          "signature": "[String]",
          "source": "src/Text-VCard.html#IndividualNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "familyName",
          "normalized": "[String]",
          "package": "hs-vcard",
          "partial": "Name",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:familyName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "givenName",
          "package": "hs-vcard",
          "signature": "[String]",
          "source": "src/Text-VCard.html#IndividualNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "givenName",
          "normalized": "[String]",
          "package": "hs-vcard",
          "partial": "Name",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:givenName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "honorificPrefixes",
          "package": "hs-vcard",
          "signature": "[String]",
          "source": "src/Text-VCard.html#IndividualNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "honorificPrefixes",
          "normalized": "[String]",
          "package": "hs-vcard",
          "partial": "Prefixes",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:honorificPrefixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "honorificSuffixes",
          "package": "hs-vcard",
          "signature": "[String]",
          "source": "src/Text-VCard.html#IndividualNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "honorificSuffixes",
          "normalized": "[String]",
          "package": "hs-vcard",
          "partial": "Suffixes",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:honorificSuffixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "keyData",
          "package": "hs-vcard",
          "signature": "Data",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "keyData",
          "package": "hs-vcard",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:keyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegistered IANA format\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "keyType",
          "package": "hs-vcard",
          "signature": "Maybe String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Registered IANA format",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "keyType",
          "package": "hs-vcard",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:keyType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWill be newline separated\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "label",
          "package": "hs-vcard",
          "signature": "[String]",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Will be newline separated",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "label",
          "normalized": "[String]",
          "package": "hs-vcard",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "lblType",
          "package": "hs-vcard",
          "signature": "[AddrType]",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "lblType",
          "normalized": "[AddrType]",
          "package": "hs-vcard",
          "partial": "Type",
          "signature": "[AddrType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:lblType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "lgoData",
          "package": "hs-vcard",
          "signature": "Data",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "lgoData",
          "package": "hs-vcard",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:lgoData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegistered IANA format\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "lgoType",
          "package": "hs-vcard",
          "signature": "Maybe String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Registered IANA format",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "lgoType",
          "package": "hs-vcard",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:lgoType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCity\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "locality",
          "package": "hs-vcard",
          "signature": "String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "City",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "locality",
          "package": "hs-vcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:locality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "number",
          "package": "hs-vcard",
          "signature": "String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "number",
          "package": "hs-vcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "phtData",
          "package": "hs-vcard",
          "signature": "Data",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "phtData",
          "package": "hs-vcard",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:phtData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegistered IANA format\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "phtType",
          "package": "hs-vcard",
          "signature": "Maybe String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Registered IANA format",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "phtType",
          "package": "hs-vcard",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:phtType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "poBox",
          "package": "hs-vcard",
          "signature": "String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "poBox",
          "package": "hs-vcard",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:poBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "postalCode",
          "package": "hs-vcard",
          "signature": "String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "postalCode",
          "package": "hs-vcard",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:postalCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState or Province\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "region",
          "package": "hs-vcard",
          "signature": "String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "State or Province",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "region",
          "package": "hs-vcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:region"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "sndData",
          "package": "hs-vcard",
          "signature": "Data",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "sndData",
          "package": "hs-vcard",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:sndData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegistered IANA format\n\u003c/p\u003e",
          "module": "Text.VCard",
          "name": "sndType",
          "package": "hs-vcard",
          "signature": "Maybe String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "description": "Registered IANA format",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "sndType",
          "package": "hs-vcard",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:sndType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "streetAddress",
          "package": "hs-vcard",
          "signature": "String",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "streetAddress",
          "package": "hs-vcard",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:streetAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard",
          "name": "telType",
          "package": "hs-vcard",
          "signature": "[TelType]",
          "source": "src/Text-VCard.html#VCardProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "telType",
          "normalized": "[TelType]",
          "package": "hs-vcard",
          "partial": "Type",
          "signature": "[TelType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-vcard/docs/Text-VCard.html#v:telType"
      }
    }
  ]
]