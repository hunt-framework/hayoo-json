[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable-Instances.html#",
      "description": {
        "fct-module": "Data.Storable.Instances",
        "fct-package": "storable",
        "fct-signature": "module",
        "fct-source": "src/Data-Storable-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Storable Instances",
        "module": "Data.Storable.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "storable",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module \u003ca\u003eData.Storable\u003c/a\u003e provides an extension to the Foreign.Storable\n type class adding support for variable-sized data types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Storable",
        "fct-package": "storable",
        "fct-signature": "module",
        "fct-source": "src/Data-Storable.html",
        "fct-type": "module",
        "title": "Storable"
      },
      "index": {
        "description": "The module Data.Storable provides an extension to the Foreign.Storable type class adding support for variable-sized data types",
        "hierarchy": "Data Storable",
        "module": "Data.Storable",
        "name": "Storable",
        "normalized": "",
        "package": "storable",
        "partial": "Storable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable.html#t:StorableM",
      "description": {
        "fct-descr": "\u003cp\u003eThe member functions of this class facilitate writing values of arbitrary\n (including recursive) data types to raw memory and reading values from\n blocks of raw memory.  The class, furthermore, includes support for\n computing the storage requirements and alignment restrictions of storable\n types.\n\u003c/p\u003e\u003cp\u003eThis class fills the gap between Foreign.Storable and Data.Binary.  It adds\n support for marshalling (finite) values of variable-sized data types, like\n lists or trees, while preserving the performance and memory efficiency one\n expects from the Storable class.  It also provides a (monadic) syntactic\n sugar that takes care of alignment restrictions by itself and makes\n instance deriving easy.\n\u003c/p\u003e\u003cp\u003eThe primary aim of this class, as opposed to Foreign.Storable, is storing\n values to raw memory for the purpose of sending them over a network (in a\n homogeneous distributed environment, no endianness translation is done) or\n dumping them to external storage.  It was not intended to be used for\n marshalling structures to/from C, although it may be used for that --\n you'll need, however, specially crafted instances for compound data types\n that apply alignment restrictions recursively, not only for elementary\n Storable values.  These may be provided someday.\n\u003c/p\u003e\u003cp\u003eThe API used for writing/reading values is provided by the \u003ccode\u003e\u003ca\u003esizeOfV\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003ealignmentV\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epeekV\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epokeV\u003c/a\u003e\u003c/code\u003e functions (V standing for value).\n\u003c/p\u003e\u003cp\u003eFor help on deriving instances see the source of the\n Data.Storable.Instances module.  For help on usage of the \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e type, which\n represents raw memory addresses, see the documentation of Foreign Function\n Interface (FFI).\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003esizeOfM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ealignmentM\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003epeekM\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epokeM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Storable",
        "fct-package": "storable",
        "fct-signature": "class",
        "fct-source": "src/Data-Storable.html#StorableM",
        "fct-type": "class",
        "title": "StorableM"
      },
      "index": {
        "description": "The member functions of this class facilitate writing values of arbitrary including recursive data types to raw memory and reading values from blocks of raw memory The class furthermore includes support for computing the storage requirements and alignment restrictions of storable types This class fills the gap between Foreign.Storable and Data.Binary It adds support for marshalling finite values of variable-sized data types like lists or trees while preserving the performance and memory efficiency one expects from the Storable class It also provides monadic syntactic sugar that takes care of alignment restrictions by itself and makes instance deriving easy The primary aim of this class as opposed to Foreign.Storable is storing values to raw memory for the purpose of sending them over network in homogeneous distributed environment no endianness translation is done or dumping them to external storage It was not intended to be used for marshalling structures to from although it may be used for that you ll need however specially crafted instances for compound data types that apply alignment restrictions recursively not only for elementary Storable values These may be provided someday The API used for writing reading values is provided by the sizeOfV alignmentV peekV and pokeV functions standing for value For help on deriving instances see the source of the Data.Storable.Instances module For help on usage of the Ptr type which represents raw memory addresses see the documentation of Foreign Function Interface FFI Minimal complete definition sizeOfM alignmentM peekM and pokeM",
        "hierarchy": "Data Storable",
        "module": "Data.Storable",
        "name": "StorableM",
        "normalized": "",
        "package": "storable",
        "partial": "Storable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable.html#v:alignmentM",
      "description": {
        "fct-module": "Data.Storable",
        "fct-package": "storable",
        "fct-signature": "a -\u003e Alignment ()",
        "fct-source": "src/Data-Storable.html#alignmentM",
        "fct-type": "method",
        "title": "alignmentM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Storable",
        "module": "Data.Storable",
        "name": "alignmentM",
        "normalized": "a-\u003eAlignment()",
        "package": "storable",
        "partial": "",
        "signature": "a-\u003eAlignment()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable.html#v:alignmentV",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the alignment constraint of the argument.  An alignment\n constraint \u003ccode\u003ex\u003c/code\u003e is fulfilled by any address divisible by \u003ccode\u003ex\u003c/code\u003e.\n The value of the argument _is_not_ used.\n\u003c/p\u003e",
        "fct-module": "Data.Storable",
        "fct-package": "storable",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Storable.html#alignmentV",
        "fct-type": "function",
        "title": "alignmentV"
      },
      "index": {
        "description": "Computes the alignment constraint of the argument An alignment constraint is fulfilled by any address divisible by The value of the argument is not used",
        "hierarchy": "Data Storable",
        "module": "Data.Storable",
        "name": "alignmentV",
        "normalized": "a-\u003eInt",
        "package": "storable",
        "partial": "",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable.html#v:peekM",
      "description": {
        "fct-module": "Data.Storable",
        "fct-package": "storable",
        "fct-signature": "Offset a",
        "fct-source": "src/Data-Storable.html#peekM",
        "fct-type": "method",
        "title": "peekM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Storable",
        "module": "Data.Storable",
        "name": "peekM",
        "normalized": "",
        "package": "storable",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable.html#v:peekV",
      "description": {
        "fct-descr": "\u003cp\u003eRead a value from the given memory location.\n\u003c/p\u003e\u003cp\u003eNote that the peekV and pokeV functions might require properly aligned\n  addresses to function correctly.  This is architecture dependent; thus,\n  portable code should ensure that when peeking or poking values of some\n  type \u003ccode\u003ea\u003c/code\u003e, the alignment constraint for \u003ccode\u003ea\u003c/code\u003e, as given by the function\n  \u003ccode\u003e\u003ca\u003ealignmentV\u003c/a\u003e\u003c/code\u003e is fulfilled.\n\u003c/p\u003e",
        "fct-module": "Data.Storable",
        "fct-package": "storable",
        "fct-signature": "Ptr a -\u003e IO a",
        "fct-source": "src/Data-Storable.html#peekV",
        "fct-type": "function",
        "title": "peekV"
      },
      "index": {
        "description": "Read value from the given memory location Note that the peekV and pokeV functions might require properly aligned addresses to function correctly This is architecture dependent thus portable code should ensure that when peeking or poking values of some type the alignment constraint for as given by the function alignmentV is fulfilled",
        "hierarchy": "Data Storable",
        "module": "Data.Storable",
        "name": "peekV",
        "normalized": "Ptr a-\u003eIO a",
        "package": "storable",
        "partial": "",
        "signature": "Ptr a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable.html#v:pokeM",
      "description": {
        "fct-module": "Data.Storable",
        "fct-package": "storable",
        "fct-signature": "a -\u003e Offset ()",
        "fct-source": "src/Data-Storable.html#pokeM",
        "fct-type": "method",
        "title": "pokeM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Storable",
        "module": "Data.Storable",
        "name": "pokeM",
        "normalized": "a-\u003eOffset()",
        "package": "storable",
        "partial": "",
        "signature": "a-\u003eOffset()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable.html#v:pokeV",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the given value to the given memory location.  Alignment\n restrictions might apply; see \u003ccode\u003e\u003ca\u003epeekV\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Storable",
        "fct-package": "storable",
        "fct-signature": "Ptr a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-Storable.html#pokeV",
        "fct-type": "function",
        "title": "pokeV"
      },
      "index": {
        "description": "Write the given value to the given memory location Alignment restrictions might apply see peekV",
        "hierarchy": "Data Storable",
        "module": "Data.Storable",
        "name": "pokeV",
        "normalized": "Ptr a-\u003ea-\u003eIO()",
        "package": "storable",
        "partial": "",
        "signature": "Ptr a-\u003ea-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable.html#v:sizeOfM",
      "description": {
        "fct-module": "Data.Storable",
        "fct-package": "storable",
        "fct-signature": "a -\u003e SizeOf ()",
        "fct-source": "src/Data-Storable.html#sizeOfM",
        "fct-type": "method",
        "title": "sizeOfM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Storable",
        "module": "Data.Storable",
        "name": "sizeOfM",
        "normalized": "a-\u003eSizeOf()",
        "package": "storable",
        "partial": "Of",
        "signature": "a-\u003eSizeOf()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/storable/docs/Data-Storable.html#v:sizeOfV",
      "description": {
        "fct-descr": "\u003cp\u003eComputes the storage requirements (in bytes) of the argument.\n The value of the argument _is_ used.\n\u003c/p\u003e",
        "fct-module": "Data.Storable",
        "fct-package": "storable",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Storable.html#sizeOfV",
        "fct-type": "function",
        "title": "sizeOfV"
      },
      "index": {
        "description": "Computes the storage requirements in bytes of the argument The value of the argument is used",
        "hierarchy": "Data Storable",
        "module": "Data.Storable",
        "name": "sizeOfV",
        "normalized": "a-\u003eInt",
        "package": "storable",
        "partial": "Of",
        "signature": "a-\u003eInt"
      }
    }
  }
]