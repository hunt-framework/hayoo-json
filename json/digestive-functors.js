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
        "word": "digestive-functors"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides a datatype to differentiate between regular urlencoding and\n multipart encoding for the content of forms and functions to determine\n the content types of forms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive.Form.Encoding",
          "name": "Encoding",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Encoding.html",
          "type": "module"
        },
        "index": {
          "description": "Provides datatype to differentiate between regular urlencoding and multipart encoding for the content of forms and functions to determine the content types of forms",
          "hierarchy": "Text Digestive Form Encoding",
          "module": "Text.Digestive.Form.Encoding",
          "name": "Encoding",
          "package": "digestive-functors",
          "partial": "Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Encoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContent type encoding of the form, either url encoded\n (percent-encoding) or multipart encoding. For details, see:\n \u003ca\u003ehttp://www.w3.org/TR/html401/interact/forms.html#h-17.13.4\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Encoding",
          "name": "FormEncType",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Encoding.html#FormEncType",
          "type": "data"
        },
        "index": {
          "description": "Content type encoding of the form either url encoded percent-encoding or multipart encoding For details see http www.w3.org TR html401 interact forms.html h-17.13.4",
          "hierarchy": "Text Digestive Form Encoding",
          "module": "Text.Digestive.Form.Encoding",
          "name": "FormEncType",
          "package": "digestive-functors",
          "partial": "Form Enc Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Encoding.html#t:FormEncType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Encoding",
          "name": "MultiPart",
          "package": "digestive-functors",
          "signature": "MultiPart",
          "source": "src/Text-Digestive-Form-Encoding.html#FormEncType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Encoding",
          "module": "Text.Digestive.Form.Encoding",
          "name": "MultiPart",
          "package": "digestive-functors",
          "partial": "Multi Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Encoding.html#v:MultiPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Encoding",
          "name": "UrlEncoded",
          "package": "digestive-functors",
          "signature": "UrlEncoded",
          "source": "src/Text-Digestive-Form-Encoding.html#FormEncType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Encoding",
          "module": "Text.Digestive.Form.Encoding",
          "name": "UrlEncoded",
          "package": "digestive-functors",
          "partial": "Url Encoded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Encoding.html#v:UrlEncoded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines the encoding type of a \u003ca\u003eFormTree\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Encoding",
          "name": "formTreeEncType",
          "package": "digestive-functors",
          "signature": "FormTree Identity v m a -\u003e FormEncType",
          "source": "src/Text-Digestive-Form-Encoding.html#formTreeEncType",
          "type": "function"
        },
        "index": {
          "description": "Determines the encoding type of FormTree",
          "hierarchy": "Text Digestive Form Encoding",
          "module": "Text.Digestive.Form.Encoding",
          "name": "formTreeEncType",
          "normalized": "FormTree Identity a b c-\u003eFormEncType",
          "package": "digestive-functors",
          "partial": "Tree Enc Type",
          "signature": "FormTree Identity v m a-\u003eFormEncType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Encoding.html#v:formTreeEncType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal embedding of form fields with associated functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Field",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal-Field.html",
          "type": "module"
        },
        "index": {
          "description": "Internal embedding of form fields with associated functions",
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Field",
          "package": "digestive-functors",
          "partial": "Field",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single input field. This usually maps to a single HTML \u003ccode\u003e\u003ca\u003einput\u003c/a\u003e\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Field",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal-Field.html#Field",
          "type": "data"
        },
        "index": {
          "description": "single input field This usually maps to single HTML input element",
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Field",
          "package": "digestive-functors",
          "partial": "Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue agnostic \u003ca\u003eField\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "SomeField",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal-Field.html#SomeField",
          "type": "data"
        },
        "index": {
          "description": "Value agnostic Field",
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "SomeField",
          "package": "digestive-functors",
          "partial": "Some Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#t:SomeField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Bool",
          "package": "digestive-functors",
          "signature": "Bool -\u003e Field v Bool",
          "source": "src/Text-Digestive-Form-Internal-Field.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Bool",
          "normalized": "Bool-\u003eField a Bool",
          "package": "digestive-functors",
          "partial": "Bool",
          "signature": "Bool-\u003eField v Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#v:Bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Choice",
          "package": "digestive-functors",
          "signature": "[(Text, [(Text, (a, v))])] -\u003e Int -\u003e Field v (a, Int)",
          "source": "src/Text-Digestive-Form-Internal-Field.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Choice",
          "normalized": "[(Text,[(Text,(a,b))])]-\u003eInt-\u003eField b(a,Int)",
          "package": "digestive-functors",
          "partial": "Choice",
          "signature": "[(Text,[(Text,(a,v))])]-\u003eInt-\u003eField v(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#v:Choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "File",
          "package": "digestive-functors",
          "signature": "Field v (Maybe FilePath)",
          "source": "src/Text-Digestive-Form-Internal-Field.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "File",
          "package": "digestive-functors",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Singleton",
          "package": "digestive-functors",
          "signature": "a -\u003e Field v a",
          "source": "src/Text-Digestive-Form-Internal-Field.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Singleton",
          "normalized": "a-\u003eField b a",
          "package": "digestive-functors",
          "partial": "Singleton",
          "signature": "a-\u003eField v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#v:Singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "SomeField",
          "package": "digestive-functors",
          "signature": "forall a . SomeField (Field v a)",
          "source": "src/Text-Digestive-Form-Internal-Field.html#SomeField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "SomeField",
          "package": "digestive-functors",
          "partial": "Some Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#v:SomeField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Text",
          "package": "digestive-functors",
          "signature": "Text -\u003e Field v Text",
          "source": "src/Text-Digestive-Form-Internal-Field.html#Field",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "Text",
          "normalized": "Text-\u003eField a Text",
          "package": "digestive-functors",
          "partial": "Text",
          "signature": "Text-\u003eField v Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a field to retrieve a value, using the given method and\n a list of input.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "evalField",
          "package": "digestive-functors",
          "signature": "Method-\u003e [FormInput]-\u003e Field v a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Evaluate field to retrieve value using the given method and list of input",
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "evalField",
          "normalized": "Method-\u003e[FormInput]-\u003eField a b-\u003eb",
          "package": "digestive-functors",
          "partial": "Field",
          "signature": "Method-\u003e[FormInput]-\u003eField v a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#v:evalField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap on the error message type of a Field.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "fieldMapView",
          "package": "digestive-functors",
          "signature": "(v -\u003e w) -\u003e Field v a -\u003e Field w a",
          "source": "src/Text-Digestive-Form-Internal-Field.html#fieldMapView",
          "type": "function"
        },
        "index": {
          "description": "Map on the error message type of Field",
          "hierarchy": "Text Digestive Form Internal Field",
          "module": "Text.Digestive.Form.Internal.Field",
          "name": "fieldMapView",
          "normalized": "(a-\u003eb)-\u003eField a c-\u003eField b c",
          "package": "digestive-functors",
          "partial": "Map View",
          "signature": "(v-\u003ew)-\u003eField v a-\u003eField w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal-Field.html#v:fieldMapView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module mostly meant for internal usage, and might change between minor\n releases.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "Internal",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module mostly meant for internal usage and might change between minor releases",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "Internal",
          "package": "digestive-functors",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase type for a form.\n\u003c/p\u003e\u003cp\u003eThe three type parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ev\u003c/code\u003e: the type for textual information, displayed to the user. For example,\n   error messages are of this type. \u003ccode\u003ev\u003c/code\u003e stands for \u003ca\u003eview\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e: the monad in which validators operate. The classical example is when\n   validating input requires access to a database, in which case this \u003ccode\u003em\u003c/code\u003e\n   should be an instance of \u003ccode\u003eMonadIO\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e: the type of the value returned by the form, used for its Applicative\n   instance.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "Form",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal.html#Form",
          "type": "type"
        },
        "index": {
          "description": "Base type for form The three type parameters are the type for textual information displayed to the user For example error messages are of this type stands for view the monad in which validators operate The classical example is when validating input requires access to database in which case this should be an instance of MonadIO the type of the value returned by the form used for its Applicative instance",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "Form",
          "package": "digestive-functors",
          "partial": "Form",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#t:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbedded tree structure for forms - the basis for deferred evaluation\n and the applicative interface.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "FormTree",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal.html#FormTree",
          "type": "data"
        },
        "index": {
          "description": "Embedded tree structure for forms the basis for deferred evaluation and the applicative interface",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "FormTree",
          "package": "digestive-functors",
          "partial": "Form Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#t:FormTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal",
          "name": "Metadata",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal.html#Metadata",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "Metadata",
          "package": "digestive-functors",
          "partial": "Metadata",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#t:Metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompact type for form labelling\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "Ref",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal.html#Ref",
          "type": "type"
        },
        "index": {
          "description": "Compact type for form labelling",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "Ref",
          "package": "digestive-functors",
          "partial": "Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#t:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue-agnostic Form\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "SomeForm",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal.html#SomeForm",
          "type": "data"
        },
        "index": {
          "description": "Value-agnostic Form",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "SomeForm",
          "package": "digestive-functors",
          "partial": "Some Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#t:SomeForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator to set a name for a subform.\n\u003c/p\u003e",
          "module": "[\"Text.Digestive.Form.Internal\",\"Text.Digestive.Form\"]",
          "name": "(.:)",
          "package": "digestive-functors",
          "signature": "Text -\u003e Form v m a -\u003e Form v m a",
          "source": "src/Text-Digestive-Form-Internal.html#.%3A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:.:\",\"http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:.:\"]"
        },
        "index": {
          "description": "Operator to set name for subform",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "(.:) .:",
          "normalized": "Text-\u003eForm a b c-\u003eForm a b c",
          "package": "digestive-functors",
          "signature": "Text-\u003eForm v m a-\u003eForm v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal",
          "name": "App",
          "package": "digestive-functors",
          "signature": "FormTree t v m (b -\u003e a) -\u003e FormTree t v m b -\u003e FormTree t v m a",
          "source": "src/Text-Digestive-Form-Internal.html#FormTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "App",
          "normalized": "FormTree a b c(d-\u003ee)-\u003eFormTree a b c d-\u003eFormTree a b c e",
          "package": "digestive-functors",
          "partial": "App",
          "signature": "FormTree t v m(b-\u003ea)-\u003eFormTree t v m b-\u003eFormTree t v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal",
          "name": "Disabled",
          "package": "digestive-functors",
          "signature": "Disabled",
          "source": "src/Text-Digestive-Form-Internal.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "Disabled",
          "package": "digestive-functors",
          "partial": "Disabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:Disabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal",
          "name": "List",
          "package": "digestive-functors",
          "signature": "DefaultList (FormTree t v m a) -\u003e FormTree t v m [Int] -\u003e FormTree t v m [a]",
          "source": "src/Text-Digestive-Form-Internal.html#FormTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "List",
          "normalized": "DefaultList(FormTree a b c d)-\u003eFormTree a b c[Int]-\u003eFormTree a b c[d]",
          "package": "digestive-functors",
          "partial": "List",
          "signature": "DefaultList(FormTree t v m a)-\u003eFormTree t v m[Int]-\u003eFormTree t v m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal",
          "name": "Map",
          "package": "digestive-functors",
          "signature": "(b -\u003e m (Result v a)) -\u003e FormTree t v m b -\u003e FormTree t v m a",
          "source": "src/Text-Digestive-Form-Internal.html#FormTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "Map",
          "normalized": "(a-\u003eb(Result c d))-\u003eFormTree e c b a-\u003eFormTree e c b d",
          "package": "digestive-functors",
          "partial": "Map",
          "signature": "(b-\u003em(Result v a))-\u003eFormTree t v m b-\u003eFormTree t v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal",
          "name": "Metadata",
          "package": "digestive-functors",
          "signature": "[Metadata] -\u003e FormTree t v m a -\u003e FormTree t v m a",
          "source": "src/Text-Digestive-Form-Internal.html#FormTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "Metadata",
          "normalized": "[Metadata]-\u003eFormTree a b c d-\u003eFormTree a b c d",
          "package": "digestive-functors",
          "partial": "Metadata",
          "signature": "[Metadata]-\u003eFormTree t v m a-\u003eFormTree t v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:Metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal",
          "name": "Monadic",
          "package": "digestive-functors",
          "signature": "t (FormTree t v m a) -\u003e FormTree t v m a",
          "source": "src/Text-Digestive-Form-Internal.html#FormTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "Monadic",
          "normalized": "a(FormTree a b c d)-\u003eFormTree a b c d",
          "package": "digestive-functors",
          "partial": "Monadic",
          "signature": "t(FormTree t v m a)-\u003eFormTree t v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:Monadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal",
          "name": "Pure",
          "package": "digestive-functors",
          "signature": "Field v a -\u003e FormTree t v m a",
          "source": "src/Text-Digestive-Form-Internal.html#FormTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "Pure",
          "normalized": "Field a b-\u003eFormTree c a d b",
          "package": "digestive-functors",
          "partial": "Pure",
          "signature": "Field v a-\u003eFormTree t v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:Pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.Internal",
          "name": "Ref",
          "package": "digestive-functors",
          "signature": "Ref -\u003e FormTree t v m a -\u003e FormTree t v m a",
          "source": "src/Text-Digestive-Form-Internal.html#FormTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "Ref",
          "normalized": "Ref-\u003eFormTree a b c d-\u003eFormTree a b c d",
          "package": "digestive-functors",
          "partial": "Ref",
          "signature": "Ref-\u003eFormTree t v m a-\u003eFormTree t v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:Ref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Digestive.Form.Internal\",\"Text.Digestive.Form\"]",
          "name": "SomeForm",
          "package": "digestive-functors",
          "signature": "forall a . SomeForm (FormTree Identity v m a)",
          "source": "src/Text-Digestive-Form-Internal.html#SomeForm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:SomeForm\",\"http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:SomeForm\"]"
        },
        "index": {
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "SomeForm",
          "package": "digestive-functors",
          "partial": "Some Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:SomeForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the topmost applicative or index trees if either exists\n otherwise returns an empty list\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "children",
          "package": "digestive-functors",
          "signature": "FormTree Identity v m a -\u003e [SomeForm v m]",
          "source": "src/Text-Digestive-Form-Internal.html#children",
          "type": "function"
        },
        "index": {
          "description": "Returns the topmost applicative or index trees if either exists otherwise returns an empty list",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "children",
          "normalized": "FormTree Identity a b c-\u003e[SomeForm a b]",
          "package": "digestive-functors",
          "signature": "FormTree Identity v m a-\u003e[SomeForm v m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebugging purposes\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "debugFormPaths",
          "package": "digestive-functors",
          "signature": "FormTree Identity v m a -\u003e [Path]",
          "source": "src/Text-Digestive-Form-Internal.html#debugFormPaths",
          "type": "function"
        },
        "index": {
          "description": "Debugging purposes",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "debugFormPaths",
          "normalized": "FormTree Identity a b c-\u003e[Path]",
          "package": "digestive-functors",
          "partial": "Form Paths",
          "signature": "FormTree Identity v m a-\u003e[Path]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:debugFormPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a formtree with a given method and environment.\n Incrementally builds the path based on the set labels and\n evaluates recursively - applying transformations and\n applications with a bottom-up strategy.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "eval",
          "package": "digestive-functors",
          "signature": "Method -\u003e Env m -\u003e FormTree Identity v m a -\u003e m (Result [(Path, v)] a, [(Path, FormInput)])",
          "source": "src/Text-Digestive-Form-Internal.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate formtree with given method and environment Incrementally builds the path based on the set labels and evaluates recursively applying transformations and applications with bottom-up strategy",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "eval",
          "normalized": "Method-\u003eEnv a-\u003eFormTree Identity b a c-\u003ea(Result[(Path,b)]c,[(Path,FormInput)])",
          "package": "digestive-functors",
          "signature": "Method-\u003eEnv m-\u003eFormTree Identity v m a-\u003em(Result[(Path,v)]a,[(Path,FormInput)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap on the error type of a FormTree -\n used to define the Functor instance of \u003ca\u003eView.View\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "formMapView",
          "package": "digestive-functors",
          "signature": "(v -\u003e w) -\u003e FormTree Identity v m a -\u003e FormTree Identity w m a",
          "source": "src/Text-Digestive-Form-Internal.html#formMapView",
          "type": "function"
        },
        "index": {
          "description": "Map on the error type of FormTree used to define the Functor instance of View.View",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "formMapView",
          "normalized": "(a-\u003eb)-\u003eFormTree Identity a c d-\u003eFormTree Identity b c d",
          "package": "digestive-functors",
          "partial": "Map View",
          "signature": "(v-\u003ew)-\u003eFormTree Identity v m a-\u003eFormTree Identity w m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:formMapView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the first/topmost label of a form\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "getRef",
          "package": "digestive-functors",
          "signature": "FormTree Identity v m a -\u003e Maybe Ref",
          "source": "src/Text-Digestive-Form-Internal.html#getRef",
          "type": "function"
        },
        "index": {
          "description": "Return the first topmost label of form",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "getRef",
          "normalized": "FormTree Identity a b c-\u003eMaybe Ref",
          "package": "digestive-functors",
          "partial": "Ref",
          "signature": "FormTree Identity v m a-\u003eMaybe Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:getRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the form(s) at the given path\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "lookupForm",
          "package": "digestive-functors",
          "signature": "Path -\u003e FormTree Identity v m a -\u003e [SomeForm v m]",
          "source": "src/Text-Digestive-Form-Internal.html#lookupForm",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the form at the given path",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "lookupForm",
          "normalized": "Path-\u003eFormTree Identity a b c-\u003e[SomeForm a b]",
          "package": "digestive-functors",
          "partial": "Form",
          "signature": "Path-\u003eFormTree Identity v m a-\u003e[SomeForm v m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:lookupForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003elookupForm\u003c/a\u003e\u003c/code\u003e which also returns all metadata associated with\n the form.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "lookupFormMetadata",
          "package": "digestive-functors",
          "signature": "Path -\u003e FormTree Identity v m a -\u003e [(SomeForm v m, [Metadata])]",
          "source": "src/Text-Digestive-Form-Internal.html#lookupFormMetadata",
          "type": "function"
        },
        "index": {
          "description": "variant of lookupForm which also returns all metadata associated with the form",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "lookupFormMetadata",
          "normalized": "Path-\u003eFormTree Identity a b c-\u003e[(SomeForm a b,[Metadata])]",
          "package": "digestive-functors",
          "partial": "Form Metadata",
          "signature": "Path-\u003eFormTree Identity v m a-\u003e[(SomeForm v m,[Metadata])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:lookupFormMetadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways returns a List - fails if path does not directly reference a list\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "lookupList",
          "package": "digestive-functors",
          "signature": "Path -\u003e FormTree Identity v m a -\u003e SomeForm v m",
          "source": "src/Text-Digestive-Form-Internal.html#lookupList",
          "type": "function"
        },
        "index": {
          "description": "Always returns List fails if path does not directly reference list",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "lookupList",
          "normalized": "Path-\u003eFormTree Identity a b c-\u003eSomeForm a b",
          "package": "digestive-functors",
          "partial": "List",
          "signature": "Path-\u003eFormTree Identity v m a-\u003eSomeForm v m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:lookupList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHide a monadic wrapper\n\u003c/p\u003e",
          "module": "[\"Text.Digestive.Form.Internal\",\"Text.Digestive.Form\"]",
          "name": "monadic",
          "package": "digestive-functors",
          "signature": "m (Form v m a) -\u003e Form v m a",
          "source": "src/Text-Digestive-Form-Internal.html#monadic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:monadic\",\"http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:monadic\"]"
        },
        "index": {
          "description": "Hide monadic wrapper",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "monadic",
          "normalized": "a(Form b a c)-\u003eForm b a c",
          "package": "digestive-functors",
          "signature": "m(Form v m a)-\u003eForm v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:monadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the field at the given path of the tree and apply the evaluation.\n Used in field evaluation functions in \u003ca\u003eView\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "queryField",
          "package": "digestive-functors",
          "signature": "Path -\u003e FormTree Identity v m a -\u003e (forall b.  Field v b -\u003e c) -\u003e c",
          "source": "src/Text-Digestive-Form-Internal.html#queryField",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the field at the given path of the tree and apply the evaluation Used in field evaluation functions in View",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "queryField",
          "normalized": "Path-\u003eFormTree Identity a b c-\u003e(d e Field a f-\u003eg)-\u003eg",
          "package": "digestive-functors",
          "partial": "Field",
          "signature": "Path-\u003eFormTree Identity v m a-\u003e(forall b. Field v b-\u003ec)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:queryField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the topmost untransformed single field, if one exists\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "toField",
          "package": "digestive-functors",
          "signature": "FormTree Identity v m a -\u003e Maybe (SomeField v)",
          "source": "src/Text-Digestive-Form-Internal.html#toField",
          "type": "function"
        },
        "index": {
          "description": "Returns the topmost untransformed single field if one exists",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "toField",
          "normalized": "FormTree Identity a b c-\u003eMaybe(SomeField a)",
          "package": "digestive-functors",
          "partial": "Field",
          "signature": "FormTree Identity v m a-\u003eMaybe(SomeField v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:toField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize a Form to allow operations on the contents\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "toFormTree",
          "package": "digestive-functors",
          "signature": "Form v m a -\u003e m (FormTree Identity v m a)",
          "source": "src/Text-Digestive-Form-Internal.html#toFormTree",
          "type": "function"
        },
        "index": {
          "description": "Normalize Form to allow operations on the contents",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "toFormTree",
          "normalized": "Form a b c-\u003eb(FormTree Identity a b c)",
          "package": "digestive-functors",
          "partial": "Form Tree",
          "signature": "Form v m a-\u003em(FormTree Identity v m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:toFormTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap on the value type\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.Internal",
          "name": "transform",
          "package": "digestive-functors",
          "signature": "(a -\u003e m (Result v b)) -\u003e FormTree t v m a -\u003e FormTree t v m b",
          "source": "src/Text-Digestive-Form-Internal.html#transform",
          "type": "function"
        },
        "index": {
          "description": "Map on the value type",
          "hierarchy": "Text Digestive Form Internal",
          "module": "Text.Digestive.Form.Internal",
          "name": "transform",
          "normalized": "(a-\u003eb(Result c d))-\u003eFormTree e c b a-\u003eFormTree e c b d",
          "package": "digestive-functors",
          "signature": "(a-\u003em(Result v b))-\u003eFormTree t v m a-\u003eFormTree t v m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-Internal.html#v:transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctionality related to index storage and the DefaultList type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive.Form.List",
          "name": "List",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-List.html",
          "type": "module"
        },
        "index": {
          "description": "Functionality related to index storage and the DefaultList type",
          "hierarchy": "Text Digestive Form List",
          "module": "Text.Digestive.Form.List",
          "name": "List",
          "package": "digestive-functors",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list which, when indexed on non-existant positions, returns a default\n value.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.List",
          "name": "DefaultList",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-List.html#DefaultList",
          "type": "data"
        },
        "index": {
          "description": "list which when indexed on non-existant positions returns default value",
          "hierarchy": "Text Digestive Form List",
          "module": "Text.Digestive.Form.List",
          "name": "DefaultList",
          "package": "digestive-functors",
          "partial": "Default List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-List.html#t:DefaultList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form.List",
          "name": "DefaultList",
          "package": "digestive-functors",
          "signature": "DefaultList a [a]",
          "source": "src/Text-Digestive-Form-List.html#DefaultList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form List",
          "module": "Text.Digestive.Form.List",
          "name": "DefaultList",
          "normalized": "DefaultList a[a]",
          "package": "digestive-functors",
          "partial": "Default List",
          "signature": "DefaultList a[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-List.html#v:DefaultList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe indexing of a DefaultList - returns the default value if\n the given index is out of bounds.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.List",
          "name": "defaultListIndex",
          "package": "digestive-functors",
          "signature": "DefaultList a -\u003e Int -\u003e a",
          "source": "src/Text-Digestive-Form-List.html#defaultListIndex",
          "type": "function"
        },
        "index": {
          "description": "Safe indexing of DefaultList returns the default value if the given index is out of bounds",
          "hierarchy": "Text Digestive Form List",
          "module": "Text.Digestive.Form.List",
          "name": "defaultListIndex",
          "normalized": "DefaultList a-\u003eInt-\u003ea",
          "package": "digestive-functors",
          "partial": "List Index",
          "signature": "DefaultList a-\u003eInt-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-List.html#v:defaultListIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey used to store list indices\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.List",
          "name": "indicesRef",
          "package": "digestive-functors",
          "signature": "Text",
          "source": "src/Text-Digestive-Form-List.html#indicesRef",
          "type": "function"
        },
        "index": {
          "description": "Key used to store list indices",
          "hierarchy": "Text Digestive Form List",
          "module": "Text.Digestive.Form.List",
          "name": "indicesRef",
          "package": "digestive-functors",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-List.html#v:indicesRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string of comma-delimited integers to a list.\n Unparseable substrings are left out of the result.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.List",
          "name": "parseIndices",
          "package": "digestive-functors",
          "signature": "Text -\u003e [Int]",
          "source": "src/Text-Digestive-Form-List.html#parseIndices",
          "type": "function"
        },
        "index": {
          "description": "Parse string of comma-delimited integers to list Unparseable substrings are left out of the result",
          "hierarchy": "Text Digestive Form List",
          "module": "Text.Digestive.Form.List",
          "name": "parseIndices",
          "normalized": "Text-\u003e[Int]",
          "package": "digestive-functors",
          "partial": "Indices",
          "signature": "Text-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-List.html#v:parseIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a list of integers as a comma-delimited Text\n\u003c/p\u003e",
          "module": "Text.Digestive.Form.List",
          "name": "unparseIndices",
          "package": "digestive-functors",
          "signature": "[Int] -\u003e Text",
          "source": "src/Text-Digestive-Form-List.html#unparseIndices",
          "type": "function"
        },
        "index": {
          "description": "Serialize list of integers as comma-delimited Text",
          "hierarchy": "Text Digestive Form List",
          "module": "Text.Digestive.Form.List",
          "name": "unparseIndices",
          "normalized": "[Int]-\u003eText",
          "package": "digestive-functors",
          "partial": "Indices",
          "signature": "[Int]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form-List.html#v:unparseIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEnd-user interface - provides the main functionality for\n form creation and validation. For an interface for front-end\n implementation, see \u003ca\u003eView\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive.Form",
          "name": "Form",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form.html",
          "type": "module"
        },
        "index": {
          "description": "End-user interface provides the main functionality for form creation and validation For an interface for front-end implementation see View",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "Form",
          "package": "digestive-functors",
          "partial": "Form",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase type for a form.\n\u003c/p\u003e\u003cp\u003eThe three type parameters are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003ev\u003c/code\u003e: the type for textual information, displayed to the user. For example,\n   error messages are of this type. \u003ccode\u003ev\u003c/code\u003e stands for \u003ca\u003eview\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003em\u003c/code\u003e: the monad in which validators operate. The classical example is when\n   validating input requires access to a database, in which case this \u003ccode\u003em\u003c/code\u003e\n   should be an instance of \u003ccode\u003eMonadIO\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003ea\u003c/code\u003e: the type of the value returned by the form, used for its Applicative\n   instance.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.Digestive.Form",
          "name": "Form",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal.html#Form",
          "type": "type"
        },
        "index": {
          "description": "Base type for form The three type parameters are the type for textual information displayed to the user For example error messages are of this type stands for view the monad in which validators operate The classical example is when validating input requires access to database in which case this should be an instance of MonadIO the type of the value returned by the form used for its Applicative instance",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "Form",
          "package": "digestive-functors",
          "partial": "Form",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#t:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eForm\u003c/a\u003e\u003c/code\u003e with a set, optional default value\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "Formlet",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form.html#Formlet",
          "type": "type"
        },
        "index": {
          "description": "Form with set optional default value",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "Formlet",
          "package": "digestive-functors",
          "partial": "Formlet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#t:Formlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue-agnostic Form\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "SomeForm",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Form-Internal.html#SomeForm",
          "type": "data"
        },
        "index": {
          "description": "Value-agnostic Form",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "SomeForm",
          "package": "digestive-functors",
          "partial": "Some Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#t:SomeForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eFormlet\u003c/a\u003e\u003c/code\u003e for binary choices\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "bool",
          "package": "digestive-functors",
          "signature": "Formlet v m Bool",
          "source": "src/Text-Digestive-Form.html#bool",
          "type": "function"
        },
        "index": {
          "description": "Returns Formlet for binary choices",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "bool",
          "package": "digestive-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidate the results of a form with a simple predicate\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e check \"Can't be empty\" (not . null) (string Nothing)\n\u003c/pre\u003e",
          "module": "Text.Digestive.Form",
          "name": "check",
          "package": "digestive-functors",
          "signature": "v-\u003e (a -\u003e Bool)-\u003e Form v m a-\u003e Form v m a",
          "type": "function"
        },
        "index": {
          "description": "Validate the results of form with simple predicate Example check Can be empty not null string Nothing",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "check",
          "normalized": "a-\u003e(b-\u003eBool)-\u003eForm a c b-\u003eForm a c b",
          "package": "digestive-functors",
          "signature": "v-\u003e(a-\u003eBool)-\u003eForm v m a-\u003eForm v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e which allows monadic validations\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "checkM",
          "package": "digestive-functors",
          "signature": "v -\u003e (a -\u003e m Bool) -\u003e Form v m a -\u003e Form v m a",
          "source": "src/Text-Digestive-Form.html#checkM",
          "type": "function"
        },
        "index": {
          "description": "Version of check which allows monadic validations",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "checkM",
          "normalized": "a-\u003e(b-\u003ec Bool)-\u003eForm a c b-\u003eForm a c b",
          "package": "digestive-functors",
          "signature": "v-\u003e(a-\u003em Bool)-\u003eForm v m a-\u003eForm v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:checkM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eFormlet\u003c/a\u003e\u003c/code\u003e for a value restricted to\n the provided list of value-message tuples\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "choice",
          "package": "digestive-functors",
          "signature": "[(a, v)] -\u003e Formlet v m a",
          "source": "src/Text-Digestive-Form.html#choice",
          "type": "function"
        },
        "index": {
          "description": "Returns Formlet for value restricted to the provided list of value-message tuples",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "choice",
          "normalized": "[(a,b)]-\u003eFormlet b c a",
          "package": "digestive-functors",
          "signature": "[(a,v)]-\u003eFormlet v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes there is no good \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003echoice\u003c/a\u003e\u003c/code\u003e. In this case, you\n can use this function, which takes an index in the list as default.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "choice'",
          "package": "digestive-functors",
          "signature": "[(a, v)] -\u003e Maybe Int -\u003e Form v m a",
          "source": "src/Text-Digestive-Form.html#choice%27",
          "type": "function"
        },
        "index": {
          "description": "Sometimes there is no good Eq instance for choice In this case you can use this function which takes an index in the list as default",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "choice'",
          "normalized": "[(a,b)]-\u003eMaybe Int-\u003eForm b c a",
          "package": "digestive-functors",
          "signature": "[(a,v)]-\u003eMaybe Int-\u003eForm v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:choice-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to assign your own values: these values will be used in the\n resulting HTML instead of the default \u003ccode\u003e[0 ..]\u003c/code\u003e. This fixes some race\n conditions that might otherwise appear, e.g. if new choice items are added to\n some database while a user views and submits the form...\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "choiceWith",
          "package": "digestive-functors",
          "signature": "[(Text, (a, v))] -\u003e Formlet v m a",
          "source": "src/Text-Digestive-Form.html#choiceWith",
          "type": "function"
        },
        "index": {
          "description": "Allows you to assign your own values these values will be used in the resulting HTML instead of the default This fixes some race conditions that might otherwise appear e.g if new choice items are added to some database while user views and submits the form",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "choiceWith",
          "normalized": "[(Text,(a,b))]-\u003eFormlet b c a",
          "package": "digestive-functors",
          "partial": "With",
          "signature": "[(Text,(a,v))]-\u003eFormlet v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:choiceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003echoiceWith\u003c/a\u003e\u003c/code\u003e for when there is no good \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "choiceWith'",
          "package": "digestive-functors",
          "signature": "[(Text, (a, v))] -\u003e Maybe Int -\u003e Form v m a",
          "source": "src/Text-Digestive-Form.html#choiceWith%27",
          "type": "function"
        },
        "index": {
          "description": "version of choiceWith for when there is no good Eq instance",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "choiceWith'",
          "normalized": "[(Text,(a,b))]-\u003eMaybe Int-\u003eForm b c a",
          "package": "digestive-functors",
          "partial": "With'",
          "signature": "[(Text,(a,v))]-\u003eMaybe Int-\u003eForm v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:choiceWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form",
          "name": "dateFormlet",
          "package": "digestive-functors",
          "signature": "String-\u003e Formlet Text m Day",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "dateFormlet",
          "normalized": "String-\u003eFormlet Text a Day",
          "package": "digestive-functors",
          "partial": "Formlet",
          "signature": "String-\u003eFormlet Text m Day",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:dateFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables a form\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "disable",
          "package": "digestive-functors",
          "signature": "Form v m a -\u003e Form v m a",
          "source": "src/Text-Digestive-Form.html#disable",
          "type": "function"
        },
        "index": {
          "description": "Disables form",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "disable",
          "normalized": "Form a b c-\u003eForm a b c",
          "package": "digestive-functors",
          "signature": "Form v m a-\u003eForm v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:disable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eFormlet\u003c/a\u003e\u003c/code\u003e for file selection\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "file",
          "package": "digestive-functors",
          "signature": "Form v m (Maybe FilePath)",
          "source": "src/Text-Digestive-Form.html#file",
          "type": "function"
        },
        "index": {
          "description": "Returns Formlet for file selection",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "file",
          "package": "digestive-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eFormlet\u003c/a\u003e\u003c/code\u003e for named groups of choices.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "groupedChoice",
          "package": "digestive-functors",
          "signature": "[(Text, [(a, v)])] -\u003e Formlet v m a",
          "source": "src/Text-Digestive-Form.html#groupedChoice",
          "type": "function"
        },
        "index": {
          "description": "Returns Formlet for named groups of choices",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "groupedChoice",
          "normalized": "[(Text,[(a,b)])]-\u003eFormlet b c a",
          "package": "digestive-functors",
          "partial": "Choice",
          "signature": "[(Text,[(a,v)])]-\u003eFormlet v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:groupedChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes there is no good \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003echoice\u003c/a\u003e\u003c/code\u003e. In this case, you\n can use this function, which takes an index in the list as default.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "groupedChoice'",
          "package": "digestive-functors",
          "signature": "[(Text, [(a, v)])] -\u003e Maybe Int -\u003e Form v m a",
          "source": "src/Text-Digestive-Form.html#groupedChoice%27",
          "type": "function"
        },
        "index": {
          "description": "Sometimes there is no good Eq instance for choice In this case you can use this function which takes an index in the list as default",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "groupedChoice'",
          "normalized": "[(Text,[(a,b)])]-\u003eMaybe Int-\u003eForm b c a",
          "package": "digestive-functors",
          "partial": "Choice'",
          "signature": "[(Text,[(a,v)])]-\u003eMaybe Int-\u003eForm v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:groupedChoice-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to assign your own values: these values will be used in the\n resulting HTML instead of the default \u003ccode\u003e[0 ..]\u003c/code\u003e. This fixes some race\n conditions that might otherwise appear, e.g. if new choice items are added to\n some database while a user views and submits the form...\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "groupedChoiceWith",
          "package": "digestive-functors",
          "signature": "[(Text, [(Text, (a, v))])] -\u003e Formlet v m a",
          "source": "src/Text-Digestive-Form.html#groupedChoiceWith",
          "type": "function"
        },
        "index": {
          "description": "Allows you to assign your own values these values will be used in the resulting HTML instead of the default This fixes some race conditions that might otherwise appear e.g if new choice items are added to some database while user views and submits the form",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "groupedChoiceWith",
          "normalized": "[(Text,[(Text,(a,b))])]-\u003eFormlet b c a",
          "package": "digestive-functors",
          "partial": "Choice With",
          "signature": "[(Text,[(Text,(a,v))])]-\u003eFormlet v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:groupedChoiceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow-level support for grouped choice.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "groupedChoiceWith'",
          "package": "digestive-functors",
          "signature": "[(Text, [(Text, (a, v))])] -\u003e Maybe Int -\u003e Form v m a",
          "source": "src/Text-Digestive-Form.html#groupedChoiceWith%27",
          "type": "function"
        },
        "index": {
          "description": "Low-level support for grouped choice",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "groupedChoiceWith'",
          "normalized": "[(Text,[(Text,(a,b))])]-\u003eMaybe Int-\u003eForm b c a",
          "package": "digestive-functors",
          "partial": "Choice With'",
          "signature": "[(Text,[(Text,(a,v))])]-\u003eMaybe Int-\u003eForm v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:groupedChoiceWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDynamic lists\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "listOf",
          "package": "digestive-functors",
          "signature": "Formlet v m a -\u003e Formlet v m [a]",
          "source": "src/Text-Digestive-Form.html#listOf",
          "type": "function"
        },
        "index": {
          "description": "Dynamic lists",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "listOf",
          "normalized": "Formlet a b c-\u003eFormlet a b[c]",
          "package": "digestive-functors",
          "partial": "Of",
          "signature": "Formlet v m a-\u003eFormlet v m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:listOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form",
          "name": "localTimeFormlet",
          "package": "digestive-functors",
          "signature": "String-\u003e String-\u003e Formlet Text m LocalTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "localTimeFormlet",
          "normalized": "String-\u003eString-\u003eFormlet Text a LocalTime",
          "package": "digestive-functors",
          "partial": "Time Formlet",
          "signature": "String-\u003eString-\u003eFormlet Text m LocalTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:localTimeFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form",
          "name": "optionalDateFormlet",
          "package": "digestive-functors",
          "signature": "String-\u003e Maybe Day-\u003e Form Text m (Maybe Day)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "optionalDateFormlet",
          "normalized": "String-\u003eMaybe Day-\u003eForm Text a(Maybe Day)",
          "package": "digestive-functors",
          "partial": "Date Formlet",
          "signature": "String-\u003eMaybe Day-\u003eForm Text m(Maybe Day)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:optionalDateFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form",
          "name": "optionalLocalTimeFormlet",
          "package": "digestive-functors",
          "signature": "String-\u003e String-\u003e Maybe LocalTime-\u003e Form Text m (Maybe LocalTime)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "optionalLocalTimeFormlet",
          "normalized": "String-\u003eString-\u003eMaybe LocalTime-\u003eForm Text a(Maybe LocalTime)",
          "package": "digestive-functors",
          "partial": "Local Time Formlet",
          "signature": "String-\u003eString-\u003eMaybe LocalTime-\u003eForm Text m(Maybe LocalTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:optionalLocalTimeFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ca\u003eoptionalText\u003c/a\u003e\u003c/code\u003e, but uses Strings\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "optionalString",
          "package": "digestive-functors",
          "signature": "Maybe String -\u003e Form v m (Maybe String)",
          "source": "src/Text-Digestive-Form.html#optionalString",
          "type": "function"
        },
        "index": {
          "description": "Identical to optionalText but uses Strings",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "optionalString",
          "normalized": "Maybe String-\u003eForm a b(Maybe String)",
          "package": "digestive-functors",
          "partial": "String",
          "signature": "Maybe String-\u003eForm v m(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:optionalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ccode\u003e\u003ca\u003eoptionalText\u003c/a\u003e\u003c/code\u003e for parseable and serializable values.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "optionalStringRead",
          "package": "digestive-functors",
          "signature": "v -\u003e Maybe a -\u003e Form v m (Maybe a)",
          "source": "src/Text-Digestive-Form.html#optionalStringRead",
          "type": "function"
        },
        "index": {
          "description": "Identical to optionalText for parseable and serializable values",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "optionalStringRead",
          "normalized": "a-\u003eMaybe b-\u003eForm a c(Maybe b)",
          "package": "digestive-functors",
          "partial": "String Read",
          "signature": "v-\u003eMaybe a-\u003eForm v m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:optionalStringRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a text form with an optional default text which\n returns nothing if no optional text was set, and no input\n was retrieved.\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "optionalText",
          "package": "digestive-functors",
          "signature": "Maybe Text -\u003e Form v m (Maybe Text)",
          "source": "src/Text-Digestive-Form.html#optionalText",
          "type": "function"
        },
        "index": {
          "description": "Create text form with an optional default text which returns nothing if no optional text was set and no input was retrieved",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "optionalText",
          "normalized": "Maybe Text-\u003eForm a b(Maybe Text)",
          "package": "digestive-functors",
          "partial": "Text",
          "signature": "Maybe Text-\u003eForm v m(Maybe Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:optionalText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form",
          "name": "optionalTimeFormlet",
          "package": "digestive-functors",
          "signature": "String-\u003e Maybe TimeOfDay-\u003e Form Text m (Maybe TimeOfDay)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "optionalTimeFormlet",
          "normalized": "String-\u003eMaybe TimeOfDay-\u003eForm Text a(Maybe TimeOfDay)",
          "package": "digestive-functors",
          "partial": "Time Formlet",
          "signature": "String-\u003eMaybe TimeOfDay-\u003eForm Text m(Maybe TimeOfDay)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:optionalTimeFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form",
          "name": "optionalUtcTimeFormlet",
          "package": "digestive-functors",
          "signature": "String-\u003e String-\u003e TimeZone-\u003e Maybe UTCTime-\u003e Form Text m (Maybe UTCTime)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "optionalUtcTimeFormlet",
          "normalized": "String-\u003eString-\u003eTimeZone-\u003eMaybe UTCTime-\u003eForm Text a(Maybe UTCTime)",
          "package": "digestive-functors",
          "partial": "Utc Time Formlet",
          "signature": "String-\u003eString-\u003eTimeZone-\u003eMaybe UTCTime-\u003eForm Text m(Maybe UTCTime)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:optionalUtcTimeFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentical to \u003ca\u003etext\u003c/a\u003e but takes a String\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "string",
          "package": "digestive-functors",
          "signature": "Formlet v m String",
          "source": "src/Text-Digestive-Form.html#string",
          "type": "function"
        },
        "index": {
          "description": "Identical to text but takes String",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "string",
          "package": "digestive-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eFormlet\u003c/a\u003e\u003c/code\u003e for a parseable and serializable value type\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "stringRead",
          "package": "digestive-functors",
          "signature": "v -\u003e Formlet v m a",
          "source": "src/Text-Digestive-Form.html#stringRead",
          "type": "function"
        },
        "index": {
          "description": "Returns Formlet for parseable and serializable value type",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "stringRead",
          "normalized": "a-\u003eFormlet a b c",
          "package": "digestive-functors",
          "partial": "Read",
          "signature": "v-\u003eFormlet v m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:stringRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eFormlet\u003c/a\u003e\u003c/code\u003e which may optionally take a default text\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "text",
          "package": "digestive-functors",
          "signature": "Formlet v m Text",
          "source": "src/Text-Digestive-Form.html#text",
          "type": "function"
        },
        "index": {
          "description": "Returns Formlet which may optionally take default text",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "text",
          "package": "digestive-functors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form",
          "name": "timeFormlet",
          "package": "digestive-functors",
          "signature": "String-\u003e Formlet Text m TimeOfDay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "timeFormlet",
          "normalized": "String-\u003eFormlet Text a TimeOfDay",
          "package": "digestive-functors",
          "partial": "Formlet",
          "signature": "String-\u003eFormlet Text m TimeOfDay",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:timeFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Form",
          "name": "utcTimeFormlet",
          "package": "digestive-functors",
          "signature": "String-\u003e String-\u003e TimeZone-\u003e Formlet Text m UTCTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "utcTimeFormlet",
          "normalized": "String-\u003eString-\u003eTimeZone-\u003eFormlet Text a UTCTime",
          "package": "digestive-functors",
          "partial": "Time Formlet",
          "signature": "String-\u003eString-\u003eTimeZone-\u003eFormlet Text m UTCTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:utcTimeFormlet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an extension of \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e that can be used to apply transformations\n that optionally fail\n\u003c/p\u003e\u003cp\u003eExample: taking the first character of an input string\n\u003c/p\u003e\u003cpre\u003e head' :: String -\u003e Result String Char\n head' []      = Error \"Is empty\"\n head' (x : _) = Success x\n\n char :: Monad m =\u003e Form m String Char\n char = validate head' (string Nothing)\n\u003c/pre\u003e",
          "module": "Text.Digestive.Form",
          "name": "validate",
          "package": "digestive-functors",
          "signature": "(a -\u003e Result v b) -\u003e Form v m a -\u003e Form v m b",
          "source": "src/Text-Digestive-Form.html#validate",
          "type": "function"
        },
        "index": {
          "description": "This is an extension of check that can be used to apply transformations that optionally fail Example taking the first character of an input string head String Result String Char head Error Is empty head Success char Monad Form String Char char validate head string Nothing",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "validate",
          "normalized": "(a-\u003eResult b c)-\u003eForm b d a-\u003eForm b d c",
          "package": "digestive-functors",
          "signature": "(a-\u003eResult v b)-\u003eForm v m a-\u003eForm v m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:validate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion of \u003ccode\u003e\u003ca\u003evalidate\u003c/a\u003e\u003c/code\u003e which allows monadic validations\n\u003c/p\u003e",
          "module": "Text.Digestive.Form",
          "name": "validateM",
          "package": "digestive-functors",
          "signature": "(a -\u003e m (Result v b)) -\u003e Form v m a -\u003e Form v m b",
          "source": "src/Text-Digestive-Form.html#validateM",
          "type": "function"
        },
        "index": {
          "description": "Version of validate which allows monadic validations",
          "hierarchy": "Text Digestive Form",
          "module": "Text.Digestive.Form",
          "name": "validateM",
          "normalized": "(a-\u003eb(Result c d))-\u003eForm c b a-\u003eForm c b d",
          "package": "digestive-functors",
          "signature": "(a-\u003em(Result v b))-\u003eForm v m a-\u003eForm v m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Form.html#v:validateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains utilities for\n creating text fragments to identify forms.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive.Ref",
          "name": "Ref",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Ref.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains utilities for creating text fragments to identify forms",
          "hierarchy": "Text Digestive Ref",
          "module": "Text.Digestive.Ref",
          "name": "Ref",
          "package": "digestive-functors",
          "partial": "Ref",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Ref.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an arbitrary text value (possibly containing spaces, dots etc. to\n a text value that can safely be used as an identifier in forms.\n\u003c/p\u003e",
          "module": "Text.Digestive.Ref",
          "name": "makeRef",
          "package": "digestive-functors",
          "signature": "Text -\u003e Text",
          "source": "src/Text-Digestive-Ref.html#makeRef",
          "type": "function"
        },
        "index": {
          "description": "Convert an arbitrary text value possibly containing spaces dots etc to text value that can safely be used as an identifier in forms",
          "hierarchy": "Text Digestive Ref",
          "module": "Text.Digestive.Ref",
          "name": "makeRef",
          "normalized": "Text-\u003eText",
          "package": "digestive-functors",
          "partial": "Ref",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Ref.html#v:makeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an infinite list of refs.\n\u003c/p\u003e",
          "module": "Text.Digestive.Ref",
          "name": "makeRefs",
          "package": "digestive-functors",
          "signature": "[Text]",
          "source": "src/Text-Digestive-Ref.html#makeRefs",
          "type": "function"
        },
        "index": {
          "description": "Create an infinite list of refs",
          "hierarchy": "Text Digestive Ref",
          "module": "Text.Digestive.Ref",
          "name": "makeRefs",
          "normalized": "[Text]",
          "package": "digestive-functors",
          "partial": "Refs",
          "signature": "[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Ref.html#v:makeRefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCore types used internally\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive.Types",
          "name": "Types",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Core types used internally",
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "Types",
          "package": "digestive-functors",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn environment (e.g. a server) from which we can read input parameters. A\n single key might be associated with multiple text values (multi-select).\n\u003c/p\u003e",
          "module": "Text.Digestive.Types",
          "name": "Env",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Types.html#Env",
          "type": "type"
        },
        "index": {
          "description": "An environment e.g server from which we can read input parameters single key might be associated with multiple text values multi-select",
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "Env",
          "package": "digestive-functors",
          "partial": "Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#t:Env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe different input types sent by the browser\n\u003c/p\u003e",
          "module": "Text.Digestive.Types",
          "name": "FormInput",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Types.html#FormInput",
          "type": "data"
        },
        "index": {
          "description": "The different input types sent by the browser",
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "FormInput",
          "package": "digestive-functors",
          "partial": "Form Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#t:FormInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HTTP methods\n\u003c/p\u003e",
          "module": "Text.Digestive.Types",
          "name": "Method",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Types.html#Method",
          "type": "data"
        },
        "index": {
          "description": "The HTTP methods",
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "Method",
          "package": "digestive-functors",
          "partial": "Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#t:Method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a path to a subform\n\u003c/p\u003e",
          "module": "Text.Digestive.Types",
          "name": "Path",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Types.html#Path",
          "type": "type"
        },
        "index": {
          "description": "Describes path to subform",
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "Path",
          "package": "digestive-functors",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mostly internally used type for representing Success/Error, with a\n special applicative instance\n\u003c/p\u003e",
          "module": "Text.Digestive.Types",
          "name": "Result",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Types.html#Result",
          "type": "data"
        },
        "index": {
          "description": "mostly internally used type for representing Success Error with special applicative instance",
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "Result",
          "package": "digestive-functors",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Types",
          "name": "Error",
          "package": "digestive-functors",
          "signature": "Error v",
          "source": "src/Text-Digestive-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "Error",
          "package": "digestive-functors",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Types",
          "name": "FileInput",
          "package": "digestive-functors",
          "signature": "FileInput FilePath",
          "source": "src/Text-Digestive-Types.html#FormInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "FileInput",
          "package": "digestive-functors",
          "partial": "File Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#v:FileInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Types",
          "name": "Get",
          "package": "digestive-functors",
          "signature": "Get",
          "source": "src/Text-Digestive-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "Get",
          "package": "digestive-functors",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#v:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Types",
          "name": "Post",
          "package": "digestive-functors",
          "signature": "Post",
          "source": "src/Text-Digestive-Types.html#Method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "Post",
          "package": "digestive-functors",
          "partial": "Post",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#v:Post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Types",
          "name": "Success",
          "package": "digestive-functors",
          "signature": "Success a",
          "source": "src/Text-Digestive-Types.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "Success",
          "package": "digestive-functors",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.Types",
          "name": "TextInput",
          "package": "digestive-functors",
          "signature": "TextInput Text",
          "source": "src/Text-Digestive-Types.html#FormInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "TextInput",
          "package": "digestive-functors",
          "partial": "Text Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#v:TextInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Digestive.Types",
          "name": "fromPath",
          "package": "digestive-functors",
          "signature": "Path -\u003e Text",
          "source": "src/Text-Digestive-Types.html#fromPath",
          "type": "function"
        },
        "index": {
          "description": "Serialize Path to Text",
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "fromPath",
          "normalized": "Path-\u003eText",
          "package": "digestive-functors",
          "partial": "Path",
          "signature": "Path-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#v:fromPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over the error type of a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Digestive.Types",
          "name": "resultMapError",
          "package": "digestive-functors",
          "signature": "(v -\u003e w) -\u003e Result v a -\u003e Result w a",
          "source": "src/Text-Digestive-Types.html#resultMapError",
          "type": "function"
        },
        "index": {
          "description": "Map over the error type of Result",
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "resultMapError",
          "normalized": "(a-\u003eb)-\u003eResult a c-\u003eResult b c",
          "package": "digestive-functors",
          "partial": "Map Error",
          "signature": "(v-\u003ew)-\u003eResult v a-\u003eResult w a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#v:resultMapError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e from some text\n\u003c/p\u003e",
          "module": "Text.Digestive.Types",
          "name": "toPath",
          "package": "digestive-functors",
          "signature": "Text -\u003e Path",
          "source": "src/Text-Digestive-Types.html#toPath",
          "type": "function"
        },
        "index": {
          "description": "Create Path from some text",
          "hierarchy": "Text Digestive Types",
          "module": "Text.Digestive.Types",
          "name": "toPath",
          "normalized": "Text-\u003ePath",
          "package": "digestive-functors",
          "partial": "Path",
          "signature": "Text-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Types.html#v:toPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for safe failable parsing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive.Util",
          "name": "Util",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-Util.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for safe failable parsing",
          "hierarchy": "Text Digestive Util",
          "module": "Text.Digestive.Util",
          "name": "Util",
          "package": "digestive-functors",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Text.Digestive.Util",
          "name": "readMaybe",
          "package": "digestive-functors",
          "signature": "String -\u003e Maybe a",
          "source": "src/Text-Digestive-Util.html#readMaybe",
          "type": "function"
        },
        "index": {
          "description": "read in the Maybe monad",
          "hierarchy": "Text Digestive Util",
          "module": "Text.Digestive.Util",
          "name": "readMaybe",
          "normalized": "String-\u003eMaybe a",
          "package": "digestive-functors",
          "partial": "Maybe",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-Util.html#v:readMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides functionality for frontend and backend integration.\n\u003c/p\u003e\u003cp\u003eThis module contains functions used to glue form handling to\n particular server implementations and view libraries, defining\n the standard behaviour for handling GET and POST requests.\n\u003c/p\u003e\u003cp\u003eField accessors can be used to write frontend libraries,\n mapping field values to concrete elements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive.View",
          "name": "View",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-View.html",
          "type": "module"
        },
        "index": {
          "description": "Provides functionality for frontend and backend integration This module contains functions used to glue form handling to particular server implementations and view libraries defining the standard behaviour for handling GET and POST requests Field accessors can be used to write frontend libraries mapping field values to concrete elements",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "View",
          "package": "digestive-functors",
          "partial": "View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinalized form - handles the form, error messages and input.\n Internally handles the addressing of individual fields.\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "View",
          "package": "digestive-functors",
          "source": "src/Text-Digestive-View.html#View",
          "type": "data"
        },
        "index": {
          "description": "Finalized form handles the form error messages and input Internally handles the addressing of individual fields",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "View",
          "package": "digestive-functors",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.View",
          "name": "View",
          "package": "digestive-functors",
          "signature": "View",
          "source": "src/Text-Digestive-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "View",
          "package": "digestive-functors",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine an absolute \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e for a field in the form\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "absolutePath",
          "package": "digestive-functors",
          "signature": "Text -\u003e View v -\u003e Path",
          "source": "src/Text-Digestive-View.html#absolutePath",
          "type": "function"
        },
        "index": {
          "description": "Determine an absolute Path for field in the form",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "absolutePath",
          "normalized": "Text-\u003eView a-\u003ePath",
          "package": "digestive-functors",
          "partial": "Path",
          "signature": "Text-\u003eView v-\u003ePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:absolutePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine an absolute path and call \u003ccode\u003e\u003ca\u003efromPath\u003c/a\u003e\u003c/code\u003e on it. Useful if you're\n writing a view library...\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "absoluteRef",
          "package": "digestive-functors",
          "signature": "Text -\u003e View v -\u003e Text",
          "source": "src/Text-Digestive-View.html#absoluteRef",
          "type": "function"
        },
        "index": {
          "description": "Determine an absolute path and call fromPath on it Useful if you re writing view library",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "absoluteRef",
          "normalized": "Text-\u003eView a-\u003eText",
          "package": "digestive-functors",
          "partial": "Ref",
          "signature": "Text-\u003eView v-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:absoluteRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all errors related to the form, and its children, pointed\n to by the given serialized Path.\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "childErrors",
          "package": "digestive-functors",
          "signature": "Text -\u003e View v -\u003e [v]",
          "source": "src/Text-Digestive-View.html#childErrors",
          "type": "function"
        },
        "index": {
          "description": "Returns all errors related to the form and its children pointed to by the given serialized Path",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "childErrors",
          "normalized": "Text-\u003eView a-\u003e[a]",
          "package": "digestive-functors",
          "partial": "Errors",
          "signature": "Text-\u003eView v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:childErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve all paths of the contained form\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "debugViewPaths",
          "package": "digestive-functors",
          "signature": "View v -\u003e [Path]",
          "source": "src/Text-Digestive-View.html#debugViewPaths",
          "type": "function"
        },
        "index": {
          "description": "Retrieve all paths of the contained form",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "debugViewPaths",
          "normalized": "View a-\u003e[Path]",
          "package": "digestive-functors",
          "partial": "View Paths",
          "signature": "View v-\u003e[Path]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:debugViewPaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all errors related to the form corresponding to the given\n serialized Path\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "errors",
          "package": "digestive-functors",
          "signature": "Text -\u003e View v -\u003e [v]",
          "source": "src/Text-Digestive-View.html#errors",
          "type": "function"
        },
        "index": {
          "description": "Returns all errors related to the form corresponding to the given serialized Path",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "errors",
          "normalized": "Text-\u003eView a-\u003e[a]",
          "package": "digestive-functors",
          "signature": "Text-\u003eView v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True/False based on the field referred to by the given\n serialized Path.\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "fieldInputBool",
          "package": "digestive-functors",
          "signature": "forall v.  Text -\u003e View v -\u003e Bool",
          "source": "src/Text-Digestive-View.html#fieldInputBool",
          "type": "function"
        },
        "index": {
          "description": "Returns True False based on the field referred to by the given serialized Path",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "fieldInputBool",
          "normalized": "a b Text-\u003eView c-\u003eBool",
          "package": "digestive-functors",
          "partial": "Input Bool",
          "signature": "forall v. Text-\u003eView v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:fieldInputBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of (identifier, view, selected?)\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "fieldInputChoice",
          "package": "digestive-functors",
          "signature": "forall v.  Text -\u003e View v -\u003e [(Text, v, Bool)]",
          "source": "src/Text-Digestive-View.html#fieldInputChoice",
          "type": "function"
        },
        "index": {
          "description": "Returns list of identifier view selected",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "fieldInputChoice",
          "normalized": "a b Text-\u003eView c-\u003e[(Text,c,Bool)]",
          "package": "digestive-functors",
          "partial": "Input Choice",
          "signature": "forall v. Text-\u003eView v-\u003e[(Text,v,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:fieldInputChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of (groupName, [(identifier, view, selected?)])\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "fieldInputChoiceGroup",
          "package": "digestive-functors",
          "signature": "forall v.  Text -\u003e View v -\u003e [(Text, [(Text, v, Bool)])]",
          "source": "src/Text-Digestive-View.html#fieldInputChoiceGroup",
          "type": "function"
        },
        "index": {
          "description": "Returns list of groupName identifier view selected",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "fieldInputChoiceGroup",
          "normalized": "a b Text-\u003eView c-\u003e[(Text,[(Text,c,Bool)])]",
          "package": "digestive-functors",
          "partial": "Input Choice Group",
          "signature": "forall v. Text-\u003eView v-\u003e[(Text,[(Text,v,Bool)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:fieldInputChoiceGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the FilePath referred to by the given serialized path, if set.\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "fieldInputFile",
          "package": "digestive-functors",
          "signature": "forall v.  Text -\u003e View v -\u003e Maybe FilePath",
          "source": "src/Text-Digestive-View.html#fieldInputFile",
          "type": "function"
        },
        "index": {
          "description": "Return the FilePath referred to by the given serialized path if set",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "fieldInputFile",
          "normalized": "a b Text-\u003eView c-\u003eMaybe FilePath",
          "package": "digestive-functors",
          "partial": "Input File",
          "signature": "forall v. Text-\u003eView v-\u003eMaybe FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:fieldInputFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the text data at the position referred to by the given\n serialized Path.\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "fieldInputText",
          "package": "digestive-functors",
          "signature": "forall v.  Text -\u003e View v -\u003e Text",
          "source": "src/Text-Digestive-View.html#fieldInputText",
          "type": "function"
        },
        "index": {
          "description": "Return the text data at the position referred to by the given serialized Path",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "fieldInputText",
          "normalized": "a b Text-\u003eView c-\u003eText",
          "package": "digestive-functors",
          "partial": "Input Text",
          "signature": "forall v. Text-\u003eView v-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:fieldInputText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServe up a form for a GET request - no form input\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "getForm",
          "package": "digestive-functors",
          "signature": "Text -\u003e Form v m a -\u003e m (View v)",
          "source": "src/Text-Digestive-View.html#getForm",
          "type": "function"
        },
        "index": {
          "description": "Serve up form for GET request no form input",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "getForm",
          "normalized": "Text-\u003eForm a b c-\u003eb(View a)",
          "package": "digestive-functors",
          "partial": "Form",
          "signature": "Text-\u003eForm v m a-\u003em(View v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:getForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns sub views referred to by dynamic list indices\n at the given serialized path.\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "listSubViews",
          "package": "digestive-functors",
          "signature": "Text -\u003e View v -\u003e [View v]",
          "source": "src/Text-Digestive-View.html#listSubViews",
          "type": "function"
        },
        "index": {
          "description": "Returns sub views referred to by dynamic list indices at the given serialized path",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "listSubViews",
          "normalized": "Text-\u003eView a-\u003e[View a]",
          "package": "digestive-functors",
          "partial": "Sub Views",
          "signature": "Text-\u003eView v-\u003e[View v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:listSubViews"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a sub view\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "makeListSubView",
          "package": "digestive-functors",
          "signature": "Text-\u003e Int-\u003e View v-\u003e View v",
          "type": "function"
        },
        "index": {
          "description": "Creates sub view",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "makeListSubView",
          "normalized": "Text-\u003eInt-\u003eView a-\u003eView a",
          "package": "digestive-functors",
          "partial": "List Sub View",
          "signature": "Text-\u003eInt-\u003eView v-\u003eView v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:makeListSubView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle a form for a POST request - evaluate with the given environment\n and return the result.\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "postForm",
          "package": "digestive-functors",
          "signature": "Text -\u003e Form v m a -\u003e (FormEncType -\u003e m (Env m)) -\u003e m (View v, Maybe a)",
          "source": "src/Text-Digestive-View.html#postForm",
          "type": "function"
        },
        "index": {
          "description": "Handle form for POST request evaluate with the given environment and return the result",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "postForm",
          "normalized": "Text-\u003eForm a b c-\u003e(FormEncType-\u003eb(Env b))-\u003eb(View a,Maybe c)",
          "package": "digestive-functors",
          "partial": "Form",
          "signature": "Text-\u003eForm v m a-\u003e(FormEncType-\u003em(Env m))-\u003em(View v,Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:postForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the subview of a view matching the given serialized \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "subView",
          "package": "digestive-functors",
          "signature": "Text -\u003e View v -\u003e View v",
          "source": "src/Text-Digestive-View.html#subView",
          "type": "function"
        },
        "index": {
          "description": "Returns the subview of view matching the given serialized Path",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "subView",
          "normalized": "Text-\u003eView a-\u003eView a",
          "package": "digestive-functors",
          "partial": "View",
          "signature": "Text-\u003eView v-\u003eView v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:subView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all immediate subviews of a view\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "subViews",
          "package": "digestive-functors",
          "signature": "View v -\u003e [View v]",
          "source": "src/Text-Digestive-View.html#subViews",
          "type": "function"
        },
        "index": {
          "description": "Returns all immediate subviews of view",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "subViews",
          "normalized": "View a-\u003e[View a]",
          "package": "digestive-functors",
          "partial": "Views",
          "signature": "View v-\u003e[View v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:subViews"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.View",
          "name": "viewContext",
          "package": "digestive-functors",
          "signature": "Path",
          "source": "src/Text-Digestive-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "viewContext",
          "package": "digestive-functors",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:viewContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.View",
          "name": "viewDisabled",
          "package": "digestive-functors",
          "signature": "Text -\u003e View v -\u003e Bool",
          "source": "src/Text-Digestive-View.html#viewDisabled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "viewDisabled",
          "normalized": "Text-\u003eView a-\u003eBool",
          "package": "digestive-functors",
          "partial": "Disabled",
          "signature": "Text-\u003eView v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:viewDisabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the content type of the View - depends on contained fields\n\u003c/p\u003e",
          "module": "Text.Digestive.View",
          "name": "viewEncType",
          "package": "digestive-functors",
          "signature": "View v -\u003e FormEncType",
          "source": "src/Text-Digestive-View.html#viewEncType",
          "type": "function"
        },
        "index": {
          "description": "Returns the content type of the View depends on contained fields",
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "viewEncType",
          "normalized": "View a-\u003eFormEncType",
          "package": "digestive-functors",
          "partial": "Enc Type",
          "signature": "View v-\u003eFormEncType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:viewEncType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.View",
          "name": "viewErrors",
          "package": "digestive-functors",
          "signature": "[(Path, v)]",
          "source": "src/Text-Digestive-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "viewErrors",
          "normalized": "[(Path,a)]",
          "package": "digestive-functors",
          "partial": "Errors",
          "signature": "[(Path,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:viewErrors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.View",
          "name": "viewForm",
          "package": "digestive-functors",
          "signature": "FormTree Identity v m a",
          "source": "src/Text-Digestive-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "viewForm",
          "package": "digestive-functors",
          "partial": "Form",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:viewForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.View",
          "name": "viewInput",
          "package": "digestive-functors",
          "signature": "[(Path, FormInput)]",
          "source": "src/Text-Digestive-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "viewInput",
          "normalized": "[(Path,FormInput)]",
          "package": "digestive-functors",
          "partial": "Input",
          "signature": "[(Path,FormInput)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:viewInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.View",
          "name": "viewMethod",
          "package": "digestive-functors",
          "signature": "Method",
          "source": "src/Text-Digestive-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "viewMethod",
          "package": "digestive-functors",
          "partial": "Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:viewMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Digestive.View",
          "name": "viewName",
          "package": "digestive-functors",
          "signature": "Text",
          "source": "src/Text-Digestive-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Digestive View",
          "module": "Text.Digestive.View",
          "name": "viewName",
          "package": "digestive-functors",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive-View.html#v:viewName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTutorial:\n \u003ca\u003ehttp://github.com/jaspervdj/digestive-functors/blob/master/examples/tutorial.lhs\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Digestive",
          "name": "Digestive",
          "package": "digestive-functors",
          "source": "src/Text-Digestive.html",
          "type": "module"
        },
        "index": {
          "description": "Tutorial http github.com jaspervdj digestive-functors blob master examples tutorial.lhs",
          "hierarchy": "Text Digestive",
          "module": "Text.Digestive",
          "name": "Digestive",
          "package": "digestive-functors",
          "partial": "Digestive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digestive-functors/docs/Text-Digestive.html#"
      }
    }
  ]
]