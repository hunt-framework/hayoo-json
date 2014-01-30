[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Binary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate binary PPM files (\"P6\"). These are smaller\n  on disk and faster to generate than text PPM files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.PPM.Binary",
        "fct-package": "AC-PPM",
        "fct-signature": "module",
        "fct-source": "src/Codec-PPM-Binary.html",
        "fct-type": "module",
        "title": "Binary"
      },
      "index": {
        "description": "Generate binary PPM files P6 These are smaller on disk and faster to generate than text PPM files",
        "hierarchy": "Codec PPM Binary",
        "module": "Codec.PPM.Binary",
        "name": "Binary",
        "normalized": "",
        "package": "AC-PPM",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Binary.html#v:fn_list",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function: Given a function from pixel coordinates to pixel\n  colour, produce a list of pixel data ready to feed to one of the\n  other PPM functions.\n\u003c/p\u003e",
        "fct-module": "Codec.PPM.Binary",
        "fct-package": "AC-PPM",
        "fct-signature": "((Integer, Integer) -\u003e (Word8, Word8, Word8)) -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)]",
        "fct-source": "src/Codec-PPM-Binary.html#fn_list",
        "fct-type": "function",
        "title": "fn_list"
      },
      "index": {
        "description": "Helper function Given function from pixel coordinates to pixel colour produce list of pixel data ready to feed to one of the other PPM functions",
        "hierarchy": "Codec PPM Binary",
        "module": "Codec.PPM.Binary",
        "name": "fn_list",
        "normalized": "((Integer,Integer)-\u003e(Word,Word,Word))-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]",
        "package": "AC-PPM",
        "partial": "",
        "signature": "((Integer,Integer)-\u003e(Word,Word,Word))-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Binary.html#v:putPPM",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function: Generate PPM data and write it to the\n  specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. The handle is not closed or flushed afterwards.\n  This allows writing PPM data to network streams, etc. This function\n  does not return until all the data has been completely written.\n  (It may of course throw some kind of I/O exception instead.)\n\u003c/p\u003e",
        "fct-module": "Codec.PPM.Binary",
        "fct-package": "AC-PPM",
        "fct-signature": "Handle -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e IO ()",
        "fct-source": "src/Codec-PPM-Binary.html#putPPM",
        "fct-type": "function",
        "title": "putPPM"
      },
      "index": {
        "description": "Convenience function Generate PPM data and write it to the specified Handle The handle is not closed or flushed afterwards This allows writing PPM data to network streams etc This function does not return until all the data has been completely written It may of course throw some kind of exception instead",
        "hierarchy": "Codec PPM Binary",
        "module": "Codec.PPM.Binary",
        "name": "putPPM",
        "normalized": "Handle-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
        "package": "AC-PPM",
        "partial": "PPM",
        "signature": "Handle-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Binary.html#v:stringPPM",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the image size (X pixels, Y pixels) and a list of\n  pixel values (red, green, blue), produce a lazy ByteString\n  containing the PPM data.\n\u003c/p\u003e",
        "fct-module": "Codec.PPM.Binary",
        "fct-package": "AC-PPM",
        "fct-signature": "(Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e ByteString",
        "fct-source": "src/Codec-PPM-Binary.html#stringPPM",
        "fct-type": "function",
        "title": "stringPPM"
      },
      "index": {
        "description": "Given the image size pixels pixels and list of pixel values red green blue produce lazy ByteString containing the PPM data",
        "hierarchy": "Codec PPM Binary",
        "module": "Codec.PPM.Binary",
        "name": "stringPPM",
        "normalized": "(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eByteString",
        "package": "AC-PPM",
        "partial": "PPM",
        "signature": "(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Binary.html#v:writePPM",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function: Write PPM data directly to a file. If the file\n  does not exist, it is created. If it exists, it is overwritten.\n  This function does not return until the file has been completely\n  created. (It may of course throw some kind of I/O exception instead.)\n\u003c/p\u003e",
        "fct-module": "Codec.PPM.Binary",
        "fct-package": "AC-PPM",
        "fct-signature": "FilePath -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e IO ()",
        "fct-source": "src/Codec-PPM-Binary.html#writePPM",
        "fct-type": "function",
        "title": "writePPM"
      },
      "index": {
        "description": "Convenience function Write PPM data directly to file If the file does not exist it is created If it exists it is overwritten This function does not return until the file has been completely created It may of course throw some kind of exception instead",
        "hierarchy": "Codec PPM Binary",
        "module": "Codec.PPM.Binary",
        "name": "writePPM",
        "normalized": "FilePath-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
        "package": "AC-PPM",
        "partial": "PPM",
        "signature": "FilePath-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Text.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate textual PPM files (\"P3\"). These are much larger\n  than binary files and slower to generate, but have the\n  advantage of being \u003cem\u003evaguely\u003c/em\u003e human-readable. (Apart from\n  the file header, each line is three decimal numbers\n  representing the RGB values of a single pixel.) Such files\n  will also survive transfer in \"text mode\" without\n  being mutilated, unlike binary image files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.PPM.Text",
        "fct-package": "AC-PPM",
        "fct-signature": "module",
        "fct-source": "src/Codec-PPM-Text.html",
        "fct-type": "module",
        "title": "Text"
      },
      "index": {
        "description": "Generate textual PPM files P3 These are much larger than binary files and slower to generate but have the advantage of being vaguely human-readable Apart from the file header each line is three decimal numbers representing the RGB values of single pixel Such files will also survive transfer in text mode without being mutilated unlike binary image files",
        "hierarchy": "Codec PPM Text",
        "module": "Codec.PPM.Text",
        "name": "Text",
        "normalized": "",
        "package": "AC-PPM",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Text.html#v:fn_list",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function: Given a function from pixel coordinates to pixel\n  colour, produce a list of pixel data ready to feed to one of the\n  other PPM functions.\n\u003c/p\u003e",
        "fct-module": "Codec.PPM.Text",
        "fct-package": "AC-PPM",
        "fct-signature": "((Integer, Integer) -\u003e (Word8, Word8, Word8)) -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)]",
        "fct-source": "src/Codec-PPM-Text.html#fn_list",
        "fct-type": "function",
        "title": "fn_list"
      },
      "index": {
        "description": "Helper function Given function from pixel coordinates to pixel colour produce list of pixel data ready to feed to one of the other PPM functions",
        "hierarchy": "Codec PPM Text",
        "module": "Codec.PPM.Text",
        "name": "fn_list",
        "normalized": "((Integer,Integer)-\u003e(Word,Word,Word))-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]",
        "package": "AC-PPM",
        "partial": "",
        "signature": "((Integer,Integer)-\u003e(Word,Word,Word))-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Text.html#v:putPPM",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function: Generate PPM data and write it to the\n  specified \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. The handle is not closed or flushed afterwards.\n  This allows writing PPM data to network streams, etc. This function\n  does not return until all the data has been completely written.\n  (It may of course throw some kind of I/O exception instead.)\n\u003c/p\u003e",
        "fct-module": "Codec.PPM.Text",
        "fct-package": "AC-PPM",
        "fct-signature": "Handle -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e IO ()",
        "fct-source": "src/Codec-PPM-Text.html#putPPM",
        "fct-type": "function",
        "title": "putPPM"
      },
      "index": {
        "description": "Convenience function Generate PPM data and write it to the specified Handle The handle is not closed or flushed afterwards This allows writing PPM data to network streams etc This function does not return until all the data has been completely written It may of course throw some kind of exception instead",
        "hierarchy": "Codec PPM Text",
        "module": "Codec.PPM.Text",
        "name": "putPPM",
        "normalized": "Handle-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
        "package": "AC-PPM",
        "partial": "PPM",
        "signature": "Handle-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Text.html#v:stringPPM",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the image size (X pixels, Y pixels) and a list of\n  pixel values (red, green, blue), produce a lazy ByteString\n  containing the PPM data.\n\u003c/p\u003e",
        "fct-module": "Codec.PPM.Text",
        "fct-package": "AC-PPM",
        "fct-signature": "(Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e ByteString",
        "fct-source": "src/Codec-PPM-Text.html#stringPPM",
        "fct-type": "function",
        "title": "stringPPM"
      },
      "index": {
        "description": "Given the image size pixels pixels and list of pixel values red green blue produce lazy ByteString containing the PPM data",
        "hierarchy": "Codec PPM Text",
        "module": "Codec.PPM.Text",
        "name": "stringPPM",
        "normalized": "(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eByteString",
        "package": "AC-PPM",
        "partial": "PPM",
        "signature": "(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM-Text.html#v:writePPM",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience function: Write PPM data directly to a file. If the file\n  does not exist, it is created. If it exists, it is overwritten.\n  This function does not return until the file has been completely\n  created. (It may of course throw some kind of I/O exception instead.)\n\u003c/p\u003e",
        "fct-module": "Codec.PPM.Text",
        "fct-package": "AC-PPM",
        "fct-signature": "FilePath -\u003e (Integer, Integer) -\u003e [(Word8, Word8, Word8)] -\u003e IO ()",
        "fct-source": "src/Codec-PPM-Text.html#writePPM",
        "fct-type": "function",
        "title": "writePPM"
      },
      "index": {
        "description": "Convenience function Write PPM data directly to file If the file does not exist it is created If it exists it is overwritten This function does not return until the file has been completely created It may of course throw some kind of exception instead",
        "hierarchy": "Codec PPM Text",
        "module": "Codec.PPM.Text",
        "name": "writePPM",
        "normalized": "FilePath-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()",
        "package": "AC-PPM",
        "partial": "PPM",
        "signature": "FilePath-\u003e(Integer,Integer)-\u003e[(Word,Word,Word)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/AC-PPM/docs/Codec-PPM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe two modules \u003ca\u003eCodec.PPM.Text\u003c/a\u003e and \u003ca\u003eCodec.PPM.Binary\u003c/a\u003e support\n  the generation of text or binary PPM files (\"P3\" or \"P6\"\n  respectively). Default is binary (since it is more efficient.)\n  Both modules have an identical API; just change the import\n  declaration to change file mode.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.PPM",
        "fct-package": "AC-PPM",
        "fct-signature": "module",
        "fct-source": "src/Codec-PPM.html",
        "fct-type": "module",
        "title": "PPM"
      },
      "index": {
        "description": "The two modules Codec.PPM.Text and Codec.PPM.Binary support the generation of text or binary PPM files P3 or P6 respectively Default is binary since it is more efficient Both modules have an identical API just change the import declaration to change file mode",
        "hierarchy": "Codec PPM",
        "module": "Codec.PPM",
        "name": "PPM",
        "normalized": "",
        "package": "AC-PPM",
        "partial": "PPM",
        "signature": ""
      }
    }
  }
]