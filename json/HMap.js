[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of heterogeneous maps.\n\u003c/p\u003e\u003cp\u003eA heterogeneous map can store values of different types. This in contrast\n to a homogenous map (such as the one in \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e) which can store\n values of a single type.\n\u003c/p\u003e\u003cp\u003eFor example, here we use\n a map with \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e (name), \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e (salary) and \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e (female):\n\u003c/p\u003e\u003cpre\u003e import Data.HMap \n \n -- type can be inferred.\n example ::  Key x String -\u003e Key x1 Double -\u003e Key x2 Bool \n            -\u003e String\n example name salary female = \n   format a ++ \"\\n\" ++ format b ++ \"\\n\"\n   where a = insert name \"Edsger\" $ \n             insert salary 4450.0 $ \n             insert female False empty\n         b = insert name \"Ada\"    $ \n             insert salary 5000.0 $ \n             insert female True empty\n         format x = x ! name ++ \n                    \": salary=\" ++ show (x ! salary) ++ \n                    \", female=\"  ++ show (x ! female)\n\n keyLocal :: String\n keyLocal = withKey $ withKey $ withKey example\n\n keyGlobal :: IO String\n keyGlobal = \n   do name   \u003c- createKey\n      salary \u003c- createKey\n      female \u003c- createKey\n      return $ example name salary female\n                     \n main = do print \"local\"\n           putStr keyLocal\n           print \"global\"\n           keyGlobal \u003e\u003e= putStr\n\u003c/pre\u003e\u003cp\u003eWhich gives:\n\u003c/p\u003e\u003cpre\u003e \"local\"\n Edsger: salary=4450.0, female=False\n Ada: salary=5000.0, female=True\n \"global\"\n Edsger: salary=4450.0, female=False\n Ada: salary=5000.0, female=True\n\u003c/pre\u003e\u003cp\u003eKey types carry two type arguments: the scope of the key and\n  the the type of things that can be stored at this key, for example \u003ccode\u003eString\u003c/code\u003e or \u003ccode\u003eInt\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe scope of the key depends on how it is created: \n\u003c/p\u003e\u003cul\u003e\u003cli\u003e In the \u003ccode\u003ekeyLocal\u003c/code\u003e example, keys are created \u003cem\u003elocally\u003c/em\u003e with the \u003ccode\u003e\u003ca\u003ewithKey\u003c/a\u003e\u003c/code\u003e function.\n   The type of the \u003ccode\u003e\u003ca\u003ewithKey\u003c/a\u003e\u003c/code\u003e function is \u003ccode\u003e(forall x. Key x a -\u003e b) -\u003e b\u003c/code\u003e, which means it \n   assigns a key and passes it to the given function. The key cannot \n   escape the function (this would yield a type error). Hence,\n   we say the key is \u003cem\u003escoped\u003c/em\u003e to the function. The scope type argument of the key is then an existential type.\n\u003c/li\u003e\u003cli\u003e In the \u003ccode\u003ekeyGlobal\u003c/code\u003e example, keys are created \u003cem\u003eglobally\u003c/em\u003e with \u003ccode\u003e\u003ca\u003ecreateKey\u003c/a\u003e\u003c/code\u003e in the IO monad.\n   This allows to create keys that are not \n   not scoped to a single function, but to the whole program. The scope type argument of the key is then\n   \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module differs from hackage package \u003ccode\u003ehetero-map\u003c/code\u003e in the following ways:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Lookup, insertion and updates are \u003cem\u003eO(log n)\u003c/em\u003e when using this module,\n   whereas they are \u003cem\u003eO(n)\u003c/em\u003e when using \u003ccode\u003ehetero-map\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e With this module we cannot statically ensure that a Heterogenous map \n   has a some key (i.e. (!) might throw error, like in \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e).\n   With \u003ccode\u003ehetero-map\u003c/code\u003e it is possible to statically rule out \n   such errors.\n\u003c/li\u003e\u003cli\u003e The interface of this module is more similar to  \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis module differs from \u003ccode\u003estable-maps\u003c/code\u003e in the following ways:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Key can be created safely without using the IO monad.\n\u003c/li\u003e\u003cli\u003e The interface is more uniform and implements more of the\n    \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e interface.\n\u003c/li\u003e\u003cli\u003e This module uses a Hashmap as a backend, whereas \u003ccode\u003estable-maps\u003c/code\u003e uses \u003ccode\u003eData.Map\u003c/code\u003e.\n   Hashmaps are faster, see \u003ca\u003ehttp://blog.johantibell.com/2012/03/announcing-unordered-containers-02.html\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.HMap (HMap)\n  import qualified Data.HMap as HMap\n\u003c/pre\u003e\u003cp\u003eThis module uses \u003ccode\u003eData.HashMap.Lazy\u003c/code\u003e as a backend. Every function from \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e\n that makes sense in a heterogenous setting has been implemented.\n\u003c/p\u003e\u003cp\u003eNote that the implementation is \u003cem\u003eleft-biased\u003c/em\u003e -- the elements of a\n first argument are always preferred to the second, for example in\n \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eOperation comments contain the operation time complexity in\n the Big-O notation \u003ca\u003ehttp://en.wikipedia.org/wiki/Big_O_notation\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "module",
        "fct-source": "src/Data-HMap.html",
        "fct-type": "module",
        "title": "HMap"
      },
      "index": {
        "description": "An efficient implementation of heterogeneous maps heterogeneous map can store values of different types This in contrast to homogenous map such as the one in Map which can store values of single type For example here we use map with String name Double salary and Bool female import Data.HMap type can be inferred example Key String Key x1 Double Key x2 Bool String example name salary female format format where insert name Edsger insert salary insert female False empty insert name Ada insert salary insert female True empty format name salary show salary female show female keyLocal String keyLocal withKey withKey withKey example keyGlobal IO String keyGlobal do name createKey salary createKey female createKey return example name salary female main do print local putStr keyLocal print global keyGlobal putStr Which gives local Edsger salary female False Ada salary female True global Edsger salary female False Ada salary female True Key types carry two type arguments the scope of the key and the the type of things that can be stored at this key for example String or Int The scope of the key depends on how it is created In the keyLocal example keys are created locally with the withKey function The type of the withKey function is forall Key which means it assigns key and passes it to the given function The key cannot escape the function this would yield type error Hence we say the key is scoped to the function The scope type argument of the key is then an existential type In the keyGlobal example keys are created globally with createKey in the IO monad This allows to create keys that are not not scoped to single function but to the whole program The scope type argument of the key is then This module differs from hackage package hetero-map in the following ways Lookup insertion and updates are log when using this module whereas they are when using hetero-map With this module we cannot statically ensure that Heterogenous map has some key i.e might throw error like in Map With hetero-map it is possible to statically rule out such errors The interface of this module is more similar to Map This module differs from stable-maps in the following ways Key can be created safely without using the IO monad The interface is more uniform and implements more of the Map interface This module uses Hashmap as backend whereas stable-maps uses Data.Map Hashmaps are faster see http blog.johantibell.com announcing-unordered-containers-02.html Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.HMap HMap import qualified Data.HMap as HMap This module uses Data.HashMap.Lazy as backend Every function from Map that makes sense in heterogenous setting has been implemented Note that the implementation is left-biased the elements of first argument are always preferred to the second for example in union or insert Operation comments contain the operation time complexity in the Big-O notation http en.wikipedia.org wiki Big notation",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "HMap",
        "normalized": "",
        "package": "HMap",
        "partial": "HMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#t:HMap",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of hetrogenous maps. \n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "data",
        "fct-source": "src/Data-HMap.html#HMap",
        "fct-type": "data",
        "title": "HMap"
      },
      "index": {
        "description": "The type of hetrogenous maps",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "HMap",
        "normalized": "",
        "package": "HMap",
        "partial": "HMap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eThe datatype of Keys. \n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003ex\u003c/dt\u003e\u003cdd\u003e The scope of this key. This can either be \u003ccode\u003e\u003ca\u003eT\u003c/a\u003e\u003c/code\u003e for top-level keys created with \u003ccode\u003e\u003ca\u003ecreateKey\u003c/a\u003e\u003c/code\u003e or \n       an existential type for keys introduced by \u003ccode\u003e\u003ca\u003ewithKey\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003ea\u003c/dt\u003e\u003cdd\u003e The type of things that can be sorted at this key.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eFor example, \u003ccode\u003eKey T Int\u003c/code\u003e is a top-level key that can be used to store values\n  of type \u003ccode\u003eInt\u003c/code\u003e in a heterogenous map.     \n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "data",
        "fct-source": "src/Data-HMap.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "The datatype of Keys The scope of this key This can either be for top-level keys created with createKey or an existential type for keys introduced by withKey The type of things that can be sorted at this key For example Key Int is top-level key that can be used to store values of type Int in heterogenous map",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "Key",
        "normalized": "",
        "package": "HMap",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#t:T",
      "description": {
        "fct-descr": "\u003cp\u003eThe scope of top-level keys.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "data",
        "fct-source": "src/Data-HMap.html#T",
        "fct-type": "data",
        "title": "T"
      },
      "index": {
        "description": "The scope of top-level keys",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "T",
        "normalized": "",
        "package": "HMap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Find the value at a key.\n Calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e when the element can not be found.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "HMap -\u003e Key x a -\u003e a",
        "fct-source": "src/Data-HMap.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "log Find the value at key Calls error when the element can not be found",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "(!) !",
        "normalized": "HMap-\u003eKey a b-\u003eb",
        "package": "HMap",
        "partial": "",
        "signature": "HMap-\u003eKey x a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:-92--92-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edifference\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "HMap -\u003e HMap -\u003e HMap",
        "fct-source": "src/Data-HMap.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "Same as difference",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "(\\\\) \\\\",
        "normalized": "HMap-\u003eHMap-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "HMap-\u003eHMap-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:adjust",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Update a value at a specific key with the result of the provided function.\n When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "(a -\u003e a) -\u003e Key x a -\u003e HMap -\u003e HMap",
        "fct-source": "src/Data-HMap.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "log Update value at specific key with the result of the provided function When the key is not member of the map the original map is returned",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eKey b a-\u003eHMap-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eKey x a-\u003eHMap-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:alter",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) alters the value \u003ccode\u003ex\u003c/code\u003e at \u003ccode\u003ek\u003c/code\u003e, or absence thereof.\n \u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e can be used to insert, delete, or update a value in a \u003ccode\u003eMap\u003c/code\u003e.\n In short : \u003ccode\u003e\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k (\u003ccode\u003e\u003ca\u003ealter\u003c/a\u003e\u003c/code\u003e f k m) = f (\u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e k m)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "(Maybe a -\u003e Maybe a) -\u003e Key x a -\u003e HMap -\u003e HMap",
        "fct-source": "src/Data-HMap.html#alter",
        "fct-type": "function",
        "title": "alter"
      },
      "index": {
        "description": "log The expression alter map alters the value at or absence thereof alter can be used to insert delete or update value in Map In short lookup alter lookup",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "alter",
        "normalized": "(Maybe a-\u003eMaybe a)-\u003eKey b a-\u003eHMap-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "(Maybe a-\u003eMaybe a)-\u003eKey x a-\u003eHMap-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:createKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Create a new top-level key.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "IO (Key T a)",
        "fct-source": "src/Data-HMap.html#createKey",
        "fct-type": "function",
        "title": "createKey"
      },
      "index": {
        "description": "Create new top-level key",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "createKey",
        "normalized": "",
        "package": "HMap",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Delete a key and its value from the map. When the key is not\n a member of the map, the original map is returned.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "Key x a -\u003e HMap -\u003e HMap",
        "fct-source": "src/Data-HMap.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "log Delete key and its value from the map When the key is not member of the map the original map is returned",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "delete",
        "normalized": "Key a b-\u003eHMap-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "Key x a-\u003eHMap-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Difference of two maps.\n Return elements of the first map not existing in the second map.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "HMap -\u003e HMap -\u003e HMap",
        "fct-source": "src/Data-HMap.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "Difference of two maps Return elements of the first map not existing in the second map",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "difference",
        "normalized": "HMap-\u003eHMap-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "HMap-\u003eHMap-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty map.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "HMap",
        "fct-source": "src/Data-HMap.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty map",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "empty",
        "normalized": "",
        "package": "HMap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:findWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e returns\n the value at key \u003ccode\u003ek\u003c/code\u003e or returns default value \u003ccode\u003edef\u003c/code\u003e\n when the key is not in the map.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "a -\u003e Key x a -\u003e HMap -\u003e a",
        "fct-source": "src/Data-HMap.html#findWithDefault",
        "fct-type": "function",
        "title": "findWithDefault"
      },
      "index": {
        "description": "log The expression findWithDefault def map returns the value at key or returns default value def when the key is not in the map",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "findWithDefault",
        "normalized": "a-\u003eKey b a-\u003eHMap-\u003ea",
        "package": "HMap",
        "partial": "With Default",
        "signature": "a-\u003eKey x a-\u003eHMap-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert a new key and value in the map.\n If the key is already present in the map, the associated value is\n replaced with the supplied value. \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e is equivalent to\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "Key x a -\u003e a -\u003e HMap -\u003e HMap",
        "fct-source": "src/Data-HMap.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "log Insert new key and value in the map If the key is already present in the map the associated value is replaced with the supplied value insert is equivalent to insertWith const",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "insert",
        "normalized": "Key a b-\u003eb-\u003eHMap-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "Key x a-\u003ea-\u003eHMap-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function, combining new value and old value.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e\n will insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if key does\n not exist in the map. If the key does exist, the function will\n insert the pair \u003ccode\u003e(key, f new_value old_value)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Key x a -\u003e a -\u003e HMap -\u003e HMap",
        "fct-source": "src/Data-HMap.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "log Insert with function combining new value and old value insertWith key value mp will insert the pair key value into mp if key does not exist in the map If the key does exist the function will insert the pair key new value old value",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eKey b a-\u003ea-\u003eHMap-\u003eHMap",
        "package": "HMap",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eKey x a-\u003ea-\u003eHMap-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:intersection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e. Intersection of two maps.\n Return data in the first map for the keys existing in both maps.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "HMap -\u003e HMap -\u003e HMap",
        "fct-source": "src/Data-HMap.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "Intersection of two maps Return data in the first map for the keys existing in both maps",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "intersection",
        "normalized": "HMap-\u003eHMap-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "HMap-\u003eHMap-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corresponding value as \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value)\u003c/code\u003e,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key isn't in the map.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "Key x a -\u003e HMap -\u003e Maybe a",
        "fct-source": "src/Data-HMap.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "log Lookup the value at key in the map The function will return the corresponding value as Just value or Nothing if the key isn in the map",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "lookup",
        "normalized": "Key a b-\u003eHMap-\u003eMaybe b",
        "package": "HMap",
        "partial": "",
        "signature": "Key x a-\u003eHMap-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key a member of the map? See also \u003ccode\u003e\u003ca\u003enotMember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "Key x a -\u003e HMap -\u003e Bool",
        "fct-source": "src/Data-HMap.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "log Is the key member of the map See also notMember",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "member",
        "normalized": "Key a b-\u003eHMap-\u003eBool",
        "package": "HMap",
        "partial": "",
        "signature": "Key x a-\u003eHMap-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:notMember",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Is the key not a member of the map? See also \u003ccode\u003e\u003ca\u003emember\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "Key x a -\u003e HMap -\u003e Bool",
        "fct-source": "src/Data-HMap.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "log Is the key not member of the map See also member",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "notMember",
        "normalized": "Key a b-\u003eHMap-\u003eBool",
        "package": "HMap",
        "partial": "Member",
        "signature": "Key x a-\u003eHMap-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the map empty?\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "HMap -\u003e Bool",
        "fct-source": "src/Data-HMap.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the map empty",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "null",
        "normalized": "HMap-\u003eBool",
        "package": "HMap",
        "partial": "",
        "signature": "HMap-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. A map with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "Key x a -\u003e a -\u003e HMap",
        "fct-source": "src/Data-HMap.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "map with single element",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "singleton",
        "normalized": "Key a b-\u003eb-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "Key x a-\u003ea-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The number of elements in the map.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "HMap -\u003e Int",
        "fct-source": "src/Data-HMap.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements in the map",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "size",
        "normalized": "HMap-\u003eInt",
        "package": "HMap",
        "partial": "",
        "signature": "HMap-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e.\n The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e t1 t2\u003c/code\u003e) takes the left-biased union of \u003ccode\u003et1\u003c/code\u003e and \u003ccode\u003et2\u003c/code\u003e.\n It prefers \u003ccode\u003et1\u003c/code\u003e when duplicate keys are encountered.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "HMap -\u003e HMap -\u003e HMap",
        "fct-source": "src/Data-HMap.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "The expression union t1 t2 takes the left-biased union of t1 and t2 It prefers t1 when duplicate keys are encountered",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "union",
        "normalized": "HMap-\u003eHMap-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "HMap-\u003eHMap-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:unions",
      "description": {
        "fct-descr": "\u003cp\u003eThe union of a list of maps:\n   (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eunions\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "[HMap] -\u003e HMap",
        "fct-source": "src/Data-HMap.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "The union of list of maps unions foldl union empty",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "unions",
        "normalized": "[HMap]-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "[HMap]-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eupdate\u003c/a\u003e\u003c/code\u003e f k map\u003c/code\u003e) updates the value \u003ccode\u003ex\u003c/code\u003e\n at \u003ccode\u003ek\u003c/code\u003e (if it is in the map). If (\u003ccode\u003ef x\u003c/code\u003e) is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is\n deleted. If it is (\u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e y\u003c/code\u003e), the key \u003ccode\u003ek\u003c/code\u003e is bound to the new value \u003ccode\u003ey\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "(a -\u003e Maybe a) -\u003e Key x a -\u003e HMap -\u003e HMap",
        "fct-source": "src/Data-HMap.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "log The expression update map updates the value at if it is in the map If is Nothing the element is deleted If it is Just the key is bound to the new value",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eKey b a-\u003eHMap-\u003eHMap",
        "package": "HMap",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003eKey x a-\u003eHMap-\u003eHMap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HMap/docs/Data-HMap.html#v:withKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Scopes a key to the given function\n The key cannot escape the function (because of the existential type).\n\u003c/p\u003e\u003cp\u003eThe implementation actually *creates* a key, but because the key cannot escape\n the given function \u003ccode\u003ef\u003c/code\u003e, there is no way to observe that if we run \n \u003ccode\u003ewithKey f\u003c/code\u003e twice, that it will get a different key the second time.\n\u003c/p\u003e",
        "fct-module": "Data.HMap",
        "fct-package": "HMap",
        "fct-signature": "(forall x.  Key x a -\u003e b) -\u003e b",
        "fct-source": "src/Data-HMap.html#withKey",
        "fct-type": "function",
        "title": "withKey"
      },
      "index": {
        "description": "Scopes key to the given function The key cannot escape the function because of the existential type The implementation actually creates key but because the key cannot escape the given function there is no way to observe that if we run withKey twice that it will get different key the second time",
        "hierarchy": "Data HMap",
        "module": "Data.HMap",
        "name": "withKey",
        "normalized": "(a b Key c d-\u003ee)-\u003ee",
        "package": "HMap",
        "partial": "Key",
        "signature": "(forall x. Key x a-\u003eb)-\u003eb"
      }
    }
  }
]