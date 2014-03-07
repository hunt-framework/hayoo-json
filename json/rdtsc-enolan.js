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
        "word": "rdtsc-enolan"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the function \u003ca\u003erdtsc\u003c/a\u003e for accessing the equivalent of\n x86's rdtsc instruction on your processor. To oversimplify quite a bit,\n this is the number of clock cycles since bootup. You should generally only\n use this as a source of relative time.\n\u003c/p\u003e\u003cp\u003eAs an example, you may use the following program to measure the overhead\n of calling this function:\n\u003c/p\u003e\u003cpre\u003e module Main where\n import System.CPUTime.Rdtsc\n\n main = do\n   t1 \u003c- rdtsc\n   t2 \u003c- rdtsc\n   putStrLn (\"Cost of rdtsc (ffi call):    \" ++ show (t2 - t1))\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.CPUTime.Rdtsc",
          "name": "Rdtsc",
          "package": "rdtsc-enolan",
          "source": "src/System-CPUTime-Rdtsc.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the function rdtsc for accessing the equivalent of x86 rdtsc instruction on your processor To oversimplify quite bit this is the number of clock cycles since bootup You should generally only use this as source of relative time As an example you may use the following program to measure the overhead of calling this function module Main where import System.CPUTime.Rdtsc main do t1 rdtsc t2 rdtsc putStrLn Cost of rdtsc ffi call show t2 t1",
          "hierarchy": "System CPUTime Rdtsc",
          "module": "System.CPUTime.Rdtsc",
          "name": "Rdtsc",
          "package": "rdtsc-enolan",
          "partial": "Rdtsc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rdtsc-enolan/docs/System-CPUTime-Rdtsc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.CPUTime.Rdtsc",
          "name": "rdtsc",
          "package": "rdtsc-enolan",
          "signature": "IO Word64",
          "source": "src/System-CPUTime-Rdtsc.html#rdtsc",
          "type": "function"
        },
        "index": {
          "hierarchy": "System CPUTime Rdtsc",
          "module": "System.CPUTime.Rdtsc",
          "name": "rdtsc",
          "package": "rdtsc-enolan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rdtsc-enolan/docs/System-CPUTime-Rdtsc.html#v:rdtsc"
      }
    }
  ]
]