[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-quotientref/docs/Data-QuotientRef.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Quotient Reference is a reference cell that needs two values to\n dereference.  In a way it is a two-dimensional table indexed by references.\n The trick is that if a cell is indexed by \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e, then if \u003cem\u003eeither\u003c/em\u003e\n \u003ccode\u003ea\u003c/code\u003e or \u003ccode\u003eb\u003c/code\u003e gets cleaned up by the garbage collector, then so does the\n cell, because it would not be able to be accessed anymore.\n\u003c/p\u003e\u003cp\u003eThere are two different types of indices, \u003ca\u003eLeftRef\u003c/a\u003e and \u003ca\u003eRightRef\u003c/a\u003e.  You\n need one of each, of the same type, to access a cell.\n\u003c/p\u003e\u003cp\u003eThe name comes from the idea that the product of two indices is a reference,\n so each index is a quotient.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e do\n   l_1 \u003c- newLeft\n   l_2 \u003c- newLeft\n   r_1 \u003c- newRight\n   r_2 \u003c- newRight\n   write l_1 r_1 \"Foo\"\n   write l_2 r_1 \"Bar\"\n   print =\u003c\u003c read l_1 r_1  -- Just \"Foo\"\n   print =\u003c\u003c read l_1 r_2  -- Nothing\n   print =\u003c\u003c read l_2 r_1  -- Just \"Bar\"\n   print =\u003c\u003c read l_2 r_2  -- Nothing\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.QuotientRef",
        "fct-package": "data-quotientref",
        "fct-signature": "module",
        "fct-source": "src/Data-QuotientRef.html",
        "fct-type": "module",
        "title": "QuotientRef"
      },
      "index": {
        "description": "Quotient Reference is reference cell that needs two values to dereference In way it is two-dimensional table indexed by references The trick is that if cell is indexed by and then if either or gets cleaned up by the garbage collector then so does the cell because it would not be able to be accessed anymore There are two different types of indices LeftRef and RightRef You need one of each of the same type to access cell The name comes from the idea that the product of two indices is reference so each index is quotient Example usage do newLeft newLeft newRight newRight write Foo write Bar print read Just Foo print read Nothing print read Just Bar print read Nothing",
        "hierarchy": "Data QuotientRef",
        "module": "Data.QuotientRef",
        "name": "QuotientRef",
        "normalized": "",
        "package": "data-quotientref",
        "partial": "Quotient Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-quotientref/docs/Data-QuotientRef.html#t:LeftRef",
      "description": {
        "fct-descr": "\u003cp\u003eThe left half of a reference cell.  Combine this with a \u003ca\u003eRightRef\u003c/a\u003e to\n access a cell.\n\u003c/p\u003e",
        "fct-module": "Data.QuotientRef",
        "fct-package": "data-quotientref",
        "fct-signature": "data",
        "fct-source": "src/Data-QuotientRef.html#LeftRef",
        "fct-type": "data",
        "title": "LeftRef"
      },
      "index": {
        "description": "The left half of reference cell Combine this with RightRef to access cell",
        "hierarchy": "Data QuotientRef",
        "module": "Data.QuotientRef",
        "name": "LeftRef",
        "normalized": "",
        "package": "data-quotientref",
        "partial": "Left Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-quotientref/docs/Data-QuotientRef.html#t:RightRef",
      "description": {
        "fct-descr": "\u003cp\u003eThe right half of a reference cell.  Combine this with a \u003ca\u003eLeftRef\u003c/a\u003e to\n access a cell.\n\u003c/p\u003e",
        "fct-module": "Data.QuotientRef",
        "fct-package": "data-quotientref",
        "fct-signature": "data",
        "fct-source": "src/Data-QuotientRef.html#RightRef",
        "fct-type": "data",
        "title": "RightRef"
      },
      "index": {
        "description": "The right half of reference cell Combine this with LeftRef to access cell",
        "hierarchy": "Data QuotientRef",
        "module": "Data.QuotientRef",
        "name": "RightRef",
        "normalized": "",
        "package": "data-quotientref",
        "partial": "Right Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-quotientref/docs/Data-QuotientRef.html#v:newLeft",
      "description": {
        "fct-module": "Data.QuotientRef",
        "fct-package": "data-quotientref",
        "fct-signature": "IO (LeftRef a)",
        "fct-source": "src/Data-QuotientRef.html#newLeft",
        "fct-type": "function",
        "title": "newLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Data QuotientRef",
        "module": "Data.QuotientRef",
        "name": "newLeft",
        "normalized": "",
        "package": "data-quotientref",
        "partial": "Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-quotientref/docs/Data-QuotientRef.html#v:newRight",
      "description": {
        "fct-module": "Data.QuotientRef",
        "fct-package": "data-quotientref",
        "fct-signature": "IO (RightRef a)",
        "fct-source": "src/Data-QuotientRef.html#newRight",
        "fct-type": "function",
        "title": "newRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Data QuotientRef",
        "module": "Data.QuotientRef",
        "name": "newRight",
        "normalized": "",
        "package": "data-quotientref",
        "partial": "Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-quotientref/docs/Data-QuotientRef.html#v:read",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the two halves of a reference and return the result if\n it exists.\n\u003c/p\u003e",
        "fct-module": "Data.QuotientRef",
        "fct-package": "data-quotientref",
        "fct-signature": "LeftRef a -\u003e RightRef a -\u003e IO (Maybe a)",
        "fct-source": "src/Data-QuotientRef.html#read",
        "fct-type": "function",
        "title": "read"
      },
      "index": {
        "description": "Combine the two halves of reference and return the result if it exists",
        "hierarchy": "Data QuotientRef",
        "module": "Data.QuotientRef",
        "name": "read",
        "normalized": "LeftRef a-\u003eRightRef a-\u003eIO(Maybe a)",
        "package": "data-quotientref",
        "partial": "",
        "signature": "LeftRef a-\u003eRightRef a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-quotientref/docs/Data-QuotientRef.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eCombine the two halves of a reference and write a value to the\n product.\n\u003c/p\u003e",
        "fct-module": "Data.QuotientRef",
        "fct-package": "data-quotientref",
        "fct-signature": "LeftRef a -\u003e RightRef a -\u003e a -\u003e IO ()",
        "fct-source": "src/Data-QuotientRef.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Combine the two halves of reference and write value to the product",
        "hierarchy": "Data QuotientRef",
        "module": "Data.QuotientRef",
        "name": "write",
        "normalized": "LeftRef a-\u003eRightRef a-\u003ea-\u003eIO()",
        "package": "data-quotientref",
        "partial": "",
        "signature": "LeftRef a-\u003eRightRef a-\u003ea-\u003eIO()"
      }
    }
  }
]