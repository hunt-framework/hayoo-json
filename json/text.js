[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePacked, unboxed, heap-resident arrays.  Suitable for performance\n critical use, both in terms of large data quantities and high\n speed.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions, e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Text.Array as A\n\u003c/pre\u003e\u003cp\u003eThe names in this module resemble those in the \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e family\n of modules, but are shorter due to the assumption of qualifid\n naming.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Array.html",
        "fct-type": "module",
        "title": "Array"
      },
      "index": {
        "description": "Packed unboxed heap-resident arrays Suitable for performance critical use both in terms of large data quantities and high speed This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import qualified Data.Text.Array as The names in this module resemble those in the Array family of modules but are shorter due to the assumption of qualifid naming",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "Array",
        "normalized": "",
        "package": "text",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eImmutable array type.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Array.html#Array",
        "fct-type": "data",
        "title": "Array"
      },
      "index": {
        "description": "Immutable array type",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "Array",
        "normalized": "",
        "package": "text",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#t:MArray",
      "description": {
        "fct-descr": "\u003cp\u003eMutable array type, for use in the ST monad.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Array.html#MArray",
        "fct-type": "data",
        "title": "MArray"
      },
      "index": {
        "description": "Mutable array type for use in the ST monad",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "MArray",
        "normalized": "",
        "package": "text",
        "partial": "MArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:copyI",
      "description": {
        "fct-descr": "\u003cp\u003eCopy some elements of an immutable array.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "MArray s-\u003e Int-\u003e Array-\u003e Int-\u003e Int-\u003e ST s ()",
        "fct-type": "function",
        "title": "copyI"
      },
      "index": {
        "description": "Copy some elements of an immutable array",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "copyI",
        "normalized": "MArray a-\u003eInt-\u003eArray-\u003eInt-\u003eInt-\u003eST a()",
        "package": "text",
        "partial": "",
        "signature": "MArray s-\u003eInt-\u003eArray-\u003eInt-\u003eInt-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:copyM",
      "description": {
        "fct-descr": "\u003cp\u003eCopy some elements of a mutable array.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "MArray s-\u003e Int-\u003e MArray s-\u003e Int-\u003e Int-\u003e ST s ()",
        "fct-type": "function",
        "title": "copyM"
      },
      "index": {
        "description": "Copy some elements of mutable array",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "copyM",
        "normalized": "MArray a-\u003eInt-\u003eMArray a-\u003eInt-\u003eInt-\u003eST a()",
        "package": "text",
        "partial": "",
        "signature": "MArray s-\u003eInt-\u003eMArray s-\u003eInt-\u003eInt-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty immutable array.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "Array",
        "fct-source": "src/Data-Text-Array.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "An empty immutable array",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "empty",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:equal",
      "description": {
        "fct-descr": "\u003cp\u003eCompare portions of two arrays for equality.  No bounds checking\n is performed.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "Array-\u003e Int-\u003e Array-\u003e Int-\u003e Int-\u003e Bool",
        "fct-type": "function",
        "title": "equal"
      },
      "index": {
        "description": "Compare portions of two arrays for equality No bounds checking is performed",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "equal",
        "normalized": "Array-\u003eInt-\u003eArray-\u003eInt-\u003eInt-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Array-\u003eInt-\u003eArray-\u003eInt-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:new",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an uninitialized mutable array.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "forall s.  Int -\u003e ST s (MArray s)",
        "fct-source": "src/Data-Text-Array.html#new",
        "fct-type": "function",
        "title": "new"
      },
      "index": {
        "description": "Create an uninitialized mutable array",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "new",
        "normalized": "a b Int-\u003eST c(MArray c)",
        "package": "text",
        "partial": "",
        "signature": "forall s. Int-\u003eST s(MArray s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action in the ST monad and return an immutable array of\n its result.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "(forall s.  ST s (MArray s)) -\u003e Array",
        "fct-source": "src/Data-Text-Array.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Run an action in the ST monad and return an immutable array of its result",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "run",
        "normalized": "(a b ST c(MArray c))-\u003eArray",
        "package": "text",
        "partial": "",
        "signature": "(forall s. ST s(MArray s))-\u003eArray"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:run2",
      "description": {
        "fct-descr": "\u003cp\u003eRun an action in the ST monad and return an immutable array of\n its result paired with whatever else the action returns.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "(forall s.  ST s (MArray s, a)) -\u003e (Array, a)",
        "fct-source": "src/Data-Text-Array.html#run2",
        "fct-type": "function",
        "title": "run2"
      },
      "index": {
        "description": "Run an action in the ST monad and return an immutable array of its result paired with whatever else the action returns",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "run2",
        "normalized": "(a b ST c(MArray c,d))-\u003e(Array,d)",
        "package": "text",
        "partial": "",
        "signature": "(forall s. ST s(MArray s,a))-\u003e(Array,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an immutable array to a list.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "Array -\u003e Int -\u003e Int -\u003e [Word16]",
        "fct-source": "src/Data-Text-Array.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert an immutable array to list",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "toList",
        "normalized": "Array-\u003eInt-\u003eInt-\u003e[Word]",
        "package": "text",
        "partial": "List",
        "signature": "Array-\u003eInt-\u003eInt-\u003e[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:unsafeFreeze",
      "description": {
        "fct-descr": "\u003cp\u003eFreeze a mutable array. Do not mutate the \u003ccode\u003e\u003ca\u003eMArray\u003c/a\u003e\u003c/code\u003e afterwards!\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "MArray s -\u003e ST s Array",
        "fct-source": "src/Data-Text-Array.html#unsafeFreeze",
        "fct-type": "function",
        "title": "unsafeFreeze"
      },
      "index": {
        "description": "Freeze mutable array Do not mutate the MArray afterwards",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "unsafeFreeze",
        "normalized": "MArray a-\u003eST a Array",
        "package": "text",
        "partial": "Freeze",
        "signature": "MArray s-\u003eST s Array"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:unsafeIndex",
      "description": {
        "fct-descr": "\u003cp\u003eUnchecked read of an immutable array.  May return garbage or\n crash on an out-of-bounds access.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "Array -\u003e Int -\u003e Word16",
        "fct-source": "src/Data-Text-Array.html#unsafeIndex",
        "fct-type": "function",
        "title": "unsafeIndex"
      },
      "index": {
        "description": "Unchecked read of an immutable array May return garbage or crash on an out-of-bounds access",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "unsafeIndex",
        "normalized": "Array-\u003eInt-\u003eWord",
        "package": "text",
        "partial": "Index",
        "signature": "Array-\u003eInt-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Array.html#v:unsafeWrite",
      "description": {
        "fct-descr": "\u003cp\u003eUnchecked write of a mutable array.  May return garbage or crash\n on an out-of-bounds access.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Array",
        "fct-package": "text",
        "fct-signature": "MArray s -\u003e Int -\u003e Word16 -\u003e ST s ()",
        "fct-source": "src/Data-Text-Array.html#unsafeWrite",
        "fct-type": "function",
        "title": "unsafeWrite"
      },
      "index": {
        "description": "Unchecked write of mutable array May return garbage or crash on an out-of-bounds access",
        "hierarchy": "Data Text Array",
        "module": "Data.Text.Array",
        "name": "unsafeWrite",
        "normalized": "MArray a-\u003eInt-\u003eWord-\u003eST a()",
        "package": "text",
        "partial": "Write",
        "signature": "MArray s-\u003eInt-\u003eWord-\u003eST s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes and functions for dealing with encoding and decoding errors\n in Unicode text.\n\u003c/p\u003e\u003cp\u003eThe standard functions for encoding and decoding text are strict,\n which is to say that they throw exceptions on invalid input.  This\n is often unhelpful on real world input, so alternative functions\n exist that accept custom handlers for dealing with invalid inputs.\n These \u003ccode\u003e\u003ca\u003eOnError\u003c/a\u003e\u003c/code\u003e handlers are normal Haskell functions.  You can use\n one of the presupplied functions in this module, or you can write a\n custom handler of your own.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Encoding-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "Types and functions for dealing with encoding and decoding errors in Unicode text The standard functions for encoding and decoding text are strict which is to say that they throw exceptions on invalid input This is often unhelpful on real world input so alternative functions exist that accept custom handlers for dealing with invalid inputs These OnError handlers are normal Haskell functions You can use one of the presupplied functions in this module or you can write custom handler of your own",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "Error",
        "normalized": "",
        "package": "text",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#t:OnDecodeError",
      "description": {
        "fct-descr": "\u003cp\u003eA handler for a decoding error.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "type",
        "fct-source": "src/Data-Text-Encoding-Error.html#OnDecodeError",
        "fct-type": "type",
        "title": "OnDecodeError"
      },
      "index": {
        "description": "handler for decoding error",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "OnDecodeError",
        "normalized": "",
        "package": "text",
        "partial": "On Decode Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#t:OnEncodeError",
      "description": {
        "fct-descr": "\u003cp\u003eA handler for an encoding error.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "type",
        "fct-source": "src/Data-Text-Encoding-Error.html#OnEncodeError",
        "fct-type": "type",
        "title": "OnEncodeError"
      },
      "index": {
        "description": "handler for an encoding error",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "OnEncodeError",
        "normalized": "",
        "package": "text",
        "partial": "On Encode Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#t:OnError",
      "description": {
        "fct-descr": "\u003cp\u003eFunction type for handling a coding error.  It is supplied with\n two inputs:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e that describes the error.\n\u003c/li\u003e\u003cli\u003e The input value that caused the error.  If the error arose\n   because the end of input was reached or could not be identified\n   precisely, this value will be \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIf the handler returns a value wrapped with \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e, that value will\n be used in the output as the replacement for the invalid input.  If\n it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, no value will be used in the output.\n\u003c/p\u003e\u003cp\u003eShould the handler need to abort processing, it should use \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003ethrow\u003c/a\u003e\u003c/code\u003e an exception (preferably a \u003ccode\u003e\u003ca\u003eUnicodeException\u003c/a\u003e\u003c/code\u003e).  It may\n use the description provided to construct a more helpful error\n report.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "type",
        "fct-source": "src/Data-Text-Encoding-Error.html#OnError",
        "fct-type": "type",
        "title": "OnError"
      },
      "index": {
        "description": "Function type for handling coding error It is supplied with two inputs String that describes the error The input value that caused the error If the error arose because the end of input was reached or could not be identified precisely this value will be Nothing If the handler returns value wrapped with Just that value will be used in the output as the replacement for the invalid input If it returns Nothing no value will be used in the output Should the handler need to abort processing it should use error or throw an exception preferably UnicodeException It may use the description provided to construct more helpful error report",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "OnError",
        "normalized": "",
        "package": "text",
        "partial": "On Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#t:UnicodeException",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception type for representing Unicode encoding errors.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Encoding-Error.html#UnicodeException",
        "fct-type": "data",
        "title": "UnicodeException"
      },
      "index": {
        "description": "An exception type for representing Unicode encoding errors",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "UnicodeException",
        "normalized": "",
        "package": "text",
        "partial": "Unicode Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#v:DecodeError",
      "description": {
        "fct-descr": "\u003cp\u003eCould not decode a byte sequence because it was invalid under\n the given encoding, or ran out of input in mid-decode.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "DecodeError String (Maybe Word8)",
        "fct-source": "src/Data-Text-Encoding-Error.html#UnicodeException",
        "fct-type": "function",
        "title": "DecodeError"
      },
      "index": {
        "description": "Could not decode byte sequence because it was invalid under the given encoding or ran out of input in mid-decode",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "DecodeError",
        "normalized": "",
        "package": "text",
        "partial": "Decode Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#v:EncodeError",
      "description": {
        "fct-descr": "\u003cp\u003eTried to encode a character that could not be represented\n under the given encoding, or ran out of input in mid-encode.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "EncodeError String (Maybe Char)",
        "fct-source": "src/Data-Text-Encoding-Error.html#UnicodeException",
        "fct-type": "function",
        "title": "EncodeError"
      },
      "index": {
        "description": "Tried to encode character that could not be represented under the given encoding or ran out of input in mid-encode",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "EncodeError",
        "normalized": "",
        "package": "text",
        "partial": "Encode Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#v:ignore",
      "description": {
        "fct-descr": "\u003cp\u003eIgnore an invalid input, substituting nothing in the output.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "OnError a b",
        "fct-source": "src/Data-Text-Encoding-Error.html#ignore",
        "fct-type": "function",
        "title": "ignore"
      },
      "index": {
        "description": "Ignore an invalid input substituting nothing in the output",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "ignore",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#v:lenientDecode",
      "description": {
        "fct-descr": "\u003cp\u003eReplace an invalid input byte with the Unicode replacement\n character U+FFFD.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "OnDecodeError",
        "fct-source": "src/Data-Text-Encoding-Error.html#lenientDecode",
        "fct-type": "function",
        "title": "lenientDecode"
      },
      "index": {
        "description": "Replace an invalid input byte with the Unicode replacement character FFFD",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "lenientDecode",
        "normalized": "",
        "package": "text",
        "partial": "Decode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eReplace an invalid input with a valid output.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "b -\u003e OnError a b",
        "fct-source": "src/Data-Text-Encoding-Error.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Replace an invalid input with valid output",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "replace",
        "normalized": "a-\u003eOnError b a",
        "package": "text",
        "partial": "",
        "signature": "b-\u003eOnError a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#v:strictDecode",
      "description": {
        "fct-descr": "\u003cp\u003eThrow a \u003ccode\u003e\u003ca\u003eUnicodeException\u003c/a\u003e\u003c/code\u003e if decoding fails.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "OnDecodeError",
        "fct-source": "src/Data-Text-Encoding-Error.html#strictDecode",
        "fct-type": "function",
        "title": "strictDecode"
      },
      "index": {
        "description": "Throw UnicodeException if decoding fails",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "strictDecode",
        "normalized": "",
        "package": "text",
        "partial": "Decode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding-Error.html#v:strictEncode",
      "description": {
        "fct-descr": "\u003cp\u003eThrow a \u003ccode\u003e\u003ca\u003eUnicodeException\u003c/a\u003e\u003c/code\u003e if encoding fails.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding.Error",
        "fct-package": "text",
        "fct-signature": "OnEncodeError",
        "fct-source": "src/Data-Text-Encoding-Error.html#strictEncode",
        "fct-type": "function",
        "title": "strictEncode"
      },
      "index": {
        "description": "Throw UnicodeException if encoding fails",
        "hierarchy": "Data Text Encoding Error",
        "module": "Data.Text.Encoding.Error",
        "name": "strictEncode",
        "normalized": "",
        "package": "text",
        "partial": "Encode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for converting \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values to and from \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e,\n using several standard encodings.\n\u003c/p\u003e\u003cp\u003eTo gain access to a much larger family of encodings, use the\n \u003ccode\u003etext-icu\u003c/code\u003e package: \u003ca\u003ehttp://hackage.haskell.org/package/text-icu\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Encoding.html",
        "fct-type": "module",
        "title": "Encoding"
      },
      "index": {
        "description": "Functions for converting Text values to and from ByteString using several standard encodings To gain access to much larger family of encodings use the text-icu package http hackage.haskell.org package text-icu",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "Encoding",
        "normalized": "",
        "package": "text",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#t:Decoding",
      "description": {
        "fct-descr": "\u003cp\u003eA stream oriented decoding result.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Encoding.html#Decoding",
        "fct-type": "data",
        "title": "Decoding"
      },
      "index": {
        "description": "stream oriented decoding result",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "Decoding",
        "normalized": "",
        "package": "text",
        "partial": "Decoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:Some",
      "description": {
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "Some Text ByteString (ByteString -\u003e Decoding)",
        "fct-source": "src/Data-Text-Encoding.html#Decoding",
        "fct-type": "function",
        "title": "Some"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "Some",
        "normalized": "Some Text ByteString(ByteString-\u003eDecoding)",
        "package": "text",
        "partial": "Some",
        "signature": "Some Text ByteString(ByteString-\u003eDecoding)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeASCII",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use decodeUtf8 instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003cem\u003eDeprecated\u003c/em\u003e.  Decode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e containing 7-bit ASCII\n encoded text.\n\u003c/p\u003e\u003cp\u003eThis function is deprecated.  Use \u003ccode\u003e\u003ca\u003edecodeLatin1\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeASCII",
        "fct-type": "function",
        "title": "decodeASCII"
      },
      "index": {
        "description": "Deprecated Use decodeUtf8 instead Deprecated Decode ByteString containing bit ASCII encoded text This function is deprecated Use decodeLatin1 instead",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeASCII",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "ASCII",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeLatin1",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e containing Latin-1 (aka ISO-8859-1) encoded text.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edecodeLatin1\u003c/a\u003e\u003c/code\u003e is semantically equivalent to\n  \u003ccode\u003eData.Text.pack . Data.ByteString.Char8.unpack\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeLatin1",
        "fct-type": "function",
        "title": "decodeLatin1"
      },
      "index": {
        "description": "Decode ByteString containing Latin-1 aka ISO-8859-1 encoded text decodeLatin1 is semantically equivalent to Data.Text.pack Data.ByteString.Char8.unpack",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeLatin1",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Latin",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf16BE",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from big endian UTF-16 encoding.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid big endian UTF-16 data, an\n exception will be thrown.  For more control over the handling of\n invalid data, use \u003ccode\u003e\u003ca\u003edecodeUtf16BEWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf16BE",
        "fct-type": "function",
        "title": "decodeUtf16BE"
      },
      "index": {
        "description": "Decode text from big endian UTF-16 encoding If the input contains any invalid big endian UTF-16 data an exception will be thrown For more control over the handling of invalid data use decodeUtf16BEWith",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf16BE",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Utf BE",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf16BEWith",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from big endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf16BEWith",
        "fct-type": "function",
        "title": "decodeUtf16BEWith"
      },
      "index": {
        "description": "Decode text from big endian UTF-16 encoding",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf16BEWith",
        "normalized": "OnDecodeError-\u003eByteString-\u003eText",
        "package": "text",
        "partial": "Utf BEWith",
        "signature": "OnDecodeError-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf16LE",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from little endian UTF-16 encoding.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid little endian UTF-16 data, an\n exception will be thrown.  For more control over the handling of\n invalid data, use \u003ccode\u003e\u003ca\u003edecodeUtf16LEWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf16LE",
        "fct-type": "function",
        "title": "decodeUtf16LE"
      },
      "index": {
        "description": "Decode text from little endian UTF-16 encoding If the input contains any invalid little endian UTF-16 data an exception will be thrown For more control over the handling of invalid data use decodeUtf16LEWith",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf16LE",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Utf LE",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf16LEWith",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from little endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf16LEWith",
        "fct-type": "function",
        "title": "decodeUtf16LEWith"
      },
      "index": {
        "description": "Decode text from little endian UTF-16 encoding",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf16LEWith",
        "normalized": "OnDecodeError-\u003eByteString-\u003eText",
        "package": "text",
        "partial": "Utf LEWith",
        "signature": "OnDecodeError-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf32BE",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from big endian UTF-32 encoding.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid big endian UTF-32 data, an\n exception will be thrown.  For more control over the handling of\n invalid data, use \u003ccode\u003e\u003ca\u003edecodeUtf32BEWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf32BE",
        "fct-type": "function",
        "title": "decodeUtf32BE"
      },
      "index": {
        "description": "Decode text from big endian UTF-32 encoding If the input contains any invalid big endian UTF-32 data an exception will be thrown For more control over the handling of invalid data use decodeUtf32BEWith",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf32BE",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Utf BE",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf32BEWith",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from big endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf32BEWith",
        "fct-type": "function",
        "title": "decodeUtf32BEWith"
      },
      "index": {
        "description": "Decode text from big endian UTF-32 encoding",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf32BEWith",
        "normalized": "OnDecodeError-\u003eByteString-\u003eText",
        "package": "text",
        "partial": "Utf BEWith",
        "signature": "OnDecodeError-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf32LE",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from little endian UTF-32 encoding.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid little endian UTF-32 data, an\n exception will be thrown.  For more control over the handling of\n invalid data, use \u003ccode\u003e\u003ca\u003edecodeUtf32LEWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf32LE",
        "fct-type": "function",
        "title": "decodeUtf32LE"
      },
      "index": {
        "description": "Decode text from little endian UTF-32 encoding If the input contains any invalid little endian UTF-32 data an exception will be thrown For more control over the handling of invalid data use decodeUtf32LEWith",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf32LE",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Utf LE",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf32LEWith",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from little endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf32LEWith",
        "fct-type": "function",
        "title": "decodeUtf32LEWith"
      },
      "index": {
        "description": "Decode text from little endian UTF-32 encoding",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf32LEWith",
        "normalized": "OnDecodeError-\u003eByteString-\u003eText",
        "package": "text",
        "partial": "Utf LEWith",
        "signature": "OnDecodeError-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e containing UTF-8 encoded text that is known\n to be valid.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid UTF-8 data, an exception will be\n thrown that cannot be caught in pure code.  For more control over\n the handling of invalid data, use \u003ccode\u003e\u003ca\u003edecodeUtf8'\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003edecodeUtf8With\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf8",
        "fct-type": "function",
        "title": "decodeUtf8"
      },
      "index": {
        "description": "Decode ByteString containing UTF-8 encoded text that is known to be valid If the input contains any invalid UTF-8 data an exception will be thrown that cannot be caught in pure code For more control over the handling of invalid data use decodeUtf8 or decodeUtf8With",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf8",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Utf",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf8-39-",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e containing UTF-8 encoded text.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid UTF-8 data, the relevant\n exception will be returned, otherwise the decoded text.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Either UnicodeException Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf8%27",
        "fct-type": "function",
        "title": "decodeUtf8'"
      },
      "index": {
        "description": "Decode ByteString containing UTF-8 encoded text If the input contains any invalid UTF-8 data the relevant exception will be returned otherwise the decoded text",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf8'",
        "normalized": "ByteString-\u003eEither UnicodeException Text",
        "package": "text",
        "partial": "Utf",
        "signature": "ByteString-\u003eEither UnicodeException Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:decodeUtf8With",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e containing UTF-8 encoded text.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Encoding.html#decodeUtf8With",
        "fct-type": "function",
        "title": "decodeUtf8With"
      },
      "index": {
        "description": "Decode ByteString containing UTF-8 encoded text",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "decodeUtf8With",
        "normalized": "OnDecodeError-\u003eByteString-\u003eText",
        "package": "text",
        "partial": "Utf With",
        "signature": "OnDecodeError-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:encodeUtf16BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode text using big endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "Text -\u003e ByteString",
        "fct-source": "src/Data-Text-Encoding.html#encodeUtf16BE",
        "fct-type": "function",
        "title": "encodeUtf16BE"
      },
      "index": {
        "description": "Encode text using big endian UTF-16 encoding",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "encodeUtf16BE",
        "normalized": "Text-\u003eByteString",
        "package": "text",
        "partial": "Utf BE",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:encodeUtf16LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode text using little endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "Text -\u003e ByteString",
        "fct-source": "src/Data-Text-Encoding.html#encodeUtf16LE",
        "fct-type": "function",
        "title": "encodeUtf16LE"
      },
      "index": {
        "description": "Encode text using little endian UTF-16 encoding",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "encodeUtf16LE",
        "normalized": "Text-\u003eByteString",
        "package": "text",
        "partial": "Utf LE",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:encodeUtf32BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode text using big endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "Text -\u003e ByteString",
        "fct-source": "src/Data-Text-Encoding.html#encodeUtf32BE",
        "fct-type": "function",
        "title": "encodeUtf32BE"
      },
      "index": {
        "description": "Encode text using big endian UTF-32 encoding",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "encodeUtf32BE",
        "normalized": "Text-\u003eByteString",
        "package": "text",
        "partial": "Utf BE",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:encodeUtf32LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode text using little endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "Text -\u003e ByteString",
        "fct-source": "src/Data-Text-Encoding.html#encodeUtf32LE",
        "fct-type": "function",
        "title": "encodeUtf32LE"
      },
      "index": {
        "description": "Encode text using little endian UTF-32 encoding",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "encodeUtf32LE",
        "normalized": "Text-\u003eByteString",
        "package": "text",
        "partial": "Utf LE",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:encodeUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eEncode text using UTF-8 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "Text -\u003e ByteString",
        "fct-source": "src/Data-Text-Encoding.html#encodeUtf8",
        "fct-type": "function",
        "title": "encodeUtf8"
      },
      "index": {
        "description": "Encode text using UTF-8 encoding",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "encodeUtf8",
        "normalized": "Text-\u003eByteString",
        "package": "text",
        "partial": "Utf",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:streamDecodeUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eDecode, in a stream oriented way, a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e containing UTF-8\n encoded text that is known to be valid.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid UTF-8 data, an exception will be\n thrown (either by this function or a continuation) that cannot be\n caught in pure code.  For more control over the handling of invalid\n data, use \u003ccode\u003e\u003ca\u003estreamDecodeUtf8With\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Decoding",
        "fct-source": "src/Data-Text-Encoding.html#streamDecodeUtf8",
        "fct-type": "function",
        "title": "streamDecodeUtf8"
      },
      "index": {
        "description": "Decode in stream oriented way ByteString containing UTF-8 encoded text that is known to be valid If the input contains any invalid UTF-8 data an exception will be thrown either by this function or continuation that cannot be caught in pure code For more control over the handling of invalid data use streamDecodeUtf8With",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "streamDecodeUtf8",
        "normalized": "ByteString-\u003eDecoding",
        "package": "text",
        "partial": "Decode Utf",
        "signature": "ByteString-\u003eDecoding"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Encoding.html#v:streamDecodeUtf8With",
      "description": {
        "fct-descr": "\u003cp\u003eDecode, in a stream oriented way, a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e containing UTF-8\n encoded text.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Decoding",
        "fct-source": "src/Data-Text-Encoding.html#streamDecodeUtf8With",
        "fct-type": "function",
        "title": "streamDecodeUtf8With"
      },
      "index": {
        "description": "Decode in stream oriented way ByteString containing UTF-8 encoded text",
        "hierarchy": "Data Text Encoding",
        "module": "Data.Text.Encoding",
        "name": "streamDecodeUtf8With",
        "normalized": "OnDecodeError-\u003eByteString-\u003eDecoding",
        "package": "text",
        "partial": "Decode Utf With",
        "signature": "OnDecodeError-\u003eByteString-\u003eDecoding"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for using \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e data with native code via the Haskell\n foreign function interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Foreign.html",
        "fct-type": "module",
        "title": "Foreign"
      },
      "index": {
        "description": "Support for using Text data with native code via the Haskell foreign function interface",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "Foreign",
        "normalized": "",
        "package": "text",
        "partial": "Foreign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#t:I16",
      "description": {
        "fct-descr": "\u003cp\u003eA type representing a number of UTF-16 code units.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Foreign.html#I16",
        "fct-type": "data",
        "title": "I16"
      },
      "index": {
        "description": "type representing number of UTF-16 code units",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "I16",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#v:asForeignPtr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Make a mutable copy of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "Text -\u003e IO (ForeignPtr Word16, I16)",
        "fct-source": "src/Data-Text-Foreign.html#asForeignPtr",
        "fct-type": "function",
        "title": "asForeignPtr"
      },
      "index": {
        "description": "Make mutable copy of Text",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "asForeignPtr",
        "normalized": "Text-\u003eIO(ForeignPtr Word,I)",
        "package": "text",
        "partial": "Foreign Ptr",
        "signature": "Text-\u003eIO(ForeignPtr Word,I)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#v:dropWord16",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return the suffix of the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, with \u003ccode\u003en\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e units\n dropped from its beginning.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003en\u003c/code\u003e would cause the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to begin inside a surrogate pair, the\n beginning of the suffix will be advanced by one additional \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e\n unit to maintain its validity.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "I16 -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Foreign.html#dropWord16",
        "fct-type": "function",
        "title": "dropWord16"
      },
      "index": {
        "description": "Return the suffix of the Text with Word16 units dropped from its beginning If would cause the Text to begin inside surrogate pair the beginning of the suffix will be advanced by one additional Word16 unit to maintain its validity",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "dropWord16",
        "normalized": "I-\u003eText-\u003eText",
        "package": "text",
        "partial": "Word",
        "signature": "I-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#v:fromPtr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Create a new \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e by copying the\n contents of the array.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "Ptr Word16-\u003e I16-\u003e IO Text",
        "fct-type": "function",
        "title": "fromPtr"
      },
      "index": {
        "description": "Create new Text from Ptr Word16 by copying the contents of the array",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "fromPtr",
        "normalized": "Ptr Word-\u003eI-\u003eIO Text",
        "package": "text",
        "partial": "Ptr",
        "signature": "Ptr Word-\u003eI-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#v:lengthWord16",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return the length of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e in units of \u003ccode\u003eWord16\u003c/code\u003e.  This\n is useful for sizing a target array appropriately before using\n \u003ccode\u003eunsafeCopyToPtr\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int",
        "fct-source": "src/Data-Text-Unsafe.html#lengthWord16",
        "fct-type": "function",
        "title": "lengthWord16"
      },
      "index": {
        "description": "Return the length of Text in units of Word16 This is useful for sizing target array appropriately before using unsafeCopyToPtr",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "lengthWord16",
        "normalized": "Text-\u003eInt",
        "package": "text",
        "partial": "Word",
        "signature": "Text-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#v:peekCStringLen",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Decode a C string with explicit length, which is assumed\n to have been encoded as UTF-8. If decoding fails, a\n \u003ccode\u003eUnicodeException\u003c/code\u003e is thrown.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "CStringLen -\u003e IO Text",
        "fct-source": "src/Data-Text-Foreign.html#peekCStringLen",
        "fct-type": "function",
        "title": "peekCStringLen"
      },
      "index": {
        "description": "Decode string with explicit length which is assumed to have been encoded as UTF-8 If decoding fails UnicodeException is thrown",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "peekCStringLen",
        "normalized": "CStringLen-\u003eIO Text",
        "package": "text",
        "partial": "CString Len",
        "signature": "CStringLen-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#v:takeWord16",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return the prefix of the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003en\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e units in\n length.\n\u003c/p\u003e\u003cp\u003eIf \u003ccode\u003en\u003c/code\u003e would cause the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to end inside a surrogate pair, the\n end of the prefix will be advanced by one additional \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003e unit\n to maintain its validity.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "I16 -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Foreign.html#takeWord16",
        "fct-type": "function",
        "title": "takeWord16"
      },
      "index": {
        "description": "Return the prefix of the Text of Word16 units in length If would cause the Text to end inside surrogate pair the end of the prefix will be advanced by one additional Word16 unit to maintain its validity",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "takeWord16",
        "normalized": "I-\u003eText-\u003eText",
        "package": "text",
        "partial": "Word",
        "signature": "I-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#v:unsafeCopyToPtr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Copy a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to an array.  The array is assumed to be big\n enough to hold the contents of the entire \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Ptr Word16 -\u003e IO ()",
        "fct-source": "src/Data-Text-Foreign.html#unsafeCopyToPtr",
        "fct-type": "function",
        "title": "unsafeCopyToPtr"
      },
      "index": {
        "description": "Copy Text to an array The array is assumed to be big enough to hold the contents of the entire Text",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "unsafeCopyToPtr",
        "normalized": "Text-\u003ePtr Word-\u003eIO()",
        "package": "text",
        "partial": "Copy To Ptr",
        "signature": "Text-\u003ePtr Word-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#v:useAsPtr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Perform an action on a temporary, mutable copy of a\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  The copy is freed as soon as the action returns.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "Text -\u003e (Ptr Word16 -\u003e I16 -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Data-Text-Foreign.html#useAsPtr",
        "fct-type": "function",
        "title": "useAsPtr"
      },
      "index": {
        "description": "Perform an action on temporary mutable copy of Text The copy is freed as soon as the action returns",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "useAsPtr",
        "normalized": "Text-\u003e(Ptr Word-\u003eI-\u003eIO a)-\u003eIO a",
        "package": "text",
        "partial": "As Ptr",
        "signature": "Text-\u003e(Ptr Word-\u003eI-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Foreign.html#v:withCStringLen",
      "description": {
        "fct-descr": "\u003cp\u003eMarshal a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into a C string encoded as UTF-8 in temporary\n storage, with explicit length information. The encoded string may\n contain NUL bytes, and is not followed by a trailing NUL byte.\n\u003c/p\u003e\u003cp\u003eThe temporary storage is freed when the subcomputation terminates\n (either normally or via an exception), so the pointer to the\n temporary storage must \u003cem\u003enot\u003c/em\u003e be used after this function returns.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Foreign",
        "fct-package": "text",
        "fct-signature": "Text -\u003e (CStringLen -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Data-Text-Foreign.html#withCStringLen",
        "fct-type": "function",
        "title": "withCStringLen"
      },
      "index": {
        "description": "Marshal Text into string encoded as UTF-8 in temporary storage with explicit length information The encoded string may contain NUL bytes and is not followed by trailing NUL byte The temporary storage is freed when the subcomputation terminates either normally or via an exception so the pointer to the temporary storage must not be used after this function returns",
        "hierarchy": "Data Text Foreign",
        "module": "Data.Text.Foreign",
        "name": "withCStringLen",
        "normalized": "Text-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
        "package": "text",
        "partial": "CString Len",
        "signature": "Text-\u003e(CStringLen-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient locale-sensitive support for text I/O.\n\u003c/p\u003e\u003cp\u003eSkip past the synopsis for some important notes on performance and\n portability across different versions of GHC.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "Efficient locale-sensitive support for text Skip past the synopsis for some important notes on performance and portability across different versions of GHC",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "IO",
        "normalized": "",
        "package": "text",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:appendFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string the end of a file.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "FilePath -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "Write string the end of file",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "appendFile",
        "normalized": "FilePath-\u003eText-\u003eIO()",
        "package": "text",
        "partial": "File",
        "signature": "FilePath-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:getContents",
      "description": {
        "fct-descr": "\u003cp\u003eRead all user input on \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e as a single string.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "IO Text",
        "fct-source": "src/Data-Text-IO.html#getContents",
        "fct-type": "function",
        "title": "getContents"
      },
      "index": {
        "description": "Read all user input on stdin as single string",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "getContents",
        "normalized": "",
        "package": "text",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:getLine",
      "description": {
        "fct-descr": "\u003cp\u003eRead a single line of user input from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "IO Text",
        "fct-source": "src/Data-Text-IO.html#getLine",
        "fct-type": "function",
        "title": "getLine"
      },
      "index": {
        "description": "Read single line of user input from stdin",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "getLine",
        "normalized": "",
        "package": "text",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:hGetChunk",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eExperimental.\u003c/em\u003e Read a single chunk of strict text from a\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. The size of the chunk depends on the amount of input\n currently buffered.\n\u003c/p\u003e\u003cp\u003eThis function blocks only if there is no data available, and EOF\n has not yet been reached. Once EOF is reached, this function\n returns an empty string instead of throwing an exception.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "Handle -\u003e IO Text",
        "fct-source": "src/Data-Text-IO.html#hGetChunk",
        "fct-type": "function",
        "title": "hGetChunk"
      },
      "index": {
        "description": "Experimental Read single chunk of strict text from Handle The size of the chunk depends on the amount of input currently buffered This function blocks only if there is no data available and EOF has not yet been reached Once EOF is reached this function returns an empty string instead of throwing an exception",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "hGetChunk",
        "normalized": "Handle-\u003eIO Text",
        "package": "text",
        "partial": "Get Chunk",
        "signature": "Handle-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:hGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eRead the remaining contents of a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e as a string.  The\n \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e is closed once the contents have been read, or if an\n exception is thrown.\n\u003c/p\u003e\u003cp\u003eInternally, this function reads a chunk at a time from the\n lower-level buffering abstraction, and concatenates the chunks into\n a single string once the entire file has been read.\n\u003c/p\u003e\u003cp\u003eAs a result, it requires approximately twice as much memory as its\n result to construct its result.  For files more than a half of\n available RAM in size, this may result in memory exhaustion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "Handle -\u003e IO Text",
        "fct-source": "src/Data-Text-IO.html#hGetContents",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "Read the remaining contents of Handle as string The Handle is closed once the contents have been read or if an exception is thrown Internally this function reads chunk at time from the lower-level buffering abstraction and concatenates the chunks into single string once the entire file has been read As result it requires approximately twice as much memory as its result to construct its result For files more than half of available RAM in size this may result in memory exhaustion",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "hGetContents",
        "normalized": "Handle-\u003eIO Text",
        "package": "text",
        "partial": "Get Contents",
        "signature": "Handle-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:hGetLine",
      "description": {
        "fct-descr": "\u003cp\u003eRead a single line from a handle.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "Handle -\u003e IO Text",
        "fct-source": "src/Data-Text-IO.html#hGetLine",
        "fct-type": "function",
        "title": "hGetLine"
      },
      "index": {
        "description": "Read single line from handle",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "hGetLine",
        "normalized": "Handle-\u003eIO Text",
        "package": "text",
        "partial": "Get Line",
        "signature": "Handle-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:hPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to a handle.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "Handle -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO.html#hPutStr",
        "fct-type": "function",
        "title": "hPutStr"
      },
      "index": {
        "description": "Write string to handle",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "hPutStr",
        "normalized": "Handle-\u003eText-\u003eIO()",
        "package": "text",
        "partial": "Put Str",
        "signature": "Handle-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:hPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to a handle, followed by a newline.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "Handle -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO.html#hPutStrLn",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "Write string to handle followed by newline",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "hPutStrLn",
        "normalized": "Handle-\u003eText-\u003eIO()",
        "package": "text",
        "partial": "Put Str Ln",
        "signature": "Handle-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:interact",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003eText -\u003e Text\u003c/code\u003e\n as its argument. The entire input from the standard input device is\n passed to this function as its argument, and the resulting string\n is output on the standard output device.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "(Text -\u003e Text) -\u003e IO ()",
        "fct-source": "src/Data-Text-IO.html#interact",
        "fct-type": "function",
        "title": "interact"
      },
      "index": {
        "description": "The interact function takes function of type Text Text as its argument The entire input from the standard input device is passed to this function as its argument and the resulting string is output on the standard output device",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "interact",
        "normalized": "(Text-\u003eText)-\u003eIO()",
        "package": "text",
        "partial": "",
        "signature": "(Text-\u003eText)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:putStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO.html#putStr",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "Write string to stdout",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "putStr",
        "normalized": "Text-\u003eIO()",
        "package": "text",
        "partial": "Str",
        "signature": "Text-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:putStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e, followed by a newline.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "Write string to stdout followed by newline",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "putStrLn",
        "normalized": "Text-\u003eIO()",
        "package": "text",
        "partial": "Str Ln",
        "signature": "Text-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and returns the contents of\n the file as a string.  The entire file is read strictly, as with\n \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "FilePath -\u003e IO Text",
        "fct-source": "src/Data-Text-IO.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "The readFile function reads file and returns the contents of the file as string The entire file is read strictly as with getContents",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO Text",
        "package": "text",
        "partial": "File",
        "signature": "FilePath-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-IO.html#v:writeFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to a file.  The file is truncated to zero length\n before writing begins.\n\u003c/p\u003e",
        "fct-module": "Data.Text.IO",
        "fct-package": "text",
        "fct-signature": "FilePath -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-IO.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "Write string to file The file is truncated to zero length before writing begins",
        "hierarchy": "Data Text IO",
        "module": "Data.Text.IO",
        "name": "writeFile",
        "normalized": "FilePath-\u003eText-\u003eIO()",
        "package": "text",
        "partial": "File",
        "signature": "FilePath-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder-Functions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eUseful functions and combinators.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Builder.Functions",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Builder-Functions.html",
        "fct-type": "module",
        "title": "Functions"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Useful functions and combinators",
        "hierarchy": "Data Text Internal Builder Functions",
        "module": "Data.Text.Internal.Builder.Functions",
        "name": "Functions",
        "normalized": "",
        "package": "text",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder-Functions.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe normal \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e function with right associativity instead of\n left.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Builder.Functions",
        "fct-package": "text",
        "fct-signature": "Builder -\u003e Builder -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder-Functions.html#%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "The normal mappend function with right associativity instead of left",
        "hierarchy": "Data Text Internal Builder Functions",
        "module": "Data.Text.Internal.Builder.Functions",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "Builder-\u003eBuilder-\u003eBuilder",
        "package": "text",
        "partial": "",
        "signature": "Builder-\u003eBuilder-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder-Functions.html#v:i2d",
      "description": {
        "fct-descr": "\u003cp\u003eUnsafe conversion for decimal digits.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Builder.Functions",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Builder-Functions.html#i2d",
        "fct-type": "function",
        "title": "i2d"
      },
      "index": {
        "description": "Unsafe conversion for decimal digits",
        "hierarchy": "Data Text Internal Builder Functions",
        "module": "Data.Text.Internal.Builder.Functions",
        "name": "i2d",
        "normalized": "Int-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder-Int-Digits.html#",
      "description": {
        "fct-module": "Data.Text.Internal.Builder.Int.Digits",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Builder-Int-Digits.html",
        "fct-type": "module",
        "title": "Digits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Builder Int Digits",
        "module": "Data.Text.Internal.Builder.Int.Digits",
        "name": "Digits",
        "normalized": "",
        "package": "text",
        "partial": "Digits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder-Int-Digits.html#v:digits",
      "description": {
        "fct-module": "Data.Text.Internal.Builder.Int.Digits",
        "fct-package": "text",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-Text-Internal-Builder-Int-Digits.html#digits",
        "fct-type": "function",
        "title": "digits"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Builder Int Digits",
        "module": "Data.Text.Internal.Builder.Int.Digits",
        "name": "digits",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder-RealFloat-Functions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Builder.RealFloat.Functions",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Builder-RealFloat-Functions.html",
        "fct-type": "module",
        "title": "Functions"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk",
        "hierarchy": "Data Text Internal Builder RealFloat Functions",
        "module": "Data.Text.Internal.Builder.RealFloat.Functions",
        "name": "Functions",
        "normalized": "",
        "package": "text",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder-RealFloat-Functions.html#v:roundTo",
      "description": {
        "fct-module": "Data.Text.Internal.Builder.RealFloat.Functions",
        "fct-package": "text",
        "fct-signature": "Int -\u003e [Int] -\u003e (Int, [Int])",
        "fct-source": "src/Data-Text-Internal-Builder-RealFloat-Functions.html#roundTo",
        "fct-type": "function",
        "title": "roundTo"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Builder RealFloat Functions",
        "module": "Data.Text.Internal.Builder.RealFloat.Functions",
        "name": "roundTo",
        "normalized": "Int-\u003e[Int]-\u003e(Int,[Int])",
        "package": "text",
        "partial": "To",
        "signature": "Int-\u003e[Int]-\u003e(Int,[Int])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eEfficient construction of lazy \u003ccode\u003eText\u003c/code\u003e values.  The principal\n operations on a \u003ccode\u003eBuilder\u003c/code\u003e are \u003ccode\u003esingleton\u003c/code\u003e, \u003ccode\u003efromText\u003c/code\u003e, and\n \u003ccode\u003efromLazyText\u003c/code\u003e, which construct new builders, and \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e, which\n concatenates two builders.\n\u003c/p\u003e\u003cp\u003eTo get maximum performance when building lazy \u003ccode\u003eText\u003c/code\u003e values using a\n builder, associate \u003ccode\u003emappend\u003c/code\u003e calls to the right.  For example,\n prefer\n\u003c/p\u003e\u003cpre\u003e singleton 'a' `mappend` (singleton 'b' `mappend` singleton 'c')\n\u003c/pre\u003e\u003cp\u003eto\n\u003c/p\u003e\u003cpre\u003e singleton 'a' `mappend` singleton 'b' `mappend` singleton 'c'\n\u003c/pre\u003e\u003cp\u003eas the latter associates \u003ccode\u003emappend\u003c/code\u003e to the left.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Efficient construction of lazy Text values The principal operations on Builder are singleton fromText and fromLazyText which construct new builders and mappend which concatenates two builders To get maximum performance when building lazy Text values using builder associate mappend calls to the right For example prefer singleton mappend singleton mappend singleton to singleton mappend singleton mappend singleton as the latter associates mappend to the left",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "text",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#t:Builder",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eBuilder\u003c/code\u003e is an efficient way to build lazy \u003ccode\u003eText\u003c/code\u003e values.\n There are several functions for constructing builders, but only one\n to inspect them: to extract any data, you have to turn them into\n lazy \u003ccode\u003eText\u003c/code\u003e values using \u003ccode\u003etoLazyText\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInternally, a builder constructs a lazy \u003ccode\u003eText\u003c/code\u003e by filling arrays\n piece by piece.  As each buffer is filled, it is 'popped' off, to\n become a new chunk of the resulting lazy \u003ccode\u003eText\u003c/code\u003e.  All this is\n hidden from the user of the \u003ccode\u003eBuilder\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Builder.html#Builder",
        "fct-type": "data",
        "title": "Builder"
      },
      "index": {
        "description": "Builder is an efficient way to build lazy Text values There are several functions for constructing builders but only one to inspect them to extract any data you have to turn them into lazy Text values using toLazyText Internally builder constructs lazy Text by filling arrays piece by piece As each buffer is filled it is popped off to become new chunk of the resulting lazy Text All this is hidden from the user of the Builder",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "text",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#v:append-39-",
      "description": {
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "Builder -\u003e Builder -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#append%27",
        "fct-type": "function",
        "title": "append'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "append'",
        "normalized": "Builder-\u003eBuilder-\u003eBuilder",
        "package": "text",
        "partial": "",
        "signature": "Builder-\u003eBuilder-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#v:ensureFree",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure that there are at least \u003ccode\u003en\u003c/code\u003e many elements available.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#ensureFree",
        "fct-type": "function",
        "title": "ensureFree"
      },
      "index": {
        "description": "Ensure that there are at least many elements available",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "ensureFree",
        "normalized": "Int-\u003eBuilder",
        "package": "text",
        "partial": "Free",
        "signature": "Int-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Pop the strict \u003ccode\u003eText\u003c/code\u003e we have constructed so far, if any,\n yielding a new chunk in the result lazy \u003ccode\u003eText\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Pop the strict Text we have constructed so far if any yielding new chunk in the result lazy Text",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "flush",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#v:fromLazyText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A \u003ccode\u003eBuilder\u003c/code\u003e taking a lazy \u003ccode\u003eText\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyText\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromLazyText\u003c/a\u003e\u003c/code\u003e t) = t\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#fromLazyText",
        "fct-type": "function",
        "title": "fromLazyText"
      },
      "index": {
        "description": "Builder taking lazy Text satisfying toLazyText fromLazyText",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "fromLazyText",
        "normalized": "Text-\u003eBuilder",
        "package": "text",
        "partial": "Lazy Text",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a \u003ccode\u003eString\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyText\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e s) = \u003ccode\u003e\u003ca\u003efromChunks\u003c/a\u003e\u003c/code\u003e [S.pack s]\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "String -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "Builder taking String satisfying toLazyText fromString fromChunks S.pack",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "fromString",
        "normalized": "String-\u003eBuilder",
        "package": "text",
        "partial": "String",
        "signature": "String-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#v:fromText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A \u003ccode\u003eBuilder\u003c/code\u003e taking a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyText\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromText\u003c/a\u003e\u003c/code\u003e t) = \u003ccode\u003e\u003ca\u003efromChunks\u003c/a\u003e\u003c/code\u003e [t]\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#fromText",
        "fct-type": "function",
        "title": "fromText"
      },
      "index": {
        "description": "Builder taking Text satisfying toLazyText fromText fromChunks",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "fromText",
        "normalized": "Text-\u003eBuilder",
        "package": "text",
        "partial": "Text",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A \u003ccode\u003eBuilder\u003c/code\u003e taking a single character, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyText\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e c) = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e c\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Builder taking single character satisfying toLazyText singleton singleton",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "singleton",
        "normalized": "Char-\u003eBuilder",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#v:toLazyText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Extract a lazy \u003ccode\u003eText\u003c/code\u003e from a \u003ccode\u003eBuilder\u003c/code\u003e with a default\n buffer size.  The construction work takes place if and when the\n relevant part of the lazy \u003ccode\u003eText\u003c/code\u003e is demanded.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "Builder -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Builder.html#toLazyText",
        "fct-type": "function",
        "title": "toLazyText"
      },
      "index": {
        "description": "Extract lazy Text from Builder with default buffer size The construction work takes place if and when the relevant part of the lazy Text is demanded",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "toLazyText",
        "normalized": "Builder-\u003eText",
        "package": "text",
        "partial": "Lazy Text",
        "signature": "Builder-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#v:toLazyTextWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Extract a lazy \u003ccode\u003eText\u003c/code\u003e from a \u003ccode\u003eBuilder\u003c/code\u003e, using the given\n size for the initial buffer.  The construction work takes place if\n and when the relevant part of the lazy \u003ccode\u003eText\u003c/code\u003e is demanded.\n\u003c/p\u003e\u003cp\u003eIf the initial buffer is too small to hold all data, subsequent\n buffers will be the default buffer size.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Builder -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Builder.html#toLazyTextWith",
        "fct-type": "function",
        "title": "toLazyTextWith"
      },
      "index": {
        "description": "Extract lazy Text from Builder using the given size for the initial buffer The construction work takes place if and when the relevant part of the lazy Text is demanded If the initial buffer is too small to hold all data subsequent buffers will be the default buffer size",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "toLazyTextWith",
        "normalized": "Int-\u003eBuilder-\u003eText",
        "package": "text",
        "partial": "Lazy Text With",
        "signature": "Int-\u003eBuilder-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Builder.html#v:writeN",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure that \u003ccode\u003en\u003c/code\u003e many elements are available, and then use \u003ccode\u003ef\u003c/code\u003e to\n write some elements into the memory.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Builder",
        "fct-package": "text",
        "fct-signature": "Int -\u003e (forall s.  MArray s -\u003e Int -\u003e ST s ()) -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#writeN",
        "fct-type": "function",
        "title": "writeN"
      },
      "index": {
        "description": "Ensure that many elements are available and then use to write some elements into the memory",
        "hierarchy": "Data Text Internal Builder",
        "module": "Data.Text.Internal.Builder",
        "name": "writeN",
        "normalized": "Int-\u003e(a b MArray c-\u003eInt-\u003eST c())-\u003eBuilder",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003e(forall s. MArray s-\u003eInt-\u003eST s())-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion-Common.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eFusible \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e-oriented functions for converting between \u003ccode\u003eText\u003c/code\u003e\n and several common encodings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Use at your own risk Fusible Stream oriented functions for converting between Text and several common encodings",
        "hierarchy": "Data Text Internal Encoding Fusion Common",
        "module": "Data.Text.Internal.Encoding.Fusion.Common",
        "name": "Common",
        "normalized": "",
        "package": "text",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion-Common.html#v:restreamUtf16BE",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Word8",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion-Common.html#restreamUtf16BE",
        "fct-type": "function",
        "title": "restreamUtf16BE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Fusion Common",
        "module": "Data.Text.Internal.Encoding.Fusion.Common",
        "name": "restreamUtf16BE",
        "normalized": "Stream Char-\u003eStream Word",
        "package": "text",
        "partial": "Utf BE",
        "signature": "Stream Char-\u003eStream Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion-Common.html#v:restreamUtf16LE",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Word8",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion-Common.html#restreamUtf16LE",
        "fct-type": "function",
        "title": "restreamUtf16LE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Fusion Common",
        "module": "Data.Text.Internal.Encoding.Fusion.Common",
        "name": "restreamUtf16LE",
        "normalized": "Stream Char-\u003eStream Word",
        "package": "text",
        "partial": "Utf LE",
        "signature": "Stream Char-\u003eStream Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion-Common.html#v:restreamUtf32BE",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Word8",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion-Common.html#restreamUtf32BE",
        "fct-type": "function",
        "title": "restreamUtf32BE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Fusion Common",
        "module": "Data.Text.Internal.Encoding.Fusion.Common",
        "name": "restreamUtf32BE",
        "normalized": "Stream Char-\u003eStream Word",
        "package": "text",
        "partial": "Utf BE",
        "signature": "Stream Char-\u003eStream Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion-Common.html#v:restreamUtf32LE",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Word8",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion-Common.html#restreamUtf32LE",
        "fct-type": "function",
        "title": "restreamUtf32LE"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Fusion Common",
        "module": "Data.Text.Internal.Encoding.Fusion.Common",
        "name": "restreamUtf32LE",
        "normalized": "Stream Char-\u003eStream Word",
        "package": "text",
        "partial": "Utf LE",
        "signature": "Stream Char-\u003eStream Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eFusible \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e-oriented functions for converting between \u003ccode\u003eText\u003c/code\u003e\n and several common encodings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion.html",
        "fct-type": "module",
        "title": "Fusion"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Fusible Stream oriented functions for converting between Text and several common encodings",
        "hierarchy": "Data Text Internal Encoding Fusion",
        "module": "Data.Text.Internal.Encoding.Fusion",
        "name": "Fusion",
        "normalized": "",
        "package": "text",
        "partial": "Fusion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion.html#v:streamASCII",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Do not use this function\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion.html#streamASCII",
        "fct-type": "function",
        "title": "streamASCII"
      },
      "index": {
        "description": "Deprecated Do not use this function",
        "hierarchy": "Data Text Internal Encoding Fusion",
        "module": "Data.Text.Internal.Encoding.Fusion",
        "name": "streamASCII",
        "normalized": "ByteString-\u003eStream Char",
        "package": "text",
        "partial": "ASCII",
        "signature": "ByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion.html#v:streamUtf16BE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', using big\n endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion.html#streamUtf16BE",
        "fct-type": "function",
        "title": "streamUtf16BE"
      },
      "index": {
        "description": "Convert ByteString into Stream Char using big endian UTF-16 encoding",
        "hierarchy": "Data Text Internal Encoding Fusion",
        "module": "Data.Text.Internal.Encoding.Fusion",
        "name": "streamUtf16BE",
        "normalized": "OnDecodeError-\u003eByteString-\u003eStream Char",
        "package": "text",
        "partial": "Utf BE",
        "signature": "OnDecodeError-\u003eByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion.html#v:streamUtf16LE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', using little\n endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion.html#streamUtf16LE",
        "fct-type": "function",
        "title": "streamUtf16LE"
      },
      "index": {
        "description": "Convert ByteString into Stream Char using little endian UTF-16 encoding",
        "hierarchy": "Data Text Internal Encoding Fusion",
        "module": "Data.Text.Internal.Encoding.Fusion",
        "name": "streamUtf16LE",
        "normalized": "OnDecodeError-\u003eByteString-\u003eStream Char",
        "package": "text",
        "partial": "Utf LE",
        "signature": "OnDecodeError-\u003eByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion.html#v:streamUtf32BE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', using big\n endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion.html#streamUtf32BE",
        "fct-type": "function",
        "title": "streamUtf32BE"
      },
      "index": {
        "description": "Convert ByteString into Stream Char using big endian UTF-32 encoding",
        "hierarchy": "Data Text Internal Encoding Fusion",
        "module": "Data.Text.Internal.Encoding.Fusion",
        "name": "streamUtf32BE",
        "normalized": "OnDecodeError-\u003eByteString-\u003eStream Char",
        "package": "text",
        "partial": "Utf BE",
        "signature": "OnDecodeError-\u003eByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion.html#v:streamUtf32LE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', using little\n endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion.html#streamUtf32LE",
        "fct-type": "function",
        "title": "streamUtf32LE"
      },
      "index": {
        "description": "Convert ByteString into Stream Char using little endian UTF-32 encoding",
        "hierarchy": "Data Text Internal Encoding Fusion",
        "module": "Data.Text.Internal.Encoding.Fusion",
        "name": "streamUtf32LE",
        "normalized": "OnDecodeError-\u003eByteString-\u003eStream Char",
        "package": "text",
        "partial": "Utf LE",
        "signature": "OnDecodeError-\u003eByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion.html#v:streamUtf8",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', using UTF-8\n encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion.html#streamUtf8",
        "fct-type": "function",
        "title": "streamUtf8"
      },
      "index": {
        "description": "Convert ByteString into Stream Char using UTF-8 encoding",
        "hierarchy": "Data Text Internal Encoding Fusion",
        "module": "Data.Text.Internal.Encoding.Fusion",
        "name": "streamUtf8",
        "normalized": "OnDecodeError-\u003eByteString-\u003eStream Char",
        "package": "text",
        "partial": "Utf",
        "signature": "OnDecodeError-\u003eByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Fusion.html#v:unstream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "Stream Word8 -\u003e ByteString",
        "fct-source": "src/Data-Text-Internal-Encoding-Fusion.html#unstream",
        "fct-type": "function",
        "title": "unstream"
      },
      "index": {
        "description": "Convert Stream Word8 to ByteString",
        "hierarchy": "Data Text Internal Encoding Fusion",
        "module": "Data.Text.Internal.Encoding.Fusion",
        "name": "unstream",
        "normalized": "Stream Word-\u003eByteString",
        "package": "text",
        "partial": "",
        "signature": "Stream Word-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf16.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eBasic UTF-16 validation and character manipulation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Utf16",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf16.html",
        "fct-type": "module",
        "title": "Utf16"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Basic UTF-16 validation and character manipulation",
        "hierarchy": "Data Text Internal Encoding Utf16",
        "module": "Data.Text.Internal.Encoding.Utf16",
        "name": "Utf16",
        "normalized": "",
        "package": "text",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf16.html#v:chr2",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf16",
        "fct-package": "text",
        "fct-signature": "Word16 -\u003e Word16 -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf16.html#chr2",
        "fct-type": "function",
        "title": "chr2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf16",
        "module": "Data.Text.Internal.Encoding.Utf16",
        "name": "chr2",
        "normalized": "Word-\u003eWord-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf16.html#v:validate1",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf16",
        "fct-package": "text",
        "fct-signature": "Word16 -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf16.html#validate1",
        "fct-type": "function",
        "title": "validate1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf16",
        "module": "Data.Text.Internal.Encoding.Utf16",
        "name": "validate1",
        "normalized": "Word-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf16.html#v:validate2",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf16",
        "fct-package": "text",
        "fct-signature": "Word16 -\u003e Word16 -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf16.html#validate2",
        "fct-type": "function",
        "title": "validate2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf16",
        "module": "Data.Text.Internal.Encoding.Utf16",
        "name": "validate2",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf32.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eBasic UTF-32 validation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Utf32",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf32.html",
        "fct-type": "module",
        "title": "Utf32"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Basic UTF-32 validation",
        "hierarchy": "Data Text Internal Encoding Utf32",
        "module": "Data.Text.Internal.Encoding.Utf32",
        "name": "Utf32",
        "normalized": "",
        "package": "text",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf32.html#v:validate",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf32",
        "fct-package": "text",
        "fct-signature": "Word32 -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf32.html#validate",
        "fct-type": "function",
        "title": "validate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf32",
        "module": "Data.Text.Internal.Encoding.Utf32",
        "name": "validate",
        "normalized": "Word-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eBasic UTF-8 validation and character manipulation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html",
        "fct-type": "module",
        "title": "Utf8"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Basic UTF-8 validation and character manipulation",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "Utf8",
        "normalized": "",
        "package": "text",
        "partial": "Utf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#v:chr2",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html#chr2",
        "fct-type": "function",
        "title": "chr2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "chr2",
        "normalized": "Word-\u003eWord-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#v:chr3",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html#chr3",
        "fct-type": "function",
        "title": "chr3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "chr3",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#v:chr4",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html#chr4",
        "fct-type": "function",
        "title": "chr4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "chr4",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#v:ord2",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "Char -\u003e (Word8, Word8)",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html#ord2",
        "fct-type": "function",
        "title": "ord2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "ord2",
        "normalized": "Char-\u003e(Word,Word)",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003e(Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#v:ord3",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "Char -\u003e (Word8, Word8, Word8)",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html#ord3",
        "fct-type": "function",
        "title": "ord3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "ord3",
        "normalized": "Char-\u003e(Word,Word,Word)",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003e(Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#v:ord4",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "Char -\u003e (Word8, Word8, Word8, Word8)",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html#ord4",
        "fct-type": "function",
        "title": "ord4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "ord4",
        "normalized": "Char-\u003e(Word,Word,Word,Word)",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003e(Word,Word,Word,Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#v:validate1",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "Word8 -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html#validate1",
        "fct-type": "function",
        "title": "validate1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "validate1",
        "normalized": "Word-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#v:validate2",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html#validate2",
        "fct-type": "function",
        "title": "validate2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "validate2",
        "normalized": "Word-\u003eWord-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#v:validate3",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html#validate3",
        "fct-type": "function",
        "title": "validate3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "validate3",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Encoding-Utf8.html#v:validate4",
      "description": {
        "fct-module": "Data.Text.Internal.Encoding.Utf8",
        "fct-package": "text",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Encoding-Utf8.html#validate4",
        "fct-type": "function",
        "title": "validate4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Encoding Utf8",
        "module": "Data.Text.Internal.Encoding.Utf8",
        "name": "validate4",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Functions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eUseful functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Functions",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Functions.html",
        "fct-type": "module",
        "title": "Functions"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Useful functions",
        "hierarchy": "Data Text Internal Functions",
        "module": "Data.Text.Internal.Functions",
        "name": "Functions",
        "normalized": "",
        "package": "text",
        "partial": "Functions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Functions.html#v:intersperse",
      "description": {
        "fct-descr": "\u003cp\u003eA lazier version of Data.List.intersperse.  The other version\n causes space leaks!\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Functions",
        "fct-package": "text",
        "fct-signature": "a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-Text-Internal-Functions.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "lazier version of Data.List.intersperse The other version causes space leaks",
        "hierarchy": "Data Text Internal Functions",
        "module": "Data.Text.Internal.Functions",
        "name": "intersperse",
        "normalized": "a-\u003e[a]-\u003e[a]",
        "package": "text",
        "partial": "",
        "signature": "a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-CaseMapping.html#",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.CaseMapping",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Fusion-CaseMapping.html",
        "fct-type": "module",
        "title": "CaseMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion CaseMapping",
        "module": "Data.Text.Internal.Fusion.CaseMapping",
        "name": "CaseMapping",
        "normalized": "",
        "package": "text",
        "partial": "Case Mapping",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-CaseMapping.html#v:foldMapping",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.CaseMapping",
        "fct-package": "text",
        "fct-signature": "forall s.  Char -\u003e s -\u003e Step (CC s) Char",
        "fct-source": "src/Data-Text-Internal-Fusion-CaseMapping.html#foldMapping",
        "fct-type": "function",
        "title": "foldMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion CaseMapping",
        "module": "Data.Text.Internal.Fusion.CaseMapping",
        "name": "foldMapping",
        "normalized": "a b Char-\u003ec-\u003eStep(CC c)Char",
        "package": "text",
        "partial": "Mapping",
        "signature": "forall s. Char-\u003es-\u003eStep(CC s)Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-CaseMapping.html#v:lowerMapping",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.CaseMapping",
        "fct-package": "text",
        "fct-signature": "forall s.  Char -\u003e s -\u003e Step (CC s) Char",
        "fct-source": "src/Data-Text-Internal-Fusion-CaseMapping.html#lowerMapping",
        "fct-type": "function",
        "title": "lowerMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion CaseMapping",
        "module": "Data.Text.Internal.Fusion.CaseMapping",
        "name": "lowerMapping",
        "normalized": "a b Char-\u003ec-\u003eStep(CC c)Char",
        "package": "text",
        "partial": "Mapping",
        "signature": "forall s. Char-\u003es-\u003eStep(CC s)Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-CaseMapping.html#v:titleMapping",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.CaseMapping",
        "fct-package": "text",
        "fct-signature": "forall s.  Char -\u003e s -\u003e Step (CC s) Char",
        "fct-source": "src/Data-Text-Internal-Fusion-CaseMapping.html#titleMapping",
        "fct-type": "function",
        "title": "titleMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion CaseMapping",
        "module": "Data.Text.Internal.Fusion.CaseMapping",
        "name": "titleMapping",
        "normalized": "a b Char-\u003ec-\u003eStep(CC c)Char",
        "package": "text",
        "partial": "Mapping",
        "signature": "forall s. Char-\u003es-\u003eStep(CC s)Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-CaseMapping.html#v:upperMapping",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.CaseMapping",
        "fct-package": "text",
        "fct-signature": "forall s.  Char -\u003e s -\u003e Step (CC s) Char",
        "fct-source": "src/Data-Text-Internal-Fusion-CaseMapping.html#upperMapping",
        "fct-type": "function",
        "title": "upperMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion CaseMapping",
        "module": "Data.Text.Internal.Fusion.CaseMapping",
        "name": "upperMapping",
        "normalized": "a b Char-\u003ec-\u003eStep(CC c)Char",
        "package": "text",
        "partial": "Mapping",
        "signature": "forall s. Char-\u003es-\u003eStep(CC s)Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eCommon stream fusion functionality for text.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html",
        "fct-type": "module",
        "title": "Common"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Common stream fusion functionality for text",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "Common",
        "normalized": "",
        "package": "text",
        "partial": "Common",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e all \u003ccode\u003ep \u003c/code\u003exs determines if all characters in the \u003ccode\u003eText\u003c/code\u003e\n \u003ccode\u003exs\u003c/code\u003e satisify the predicate \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Stream Char -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "all xs determines if all characters in the Text xs satisify the predicate",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "all",
        "normalized": "(Char-\u003eBool)-\u003eStream Char-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eStream Char-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e any \u003ccode\u003ep \u003c/code\u003exs determines if any character in the stream\n \u003ccode\u003exs\u003c/code\u003e satisifes the predicate \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Stream Char -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "any xs determines if any character in the stream xs satisifes the predicate",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "any",
        "normalized": "(Char-\u003eBool)-\u003eStream Char-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eStream Char-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Appends one Stream to the other.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Appends one Stream to the other",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "append",
        "normalized": "Stream Char-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:compareLengthI",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compares the count of characters in a string to a number.\n Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThis function gives the same answer as comparing against the result\n of \u003ccode\u003e\u003ca\u003elengthI\u003c/a\u003e\u003c/code\u003e, but can short circuit if the count of characters is\n greater than the number, and hence be more efficient.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e a -\u003e Ordering",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#compareLengthI",
        "fct-type": "function",
        "title": "compareLengthI"
      },
      "index": {
        "description": "Compares the count of characters in string to number Subject to fusion This function gives the same answer as comparing against the result of lengthI but can short circuit if the count of characters is greater than the number and hence be more efficient",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "compareLengthI",
        "normalized": "Stream Char-\u003ea-\u003eOrdering",
        "package": "text",
        "partial": "Length",
        "signature": "Stream Char-\u003ea-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of streams. Subject to array fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "[Stream Char] -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "Concatenate list of streams Subject to array fusion",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "concat",
        "normalized": "[Stream Char]-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "[Stream Char]-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over a stream that results in a stream and concatenate the\n results.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Stream Char) -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Map function over stream that results in stream and concatenate the results",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "concatMap",
        "normalized": "(Char-\u003eStream Char)-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "Map",
        "signature": "(Char-\u003eStream Char)-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Adds a character to the front of a Stream Char.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "Adds character to the front of Stream Char",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "cons",
        "normalized": "Char-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:countCharI",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003ecountCharI\u003c/a\u003e\u003c/code\u003e function returns the number of times the\n query element appears in the given stream.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Stream Char -\u003e a",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#countCharI",
        "fct-type": "function",
        "title": "countCharI"
      },
      "index": {
        "description": "The countCharI function returns the number of times the query element appears in the given stream",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "countCharI",
        "normalized": "Char-\u003eStream Char-\u003ea",
        "package": "text",
        "partial": "Char",
        "signature": "Char-\u003eStream Char-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e drop n, applied to a stream, returns the suffix of the\n stream after the first \u003ccode\u003en\u003c/code\u003e characters, or the empty stream if \u003ccode\u003en\u003c/code\u003e\n is greater than the length of the stream.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "a -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop applied to stream returns the suffix of the stream after the first characters or the empty stream if is greater than the length of the stream",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "drop",
        "normalized": "a-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "a-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003edropWhile \u003ccode\u003ep \u003c/code\u003exs returns the suffix remaining after takeWhile \u003ccode\u003ep \u003c/code\u003exs.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "dropWhile xs returns the suffix remaining after takeWhile xs",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "dropWhile",
        "normalized": "(Char-\u003eBool)-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e elem is the stream membership predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Stream Char -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "elem is the stream membership predicate",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "elem",
        "normalized": "Char-\u003eStream Char-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eStream Char-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a stream,\n returns a stream containing those characters that satisfy the\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "filter applied to predicate and stream returns stream containing those characters that satisfy the predicate",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "filter",
        "normalized": "(Char-\u003eBool)-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:findBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efindBy\u003c/a\u003e\u003c/code\u003e function takes a predicate and a stream,\n and returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Stream Char -\u003e Maybe Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#findBy",
        "fct-type": "function",
        "title": "findBy"
      },
      "index": {
        "description": "The findBy function takes predicate and stream and returns the first element in matching the predicate or Nothing if there is no such element",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "findBy",
        "normalized": "(Char-\u003eBool)-\u003eStream Char-\u003eMaybe Char",
        "package": "text",
        "partial": "By",
        "signature": "(Char-\u003eBool)-\u003eStream Char-\u003eMaybe Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:findIndexI",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndexI\u003c/a\u003e\u003c/code\u003e function takes a predicate and a stream and\n returns the index of the first element in the stream satisfying the\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Stream Char -\u003e Maybe a",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#findIndexI",
        "fct-type": "function",
        "title": "findIndexI"
      },
      "index": {
        "description": "The findIndexI function takes predicate and stream and returns the index of the first element in the stream satisfying the predicate",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "findIndexI",
        "normalized": "(Char-\u003eBool)-\u003eStream Char-\u003eMaybe a",
        "package": "text",
        "partial": "Index",
        "signature": "(Char-\u003eBool)-\u003eStream Char-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003efoldl, applied to a binary operator, a starting value (typically the\n left-identity of the operator), and a Stream, reduces the Stream using the\n binary operator, from left to right.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(b -\u003e Char -\u003e b) -\u003e b -\u003e Stream Char -\u003e b",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "foldl applied to binary operator starting value typically the left-identity of the operator and Stream reduces the Stream using the binary operator from left to right",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "foldl",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eStream Char-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "(b-\u003eChar-\u003eb)-\u003eb-\u003eStream Char-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA strict version of foldl.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(b -\u003e Char -\u003e b) -\u003e b -\u003e Stream Char -\u003e b",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "strict version of foldl",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "foldl'",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eStream Char-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "(b-\u003eChar-\u003eb)-\u003eb-\u003eStream Char-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:foldl1",
      "description": {
        "fct-descr": "\u003cp\u003efoldl1 is a variant of foldl that has no starting value argument,\n and thus must be applied to non-empty Streams.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Stream Char -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#foldl1",
        "fct-type": "function",
        "title": "foldl1"
      },
      "index": {
        "description": "foldl1 is variant of foldl that has no starting value argument and thus must be applied to non-empty Streams",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "foldl1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eStream Char-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eStream Char-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:foldl1-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA strict version of foldl1.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Stream Char -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#foldl1%27",
        "fct-type": "function",
        "title": "foldl1'"
      },
      "index": {
        "description": "strict version of foldl1",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "foldl1'",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eStream Char-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eStream Char-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value (typically the\n right-identity of the operator), and a stream, reduces the stream using the\n binary operator, from right to left.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e b -\u003e b) -\u003e b -\u003e Stream Char -\u003e b",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "foldr applied to binary operator starting value typically the right-identity of the operator and stream reduces the stream using the binary operator from right to left",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "foldr",
        "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eStream Char-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eb-\u003eb)-\u003eb-\u003eStream Char-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:foldr1",
      "description": {
        "fct-descr": "\u003cp\u003efoldr1 is a variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to non-empty streams.\n Subject to array fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Stream Char -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#foldr1",
        "fct-type": "function",
        "title": "foldr1"
      },
      "index": {
        "description": "foldr1 is variant of foldr that has no starting value argument and thus must be applied to non-empty streams Subject to array fusion",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "foldr1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eStream Char-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eStream Char-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns the first character of a Text, which must be non-empty.\n Subject to array fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Returns the first character of Text which must be non-empty Subject to array fusion",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "head",
        "normalized": "Stream Char-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:indexI",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Stream index (subscript) operator, starting from 0.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e a -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#indexI",
        "fct-type": "function",
        "title": "indexI"
      },
      "index": {
        "description": "Stream index subscript operator starting from",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "indexI",
        "normalized": "Stream Char-\u003ea-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003ea-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:init",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns all but the last character of a Stream Char, which\n must be non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "Returns all but the last character of Stream Char which must be non-empty",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "init",
        "normalized": "Stream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:intercalate",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e [Stream Char] -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#intercalate",
        "fct-type": "function",
        "title": "intercalate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "intercalate",
        "normalized": "Stream Char-\u003e[Stream Char]-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003e[Stream Char]-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:intersperse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Take a character and place it between each of the\n characters of a 'Stream Char'.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "Take character and place it between each of the characters of Stream Char",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "intersperse",
        "normalized": "Char-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:isPrefixOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003es and returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first is a prefix of the second.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream a -\u003e Stream a -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#isPrefixOf",
        "fct-type": "function",
        "title": "isPrefixOf"
      },
      "index": {
        "description": "The isPrefixOf function takes two Stream and returns True iff the first is prefix of the second",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "isPrefixOf",
        "normalized": "Stream a-\u003eStream a-\u003eBool",
        "package": "text",
        "partial": "Prefix Of",
        "signature": "Stream a-\u003eStream a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:isSingleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Indicate whether a string contains exactly one element.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#isSingleton",
        "fct-type": "function",
        "title": "isSingleton"
      },
      "index": {
        "description": "Indicate whether string contains exactly one element",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "isSingleton",
        "normalized": "Stream Char-\u003eBool",
        "package": "text",
        "partial": "Singleton",
        "signature": "Stream Char-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:justifyLeftI",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "a -\u003e Char -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#justifyLeftI",
        "fct-type": "function",
        "title": "justifyLeftI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "justifyLeftI",
        "normalized": "a-\u003eChar-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "Left",
        "signature": "a-\u003eChar-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns the last character of a 'Stream Char', which must\n be non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Returns the last character of Stream Char which must be non-empty",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "last",
        "normalized": "Stream Char-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:lengthI",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns the number of characters in a string.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e a",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#lengthI",
        "fct-type": "function",
        "title": "lengthI"
      },
      "index": {
        "description": "Returns the number of characters in string",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "lengthI",
        "normalized": "Stream Char-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef \u003c/code\u003exs is the Stream Char obtained by applying \u003ccode\u003ef\u003c/code\u003e\n to each element of \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char) -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map xs is the Stream Char obtained by applying to each element of xs",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "map",
        "normalized": "(Char-\u003eChar)-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar)-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e maximum returns the maximum value from a stream, which must be\n non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "maximum returns the maximum value from stream which must be non-empty",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "maximum",
        "normalized": "Stream Char-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e minimum returns the minimum value from a \u003ccode\u003eText\u003c/code\u003e, which must be\n non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "minimum returns the minimum value from Text which must be non-empty",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "minimum",
        "normalized": "Stream Char-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Tests whether a Stream Char is empty or not.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Tests whether Stream Char is empty or not",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "null",
        "normalized": "Stream Char-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:replicateCharI",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "a -\u003e Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#replicateCharI",
        "fct-type": "function",
        "title": "replicateCharI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "replicateCharI",
        "normalized": "a-\u003eChar-\u003eStream Char",
        "package": "text",
        "partial": "Char",
        "signature": "a-\u003eChar-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:replicateI",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#replicateI",
        "fct-type": "function",
        "title": "replicateI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "replicateI",
        "normalized": "Int-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:scanl",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#scanl",
        "fct-type": "function",
        "title": "scanl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "scanl",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:singleton",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "singleton",
        "normalized": "Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:snoc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Adds a character to the end of a stream.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "Adds character to the end of stream",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "snoc",
        "normalized": "Stream Char-\u003eChar-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eChar-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:streamCString-35-",
      "description": {
        "fct-descr": "\u003cp\u003eStream the UTF-8-like packed encoding used by GHC to represent\n constant strings in generated code.\n\u003c/p\u003e\u003cp\u003eThis encoding uses the byte sequence \u003ca\u003exc0x80\u003c/a\u003e to represent NUL,\n and the string is NUL-terminated.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Addr# -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#streamCString%23",
        "fct-type": "function",
        "title": "streamCString#"
      },
      "index": {
        "description": "Stream the UTF-8-like packed encoding used by GHC to represent constant strings in generated code This encoding uses the byte sequence xc0x80 to represent NUL and the string is NUL-terminated",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "streamCString#",
        "normalized": "Addr #-\u003eStream Char",
        "package": "text",
        "partial": "CString",
        "signature": "Addr #-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:streamList",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "[a] -\u003e Stream a",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#streamList",
        "fct-type": "function",
        "title": "streamList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "streamList",
        "normalized": "[a]-\u003eStream a",
        "package": "text",
        "partial": "List",
        "signature": "[a]-\u003eStream a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns all characters after the head of a Stream Char, which must\n be non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "Returns all characters after the head of Stream Char which must be non-empty",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "tail",
        "normalized": "Stream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e take n, applied to a stream, returns the prefix of the\n stream of length \u003ccode\u003en\u003c/code\u003e, or the stream itself if \u003ccode\u003en\u003c/code\u003e is greater than the\n length of the stream.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "a -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take applied to stream returns the prefix of the stream of length or the stream itself if is greater than the length of the stream",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "take",
        "normalized": "a-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "a-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003etakeWhile, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a stream, returns the\n longest prefix (possibly empty) of elements that satisfy p.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "takeWhile applied to predicate and stream returns the longest prefix possibly empty of elements that satisfy",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "takeWhile",
        "normalized": "(Char-\u003eBool)-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:toCaseFold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to folded case.  This function is mainly\n useful for performing caseless (or case insensitive) string\n comparisons.\n\u003c/p\u003e\u003cp\u003eA string \u003ccode\u003ex\u003c/code\u003e is a caseless match for a string \u003ccode\u003ey\u003c/code\u003e if and only if:\n\u003c/p\u003e\u003cpre\u003etoCaseFold x == toCaseFold y\u003c/pre\u003e\u003cp\u003eThe result string may be longer than the input string, and may\n differ from applying \u003ccode\u003e\u003ca\u003etoLower\u003c/a\u003e\u003c/code\u003e to the input string.  For instance,\n the Armenian small ligature men now (U+FB13) is case folded to the\n bigram men now (U+0574 U+0576), while the micro sign (U+00B5) is\n case folded to the Greek small letter letter mu (U+03BC) instead of\n itself.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#toCaseFold",
        "fct-type": "function",
        "title": "toCaseFold"
      },
      "index": {
        "description": "Convert string to folded case This function is mainly useful for performing caseless or case insensitive string comparisons string is caseless match for string if and only if toCaseFold toCaseFold The result string may be longer than the input string and may differ from applying toLower to the input string For instance the Armenian small ligature men now FB13 is case folded to the bigram men now while the micro sign B5 is case folded to the Greek small letter letter mu BC instead of itself",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "toCaseFold",
        "normalized": "Stream Char-\u003eStream Char",
        "package": "text",
        "partial": "Case Fold",
        "signature": "Stream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:toLower",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to lower case, using simple case\n conversion.  The result string may be longer than the input string.\n For instance, the Latin capital letter I with dot above (U+0130)\n maps to the sequence Latin small letter i (U+0069) followed by\n combining dot above (U+0307).\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#toLower",
        "fct-type": "function",
        "title": "toLower"
      },
      "index": {
        "description": "Convert string to lower case using simple case conversion The result string may be longer than the input string For instance the Latin capital letter with dot above maps to the sequence Latin small letter followed by combining dot above",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "toLower",
        "normalized": "Stream Char-\u003eStream Char",
        "package": "text",
        "partial": "Lower",
        "signature": "Stream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:toTitle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to title case, using simple case\n conversion.\n\u003c/p\u003e\u003cp\u003eThe first letter of the input is converted to title case, as is\n every subsequent letter that immediately follows a non-letter.\n Every letter that immediately follows another letter is converted\n to lower case.\n\u003c/p\u003e\u003cp\u003eThe result string may be longer than the input string. For example,\n the Latin small ligature &#64258; (U+FB02) is converted to the\n sequence Latin capital letter F (U+0046) followed by Latin small\n letter l (U+006C).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: this function does not take language or culture specific\n rules into account. For instance, in English, different style\n guides disagree on whether the book name \"The Hill of the Red\n Fox\" is correctly title cased&#8212;but this function will\n capitalize \u003cem\u003eevery\u003c/em\u003e word.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#toTitle",
        "fct-type": "function",
        "title": "toTitle"
      },
      "index": {
        "description": "Convert string to title case using simple case conversion The first letter of the input is converted to title case as is every subsequent letter that immediately follows non-letter Every letter that immediately follows another letter is converted to lower case The result string may be longer than the input string For example the Latin small ligature FB02 is converted to the sequence Latin capital letter followed by Latin small letter Note this function does not take language or culture specific rules into account For instance in English different style guides disagree on whether the book name The Hill of the Red Fox is correctly title cased but this function will capitalize every word",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "toTitle",
        "normalized": "Stream Char-\u003eStream Char",
        "package": "text",
        "partial": "Title",
        "signature": "Stream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:toUpper",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to upper case, using simple case\n conversion.  The result string may be longer than the input string.\n For instance, the German eszett (U+00DF) maps to the two-letter\n sequence SS.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#toUpper",
        "fct-type": "function",
        "title": "toUpper"
      },
      "index": {
        "description": "Convert string to upper case using simple case conversion The result string may be longer than the input string For instance the German eszett DF maps to the two-letter sequence SS",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "toUpper",
        "normalized": "Stream Char-\u003eStream Char",
        "package": "text",
        "partial": "Upper",
        "signature": "Stream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:uncons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns the first character and remainder of a 'Stream\n Char', or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if empty.  Subject to array fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Maybe (Char, Stream Char)",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#uncons",
        "fct-type": "function",
        "title": "uncons"
      },
      "index": {
        "description": "Returns the first character and remainder of Stream Char or Nothing if empty Subject to array fusion",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "uncons",
        "normalized": "Stream Char-\u003eMaybe(Char,Stream Char)",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eMaybe(Char,Stream Char)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:unfoldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003ccode\u003en\u003c/code\u003e is the length of the result. The unfoldr function\n is analogous to the List \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e. unfoldr builds a stream\n from a seed value. The function takes the element and returns\n Nothing if it is done producing the stream or returns Just\n (a,b), in which case, a is the next Char in the string, and b is\n the seed value for further production.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Maybe (Char, a)) -\u003e a -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#unfoldr",
        "fct-type": "function",
        "title": "unfoldr"
      },
      "index": {
        "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds stream from seed value The function takes the element and returns Nothing if it is done producing the stream or returns Just in which case is the next Char in the string and is the seed value for further production",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "unfoldr",
        "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:unfoldrNI",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrNI\u003c/a\u003e\u003c/code\u003e builds a stream from a seed\n value. However, the length of the result is limited by the\n first argument to \u003ccode\u003e\u003ca\u003eunfoldrNI\u003c/a\u003e\u003c/code\u003e. This function is more efficient than\n \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e when the length of the result is known.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "a -\u003e (b -\u003e Maybe (Char, b)) -\u003e b -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#unfoldrNI",
        "fct-type": "function",
        "title": "unfoldrNI"
      },
      "index": {
        "description": "Like unfoldr unfoldrNI builds stream from seed value However the length of the result is limited by the first argument to unfoldrNI This function is more efficient than unfoldr when the length of the result is known",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "unfoldrNI",
        "normalized": "a-\u003e(b-\u003eMaybe(Char,b))-\u003eb-\u003eStream Char",
        "package": "text",
        "partial": "NI",
        "signature": "a-\u003e(b-\u003eMaybe(Char,b))-\u003eb-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:unstreamList",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "Stream a -\u003e [a]",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#unstreamList",
        "fct-type": "function",
        "title": "unstreamList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "unstreamList",
        "normalized": "Stream a-\u003e[a]",
        "package": "text",
        "partial": "List",
        "signature": "Stream a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Common.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003ezipWith generalises \u003ccode\u003ezip\u003c/code\u003e by zipping with the function given as\n the first argument, instead of a tupling function.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Common",
        "fct-package": "text",
        "fct-signature": "(a -\u003e a -\u003e b) -\u003e Stream a -\u003e Stream a -\u003e Stream b",
        "fct-source": "src/Data-Text-Internal-Fusion-Common.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function",
        "hierarchy": "Data Text Internal Fusion Common",
        "module": "Data.Text.Internal.Fusion.Common",
        "name": "zipWith",
        "normalized": "(a-\u003ea-\u003eb)-\u003eStream a-\u003eStream a-\u003eStream b",
        "package": "text",
        "partial": "With",
        "signature": "(a-\u003ea-\u003eb)-\u003eStream a-\u003eStream a-\u003eStream b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Size.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eSize hints.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Size",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Fusion-Size.html",
        "fct-type": "module",
        "title": "Size"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Size hints",
        "hierarchy": "Data Text Internal Fusion Size",
        "module": "Data.Text.Internal.Fusion.Size",
        "name": "Size",
        "normalized": "",
        "package": "text",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Size.html#t:Size",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Size",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Fusion-Size.html#Size",
        "fct-type": "data",
        "title": "Size"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Size",
        "module": "Data.Text.Internal.Fusion.Size",
        "name": "Size",
        "normalized": "",
        "package": "text",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Size.html#v:exactSize",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Size",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Size",
        "fct-source": "src/Data-Text-Internal-Fusion-Size.html#exactSize",
        "fct-type": "function",
        "title": "exactSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Size",
        "module": "Data.Text.Internal.Fusion.Size",
        "name": "exactSize",
        "normalized": "Int-\u003eSize",
        "package": "text",
        "partial": "Size",
        "signature": "Int-\u003eSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Size.html#v:exactly",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Size",
        "fct-package": "text",
        "fct-signature": "Size -\u003e Maybe Int",
        "fct-source": "src/Data-Text-Internal-Fusion-Size.html#exactly",
        "fct-type": "function",
        "title": "exactly"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Size",
        "module": "Data.Text.Internal.Fusion.Size",
        "name": "exactly",
        "normalized": "Size-\u003eMaybe Int",
        "package": "text",
        "partial": "",
        "signature": "Size-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Size.html#v:isEmpty",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Size",
        "fct-package": "text",
        "fct-signature": "Size -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Fusion-Size.html#isEmpty",
        "fct-type": "function",
        "title": "isEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Size",
        "module": "Data.Text.Internal.Fusion.Size",
        "name": "isEmpty",
        "normalized": "Size-\u003eBool",
        "package": "text",
        "partial": "Empty",
        "signature": "Size-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Size.html#v:larger",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum of two size hints.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Size",
        "fct-package": "text",
        "fct-signature": "Size -\u003e Size -\u003e Size",
        "fct-source": "src/Data-Text-Internal-Fusion-Size.html#larger",
        "fct-type": "function",
        "title": "larger"
      },
      "index": {
        "description": "Maximum of two size hints",
        "hierarchy": "Data Text Internal Fusion Size",
        "module": "Data.Text.Internal.Fusion.Size",
        "name": "larger",
        "normalized": "Size-\u003eSize-\u003eSize",
        "package": "text",
        "partial": "",
        "signature": "Size-\u003eSize-\u003eSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Size.html#v:maxSize",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Size",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Size",
        "fct-source": "src/Data-Text-Internal-Fusion-Size.html#maxSize",
        "fct-type": "function",
        "title": "maxSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Size",
        "module": "Data.Text.Internal.Fusion.Size",
        "name": "maxSize",
        "normalized": "Int-\u003eSize",
        "package": "text",
        "partial": "Size",
        "signature": "Int-\u003eSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Size.html#v:smaller",
      "description": {
        "fct-descr": "\u003cp\u003eMinimum of two size hints.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Size",
        "fct-package": "text",
        "fct-signature": "Size -\u003e Size -\u003e Size",
        "fct-source": "src/Data-Text-Internal-Fusion-Size.html#smaller",
        "fct-type": "function",
        "title": "smaller"
      },
      "index": {
        "description": "Minimum of two size hints",
        "hierarchy": "Data Text Internal Fusion Size",
        "module": "Data.Text.Internal.Fusion.Size",
        "name": "smaller",
        "normalized": "Size-\u003eSize-\u003eSize",
        "package": "text",
        "partial": "",
        "signature": "Size-\u003eSize-\u003eSize"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Size.html#v:unknownSize",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Size",
        "fct-package": "text",
        "fct-signature": "Size",
        "fct-source": "src/Data-Text-Internal-Fusion-Size.html#unknownSize",
        "fct-type": "function",
        "title": "unknownSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Size",
        "module": "Data.Text.Internal.Fusion.Size",
        "name": "unknownSize",
        "normalized": "",
        "package": "text",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Size.html#v:upperBound",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the maximum size from a size hint, if possible.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Size",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Size -\u003e Int",
        "fct-source": "src/Data-Text-Internal-Fusion-Size.html#upperBound",
        "fct-type": "function",
        "title": "upperBound"
      },
      "index": {
        "description": "Compute the maximum size from size hint if possible",
        "hierarchy": "Data Text Internal Fusion Size",
        "module": "Data.Text.Internal.Fusion.Size",
        "name": "upperBound",
        "normalized": "Int-\u003eSize-\u003eInt",
        "package": "text",
        "partial": "Bound",
        "signature": "Int-\u003eSize-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eCore stream fusion functionality for text.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Core stream fusion functionality for text",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "Types",
        "normalized": "",
        "package": "text",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#t:CC",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialised tuple for case conversion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#CC",
        "fct-type": "data",
        "title": "CC"
      },
      "index": {
        "description": "Specialised tuple for case conversion",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "CC",
        "normalized": "",
        "package": "text",
        "partial": "CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#t:M",
      "description": {
        "fct-descr": "\u003cp\u003eSpecialised, strict Maybe-like type.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#M",
        "fct-type": "data",
        "title": "M"
      },
      "index": {
        "description": "Specialised strict Maybe-like type",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "M",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#t:M8",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "type",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#M8",
        "fct-type": "type",
        "title": "M8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "M8",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#t:PairS",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#PairS",
        "fct-type": "data",
        "title": "PairS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "PairS",
        "normalized": "",
        "package": "text",
        "partial": "Pair",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#t:RS",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#RS",
        "fct-type": "data",
        "title": "RS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "RS",
        "normalized": "",
        "package": "text",
        "partial": "RS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#t:Step",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Step",
        "fct-type": "data",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "Step",
        "normalized": "",
        "package": "text",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#t:Stream",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Stream",
        "fct-type": "data",
        "title": "Stream"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "Stream",
        "normalized": "",
        "package": "text",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#t:Switch",
      "description": {
        "fct-descr": "\u003cp\u003eAllow a function over a stream to switch between two states.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Switch",
        "fct-type": "data",
        "title": "Switch"
      },
      "index": {
        "description": "Allow function over stream to switch between two states",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "Switch",
        "normalized": "",
        "package": "text",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v::-42-:",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "!a :*: !b",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#PairS",
        "fct-type": "function",
        "title": ":*:"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": ":*:",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:CC",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "CC !s !Char !Char",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#CC",
        "fct-type": "function",
        "title": "CC"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "CC",
        "normalized": "",
        "package": "text",
        "partial": "CC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:Done",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "Done",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Step",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "Done",
        "normalized": "",
        "package": "text",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:J",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "J !a",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#M",
        "fct-type": "function",
        "title": "J"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "J",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:N",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "N",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#M",
        "fct-type": "function",
        "title": "N"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "N",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:RS0",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "RS0 !s",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#RS",
        "fct-type": "function",
        "title": "RS0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "RS0",
        "normalized": "",
        "package": "text",
        "partial": "RS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:RS1",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "RS1 !s !Word8",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#RS",
        "fct-type": "function",
        "title": "RS1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "RS1",
        "normalized": "",
        "package": "text",
        "partial": "RS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:RS2",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "RS2 !s !Word8 !Word8",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#RS",
        "fct-type": "function",
        "title": "RS2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "RS2",
        "normalized": "",
        "package": "text",
        "partial": "RS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:RS3",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "RS3 !s !Word8 !Word8 !Word8",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#RS",
        "fct-type": "function",
        "title": "RS3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "RS3",
        "normalized": "",
        "package": "text",
        "partial": "RS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:S1",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "S1",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Switch",
        "fct-type": "function",
        "title": "S1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "S1",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:S2",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "S2",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Switch",
        "fct-type": "function",
        "title": "S2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "S2",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:Skip",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "Skip !s",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Step",
        "fct-type": "function",
        "title": "Skip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "Skip",
        "normalized": "",
        "package": "text",
        "partial": "Skip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:Stream",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "forall s . Stream (s -\u003e Step s a) !s !Size",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Stream",
        "fct-type": "function",
        "title": "Stream"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "Stream",
        "normalized": "a b Stream(b-\u003eStep b c)b Size",
        "package": "text",
        "partial": "Stream",
        "signature": "forall s Stream(s-\u003eStep s a)s Size"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:Yield",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "Yield !a !s",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Step",
        "fct-type": "function",
        "title": "Yield"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "Yield",
        "normalized": "",
        "package": "text",
        "partial": "Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion-Types.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty stream.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion.Types",
        "fct-package": "text",
        "fct-signature": "Stream a",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty stream",
        "hierarchy": "Data Text Internal Fusion Types",
        "module": "Data.Text.Internal.Fusion.Types",
        "name": "empty",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eText manipulation functions represented as fusible operations over\n streams.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Fusion.html",
        "fct-type": "module",
        "title": "Fusion"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Text manipulation functions represented as fusible operations over streams",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "Fusion",
        "normalized": "",
        "package": "text",
        "partial": "Fusion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#t:Step",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Step",
        "fct-type": "data",
        "title": "Step"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "Step",
        "normalized": "",
        "package": "text",
        "partial": "Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#t:Stream",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Stream",
        "fct-type": "data",
        "title": "Stream"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "Stream",
        "normalized": "",
        "package": "text",
        "partial": "Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:Done",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Done",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Step",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "Done",
        "normalized": "",
        "package": "text",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:Skip",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Skip !s",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Step",
        "fct-type": "function",
        "title": "Skip"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "Skip",
        "normalized": "",
        "package": "text",
        "partial": "Skip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:Stream",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "forall s . Stream (s -\u003e Step s a) !s !Size",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Stream",
        "fct-type": "function",
        "title": "Stream"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "Stream",
        "normalized": "a b Stream(b-\u003eStep b c)b Size",
        "package": "text",
        "partial": "Stream",
        "signature": "forall s Stream(s-\u003eStep s a)s Size"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:Yield",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Yield !a !s",
        "fct-source": "src/Data-Text-Internal-Fusion-Types.html#Step",
        "fct-type": "function",
        "title": "Yield"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "Yield",
        "normalized": "",
        "package": "text",
        "partial": "Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:countChar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003ecount\u003c/code\u003e function returns the number of times the query\n element appears in the given stream.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Stream Char -\u003e Int",
        "fct-source": "src/Data-Text-Internal-Fusion.html#countChar",
        "fct-type": "function",
        "title": "countChar"
      },
      "index": {
        "description": "The count function returns the number of times the query element appears in the given stream",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "countChar",
        "normalized": "Char-\u003eStream Char-\u003eInt",
        "package": "text",
        "partial": "Char",
        "signature": "Char-\u003eStream Char-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:findIndex",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a stream and\n returns the index of the first element in the stream\n satisfying the predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Stream Char -\u003e Maybe Int",
        "fct-source": "src/Data-Text-Internal-Fusion.html#findIndex",
        "fct-type": "function",
        "title": "findIndex"
      },
      "index": {
        "description": "The findIndex function takes predicate and stream and returns the index of the first element in the stream satisfying the predicate",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "findIndex",
        "normalized": "(Char-\u003eBool)-\u003eStream Char-\u003eMaybe Int",
        "package": "text",
        "partial": "Index",
        "signature": "(Char-\u003eBool)-\u003eStream Char-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e stream index (subscript) operator, starting from 0.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Int -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Fusion.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "stream index subscript operator starting from",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "index",
        "normalized": "Stream Char-\u003eInt-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eInt-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:length",
      "description": {
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Int",
        "fct-source": "src/Data-Text-Internal-Fusion.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "length",
        "normalized": "Stream Char-\u003eInt",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:mapAccumL",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like a combination of \u003ccode\u003emap\u003c/code\u003e and \u003ccode\u003efoldl'\u003c/code\u003e. Applies a\n function to each element of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, passing an accumulating\n parameter from left to right, and returns a final \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Char -\u003e (a, Char)) -\u003e a -\u003e Stream Char -\u003e (a, Text)",
        "fct-source": "src/Data-Text-Internal-Fusion.html#mapAccumL",
        "fct-type": "function",
        "title": "mapAccumL"
      },
      "index": {
        "description": "Like combination of map and foldl Applies function to each element of Text passing an accumulating parameter from left to right and returns final Text",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "mapAccumL",
        "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eStream Char-\u003e(a,Text)",
        "package": "text",
        "partial": "Accum",
        "signature": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eStream Char-\u003e(a,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reverse the characters of a string.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Fusion.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "Reverse the characters of string",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "reverse",
        "normalized": "Stream Char-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:reverseScanr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Perform the equivalent of \u003ccode\u003escanr\u003c/code\u003e over a list, only with\n the input and result reversed.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e Stream Char -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion.html#reverseScanr",
        "fct-type": "function",
        "title": "reverseScanr"
      },
      "index": {
        "description": "Perform the equivalent of scanr over list only with the input and result reversed",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "reverseScanr",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eStream Char-\u003eStream Char",
        "package": "text",
        "partial": "Scanr",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eStream Char-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:reverseStream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', but iterate\n backwards.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion.html#reverseStream",
        "fct-type": "function",
        "title": "reverseStream"
      },
      "index": {
        "description": "Convert Text into Stream Char but iterate backwards",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "reverseStream",
        "normalized": "Text-\u003eStream Char",
        "package": "text",
        "partial": "Stream",
        "signature": "Text-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:stream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into a 'Stream Char'.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion.html#stream",
        "fct-type": "function",
        "title": "stream"
      },
      "index": {
        "description": "Convert Text into Stream Char",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "stream",
        "normalized": "Text-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:unfoldrN",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003eunfoldr\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a stream from a seed\n value. However, the length of the result is limited by the\n first argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e. This function is more efficient than\n \u003ccode\u003eunfoldr\u003c/code\u003e when the length of the result is known.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Int -\u003e (a -\u003e Maybe (Char, a)) -\u003e a -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Fusion.html#unfoldrN",
        "fct-type": "function",
        "title": "unfoldrN"
      },
      "index": {
        "description": "Like unfoldr unfoldrN builds stream from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the length of the result is known",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "unfoldrN",
        "normalized": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Fusion.html#v:unstream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a 'Stream Char' into a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Fusion",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Fusion.html#unstream",
        "fct-type": "function",
        "title": "unstream"
      },
      "index": {
        "description": "Convert Stream Char into Text",
        "hierarchy": "Data Text Internal Fusion",
        "module": "Data.Text.Internal.Fusion",
        "name": "unstream",
        "normalized": "Stream Char-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eLow-level support for text I/O.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.IO",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Low-level support for text",
        "hierarchy": "Data Text Internal IO",
        "module": "Data.Text.Internal.IO",
        "name": "IO",
        "normalized": "",
        "package": "text",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-IO.html#v:hGetLineWith",
      "description": {
        "fct-descr": "\u003cp\u003eRead a single line of input from a handle, constructing a list of\n decoded chunks as we go.  When we're done, transform them into the\n destination type.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.IO",
        "fct-package": "text",
        "fct-signature": "([Text] -\u003e t) -\u003e Handle -\u003e IO t",
        "fct-source": "src/Data-Text-Internal-IO.html#hGetLineWith",
        "fct-type": "function",
        "title": "hGetLineWith"
      },
      "index": {
        "description": "Read single line of input from handle constructing list of decoded chunks as we go When we re done transform them into the destination type",
        "hierarchy": "Data Text Internal IO",
        "module": "Data.Text.Internal.IO",
        "name": "hGetLineWith",
        "normalized": "([Text]-\u003ea)-\u003eHandle-\u003eIO a",
        "package": "text",
        "partial": "Get Line With",
        "signature": "([Text]-\u003et)-\u003eHandle-\u003eIO t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-IO.html#v:readChunk",
      "description": {
        "fct-descr": "\u003cp\u003eRead a single chunk of strict text from a buffer. Used by both\n the strict and lazy implementations of hGetContents.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.IO",
        "fct-package": "text",
        "fct-signature": "Handle__ -\u003e CharBuffer -\u003e IO Text",
        "fct-source": "src/Data-Text-Internal-IO.html#readChunk",
        "fct-type": "function",
        "title": "readChunk"
      },
      "index": {
        "description": "Read single chunk of strict text from buffer Used by both the strict and lazy implementations of hGetContents",
        "hierarchy": "Data Text Internal IO",
        "module": "Data.Text.Internal.IO",
        "name": "readChunk",
        "normalized": "Handle__-\u003eCharBuffer-\u003eIO Text",
        "package": "text",
        "partial": "Chunk",
        "signature": "Handle__-\u003eCharBuffer-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Encoding-Fusion.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eFusible \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e-oriented functions for converting between lazy\n \u003ccode\u003eText\u003c/code\u003e and several common encodings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Lazy-Encoding-Fusion.html",
        "fct-type": "module",
        "title": "Fusion"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Fusible Stream oriented functions for converting between lazy Text and several common encodings",
        "hierarchy": "Data Text Internal Lazy Encoding Fusion",
        "module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "name": "Fusion",
        "normalized": "",
        "package": "text",
        "partial": "Fusion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Encoding-Fusion.html#v:streamUtf16BE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', using big\n endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Lazy-Encoding-Fusion.html#streamUtf16BE",
        "fct-type": "function",
        "title": "streamUtf16BE"
      },
      "index": {
        "description": "Convert ByteString into Stream Char using big endian UTF-16 encoding",
        "hierarchy": "Data Text Internal Lazy Encoding Fusion",
        "module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "name": "streamUtf16BE",
        "normalized": "OnDecodeError-\u003eByteString-\u003eStream Char",
        "package": "text",
        "partial": "Utf BE",
        "signature": "OnDecodeError-\u003eByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Encoding-Fusion.html#v:streamUtf16LE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', using little\n endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Lazy-Encoding-Fusion.html#streamUtf16LE",
        "fct-type": "function",
        "title": "streamUtf16LE"
      },
      "index": {
        "description": "Convert ByteString into Stream Char using little endian UTF-16 encoding",
        "hierarchy": "Data Text Internal Lazy Encoding Fusion",
        "module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "name": "streamUtf16LE",
        "normalized": "OnDecodeError-\u003eByteString-\u003eStream Char",
        "package": "text",
        "partial": "Utf LE",
        "signature": "OnDecodeError-\u003eByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Encoding-Fusion.html#v:streamUtf32BE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', using big\n endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Lazy-Encoding-Fusion.html#streamUtf32BE",
        "fct-type": "function",
        "title": "streamUtf32BE"
      },
      "index": {
        "description": "Convert ByteString into Stream Char using big endian UTF-32 encoding",
        "hierarchy": "Data Text Internal Lazy Encoding Fusion",
        "module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "name": "streamUtf32BE",
        "normalized": "OnDecodeError-\u003eByteString-\u003eStream Char",
        "package": "text",
        "partial": "Utf BE",
        "signature": "OnDecodeError-\u003eByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Encoding-Fusion.html#v:streamUtf32LE",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', using little\n endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Lazy-Encoding-Fusion.html#streamUtf32LE",
        "fct-type": "function",
        "title": "streamUtf32LE"
      },
      "index": {
        "description": "Convert ByteString into Stream Char using little endian UTF-32 encoding",
        "hierarchy": "Data Text Internal Lazy Encoding Fusion",
        "module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "name": "streamUtf32LE",
        "normalized": "OnDecodeError-\u003eByteString-\u003eStream Char",
        "package": "text",
        "partial": "Utf LE",
        "signature": "OnDecodeError-\u003eByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Encoding-Fusion.html#v:streamUtf8",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a 'Stream Char', using\n UTF-8 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Lazy-Encoding-Fusion.html#streamUtf8",
        "fct-type": "function",
        "title": "streamUtf8"
      },
      "index": {
        "description": "Convert lazy ByteString into Stream Char using UTF-8 encoding",
        "hierarchy": "Data Text Internal Lazy Encoding Fusion",
        "module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "name": "streamUtf8",
        "normalized": "OnDecodeError-\u003eByteString-\u003eStream Char",
        "package": "text",
        "partial": "Utf",
        "signature": "OnDecodeError-\u003eByteString-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Encoding-Fusion.html#v:unstream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eWord8\u003c/a\u003e\u003c/code\u003e to a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "fct-package": "text",
        "fct-signature": "Stream Word8 -\u003e ByteString",
        "fct-source": "src/Data-Text-Internal-Lazy-Encoding-Fusion.html#unstream",
        "fct-type": "function",
        "title": "unstream"
      },
      "index": {
        "description": "Convert Stream Word8 to lazy ByteString",
        "hierarchy": "Data Text Internal Lazy Encoding Fusion",
        "module": "Data.Text.Internal.Lazy.Encoding.Fusion",
        "name": "unstream",
        "normalized": "Stream Word-\u003eByteString",
        "package": "text",
        "partial": "",
        "signature": "Stream Word-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Fusion.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eCore stream fusion functionality for text.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Fusion",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Lazy-Fusion.html",
        "fct-type": "module",
        "title": "Fusion"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Core stream fusion functionality for text",
        "hierarchy": "Data Text Internal Lazy Fusion",
        "module": "Data.Text.Internal.Lazy.Fusion",
        "name": "Fusion",
        "normalized": "",
        "package": "text",
        "partial": "Fusion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Fusion.html#v:countChar",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003ecount\u003c/code\u003e function returns the number of times the query\n element appears in the given stream.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Fusion",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Stream Char -\u003e Int64",
        "fct-source": "src/Data-Text-Internal-Lazy-Fusion.html#countChar",
        "fct-type": "function",
        "title": "countChar"
      },
      "index": {
        "description": "The count function returns the number of times the query element appears in the given stream",
        "hierarchy": "Data Text Internal Lazy Fusion",
        "module": "Data.Text.Internal.Lazy.Fusion",
        "name": "countChar",
        "normalized": "Char-\u003eStream Char-\u003eInt",
        "package": "text",
        "partial": "Char",
        "signature": "Char-\u003eStream Char-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Fusion.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e stream index (subscript) operator, starting from 0.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Fusion",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Int64 -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Lazy-Fusion.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "stream index subscript operator starting from",
        "hierarchy": "Data Text Internal Lazy Fusion",
        "module": "Data.Text.Internal.Lazy.Fusion",
        "name": "index",
        "normalized": "Stream Char-\u003eInt-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eInt-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Fusion.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns the number of characters in a text.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Fusion",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Int64",
        "fct-source": "src/Data-Text-Internal-Lazy-Fusion.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Returns the number of characters in text",
        "hierarchy": "Data Text Internal Lazy Fusion",
        "module": "Data.Text.Internal.Lazy.Fusion",
        "name": "length",
        "normalized": "Stream Char-\u003eInt",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Fusion.html#v:stream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into a 'Stream Char'.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Fusion",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Lazy-Fusion.html#stream",
        "fct-type": "function",
        "title": "stream"
      },
      "index": {
        "description": "Convert Text into Stream Char",
        "hierarchy": "Data Text Internal Lazy Fusion",
        "module": "Data.Text.Internal.Lazy.Fusion",
        "name": "stream",
        "normalized": "Text-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Fusion.html#v:unfoldrN",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003eunfoldr\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a stream from a seed\n value. However, the length of the result is limited by the\n first argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e. This function is more efficient than\n \u003ccode\u003eunfoldr\u003c/code\u003e when the length of the result is known.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Fusion",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e (a -\u003e Maybe (Char, a)) -\u003e a -\u003e Stream Char",
        "fct-source": "src/Data-Text-Internal-Lazy-Fusion.html#unfoldrN",
        "fct-type": "function",
        "title": "unfoldrN"
      },
      "index": {
        "description": "Like unfoldr unfoldrN builds stream from seed value However the length of the result is limited by the first argument to unfoldrN This function is more efficient than unfoldr when the length of the result is known",
        "hierarchy": "Data Text Internal Lazy Fusion",
        "module": "Data.Text.Internal.Lazy.Fusion",
        "name": "unfoldrN",
        "normalized": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003eStream Char",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003eStream Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Fusion.html#v:unstream",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a 'Stream Char' into a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, using\n \u003ccode\u003e\u003ca\u003edefaultChunkSize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Fusion",
        "fct-package": "text",
        "fct-signature": "Stream Char -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Lazy-Fusion.html#unstream",
        "fct-type": "function",
        "title": "unstream"
      },
      "index": {
        "description": "Convert Stream Char into Text using defaultChunkSize",
        "hierarchy": "Data Text Internal Lazy Fusion",
        "module": "Data.Text.Internal.Lazy.Fusion",
        "name": "unstream",
        "normalized": "Stream Char-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Stream Char-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Fusion.html#v:unstreamChunks",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a 'Stream Char' into a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, using the given\n chunk size.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Fusion",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Stream Char -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Lazy-Fusion.html#unstreamChunks",
        "fct-type": "function",
        "title": "unstreamChunks"
      },
      "index": {
        "description": "Convert Stream Char into Text using the given chunk size",
        "hierarchy": "Data Text Internal Lazy Fusion",
        "module": "Data.Text.Internal.Lazy.Fusion",
        "name": "unstreamChunks",
        "normalized": "Int-\u003eStream Char-\u003eText",
        "package": "text",
        "partial": "Chunks",
        "signature": "Int-\u003eStream Char-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Search.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eFast substring search for lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, based on work by Boyer,\n Moore, Horspool, Sunday, and Lundh.  Adapted from the strict\n implementation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Search",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Lazy-Search.html",
        "fct-type": "module",
        "title": "Search"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Fast substring search for lazy Text based on work by Boyer Moore Horspool Sunday and Lundh Adapted from the strict implementation",
        "hierarchy": "Data Text Internal Lazy Search",
        "module": "Data.Text.Internal.Lazy.Search",
        "name": "Search",
        "normalized": "",
        "package": "text",
        "partial": "Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy-Search.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Find the offsets of all non-overlapping indices of\n \u003ccode\u003eneedle\u003c/code\u003e within \u003ccode\u003ehaystack\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function is strict in \u003ccode\u003eneedle\u003c/code\u003e, and lazy (as far as possible)\n in the chunks of \u003ccode\u003ehaystack\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this algorithm's complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy.Search",
        "fct-package": "text",
        "fct-signature": "Text-\u003e Text-\u003e [Int64]",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "Find the offsets of all non-overlapping indices of needle within haystack This function is strict in needle and lazy as far as possible in the chunks of haystack In unlikely bad cases this algorithm complexity degrades towards",
        "hierarchy": "Data Text Internal Lazy Search",
        "module": "Data.Text.Internal.Lazy.Search",
        "name": "indices",
        "normalized": "Text-\u003eText-\u003e[Int]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eA module containing private \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e internals. This exposes the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e representation and low level construction functions.\n Modules which extend the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e system may need to use this module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk module containing private Text internals This exposes the Text representation and low level construction functions Modules which extend the Text system may need to use this module",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "text",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#t:Text",
      "description": {
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Lazy.html#Text",
        "fct-type": "data",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "Text",
        "normalized": "",
        "package": "text",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:Chunk",
      "description": {
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "Chunk !Text Text",
        "fct-source": "src/Data-Text-Internal-Lazy.html#Text",
        "fct-type": "function",
        "title": "Chunk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "Chunk",
        "normalized": "",
        "package": "text",
        "partial": "Chunk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:Empty",
      "description": {
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "Empty",
        "fct-source": "src/Data-Text-Internal-Lazy.html#Text",
        "fct-type": "function",
        "title": "Empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "Empty",
        "normalized": "",
        "package": "text",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:chunk",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor for \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e. Guarantees the data type invariant.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Lazy.html#chunk",
        "fct-type": "function",
        "title": "chunk"
      },
      "index": {
        "description": "Smart constructor for Chunk Guarantees the data type invariant",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "chunk",
        "normalized": "Text-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:chunkOverhead",
      "description": {
        "fct-descr": "\u003cp\u003eThe memory management overhead. Currently this is tuned for GHC only.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "Int",
        "fct-source": "src/Data-Text-Internal-Lazy.html#chunkOverhead",
        "fct-type": "function",
        "title": "chunkOverhead"
      },
      "index": {
        "description": "The memory management overhead Currently this is tuned for GHC only",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "chunkOverhead",
        "normalized": "",
        "package": "text",
        "partial": "Overhead",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:defaultChunkSize",
      "description": {
        "fct-descr": "\u003cp\u003eCurrently set to 16 KiB, less the memory management overhead.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "Int",
        "fct-source": "src/Data-Text-Internal-Lazy.html#defaultChunkSize",
        "fct-type": "function",
        "title": "defaultChunkSize"
      },
      "index": {
        "description": "Currently set to KiB less the memory management overhead",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "defaultChunkSize",
        "normalized": "",
        "package": "text",
        "partial": "Chunk Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor for \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "Text",
        "fct-source": "src/Data-Text-Internal-Lazy.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Smart constructor for Empty",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "empty",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:foldlChunks",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the chunks of a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e with a strict, tail-recursive,\n accumulating left fold.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Text -\u003e a) -\u003e a -\u003e Text -\u003e a",
        "fct-source": "src/Data-Text-Internal-Lazy.html#foldlChunks",
        "fct-type": "function",
        "title": "foldlChunks"
      },
      "index": {
        "description": "Consume the chunks of lazy Text with strict tail-recursive accumulating left fold",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "foldlChunks",
        "normalized": "(a-\u003eText-\u003ea)-\u003ea-\u003eText-\u003ea",
        "package": "text",
        "partial": "Chunks",
        "signature": "(a-\u003eText-\u003ea)-\u003ea-\u003eText-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:foldrChunks",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the chunks of a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e with a natural right fold.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "(Text -\u003e a -\u003e a) -\u003e a -\u003e Text -\u003e a",
        "fct-source": "src/Data-Text-Internal-Lazy.html#foldrChunks",
        "fct-type": "function",
        "title": "foldrChunks"
      },
      "index": {
        "description": "Consume the chunks of lazy Text with natural right fold",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "foldrChunks",
        "normalized": "(Text-\u003ea-\u003ea)-\u003ea-\u003eText-\u003ea",
        "package": "text",
        "partial": "Chunks",
        "signature": "(Text-\u003ea-\u003ea)-\u003ea-\u003eText-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:lazyInvariant",
      "description": {
        "fct-descr": "\u003cp\u003eCheck the invariant lazily.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Lazy.html#lazyInvariant",
        "fct-type": "function",
        "title": "lazyInvariant"
      },
      "index": {
        "description": "Check the invariant lazily",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "lazyInvariant",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Invariant",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:showStructure",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay the internal structure of a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e String",
        "fct-source": "src/Data-Text-Internal-Lazy.html#showStructure",
        "fct-type": "function",
        "title": "showStructure"
      },
      "index": {
        "description": "Display the internal structure of lazy Text",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "showStructure",
        "normalized": "Text-\u003eString",
        "package": "text",
        "partial": "Structure",
        "signature": "Text-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:smallChunkSize",
      "description": {
        "fct-descr": "\u003cp\u003eCurrently set to 128 bytes, less the memory management overhead.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "Int",
        "fct-source": "src/Data-Text-Internal-Lazy.html#smallChunkSize",
        "fct-type": "function",
        "title": "smallChunkSize"
      },
      "index": {
        "description": "Currently set to bytes less the memory management overhead",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "smallChunkSize",
        "normalized": "",
        "package": "text",
        "partial": "Chunk Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Lazy.html#v:strictInvariant",
      "description": {
        "fct-descr": "\u003cp\u003eCheck the invariant strictly.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/Data-Text-Internal-Lazy.html#strictInvariant",
        "fct-type": "function",
        "title": "strictInvariant"
      },
      "index": {
        "description": "Check the invariant strictly",
        "hierarchy": "Data Text Internal Lazy",
        "module": "Data.Text.Internal.Lazy",
        "name": "strictInvariant",
        "normalized": "Text-\u003eBool",
        "package": "text",
        "partial": "Invariant",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Private.html#",
      "description": {
        "fct-module": "Data.Text.Internal.Private",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Private.html",
        "fct-type": "module",
        "title": "Private"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Private",
        "module": "Data.Text.Internal.Private",
        "name": "Private",
        "normalized": "",
        "package": "text",
        "partial": "Private",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Private.html#v:runText",
      "description": {
        "fct-module": "Data.Text.Internal.Private",
        "fct-package": "text",
        "fct-signature": "(forall s.  (MArray s -\u003e Int -\u003e ST s Text) -\u003e ST s Text) -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Private.html#runText",
        "fct-type": "function",
        "title": "runText"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Private",
        "module": "Data.Text.Internal.Private",
        "name": "runText",
        "normalized": "(a b(MArray c-\u003eInt-\u003eST c Text)-\u003eST c Text)-\u003eText",
        "package": "text",
        "partial": "Text",
        "signature": "(forall s.(MArray s-\u003eInt-\u003eST s Text)-\u003eST s Text)-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Private.html#v:span_",
      "description": {
        "fct-module": "Data.Text.Internal.Private",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e (#Text, Text#)",
        "fct-source": "src/Data-Text-Internal-Private.html#span_",
        "fct-type": "function",
        "title": "span_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Private",
        "module": "Data.Text.Internal.Private",
        "name": "span_",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003e(#Text,Text #)",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003e(#Text,Text #)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Search.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFast substring search for \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, based on work by Boyer, Moore,\n Horspool, Sunday, and Lundh.\n\u003c/p\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e R. S. Boyer, J. S. Moore: A Fast String Searching Algorithm.\n   Communications of the ACM, 20, 10, 762-772 (1977)\n\u003c/li\u003e\u003cli\u003e R. N. Horspool: Practical Fast Searching in Strings.  Software -\n   Practice and Experience 10, 501-506 (1980)\n\u003c/li\u003e\u003cli\u003e D. M. Sunday: A Very Fast Substring Search Algorithm.\n   Communications of the ACM, 33, 8, 132-142 (1990)\n\u003c/li\u003e\u003cli\u003e F. Lundh: The Fast Search Algorithm.\n   \u003ca\u003ehttp://effbot.org/zone/stringlib.htm\u003c/a\u003e (2006)\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Search",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Search.html",
        "fct-type": "module",
        "title": "Search"
      },
      "index": {
        "description": "Fast substring search for Text based on work by Boyer Moore Horspool Sunday and Lundh References Boyer Moore Fast String Searching Algorithm Communications of the ACM Horspool Practical Fast Searching in Strings Software Practice and Experience Sunday Very Fast Substring Search Algorithm Communications of the ACM Lundh The Fast Search Algorithm http effbot.org zone stringlib.htm",
        "hierarchy": "Data Text Internal Search",
        "module": "Data.Text.Internal.Search",
        "name": "Search",
        "normalized": "",
        "package": "text",
        "partial": "Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Search.html#v:indices",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Find the offsets of all non-overlapping indices of\n \u003ccode\u003eneedle\u003c/code\u003e within \u003ccode\u003ehaystack\u003c/code\u003e.  The offsets returned represent\n uncorrected indices in the low-level \"needle\" array, to which its\n offset must be added.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this algorithm's complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Search",
        "fct-package": "text",
        "fct-signature": "Text-\u003e Text-\u003e [Int]",
        "fct-type": "function",
        "title": "indices"
      },
      "index": {
        "description": "Find the offsets of all non-overlapping indices of needle within haystack The offsets returned represent uncorrected indices in the low-level needle array to which its offset must be added In unlikely bad cases this algorithm complexity degrades towards",
        "hierarchy": "Data Text Internal Search",
        "module": "Data.Text.Internal.Search",
        "name": "indices",
        "normalized": "Text-\u003eText-\u003e[Int]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe-Char.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eFast character manipulation functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Unsafe.Char",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Unsafe-Char.html",
        "fct-type": "module",
        "title": "Char"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Fast character manipulation functions",
        "hierarchy": "Data Text Internal Unsafe Char",
        "module": "Data.Text.Internal.Unsafe.Char",
        "name": "Char",
        "normalized": "",
        "package": "text",
        "partial": "Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe-Char.html#v:ord",
      "description": {
        "fct-module": "Data.Text.Internal.Unsafe.Char",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Int",
        "fct-source": "src/Data-Text-Internal-Unsafe-Char.html#ord",
        "fct-type": "function",
        "title": "ord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Unsafe Char",
        "module": "Data.Text.Internal.Unsafe.Char",
        "name": "ord",
        "normalized": "Char-\u003eInt",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe-Char.html#v:unsafeChr",
      "description": {
        "fct-module": "Data.Text.Internal.Unsafe.Char",
        "fct-package": "text",
        "fct-signature": "Word16 -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Unsafe-Char.html#unsafeChr",
        "fct-type": "function",
        "title": "unsafeChr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Unsafe Char",
        "module": "Data.Text.Internal.Unsafe.Char",
        "name": "unsafeChr",
        "normalized": "Word-\u003eChar",
        "package": "text",
        "partial": "Chr",
        "signature": "Word-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe-Char.html#v:unsafeChr32",
      "description": {
        "fct-module": "Data.Text.Internal.Unsafe.Char",
        "fct-package": "text",
        "fct-signature": "Word32 -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Unsafe-Char.html#unsafeChr32",
        "fct-type": "function",
        "title": "unsafeChr32"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Unsafe Char",
        "module": "Data.Text.Internal.Unsafe.Char",
        "name": "unsafeChr32",
        "normalized": "Word-\u003eChar",
        "package": "text",
        "partial": "Chr",
        "signature": "Word-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe-Char.html#v:unsafeChr8",
      "description": {
        "fct-module": "Data.Text.Internal.Unsafe.Char",
        "fct-package": "text",
        "fct-signature": "Word8 -\u003e Char",
        "fct-source": "src/Data-Text-Internal-Unsafe-Char.html#unsafeChr8",
        "fct-type": "function",
        "title": "unsafeChr8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Unsafe Char",
        "module": "Data.Text.Internal.Unsafe.Char",
        "name": "unsafeChr8",
        "normalized": "Word-\u003eChar",
        "package": "text",
        "partial": "Chr",
        "signature": "Word-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe-Char.html#v:unsafeWrite",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a character into the array at the given offset.  Returns\n the number of \u003ccode\u003e\u003ca\u003eWord16\u003c/a\u003e\u003c/code\u003es written.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Unsafe.Char",
        "fct-package": "text",
        "fct-signature": "MArray s -\u003e Int -\u003e Char -\u003e ST s Int",
        "fct-source": "src/Data-Text-Internal-Unsafe-Char.html#unsafeWrite",
        "fct-type": "function",
        "title": "unsafeWrite"
      },
      "index": {
        "description": "Write character into the array at the given offset Returns the number of Word16 written",
        "hierarchy": "Data Text Internal Unsafe Char",
        "module": "Data.Text.Internal.Unsafe.Char",
        "name": "unsafeWrite",
        "normalized": "MArray a-\u003eInt-\u003eChar-\u003eST a Int",
        "package": "text",
        "partial": "Write",
        "signature": "MArray s-\u003eInt-\u003eChar-\u003eST s Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe-Shift.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eFast, unchecked bit shifting functions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Unsafe.Shift",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Unsafe-Shift.html",
        "fct-type": "module",
        "title": "Shift"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk Fast unchecked bit shifting functions",
        "hierarchy": "Data Text Internal Unsafe Shift",
        "module": "Data.Text.Internal.Unsafe.Shift",
        "name": "Shift",
        "normalized": "",
        "package": "text",
        "partial": "Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe-Shift.html#t:UnsafeShift",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a workaround for poor optimisation in GHC 6.8.2.  It\n fails to notice constant-width shifts, and adds a test and branch\n to every shift.  This imposes about a 10% performance hit.\n\u003c/p\u003e\u003cp\u003eThese functions are undefined when the amount being shifted by is\n greater than the size in bits of a machine Int#.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Unsafe.Shift",
        "fct-package": "text",
        "fct-signature": "class",
        "fct-source": "src/Data-Text-Internal-Unsafe-Shift.html#UnsafeShift",
        "fct-type": "class",
        "title": "UnsafeShift"
      },
      "index": {
        "description": "This is workaround for poor optimisation in GHC It fails to notice constant-width shifts and adds test and branch to every shift This imposes about performance hit These functions are undefined when the amount being shifted by is greater than the size in bits of machine Int",
        "hierarchy": "Data Text Internal Unsafe Shift",
        "module": "Data.Text.Internal.Unsafe.Shift",
        "name": "UnsafeShift",
        "normalized": "",
        "package": "text",
        "partial": "Unsafe Shift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe-Shift.html#v:shiftL",
      "description": {
        "fct-module": "Data.Text.Internal.Unsafe.Shift",
        "fct-package": "text",
        "fct-signature": "a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Text-Internal-Unsafe-Shift.html#shiftL",
        "fct-type": "method",
        "title": "shiftL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Unsafe Shift",
        "module": "Data.Text.Internal.Unsafe.Shift",
        "name": "shiftL",
        "normalized": "a-\u003eInt-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe-Shift.html#v:shiftR",
      "description": {
        "fct-module": "Data.Text.Internal.Unsafe.Shift",
        "fct-package": "text",
        "fct-signature": "a -\u003e Int -\u003e a",
        "fct-source": "src/Data-Text-Internal-Unsafe-Shift.html#shiftR",
        "fct-type": "method",
        "title": "shiftR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal Unsafe Shift",
        "module": "Data.Text.Internal.Unsafe.Shift",
        "name": "shiftR",
        "normalized": "a-\u003eInt-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "a-\u003eInt-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003cem\u003eWarning\u003c/em\u003e: this is an internal module, and does not have a stable\n API or name. Functions in this module may not check or enforce\n preconditions expected by public modules. Use at your own risk!\n\u003c/p\u003e\u003cp\u003eA module containing \u003cem\u003eunsafe\u003c/em\u003e operations, for \u003cem\u003every very careful\u003c/em\u003e use\n in \u003cem\u003eheavily tested\u003c/em\u003e code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal.Unsafe",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "Warning this is an internal module and does not have stable API or name Functions in this module may not check or enforce preconditions expected by public modules Use at your own risk module containing unsafe operations for very very careful use in heavily tested code",
        "hierarchy": "Data Text Internal Unsafe",
        "module": "Data.Text.Internal.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "text",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe.html#v:inlineInterleaveST",
      "description": {
        "fct-descr": "\u003cp\u003eAllow an \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e computation to be deferred lazily. When passed an\n action of type \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, the action will only be performed when\n the value of \u003ccode\u003ea\u003c/code\u003e is demanded.\n\u003c/p\u003e\u003cp\u003eThis function is identical to the normal unsafeInterleaveST, but is\n inlined and hence faster.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This operation is highly unsafe, as it can introduce\n externally visible non-determinism into an \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Unsafe",
        "fct-package": "text",
        "fct-signature": "ST s a -\u003e ST s a",
        "fct-source": "src/Data-Text-Internal-Unsafe.html#inlineInterleaveST",
        "fct-type": "function",
        "title": "inlineInterleaveST"
      },
      "index": {
        "description": "Allow an ST computation to be deferred lazily When passed an action of type ST the action will only be performed when the value of is demanded This function is identical to the normal unsafeInterleaveST but is inlined and hence faster Note This operation is highly unsafe as it can introduce externally visible non-determinism into an ST action",
        "hierarchy": "Data Text Internal Unsafe",
        "module": "Data.Text.Internal.Unsafe",
        "name": "inlineInterleaveST",
        "normalized": "ST a b-\u003eST a b",
        "package": "text",
        "partial": "Interleave ST",
        "signature": "ST s a-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal-Unsafe.html#v:inlinePerformIO",
      "description": {
        "fct-descr": "\u003cp\u003eJust like unsafePerformIO, but we inline it. Big performance gains as\n it exposes lots of things to further inlining. \u003cem\u003eVery unsafe\u003c/em\u003e. In\n particular, you should do no memory allocation inside an\n \u003ccode\u003e\u003ca\u003einlinePerformIO\u003c/a\u003e\u003c/code\u003e block. On Hugs this is just \u003ccode\u003eunsafePerformIO\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal.Unsafe",
        "fct-package": "text",
        "fct-signature": "IO a -\u003e a",
        "fct-source": "src/Data-Text-Internal-Unsafe.html#inlinePerformIO",
        "fct-type": "function",
        "title": "inlinePerformIO"
      },
      "index": {
        "description": "Just like unsafePerformIO but we inline it Big performance gains as it exposes lots of things to further inlining Very unsafe In particular you should do no memory allocation inside an inlinePerformIO block On Hugs this is just unsafePerformIO",
        "hierarchy": "Data Text Internal Unsafe",
        "module": "Data.Text.Internal.Unsafe",
        "name": "inlinePerformIO",
        "normalized": "IO a-\u003ea",
        "package": "text",
        "partial": "Perform IO",
        "signature": "IO a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing private \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e internals. This exposes the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e representation and low level construction functions.\n Modules which extend the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e system may need to use this module.\n\u003c/p\u003e\u003cp\u003eYou should not use this module unless you are determined to monkey\n with the internals, as the functions here do just about nothing to\n preserve data invariants.  You have been warned!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Internal",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "module containing private Text internals This exposes the Text representation and low level construction functions Modules which extend the Text system may need to use this module You should not use this module unless you are determined to monkey with the internals as the functions here do just about nothing to preserve data invariants You have been warned",
        "hierarchy": "Data Text Internal",
        "module": "Data.Text.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "text",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal.html#t:Text",
      "description": {
        "fct-descr": "\u003cp\u003eA space efficient, packed, unboxed Unicode text type.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal.html#Text",
        "fct-type": "data",
        "title": "Text"
      },
      "index": {
        "description": "space efficient packed unboxed Unicode text type",
        "hierarchy": "Data Text Internal",
        "module": "Data.Text.Internal",
        "name": "Text",
        "normalized": "",
        "package": "text",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal.html#v:Text",
      "description": {
        "fct-module": "Data.Text.Internal",
        "fct-package": "text",
        "fct-signature": "Text !Array !Int !Int",
        "fct-source": "src/Data-Text-Internal.html#Text",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Internal",
        "module": "Data.Text.Internal",
        "name": "Text",
        "normalized": "",
        "package": "text",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal",
        "fct-package": "text",
        "fct-signature": "Text",
        "fct-source": "src/Data-Text-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty Text",
        "hierarchy": "Data Text Internal",
        "module": "Data.Text.Internal",
        "name": "empty",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal.html#v:firstf",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to the first element of an optional pair.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal",
        "fct-package": "text",
        "fct-signature": "(a -\u003e c) -\u003e Maybe (a, b) -\u003e Maybe (c, b)",
        "fct-source": "src/Data-Text-Internal.html#firstf",
        "fct-type": "function",
        "title": "firstf"
      },
      "index": {
        "description": "Apply function to the first element of an optional pair",
        "hierarchy": "Data Text Internal",
        "module": "Data.Text.Internal",
        "name": "firstf",
        "normalized": "(a-\u003eb)-\u003eMaybe(a,c)-\u003eMaybe(b,c)",
        "package": "text",
        "partial": "",
        "signature": "(a-\u003ec)-\u003eMaybe(a,b)-\u003eMaybe(c,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal.html#v:safe",
      "description": {
        "fct-descr": "\u003cp\u003eMap a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e-safe value.\n\u003c/p\u003e\u003cp\u003eUTF-16 surrogate code points are not included in the set of Unicode\n scalar values, but are unfortunately admitted as valid \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e\n values by Haskell.  They cannot be represented in a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  This\n function remaps those code points to the Unicode replacement\n character (U+FFFD, '&#65533;'), and leaves other code points\n unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Char",
        "fct-source": "src/Data-Text-Internal.html#safe",
        "fct-type": "function",
        "title": "safe"
      },
      "index": {
        "description": "Map Char to Text safe value UTF-16 surrogate code points are not included in the set of Unicode scalar values but are unfortunately admitted as valid Char values by Haskell They cannot be represented in Text This function remaps those code points to the Unicode replacement character FFFD and leaves other code points unchanged",
        "hierarchy": "Data Text Internal",
        "module": "Data.Text.Internal",
        "name": "safe",
        "normalized": "Char-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal.html#v:showText",
      "description": {
        "fct-descr": "\u003cp\u003eA useful \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e-like function for debugging purposes.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal",
        "fct-package": "text",
        "fct-signature": "Text -\u003e String",
        "fct-source": "src/Data-Text-Internal.html#showText",
        "fct-type": "function",
        "title": "showText"
      },
      "index": {
        "description": "useful show like function for debugging purposes",
        "hierarchy": "Data Text Internal",
        "module": "Data.Text.Internal",
        "name": "showText",
        "normalized": "Text-\u003eString",
        "package": "text",
        "partial": "Text",
        "signature": "Text-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal",
        "fct-package": "text",
        "fct-signature": "Array -\u003e Int -\u003e Int -\u003e Text",
        "fct-source": "src/Data-Text-Internal.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Smart constructor",
        "hierarchy": "Data Text Internal",
        "module": "Data.Text.Internal",
        "name": "text",
        "normalized": "Array-\u003eInt-\u003eInt-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Array-\u003eInt-\u003eInt-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Internal.html#v:textP",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e without invisibly pinning its byte array in\n memory if its length has dwindled to zero.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Internal",
        "fct-package": "text",
        "fct-signature": "Array -\u003e Int -\u003e Int -\u003e Text",
        "fct-source": "src/Data-Text-Internal.html#textP",
        "fct-type": "function",
        "title": "textP"
      },
      "index": {
        "description": "Construct Text without invisibly pinning its byte array in memory if its length has dwindled to zero",
        "hierarchy": "Data Text Internal",
        "module": "Data.Text.Internal",
        "name": "textP",
        "normalized": "Array-\u003eInt-\u003eInt-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Array-\u003eInt-\u003eInt-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder-Int.html#",
      "description": {
        "fct-module": "Data.Text.Lazy.Builder.Int",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Lazy-Builder-Int.html",
        "fct-type": "module",
        "title": "Int"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Lazy Builder Int",
        "module": "Data.Text.Lazy.Builder.Int",
        "name": "Int",
        "normalized": "",
        "package": "text",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder-Int.html#v:decimal",
      "description": {
        "fct-module": "Data.Text.Lazy.Builder.Int",
        "fct-package": "text",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Data-Text-Lazy-Builder-Int.html#decimal",
        "fct-type": "function",
        "title": "decimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Lazy Builder Int",
        "module": "Data.Text.Lazy.Builder.Int",
        "name": "decimal",
        "normalized": "a-\u003eBuilder",
        "package": "text",
        "partial": "",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder-Int.html#v:hexadecimal",
      "description": {
        "fct-module": "Data.Text.Lazy.Builder.Int",
        "fct-package": "text",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Data-Text-Lazy-Builder-Int.html#hexadecimal",
        "fct-type": "function",
        "title": "hexadecimal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Lazy Builder Int",
        "module": "Data.Text.Lazy.Builder.Int",
        "name": "hexadecimal",
        "normalized": "a-\u003eBuilder",
        "package": "text",
        "partial": "",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder-RealFloat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrite a floating point value to a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Lazy.Builder.RealFloat",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Lazy-Builder-RealFloat.html",
        "fct-type": "module",
        "title": "RealFloat"
      },
      "index": {
        "description": "Write floating point value to Builder",
        "hierarchy": "Data Text Lazy Builder RealFloat",
        "module": "Data.Text.Lazy.Builder.RealFloat",
        "name": "RealFloat",
        "normalized": "",
        "package": "text",
        "partial": "Real Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder-RealFloat.html#t:FPFormat",
      "description": {
        "fct-descr": "\u003cp\u003eControl the rendering of floating point numbers.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Builder.RealFloat",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Lazy-Builder-RealFloat.html#FPFormat",
        "fct-type": "data",
        "title": "FPFormat"
      },
      "index": {
        "description": "Control the rendering of floating point numbers",
        "hierarchy": "Data Text Lazy Builder RealFloat",
        "module": "Data.Text.Lazy.Builder.RealFloat",
        "name": "FPFormat",
        "normalized": "",
        "package": "text",
        "partial": "FPFormat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder-RealFloat.html#v:Exponent",
      "description": {
        "fct-descr": "\u003cp\u003eScientific notation (e.g. \u003ccode\u003e2.3e123\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Builder.RealFloat",
        "fct-package": "text",
        "fct-signature": "Exponent",
        "fct-source": "src/Data-Text-Lazy-Builder-RealFloat.html#FPFormat",
        "fct-type": "function",
        "title": "Exponent"
      },
      "index": {
        "description": "Scientific notation e.g e123",
        "hierarchy": "Data Text Lazy Builder RealFloat",
        "module": "Data.Text.Lazy.Builder.RealFloat",
        "name": "Exponent",
        "normalized": "",
        "package": "text",
        "partial": "Exponent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder-RealFloat.html#v:Fixed",
      "description": {
        "fct-descr": "\u003cp\u003eStandard decimal notation.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Builder.RealFloat",
        "fct-package": "text",
        "fct-signature": "Fixed",
        "fct-source": "src/Data-Text-Lazy-Builder-RealFloat.html#FPFormat",
        "fct-type": "function",
        "title": "Fixed"
      },
      "index": {
        "description": "Standard decimal notation",
        "hierarchy": "Data Text Lazy Builder RealFloat",
        "module": "Data.Text.Lazy.Builder.RealFloat",
        "name": "Fixed",
        "normalized": "",
        "package": "text",
        "partial": "Fixed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder-RealFloat.html#v:Generic",
      "description": {
        "fct-descr": "\u003cp\u003eUse decimal notation for values between \u003ccode\u003e0.1\u003c/code\u003e and\n \u003ccode\u003e9,999,999\u003c/code\u003e, and scientific notation otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Builder.RealFloat",
        "fct-package": "text",
        "fct-signature": "Generic",
        "fct-source": "src/Data-Text-Lazy-Builder-RealFloat.html#FPFormat",
        "fct-type": "function",
        "title": "Generic"
      },
      "index": {
        "description": "Use decimal notation for values between and and scientific notation otherwise",
        "hierarchy": "Data Text Lazy Builder RealFloat",
        "module": "Data.Text.Lazy.Builder.RealFloat",
        "name": "Generic",
        "normalized": "",
        "package": "text",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder-RealFloat.html#v:formatRealFloat",
      "description": {
        "fct-module": "Data.Text.Lazy.Builder.RealFloat",
        "fct-package": "text",
        "fct-signature": "FPFormat-\u003e Maybe Int-\u003e a-\u003e Builder",
        "fct-type": "function",
        "title": "formatRealFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Lazy Builder RealFloat",
        "module": "Data.Text.Lazy.Builder.RealFloat",
        "name": "formatRealFloat",
        "normalized": "FPFormat-\u003eMaybe Int-\u003ea-\u003eBuilder",
        "package": "text",
        "partial": "Real Float",
        "signature": "FPFormat-\u003eMaybe Int-\u003ea-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder-RealFloat.html#v:realFloat",
      "description": {
        "fct-descr": "\u003cp\u003eShow a signed \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e value to full precision,\n using standard decimal notation for arguments whose absolute value lies\n between \u003ccode\u003e0.1\u003c/code\u003e and \u003ccode\u003e9,999,999\u003c/code\u003e, and scientific notation otherwise.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Builder.RealFloat",
        "fct-package": "text",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Data-Text-Lazy-Builder-RealFloat.html#realFloat",
        "fct-type": "function",
        "title": "realFloat"
      },
      "index": {
        "description": "Show signed RealFloat value to full precision using standard decimal notation for arguments whose absolute value lies between and and scientific notation otherwise",
        "hierarchy": "Data Text Lazy Builder RealFloat",
        "module": "Data.Text.Lazy.Builder.RealFloat",
        "name": "realFloat",
        "normalized": "a-\u003eBuilder",
        "package": "text",
        "partial": "Float",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient construction of lazy \u003ccode\u003eText\u003c/code\u003e values.  The principal\n operations on a \u003ccode\u003eBuilder\u003c/code\u003e are \u003ccode\u003esingleton\u003c/code\u003e, \u003ccode\u003efromText\u003c/code\u003e, and\n \u003ccode\u003efromLazyText\u003c/code\u003e, which construct new builders, and \u003ccode\u003emappend\u003c/code\u003e, which\n concatenates two builders.\n\u003c/p\u003e\u003cp\u003eTo get maximum performance when building lazy \u003ccode\u003eText\u003c/code\u003e values using a\n builder, associate \u003ccode\u003emappend\u003c/code\u003e calls to the right.  For example,\n prefer\n\u003c/p\u003e\u003cpre\u003e singleton 'a' `mappend` (singleton 'b' `mappend` singleton 'c')\n\u003c/pre\u003e\u003cp\u003eto\n\u003c/p\u003e\u003cpre\u003e singleton 'a' `mappend` singleton 'b' `mappend` singleton 'c'\n\u003c/pre\u003e\u003cp\u003eas the latter associates \u003ccode\u003emappend\u003c/code\u003e to the left. Or, equivalently,\n prefer\n\u003c/p\u003e\u003cpre\u003e singleton 'a' \u003c\u003e singleton 'b' \u003c\u003e singleton 'c'\n\u003c/pre\u003e\u003cp\u003esince the \u003ccode\u003e\u003c\u003e\u003c/code\u003e from recent versions of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e associates\n to the right.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Lazy.Builder",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Lazy-Builder.html",
        "fct-type": "module",
        "title": "Builder"
      },
      "index": {
        "description": "Efficient construction of lazy Text values The principal operations on Builder are singleton fromText and fromLazyText which construct new builders and mappend which concatenates two builders To get maximum performance when building lazy Text values using builder associate mappend calls to the right For example prefer singleton mappend singleton mappend singleton to singleton mappend singleton mappend singleton as the latter associates mappend to the left Or equivalently prefer singleton singleton singleton since the from recent versions of Monoid associates to the right",
        "hierarchy": "Data Text Lazy Builder",
        "module": "Data.Text.Lazy.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "text",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder.html#t:Builder",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eBuilder\u003c/code\u003e is an efficient way to build lazy \u003ccode\u003eText\u003c/code\u003e values.\n There are several functions for constructing builders, but only one\n to inspect them: to extract any data, you have to turn them into\n lazy \u003ccode\u003eText\u003c/code\u003e values using \u003ccode\u003etoLazyText\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eInternally, a builder constructs a lazy \u003ccode\u003eText\u003c/code\u003e by filling arrays\n piece by piece.  As each buffer is filled, it is 'popped' off, to\n become a new chunk of the resulting lazy \u003ccode\u003eText\u003c/code\u003e.  All this is\n hidden from the user of the \u003ccode\u003eBuilder\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Builder",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Builder.html#Builder",
        "fct-type": "data",
        "title": "Builder"
      },
      "index": {
        "description": "Builder is an efficient way to build lazy Text values There are several functions for constructing builders but only one to inspect them to extract any data you have to turn them into lazy Text values using toLazyText Internally builder constructs lazy Text by filling arrays piece by piece As each buffer is filled it is popped off to become new chunk of the resulting lazy Text All this is hidden from the user of the Builder",
        "hierarchy": "Data Text Lazy Builder",
        "module": "Data.Text.Lazy.Builder",
        "name": "Builder",
        "normalized": "",
        "package": "text",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e Pop the strict \u003ccode\u003eText\u003c/code\u003e we have constructed so far, if any,\n yielding a new chunk in the result lazy \u003ccode\u003eText\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Builder",
        "fct-package": "text",
        "fct-signature": "Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Pop the strict Text we have constructed so far if any yielding new chunk in the result lazy Text",
        "hierarchy": "Data Text Lazy Builder",
        "module": "Data.Text.Lazy.Builder",
        "name": "flush",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder.html#v:fromLazyText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A \u003ccode\u003eBuilder\u003c/code\u003e taking a lazy \u003ccode\u003eText\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyText\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromLazyText\u003c/a\u003e\u003c/code\u003e t) = t\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Text.Lazy.Builder",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#fromLazyText",
        "fct-type": "function",
        "title": "fromLazyText"
      },
      "index": {
        "description": "Builder taking lazy Text satisfying toLazyText fromLazyText",
        "hierarchy": "Data Text Lazy Builder",
        "module": "Data.Text.Lazy.Builder",
        "name": "fromLazyText",
        "normalized": "Text-\u003eBuilder",
        "package": "text",
        "partial": "Lazy Text",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder.html#v:fromString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A Builder taking a \u003ccode\u003eString\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyText\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e s) = \u003ccode\u003e\u003ca\u003efromChunks\u003c/a\u003e\u003c/code\u003e [S.pack s]\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Text.Lazy.Builder",
        "fct-package": "text",
        "fct-signature": "String -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#fromString",
        "fct-type": "function",
        "title": "fromString"
      },
      "index": {
        "description": "Builder taking String satisfying toLazyText fromString fromChunks S.pack",
        "hierarchy": "Data Text Lazy Builder",
        "module": "Data.Text.Lazy.Builder",
        "name": "fromString",
        "normalized": "String-\u003eBuilder",
        "package": "text",
        "partial": "String",
        "signature": "String-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder.html#v:fromText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A \u003ccode\u003eBuilder\u003c/code\u003e taking a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyText\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efromText\u003c/a\u003e\u003c/code\u003e t) = \u003ccode\u003e\u003ca\u003efromChunks\u003c/a\u003e\u003c/code\u003e [t]\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Text.Lazy.Builder",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#fromText",
        "fct-type": "function",
        "title": "fromText"
      },
      "index": {
        "description": "Builder taking Text satisfying toLazyText fromText fromChunks",
        "hierarchy": "Data Text Lazy Builder",
        "module": "Data.Text.Lazy.Builder",
        "name": "fromText",
        "normalized": "Text-\u003eBuilder",
        "package": "text",
        "partial": "Text",
        "signature": "Text-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1).\u003c/em\u003e A \u003ccode\u003eBuilder\u003c/code\u003e taking a single character, satisfying\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etoLazyText\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e c) = \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e c\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Text.Lazy.Builder",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Builder",
        "fct-source": "src/Data-Text-Internal-Builder.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Builder taking single character satisfying toLazyText singleton singleton",
        "hierarchy": "Data Text Lazy Builder",
        "module": "Data.Text.Lazy.Builder",
        "name": "singleton",
        "normalized": "Char-\u003eBuilder",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder.html#v:toLazyText",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Extract a lazy \u003ccode\u003eText\u003c/code\u003e from a \u003ccode\u003eBuilder\u003c/code\u003e with a default\n buffer size.  The construction work takes place if and when the\n relevant part of the lazy \u003ccode\u003eText\u003c/code\u003e is demanded.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Builder",
        "fct-package": "text",
        "fct-signature": "Builder -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Builder.html#toLazyText",
        "fct-type": "function",
        "title": "toLazyText"
      },
      "index": {
        "description": "Extract lazy Text from Builder with default buffer size The construction work takes place if and when the relevant part of the lazy Text is demanded",
        "hierarchy": "Data Text Lazy Builder",
        "module": "Data.Text.Lazy.Builder",
        "name": "toLazyText",
        "normalized": "Builder-\u003eText",
        "package": "text",
        "partial": "Lazy Text",
        "signature": "Builder-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Builder.html#v:toLazyTextWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Extract a lazy \u003ccode\u003eText\u003c/code\u003e from a \u003ccode\u003eBuilder\u003c/code\u003e, using the given\n size for the initial buffer.  The construction work takes place if\n and when the relevant part of the lazy \u003ccode\u003eText\u003c/code\u003e is demanded.\n\u003c/p\u003e\u003cp\u003eIf the initial buffer is too small to hold all data, subsequent\n buffers will be the default buffer size.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Builder",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Builder -\u003e Text",
        "fct-source": "src/Data-Text-Internal-Builder.html#toLazyTextWith",
        "fct-type": "function",
        "title": "toLazyTextWith"
      },
      "index": {
        "description": "Extract lazy Text from Builder using the given size for the initial buffer The construction work takes place if and when the relevant part of the lazy Text is demanded If the initial buffer is too small to hold all data subsequent buffers will be the default buffer size",
        "hierarchy": "Data Text Lazy Builder",
        "module": "Data.Text.Lazy.Builder",
        "name": "toLazyTextWith",
        "normalized": "Int-\u003eBuilder-\u003eText",
        "package": "text",
        "partial": "Lazy Text With",
        "signature": "Int-\u003eBuilder-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for converting lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e values to and from lazy\n \u003ccode\u003eByteString\u003c/code\u003e, using several standard encodings.\n\u003c/p\u003e\u003cp\u003eTo gain access to a much larger variety of encodings, use the\n \u003ccode\u003etext-icu\u003c/code\u003e package: \u003ca\u003ehttp://hackage.haskell.org/package/text-icu\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Lazy-Encoding.html",
        "fct-type": "module",
        "title": "Encoding"
      },
      "index": {
        "description": "Functions for converting lazy Text values to and from lazy ByteString using several standard encodings To gain access to much larger variety of encodings use the text-icu package http hackage.haskell.org package text-icu",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "Encoding",
        "normalized": "",
        "package": "text",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeASCII",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use decodeUtf8 instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003e\u003cem\u003eDeprecated\u003c/em\u003e.  Decode a \u003ccode\u003eByteString\u003c/code\u003e containing 7-bit ASCII\n encoded text.\n\u003c/p\u003e\u003cp\u003eThis function is deprecated.  Use \u003ccode\u003e\u003ca\u003edecodeLatin1\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeASCII",
        "fct-type": "function",
        "title": "decodeASCII"
      },
      "index": {
        "description": "Deprecated Use decodeUtf8 instead Deprecated Decode ByteString containing bit ASCII encoded text This function is deprecated Use decodeLatin1 instead",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeASCII",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "ASCII",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeLatin1",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003eByteString\u003c/code\u003e containing Latin-1 (aka ISO-8859-1) encoded text.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeLatin1",
        "fct-type": "function",
        "title": "decodeLatin1"
      },
      "index": {
        "description": "Decode ByteString containing Latin-1 aka ISO-8859-1 encoded text",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeLatin1",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Latin",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf16BE",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from big endian UTF-16 encoding.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid big endian UTF-16 data, an\n exception will be thrown.  For more control over the handling of\n invalid data, use \u003ccode\u003e\u003ca\u003edecodeUtf16BEWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf16BE",
        "fct-type": "function",
        "title": "decodeUtf16BE"
      },
      "index": {
        "description": "Decode text from big endian UTF-16 encoding If the input contains any invalid big endian UTF-16 data an exception will be thrown For more control over the handling of invalid data use decodeUtf16BEWith",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf16BE",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Utf BE",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf16BEWith",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from big endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf16BEWith",
        "fct-type": "function",
        "title": "decodeUtf16BEWith"
      },
      "index": {
        "description": "Decode text from big endian UTF-16 encoding",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf16BEWith",
        "normalized": "OnDecodeError-\u003eByteString-\u003eText",
        "package": "text",
        "partial": "Utf BEWith",
        "signature": "OnDecodeError-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf16LE",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from little endian UTF-16 encoding.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid little endian UTF-16 data, an\n exception will be thrown.  For more control over the handling of\n invalid data, use \u003ccode\u003e\u003ca\u003edecodeUtf16LEWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf16LE",
        "fct-type": "function",
        "title": "decodeUtf16LE"
      },
      "index": {
        "description": "Decode text from little endian UTF-16 encoding If the input contains any invalid little endian UTF-16 data an exception will be thrown For more control over the handling of invalid data use decodeUtf16LEWith",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf16LE",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Utf LE",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf16LEWith",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from little endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf16LEWith",
        "fct-type": "function",
        "title": "decodeUtf16LEWith"
      },
      "index": {
        "description": "Decode text from little endian UTF-16 encoding",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf16LEWith",
        "normalized": "OnDecodeError-\u003eByteString-\u003eText",
        "package": "text",
        "partial": "Utf LEWith",
        "signature": "OnDecodeError-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf32BE",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from big endian UTF-32 encoding.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid big endian UTF-32 data, an\n exception will be thrown.  For more control over the handling of\n invalid data, use \u003ccode\u003e\u003ca\u003edecodeUtf32BEWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf32BE",
        "fct-type": "function",
        "title": "decodeUtf32BE"
      },
      "index": {
        "description": "Decode text from big endian UTF-32 encoding If the input contains any invalid big endian UTF-32 data an exception will be thrown For more control over the handling of invalid data use decodeUtf32BEWith",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf32BE",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Utf BE",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf32BEWith",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from big endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf32BEWith",
        "fct-type": "function",
        "title": "decodeUtf32BEWith"
      },
      "index": {
        "description": "Decode text from big endian UTF-32 encoding",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf32BEWith",
        "normalized": "OnDecodeError-\u003eByteString-\u003eText",
        "package": "text",
        "partial": "Utf BEWith",
        "signature": "OnDecodeError-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf32LE",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from little endian UTF-32 encoding.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid little endian UTF-32 data, an\n exception will be thrown.  For more control over the handling of\n invalid data, use \u003ccode\u003e\u003ca\u003edecodeUtf32LEWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf32LE",
        "fct-type": "function",
        "title": "decodeUtf32LE"
      },
      "index": {
        "description": "Decode text from little endian UTF-32 encoding If the input contains any invalid little endian UTF-32 data an exception will be thrown For more control over the handling of invalid data use decodeUtf32LEWith",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf32LE",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Utf LE",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf32LEWith",
      "description": {
        "fct-descr": "\u003cp\u003eDecode text from little endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf32LEWith",
        "fct-type": "function",
        "title": "decodeUtf32LEWith"
      },
      "index": {
        "description": "Decode text from little endian UTF-32 encoding",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf32LEWith",
        "normalized": "OnDecodeError-\u003eByteString-\u003eText",
        "package": "text",
        "partial": "Utf LEWith",
        "signature": "OnDecodeError-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003eByteString\u003c/code\u003e containing UTF-8 encoded text that is known\n to be valid.\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid UTF-8 data, an exception will be\n thrown that cannot be caught in pure code.  For more control over\n the handling of invalid data, use \u003ccode\u003e\u003ca\u003edecodeUtf8'\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003edecodeUtf8With\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf8",
        "fct-type": "function",
        "title": "decodeUtf8"
      },
      "index": {
        "description": "Decode ByteString containing UTF-8 encoded text that is known to be valid If the input contains any invalid UTF-8 data an exception will be thrown that cannot be caught in pure code For more control over the handling of invalid data use decodeUtf8 or decodeUtf8With",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf8",
        "normalized": "ByteString-\u003eText",
        "package": "text",
        "partial": "Utf",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf8-39-",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003eByteString\u003c/code\u003e containing UTF-8 encoded text..\n\u003c/p\u003e\u003cp\u003eIf the input contains any invalid UTF-8 data, the relevant\n exception will be returned, otherwise the decoded text.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: this function is \u003cem\u003enot\u003c/em\u003e lazy, as it must decode its entire\n input before it can return a result.  If you need lazy (streaming)\n decoding, use \u003ccode\u003e\u003ca\u003edecodeUtf8With\u003c/a\u003e\u003c/code\u003e in lenient mode.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "ByteString -\u003e Either UnicodeException Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf8%27",
        "fct-type": "function",
        "title": "decodeUtf8'"
      },
      "index": {
        "description": "Decode ByteString containing UTF-8 encoded text If the input contains any invalid UTF-8 data the relevant exception will be returned otherwise the decoded text Note this function is not lazy as it must decode its entire input before it can return result If you need lazy streaming decoding use decodeUtf8With in lenient mode",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf8'",
        "normalized": "ByteString-\u003eEither UnicodeException Text",
        "package": "text",
        "partial": "Utf",
        "signature": "ByteString-\u003eEither UnicodeException Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:decodeUtf8With",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a \u003ccode\u003eByteString\u003c/code\u003e containing UTF-8 encoded text.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "OnDecodeError -\u003e ByteString -\u003e Text",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#decodeUtf8With",
        "fct-type": "function",
        "title": "decodeUtf8With"
      },
      "index": {
        "description": "Decode ByteString containing UTF-8 encoded text",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "decodeUtf8With",
        "normalized": "OnDecodeError-\u003eByteString-\u003eText",
        "package": "text",
        "partial": "Utf With",
        "signature": "OnDecodeError-\u003eByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:encodeUtf16BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode text using big endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "Text -\u003e ByteString",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#encodeUtf16BE",
        "fct-type": "function",
        "title": "encodeUtf16BE"
      },
      "index": {
        "description": "Encode text using big endian UTF-16 encoding",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "encodeUtf16BE",
        "normalized": "Text-\u003eByteString",
        "package": "text",
        "partial": "Utf BE",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:encodeUtf16LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode text using little endian UTF-16 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "Text -\u003e ByteString",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#encodeUtf16LE",
        "fct-type": "function",
        "title": "encodeUtf16LE"
      },
      "index": {
        "description": "Encode text using little endian UTF-16 encoding",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "encodeUtf16LE",
        "normalized": "Text-\u003eByteString",
        "package": "text",
        "partial": "Utf LE",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:encodeUtf32BE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode text using big endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "Text -\u003e ByteString",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#encodeUtf32BE",
        "fct-type": "function",
        "title": "encodeUtf32BE"
      },
      "index": {
        "description": "Encode text using big endian UTF-32 encoding",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "encodeUtf32BE",
        "normalized": "Text-\u003eByteString",
        "package": "text",
        "partial": "Utf BE",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:encodeUtf32LE",
      "description": {
        "fct-descr": "\u003cp\u003eEncode text using little endian UTF-32 encoding.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "Text -\u003e ByteString",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#encodeUtf32LE",
        "fct-type": "function",
        "title": "encodeUtf32LE"
      },
      "index": {
        "description": "Encode text using little endian UTF-32 encoding",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "encodeUtf32LE",
        "normalized": "Text-\u003eByteString",
        "package": "text",
        "partial": "Utf LE",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Encoding.html#v:encodeUtf8",
      "description": {
        "fct-module": "Data.Text.Lazy.Encoding",
        "fct-package": "text",
        "fct-signature": "Text -\u003e ByteString",
        "fct-source": "src/Data-Text-Lazy-Encoding.html#encodeUtf8",
        "fct-type": "function",
        "title": "encodeUtf8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Lazy Encoding",
        "module": "Data.Text.Lazy.Encoding",
        "name": "encodeUtf8",
        "normalized": "Text-\u003eByteString",
        "package": "text",
        "partial": "Utf",
        "signature": "Text-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficient locale-sensitive support for lazy text I/O.\n\u003c/p\u003e\u003cp\u003eSkip past the synopsis for some important notes on performance and\n portability across different versions of GHC.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Lazy-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "Efficient locale-sensitive support for lazy text Skip past the synopsis for some important notes on performance and portability across different versions of GHC",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "IO",
        "normalized": "",
        "package": "text",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:appendFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string the end of a file.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "FilePath -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-Lazy-IO.html#appendFile",
        "fct-type": "function",
        "title": "appendFile"
      },
      "index": {
        "description": "Write string the end of file",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "appendFile",
        "normalized": "FilePath-\u003eText-\u003eIO()",
        "package": "text",
        "partial": "File",
        "signature": "FilePath-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:getContents",
      "description": {
        "fct-descr": "\u003cp\u003eLazily read all user input on \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e as a single string.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "IO Text",
        "fct-source": "src/Data-Text-Lazy-IO.html#getContents",
        "fct-type": "function",
        "title": "getContents"
      },
      "index": {
        "description": "Lazily read all user input on stdin as single string",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "getContents",
        "normalized": "",
        "package": "text",
        "partial": "Contents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:getLine",
      "description": {
        "fct-descr": "\u003cp\u003eRead a single line of user input from \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "IO Text",
        "fct-source": "src/Data-Text-Lazy-IO.html#getLine",
        "fct-type": "function",
        "title": "getLine"
      },
      "index": {
        "description": "Read single line of user input from stdin",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "getLine",
        "normalized": "",
        "package": "text",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:hGetContents",
      "description": {
        "fct-descr": "\u003cp\u003eLazily read the remaining contents of a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e\n will be closed after the read completes, or on error.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "Handle -\u003e IO Text",
        "fct-source": "src/Data-Text-Lazy-IO.html#hGetContents",
        "fct-type": "function",
        "title": "hGetContents"
      },
      "index": {
        "description": "Lazily read the remaining contents of Handle The Handle will be closed after the read completes or on error",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "hGetContents",
        "normalized": "Handle-\u003eIO Text",
        "package": "text",
        "partial": "Get Contents",
        "signature": "Handle-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:hGetLine",
      "description": {
        "fct-descr": "\u003cp\u003eRead a single line from a handle.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "Handle -\u003e IO Text",
        "fct-source": "src/Data-Text-Lazy-IO.html#hGetLine",
        "fct-type": "function",
        "title": "hGetLine"
      },
      "index": {
        "description": "Read single line from handle",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "hGetLine",
        "normalized": "Handle-\u003eIO Text",
        "package": "text",
        "partial": "Get Line",
        "signature": "Handle-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:hPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to a handle.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "Handle -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-Lazy-IO.html#hPutStr",
        "fct-type": "function",
        "title": "hPutStr"
      },
      "index": {
        "description": "Write string to handle",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "hPutStr",
        "normalized": "Handle-\u003eText-\u003eIO()",
        "package": "text",
        "partial": "Put Str",
        "signature": "Handle-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:hPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to a handle, followed by a newline.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "Handle -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-Lazy-IO.html#hPutStrLn",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "Write string to handle followed by newline",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "hPutStrLn",
        "normalized": "Handle-\u003eText-\u003eIO()",
        "package": "text",
        "partial": "Put Str Ln",
        "signature": "Handle-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:interact",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einteract\u003c/a\u003e\u003c/code\u003e function takes a function of type \u003ccode\u003eText -\u003e Text\u003c/code\u003e\n as its argument. The entire input from the standard input device is\n passed (lazily) to this function as its argument, and the resulting\n string is output on the standard output device.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "(Text -\u003e Text) -\u003e IO ()",
        "fct-source": "src/Data-Text-Lazy-IO.html#interact",
        "fct-type": "function",
        "title": "interact"
      },
      "index": {
        "description": "The interact function takes function of type Text Text as its argument The entire input from the standard input device is passed lazily to this function as its argument and the resulting string is output on the standard output device",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "interact",
        "normalized": "(Text-\u003eText)-\u003eIO()",
        "package": "text",
        "partial": "",
        "signature": "(Text-\u003eText)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:putStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "Text -\u003e IO ()",
        "fct-source": "src/Data-Text-Lazy-IO.html#putStr",
        "fct-type": "function",
        "title": "putStr"
      },
      "index": {
        "description": "Write string to stdout",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "putStr",
        "normalized": "Text-\u003eIO()",
        "package": "text",
        "partial": "Str",
        "signature": "Text-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:putStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e, followed by a newline.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "Text -\u003e IO ()",
        "fct-source": "src/Data-Text-Lazy-IO.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "Write string to stdout followed by newline",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "putStrLn",
        "normalized": "Text-\u003eIO()",
        "package": "text",
        "partial": "Str Ln",
        "signature": "Text-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:readFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a file and return its contents as a string.  The file is\n read lazily, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "FilePath -\u003e IO Text",
        "fct-source": "src/Data-Text-Lazy-IO.html#readFile",
        "fct-type": "function",
        "title": "readFile"
      },
      "index": {
        "description": "Read file and return its contents as string The file is read lazily as with getContents",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "readFile",
        "normalized": "FilePath-\u003eIO Text",
        "package": "text",
        "partial": "File",
        "signature": "FilePath-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-IO.html#v:writeFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to a file.  The file is truncated to zero length\n before writing begins.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.IO",
        "fct-package": "text",
        "fct-signature": "FilePath -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Text-Lazy-IO.html#writeFile",
        "fct-type": "function",
        "title": "writeFile"
      },
      "index": {
        "description": "Write string to file The file is truncated to zero length before writing begins",
        "hierarchy": "Data Text Lazy IO",
        "module": "Data.Text.Lazy.IO",
        "name": "writeFile",
        "normalized": "FilePath-\u003eText-\u003eIO()",
        "package": "text",
        "partial": "File",
        "signature": "FilePath-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use Data.Text.Internal.Lazy instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis module has been renamed to \u003ccode\u003e\u003ca\u003eLazy\u003c/a\u003e\u003c/code\u003e. This\n name for the module will be removed in the next major release.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Lazy.Internal",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Lazy-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "Deprecated Use Data.Text.Internal.Lazy instead This module has been renamed to Lazy This name for the module will be removed in the next major release",
        "hierarchy": "Data Text Lazy Internal",
        "module": "Data.Text.Lazy.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "text",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Read.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions used frequently when reading textual data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Lazy.Read",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Lazy-Read.html",
        "fct-type": "module",
        "title": "Read"
      },
      "index": {
        "description": "Functions used frequently when reading textual data",
        "hierarchy": "Data Text Lazy Read",
        "module": "Data.Text.Lazy.Read",
        "name": "Read",
        "normalized": "",
        "package": "text",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Read.html#t:Reader",
      "description": {
        "fct-descr": "\u003cp\u003eRead some text.  If the read succeeds, return its value and the\n remaining text, otherwise an error message.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Read",
        "fct-package": "text",
        "fct-signature": "type",
        "fct-source": "src/Data-Text-Lazy-Read.html#Reader",
        "fct-type": "type",
        "title": "Reader"
      },
      "index": {
        "description": "Read some text If the read succeeds return its value and the remaining text otherwise an error message",
        "hierarchy": "Data Text Lazy Read",
        "module": "Data.Text.Lazy.Read",
        "name": "Reader",
        "normalized": "",
        "package": "text",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Read.html#v:decimal",
      "description": {
        "fct-descr": "\u003cp\u003eRead a decimal integer.  The input must begin with at least one\n decimal digit, and is consumed until a non-digit or end of string\n is reached.\n\u003c/p\u003e\u003cp\u003eThis function does not handle leading sign characters.  If you need\n to handle signed input, use \u003ccode\u003e\u003ccode\u003e\u003ca\u003esigned\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: For fixed-width integer types, this function does not\n attempt to detect overflow, so a sufficiently long input may give\n incorrect results.  If you are worried about overflow, use\n \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e for your result type.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Read",
        "fct-package": "text",
        "fct-signature": "Reader a",
        "fct-source": "src/Data-Text-Lazy-Read.html#decimal",
        "fct-type": "function",
        "title": "decimal"
      },
      "index": {
        "description": "Read decimal integer The input must begin with at least one decimal digit and is consumed until non-digit or end of string is reached This function does not handle leading sign characters If you need to handle signed input use signed decimal Note For fixed-width integer types this function does not attempt to detect overflow so sufficiently long input may give incorrect results If you are worried about overflow use Integer for your result type",
        "hierarchy": "Data Text Lazy Read",
        "module": "Data.Text.Lazy.Read",
        "name": "decimal",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Read.html#v:double",
      "description": {
        "fct-descr": "\u003cp\u003eRead a rational number.\n\u003c/p\u003e\u003cp\u003eThe syntax accepted by this function is the same as for \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This function is almost ten times faster than \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e,\n but is slightly less accurate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type supports about 16 decimal places of accuracy.\n For 94.2% of numbers, this function and \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e give identical\n results, but for the remaining 5.8%, this function loses precision\n around the 15th decimal place.  For 0.001% of numbers, this\n function will lose precision at the 13th or 14th decimal place.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Read",
        "fct-package": "text",
        "fct-signature": "Reader Double",
        "fct-source": "src/Data-Text-Lazy-Read.html#double",
        "fct-type": "function",
        "title": "double"
      },
      "index": {
        "description": "Read rational number The syntax accepted by this function is the same as for rational Note This function is almost ten times faster than rational but is slightly less accurate The Double type supports about decimal places of accuracy For of numbers this function and rational give identical results but for the remaining this function loses precision around the th decimal place For of numbers this function will lose precision at the th or th decimal place",
        "hierarchy": "Data Text Lazy Read",
        "module": "Data.Text.Lazy.Read",
        "name": "double",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Read.html#v:hexadecimal",
      "description": {
        "fct-descr": "\u003cp\u003eRead a hexadecimal integer, consisting of an optional leading\n \u003ccode\u003e\"0x\"\u003c/code\u003e followed by at least one decimal digit. Input is consumed\n until a non-hex-digit or end of string is reached.  This function\n is case insensitive.\n\u003c/p\u003e\u003cp\u003eThis function does not handle leading sign characters.  If you need\n to handle signed input, use \u003ccode\u003e\u003ccode\u003e\u003ca\u003esigned\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: For fixed-width integer types, this function does not\n attempt to detect overflow, so a sufficiently long input may give\n incorrect results.  If you are worried about overflow, use\n \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e for your result type.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Read",
        "fct-package": "text",
        "fct-signature": "Reader a",
        "fct-source": "src/Data-Text-Lazy-Read.html#hexadecimal",
        "fct-type": "function",
        "title": "hexadecimal"
      },
      "index": {
        "description": "Read hexadecimal integer consisting of an optional leading followed by at least one decimal digit Input is consumed until non-hex-digit or end of string is reached This function is case insensitive This function does not handle leading sign characters If you need to handle signed input use signed hexadecimal Note For fixed-width integer types this function does not attempt to detect overflow so sufficiently long input may give incorrect results If you are worried about overflow use Integer for your result type",
        "hierarchy": "Data Text Lazy Read",
        "module": "Data.Text.Lazy.Read",
        "name": "hexadecimal",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Read.html#v:rational",
      "description": {
        "fct-descr": "\u003cp\u003eRead a rational number.\n\u003c/p\u003e\u003cp\u003eThis function accepts an optional leading sign character, followed\n by at least one decimal digit.  The syntax similar to that accepted\n by the \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function, with the exception that a trailing \u003ccode\u003e'.'\u003c/code\u003e\n or \u003ccode\u003e'e'\u003c/code\u003e \u003cem\u003enot\u003c/em\u003e followed by a number is not consumed.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003erational \"3\"     == Right (3.0, \"\")\nrational \"3.1\"   == Right (3.1, \"\")\nrational \"3e4\"   == Right (30000.0, \"\")\nrational \"3.1e4\" == Right (31000.0, \"\")\nrational \".3\"    == Left \"input does not start with a digit\"\nrational \"e3\"    == Left \"input does not start with a digit\"\n\u003c/pre\u003e\u003cp\u003eExamples of differences from \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003erational \"3.foo\" == Right (3.0, \".foo\")\nrational \"3e\"    == Right (3.0, \"e\")\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy.Read",
        "fct-package": "text",
        "fct-signature": "Reader a",
        "fct-source": "src/Data-Text-Lazy-Read.html#rational",
        "fct-type": "function",
        "title": "rational"
      },
      "index": {
        "description": "Read rational number This function accepts an optional leading sign character followed by at least one decimal digit The syntax similar to that accepted by the read function with the exception that trailing or not followed by number is not consumed Examples rational Right rational Right rational e4 Right rational e4 Right rational Left input does not start with digit rational e3 Left input does not start with digit Examples of differences from read rational foo Right foo rational Right",
        "hierarchy": "Data Text Lazy Read",
        "module": "Data.Text.Lazy.Read",
        "name": "rational",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy-Read.html#v:signed",
      "description": {
        "fct-descr": "\u003cp\u003eRead an optional leading sign character (\u003ccode\u003e'-'\u003c/code\u003e or \u003ccode\u003e'+'\u003c/code\u003e) and\n apply it to the result of applying the given reader.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy.Read",
        "fct-package": "text",
        "fct-signature": "Reader a -\u003e Reader a",
        "fct-source": "src/Data-Text-Lazy-Read.html#signed",
        "fct-type": "function",
        "title": "signed"
      },
      "index": {
        "description": "Read an optional leading sign character or and apply it to the result of applying the given reader",
        "hierarchy": "Data Text Lazy Read",
        "module": "Data.Text.Lazy.Read",
        "name": "signed",
        "normalized": "Reader a-\u003eReader a",
        "package": "text",
        "partial": "",
        "signature": "Reader a-\u003eReader a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA time and space-efficient implementation of Unicode text using\n lists of packed arrays.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Read below the synopsis for important notes on the use of\n this module.\n\u003c/p\u003e\u003cp\u003eThe representation used by this module is suitable for high\n performance use and for streaming large quantities of data.  It\n provides a means to manipulate a large body of text without\n requiring that the entire content be resident in memory.\n\u003c/p\u003e\u003cp\u003eSome operations, such as \u003ccode\u003e\u003ca\u003econcat\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eappend\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econs\u003c/a\u003e\u003c/code\u003e,\n have better time complexity than their \u003ca\u003eData.Text\u003c/a\u003e equivalents, due\n to the underlying representation being a list of chunks. For other\n operations, lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es are usually within a few percent of strict\n ones, but often with better heap usage if used in a streaming\n fashion. For data larger than available memory, or if you have\n tight memory constraints, this module will be the only option.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions.  eg.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Text.Lazy as L\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "time and space-efficient implementation of Unicode text using lists of packed arrays Note Read below the synopsis for important notes on the use of this module The representation used by this module is suitable for high performance use and for streaming large quantities of data It provides means to manipulate large body of text without requiring that the entire content be resident in memory Some operations such as concat append reverse and cons have better time complexity than their Data.Text equivalents due to the underlying representation being list of chunks For other operations lazy Text are usually within few percent of strict ones but often with better heap usage if used in streaming fashion For data larger than available memory or if you have tight memory constraints this module will be the only option This module is intended to be imported qualified to avoid name clashes with Prelude functions eg import qualified Data.Text.Lazy as",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "text",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#t:Text",
      "description": {
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal-Lazy.html#Text",
        "fct-type": "data",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "Text",
        "normalized": "",
        "package": "text",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e determines whether all characters in the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e satisify the predicate \u003ccode\u003ep\u003c/code\u003e. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Bool",
        "fct-source": "src/Data-Text-Lazy.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "all determines whether all characters in the Text satisify the predicate Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "all",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e determines whether any character in the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e satisifes the predicate \u003ccode\u003ep\u003c/code\u003e. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Bool",
        "fct-source": "src/Data-Text-Lazy.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "any determines whether any character in the Text satisifes the predicate Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "any",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n\\\u003c/em\u003ec)/ Appends one \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to another.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Appends one Text to another Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "append",
        "normalized": "Text-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, but the prefix returned is over\n elements that fail the predicate \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text-Lazy.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "break is like span but the prefix returned is over elements that fail the predicate",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "break",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:breakOn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Find the first instance of \u003ccode\u003eneedle\u003c/code\u003e (which must be\n non-\u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e) in \u003ccode\u003ehaystack\u003c/code\u003e.  The first element of the returned tuple\n is the prefix of \u003ccode\u003ehaystack\u003c/code\u003e before \u003ccode\u003eneedle\u003c/code\u003e is matched.  The second\n is the remainder of \u003ccode\u003ehaystack\u003c/code\u003e, starting with the match.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e breakOn \"::\" \"a::b::c\" ==\u003e (\"a\", \"::b::c\")\n breakOn \"/\" \"foobar\"   ==\u003e (\"foobar\", \"\")\n\u003c/pre\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e append prefix match == haystack\n   where (prefix, match) = breakOn needle haystack\n\u003c/pre\u003e\u003cp\u003eIf you need to break a string by a substring repeatedly (e.g. you\n want to break on every instance of a substring), use \u003ccode\u003e\u003ca\u003ebreakOnAll\u003c/a\u003e\u003c/code\u003e\n instead, as it has lower startup overhead.\n\u003c/p\u003e\u003cp\u003eThis function is strict in its first argument, and lazy in its\n second.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text-Lazy.html#breakOn",
        "fct-type": "function",
        "title": "breakOn"
      },
      "index": {
        "description": "Find the first instance of needle which must be non null in haystack The first element of the returned tuple is the prefix of haystack before needle is matched The second is the remainder of haystack starting with the match Examples breakOn breakOn foobar foobar Laws append prefix match haystack where prefix match breakOn needle haystack If you need to break string by substring repeatedly e.g you want to break on every instance of substring use breakOnAll instead as it has lower startup overhead This function is strict in its first argument and lazy in its second In unlikely bad cases this function time complexity degrades towards",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "breakOn",
        "normalized": "Text-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "On",
        "signature": "Text-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:breakOnAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Find all non-overlapping instances of \u003ccode\u003eneedle\u003c/code\u003e in\n \u003ccode\u003ehaystack\u003c/code\u003e.  Each element of the returned list consists of a pair:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The entire string prior to the \u003cem\u003ek\u003c/em\u003eth match (i.e. the prefix)\n\u003c/li\u003e\u003cli\u003e The \u003cem\u003ek\u003c/em\u003eth match, followed by the remainder of the string\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e breakOnAll \"::\" \"\"\n ==\u003e []\n breakOnAll \"/\" \"a/b/c/\"\n ==\u003e [(\"a\", \"/b/c/\"), (\"a/b\", \"/c/\"), (\"a/b/c\", \"/\")]\n\u003c/pre\u003e\u003cp\u003eThis function is strict in its first argument, and lazy in its\n second.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eneedle\u003c/code\u003e parameter may not be empty.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text-\u003e Text-\u003e [(Text, Text)]",
        "fct-type": "function",
        "title": "breakOnAll"
      },
      "index": {
        "description": "Find all non-overlapping instances of needle in haystack Each element of the returned list consists of pair The entire string prior to the th match i.e the prefix The th match followed by the remainder of the string Examples breakOnAll breakOnAll This function is strict in its first argument and lazy in its second In unlikely bad cases this function time complexity degrades towards The needle parameter may not be empty",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "breakOnAll",
        "normalized": "Text-\u003eText-\u003e[(Text,Text)]",
        "package": "text",
        "partial": "On All",
        "signature": "Text-\u003eText-\u003e[(Text,Text)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:breakOnEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Similar to \u003ccode\u003e\u003ca\u003ebreakOn\u003c/a\u003e\u003c/code\u003e, but searches from the end of the string.\n\u003c/p\u003e\u003cp\u003eThe first element of the returned tuple is the prefix of \u003ccode\u003ehaystack\u003c/code\u003e\n up to and including the last match of \u003ccode\u003eneedle\u003c/code\u003e.  The second is the\n remainder of \u003ccode\u003ehaystack\u003c/code\u003e, following the match.\n\u003c/p\u003e\u003cpre\u003e breakOnEnd \"::\" \"a::b::c\" ==\u003e (\"a::b::\", \"c\")\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text-Lazy.html#breakOnEnd",
        "fct-type": "function",
        "title": "breakOnEnd"
      },
      "index": {
        "description": "Similar to breakOn but searches from the end of the string The first element of the returned tuple is the prefix of haystack up to and including the last match of needle The second is the remainder of haystack following the match breakOnEnd",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "breakOnEnd",
        "normalized": "Text-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "On End",
        "signature": "Text-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:center",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Center a string to the given length, using the specified\n fill character on either side.  Performs replacement on invalid\n scalar values.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e center 8 'x' \"HS\" = \"xxxHSxxx\"\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#center",
        "fct-type": "function",
        "title": "center"
      },
      "index": {
        "description": "Center string to the given length using the specified fill character on either side Performs replacement on invalid scalar values Examples center HS xxxHSxxx",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "center",
        "normalized": "Int-\u003eChar-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003eChar-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:chunksOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into components of length \u003ccode\u003ek\u003c/code\u003e.  The last\n element may be shorter than the other chunks, depending on the\n length of the input. Examples:\n\u003c/p\u003e\u003cpre\u003e chunksOf 3 \"foobarbaz\"   == [\"foo\",\"bar\",\"baz\"]\n chunksOf 4 \"haskell.org\" == [\"hask\",\"ell.\",\"org\"]\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e Text -\u003e [Text]",
        "fct-source": "src/Data-Text-Lazy.html#chunksOf",
        "fct-type": "function",
        "title": "chunksOf"
      },
      "index": {
        "description": "Splits Text into components of length The last element may be shorter than the other chunks depending on the length of the input Examples chunksOf foobarbaz foo bar baz chunksOf haskell.org hask ell org",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "chunksOf",
        "normalized": "Int-\u003eText-\u003e[Text]",
        "package": "text",
        "partial": "Of",
        "signature": "Int-\u003eText-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:commonPrefixes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Find the longest non-empty common prefix of two strings\n and return it, along with the suffixes of each string at which they\n no longer match.\n\u003c/p\u003e\u003cp\u003eIf the strings do not have a common prefix or either one is empty,\n this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e commonPrefixes \"foobar\" \"fooquux\" == Just (\"foo\",\"bar\",\"quux\")\n commonPrefixes \"veeble\" \"fetzer\"  == Nothing\n commonPrefixes \"\" \"baz\"           == Nothing\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Maybe (Text, Text, Text)",
        "fct-source": "src/Data-Text-Lazy.html#commonPrefixes",
        "fct-type": "function",
        "title": "commonPrefixes"
      },
      "index": {
        "description": "Find the longest non-empty common prefix of two strings and return it along with the suffixes of each string at which they no longer match If the strings do not have common prefix or either one is empty this function returns Nothing Examples commonPrefixes foobar fooquux Just foo bar quux commonPrefixes veeble fetzer Nothing commonPrefixes baz Nothing",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "commonPrefixes",
        "normalized": "Text-\u003eText-\u003eMaybe(Text,Text,Text)",
        "package": "text",
        "partial": "Prefixes",
        "signature": "Text-\u003eText-\u003eMaybe(Text,Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:compareLength",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compare the count of characters in a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to a number.\n Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThis function gives the same answer as comparing against the result\n of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, but can short circuit if the count of characters is\n greater than the number, and hence be more efficient.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int64 -\u003e Ordering",
        "fct-source": "src/Data-Text-Lazy.html#compareLength",
        "fct-type": "function",
        "title": "compareLength"
      },
      "index": {
        "description": "Compare the count of characters in Text to number Subject to fusion This function gives the same answer as comparing against the result of length but can short circuit if the count of characters is greater than the number and hence be more efficient",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "compareLength",
        "normalized": "Text-\u003eInt-\u003eOrdering",
        "package": "text",
        "partial": "Length",
        "signature": "Text-\u003eInt-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "[Text] -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "Concatenate list of Text",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "concat",
        "normalized": "[Text]-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Map a function over a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e that results in a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, and\n concatenate the results.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Text) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Map function over Text that results in Text and concatenate the results",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "concatMap",
        "normalized": "(Char-\u003eText)-\u003eText-\u003eText",
        "package": "text",
        "partial": "Map",
        "signature": "(Char-\u003eText)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Adds a character to the front of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  This function\n is more costly than its \u003ccode\u003eList\u003c/code\u003e counterpart because it requires\n copying a new array.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "Adds character to the front of Text This function is more costly than its List counterpart because it requires copying new array Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "cons",
        "normalized": "Char-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003ecount\u003c/a\u003e\u003c/code\u003e function returns the number of times the\n query string appears in the given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e. An empty query string is\n invalid, and will cause an error to be raised.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Int64",
        "fct-source": "src/Data-Text-Lazy.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "The count function returns the number of times the query string appears in the given Text An empty query string is invalid and will cause an error to be raised In unlikely bad cases this function time complexity degrades towards",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "count",
        "normalized": "Text-\u003eText-\u003eInt",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, returns the suffix of the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e characters, or the empty \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003en\u003c/code\u003e\n is greater than the length of the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop applied to Text returns the suffix of the Text after the first characters or the empty Text if is greater than the length of the Text Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "drop",
        "normalized": "Int-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:dropAround",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edropAround\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e returns the substring remaining after\n dropping characters that fail the predicate \u003ccode\u003ep\u003c/code\u003e from both the\n beginning and end of \u003ccode\u003et\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#dropAround",
        "fct-type": "function",
        "title": "dropAround"
      },
      "index": {
        "description": "dropAround returns the substring remaining after dropping characters that fail the predicate from both the beginning and end of Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "dropAround",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eText",
        "package": "text",
        "partial": "Around",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e returns the suffix remaining after\n \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "dropWhile returns the suffix remaining after takeWhile Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "dropWhile",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eText",
        "package": "text",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:dropWhileEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edropWhileEnd\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e returns the prefix remaining after\n dropping characters that fail the predicate \u003ccode\u003ep\u003c/code\u003e from the end of\n \u003ccode\u003et\u003c/code\u003e.\n Examples:\n\u003c/p\u003e\u003cpre\u003e dropWhileEnd (=='.') \"foo...\" == \"foo\"\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#dropWhileEnd",
        "fct-type": "function",
        "title": "dropWhileEnd"
      },
      "index": {
        "description": "dropWhileEnd returns the prefix remaining after dropping characters that fail the predicate from the end of Examples dropWhileEnd foo foo",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "dropWhileEnd",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eText",
        "package": "text",
        "partial": "While End",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor for \u003ccode\u003e\u003ca\u003eEmpty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text",
        "fct-source": "src/Data-Text-Internal-Lazy.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "Smart constructor for Empty",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "empty",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n returns a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e containing those characters that satisfy the\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "filter applied to predicate and Text returns Text containing those characters that satisfy the predicate",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "filter",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, and\n returns the first element in matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if there is no such element.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Maybe Char",
        "fct-source": "src/Data-Text-Lazy.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "The find function takes predicate and Text and returns the first element in matching the predicate or Nothing if there is no such element",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "find",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eMaybe Char",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eMaybe Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the left-identity of the operator), and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n reduces the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using the binary operator, from left to right.\n Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e Text -\u003e a",
        "fct-source": "src/Data-Text-Lazy.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "foldl applied to binary operator starting value typically the left-identity of the operator and Text reduces the Text using the binary operator from left to right Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "foldl",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eText-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eText-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e A strict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.\n Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e Text -\u003e a",
        "fct-source": "src/Data-Text-Lazy.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "strict version of foldl Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "foldl'",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eText-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eText-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:foldl1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e A variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to a non-empty \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Char",
        "fct-source": "src/Data-Text-Lazy.html#foldl1",
        "fct-type": "function",
        "title": "foldl1"
      },
      "index": {
        "description": "variant of foldl that has no starting value argument and thus must be applied to non-empty Text Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "foldl1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:foldl1-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e A strict version of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Char",
        "fct-source": "src/Data-Text-Lazy.html#foldl1%27",
        "fct-type": "function",
        "title": "foldl1'"
      },
      "index": {
        "description": "strict version of foldl1 Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "foldl1'",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:foldlChunks",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the chunks of a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e with a strict, tail-recursive,\n accumulating left fold.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Text -\u003e a) -\u003e a -\u003e Text -\u003e a",
        "fct-source": "src/Data-Text-Internal-Lazy.html#foldlChunks",
        "fct-type": "function",
        "title": "foldlChunks"
      },
      "index": {
        "description": "Consume the chunks of lazy Text with strict tail-recursive accumulating left fold",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "foldlChunks",
        "normalized": "(a-\u003eText-\u003ea)-\u003ea-\u003eText-\u003ea",
        "package": "text",
        "partial": "Chunks",
        "signature": "(a-\u003eText-\u003ea)-\u003ea-\u003eText-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n reduces the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using the binary operator, from right to left.\n Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e Text -\u003e a",
        "fct-source": "src/Data-Text-Lazy.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "foldr applied to binary operator starting value typically the right-identity of the operator and Text reduces the Text using the binary operator from right to left Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "foldr",
        "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eText-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eText-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:foldr1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e A variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to a non-empty \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Subject to\n fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Char",
        "fct-source": "src/Data-Text-Lazy.html#foldr1",
        "fct-type": "function",
        "title": "foldr1"
      },
      "index": {
        "description": "variant of foldr that has no starting value argument and thus must be applied to non-empty Text Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "foldr1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:foldrChunks",
      "description": {
        "fct-descr": "\u003cp\u003eConsume the chunks of a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e with a natural right fold.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Text -\u003e a -\u003e a) -\u003e a -\u003e Text -\u003e a",
        "fct-source": "src/Data-Text-Internal-Lazy.html#foldrChunks",
        "fct-type": "function",
        "title": "foldrChunks"
      },
      "index": {
        "description": "Consume the chunks of lazy Text with natural right fold",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "foldrChunks",
        "normalized": "(Text-\u003ea-\u003ea)-\u003ea-\u003eText-\u003ea",
        "package": "text",
        "partial": "Chunks",
        "signature": "(Text-\u003ea-\u003ea)-\u003ea-\u003eText-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:fromChunks",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(c)\u003c/em\u003e Convert a list of strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es into a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "[Text] -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#fromChunks",
        "fct-type": "function",
        "title": "fromChunks"
      },
      "index": {
        "description": "Convert list of strict Text into lazy Text",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "fromChunks",
        "normalized": "[Text]-\u003eText",
        "package": "text",
        "partial": "Chunks",
        "signature": "[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:fromStrict",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(c)\u003c/em\u003e Convert a strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#fromStrict",
        "fct-type": "function",
        "title": "fromStrict"
      },
      "index": {
        "description": "Convert strict Text into lazy Text",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "fromStrict",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Strict",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and returns a list of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es\n such that the concatenation of the result is equal to the argument.\n Moreover, each sublist in the result contains only equal elements.\n For example,\n\u003c/p\u003e\u003cpre\u003e group \"Mississippi\" = [\"M\",\"i\",\"ss\",\"i\",\"ss\",\"i\",\"pp\",\"i\"]\n\u003c/pre\u003e\u003cp\u003eIt is a special case of \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, which allows the programmer to\n supply their own equality test.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text-Lazy.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "The group function takes Text and returns list of Text such that the concatenation of the result is equal to the argument Moreover each sublist in the result contains only equal elements For example group Mississippi ss ss pp It is special case of groupBy which allows the programmer to supply their own equality test",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "group",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:groupBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e function is the non-overloaded version of \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Bool) -\u003e Text -\u003e [Text]",
        "fct-source": "src/Data-Text-Lazy.html#groupBy",
        "fct-type": "function",
        "title": "groupBy"
      },
      "index": {
        "description": "The groupBy function is the non-overloaded version of group",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "groupBy",
        "normalized": "(Char-\u003eChar-\u003eBool)-\u003eText-\u003e[Text]",
        "package": "text",
        "partial": "By",
        "signature": "(Char-\u003eChar-\u003eBool)-\u003eText-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns the first character of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which must be\n non-empty.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char",
        "fct-source": "src/Data-Text-Lazy.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Returns the first character of Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "head",
        "normalized": "Text-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int64 -\u003e Char",
        "fct-source": "src/Data-Text-Lazy.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Text index subscript operator starting from",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "index",
        "normalized": "Text-\u003eInt-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eInt-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:init",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns all but the last character of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which must\n be non-empty.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "Returns all but the last character of Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "init",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:inits",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n shortest first.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text-Lazy.html#inits",
        "fct-type": "function",
        "title": "inits"
      },
      "index": {
        "description": "Return all initial segments of the given Text shortest first",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "inits",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:intercalate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text] -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#intercalate",
        "fct-type": "function",
        "title": "intercalate"
      },
      "index": {
        "description": "The intercalate function takes Text and list of Text and concatenates the list after interspersing the first argument between each element of the list",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "intercalate",
        "normalized": "Text-\u003e[Text]-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:intersperse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a character and places it\n between the characters of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Subject to fusion.  Performs\n replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "The intersperse function takes character and places it between the characters of Text Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "intersperse",
        "normalized": "Char-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:isInfixOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisInfixOf\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es and returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first is contained, wholly and intact, anywhere\n within the second.\n\u003c/p\u003e\u003cp\u003eThis function is strict in its first argument, and lazy in its\n second.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Bool",
        "fct-source": "src/Data-Text-Lazy.html#isInfixOf",
        "fct-type": "function",
        "title": "isInfixOf"
      },
      "index": {
        "description": "The isInfixOf function takes two Text and returns True iff the first is contained wholly and intact anywhere within the second This function is strict in its first argument and lazy in its second In unlikely bad cases this function time complexity degrades towards",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "isInfixOf",
        "normalized": "Text-\u003eText-\u003eBool",
        "package": "text",
        "partial": "Infix Of",
        "signature": "Text-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:isPrefixOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es and returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first is a prefix of the second.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Bool",
        "fct-source": "src/Data-Text-Lazy.html#isPrefixOf",
        "fct-type": "function",
        "title": "isPrefixOf"
      },
      "index": {
        "description": "The isPrefixOf function takes two Text and returns True iff the first is prefix of the second Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "isPrefixOf",
        "normalized": "Text-\u003eText-\u003eBool",
        "package": "text",
        "partial": "Prefix Of",
        "signature": "Text-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:isSuffixOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es and returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first is a suffix of the second.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Bool",
        "fct-source": "src/Data-Text-Lazy.html#isSuffixOf",
        "fct-type": "function",
        "title": "isSuffixOf"
      },
      "index": {
        "description": "The isSuffixOf function takes two Text and returns True iff the first is suffix of the second",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "isSuffixOf",
        "normalized": "Text-\u003eText-\u003eBool",
        "package": "text",
        "partial": "Suffix Of",
        "signature": "Text-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:justifyLeft",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Left-justify a string to the given length, using the\n specified fill character on the right. Subject to fusion.  Performs\n replacement on invalid scalar values.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e justifyLeft 7 'x' \"foo\"    == \"fooxxxx\"\n justifyLeft 3 'x' \"foobar\" == \"foobar\"\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#justifyLeft",
        "fct-type": "function",
        "title": "justifyLeft"
      },
      "index": {
        "description": "Left-justify string to the given length using the specified fill character on the right Subject to fusion Performs replacement on invalid scalar values Examples justifyLeft foo fooxxxx justifyLeft foobar foobar",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "justifyLeft",
        "normalized": "Int-\u003eChar-\u003eText-\u003eText",
        "package": "text",
        "partial": "Left",
        "signature": "Int-\u003eChar-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:justifyRight",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Right-justify a string to the given length, using the\n specified fill character on the left.  Performs replacement on\n invalid scalar values.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e justifyRight 7 'x' \"bar\"    == \"xxxxbar\"\n justifyRight 3 'x' \"foobar\" == \"foobar\"\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#justifyRight",
        "fct-type": "function",
        "title": "justifyRight"
      },
      "index": {
        "description": "Right-justify string to the given length using the specified fill character on the left Performs replacement on invalid scalar values Examples justifyRight bar xxxxbar justifyRight foobar foobar",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "justifyRight",
        "normalized": "Int-\u003eChar-\u003eText-\u003eText",
        "package": "text",
        "partial": "Right",
        "signature": "Int-\u003eChar-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns the last character of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which must be\n non-empty.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char",
        "fct-source": "src/Data-Text-Lazy.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Returns the last character of Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "last",
        "normalized": "Text-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns the number of characters in a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int64",
        "fct-source": "src/Data-Text-Lazy.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Returns the number of characters in Text Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "length",
        "normalized": "Text-\u003eInt",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Breaks a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e up into a list of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es at\n newline \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es. The resulting strings do not contain newlines.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text-Lazy.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Breaks Text up into list of Text at newline Char The resulting strings do not contain newlines",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "lines",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e obtained by applying \u003ccode\u003ef\u003c/code\u003e to\n each element of \u003ccode\u003et\u003c/code\u003e.  Subject to fusion.  Performs replacement on\n invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map is the Text obtained by applying to each element of Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "map",
        "normalized": "(Char-\u003eChar)-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:mapAccumL",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldl'\u003c/a\u003e\u003c/code\u003e. Applies a\n function to each element of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, passing an accumulating\n parameter from left to right, and returns a final \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Performs\n replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Char -\u003e (a, Char)) -\u003e a -\u003e Text -\u003e (a, Text)",
        "fct-source": "src/Data-Text-Lazy.html#mapAccumL",
        "fct-type": "function",
        "title": "mapAccumL"
      },
      "index": {
        "description": "Like combination of map and foldl Applies function to each element of Text passing an accumulating parameter from left to right and returns final Text Performs replacement on invalid scalar values",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "mapAccumL",
        "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eText-\u003e(a,Text)",
        "package": "text",
        "partial": "Accum",
        "signature": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eText-\u003e(a,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:mapAccumR",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n a strict \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, passing an accumulating parameter from right to left, and\n returning a final value of this accumulator together with the new\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Char -\u003e (a, Char)) -\u003e a -\u003e Text -\u003e (a, Text)",
        "fct-source": "src/Data-Text-Lazy.html#mapAccumR",
        "fct-type": "function",
        "title": "mapAccumR"
      },
      "index": {
        "description": "The mapAccumR function behaves like combination of map and strict foldr it applies function to each element of Text passing an accumulating parameter from right to left and returning final value of this accumulator together with the new Text Performs replacement on invalid scalar values",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "mapAccumR",
        "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eText-\u003e(a,Text)",
        "package": "text",
        "partial": "Accum",
        "signature": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eText-\u003e(a,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which\n must be non-empty. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char",
        "fct-source": "src/Data-Text-Lazy.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "maximum returns the maximum value from Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "maximum",
        "normalized": "Text-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which\n must be non-empty. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char",
        "fct-source": "src/Data-Text-Lazy.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "minimum returns the minimum value from Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "minimum",
        "normalized": "Text-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Tests whether a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is empty or not.  Subject to\n fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/Data-Text-Lazy.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Tests whether Text is empty or not Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "null",
        "normalized": "Text-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSubject to fusion.  Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "String -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Convert String into Text Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "pack",
        "normalized": "String-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "String-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n and returns the pair of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es with elements which do and do not\n satisfy the predicate, respectively; i.e.\n\u003c/p\u003e\u003cpre\u003e partition p t == (filter p t, filter (not . p) t)\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text-Lazy.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "The partition function takes predicate and Text and returns the pair of Text with elements which do and do not satisfy the predicate respectively i.e partition filter filter not",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "partition",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(m+n)\u003c/em\u003e Replace every occurrence of one substring with another.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text-\u003e Text-\u003e Text-\u003e Text",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Replace every occurrence of one substring with another In unlikely bad cases this function time complexity degrades towards",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "replace",
        "normalized": "Text-\u003eText-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*m)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e consisting of the input\n \u003ccode\u003et\u003c/code\u003e repeated \u003ccode\u003en\u003c/code\u003e times.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "replicate is Text consisting of the input repeated times",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "replicate",
        "normalized": "Int-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereverse\u003c/a\u003e\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e returns the elements of \u003ccode\u003et\u003c/code\u003e in reverse order.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "reverse returns the elements of in reverse order",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "reverse",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:scanl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of\n successive reduced values from the left. Subject to fusion.\n Performs replacement on invalid scalar values.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#scanl",
        "fct-type": "function",
        "title": "scanl"
      },
      "index": {
        "description": "scanl is similar to foldl but returns list of successive reduced values from the left Subject to fusion Performs replacement on invalid scalar values scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "scanl",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:scanl1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting\n value argument.  Subject to fusion.  Performs replacement on\n invalid scalar values.\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#scanl1",
        "fct-type": "function",
        "title": "scanl1"
      },
      "index": {
        "description": "scanl1 is variant of scanl that has no starting value argument Subject to fusion Performs replacement on invalid scalar values scanl1 x1 x2 x1 x1 x2",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "scanl1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:scanr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.  Performs\n replacement on invalid scalar values.\n\u003c/p\u003e\u003cpre\u003e scanr f v == reverse . scanl (flip f) v . reverse\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#scanr",
        "fct-type": "function",
        "title": "scanr"
      },
      "index": {
        "description": "scanr is the right-to-left dual of scanl Performs replacement on invalid scalar values scanr reverse scanl flip reverse",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "scanr",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:scanr1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting\n value argument.  Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#scanr1",
        "fct-type": "function",
        "title": "scanr1"
      },
      "index": {
        "description": "scanr1 is variant of scanr that has no starting value argument Performs replacement on invalid scalar values",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "scanr1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a character into a Text.  Subject to fusion.\n Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Convert character into Text Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "singleton",
        "normalized": "Char-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:snoc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Adds a character to the end of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  This copies the\n entire array in the process, unless fused.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "Adds character to the end of Text This copies the entire array in the process unless fused Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "snoc",
        "normalized": "Text-\u003eChar-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eChar-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and text \u003ccode\u003et\u003c/code\u003e, returns\n a pair whose first element is the longest prefix (possibly empty)\n of \u003ccode\u003et\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e, and whose second is the\n remainder of the list.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text-Lazy.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "span applied to predicate and text returns pair whose first element is the longest prefix possibly empty of of elements that satisfy and whose second is the remainder of the list",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "span",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into components delimited by separators,\n where the predicate returns True for a separator element.  The\n resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e split (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n split (=='a') []        == [\"\"]\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e [Text]",
        "fct-source": "src/Data-Text-Lazy.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Splits Text into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg split aabbaca bb split",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "split",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en t\u003c/code\u003e returns a pair whose first element is a\n prefix of \u003ccode\u003et\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, and whose second is the remainder of\n the string. It is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n t, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n t)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text-Lazy.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "splitAt returns pair whose first element is prefix of of length and whose second is the remainder of the string It is equivalent to take drop",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "splitAt",
        "normalized": "Int-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "At",
        "signature": "Int-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:splitOn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(m+n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into pieces separated by the first\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e argument, consuming the delimiter. An empty delimiter is\n invalid, and will cause an error to be raised.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e splitOn \"\\r\\n\" \"a\\r\\nb\\r\\nd\\r\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n splitOn \"aaa\"  \"aaaXaaaXaaaXaaa\"  == [\"\",\"X\",\"X\",\"X\",\"\"]\n splitOn \"x\"    \"x\"                == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate s . splitOn s         == id\n splitOn (singleton c)             == split (==c)\n\u003c/pre\u003e\u003cp\u003eThis function is strict in its first argument, and lazy in its\n second.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text-\u003e Text-\u003e [Text]",
        "fct-type": "function",
        "title": "splitOn"
      },
      "index": {
        "description": "Break Text into pieces separated by the first Text argument consuming the delimiter An empty delimiter is invalid and will cause an error to be raised Examples splitOn nb nd ne splitOn aaa aaaXaaaXaaaXaaa splitOn and intercalate splitOn id splitOn singleton split This function is strict in its first argument and lazy in its second In unlikely bad cases this function time complexity degrades towards",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "splitOn",
        "normalized": "Text-\u003eText-\u003e[Text]",
        "package": "text",
        "partial": "On",
        "signature": "Text-\u003eText-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:strip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Remove leading and trailing white space from a string.\n Equivalent to:\n\u003c/p\u003e\u003cpre\u003e dropAround isSpace\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#strip",
        "fct-type": "function",
        "title": "strip"
      },
      "index": {
        "description": "Remove leading and trailing white space from string Equivalent to dropAround isSpace",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "strip",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:stripEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Remove trailing white space from a string.  Equivalent to:\n\u003c/p\u003e\u003cpre\u003e dropWhileEnd isSpace\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#stripEnd",
        "fct-type": "function",
        "title": "stripEnd"
      },
      "index": {
        "description": "Remove trailing white space from string Equivalent to dropWhileEnd isSpace",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "stripEnd",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "End",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:stripPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return the suffix of the second string if its prefix\n matches the entire first string.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e stripPrefix \"foo\" \"foobar\" == Just \"bar\"\n stripPrefix \"\"    \"baz\"    == Just \"baz\"\n stripPrefix \"foo\" \"quux\"   == Nothing\n\u003c/pre\u003e\u003cp\u003eThis is particularly useful with the \u003ccode\u003eViewPatterns\u003c/code\u003e extension to\n GHC, as follows:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE ViewPatterns #-}\n import Data.Text.Lazy as T\n\n fnordLength :: Text -\u003e Int\n fnordLength (stripPrefix \"fnord\" -\u003e Just suf) = T.length suf\n fnordLength _                                 = -1\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Maybe Text",
        "fct-source": "src/Data-Text-Lazy.html#stripPrefix",
        "fct-type": "function",
        "title": "stripPrefix"
      },
      "index": {
        "description": "Return the suffix of the second string if its prefix matches the entire first string Examples stripPrefix foo foobar Just bar stripPrefix baz Just baz stripPrefix foo quux Nothing This is particularly useful with the ViewPatterns extension to GHC as follows LANGUAGE ViewPatterns import Data.Text.Lazy as fnordLength Text Int fnordLength stripPrefix fnord Just suf T.length suf fnordLength",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "stripPrefix",
        "normalized": "Text-\u003eText-\u003eMaybe Text",
        "package": "text",
        "partial": "Prefix",
        "signature": "Text-\u003eText-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:stripStart",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Remove leading white space from a string.  Equivalent to:\n\u003c/p\u003e\u003cpre\u003e dropWhile isSpace\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#stripStart",
        "fct-type": "function",
        "title": "stripStart"
      },
      "index": {
        "description": "Remove leading white space from string Equivalent to dropWhile isSpace",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "stripStart",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Start",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:stripSuffix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return the prefix of the second string if its suffix\n matches the entire first string.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e stripSuffix \"bar\" \"foobar\" == Just \"foo\"\n stripSuffix \"\"    \"baz\"    == Just \"baz\"\n stripSuffix \"foo\" \"quux\"   == Nothing\n\u003c/pre\u003e\u003cp\u003eThis is particularly useful with the \u003ccode\u003eViewPatterns\u003c/code\u003e extension to\n GHC, as follows:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE ViewPatterns #-}\n import Data.Text.Lazy as T\n\n quuxLength :: Text -\u003e Int\n quuxLength (stripSuffix \"quux\" -\u003e Just pre) = T.length pre\n quuxLength _                                = -1\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Maybe Text",
        "fct-source": "src/Data-Text-Lazy.html#stripSuffix",
        "fct-type": "function",
        "title": "stripSuffix"
      },
      "index": {
        "description": "Return the prefix of the second string if its suffix matches the entire first string Examples stripSuffix bar foobar Just foo stripSuffix baz Just baz stripSuffix foo quux Nothing This is particularly useful with the ViewPatterns extension to GHC as follows LANGUAGE ViewPatterns import Data.Text.Lazy as quuxLength Text Int quuxLength stripSuffix quux Just pre T.length pre quuxLength",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "stripSuffix",
        "normalized": "Text-\u003eText-\u003eMaybe Text",
        "package": "text",
        "partial": "Suffix",
        "signature": "Text-\u003eText-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns all characters after the head of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which\n must be non-empty.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "Returns all characters after the head of Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "tail",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:tails",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, longest\n first.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text-Lazy.html#tails",
        "fct-type": "function",
        "title": "tails"
      },
      "index": {
        "description": "Return all final segments of the given Text longest first",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "tails",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, returns the prefix of the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e itself if \u003ccode\u003en\u003c/code\u003e is greater than\n the length of the Text. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take applied to Text returns the prefix of the Text of length or the Text itself if is greater than the length of the Text Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "take",
        "normalized": "Int-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n returns the longest prefix (possibly empty) of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "takeWhile applied to predicate and Text returns the longest prefix possibly empty of elements that satisfy Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "takeWhile",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eText",
        "package": "text",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:toCaseFold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to folded case.  Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThis function is mainly useful for performing caseless (or case\n insensitive) string comparisons.\n\u003c/p\u003e\u003cp\u003eA string \u003ccode\u003ex\u003c/code\u003e is a caseless match for a string \u003ccode\u003ey\u003c/code\u003e if and only if:\n\u003c/p\u003e\u003cpre\u003etoCaseFold x == toCaseFold y\u003c/pre\u003e\u003cp\u003eThe result string may be longer than the input string, and may\n differ from applying \u003ccode\u003e\u003ca\u003etoLower\u003c/a\u003e\u003c/code\u003e to the input string.  For instance,\n the Armenian small ligature men now (U+FB13) is case folded to the\n bigram men now (U+0574 U+0576), while the micro sign (U+00B5) is\n case folded to the Greek small letter letter mu (U+03BC) instead of\n itself.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#toCaseFold",
        "fct-type": "function",
        "title": "toCaseFold"
      },
      "index": {
        "description": "Convert string to folded case Subject to fusion This function is mainly useful for performing caseless or case insensitive string comparisons string is caseless match for string if and only if toCaseFold toCaseFold The result string may be longer than the input string and may differ from applying toLower to the input string For instance the Armenian small ligature men now FB13 is case folded to the bigram men now while the micro sign B5 is case folded to the Greek small letter letter mu BC instead of itself",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "toCaseFold",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Case Fold",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:toChunks",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into a list of strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text-Lazy.html#toChunks",
        "fct-type": "function",
        "title": "toChunks"
      },
      "index": {
        "description": "Convert lazy Text into list of strict Text",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "toChunks",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "Chunks",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:toLower",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to lower case, using simple case\n conversion.  Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThe result string may be longer than the input string.  For\n instance, the Latin capital letter I with dot above (U+0130) maps\n to the sequence Latin small letter i (U+0069) followed by combining\n dot above (U+0307).\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#toLower",
        "fct-type": "function",
        "title": "toLower"
      },
      "index": {
        "description": "Convert string to lower case using simple case conversion Subject to fusion The result string may be longer than the input string For instance the Latin capital letter with dot above maps to the sequence Latin small letter followed by combining dot above",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "toLower",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Lower",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:toStrict",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into a strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#toStrict",
        "fct-type": "function",
        "title": "toStrict"
      },
      "index": {
        "description": "Convert lazy Text into strict Text",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "toStrict",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Strict",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:toTitle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to title case, using simple case\n conversion.  Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThe first letter of the input is converted to title case, as is\n every subsequent letter that immediately follows a non-letter.\n Every letter that immediately follows another letter is converted\n to lower case.\n\u003c/p\u003e\u003cp\u003eThe result string may be longer than the input string. For example,\n the Latin small ligature &#64258; (U+FB02) is converted to the\n sequence Latin capital letter F (U+0046) followed by Latin small\n letter l (U+006C).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: this function does not take language or culture specific\n rules into account. For instance, in English, different style\n guides disagree on whether the book name \"The Hill of the Red\n Fox\" is correctly title cased&#8212;but this function will\n capitalize \u003cem\u003eevery\u003c/em\u003e word.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#toTitle",
        "fct-type": "function",
        "title": "toTitle"
      },
      "index": {
        "description": "Convert string to title case using simple case conversion Subject to fusion The first letter of the input is converted to title case as is every subsequent letter that immediately follows non-letter Every letter that immediately follows another letter is converted to lower case The result string may be longer than the input string For example the Latin small ligature FB02 is converted to the sequence Latin capital letter followed by Latin small letter Note this function does not take language or culture specific rules into account For instance in English different style guides disagree on whether the book name The Hill of the Red Fox is correctly title cased but this function will capitalize every word",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "toTitle",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Title",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:toUpper",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to upper case, using simple case\n conversion.  Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThe result string may be longer than the input string.  For\n instance, the German eszett (U+00DF) maps to the two-letter\n sequence SS.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#toUpper",
        "fct-type": "function",
        "title": "toUpper"
      },
      "index": {
        "description": "Convert string to upper case using simple case conversion Subject to fusion The result string may be longer than the input string For instance the German eszett DF maps to the two-letter sequence SS",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "toUpper",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Upper",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:transpose",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns\n of its \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e argument.  Note that this function uses \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e, and the list version of transpose, and is thus not very\n efficient.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "[Text] -\u003e [Text]",
        "fct-source": "src/Data-Text-Lazy.html#transpose",
        "fct-type": "function",
        "title": "transpose"
      },
      "index": {
        "description": "The transpose function transposes the rows and columns of its Text argument Note that this function uses pack unpack and the list version of transpose and is thus not very efficient",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "transpose",
        "normalized": "[Text]-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "[Text]-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:uncons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns the first character and rest of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if empty. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Maybe (Char, Text)",
        "fct-source": "src/Data-Text-Lazy.html#uncons",
        "fct-type": "function",
        "title": "uncons"
      },
      "index": {
        "description": "Returns the first character and rest of Text or Nothing if empty Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "uncons",
        "normalized": "Text-\u003eMaybe(Char,Text)",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eMaybe(Char,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:unfoldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003ccode\u003en\u003c/code\u003e is the length of the result. The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n function is analogous to the List \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e from a seed value. The function takes the element and\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, otherwise\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e.  In this case, \u003ccode\u003ea\u003c/code\u003e is the next \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e in the\n string, and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production.  Performs\n replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Maybe (Char, a)) -\u003e a -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#unfoldr",
        "fct-type": "function",
        "title": "unfoldr"
      },
      "index": {
        "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds Text from seed value The function takes the element and returns Nothing if it is done producing the Text otherwise Just In this case is the next Char in the string and is the seed value for further production Performs replacement on invalid scalar values",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "unfoldr",
        "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:unfoldrN",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e from a seed\n value. However, the length of the result should be limited by the\n first argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e. This function is more efficient than\n \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e when the maximum length of the result is known and\n correct, otherwise its performance is similar to \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e.\n Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Int64 -\u003e (a -\u003e Maybe (Char, a)) -\u003e a -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#unfoldrN",
        "fct-type": "function",
        "title": "unfoldrN"
      },
      "index": {
        "description": "Like unfoldr unfoldrN builds Text from seed value However the length of the result should be limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known and correct otherwise its performance is similar to unfoldr Performs replacement on invalid scalar values",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "unfoldrN",
        "normalized": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:unlines",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Joins lines, after appending a terminating newline to\n each.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "[Text] -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#unlines",
        "fct-type": "function",
        "title": "unlines"
      },
      "index": {
        "description": "Joins lines after appending terminating newline to each",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "unlines",
        "normalized": "[Text]-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:unpack",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e String",
        "fct-source": "src/Data-Text-Lazy.html#unpack",
        "fct-type": "function",
        "title": "unpack"
      },
      "index": {
        "description": "Convert Text into String Subject to fusion",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "unpack",
        "normalized": "Text-\u003eString",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:unwords",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Joins words using single space characters.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "[Text] -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#unwords",
        "fct-type": "function",
        "title": "unwords"
      },
      "index": {
        "description": "Joins words using single space characters",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "unwords",
        "normalized": "[Text]-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:words",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Breaks a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e up into a list of words, delimited by \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es\n representing white space.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text-Lazy.html#words",
        "fct-type": "function",
        "title": "words"
      },
      "index": {
        "description": "Breaks Text up into list of words delimited by Char representing white space",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "words",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es and returns a list of\n corresponding pairs of bytes. If one input \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is short,\n excess elements of the longer \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e [(Char, Char)]",
        "fct-source": "src/Data-Text-Lazy.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "zip takes two Text and returns list of corresponding pairs of bytes If one input Text is short excess elements of the longer Text are discarded This is equivalent to pair of unpack operations",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "zip",
        "normalized": "Text-\u003eText-\u003e[(Char,Char)]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003e[(Char,Char)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Lazy.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function\n given as the first argument, instead of a tupling function.\n Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Lazy",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Lazy.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function Performs replacement on invalid scalar values",
        "hierarchy": "Data Text Lazy",
        "module": "Data.Text.Lazy",
        "name": "zipWith",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText-\u003eText",
        "package": "text",
        "partial": "With",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Read.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions used frequently when reading textual data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Read",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Read.html",
        "fct-type": "module",
        "title": "Read"
      },
      "index": {
        "description": "Functions used frequently when reading textual data",
        "hierarchy": "Data Text Read",
        "module": "Data.Text.Read",
        "name": "Read",
        "normalized": "",
        "package": "text",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Read.html#t:Reader",
      "description": {
        "fct-descr": "\u003cp\u003eRead some text.  If the read succeeds, return its value and the\n remaining text, otherwise an error message.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Read",
        "fct-package": "text",
        "fct-signature": "type",
        "fct-source": "src/Data-Text-Read.html#Reader",
        "fct-type": "type",
        "title": "Reader"
      },
      "index": {
        "description": "Read some text If the read succeeds return its value and the remaining text otherwise an error message",
        "hierarchy": "Data Text Read",
        "module": "Data.Text.Read",
        "name": "Reader",
        "normalized": "",
        "package": "text",
        "partial": "Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Read.html#v:decimal",
      "description": {
        "fct-descr": "\u003cp\u003eRead a decimal integer.  The input must begin with at least one\n decimal digit, and is consumed until a non-digit or end of string\n is reached.\n\u003c/p\u003e\u003cp\u003eThis function does not handle leading sign characters.  If you need\n to handle signed input, use \u003ccode\u003e\u003ccode\u003e\u003ca\u003esigned\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edecimal\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: For fixed-width integer types, this function does not\n attempt to detect overflow, so a sufficiently long input may give\n incorrect results.  If you are worried about overflow, use\n \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e for your result type.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Read",
        "fct-package": "text",
        "fct-signature": "Reader a",
        "fct-source": "src/Data-Text-Read.html#decimal",
        "fct-type": "function",
        "title": "decimal"
      },
      "index": {
        "description": "Read decimal integer The input must begin with at least one decimal digit and is consumed until non-digit or end of string is reached This function does not handle leading sign characters If you need to handle signed input use signed decimal Note For fixed-width integer types this function does not attempt to detect overflow so sufficiently long input may give incorrect results If you are worried about overflow use Integer for your result type",
        "hierarchy": "Data Text Read",
        "module": "Data.Text.Read",
        "name": "decimal",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Read.html#v:double",
      "description": {
        "fct-descr": "\u003cp\u003eRead a rational number.\n\u003c/p\u003e\u003cp\u003eThe syntax accepted by this function is the same as for \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This function is almost ten times faster than \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e,\n but is slightly less accurate.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e type supports about 16 decimal places of accuracy.\n For 94.2% of numbers, this function and \u003ccode\u003e\u003ca\u003erational\u003c/a\u003e\u003c/code\u003e give identical\n results, but for the remaining 5.8%, this function loses precision\n around the 15th decimal place.  For 0.001% of numbers, this\n function will lose precision at the 13th or 14th decimal place.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Read",
        "fct-package": "text",
        "fct-signature": "Reader Double",
        "fct-source": "src/Data-Text-Read.html#double",
        "fct-type": "function",
        "title": "double"
      },
      "index": {
        "description": "Read rational number The syntax accepted by this function is the same as for rational Note This function is almost ten times faster than rational but is slightly less accurate The Double type supports about decimal places of accuracy For of numbers this function and rational give identical results but for the remaining this function loses precision around the th decimal place For of numbers this function will lose precision at the th or th decimal place",
        "hierarchy": "Data Text Read",
        "module": "Data.Text.Read",
        "name": "double",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Read.html#v:hexadecimal",
      "description": {
        "fct-descr": "\u003cp\u003eRead a hexadecimal integer, consisting of an optional leading\n \u003ccode\u003e\"0x\"\u003c/code\u003e followed by at least one decimal digit. Input is consumed\n until a non-hex-digit or end of string is reached.  This function\n is case insensitive.\n\u003c/p\u003e\u003cp\u003eThis function does not handle leading sign characters.  If you need\n to handle signed input, use \u003ccode\u003e\u003ccode\u003e\u003ca\u003esigned\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ehexadecimal\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: For fixed-width integer types, this function does not\n attempt to detect overflow, so a sufficiently long input may give\n incorrect results.  If you are worried about overflow, use\n \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e for your result type.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Read",
        "fct-package": "text",
        "fct-signature": "Reader a",
        "fct-source": "src/Data-Text-Read.html#hexadecimal",
        "fct-type": "function",
        "title": "hexadecimal"
      },
      "index": {
        "description": "Read hexadecimal integer consisting of an optional leading followed by at least one decimal digit Input is consumed until non-hex-digit or end of string is reached This function is case insensitive This function does not handle leading sign characters If you need to handle signed input use signed hexadecimal Note For fixed-width integer types this function does not attempt to detect overflow so sufficiently long input may give incorrect results If you are worried about overflow use Integer for your result type",
        "hierarchy": "Data Text Read",
        "module": "Data.Text.Read",
        "name": "hexadecimal",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Read.html#v:rational",
      "description": {
        "fct-descr": "\u003cp\u003eRead a rational number.\n\u003c/p\u003e\u003cp\u003eThis function accepts an optional leading sign character, followed\n by at least one decimal digit.  The syntax similar to that accepted\n by the \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e function, with the exception that a trailing \u003ccode\u003e'.'\u003c/code\u003e\n or \u003ccode\u003e'e'\u003c/code\u003e \u003cem\u003enot\u003c/em\u003e followed by a number is not consumed.\n\u003c/p\u003e\u003cp\u003eExamples (with behaviour identical to \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e):\n\u003c/p\u003e\u003cpre\u003erational \"3\"     == Right (3.0, \"\")\nrational \"3.1\"   == Right (3.1, \"\")\nrational \"3e4\"   == Right (30000.0, \"\")\nrational \"3.1e4\" == Right (31000.0, \"\")\nrational \".3\"    == Left \"input does not start with a digit\"\nrational \"e3\"    == Left \"input does not start with a digit\"\n\u003c/pre\u003e\u003cp\u003eExamples of differences from \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003erational \"3.foo\" == Right (3.0, \".foo\")\nrational \"3e\"    == Right (3.0, \"e\")\n\u003c/pre\u003e",
        "fct-module": "Data.Text.Read",
        "fct-package": "text",
        "fct-signature": "Reader a",
        "fct-source": "src/Data-Text-Read.html#rational",
        "fct-type": "function",
        "title": "rational"
      },
      "index": {
        "description": "Read rational number This function accepts an optional leading sign character followed by at least one decimal digit The syntax similar to that accepted by the read function with the exception that trailing or not followed by number is not consumed Examples with behaviour identical to read rational Right rational Right rational e4 Right rational e4 Right rational Left input does not start with digit rational e3 Left input does not start with digit Examples of differences from read rational foo Right foo rational Right",
        "hierarchy": "Data Text Read",
        "module": "Data.Text.Read",
        "name": "rational",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Read.html#v:signed",
      "description": {
        "fct-descr": "\u003cp\u003eRead an optional leading sign character (\u003ccode\u003e'-'\u003c/code\u003e or \u003ccode\u003e'+'\u003c/code\u003e) and\n apply it to the result of applying the given reader.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Read",
        "fct-package": "text",
        "fct-signature": "Reader a -\u003e Reader a",
        "fct-source": "src/Data-Text-Read.html#signed",
        "fct-type": "function",
        "title": "signed"
      },
      "index": {
        "description": "Read an optional leading sign character or and apply it to the result of applying the given reader",
        "hierarchy": "Data Text Read",
        "module": "Data.Text.Read",
        "name": "signed",
        "normalized": "Reader a-\u003eReader a",
        "package": "text",
        "partial": "",
        "signature": "Reader a-\u003eReader a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing unsafe \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e operations, for very very careful\n use in heavily tested code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text-Unsafe.html",
        "fct-type": "module",
        "title": "Unsafe"
      },
      "index": {
        "description": "module containing unsafe Text operations for very very careful use in heavily tested code",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "Unsafe",
        "normalized": "",
        "package": "text",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#t:Iter",
      "description": {
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Unsafe.html#Iter",
        "fct-type": "data",
        "title": "Iter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "Iter",
        "normalized": "",
        "package": "text",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:Iter",
      "description": {
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "Iter !Char !Int",
        "fct-source": "src/Data-Text-Unsafe.html#Iter",
        "fct-type": "function",
        "title": "Iter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "Iter",
        "normalized": "",
        "package": "text",
        "partial": "Iter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:dropWord16",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Unchecked drop of \u003ccode\u003ek\u003c/code\u003e \u003ccode\u003eWord16\u003c/code\u003es from the front of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Unsafe.html#dropWord16",
        "fct-type": "function",
        "title": "dropWord16"
      },
      "index": {
        "description": "Unchecked drop of Word16 from the front of Text",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "dropWord16",
        "normalized": "Int-\u003eText-\u003eText",
        "package": "text",
        "partial": "Word",
        "signature": "Int-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:inlineInterleaveST",
      "description": {
        "fct-descr": "\u003cp\u003eAllow an \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e computation to be deferred lazily. When passed an\n action of type \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e \u003ccode\u003es\u003c/code\u003e \u003ccode\u003ea\u003c/code\u003e, the action will only be performed when\n the value of \u003ccode\u003ea\u003c/code\u003e is demanded.\n\u003c/p\u003e\u003cp\u003eThis function is identical to the normal unsafeInterleaveST, but is\n inlined and hence faster.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: This operation is highly unsafe, as it can introduce\n externally visible non-determinism into an \u003ccode\u003e\u003ca\u003eST\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "ST s a -\u003e ST s a",
        "fct-source": "src/Data-Text-Internal-Unsafe.html#inlineInterleaveST",
        "fct-type": "function",
        "title": "inlineInterleaveST"
      },
      "index": {
        "description": "Allow an ST computation to be deferred lazily When passed an action of type ST the action will only be performed when the value of is demanded This function is identical to the normal unsafeInterleaveST but is inlined and hence faster Note This operation is highly unsafe as it can introduce externally visible non-determinism into an ST action",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "inlineInterleaveST",
        "normalized": "ST a b-\u003eST a b",
        "package": "text",
        "partial": "Interleave ST",
        "signature": "ST s a-\u003eST s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:inlinePerformIO",
      "description": {
        "fct-descr": "\u003cp\u003eJust like unsafePerformIO, but we inline it. Big performance gains as\n it exposes lots of things to further inlining. \u003cem\u003eVery unsafe\u003c/em\u003e. In\n particular, you should do no memory allocation inside an\n \u003ccode\u003e\u003ca\u003einlinePerformIO\u003c/a\u003e\u003c/code\u003e block. On Hugs this is just \u003ccode\u003eunsafePerformIO\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "IO a -\u003e a",
        "fct-source": "src/Data-Text-Internal-Unsafe.html#inlinePerformIO",
        "fct-type": "function",
        "title": "inlinePerformIO"
      },
      "index": {
        "description": "Just like unsafePerformIO but we inline it Big performance gains as it exposes lots of things to further inlining Very unsafe In particular you should do no memory allocation inside an inlinePerformIO block On Hugs this is just unsafePerformIO",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "inlinePerformIO",
        "normalized": "IO a-\u003ea",
        "package": "text",
        "partial": "Perform IO",
        "signature": "IO a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:iter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Iterate (unsafely) one step forwards through a UTF-16\n array, returning the current character and the delta to add to give\n the next offset to iterate at.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int -\u003e Iter",
        "fct-source": "src/Data-Text-Unsafe.html#iter",
        "fct-type": "function",
        "title": "iter"
      },
      "index": {
        "description": "Iterate unsafely one step forwards through UTF-16 array returning the current character and the delta to add to give the next offset to iterate at",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "iter",
        "normalized": "Text-\u003eInt-\u003eIter",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eInt-\u003eIter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:iter_",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Iterate one step through a UTF-16 array, returning the\n delta to add to give the next offset to iterate at.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int -\u003e Int",
        "fct-source": "src/Data-Text-Unsafe.html#iter_",
        "fct-type": "function",
        "title": "iter_"
      },
      "index": {
        "description": "Iterate one step through UTF-16 array returning the delta to add to give the next offset to iterate at",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "iter_",
        "normalized": "Text-\u003eInt-\u003eInt",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:lengthWord16",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Return the length of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e in units of \u003ccode\u003eWord16\u003c/code\u003e.  This\n is useful for sizing a target array appropriately before using\n \u003ccode\u003eunsafeCopyToPtr\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int",
        "fct-source": "src/Data-Text-Unsafe.html#lengthWord16",
        "fct-type": "function",
        "title": "lengthWord16"
      },
      "index": {
        "description": "Return the length of Text in units of Word16 This is useful for sizing target array appropriately before using unsafeCopyToPtr",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "lengthWord16",
        "normalized": "Text-\u003eInt",
        "package": "text",
        "partial": "Word",
        "signature": "Text-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:reverseIter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Iterate one step backwards through a UTF-16 array,\n returning the current character and the delta to add (i.e. a\n negative number) to give the next offset to iterate at.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int -\u003e (Char, Int)",
        "fct-source": "src/Data-Text-Unsafe.html#reverseIter",
        "fct-type": "function",
        "title": "reverseIter"
      },
      "index": {
        "description": "Iterate one step backwards through UTF-16 array returning the current character and the delta to add i.e negative number to give the next offset to iterate at",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "reverseIter",
        "normalized": "Text-\u003eInt-\u003e(Char,Int)",
        "package": "text",
        "partial": "Iter",
        "signature": "Text-\u003eInt-\u003e(Char,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:takeWord16",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Unchecked take of \u003ccode\u003ek\u003c/code\u003e \u003ccode\u003eWord16\u003c/code\u003es from the front of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text-Unsafe.html#takeWord16",
        "fct-type": "function",
        "title": "takeWord16"
      },
      "index": {
        "description": "Unchecked take of Word16 from the front of Text",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "takeWord16",
        "normalized": "Int-\u003eText-\u003eText",
        "package": "text",
        "partial": "Word",
        "signature": "Int-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:unsafeDupablePerformIO",
      "description": {
        "fct-descr": "\u003cp\u003eThis version of \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e is more efficient\nbecause it omits the check that the IO is only being performed by a\nsingle thread.  Hence, when you use \u003ccode\u003e\u003ca\u003eunsafeDupablePerformIO\u003c/a\u003e\u003c/code\u003e,\nthere is a possibility that the IO action may be performed multiple\ntimes (on a multiprocessor), and you should therefore ensure that\nit gives the same results each time.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "IO a -\u003e a",
        "fct-type": "function",
        "title": "unsafeDupablePerformIO"
      },
      "index": {
        "description": "This version of unsafePerformIO is more efficient because it omits the check that the IO is only being performed by single thread Hence when you use unsafeDupablePerformIO there is possibility that the IO action may be performed multiple times on multiprocessor and you should therefore ensure that it gives the same results each time",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "unsafeDupablePerformIO",
        "normalized": "IO a-\u003ea",
        "package": "text",
        "partial": "Dupable Perform IO",
        "signature": "IO a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:unsafeHead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A variant of \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e for non-empty \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eunsafeHead\u003c/a\u003e\u003c/code\u003e\n omits the check for the empty case, so there is an obligation on\n the programmer to provide a proof that the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char",
        "fct-source": "src/Data-Text-Unsafe.html#unsafeHead",
        "fct-type": "function",
        "title": "unsafeHead"
      },
      "index": {
        "description": "variant of head for non-empty Text unsafeHead omits the check for the empty case so there is an obligation on the programmer to provide proof that the Text is non-empty",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "unsafeHead",
        "normalized": "Text-\u003eChar",
        "package": "text",
        "partial": "Head",
        "signature": "Text-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text-Unsafe.html#v:unsafeTail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e A variant of \u003ccode\u003e\u003ca\u003etail\u003c/a\u003e\u003c/code\u003e for non-empty \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eunsafeTail\u003c/a\u003e\u003c/code\u003e\n omits the check for the empty case, so there is an obligation on\n the programmer to provide a proof that the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is non-empty.\n\u003c/p\u003e",
        "fct-module": "Data.Text.Unsafe",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text-Unsafe.html#unsafeTail",
        "fct-type": "function",
        "title": "unsafeTail"
      },
      "index": {
        "description": "variant of tail for non-empty Text unsafeTail omits the check for the empty case so there is an obligation on the programmer to provide proof that the Text is non-empty",
        "hierarchy": "Data Text Unsafe",
        "module": "Data.Text.Unsafe",
        "name": "unsafeTail",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Tail",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA time and space-efficient implementation of Unicode text.\n Suitable for performance critical use, both in terms of large data\n quantities and high speed.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: Read below the synopsis for important notes on the use of\n this module.\n\u003c/p\u003e\u003cp\u003eThis module is intended to be imported \u003ccode\u003equalified\u003c/code\u003e, to avoid name\n clashes with \u003ca\u003ePrelude\u003c/a\u003e functions, e.g.\n\u003c/p\u003e\u003cpre\u003e import qualified Data.Text as T\n\u003c/pre\u003e\u003cp\u003eTo use an extended and very rich family of functions for working\n with Unicode text (including normalization, regular expressions,\n non-standard encodings, text breaking, and locales), see the\n \u003ccode\u003etext-icu\u003c/code\u003e package: \u003ca\u003ehttp://hackage.haskell.org/package/text-icu\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "module",
        "fct-source": "src/Data-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "time and space-efficient implementation of Unicode text Suitable for performance critical use both in terms of large data quantities and high speed Note Read below the synopsis for important notes on the use of this module This module is intended to be imported qualified to avoid name clashes with Prelude functions e.g import qualified Data.Text as To use an extended and very rich family of functions for working with Unicode text including normalization regular expressions non-standard encodings text breaking and locales see the text-icu package http hackage.haskell.org package text-icu",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "Text",
        "normalized": "",
        "package": "text",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#t:Text",
      "description": {
        "fct-descr": "\u003cp\u003eA space efficient, packed, unboxed Unicode text type.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "data",
        "fct-source": "src/Data-Text-Internal.html#Text",
        "fct-type": "data",
        "title": "Text"
      },
      "index": {
        "description": "space efficient packed unboxed Unicode text type",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "Text",
        "normalized": "",
        "package": "text",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:all",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eall\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e determines whether all characters in the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e satisify the predicate \u003ccode\u003ep\u003c/code\u003e. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Bool",
        "fct-source": "src/Data-Text.html#all",
        "fct-type": "function",
        "title": "all"
      },
      "index": {
        "description": "all determines whether all characters in the Text satisify the predicate Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "all",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:any",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eany\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e determines whether any character in the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e satisifes the predicate \u003ccode\u003ep\u003c/code\u003e. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Bool",
        "fct-source": "src/Data-Text.html#any",
        "fct-type": "function",
        "title": "any"
      },
      "index": {
        "description": "any determines whether any character in the Text satisifes the predicate Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "any",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Appends one \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to the other by copying both of them\n into a new \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Appends one Text to the other by copying both of them into new Text Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "append",
        "normalized": "Text-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:break",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ebreak\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, but the prefix returned is\n over elements that fail the predicate \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text.html#break",
        "fct-type": "function",
        "title": "break"
      },
      "index": {
        "description": "break is like span but the prefix returned is over elements that fail the predicate",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "break",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:breakOn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Find the first instance of \u003ccode\u003eneedle\u003c/code\u003e (which must be\n non-\u003ccode\u003e\u003ca\u003enull\u003c/a\u003e\u003c/code\u003e) in \u003ccode\u003ehaystack\u003c/code\u003e.  The first element of the returned tuple\n is the prefix of \u003ccode\u003ehaystack\u003c/code\u003e before \u003ccode\u003eneedle\u003c/code\u003e is matched.  The second\n is the remainder of \u003ccode\u003ehaystack\u003c/code\u003e, starting with the match.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e breakOn \"::\" \"a::b::c\" ==\u003e (\"a\", \"::b::c\")\n breakOn \"/\" \"foobar\"   ==\u003e (\"foobar\", \"\")\n\u003c/pre\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e append prefix match == haystack\n   where (prefix, match) = breakOn needle haystack\n\u003c/pre\u003e\u003cp\u003eIf you need to break a string by a substring repeatedly (e.g. you\n want to break on every instance of a substring), use \u003ccode\u003e\u003ca\u003ebreakOnAll\u003c/a\u003e\u003c/code\u003e\n instead, as it has lower startup overhead.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text.html#breakOn",
        "fct-type": "function",
        "title": "breakOn"
      },
      "index": {
        "description": "Find the first instance of needle which must be non null in haystack The first element of the returned tuple is the prefix of haystack before needle is matched The second is the remainder of haystack starting with the match Examples breakOn breakOn foobar foobar Laws append prefix match haystack where prefix match breakOn needle haystack If you need to break string by substring repeatedly e.g you want to break on every instance of substring use breakOnAll instead as it has lower startup overhead In unlikely bad cases this function time complexity degrades towards",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "breakOn",
        "normalized": "Text-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "On",
        "signature": "Text-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:breakOnAll",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Find all non-overlapping instances of \u003ccode\u003eneedle\u003c/code\u003e in\n \u003ccode\u003ehaystack\u003c/code\u003e.  Each element of the returned list consists of a pair:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The entire string prior to the \u003cem\u003ek\u003c/em\u003eth match (i.e. the prefix)\n\u003c/li\u003e\u003cli\u003e The \u003cem\u003ek\u003c/em\u003eth match, followed by the remainder of the string\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e breakOnAll \"::\" \"\"\n ==\u003e []\n breakOnAll \"/\" \"a/b/c/\"\n ==\u003e [(\"a\", \"/b/c/\"), (\"a/b\", \"/c/\"), (\"a/b/c\", \"/\")]\n\u003c/pre\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eneedle\u003c/code\u003e parameter may not be empty.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text-\u003e Text-\u003e [(Text, Text)]",
        "fct-type": "function",
        "title": "breakOnAll"
      },
      "index": {
        "description": "Find all non-overlapping instances of needle in haystack Each element of the returned list consists of pair The entire string prior to the th match i.e the prefix The th match followed by the remainder of the string Examples breakOnAll breakOnAll In unlikely bad cases this function time complexity degrades towards The needle parameter may not be empty",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "breakOnAll",
        "normalized": "Text-\u003eText-\u003e[(Text,Text)]",
        "package": "text",
        "partial": "On All",
        "signature": "Text-\u003eText-\u003e[(Text,Text)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:breakOnEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Similar to \u003ccode\u003e\u003ca\u003ebreakOn\u003c/a\u003e\u003c/code\u003e, but searches from the end of the\n string.\n\u003c/p\u003e\u003cp\u003eThe first element of the returned tuple is the prefix of \u003ccode\u003ehaystack\u003c/code\u003e\n up to and including the last match of \u003ccode\u003eneedle\u003c/code\u003e.  The second is the\n remainder of \u003ccode\u003ehaystack\u003c/code\u003e, following the match.\n\u003c/p\u003e\u003cpre\u003e breakOnEnd \"::\" \"a::b::c\" ==\u003e (\"a::b::\", \"c\")\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text.html#breakOnEnd",
        "fct-type": "function",
        "title": "breakOnEnd"
      },
      "index": {
        "description": "Similar to breakOn but searches from the end of the string The first element of the returned tuple is the prefix of haystack up to and including the last match of needle The second is the remainder of haystack following the match breakOnEnd",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "breakOnEnd",
        "normalized": "Text-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "On End",
        "signature": "Text-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:center",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Center a string to the given length, using the specified\n fill character on either side.  Performs replacement on invalid\n scalar values.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e center 8 'x' \"HS\" = \"xxxHSxxx\"\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#center",
        "fct-type": "function",
        "title": "center"
      },
      "index": {
        "description": "Center string to the given length using the specified fill character on either side Performs replacement on invalid scalar values Examples center HS xxxHSxxx",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "center",
        "normalized": "Int-\u003eChar-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003eChar-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:chunksOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into components of length \u003ccode\u003ek\u003c/code\u003e.  The last\n element may be shorter than the other chunks, depending on the\n length of the input. Examples:\n\u003c/p\u003e\u003cpre\u003e chunksOf 3 \"foobarbaz\"   == [\"foo\",\"bar\",\"baz\"]\n chunksOf 4 \"haskell.org\" == [\"hask\",\"ell.\",\"org\"]\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Text -\u003e [Text]",
        "fct-source": "src/Data-Text.html#chunksOf",
        "fct-type": "function",
        "title": "chunksOf"
      },
      "index": {
        "description": "Splits Text into components of length The last element may be shorter than the other chunks depending on the length of the input Examples chunksOf foobarbaz foo bar baz chunksOf haskell.org hask ell org",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "chunksOf",
        "normalized": "Int-\u003eText-\u003e[Text]",
        "package": "text",
        "partial": "Of",
        "signature": "Int-\u003eText-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:commonPrefixes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Find the longest non-empty common prefix of two strings\n and return it, along with the suffixes of each string at which they\n no longer match.\n\u003c/p\u003e\u003cp\u003eIf the strings do not have a common prefix or either one is empty,\n this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e commonPrefixes \"foobar\" \"fooquux\" == Just (\"foo\",\"bar\",\"quux\")\n commonPrefixes \"veeble\" \"fetzer\"  == Nothing\n commonPrefixes \"\" \"baz\"           == Nothing\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Maybe (Text, Text, Text)",
        "fct-source": "src/Data-Text.html#commonPrefixes",
        "fct-type": "function",
        "title": "commonPrefixes"
      },
      "index": {
        "description": "Find the longest non-empty common prefix of two strings and return it along with the suffixes of each string at which they no longer match If the strings do not have common prefix or either one is empty this function returns Nothing Examples commonPrefixes foobar fooquux Just foo bar quux commonPrefixes veeble fetzer Nothing commonPrefixes baz Nothing",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "commonPrefixes",
        "normalized": "Text-\u003eText-\u003eMaybe(Text,Text,Text)",
        "package": "text",
        "partial": "Prefixes",
        "signature": "Text-\u003eText-\u003eMaybe(Text,Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:compareLength",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Compare the count of characters in a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to a number.\n Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThis function gives the same answer as comparing against the result\n of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e, but can short circuit if the count of characters is\n greater than the number, and hence be more efficient.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int -\u003e Ordering",
        "fct-source": "src/Data-Text.html#compareLength",
        "fct-type": "function",
        "title": "compareLength"
      },
      "index": {
        "description": "Compare the count of characters in Text to number Subject to fusion This function gives the same answer as comparing against the result of length but can short circuit if the count of characters is greater than the number and hence be more efficient",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "compareLength",
        "normalized": "Text-\u003eInt-\u003eOrdering",
        "package": "text",
        "partial": "Length",
        "signature": "Text-\u003eInt-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:concat",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Concatenate a list of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "[Text] -\u003e Text",
        "fct-source": "src/Data-Text.html#concat",
        "fct-type": "function",
        "title": "concat"
      },
      "index": {
        "description": "Concatenate list of Text",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "concat",
        "normalized": "[Text]-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:concatMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Map a function over a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e that results in a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, and\n concatenate the results.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Text) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#concatMap",
        "fct-type": "function",
        "title": "concatMap"
      },
      "index": {
        "description": "Map function over Text that results in Text and concatenate the results",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "concatMap",
        "normalized": "(Char-\u003eText)-\u003eText-\u003eText",
        "package": "text",
        "partial": "Map",
        "signature": "(Char-\u003eText)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:cons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Adds a character to the front of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  This function\n is more costly than its \u003ccode\u003eList\u003c/code\u003e counterpart because it requires\n copying a new array.  Subject to fusion.  Performs replacement on\n invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#cons",
        "fct-type": "function",
        "title": "cons"
      },
      "index": {
        "description": "Adds character to the front of Text This function is more costly than its List counterpart because it requires copying new array Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "cons",
        "normalized": "Char-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:copy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Make a distinct copy of the given string, sharing no\n storage with the original string.\n\u003c/p\u003e\u003cp\u003eAs an example, suppose you read a large string, of which you need\n only a small portion.  If you do not use \u003ccode\u003e\u003ca\u003ecopy\u003c/a\u003e\u003c/code\u003e, the entire original\n array will be kept alive in memory by the smaller string. Making a\n copy \"breaks the link\" to the original array, allowing it to be\n garbage collected if there are no other live references to it.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#copy",
        "fct-type": "function",
        "title": "copy"
      },
      "index": {
        "description": "Make distinct copy of the given string sharing no storage with the original string As an example suppose you read large string of which you need only small portion If you do not use copy the entire original array will be kept alive in memory by the smaller string Making copy breaks the link to the original array allowing it to be garbage collected if there are no other live references to it",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "copy",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003ecount\u003c/a\u003e\u003c/code\u003e function returns the number of times the\n query string appears in the given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e. An empty query string is\n invalid, and will cause an error to be raised.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Int",
        "fct-source": "src/Data-Text.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "The count function returns the number of times the query string appears in the given Text An empty query string is invalid and will cause an error to be raised In unlikely bad cases this function time complexity degrades towards",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "count",
        "normalized": "Text-\u003eText-\u003eInt",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:drop",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, returns the suffix of the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e after the first \u003ccode\u003en\u003c/code\u003e characters, or the empty \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e if \u003ccode\u003en\u003c/code\u003e\n is greater than the length of the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#drop",
        "fct-type": "function",
        "title": "drop"
      },
      "index": {
        "description": "drop applied to Text returns the suffix of the Text after the first characters or the empty Text if is greater than the length of the Text Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "drop",
        "normalized": "Int-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:dropAround",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edropAround\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e returns the substring remaining after\n dropping characters that fail the predicate \u003ccode\u003ep\u003c/code\u003e from both the\n beginning and end of \u003ccode\u003et\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#dropAround",
        "fct-type": "function",
        "title": "dropAround"
      },
      "index": {
        "description": "dropAround returns the substring remaining after dropping characters that fail the predicate from both the beginning and end of Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "dropAround",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eText",
        "package": "text",
        "partial": "Around",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:dropWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edropWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e returns the suffix remaining after\n \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#dropWhile",
        "fct-type": "function",
        "title": "dropWhile"
      },
      "index": {
        "description": "dropWhile returns the suffix remaining after takeWhile Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "dropWhile",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eText",
        "package": "text",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:dropWhileEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003edropWhileEnd\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ep\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e returns the prefix remaining after\n dropping characters that fail the predicate \u003ccode\u003ep\u003c/code\u003e from the end of\n \u003ccode\u003et\u003c/code\u003e.  Subject to fusion.\n Examples:\n\u003c/p\u003e\u003cpre\u003e dropWhileEnd (=='.') \"foo...\" == \"foo\"\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#dropWhileEnd",
        "fct-type": "function",
        "title": "dropWhileEnd"
      },
      "index": {
        "description": "dropWhileEnd returns the prefix remaining after dropping characters that fail the predicate from the end of Subject to fusion Examples dropWhileEnd foo foo",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "dropWhileEnd",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eText",
        "package": "text",
        "partial": "While End",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e The empty \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text",
        "fct-source": "src/Data-Text-Internal.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty Text",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "empty",
        "normalized": "",
        "package": "text",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:filter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, applied to a predicate and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n returns a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e containing those characters that satisfy the\n predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "filter applied to predicate and Text returns Text containing those characters that satisfy the predicate",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "filter",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, and\n returns the first element matching the predicate, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n there is no such element.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Maybe Char",
        "fct-source": "src/Data-Text.html#find",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "The find function takes predicate and Text and returns the first element matching the predicate or Nothing if there is no such element",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "find",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eMaybe Char",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eMaybe Char"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:findIndex",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003efindIndex\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n and returns the index of the first element in the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e satisfying\n the predicate. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Maybe Int",
        "fct-source": "src/Data-Text.html#findIndex",
        "fct-type": "function",
        "title": "findIndex"
      },
      "index": {
        "description": "The findIndex function takes predicate and Text and returns the index of the first element in the Text satisfying the predicate Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "findIndex",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eMaybe Int",
        "package": "text",
        "partial": "Index",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eMaybe Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the left-identity of the operator), and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n reduces the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using the binary operator, from left to right.\n Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e Text -\u003e a",
        "fct-source": "src/Data-Text.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "foldl applied to binary operator starting value typically the left-identity of the operator and Text reduces the Text using the binary operator from left to right Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "foldl",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eText-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eText-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:foldl-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e A strict version of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Char -\u003e a) -\u003e a -\u003e Text -\u003e a",
        "fct-source": "src/Data-Text.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "strict version of foldl Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "foldl'",
        "normalized": "(a-\u003eChar-\u003ea)-\u003ea-\u003eText-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "(a-\u003eChar-\u003ea)-\u003ea-\u003eText-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:foldl1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e A variant of \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to a non-empty \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Char",
        "fct-source": "src/Data-Text.html#foldl1",
        "fct-type": "function",
        "title": "foldl1"
      },
      "index": {
        "description": "variant of foldl that has no starting value argument and thus must be applied to non-empty Text Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "foldl1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:foldl1-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e A strict version of \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Char",
        "fct-source": "src/Data-Text.html#foldl1%27",
        "fct-type": "function",
        "title": "foldl1'"
      },
      "index": {
        "description": "strict version of foldl1 Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "foldl1'",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e, applied to a binary operator, a starting value\n (typically the right-identity of the operator), and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n reduces the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e using the binary operator, from right to left.\n Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e a -\u003e a) -\u003e a -\u003e Text -\u003e a",
        "fct-source": "src/Data-Text.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "foldr applied to binary operator starting value typically the right-identity of the operator and Text reduces the Text using the binary operator from right to left Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "foldr",
        "normalized": "(Char-\u003ea-\u003ea)-\u003ea-\u003eText-\u003ea",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003ea-\u003ea)-\u003ea-\u003eText-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:foldr1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e A variant of \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e that has no starting value argument,\n and thus must be applied to a non-empty \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Subject to\n fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Char",
        "fct-source": "src/Data-Text.html#foldr1",
        "fct-type": "function",
        "title": "foldr1"
      },
      "index": {
        "description": "variant of foldr that has no starting value argument and thus must be applied to non-empty Text Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "foldr1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:group",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Group characters in a string by equality.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text.html#group",
        "fct-type": "function",
        "title": "group"
      },
      "index": {
        "description": "Group characters in string by equality",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "group",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:groupBy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Group characters in a string according to a predicate.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Bool) -\u003e Text -\u003e [Text]",
        "fct-source": "src/Data-Text.html#groupBy",
        "fct-type": "function",
        "title": "groupBy"
      },
      "index": {
        "description": "Group characters in string according to predicate",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "groupBy",
        "normalized": "(Char-\u003eChar-\u003eBool)-\u003eText-\u003e[Text]",
        "package": "text",
        "partial": "By",
        "signature": "(Char-\u003eChar-\u003eBool)-\u003eText-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:head",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns the first character of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which must be\n non-empty.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char",
        "fct-source": "src/Data-Text.html#head",
        "fct-type": "function",
        "title": "head"
      },
      "index": {
        "description": "Returns the first character of Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "head",
        "normalized": "Text-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:index",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e index (subscript) operator, starting from 0.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int -\u003e Char",
        "fct-source": "src/Data-Text.html#index",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "Text index subscript operator starting from",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "index",
        "normalized": "Text-\u003eInt-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eInt-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:init",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns all but the last character of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which must\n be non-empty.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#init",
        "fct-type": "function",
        "title": "init"
      },
      "index": {
        "description": "Returns all but the last character of Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "init",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:inits",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all initial segments of the given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, shortest\n first.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text.html#inits",
        "fct-type": "function",
        "title": "inits"
      },
      "index": {
        "description": "Return all initial segments of the given Text shortest first",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "inits",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:intercalate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintercalate\u003c/a\u003e\u003c/code\u003e function takes a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e and a list of\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es and concatenates the list after interspersing the first\n argument between each element of the list.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text] -\u003e Text",
        "fct-source": "src/Data-Text.html#intercalate",
        "fct-type": "function",
        "title": "intercalate"
      },
      "index": {
        "description": "The intercalate function takes Text and list of Text and concatenates the list after interspersing the first argument between each element of the list",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "intercalate",
        "normalized": "Text-\u003e[Text]-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:intersperse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eintersperse\u003c/a\u003e\u003c/code\u003e function takes a character and places it\n between the characters of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Subject to fusion.  Performs\n replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#intersperse",
        "fct-type": "function",
        "title": "intersperse"
      },
      "index": {
        "description": "The intersperse function takes character and places it between the characters of Text Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "intersperse",
        "normalized": "Char-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:isInfixOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisInfixOf\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es and returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first is contained, wholly and intact, anywhere\n within the second.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Bool",
        "fct-source": "src/Data-Text.html#isInfixOf",
        "fct-type": "function",
        "title": "isInfixOf"
      },
      "index": {
        "description": "The isInfixOf function takes two Text and returns True iff the first is contained wholly and intact anywhere within the second In unlikely bad cases this function time complexity degrades towards",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "isInfixOf",
        "normalized": "Text-\u003eText-\u003eBool",
        "package": "text",
        "partial": "Infix Of",
        "signature": "Text-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:isPrefixOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisPrefixOf\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es and returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first is a prefix of the second.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Bool",
        "fct-source": "src/Data-Text.html#isPrefixOf",
        "fct-type": "function",
        "title": "isPrefixOf"
      },
      "index": {
        "description": "The isPrefixOf function takes two Text and returns True iff the first is prefix of the second Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "isPrefixOf",
        "normalized": "Text-\u003eText-\u003eBool",
        "package": "text",
        "partial": "Prefix Of",
        "signature": "Text-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:isSuffixOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003eisSuffixOf\u003c/a\u003e\u003c/code\u003e function takes two \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es and returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the first is a suffix of the second.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Bool",
        "fct-source": "src/Data-Text.html#isSuffixOf",
        "fct-type": "function",
        "title": "isSuffixOf"
      },
      "index": {
        "description": "The isSuffixOf function takes two Text and returns True iff the first is suffix of the second",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "isSuffixOf",
        "normalized": "Text-\u003eText-\u003eBool",
        "package": "text",
        "partial": "Suffix Of",
        "signature": "Text-\u003eText-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:justifyLeft",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Left-justify a string to the given length, using the\n specified fill character on the right. Subject to fusion.\n Performs replacement on invalid scalar values.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e justifyLeft 7 'x' \"foo\"    == \"fooxxxx\"\n justifyLeft 3 'x' \"foobar\" == \"foobar\"\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#justifyLeft",
        "fct-type": "function",
        "title": "justifyLeft"
      },
      "index": {
        "description": "Left-justify string to the given length using the specified fill character on the right Subject to fusion Performs replacement on invalid scalar values Examples justifyLeft foo fooxxxx justifyLeft foobar foobar",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "justifyLeft",
        "normalized": "Int-\u003eChar-\u003eText-\u003eText",
        "package": "text",
        "partial": "Left",
        "signature": "Int-\u003eChar-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:justifyRight",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Right-justify a string to the given length, using the\n specified fill character on the left.  Performs replacement on\n invalid scalar values.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e justifyRight 7 'x' \"bar\"    == \"xxxxbar\"\n justifyRight 3 'x' \"foobar\" == \"foobar\"\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#justifyRight",
        "fct-type": "function",
        "title": "justifyRight"
      },
      "index": {
        "description": "Right-justify string to the given length using the specified fill character on the left Performs replacement on invalid scalar values Examples justifyRight bar xxxxbar justifyRight foobar foobar",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "justifyRight",
        "normalized": "Int-\u003eChar-\u003eText-\u003eText",
        "package": "text",
        "partial": "Right",
        "signature": "Int-\u003eChar-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:last",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns the last character of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which must be\n non-empty.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char",
        "fct-source": "src/Data-Text.html#last",
        "fct-type": "function",
        "title": "last"
      },
      "index": {
        "description": "Returns the last character of Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "last",
        "normalized": "Text-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:length",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns the number of characters in a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Int",
        "fct-source": "src/Data-Text.html#length",
        "fct-type": "function",
        "title": "length"
      },
      "index": {
        "description": "Returns the number of characters in Text Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "length",
        "normalized": "Text-\u003eInt",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:lines",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Breaks a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e up into a list of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es at\n newline \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es. The resulting strings do not contain newlines.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text.html#lines",
        "fct-type": "function",
        "title": "lines"
      },
      "index": {
        "description": "Breaks Text up into list of Text at newline Char The resulting strings do not contain newlines",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "lines",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e is the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e obtained by applying \u003ccode\u003ef\u003c/code\u003e to\n each element of \u003ccode\u003et\u003c/code\u003e.  Subject to fusion.  Performs replacement on\n invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "map is the Text obtained by applying to each element of Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "map",
        "normalized": "(Char-\u003eChar)-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:mapAccumL",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efoldl'\u003c/a\u003e\u003c/code\u003e. Applies a\n function to each element of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, passing an accumulating\n parameter from left to right, and returns a final \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Performs\n replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Char -\u003e (a, Char)) -\u003e a -\u003e Text -\u003e (a, Text)",
        "fct-source": "src/Data-Text.html#mapAccumL",
        "fct-type": "function",
        "title": "mapAccumL"
      },
      "index": {
        "description": "Like combination of map and foldl Applies function to each element of Text passing an accumulating parameter from left to right and returns final Text Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "mapAccumL",
        "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eText-\u003e(a,Text)",
        "package": "text",
        "partial": "Accum",
        "signature": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eText-\u003e(a,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:mapAccumR",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emapAccumR\u003c/a\u003e\u003c/code\u003e function behaves like a combination of \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e and\n a strict \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e; it applies a function to each element of a\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, passing an accumulating parameter from right to left, and\n returning a final value of this accumulator together with the new\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Char -\u003e (a, Char)) -\u003e a -\u003e Text -\u003e (a, Text)",
        "fct-source": "src/Data-Text.html#mapAccumR",
        "fct-type": "function",
        "title": "mapAccumR"
      },
      "index": {
        "description": "The mapAccumR function behaves like combination of map and strict foldr it applies function to each element of Text passing an accumulating parameter from right to left and returning final value of this accumulator together with the new Text Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "mapAccumR",
        "normalized": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eText-\u003e(a,Text)",
        "package": "text",
        "partial": "Accum",
        "signature": "(a-\u003eChar-\u003e(a,Char))-\u003ea-\u003eText-\u003e(a,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:maximum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003emaximum\u003c/a\u003e\u003c/code\u003e returns the maximum value from a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which\n must be non-empty. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char",
        "fct-source": "src/Data-Text.html#maximum",
        "fct-type": "function",
        "title": "maximum"
      },
      "index": {
        "description": "maximum returns the maximum value from Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "maximum",
        "normalized": "Text-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:minimum",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003eminimum\u003c/a\u003e\u003c/code\u003e returns the minimum value from a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which\n must be non-empty. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char",
        "fct-source": "src/Data-Text.html#minimum",
        "fct-type": "function",
        "title": "minimum"
      },
      "index": {
        "description": "minimum returns the minimum value from Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "minimum",
        "normalized": "Text-\u003eChar",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Tests whether a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is empty or not.  Subject to\n fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Bool",
        "fct-source": "src/Data-Text.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Tests whether Text is empty or not Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "null",
        "normalized": "Text-\u003eBool",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  Subject to\n fusion.  Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "String -\u003e Text",
        "fct-source": "src/Data-Text.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Convert String into Text Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "pack",
        "normalized": "String-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "String-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:partition",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003epartition\u003c/a\u003e\u003c/code\u003e function takes a predicate and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n and returns the pair of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es with elements which do and do not\n satisfy the predicate, respectively; i.e.\n\u003c/p\u003e\u003cpre\u003e partition p t == (filter p t, filter (not . p) t)\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "The partition function takes predicate and Text and returns the pair of Text with elements which do and do not satisfy the predicate respectively i.e partition filter filter not",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "partition",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(m+n)\u003c/em\u003e Replace every occurrence of one substring with another.\n\u003c/p\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Replace every occurrence of one substring with another In unlikely bad cases this function time complexity degrades towards",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "replace",
        "normalized": "Text-\u003eText-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:replicate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n*m)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e \u003ccode\u003et\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e consisting of the input\n \u003ccode\u003et\u003c/code\u003e repeated \u003ccode\u003en\u003c/code\u003e times.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#replicate",
        "fct-type": "function",
        "title": "replicate"
      },
      "index": {
        "description": "replicate is Text consisting of the input repeated times",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "replicate",
        "normalized": "Int-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:reverse",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Reverse the characters of a string. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#reverse",
        "fct-type": "function",
        "title": "reverse"
      },
      "index": {
        "description": "Reverse the characters of string Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "reverse",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:scanl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e is similar to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e, but returns a list of\n successive reduced values from the left. Subject to fusion.\n Performs replacement on invalid scalar values.\n\u003c/p\u003e\u003cpre\u003e scanl f z [x1, x2, ...] == [z, z `f` x1, (z `f` x1) `f` x2, ...]\n\u003c/pre\u003e\u003cp\u003eNote that\n\u003c/p\u003e\u003cpre\u003e last (scanl f z xs) == foldl f z xs.\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#scanl",
        "fct-type": "function",
        "title": "scanl"
      },
      "index": {
        "description": "scanl is similar to foldl but returns list of successive reduced values from the left Subject to fusion Performs replacement on invalid scalar values scanl x1 x2 x1 x1 x2 Note that last scanl xs foldl xs",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "scanl",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:scanl1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanl1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e that has no starting\n value argument.  Subject to fusion.  Performs replacement on\n invalid scalar values.\n\u003c/p\u003e\u003cpre\u003e scanl1 f [x1, x2, ...] == [x1, x1 `f` x2, ...]\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#scanl1",
        "fct-type": "function",
        "title": "scanl1"
      },
      "index": {
        "description": "scanl1 is variant of scanl that has no starting value argument Subject to fusion Performs replacement on invalid scalar values scanl1 x1 x2 x1 x1 x2",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "scanl1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:scanr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e is the right-to-left dual of \u003ccode\u003e\u003ca\u003escanl\u003c/a\u003e\u003c/code\u003e.  Performs\n replacement on invalid scalar values.\n\u003c/p\u003e\u003cpre\u003e scanr f v == reverse . scanl (flip f) v . reverse\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Char -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#scanr",
        "fct-type": "function",
        "title": "scanr"
      },
      "index": {
        "description": "scanr is the right-to-left dual of scanl Performs replacement on invalid scalar values scanr reverse scanl flip reverse",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "scanr",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eChar-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:scanr1",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003escanr1\u003c/a\u003e\u003c/code\u003e is a variant of \u003ccode\u003e\u003ca\u003escanr\u003c/a\u003e\u003c/code\u003e that has no starting\n value argument.  Subject to fusion.  Performs replacement on\n invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#scanr1",
        "fct-type": "function",
        "title": "scanr1"
      },
      "index": {
        "description": "scanr1 is variant of scanr that has no starting value argument Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "scanr1",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Convert a character into a Text.  Subject to fusion.\n Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Char -\u003e Text",
        "fct-source": "src/Data-Text.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Convert character into Text Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "singleton",
        "normalized": "Char-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Char-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:snoc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Adds a character to the end of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.  This copies the\n entire array in the process, unless fused.  Subject to fusion.\n Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Char -\u003e Text",
        "fct-source": "src/Data-Text.html#snoc",
        "fct-type": "function",
        "title": "snoc"
      },
      "index": {
        "description": "Adds character to the end of Text This copies the entire array in the process unless fused Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "snoc",
        "normalized": "Text-\u003eChar-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eChar-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:span",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003espan\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and text \u003ccode\u003et\u003c/code\u003e, returns\n a pair whose first element is the longest prefix (possibly empty)\n of \u003ccode\u003et\u003c/code\u003e of elements that satisfy \u003ccode\u003ep\u003c/code\u003e, and whose second is the\n remainder of the list.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text.html#span",
        "fct-type": "function",
        "title": "span"
      },
      "index": {
        "description": "span applied to predicate and text returns pair whose first element is the longest prefix possibly empty of of elements that satisfy and whose second is the remainder of the list",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "span",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Splits a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into components delimited by separators,\n where the predicate returns True for a separator element.  The\n resulting components do not contain the separators.  Two adjacent\n separators result in an empty component in the output.  eg.\n\u003c/p\u003e\u003cpre\u003e split (=='a') \"aabbaca\" == [\"\",\"\",\"bb\",\"c\",\"\"]\n split (=='a') \"\"        == [\"\"]\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e [Text]",
        "fct-source": "src/Data-Text.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Splits Text into components delimited by separators where the predicate returns True for separator element The resulting components do not contain the separators Two adjacent separators result in an empty component in the output eg split aabbaca bb split",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "split",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "(Char-\u003eBool)-\u003eText-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:splitAt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003esplitAt\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en t\u003c/code\u003e returns a pair whose first element is a\n prefix of \u003ccode\u003et\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, and whose second is the remainder of\n the string. It is equivalent to \u003ccode\u003e(\u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e n t, \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e n t)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Text -\u003e (Text, Text)",
        "fct-source": "src/Data-Text.html#splitAt",
        "fct-type": "function",
        "title": "splitAt"
      },
      "index": {
        "description": "splitAt returns pair whose first element is prefix of of length and whose second is the remainder of the string It is equivalent to take drop",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "splitAt",
        "normalized": "Int-\u003eText-\u003e(Text,Text)",
        "package": "text",
        "partial": "At",
        "signature": "Int-\u003eText-\u003e(Text,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:splitOn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(m+n)\u003c/em\u003e Break a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into pieces separated by the first\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e argument, consuming the delimiter. An empty delimiter is\n invalid, and will cause an error to be raised.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e splitOn \"\\r\\n\" \"a\\r\\nb\\r\\nd\\r\\ne\" == [\"a\",\"b\",\"d\",\"e\"]\n splitOn \"aaa\"  \"aaaXaaaXaaaXaaa\"  == [\"\",\"X\",\"X\",\"X\",\"\"]\n splitOn \"x\"    \"x\"                == [\"\",\"\"]\n\u003c/pre\u003e\u003cp\u003eand\n\u003c/p\u003e\u003cpre\u003e intercalate s . splitOn s         == id\n splitOn (singleton c)             == split (==c)\n\u003c/pre\u003e\u003cp\u003eIn (unlikely) bad cases, this function's time complexity degrades\n towards \u003cem\u003eO(n*m)\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e [Text]",
        "fct-source": "src/Data-Text.html#splitOn",
        "fct-type": "function",
        "title": "splitOn"
      },
      "index": {
        "description": "Break Text into pieces separated by the first Text argument consuming the delimiter An empty delimiter is invalid and will cause an error to be raised Examples splitOn nb nd ne splitOn aaa aaaXaaaXaaaXaaa splitOn and intercalate splitOn id splitOn singleton split In unlikely bad cases this function time complexity degrades towards",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "splitOn",
        "normalized": "Text-\u003eText-\u003e[Text]",
        "package": "text",
        "partial": "On",
        "signature": "Text-\u003eText-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:strip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Remove leading and trailing white space from a string.\n Equivalent to:\n\u003c/p\u003e\u003cpre\u003e dropAround isSpace\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#strip",
        "fct-type": "function",
        "title": "strip"
      },
      "index": {
        "description": "Remove leading and trailing white space from string Equivalent to dropAround isSpace",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "strip",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:stripEnd",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Remove trailing white space from a string.  Equivalent to:\n\u003c/p\u003e\u003cpre\u003e dropWhileEnd isSpace\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#stripEnd",
        "fct-type": "function",
        "title": "stripEnd"
      },
      "index": {
        "description": "Remove trailing white space from string Equivalent to dropWhileEnd isSpace",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "stripEnd",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "End",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:stripPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return the suffix of the second string if its prefix\n matches the entire first string.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e stripPrefix \"foo\" \"foobar\" == Just \"bar\"\n stripPrefix \"\"    \"baz\"    == Just \"baz\"\n stripPrefix \"foo\" \"quux\"   == Nothing\n\u003c/pre\u003e\u003cp\u003eThis is particularly useful with the \u003ccode\u003eViewPatterns\u003c/code\u003e extension to\n GHC, as follows:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE ViewPatterns #-}\n import Data.Text as T\n\n fnordLength :: Text -\u003e Int\n fnordLength (stripPrefix \"fnord\" -\u003e Just suf) = T.length suf\n fnordLength _                                 = -1\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Maybe Text",
        "fct-source": "src/Data-Text.html#stripPrefix",
        "fct-type": "function",
        "title": "stripPrefix"
      },
      "index": {
        "description": "Return the suffix of the second string if its prefix matches the entire first string Examples stripPrefix foo foobar Just bar stripPrefix baz Just baz stripPrefix foo quux Nothing This is particularly useful with the ViewPatterns extension to GHC as follows LANGUAGE ViewPatterns import Data.Text as fnordLength Text Int fnordLength stripPrefix fnord Just suf T.length suf fnordLength",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "stripPrefix",
        "normalized": "Text-\u003eText-\u003eMaybe Text",
        "package": "text",
        "partial": "Prefix",
        "signature": "Text-\u003eText-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:stripStart",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Remove leading white space from a string.  Equivalent to:\n\u003c/p\u003e\u003cpre\u003e dropWhile isSpace\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#stripStart",
        "fct-type": "function",
        "title": "stripStart"
      },
      "index": {
        "description": "Remove leading white space from string Equivalent to dropWhile isSpace",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "stripStart",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Start",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:stripSuffix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return the prefix of the second string if its suffix\n matches the entire first string.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cpre\u003e stripSuffix \"bar\" \"foobar\" == Just \"foo\"\n stripSuffix \"\"    \"baz\"    == Just \"baz\"\n stripSuffix \"foo\" \"quux\"   == Nothing\n\u003c/pre\u003e\u003cp\u003eThis is particularly useful with the \u003ccode\u003eViewPatterns\u003c/code\u003e extension to\n GHC, as follows:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE ViewPatterns #-}\n import Data.Text as T\n\n quuxLength :: Text -\u003e Int\n quuxLength (stripSuffix \"quux\" -\u003e Just pre) = T.length pre\n quuxLength _                                = -1\n\u003c/pre\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e Maybe Text",
        "fct-source": "src/Data-Text.html#stripSuffix",
        "fct-type": "function",
        "title": "stripSuffix"
      },
      "index": {
        "description": "Return the prefix of the second string if its suffix matches the entire first string Examples stripSuffix bar foobar Just foo stripSuffix baz Just baz stripSuffix foo quux Nothing This is particularly useful with the ViewPatterns extension to GHC as follows LANGUAGE ViewPatterns import Data.Text as quuxLength Text Int quuxLength stripSuffix quux Just pre T.length pre quuxLength",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "stripSuffix",
        "normalized": "Text-\u003eText-\u003eMaybe Text",
        "package": "text",
        "partial": "Suffix",
        "signature": "Text-\u003eText-\u003eMaybe Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:tail",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns all characters after the head of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, which\n must be non-empty.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#tail",
        "fct-type": "function",
        "title": "tail"
      },
      "index": {
        "description": "Returns all characters after the head of Text which must be non-empty Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "tail",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:tails",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Return all final segments of the given \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, longest\n first.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text.html#tails",
        "fct-type": "function",
        "title": "tails"
      },
      "index": {
        "description": "Return all final segments of the given Text longest first",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "tails",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:take",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etake\u003c/a\u003e\u003c/code\u003e \u003ccode\u003en\u003c/code\u003e, applied to a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, returns the prefix of the\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e of length \u003ccode\u003en\u003c/code\u003e, or the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e itself if \u003ccode\u003en\u003c/code\u003e is greater than\n the length of the Text. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Int -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#take",
        "fct-type": "function",
        "title": "take"
      },
      "index": {
        "description": "take applied to Text returns the prefix of the Text of length or the Text itself if is greater than the length of the Text Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "take",
        "normalized": "Int-\u003eText-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:takeWhile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003etakeWhile\u003c/a\u003e\u003c/code\u003e, applied to a predicate \u003ccode\u003ep\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e,\n returns the longest prefix (possibly empty) of elements that\n satisfy \u003ccode\u003ep\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Bool) -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#takeWhile",
        "fct-type": "function",
        "title": "takeWhile"
      },
      "index": {
        "description": "takeWhile applied to predicate and Text returns the longest prefix possibly empty of elements that satisfy Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "takeWhile",
        "normalized": "(Char-\u003eBool)-\u003eText-\u003eText",
        "package": "text",
        "partial": "While",
        "signature": "(Char-\u003eBool)-\u003eText-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:toCaseFold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to folded case.  Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThis function is mainly useful for performing caseless (also known\n as case insensitive) string comparisons.\n\u003c/p\u003e\u003cp\u003eA string \u003ccode\u003ex\u003c/code\u003e is a caseless match for a string \u003ccode\u003ey\u003c/code\u003e if and only if:\n\u003c/p\u003e\u003cpre\u003etoCaseFold x == toCaseFold y\u003c/pre\u003e\u003cp\u003eThe result string may be longer than the input string, and may\n differ from applying \u003ccode\u003e\u003ca\u003etoLower\u003c/a\u003e\u003c/code\u003e to the input string.  For instance,\n the Armenian small ligature \"&#64275;\" (men now, U+FB13) is case\n folded to the sequence \"&#1396;\" (men, U+0574) followed by\n \"&#1398;\" (now, U+0576), while the Greek \"&#181;\" (micro sign,\n U+00B5) is case folded to \"&#956;\" (small letter mu, U+03BC)\n instead of itself.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#toCaseFold",
        "fct-type": "function",
        "title": "toCaseFold"
      },
      "index": {
        "description": "Convert string to folded case Subject to fusion This function is mainly useful for performing caseless also known as case insensitive string comparisons string is caseless match for string if and only if toCaseFold toCaseFold The result string may be longer than the input string and may differ from applying toLower to the input string For instance the Armenian small ligature men now FB13 is case folded to the sequence men followed by now while the Greek micro sign B5 is case folded to small letter mu BC instead of itself",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "toCaseFold",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Case Fold",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:toLower",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to lower case, using simple case\n conversion.  Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThe result string may be longer than the input string.  For\n instance, \"&#304;\" (Latin capital letter I with dot above,\n U+0130) maps to the sequence \"i\" (Latin small letter i, U+0069)\n followed by \" &#775;\" (combining dot above, U+0307).\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#toLower",
        "fct-type": "function",
        "title": "toLower"
      },
      "index": {
        "description": "Convert string to lower case using simple case conversion Subject to fusion The result string may be longer than the input string For instance Latin capital letter with dot above maps to the sequence Latin small letter followed by combining dot above",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "toLower",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Lower",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:toTitle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to title case, using simple case\n conversion. Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThe first letter of the input is converted to title case, as is\n every subsequent letter that immediately follows a non-letter.\n Every letter that immediately follows another letter is converted\n to lower case.\n\u003c/p\u003e\u003cp\u003eThe result string may be longer than the input string. For example,\n the Latin small ligature &#64258; (U+FB02) is converted to the\n sequence Latin capital letter F (U+0046) followed by Latin small\n letter l (U+006C).\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote\u003c/em\u003e: this function does not take language or culture specific\n rules into account. For instance, in English, different style\n guides disagree on whether the book name \"The Hill of the Red\n Fox\" is correctly title cased&#8212;but this function will\n capitalize \u003cem\u003eevery\u003c/em\u003e word.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#toTitle",
        "fct-type": "function",
        "title": "toTitle"
      },
      "index": {
        "description": "Convert string to title case using simple case conversion Subject to fusion The first letter of the input is converted to title case as is every subsequent letter that immediately follows non-letter Every letter that immediately follows another letter is converted to lower case The result string may be longer than the input string For example the Latin small ligature FB02 is converted to the sequence Latin capital letter followed by Latin small letter Note this function does not take language or culture specific rules into account For instance in English different style guides disagree on whether the book name The Hill of the Red Fox is correctly title cased but this function will capitalize every word",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "toTitle",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Title",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:toUpper",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a string to upper case, using simple case\n conversion.  Subject to fusion.\n\u003c/p\u003e\u003cp\u003eThe result string may be longer than the input string.  For\n instance, the German \"&#223;\" (eszett, U+00DF) maps to the\n two-letter sequence \"SS\".\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text",
        "fct-source": "src/Data-Text.html#toUpper",
        "fct-type": "function",
        "title": "toUpper"
      },
      "index": {
        "description": "Convert string to upper case using simple case conversion Subject to fusion The result string may be longer than the input string For instance the German eszett DF maps to the two-letter sequence SS",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "toUpper",
        "normalized": "Text-\u003eText",
        "package": "text",
        "partial": "Upper",
        "signature": "Text-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:transpose",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The \u003ccode\u003e\u003ca\u003etranspose\u003c/a\u003e\u003c/code\u003e function transposes the rows and columns\n of its \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e argument.  Note that this function uses \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e, and the list version of transpose, and is thus not very\n efficient.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "[Text] -\u003e [Text]",
        "fct-source": "src/Data-Text.html#transpose",
        "fct-type": "function",
        "title": "transpose"
      },
      "index": {
        "description": "The transpose function transposes the rows and columns of its Text argument Note that this function uses pack unpack and the list version of transpose and is thus not very efficient",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "transpose",
        "normalized": "[Text]-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "[Text]-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:uncons",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns the first character and rest of a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if empty. Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Maybe (Char, Text)",
        "fct-source": "src/Data-Text.html#uncons",
        "fct-type": "function",
        "title": "uncons"
      },
      "index": {
        "description": "Returns the first character and rest of Text or Nothing if empty Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "uncons",
        "normalized": "Text-\u003eMaybe(Char,Text)",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eMaybe(Char,Text)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:unfoldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e, where \u003ccode\u003en\u003c/code\u003e is the length of the result. The \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e\n function is analogous to the List \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e builds a\n \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e from a seed value. The function takes the element and\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it is done producing the \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, otherwise\n \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e(a,b)\u003c/code\u003e.  In this case, \u003ccode\u003ea\u003c/code\u003e is the next \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e in the\n string, and \u003ccode\u003eb\u003c/code\u003e is the seed value for further production. Subject\n to fusion.  Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(a -\u003e Maybe (Char, a)) -\u003e a -\u003e Text",
        "fct-source": "src/Data-Text.html#unfoldr",
        "fct-type": "function",
        "title": "unfoldr"
      },
      "index": {
        "description": "where is the length of the result The unfoldr function is analogous to the List unfoldr unfoldr builds Text from seed value The function takes the element and returns Nothing if it is done producing the Text otherwise Just In this case is the next Char in the string and is the seed value for further production Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "unfoldr",
        "normalized": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "(a-\u003eMaybe(Char,a))-\u003ea-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:unfoldrN",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Like \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e builds a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e from a seed\n value. However, the length of the result should be limited by the\n first argument to \u003ccode\u003e\u003ca\u003eunfoldrN\u003c/a\u003e\u003c/code\u003e. This function is more efficient than\n \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e when the maximum length of the result is known and\n correct, otherwise its performance is similar to \u003ccode\u003e\u003ca\u003eunfoldr\u003c/a\u003e\u003c/code\u003e. Subject\n to fusion.  Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Int -\u003e (a -\u003e Maybe (Char, a)) -\u003e a -\u003e Text",
        "fct-source": "src/Data-Text.html#unfoldrN",
        "fct-type": "function",
        "title": "unfoldrN"
      },
      "index": {
        "description": "Like unfoldr unfoldrN builds Text from seed value However the length of the result should be limited by the first argument to unfoldrN This function is more efficient than unfoldr when the maximum length of the result is known and correct otherwise its performance is similar to unfoldr Subject to fusion Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "unfoldrN",
        "normalized": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "Int-\u003e(a-\u003eMaybe(Char,a))-\u003ea-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:unlines",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Joins lines, after appending a terminating newline to\n each.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "[Text] -\u003e Text",
        "fct-source": "src/Data-Text.html#unlines",
        "fct-type": "function",
        "title": "unlines"
      },
      "index": {
        "description": "Joins lines after appending terminating newline to each",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "unlines",
        "normalized": "[Text]-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:unpack",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.  Subject to fusion.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e String",
        "fct-source": "src/Data-Text.html#unpack",
        "fct-type": "function",
        "title": "unpack"
      },
      "index": {
        "description": "Convert Text into String Subject to fusion",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "unpack",
        "normalized": "Text-\u003eString",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:unwords",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Joins words using single space characters.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "[Text] -\u003e Text",
        "fct-source": "src/Data-Text.html#unwords",
        "fct-type": "function",
        "title": "unwords"
      },
      "index": {
        "description": "Joins words using single space characters",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "unwords",
        "normalized": "[Text]-\u003eText",
        "package": "text",
        "partial": "",
        "signature": "[Text]-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:words",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Breaks a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e up into a list of words, delimited by \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003es\n representing white space.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e [Text]",
        "fct-source": "src/Data-Text.html#words",
        "fct-type": "function",
        "title": "words"
      },
      "index": {
        "description": "Breaks Text up into list of words delimited by Char representing white space",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "words",
        "normalized": "Text-\u003e[Text]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003e[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:zip",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e takes two \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003es and returns a list of\n corresponding pairs of bytes. If one input \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is short,\n excess elements of the longer \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e are discarded. This is\n equivalent to a pair of \u003ccode\u003e\u003ca\u003eunpack\u003c/a\u003e\u003c/code\u003e operations.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "Text -\u003e Text -\u003e [(Char, Char)]",
        "fct-source": "src/Data-Text.html#zip",
        "fct-type": "function",
        "title": "zip"
      },
      "index": {
        "description": "zip takes two Text and returns list of corresponding pairs of bytes If one input Text is short excess elements of the longer Text are discarded This is equivalent to pair of unpack operations",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "zip",
        "normalized": "Text-\u003eText-\u003e[(Char,Char)]",
        "package": "text",
        "partial": "",
        "signature": "Text-\u003eText-\u003e[(Char,Char)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/text/docs/Data-Text.html#v:zipWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e generalises \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e by zipping with the function\n given as the first argument, instead of a tupling function.\n Performs replacement on invalid scalar values.\n\u003c/p\u003e",
        "fct-module": "Data.Text",
        "fct-package": "text",
        "fct-signature": "(Char -\u003e Char -\u003e Char) -\u003e Text -\u003e Text -\u003e Text",
        "fct-source": "src/Data-Text.html#zipWith",
        "fct-type": "function",
        "title": "zipWith"
      },
      "index": {
        "description": "zipWith generalises zip by zipping with the function given as the first argument instead of tupling function Performs replacement on invalid scalar values",
        "hierarchy": "Data Text",
        "module": "Data.Text",
        "name": "zipWith",
        "normalized": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText-\u003eText",
        "package": "text",
        "partial": "With",
        "signature": "(Char-\u003eChar-\u003eChar)-\u003eText-\u003eText-\u003eText"
      }
    }
  }
]