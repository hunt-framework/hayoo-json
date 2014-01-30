[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdtsc/docs/System-CPUTime-Rdtsc.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the function \u003ca\u003erdtsc\u003c/a\u003e for accessing the rdtsc\n machine register on modern IA-32 processors.  This is a 64-bit\n counter which counts the number of processor cycles since the\n machine has been powered up.\n\u003c/p\u003e\u003cp\u003eAs an example, you may use the following program to measure the overhead\n of calling this function:\n\u003c/p\u003e\u003cpre\u003e module Main where\n import System.CPUTime.Rdtsc\n\n main = do\n   t1 \u003c- rdtsc\n   t2 \u003c- rdtsc\n   putStrLn (\"Cost of rdtsc (ffi call):    \" ++ show (t2 - t1))\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.CPUTime.Rdtsc",
        "fct-package": "rdtsc",
        "fct-signature": "module",
        "fct-source": "src/System-CPUTime-Rdtsc.html",
        "fct-type": "module",
        "title": "Rdtsc"
      },
      "index": {
        "description": "This module provides the function rdtsc for accessing the rdtsc machine register on modern IA-32 processors This is bit counter which counts the number of processor cycles since the machine has been powered up As an example you may use the following program to measure the overhead of calling this function module Main where import System.CPUTime.Rdtsc main do t1 rdtsc t2 rdtsc putStrLn Cost of rdtsc ffi call show t2 t1",
        "hierarchy": "System CPUTime Rdtsc",
        "module": "System.CPUTime.Rdtsc",
        "name": "Rdtsc",
        "normalized": "",
        "package": "rdtsc",
        "partial": "Rdtsc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rdtsc/docs/System-CPUTime-Rdtsc.html#v:rdtsc",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the number of clock cycles since the machine this function\n is called on has been powered up.  Note that the value returned\n may be inaccurate if the program is run on some hardware\n virtualization layer.\n\u003c/p\u003e\u003cp\u003eEspecially on multi-core processors and when using hibernating\n operating systems, the values returned may be bogus.\n\u003c/p\u003e\u003cp\u003eFor more information about the \u003ccode\u003erdtsc\u003c/code\u003e instruction, see \n \u003ca\u003ehttp://en.wikipedia.org/wiki/RDTSC\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "System.CPUTime.Rdtsc",
        "fct-package": "rdtsc",
        "fct-signature": "IO Word64",
        "fct-source": "src/System-CPUTime-Rdtsc.html#rdtsc",
        "fct-type": "function",
        "title": "rdtsc"
      },
      "index": {
        "description": "Return the number of clock cycles since the machine this function is called on has been powered up Note that the value returned may be inaccurate if the program is run on some hardware virtualization layer Especially on multi-core processors and when using hibernating operating systems the values returned may be bogus For more information about the rdtsc instruction see http en.wikipedia.org wiki RDTSC",
        "hierarchy": "System CPUTime Rdtsc",
        "module": "System.CPUTime.Rdtsc",
        "name": "rdtsc",
        "normalized": "",
        "package": "rdtsc",
        "partial": "",
        "signature": ""
      }
    }
  }
]