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
        "word": "safecopy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSafeCopy extends the parsing and serialization capabilities of Data.Serialize\n to include nested version control. Nested version control means that you\n can change the definition and binary format of a type nested deep within\n other types without problems.\n\u003c/p\u003e\u003cp\u003eConsider this scenario. You want to store your contact list on disk\n and so write the following code:\n\u003c/p\u003e\u003cpre\u003e\ntype Name     = String\ntype Address  = String\ndata Contacts = Contacts [(Name, Address)]\ninstance SafeCopy Contacts where\n     putCopy (Contacts list) = contain $ safePut list\n     getCopy = contain $ Contacts \u003c$\u003e safeGet\n\u003c/pre\u003e\u003cp\u003eAt this point, everything is fine. You get the awesome speed of Data.Serialize\n together with Haskell's ease of use. However, things quickly take a U-turn for the worse\n when you realize that you want to keep phone numbers as well as names and\n addresses. Being the experienced coder that you are, you see that using a 3-tuple\n isn't very pretty and you'd rather use a record. At first you fear that this\n change in structure will invalidate all your old data. Those fears are quickly quelled,\n though, when you remember how nifty SafeCopy is. With renewed enthusiasm,\n you set out and write the following code:\n\u003c/p\u003e\u003cpre\u003e\ntype Name = String\ntype Address = String\ntype Phone = String\n\n{- We rename our old Contacts structure -}\ndata Contacts_v0 = Contacts_v0 [(Name, Address)]\ninstance SafeCopy Contacts_v0 where\n     putCopy (Contacts_v0 list) = contain $ safePut list\n     getCopy = contain $ Contacts_v0 \u003c$\u003e safeGet\n\ndata Contact = Contact { name    :: Name\n                        , address :: Address\n                        , phone   :: Phone }\ninstance SafeCopy Contact where\n    putCopy Contact{..} = contain $ do safePut name; safePut address; safePut phone\n    getCopy = contain $ Contact \u003c$\u003e safeGet \u003c*\u003e safeGet \u003c*\u003e safeGet\n\ndata Contacts = Contacts [Contact]\ninstance SafeCopy Contacts where\n     version = 2\n     kind = extension\n     putCopy (Contacts contacts) = contain $ safePut contacts\n     getCopy = contain $ Contacts \u003c$\u003e safeGet\n\n{- Here the magic happens: -}\ninstance Migrate Contacts where\n     type MigrateFrom Contacts = Contacts_v0\n     migrate (Contacts_v0 contacts) = Contacts [ Contact{ name    = name\n                                                        , address = address\n                                                        , phone   = \"\" }\n                                               | (name, address) \u003c- contacts ]\n\u003c/pre\u003e\u003cp\u003eWith this, you reflect on your code and you are happy. You feel confident in the safety of\n your data and you know you can remove \u003ccode\u003eContacts_v0\u003c/code\u003e once you no longer wish to support\n that legacy format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SafeCopy",
          "name": "SafeCopy",
          "package": "safecopy",
          "source": "src/Data-SafeCopy.html",
          "type": "module"
        },
        "index": {
          "description": "SafeCopy extends the parsing and serialization capabilities of Data.Serialize to include nested version control Nested version control means that you can change the definition and binary format of type nested deep within other types without problems Consider this scenario You want to store your contact list on disk and so write the following code type Name String type Address String data Contacts Contacts Name Address instance SafeCopy Contacts where putCopy Contacts list contain safePut list getCopy contain Contacts safeGet At this point everything is fine You get the awesome speed of Data.Serialize together with Haskell ease of use However things quickly take U-turn for the worse when you realize that you want to keep phone numbers as well as names and addresses Being the experienced coder that you are you see that using tuple isn very pretty and you rather use record At first you fear that this change in structure will invalidate all your old data Those fears are quickly quelled though when you remember how nifty SafeCopy is With renewed enthusiasm you set out and write the following code type Name String type Address String type Phone String We rename our old Contacts structure data Contacts v0 Contacts v0 Name Address instance SafeCopy Contacts v0 where putCopy Contacts v0 list contain safePut list getCopy contain Contacts v0 safeGet data Contact Contact name Name address Address phone Phone instance SafeCopy Contact where putCopy Contact contain do safePut name safePut address safePut phone getCopy contain Contact safeGet safeGet safeGet data Contacts Contacts Contact instance SafeCopy Contacts where version kind extension putCopy Contacts contacts contain safePut contacts getCopy contain Contacts safeGet Here the magic happens instance Migrate Contacts where type MigrateFrom Contacts Contacts v0 migrate Contacts v0 contacts Contacts Contact name name address address phone name address contacts With this you reflect on your code and you are happy You feel confident in the safety of your data and you know you can remove Contacts v0 once you no longer wish to support that legacy format",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "SafeCopy",
          "package": "safecopy",
          "partial": "Safe Copy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo ensure that no-one reads or writes values without handling versions\n   correct, it is necessary to restrict access to \u003ccode\u003e\u003ca\u003egetCopy\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputCopy\u003c/a\u003e\u003c/code\u003e.\n   This is where \u003ccode\u003e\u003ca\u003eContained\u003c/a\u003e\u003c/code\u003e enters the picture. It allows you to put\n   values in to a container but not to take them out again.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "Contained",
          "package": "safecopy",
          "source": "src/Data-SafeCopy-SafeCopy.html#Contained",
          "type": "data"
        },
        "index": {
          "description": "To ensure that no-one reads or writes values without handling versions correct it is necessary to restrict access to getCopy and putCopy This is where Contained enters the picture It allows you to put values in to container but not to take them out again",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "Contained",
          "package": "safecopy",
          "partial": "Contained",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Contained"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe kind of a data type determines how it is tagged (if at all).\n\u003c/p\u003e\u003cp\u003ePrimitives kinds (see \u003ccode\u003e\u003ca\u003eprimitive\u003c/a\u003e\u003c/code\u003e) are not tagged with a version\n   id and hence cannot be extended later.\n\u003c/p\u003e\u003cp\u003eExtensions (see \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e) tells the system that there exists\n   a previous version of the data type which should be migrated if\n   needed.\n\u003c/p\u003e\u003cp\u003eThere is also a default kind which is neither primitive nor is\n   an extension of a previous type.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "Kind",
          "package": "safecopy",
          "source": "src/Data-SafeCopy-SafeCopy.html#Kind",
          "type": "data"
        },
        "index": {
          "description": "The kind of data type determines how it is tagged if at all Primitives kinds see primitive are not tagged with version id and hence cannot be extended later Extensions see extension tells the system that there exists previous version of the data type which should be migrated if needed There is also default kind which is neither primitive nor is an extension of previous type",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "Kind",
          "package": "safecopy",
          "partial": "Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe central mechanism for dealing with version control.\n\u003c/p\u003e\u003cp\u003eThis type class specifies what data migrations can happen\n   and how they happen.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "Migrate",
          "package": "safecopy",
          "source": "src/Data-SafeCopy-SafeCopy.html#Migrate",
          "type": "class"
        },
        "index": {
          "description": "The central mechanism for dealing with version control This type class specifies what data migrations can happen and how they happen",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "Migrate",
          "package": "safecopy",
          "partial": "Migrate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for data that was saved without a version tag.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "Prim",
          "package": "safecopy",
          "source": "src/Data-SafeCopy-SafeCopy.html#Prim",
          "type": "newtype"
        },
        "index": {
          "description": "Wrapper for data that was saved without version tag",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "Prim",
          "package": "safecopy",
          "partial": "Prim",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "Profile",
          "package": "safecopy",
          "source": "src/Data-SafeCopy-SafeCopy.html#Profile",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "Profile",
          "package": "safecopy",
          "partial": "Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a wrapper type used migrating backwards in the chain of compatible types.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "Reverse",
          "package": "safecopy",
          "source": "src/Data-SafeCopy-SafeCopy.html#Reverse",
          "type": "newtype"
        },
        "index": {
          "description": "This is wrapper type used migrating backwards in the chain of compatible types",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "Reverse",
          "package": "safecopy",
          "partial": "Reverse",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe centerpiece of this library. Defines a version for a data type\n   together with how it should be serialized/parsed.\n\u003c/p\u003e\u003cp\u003eUsers should define instances of \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e for their types\n   even though \u003ccode\u003e\u003ca\u003egetCopy\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eputCopy\u003c/a\u003e\u003c/code\u003e can't be used directly.\n   To serialize/parse a data type using \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003esafePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "SafeCopy",
          "package": "safecopy",
          "source": "src/Data-SafeCopy-SafeCopy.html#SafeCopy",
          "type": "class"
        },
        "index": {
          "description": "The centerpiece of this library Defines version for data type together with how it should be serialized parsed Users should define instances of SafeCopy for their types even though getCopy and putCopy can be used directly To serialize parse data type using SafeCopy see safeGet and safePut",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "SafeCopy",
          "package": "safecopy",
          "partial": "Safe Copy",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:SafeCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple numeric version id.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "Version",
          "package": "safecopy",
          "source": "src/Data-SafeCopy-SafeCopy.html#Version",
          "type": "data"
        },
        "index": {
          "description": "simple numeric version id",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "Version",
          "package": "safecopy",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "InvalidProfile",
          "package": "safecopy",
          "signature": "InvalidProfile String",
          "source": "src/Data-SafeCopy-SafeCopy.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "InvalidProfile",
          "package": "safecopy",
          "partial": "Invalid Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:InvalidProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "Prim",
          "package": "safecopy",
          "signature": "Prim",
          "source": "src/Data-SafeCopy-SafeCopy.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "Prim",
          "package": "safecopy",
          "partial": "Prim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:Prim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "PrimitiveProfile",
          "package": "safecopy",
          "signature": "PrimitiveProfile",
          "source": "src/Data-SafeCopy-SafeCopy.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "PrimitiveProfile",
          "package": "safecopy",
          "partial": "Primitive Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:PrimitiveProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "Profile",
          "package": "safecopy",
          "signature": "Profile",
          "source": "src/Data-SafeCopy-SafeCopy.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "Profile",
          "package": "safecopy",
          "partial": "Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:Profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "Reverse",
          "package": "safecopy",
          "signature": "Reverse",
          "source": "src/Data-SafeCopy-SafeCopy.html#Reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "Reverse",
          "package": "safecopy",
          "partial": "Reverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:Reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default kind. Does not extend any type.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "base",
          "package": "safecopy",
          "signature": "Kind a",
          "source": "src/Data-SafeCopy-SafeCopy.html#base",
          "type": "function"
        },
        "index": {
          "description": "The default kind Does not extend any type",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "base",
          "package": "safecopy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace a value in an unbreakable container.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "contain",
          "package": "safecopy",
          "signature": "a -\u003e Contained a",
          "source": "src/Data-SafeCopy-SafeCopy.html#contain",
          "type": "function"
        },
        "index": {
          "description": "Place value in an unbreakable container",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "contain",
          "normalized": "a-\u003eContained a",
          "package": "safecopy",
          "signature": "a-\u003eContained a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:contain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive an instance of \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen serializing, we put a \u003ccode\u003eWord8\u003c/code\u003e describing the\n   constructor (if the data type has more than one\n   constructor).  For each type used in the constructor, we\n   call \u003ccode\u003e\u003ca\u003egetSafePut\u003c/a\u003e\u003c/code\u003e (which immediately serializes the version\n   of the type).  Then, for each field in the constructor, we\n   use one of the put functions obtained in the last step.\n\u003c/p\u003e\u003cp\u003eFor example, given the data type and the declaration below\n\u003c/p\u003e\u003cpre\u003e\ndata T0 b = T0 b Int\nderiveSafeCopy 1 'base ''T0\n\u003c/pre\u003e\u003cp\u003ewe generate\n\u003c/p\u003e\u003cpre\u003e\ninstance (SafeCopy a, SafeCopy b) =\u003e\n         SafeCopy (T0 b) where\n    putCopy (T0 arg1 arg2) = contain $ do put_b   \u003c- getSafePut\n                                          put_Int \u003c- getSafePut\n                                          put_b   arg1\n                                          put_Int arg2\n                                          return ()\n    getCopy = contain $ do get_b   \u003c- getSafeGet\n                           get_Int \u003c- getSafeGet\n                           return T0 \u003c*\u003e get_b \u003c*\u003e get_Int\n    version = 1\n    kind = base\n\u003c/pre\u003e\u003cp\u003eAnd, should we create another data type as a newer version of \u003ccode\u003eT0\u003c/code\u003e, such as\n\u003c/p\u003e\u003cpre\u003e\ndata T a b = C a a | D b Int\nderiveSafeCopy 2 'extension ''T\n\ninstance SafeCopy b =\u003e Migrate (T a b) where\n  type MigrateFrom (T a b) = T0 b\n  migrate (T0 b i) = D b i\n\u003c/pre\u003e\u003cp\u003ewe generate\n\u003c/p\u003e\u003cpre\u003e\ninstance (SafeCopy a, SafeCopy b) =\u003e\n         SafeCopy (T a b) where\n    putCopy (C arg1 arg2) = contain $ do putWord8 0\n                                         put_a \u003c- getSafePut\n                                         put_a arg1\n                                         put_a arg2\n                                         return ()\n    putCopy (D arg1 arg2) = contain $ do putWord8 1\n                                         put_b   \u003c- getSafePut\n                                         put_Int \u003c- getSafePut\n                                         put_b   arg1\n                                         put_Int arg2\n                                         return ()\n    getCopy = contain $ do tag \u003c- getWord8\n                           case tag of\n                             0 -\u003e do get_a \u003c- getSafeGet\n                                     return C \u003c*\u003e get_a \u003c*\u003e get_a\n                             1 -\u003e do get_b   \u003c- getSafeGet\n                                     get_Int \u003c- getSafeGet\n                                     return D \u003c*\u003e get_b \u003c*\u003e get_Int\n                             _ -\u003e fail $ \"Could not identify tag \\\"\" ++\n                                         show tag ++ \"\\\" for type Main.T \" ++\n                                         \"that has only 2 constructors.  \" ++\n                                         \"Maybe your data is corrupted?\"\n    version = 2\n    kind = extension\n\u003c/pre\u003e\u003cp\u003eNote that by using getSafePut, we saved 4 bytes in the case\n   of the \u003ccode\u003eC\u003c/code\u003e constructor.  For \u003ccode\u003eD\u003c/code\u003e and \u003ccode\u003eT0\u003c/code\u003e, we didn't save\n   anything.  The instance derived by this function always use\n   at most the same space as those generated by\n   \u003ccode\u003e\u003ca\u003ederiveSafeCopySimple\u003c/a\u003e\u003c/code\u003e, but never more (as we don't call\n   'getSafePut'/'getSafeGet' for types that aren't needed).\n\u003c/p\u003e\u003cp\u003eNote that you may use \u003ccode\u003e\u003ca\u003ederiveSafeCopySimple\u003c/a\u003e\u003c/code\u003e with one\n   version of your data type and \u003ccode\u003e\u003ca\u003ederiveSafeCopy\u003c/a\u003e\u003c/code\u003e in another\n   version without any problems.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopy",
          "package": "safecopy",
          "signature": "Version a -\u003e Name -\u003e Name -\u003e Q [Dec]",
          "source": "src/Data-SafeCopy-Derive.html#deriveSafeCopy",
          "type": "function"
        },
        "index": {
          "description": "Derive an instance of SafeCopy When serializing we put Word8 describing the constructor if the data type has more than one constructor For each type used in the constructor we call getSafePut which immediately serializes the version of the type Then for each field in the constructor we use one of the put functions obtained in the last step For example given the data type and the declaration below data T0 T0 Int deriveSafeCopy base T0 we generate instance SafeCopy SafeCopy SafeCopy T0 where putCopy T0 arg1 arg2 contain do put getSafePut put Int getSafePut put arg1 put Int arg2 return getCopy contain do get getSafeGet get Int getSafeGet return T0 get get Int version kind base And should we create another data type as newer version of T0 such as data Int deriveSafeCopy extension instance SafeCopy Migrate where type MigrateFrom T0 migrate T0 we generate instance SafeCopy SafeCopy SafeCopy where putCopy arg1 arg2 contain do putWord8 put getSafePut put arg1 put arg2 return putCopy arg1 arg2 contain do putWord8 put getSafePut put Int getSafePut put arg1 put Int arg2 return getCopy contain do tag getWord8 case tag of do get getSafeGet return get get do get getSafeGet get Int getSafeGet return get get Int fail Could not identify tag show tag for type Main.T that has only constructors Maybe your data is corrupted version kind extension Note that by using getSafePut we saved bytes in the case of the constructor For and T0 we didn save anything The instance derived by this function always use at most the same space as those generated by deriveSafeCopySimple but never more as we don call getSafePut getSafeGet for types that aren needed Note that you may use deriveSafeCopySimple with one version of your data type and deriveSafeCopy in another version without any problems",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopy",
          "normalized": "Version a-\u003eName-\u003eName-\u003eQ[Dec]",
          "package": "safecopy",
          "partial": "Safe Copy",
          "signature": "Version a-\u003eName-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive an instance of \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e.  The instance derived by\n   this function should be compatible with the instance derived\n   by the module \u003ccode\u003eHappstack.Data.SerializeTH\u003c/code\u003e of the\n   \u003ccode\u003ehappstack-data\u003c/code\u003e package.  The instances use only \u003ccode\u003e\u003ca\u003esafePut\u003c/a\u003e\u003c/code\u003e\n   and \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e (as do the instances created by\n   \u003ccode\u003e\u003ca\u003ederiveSafeCopySimple\u003c/a\u003e\u003c/code\u003e), but we also always write a \u003ccode\u003eWord8\u003c/code\u003e\n   tag, even if the data type isn't a sum type.\n\u003c/p\u003e\u003cp\u003eFor example, given the data type and the declaration below\n\u003c/p\u003e\u003cpre\u003e\ndata T0 b = T0 b Int\nderiveSafeCopy 1 'base ''T0\n\u003c/pre\u003e\u003cp\u003ewe generate\n\u003c/p\u003e\u003cpre\u003e\ninstance (SafeCopy a, SafeCopy b) =\u003e\n         SafeCopy (T0 b) where\n    putCopy (T0 arg1 arg2) = contain $ do putWord8 0\n                                          safePut arg1\n                                          safePut arg2\n                                          return ()\n    getCopy = contain $ do tag \u003c- getWord8\n                           case tag of\n                             0 -\u003e do return T0 \u003c*\u003e safeGet \u003c*\u003e safeGet\n                             _ -\u003e fail $ \"Could not identify tag \\\"\" ++\n                                         show tag ++ \"\\\" for type Main.T0 \" ++\n                                         \"that has only 1 constructors.  \" ++\n                                         \"Maybe your data is corrupted?\"\n    version = 1\n    kind = base\n\u003c/pre\u003e\u003cp\u003eThis instance always consumes at least the same space as\n   \u003ccode\u003e\u003ca\u003ederiveSafeCopy\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ederiveSafeCopySimple\u003c/a\u003e\u003c/code\u003e, but may use more\n   because of the useless tag.  So we recomend using it only if\n   you really need to read a previous version in this format,\n   and not for newer versions.\n\u003c/p\u003e\u003cp\u003eNote that you may use \u003ccode\u003e\u003ca\u003ederiveSafeCopy\u003c/a\u003e\u003c/code\u003e with one version of\n   your data type and \u003ccode\u003e\u003ca\u003ederiveSafeCopyHappstackData\u003c/a\u003e\u003c/code\u003e in another version\n   without any problems.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopyHappstackData",
          "package": "safecopy",
          "signature": "Version a -\u003e Name -\u003e Name -\u003e Q [Dec]",
          "source": "src/Data-SafeCopy-Derive.html#deriveSafeCopyHappstackData",
          "type": "function"
        },
        "index": {
          "description": "Derive an instance of SafeCopy The instance derived by this function should be compatible with the instance derived by the module Happstack.Data.SerializeTH of the happstack-data package The instances use only safePut and safeGet as do the instances created by deriveSafeCopySimple but we also always write Word8 tag even if the data type isn sum type For example given the data type and the declaration below data T0 T0 Int deriveSafeCopy base T0 we generate instance SafeCopy SafeCopy SafeCopy T0 where putCopy T0 arg1 arg2 contain do putWord8 safePut arg1 safePut arg2 return getCopy contain do tag getWord8 case tag of do return T0 safeGet safeGet fail Could not identify tag show tag for type Main.T0 that has only constructors Maybe your data is corrupted version kind base This instance always consumes at least the same space as deriveSafeCopy or deriveSafeCopySimple but may use more because of the useless tag So we recomend using it only if you really need to read previous version in this format and not for newer versions Note that you may use deriveSafeCopy with one version of your data type and deriveSafeCopyHappstackData in another version without any problems",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopyHappstackData",
          "normalized": "Version a-\u003eName-\u003eName-\u003eQ[Dec]",
          "package": "safecopy",
          "partial": "Safe Copy Happstack Data",
          "signature": "Version a-\u003eName-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopyHappstackData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopyHappstackDataIndexedType",
          "package": "safecopy",
          "signature": "Version a -\u003e Name -\u003e Name -\u003e [Name] -\u003e Q [Dec]",
          "source": "src/Data-SafeCopy-Derive.html#deriveSafeCopyHappstackDataIndexedType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopyHappstackDataIndexedType",
          "normalized": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "package": "safecopy",
          "partial": "Safe Copy Happstack Data Indexed Type",
          "signature": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopyHappstackDataIndexedType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopyIndexedType",
          "package": "safecopy",
          "signature": "Version a -\u003e Name -\u003e Name -\u003e [Name] -\u003e Q [Dec]",
          "source": "src/Data-SafeCopy-Derive.html#deriveSafeCopyIndexedType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopyIndexedType",
          "normalized": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "package": "safecopy",
          "partial": "Safe Copy Indexed Type",
          "signature": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopyIndexedType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive an instance of \u003ccode\u003e\u003ca\u003eSafeCopy\u003c/a\u003e\u003c/code\u003e.  The instance derived by\n   this function is simpler than the one derived by\n   \u003ccode\u003e\u003ca\u003ederiveSafeCopy\u003c/a\u003e\u003c/code\u003e in that we always use \u003ccode\u003e\u003ca\u003esafePut\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e (instead of \u003ccode\u003e\u003ca\u003egetSafePut\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetSafeGet\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eWhen serializing, we put a \u003ccode\u003eWord8\u003c/code\u003e describing the\n   constructor (if the data type has more than one constructor)\n   and, for each field of the constructor, we use \u003ccode\u003e\u003ca\u003esafePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example, given the data type and the declaration below\n\u003c/p\u003e\u003cpre\u003e\ndata T a b = C a a | D b Int\nderiveSafeCopySimple 1 'base ''T\n\u003c/pre\u003e\u003cp\u003ewe generate\n\u003c/p\u003e\u003cpre\u003e\ninstance (SafeCopy a, SafeCopy b) =\u003e\n         SafeCopy (T a b) where\n    putCopy (C arg1 arg2) = contain $ do putWord8 0\n                                         safePut arg1\n                                         safePut arg2\n                                         return ()\n    putCopy (D arg1 arg2) = contain $ do putWord8 1\n                                         safePut arg1\n                                         safePut arg2\n                                         return ()\n    getCopy = contain $ do tag \u003c- getWord8\n                           case tag of\n                             0 -\u003e do return C \u003c*\u003e safeGet \u003c*\u003e safeGet\n                             1 -\u003e do return D \u003c*\u003e safeGet \u003c*\u003e safeGet\n                             _ -\u003e fail $ \"Could not identify tag \\\"\" ++\n                                         show tag ++ \"\\\" for type Main.T \" ++\n                                         \"that has only 2 constructors.  \" ++\n                                         \"Maybe your data is corrupted?\"\n    version = 1\n    kind = base\n\u003c/pre\u003e\u003cp\u003eUsing this simpler instance means that you may spend more\n   bytes when serializing data.  On the other hand, it is more\n   straightforward and may match any other format you used in\n   the past.\n\u003c/p\u003e\u003cp\u003eNote that you may use \u003ccode\u003e\u003ca\u003ederiveSafeCopy\u003c/a\u003e\u003c/code\u003e with one version of\n   your data type and \u003ccode\u003e\u003ca\u003ederiveSafeCopySimple\u003c/a\u003e\u003c/code\u003e in another version\n   without any problems.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopySimple",
          "package": "safecopy",
          "signature": "Version a -\u003e Name -\u003e Name -\u003e Q [Dec]",
          "source": "src/Data-SafeCopy-Derive.html#deriveSafeCopySimple",
          "type": "function"
        },
        "index": {
          "description": "Derive an instance of SafeCopy The instance derived by this function is simpler than the one derived by deriveSafeCopy in that we always use safePut and safeGet instead of getSafePut and getSafeGet When serializing we put Word8 describing the constructor if the data type has more than one constructor and for each field of the constructor we use safePut For example given the data type and the declaration below data Int deriveSafeCopySimple base we generate instance SafeCopy SafeCopy SafeCopy where putCopy arg1 arg2 contain do putWord8 safePut arg1 safePut arg2 return putCopy arg1 arg2 contain do putWord8 safePut arg1 safePut arg2 return getCopy contain do tag getWord8 case tag of do return safeGet safeGet do return safeGet safeGet fail Could not identify tag show tag for type Main.T that has only constructors Maybe your data is corrupted version kind base Using this simpler instance means that you may spend more bytes when serializing data On the other hand it is more straightforward and may match any other format you used in the past Note that you may use deriveSafeCopy with one version of your data type and deriveSafeCopySimple in another version without any problems",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopySimple",
          "normalized": "Version a-\u003eName-\u003eName-\u003eQ[Dec]",
          "package": "safecopy",
          "partial": "Safe Copy Simple",
          "signature": "Version a-\u003eName-\u003eName-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopySimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopySimpleIndexedType",
          "package": "safecopy",
          "signature": "Version a -\u003e Name -\u003e Name -\u003e [Name] -\u003e Q [Dec]",
          "source": "src/Data-SafeCopy-Derive.html#deriveSafeCopySimpleIndexedType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "deriveSafeCopySimpleIndexedType",
          "normalized": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "package": "safecopy",
          "partial": "Safe Copy Simple Indexed Type",
          "signature": "Version a-\u003eName-\u003eName-\u003e[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:deriveSafeCopySimpleIndexedType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the type. This is only used in error\n message strings.\n Feel free to leave undefined in your instances.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "errorTypeName",
          "package": "safecopy",
          "signature": "Proxy a -\u003e String",
          "source": "src/Data-SafeCopy-SafeCopy.html#errorTypeName",
          "type": "method"
        },
        "index": {
          "description": "The name of the type This is only used in error message strings Feel free to leave undefined in your instances",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "errorTypeName",
          "normalized": "Proxy a-\u003eString",
          "package": "safecopy",
          "partial": "Type Name",
          "signature": "Proxy a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:errorTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe extended_base kind lets the system know that there is\n   at least one future version of this type.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "extended_base",
          "package": "safecopy",
          "signature": "Kind a",
          "source": "src/Data-SafeCopy-SafeCopy.html#extended_base",
          "type": "function"
        },
        "index": {
          "description": "The extended base kind lets the system know that there is at least one future version of this type",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "extended_base",
          "package": "safecopy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:extended_base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe extended_base kind lets the system know that there is\n   at least one future version of this type.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "extended_extension",
          "package": "safecopy",
          "signature": "Kind a",
          "source": "src/Data-SafeCopy-SafeCopy.html#extended_extension",
          "type": "function"
        },
        "index": {
          "description": "The extended base kind lets the system know that there is at least one future version of this type",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "extended_extension",
          "package": "safecopy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:extended_extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe extension kind lets the system know that there is\n   at least one previous version of this type. A given data type\n   can only extend a single other data type. However, it is\n   perfectly fine to build chains of extensions. The migrations\n   between each step is handled automatically.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "extension",
          "package": "safecopy",
          "signature": "Kind a",
          "source": "src/Data-SafeCopy-SafeCopy.html#extension",
          "type": "function"
        },
        "index": {
          "description": "The extension kind lets the system know that there is at least one previous version of this type given data type can only extend single other data type However it is perfectly fine to build chains of extensions The migrations between each step is handled automatically",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "extension",
          "package": "safecopy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method defines how a value should be parsed without also worrying\n   about writing out the version tag. This function cannot be used directly.\n   One should use \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e, instead.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "getCopy",
          "package": "safecopy",
          "signature": "Contained (Get a)",
          "source": "src/Data-SafeCopy-SafeCopy.html#getCopy",
          "type": "method"
        },
        "index": {
          "description": "This method defines how value should be parsed without also worrying about writing out the version tag This function cannot be used directly One should use safeGet instead",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "getCopy",
          "package": "safecopy",
          "partial": "Copy",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:getCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "getPrimitive",
          "package": "safecopy",
          "signature": "a",
          "source": "src/Data-SafeCopy-SafeCopy.html#Prim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "getPrimitive",
          "package": "safecopy",
          "partial": "Primitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:getPrimitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a version tag and return the corresponding migrated parser. This is\n   useful when you can prove that multiple values have the same version.\n   See \u003ccode\u003e\u003ca\u003egetSafePut\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "getSafeGet",
          "package": "safecopy",
          "signature": "Get (Get a)",
          "source": "src/Data-SafeCopy-SafeCopy.html#getSafeGet",
          "type": "function"
        },
        "index": {
          "description": "Parse version tag and return the corresponding migrated parser This is useful when you can prove that multiple values have the same version See getSafePut",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "getSafeGet",
          "package": "safecopy",
          "partial": "Safe Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:getSafeGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize the version tag and return the associated putter. This is useful\n   when serializing multiple values with the same version. See \u003ccode\u003e\u003ca\u003egetSafeGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "getSafePut",
          "package": "safecopy",
          "signature": "PutM (a -\u003e Put)",
          "source": "src/Data-SafeCopy-SafeCopy.html#getSafePut",
          "type": "function"
        },
        "index": {
          "description": "Serialize the version tag and return the associated putter This is useful when serializing multiple values with the same version See getSafeGet",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "getSafePut",
          "normalized": "PutM(a-\u003ePut)",
          "package": "safecopy",
          "partial": "Safe Put",
          "signature": "PutM(a-\u003ePut)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:getSafePut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe kind specifies how versions are dealt with. By default,\n   values are tagged with their version id and don't have any\n   previous versions. See \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e and the much less used\n   \u003ccode\u003e\u003ca\u003eprimitive\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "kind",
          "package": "safecopy",
          "signature": "Kind a",
          "source": "src/Data-SafeCopy-SafeCopy.html#kind",
          "type": "method"
        },
        "index": {
          "description": "The kind specifies how versions are dealt with By default values are tagged with their version id and don have any previous versions See extension and the much less used primitive",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "kind",
          "package": "safecopy",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method specifies how to migrate from the older type to the newer\n   one. It will never be necessary to use this function manually as it\n   all taken care of internally in the library.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "migrate",
          "package": "safecopy",
          "signature": "MigrateFrom a -\u003e a",
          "source": "src/Data-SafeCopy-SafeCopy.html#migrate",
          "type": "method"
        },
        "index": {
          "description": "This method specifies how to migrate from the older type to the newer one It will never be necessary to use this function manually as it all taken care of internally in the library",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "migrate",
          "normalized": "MigrateFrom a-\u003ea",
          "package": "safecopy",
          "signature": "MigrateFrom a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:migrate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion profile.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "objectProfile",
          "package": "safecopy",
          "signature": "Profile a",
          "source": "src/Data-SafeCopy-SafeCopy.html#objectProfile",
          "type": "method"
        },
        "index": {
          "description": "Version profile",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "objectProfile",
          "package": "safecopy",
          "partial": "Profile",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:objectProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive kinds aren't version tagged. This kind is used for small or built-in\n   types that won't change such as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "primitive",
          "package": "safecopy",
          "signature": "Kind a",
          "source": "src/Data-SafeCopy-SafeCopy.html#primitive",
          "type": "function"
        },
        "index": {
          "description": "Primitive kinds aren version tagged This kind is used for small or built-in types that won change such as Int or Bool",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "primitive",
          "package": "safecopy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:primitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "profileCurrentVersion",
          "package": "safecopy",
          "signature": "Int32",
          "source": "src/Data-SafeCopy-SafeCopy.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "profileCurrentVersion",
          "package": "safecopy",
          "partial": "Current Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:profileCurrentVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "profileSupportedVersions",
          "package": "safecopy",
          "signature": "[Int32]",
          "source": "src/Data-SafeCopy-SafeCopy.html#Profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "profileSupportedVersions",
          "normalized": "[Int]",
          "package": "safecopy",
          "partial": "Supported Versions",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:profileSupportedVersions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis method defines how a value should be parsed without worrying about\n   previous versions or migrations. This function cannot be used directly.\n   One should use \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e, instead.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "putCopy",
          "package": "safecopy",
          "signature": "a -\u003e Contained Put",
          "source": "src/Data-SafeCopy-SafeCopy.html#putCopy",
          "type": "method"
        },
        "index": {
          "description": "This method defines how value should be parsed without worrying about previous versions or migrations This function cannot be used directly One should use safeGet instead",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "putCopy",
          "normalized": "a-\u003eContained Put",
          "package": "safecopy",
          "partial": "Copy",
          "signature": "a-\u003eContained Put",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:putCopy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a version tagged data type and then migrate it to the desired type.\n   Any serialized value has been extended by the return type can be parsed.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "safeGet",
          "package": "safecopy",
          "signature": "Get a",
          "source": "src/Data-SafeCopy-SafeCopy.html#safeGet",
          "type": "function"
        },
        "index": {
          "description": "Parse version tagged data type and then migrate it to the desired type Any serialized value has been extended by the return type can be parsed",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "safeGet",
          "package": "safecopy",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:safeGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a data type by first writing out its version tag. This is much\n   simpler than the corresponding \u003ccode\u003e\u003ca\u003esafeGet\u003c/a\u003e\u003c/code\u003e since previous versions don't\n   come into play.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "safePut",
          "package": "safecopy",
          "signature": "a -\u003e Put",
          "source": "src/Data-SafeCopy-SafeCopy.html#safePut",
          "type": "function"
        },
        "index": {
          "description": "Serialize data type by first writing out its version tag This is much simpler than the corresponding safeGet since previous versions don come into play",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "safePut",
          "normalized": "a-\u003ePut",
          "package": "safecopy",
          "partial": "Put",
          "signature": "a-\u003ePut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:safePut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SafeCopy",
          "name": "unReverse",
          "package": "safecopy",
          "signature": "a",
          "source": "src/Data-SafeCopy-SafeCopy.html#Reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "unReverse",
          "package": "safecopy",
          "partial": "Reverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:unReverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe version of the type.\n\u003c/p\u003e\u003cp\u003eOnly used as a key so it must be unique (this is checked at run-time)\n   but doesn't have to be sequential or continuous.\n\u003c/p\u003e\u003cp\u003eThe default version is '0'.\n\u003c/p\u003e",
          "module": "Data.SafeCopy",
          "name": "version",
          "package": "safecopy",
          "signature": "Version a",
          "source": "src/Data-SafeCopy-SafeCopy.html#version",
          "type": "method"
        },
        "index": {
          "description": "The version of the type Only used as key so it must be unique this is checked at run-time but doesn have to be sequential or continuous The default version is",
          "hierarchy": "Data SafeCopy",
          "module": "Data.SafeCopy",
          "name": "version",
          "package": "safecopy",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/safecopy/docs/Data-SafeCopy.html#v:version"
      }
    }
  ]
]