[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable/docs/Data-Hashable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a class, \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e, for types that can be\n converted to a hash value.  This class exists for the benefit of\n hashing-based data structures.  The module provides instances for\n most standard types.  Efficient instances for other types can be\n generated automatically and effortlessly using the generics support\n in GHC 7.2 and above.\n\u003c/p\u003e\u003cp\u003eThe easiest way to get started is to use the \u003ccode\u003e\u003ca\u003ehash\u003c/a\u003e\u003c/code\u003e function. Here\n is an example session with \u003ccode\u003eghci\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e ghci\u003e import Data.Hashable\n ghci\u003e hash \"foo\"\n 60853164\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Hashable",
        "fct-package": "hashable",
        "fct-signature": "module",
        "fct-source": "src/Data-Hashable.html",
        "fct-type": "module",
        "title": "Hashable"
      },
      "index": {
        "description": "This module defines class Hashable for types that can be converted to hash value This class exists for the benefit of hashing-based data structures The module provides instances for most standard types Efficient instances for other types can be generated automatically and effortlessly using the generics support in GHC and above The easiest way to get started is to use the hash function Here is an example session with ghci ghci import Data.Hashable ghci hash foo",
        "hierarchy": "Data Hashable",
        "module": "Data.Hashable",
        "name": "Hashable",
        "normalized": "",
        "package": "hashable",
        "partial": "Hashable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable/docs/Data-Hashable.html#t:Hashable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of types that can be converted to a hash value.\n\u003c/p\u003e\u003cp\u003eMinimal implementation: \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Hashable",
        "fct-package": "hashable",
        "fct-signature": "class",
        "fct-source": "src/Data-Hashable-Class.html#Hashable",
        "fct-type": "class",
        "title": "Hashable"
      },
      "index": {
        "description": "The class of types that can be converted to hash value Minimal implementation hashWithSalt",
        "hierarchy": "Data Hashable",
        "module": "Data.Hashable",
        "name": "Hashable",
        "normalized": "",
        "package": "hashable",
        "partial": "Hashable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable/docs/Data-Hashable.html#v:hash",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e, but no salt is used. The default\n implementation uses \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e with some default salt.\n Instances might want to implement this method to provide a more\n efficient implementation than the default implementation.\n\u003c/p\u003e",
        "fct-module": "Data.Hashable",
        "fct-package": "hashable",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Hashable-Class.html#hash",
        "fct-type": "method",
        "title": "hash"
      },
      "index": {
        "description": "Like hashWithSalt but no salt is used The default implementation uses hashWithSalt with some default salt Instances might want to implement this method to provide more efficient implementation than the default implementation",
        "hierarchy": "Data Hashable",
        "module": "Data.Hashable",
        "name": "hash",
        "normalized": "a-\u003eInt",
        "package": "hashable",
        "partial": "",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable/docs/Data-Hashable.html#v:hashByteArray",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a hash value for the content of this \u003ccode\u003e\u003ca\u003eByteArray#\u003c/a\u003e\u003c/code\u003e,\n beginning at the specified offset, using specified number of bytes.\n\u003c/p\u003e",
        "fct-module": "Data.Hashable",
        "fct-package": "hashable",
        "fct-signature": "ByteArray#-\u003e Int-\u003e Int-\u003e Int",
        "fct-type": "function",
        "title": "hashByteArray"
      },
      "index": {
        "description": "Compute hash value for the content of this ByteArray beginning at the specified offset using specified number of bytes",
        "hierarchy": "Data Hashable",
        "module": "Data.Hashable",
        "name": "hashByteArray",
        "normalized": "ByteArray #-\u003eInt-\u003eInt-\u003eInt",
        "package": "hashable",
        "partial": "Byte Array",
        "signature": "ByteArray #-\u003eInt-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable/docs/Data-Hashable.html#v:hashByteArrayWithSalt",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a hash value for the content of this \u003ccode\u003e\u003ca\u003eByteArray#\u003c/a\u003e\u003c/code\u003e, using\n an initial salt.\n\u003c/p\u003e\u003cp\u003eThis function can for example be used to hash non-contiguous\n segments of memory as if they were one contiguous segment, by using\n the output of one hash as the salt for the next.\n\u003c/p\u003e",
        "fct-module": "Data.Hashable",
        "fct-package": "hashable",
        "fct-signature": "ByteArray#-\u003e Int-\u003e Int-\u003e Int-\u003e Int",
        "fct-type": "function",
        "title": "hashByteArrayWithSalt"
      },
      "index": {
        "description": "Compute hash value for the content of this ByteArray using an initial salt This function can for example be used to hash non-contiguous segments of memory as if they were one contiguous segment by using the output of one hash as the salt for the next",
        "hierarchy": "Data Hashable",
        "module": "Data.Hashable",
        "name": "hashByteArrayWithSalt",
        "normalized": "ByteArray #-\u003eInt-\u003eInt-\u003eInt-\u003eInt",
        "package": "hashable",
        "partial": "Byte Array With Salt",
        "signature": "ByteArray #-\u003eInt-\u003eInt-\u003eInt-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable/docs/Data-Hashable.html#v:hashPtr",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a hash value for the content of this pointer.\n\u003c/p\u003e",
        "fct-module": "Data.Hashable",
        "fct-package": "hashable",
        "fct-signature": "Ptr a-\u003e Int-\u003e IO Int",
        "fct-type": "function",
        "title": "hashPtr"
      },
      "index": {
        "description": "Compute hash value for the content of this pointer",
        "hierarchy": "Data Hashable",
        "module": "Data.Hashable",
        "name": "hashPtr",
        "normalized": "Ptr a-\u003eInt-\u003eIO Int",
        "package": "hashable",
        "partial": "Ptr",
        "signature": "Ptr a-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable/docs/Data-Hashable.html#v:hashPtrWithSalt",
      "description": {
        "fct-descr": "\u003cp\u003eCompute a hash value for the content of this pointer, using an\n initial salt.\n\u003c/p\u003e\u003cp\u003eThis function can for example be used to hash non-contiguous\n segments of memory as if they were one contiguous segment, by using\n the output of one hash as the salt for the next.\n\u003c/p\u003e",
        "fct-module": "Data.Hashable",
        "fct-package": "hashable",
        "fct-signature": "Ptr a-\u003e Int-\u003e Int-\u003e IO Int",
        "fct-type": "function",
        "title": "hashPtrWithSalt"
      },
      "index": {
        "description": "Compute hash value for the content of this pointer using an initial salt This function can for example be used to hash non-contiguous segments of memory as if they were one contiguous segment by using the output of one hash as the salt for the next",
        "hierarchy": "Data Hashable",
        "module": "Data.Hashable",
        "name": "hashPtrWithSalt",
        "normalized": "Ptr a-\u003eInt-\u003eInt-\u003eIO Int",
        "package": "hashable",
        "partial": "Ptr With Salt",
        "signature": "Ptr a-\u003eInt-\u003eInt-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable/docs/Data-Hashable.html#v:hashUsing",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a value into a \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e value, then hash the\n transformed value using the given salt.\n\u003c/p\u003e\u003cp\u003eThis is a useful shorthand in cases where a type can easily be\n mapped to another type that is already an instance of \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e.\n Example:\n\u003c/p\u003e\u003cpre\u003e data Foo = Foo | Bar\n          deriving (Enum)\n\n instance Hashable Foo where\n     hashWithSalt = hashUsing fromEnum\n\u003c/pre\u003e",
        "fct-module": "Data.Hashable",
        "fct-package": "hashable",
        "fct-signature": "(a -\u003e b)-\u003e Int-\u003e a-\u003e Int",
        "fct-type": "function",
        "title": "hashUsing"
      },
      "index": {
        "description": "Transform value into Hashable value then hash the transformed value using the given salt This is useful shorthand in cases where type can easily be mapped to another type that is already an instance of Hashable Example data Foo Foo Bar deriving Enum instance Hashable Foo where hashWithSalt hashUsing fromEnum",
        "hierarchy": "Data Hashable",
        "module": "Data.Hashable",
        "name": "hashUsing",
        "normalized": "(a-\u003eb)-\u003eInt-\u003ea-\u003eInt",
        "package": "hashable",
        "partial": "Using",
        "signature": "(a-\u003eb)-\u003eInt-\u003ea-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hashable/docs/Data-Hashable.html#v:hashWithSalt",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a hash value for the argument, using the given salt.\n\u003c/p\u003e\u003cp\u003eThe general contract of \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If two values are equal according to the \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e method, then\n    applying the \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e method on each of the two values\n    \u003cem\u003emust\u003c/em\u003e produce the same integer result if the same salt is\n    used in each case.\n\u003c/li\u003e\u003cli\u003e It is \u003cem\u003enot\u003c/em\u003e required that if two values are unequal\n    according to the \u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e method, then applying the\n    \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e method on each of the two values must produce\n    distinct integer results. However, the programmer should be\n    aware that producing distinct integer results for unequal\n    values may improve the performance of hashing-based data\n    structures.\n\u003c/li\u003e\u003cli\u003e This method can be used to compute different hash values for\n    the same input by providing a different salt in each\n    application of the method. This implies that any instance\n    that defines \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e \u003cem\u003emust\u003c/em\u003e make use of the salt in\n    its implementation.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.Hashable",
        "fct-package": "hashable",
        "fct-signature": "Int -\u003e a -\u003e Int",
        "fct-source": "src/Data-Hashable-Class.html#hashWithSalt",
        "fct-type": "method",
        "title": "hashWithSalt"
      },
      "index": {
        "description": "Return hash value for the argument using the given salt The general contract of hashWithSalt is If two values are equal according to the method then applying the hashWithSalt method on each of the two values must produce the same integer result if the same salt is used in each case It is not required that if two values are unequal according to the method then applying the hashWithSalt method on each of the two values must produce distinct integer results However the programmer should be aware that producing distinct integer results for unequal values may improve the performance of hashing-based data structures This method can be used to compute different hash values for the same input by providing different salt in each application of the method This implies that any instance that defines hashWithSalt must make use of the salt in its implementation",
        "hierarchy": "Data Hashable",
        "module": "Data.Hashable",
        "name": "hashWithSalt",
        "normalized": "Int-\u003ea-\u003eInt",
        "package": "hashable",
        "partial": "With Salt",
        "signature": "Int-\u003ea-\u003eInt"
      }
    }
  }
]