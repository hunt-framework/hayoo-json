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
        "word": "chunks"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWhilst the syntax for modules makes use of HTML-style comments,\n   there is nothing preventing the use of templates for non-HTML\n   purposes.\n\u003c/p\u003e\u003cp\u003eChunks are delimited by \u003ccode\u003e\u003c!-- BEGIN \u003cem\u003ename\u003c/em\u003e --\u003e \u003cem\u003esome text\u003c/em\u003e \u003c!--\n   END --\u003e\u003c/code\u003e where \u003ccode\u003e\u003cem\u003ename\u003c/em\u003e\u003c/code\u003e specifies the name of the chunk, and\n   \u003ccode\u003e\u003cem\u003esome text\u003c/em\u003e\u003c/code\u003e is replaced by whatever you wish to appear within\n   the chunk.  Chunks can be nested but this is \u003cem\u003eonly\u003c/em\u003e for\n   convenience: a nested chunk is \u003cem\u003enever\u003c/em\u003e output as part of its\n   parent chunk. The purpose of allowing nesting is so that the\n   template can be constructed so that it itself renders acceptably\n   in a browser.\n\u003c/p\u003e\u003cp\u003eVariables can be specified in the content of the chunk by\n   \u003ccode\u003e##\u003cem\u003ename\u003c/em\u003e##\u003c/code\u003e where \u003ccode\u003e\u003cem\u003ename\u003c/em\u003e\u003c/code\u003e is the variable name. In order to\n   prevent the variables from appearing in the template when\n   rendered in a browser, the variable may be set in a comment as\n   long as it's the only thing in the comment, e.g. \u003ccode\u003e\u003c!--\n   ##\u003cem\u003ename\u003c/em\u003e## --\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eTypical use is to use the splice syntax (ghc needs \u003ccode\u003e-fth\u003c/code\u003e for\n   this) to include the chunk definitions in the currrent module,\n   e.g.\n\u003c/p\u003e\u003cpre\u003e\n   $(chunksFromFile \"/path/to/templates/template_01.html\")\n\u003c/pre\u003e\u003cp\u003eThis causes, \u003cem\u003eat compile time\u003c/em\u003e, the template to be parsed and for\n   the chunks to be converted into \u003ccode\u003edata\u003c/code\u003e declarations which are\n   instances of both \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e (for debugging purposes) and \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e\n   (for formatting purposes). The template is thus incorporated\n   directly within the executable eliminating the dependency on the\n   template at runtime. This also means that if you just change the\n   template then you must recompile with \u003ccode\u003e-fforce-recomp\u003c/code\u003e inorder to\n   force the recompilation.\n\u003c/p\u003e\u003cp\u003eThe naming convention used converts the names of chunks to\n   \u003ccode\u003eChunk_\u003cem\u003ename\u003c/em\u003e\u003c/code\u003e and chunk variables to fields in the data type\n   with names of \u003ccode\u003e\u003cem\u003echunk-name\u003c/em\u003e_\u003cem\u003evar-name\u003c/em\u003e\u003c/code\u003e. The function\n   \u003ccode\u003e\u003ca\u003eshowChunksData\u003c/a\u003e\u003c/code\u003e exists to allow you to inspect these.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.HTML.Chunks",
          "name": "Chunks",
          "package": "chunks",
          "source": "src/Text-HTML-Chunks.html",
          "type": "module"
        },
        "index": {
          "description": "Whilst the syntax for modules makes use of HTML-style comments there is nothing preventing the use of templates for non-HTML purposes Chunks are delimited by BEGIN name some text END where name specifies the name of the chunk and some text is replaced by whatever you wish to appear within the chunk Chunks can be nested but this is only for convenience nested chunk is never output as part of its parent chunk The purpose of allowing nesting is so that the template can be constructed so that it itself renders acceptably in browser Variables can be specified in the content of the chunk by name where name is the variable name In order to prevent the variables from appearing in the template when rendered in browser the variable may be set in comment as long as it the only thing in the comment e.g name Typical use is to use the splice syntax ghc needs fth for this to include the chunk definitions in the currrent module e.g chunksFromFile path to templates template html This causes at compile time the template to be parsed and for the chunks to be converted into data declarations which are instances of both Show for debugging purposes and Chunk for formatting purposes The template is thus incorporated directly within the executable eliminating the dependency on the template at runtime This also means that if you just change the template then you must recompile with fforce-recomp inorder to force the recompilation The naming convention used converts the names of chunks to Chunk name and chunk variables to fields in the data type with names of chunk-name var-name The function showChunksData exists to allow you to inspect these",
          "hierarchy": "Text HTML Chunks",
          "module": "Text.HTML.Chunks",
          "name": "Chunks",
          "package": "chunks",
          "partial": "Chunks",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chunks/docs/Text-HTML-Chunks.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.HTML.Chunks",
          "name": "Chunk",
          "package": "chunks",
          "source": "src/Text-HTML-Chunks.html#Chunk",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text HTML Chunks",
          "module": "Text.HTML.Chunks",
          "name": "Chunk",
          "package": "chunks",
          "partial": "Chunk",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/chunks/docs/Text-HTML-Chunks.html#t:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the supplied file and generate the Haskell AST representing\n data-type declarations of the chunks with instances of \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e\n incorporating the body of the chunks. Expected use is through\n splicing (ghc needs \u003ccode\u003e-fth\u003c/code\u003e option for this):\n\u003c/p\u003e\u003cpre\u003e\n   $(chunksFromFile \"/path/to/templates/template_01.html\")\n\u003c/pre\u003e",
          "module": "Text.HTML.Chunks",
          "name": "chunksFromFile",
          "package": "chunks",
          "signature": "FilePath -\u003e Q [Dec]",
          "source": "src/Text-HTML-Chunks.html#chunksFromFile",
          "type": "function"
        },
        "index": {
          "description": "Parse the supplied file and generate the Haskell AST representing data-type declarations of the chunks with instances of Chunk incorporating the body of the chunks Expected use is through splicing ghc needs fth option for this chunksFromFile path to templates template html",
          "hierarchy": "Text HTML Chunks",
          "module": "Text.HTML.Chunks",
          "name": "chunksFromFile",
          "normalized": "FilePath-\u003eQ[Dec]",
          "package": "chunks",
          "partial": "From File",
          "signature": "FilePath-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chunks/docs/Text-HTML-Chunks.html#v:chunksFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe instances of \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e that are built by \u003ccode\u003e\u003ca\u003echunksFromFile\u003c/a\u003e\u003c/code\u003e\n incorporate into the implementation of \u003ccode\u003e\u003ca\u003eformat\u003c/a\u003e\u003c/code\u003e all the textual\n content of the chunk. Supplying a value of the automatically\n generated data type \u003ccode\u003eChunk_\u003cem\u003e*\u003c/em\u003e\u003c/code\u003e will use the fields in the\n value to fill in all variables within the chunk.\n\u003c/p\u003e",
          "module": "Text.HTML.Chunks",
          "name": "format",
          "package": "chunks",
          "signature": "a -\u003e String",
          "source": "src/Text-HTML-Chunks.html#format",
          "type": "method"
        },
        "index": {
          "description": "The instances of Chunk that are built by chunksFromFile incorporate into the implementation of format all the textual content of the chunk Supplying value of the automatically generated data type Chunk will use the fields in the value to fill in all variables within the chunk",
          "hierarchy": "Text HTML Chunks",
          "module": "Text.HTML.Chunks",
          "name": "format",
          "normalized": "a-\u003eString",
          "package": "chunks",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/chunks/docs/Text-HTML-Chunks.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the supplied file for chunks and return a string\n representing all the code generated for the chunks. This will\n return both the text of the data-declarations and the instance\n \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003e declarations. The instance declarations will often be very\n large as they incorporated the text of the chunk taken from the\n template.\n\u003c/p\u003e",
          "module": "Text.HTML.Chunks",
          "name": "showChunksAll",
          "package": "chunks",
          "signature": "FilePath -\u003e IO String",
          "source": "src/Text-HTML-Chunks.html#showChunksAll",
          "type": "function"
        },
        "index": {
          "description": "Parse the supplied file for chunks and return string representing all the code generated for the chunks This will return both the text of the data-declarations and the instance Chunk declarations The instance declarations will often be very large as they incorporated the text of the chunk taken from the template",
          "hierarchy": "Text HTML Chunks",
          "module": "Text.HTML.Chunks",
          "name": "showChunksAll",
          "normalized": "FilePath-\u003eIO String",
          "package": "chunks",
          "partial": "Chunks All",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chunks/docs/Text-HTML-Chunks.html#v:showChunksAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the supplied file for chunks and return a string\n representing the code generated for the data-type declarations only\n of the chunks. This is useful for debugging purposes, particularly\n from within \u003ccode\u003eghci\u003c/code\u003e. E.g.\n\u003c/p\u003e\u003cpre\u003e\n   \u003e showChunksData \"/path/to/templates/template_01.html\" \u003e\u003e= putStrLn\n\u003c/pre\u003e",
          "module": "Text.HTML.Chunks",
          "name": "showChunksData",
          "package": "chunks",
          "signature": "FilePath -\u003e IO String",
          "source": "src/Text-HTML-Chunks.html#showChunksData",
          "type": "function"
        },
        "index": {
          "description": "Parse the supplied file for chunks and return string representing the code generated for the data-type declarations only of the chunks This is useful for debugging purposes particularly from within ghci E.g showChunksData path to templates template html putStrLn",
          "hierarchy": "Text HTML Chunks",
          "module": "Text.HTML.Chunks",
          "name": "showChunksData",
          "normalized": "FilePath-\u003eIO String",
          "package": "chunks",
          "partial": "Chunks Data",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chunks/docs/Text-HTML-Chunks.html#v:showChunksData"
      }
    }
  ]
]