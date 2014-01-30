[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/anansi-pandoc/docs/Anansi-Pandoc.html#",
      "description": {
        "fct-module": "Anansi.Pandoc",
        "fct-package": "anansi-pandoc",
        "fct-signature": "module",
        "fct-source": "src/Anansi-Pandoc.html",
        "fct-type": "module",
        "title": "Pandoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Anansi Pandoc",
        "module": "Anansi.Pandoc",
        "name": "Pandoc",
        "normalized": "",
        "package": "anansi-pandoc",
        "partial": "Pandoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/anansi-pandoc/docs/Anansi-Pandoc.html#v:loomPandoc",
      "description": {
        "fct-descr": "\u003cp\u003eA loom which uses Pandoc to parse and produce a variety of formats.\n\u003c/p\u003e\u003cp\u003eDocuments using this loom should set the options\n \u003ccode\u003eanansi-pandoc.reader\u003c/code\u003e and \u003ccode\u003eanansi-pandoc.writer\u003c/code\u003e, to control how the\n markup is parsed, and what output format is produced. Both settings\n default to \u003ccode\u003e\"html\"\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e :# mydocument.anansi\n :option anansi-pandoc.reader=markdown\n :option anansi-pandoc.writer=latex\n\n My Document\n ===========\n ...\n\u003c/pre\u003e\u003cp\u003eThe \u003cem\u003ereaders\u003c/em\u003e and \u003cem\u003ewriters\u003c/em\u003e parameters allow the user to define a custom\n set of Pandoc formats.\n\u003c/p\u003e\u003cp\u003eTo work around a limitation in Pandoc, the name specified for\n \u003ccode\u003eanansi&#8209;pandoc.reader\u003c/code\u003e must also be present in\n \u003ccode\u003eanansi&#8209;pandoc.writer\u003c/code\u003e. That is, if\n \u003ccode\u003eanansi&#8209;pandoc.reader=foo\u003c/code\u003e, then there must be both a reader and\n writer named \u003ccode\u003e\"foo\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Anansi.Pandoc",
        "fct-package": "anansi-pandoc",
        "fct-signature": "[(String, ParserState -\u003e String -\u003e Pandoc)]-\u003e [(String, WriterOptions -\u003e Pandoc -\u003e String)]-\u003e Loom",
        "fct-type": "function",
        "title": "loomPandoc"
      },
      "index": {
        "description": "loom which uses Pandoc to parse and produce variety of formats Documents using this loom should set the options anansi-pandoc.reader and anansi-pandoc.writer to control how the markup is parsed and what output format is produced Both settings default to html mydocument.anansi option anansi-pandoc.reader markdown option anansi-pandoc.writer latex My Document The readers and writers parameters allow the user to define custom set of Pandoc formats To work around limitation in Pandoc the name specified for anansi pandoc.reader must also be present in anansi pandoc.writer That is if anansi pandoc.reader foo then there must be both reader and writer named foo",
        "hierarchy": "Anansi Pandoc",
        "module": "Anansi.Pandoc",
        "name": "loomPandoc",
        "normalized": "[(String,ParserState-\u003eString-\u003ePandoc)]-\u003e[(String,WriterOptions-\u003ePandoc-\u003eString)]-\u003eLoom",
        "package": "anansi-pandoc",
        "partial": "Pandoc",
        "signature": "[(String,ParserState-\u003eString-\u003ePandoc)]-\u003e[(String,WriterOptions-\u003ePandoc-\u003eString)]-\u003eLoom"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/anansi-pandoc/docs/Anansi-Pandoc.html#v:looms",
      "description": {
        "fct-descr": "\u003cp\u003eLooms which use Pandoc to parse and produce a variety of formats.\n\u003c/p\u003e\u003cp\u003eUse this with \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e #!/usr/bin/env runhaskell\n import Anansi\n import Anansi.Pandoc\n import Data.Map\n\n main = defaultMain (unions [Anansi.looms, Anansi.Pandoc.looms])\n\u003c/pre\u003e",
        "fct-module": "Anansi.Pandoc",
        "fct-package": "anansi-pandoc",
        "fct-signature": "Map Text Loom",
        "fct-source": "src/Anansi-Pandoc.html#looms",
        "fct-type": "function",
        "title": "looms"
      },
      "index": {
        "description": "Looms which use Pandoc to parse and produce variety of formats Use this with defaultMain usr bin env runhaskell import Anansi import Anansi.Pandoc import Data.Map main defaultMain unions Anansi.looms Anansi.Pandoc.looms",
        "hierarchy": "Anansi Pandoc",
        "module": "Anansi.Pandoc",
        "name": "looms",
        "normalized": "",
        "package": "anansi-pandoc",
        "partial": "",
        "signature": ""
      }
    }
  }
]