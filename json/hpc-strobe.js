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
        "word": "hpc-strobe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA rudimentary library that demonstrates the possibility of\n using Hpc (Haskell Program Coverage) to inspect the state of\n a running Haskell program. Use of the library involves a\n simple change of the main function and also requires the\n program to be enabled for hpc. At the time of writing, this\n means using a fairly recent version of GHC and compiling the\n Haskell code with the \u003ccode\u003e-fhpc\u003c/code\u003e option.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Trace.Hpc.Strobe",
          "name": "Strobe",
          "package": "hpc-strobe",
          "source": "src/Trace-Hpc-Strobe.html",
          "type": "module"
        },
        "index": {
          "description": "rudimentary library that demonstrates the possibility of using Hpc Haskell Program Coverage to inspect the state of running Haskell program Use of the library involves simple change of the main function and also requires the program to be enabled for hpc At the time of writing this means using fairly recent version of GHC and compiling the Haskell code with the fhpc option",
          "hierarchy": "Trace Hpc Strobe",
          "module": "Trace.Hpc.Strobe",
          "name": "Strobe",
          "package": "hpc-strobe",
          "partial": "Strobe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hpc-strobe/docs/Trace-Hpc-Strobe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace\n\u003c/p\u003e\u003cpre\u003e\n main = \u003cyour main function\u003e\n\u003c/pre\u003e\u003cp\u003eby\n\u003c/p\u003e\u003cpre\u003e\n myMain = \u003cyour main function\u003e\n main = withStrobesWrittenRegularly\n          \"\u003ctixfile directory\u003e\"\n          \"myMain\"\n          1000000\n          myMain\n\u003c/pre\u003e\u003cp\u003eand strobes (separate Hpc tix files) will be written regularly,\n with 1 second (1000000 microseconds) between each writing of a\n strobe. The tix files will be deposited in the indicated tixfile\n directory and be named \"myMain_\u003cindex\u003e.tix\" where the\n index is taken from [0..].\n\u003c/p\u003e",
          "module": "Trace.Hpc.Strobe",
          "name": "withStrobesWrittenRegularly",
          "package": "hpc-strobe",
          "signature": "FilePath-\u003e String-\u003e Int-\u003e IO ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Replace main your main function by myMain your main function main withStrobesWrittenRegularly tixfile directory myMain myMain and strobes separate Hpc tix files will be written regularly with second microseconds between each writing of strobe The tix files will be deposited in the indicated tixfile directory and be named myMain index tix where the index is taken from",
          "hierarchy": "Trace Hpc Strobe",
          "module": "Trace.Hpc.Strobe",
          "name": "withStrobesWrittenRegularly",
          "normalized": "FilePath-\u003eString-\u003eInt-\u003eIO()-\u003eIO()",
          "package": "hpc-strobe",
          "partial": "Strobes Written Regularly",
          "signature": "FilePath-\u003eString-\u003eInt-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpc-strobe/docs/Trace-Hpc-Strobe.html#v:withStrobesWrittenRegularly"
      }
    }
  ]
]