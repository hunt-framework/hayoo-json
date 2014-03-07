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
        "word": "glib"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAttributes interface\n\u003c/p\u003e\u003cp\u003eAttributes of an object can be get and set. Getting the value of an\n object's attribute is straingtforward. As an example consider a \u003ccode\u003ebutton\u003c/code\u003e\n widget and an attribute called \u003ccode\u003ebuttonLabel\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e value \u003c- get button buttonLabel\n\u003c/pre\u003e\u003cp\u003eThe syntax for setting or updating an attribute is only slightly more\n complex. At the simplest level it is just:\n\u003c/p\u003e\u003cpre\u003e set button [ buttonLabel := value ]\n\u003c/pre\u003e\u003cp\u003eHowever as the list notation would indicate, you can set or update multiple\n attributes of the same object in one go:\n\u003c/p\u003e\u003cpre\u003e set button [ buttonLabel := value, buttonFocusOnClick := False ]\n\u003c/pre\u003e\u003cp\u003eYou are not limited to setting the value of an attribute, you can also\n apply an update function to an attribute's value. That is the function\n receives the current value of the attribute and returns the new value.\n\u003c/p\u003e\u003cpre\u003e set spinButton [ spinButtonValue :~ (+1) ]\n\u003c/pre\u003e\u003cp\u003eThere are other variants of these operators, (see \u003ccode\u003e\u003ca\u003eAttrOp\u003c/a\u003e\u003c/code\u003e). \u003ccode\u003e\u003ca\u003e:=\u003e\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003e:~\u003e\u003c/a\u003e\u003c/code\u003e and like \u003ccode\u003e\u003ca\u003e:=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e:~\u003c/a\u003e\u003c/code\u003e but operate in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad rather\n than being pure. There is also \u003ccode\u003e\u003ca\u003e::=\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e::~\u003c/a\u003e\u003c/code\u003e which take the object\n as an extra parameter.\n\u003c/p\u003e\u003cp\u003eAttributes can be read only, write only or both read/write.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.Attributes",
          "name": "Attributes",
          "package": "glib",
          "source": "src/System-Glib-Attributes.html",
          "type": "module"
        },
        "index": {
          "description": "Attributes interface Attributes of an object can be get and set Getting the value of an object attribute is straingtforward As an example consider button widget and an attribute called buttonLabel value get button buttonLabel The syntax for setting or updating an attribute is only slightly more complex At the simplest level it is just set button buttonLabel value However as the list notation would indicate you can set or update multiple attributes of the same object in one go set button buttonLabel value buttonFocusOnClick False You are not limited to setting the value of an attribute you can also apply an update function to an attribute value That is the function receives the current value of the attribute and returns the new value set spinButton spinButtonValue There are other variants of these operators see AttrOp and and like and but operate in the IO monad rather than being pure There is also and which take the object as an extra parameter Attributes can be read only write only or both read write",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "Attributes",
          "package": "glib",
          "partial": "Attributes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ordinary attribute. Most attributes have the same get and set types.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "Attr",
          "package": "glib",
          "source": "src/System-Glib-Attributes.html#Attr",
          "type": "type"
        },
        "index": {
          "description": "An ordinary attribute Most attributes have the same get and set types",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "Attr",
          "package": "glib",
          "partial": "Attr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set or update operation on an attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "AttrOp",
          "package": "glib",
          "source": "src/System-Glib-Attributes.html#AttrOp",
          "type": "data"
        },
        "index": {
          "description": "set or update operation on an attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "AttrOp",
          "package": "glib",
          "partial": "Attr Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#t:AttrOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA read-only attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "ReadAttr",
          "package": "glib",
          "source": "src/System-Glib-Attributes.html#ReadAttr",
          "type": "type"
        },
        "index": {
          "description": "read-only attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "ReadAttr",
          "package": "glib",
          "partial": "Read Attr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#t:ReadAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalised attribute with independent get and set types.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "ReadWriteAttr",
          "package": "glib",
          "source": "src/System-Glib-Attributes.html#ReadWriteAttr",
          "type": "data"
        },
        "index": {
          "description": "generalised attribute with independent get and set types",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "ReadWriteAttr",
          "package": "glib",
          "partial": "Read Write Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#t:ReadWriteAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA write-only attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "WriteAttr",
          "package": "glib",
          "source": "src/System-Glib-Attributes.html#WriteAttr",
          "type": "type"
        },
        "index": {
          "description": "write-only attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "WriteAttr",
          "package": "glib",
          "partial": "Write Attr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#t:WriteAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an update function to\n   an attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": ":~",
          "package": "glib",
          "signature": "forall a b . (ReadWriteAttr o a b) :~ (a -\u003e b)",
          "source": "src/System-Glib-Attributes.html#AttrOp",
          "type": "function"
        },
        "index": {
          "description": "Apply an update function to an attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": ":~",
          "normalized": "a b c(ReadWriteAttr d b c)(b-\u003ec)",
          "package": "glib",
          "signature": "forall a b(ReadWriteAttr o a b)(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v::-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a IO update function\n   to an attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": ":~\u003e",
          "package": "glib",
          "signature": "forall a b . (ReadWriteAttr o a b) :~\u003e (a -\u003e IO b)",
          "source": "src/System-Glib-Attributes.html#AttrOp",
          "type": "function"
        },
        "index": {
          "description": "Apply IO update function to an attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": ":~\u003e",
          "normalized": "a b c(ReadWriteAttr d b c)(b-\u003eIO c)",
          "package": "glib",
          "signature": "forall a b(ReadWriteAttr o a b)(a-\u003eIO b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign a value to an\n   attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": ":=",
          "package": "glib",
          "signature": "forall a b . (ReadWriteAttr o a b) := b",
          "source": "src/System-Glib-Attributes.html#AttrOp",
          "type": "function"
        },
        "index": {
          "description": "Assign value to an attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": ":=",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign the result of an IO\n   action to an attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": ":=\u003e",
          "package": "glib",
          "signature": "(IO b)",
          "source": "src/System-Glib-Attributes.html#AttrOp",
          "type": "function"
        },
        "index": {
          "description": "Assign the result of an IO action to an attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": ":=\u003e",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an update function to\n   an attribute with the object\n   as an argument.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "::~",
          "package": "glib",
          "signature": "~ (o -\u003e a -\u003e b)",
          "source": "src/System-Glib-Attributes.html#AttrOp",
          "type": "function"
        },
        "index": {
          "description": "Apply an update function to an attribute with the object as an argument",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "::~",
          "normalized": "(a-\u003eb-\u003ec)",
          "package": "glib",
          "signature": "(o-\u003ea-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v:::-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign a value to an\n   attribute with the object as\n   an argument.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "::=",
          "package": "glib",
          "signature": "= (o -\u003e b)",
          "source": "src/System-Glib-Attributes.html#AttrOp",
          "type": "function"
        },
        "index": {
          "description": "Assign value to an attribute with the object as an argument",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "::=",
          "normalized": "(a-\u003eb)",
          "package": "glib",
          "signature": "(o-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v:::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an Attr of an object.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "get",
          "package": "glib",
          "signature": "o -\u003e ReadWriteAttr o a b -\u003e IO a",
          "source": "src/System-Glib-Attributes.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get an Attr of an object",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "get",
          "normalized": "a-\u003eReadWriteAttr a b c-\u003eIO b",
          "package": "glib",
          "signature": "o-\u003eReadWriteAttr o a b-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new attribute with a getter and setter function.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "newAttr",
          "package": "glib",
          "signature": "(o -\u003e IO a) -\u003e (o -\u003e b -\u003e IO ()) -\u003e ReadWriteAttr o a b",
          "source": "src/System-Glib-Attributes.html#newAttr",
          "type": "function"
        },
        "index": {
          "description": "Create new attribute with getter and setter function",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "newAttr",
          "normalized": "(a-\u003eIO b)-\u003e(a-\u003ec-\u003eIO())-\u003eReadWriteAttr a b c",
          "package": "glib",
          "partial": "Attr",
          "signature": "(o-\u003eIO a)-\u003e(o-\u003eb-\u003eIO())-\u003eReadWriteAttr o a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v:newAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new attribute with a getter and setter function.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "newNamedAttr",
          "package": "glib",
          "signature": "String -\u003e (o -\u003e IO a) -\u003e (o -\u003e b -\u003e IO ()) -\u003e ReadWriteAttr o a b",
          "source": "src/System-Glib-Attributes.html#newNamedAttr",
          "type": "function"
        },
        "index": {
          "description": "Create new attribute with getter and setter function",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "newNamedAttr",
          "normalized": "String-\u003e(a-\u003eIO b)-\u003e(a-\u003ec-\u003eIO())-\u003eReadWriteAttr a b c",
          "package": "glib",
          "partial": "Named Attr",
          "signature": "String-\u003e(o-\u003eIO a)-\u003e(o-\u003eb-\u003eIO())-\u003eReadWriteAttr o a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v:newNamedAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new read-only attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "readAttr",
          "package": "glib",
          "signature": "(o -\u003e IO a) -\u003e ReadAttr o a",
          "source": "src/System-Glib-Attributes.html#readAttr",
          "type": "function"
        },
        "index": {
          "description": "Create new read-only attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "readAttr",
          "normalized": "(a-\u003eIO b)-\u003eReadAttr a b",
          "package": "glib",
          "partial": "Attr",
          "signature": "(o-\u003eIO a)-\u003eReadAttr o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v:readAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new read-only attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "readNamedAttr",
          "package": "glib",
          "signature": "String -\u003e (o -\u003e IO a) -\u003e ReadAttr o a",
          "source": "src/System-Glib-Attributes.html#readNamedAttr",
          "type": "function"
        },
        "index": {
          "description": "Create new read-only attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "readNamedAttr",
          "normalized": "String-\u003e(a-\u003eIO b)-\u003eReadAttr a b",
          "package": "glib",
          "partial": "Named Attr",
          "signature": "String-\u003e(o-\u003eIO a)-\u003eReadAttr o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v:readNamedAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a number of properties for some object.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "set",
          "package": "glib",
          "signature": "o -\u003e [AttrOp o] -\u003e IO ()",
          "source": "src/System-Glib-Attributes.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set number of properties for some object",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "set",
          "normalized": "a-\u003e[AttrOp a]-\u003eIO()",
          "package": "glib",
          "signature": "o-\u003e[AttrOp o]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new write-only attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "writeAttr",
          "package": "glib",
          "signature": "(o -\u003e b -\u003e IO ()) -\u003e WriteAttr o b",
          "source": "src/System-Glib-Attributes.html#writeAttr",
          "type": "function"
        },
        "index": {
          "description": "Create new write-only attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "writeAttr",
          "normalized": "(a-\u003eb-\u003eIO())-\u003eWriteAttr a b",
          "package": "glib",
          "partial": "Attr",
          "signature": "(o-\u003eb-\u003eIO())-\u003eWriteAttr o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v:writeAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new write-only attribute.\n\u003c/p\u003e",
          "module": "System.Glib.Attributes",
          "name": "writeNamedAttr",
          "package": "glib",
          "signature": "String -\u003e (o -\u003e b -\u003e IO ()) -\u003e WriteAttr o b",
          "source": "src/System-Glib-Attributes.html#writeNamedAttr",
          "type": "function"
        },
        "index": {
          "description": "Create new write-only attribute",
          "hierarchy": "System Glib Attributes",
          "module": "System.Glib.Attributes",
          "name": "writeNamedAttr",
          "normalized": "String-\u003e(a-\u003eb-\u003eIO())-\u003eWriteAttr a b",
          "package": "glib",
          "partial": "Named Attr",
          "signature": "String-\u003e(o-\u003eb-\u003eIO())-\u003eWriteAttr o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Attributes.html#v:writeNamedAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a type class for flags that are marshaled as bitflags.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.Flags",
          "name": "Flags",
          "package": "glib",
          "source": "src/System-Glib-Flags.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines type class for flags that are marshaled as bitflags",
          "hierarchy": "System Glib Flags",
          "module": "System.Glib.Flags",
          "name": "Flags",
          "package": "glib",
          "partial": "Flags",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Flags.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Flags",
          "name": "Flags",
          "package": "glib",
          "source": "src/System-Glib-Flags.html#Flags",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Glib Flags",
          "module": "System.Glib.Flags",
          "name": "Flags",
          "package": "glib",
          "partial": "Flags",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Flags.html#t:Flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Flags",
          "name": "fromFlags",
          "package": "glib",
          "signature": "[a] -\u003e Int",
          "source": "src/System-Glib-Flags.html#fromFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Flags",
          "module": "System.Glib.Flags",
          "name": "fromFlags",
          "normalized": "[a]-\u003eInt",
          "package": "glib",
          "partial": "Flags",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Flags.html#v:fromFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Flags",
          "name": "toFlags",
          "package": "glib",
          "signature": "Int -\u003e [a]",
          "source": "src/System-Glib-Flags.html#toFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Flags",
          "module": "System.Glib.Flags",
          "name": "toFlags",
          "normalized": "Int-\u003e[a]",
          "package": "glib",
          "partial": "Flags",
          "signature": "Int-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Flags.html#v:toFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GDateTime",
          "package": "glib",
          "source": "src/System-Glib-GDateTime.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GDateTime",
          "package": "glib",
          "partial": "GDate Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GDate",
          "package": "glib",
          "source": "src/System-Glib-GDateTime.html#GDate",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GDate",
          "package": "glib",
          "partial": "GDate",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#t:GDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GDateDay",
          "package": "glib",
          "source": "src/System-Glib-GDateTime.html#GDateDay",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GDateDay",
          "package": "glib",
          "partial": "GDate Day",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#t:GDateDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GDateJulianDay",
          "package": "glib",
          "source": "src/System-Glib-GDateTime.html#GDateJulianDay",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GDateJulianDay",
          "package": "glib",
          "partial": "GDate Julian Day",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#t:GDateJulianDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GDateMonth",
          "package": "glib",
          "source": "src/System-Glib-GDateTime.html#GDateMonth",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GDateMonth",
          "package": "glib",
          "partial": "GDate Month",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#t:GDateMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GDateWeekday",
          "package": "glib",
          "source": "src/System-Glib-GDateTime.html#GDateWeekday",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GDateWeekday",
          "package": "glib",
          "partial": "GDate Weekday",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#t:GDateWeekday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GDateYear",
          "package": "glib",
          "source": "src/System-Glib-GDateTime.html#GDateYear",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GDateYear",
          "package": "glib",
          "partial": "GDate Year",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#t:GDateYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GTimeVal",
          "package": "glib",
          "source": "src/System-Glib-GDateTime.html#GTimeVal",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GTimeVal",
          "package": "glib",
          "partial": "GTime Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#t:GTimeVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GTimeValPart",
          "package": "glib",
          "source": "src/System-Glib-GDateTime.html#GTimeValPart",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GTimeValPart",
          "package": "glib",
          "partial": "GTime Val Part",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#t:GTimeValPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GDate",
          "package": "glib",
          "signature": "GDate",
          "source": "src/System-Glib-GDateTime.html#GDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GDate",
          "package": "glib",
          "partial": "GDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:GDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "GTimeVal",
          "package": "glib",
          "signature": "GTimeVal",
          "source": "src/System-Glib-GDateTime.html#GTimeVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "GTimeVal",
          "package": "glib",
          "partial": "GTime Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:GTimeVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateAddDays",
          "package": "glib",
          "signature": "GDate -\u003e Word -\u003e GDate",
          "source": "src/System-Glib-GDateTime.html#gDateAddDays",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateAddDays",
          "normalized": "GDate-\u003eWord-\u003eGDate",
          "package": "glib",
          "partial": "Date Add Days",
          "signature": "GDate-\u003eWord-\u003eGDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateAddDays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateAddMonths",
          "package": "glib",
          "signature": "GDate -\u003e Word -\u003e GDate",
          "source": "src/System-Glib-GDateTime.html#gDateAddMonths",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateAddMonths",
          "normalized": "GDate-\u003eWord-\u003eGDate",
          "package": "glib",
          "partial": "Date Add Months",
          "signature": "GDate-\u003eWord-\u003eGDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateAddMonths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateAddYears",
          "package": "glib",
          "signature": "GDate -\u003e Word -\u003e GDate",
          "source": "src/System-Glib-GDateTime.html#gDateAddYears",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateAddYears",
          "normalized": "GDate-\u003eWord-\u003eGDate",
          "package": "glib",
          "partial": "Date Add Years",
          "signature": "GDate-\u003eWord-\u003eGDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateAddYears"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateClamp",
          "package": "glib",
          "signature": "GDate -\u003e GDate -\u003e GDate -\u003e GDate",
          "source": "src/System-Glib-GDateTime.html#gDateClamp",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateClamp",
          "normalized": "GDate-\u003eGDate-\u003eGDate-\u003eGDate",
          "package": "glib",
          "partial": "Date Clamp",
          "signature": "GDate-\u003eGDate-\u003eGDate-\u003eGDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateClamp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateCompare",
          "package": "glib",
          "signature": "GDate -\u003e GDate -\u003e Ordering",
          "source": "src/System-Glib-GDateTime.html#gDateCompare",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateCompare",
          "normalized": "GDate-\u003eGDate-\u003eOrdering",
          "package": "glib",
          "partial": "Date Compare",
          "signature": "GDate-\u003eGDate-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateDay",
          "package": "glib",
          "signature": "GDate -\u003e GDateDay",
          "source": "src/System-Glib-GDateTime.html#gDateDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateDay",
          "normalized": "GDate-\u003eGDateDay",
          "package": "glib",
          "partial": "Date Day",
          "signature": "GDate-\u003eGDateDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateDaysBetween",
          "package": "glib",
          "signature": "GDate -\u003e GDate -\u003e Int",
          "source": "src/System-Glib-GDateTime.html#gDateDaysBetween",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateDaysBetween",
          "normalized": "GDate-\u003eGDate-\u003eInt",
          "package": "glib",
          "partial": "Date Days Between",
          "signature": "GDate-\u003eGDate-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateDaysBetween"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateJulianDay",
          "package": "glib",
          "signature": "GDateJulianDay",
          "source": "src/System-Glib-GDateTime.html#GDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateJulianDay",
          "package": "glib",
          "partial": "Date Julian Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateJulianDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateMonth",
          "package": "glib",
          "signature": "GDate -\u003e GDateMonth",
          "source": "src/System-Glib-GDateTime.html#gDateMonth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateMonth",
          "normalized": "GDate-\u003eGDateMonth",
          "package": "glib",
          "partial": "Date Month",
          "signature": "GDate-\u003eGDateMonth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateNewDMY",
          "package": "glib",
          "signature": "GDateDay -\u003e GDateMonth -\u003e GDateYear -\u003e Maybe GDate",
          "source": "src/System-Glib-GDateTime.html#gDateNewDMY",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateNewDMY",
          "normalized": "GDateDay-\u003eGDateMonth-\u003eGDateYear-\u003eMaybe GDate",
          "package": "glib",
          "partial": "Date New DMY",
          "signature": "GDateDay-\u003eGDateMonth-\u003eGDateYear-\u003eMaybe GDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateNewDMY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateNewJulian",
          "package": "glib",
          "signature": "GDateJulianDay -\u003e Maybe GDate",
          "source": "src/System-Glib-GDateTime.html#gDateNewJulian",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateNewJulian",
          "normalized": "GDateJulianDay-\u003eMaybe GDate",
          "package": "glib",
          "partial": "Date New Julian",
          "signature": "GDateJulianDay-\u003eMaybe GDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateNewJulian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateNewTimeVal",
          "package": "glib",
          "signature": "GTimeVal -\u003e GDate",
          "source": "src/System-Glib-GDateTime.html#gDateNewTimeVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateNewTimeVal",
          "normalized": "GTimeVal-\u003eGDate",
          "package": "glib",
          "partial": "Date New Time Val",
          "signature": "GTimeVal-\u003eGDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateNewTimeVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateParse",
          "package": "glib",
          "signature": "String -\u003e IO (Maybe GDate)",
          "source": "src/System-Glib-GDateTime.html#gDateParse",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateParse",
          "normalized": "String-\u003eIO(Maybe GDate)",
          "package": "glib",
          "partial": "Date Parse",
          "signature": "String-\u003eIO(Maybe GDate)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateSetDay",
          "package": "glib",
          "signature": "GDate -\u003e GDateDay -\u003e Maybe GDate",
          "source": "src/System-Glib-GDateTime.html#gDateSetDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateSetDay",
          "normalized": "GDate-\u003eGDateDay-\u003eMaybe GDate",
          "package": "glib",
          "partial": "Date Set Day",
          "signature": "GDate-\u003eGDateDay-\u003eMaybe GDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateSetDay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateSetMonth",
          "package": "glib",
          "signature": "GDate -\u003e GDateMonth -\u003e Maybe GDate",
          "source": "src/System-Glib-GDateTime.html#gDateSetMonth",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateSetMonth",
          "normalized": "GDate-\u003eGDateMonth-\u003eMaybe GDate",
          "package": "glib",
          "partial": "Date Set Month",
          "signature": "GDate-\u003eGDateMonth-\u003eMaybe GDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateSetMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateSetYear",
          "package": "glib",
          "signature": "GDate -\u003e GDateYear -\u003e Maybe GDate",
          "source": "src/System-Glib-GDateTime.html#gDateSetYear",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateSetYear",
          "normalized": "GDate-\u003eGDateYear-\u003eMaybe GDate",
          "package": "glib",
          "partial": "Date Set Year",
          "signature": "GDate-\u003eGDateYear-\u003eMaybe GDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateSetYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateSubtractDays",
          "package": "glib",
          "signature": "GDate -\u003e Word -\u003e GDate",
          "source": "src/System-Glib-GDateTime.html#gDateSubtractDays",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateSubtractDays",
          "normalized": "GDate-\u003eWord-\u003eGDate",
          "package": "glib",
          "partial": "Date Subtract Days",
          "signature": "GDate-\u003eWord-\u003eGDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateSubtractDays"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateSubtractMonths",
          "package": "glib",
          "signature": "GDate -\u003e Word -\u003e GDate",
          "source": "src/System-Glib-GDateTime.html#gDateSubtractMonths",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateSubtractMonths",
          "normalized": "GDate-\u003eWord-\u003eGDate",
          "package": "glib",
          "partial": "Date Subtract Months",
          "signature": "GDate-\u003eWord-\u003eGDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateSubtractMonths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateSubtractYears",
          "package": "glib",
          "signature": "GDate -\u003e Word -\u003e GDate",
          "source": "src/System-Glib-GDateTime.html#gDateSubtractYears",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateSubtractYears",
          "normalized": "GDate-\u003eWord-\u003eGDate",
          "package": "glib",
          "partial": "Date Subtract Years",
          "signature": "GDate-\u003eWord-\u003eGDate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateSubtractYears"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateValidDMY",
          "package": "glib",
          "signature": "GDateDay -\u003e GDateMonth -\u003e GDateYear -\u003e Bool",
          "source": "src/System-Glib-GDateTime.html#gDateValidDMY",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateValidDMY",
          "normalized": "GDateDay-\u003eGDateMonth-\u003eGDateYear-\u003eBool",
          "package": "glib",
          "partial": "Date Valid DMY",
          "signature": "GDateDay-\u003eGDateMonth-\u003eGDateYear-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateValidDMY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateValidJulian",
          "package": "glib",
          "signature": "GDateJulianDay -\u003e Bool",
          "source": "src/System-Glib-GDateTime.html#gDateValidJulian",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateValidJulian",
          "normalized": "GDateJulianDay-\u003eBool",
          "package": "glib",
          "partial": "Date Valid Julian",
          "signature": "GDateJulianDay-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateValidJulian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateWeekday",
          "package": "glib",
          "signature": "GDate -\u003e GDateWeekday",
          "source": "src/System-Glib-GDateTime.html#gDateWeekday",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateWeekday",
          "normalized": "GDate-\u003eGDateWeekday",
          "package": "glib",
          "partial": "Date Weekday",
          "signature": "GDate-\u003eGDateWeekday",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateWeekday"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gDateYear",
          "package": "glib",
          "signature": "GDate -\u003e GDateYear",
          "source": "src/System-Glib-GDateTime.html#gDateYear",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gDateYear",
          "normalized": "GDate-\u003eGDateYear",
          "package": "glib",
          "partial": "Date Year",
          "signature": "GDate-\u003eGDateYear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gDateYear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gGetCurrentTime",
          "package": "glib",
          "signature": "IO GTimeVal",
          "source": "src/System-Glib-GDateTime.html#gGetCurrentTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gGetCurrentTime",
          "package": "glib",
          "partial": "Get Current Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gGetCurrentTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gTimeValAdd",
          "package": "glib",
          "signature": "GTimeVal -\u003e GTimeValPart -\u003e GTimeVal",
          "source": "src/System-Glib-GDateTime.html#gTimeValAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gTimeValAdd",
          "normalized": "GTimeVal-\u003eGTimeValPart-\u003eGTimeVal",
          "package": "glib",
          "partial": "Time Val Add",
          "signature": "GTimeVal-\u003eGTimeValPart-\u003eGTimeVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gTimeValAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gTimeValFromISO8601",
          "package": "glib",
          "signature": "String -\u003e Maybe GTimeVal",
          "source": "src/System-Glib-GDateTime.html#gTimeValFromISO8601",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gTimeValFromISO8601",
          "normalized": "String-\u003eMaybe GTimeVal",
          "package": "glib",
          "partial": "Time Val From ISO",
          "signature": "String-\u003eMaybe GTimeVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gTimeValFromISO8601"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gTimeValSec",
          "package": "glib",
          "signature": "GTimeValPart",
          "source": "src/System-Glib-GDateTime.html#GTimeVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gTimeValSec",
          "package": "glib",
          "partial": "Time Val Sec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gTimeValSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gTimeValToISO8601",
          "package": "glib",
          "signature": "GTimeVal -\u003e String",
          "source": "src/System-Glib-GDateTime.html#gTimeValToISO8601",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gTimeValToISO8601",
          "normalized": "GTimeVal-\u003eString",
          "package": "glib",
          "partial": "Time Val To ISO",
          "signature": "GTimeVal-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gTimeValToISO8601"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gTimeValUSec",
          "package": "glib",
          "signature": "GTimeValPart",
          "source": "src/System-Glib-GDateTime.html#GTimeVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gTimeValUSec",
          "package": "glib",
          "partial": "Time Val USec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gTimeValUSec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GDateTime",
          "name": "gUSleep",
          "package": "glib",
          "signature": "GTimeValPart -\u003e IO ()",
          "source": "src/System-Glib-GDateTime.html#gUSleep",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GDateTime",
          "module": "System.Glib.GDateTime",
          "name": "gUSleep",
          "normalized": "GTimeValPart-\u003eIO()",
          "package": "glib",
          "partial": "USleep",
          "signature": "GTimeValPart-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GDateTime.html#v:gUSleep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eError Reporting, glib's system for reporting errors.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eGError\u003c/a\u003e\u003c/code\u003es are used by glib to report recoverable runtime errors.\n\u003c/p\u003e\u003cp\u003eThis module provides functions for checking glib/gtk functions that report\n \u003ccode\u003e\u003ca\u003eGError\u003c/a\u003e\u003c/code\u003es. It also provides functions for throwing and catching \u003ccode\u003e\u003ca\u003eGError\u003c/a\u003e\u003c/code\u003es as\n Haskell exceptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.GError",
          "name": "GError",
          "package": "glib",
          "source": "src/System-Glib-GError.html",
          "type": "module"
        },
        "index": {
          "description": "Error Reporting glib system for reporting errors GError are used by glib to report recoverable runtime errors This module provides functions for checking glib gtk functions that report GError It also provides functions for throwing and catching GError as Haskell exceptions",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "GError",
          "package": "glib",
          "partial": "GError",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GError consists of a domain, code and a human readable message.\n\u003c/p\u003e",
          "module": "System.Glib.GError",
          "name": "GError",
          "package": "glib",
          "source": "src/System-Glib-GError.html#GError",
          "type": "data"
        },
        "index": {
          "description": "GError consists of domain code and human readable message",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "GError",
          "package": "glib",
          "partial": "GError",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#t:GError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach error domain's error enumeration type should be an instance of this\n class. This class helps to hide the raw error and domain codes from the\n user. This interface should be implemented by calling the approrpiate\n \u003ccode\u003e{error_domain}_error_quark\u003c/code\u003e. It is safe to use a pure FFI call for this.\n\u003c/p\u003e\u003cp\u003eExample for \u003ccode\u003e\u003ca\u003ePixbufError\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e instance GErrorClass PixbufError where\n gerrorDomain _ = {#call pure unsafe pixbuf_error_quark#}\n\u003c/pre\u003e",
          "module": "System.Glib.GError",
          "name": "GErrorClass",
          "package": "glib",
          "source": "src/System-Glib-GError.html#GErrorClass",
          "type": "class"
        },
        "index": {
          "description": "Each error domain error enumeration type should be an instance of this class This class helps to hide the raw error and domain codes from the user This interface should be implemented by calling the approrpiate error domain error quark It is safe to use pure FFI call for this Example for PixbufError instance GErrorClass PixbufError where gerrorDomain call pure unsafe pixbuf error quark",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "GErrorClass",
          "package": "glib",
          "partial": "GError Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#t:GErrorClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA code to identify a specific error within a given \u003ccode\u003e\u003ca\u003eGErrorDomain\u003c/a\u003e\u003c/code\u003e. Most of\n time you will not need to deal with this raw code since there is an\n enumeration type for each error domain. Of course which enumeraton to use\n depends on the error domain, but if you use \u003ccode\u003e\u003ca\u003ecatchGErrorJustDomain\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003ehandleGErrorJustDomain\u003c/a\u003e\u003c/code\u003e, this is worked out for you automatically.\n\u003c/p\u003e",
          "module": "System.Glib.GError",
          "name": "GErrorCode",
          "package": "glib",
          "source": "src/System-Glib-GError.html#GErrorCode",
          "type": "type"
        },
        "index": {
          "description": "code to identify specific error within given GErrorDomain Most of time you will not need to deal with this raw code since there is an enumeration type for each error domain Of course which enumeraton to use depends on the error domain but if you use catchGErrorJustDomain or handleGErrorJustDomain this is worked out for you automatically",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "GErrorCode",
          "package": "glib",
          "partial": "GError Code",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#t:GErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA code used to identify the 'namespace' of the error. Within each error\n domain all the error codes are defined in an enumeration. Each gtk/gnome\n module that uses GErrors has its own error domain. The rationale behind\n using error domains is so that each module can organise its own error codes\n without having to coordinate on a global error code list.\n\u003c/p\u003e",
          "module": "System.Glib.GError",
          "name": "GErrorDomain",
          "package": "glib",
          "source": "src/System-Glib-GError.html#GErrorDomain",
          "type": "type"
        },
        "index": {
          "description": "code used to identify the namespace of the error Within each error domain all the error codes are defined in an enumeration Each gtk gnome module that uses GErrors has its own error domain The rationale behind using error domains is so that each module can organise its own error codes without having to coordinate on global error code list",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "GErrorDomain",
          "package": "glib",
          "partial": "GError Domain",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#t:GErrorDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA human readable error message.\n\u003c/p\u003e",
          "module": "System.Glib.GError",
          "name": "GErrorMessage",
          "package": "glib",
          "source": "src/System-Glib-GError.html#GErrorMessage",
          "type": "type"
        },
        "index": {
          "description": "human readable error message",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "GErrorMessage",
          "package": "glib",
          "partial": "GError Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#t:GErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GError",
          "name": "GError",
          "package": "glib",
          "signature": "GError !GErrorDomain !GErrorCode !GErrorMessage",
          "source": "src/System-Glib-GError.html#GError",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "GError",
          "package": "glib",
          "partial": "GError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:GError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use ordinary Control.Exception.catch\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis will catch any GError exception. The handler function will receive the\n raw GError. This is probably only useful when you want to take some action\n that does not depend on which GError exception has occured, otherwise it\n would be better to use either \u003ccode\u003e\u003ca\u003ecatchGErrorJust\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ecatchGErrorJustDomain\u003c/a\u003e\u003c/code\u003e.\n For example:\n\u003c/p\u003e\u003cpre\u003e catchGError\n (do ...\n ...)\n (\\(GError dom code msg) -\u003e fail msg)\n\u003c/pre\u003e",
          "module": "System.Glib.GError",
          "name": "catchGError",
          "package": "glib",
          "signature": "IO a-\u003e (GError -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use ordinary Control.Exception.catch This will catch any GError exception The handler function will receive the raw GError This is probably only useful when you want to take some action that does not depend on which GError exception has occured otherwise it would be better to use either catchGErrorJust or catchGErrorJustDomain For example catchGError do GError dom code msg fail msg",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "catchGError",
          "normalized": "IO a-\u003e(GError-\u003eIO a)-\u003eIO a",
          "package": "glib",
          "partial": "GError",
          "signature": "IO a-\u003e(GError-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:catchGError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis will catch just a specific GError exception. If you need to catch a\n range of related errors, \u003ccode\u003e\u003ca\u003ecatchGErrorJustDomain\u003c/a\u003e\u003c/code\u003e is probably more\n appropriate. Example:\n\u003c/p\u003e\u003cpre\u003e do image \u003c- catchGErrorJust PixbufErrorCorruptImage\n loadImage\n (\\errorMessage -\u003e do log errorMessage\n return mssingImagePlaceholder)\n\u003c/pre\u003e",
          "module": "System.Glib.GError",
          "name": "catchGErrorJust",
          "package": "glib",
          "signature": "err-\u003e IO a-\u003e (GErrorMessage -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "This will catch just specific GError exception If you need to catch range of related errors catchGErrorJustDomain is probably more appropriate Example do image catchGErrorJust PixbufErrorCorruptImage loadImage errorMessage do log errorMessage return mssingImagePlaceholder",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "catchGErrorJust",
          "normalized": "a-\u003eIO b-\u003e(GErrorMessage-\u003eIO b)-\u003eIO b",
          "package": "glib",
          "partial": "GError Just",
          "signature": "err-\u003eIO a-\u003e(GErrorMessage-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:catchGErrorJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch all GErrors from a particular error domain. The handler function\n should just deal with one error enumeration type. If you need to catch\n errors from more than one error domain, use this function twice with an\n appropriate handler functions for each.\n\u003c/p\u003e\u003cpre\u003e catchGErrorJustDomain\n loadImage\n (\\err message -\u003e case err of\n PixbufErrorCorruptImage -\u003e ...\n PixbufErrorInsufficientMemory -\u003e ...\n PixbufErrorUnknownType -\u003e ...\n _ -\u003e ...)\n\u003c/pre\u003e",
          "module": "System.Glib.GError",
          "name": "catchGErrorJustDomain",
          "package": "glib",
          "signature": "IO a-\u003e (err -\u003e GErrorMessage -\u003e IO a)-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Catch all GErrors from particular error domain The handler function should just deal with one error enumeration type If you need to catch errors from more than one error domain use this function twice with an appropriate handler functions for each catchGErrorJustDomain loadImage err message case err of PixbufErrorCorruptImage PixbufErrorInsufficientMemory PixbufErrorUnknownType",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "catchGErrorJustDomain",
          "normalized": "IO a-\u003e(b-\u003eGErrorMessage-\u003eIO a)-\u003eIO a",
          "package": "glib",
          "partial": "GError Just Domain",
          "signature": "IO a-\u003e(err-\u003eGErrorMessage-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:catchGErrorJustDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epropagateGError\u003c/a\u003e\u003c/code\u003e but instead of throwing the GError as an exception\n handles the error immediately using the supplied error handler.\n\u003c/p\u003e\u003cp\u003eExample of use:\n\u003c/p\u003e\u003cpre\u003e checkGError\n (\\gerrorPtr -\u003e {# call g_some_function_that_might_return_an_error #} a b gerrorPtr)\n (\\(GError domain code msg) -\u003e ...)\n\u003c/pre\u003e",
          "module": "System.Glib.GError",
          "name": "checkGError",
          "package": "glib",
          "signature": "(Ptr (Ptr ()) -\u003e IO a) -\u003e (GError -\u003e IO a) -\u003e IO a",
          "source": "src/System-Glib-GError.html#checkGError",
          "type": "function"
        },
        "index": {
          "description": "Like propagateGError but instead of throwing the GError as an exception handles the error immediately using the supplied error handler Example of use checkGError gerrorPtr call some function that might return an error gerrorPtr GError domain code msg",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "checkGError",
          "normalized": "(Ptr(Ptr())-\u003eIO a)-\u003e(GError-\u003eIO a)-\u003eIO a",
          "package": "glib",
          "partial": "GError",
          "signature": "(Ptr(Ptr())-\u003eIO a)-\u003e(GError-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:checkGError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch all GError exceptions and convert them into a general failure.\n\u003c/p\u003e",
          "module": "System.Glib.GError",
          "name": "failOnGError",
          "package": "glib",
          "signature": "IO a -\u003e IO a",
          "source": "src/System-Glib-GError.html#failOnGError",
          "type": "function"
        },
        "index": {
          "description": "Catch all GError exceptions and convert them into general failure",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "failOnGError",
          "normalized": "IO a-\u003eIO a",
          "package": "glib",
          "partial": "On GError",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:failOnGError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GError",
          "name": "gerrorDomain",
          "package": "glib",
          "signature": "gerrorDomain",
          "source": "src/System-Glib-GError.html#gerrorDomain",
          "type": "method"
        },
        "index": {
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "gerrorDomain",
          "package": "glib",
          "partial": "Domain",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:gerrorDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use ordinary Control.Exception.handle\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eA verson of \u003ccode\u003e\u003ca\u003ecatchGError\u003c/a\u003e\u003c/code\u003e with the arguments swapped around.\n\u003c/p\u003e\u003cpre\u003e handleGError (\\(GError dom code msg) -\u003e ...) $\n ...\n\u003c/pre\u003e",
          "module": "System.Glib.GError",
          "name": "handleGError",
          "package": "glib",
          "signature": "(GError -\u003e IO a) -\u003e IO a -\u003e IO a",
          "source": "src/System-Glib-GError.html#handleGError",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use ordinary Control.Exception.handle verson of catchGError with the arguments swapped around handleGError GError dom code msg",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "handleGError",
          "normalized": "(GError-\u003eIO a)-\u003eIO a-\u003eIO a",
          "package": "glib",
          "partial": "GError",
          "signature": "(GError-\u003eIO a)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:handleGError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA verson of \u003ccode\u003e\u003ca\u003ehandleGErrorJust\u003c/a\u003e\u003c/code\u003e with the arguments swapped around.\n\u003c/p\u003e",
          "module": "System.Glib.GError",
          "name": "handleGErrorJust",
          "package": "glib",
          "signature": "err -\u003e (GErrorMessage -\u003e IO a) -\u003e IO a -\u003e IO a",
          "source": "src/System-Glib-GError.html#handleGErrorJust",
          "type": "function"
        },
        "index": {
          "description": "verson of handleGErrorJust with the arguments swapped around",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "handleGErrorJust",
          "normalized": "a-\u003e(GErrorMessage-\u003eIO b)-\u003eIO b-\u003eIO b",
          "package": "glib",
          "partial": "GError Just",
          "signature": "err-\u003e(GErrorMessage-\u003eIO a)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:handleGErrorJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA verson of \u003ccode\u003e\u003ca\u003ecatchGErrorJustDomain\u003c/a\u003e\u003c/code\u003e with the arguments swapped around.\n\u003c/p\u003e",
          "module": "System.Glib.GError",
          "name": "handleGErrorJustDomain",
          "package": "glib",
          "signature": "(err -\u003e GErrorMessage -\u003e IO a) -\u003e IO a -\u003e IO a",
          "source": "src/System-Glib-GError.html#handleGErrorJustDomain",
          "type": "function"
        },
        "index": {
          "description": "verson of catchGErrorJustDomain with the arguments swapped around",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "handleGErrorJustDomain",
          "normalized": "(a-\u003eGErrorMessage-\u003eIO b)-\u003eIO b-\u003eIO b",
          "package": "glib",
          "partial": "GError Just Domain",
          "signature": "(err-\u003eGErrorMessage-\u003eIO a)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:handleGErrorJustDomain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlib functions which report \u003ccode\u003e\u003ca\u003eGError\u003c/a\u003e\u003c/code\u003es take as a parameter a \u003ccode\u003eGError\n **error\u003c/code\u003e. Use this function to supply such a parameter. It checks if an\n error was reported and if so throws it as a Haskell exception.\n\u003c/p\u003e\u003cp\u003eExample of use:\n\u003c/p\u003e\u003cpre\u003e propagateGError $ \\gerrorPtr -\u003e\n {# call g_some_function_that_might_return_an_error #} a b gerrorPtr\n\u003c/pre\u003e",
          "module": "System.Glib.GError",
          "name": "propagateGError",
          "package": "glib",
          "signature": "(Ptr (Ptr ()) -\u003e IO a) -\u003e IO a",
          "source": "src/System-Glib-GError.html#propagateGError",
          "type": "function"
        },
        "index": {
          "description": "Glib functions which report GError take as parameter GError error Use this function to supply such parameter It checks if an error was reported and if so throws it as Haskell exception Example of use propagateGError gerrorPtr call some function that might return an error gerrorPtr",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "propagateGError",
          "normalized": "(Ptr(Ptr())-\u003eIO a)-\u003eIO a",
          "package": "glib",
          "partial": "GError",
          "signature": "(Ptr(Ptr())-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:propagateGError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use ordinary Control.Exception.throw\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eUse this if you need to explicitly throw a GError or re-throw an existing\n GError that you do not wish to handle.\n\u003c/p\u003e",
          "module": "System.Glib.GError",
          "name": "throwGError",
          "package": "glib",
          "signature": "GError -\u003e IO a",
          "source": "src/System-Glib-GError.html#throwGError",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use ordinary Control.Exception.throw Use this if you need to explicitly throw GError or re-throw an existing GError that you do not wish to handle",
          "hierarchy": "System Glib GError",
          "module": "System.Glib.GError",
          "name": "throwGError",
          "normalized": "GError-\u003eIO a",
          "package": "glib",
          "partial": "GError",
          "signature": "GError-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GError.html#v:throwGError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines functions to extract data from a GList and to produce a GList from\n a list of pointers.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The same for GSList.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "System.Glib.GList",
          "name": "GList",
          "package": "glib",
          "source": "src/System-Glib-GList.html",
          "type": "module"
        },
        "index": {
          "description": "Defines functions to extract data from GList and to produce GList from list of pointers The same for GSList",
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "GList",
          "package": "glib",
          "partial": "GList",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "GList",
          "package": "glib",
          "source": "src/System-Glib-GList.html#GList",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "GList",
          "package": "glib",
          "partial": "GList",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#t:GList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "GSList",
          "package": "glib",
          "source": "src/System-Glib-GList.html#GSList",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "GSList",
          "package": "glib",
          "partial": "GSList",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#t:GSList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "fromGList",
          "package": "glib",
          "signature": "GList -\u003e IO [Ptr a]",
          "source": "src/System-Glib-GList.html#fromGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "fromGList",
          "normalized": "GList-\u003eIO[Ptr a]",
          "package": "glib",
          "partial": "GList",
          "signature": "GList-\u003eIO[Ptr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#v:fromGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "fromGSList",
          "package": "glib",
          "signature": "GSList -\u003e IO [Ptr a]",
          "source": "src/System-Glib-GList.html#fromGSList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "fromGSList",
          "normalized": "GSList-\u003eIO[Ptr a]",
          "package": "glib",
          "partial": "GSList",
          "signature": "GSList-\u003eIO[Ptr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#v:fromGSList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "fromGSListRev",
          "package": "glib",
          "signature": "GSList -\u003e IO [Ptr a]",
          "source": "src/System-Glib-GList.html#fromGSListRev",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "fromGSListRev",
          "normalized": "GSList-\u003eIO[Ptr a]",
          "package": "glib",
          "partial": "GSList Rev",
          "signature": "GSList-\u003eIO[Ptr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#v:fromGSListRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "readGList",
          "package": "glib",
          "signature": "GList -\u003e IO [Ptr a]",
          "source": "src/System-Glib-GList.html#readGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "readGList",
          "normalized": "GList-\u003eIO[Ptr a]",
          "package": "glib",
          "partial": "GList",
          "signature": "GList-\u003eIO[Ptr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#v:readGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "readGSList",
          "package": "glib",
          "signature": "GSList -\u003e IO [Ptr a]",
          "source": "src/System-Glib-GList.html#readGSList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "readGSList",
          "normalized": "GSList-\u003eIO[Ptr a]",
          "package": "glib",
          "partial": "GSList",
          "signature": "GSList-\u003eIO[Ptr a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#v:readGSList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "toGList",
          "package": "glib",
          "signature": "[Ptr a] -\u003e IO GList",
          "source": "src/System-Glib-GList.html#toGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "toGList",
          "normalized": "[Ptr a]-\u003eIO GList",
          "package": "glib",
          "partial": "GList",
          "signature": "[Ptr a]-\u003eIO GList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#v:toGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "toGSList",
          "package": "glib",
          "signature": "[Ptr a] -\u003e IO GSList",
          "source": "src/System-Glib-GList.html#toGSList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "toGSList",
          "normalized": "[Ptr a]-\u003eIO GSList",
          "package": "glib",
          "partial": "GSList",
          "signature": "[Ptr a]-\u003eIO GSList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#v:toGSList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "withGList",
          "package": "glib",
          "signature": "[Ptr a] -\u003e (GSList -\u003e IO b) -\u003e IO b",
          "source": "src/System-Glib-GList.html#withGList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "withGList",
          "normalized": "[Ptr a]-\u003e(GSList-\u003eIO b)-\u003eIO b",
          "package": "glib",
          "partial": "GList",
          "signature": "[Ptr a]-\u003e(GSList-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#v:withGList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GList",
          "name": "withGSList",
          "package": "glib",
          "signature": "[Ptr a] -\u003e (GSList -\u003e IO b) -\u003e IO b",
          "source": "src/System-Glib-GList.html#withGSList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GList",
          "module": "System.Glib.GList",
          "name": "withGSList",
          "normalized": "[Ptr a]-\u003e(GSList-\u003eIO b)-\u003eIO b",
          "package": "glib",
          "partial": "GSList",
          "signature": "[Ptr a]-\u003e(GSList-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GList.html#v:withGSList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe base object type for all glib objects\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.GObject",
          "name": "GObject",
          "package": "glib",
          "source": "src/System-Glib-GObject.html",
          "type": "module"
        },
        "index": {
          "description": "The base object type for all glib objects",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "GObject",
          "package": "glib",
          "partial": "GObject",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GObject",
          "name": "DestroyNotify",
          "package": "glib",
          "source": "src/System-Glib-GObject.html#DestroyNotify",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "DestroyNotify",
          "package": "glib",
          "partial": "Destroy Notify",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#t:DestroyNotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GObject",
          "name": "GObject",
          "package": "glib",
          "source": "src/System-Glib-Types.html#GObject",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "GObject",
          "package": "glib",
          "partial": "GObject",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#t:GObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GObject",
          "name": "GObjectClass",
          "package": "glib",
          "source": "src/System-Glib-Types.html#GObjectClass",
          "type": "class"
        },
        "index": {
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "GObjectClass",
          "package": "glib",
          "partial": "GObject Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#t:GObjectClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GObject",
          "name": "Quark",
          "package": "glib",
          "source": "src/System-Glib-GObject.html#Quark",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "Quark",
          "package": "glib",
          "partial": "Quark",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#t:Quark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GObject",
          "name": "GObject",
          "package": "glib",
          "signature": "GObject (ForeignPtr GObject)",
          "source": "src/System-Glib-Types.html#GObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "GObject",
          "package": "glib",
          "partial": "GObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:GObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GObject",
          "name": "castToGObject",
          "package": "glib",
          "signature": "obj -\u003e obj",
          "source": "src/System-Glib-Types.html#castToGObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "castToGObject",
          "normalized": "a-\u003ea",
          "package": "glib",
          "partial": "To GObject",
          "signature": "obj-\u003eobj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:castToGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function wraps any newly created objects that derives from\n GInitiallyUnowned also known as objects with\n \"floating-references\". The object will be refSink (for glib\n versions \u003e= 2.10). On non-floating objects, this function behaves\n exactly the same as \u003ca\u003emakeNewGObject\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "constructNewGObject",
          "package": "glib",
          "signature": "(ForeignPtr obj -\u003e obj, FinalizerPtr obj) -\u003e IO (Ptr obj) -\u003e IO obj",
          "source": "src/System-Glib-GObject.html#constructNewGObject",
          "type": "function"
        },
        "index": {
          "description": "This function wraps any newly created objects that derives from GInitiallyUnowned also known as objects with floating-references The object will be refSink for glib versions On non-floating objects this function behaves exactly the same as makeNewGObject",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "constructNewGObject",
          "normalized": "(ForeignPtr a-\u003ea,FinalizerPtr a)-\u003eIO(Ptr a)-\u003eIO a",
          "package": "glib",
          "partial": "New GObject",
          "signature": "(ForeignPtr obj-\u003eobj,FinalizerPtr obj)-\u003eIO(Ptr obj)-\u003eIO obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:constructNewGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMany methods in classes derived from GObject take a callback function and\n a destructor function which is called to free that callback function when\n it is no longer required. This constants is an address of a functions in\n C land that will free a function pointer.\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "destroyFunPtr",
          "package": "glib",
          "signature": "DestroyNotify",
          "source": "src/System-Glib-GObject.html#destroyFunPtr",
          "type": "function"
        },
        "index": {
          "description": "Many methods in classes derived from GObject take callback function and destructor function which is called to free that callback function when it is no longer required This constants is an address of functions in land that will free function pointer",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "destroyFunPtr",
          "package": "glib",
          "partial": "Fun Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:destroyFunPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe address of a function freeing a \u003ccode\u003e\u003ca\u003eStablePtr\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003edestroyFunPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "destroyStablePtr",
          "package": "glib",
          "signature": "DestroyNotify",
          "source": "src/System-Glib-GObject.html#destroyStablePtr",
          "type": "function"
        },
        "index": {
          "description": "The address of function freeing StablePtr See destroyFunPtr",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "destroyStablePtr",
          "package": "glib",
          "partial": "Stable Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:destroyStablePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type constant to check if an instance is of \u003ccode\u003e\u003ca\u003eGObject\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "gTypeGObject",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GObject.html#gTypeGObject",
          "type": "function"
        },
        "index": {
          "description": "The type constant to check if an instance is of GObject type",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "gTypeGObject",
          "package": "glib",
          "partial": "Type GObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:gTypeGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine if this is an instance of a particular GTK type\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "isA",
          "package": "glib",
          "signature": "o -\u003e GType -\u003e Bool",
          "source": "src/System-Glib-GObject.html#isA",
          "type": "function"
        },
        "index": {
          "description": "Determine if this is an instance of particular GTK type",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "isA",
          "normalized": "a-\u003eGType-\u003eBool",
          "package": "glib",
          "signature": "o-\u003eGType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:isA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function wraps any object that does not derive from Object.\n It should be used whenever a function returns a pointer to an existing\n \u003ccode\u003e\u003ca\u003eGObject\u003c/a\u003e\u003c/code\u003e (as opposed to a function that constructs a new object).\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The first argument is the contructor of the specific object.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Glib.GObject",
          "name": "makeNewGObject",
          "package": "glib",
          "signature": "(ForeignPtr obj -\u003e obj, FinalizerPtr obj)-\u003e IO (Ptr obj)-\u003e IO obj",
          "type": "function"
        },
        "index": {
          "description": "This function wraps any object that does not derive from Object It should be used whenever function returns pointer to an existing GObject as opposed to function that constructs new object The first argument is the contructor of the specific object",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "makeNewGObject",
          "normalized": "(ForeignPtr a-\u003ea,FinalizerPtr a)-\u003eIO(Ptr a)-\u003eIO a",
          "package": "glib",
          "partial": "New GObject",
          "signature": "(ForeignPtr obj-\u003eobj,FinalizerPtr obj)-\u003eIO(Ptr obj)-\u003eIO obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:makeNewGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GObject",
          "name": "mkGObject",
          "package": "glib",
          "signature": "(ForeignPtr GObject -\u003e GObject, FinalizerPtr a)",
          "source": "src/System-Glib-Types.html#mkGObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "mkGObject",
          "normalized": "(ForeignPtr GObject-\u003eGObject,FinalizerPtr a)",
          "package": "glib",
          "partial": "GObject",
          "signature": "(ForeignPtr GObject-\u003eGObject,FinalizerPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:mkGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an attribute to this object.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The function returns a new attribute that can be set or retrieved from\n any \u003ccode\u003e\u003ca\u003eGObject\u003c/a\u003e\u003c/code\u003e. The attribute is wrapped in a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e type to reflect\n the circumstance when the attribute is not set or if it should be unset.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Glib.GObject",
          "name": "objectCreateAttribute",
          "package": "glib",
          "signature": "IO (Attr o (Maybe a))",
          "source": "src/System-Glib-GObject.html#objectCreateAttribute",
          "type": "function"
        },
        "index": {
          "description": "Add an attribute to this object The function returns new attribute that can be set or retrieved from any GObject The attribute is wrapped in Maybe type to reflect the circumstance when the attribute is not set or if it should be unset",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "objectCreateAttribute",
          "package": "glib",
          "partial": "Create Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:objectCreateAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the value of an association.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Note that this function may crash the Haskell run-time since the\n returned type can be forced to be anything. See \u003ccode\u003e\u003ca\u003eobjectCreateAttribute\u003c/a\u003e\u003c/code\u003e\n for a safe wrapper around this funciton.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Glib.GObject",
          "name": "objectGetAttributeUnsafe",
          "package": "glib",
          "signature": "Quark -\u003e o -\u003e IO (Maybe a)",
          "source": "src/System-Glib-GObject.html#objectGetAttributeUnsafe",
          "type": "function"
        },
        "index": {
          "description": "Get the value of an association Note that this function may crash the Haskell run-time since the returned type can be forced to be anything See objectCreateAttribute for safe wrapper around this funciton",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "objectGetAttributeUnsafe",
          "normalized": "Quark-\u003ea-\u003eIO(Maybe b)",
          "package": "glib",
          "partial": "Get Attribute Unsafe",
          "signature": "Quark-\u003eo-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:objectGetAttributeUnsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a new object (should rairly be used directly)\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "objectNew",
          "package": "glib",
          "signature": "GType -\u003e [(String, GValue)] -\u003e IO (Ptr GObject)",
          "source": "src/System-Glib-GObject.html#objectNew",
          "type": "function"
        },
        "index": {
          "description": "Construct new object should rairly be used directly",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "objectNew",
          "normalized": "GType-\u003e[(String,GValue)]-\u003eIO(Ptr GObject)",
          "package": "glib",
          "partial": "New",
          "signature": "GType-\u003e[(String,GValue)]-\u003eIO(Ptr GObject)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:objectNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrease the reference counter of an object\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "objectRef",
          "package": "glib",
          "signature": "Ptr obj -\u003e IO ()",
          "source": "src/System-Glib-GObject.html#objectRef",
          "type": "function"
        },
        "index": {
          "description": "Increase the reference counter of an object",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "objectRef",
          "normalized": "Ptr a-\u003eIO()",
          "package": "glib",
          "partial": "Ref",
          "signature": "Ptr obj-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:objectRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference and sink an object.\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "objectRefSink",
          "package": "glib",
          "signature": "Ptr obj -\u003e IO ()",
          "source": "src/System-Glib-GObject.html#objectRefSink",
          "type": "function"
        },
        "index": {
          "description": "Reference and sink an object",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "objectRefSink",
          "normalized": "Ptr a-\u003eIO()",
          "package": "glib",
          "partial": "Ref Sink",
          "signature": "Ptr obj-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:objectRefSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the value of an association.\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "objectSetAttribute",
          "package": "glib",
          "signature": "Quark -\u003e o -\u003e Maybe a -\u003e IO ()",
          "source": "src/System-Glib-GObject.html#objectSetAttribute",
          "type": "function"
        },
        "index": {
          "description": "Set the value of an association",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "objectSetAttribute",
          "normalized": "Quark-\u003ea-\u003eMaybe b-\u003eIO()",
          "package": "glib",
          "partial": "Set Attribute",
          "signature": "Quark-\u003eo-\u003eMaybe a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:objectSetAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrease the reference counter of an object\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "objectUnref",
          "package": "glib",
          "signature": "FinalizerPtr a",
          "source": "src/System-Glib-Types.html#objectUnref",
          "type": "function"
        },
        "index": {
          "description": "Decrease the reference counter of an object",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "objectUnref",
          "package": "glib",
          "partial": "Unref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:objectUnref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a unique id based on the given string.\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "quarkFromString",
          "package": "glib",
          "signature": "String -\u003e IO Quark",
          "source": "src/System-Glib-GObject.html#quarkFromString",
          "type": "function"
        },
        "index": {
          "description": "Create unique id based on the given string",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "quarkFromString",
          "normalized": "String-\u003eIO Quark",
          "package": "glib",
          "partial": "From String",
          "signature": "String-\u003eIO Quark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:quarkFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe upcast.\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "toGObject",
          "package": "glib",
          "signature": "o -\u003e GObject",
          "source": "src/System-Glib-Types.html#toGObject",
          "type": "method"
        },
        "index": {
          "description": "Safe upcast",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "toGObject",
          "normalized": "a-\u003eGObject",
          "package": "glib",
          "partial": "GObject",
          "signature": "o-\u003eGObject",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:toGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GObject",
          "name": "unGObject",
          "package": "glib",
          "signature": "GObject -\u003e ForeignPtr GObject",
          "source": "src/System-Glib-Types.html#unGObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "unGObject",
          "normalized": "GObject-\u003eForeignPtr GObject",
          "package": "glib",
          "partial": "GObject",
          "signature": "GObject-\u003eForeignPtr GObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:unGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnchecked downcast.\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "unsafeCastGObject",
          "package": "glib",
          "signature": "GObject -\u003e o",
          "source": "src/System-Glib-Types.html#unsafeCastGObject",
          "type": "method"
        },
        "index": {
          "description": "Unchecked downcast",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "unsafeCastGObject",
          "normalized": "GObject-\u003ea",
          "package": "glib",
          "partial": "Cast GObject",
          "signature": "GObject-\u003eo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:unsafeCastGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function wraps any newly created object that does not derived\n from GInitiallyUnowned (that is a GObject with no floating\n reference). Since newly created \u003ccode\u003e\u003ca\u003eGObject\u003c/a\u003e\u003c/code\u003es have a reference count of\n one, they don't need ref'ing.\n\u003c/p\u003e",
          "module": "System.Glib.GObject",
          "name": "wrapNewGObject",
          "package": "glib",
          "signature": "(ForeignPtr obj -\u003e obj, FinalizerPtr obj) -\u003e IO (Ptr obj) -\u003e IO obj",
          "source": "src/System-Glib-GObject.html#wrapNewGObject",
          "type": "function"
        },
        "index": {
          "description": "This function wraps any newly created object that does not derived from GInitiallyUnowned that is GObject with no floating reference Since newly created GObject have reference count of one they don need ref ing",
          "hierarchy": "System Glib GObject",
          "module": "System.Glib.GObject",
          "name": "wrapNewGObject",
          "normalized": "(ForeignPtr a-\u003ea,FinalizerPtr a)-\u003eIO(Ptr a)-\u003eIO a",
          "package": "glib",
          "partial": "New GObject",
          "signature": "(ForeignPtr obj-\u003eobj,FinalizerPtr obj)-\u003eIO(Ptr obj)-\u003eIO obj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GObject.html#v:wrapNewGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStorable instance for GParameter, used by objectNew\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.GParameter",
          "name": "GParameter",
          "package": "glib",
          "source": "src/System-Glib-GParameter.html",
          "type": "module"
        },
        "index": {
          "description": "Storable instance for GParameter used by objectNew",
          "hierarchy": "System Glib GParameter",
          "module": "System.Glib.GParameter",
          "name": "GParameter",
          "package": "glib",
          "partial": "GParameter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GParameter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GParameter",
          "name": "GParameter",
          "package": "glib",
          "source": "src/System-Glib-GParameter.html#GParameter",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System Glib GParameter",
          "module": "System.Glib.GParameter",
          "name": "GParameter",
          "package": "glib",
          "partial": "GParameter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GParameter.html#t:GParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GParameter",
          "name": "GParameter",
          "package": "glib",
          "signature": "GParameter (String, GValue)",
          "source": "src/System-Glib-GParameter.html#GParameter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GParameter",
          "module": "System.Glib.GParameter",
          "name": "GParameter",
          "normalized": "GParameter(String,GValue)",
          "package": "glib",
          "partial": "GParameter",
          "signature": "GParameter(String,GValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GParameter.html#v:GParameter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines functions to extract data from a GString.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.GString",
          "name": "GString",
          "package": "glib",
          "source": "src/System-Glib-GString.html",
          "type": "module"
        },
        "index": {
          "description": "Defines functions to extract data from GString",
          "hierarchy": "System Glib GString",
          "module": "System.Glib.GString",
          "name": "GString",
          "package": "glib",
          "partial": "GString",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GString",
          "name": "GString",
          "package": "glib",
          "source": "src/System-Glib-GString.html#GString",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib GString",
          "module": "System.Glib.GString",
          "name": "GString",
          "package": "glib",
          "partial": "GString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GString.html#t:GString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GString",
          "name": "fromGString",
          "package": "glib",
          "signature": "GString -\u003e IO (Maybe String)",
          "source": "src/System-Glib-GString.html#fromGString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GString",
          "module": "System.Glib.GString",
          "name": "fromGString",
          "normalized": "GString-\u003eIO(Maybe String)",
          "package": "glib",
          "partial": "GString",
          "signature": "GString-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GString.html#v:fromGString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GString",
          "name": "readGString",
          "package": "glib",
          "signature": "GString -\u003e IO (Maybe String)",
          "source": "src/System-Glib-GString.html#readGString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GString",
          "module": "System.Glib.GString",
          "name": "readGString",
          "normalized": "GString-\u003eIO(Maybe String)",
          "package": "glib",
          "partial": "GString",
          "signature": "GString-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GString.html#v:readGString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements only the necessities for the GTK binding.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.GType",
          "name": "GType",
          "package": "glib",
          "source": "src/System-Glib-GType.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements only the necessities for the GTK binding",
          "hierarchy": "System Glib GType",
          "module": "System.Glib.GType",
          "name": "GType",
          "package": "glib",
          "partial": "GType",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GType",
          "name": "GType",
          "package": "glib",
          "source": "src/System-Glib-GType.html#GType",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib GType",
          "module": "System.Glib.GType",
          "name": "GType",
          "package": "glib",
          "partial": "GType",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GType.html#t:GType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrior to any use of the glib type/object system, \u003ccode\u003eglibTypeInit\u003c/code\u003e has to\n be called to initialise the system.\n\u003c/p\u003e\u003cp\u003eNote that this is not needed for gtk applications using \u003ccode\u003einitGUI\u003c/code\u003e since\n that initialises everything itself. It is only needed for applications\n using glib directly, without also using gtk.\n\u003c/p\u003e",
          "module": "System.Glib.GType",
          "name": "glibTypeInit",
          "package": "glib",
          "signature": "IO ()",
          "source": "src/System-Glib-GType.html#glibTypeInit",
          "type": "function"
        },
        "index": {
          "description": "Prior to any use of the glib type object system glibTypeInit has to be called to initialise the system Note that this is not needed for gtk applications using initGUI since that initialises everything itself It is only needed for applications using glib directly without also using gtk",
          "hierarchy": "System Glib GType",
          "module": "System.Glib.GType",
          "name": "glibTypeInit",
          "normalized": "IO()",
          "package": "glib",
          "partial": "Type Init",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GType.html#v:glibTypeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if an object is of the specific type or derived from it.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Internally used by Hierarchy.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Glib.GType",
          "name": "typeInstanceIsA",
          "package": "glib",
          "signature": "Ptr () -\u003e GType -\u003e Bool",
          "source": "src/System-Glib-GType.html#typeInstanceIsA",
          "type": "function"
        },
        "index": {
          "description": "Check if an object is of the specific type or derived from it Internally used by Hierarchy",
          "hierarchy": "System Glib GType",
          "module": "System.Glib.GType",
          "name": "typeInstanceIsA",
          "normalized": "Ptr()-\u003eGType-\u003eBool",
          "package": "glib",
          "partial": "Instance Is",
          "signature": "Ptr()-\u003eGType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GType.html#v:typeInstanceIsA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "GTypeConstants",
          "package": "glib",
          "source": "src/System-Glib-GTypeConstants.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "GTypeConstants",
          "package": "glib",
          "partial": "GType Constants",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "bool",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "bool",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "boxed",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#boxed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "boxed",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:boxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "char",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#char",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "char",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "double",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#double",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "double",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "enum",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#enum",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "enum",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:enum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "flags",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#flags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "flags",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:flags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "float",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#float",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "float",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "int",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#int",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "int",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "int64",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#int64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "int64",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:int64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "invalid",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#invalid",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "invalid",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:invalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "none",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#none",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "none",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:none"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "object",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#object",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "object",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "pointer",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#pointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "pointer",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "string",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#string",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "string",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "uchar",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#uchar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "uchar",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:uchar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "uint",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#uint",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "uint",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:uint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GTypeConstants",
          "name": "uint64",
          "package": "glib",
          "signature": "GType",
          "source": "src/System-Glib-GTypeConstants.html#uint64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GTypeConstants",
          "module": "System.Glib.GTypeConstants",
          "name": "uint64",
          "package": "glib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GTypeConstants.html#v:uint64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements only the necessities for the GTK binding.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Everything here is only used by \u003ca\u003eGraphics.UI.Gtk.TreeList.TreeModel\u003c/a\u003e and\n friends.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "System.Glib.GValue",
          "name": "GValue",
          "package": "glib",
          "source": "src/System-Glib-GValue.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements only the necessities for the GTK binding Everything here is only used by Graphics.UI.Gtk.TreeList.TreeModel and friends",
          "hierarchy": "System Glib GValue",
          "module": "System.Glib.GValue",
          "name": "GValue",
          "package": "glib",
          "partial": "GValue",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValue",
          "name": "GValue",
          "package": "glib",
          "source": "src/System-Glib-GValue.html#GValue",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System Glib GValue",
          "module": "System.Glib.GValue",
          "name": "GValue",
          "package": "glib",
          "partial": "GValue",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValue.html#t:GValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValue",
          "name": "GValue",
          "package": "glib",
          "signature": "GValue (Ptr GValue)",
          "source": "src/System-Glib-GValue.html#GValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValue",
          "module": "System.Glib.GValue",
          "name": "GValue",
          "package": "glib",
          "partial": "GValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValue.html#v:GValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily allocate a GValue.\n\u003c/p\u003e",
          "module": "System.Glib.GValue",
          "name": "allocaGValue",
          "package": "glib",
          "signature": "(GValue -\u003e IO b) -\u003e IO b",
          "source": "src/System-Glib-GValue.html#allocaGValue",
          "type": "function"
        },
        "index": {
          "description": "Temporarily allocate GValue",
          "hierarchy": "System Glib GValue",
          "module": "System.Glib.GValue",
          "name": "allocaGValue",
          "normalized": "(GValue-\u003eIO a)-\u003eIO a",
          "package": "glib",
          "partial": "GValue",
          "signature": "(GValue-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValue.html#v:allocaGValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the type of the value stored in the GValue\n\u003c/p\u003e",
          "module": "System.Glib.GValue",
          "name": "valueGetType",
          "package": "glib",
          "signature": "GValue -\u003e IO GType",
          "source": "src/System-Glib-GValue.html#valueGetType",
          "type": "function"
        },
        "index": {
          "description": "Get the type of the value stored in the GValue",
          "hierarchy": "System Glib GValue",
          "module": "System.Glib.GValue",
          "name": "valueGetType",
          "normalized": "GValue-\u003eIO GType",
          "package": "glib",
          "partial": "Get Type",
          "signature": "GValue-\u003eIO GType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValue.html#v:valueGetType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear a GValue.\n\u003c/p\u003e",
          "module": "System.Glib.GValue",
          "name": "valueInit",
          "package": "glib",
          "signature": "GValue -\u003e GType -\u003e IO ()",
          "source": "src/System-Glib-GValue.html#valueInit",
          "type": "function"
        },
        "index": {
          "description": "Clear GValue",
          "hierarchy": "System Glib GValue",
          "module": "System.Glib.GValue",
          "name": "valueInit",
          "normalized": "GValue-\u003eGType-\u003eIO()",
          "package": "glib",
          "partial": "Init",
          "signature": "GValue-\u003eGType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValue.html#v:valueInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is used by the implementation of properties and by the\n \u003ccode\u003e\u003ca\u003eTreeModel\u003c/a\u003e\u003c/code\u003e and\n related modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.GValueTypes",
          "name": "GValueTypes",
          "package": "glib",
          "source": "src/System-Glib-GValueTypes.html",
          "type": "module"
        },
        "index": {
          "description": "This is used by the implementation of properties and by the TreeModel and related modules",
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "GValueTypes",
          "package": "glib",
          "partial": "GValue Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetBool",
          "package": "glib",
          "signature": "GValue -\u003e IO Bool",
          "source": "src/System-Glib-GValueTypes.html#valueGetBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetBool",
          "normalized": "GValue-\u003eIO Bool",
          "package": "glib",
          "partial": "Get Bool",
          "signature": "GValue-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetBoxed",
          "package": "glib",
          "signature": "(Ptr boxed -\u003e IO boxed) -\u003e GValue -\u003e IO boxed",
          "source": "src/System-Glib-GValueTypes.html#valueGetBoxed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetBoxed",
          "normalized": "(Ptr a-\u003eIO a)-\u003eGValue-\u003eIO a",
          "package": "glib",
          "partial": "Get Boxed",
          "signature": "(Ptr boxed-\u003eIO boxed)-\u003eGValue-\u003eIO boxed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetDouble",
          "package": "glib",
          "signature": "GValue -\u003e IO Double",
          "source": "src/System-Glib-GValueTypes.html#valueGetDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetDouble",
          "normalized": "GValue-\u003eIO Double",
          "package": "glib",
          "partial": "Get Double",
          "signature": "GValue-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetEnum",
          "package": "glib",
          "signature": "GValue -\u003e IO enum",
          "source": "src/System-Glib-GValueTypes.html#valueGetEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetEnum",
          "normalized": "GValue-\u003eIO a",
          "package": "glib",
          "partial": "Get Enum",
          "signature": "GValue-\u003eIO enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetFlags",
          "package": "glib",
          "signature": "GValue -\u003e IO [flag]",
          "source": "src/System-Glib-GValueTypes.html#valueGetFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetFlags",
          "normalized": "GValue-\u003eIO[a]",
          "package": "glib",
          "partial": "Get Flags",
          "signature": "GValue-\u003eIO[flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetFloat",
          "package": "glib",
          "signature": "GValue -\u003e IO Float",
          "source": "src/System-Glib-GValueTypes.html#valueGetFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetFloat",
          "normalized": "GValue-\u003eIO Float",
          "package": "glib",
          "partial": "Get Float",
          "signature": "GValue-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetGObject",
          "package": "glib",
          "signature": "GValue -\u003e IO gobj",
          "source": "src/System-Glib-GValueTypes.html#valueGetGObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetGObject",
          "normalized": "GValue-\u003eIO a",
          "package": "glib",
          "partial": "Get GObject",
          "signature": "GValue-\u003eIO gobj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetInt",
          "package": "glib",
          "signature": "GValue -\u003e IO Int",
          "source": "src/System-Glib-GValueTypes.html#valueGetInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetInt",
          "normalized": "GValue-\u003eIO Int",
          "package": "glib",
          "partial": "Get Int",
          "signature": "GValue-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetInt64",
          "package": "glib",
          "signature": "GValue -\u003e IO Int64",
          "source": "src/System-Glib-GValueTypes.html#valueGetInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetInt64",
          "normalized": "GValue-\u003eIO Int",
          "package": "glib",
          "partial": "Get Int",
          "signature": "GValue-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetMaybeGObject",
          "package": "glib",
          "signature": "GValue -\u003e IO (Maybe gobj)",
          "source": "src/System-Glib-GValueTypes.html#valueGetMaybeGObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetMaybeGObject",
          "normalized": "GValue-\u003eIO(Maybe a)",
          "package": "glib",
          "partial": "Get Maybe GObject",
          "signature": "GValue-\u003eIO(Maybe gobj)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetMaybeGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetMaybeString",
          "package": "glib",
          "signature": "GValue -\u003e IO (Maybe String)",
          "source": "src/System-Glib-GValueTypes.html#valueGetMaybeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetMaybeString",
          "normalized": "GValue-\u003eIO(Maybe String)",
          "package": "glib",
          "partial": "Get Maybe String",
          "signature": "GValue-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetMaybeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetPointer",
          "package": "glib",
          "signature": "GValue -\u003e IO (Ptr ())",
          "source": "src/System-Glib-GValueTypes.html#valueGetPointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetPointer",
          "normalized": "GValue-\u003eIO(Ptr())",
          "package": "glib",
          "partial": "Get Pointer",
          "signature": "GValue-\u003eIO(Ptr())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetString",
          "package": "glib",
          "signature": "GValue -\u003e IO String",
          "source": "src/System-Glib-GValueTypes.html#valueGetString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetString",
          "normalized": "GValue-\u003eIO String",
          "package": "glib",
          "partial": "Get String",
          "signature": "GValue-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetUInt",
          "package": "glib",
          "signature": "GValue -\u003e IO Word",
          "source": "src/System-Glib-GValueTypes.html#valueGetUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetUInt",
          "normalized": "GValue-\u003eIO Word",
          "package": "glib",
          "partial": "Get UInt",
          "signature": "GValue-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueGetUInt64",
          "package": "glib",
          "signature": "GValue -\u003e IO Word64",
          "source": "src/System-Glib-GValueTypes.html#valueGetUInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueGetUInt64",
          "normalized": "GValue-\u003eIO Word",
          "package": "glib",
          "partial": "Get UInt",
          "signature": "GValue-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueGetUInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetBool",
          "package": "glib",
          "signature": "GValue -\u003e Bool -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetBool",
          "normalized": "GValue-\u003eBool-\u003eIO()",
          "package": "glib",
          "partial": "Set Bool",
          "signature": "GValue-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetBoxed",
          "package": "glib",
          "signature": "(boxed -\u003e (Ptr boxed -\u003e IO ()) -\u003e IO ()) -\u003e GValue -\u003e boxed -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetBoxed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetBoxed",
          "normalized": "(a-\u003e(Ptr a-\u003eIO())-\u003eIO())-\u003eGValue-\u003ea-\u003eIO()",
          "package": "glib",
          "partial": "Set Boxed",
          "signature": "(boxed-\u003e(Ptr boxed-\u003eIO())-\u003eIO())-\u003eGValue-\u003eboxed-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetBoxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetDouble",
          "package": "glib",
          "signature": "GValue -\u003e Double -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetDouble",
          "normalized": "GValue-\u003eDouble-\u003eIO()",
          "package": "glib",
          "partial": "Set Double",
          "signature": "GValue-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetEnum",
          "package": "glib",
          "signature": "GValue -\u003e enum -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetEnum",
          "normalized": "GValue-\u003ea-\u003eIO()",
          "package": "glib",
          "partial": "Set Enum",
          "signature": "GValue-\u003eenum-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetFlags",
          "package": "glib",
          "signature": "GValue -\u003e [flag] -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetFlags",
          "normalized": "GValue-\u003e[a]-\u003eIO()",
          "package": "glib",
          "partial": "Set Flags",
          "signature": "GValue-\u003e[flag]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetFloat",
          "package": "glib",
          "signature": "GValue -\u003e Float -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetFloat",
          "normalized": "GValue-\u003eFloat-\u003eIO()",
          "package": "glib",
          "partial": "Set Float",
          "signature": "GValue-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetGObject",
          "package": "glib",
          "signature": "GValue -\u003e gobj -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetGObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetGObject",
          "normalized": "GValue-\u003ea-\u003eIO()",
          "package": "glib",
          "partial": "Set GObject",
          "signature": "GValue-\u003egobj-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetInt",
          "package": "glib",
          "signature": "GValue -\u003e Int -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetInt",
          "normalized": "GValue-\u003eInt-\u003eIO()",
          "package": "glib",
          "partial": "Set Int",
          "signature": "GValue-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetInt64",
          "package": "glib",
          "signature": "GValue -\u003e Int64 -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetInt64",
          "normalized": "GValue-\u003eInt-\u003eIO()",
          "package": "glib",
          "partial": "Set Int",
          "signature": "GValue-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetMaybeGObject",
          "package": "glib",
          "signature": "GValue -\u003e Maybe gobj -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetMaybeGObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetMaybeGObject",
          "normalized": "GValue-\u003eMaybe a-\u003eIO()",
          "package": "glib",
          "partial": "Set Maybe GObject",
          "signature": "GValue-\u003eMaybe gobj-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetMaybeGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetMaybeString",
          "package": "glib",
          "signature": "GValue -\u003e Maybe String -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetMaybeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetMaybeString",
          "normalized": "GValue-\u003eMaybe String-\u003eIO()",
          "package": "glib",
          "partial": "Set Maybe String",
          "signature": "GValue-\u003eMaybe String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetMaybeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetPointer",
          "package": "glib",
          "signature": "GValue -\u003e Ptr () -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetPointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetPointer",
          "normalized": "GValue-\u003ePtr()-\u003eIO()",
          "package": "glib",
          "partial": "Set Pointer",
          "signature": "GValue-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetString",
          "package": "glib",
          "signature": "GValue -\u003e String -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetString",
          "normalized": "GValue-\u003eString-\u003eIO()",
          "package": "glib",
          "partial": "Set String",
          "signature": "GValue-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetUInt",
          "package": "glib",
          "signature": "GValue -\u003e Word -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetUInt",
          "normalized": "GValue-\u003eWord-\u003eIO()",
          "package": "glib",
          "partial": "Set UInt",
          "signature": "GValue-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.GValueTypes",
          "name": "valueSetUInt64",
          "package": "glib",
          "signature": "GValue -\u003e Word64 -\u003e IO ()",
          "source": "src/System-Glib-GValueTypes.html#valueSetUInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib GValueTypes",
          "module": "System.Glib.GValueTypes",
          "name": "valueSetUInt64",
          "normalized": "GValue-\u003eWord-\u003eIO()",
          "package": "glib",
          "partial": "Set UInt",
          "signature": "GValue-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-GValueTypes.html#v:valueSetUInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003emain event loop, and events\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.MainLoop",
          "name": "MainLoop",
          "package": "glib",
          "source": "src/System-Glib-MainLoop.html",
          "type": "module"
        },
        "index": {
          "description": "main event loop and events",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "MainLoop",
          "package": "glib",
          "partial": "Main Loop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "HandlerId",
          "package": "glib",
          "source": "src/System-Glib-MainLoop.html#HandlerId",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "HandlerId",
          "package": "glib",
          "partial": "Handler Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#t:HandlerId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags representing a condition to watch for on a file descriptor.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eIOIn\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e There is data to read.\n [\u003ccode\u003eIOOut\u003c/code\u003e] Data can be written (without blocking).\n [\u003ccode\u003eIOPri\u003c/code\u003e] There is urgent data to read.\n [\u003ccode\u003eIOErr\u003c/code\u003e] Error condition.\n [\u003ccode\u003eIOHup\u003c/code\u003e] Hung up (the connection has been broken, usually for\n pipes and sockets).\n [\u003ccode\u003eIOInvalid\u003c/code\u003e] Invalid request. The file descriptor is not open.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "System.Glib.MainLoop",
          "name": "IOCondition",
          "package": "glib",
          "source": "src/System-Glib-MainLoop.html#IOCondition",
          "type": "data"
        },
        "index": {
          "description": "Flags representing condition to watch for on file descriptor IOIn There is data to read IOOut Data can be written without blocking IOPri There is urgent data to read IOErr Error condition IOHup Hung up the connection has been broken usually for pipes and sockets IOInvalid Invalid request The file descriptor is not open",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "IOCondition",
          "package": "glib",
          "partial": "IOCondition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#t:IOCondition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque datatype representing a set of sources to be handled in\n a main loop.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "MainContext",
          "package": "glib",
          "source": "src/System-Glib-MainLoop.html#MainContext",
          "type": "data"
        },
        "index": {
          "description": "An opaque datatype representing set of sources to be handled in main loop",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "MainContext",
          "package": "glib",
          "partial": "Main Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#t:MainContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA main event loop abstraction.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "MainLoop",
          "package": "glib",
          "source": "src/System-Glib-MainLoop.html#MainLoop",
          "type": "data"
        },
        "index": {
          "description": "main event loop abstraction",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "MainLoop",
          "package": "glib",
          "partial": "Main Loop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#t:MainLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePriorities for installing callbacks.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "Priority",
          "package": "glib",
          "source": "src/System-Glib-MainLoop.html#Priority",
          "type": "type"
        },
        "index": {
          "description": "Priorities for installing callbacks",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "Priority",
          "package": "glib",
          "partial": "Priority",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#t:Priority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "Source",
          "package": "glib",
          "source": "src/System-Glib-MainLoop.html#Source",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "Source",
          "package": "glib",
          "partial": "Source",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#t:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "IOErr",
          "package": "glib",
          "signature": "IOErr",
          "source": "src/System-Glib-MainLoop.html#IOCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "IOErr",
          "package": "glib",
          "partial": "IOErr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:IOErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "IOHup",
          "package": "glib",
          "signature": "IOHup",
          "source": "src/System-Glib-MainLoop.html#IOCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "IOHup",
          "package": "glib",
          "partial": "IOHup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:IOHup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "IOIn",
          "package": "glib",
          "signature": "IOIn",
          "source": "src/System-Glib-MainLoop.html#IOCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "IOIn",
          "package": "glib",
          "partial": "IOIn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:IOIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "IOInvalid",
          "package": "glib",
          "signature": "IOInvalid",
          "source": "src/System-Glib-MainLoop.html#IOCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "IOInvalid",
          "package": "glib",
          "partial": "IOInvalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:IOInvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "IOOut",
          "package": "glib",
          "signature": "IOOut",
          "source": "src/System-Glib-MainLoop.html#IOCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "IOOut",
          "package": "glib",
          "partial": "IOOut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:IOOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "IOPri",
          "package": "glib",
          "signature": "IOPri",
          "source": "src/System-Glib-MainLoop.html#IOCondition",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "IOPri",
          "package": "glib",
          "partial": "IOPri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:IOPri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "Source",
          "package": "glib",
          "signature": "Source (ForeignPtr Source)",
          "source": "src/System-Glib-MainLoop.html#Source",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "Source",
          "package": "glib",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:Source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a callback that is called whenever the system is idle.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e A priority can be specified via an integer. This should usually be\n \u003ccode\u003e\u003ca\u003epriorityDefaultIdle\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If the function returns \u003ccode\u003eFalse\u003c/code\u003e it will be removed.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Glib.MainLoop",
          "name": "idleAdd",
          "package": "glib",
          "signature": "IO Bool -\u003e Priority -\u003e IO HandlerId",
          "source": "src/System-Glib-MainLoop.html#idleAdd",
          "type": "function"
        },
        "index": {
          "description": "Add callback that is called whenever the system is idle priority can be specified via an integer This should usually be priorityDefaultIdle If the function returns False it will be removed",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "idleAdd",
          "normalized": "IO Bool-\u003ePriority-\u003eIO HandlerId",
          "package": "glib",
          "partial": "Add",
          "signature": "IO Bool-\u003ePriority-\u003eIO HandlerId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:idleAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a previously added idle handler by its \u003ccode\u003e\u003ca\u003eHandlerId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "idleRemove",
          "package": "glib",
          "signature": "HandlerId -\u003e IO ()",
          "source": "src/System-Glib-MainLoop.html#idleRemove",
          "type": "function"
        },
        "index": {
          "description": "Remove previously added idle handler by its HandlerId",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "idleRemove",
          "normalized": "HandlerId-\u003eIO()",
          "package": "glib",
          "partial": "Remove",
          "signature": "HandlerId-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:idleRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds the file descriptor into the main event loop with the given priority.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "inputAdd",
          "package": "glib",
          "signature": "FD-\u003e [IOCondition]-\u003e Priority-\u003e IO Bool-\u003e IO HandlerId",
          "type": "function"
        },
        "index": {
          "description": "Adds the file descriptor into the main event loop with the given priority",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "inputAdd",
          "normalized": "FD-\u003e[IOCondition]-\u003ePriority-\u003eIO Bool-\u003eIO HandlerId",
          "package": "glib",
          "partial": "Add",
          "signature": "FD-\u003e[IOCondition]-\u003ePriority-\u003eIO Bool-\u003eIO HandlerId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:inputAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "inputRemove",
          "package": "glib",
          "signature": "HandlerId -\u003e IO ()",
          "source": "src/System-Glib-MainLoop.html#inputRemove",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "inputRemove",
          "normalized": "HandlerId-\u003eIO()",
          "package": "glib",
          "partial": "Remove",
          "signature": "HandlerId-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:inputRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default \u003ccode\u003e\u003ca\u003eMainContext\u003c/a\u003e\u003c/code\u003e. This is the main context used for main\n loop functions when a main loop is not explicitly specified.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "mainContextDefault",
          "package": "glib",
          "signature": "MainContext",
          "source": "src/System-Glib-MainLoop.html#mainContextDefault",
          "type": "function"
        },
        "index": {
          "description": "The default MainContext This is the main context used for main loop functions when main loop is not explicitly specified",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "mainContextDefault",
          "package": "glib",
          "partial": "Context Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:mainContextDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "mainContextFindSourceById",
          "package": "glib",
          "signature": "MainContext -\u003e HandlerId -\u003e IO Source",
          "source": "src/System-Glib-MainLoop.html#mainContextFindSourceById",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "mainContextFindSourceById",
          "normalized": "MainContext-\u003eHandlerId-\u003eIO Source",
          "package": "glib",
          "partial": "Context Find Source By Id",
          "signature": "MainContext-\u003eHandlerId-\u003eIO Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:mainContextFindSourceById"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a single iteration for the given main loop. This involves\n checking to see if any event sources are ready to be processed,\n then if no events sources are ready and \u003ccode\u003emayBlock\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e,\n waiting for a source to become ready, then dispatching the\n highest priority events sources that are ready. Note that even\n when \u003ccode\u003emayBlock\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, it is still possible for\n \u003ccode\u003e\u003ca\u003emainContextIteration\u003c/a\u003e\u003c/code\u003e to return (0), since the the wait\n may be interrupted for other reasons than an event source\n becoming ready.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "mainContextIteration",
          "package": "glib",
          "signature": "MainContext -\u003e Bool -\u003e IO Bool",
          "source": "src/System-Glib-MainLoop.html#mainContextIteration",
          "type": "function"
        },
        "index": {
          "description": "Runs single iteration for the given main loop This involves checking to see if any event sources are ready to be processed then if no events sources are ready and mayBlock is True waiting for source to become ready then dispatching the highest priority events sources that are ready Note that even when mayBlock is True it is still possible for mainContextIteration to return since the the wait may be interrupted for other reasons than an event source becoming ready",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "mainContextIteration",
          "normalized": "MainContext-\u003eBool-\u003eIO Bool",
          "package": "glib",
          "partial": "Context Iteration",
          "signature": "MainContext-\u003eBool-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:mainContextIteration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new \u003ccode\u003e\u003ca\u003eMainContext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "mainContextNew",
          "package": "glib",
          "signature": "IO MainContext",
          "source": "src/System-Glib-MainLoop.html#mainContextNew",
          "type": "function"
        },
        "index": {
          "description": "Creates new MainContext",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "mainContextNew",
          "package": "glib",
          "partial": "Context New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:mainContextNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks to see if the main loop is currently being run via mainLoopRun.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "mainLoopIsRunning",
          "package": "glib",
          "signature": "MainLoop -\u003e IO Bool",
          "source": "src/System-Glib-MainLoop.html#mainLoopIsRunning",
          "type": "function"
        },
        "index": {
          "description": "Checks to see if the main loop is currently being run via mainLoopRun",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "mainLoopIsRunning",
          "normalized": "MainLoop-\u003eIO Bool",
          "package": "glib",
          "partial": "Loop Is Running",
          "signature": "MainLoop-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:mainLoopIsRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new \u003ccode\u003e\u003ca\u003eMainLoop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "mainLoopNew",
          "package": "glib",
          "signature": "Maybe MainContext-\u003e Bool-\u003e IO MainLoop",
          "type": "function"
        },
        "index": {
          "description": "Create new MainLoop",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "mainLoopNew",
          "normalized": "Maybe MainContext-\u003eBool-\u003eIO MainLoop",
          "package": "glib",
          "partial": "Loop New",
          "signature": "Maybe MainContext-\u003eBool-\u003eIO MainLoop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:mainLoopNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops a \u003ccode\u003e\u003ca\u003eMainLoop\u003c/a\u003e\u003c/code\u003e from running. Any calls to mainLoopRun for the\n loop will return.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "mainLoopQuit",
          "package": "glib",
          "signature": "MainLoop -\u003e IO ()",
          "source": "src/System-Glib-MainLoop.html#mainLoopQuit",
          "type": "function"
        },
        "index": {
          "description": "Stops MainLoop from running Any calls to mainLoopRun for the loop will return",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "mainLoopQuit",
          "normalized": "MainLoop-\u003eIO()",
          "package": "glib",
          "partial": "Loop Quit",
          "signature": "MainLoop-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:mainLoopQuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a main loop until \u003ccode\u003e\u003ca\u003emainLoopQuit\u003c/a\u003e\u003c/code\u003e is called on the\n loop. If this is called for the thread of the loop's\n \u003ccode\u003e\u003ca\u003eMainContext\u003c/a\u003e\u003c/code\u003e, it will process events from the loop, otherwise it\n will simply wait.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "mainLoopRun",
          "package": "glib",
          "signature": "MainLoop -\u003e IO ()",
          "source": "src/System-Glib-MainLoop.html#mainLoopRun",
          "type": "function"
        },
        "index": {
          "description": "Runs main loop until mainLoopQuit is called on the loop If this is called for the thread of the loop MainContext it will process events from the loop otherwise it will simply wait",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "mainLoopRun",
          "normalized": "MainLoop-\u003eIO()",
          "package": "glib",
          "partial": "Loop Run",
          "signature": "MainLoop-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:mainLoopRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "priorityDefault",
          "package": "glib",
          "signature": "Int",
          "source": "src/System-Glib-MainLoop.html#priorityDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "priorityDefault",
          "package": "glib",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:priorityDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "priorityDefaultIdle",
          "package": "glib",
          "signature": "Int",
          "source": "src/System-Glib-MainLoop.html#priorityDefaultIdle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "priorityDefaultIdle",
          "package": "glib",
          "partial": "Default Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:priorityDefaultIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "priorityHigh",
          "package": "glib",
          "signature": "Int",
          "source": "src/System-Glib-MainLoop.html#priorityHigh",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "priorityHigh",
          "package": "glib",
          "partial": "High",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:priorityHigh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "priorityHighIdle",
          "package": "glib",
          "signature": "Int",
          "source": "src/System-Glib-MainLoop.html#priorityHighIdle",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "priorityHighIdle",
          "package": "glib",
          "partial": "High Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:priorityHighIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "priorityLow",
          "package": "glib",
          "signature": "Int",
          "source": "src/System-Glib-MainLoop.html#priorityLow",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "priorityLow",
          "package": "glib",
          "partial": "Low",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:priorityLow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "sourceAttach",
          "package": "glib",
          "signature": "Source -\u003e MainContext -\u003e IO HandlerId",
          "source": "src/System-Glib-MainLoop.html#sourceAttach",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "sourceAttach",
          "normalized": "Source-\u003eMainContext-\u003eIO HandlerId",
          "package": "glib",
          "partial": "Attach",
          "signature": "Source-\u003eMainContext-\u003eIO HandlerId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:sourceAttach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "sourceDestroy",
          "package": "glib",
          "signature": "Source -\u003e IO ()",
          "source": "src/System-Glib-MainLoop.html#sourceDestroy",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "sourceDestroy",
          "normalized": "Source-\u003eIO()",
          "package": "glib",
          "partial": "Destroy",
          "signature": "Source-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:sourceDestroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "sourceGetPriority",
          "package": "glib",
          "signature": "Source -\u003e IO Priority",
          "source": "src/System-Glib-MainLoop.html#sourceGetPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "sourceGetPriority",
          "normalized": "Source-\u003eIO Priority",
          "package": "glib",
          "partial": "Get Priority",
          "signature": "Source-\u003eIO Priority",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:sourceGetPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "sourceIsDestroyed",
          "package": "glib",
          "signature": "Source -\u003e IO Bool",
          "source": "src/System-Glib-MainLoop.html#sourceIsDestroyed",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "sourceIsDestroyed",
          "normalized": "Source-\u003eIO Bool",
          "package": "glib",
          "partial": "Is Destroyed",
          "signature": "Source-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:sourceIsDestroyed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.MainLoop",
          "name": "sourceSetPriority",
          "package": "glib",
          "signature": "Source -\u003e Priority -\u003e IO ()",
          "source": "src/System-Glib-MainLoop.html#sourceSetPriority",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "sourceSetPriority",
          "normalized": "Source-\u003ePriority-\u003eIO()",
          "package": "glib",
          "partial": "Set Priority",
          "signature": "Source-\u003ePriority-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:sourceSetPriority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a function to be called at regular intervals, with the default\n priority \u003ccode\u003e\u003ca\u003epriorityDefault\u003c/a\u003e\u003c/code\u003e. The function is called repeatedly until it\n returns \u003ccode\u003eFalse\u003c/code\u003e, after which point the timeout function will not be called\n again. The first call to the function will be at the end of the first interval.\n\u003c/p\u003e\u003cp\u003eNote that timeout functions may be delayed, due to the processing of other\n event sources. Thus they should not be relied on for precise timing. After\n each call to the timeout function, the time of the next timeout is\n recalculated based on the current time and the given interval (it does not\n try to 'catch up' time lost in delays).\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "timeoutAdd",
          "package": "glib",
          "signature": "IO Bool -\u003e Int -\u003e IO HandlerId",
          "source": "src/System-Glib-MainLoop.html#timeoutAdd",
          "type": "function"
        },
        "index": {
          "description": "Sets function to be called at regular intervals with the default priority priorityDefault The function is called repeatedly until it returns False after which point the timeout function will not be called again The first call to the function will be at the end of the first interval Note that timeout functions may be delayed due to the processing of other event sources Thus they should not be relied on for precise timing After each call to the timeout function the time of the next timeout is recalculated based on the current time and the given interval it does not try to catch up time lost in delays",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "timeoutAdd",
          "normalized": "IO Bool-\u003eInt-\u003eIO HandlerId",
          "package": "glib",
          "partial": "Add",
          "signature": "IO Bool-\u003eInt-\u003eIO HandlerId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:timeoutAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a function to be called at regular intervals, with the given\n priority. The function is called repeatedly until it returns \u003ccode\u003eFalse\u003c/code\u003e, after\n which point the timeout function will not be called again. The first call\n to the function will be at the end of the first interval.\n\u003c/p\u003e\u003cp\u003eNote that timeout functions may be delayed, due to the processing of other\n event sources. Thus they should not be relied on for precise timing. After\n each call to the timeout function, the time of the next timeout is\n recalculated based on the current time and the given interval (it does not\n try to 'catch up' time lost in delays).\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "timeoutAddFull",
          "package": "glib",
          "signature": "IO Bool -\u003e Priority -\u003e Int -\u003e IO HandlerId",
          "source": "src/System-Glib-MainLoop.html#timeoutAddFull",
          "type": "function"
        },
        "index": {
          "description": "Sets function to be called at regular intervals with the given priority The function is called repeatedly until it returns False after which point the timeout function will not be called again The first call to the function will be at the end of the first interval Note that timeout functions may be delayed due to the processing of other event sources Thus they should not be relied on for precise timing After each call to the timeout function the time of the next timeout is recalculated based on the current time and the given interval it does not try to catch up time lost in delays",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "timeoutAddFull",
          "normalized": "IO Bool-\u003ePriority-\u003eInt-\u003eIO HandlerId",
          "package": "glib",
          "partial": "Add Full",
          "signature": "IO Bool-\u003ePriority-\u003eInt-\u003eIO HandlerId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:timeoutAddFull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a previously added timeout handler by its \u003ccode\u003e\u003ca\u003eHandlerId\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Glib.MainLoop",
          "name": "timeoutRemove",
          "package": "glib",
          "signature": "HandlerId -\u003e IO ()",
          "source": "src/System-Glib-MainLoop.html#timeoutRemove",
          "type": "function"
        },
        "index": {
          "description": "Remove previously added timeout handler by its HandlerId",
          "hierarchy": "System Glib MainLoop",
          "module": "System.Glib.MainLoop",
          "name": "timeoutRemove",
          "normalized": "HandlerId-\u003eIO()",
          "package": "glib",
          "partial": "Remove",
          "signature": "HandlerId-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-MainLoop.html#v:timeoutRemove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for getting and setting GObject properties\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.Properties",
          "name": "Properties",
          "package": "glib",
          "source": "src/System-Glib-Properties.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for getting and setting GObject properties",
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "Properties",
          "package": "glib",
          "partial": "Properties",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromBoolProperty",
          "package": "glib",
          "signature": "String -\u003e Attr gobj Bool",
          "source": "src/System-Glib-Properties.html#newAttrFromBoolProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromBoolProperty",
          "normalized": "String-\u003eAttr a Bool",
          "package": "glib",
          "partial": "Attr From Bool Property",
          "signature": "String-\u003eAttr gobj Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromBoolProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromBoxedOpaqueProperty",
          "package": "glib",
          "signature": "(Ptr boxed -\u003e IO boxed) -\u003e (boxed -\u003e (Ptr boxed -\u003e IO ()) -\u003e IO ()) -\u003e String -\u003e GType -\u003e Attr gobj boxed",
          "source": "src/System-Glib-Properties.html#newAttrFromBoxedOpaqueProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromBoxedOpaqueProperty",
          "normalized": "(Ptr a-\u003eIO a)-\u003e(a-\u003e(Ptr a-\u003eIO())-\u003eIO())-\u003eString-\u003eGType-\u003eAttr b a",
          "package": "glib",
          "partial": "Attr From Boxed Opaque Property",
          "signature": "(Ptr boxed-\u003eIO boxed)-\u003e(boxed-\u003e(Ptr boxed-\u003eIO())-\u003eIO())-\u003eString-\u003eGType-\u003eAttr gobj boxed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromBoxedOpaqueProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromBoxedStorableProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e Attr gobj boxed",
          "source": "src/System-Glib-Properties.html#newAttrFromBoxedStorableProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromBoxedStorableProperty",
          "normalized": "String-\u003eGType-\u003eAttr a b",
          "package": "glib",
          "partial": "Attr From Boxed Storable Property",
          "signature": "String-\u003eGType-\u003eAttr gobj boxed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromBoxedStorableProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromCharProperty",
          "package": "glib",
          "signature": "String -\u003e Attr gobj Char",
          "source": "src/System-Glib-Properties.html#newAttrFromCharProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromCharProperty",
          "normalized": "String-\u003eAttr a Char",
          "package": "glib",
          "partial": "Attr From Char Property",
          "signature": "String-\u003eAttr gobj Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromCharProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromDoubleProperty",
          "package": "glib",
          "signature": "String -\u003e Attr gobj Double",
          "source": "src/System-Glib-Properties.html#newAttrFromDoubleProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromDoubleProperty",
          "normalized": "String-\u003eAttr a Double",
          "package": "glib",
          "partial": "Attr From Double Property",
          "signature": "String-\u003eAttr gobj Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromDoubleProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromEnumProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e Attr gobj enum",
          "source": "src/System-Glib-Properties.html#newAttrFromEnumProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromEnumProperty",
          "normalized": "String-\u003eGType-\u003eAttr a b",
          "package": "glib",
          "partial": "Attr From Enum Property",
          "signature": "String-\u003eGType-\u003eAttr gobj enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromEnumProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromFlagsProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e Attr gobj [flag]",
          "source": "src/System-Glib-Properties.html#newAttrFromFlagsProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromFlagsProperty",
          "normalized": "String-\u003eGType-\u003eAttr a[b]",
          "package": "glib",
          "partial": "Attr From Flags Property",
          "signature": "String-\u003eGType-\u003eAttr gobj[flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromFlagsProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromFloatProperty",
          "package": "glib",
          "signature": "String -\u003e Attr gobj Float",
          "source": "src/System-Glib-Properties.html#newAttrFromFloatProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromFloatProperty",
          "normalized": "String-\u003eAttr a Float",
          "package": "glib",
          "partial": "Attr From Float Property",
          "signature": "String-\u003eAttr gobj Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromFloatProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromIntProperty",
          "package": "glib",
          "signature": "String -\u003e Attr gobj Int",
          "source": "src/System-Glib-Properties.html#newAttrFromIntProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromIntProperty",
          "normalized": "String-\u003eAttr a Int",
          "package": "glib",
          "partial": "Attr From Int Property",
          "signature": "String-\u003eAttr gobj Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromIntProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromMaybeObjectProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e ReadWriteAttr gobj (Maybe gobj') (Maybe gobj'')",
          "source": "src/System-Glib-Properties.html#newAttrFromMaybeObjectProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromMaybeObjectProperty",
          "normalized": "String-\u003eGType-\u003eReadWriteAttr a(Maybe b)(Maybe c)",
          "package": "glib",
          "partial": "Attr From Maybe Object Property",
          "signature": "String-\u003eGType-\u003eReadWriteAttr gobj(Maybe gobj')(Maybe gobj'')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromMaybeObjectProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromMaybeStringProperty",
          "package": "glib",
          "signature": "String -\u003e Attr gobj (Maybe String)",
          "source": "src/System-Glib-Properties.html#newAttrFromMaybeStringProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromMaybeStringProperty",
          "normalized": "String-\u003eAttr a(Maybe String)",
          "package": "glib",
          "partial": "Attr From Maybe String Property",
          "signature": "String-\u003eAttr gobj(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromMaybeStringProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromObjectProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e ReadWriteAttr gobj gobj' gobj''",
          "source": "src/System-Glib-Properties.html#newAttrFromObjectProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromObjectProperty",
          "normalized": "String-\u003eGType-\u003eReadWriteAttr a b c",
          "package": "glib",
          "partial": "Attr From Object Property",
          "signature": "String-\u003eGType-\u003eReadWriteAttr gobj gobj' gobj''",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromObjectProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromStringProperty",
          "package": "glib",
          "signature": "String -\u003e Attr gobj String",
          "source": "src/System-Glib-Properties.html#newAttrFromStringProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromStringProperty",
          "normalized": "String-\u003eAttr a String",
          "package": "glib",
          "partial": "Attr From String Property",
          "signature": "String-\u003eAttr gobj String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromStringProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "newAttrFromUIntProperty",
          "package": "glib",
          "signature": "String -\u003e Attr gobj Int",
          "source": "src/System-Glib-Properties.html#newAttrFromUIntProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "newAttrFromUIntProperty",
          "normalized": "String-\u003eAttr a Int",
          "package": "glib",
          "partial": "Attr From UInt Property",
          "signature": "String-\u003eAttr gobj Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:newAttrFromUIntProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyBool",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e IO Bool",
          "source": "src/System-Glib-Properties.html#objectGetPropertyBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyBool",
          "normalized": "String-\u003ea-\u003eIO Bool",
          "package": "glib",
          "partial": "Get Property Bool",
          "signature": "String-\u003egobj-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyBoxedOpaque",
          "package": "glib",
          "signature": "(Ptr boxed -\u003e IO boxed) -\u003e GType -\u003e String -\u003e gobj -\u003e IO boxed",
          "source": "src/System-Glib-Properties.html#objectGetPropertyBoxedOpaque",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyBoxedOpaque",
          "normalized": "(Ptr a-\u003eIO a)-\u003eGType-\u003eString-\u003eb-\u003eIO a",
          "package": "glib",
          "partial": "Get Property Boxed Opaque",
          "signature": "(Ptr boxed-\u003eIO boxed)-\u003eGType-\u003eString-\u003egobj-\u003eIO boxed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyBoxedOpaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyBoxedStorable",
          "package": "glib",
          "signature": "GType -\u003e String -\u003e gobj -\u003e IO boxed",
          "source": "src/System-Glib-Properties.html#objectGetPropertyBoxedStorable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyBoxedStorable",
          "normalized": "GType-\u003eString-\u003ea-\u003eIO b",
          "package": "glib",
          "partial": "Get Property Boxed Storable",
          "signature": "GType-\u003eString-\u003egobj-\u003eIO boxed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyBoxedStorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyChar",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e IO Char",
          "source": "src/System-Glib-Properties.html#objectGetPropertyChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyChar",
          "normalized": "String-\u003ea-\u003eIO Char",
          "package": "glib",
          "partial": "Get Property Char",
          "signature": "String-\u003egobj-\u003eIO Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyDouble",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e IO Double",
          "source": "src/System-Glib-Properties.html#objectGetPropertyDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyDouble",
          "normalized": "String-\u003ea-\u003eIO Double",
          "package": "glib",
          "partial": "Get Property Double",
          "signature": "String-\u003egobj-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyEnum",
          "package": "glib",
          "signature": "GType -\u003e String -\u003e gobj -\u003e IO enum",
          "source": "src/System-Glib-Properties.html#objectGetPropertyEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyEnum",
          "normalized": "GType-\u003eString-\u003ea-\u003eIO b",
          "package": "glib",
          "partial": "Get Property Enum",
          "signature": "GType-\u003eString-\u003egobj-\u003eIO enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyFlags",
          "package": "glib",
          "signature": "GType -\u003e String -\u003e gobj -\u003e IO [flag]",
          "source": "src/System-Glib-Properties.html#objectGetPropertyFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyFlags",
          "normalized": "GType-\u003eString-\u003ea-\u003eIO[b]",
          "package": "glib",
          "partial": "Get Property Flags",
          "signature": "GType-\u003eString-\u003egobj-\u003eIO[flag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyFloat",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e IO Float",
          "source": "src/System-Glib-Properties.html#objectGetPropertyFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyFloat",
          "normalized": "String-\u003ea-\u003eIO Float",
          "package": "glib",
          "partial": "Get Property Float",
          "signature": "String-\u003egobj-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyGObject",
          "package": "glib",
          "signature": "GType -\u003e String -\u003e gobj -\u003e IO gobj'",
          "source": "src/System-Glib-Properties.html#objectGetPropertyGObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyGObject",
          "normalized": "GType-\u003eString-\u003ea-\u003eIO b",
          "package": "glib",
          "partial": "Get Property GObject",
          "signature": "GType-\u003eString-\u003egobj-\u003eIO gobj'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyInt",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e IO Int",
          "source": "src/System-Glib-Properties.html#objectGetPropertyInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyInt",
          "normalized": "String-\u003ea-\u003eIO Int",
          "package": "glib",
          "partial": "Get Property Int",
          "signature": "String-\u003egobj-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyInt64",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e IO Int64",
          "source": "src/System-Glib-Properties.html#objectGetPropertyInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyInt64",
          "normalized": "String-\u003ea-\u003eIO Int",
          "package": "glib",
          "partial": "Get Property Int",
          "signature": "String-\u003egobj-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyInternal",
          "package": "glib",
          "signature": "GType -\u003e (GValue -\u003e IO a) -\u003e String -\u003e gobj -\u003e IO a",
          "source": "src/System-Glib-Properties.html#objectGetPropertyInternal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyInternal",
          "normalized": "GType-\u003e(GValue-\u003eIO a)-\u003eString-\u003eb-\u003eIO a",
          "package": "glib",
          "partial": "Get Property Internal",
          "signature": "GType-\u003e(GValue-\u003eIO a)-\u003eString-\u003egobj-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyMaybeString",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e IO (Maybe String)",
          "source": "src/System-Glib-Properties.html#objectGetPropertyMaybeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyMaybeString",
          "normalized": "String-\u003ea-\u003eIO(Maybe String)",
          "package": "glib",
          "partial": "Get Property Maybe String",
          "signature": "String-\u003egobj-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyMaybeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyString",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e IO String",
          "source": "src/System-Glib-Properties.html#objectGetPropertyString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyString",
          "normalized": "String-\u003ea-\u003eIO String",
          "package": "glib",
          "partial": "Get Property String",
          "signature": "String-\u003egobj-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyUInt",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e IO Int",
          "source": "src/System-Glib-Properties.html#objectGetPropertyUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyUInt",
          "normalized": "String-\u003ea-\u003eIO Int",
          "package": "glib",
          "partial": "Get Property UInt",
          "signature": "String-\u003egobj-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyUInt64",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e IO Word64",
          "source": "src/System-Glib-Properties.html#objectGetPropertyUInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectGetPropertyUInt64",
          "normalized": "String-\u003ea-\u003eIO Word",
          "package": "glib",
          "partial": "Get Property UInt",
          "signature": "String-\u003egobj-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectGetPropertyUInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyBool",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e Bool -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyBool",
          "normalized": "String-\u003ea-\u003eBool-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Bool",
          "signature": "String-\u003egobj-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyBoxedOpaque",
          "package": "glib",
          "signature": "(boxed -\u003e (Ptr boxed -\u003e IO ()) -\u003e IO ()) -\u003e GType -\u003e String -\u003e gobj -\u003e boxed -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyBoxedOpaque",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyBoxedOpaque",
          "normalized": "(a-\u003e(Ptr a-\u003eIO())-\u003eIO())-\u003eGType-\u003eString-\u003eb-\u003ea-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Boxed Opaque",
          "signature": "(boxed-\u003e(Ptr boxed-\u003eIO())-\u003eIO())-\u003eGType-\u003eString-\u003egobj-\u003eboxed-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyBoxedOpaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyBoxedStorable",
          "package": "glib",
          "signature": "GType -\u003e String -\u003e gobj -\u003e boxed -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyBoxedStorable",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyBoxedStorable",
          "normalized": "GType-\u003eString-\u003ea-\u003eb-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Boxed Storable",
          "signature": "GType-\u003eString-\u003egobj-\u003eboxed-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyBoxedStorable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyChar",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e Char -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyChar",
          "normalized": "String-\u003ea-\u003eChar-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Char",
          "signature": "String-\u003egobj-\u003eChar-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyDouble",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e Double -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyDouble",
          "normalized": "String-\u003ea-\u003eDouble-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Double",
          "signature": "String-\u003egobj-\u003eDouble-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyEnum",
          "package": "glib",
          "signature": "GType -\u003e String -\u003e gobj -\u003e enum -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyEnum",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyEnum",
          "normalized": "GType-\u003eString-\u003ea-\u003eb-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Enum",
          "signature": "GType-\u003eString-\u003egobj-\u003eenum-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyFlags",
          "package": "glib",
          "signature": "GType -\u003e String -\u003e gobj -\u003e [flag] -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyFlags",
          "normalized": "GType-\u003eString-\u003ea-\u003e[b]-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Flags",
          "signature": "GType-\u003eString-\u003egobj-\u003e[flag]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyFloat",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e Float -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyFloat",
          "normalized": "String-\u003ea-\u003eFloat-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Float",
          "signature": "String-\u003egobj-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyGObject",
          "package": "glib",
          "signature": "GType -\u003e String -\u003e gobj -\u003e gobj' -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyGObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyGObject",
          "normalized": "GType-\u003eString-\u003ea-\u003eb-\u003eIO()",
          "package": "glib",
          "partial": "Set Property GObject",
          "signature": "GType-\u003eString-\u003egobj-\u003egobj'-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyGObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyInt",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e Int -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyInt",
          "normalized": "String-\u003ea-\u003eInt-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Int",
          "signature": "String-\u003egobj-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyInt64",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e Int64 -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyInt64",
          "normalized": "String-\u003ea-\u003eInt-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Int",
          "signature": "String-\u003egobj-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyInternal",
          "package": "glib",
          "signature": "GType -\u003e (GValue -\u003e a -\u003e IO ()) -\u003e String -\u003e gobj -\u003e a -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyInternal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyInternal",
          "normalized": "GType-\u003e(GValue-\u003ea-\u003eIO())-\u003eString-\u003eb-\u003ea-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Internal",
          "signature": "GType-\u003e(GValue-\u003ea-\u003eIO())-\u003eString-\u003egobj-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyMaybeString",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e Maybe String -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyMaybeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyMaybeString",
          "normalized": "String-\u003ea-\u003eMaybe String-\u003eIO()",
          "package": "glib",
          "partial": "Set Property Maybe String",
          "signature": "String-\u003egobj-\u003eMaybe String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyMaybeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyString",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e String -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyString",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyString",
          "normalized": "String-\u003ea-\u003eString-\u003eIO()",
          "package": "glib",
          "partial": "Set Property String",
          "signature": "String-\u003egobj-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyUInt",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e Int -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyUInt",
          "normalized": "String-\u003ea-\u003eInt-\u003eIO()",
          "package": "glib",
          "partial": "Set Property UInt",
          "signature": "String-\u003egobj-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyUInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyUInt64",
          "package": "glib",
          "signature": "String -\u003e gobj -\u003e Word64 -\u003e IO ()",
          "source": "src/System-Glib-Properties.html#objectSetPropertyUInt64",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "objectSetPropertyUInt64",
          "normalized": "String-\u003ea-\u003eWord-\u003eIO()",
          "package": "glib",
          "partial": "Set Property UInt",
          "signature": "String-\u003egobj-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:objectSetPropertyUInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "readAttrFromBoolProperty",
          "package": "glib",
          "signature": "String -\u003e ReadAttr gobj Bool",
          "source": "src/System-Glib-Properties.html#readAttrFromBoolProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "readAttrFromBoolProperty",
          "normalized": "String-\u003eReadAttr a Bool",
          "package": "glib",
          "partial": "Attr From Bool Property",
          "signature": "String-\u003eReadAttr gobj Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:readAttrFromBoolProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "readAttrFromBoxedOpaqueProperty",
          "package": "glib",
          "signature": "(Ptr boxed -\u003e IO boxed) -\u003e String -\u003e GType -\u003e ReadAttr gobj boxed",
          "source": "src/System-Glib-Properties.html#readAttrFromBoxedOpaqueProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "readAttrFromBoxedOpaqueProperty",
          "normalized": "(Ptr a-\u003eIO a)-\u003eString-\u003eGType-\u003eReadAttr b a",
          "package": "glib",
          "partial": "Attr From Boxed Opaque Property",
          "signature": "(Ptr boxed-\u003eIO boxed)-\u003eString-\u003eGType-\u003eReadAttr gobj boxed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:readAttrFromBoxedOpaqueProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "readAttrFromEnumProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e ReadAttr gobj enum",
          "source": "src/System-Glib-Properties.html#readAttrFromEnumProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "readAttrFromEnumProperty",
          "normalized": "String-\u003eGType-\u003eReadAttr a b",
          "package": "glib",
          "partial": "Attr From Enum Property",
          "signature": "String-\u003eGType-\u003eReadAttr gobj enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:readAttrFromEnumProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "readAttrFromIntProperty",
          "package": "glib",
          "signature": "String -\u003e ReadAttr gobj Int",
          "source": "src/System-Glib-Properties.html#readAttrFromIntProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "readAttrFromIntProperty",
          "normalized": "String-\u003eReadAttr a Int",
          "package": "glib",
          "partial": "Attr From Int Property",
          "signature": "String-\u003eReadAttr gobj Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:readAttrFromIntProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "readAttrFromMaybeObjectProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e ReadAttr gobj (Maybe gobj')",
          "source": "src/System-Glib-Properties.html#readAttrFromMaybeObjectProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "readAttrFromMaybeObjectProperty",
          "normalized": "String-\u003eGType-\u003eReadAttr a(Maybe b)",
          "package": "glib",
          "partial": "Attr From Maybe Object Property",
          "signature": "String-\u003eGType-\u003eReadAttr gobj(Maybe gobj')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:readAttrFromMaybeObjectProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "readAttrFromMaybeStringProperty",
          "package": "glib",
          "signature": "String -\u003e ReadAttr gobj (Maybe String)",
          "source": "src/System-Glib-Properties.html#readAttrFromMaybeStringProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "readAttrFromMaybeStringProperty",
          "normalized": "String-\u003eReadAttr a(Maybe String)",
          "package": "glib",
          "partial": "Attr From Maybe String Property",
          "signature": "String-\u003eReadAttr gobj(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:readAttrFromMaybeStringProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "readAttrFromObjectProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e ReadAttr gobj gobj'",
          "source": "src/System-Glib-Properties.html#readAttrFromObjectProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "readAttrFromObjectProperty",
          "normalized": "String-\u003eGType-\u003eReadAttr a b",
          "package": "glib",
          "partial": "Attr From Object Property",
          "signature": "String-\u003eGType-\u003eReadAttr gobj gobj'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:readAttrFromObjectProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "readAttrFromStringProperty",
          "package": "glib",
          "signature": "String -\u003e ReadAttr gobj String",
          "source": "src/System-Glib-Properties.html#readAttrFromStringProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "readAttrFromStringProperty",
          "normalized": "String-\u003eReadAttr a String",
          "package": "glib",
          "partial": "Attr From String Property",
          "signature": "String-\u003eReadAttr gobj String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:readAttrFromStringProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "writeAttrFromBoxedOpaqueProperty",
          "package": "glib",
          "signature": "(boxed -\u003e (Ptr boxed -\u003e IO ()) -\u003e IO ()) -\u003e String -\u003e GType -\u003e WriteAttr gobj boxed",
          "source": "src/System-Glib-Properties.html#writeAttrFromBoxedOpaqueProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "writeAttrFromBoxedOpaqueProperty",
          "normalized": "(a-\u003e(Ptr a-\u003eIO())-\u003eIO())-\u003eString-\u003eGType-\u003eWriteAttr b a",
          "package": "glib",
          "partial": "Attr From Boxed Opaque Property",
          "signature": "(boxed-\u003e(Ptr boxed-\u003eIO())-\u003eIO())-\u003eString-\u003eGType-\u003eWriteAttr gobj boxed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:writeAttrFromBoxedOpaqueProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "writeAttrFromEnumProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e WriteAttr gobj enum",
          "source": "src/System-Glib-Properties.html#writeAttrFromEnumProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "writeAttrFromEnumProperty",
          "normalized": "String-\u003eGType-\u003eWriteAttr a b",
          "package": "glib",
          "partial": "Attr From Enum Property",
          "signature": "String-\u003eGType-\u003eWriteAttr gobj enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:writeAttrFromEnumProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "writeAttrFromMaybeObjectProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e WriteAttr gobj (Maybe gobj')",
          "source": "src/System-Glib-Properties.html#writeAttrFromMaybeObjectProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "writeAttrFromMaybeObjectProperty",
          "normalized": "String-\u003eGType-\u003eWriteAttr a(Maybe b)",
          "package": "glib",
          "partial": "Attr From Maybe Object Property",
          "signature": "String-\u003eGType-\u003eWriteAttr gobj(Maybe gobj')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:writeAttrFromMaybeObjectProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "writeAttrFromMaybeStringProperty",
          "package": "glib",
          "signature": "String -\u003e WriteAttr gobj (Maybe String)",
          "source": "src/System-Glib-Properties.html#writeAttrFromMaybeStringProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "writeAttrFromMaybeStringProperty",
          "normalized": "String-\u003eWriteAttr a(Maybe String)",
          "package": "glib",
          "partial": "Attr From Maybe String Property",
          "signature": "String-\u003eWriteAttr gobj(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:writeAttrFromMaybeStringProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "writeAttrFromObjectProperty",
          "package": "glib",
          "signature": "String -\u003e GType -\u003e WriteAttr gobj gobj'",
          "source": "src/System-Glib-Properties.html#writeAttrFromObjectProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "writeAttrFromObjectProperty",
          "normalized": "String-\u003eGType-\u003eWriteAttr a b",
          "package": "glib",
          "partial": "Attr From Object Property",
          "signature": "String-\u003eGType-\u003eWriteAttr gobj gobj'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:writeAttrFromObjectProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "writeAttrFromStringProperty",
          "package": "glib",
          "signature": "String -\u003e WriteAttr gobj String",
          "source": "src/System-Glib-Properties.html#writeAttrFromStringProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "writeAttrFromStringProperty",
          "normalized": "String-\u003eWriteAttr a String",
          "package": "glib",
          "partial": "Attr From String Property",
          "signature": "String-\u003eWriteAttr gobj String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:writeAttrFromStringProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Properties",
          "name": "writeAttrFromUIntProperty",
          "package": "glib",
          "signature": "String -\u003e WriteAttr gobj Int",
          "source": "src/System-Glib-Properties.html#writeAttrFromUIntProperty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Properties",
          "module": "System.Glib.Properties",
          "name": "writeAttrFromUIntProperty",
          "normalized": "String-\u003eWriteAttr a Int",
          "package": "glib",
          "partial": "Attr From UInt Property",
          "signature": "String-\u003eWriteAttr gobj Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Properties.html#v:writeAttrFromUIntProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Signals",
          "name": "Signals",
          "package": "glib",
          "source": "src/System-Glib-Signals.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "Signals",
          "package": "glib",
          "partial": "Signals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Signals",
          "name": "ConnectAfter",
          "package": "glib",
          "source": "src/System-Glib-Signals.html#ConnectAfter",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "ConnectAfter",
          "package": "glib",
          "partial": "Connect After",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#t:ConnectAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of signal handler ids. If you ever need to \u003ccode\u003e\u003ca\u003edisconnect\u003c/a\u003e\u003c/code\u003e a signal\n handler then you will need to retain the \u003ccode\u003e\u003ca\u003eConnectId\u003c/a\u003e\u003c/code\u003e you got when you\n registered it.\n\u003c/p\u003e",
          "module": "System.Glib.Signals",
          "name": "ConnectId",
          "package": "glib",
          "source": "src/System-Glib-Signals.html#ConnectId",
          "type": "data"
        },
        "index": {
          "description": "The type of signal handler ids If you ever need to disconnect signal handler then you will need to retain the ConnectId you got when you registered it",
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "ConnectId",
          "package": "glib",
          "partial": "Connect Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#t:ConnectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Signals",
          "name": "GClosure",
          "package": "glib",
          "source": "src/System-Glib-Signals.html#GClosure",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "GClosure",
          "package": "glib",
          "partial": "GClosure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#t:GClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Signals",
          "name": "Signal",
          "package": "glib",
          "source": "src/System-Glib-Signals.html#Signal",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "Signal",
          "package": "glib",
          "partial": "Signal",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Signals",
          "name": "SignalName",
          "package": "glib",
          "source": "src/System-Glib-Signals.html#SignalName",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "SignalName",
          "package": "glib",
          "partial": "Signal Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#t:SignalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Signals",
          "name": "ConnectId",
          "package": "glib",
          "signature": "ConnectId CULong o",
          "source": "src/System-Glib-Signals.html#ConnectId",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "ConnectId",
          "package": "glib",
          "partial": "Connect Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#v:ConnectId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Signals",
          "name": "Signal",
          "package": "glib",
          "signature": "Signal (Bool -\u003e object -\u003e handler -\u003e IO (ConnectId object))",
          "source": "src/System-Glib-Signals.html#Signal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "Signal",
          "normalized": "Signal(Bool-\u003ea-\u003eb-\u003eIO(ConnectId a))",
          "package": "glib",
          "partial": "Signal",
          "signature": "Signal(Bool-\u003eobject-\u003ehandler-\u003eIO(ConnectId object))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#v:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action in response to a signal.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Like \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e but the signal is executed after Gtk's default handler has\n run.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Glib.Signals",
          "name": "after",
          "package": "glib",
          "signature": "object -\u003e Signal object callback -\u003e callback -\u003e IO (ConnectId object)",
          "source": "src/System-Glib-Signals.html#after",
          "type": "function"
        },
        "index": {
          "description": "Perform an action in response to signal Like on but the signal is executed after Gtk default handler has run",
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "after",
          "normalized": "a-\u003eSignal a b-\u003eb-\u003eIO(ConnectId a)",
          "package": "glib",
          "signature": "object-\u003eSignal object callback-\u003ecallback-\u003eIO(ConnectId object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.Signals",
          "name": "connectGeneric",
          "package": "glib",
          "signature": "SignalName -\u003e ConnectAfter -\u003e obj -\u003e handler -\u003e IO (ConnectId obj)",
          "source": "src/System-Glib-Signals.html#connectGeneric",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "connectGeneric",
          "normalized": "SignalName-\u003eConnectAfter-\u003ea-\u003eb-\u003eIO(ConnectId a)",
          "package": "glib",
          "partial": "Generic",
          "signature": "SignalName-\u003eConnectAfter-\u003eobj-\u003ehandler-\u003eIO(ConnectId obj)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#v:connectGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: use signalDisconnect instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.Signals",
          "name": "disconnect",
          "package": "glib",
          "signature": "ConnectId obj -\u003e IO ()",
          "source": "src/System-Glib-Signals.html#disconnect",
          "type": "function"
        },
        "index": {
          "description": "Deprecated use signalDisconnect instead",
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "disconnect",
          "normalized": "ConnectId a-\u003eIO()",
          "package": "glib",
          "signature": "ConnectId obj-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#v:disconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action in response to a signal.\n\u003c/p\u003e\u003cp\u003eUse it like this:\n\u003c/p\u003e\u003cpre\u003e on obj sig $ do\n ...\n\u003c/pre\u003e\u003cp\u003eor if the signal handler takes any arguments:\n\u003c/p\u003e\u003cpre\u003e on obj sig $ \\args -\u003e do\n ...\n\u003c/pre\u003e",
          "module": "System.Glib.Signals",
          "name": "on",
          "package": "glib",
          "signature": "object -\u003e Signal object callback -\u003e callback -\u003e IO (ConnectId object)",
          "source": "src/System-Glib-Signals.html#on",
          "type": "function"
        },
        "index": {
          "description": "Perform an action in response to signal Use it like this on obj sig do or if the signal handler takes any arguments on obj sig args do",
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "on",
          "normalized": "a-\u003eSignal a b-\u003eb-\u003eIO(ConnectId a)",
          "package": "glib",
          "signature": "object-\u003eSignal object callback-\u003ecallback-\u003eIO(ConnectId object)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock a specific signal handler.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Blocks a handler of an instance so it will not be called during any\n signal emissions unless it is unblocked again. Thus \"blocking\" a signal\n handler means to temporarily deactive it, a signal handler has to be\n unblocked exactly the same amount of times it has been blocked before\n to become active again.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Glib.Signals",
          "name": "signalBlock",
          "package": "glib",
          "signature": "ConnectId obj -\u003e IO ()",
          "source": "src/System-Glib-Signals.html#signalBlock",
          "type": "function"
        },
        "index": {
          "description": "Block specific signal handler Blocks handler of an instance so it will not be called during any signal emissions unless it is unblocked again Thus blocking signal handler means to temporarily deactive it signal handler has to be unblocked exactly the same amount of times it has been blocked before to become active again",
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "signalBlock",
          "normalized": "ConnectId a-\u003eIO()",
          "package": "glib",
          "partial": "Block",
          "signature": "ConnectId obj-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#v:signalBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisconnect a signal handler. After disconnecting the handler will no\n longer be invoked when the event occurs.\n\u003c/p\u003e",
          "module": "System.Glib.Signals",
          "name": "signalDisconnect",
          "package": "glib",
          "signature": "ConnectId obj -\u003e IO ()",
          "source": "src/System-Glib-Signals.html#signalDisconnect",
          "type": "function"
        },
        "index": {
          "description": "Disconnect signal handler After disconnecting the handler will no longer be invoked when the event occurs",
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "signalDisconnect",
          "normalized": "ConnectId a-\u003eIO()",
          "package": "glib",
          "partial": "Disconnect",
          "signature": "ConnectId obj-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#v:signalDisconnect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops a signal's current emission.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This will prevent the default method from running. The sequence in which\n handlers are run is \"first\", \"on\", \"last\" then \"after\" where\n Gtk-internal\n signals are connected either at \"first\" or at \"last\". Hence this\n function can only stop the signal processing if it is called from within\n a handler that is connected with an \"on\" signal and if the Gtk-internal\n handler is connected as \"last\". Gtk prints a warning if this function\n is used on a signal which isn't being emitted.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Glib.Signals",
          "name": "signalStopEmission",
          "package": "glib",
          "signature": "obj -\u003e SignalName -\u003e IO ()",
          "source": "src/System-Glib-Signals.html#signalStopEmission",
          "type": "function"
        },
        "index": {
          "description": "Stops signal current emission This will prevent the default method from running The sequence in which handlers are run is first on last then after where Gtk-internal signals are connected either at first or at last Hence this function can only stop the signal processing if it is called from within handler that is connected with an on signal and if the Gtk-internal handler is connected as last Gtk prints warning if this function is used on signal which isn being emitted",
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "signalStopEmission",
          "normalized": "a-\u003eSignalName-\u003eIO()",
          "package": "glib",
          "partial": "Stop Emission",
          "signature": "obj-\u003eSignalName-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#v:signalStopEmission"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnblock a specific signal handler.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Undoes the effect of a previous \u003ccode\u003e\u003ca\u003esignalBlock\u003c/a\u003e\u003c/code\u003e call. A blocked handler\n is skipped during signal emissions and will not be invoked, unblocking\n it (for exactly the amount of times it has been blocked before) reverts\n its \"blocked\" state, so the handler will be recognized by the signal\n system and is called upon future or currently ongoing signal emissions\n (since the order in which handlers are called during signal emissions\n is deterministic, whether the unblocked handler in question is called\n as part of a currently ongoing emission depends on how far that\n emission has proceeded yet).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Glib.Signals",
          "name": "signalUnblock",
          "package": "glib",
          "signature": "ConnectId obj -\u003e IO ()",
          "source": "src/System-Glib-Signals.html#signalUnblock",
          "type": "function"
        },
        "index": {
          "description": "Unblock specific signal handler Undoes the effect of previous signalBlock call blocked handler is skipped during signal emissions and will not be invoked unblocking it for exactly the amount of times it has been blocked before reverts its blocked state so the handler will be recognized by the signal system and is called upon future or currently ongoing signal emissions since the order in which handlers are called during signal emissions is deterministic whether the unblocked handler in question is called as part of currently ongoing emission depends on how far that emission has proceeded yet",
          "hierarchy": "System Glib Signals",
          "module": "System.Glib.Signals",
          "name": "signalUnblock",
          "normalized": "ConnectId a-\u003eIO()",
          "package": "glib",
          "partial": "Unblock",
          "signature": "ConnectId obj-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Signals.html#v:signalUnblock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "StoreValue",
          "package": "glib",
          "source": "src/System-Glib-StoreValue.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "StoreValue",
          "package": "glib",
          "partial": "Store Value",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA union with information about the currently stored type.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Internally used by \u003ca\u003eGraphics.UI.Gtk.TreeList.TreeModel\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Glib.StoreValue",
          "name": "GenericValue",
          "package": "glib",
          "source": "src/System-Glib-StoreValue.html#GenericValue",
          "type": "data"
        },
        "index": {
          "description": "union with information about the currently stored type Internally used by Graphics.UI.Gtk.TreeList.TreeModel",
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "GenericValue",
          "package": "glib",
          "partial": "Generic Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#t:GenericValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMType",
          "package": "glib",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMType",
          "package": "glib",
          "partial": "TMType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#t:TMType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "GVboolean",
          "package": "glib",
          "signature": "GVboolean Bool",
          "source": "src/System-Glib-StoreValue.html#GenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "GVboolean",
          "package": "glib",
          "partial": "GVboolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:GVboolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "GVdouble",
          "package": "glib",
          "signature": "GVdouble Double",
          "source": "src/System-Glib-StoreValue.html#GenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "GVdouble",
          "package": "glib",
          "partial": "GVdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:GVdouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "GVenum",
          "package": "glib",
          "signature": "GVenum Int",
          "source": "src/System-Glib-StoreValue.html#GenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "GVenum",
          "package": "glib",
          "partial": "GVenum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:GVenum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "GVflags",
          "package": "glib",
          "signature": "GVflags Int",
          "source": "src/System-Glib-StoreValue.html#GenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "GVflags",
          "package": "glib",
          "partial": "GVflags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:GVflags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "GVfloat",
          "package": "glib",
          "signature": "GVfloat Float",
          "source": "src/System-Glib-StoreValue.html#GenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "GVfloat",
          "package": "glib",
          "partial": "GVfloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:GVfloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "GVint",
          "package": "glib",
          "signature": "GVint Int",
          "source": "src/System-Glib-StoreValue.html#GenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "GVint",
          "package": "glib",
          "partial": "GVint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:GVint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "GVobject",
          "package": "glib",
          "signature": "GVobject GObject",
          "source": "src/System-Glib-StoreValue.html#GenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "GVobject",
          "package": "glib",
          "partial": "GVobject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:GVobject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "GVstring",
          "package": "glib",
          "signature": "GVstring (Maybe String)",
          "source": "src/System-Glib-StoreValue.html#GenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "GVstring",
          "package": "glib",
          "partial": "GVstring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:GVstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "GVuint",
          "package": "glib",
          "signature": "GVuint Word",
          "source": "src/System-Glib-StoreValue.html#GenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "GVuint",
          "package": "glib",
          "partial": "GVuint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:GVuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMboolean",
          "package": "glib",
          "signature": "TMboolean",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMboolean",
          "package": "glib",
          "partial": "TMboolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:TMboolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMdouble",
          "package": "glib",
          "signature": "TMdouble",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMdouble",
          "package": "glib",
          "partial": "TMdouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:TMdouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMenum",
          "package": "glib",
          "signature": "TMenum",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMenum",
          "package": "glib",
          "partial": "TMenum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:TMenum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMflags",
          "package": "glib",
          "signature": "TMflags",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMflags",
          "package": "glib",
          "partial": "TMflags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:TMflags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMfloat",
          "package": "glib",
          "signature": "TMfloat",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMfloat",
          "package": "glib",
          "partial": "TMfloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:TMfloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMint",
          "package": "glib",
          "signature": "TMint",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMint",
          "package": "glib",
          "partial": "TMint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:TMint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMinvalid",
          "package": "glib",
          "signature": "TMinvalid",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMinvalid",
          "package": "glib",
          "partial": "TMinvalid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:TMinvalid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMobject",
          "package": "glib",
          "signature": "TMobject",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMobject",
          "package": "glib",
          "partial": "TMobject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:TMobject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMstring",
          "package": "glib",
          "signature": "TMstring",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMstring",
          "package": "glib",
          "partial": "TMstring",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:TMstring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "TMuint",
          "package": "glib",
          "signature": "TMuint",
          "source": "src/System-Glib-StoreValue.html#TMType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "TMuint",
          "package": "glib",
          "partial": "TMuint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:TMuint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "valueGetGenericValue",
          "package": "glib",
          "signature": "GValue -\u003e IO GenericValue",
          "source": "src/System-Glib-StoreValue.html#valueGetGenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "valueGetGenericValue",
          "normalized": "GValue-\u003eIO GenericValue",
          "package": "glib",
          "partial": "Get Generic Value",
          "signature": "GValue-\u003eIO GenericValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:valueGetGenericValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.StoreValue",
          "name": "valueSetGenericValue",
          "package": "glib",
          "signature": "GValue -\u003e GenericValue -\u003e IO ()",
          "source": "src/System-Glib-StoreValue.html#valueSetGenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib StoreValue",
          "module": "System.Glib.StoreValue",
          "name": "valueSetGenericValue",
          "normalized": "GValue-\u003eGenericValue-\u003eIO()",
          "package": "glib",
          "partial": "Set Generic Value",
          "signature": "GValue-\u003eGenericValue-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-StoreValue.html#v:valueSetGenericValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module adds CString-like functions that handle UTF8 strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.UTFString",
          "name": "UTFString",
          "package": "glib",
          "source": "src/System-Glib-UTFString.html",
          "type": "module"
        },
        "index": {
          "description": "This module adds CString-like functions that handle UTF8 strings",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "UTFString",
          "package": "glib",
          "partial": "UTFString",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOffset correction for String to UTF8 mapping.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "UTFCorrection",
          "package": "glib",
          "source": "src/System-Glib-UTFString.html#UTFCorrection",
          "type": "data"
        },
        "index": {
          "description": "Offset correction for String to UTF8 mapping",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "UTFCorrection",
          "package": "glib",
          "partial": "UTFCorrection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#t:UTFCorrection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a list of offset corrections.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "genUTFOfs",
          "package": "glib",
          "signature": "String -\u003e UTFCorrection",
          "source": "src/System-Glib-UTFString.html#genUTFOfs",
          "type": "function"
        },
        "index": {
          "description": "Create list of offset corrections",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "genUTFOfs",
          "normalized": "String-\u003eUTFCorrection",
          "package": "glib",
          "partial": "UTFOfs",
          "signature": "String-\u003eUTFCorrection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:genUTFOfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emaybePeek\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003epeekCString\u003c/a\u003e\u003c/code\u003e but using the UTF-8 encoding to retrieve\n UTF-8 from a \u003ccode\u003e\u003ca\u003eCString\u003c/a\u003e\u003c/code\u003e which may be the \u003ccode\u003e\u003ca\u003enullPtr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "maybePeekUTFString",
          "package": "glib",
          "signature": "CString -\u003e IO (Maybe String)",
          "source": "src/System-Glib-UTFString.html#maybePeekUTFString",
          "type": "function"
        },
        "index": {
          "description": "Like maybePeek peekCString but using the UTF-8 encoding to retrieve UTF-8 from CString which may be the nullPtr",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "maybePeekUTFString",
          "normalized": "CString-\u003eIO(Maybe String)",
          "package": "glib",
          "partial": "Peek UTFString",
          "signature": "CString-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:maybePeekUTFString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003enewCString\u003c/a\u003e\u003c/code\u003e but using the UTF-8 encoding.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "newUTFString",
          "package": "glib",
          "signature": "String -\u003e IO CString",
          "source": "src/System-Glib-UTFString.html#newUTFString",
          "type": "function"
        },
        "index": {
          "description": "Like newCString but using the UTF-8 encoding",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "newUTFString",
          "normalized": "String-\u003eIO CString",
          "package": "glib",
          "partial": "UTFString",
          "signature": "String-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:newUTFString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike  Define newUTFStringLen to emit UTF-8.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "newUTFStringLen",
          "package": "glib",
          "signature": "String -\u003e IO CStringLen",
          "source": "src/System-Glib-UTFString.html#newUTFStringLen",
          "type": "function"
        },
        "index": {
          "description": "Like Define newUTFStringLen to emit UTF-8",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "newUTFStringLen",
          "normalized": "String-\u003eIO CStringLen",
          "package": "glib",
          "partial": "UTFString Len",
          "signature": "String-\u003eIO CStringLen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:newUTFStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.UTFString",
          "name": "ofsFromUTF",
          "package": "glib",
          "signature": "Int -\u003e UTFCorrection -\u003e Int",
          "source": "src/System-Glib-UTFString.html#ofsFromUTF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "ofsFromUTF",
          "normalized": "Int-\u003eUTFCorrection-\u003eInt",
          "package": "glib",
          "partial": "From UTF",
          "signature": "Int-\u003eUTFCorrection-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:ofsFromUTF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib.UTFString",
          "name": "ofsToUTF",
          "package": "glib",
          "signature": "Int -\u003e UTFCorrection -\u003e Int",
          "source": "src/System-Glib-UTFString.html#ofsToUTF",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "ofsToUTF",
          "normalized": "Int-\u003eUTFCorrection-\u003eInt",
          "package": "glib",
          "partial": "To UTF",
          "signature": "Int-\u003eUTFCorrection-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:ofsToUTF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epeekCString\u003c/a\u003e\u003c/code\u003e but using the UTF-8 encoding.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "peekUTFString",
          "package": "glib",
          "signature": "CString -\u003e IO String",
          "source": "src/System-Glib-UTFString.html#peekUTFString",
          "type": "function"
        },
        "index": {
          "description": "Like peekCString but using the UTF-8 encoding",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "peekUTFString",
          "normalized": "CString-\u003eIO String",
          "package": "glib",
          "partial": "UTFString",
          "signature": "CString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:peekUTFString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an array (of the given length) of UTF-8 encoded \u003ccode\u003e\u003ca\u003eCString\u003c/a\u003e\u003c/code\u003es to a\n   list of Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "peekUTFStringArray",
          "package": "glib",
          "signature": "Int -\u003e Ptr CString -\u003e IO [String]",
          "source": "src/System-Glib-UTFString.html#peekUTFStringArray",
          "type": "function"
        },
        "index": {
          "description": "Convert an array of the given length of UTF-8 encoded CString to list of Haskell String",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "peekUTFStringArray",
          "normalized": "Int-\u003ePtr CString-\u003eIO[String]",
          "package": "glib",
          "partial": "UTFString Array",
          "signature": "Int-\u003ePtr CString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:peekUTFStringArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a null-terminated array of UTF-8 encoded \u003ccode\u003e\u003ca\u003eCString\u003c/a\u003e\u003c/code\u003es to a list of\n   Haskell \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "peekUTFStringArray0",
          "package": "glib",
          "signature": "Ptr CString -\u003e IO [String]",
          "source": "src/System-Glib-UTFString.html#peekUTFStringArray0",
          "type": "function"
        },
        "index": {
          "description": "Convert null-terminated array of UTF-8 encoded CString to list of Haskell String",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "peekUTFStringArray0",
          "normalized": "Ptr CString-\u003eIO[String]",
          "package": "glib",
          "partial": "UTFString Array",
          "signature": "Ptr CString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:peekUTFStringArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epeekCStringLen\u003c/a\u003e\u003c/code\u003e but using the UTF-8 encoding.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "peekUTFStringLen",
          "package": "glib",
          "signature": "CStringLen -\u003e IO String",
          "source": "src/System-Glib-UTFString.html#peekUTFStringLen",
          "type": "function"
        },
        "index": {
          "description": "Like peekCStringLen but using the UTF-8 encoding",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "peekUTFStringLen",
          "normalized": "CStringLen-\u003eIO String",
          "package": "glib",
          "partial": "UTFString Len",
          "signature": "CStringLen-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:peekUTFStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epeekCString\u003c/a\u003e\u003c/code\u003e but then frees the string using \u003ccode\u003eg_free\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "readCString",
          "package": "glib",
          "signature": "CString -\u003e IO String",
          "source": "src/System-Glib-UTFString.html#readCString",
          "type": "function"
        },
        "index": {
          "description": "Like peekCString but then frees the string using free",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "readCString",
          "normalized": "CString-\u003eIO String",
          "package": "glib",
          "partial": "CString",
          "signature": "CString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:readCString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike like \u003ccode\u003e\u003ca\u003epeekUTFString\u003c/a\u003e\u003c/code\u003e but then frees the string using g_free\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "readUTFString",
          "package": "glib",
          "signature": "CString -\u003e IO String",
          "source": "src/System-Glib-UTFString.html#readUTFString",
          "type": "function"
        },
        "index": {
          "description": "Like like peekUTFString but then frees the string using free",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "readUTFString",
          "normalized": "CString-\u003eIO String",
          "package": "glib",
          "partial": "UTFString",
          "signature": "CString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:readUTFString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epeekUTFStringArray0\u003c/a\u003e\u003c/code\u003e but then free the string array including all\n strings.\n\u003c/p\u003e\u003cp\u003eTo be used when functions indicate that their return value should be freed\n with \u003ccode\u003eg_strfreev\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "readUTFStringArray0",
          "package": "glib",
          "signature": "Ptr CString -\u003e IO [String]",
          "source": "src/System-Glib-UTFString.html#readUTFStringArray0",
          "type": "function"
        },
        "index": {
          "description": "Like peekUTFStringArray0 but then free the string array including all strings To be used when functions indicate that their return value should be freed with strfreev",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "readUTFStringArray0",
          "normalized": "Ptr CString-\u003eIO[String]",
          "package": "glib",
          "partial": "UTFString Array",
          "signature": "Ptr CString-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:readUTFStringArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithCString\u003c/a\u003e\u003c/code\u003e but using the UTF-8 encoding.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "withUTFString",
          "package": "glib",
          "signature": "String -\u003e (CString -\u003e IO a) -\u003e IO a",
          "source": "src/System-Glib-UTFString.html#withUTFString",
          "type": "function"
        },
        "index": {
          "description": "Like withCString but using the UTF-8 encoding",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "withUTFString",
          "normalized": "String-\u003e(CString-\u003eIO a)-\u003eIO a",
          "package": "glib",
          "partial": "UTFString",
          "signature": "String-\u003e(CString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:withUTFString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily allocate an array of UTF-8 encoded \u003ccode\u003e\u003ca\u003eCString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "withUTFStringArray",
          "package": "glib",
          "signature": "[String] -\u003e (Ptr CString -\u003e IO a) -\u003e IO a",
          "source": "src/System-Glib-UTFString.html#withUTFStringArray",
          "type": "function"
        },
        "index": {
          "description": "Temporarily allocate an array of UTF-8 encoded CString",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "withUTFStringArray",
          "normalized": "[String]-\u003e(Ptr CString-\u003eIO a)-\u003eIO a",
          "package": "glib",
          "partial": "UTFString Array",
          "signature": "[String]-\u003e(Ptr CString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:withUTFStringArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily allocate a null-terminated array of UTF-8 encoded \u003ccode\u003e\u003ca\u003eCString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "withUTFStringArray0",
          "package": "glib",
          "signature": "[String] -\u003e (Ptr CString -\u003e IO a) -\u003e IO a",
          "source": "src/System-Glib-UTFString.html#withUTFStringArray0",
          "type": "function"
        },
        "index": {
          "description": "Temporarily allocate null-terminated array of UTF-8 encoded CString",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "withUTFStringArray0",
          "normalized": "[String]-\u003e(Ptr CString-\u003eIO a)-\u003eIO a",
          "package": "glib",
          "partial": "UTFString Array",
          "signature": "[String]-\u003e(Ptr CString-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:withUTFStringArray0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewithCStringLen\u003c/a\u003e\u003c/code\u003e but using the UTF-8 encoding.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "withUTFStringLen",
          "package": "glib",
          "signature": "String -\u003e (CStringLen -\u003e IO a) -\u003e IO a",
          "source": "src/System-Glib-UTFString.html#withUTFStringLen",
          "type": "function"
        },
        "index": {
          "description": "Like withCStringLen but using the UTF-8 encoding",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "withUTFStringLen",
          "normalized": "String-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "package": "glib",
          "partial": "UTFString Len",
          "signature": "String-\u003e(CStringLen-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:withUTFStringLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemporarily allocate a list of UTF-8 \u003ccode\u003e\u003ca\u003eCString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "System.Glib.UTFString",
          "name": "withUTFStrings",
          "package": "glib",
          "signature": "[String] -\u003e ([CString] -\u003e IO a) -\u003e IO a",
          "source": "src/System-Glib-UTFString.html#withUTFStrings",
          "type": "function"
        },
        "index": {
          "description": "Temporarily allocate list of UTF-8 CString",
          "hierarchy": "System Glib UTFString",
          "module": "System.Glib.UTFString",
          "name": "withUTFStrings",
          "normalized": "[String]-\u003e([CString]-\u003eIO a)-\u003eIO a",
          "package": "glib",
          "partial": "UTFStrings",
          "signature": "[String]-\u003e([CString]-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-UTFString.html#v:withUTFStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module binds GLib-specific utility procedures.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Glib.Utils",
          "name": "Utils",
          "package": "glib",
          "source": "src/System-Glib-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module binds GLib-specific utility procedures",
          "hierarchy": "System Glib Utils",
          "module": "System.Glib.Utils",
          "name": "Utils",
          "package": "glib",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a human-readable name for the application, as set by\n \u003ccode\u003e\u003ca\u003esetApplicationName\u003c/a\u003e\u003c/code\u003e. This name should be localized if possible, and is\n intended for display to the user. Contrast with \u003ccode\u003e\u003ca\u003egetProgramName\u003c/a\u003e\u003c/code\u003e, which\n gets a non-localized name. If \u003ccode\u003e\u003ca\u003esetApplicationName\u003c/a\u003e\u003c/code\u003e has not been performed,\n returns the result of \u003ccode\u003e\u003ca\u003egetProgramName\u003c/a\u003e\u003c/code\u003e (which may be \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if\n \u003ccode\u003e\u003ca\u003esetProgramName\u003c/a\u003e\u003c/code\u003e has also not been performed).\n\u003c/p\u003e",
          "module": "System.Glib.Utils",
          "name": "getApplicationName",
          "package": "glib",
          "signature": "IO (Maybe String)",
          "source": "src/System-Glib-Utils.html#getApplicationName",
          "type": "function"
        },
        "index": {
          "description": "Gets human-readable name for the application as set by setApplicationName This name should be localized if possible and is intended for display to the user Contrast with getProgramName which gets non-localized name If setApplicationName has not been performed returns the result of getProgramName which may be Nothing if setProgramName has also not been performed",
          "hierarchy": "System Glib Utils",
          "module": "System.Glib.Utils",
          "name": "getApplicationName",
          "package": "glib",
          "partial": "Application Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Utils.html#v:getApplicationName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the name of the program. This name should \u003cem\u003enot\u003c/em\u003e be localized, contrast\n with \u003ccode\u003e\u003ca\u003egetApplicationName\u003c/a\u003e\u003c/code\u003e. If you are using GDK or GTK+, the program name\n is set in \u003ccode\u003einitGUI\u003c/code\u003e to the last component of argv[0].\n\u003c/p\u003e",
          "module": "System.Glib.Utils",
          "name": "getProgramName",
          "package": "glib",
          "signature": "IO (Maybe String)",
          "source": "src/System-Glib-Utils.html#getProgramName",
          "type": "function"
        },
        "index": {
          "description": "Gets the name of the program This name should not be localized contrast with getApplicationName If you are using GDK or GTK the program name is set in initGUI to the last component of argv",
          "hierarchy": "System Glib Utils",
          "module": "System.Glib.Utils",
          "name": "getProgramName",
          "package": "glib",
          "partial": "Program Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Utils.html#v:getProgramName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a human-readable name for the application. This name should be\n localized if possible, and is intended for display to the user. Contrast\n with \u003ccode\u003e\u003ca\u003esetProgramName\u003c/a\u003e\u003c/code\u003e, which sets a non-localized name. \u003ccode\u003e\u003ca\u003esetProgramName\u003c/a\u003e\u003c/code\u003e\n will be performed automatically by \u003ccode\u003einitGUI\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003esetApplicationName\u003c/a\u003e\u003c/code\u003e\n will not.\n\u003c/p\u003e\u003cp\u003eNote that for thread safety reasons, this computation can only be performed\n once.\n\u003c/p\u003e\u003cp\u003eThe application name will be used in contexts such as error messages, or\n when displaying an application's name in the task list.\n\u003c/p\u003e",
          "module": "System.Glib.Utils",
          "name": "setApplicationName",
          "package": "glib",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Glib-Utils.html#setApplicationName",
          "type": "function"
        },
        "index": {
          "description": "Sets human-readable name for the application This name should be localized if possible and is intended for display to the user Contrast with setProgramName which sets non-localized name setProgramName will be performed automatically by initGUI but setApplicationName will not Note that for thread safety reasons this computation can only be performed once The application name will be used in contexts such as error messages or when displaying an application name in the task list",
          "hierarchy": "System Glib Utils",
          "module": "System.Glib.Utils",
          "name": "setApplicationName",
          "normalized": "String-\u003eIO()",
          "package": "glib",
          "partial": "Application Name",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Utils.html#v:setApplicationName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the name of the program. This name should \u003cem\u003enot\u003c/em\u003e be localized, contrast\n with \u003ccode\u003e\u003ca\u003esetApplicationName\u003c/a\u003e\u003c/code\u003e. Note that for thread-safety reasons this\n computation can only be performed once.\n\u003c/p\u003e",
          "module": "System.Glib.Utils",
          "name": "setProgramName",
          "package": "glib",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Glib-Utils.html#setProgramName",
          "type": "function"
        },
        "index": {
          "description": "Sets the name of the program This name should not be localized contrast with setApplicationName Note that for thread-safety reasons this computation can only be performed once",
          "hierarchy": "System Glib Utils",
          "module": "System.Glib.Utils",
          "name": "setProgramName",
          "normalized": "String-\u003eIO()",
          "package": "glib",
          "partial": "Program Name",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib-Utils.html#v:setProgramName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Glib",
          "name": "Glib",
          "package": "glib",
          "source": "src/System-Glib.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Glib",
          "module": "System.Glib",
          "name": "Glib",
          "package": "glib",
          "partial": "Glib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/glib/docs/System-Glib.html#"
      }
    }
  ]
]