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
        "word": "dtd-text"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a \u003ca\u003eData.Attoparsec.Text\u003c/a\u003e parser for XML\n Document Type Declaration (DTD) documents. A higher-level interface\n that implements parameter entity resolution is also provided.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "Parse",
          "package": "dtd-text",
          "source": "src/Data-XML-DTD-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides Data.Attoparsec.Text parser for XML Document Type Declaration DTD documents higher-level interface that implements parameter entity resolution is also provided",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "Parse",
          "package": "dtd-text",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA symbol table for external parameter entity resolution.  The\n symbol table maps strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e names to lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values.\n Typically, the values will have been retrieved from an external\n resource such as a file or URL.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "SymTable",
          "package": "dtd-text",
          "source": "src/Data-XML-DTD-Parse.html#SymTable",
          "type": "type"
        },
        "index": {
          "description": "symbol table for external parameter entity resolution The symbol table maps strict Text names to lazy Text values Typically the values will have been retrieved from an external resource such as file or URL",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "SymTable",
          "package": "dtd-text",
          "partial": "Sym Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#t:SymTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the three-part declaration of an attribute.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "attDecl",
          "package": "dtd-text",
          "signature": "Parser AttDecl",
          "source": "src/Data-XML-DTD-Parse.html#attDecl",
          "type": "function"
        },
        "index": {
          "description": "Parse the three-part declaration of an attribute",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "attDecl",
          "package": "dtd-text",
          "partial": "Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:attDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a default value specification for an attribute.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "attDefault",
          "package": "dtd-text",
          "signature": "Parser AttDefault",
          "source": "src/Data-XML-DTD-Parse.html#attDefault",
          "type": "function"
        },
        "index": {
          "description": "Parse default value specification for an attribute",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "attDefault",
          "package": "dtd-text",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:attDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a list of attribute declarations for an element.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "attList",
          "package": "dtd-text",
          "signature": "Parser AttList",
          "source": "src/Data-XML-DTD-Parse.html#attList",
          "type": "function"
        },
        "index": {
          "description": "Parse list of attribute declarations for an element",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "attList",
          "package": "dtd-text",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:attList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the type of an attribute.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "attType",
          "package": "dtd-text",
          "signature": "Parser AttType",
          "source": "src/Data-XML-DTD-Parse.html#attType",
          "type": "function"
        },
        "index": {
          "description": "Parse the type of an attribute",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "attType",
          "package": "dtd-text",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:attType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a comment\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "comment",
          "package": "dtd-text",
          "signature": "Parser Text",
          "source": "src/Data-XML-DTD-Parse.html#comment",
          "type": "function"
        },
        "index": {
          "description": "Parse comment",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "comment",
          "package": "dtd-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the content that can occur in an element.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "contentDecl",
          "package": "dtd-text",
          "signature": "Parser ContentDecl",
          "source": "src/Data-XML-DTD-Parse.html#contentDecl",
          "type": "function"
        },
        "index": {
          "description": "Parse the content that can occur in an element",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "contentDecl",
          "package": "dtd-text",
          "partial": "Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:contentDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the model of structured content for an element.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "contentModel",
          "package": "dtd-text",
          "signature": "Parser Text ContentModel",
          "source": "src/Data-XML-DTD-Parse.html#contentModel",
          "type": "function"
        },
        "index": {
          "description": "Parse the model of structured content for an element",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "contentModel",
          "package": "dtd-text",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:contentModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a DTD. Parameter entity substitution is not supported by\n this parser, so parameter entities cannot appear in places where a\n valid DTD syntax production cannot be determined without resolving\n them.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "dtd",
          "package": "dtd-text",
          "signature": "Parser DTD",
          "source": "src/Data-XML-DTD-Parse.html#dtd",
          "type": "function"
        },
        "index": {
          "description": "Parse DTD Parameter entity substitution is not supported by this parser so parameter entities cannot appear in places where valid DTD syntax production cannot be determined without resolving them",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "dtd",
          "package": "dtd-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:dtd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single component of a \u003ccode\u003e\u003ca\u003eDTD\u003c/a\u003e\u003c/code\u003e. Conditional sections are\n currently not supported.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "dtdComponent",
          "package": "dtd-text",
          "signature": "Parser DTDComponent",
          "source": "src/Data-XML-DTD-Parse.html#dtdComponent",
          "type": "function"
        },
        "index": {
          "description": "Parse single component of DTD Conditional sections are currently not supported",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "dtdComponent",
          "package": "dtd-text",
          "partial": "Component",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:dtdComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the declaration of an element.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "elementDecl",
          "package": "dtd-text",
          "signature": "Parser ElementDecl",
          "source": "src/Data-XML-DTD-Parse.html#elementDecl",
          "type": "function"
        },
        "index": {
          "description": "Parse the declaration of an element",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "elementDecl",
          "package": "dtd-text",
          "partial": "Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:elementDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an entity declaration.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "entityDecl",
          "package": "dtd-text",
          "signature": "Parser EntityDecl",
          "source": "src/Data-XML-DTD-Parse.html#entityDecl",
          "type": "function"
        },
        "index": {
          "description": "Parse an entity declaration",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "entityDecl",
          "package": "dtd-text",
          "partial": "Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:entityDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an entity value. An entity value is a quoted string\n possibly containing parameter entity references.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "entityValue",
          "package": "dtd-text",
          "signature": "Parser [EntityValue]",
          "source": "src/Data-XML-DTD-Parse.html#entityValue",
          "type": "function"
        },
        "index": {
          "description": "Parse an entity value An entity value is quoted string possibly containing parameter entity references",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "entityValue",
          "normalized": "Parser[EntityValue]",
          "package": "dtd-text",
          "partial": "Value",
          "signature": "Parser[EntityValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:entityValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an external ID.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "externalID",
          "package": "dtd-text",
          "signature": "Parser ExternalID",
          "source": "src/Data-XML-DTD-Parse.html#externalID",
          "type": "function"
        },
        "index": {
          "description": "Parse an external ID",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "externalID",
          "package": "dtd-text",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:externalID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a processing instruction.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "instruction",
          "package": "dtd-text",
          "signature": "Parser Instruction",
          "source": "src/Data-XML-DTD-Parse.html#instruction",
          "type": "function"
        },
        "index": {
          "description": "Parse processing instruction",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "instruction",
          "package": "dtd-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a DTD name. We are much more liberal than the spec: we\n allow any characters that will not interfere with other DTD\n syntax. This parser subsumes both \u003ccode\u003eName\u003c/code\u003e and \u003ccode\u003eNmToken\u003c/code\u003e in the spec,\n and more.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "name",
          "package": "dtd-text",
          "signature": "Parser Text",
          "source": "src/Data-XML-DTD-Parse.html#name",
          "type": "function"
        },
        "index": {
          "description": "Parse DTD name We are much more liberal than the spec we allow any characters that will not interfere with other DTD syntax This parser subsumes both Name and NmToken in the spec and more",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "name",
          "package": "dtd-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a DTD \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e followed by optional white space.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "nameSS",
          "package": "dtd-text",
          "signature": "Parser Text",
          "source": "src/Data-XML-DTD-Parse.html#nameSS",
          "type": "function"
        },
        "index": {
          "description": "Parse DTD name followed by optional white space",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "nameSS",
          "package": "dtd-text",
          "partial": "SS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:nameSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a declaration of a notation.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "notation",
          "package": "dtd-text",
          "signature": "Parser Notation",
          "source": "src/Data-XML-DTD-Parse.html#notation",
          "type": "function"
        },
        "index": {
          "description": "Parse declaration of notation",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "notation",
          "package": "dtd-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:notation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a source for a notation.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "notationSrc",
          "package": "dtd-text",
          "signature": "Parser NotationSource",
          "source": "src/Data-XML-DTD-Parse.html#notationSrc",
          "type": "function"
        },
        "index": {
          "description": "Parse source for notation",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "notationSrc",
          "package": "dtd-text",
          "partial": "Src",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:notationSrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a parameter entity reference\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "pERef",
          "package": "dtd-text",
          "signature": "Parser PERef",
          "source": "src/Data-XML-DTD-Parse.html#pERef",
          "type": "function"
        },
        "index": {
          "description": "Parse parameter entity reference",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "pERef",
          "package": "dtd-text",
          "partial": "ERef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:pERef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a DTD from lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e while fully resolving the values\n of all parameter entities whose values are provided internally in\n the DTD. If the syntax of the DTD is invalid, all declarations up\n to the first invalid one are returned.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "parseDTD",
          "package": "dtd-text",
          "signature": "Text -\u003e DTD",
          "source": "src/Data-XML-DTD-Parse.html#parseDTD",
          "type": "function"
        },
        "index": {
          "description": "Parse DTD from lazy Text while fully resolving the values of all parameter entities whose values are provided internally in the DTD If the syntax of the DTD is invalid all declarations up to the first invalid one are returned",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "parseDTD",
          "normalized": "Text-\u003eDTD",
          "package": "dtd-text",
          "partial": "DTD",
          "signature": "Text-\u003eDTD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:parseDTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a DTD from lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e while fully resolving the values\n of parameter entities. The given table of values is used to resolve\n external parameter entities.\n\u003c/p\u003e\u003cp\u003eIf you need information from the DTD itself to look up the external\n entities, such as system and public IDs, you might be able to get\n the information by applying \u003ccode\u003e\u003ca\u003eparseDTD\u003c/a\u003e\u003c/code\u003e to the DTD or part of it for\n an initial parse.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "parseDTDWithExtern",
          "package": "dtd-text",
          "signature": "SymTable -\u003e Text -\u003e DTD",
          "source": "src/Data-XML-DTD-Parse.html#parseDTDWithExtern",
          "type": "function"
        },
        "index": {
          "description": "Parse DTD from lazy Text while fully resolving the values of parameter entities The given table of values is used to resolve external parameter entities If you need information from the DTD itself to look up the external entities such as system and public IDs you might be able to get the information by applying parseDTD to the DTD or part of it for an initial parse",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "parseDTDWithExtern",
          "normalized": "SymTable-\u003eText-\u003eDTD",
          "package": "dtd-text",
          "partial": "DTDWith Extern",
          "signature": "SymTable-\u003eText-\u003eDTD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:parseDTDWithExtern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single-quoted or double-quoted string. The quotation marks are\n dropped.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "quoted",
          "package": "dtd-text",
          "signature": "Parser Text",
          "source": "src/Data-XML-DTD-Parse.html#quoted",
          "type": "function"
        },
        "index": {
          "description": "single-quoted or double-quoted string The quotation marks are dropped",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "quoted",
          "package": "dtd-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:quoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a repetition character.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "repeatChar",
          "package": "dtd-text",
          "signature": "Parser Repeat",
          "source": "src/Data-XML-DTD-Parse.html#repeatChar",
          "type": "function"
        },
        "index": {
          "description": "Parse repetition character",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "repeatChar",
          "package": "dtd-text",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:repeatChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an \u003ccode\u003e?xml\u003c/code\u003e text declaration at the beginning of a \u003ccode\u003e\u003ca\u003eDTD\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Parse",
          "name": "textDecl",
          "package": "dtd-text",
          "signature": "Parser DTDTextDecl",
          "source": "src/Data-XML-DTD-Parse.html#textDecl",
          "type": "function"
        },
        "index": {
          "description": "Parse an xml text declaration at the beginning of DTD",
          "hierarchy": "Data XML DTD Parse",
          "module": "Data.XML.DTD.Parse",
          "name": "textDecl",
          "package": "dtd-text",
          "partial": "Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Parse.html#v:textDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA \u003ca\u003eData.Text.Lazy.Builder\u003c/a\u003e renderer for XML Document Type\n Declaration (DTD) documents.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "Render",
          "package": "dtd-text",
          "source": "src/Data-XML-DTD-Render.html",
          "type": "module"
        },
        "index": {
          "description": "Data.Text.Lazy.Builder renderer for XML Document Type Declaration DTD documents",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "Render",
          "package": "dtd-text",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eAttDecl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildAttDecl",
          "package": "dtd-text",
          "signature": "AttDecl -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildAttDecl",
          "type": "function"
        },
        "index": {
          "description": "Builder for an AttDecl",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildAttDecl",
          "normalized": "AttDecl-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Att Decl",
          "signature": "AttDecl-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildAttDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eAttDefault\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildAttDefault",
          "package": "dtd-text",
          "signature": "AttDefault -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildAttDefault",
          "type": "function"
        },
        "index": {
          "description": "Builder for an AttDefault",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildAttDefault",
          "normalized": "AttDefault-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Att Default",
          "signature": "AttDefault-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildAttDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eAttList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildAttList",
          "package": "dtd-text",
          "signature": "AttList -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildAttList",
          "type": "function"
        },
        "index": {
          "description": "Builder for an AttList",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildAttList",
          "normalized": "AttList-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Att List",
          "signature": "AttList-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildAttList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eAttType\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildAttType",
          "package": "dtd-text",
          "signature": "AttType -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildAttType",
          "type": "function"
        },
        "index": {
          "description": "Builder for an AttType",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildAttType",
          "normalized": "AttType-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Att Type",
          "signature": "AttType-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildAttType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a choice expression.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildChoice",
          "package": "dtd-text",
          "signature": "(a -\u003e Builder) -\u003e [a] -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildChoice",
          "type": "function"
        },
        "index": {
          "description": "Build choice expression",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildChoice",
          "normalized": "(a-\u003eBuilder)-\u003e[a]-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Choice",
          "signature": "(a-\u003eBuilder)-\u003e[a]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for a comment. The comment text cannot be null,\n cannot contain two consecutive \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e, and cannot end in \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildComment",
          "package": "dtd-text",
          "signature": "Text -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildComment",
          "type": "function"
        },
        "index": {
          "description": "Builder for comment The comment text cannot be null cannot contain two consecutive and cannot end in",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildComment",
          "normalized": "Text-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Comment",
          "signature": "Text-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eContentDecl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildContentDecl",
          "package": "dtd-text",
          "signature": "ContentDecl -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildContentDecl",
          "type": "function"
        },
        "index": {
          "description": "Builder for ContentDecl",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildContentDecl",
          "normalized": "ContentDecl-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Content Decl",
          "signature": "ContentDecl-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildContentDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eContentModel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildContentModel",
          "package": "dtd-text",
          "signature": "ContentModel -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildContentModel",
          "type": "function"
        },
        "index": {
          "description": "Builder for ContentModel",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildContentModel",
          "normalized": "ContentModel-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Content Model",
          "signature": "ContentModel-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildContentModel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eDTD\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildDTD",
          "package": "dtd-text",
          "signature": "DTD -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildDTD",
          "type": "function"
        },
        "index": {
          "description": "Builder for DTD",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildDTD",
          "normalized": "DTD-\u003eBuilder",
          "package": "dtd-text",
          "partial": "DTD",
          "signature": "DTD-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildDTD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eDTDComponent\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildDTDComponent",
          "package": "dtd-text",
          "signature": "DTDComponent -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildDTDComponent",
          "type": "function"
        },
        "index": {
          "description": "Builder for DTDComponent",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildDTDComponent",
          "normalized": "DTDComponent-\u003eBuilder",
          "package": "dtd-text",
          "partial": "DTDComponent",
          "signature": "DTDComponent-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildDTDComponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eDTDTextDecl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildDTDTextDecl",
          "package": "dtd-text",
          "signature": "DTDTextDecl -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildDTDTextDecl",
          "type": "function"
        },
        "index": {
          "description": "Builder for DTDTextDecl",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildDTDTextDecl",
          "normalized": "DTDTextDecl-\u003eBuilder",
          "package": "dtd-text",
          "partial": "DTDText Decl",
          "signature": "DTDTextDecl-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildDTDTextDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eElementDecl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildElementDecl",
          "package": "dtd-text",
          "signature": "ElementDecl -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildElementDecl",
          "type": "function"
        },
        "index": {
          "description": "Builder for an ElementDecl",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildElementDecl",
          "normalized": "ElementDecl-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Element Decl",
          "signature": "ElementDecl-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildElementDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eEntityDecl\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildEntityDecl",
          "package": "dtd-text",
          "signature": "EntityDecl -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildEntityDecl",
          "type": "function"
        },
        "index": {
          "description": "Builder for an EntityDecl",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildEntityDecl",
          "normalized": "EntityDecl-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Entity Decl",
          "signature": "EntityDecl-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildEntityDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for an entity value, consisting of a list of\n \u003ccode\u003e\u003ca\u003eEntityValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildEntityValue",
          "package": "dtd-text",
          "signature": "[EntityValue] -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildEntityValue",
          "type": "function"
        },
        "index": {
          "description": "Builder for an entity value consisting of list of EntityValue",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildEntityValue",
          "normalized": "[EntityValue]-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Entity Value",
          "signature": "[EntityValue]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildEntityValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eExternalID\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildExternalID",
          "package": "dtd-text",
          "signature": "ExternalID -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildExternalID",
          "type": "function"
        },
        "index": {
          "description": "Builder for an ExternalID",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildExternalID",
          "normalized": "ExternalID-\u003eBuilder",
          "package": "dtd-text",
          "partial": "External ID",
          "signature": "ExternalID-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildExternalID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for an \u003ccode\u003e\u003ca\u003eInstruction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildInstruction",
          "package": "dtd-text",
          "signature": "Instruction -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildInstruction",
          "type": "function"
        },
        "index": {
          "description": "Builder for an Instruction",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildInstruction",
          "normalized": "Instruction-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Instruction",
          "signature": "Instruction-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a list of items\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildList",
          "package": "dtd-text",
          "signature": "Text -\u003e (a -\u003e Builder) -\u003e [a] -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildList",
          "type": "function"
        },
        "index": {
          "description": "Build list of items",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildList",
          "normalized": "Text-\u003e(a-\u003eBuilder)-\u003e[a]-\u003eBuilder",
          "package": "dtd-text",
          "partial": "List",
          "signature": "Text-\u003e(a-\u003eBuilder)-\u003e[a]-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild an optional item.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildMaybe",
          "package": "dtd-text",
          "signature": "(a -\u003e Builder) -\u003e Maybe a -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildMaybe",
          "type": "function"
        },
        "index": {
          "description": "Build an optional item",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildMaybe",
          "normalized": "(a-\u003eBuilder)-\u003eMaybe a-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Maybe",
          "signature": "(a-\u003eBuilder)-\u003eMaybe a-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eNotation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildNotation",
          "package": "dtd-text",
          "signature": "Notation -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildNotation",
          "type": "function"
        },
        "index": {
          "description": "Builder for Notation",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildNotation",
          "normalized": "Notation-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Notation",
          "signature": "Notation-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildNotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eNotationSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildNotationSource",
          "package": "dtd-text",
          "signature": "NotationSource -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildNotationSource",
          "type": "function"
        },
        "index": {
          "description": "Builder for NotationSource",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildNotationSource",
          "normalized": "NotationSource-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Notation Source",
          "signature": "NotationSource-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildNotationSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA builder for a \u003ccode\u003e\u003ca\u003ePERef\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildPERef",
          "package": "dtd-text",
          "signature": "PERef -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildPERef",
          "type": "function"
        },
        "index": {
          "description": "builder for PERef",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildPERef",
          "normalized": "PERef-\u003eBuilder",
          "package": "dtd-text",
          "partial": "PERef",
          "signature": "PERef-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildPERef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e for a \u003ccode\u003e\u003ca\u003eRepeat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "buildRepeat",
          "package": "dtd-text",
          "signature": "Repeat -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#buildRepeat",
          "type": "function"
        },
        "index": {
          "description": "Builder for Repeat",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "buildRepeat",
          "normalized": "Repeat-\u003eBuilder",
          "package": "dtd-text",
          "partial": "Repeat",
          "signature": "Repeat-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:buildRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a newline.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "newline",
          "package": "dtd-text",
          "signature": "Builder",
          "source": "src/Data-XML-DTD-Render.html#newline",
          "type": "function"
        },
        "index": {
          "description": "Build newline",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "newline",
          "package": "dtd-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a string surround by parentheses.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "parens",
          "package": "dtd-text",
          "signature": "Builder -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#parens",
          "type": "function"
        },
        "index": {
          "description": "Build string surround by parentheses",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "parens",
          "normalized": "Builder-\u003eBuilder",
          "package": "dtd-text",
          "signature": "Builder-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a string quoted by angle brackets, with an exclamation mark.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "pbracket",
          "package": "dtd-text",
          "signature": "Builder -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#pbracket",
          "type": "function"
        },
        "index": {
          "description": "Build string quoted by angle brackets with an exclamation mark",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "pbracket",
          "normalized": "Builder-\u003eBuilder",
          "package": "dtd-text",
          "signature": "Builder-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:pbracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a quoted string.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "quote",
          "package": "dtd-text",
          "signature": "Builder -\u003e Builder",
          "source": "src/Data-XML-DTD-Render.html#quote",
          "type": "function"
        },
        "index": {
          "description": "Build quoted string",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "quote",
          "normalized": "Builder-\u003eBuilder",
          "package": "dtd-text",
          "signature": "Builder-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a space.\n\u003c/p\u003e",
          "module": "Data.XML.DTD.Render",
          "name": "space",
          "package": "dtd-text",
          "signature": "Builder",
          "source": "src/Data-XML-DTD-Render.html#space",
          "type": "function"
        },
        "index": {
          "description": "Build space",
          "hierarchy": "Data XML DTD Render",
          "module": "Data.XML.DTD.Render",
          "name": "space",
          "package": "dtd-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dtd-text/docs/Data-XML-DTD-Render.html#v:space"
      }
    }
  ]
]