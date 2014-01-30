[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSafeCopy extends the parsing and serialization capabilities of Data.Serialize\n to include nested version control. Nested version control means that you\n can change the definition and binary format of a type nested deep within\n other types without problems.\n\u003c/p\u003e\u003cp\u003eConsider this scenario. You want to store your contact list on disk\n and so write the following code:\n\u003c/p\u003e\u003cpre\u003e\ntype Name     = String\ntype Address  = String\ndata Contacts = Contacts [(Name, Address)]\ninstance SafeCopy Contacts where\n     putCopy (Contacts list) = contain $ safePut list\n     getCopy = contain $ Contacts \u003c$\u003e safeGet\n\u003c/pre\u003e\u003cp\u003eAt this point, everything is fine. You get the awesome speed of Data.Serialize\n together with Haskell's ease of use. However, things quickly take a U-turn for the worse\n when you realize that you want to keep phone numbers as well as names and\n addresses. Being the experienced coder that you are, you see that using a 3-tuple\n isn't very pretty and you'd rather use a record. At first you fear that this\n change in structure will invalidate all your old data. Those fears are quickly quelled,\n though, when you remember how nifty SafeCopy is. With renewed enthusiasm,\n you set out and write the following code:\n\u003c/p\u003e\u003cpre\u003e\ntype Name = String\ntype Address = String\ntype Phone = String\n\n{- We rename our old Contacts structure -}\ndata Contacts_v0 = Contacts_v0 [(Name, Address)]\ninstance SafeCopy Contacts_v0 where\n     putCopy (Contacts_v0 list) = contain $ safePut list\n     getCopy = contain $ Contacts_v0 \u003c$\u003e safeGet\n\ndata Contact = Contact { name    :: Name\n                        , address :: Address\n                        , phone   :: Phone }\ninstance SafeCopy Contact where\n    putCopy Contact{..} = contain $ do safePut name; safePut address; safePut phone\n    getCopy = contain $ Contact \u003c$\u003e safeGet \u003c*\u003e safeGet \u003c*\u003e safeGet\n\ndata Contacts = Contacts [Contact]\ninstance SafeCopy Contacts where\n     version = 2\n     kind = extension\n     putCopy (Contacts contacts) = contain $ safePut contacts\n     getCopy = contain $ Contacts \u003c$\u003e safeGet\n\n{- Here the magic happens: -}\ninstance Migrate Contacts where\n     type MigrateFrom Contacts = Contacts_v0\n     migrate (Contacts_v0 contacts) = Contacts [ Contact{ name    = name\n                                                        , address = address\n                                                        , phone   = \"\" }\n                                               | (name, address) \u003c- contacts ]\n\u003c/pre\u003e\u003cp\u003eWith this, you reflect on your code and you are happy. You feel confident in the safety of\n your data and you know you can remove \u003ccode\u003eContacts_v0\u003c/code\u003e once you no longer wish to support\n that legacy format.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "module",
        "fct-source": "src/Data-SafeCopy.html",
        "fct-type": "module",
        "title": "SafeCopy"
      },
      "index": {
        "description": "SafeCopy extends the parsing and serialization capabilities of Data.Serialize to include nested version control Nested version control means that you can change the definition and binary format of type nested deep within other types without problems Consider this scenario You want to store your contact list on disk and so write the following code type Name String type Address String data Contacts Contacts Name Address instance SafeCopy Contacts where putCopy Contacts list contain safePut list getCopy contain Contacts safeGet At this point everything is fine You get the awesome speed of Data.Serialize together with Haskell ease of use However things quickly take U-turn for the worse when you realize that you want to keep phone numbers as well as names and addresses Being the experienced coder that you are you see that using tuple isn very pretty and you rather use record At first you fear that this change in structure will invalidate all your old data Those fears are quickly quelled though when you remember how nifty SafeCopy is With renewed enthusiasm you set out and write the following code type Name String type Address String type Phone String We rename our old Contacts structure data Contacts v0 Contacts v0 Name Address instance SafeCopy Contacts v0 where putCopy Contacts v0 list contain safePut list getCopy contain Contacts v0 safeGet data Contact Contact name Name address Address phone Phone instance SafeCopy Contact where putCopy Contact contain do safePut name safePut address safePut phone getCopy contain Contact safeGet safeGet safeGet data Contacts Contacts Contact instance SafeCopy Contacts where version kind extension putCopy Contacts contacts contain safePut contacts getCopy contain Contacts safeGet Here the magic happens instance Migrate Contacts where type MigrateFrom Contacts Contacts v0 migrate Contacts v0 contacts Contacts Contact name name address address phone name address contacts With this you reflect on your code and you are happy You feel confident in the safety of your data and you know you can remove Contacts v0 once you no longer wish to support that legacy format",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "SafeCopy",
        "normalized": "",
        "package": "safecopy",
        "partial": "Safe Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Contained",
      "description": {
        "fct-descr": "\u003cp\u003eTo ensure that no-one reads or writes values without handling versions\n   correct, it is necessary to restrict access to \u003ccode\u003e\u003ca\u003egetCopy\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputCopy\u003c/a\u003e\u003c/code\u003e.\n   This is where \u003ccode\u003e\u003ca\u003eContained\u003c/a\u003e\u003c/code\u003e enters the picture. It allows you to put\n   values in to a container but not to take them out again.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "data",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Contained",
        "fct-type": "data",
        "title": "Contained"
      },
      "index": {
        "description": "To ensure that no-one reads or writes values without handling versions correct it is necessary to restrict access to getCopy and putCopy This is where Contained enters the picture It allows you to put values in to container but not to take them out again",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "Contained",
        "normalized": "",
        "package": "safecopy",
        "partial": "Contained",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Kind",
      "description": {
        "fct-descr": "\u003cp\u003eThe kind of a data type determines how it is tagged (if at all).\n\u003c/p\u003e\u003cp\u003ePrimitives kinds (see \u003ccode\u003e\u003ca\u003eprimitive\u003c/a\u003e\u003c/code\u003e) are not tagged with a version\n   id and hence cannot be extended later.\n\u003c/p\u003e\u003cp\u003eExtensions (see \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e) tells the system that there exists\n   a previous version of the data type which should be migrated if\n   needed.\n\u003c/p\u003e\u003cp\u003eThere is also a default kind which is neither primitive nor is\n   an extension of a previous type.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "data",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Kind",
        "fct-type": "data",
        "title": "Kind"
      },
      "index": {
        "description": "The kind of data type determines how it is tagged if at all Primitives kinds see primitive are not tagged with version id and hence cannot be extended later Extensions see extension tells the system that there exists previous version of the data type which should be migrated if needed There is also default kind which is neither primitive nor is an extension of previous type",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "Kind",
        "normalized": "",
        "package": "safecopy",
        "partial": "Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Migrate",
      "description": {
        "fct-descr": "\u003cp\u003eThe central mechanism for dealing with version control.\n\u003c/p\u003e\u003cp\u003eThis type class specifies what data migrations can happen\n   and how they happen.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "class",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Migrate",
        "fct-type": "class",
        "title": "Migrate"
      },
      "index": {
        "description": "The central mechanism for dealing with version control This type class specifies what data migrations can happen and how they happen",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "Migrate",
        "normalized": "",
        "package": "safecopy",
        "partial": "Migrate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Prim",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for data that was saved without a version tag.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "newtype",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Prim",
        "fct-type": "newtype",
        "title": "Prim"
      },
      "index": {
        "description": "Wrapper for data that was saved without version tag",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "Prim",
        "normalized": "",
        "package": "safecopy",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Profile",
      "description": {
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "data",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Profile",
        "fct-type": "data",
        "title": "Profile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "Profile",
        "normalized": "",
        "package": "safecopy",
        "partial": "Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Reverse",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a wrapper type used migrating backwards in the chain of compatible types.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "newtype",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Reverse",
        "fct-type": "newtype",
        "title": "Reverse"
      },
      "index": {
        "description": "This is wrapper type used migrating backwards in the chain of compatible types",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "Reverse",
        "normalized": "",
        "package": "safecopy",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:SafeCopy",
      "description": {
        "fct-descr": "\u003cp\u003eThe centerpiece of this library. Defines a version for a data type\n   together with how it should be serialized/parsed.\n\u003c/p\u003e\u003cp\u003eUsers should define instances of \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e for their types\n   even though \u003ccode\u003e\u003ca\u003egetCopy\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputCopy\u003c/a\u003e\u003c/code\u003e can't be used directly.\n   To serialize/parse a data type using \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003esafePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "class",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#SafeCopy",
        "fct-type": "class",
        "title": "SafeCopy"
      },
      "index": {
        "description": "The centerpiece of this library Defines version for data type together with how it should be serialized parsed Users should define instances of SafeCopy for their types even though getCopy and putCopy can be used directly To serialize parse data type using SafeCopy see safeGet and safePut",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "SafeCopy",
        "normalized": "",
        "package": "safecopy",
        "partial": "Safe Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Version",
      "description": {
        "fct-descr": "\u003cp\u003eA simple numeric version id.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "data",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Version",
        "fct-type": "data",
        "title": "Version"
      },
      "index": {
        "description": "simple numeric version id",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "Version",
        "normalized": "",
        "package": "safecopy",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:InvalidProfile",
      "description": {
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "InvalidProfile String",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Profile",
        "fct-type": "function",
        "title": "InvalidProfile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "InvalidProfile",
        "normalized": "",
        "package": "safecopy",
        "partial": "Invalid Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:Prim",
      "description": {
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Prim",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Prim",
        "fct-type": "function",
        "title": "Prim"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "Prim",
        "normalized": "",
        "package": "safecopy",
        "partial": "Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:PrimitiveProfile",
      "description": {
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "PrimitiveProfile",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Profile",
        "fct-type": "function",
        "title": "PrimitiveProfile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "PrimitiveProfile",
        "normalized": "",
        "package": "safecopy",
        "partial": "Primitive Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:Profile",
      "description": {
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Profile",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Profile",
        "fct-type": "function",
        "title": "Profile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "Profile",
        "normalized": "",
        "package": "safecopy",
        "partial": "Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:Reverse",
      "description": {
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Reverse",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Reverse",
        "fct-type": "function",
        "title": "Reverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "Reverse",
        "normalized": "",
        "package": "safecopy",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:base",
      "description": {
        "fct-descr": "\u003cp\u003eThe default kind. Does not extend any type.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Kind a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#base",
        "fct-type": "function",
        "title": "base"
      },
      "index": {
        "description": "The default kind Does not extend any type",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "base",
        "normalized": "",
        "package": "safecopy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:contain",
      "description": {
        "fct-descr": "\u003cp\u003ePlace a value in an unbreakable container.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "a -\u003e Contained a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#contain",
        "fct-type": "function",
        "title": "contain"
      },
      "index": {
        "description": "Place value in an unbreakable container",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "contain",
        "normalized": "a-\u003eContained a",
        "package": "safecopy",
        "partial": "",
        "signature": "a-\u003eContained a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopy",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance of \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen serializing, we put a \u003ccode\u003eWord8\u003c/code\u003e describing the\n   constructor (if the data type has more than one\n   constructor).  For each type used in the constructor, we\n   call \u003ccode\u003e\u003ca\u003egetSafePut\u003c/a\u003e\u003c/code\u003e (which immediately serializes the version\n   of the type).  Then, for each field in the constructor, we\n   use one of the put functions obtained in the last step.\n\u003c/p\u003e\u003cp\u003eFor example, given the data type and the declaration below\n\u003c/p\u003e\u003cpre\u003e\ndata T0 b = T0 b Int\nderiveSafeCopy 1 'base ''T0\n\u003c/pre\u003e\u003cp\u003ewe generate\n\u003c/p\u003e\u003cpre\u003e\ninstance (SafeCopy a, SafeCopy b) =\u003e\n         SafeCopy (T0 b) where\n    putCopy (T0 arg1 arg2) = contain $ do put_b   \u003c- getSafePut\n                                          put_Int \u003c- getSafePut\n                                          put_b   arg1\n                                          put_Int arg2\n                                          return ()\n    getCopy = contain $ do get_b   \u003c- getSafeGet\n                           get_Int \u003c- getSafeGet\n                           return T0 \u003c*\u003e get_b \u003c*\u003e get_Int\n    version = 1\n    kind = base\n\u003c/pre\u003e\u003cp\u003eAnd, should we create another data type as a newer version of \u003ccode\u003eT0\u003c/code\u003e, such as\n\u003c/p\u003e\u003cpre\u003e\ndata T a b = C a a | D b Int\nderiveSafeCopy 2 'extension ''T\n\ninstance SafeCopy b =\u003e Migrate (T a b) where\n  type MigrateFrom (T a b) = T0 b\n  migrate (T0 b i) = D b i\n\u003c/pre\u003e\u003cp\u003ewe generate\n\u003c/p\u003e\u003cpre\u003e\ninstance (SafeCopy a, SafeCopy b) =\u003e\n         SafeCopy (T a b) where\n    putCopy (C arg1 arg2) = contain $ do putWord8 0\n                                         put_a \u003c- getSafePut\n                                         put_a arg1\n                                         put_a arg2\n                                         return ()\n    putCopy (D arg1 arg2) = contain $ do putWord8 1\n                                         put_b   \u003c- getSafePut\n                                         put_Int \u003c- getSafePut\n                                         put_b   arg1\n                                         put_Int arg2\n                                         return ()\n    getCopy = contain $ do tag \u003c- getWord8\n                           case tag of\n                             0 -\u003e do get_a \u003c- getSafeGet\n                                     return C \u003c*\u003e get_a \u003c*\u003e get_a\n                             1 -\u003e do get_b   \u003c- getSafeGet\n                                     get_Int \u003c- getSafeGet\n                                     return D \u003c*\u003e get_b \u003c*\u003e get_Int\n                             _ -\u003e fail $ \"Could not identify tag \\\"\" ++\n                                         show tag ++ \"\\\" for type Main.T \" ++\n                                         \"that has only 2 constructors.  \" ++\n                                         \"Maybe your data is corrupted?\"\n    version = 2\n    kind = extension\n\u003c/pre\u003e\u003cp\u003eNote that by using getSafePut, we saved 4 bytes in the case\n   of the \u003ccode\u003eC\u003c/code\u003e constructor.  For \u003ccode\u003eD\u003c/code\u003e and \u003ccode\u003eT0\u003c/code\u003e, we didn't save\n   anything.  The instance derived by this function always use\n   at most the same space as those generated by\n   \u003ccode\u003e\u003ca\u003ederiveSafeCopySimple\u003c/a\u003e\u003c/code\u003e, but never more (as we don't call\n   'getSafePut'/'getSafeGet' for types that aren't needed).\n\u003c/p\u003e\u003cp\u003eNote that you may use \u003ccode\u003e\u003ca\u003ederiveSafeCopySimple\u003c/a\u003e\u003c/code\u003e with one\n   version of your data type and \u003ccode\u003e\u003ca\u003ederiveSafeCopy\u003c/a\u003e\u003c/code\u003e in another\n   version without any problems.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Version a -\u003e Name -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Data-SafeCopy-Derive.html#deriveSafeCopy",
        "fct-type": "function",
        "title": "deriveSafeCopy"
      },
      "index": {
        "description": "Derive an instance of SafeCopy When serializing we put Word8 describing the constructor if the data type has more than one constructor For each type used in the constructor we call getSafePut which immediately serializes the version of the type Then for each field in the constructor we use one of the put functions obtained in the last step For example given the data type and the declaration below data T0 T0 Int deriveSafeCopy base T0 we generate instance SafeCopy SafeCopy SafeCopy T0 where putCopy T0 arg1 arg2 contain do put getSafePut put Int getSafePut put arg1 put Int arg2 return getCopy contain do get getSafeGet get Int getSafeGet return T0 get get Int version kind base And should we create another data type as newer version of T0 such as data Int deriveSafeCopy extension instance SafeCopy Migrate where type MigrateFrom T0 migrate T0 we generate instance SafeCopy SafeCopy SafeCopy where putCopy arg1 arg2 contain do putWord8 put getSafePut put arg1 put arg2 return putCopy arg1 arg2 contain do putWord8 put getSafePut put Int getSafePut put arg1 put Int arg2 return getCopy contain do tag getWord8 case tag of do get getSafeGet return get get do get getSafeGet get Int getSafeGet return get get Int fail Could not identify tag show tag for type Main.T that has only constructors Maybe your data is corrupted version kind extension Note that by using getSafePut we saved bytes in the case of the constructor For and T0 we didn save anything The instance derived by this function always use at most the same space as those generated by deriveSafeCopySimple but never more as we don call getSafePut getSafeGet for types that aren needed Note that you may use deriveSafeCopySimple with one version of your data type and deriveSafeCopy in another version without any problems",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "deriveSafeCopy",
        "normalized": "Version a-\u003eName-\u003eName-\u003eQ[Dec]",
        "package": "safecopy",
        "partial": "Safe Copy",
        "signature": "Version a-\u003eName-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopyHappstackData",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance of \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e.  The instance derived by\n   this function should be compatible with the instance derived\n   by the module \u003ccode\u003eHappstack.Data.SerializeTH\u003c/code\u003e of the\n   \u003ccode\u003ehappstack-data\u003c/code\u003e package.  The instances use only \u003ccode\u003e\u003ca\u003esafePut\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e (as do the instances created by\n   \u003ccode\u003e\u003ca\u003ederiveSafeCopySimple\u003c/a\u003e\u003c/code\u003e), but we also always write a \u003ccode\u003eWord8\u003c/code\u003e\n   tag, even if the data type isn't a sum type.\n\u003c/p\u003e\u003cp\u003eFor example, given the data type and the declaration below\n\u003c/p\u003e\u003cpre\u003e\ndata T0 b = T0 b Int\nderiveSafeCopy 1 'base ''T0\n\u003c/pre\u003e\u003cp\u003ewe generate\n\u003c/p\u003e\u003cpre\u003e\ninstance (SafeCopy a, SafeCopy b) =\u003e\n         SafeCopy (T0 b) where\n    putCopy (T0 arg1 arg2) = contain $ do putWord8 0\n                                          safePut arg1\n                                          safePut arg2\n                                          return ()\n    getCopy = contain $ do tag \u003c- getWord8\n                           case tag of\n                             0 -\u003e do return T0 \u003c*\u003e safeGet \u003c*\u003e safeGet\n                             _ -\u003e fail $ \"Could not identify tag \\\"\" ++\n                                         show tag ++ \"\\\" for type Main.T0 \" ++\n                                         \"that has only 1 constructors.  \" ++\n                                         \"Maybe your data is corrupted?\"\n    version = 1\n    kind = base\n\u003c/pre\u003e\u003cp\u003eThis instance always consumes at least the same space as\n   \u003ccode\u003e\u003ca\u003ederiveSafeCopy\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ederiveSafeCopySimple\u003c/a\u003e\u003c/code\u003e, but may use more\n   because of the useless tag.  So we recomend using it only if\n   you really need to read a previous version in this format,\n   and not for newer versions.\n\u003c/p\u003e\u003cp\u003eNote that you may use \u003ccode\u003e\u003ca\u003ederiveSafeCopy\u003c/a\u003e\u003c/code\u003e with one version of\n   your data type and \u003ccode\u003e\u003ca\u003ederiveSafeCopyHappstackData\u003c/a\u003e\u003c/code\u003e in another version\n   without any problems.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Version a -\u003e Name -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Data-SafeCopy-Derive.html#deriveSafeCopyHappstackData",
        "fct-type": "function",
        "title": "deriveSafeCopyHappstackData"
      },
      "index": {
        "description": "Derive an instance of SafeCopy The instance derived by this function should be compatible with the instance derived by the module Happstack.Data.SerializeTH of the happstack-data package The instances use only safePut and safeGet as do the instances created by deriveSafeCopySimple but we also always write Word8 tag even if the data type isn sum type For example given the data type and the declaration below data T0 T0 Int deriveSafeCopy base T0 we generate instance SafeCopy SafeCopy SafeCopy T0 where putCopy T0 arg1 arg2 contain do putWord8 safePut arg1 safePut arg2 return getCopy contain do tag getWord8 case tag of do return T0 safeGet safeGet fail Could not identify tag show tag for type Main.T0 that has only constructors Maybe your data is corrupted version kind base This instance always consumes at least the same space as deriveSafeCopy or deriveSafeCopySimple but may use more because of the useless tag So we recomend using it only if you really need to read previous version in this format and not for newer versions Note that you may use deriveSafeCopy with one version of your data type and deriveSafeCopyHappstackData in another version without any problems",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "deriveSafeCopyHappstackData",
        "normalized": "Version a-\u003eName-\u003eName-\u003eQ[Dec]",
        "package": "safecopy",
        "partial": "Safe Copy Happstack Data",
        "signature": "Version a-\u003eName-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopyHappstackDataIndexedType",
      "description": {
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Version a -\u003e Name -\u003e Name -\u003e [Name] -\u003e Q [Dec]",
        "fct-source": "src/Data-SafeCopy-Derive.html#deriveSafeCopyHappstackDataIndexedType",
        "fct-type": "function",
        "title": "deriveSafeCopyHappstackDataIndexedType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "deriveSafeCopyHappstackDataIndexedType",
        "normalized": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
        "package": "safecopy",
        "partial": "Safe Copy Happstack Data Indexed Type",
        "signature": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopyIndexedType",
      "description": {
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Version a -\u003e Name -\u003e Name -\u003e [Name] -\u003e Q [Dec]",
        "fct-source": "src/Data-SafeCopy-Derive.html#deriveSafeCopyIndexedType",
        "fct-type": "function",
        "title": "deriveSafeCopyIndexedType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "deriveSafeCopyIndexedType",
        "normalized": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
        "package": "safecopy",
        "partial": "Safe Copy Indexed Type",
        "signature": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopySimple",
      "description": {
        "fct-descr": "\u003cp\u003eDerive an instance of \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e.  The instance derived by\n   this function is simpler than the one derived by\n   \u003ccode\u003e\u003ca\u003ederiveSafeCopy\u003c/a\u003e\u003c/code\u003e in that we always use \u003ccode\u003e\u003ca\u003esafePut\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e (instead of \u003ccode\u003e\u003ca\u003egetSafePut\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetSafeGet\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eWhen serializing, we put a \u003ccode\u003eWord8\u003c/code\u003e describing the\n   constructor (if the data type has more than one constructor)\n   and, for each field of the constructor, we use \u003ccode\u003e\u003ca\u003esafePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, given the data type and the declaration below\n\u003c/p\u003e\u003cpre\u003e\ndata T a b = C a a | D b Int\nderiveSafeCopySimple 1 'base ''T\n\u003c/pre\u003e\u003cp\u003ewe generate\n\u003c/p\u003e\u003cpre\u003e\ninstance (SafeCopy a, SafeCopy b) =\u003e\n         SafeCopy (T a b) where\n    putCopy (C arg1 arg2) = contain $ do putWord8 0\n                                         safePut arg1\n                                         safePut arg2\n                                         return ()\n    putCopy (D arg1 arg2) = contain $ do putWord8 1\n                                         safePut arg1\n                                         safePut arg2\n                                         return ()\n    getCopy = contain $ do tag \u003c- getWord8\n                           case tag of\n                             0 -\u003e do return C \u003c*\u003e safeGet \u003c*\u003e safeGet\n                             1 -\u003e do return D \u003c*\u003e safeGet \u003c*\u003e safeGet\n                             _ -\u003e fail $ \"Could not identify tag \\\"\" ++\n                                         show tag ++ \"\\\" for type Main.T \" ++\n                                         \"that has only 2 constructors.  \" ++\n                                         \"Maybe your data is corrupted?\"\n    version = 1\n    kind = base\n\u003c/pre\u003e\u003cp\u003eUsing this simpler instance means that you may spend more\n   bytes when serializing data.  On the other hand, it is more\n   straightforward and may match any other format you used in\n   the past.\n\u003c/p\u003e\u003cp\u003eNote that you may use \u003ccode\u003e\u003ca\u003ederiveSafeCopy\u003c/a\u003e\u003c/code\u003e with one version of\n   your data type and \u003ccode\u003e\u003ca\u003ederiveSafeCopySimple\u003c/a\u003e\u003c/code\u003e in another version\n   without any problems.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Version a -\u003e Name -\u003e Name -\u003e Q [Dec]",
        "fct-source": "src/Data-SafeCopy-Derive.html#deriveSafeCopySimple",
        "fct-type": "function",
        "title": "deriveSafeCopySimple"
      },
      "index": {
        "description": "Derive an instance of SafeCopy The instance derived by this function is simpler than the one derived by deriveSafeCopy in that we always use safePut and safeGet instead of getSafePut and getSafeGet When serializing we put Word8 describing the constructor if the data type has more than one constructor and for each field of the constructor we use safePut For example given the data type and the declaration below data Int deriveSafeCopySimple base we generate instance SafeCopy SafeCopy SafeCopy where putCopy arg1 arg2 contain do putWord8 safePut arg1 safePut arg2 return putCopy arg1 arg2 contain do putWord8 safePut arg1 safePut arg2 return getCopy contain do tag getWord8 case tag of do return safeGet safeGet do return safeGet safeGet fail Could not identify tag show tag for type Main.T that has only constructors Maybe your data is corrupted version kind base Using this simpler instance means that you may spend more bytes when serializing data On the other hand it is more straightforward and may match any other format you used in the past Note that you may use deriveSafeCopy with one version of your data type and deriveSafeCopySimple in another version without any problems",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "deriveSafeCopySimple",
        "normalized": "Version a-\u003eName-\u003eName-\u003eQ[Dec]",
        "package": "safecopy",
        "partial": "Safe Copy Simple",
        "signature": "Version a-\u003eName-\u003eName-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopySimpleIndexedType",
      "description": {
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Version a -\u003e Name -\u003e Name -\u003e [Name] -\u003e Q [Dec]",
        "fct-source": "src/Data-SafeCopy-Derive.html#deriveSafeCopySimpleIndexedType",
        "fct-type": "function",
        "title": "deriveSafeCopySimpleIndexedType"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "deriveSafeCopySimpleIndexedType",
        "normalized": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
        "package": "safecopy",
        "partial": "Safe Copy Simple Indexed Type",
        "signature": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:errorTypeName",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the type. This is only used in error\n message strings.\n Feel free to leave undefined in your instances.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Proxy a -\u003e String",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#errorTypeName",
        "fct-type": "method",
        "title": "errorTypeName"
      },
      "index": {
        "description": "The name of the type This is only used in error message strings Feel free to leave undefined in your instances",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "errorTypeName",
        "normalized": "Proxy a-\u003eString",
        "package": "safecopy",
        "partial": "Type Name",
        "signature": "Proxy a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:extended_base",
      "description": {
        "fct-descr": "\u003cp\u003eThe extended_base kind lets the system know that there is\n   at least one future version of this type.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Kind a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#extended_base",
        "fct-type": "function",
        "title": "extended_base"
      },
      "index": {
        "description": "The extended base kind lets the system know that there is at least one future version of this type",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "extended_base",
        "normalized": "",
        "package": "safecopy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:extended_extension",
      "description": {
        "fct-descr": "\u003cp\u003eThe extended_base kind lets the system know that there is\n   at least one future version of this type.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Kind a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#extended_extension",
        "fct-type": "function",
        "title": "extended_extension"
      },
      "index": {
        "description": "The extended base kind lets the system know that there is at least one future version of this type",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "extended_extension",
        "normalized": "",
        "package": "safecopy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:extension",
      "description": {
        "fct-descr": "\u003cp\u003eThe extension kind lets the system know that there is\n   at least one previous version of this type. A given data type\n   can only extend a single other data type. However, it is\n   perfectly fine to build chains of extensions. The migrations\n   between each step is handled automatically.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Kind a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#extension",
        "fct-type": "function",
        "title": "extension"
      },
      "index": {
        "description": "The extension kind lets the system know that there is at least one previous version of this type given data type can only extend single other data type However it is perfectly fine to build chains of extensions The migrations between each step is handled automatically",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "extension",
        "normalized": "",
        "package": "safecopy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:getCopy",
      "description": {
        "fct-descr": "\u003cp\u003eThis method defines how a value should be parsed without also worrying\n   about writing out the version tag. This function cannot be used directly.\n   One should use \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e, instead.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Contained (Get a)",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#getCopy",
        "fct-type": "method",
        "title": "getCopy"
      },
      "index": {
        "description": "This method defines how value should be parsed without also worrying about writing out the version tag This function cannot be used directly One should use safeGet instead",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "getCopy",
        "normalized": "",
        "package": "safecopy",
        "partial": "Copy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:getPrimitive",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Prim",
        "fct-type": "function",
        "title": "getPrimitive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "getPrimitive",
        "normalized": "",
        "package": "safecopy",
        "partial": "Primitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:getSafeGet",
      "description": {
        "fct-descr": "\u003cp\u003eParse a version tag and return the corresponding migrated parser. This is\n   useful when you can prove that multiple values have the same version.\n   See \u003ccode\u003e\u003ca\u003egetSafePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Get (Get a)",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#getSafeGet",
        "fct-type": "function",
        "title": "getSafeGet"
      },
      "index": {
        "description": "Parse version tag and return the corresponding migrated parser This is useful when you can prove that multiple values have the same version See getSafePut",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "getSafeGet",
        "normalized": "",
        "package": "safecopy",
        "partial": "Safe Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:getSafePut",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize the version tag and return the associated putter. This is useful\n   when serializing multiple values with the same version. See \u003ccode\u003e\u003ca\u003egetSafeGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "PutM (a -\u003e Put)",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#getSafePut",
        "fct-type": "function",
        "title": "getSafePut"
      },
      "index": {
        "description": "Serialize the version tag and return the associated putter This is useful when serializing multiple values with the same version See getSafeGet",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "getSafePut",
        "normalized": "PutM(a-\u003ePut)",
        "package": "safecopy",
        "partial": "Safe Put",
        "signature": "PutM(a-\u003ePut)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:kind",
      "description": {
        "fct-descr": "\u003cp\u003eThe kind specifies how versions are dealt with. By default,\n   values are tagged with their version id and don't have any\n   previous versions. See \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e and the much less used\n   \u003ccode\u003e\u003ca\u003eprimitive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Kind a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#kind",
        "fct-type": "method",
        "title": "kind"
      },
      "index": {
        "description": "The kind specifies how versions are dealt with By default values are tagged with their version id and don have any previous versions See extension and the much less used primitive",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "kind",
        "normalized": "",
        "package": "safecopy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:migrate",
      "description": {
        "fct-descr": "\u003cp\u003eThis method specifies how to migrate from the older type to the newer\n   one. It will never be necessary to use this function manually as it\n   all taken care of internally in the library.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "MigrateFrom a -\u003e a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#migrate",
        "fct-type": "method",
        "title": "migrate"
      },
      "index": {
        "description": "This method specifies how to migrate from the older type to the newer one It will never be necessary to use this function manually as it all taken care of internally in the library",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "migrate",
        "normalized": "MigrateFrom a-\u003ea",
        "package": "safecopy",
        "partial": "",
        "signature": "MigrateFrom a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:objectProfile",
      "description": {
        "fct-descr": "\u003cp\u003eVersion profile.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Profile a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#objectProfile",
        "fct-type": "method",
        "title": "objectProfile"
      },
      "index": {
        "description": "Version profile",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "objectProfile",
        "normalized": "",
        "package": "safecopy",
        "partial": "Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:primitive",
      "description": {
        "fct-descr": "\u003cp\u003ePrimitive kinds aren't version tagged. This kind is used for small or built-in\n   types that won't change such as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Kind a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#primitive",
        "fct-type": "function",
        "title": "primitive"
      },
      "index": {
        "description": "Primitive kinds aren version tagged This kind is used for small or built-in types that won change such as Int or Bool",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "primitive",
        "normalized": "",
        "package": "safecopy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:profileCurrentVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Int32",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Profile",
        "fct-type": "function",
        "title": "profileCurrentVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "profileCurrentVersion",
        "normalized": "",
        "package": "safecopy",
        "partial": "Current Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:profileSupportedVersions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "[Int32]",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Profile",
        "fct-type": "function",
        "title": "profileSupportedVersions"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "profileSupportedVersions",
        "normalized": "[Int]",
        "package": "safecopy",
        "partial": "Supported Versions",
        "signature": "[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:putCopy",
      "description": {
        "fct-descr": "\u003cp\u003eThis method defines how a value should be parsed without worrying about\n   previous versions or migrations. This function cannot be used directly.\n   One should use \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e, instead.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "a -\u003e Contained Put",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#putCopy",
        "fct-type": "method",
        "title": "putCopy"
      },
      "index": {
        "description": "This method defines how value should be parsed without worrying about previous versions or migrations This function cannot be used directly One should use safeGet instead",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "putCopy",
        "normalized": "a-\u003eContained Put",
        "package": "safecopy",
        "partial": "Copy",
        "signature": "a-\u003eContained Put"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:safeGet",
      "description": {
        "fct-descr": "\u003cp\u003eParse a version tagged data type and then migrate it to the desired type.\n   Any serialized value has been extended by the return type can be parsed.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Get a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#safeGet",
        "fct-type": "function",
        "title": "safeGet"
      },
      "index": {
        "description": "Parse version tagged data type and then migrate it to the desired type Any serialized value has been extended by the return type can be parsed",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "safeGet",
        "normalized": "",
        "package": "safecopy",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:safePut",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a data type by first writing out its version tag. This is much\n   simpler than the corresponding \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e since previous versions don't\n   come into play.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "a -\u003e Put",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#safePut",
        "fct-type": "function",
        "title": "safePut"
      },
      "index": {
        "description": "Serialize data type by first writing out its version tag This is much simpler than the corresponding safeGet since previous versions don come into play",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "safePut",
        "normalized": "a-\u003ePut",
        "package": "safecopy",
        "partial": "Put",
        "signature": "a-\u003ePut"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:unReverse",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#Reverse",
        "fct-type": "function",
        "title": "unReverse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "unReverse",
        "normalized": "",
        "package": "safecopy",
        "partial": "Reverse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:version",
      "description": {
        "fct-descr": "\u003cp\u003eThe version of the type.\n\u003c/p\u003e\u003cp\u003eOnly used as a key so it must be unique (this is checked at run-time)\n   but doesn't have to be sequential or continuous.\n\u003c/p\u003e\u003cp\u003eThe default version is '0'.\n\u003c/p\u003e",
        "fct-module": "Data.SafeCopy",
        "fct-package": "safecopy",
        "fct-signature": "Version a",
        "fct-source": "src/Data-SafeCopy-SafeCopy.html#version",
        "fct-type": "method",
        "title": "version"
      },
      "index": {
        "description": "The version of the type Only used as key so it must be unique this is checked at run-time but doesn have to be sequential or continuous The default version is",
        "hierarchy": "Data SafeCopy",
        "module": "Data.SafeCopy",
        "name": "version",
        "normalized": "",
        "package": "safecopy",
        "partial": "",
        "signature": ""
      }
    }
  }
]