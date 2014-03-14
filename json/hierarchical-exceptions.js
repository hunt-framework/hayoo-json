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
        "word": "hierarchical-exceptions"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eControl.Exception\u003c/a\u003e leverages \u003ca\u003eData.Typeable\u003c/a\u003e to fake subtyping and thereby\ngive Haskell support for hierarchies of exceptions.  However, defining\nexception hierarchies requires quite a bit of boilerplate.  For instance, to\ndefine\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a top-level exception, \u003ccode\u003eTracerException\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e a sub-exception, \u003ccode\u003eTimingFailure\u003c/code\u003e, and\n\u003c/li\u003e\u003cli\u003e a sub-exception, \u003ccode\u003eWriteFailure\u003c/code\u003e,\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003erequires several paragraphs of code:\n\u003c/p\u003e\u003cpre\u003e import Control.Exception\n import Data.Typeable (Typeable, cast)\n\n data TracerException = forall e. Exception e =\u003e TracerException e\n                      deriving Typeable\n\n instance Show TracerException where\n   show (TracerException e) = show e\n\n instance Exception TracerException\n\n data TimingFailure = TimingFailure\n                    deriving (Show, Typeable)\n\n instance Exception TimingFailure where\n   toException = toException . TracerException\n   fromException x = do\n     TracerException a \u003c- fromException x\n     cast a\n\n data WriteFailure = WriteFailure\n                   deriving (Show, Typeable)\n\n instance Exception WriteFailure where\n   toException = toException . TracerException\n   fromException x = do\n     TracerException a \u003c- fromException x\n     cast a\n\u003c/pre\u003e\u003cp\u003eInstead of writing this, one could simply write\n\u003c/p\u003e\u003cpre\u003e import Control.Exception (SomeException(SomeException))\n import Control.Exception.Hierarchical\n\n mkAbstractException 'SomeException \"TracerException\"\n mkException 'TracerException \"TimingFailure\"\n mkException 'TracerException \"WriteFailure\"\n\u003c/pre\u003e\u003cp\u003eand allow Template Haskell to fill in the rest.\n\u003c/p\u003e\u003cp\u003eThis libray deals with two types of exceptions: \u003cem\u003eabstract\u003c/em\u003e and \u003cem\u003econcrete\u003c/em\u003e\nexceptions.  Both types can be caught with \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e and other\nassociated functions; however, only you may only extend abstract exceptions,\nand you may only throw concrete ones.  This is a fundamental limitation of the\nHaskell exception hierarchy system as it currently exists. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Exception.Hierarchical",
          "name": "Hierarchical",
          "package": "hierarchical-exceptions",
          "source": "src/Control-Exception-Hierarchical.html",
          "type": "module"
        },
        "index": {
          "description": "Control.Exception leverages Data.Typeable to fake subtyping and thereby give Haskell support for hierarchies of exceptions However defining exception hierarchies requires quite bit of boilerplate For instance to define top-level exception TracerException sub-exception TimingFailure and sub-exception WriteFailure requires several paragraphs of code import Control.Exception import Data.Typeable Typeable cast data TracerException forall Exception TracerException deriving Typeable instance Show TracerException where show TracerException show instance Exception TracerException data TimingFailure TimingFailure deriving Show Typeable instance Exception TimingFailure where toException toException TracerException fromException do TracerException fromException cast data WriteFailure WriteFailure deriving Show Typeable instance Exception WriteFailure where toException toException TracerException fromException do TracerException fromException cast Instead of writing this one could simply write import Control.Exception SomeException SomeException import Control.Exception.Hierarchical mkAbstractException SomeException TracerException mkException TracerException TimingFailure mkException TracerException WriteFailure and allow Template Haskell to fill in the rest This libray deals with two types of exceptions abstract and concrete exceptions Both types can be caught with catch and other associated functions however only you may only extend abstract exceptions and you may only throw concrete ones This is fundamental limitation of the Haskell exception hierarchy system as it currently exists",
          "hierarchy": "Control Exception Hierarchical",
          "module": "Control.Exception.Hierarchical",
          "name": "Hierarchical",
          "package": "hierarchical-exceptions",
          "partial": "Hierarchical",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-exceptions/docs/Control-Exception-Hierarchical.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003cem\u003eabstract\u003c/em\u003e sub-exception of an existing exception.  As discussed\nin the introduction, such an exception cannot be thrown; it can only be\nextended. \n\u003c/p\u003e",
          "module": "Control.Exception.Hierarchical",
          "name": "mkAbstractException",
          "package": "hierarchical-exceptions",
          "signature": "Name-\u003e String-\u003e DecsQ",
          "type": "function"
        },
        "index": {
          "description": "Creates an abstract sub-exception of an existing exception As discussed in the introduction such an exception cannot be thrown it can only be extended",
          "hierarchy": "Control Exception Hierarchical",
          "module": "Control.Exception.Hierarchical",
          "name": "mkAbstractException",
          "normalized": "Name-\u003eString-\u003eDecsQ",
          "package": "hierarchical-exceptions",
          "partial": "Abstract Exception",
          "signature": "Name-\u003eString-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-exceptions/docs/Control-Exception-Hierarchical.html#v:mkAbstractException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003cem\u003econcrete\u003c/em\u003e sub-exception of an existing exception.  As discussed\nin the introduction, such an exception cannot be extended; it can only be\nthrown. \n\u003c/p\u003e",
          "module": "Control.Exception.Hierarchical",
          "name": "mkException",
          "package": "hierarchical-exceptions",
          "signature": "Name-\u003e String-\u003e DecsQ",
          "type": "function"
        },
        "index": {
          "description": "Creates concrete sub-exception of an existing exception As discussed in the introduction such an exception cannot be extended it can only be thrown",
          "hierarchy": "Control Exception Hierarchical",
          "module": "Control.Exception.Hierarchical",
          "name": "mkException",
          "normalized": "Name-\u003eString-\u003eDecsQ",
          "package": "hierarchical-exceptions",
          "partial": "Exception",
          "signature": "Name-\u003eString-\u003eDecsQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hierarchical-exceptions/docs/Control-Exception-Hierarchical.html#v:mkException"
      }
    }
  ]
]