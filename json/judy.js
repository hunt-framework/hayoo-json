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
        "word": "judy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVery fast, mutable associative data types based on Judy arrays.\n\u003c/p\u003e\u003cp\u003eA good imperative, mutable replacement for IntMap.\n\u003c/p\u003e\u003cp\u003eJudy arrays are both speed- and memory-efficient, with no tuning or\n configuration required, across a wide range of index set types (sequential,\n periodic, clustered, random). Judy's speed and memory usage are typically\n better than other data storage models such as skiplists, linked lists,\n binary, ternary, b-trees, or even hashing, and improves with very large\n data sets.\n\u003c/p\u003e\u003cp\u003eThe memory used by a Judy array is nearly proportional to the\n population (number of elements).\n\u003c/p\u003e\u003cp\u003eFor further references to the implementation, see:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Judy_array\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eExamples\u003c/em\u003e:\n\u003c/p\u003e\u003cp\u003eGenerate 1 million random integers. Report the largest one we see.\n\u003c/p\u003e\u003cpre\u003e import System.Random.Mersenne\n import qualified Data.Judy as J\n import Control.Monad\n\n main = do\n    g  \u003c- getStdGen\n    rs \u003c- randoms g\n    j  \u003c- J.new :: IO (J.JudyL Int)\n    forM_ (take 1000000 rs) $ \\n -\u003e\n        J.insert n 1 j\n    v  \u003c- J.findMax j\n    case v of\n         Nothing    -\u003e print \"Done.\"\n         Just (k,_) -\u003e print k\n\u003c/pre\u003e\u003cp\u003eCompile it:\n\u003c/p\u003e\u003cpre\u003e $ ghc -O2 --make Test.hs\n\u003c/pre\u003e\u003cp\u003eRunning it:\n\u003c/p\u003e\u003cpre\u003e $ time ./Test\n 18446712059962695226\n ./Test  0.65s user 0.03s system 99% cpu 0.680 total\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eNotes\u003c/em\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003eBy default this library is threadsafe\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eMultiple Haskell threads may operate on the arrays simultaneously. You can compile without locks if you know you're running in a single threaded fashion with: cabal install -funsafe\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSun Sep 27 17:12:24 PDT 2009: The library has only lightly been tested.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Judy",
          "name": "Judy",
          "package": "judy",
          "source": "src/Data-Judy.html",
          "type": "module"
        },
        "index": {
          "description": "Very fast mutable associative data types based on Judy arrays good imperative mutable replacement for IntMap Judy arrays are both speed and memory-efficient with no tuning or configuration required across wide range of index set types sequential periodic clustered random Judy speed and memory usage are typically better than other data storage models such as skiplists linked lists binary ternary b-trees or even hashing and improves with very large data sets The memory used by Judy array is nearly proportional to the population number of elements For further references to the implementation see http en.wikipedia.org wiki Judy array Examples Generate million random integers Report the largest one we see import System.Random.Mersenne import qualified Data.Judy as import Control.Monad main do getStdGen rs randoms J.new IO J.JudyL Int forM take rs J.insert J.findMax case of Nothing print Done Just print Compile it ghc O2 make Test.hs Running it time Test Test user system cpu total Notes By default this library is threadsafe Multiple Haskell threads may operate on the arrays simultaneously You can compile without locks if you know you re running in single threaded fashion with cabal install funsafe Sun Sep PDT The library has only lightly been tested",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "Judy",
          "package": "judy",
          "partial": "Judy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of things that can be stored in the JudyL array.\n You need to be able to convert the structure to a Word value,\n or a word-sized pointer.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote: that it is possible to convert any Haskell value into a JE-type, via a StablePtr. This allocates an entry in the runtime's stable pointer table, giving you a pointer that may be passed to C, and that when dereferenced in Haskell will yield the original Haskell value. See the source for an example of this with strict bytestrings.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "JE",
          "package": "judy",
          "source": "src/Data-Judy.html#JE",
          "type": "class"
        },
        "index": {
          "description": "Class of things that can be stored in the JudyL array You need to be able to convert the structure to Word value or word-sized pointer Note that it is possible to convert any Haskell value into JE-type via StablePtr This allocates an entry in the runtime stable pointer table giving you pointer that may be passed to and that when dereferenced in Haskell will yield the original Haskell value See the source for an example of this with strict bytestrings",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "JE",
          "package": "judy",
          "partial": "JE",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#t:JE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JudyL array is a mutable, finite map from Word to Word values.\n It is threadsafe by default.\n\u003c/p\u003e\u003cp\u003eA value is addressed by a key. The array may be sparse, and the key may\n be any word-sized value. There are no duplicate keys.\n\u003c/p\u003e\u003cp\u003eValues may be any instance of the JE class.\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "JudyL",
          "package": "judy",
          "source": "src/Data-Judy.html#JudyL",
          "type": "data"
        },
        "index": {
          "description": "JudyL array is mutable finite map from Word to Word values It is threadsafe by default value is addressed by key The array may be sparse and the key may be any word-sized value There are no duplicate keys Values may be any instance of the JE class",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "JudyL",
          "package": "judy",
          "partial": "Judy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#t:JudyL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of keys in the JudyL arrays. A word-sized type (64 or 32 bits)\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "Key",
          "package": "judy",
          "source": "src/Data-Judy.html#Key",
          "type": "type"
        },
        "index": {
          "description": "The type of keys in the JudyL arrays word-sized type or bits",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "Key",
          "package": "judy",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a value at a specific key with the result of the provided\n function. When the key is not a member of the map, no change is made.\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "adjust",
          "package": "judy",
          "signature": "(a -\u003e a) -\u003e Key -\u003e JudyL a -\u003e IO ()",
          "source": "src/Data-Judy.html#adjust",
          "type": "function"
        },
        "index": {
          "description": "Update value at specific key with the result of the provided function When the key is not member of the map no change is made",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eKey-\u003eJudyL a-\u003eIO()",
          "package": "judy",
          "signature": "(a-\u003ea)-\u003eKey-\u003eJudyL a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the Index/Value pair from the JudyL array.\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "delete",
          "package": "judy",
          "signature": "Key -\u003e JudyL a -\u003e IO ()",
          "source": "src/Data-Judy.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete the Index Value pair from the JudyL array",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "delete",
          "normalized": "Key-\u003eJudyL a-\u003eIO()",
          "package": "judy",
          "signature": "Key-\u003eJudyL a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all elems of the map, \u003cem\u003elazily\u003c/em\u003e, in ascending order. \n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "elems",
          "package": "judy",
          "signature": "JudyL a -\u003e IO [a]",
          "source": "src/Data-Judy.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Return all elems of the map lazily in ascending order",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "elems",
          "normalized": "JudyL a-\u003eIO[a]",
          "package": "judy",
          "signature": "JudyL a-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efindMax. Find the maximal key, and its associated value, in the map.\n Nothing if the map is empty.\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "findMax",
          "package": "judy",
          "signature": "JudyL a -\u003e IO (Maybe (Key, a))",
          "source": "src/Data-Judy.html#findMax",
          "type": "function"
        },
        "index": {
          "description": "findMax Find the maximal key and its associated value in the map Nothing if the map is empty",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "findMax",
          "normalized": "JudyL a-\u003eIO(Maybe(Key,a))",
          "package": "judy",
          "partial": "Max",
          "signature": "JudyL a-\u003eIO(Maybe(Key,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efindMin. Find the minimal key, and its associated value, in the map.\n Nothing if the map is empty.\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "findMin",
          "package": "judy",
          "signature": "JudyL a -\u003e IO (Maybe (Key, a))",
          "source": "src/Data-Judy.html#findMin",
          "type": "function"
        },
        "index": {
          "description": "findMin Find the minimal key and its associated value in the map Nothing if the map is empty",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "findMin",
          "normalized": "JudyL a-\u003eIO(Maybe(Key,a))",
          "package": "judy",
          "partial": "Min",
          "signature": "JudyL a-\u003eIO(Maybe(Key,a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReconstruct the Haskell value from the word-sized type.\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "fromWord",
          "package": "judy",
          "signature": "Word -\u003e IO a",
          "source": "src/Data-Judy.html#fromWord",
          "type": "method"
        },
        "index": {
          "description": "Reconstruct the Haskell value from the word-sized type",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "fromWord",
          "normalized": "Word-\u003eIO a",
          "package": "judy",
          "partial": "Word",
          "signature": "Word-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:fromWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a key and value pair into the JudyL array.\n Any existing key will be overwritten.\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "insert",
          "package": "judy",
          "signature": "Key -\u003e a -\u003e JudyL a -\u003e IO ()",
          "source": "src/Data-Judy.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert key and value pair into the JudyL array Any existing key will be overwritten",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "insert",
          "normalized": "Key-\u003ea-\u003eJudyL a-\u003eIO()",
          "package": "judy",
          "signature": "Key-\u003ea-\u003eJudyL a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn all keys of the map, \u003cem\u003elazily\u003c/em\u003e, in ascending order. \n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "keys",
          "package": "judy",
          "signature": "JudyL a -\u003e IO [Key]",
          "source": "src/Data-Judy.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Return all keys of the map lazily in ascending order",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "keys",
          "normalized": "JudyL a-\u003eIO[Key]",
          "package": "judy",
          "signature": "JudyL a-\u003eIO[Key]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a value associated with a key in the JudyL array. Return\n Nothing if no value is found.\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "lookup",
          "package": "judy",
          "signature": "Key -\u003e JudyL a -\u003e IO (Maybe a)",
          "source": "src/Data-Judy.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup value associated with key in the JudyL array Return Nothing if no value is found",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "lookup",
          "normalized": "Key-\u003eJudyL a-\u003eIO(Maybe a)",
          "package": "judy",
          "signature": "Key-\u003eJudyL a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the key a member of the map?\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "member",
          "package": "judy",
          "signature": "Key -\u003e JudyL a -\u003e IO Bool",
          "source": "src/Data-Judy.html#member",
          "type": "function"
        },
        "index": {
          "description": "Is the key member of the map",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "member",
          "normalized": "Key-\u003eJudyL a-\u003eIO Bool",
          "package": "judy",
          "signature": "Key-\u003eJudyL a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new empty JudyL array.\n\u003c/p\u003e\u003cp\u003eA finalizer is associated with the JudyL array, that will cause the\n garbage collector to free it automatically once the last reference\n has been dropped on the Haskell side.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote: The Haskell GC will track references to the foreign resource, but the foreign resource won't exert any heap pressure on the GC, meaning that finalizers will be run much later than you expect. An explicit 'performGC' can help with this.\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote: that if you store pointers in the Judy array we have no way of deallocating those -- you'll need to track those yourself (e.g. via StableName or ForeignPtr)\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "new",
          "package": "judy",
          "signature": "IO (JudyL a)",
          "source": "src/Data-Judy.html#new",
          "type": "function"
        },
        "index": {
          "description": "Allocate new empty JudyL array finalizer is associated with the JudyL array that will cause the garbage collector to free it automatically once the last reference has been dropped on the Haskell side Note The Haskell GC will track references to the foreign resource but the foreign resource won exert any heap pressure on the GC meaning that finalizers will be run much later than you expect An explicit performGC can help with this Note that if you store pointers in the Judy array we have no way of deallocating those you ll need to track those yourself e.g via StableName or ForeignPtr",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "new",
          "package": "judy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, null. Is the map empty? \n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "null",
          "package": "judy",
          "signature": "JudyL a -\u003e IO Bool",
          "source": "src/Data-Judy.html#null",
          "type": "function"
        },
        "index": {
          "description": "null Is the map empty",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "null",
          "normalized": "JudyL a-\u003eIO Bool",
          "package": "judy",
          "signature": "JudyL a-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e, size. The number of elements in the map.\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "size",
          "package": "judy",
          "signature": "JudyL a -\u003e IO Int",
          "source": "src/Data-Judy.html#size",
          "type": "function"
        },
        "index": {
          "description": "size The number of elements in the map",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "size",
          "normalized": "JudyL a-\u003eIO Int",
          "package": "judy",
          "signature": "JudyL a-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the Haskell value to a word-sized type that may be stored in a JudyL\n\u003c/p\u003e",
          "module": "Data.Judy",
          "name": "toWord",
          "package": "judy",
          "signature": "a -\u003e IO Word",
          "source": "src/Data-Judy.html#toWord",
          "type": "method"
        },
        "index": {
          "description": "Convert the Haskell value to word-sized type that may be stored in JudyL",
          "hierarchy": "Data Judy",
          "module": "Data.Judy",
          "name": "toWord",
          "normalized": "a-\u003eIO Word",
          "package": "judy",
          "partial": "Word",
          "signature": "a-\u003eIO Word",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/judy/docs/Data-Judy.html#v:toWord"
      }
    }
  ]
]