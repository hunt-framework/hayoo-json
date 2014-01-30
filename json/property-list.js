[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe internal \"algebraic\" interface for working with property-list-like\n things.  The classes defined here are the basis for a very general system\n supporting transformations between many property-list representations,\n including both internal and external formats.  The transformations are\n based on algebra and are very well-behaved mathematically.  It is possible\n to \"fuse\" operations so that, for example, reading from XML and writing\n to a text plist can be done without creating any intermediate \n representations other than those used by the XML parser and the text \n renderer.  Or, expressions using the \"smart constructors\" can be\n evaluated to directly synthesize XML-formatted plists, or the view-pattern\n destructors can be used to directly analyze them.\n\u003c/p\u003e\u003cp\u003eThe interface defined in this module is very heavily influenced by \n category-theoretical constructions.  In particular, F-algebras and \n F-coalgebras, initiality, and terminality.  For those not familiar with\n these concepts, this will probably be quite incomprehensible.  Sorry\n about that.  The basic idea, though, is the use of the \u003ccode\u003e\u003ca\u003ePropertyListS\u003c/a\u003e\u003c/code\u003e \n type as a sort of a central junction point through which all conversions\n between property-list-like types and property-list-item types are routed.\n The classes defined here are chosen to minimize the inderdependence of\n these types and hence maximize the flexibility of the system as a whole.\n\u003c/p\u003e\u003cp\u003eMore simply stated, these weird math thingies make the design\n as flexible as possible (in a well-defined and useful sense).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "module",
        "fct-source": "src/Data-PropertyList-Algebra.html",
        "fct-type": "module",
        "title": "Algebra"
      },
      "index": {
        "description": "The internal algebraic interface for working with property-list-like things The classes defined here are the basis for very general system supporting transformations between many property-list representations including both internal and external formats The transformations are based on algebra and are very well-behaved mathematically It is possible to fuse operations so that for example reading from XML and writing to text plist can be done without creating any intermediate representations other than those used by the XML parser and the text renderer Or expressions using the smart constructors can be evaluated to directly synthesize XML-formatted plists or the view-pattern destructors can be used to directly analyze them The interface defined in this module is very heavily influenced by category-theoretical constructions In particular F-algebras and F-coalgebras initiality and terminality For those not familiar with these concepts this will probably be quite incomprehensible Sorry about that The basic idea though is the use of the PropertyListS type as sort of central junction point through which all conversions between property-list-like types and property-list-item types are routed The classes defined here are chosen to minimize the inderdependence of these types and hence maximize the flexibility of the system as whole More simply stated these weird math thingies make the design as flexible as possible in well-defined and useful sense",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "Algebra",
        "normalized": "",
        "package": "property-list",
        "partial": "Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#t:InitialPList",
      "description": {
        "fct-descr": "\u003cp\u003eAn identification of the fact that the type \u003ccode\u003ea\u003c/code\u003e has an initial plist algebra\n (under some lifting \u003ccode\u003ef\u003c/code\u003e).  Functional dependencies are in use - for any \n type, only one of its initial algebras (if multiple apply, which they may\n because the same type may be initial for multiple distinct liftings)\n can be chosen, and for any lifting only one type's algebra may be chosen.\n This is to make types decidable in the not-so-uncommon case where the\n lifting is encapsulated (eg, any time \u003ccode\u003e\u003ca\u003efoldPList\u003c/a\u003e\u003c/code\u003e is partially applied\n - for example, see the signature of \u003ccode\u003e\u003ca\u003efromPlist\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor cases where the lifting either needs to be chosen or needs to be\n transformed to another lifting, \u003ccode\u003e\u003ca\u003efromPlistWith\u003c/a\u003e\u003c/code\u003e is provided.  It is based\n on the same definition as the default implementation of \u003ccode\u003e\u003ca\u003efoldPList\u003c/a\u003e\u003c/code\u003e but\n also inserts a chosen transformation of the lifting.\n\u003c/p\u003e\u003cp\u003eQuestion for self: Is the PListCoalgebra context reasonable here?  \n Some rough calculations suggest that in the presence of fixed point \n type operators, it is possible to construct a PListCoalgebra for any \n InitialPList, which essentially is defined as pattern matching.  So, \n I'm not totally sure but I think this is reasonable - at least, for\n finitary signatures, which we're using as long as \u003ccode\u003ef\u003c/code\u003e doesn't go crazy.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "class",
        "fct-source": "src/Data-PropertyList-Algebra.html#InitialPList",
        "fct-type": "class",
        "title": "InitialPList"
      },
      "index": {
        "description": "An identification of the fact that the type has an initial plist algebra under some lifting Functional dependencies are in use for any type only one of its initial algebras if multiple apply which they may because the same type may be initial for multiple distinct liftings can be chosen and for any lifting only one type algebra may be chosen This is to make types decidable in the not-so-uncommon case where the lifting is encapsulated eg any time foldPList is partially applied for example see the signature of fromPlist For cases where the lifting either needs to be chosen or needs to be transformed to another lifting fromPlistWith is provided It is based on the same definition as the default implementation of foldPList but also inserts chosen transformation of the lifting Question for self Is the PListCoalgebra context reasonable here Some rough calculations suggest that in the presence of fixed point type operators it is possible to construct PListCoalgebra for any InitialPList which essentially is defined as pattern matching So not totally sure but think this is reasonable at least for finitary signatures which we re using as long as doesn go crazy",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "InitialPList",
        "normalized": "",
        "package": "property-list",
        "partial": "Initial PList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#t:PListAlgebra",
      "description": {
        "fct-descr": "\u003cp\u003eA class for types which can be constructed algebraically from the\n \u003ccode\u003e\u003ca\u003ePropertyListS\u003c/a\u003e\u003c/code\u003e signature (lifted by \u003ccode\u003ef\u003c/code\u003e) - in other words, types which\n you can put property lists into.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ef\u003c/code\u003e-lifting is provided to support extending the algebra.  The algebra\n is defined in a class rather than passing around functions because most of\n the time for any given type there is only one algebra you care about.\n\u003c/p\u003e\u003cp\u003eTypically a renderer for an output format will be implemented as a type\n with an \u003ccode\u003einstance \u003ccode\u003e\u003ca\u003ePListAlgebra\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example, the XML \n output system is implemented in the \u003ccode\u003einstance \u003ccode\u003e\u003ca\u003ePListAlgebra\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e \n \u003ccode\u003eData.PropertyList.Xml.Types.Plist\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "class",
        "fct-source": "src/Data-PropertyList-Algebra.html#PListAlgebra",
        "fct-type": "class",
        "title": "PListAlgebra"
      },
      "index": {
        "description": "class for types which can be constructed algebraically from the PropertyListS signature lifted by in other words types which you can put property lists into The lifting is provided to support extending the algebra The algebra is defined in class rather than passing around functions because most of the time for any given type there is only one algebra you care about Typically renderer for an output format will be implemented as type with an instance PListAlgebra Identity For example the XML output system is implemented in the instance PListAlgebra Identity Data.PropertyList.Xml.Types.Plist",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PListAlgebra",
        "normalized": "",
        "package": "property-list",
        "partial": "PList Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#t:PListCoalgebra",
      "description": {
        "fct-descr": "\u003cp\u003eA class for types which can be dissected (pattern-matched) into the\n \u003ccode\u003e\u003ca\u003ePropertyListS\u003c/a\u003e\u003c/code\u003e signature (lifted by \u003ccode\u003ef\u003c/code\u003e) - in other words, types which\n you can take property lists out of.\n\u003c/p\u003e\u003cp\u003eTypically a property list parser will be implemented as a type with a\n \u003ccode\u003e\u003ca\u003ePListCoalgebra\u003c/a\u003e\u003c/code\u003e instance, where \u003ccode\u003ef\u003c/code\u003e is either \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e in the case where\n the parser guarantees to return a fully well-formed property list \n (assuming it returns anything at all) or \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003esomething\u003c/code\u003e when the \n parser only guarantees that the structure is sound (but that some elements\n might be defective, in which case a value of type \u003ccode\u003esomething\u003c/code\u003e would be \n substituted).  The XML parser, for example, is based on the latter \n approach, where \u003ccode\u003esomething\u003c/code\u003e is \u003ccode\u003eUnparsedPlistItem\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "class",
        "fct-source": "src/Data-PropertyList-Algebra.html#PListCoalgebra",
        "fct-type": "class",
        "title": "PListCoalgebra"
      },
      "index": {
        "description": "class for types which can be dissected pattern-matched into the PropertyListS signature lifted by in other words types which you can take property lists out of Typically property list parser will be implemented as type with PListCoalgebra instance where is either Identity in the case where the parser guarantees to return fully well-formed property list assuming it returns anything at all or Either something when the parser only guarantees that the structure is sound but that some elements might be defective in which case value of type something would be substituted The XML parser for example is based on the latter approach where something is UnparsedPlistItem",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PListCoalgebra",
        "normalized": "",
        "package": "property-list",
        "partial": "PList Coalgebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#t:PropertyListS",
      "description": {
        "fct-descr": "\u003cp\u003eThe signature of the base property list algebra.  This algebra is \n \"lifted\" in various ways to support several different but similar\n representations of property lists as well as projections and\n injections.  All the different representations are \u003ccode\u003econnected\u003c/code\u003e through\n this signature.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003ePropertyList\u003c/code\u003e is a fixed-point of this signature - that\n is, a recursive version where \u003ccode\u003ea\u003c/code\u003e is instantiated as \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePropertyListS\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e.\n That gives the \"expected\" structure of a basic property list.  It is both\n initial and terminal for this signature in its 'un-lifted' form - which\n is to say, any other type with an algebra for this signature (such as an \n XML representation) can be made from a \u003ccode\u003ePropertyList\u003c/code\u003e, and any type with\n a coalgebra for this signature (such as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e, etc.)\n can be converted directly to a \u003ccode\u003ePropertyList\u003c/code\u003e.  This also means that any\n transformation or series of transformations involving the \u003ccode\u003ePropertyList\u003c/code\u003e\n type can be fused to \"skip\" generating intermediate property lists, \n although there are currently no rewrite rules set up to do so.\n\u003c/p\u003e\u003cp\u003eSimilarly, \u003ccode\u003ePartialPropertyList\u003c/code\u003e is a fixed point of an arbitrarily-\n augmented version of this signature (also known as the free monad \n generated by the signature).  Depending on its type parameter, \n \u003ccode\u003ePartialPropertyList\u003c/code\u003e can be terminal among many simple extensions to \n the signature.  Thus many types with a coalgebra for an extension of \n this signature (such as XML given an appropriate tree destructor, or \n the \u003ccode\u003ePropertyList\u003c/code\u003e type itself)  can be trivially converted to a \n \u003ccode\u003ePartialPropertyList\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Algebra.html#PropertyListS",
        "fct-type": "data",
        "title": "PropertyListS"
      },
      "index": {
        "description": "The signature of the base property list algebra This algebra is lifted in various ways to support several different but similar representations of property lists as well as projections and injections All the different representations are connected through this signature For example PropertyList is fixed-point of this signature that is recursive version where is instantiated as PropertyListS That gives the expected structure of basic property list It is both initial and terminal for this signature in its un-lifted form which is to say any other type with an algebra for this signature such as an XML representation can be made from PropertyList and any type with coalgebra for this signature such as String an Integer etc can be converted directly to PropertyList This also means that any transformation or series of transformations involving the PropertyList type can be fused to skip generating intermediate property lists although there are currently no rewrite rules set up to do so Similarly PartialPropertyList is fixed point of an arbitrarily augmented version of this signature also known as the free monad generated by the signature Depending on its type parameter PartialPropertyList can be terminal among many simple extensions to the signature Thus many types with coalgebra for an extension of this signature such as XML given an appropriate tree destructor or the PropertyList type itself can be trivially converted to PartialPropertyList",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PropertyListS",
        "normalized": "",
        "package": "property-list",
        "partial": "Property List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#t:TerminalPList",
      "description": {
        "fct-descr": "\u003cp\u003eChosen terminal coalgebra for the given lifting, and chosen lifting\n for the given type.  See also \u003ccode\u003e\u003ca\u003eInitialPList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "class",
        "fct-source": "src/Data-PropertyList-Algebra.html#TerminalPList",
        "fct-type": "class",
        "title": "TerminalPList"
      },
      "index": {
        "description": "Chosen terminal coalgebra for the given lifting and chosen lifting for the given type See also InitialPList",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "TerminalPList",
        "normalized": "",
        "package": "property-list",
        "partial": "Terminal PList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:PLArray",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "PLArray [a]",
        "fct-source": "src/Data-PropertyList-Algebra.html#PropertyListS",
        "fct-type": "function",
        "title": "PLArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PLArray",
        "normalized": "PLArray[a]",
        "package": "property-list",
        "partial": "PLArray",
        "signature": "PLArray[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:PLBool",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "PLBool Bool",
        "fct-source": "src/Data-PropertyList-Algebra.html#PropertyListS",
        "fct-type": "function",
        "title": "PLBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PLBool",
        "normalized": "",
        "package": "property-list",
        "partial": "PLBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:PLData",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "PLData ByteString",
        "fct-source": "src/Data-PropertyList-Algebra.html#PropertyListS",
        "fct-type": "function",
        "title": "PLData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PLData",
        "normalized": "",
        "package": "property-list",
        "partial": "PLData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:PLDate",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "PLDate UTCTime",
        "fct-source": "src/Data-PropertyList-Algebra.html#PropertyListS",
        "fct-type": "function",
        "title": "PLDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PLDate",
        "normalized": "",
        "package": "property-list",
        "partial": "PLDate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:PLDict",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "PLDict (Map String a)",
        "fct-source": "src/Data-PropertyList-Algebra.html#PropertyListS",
        "fct-type": "function",
        "title": "PLDict"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PLDict",
        "normalized": "",
        "package": "property-list",
        "partial": "PLDict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:PLInt",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "PLInt Integer",
        "fct-source": "src/Data-PropertyList-Algebra.html#PropertyListS",
        "fct-type": "function",
        "title": "PLInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PLInt",
        "normalized": "",
        "package": "property-list",
        "partial": "PLInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:PLReal",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "PLReal Double",
        "fct-source": "src/Data-PropertyList-Algebra.html#PropertyListS",
        "fct-type": "function",
        "title": "PLReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PLReal",
        "normalized": "",
        "package": "property-list",
        "partial": "PLReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:PLString",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "PLString String",
        "fct-source": "src/Data-PropertyList-Algebra.html#PropertyListS",
        "fct-type": "function",
        "title": "PLString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "PLString",
        "normalized": "",
        "package": "property-list",
        "partial": "PLString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:foldPList",
      "description": {
        "fct-descr": "\u003cp\u003eUsing some other plist algebra, compute the unique transformation from\n the type \u003ccode\u003ea\u003c/code\u003e to that algebra.\n\u003c/p\u003e\u003cp\u003eThe default implementation is:\n\u003c/p\u003e\u003cpre\u003e foldPList f = go\n    where\n        go = f . fmap (fmap go) . plistCoalgebra\n\u003c/pre\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "(f (PropertyListS t) -\u003e t) -\u003e a -\u003e t",
        "fct-source": "src/Data-PropertyList-Algebra.html#foldPList",
        "fct-type": "method",
        "title": "foldPList"
      },
      "index": {
        "description": "Using some other plist algebra compute the unique transformation from the type to that algebra The default implementation is foldPList go where go fmap fmap go plistCoalgebra",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "foldPList",
        "normalized": "(a(PropertyListS b)-\u003eb)-\u003ec-\u003eb",
        "package": "property-list",
        "partial": "PList",
        "signature": "(f(PropertyListS t)-\u003et)-\u003ea-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:foldPropertyListS",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a basic non-recursive algebra of property list items.\n This is equivalent to pattern matching on \u003ccode\u003e\u003ca\u003ePropertyListS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "([a] -\u003e t) -\u003e (ByteString -\u003e t) -\u003e (UTCTime -\u003e t) -\u003e (Map String a -\u003e t) -\u003e (Double -\u003e t) -\u003e (Integer -\u003e t) -\u003e (String -\u003e t) -\u003e (Bool -\u003e t) -\u003e PropertyListS a -\u003e t",
        "fct-source": "src/Data-PropertyList-Algebra.html#foldPropertyListS",
        "fct-type": "function",
        "title": "foldPropertyListS"
      },
      "index": {
        "description": "Construct basic non-recursive algebra of property list items This is equivalent to pattern matching on PropertyListS",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "foldPropertyListS",
        "normalized": "([a]-\u003eb)-\u003e(ByteString-\u003eb)-\u003e(UTCTime-\u003eb)-\u003e(Map String a-\u003eb)-\u003e(Double-\u003eb)-\u003e(Integer-\u003eb)-\u003e(String-\u003eb)-\u003e(Bool-\u003eb)-\u003ePropertyListS a-\u003eb",
        "package": "property-list",
        "partial": "Property List",
        "signature": "([a]-\u003et)-\u003e(ByteString-\u003et)-\u003e(UTCTime-\u003et)-\u003e(Map String a-\u003et)-\u003e(Double-\u003et)-\u003e(Integer-\u003et)-\u003e(String-\u003et)-\u003e(Bool-\u003et)-\u003ePropertyListS a-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:fromPlArray",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe [a]",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlArray",
        "fct-type": "function",
        "title": "fromPlArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "fromPlArray",
        "normalized": "a-\u003eMaybe[a]",
        "package": "property-list",
        "partial": "Pl Array",
        "signature": "a-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:fromPlBool",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe Bool",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlBool",
        "fct-type": "function",
        "title": "fromPlBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "fromPlBool",
        "normalized": "a-\u003eMaybe Bool",
        "package": "property-list",
        "partial": "Pl Bool",
        "signature": "a-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:fromPlData",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe ByteString",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlData",
        "fct-type": "function",
        "title": "fromPlData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "fromPlData",
        "normalized": "a-\u003eMaybe ByteString",
        "package": "property-list",
        "partial": "Pl Data",
        "signature": "a-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:fromPlDate",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe UTCTime",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlDate",
        "fct-type": "function",
        "title": "fromPlDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "fromPlDate",
        "normalized": "a-\u003eMaybe UTCTime",
        "package": "property-list",
        "partial": "Pl Date",
        "signature": "a-\u003eMaybe UTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:fromPlDict",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe (Map String a)",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlDict",
        "fct-type": "function",
        "title": "fromPlDict"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "fromPlDict",
        "normalized": "a-\u003eMaybe(Map String a)",
        "package": "property-list",
        "partial": "Pl Dict",
        "signature": "a-\u003eMaybe(Map String a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:fromPlInt",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe Integer",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlInt",
        "fct-type": "function",
        "title": "fromPlInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "fromPlInt",
        "normalized": "a-\u003eMaybe Integer",
        "package": "property-list",
        "partial": "Pl Int",
        "signature": "a-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:fromPlReal",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe Double",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlReal",
        "fct-type": "function",
        "title": "fromPlReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "fromPlReal",
        "normalized": "a-\u003eMaybe Double",
        "package": "property-list",
        "partial": "Pl Real",
        "signature": "a-\u003eMaybe Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:fromPlString",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe String",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlString",
        "fct-type": "function",
        "title": "fromPlString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "fromPlString",
        "normalized": "a-\u003eMaybe String",
        "package": "property-list",
        "partial": "Pl String",
        "signature": "a-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:fromPlist",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from an initial plist to any other plist with the same lifted algebra.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "pl -\u003e t",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlist",
        "fct-type": "function",
        "title": "fromPlist"
      },
      "index": {
        "description": "Convert from an initial plist to any other plist with the same lifted algebra",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "fromPlist",
        "normalized": "a-\u003eb",
        "package": "property-list",
        "partial": "Plist",
        "signature": "pl-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:fromPlistWith",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "(f (PropertyListS t) -\u003e g (PropertyListS t)) -\u003e pl -\u003e t",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlistWith",
        "fct-type": "function",
        "title": "fromPlistWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "fromPlistWith",
        "normalized": "(a(PropertyListS b)-\u003ec(PropertyListS b))-\u003ed-\u003eb",
        "package": "property-list",
        "partial": "Plist With",
        "signature": "(f(PropertyListS t)-\u003eg(PropertyListS t))-\u003epl-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:plArray",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plArray",
        "fct-type": "function",
        "title": "plArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "plArray",
        "normalized": "[a]-\u003ea",
        "package": "property-list",
        "partial": "Array",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:plBool",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "Bool -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plBool",
        "fct-type": "function",
        "title": "plBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "plBool",
        "normalized": "Bool-\u003ea",
        "package": "property-list",
        "partial": "Bool",
        "signature": "Bool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:plData",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plData",
        "fct-type": "function",
        "title": "plData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "plData",
        "normalized": "ByteString-\u003ea",
        "package": "property-list",
        "partial": "Data",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:plDate",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "UTCTime -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plDate",
        "fct-type": "function",
        "title": "plDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "plDate",
        "normalized": "UTCTime-\u003ea",
        "package": "property-list",
        "partial": "Date",
        "signature": "UTCTime-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:plDict",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "Map String a -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plDict",
        "fct-type": "function",
        "title": "plDict"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "plDict",
        "normalized": "Map String a-\u003ea",
        "package": "property-list",
        "partial": "Dict",
        "signature": "Map String a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:plInt",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "Integer -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plInt",
        "fct-type": "function",
        "title": "plInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "plInt",
        "normalized": "Integer-\u003ea",
        "package": "property-list",
        "partial": "Int",
        "signature": "Integer-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:plReal",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "Double -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plReal",
        "fct-type": "function",
        "title": "plReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "plReal",
        "normalized": "Double-\u003ea",
        "package": "property-list",
        "partial": "Real",
        "signature": "Double-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:plString",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plString",
        "fct-type": "function",
        "title": "plString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "plString",
        "normalized": "String-\u003ea",
        "package": "property-list",
        "partial": "String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:plistAlgebra",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a value of type \u003ccode\u003ea\u003c/code\u003e from a piece of a property list (using\n the \u003ccode\u003e\u003ca\u003ePropertyListS\u003c/a\u003e\u003c/code\u003e signature augmented by the \"lifting\" \u003ccode\u003ef\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "f (PropertyListS a) -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plistAlgebra",
        "fct-type": "method",
        "title": "plistAlgebra"
      },
      "index": {
        "description": "Build value of type from piece of property list using the PropertyListS signature augmented by the lifting",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "plistAlgebra",
        "normalized": "a(PropertyListS b)-\u003eb",
        "package": "property-list",
        "partial": "Algebra",
        "signature": "f(PropertyListS a)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:plistCoalgebra",
      "description": {
        "fct-descr": "\u003cp\u003eAnalyze a value of type \u003ccode\u003ea\u003c/code\u003e by matching it to a constructor in the\n (lifted by \u003ccode\u003ef\u003c/code\u003e) \u003ccode\u003e\u003ca\u003ePropertyListS\u003c/a\u003e\u003c/code\u003e signature.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e f (PropertyListS a)",
        "fct-source": "src/Data-PropertyList-Algebra.html#plistCoalgebra",
        "fct-type": "method",
        "title": "plistCoalgebra"
      },
      "index": {
        "description": "Analyze value of type by matching it to constructor in the lifted by PropertyListS signature",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "plistCoalgebra",
        "normalized": "a-\u003eb(PropertyListS a)",
        "package": "property-list",
        "partial": "Coalgebra",
        "signature": "a-\u003ef(PropertyListS a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:toPlist",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from any plist-like thing to a plist which is terminal for a some lifted algebra.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "t -\u003e pl",
        "fct-source": "src/Data-PropertyList-Algebra.html#toPlist",
        "fct-type": "function",
        "title": "toPlist"
      },
      "index": {
        "description": "Convert from any plist-like thing to plist which is terminal for some lifted algebra",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "toPlist",
        "normalized": "a-\u003eb",
        "package": "property-list",
        "partial": "Plist",
        "signature": "t-\u003epl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:toPlistWith",
      "description": {
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "(f (PropertyListS t) -\u003e g (PropertyListS t)) -\u003e t -\u003e pl",
        "fct-source": "src/Data-PropertyList-Algebra.html#toPlistWith",
        "fct-type": "function",
        "title": "toPlistWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "toPlistWith",
        "normalized": "(a(PropertyListS b)-\u003ec(PropertyListS b))-\u003eb-\u003ed",
        "package": "property-list",
        "partial": "Plist With",
        "signature": "(f(PropertyListS t)-\u003eg(PropertyListS t))-\u003et-\u003epl"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Algebra.html#v:unfoldPList",
      "description": {
        "fct-descr": "\u003cp\u003eGiven some coalgebra for the chosen lifted plist signature, compute\n the unique extraction/unfolding of that coalgebra into the type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default implementation is:\n\u003c/p\u003e\u003cpre\u003e unfoldPList f = go\n     where\n         go = plistAlgebra . fmap (fmap go) . f\n\u003c/pre\u003e",
        "fct-module": "Data.PropertyList.Algebra",
        "fct-package": "property-list",
        "fct-signature": "(t -\u003e f (PropertyListS t)) -\u003e t -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#unfoldPList",
        "fct-type": "method",
        "title": "unfoldPList"
      },
      "index": {
        "description": "Given some coalgebra for the chosen lifted plist signature compute the unique extraction unfolding of that coalgebra into the type The default implementation is unfoldPList go where go plistAlgebra fmap fmap go",
        "hierarchy": "Data PropertyList Algebra",
        "module": "Data.PropertyList.Algebra",
        "name": "unfoldPList",
        "normalized": "(a-\u003eb(PropertyListS a))-\u003ea-\u003ec",
        "package": "property-list",
        "partial": "PList",
        "signature": "(t-\u003ef(PropertyListS t))-\u003et-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "module",
        "fct-source": "src/Data-PropertyList-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "property-list",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#t:Abs",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#Abs",
        "fct-type": "data",
        "title": "Abs"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "Abs",
        "normalized": "",
        "package": "property-list",
        "partial": "Abs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#t:BPListHeader",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "newtype",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListHeader",
        "fct-type": "newtype",
        "title": "BPListHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPListHeader",
        "normalized": "",
        "package": "property-list",
        "partial": "BPList Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#t:BPListRecord",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "data",
        "title": "BPListRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPListRecord",
        "normalized": "",
        "package": "property-list",
        "partial": "BPList Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#t:BPListRecords",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecords",
        "fct-type": "data",
        "title": "BPListRecords"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPListRecords",
        "normalized": "",
        "package": "property-list",
        "partial": "BPList Records",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#t:BPListTrailer",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListTrailer",
        "fct-type": "data",
        "title": "BPListTrailer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPListTrailer",
        "normalized": "",
        "package": "property-list",
        "partial": "BPList Trailer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#t:Rel",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#Rel",
        "fct-type": "data",
        "title": "Rel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "Rel",
        "normalized": "",
        "package": "property-list",
        "partial": "Rel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#t:UnparsedBPListRecord",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "data",
        "title": "UnparsedBPListRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "UnparsedBPListRecord",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed BPList Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLArray",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLArray [Word64]",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLArray",
        "normalized": "BPLArray[Word]",
        "package": "property-list",
        "partial": "BPLArray",
        "signature": "BPLArray[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLBool",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLBool Bool",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLBool",
        "normalized": "",
        "package": "property-list",
        "partial": "BPLBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLData",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLData ByteString",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLData",
        "normalized": "",
        "package": "property-list",
        "partial": "BPLData",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLDate",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLDate UTCTime",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLDate",
        "normalized": "",
        "package": "property-list",
        "partial": "BPLDate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLDict",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLDict [Word64] [Word64]",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLDict"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLDict",
        "normalized": "BPLDict[Word][Word]",
        "package": "property-list",
        "partial": "BPLDict",
        "signature": "BPLDict[Word][Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLFill",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLFill",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLFill"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLFill",
        "normalized": "",
        "package": "property-list",
        "partial": "BPLFill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLInt",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLInt Integer",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLInt",
        "normalized": "",
        "package": "property-list",
        "partial": "BPLInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLNull",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLNull",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLNull",
        "normalized": "",
        "package": "property-list",
        "partial": "BPLNull",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLReal",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLReal Double",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLReal",
        "normalized": "",
        "package": "property-list",
        "partial": "BPLReal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLSet",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLSet [Word64]",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLSet",
        "normalized": "BPLSet[Word]",
        "package": "property-list",
        "partial": "BPLSet",
        "signature": "BPLSet[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLString",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLString String",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLString",
        "normalized": "",
        "package": "property-list",
        "partial": "BPLString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPLUID",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPLUID Integer",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecord",
        "fct-type": "function",
        "title": "BPLUID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPLUID",
        "normalized": "",
        "package": "property-list",
        "partial": "BPLUID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPListHeader",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPListHeader",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListHeader",
        "fct-type": "function",
        "title": "BPListHeader"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPListHeader",
        "normalized": "",
        "package": "property-list",
        "partial": "BPList Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPListRecords",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPListRecords",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecords",
        "fct-type": "function",
        "title": "BPListRecords"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPListRecords",
        "normalized": "",
        "package": "property-list",
        "partial": "BPList Records",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:BPListTrailer",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPListTrailer",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListTrailer",
        "fct-type": "function",
        "title": "BPListTrailer"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "BPListTrailer",
        "normalized": "",
        "package": "property-list",
        "partial": "BPList Trailer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:MissingObjectRef",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "MissingObjectRef Word64",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "MissingObjectRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "MissingObjectRef",
        "normalized": "",
        "package": "property-list",
        "partial": "Missing Object Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:UnparsedDict",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "UnparsedDict [Word64] [Word64]",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "UnparsedDict"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "UnparsedDict",
        "normalized": "UnparsedDict[Word][Word]",
        "package": "property-list",
        "partial": "Unparsed Dict",
        "signature": "UnparsedDict[Word][Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:UnparsedFill",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "UnparsedFill",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "UnparsedFill"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "UnparsedFill",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Fill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:UnparsedNull",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "UnparsedNull",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "UnparsedNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "UnparsedNull",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:UnparsedSet",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "UnparsedSet [Word64]",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "UnparsedSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "UnparsedSet",
        "normalized": "UnparsedSet[Word]",
        "package": "property-list",
        "partial": "Unparsed Set",
        "signature": "UnparsedSet[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:UnparsedUID",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "UnparsedUID Integer",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "UnparsedUID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "UnparsedUID",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed UID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:absolutize",
      "description": {
        "fct-descr": "\u003cp\u003eTake some \u003ccode\u003e\u003ca\u003eBPListRecords\u003c/a\u003e\u003c/code\u003e using relative addressing and change them to use absolute addressing\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPListRecords Rel -\u003e BPListRecords Abs",
        "fct-source": "src/Data-PropertyList-Binary-Linearize.html#absolutize",
        "fct-type": "function",
        "title": "absolutize"
      },
      "index": {
        "description": "Take some BPListRecords using relative addressing and change them to use absolute addressing",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "absolutize",
        "normalized": "BPListRecords Rel-\u003eBPListRecords Abs",
        "package": "property-list",
        "partial": "",
        "signature": "BPListRecords Rel-\u003eBPListRecords Abs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:bplistVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "Word16",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListHeader",
        "fct-type": "function",
        "title": "bplistVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "bplistVersion",
        "normalized": "",
        "package": "property-list",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:delinearize",
      "description": {
        "fct-descr": "\u003cp\u003eReconstruct a property list from a collection of \u003ccode\u003e\u003ca\u003eBPListRecords\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPListRecords Abs -\u003e PartialPropertyList UnparsedBPListRecord",
        "fct-source": "src/Data-PropertyList-Binary-Linearize.html#delinearize",
        "fct-type": "function",
        "title": "delinearize"
      },
      "index": {
        "description": "Reconstruct property list from collection of BPListRecords",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "delinearize",
        "normalized": "BPListRecords Abs-\u003ePartialPropertyList UnparsedBPListRecord",
        "package": "property-list",
        "partial": "",
        "signature": "BPListRecords Abs-\u003ePartialPropertyList UnparsedBPListRecord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:encodeBinaryPropertyList",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "PropertyList -\u003e ByteString",
        "fct-source": "src/Data-PropertyList-Binary.html#encodeBinaryPropertyList",
        "fct-type": "function",
        "title": "encodeBinaryPropertyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "encodeBinaryPropertyList",
        "normalized": "PropertyList-\u003eByteString",
        "package": "property-list",
        "partial": "Binary Property List",
        "signature": "PropertyList-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:intern",
      "description": {
        "fct-descr": "\u003cp\u003eTake some \u003ccode\u003e\u003ca\u003eBPListRecords\u003c/a\u003e\u003c/code\u003e using absolute addressing and eliminate \n all duplicate records, compact the table and update all internal\n references.\n\u003c/p\u003e\u003cp\u003eDoes not necessarily yield a totally deduplicated table; The process\n of interning can introduce duplicate records (because it alters arrays,\n dicts and sets).  All other node types will be deduplicated in one pass,\n though, which is usually sufficient.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPListRecords Abs -\u003e BPListRecords Abs",
        "fct-source": "src/Data-PropertyList-Binary-Linearize.html#intern",
        "fct-type": "function",
        "title": "intern"
      },
      "index": {
        "description": "Take some BPListRecords using absolute addressing and eliminate all duplicate records compact the table and update all internal references Does not necessarily yield totally deduplicated table The process of interning can introduce duplicate records because it alters arrays dicts and sets All other node types will be deduplicated in one pass though which is usually sufficient",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "intern",
        "normalized": "BPListRecords Abs-\u003eBPListRecords Abs",
        "package": "property-list",
        "partial": "",
        "signature": "BPListRecords Abs-\u003eBPListRecords Abs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:linearize",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten a \u003ccode\u003e\u003ca\u003ePropertyList\u003c/a\u003e\u003c/code\u003e to a sequence of \u003ccode\u003e\u003ca\u003eBPListRecords\u003c/a\u003e\u003c/code\u003e.  The resulting records will\n use absolute addressing and will not have any duplicates.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "PropertyList -\u003e BPListRecords Abs",
        "fct-source": "src/Data-PropertyList-Binary-Linearize.html#linearize",
        "fct-type": "function",
        "title": "linearize"
      },
      "index": {
        "description": "Flatten PropertyList to sequence of BPListRecords The resulting records will use absolute addressing and will not have any duplicates",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "linearize",
        "normalized": "PropertyList-\u003eBPListRecords Abs",
        "package": "property-list",
        "partial": "",
        "signature": "PropertyList-\u003eBPListRecords Abs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:numObjects",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "!Word64",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListTrailer",
        "fct-type": "function",
        "title": "numObjects"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "numObjects",
        "normalized": "",
        "package": "property-list",
        "partial": "Objects",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:objectRefSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "!Word8",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListTrailer",
        "fct-type": "function",
        "title": "objectRefSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "objectRefSize",
        "normalized": "",
        "package": "property-list",
        "partial": "Ref Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:offsetIntSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "!Word8",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListTrailer",
        "fct-type": "function",
        "title": "offsetIntSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "offsetIntSize",
        "normalized": "",
        "package": "property-list",
        "partial": "Int Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:offsetTableOffset",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "!Word64",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListTrailer",
        "fct-type": "function",
        "title": "offsetTableOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "offsetTableOffset",
        "normalized": "",
        "package": "property-list",
        "partial": "Table Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:putBPList",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "BPListRecords t -\u003e PutM ()",
        "fct-source": "src/Data-PropertyList-Binary-Put.html#putBPList",
        "fct-type": "function",
        "title": "putBPList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "putBPList",
        "normalized": "BPListRecords a-\u003ePutM()",
        "package": "property-list",
        "partial": "BPList",
        "signature": "BPListRecords t-\u003ePutM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:readBPListRecords",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "ByteString -\u003e Either String (BPListRecords Abs)",
        "fct-source": "src/Data-PropertyList-Binary-Get.html#readBPListRecords",
        "fct-type": "function",
        "title": "readBPListRecords"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "readBPListRecords",
        "normalized": "ByteString-\u003eEither String(BPListRecords Abs)",
        "package": "property-list",
        "partial": "BPList Records",
        "signature": "ByteString-\u003eEither String(BPListRecords Abs)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:readBinaryPartialPropertyList",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "ByteString -\u003e Either String (PartialPropertyList UnparsedBPListRecord)",
        "fct-source": "src/Data-PropertyList-Binary.html#readBinaryPartialPropertyList",
        "fct-type": "function",
        "title": "readBinaryPartialPropertyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "readBinaryPartialPropertyList",
        "normalized": "ByteString-\u003eEither String(PartialPropertyList UnparsedBPListRecord)",
        "package": "property-list",
        "partial": "Binary Partial Property List",
        "signature": "ByteString-\u003eEither String(PartialPropertyList UnparsedBPListRecord)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:readBinaryPartialPropertyListFromFile",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e IO (PartialPropertyList UnparsedBPListRecord)",
        "fct-source": "src/Data-PropertyList-Binary.html#readBinaryPartialPropertyListFromFile",
        "fct-type": "function",
        "title": "readBinaryPartialPropertyListFromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "readBinaryPartialPropertyListFromFile",
        "normalized": "FilePath-\u003eIO(PartialPropertyList UnparsedBPListRecord)",
        "package": "property-list",
        "partial": "Binary Partial Property List From File",
        "signature": "FilePath-\u003eIO(PartialPropertyList UnparsedBPListRecord)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:readBinaryPropertyList",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "ByteString -\u003e Either String PropertyList",
        "fct-source": "src/Data-PropertyList-Binary.html#readBinaryPropertyList",
        "fct-type": "function",
        "title": "readBinaryPropertyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "readBinaryPropertyList",
        "normalized": "ByteString-\u003eEither String PropertyList",
        "package": "property-list",
        "partial": "Binary Property List",
        "signature": "ByteString-\u003eEither String PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:readBinaryPropertyListFromFile",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e IO PropertyList",
        "fct-source": "src/Data-PropertyList-Binary.html#readBinaryPropertyListFromFile",
        "fct-type": "function",
        "title": "readBinaryPropertyListFromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "readBinaryPropertyListFromFile",
        "normalized": "FilePath-\u003eIO PropertyList",
        "package": "property-list",
        "partial": "Binary Property List From File",
        "signature": "FilePath-\u003eIO PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:records",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "Seq BPListRecord",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecords",
        "fct-type": "function",
        "title": "records"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "records",
        "normalized": "",
        "package": "property-list",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:rootObject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "Word64",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListRecords",
        "fct-type": "function",
        "title": "rootObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "rootObject",
        "normalized": "",
        "package": "property-list",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:sortVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "!Word8",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListTrailer",
        "fct-type": "function",
        "title": "sortVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "sortVersion",
        "normalized": "",
        "package": "property-list",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:topObject",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "!Word64",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#BPListTrailer",
        "fct-type": "function",
        "title": "topObject"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "topObject",
        "normalized": "",
        "package": "property-list",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Binary.html#v:writeBinaryPropertyListToFile",
      "description": {
        "fct-module": "Data.PropertyList.Binary",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e PropertyList -\u003e IO ()",
        "fct-source": "src/Data-PropertyList-Binary.html#writeBinaryPropertyListToFile",
        "fct-type": "function",
        "title": "writeBinaryPropertyListToFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Binary",
        "module": "Data.PropertyList.Binary",
        "name": "writeBinaryPropertyListToFile",
        "normalized": "FilePath-\u003ePropertyList-\u003eIO()",
        "package": "property-list",
        "partial": "Binary Property List To File",
        "signature": "FilePath-\u003ePropertyList-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#",
      "description": {
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "module",
        "fct-source": "src/Data-PropertyList-Xml.html",
        "fct-type": "module",
        "title": "Xml"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "Xml",
        "normalized": "",
        "package": "property-list",
        "partial": "Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#t:UnparsedXmlPlistItem",
      "description": {
        "fct-descr": "\u003cp\u003eA representation of values that were structurally sound in the \n property list file but the contents of which couldn't be interpreted\n as what they claimed to be.  The result of the initial parse phase will\n typically be a \u003ccode\u003ePartialPropertyList UnparsedXmlPlistItem\u003c/code\u003e, and if\n the whole plist was parsed properly will contain no actual values \n of this type.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "data",
        "title": "UnparsedXmlPlistItem"
      },
      "index": {
        "description": "representation of values that were structurally sound in the property list file but the contents of which couldn be interpreted as what they claimed to be The result of the initial parse phase will typically be PartialPropertyList UnparsedXmlPlistItem and if the whole plist was parsed properly will contain no actual values of this type",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "UnparsedXmlPlistItem",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Xml Plist Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:UnparsedData",
      "description": {
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "UnparsedData String",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "function",
        "title": "UnparsedData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "UnparsedData",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:UnparsedDate",
      "description": {
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "UnparsedDate String",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "function",
        "title": "UnparsedDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "UnparsedDate",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:UnparsedInt",
      "description": {
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "UnparsedInt String",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "function",
        "title": "UnparsedInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "UnparsedInt",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:UnparsedReal",
      "description": {
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "UnparsedReal String",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "function",
        "title": "UnparsedReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "UnparsedReal",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:UnparsedXml",
      "description": {
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "UnparsedXml Element",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "function",
        "title": "UnparsedXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "UnparsedXml",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:readXmlPartialPropertyList",
      "description": {
        "fct-descr": "\u003cp\u003eRead an XML property list from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in the xml1 plist format, leaving \n unparseable elements in the tree.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "String -\u003e Either String (PartialPropertyList UnparsedXmlPlistItem)",
        "fct-source": "src/Data-PropertyList-Xml.html#readXmlPartialPropertyList",
        "fct-type": "function",
        "title": "readXmlPartialPropertyList"
      },
      "index": {
        "description": "Read an XML property list from String in the xml1 plist format leaving unparseable elements in the tree",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "readXmlPartialPropertyList",
        "normalized": "String-\u003eEither String(PartialPropertyList UnparsedXmlPlistItem)",
        "package": "property-list",
        "partial": "Xml Partial Property List",
        "signature": "String-\u003eEither String(PartialPropertyList UnparsedXmlPlistItem)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:readXmlPartialPropertyListFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead an XML propertylist from a file in the xml1 plist format to a\n partial propertylist which is structurally sound but may contain some \n unparseable nodes.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e IO (PartialPropertyList UnparsedXmlPlistItem)",
        "fct-source": "src/Data-PropertyList-Xml.html#readXmlPartialPropertyListFromFile",
        "fct-type": "function",
        "title": "readXmlPartialPropertyListFromFile"
      },
      "index": {
        "description": "Read an XML propertylist from file in the xml1 plist format to partial propertylist which is structurally sound but may contain some unparseable nodes",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "readXmlPartialPropertyListFromFile",
        "normalized": "FilePath-\u003eIO(PartialPropertyList UnparsedXmlPlistItem)",
        "package": "property-list",
        "partial": "Xml Partial Property List From File",
        "signature": "FilePath-\u003eIO(PartialPropertyList UnparsedXmlPlistItem)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:readXmlPropertyList",
      "description": {
        "fct-descr": "\u003cp\u003eRead a property list from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in the xml1 format.  If parsing\n fails, returns a description of the problem in the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "String -\u003e Either String PropertyList",
        "fct-source": "src/Data-PropertyList-Xml.html#readXmlPropertyList",
        "fct-type": "function",
        "title": "readXmlPropertyList"
      },
      "index": {
        "description": "Read property list from String in the xml1 format If parsing fails returns description of the problem in the Left result",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "readXmlPropertyList",
        "normalized": "String-\u003eEither String PropertyList",
        "package": "property-list",
        "partial": "Xml Property List",
        "signature": "String-\u003eEither String PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:readXmlPropertyListFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a property list from a file in the xml1 format.  If parsing fails,\n calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e IO PropertyList",
        "fct-source": "src/Data-PropertyList-Xml.html#readXmlPropertyListFromFile",
        "fct-type": "function",
        "title": "readXmlPropertyListFromFile"
      },
      "index": {
        "description": "Read property list from file in the xml1 format If parsing fails calls fail",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "readXmlPropertyListFromFile",
        "normalized": "FilePath-\u003eIO PropertyList",
        "package": "property-list",
        "partial": "Xml Property List From File",
        "signature": "FilePath-\u003eIO PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:showXmlPropertyList",
      "description": {
        "fct-descr": "\u003cp\u003eRender a propertylist to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in the xml1 plist format from any\n initial propertylist type  (which includes \u003ccode\u003e\u003ca\u003ePropertyList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePartialPropertyList\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003eUnparsedPlistItem\u003c/code\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePartialPropertyList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ePlistItem\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "pl -\u003e String",
        "fct-source": "src/Data-PropertyList-Xml.html#showXmlPropertyList",
        "fct-type": "function",
        "title": "showXmlPropertyList"
      },
      "index": {
        "description": "Render propertylist to String in the xml1 plist format from any initial propertylist type which includes PropertyList PartialPropertyList UnparsedPlistItem and PartialPropertyList PlistItem",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "showXmlPropertyList",
        "normalized": "a-\u003eString",
        "package": "property-list",
        "partial": "Xml Property List",
        "signature": "pl-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:unparsedXmlPlistItemToElement",
      "description": {
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "UnparsedXmlPlistItem -\u003e Element",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#unparsedXmlPlistItemToElement",
        "fct-type": "function",
        "title": "unparsedXmlPlistItemToElement"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "unparsedXmlPlistItemToElement",
        "normalized": "UnparsedXmlPlistItem-\u003eElement",
        "package": "property-list",
        "partial": "Xml Plist Item To Element",
        "signature": "UnparsedXmlPlistItem-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList-Xml.html#v:writeXmlPropertyListToFile",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a propertylist to a file in the xml1 plist format from any\n initial propertylist type  (which includes \u003ccode\u003e\u003ca\u003ePropertyList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePartialPropertyList\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003eUnparsedPlistItem\u003c/code\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePartialPropertyList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ePlistItem\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList.Xml",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e PropertyList -\u003e IO ()",
        "fct-source": "src/Data-PropertyList-Xml.html#writeXmlPropertyListToFile",
        "fct-type": "function",
        "title": "writeXmlPropertyListToFile"
      },
      "index": {
        "description": "Output propertylist to file in the xml1 plist format from any initial propertylist type which includes PropertyList PartialPropertyList UnparsedPlistItem and PartialPropertyList PlistItem",
        "hierarchy": "Data PropertyList Xml",
        "module": "Data.PropertyList.Xml",
        "name": "writeXmlPropertyListToFile",
        "normalized": "FilePath-\u003ePropertyList-\u003eIO()",
        "package": "property-list",
        "partial": "Xml Property List To File",
        "signature": "FilePath-\u003ePropertyList-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "module",
        "fct-source": "src/Data-PropertyList.html",
        "fct-type": "module",
        "title": "PropertyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "PropertyList",
        "normalized": "",
        "package": "property-list",
        "partial": "Property List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#t:InitialPList",
      "description": {
        "fct-descr": "\u003cp\u003eAn identification of the fact that the type \u003ccode\u003ea\u003c/code\u003e has an initial plist algebra\n (under some lifting \u003ccode\u003ef\u003c/code\u003e).  Functional dependencies are in use - for any \n type, only one of its initial algebras (if multiple apply, which they may\n because the same type may be initial for multiple distinct liftings)\n can be chosen, and for any lifting only one type's algebra may be chosen.\n This is to make types decidable in the not-so-uncommon case where the\n lifting is encapsulated (eg, any time \u003ccode\u003e\u003ca\u003efoldPList\u003c/a\u003e\u003c/code\u003e is partially applied\n - for example, see the signature of \u003ccode\u003e\u003ca\u003efromPlist\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eFor cases where the lifting either needs to be chosen or needs to be\n transformed to another lifting, \u003ccode\u003e\u003ca\u003efromPlistWith\u003c/a\u003e\u003c/code\u003e is provided.  It is based\n on the same definition as the default implementation of \u003ccode\u003e\u003ca\u003efoldPList\u003c/a\u003e\u003c/code\u003e but\n also inserts a chosen transformation of the lifting.\n\u003c/p\u003e\u003cp\u003eQuestion for self: Is the PListCoalgebra context reasonable here?  \n Some rough calculations suggest that in the presence of fixed point \n type operators, it is possible to construct a PListCoalgebra for any \n InitialPList, which essentially is defined as pattern matching.  So, \n I'm not totally sure but I think this is reasonable - at least, for\n finitary signatures, which we're using as long as \u003ccode\u003ef\u003c/code\u003e doesn't go crazy.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "class",
        "fct-source": "src/Data-PropertyList-Algebra.html#InitialPList",
        "fct-type": "class",
        "title": "InitialPList"
      },
      "index": {
        "description": "An identification of the fact that the type has an initial plist algebra under some lifting Functional dependencies are in use for any type only one of its initial algebras if multiple apply which they may because the same type may be initial for multiple distinct liftings can be chosen and for any lifting only one type algebra may be chosen This is to make types decidable in the not-so-uncommon case where the lifting is encapsulated eg any time foldPList is partially applied for example see the signature of fromPlist For cases where the lifting either needs to be chosen or needs to be transformed to another lifting fromPlistWith is provided It is based on the same definition as the default implementation of foldPList but also inserts chosen transformation of the lifting Question for self Is the PListCoalgebra context reasonable here Some rough calculations suggest that in the presence of fixed point type operators it is possible to construct PListCoalgebra for any InitialPList which essentially is defined as pattern matching So not totally sure but think this is reasonable at least for finitary signatures which we re using as long as doesn go crazy",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "InitialPList",
        "normalized": "",
        "package": "property-list",
        "partial": "Initial PList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#t:PListAlgebra",
      "description": {
        "fct-descr": "\u003cp\u003eA class for types which can be constructed algebraically from the\n \u003ccode\u003e\u003ca\u003ePropertyListS\u003c/a\u003e\u003c/code\u003e signature (lifted by \u003ccode\u003ef\u003c/code\u003e) - in other words, types which\n you can put property lists into.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ef\u003c/code\u003e-lifting is provided to support extending the algebra.  The algebra\n is defined in a class rather than passing around functions because most of\n the time for any given type there is only one algebra you care about.\n\u003c/p\u003e\u003cp\u003eTypically a renderer for an output format will be implemented as a type\n with an \u003ccode\u003einstance \u003ccode\u003e\u003ca\u003ePListAlgebra\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.  For example, the XML \n output system is implemented in the \u003ccode\u003einstance \u003ccode\u003e\u003ca\u003ePListAlgebra\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e \n \u003ccode\u003eData.PropertyList.Xml.Types.Plist\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "class",
        "fct-source": "src/Data-PropertyList-Algebra.html#PListAlgebra",
        "fct-type": "class",
        "title": "PListAlgebra"
      },
      "index": {
        "description": "class for types which can be constructed algebraically from the PropertyListS signature lifted by in other words types which you can put property lists into The lifting is provided to support extending the algebra The algebra is defined in class rather than passing around functions because most of the time for any given type there is only one algebra you care about Typically renderer for an output format will be implemented as type with an instance PListAlgebra Identity For example the XML output system is implemented in the instance PListAlgebra Identity Data.PropertyList.Xml.Types.Plist",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "PListAlgebra",
        "normalized": "",
        "package": "property-list",
        "partial": "PList Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#t:PListCoalgebra",
      "description": {
        "fct-descr": "\u003cp\u003eA class for types which can be dissected (pattern-matched) into the\n \u003ccode\u003e\u003ca\u003ePropertyListS\u003c/a\u003e\u003c/code\u003e signature (lifted by \u003ccode\u003ef\u003c/code\u003e) - in other words, types which\n you can take property lists out of.\n\u003c/p\u003e\u003cp\u003eTypically a property list parser will be implemented as a type with a\n \u003ccode\u003e\u003ca\u003ePListCoalgebra\u003c/a\u003e\u003c/code\u003e instance, where \u003ccode\u003ef\u003c/code\u003e is either \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e in the case where\n the parser guarantees to return a fully well-formed property list \n (assuming it returns anything at all) or \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e \u003ccode\u003esomething\u003c/code\u003e when the \n parser only guarantees that the structure is sound (but that some elements\n might be defective, in which case a value of type \u003ccode\u003esomething\u003c/code\u003e would be \n substituted).  The XML parser, for example, is based on the latter \n approach, where \u003ccode\u003esomething\u003c/code\u003e is \u003ccode\u003eUnparsedPlistItem\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "class",
        "fct-source": "src/Data-PropertyList-Algebra.html#PListCoalgebra",
        "fct-type": "class",
        "title": "PListCoalgebra"
      },
      "index": {
        "description": "class for types which can be dissected pattern-matched into the PropertyListS signature lifted by in other words types which you can take property lists out of Typically property list parser will be implemented as type with PListCoalgebra instance where is either Identity in the case where the parser guarantees to return fully well-formed property list assuming it returns anything at all or Either something when the parser only guarantees that the structure is sound but that some elements might be defective in which case value of type something would be substituted The XML parser for example is based on the latter approach where something is UnparsedPlistItem",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "PListCoalgebra",
        "normalized": "",
        "package": "property-list",
        "partial": "PList Coalgebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#t:PartialPropertyList",
      "description": {
        "fct-descr": "\u003cp\u003eA partially-parsed property-list term algebra, parameterized over the type of\n \"structural holes\" in the terms.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Types.html#PartialPropertyList",
        "fct-type": "data",
        "title": "PartialPropertyList"
      },
      "index": {
        "description": "partially-parsed property-list term algebra parameterized over the type of structural holes in the terms",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "PartialPropertyList",
        "normalized": "",
        "package": "property-list",
        "partial": "Partial Property List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#t:PropertyList",
      "description": {
        "fct-descr": "\u003cp\u003eA fully-parsed property list.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Types.html#PropertyList",
        "fct-type": "data",
        "title": "PropertyList"
      },
      "index": {
        "description": "fully-parsed property list",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "PropertyList",
        "normalized": "",
        "package": "property-list",
        "partial": "Property List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#t:PropertyListItem",
      "description": {
        "fct-descr": "\u003cp\u003eA class for items which can be converted to and from property lists.  This\n is more general than \u003ccode\u003e\u003ca\u003ePListAlgebra\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePListCoalgebra\u003c/a\u003e\u003c/code\u003e, in that it allows\n for transformations that are not primitive-recursive.  This relaxation is\n necessary and desirable in the \u003ccode\u003e\u003ca\u003ePropertyListItem\u003c/a\u003e\u003c/code\u003e situation because we are \n more interested in composable injection/projection operations on than in\n universal maps.\n\u003c/p\u003e\u003cp\u003eThe algebraic interface also cannot work for arrays or dictionaries,\n because it only allows primitive (co-)recursion - the conversions can only\n operate on one \"layer\" of \u003ccode\u003e\u003ca\u003ePropertyListS\u003c/a\u003e\u003c/code\u003e at a time.  This could be \n handled by enlarging the types (from [t] to Either t [t], for example)\n or by encoding in-band (by taking a singleton list to be an element \n instead of a list, for example), but both of those \"solutions\" create\n headaches of their own, and in any case the algebraic interface is probably\n too bizarre for most users.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "class",
        "fct-source": "src/Data-PropertyList-PropertyListItem.html#PropertyListItem",
        "fct-type": "class",
        "title": "PropertyListItem"
      },
      "index": {
        "description": "class for items which can be converted to and from property lists This is more general than PListAlgebra and PListCoalgebra in that it allows for transformations that are not primitive-recursive This relaxation is necessary and desirable in the PropertyListItem situation because we are more interested in composable injection projection operations on than in universal maps The algebraic interface also cannot work for arrays or dictionaries because it only allows primitive co recursion the conversions can only operate on one layer of PropertyListS at time This could be handled by enlarging the types from to Either for example or by encoding in-band by taking singleton list to be an element instead of list for example but both of those solutions create headaches of their own and in any case the algebraic interface is probably too bizarre for most users",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "PropertyListItem",
        "normalized": "",
        "package": "property-list",
        "partial": "Property List Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#t:TerminalPList",
      "description": {
        "fct-descr": "\u003cp\u003eChosen terminal coalgebra for the given lifting, and chosen lifting\n for the given type.  See also \u003ccode\u003e\u003ca\u003eInitialPList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "class",
        "fct-source": "src/Data-PropertyList-Algebra.html#TerminalPList",
        "fct-type": "class",
        "title": "TerminalPList"
      },
      "index": {
        "description": "Chosen terminal coalgebra for the given lifting and chosen lifting for the given type See also InitialPList",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "TerminalPList",
        "normalized": "",
        "package": "property-list",
        "partial": "Terminal PList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#t:UnparsedBPListRecord",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "data",
        "title": "UnparsedBPListRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedBPListRecord",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed BPList Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#t:UnparsedXmlPlistItem",
      "description": {
        "fct-descr": "\u003cp\u003eA representation of values that were structurally sound in the \n property list file but the contents of which couldn't be interpreted\n as what they claimed to be.  The result of the initial parse phase will\n typically be a \u003ccode\u003ePartialPropertyList UnparsedXmlPlistItem\u003c/code\u003e, and if\n the whole plist was parsed properly will contain no actual values \n of this type.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "data",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "data",
        "title": "UnparsedXmlPlistItem"
      },
      "index": {
        "description": "representation of values that were structurally sound in the property list file but the contents of which couldn be interpreted as what they claimed to be The result of the initial parse phase will typically be PartialPropertyList UnparsedXmlPlistItem and if the whole plist was parsed properly will contain no actual values of this type",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedXmlPlistItem",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Xml Plist Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:MissingObjectRef",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "MissingObjectRef Word64",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "MissingObjectRef"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "MissingObjectRef",
        "normalized": "",
        "package": "property-list",
        "partial": "Missing Object Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:UnparsedData",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UnparsedData String",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "function",
        "title": "UnparsedData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedData",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:UnparsedDate",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UnparsedDate String",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "function",
        "title": "UnparsedDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedDate",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Date",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:UnparsedDict",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UnparsedDict [Word64] [Word64]",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "UnparsedDict"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedDict",
        "normalized": "UnparsedDict[Word][Word]",
        "package": "property-list",
        "partial": "Unparsed Dict",
        "signature": "UnparsedDict[Word][Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:UnparsedFill",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UnparsedFill",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "UnparsedFill"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedFill",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Fill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:UnparsedInt",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UnparsedInt String",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "function",
        "title": "UnparsedInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedInt",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:UnparsedNull",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UnparsedNull",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "UnparsedNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedNull",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:UnparsedReal",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UnparsedReal String",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "function",
        "title": "UnparsedReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedReal",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Real",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:UnparsedSet",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UnparsedSet [Word64]",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "UnparsedSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedSet",
        "normalized": "UnparsedSet[Word]",
        "package": "property-list",
        "partial": "Unparsed Set",
        "signature": "UnparsedSet[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:UnparsedUID",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UnparsedUID Integer",
        "fct-source": "src/Data-PropertyList-Binary-Types.html#UnparsedBPListRecord",
        "fct-type": "function",
        "title": "UnparsedUID"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedUID",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed UID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:UnparsedXml",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UnparsedXml Element",
        "fct-source": "src/Data-PropertyList-Xml-Algebra.html#UnparsedXmlPlistItem",
        "fct-type": "function",
        "title": "UnparsedXml"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "UnparsedXml",
        "normalized": "",
        "package": "property-list",
        "partial": "Unparsed Xml",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:alterItemAtKeyPath",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ealterItemAtKeyPath path f\u003c/code\u003e applies the function \u003ccode\u003ef\u003c/code\u003e deep inside the \n \u003ccode\u003e\u003ca\u003ePropertyList\u003c/a\u003e\u003c/code\u003e on the property list item at the given key-path \u003ccode\u003epath\u003c/code\u003e\n (if possible).  This is the same notion of key path as is used in the \n Apple plist APIs - namely, each component of the path indicates descending \n into a dictionary by selecting the element with that key (if any).  If a \n key is not found, it is created.  If a key is found but is not a \n dictionary, the operation fails (with \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eIf the result of \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, and the resulting dictionary is empty,\n that dictionary is deleted in the result (and any empty parent dictionaries).\n If this is not the behavior you want, you should alter the parent dictionary \n itself and return an empty one.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "[String] -\u003e (Maybe i -\u003e Maybe i') -\u003e Maybe PropertyList -\u003e Maybe PropertyList",
        "fct-source": "src/Data-PropertyList-KeyPath.html#alterItemAtKeyPath",
        "fct-type": "function",
        "title": "alterItemAtKeyPath"
      },
      "index": {
        "description": "alterItemAtKeyPath path applies the function deep inside the PropertyList on the property list item at the given key-path path if possible This is the same notion of key path as is used in the Apple plist APIs namely each component of the path indicates descending into dictionary by selecting the element with that key if any If key is not found it is created If key is found but is not dictionary the operation fails with error If the result of is Nothing and the resulting dictionary is empty that dictionary is deleted in the result and any empty parent dictionaries If this is not the behavior you want you should alter the parent dictionary itself and return an empty one",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "alterItemAtKeyPath",
        "normalized": "[String]-\u003e(Maybe a-\u003eMaybe b)-\u003eMaybe PropertyList-\u003eMaybe PropertyList",
        "package": "property-list",
        "partial": "Item At Key Path",
        "signature": "[String]-\u003e(Maybe i-\u003eMaybe i')-\u003eMaybe PropertyList-\u003eMaybe PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:alterItemAtKeyPathM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ealterItemAtKeyPathM path f\u003c/code\u003e applies the function \u003ccode\u003ef\u003c/code\u003e deep inside the \n \u003ccode\u003e\u003ca\u003ePropertyList\u003c/a\u003e\u003c/code\u003e on the property list item at the given key-path \u003ccode\u003epath\u003c/code\u003e\n (if possible).  This is the same notion of key path as is used in the \n Apple plist APIs - each component of the path indicates descending \n into a dictionary by selecting the element with that key (if any).  If a \n key is not found, it is created.  If a key is found but is not a \n dictionary, the operation fails (with \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e from the \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e class).\n\u003c/p\u003e\u003cp\u003eIf the result of \u003ccode\u003ef\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, and the resulting dictionary is empty,\n that dictionary is deleted in the result (and any empty parent dictionaries).\n If this is not the behavior you want, you should alter the parent dictionary \n itself and return an empty one.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "[String] -\u003e (Maybe i -\u003e m (Maybe i')) -\u003e Maybe PropertyList -\u003e m (Maybe PropertyList)",
        "fct-source": "src/Data-PropertyList-KeyPath.html#alterItemAtKeyPathM",
        "fct-type": "function",
        "title": "alterItemAtKeyPathM"
      },
      "index": {
        "description": "alterItemAtKeyPathM path applies the function deep inside the PropertyList on the property list item at the given key-path path if possible This is the same notion of key path as is used in the Apple plist APIs each component of the path indicates descending into dictionary by selecting the element with that key if any If key is not found it is created If key is found but is not dictionary the operation fails with fail from the Monad class If the result of is Nothing and the resulting dictionary is empty that dictionary is deleted in the result and any empty parent dictionaries If this is not the behavior you want you should alter the parent dictionary itself and return an empty one",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "alterItemAtKeyPathM",
        "normalized": "[String]-\u003e(Maybe a-\u003eb(Maybe c))-\u003eMaybe PropertyList-\u003eb(Maybe PropertyList)",
        "package": "property-list",
        "partial": "Item At Key Path",
        "signature": "[String]-\u003e(Maybe i-\u003em(Maybe i'))-\u003eMaybe PropertyList-\u003em(Maybe PropertyList)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:encodeBinaryPropertyList",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "PropertyList -\u003e ByteString",
        "fct-source": "src/Data-PropertyList-Binary.html#encodeBinaryPropertyList",
        "fct-type": "function",
        "title": "encodeBinaryPropertyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "encodeBinaryPropertyList",
        "normalized": "PropertyList-\u003eByteString",
        "package": "property-list",
        "partial": "Binary Property List",
        "signature": "PropertyList-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:fromPlArray",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe [a]",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlArray",
        "fct-type": "function",
        "title": "fromPlArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "fromPlArray",
        "normalized": "a-\u003eMaybe[a]",
        "package": "property-list",
        "partial": "Pl Array",
        "signature": "a-\u003eMaybe[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:fromPlBool",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe Bool",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlBool",
        "fct-type": "function",
        "title": "fromPlBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "fromPlBool",
        "normalized": "a-\u003eMaybe Bool",
        "package": "property-list",
        "partial": "Pl Bool",
        "signature": "a-\u003eMaybe Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:fromPlData",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe ByteString",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlData",
        "fct-type": "function",
        "title": "fromPlData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "fromPlData",
        "normalized": "a-\u003eMaybe ByteString",
        "package": "property-list",
        "partial": "Pl Data",
        "signature": "a-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:fromPlDate",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe UTCTime",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlDate",
        "fct-type": "function",
        "title": "fromPlDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "fromPlDate",
        "normalized": "a-\u003eMaybe UTCTime",
        "package": "property-list",
        "partial": "Pl Date",
        "signature": "a-\u003eMaybe UTCTime"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:fromPlDict",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe (Map String a)",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlDict",
        "fct-type": "function",
        "title": "fromPlDict"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "fromPlDict",
        "normalized": "a-\u003eMaybe(Map String a)",
        "package": "property-list",
        "partial": "Pl Dict",
        "signature": "a-\u003eMaybe(Map String a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:fromPlInt",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe Integer",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlInt",
        "fct-type": "function",
        "title": "fromPlInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "fromPlInt",
        "normalized": "a-\u003eMaybe Integer",
        "package": "property-list",
        "partial": "Pl Int",
        "signature": "a-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:fromPlReal",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe Double",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlReal",
        "fct-type": "function",
        "title": "fromPlReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "fromPlReal",
        "normalized": "a-\u003eMaybe Double",
        "package": "property-list",
        "partial": "Pl Real",
        "signature": "a-\u003eMaybe Double"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:fromPlString",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "a -\u003e Maybe String",
        "fct-source": "src/Data-PropertyList-Algebra.html#fromPlString",
        "fct-type": "function",
        "title": "fromPlString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "fromPlString",
        "normalized": "a-\u003eMaybe String",
        "package": "property-list",
        "partial": "Pl String",
        "signature": "a-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:fromPropertyList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a property list to a property list item if its contents\n _exactly_ fit the target type.  Note that when using types\n such as \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e (as opposed to \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003ePropertyList\u003c/a\u003e\u003c/code\u003e) this will mean that a single element of the \n dictionary of a non-\u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e type will cause the entire conversion to\n fail.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "PropertyList -\u003e Maybe i",
        "fct-source": "src/Data-PropertyList-PropertyListItem.html#fromPropertyList",
        "fct-type": "method",
        "title": "fromPropertyList"
      },
      "index": {
        "description": "Convert property list to property list item if its contents exactly fit the target type Note that when using types such as Map String Int as opposed to Map String PropertyList this will mean that single element of the dictionary of non Int type will cause the entire conversion to fail",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "fromPropertyList",
        "normalized": "PropertyList-\u003eMaybe a",
        "package": "property-list",
        "partial": "Property List",
        "signature": "PropertyList-\u003eMaybe i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:getItemAtKeyPath",
      "description": {
        "fct-descr": "\u003cp\u003eGets the item, if any (and if convertible to the required type), \n at a given key path.  If the key path passes through something that \n is not a dictionary, the operation returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "[String] -\u003e Maybe PropertyList -\u003e Maybe i",
        "fct-source": "src/Data-PropertyList-KeyPath.html#getItemAtKeyPath",
        "fct-type": "function",
        "title": "getItemAtKeyPath"
      },
      "index": {
        "description": "Gets the item if any and if convertible to the required type at given key path If the key path passes through something that is not dictionary the operation returns Nothing",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "getItemAtKeyPath",
        "normalized": "[String]-\u003eMaybe PropertyList-\u003eMaybe a",
        "package": "property-list",
        "partial": "Item At Key Path",
        "signature": "[String]-\u003eMaybe PropertyList-\u003eMaybe i"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:listFromPropertyList",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "PropertyList -\u003e Maybe [i]",
        "fct-source": "src/Data-PropertyList-PropertyListItem.html#listFromPropertyList",
        "fct-type": "method",
        "title": "listFromPropertyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "listFromPropertyList",
        "normalized": "PropertyList-\u003eMaybe[a]",
        "package": "property-list",
        "partial": "From Property List",
        "signature": "PropertyList-\u003eMaybe[i]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:listToPropertyList",
      "description": {
        "fct-descr": "\u003cp\u003eIn order to support a general instance for lists without breaking\n String, we use the same trick as the Prelude uses for Show.\n Generally, the list methods should not be overridden, and maybe\n they shouldn't even be exported.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "[i] -\u003e PropertyList",
        "fct-source": "src/Data-PropertyList-PropertyListItem.html#listToPropertyList",
        "fct-type": "method",
        "title": "listToPropertyList"
      },
      "index": {
        "description": "In order to support general instance for lists without breaking String we use the same trick as the Prelude uses for Show Generally the list methods should not be overridden and maybe they shouldn even be exported",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "listToPropertyList",
        "normalized": "[a]-\u003ePropertyList",
        "package": "property-list",
        "partial": "To Property List",
        "signature": "[i]-\u003ePropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:plArray",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plArray",
        "fct-type": "function",
        "title": "plArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "plArray",
        "normalized": "[a]-\u003ea",
        "package": "property-list",
        "partial": "Array",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:plBool",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "Bool -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plBool",
        "fct-type": "function",
        "title": "plBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "plBool",
        "normalized": "Bool-\u003ea",
        "package": "property-list",
        "partial": "Bool",
        "signature": "Bool-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:plData",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plData",
        "fct-type": "function",
        "title": "plData"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "plData",
        "normalized": "ByteString-\u003ea",
        "package": "property-list",
        "partial": "Data",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:plDate",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "UTCTime -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plDate",
        "fct-type": "function",
        "title": "plDate"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "plDate",
        "normalized": "UTCTime-\u003ea",
        "package": "property-list",
        "partial": "Date",
        "signature": "UTCTime-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:plDict",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "Map String a -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plDict",
        "fct-type": "function",
        "title": "plDict"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "plDict",
        "normalized": "Map String a-\u003ea",
        "package": "property-list",
        "partial": "Dict",
        "signature": "Map String a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:plInt",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "Integer -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plInt",
        "fct-type": "function",
        "title": "plInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "plInt",
        "normalized": "Integer-\u003ea",
        "package": "property-list",
        "partial": "Int",
        "signature": "Integer-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:plReal",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "Double -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plReal",
        "fct-type": "function",
        "title": "plReal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "plReal",
        "normalized": "Double-\u003ea",
        "package": "property-list",
        "partial": "Real",
        "signature": "Double-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:plString",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Data-PropertyList-Algebra.html#plString",
        "fct-type": "function",
        "title": "plString"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "plString",
        "normalized": "String-\u003ea",
        "package": "property-list",
        "partial": "String",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:readBinaryPropertyList",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "ByteString -\u003e Either String PropertyList",
        "fct-source": "src/Data-PropertyList-Binary.html#readBinaryPropertyList",
        "fct-type": "function",
        "title": "readBinaryPropertyList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "readBinaryPropertyList",
        "normalized": "ByteString-\u003eEither String PropertyList",
        "package": "property-list",
        "partial": "Binary Property List",
        "signature": "ByteString-\u003eEither String PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:readBinaryPropertyListFromFile",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e IO PropertyList",
        "fct-source": "src/Data-PropertyList-Binary.html#readBinaryPropertyListFromFile",
        "fct-type": "function",
        "title": "readBinaryPropertyListFromFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "readBinaryPropertyListFromFile",
        "normalized": "FilePath-\u003eIO PropertyList",
        "package": "property-list",
        "partial": "Binary Property List From File",
        "signature": "FilePath-\u003eIO PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:readPropertyListFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a property list from a file, trying all supported property list formats.\n Presently, the \"XML1\" and \"bplist00\" formats are supported.  See also\n \u003ccode\u003e\u003ca\u003ereadXmlPropertyListFromFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereadBinaryPropertyListFromFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e IO PropertyList",
        "fct-source": "src/Data-PropertyList.html#readPropertyListFromFile",
        "fct-type": "function",
        "title": "readPropertyListFromFile"
      },
      "index": {
        "description": "Read property list from file trying all supported property list formats Presently the XML1 and bplist00 formats are supported See also readXmlPropertyListFromFile and readBinaryPropertyListFromFile",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "readPropertyListFromFile",
        "normalized": "FilePath-\u003eIO PropertyList",
        "package": "property-list",
        "partial": "Property List From File",
        "signature": "FilePath-\u003eIO PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:readXmlPropertyList",
      "description": {
        "fct-descr": "\u003cp\u003eRead a property list from a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in the xml1 format.  If parsing\n fails, returns a description of the problem in the \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "String -\u003e Either String PropertyList",
        "fct-source": "src/Data-PropertyList-Xml.html#readXmlPropertyList",
        "fct-type": "function",
        "title": "readXmlPropertyList"
      },
      "index": {
        "description": "Read property list from String in the xml1 format If parsing fails returns description of the problem in the Left result",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "readXmlPropertyList",
        "normalized": "String-\u003eEither String PropertyList",
        "package": "property-list",
        "partial": "Xml Property List",
        "signature": "String-\u003eEither String PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:readXmlPropertyListFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a property list from a file in the xml1 format.  If parsing fails,\n calls \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e IO PropertyList",
        "fct-source": "src/Data-PropertyList-Xml.html#readXmlPropertyListFromFile",
        "fct-type": "function",
        "title": "readXmlPropertyListFromFile"
      },
      "index": {
        "description": "Read property list from file in the xml1 format If parsing fails calls fail",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "readXmlPropertyListFromFile",
        "normalized": "FilePath-\u003eIO PropertyList",
        "package": "property-list",
        "partial": "Xml Property List From File",
        "signature": "FilePath-\u003eIO PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:setItemAtKeyPath",
      "description": {
        "fct-descr": "\u003cp\u003eSets the item at a given key-path.  If the key path does not exist, it is\n created.  If it exists but passes through something that is not a dictionary,\n the operation fails (with \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "[String] -\u003e Maybe i -\u003e Maybe PropertyList -\u003e Maybe PropertyList",
        "fct-source": "src/Data-PropertyList-KeyPath.html#setItemAtKeyPath",
        "fct-type": "function",
        "title": "setItemAtKeyPath"
      },
      "index": {
        "description": "Sets the item at given key-path If the key path does not exist it is created If it exists but passes through something that is not dictionary the operation fails with error",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "setItemAtKeyPath",
        "normalized": "[String]-\u003eMaybe a-\u003eMaybe PropertyList-\u003eMaybe PropertyList",
        "package": "property-list",
        "partial": "Item At Key Path",
        "signature": "[String]-\u003eMaybe i-\u003eMaybe PropertyList-\u003eMaybe PropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:showXmlPropertyList",
      "description": {
        "fct-descr": "\u003cp\u003eRender a propertylist to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in the xml1 plist format from any\n initial propertylist type  (which includes \u003ccode\u003e\u003ca\u003ePropertyList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePartialPropertyList\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003eUnparsedPlistItem\u003c/code\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePartialPropertyList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ePlistItem\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "pl -\u003e String",
        "fct-source": "src/Data-PropertyList-Xml.html#showXmlPropertyList",
        "fct-type": "function",
        "title": "showXmlPropertyList"
      },
      "index": {
        "description": "Render propertylist to String in the xml1 plist format from any initial propertylist type which includes PropertyList PartialPropertyList UnparsedPlistItem and PartialPropertyList PlistItem",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "showXmlPropertyList",
        "normalized": "a-\u003eString",
        "package": "property-list",
        "partial": "Xml Property List",
        "signature": "pl-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:toPropertyList",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a \u003ccode\u003e\u003ca\u003ePropertyList\u003c/a\u003e\u003c/code\u003e from the item.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "i -\u003e PropertyList",
        "fct-source": "src/Data-PropertyList-PropertyListItem.html#toPropertyList",
        "fct-type": "method",
        "title": "toPropertyList"
      },
      "index": {
        "description": "Construct PropertyList from the item",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "toPropertyList",
        "normalized": "a-\u003ePropertyList",
        "package": "property-list",
        "partial": "Property List",
        "signature": "i-\u003ePropertyList"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:writeBinaryPropertyListToFile",
      "description": {
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e PropertyList -\u003e IO ()",
        "fct-source": "src/Data-PropertyList-Binary.html#writeBinaryPropertyListToFile",
        "fct-type": "function",
        "title": "writeBinaryPropertyListToFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "writeBinaryPropertyListToFile",
        "normalized": "FilePath-\u003ePropertyList-\u003eIO()",
        "package": "property-list",
        "partial": "Binary Property List To File",
        "signature": "FilePath-\u003ePropertyList-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:writePropertyListToFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a property list to a file, using a \"preferred\" property list format.\n Presently, that is the \"XML1\" format.  See also \u003ccode\u003e\u003ca\u003ewriteXmlPropertyListToFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e PropertyList -\u003e IO ()",
        "fct-source": "src/Data-PropertyList.html#writePropertyListToFile",
        "fct-type": "function",
        "title": "writePropertyListToFile"
      },
      "index": {
        "description": "Write property list to file using preferred property list format Presently that is the XML1 format See also writeXmlPropertyListToFile",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "writePropertyListToFile",
        "normalized": "FilePath-\u003ePropertyList-\u003eIO()",
        "package": "property-list",
        "partial": "Property List To File",
        "signature": "FilePath-\u003ePropertyList-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/property-list/docs/Data-PropertyList.html#v:writeXmlPropertyListToFile",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a propertylist to a file in the xml1 plist format from any\n initial propertylist type  (which includes \u003ccode\u003e\u003ca\u003ePropertyList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePartialPropertyList\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003eUnparsedPlistItem\u003c/code\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePartialPropertyList\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ePlistItem\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.PropertyList",
        "fct-package": "property-list",
        "fct-signature": "FilePath -\u003e PropertyList -\u003e IO ()",
        "fct-source": "src/Data-PropertyList-Xml.html#writeXmlPropertyListToFile",
        "fct-type": "function",
        "title": "writeXmlPropertyListToFile"
      },
      "index": {
        "description": "Output propertylist to file in the xml1 plist format from any initial propertylist type which includes PropertyList PartialPropertyList UnparsedPlistItem and PartialPropertyList PlistItem",
        "hierarchy": "Data PropertyList",
        "module": "Data.PropertyList",
        "name": "writeXmlPropertyListToFile",
        "normalized": "FilePath-\u003ePropertyList-\u003eIO()",
        "package": "property-list",
        "partial": "Xml Property List To File",
        "signature": "FilePath-\u003ePropertyList-\u003eIO()"
      }
    }
  }
]