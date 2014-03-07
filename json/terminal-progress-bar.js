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
        "word": "terminal-progress-bar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.ProgressBar",
          "name": "ProgressBar",
          "package": "terminal-progress-bar",
          "source": "src/System-ProgressBar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System ProgressBar",
          "module": "System.ProgressBar",
          "name": "ProgressBar",
          "package": "terminal-progress-bar",
          "partial": "Progress Bar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA label that can be pre- or postfixed to a progress bar.\n\u003c/p\u003e",
          "module": "System.ProgressBar",
          "name": "Label",
          "package": "terminal-progress-bar",
          "source": "src/System-ProgressBar.html#Label",
          "type": "type"
        },
        "index": {
          "description": "label that can be pre or postfixed to progress bar",
          "hierarchy": "System ProgressBar",
          "module": "System.ProgressBar",
          "name": "Label",
          "package": "terminal-progress-bar",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA label which displays the progress as a fraction of the total\n amount of work.\n\u003c/p\u003e\u003cp\u003eEqual width property:\n &#8704; d&#8321; d&#8322; t : &#8469;. d&#8321; &#8804; d&#8322; &#8804; t &#8594; length (exact d&#8321; t) &#8801; length (exact d&#8322; t)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eexact 30 100\n\u003c/code\u003e\u003c/strong\u003e\" 30/100\"\n\u003c/pre\u003e",
          "module": "System.ProgressBar",
          "name": "exact",
          "package": "terminal-progress-bar",
          "signature": "Label",
          "source": "src/System-ProgressBar.html#exact",
          "type": "function"
        },
        "index": {
          "description": "label which displays the progress as fraction of the total amount of work Equal width property length exact length exact exact",
          "hierarchy": "System ProgressBar",
          "module": "System.ProgressBar",
          "name": "exact",
          "package": "terminal-progress-bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:exact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a progress bar\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emkProgressBar (msg \"Working\") percentage 40 30 100\n\u003c/code\u003e\u003c/strong\u003e\"Working [=======\u003e.................]  30%\"\n\u003c/pre\u003e",
          "module": "System.ProgressBar",
          "name": "mkProgressBar",
          "package": "terminal-progress-bar",
          "signature": "Label-\u003e Label-\u003e ℤ-\u003e ℤ-\u003e ℤ-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Renders progress bar mkProgressBar msg Working percentage Working",
          "hierarchy": "System ProgressBar",
          "module": "System.ProgressBar",
          "name": "mkProgressBar",
          "normalized": "Label-\u003eLabel-\u003eℤ-\u003eℤ-\u003eℤ-\u003eString",
          "package": "terminal-progress-bar",
          "partial": "Progress Bar",
          "signature": "Label-\u003eLabel-\u003eℤ-\u003eℤ-\u003eℤ-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:mkProgressBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA label consisting of a static string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emsg \"foo\" 30 100\n\u003c/code\u003e\u003c/strong\u003e\"foo\"\n\u003c/pre\u003e",
          "module": "System.ProgressBar",
          "name": "msg",
          "package": "terminal-progress-bar",
          "signature": "String -\u003e Label",
          "source": "src/System-ProgressBar.html#msg",
          "type": "function"
        },
        "index": {
          "description": "label consisting of static string msg foo foo",
          "hierarchy": "System ProgressBar",
          "module": "System.ProgressBar",
          "name": "msg",
          "normalized": "String-\u003eLabel",
          "package": "terminal-progress-bar",
          "signature": "String-\u003eLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty label.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enoLabel 30 100\n\u003c/code\u003e\u003c/strong\u003e\"\"\n\u003c/pre\u003e",
          "module": "System.ProgressBar",
          "name": "noLabel",
          "package": "terminal-progress-bar",
          "signature": "Label",
          "source": "src/System-ProgressBar.html#noLabel",
          "type": "function"
        },
        "index": {
          "description": "The empty label noLabel",
          "hierarchy": "System ProgressBar",
          "module": "System.ProgressBar",
          "name": "noLabel",
          "package": "terminal-progress-bar",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:noLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA label which displays the progress as a percentage.\n\u003c/p\u003e\u003cp\u003eConstant width property:\n &#8704; d t : &#8469;. d &#8804; t &#8594; length (percentage d t) &#8801; 4\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epercentage 30 100\n\u003c/code\u003e\u003c/strong\u003e\" 30%\"\n\u003c/pre\u003e",
          "module": "System.ProgressBar",
          "name": "percentage",
          "package": "terminal-progress-bar",
          "signature": "Label",
          "source": "src/System-ProgressBar.html#percentage",
          "type": "function"
        },
        "index": {
          "description": "label which displays the progress as percentage Constant width property length percentage percentage",
          "hierarchy": "System ProgressBar",
          "module": "System.ProgressBar",
          "name": "percentage",
          "package": "terminal-progress-bar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:percentage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a progress bar\n\u003c/p\u003e\u003cp\u003eErases the current line! (by outputting '\\r') Does not print a\n newline '\\n'. Subsequent invocations will overwrite the previous\n output.\n\u003c/p\u003e\u003cp\u003eRemember to set the correct buffering mode for stdout:\n\u003c/p\u003e\u003cpre\u003e import System.IO ( hSetBuffering, BufferMode(NoBuffering), stdout )\n hSetBuffering stdout NoBuffering\n\u003c/pre\u003e",
          "module": "System.ProgressBar",
          "name": "progressBar",
          "package": "terminal-progress-bar",
          "signature": "Label-\u003e Label-\u003e ℤ-\u003e ℤ-\u003e ℤ-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Print progress bar Erases the current line by outputting Does not print newline Subsequent invocations will overwrite the previous output Remember to set the correct buffering mode for stdout import System.IO hSetBuffering BufferMode NoBuffering stdout hSetBuffering stdout NoBuffering",
          "hierarchy": "System ProgressBar",
          "module": "System.ProgressBar",
          "name": "progressBar",
          "normalized": "Label-\u003eLabel-\u003eℤ-\u003eℤ-\u003eℤ-\u003eIO()",
          "package": "terminal-progress-bar",
          "partial": "Bar",
          "signature": "Label-\u003eLabel-\u003eℤ-\u003eℤ-\u003eℤ-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:progressBar"
      }
    }
  ]
]