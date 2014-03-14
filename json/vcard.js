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
        "word": "vcard"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eImplements the vCard format defined in RFC 2426, based on the\n text/directory MIME type defined in RFC 2425.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.VCard.Format.Directory",
          "name": "Directory",
          "package": "vcard",
          "source": "src/Text-VCard-Format-Directory.html",
          "type": "module"
        },
        "index": {
          "description": "Implements the vCard format defined in RFC based on the text directory MIME type defined in RFC",
          "hierarchy": "Text VCard Format Directory",
          "module": "Text.VCard.Format.Directory",
          "name": "Directory",
          "package": "vcard",
          "partial": "Directory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Format-Directory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Format.Directory",
          "name": "fromProperties",
          "package": "vcard",
          "signature": "[VProperty] -\u003e VCard",
          "source": "src/Text-VCard-Format-Directory.html#fromProperties",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Format Directory",
          "module": "Text.VCard.Format.Directory",
          "name": "fromProperties",
          "normalized": "[VProperty]-\u003eVCard",
          "package": "vcard",
          "partial": "Properties",
          "signature": "[VProperty]-\u003eVCard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Format-Directory.html#v:fromProperties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Format.Directory",
          "name": "readVCards",
          "package": "vcard",
          "signature": "SourceName -\u003e ByteString -\u003e [VCard]",
          "source": "src/Text-VCard-Format-Directory.html#readVCards",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Format Directory",
          "module": "Text.VCard.Format.Directory",
          "name": "readVCards",
          "normalized": "SourceName-\u003eByteString-\u003e[VCard]",
          "package": "vcard",
          "partial": "VCards",
          "signature": "SourceName-\u003eByteString-\u003e[VCard]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Format-Directory.html#v:readVCards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Format.Directory",
          "name": "writeVCard",
          "package": "vcard",
          "signature": "VCard -\u003e ByteString",
          "source": "src/Text-VCard-Format-Directory.html#writeVCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Format Directory",
          "module": "Text.VCard.Format.Directory",
          "name": "writeVCard",
          "normalized": "VCard-\u003eByteString",
          "package": "vcard",
          "partial": "VCard",
          "signature": "VCard-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Format-Directory.html#v:writeVCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience functions to extract values in vCards and mapping over\n these values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.VCard.Query",
          "name": "Query",
          "package": "vcard",
          "source": "src/Text-VCard-Query.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience functions to extract values in vCards and mapping over these values",
          "hierarchy": "Text VCard Query",
          "module": "Text.VCard.Query",
          "name": "Query",
          "package": "vcard",
          "partial": "Query",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Query.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilter by property value only.\n\u003c/p\u003e",
          "module": "Text.VCard.Query",
          "name": "filter",
          "package": "vcard",
          "signature": "(VCardValue -\u003e Bool) -\u003e [VCard] -\u003e [VCard]",
          "source": "src/Text-VCard-Query.html#filter",
          "type": "function"
        },
        "index": {
          "description": "Filter by property value only",
          "hierarchy": "Text VCard Query",
          "module": "Text.VCard.Query",
          "name": "filter",
          "normalized": "(VCardValue-\u003eBool)-\u003e[VCard]-\u003e[VCard]",
          "package": "vcard",
          "signature": "(VCardValue-\u003eBool)-\u003e[VCard]-\u003e[VCard]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Query.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupports the most general filter predicates of the \u003ccode\u003efilter\u003c/code\u003e family of functions.\n\u003c/p\u003e",
          "module": "Text.VCard.Query",
          "name": "filterWithProperty",
          "package": "vcard",
          "signature": "(VProperty -\u003e Bool) -\u003e [VCard] -\u003e [VCard]",
          "source": "src/Text-VCard-Query.html#filterWithProperty",
          "type": "function"
        },
        "index": {
          "description": "Supports the most general filter predicates of the filter family of functions",
          "hierarchy": "Text VCard Query",
          "module": "Text.VCard.Query",
          "name": "filterWithProperty",
          "normalized": "(VProperty-\u003eBool)-\u003e[VCard]-\u003e[VCard]",
          "package": "vcard",
          "partial": "With Property",
          "signature": "(VProperty-\u003eBool)-\u003e[VCard]-\u003e[VCard]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Query.html#v:filterWithProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialization of |filterWithProperty|.\n\u003c/p\u003e",
          "module": "Text.VCard.Query",
          "name": "filterWithType",
          "package": "vcard",
          "signature": "(Type -\u003e VCardValue -\u003e Bool) -\u003e [VCard] -\u003e [VCard]",
          "source": "src/Text-VCard-Query.html#filterWithType",
          "type": "function"
        },
        "index": {
          "description": "specialization of filterWithProperty",
          "hierarchy": "Text VCard Query",
          "module": "Text.VCard.Query",
          "name": "filterWithType",
          "normalized": "(Type-\u003eVCardValue-\u003eBool)-\u003e[VCard]-\u003e[VCard]",
          "package": "vcard",
          "partial": "With Type",
          "signature": "(Type-\u003eVCardValue-\u003eBool)-\u003e[VCard]-\u003e[VCard]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Query.html#v:filterWithType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Query",
          "name": "insert",
          "package": "vcard",
          "signature": "VProperty -\u003e VCard -\u003e VCard",
          "source": "src/Text-VCard-Query.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Query",
          "module": "Text.VCard.Query",
          "name": "insert",
          "normalized": "VProperty-\u003eVCard-\u003eVCard",
          "package": "vcard",
          "signature": "VProperty-\u003eVCard-\u003eVCard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Query.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalog to |Data.List.lookup|. In general an attribute may map to a number\n of values. vCards should maintain the invariant that \u003ccode\u003eforall attr, lookup\n attr vcard /= Just []\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.VCard.Query",
          "name": "lookup",
          "package": "vcard",
          "signature": "ByteString -\u003e VCard -\u003e Maybe [VCardValue]",
          "source": "src/Text-VCard-Query.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Analog to Data.List.lookup In general an attribute may map to number of values vCards should maintain the invariant that forall attr lookup attr vcard Just",
          "hierarchy": "Text VCard Query",
          "module": "Text.VCard.Query",
          "name": "lookup",
          "normalized": "ByteString-\u003eVCard-\u003eMaybe[VCardValue]",
          "package": "vcard",
          "signature": "ByteString-\u003eVCard-\u003eMaybe[VCardValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Query.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsafe variant of |lookup| that assumes given type name maps to exactly\n one value in the vCard.\n\u003c/p\u003e",
          "module": "Text.VCard.Query",
          "name": "lookup'",
          "package": "vcard",
          "signature": "ByteString -\u003e VCard -\u003e VCardValue",
          "source": "src/Text-VCard-Query.html#lookup%27",
          "type": "function"
        },
        "index": {
          "description": "Unsafe variant of lookup that assumes given type name maps to exactly one value in the vCard",
          "hierarchy": "Text VCard Query",
          "module": "Text.VCard.Query",
          "name": "lookup'",
          "normalized": "ByteString-\u003eVCard-\u003eVCardValue",
          "package": "vcard",
          "signature": "ByteString-\u003eVCard-\u003eVCardValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Query.html#v:lookup-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap by property value only.\n\u003c/p\u003e",
          "module": "Text.VCard.Query",
          "name": "map",
          "package": "vcard",
          "signature": "(VCardValue -\u003e VCardValue) -\u003e [VCard] -\u003e [VCard]",
          "source": "src/Text-VCard-Query.html#map",
          "type": "function"
        },
        "index": {
          "description": "Map by property value only",
          "hierarchy": "Text VCard Query",
          "module": "Text.VCard.Query",
          "name": "map",
          "normalized": "(VCardValue-\u003eVCardValue)-\u003e[VCard]-\u003e[VCard]",
          "package": "vcard",
          "signature": "(VCardValue-\u003eVCardValue)-\u003e[VCard]-\u003e[VCard]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Query.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupports the most general map predicates of the \u003ccode\u003emap\u003c/code\u003e family of functions.\n\u003c/p\u003e",
          "module": "Text.VCard.Query",
          "name": "mapWithProperty",
          "package": "vcard",
          "signature": "(VProperty -\u003e VCardValue) -\u003e [VCard] -\u003e [VCard]",
          "source": "src/Text-VCard-Query.html#mapWithProperty",
          "type": "function"
        },
        "index": {
          "description": "Supports the most general map predicates of the map family of functions",
          "hierarchy": "Text VCard Query",
          "module": "Text.VCard.Query",
          "name": "mapWithProperty",
          "normalized": "(VProperty-\u003eVCardValue)-\u003e[VCard]-\u003e[VCard]",
          "package": "vcard",
          "partial": "With Property",
          "signature": "(VProperty-\u003eVCardValue)-\u003e[VCard]-\u003e[VCard]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Query.html#v:mapWithProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialization of |mapWithProperty|.\n\u003c/p\u003e",
          "module": "Text.VCard.Query",
          "name": "mapWithType",
          "package": "vcard",
          "signature": "(Type -\u003e VCardValue -\u003e VCardValue) -\u003e [VCard] -\u003e [VCard]",
          "source": "src/Text-VCard-Query.html#mapWithType",
          "type": "function"
        },
        "index": {
          "description": "specialization of mapWithProperty",
          "hierarchy": "Text VCard Query",
          "module": "Text.VCard.Query",
          "name": "mapWithType",
          "normalized": "(Type-\u003eVCardValue-\u003eVCardValue)-\u003e[VCard]-\u003e[VCard]",
          "package": "vcard",
          "partial": "With Type",
          "signature": "(Type-\u003eVCardValue-\u003eVCardValue)-\u003e[VCard]-\u003e[VCard]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Query.html#v:mapWithType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eField selectors for struct values, such as in N or ADR properties.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.VCard.Selectors",
          "name": "Selectors",
          "package": "vcard",
          "source": "src/Text-VCard-Selectors.html",
          "type": "module"
        },
        "index": {
          "description": "Field selectors for struct values such as in or ADR properties",
          "hierarchy": "Text VCard Selectors",
          "module": "Text.VCard.Selectors",
          "name": "Selectors",
          "package": "vcard",
          "partial": "Selectors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Selectors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "Types",
          "package": "vcard",
          "source": "src/Text-VCard-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "Types",
          "package": "vcard",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional value specifications in RFC 2426.\n\u003c/p\u003e",
          "module": "Text.VCard.Types",
          "name": "ExtraValue",
          "package": "vcard",
          "source": "src/Text-VCard-Types.html#ExtraValue",
          "type": "data"
        },
        "index": {
          "description": "Additional value specifications in RFC",
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "ExtraValue",
          "package": "vcard",
          "partial": "Extra Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#t:ExtraValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "SourceName",
          "package": "vcard",
          "source": "src/Text-VCard-Types.html#SourceName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "SourceName",
          "package": "vcard",
          "partial": "Source Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#t:SourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "VCard",
          "package": "vcard",
          "source": "src/Text-VCard-Types.html#VCard",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "VCard",
          "package": "vcard",
          "partial": "VCard",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#t:VCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA |VCardValue| obeys the union of the value specifications in RFC 2425\n and RFC 2426.\n\u003c/p\u003e",
          "module": "Text.VCard.Types",
          "name": "VCardValue",
          "package": "vcard",
          "source": "src/Text-VCard-Types.html#VCardValue",
          "type": "type"
        },
        "index": {
          "description": "VCardValue obeys the union of the value specifications in RFC and RFC",
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "VCardValue",
          "package": "vcard",
          "partial": "VCard Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#t:VCardValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "VProperty",
          "package": "vcard",
          "source": "src/Text-VCard-Types.html#VProperty",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "VProperty",
          "package": "vcard",
          "partial": "VProperty",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#t:VProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "Version",
          "package": "vcard",
          "source": "src/Text-VCard-Types.html#Version",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "Version",
          "package": "vcard",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "Binary",
          "package": "vcard",
          "signature": "Binary ByteString",
          "source": "src/Text-VCard-Types.html#ExtraValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "Binary",
          "package": "vcard",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "PhoneNumber",
          "package": "vcard",
          "signature": "PhoneNumber ByteString",
          "source": "src/Text-VCard-Types.html#ExtraValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "PhoneNumber",
          "package": "vcard",
          "partial": "Phone Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:PhoneNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "Struct",
          "package": "vcard",
          "signature": "Struct [[ByteString]]",
          "source": "src/Text-VCard-Types.html#ExtraValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "Struct",
          "normalized": "Struct[[ByteString]]",
          "package": "vcard",
          "partial": "Struct",
          "signature": "Struct[[ByteString]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:Struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "SubVCard",
          "package": "vcard",
          "signature": "SubVCard VCard",
          "source": "src/Text-VCard-Types.html#ExtraValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "SubVCard",
          "package": "vcard",
          "partial": "Sub VCard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:SubVCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "UTCOffset",
          "package": "vcard",
          "signature": "UTCOffset",
          "source": "src/Text-VCard-Types.html#ExtraValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "UTCOffset",
          "package": "vcard",
          "partial": "UTCOffset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:UTCOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "VCard",
          "package": "vcard",
          "signature": "VCard",
          "source": "src/Text-VCard-Types.html#VCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "VCard",
          "package": "vcard",
          "partial": "VCard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:VCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "Version",
          "package": "vcard",
          "signature": "Version",
          "source": "src/Text-VCard-Types.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "Version",
          "package": "vcard",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid range: 0-23\n\u003c/p\u003e",
          "module": "Text.VCard.Types",
          "name": "utcOffset_hours",
          "package": "vcard",
          "signature": "Int",
          "source": "src/Text-VCard-Types.html#ExtraValue",
          "type": "function"
        },
        "index": {
          "description": "Valid range",
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "utcOffset_hours",
          "package": "vcard",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:utcOffset_hours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid range: 0-25\n\u003c/p\u003e",
          "module": "Text.VCard.Types",
          "name": "utcOffset_minutes",
          "package": "vcard",
          "signature": "Int",
          "source": "src/Text-VCard-Types.html#ExtraValue",
          "type": "function"
        },
        "index": {
          "description": "Valid range",
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "utcOffset_minutes",
          "package": "vcard",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:utcOffset_minutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "utcOffset_sign",
          "package": "vcard",
          "signature": "Char",
          "source": "src/Text-VCard-Types.html#ExtraValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "utcOffset_sign",
          "package": "vcard",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:utcOffset_sign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "vcard_properties",
          "package": "vcard",
          "signature": "Map ByteString [VProperty]",
          "source": "src/Text-VCard-Types.html#VCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "vcard_properties",
          "normalized": "Map ByteString[VProperty]",
          "package": "vcard",
          "signature": "Map ByteString[VProperty]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:vcard_properties"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "vcard_version",
          "package": "vcard",
          "signature": "Version",
          "source": "src/Text-VCard-Types.html#VCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "vcard_version",
          "package": "vcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:vcard_version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "version_major",
          "package": "vcard",
          "signature": "Int",
          "source": "src/Text-VCard-Types.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "version_major",
          "package": "vcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:version_major"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.VCard.Types",
          "name": "version_minor",
          "package": "vcard",
          "signature": "Int",
          "source": "src/Text-VCard-Types.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text VCard Types",
          "module": "Text.VCard.Types",
          "name": "version_minor",
          "package": "vcard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard-Types.html#v:version_minor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module reexports most of the modules in the vCard library in\n additionto the mime-directory library, with the exception of\n |Text.VCard.Query|, since that library should be imported qualified, as\n many of the names clash with standard |Prelude| names.\n\u003c/p\u003e\u003cp\u003eTo use this library, you probably want to import one of the modules in\n |Text.VCard.Format| only, to parse and serialize vcards in specific formats.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.VCard",
          "name": "VCard",
          "package": "vcard",
          "source": "src/Text-VCard.html",
          "type": "module"
        },
        "index": {
          "description": "This module reexports most of the modules in the vCard library in additionto the mime-directory library with the exception of Text.VCard.Query since that library should be imported qualified as many of the names clash with standard Prelude names To use this library you probably want to import one of the modules in Text.VCard.Format only to parse and serialize vcards in specific formats",
          "hierarchy": "Text VCard",
          "module": "Text.VCard",
          "name": "VCard",
          "package": "vcard",
          "partial": "VCard",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vcard/docs/Text-VCard.html#"
      }
    }
  ]
]