[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#",
      "description": {
        "fct-module": "System.ProgressBar",
        "fct-package": "terminal-progress-bar",
        "fct-signature": "module",
        "fct-source": "src/System-ProgressBar.html",
        "fct-type": "module",
        "title": "ProgressBar"
      },
      "index": {
        "description": "",
        "hierarchy": "System ProgressBar",
        "module": "System.ProgressBar",
        "name": "ProgressBar",
        "normalized": "",
        "package": "terminal-progress-bar",
        "partial": "Progress Bar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eA label that can be pre- or postfixed to a progress bar.\n\u003c/p\u003e",
        "fct-module": "System.ProgressBar",
        "fct-package": "terminal-progress-bar",
        "fct-signature": "type",
        "fct-source": "src/System-ProgressBar.html#Label",
        "fct-type": "type",
        "title": "Label"
      },
      "index": {
        "description": "label that can be pre or postfixed to progress bar",
        "hierarchy": "System ProgressBar",
        "module": "System.ProgressBar",
        "name": "Label",
        "normalized": "",
        "package": "terminal-progress-bar",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:exact",
      "description": {
        "fct-descr": "\u003cp\u003eA label which displays the progress as a fraction of the total\n amount of work.\n\u003c/p\u003e\u003cp\u003eEqual width property:\n &#8704; d&#8321; d&#8322; t : &#8469;. d&#8321; &#8804; d&#8322; &#8804; t &#8594; length (exact d&#8321; t) &#8801; length (exact d&#8322; t)\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eexact 30 100\n\u003c/code\u003e\u003c/strong\u003e\" 30/100\"\n\u003c/pre\u003e",
        "fct-module": "System.ProgressBar",
        "fct-package": "terminal-progress-bar",
        "fct-signature": "Label",
        "fct-source": "src/System-ProgressBar.html#exact",
        "fct-type": "function",
        "title": "exact"
      },
      "index": {
        "description": "label which displays the progress as fraction of the total amount of work Equal width property length exact length exact exact",
        "hierarchy": "System ProgressBar",
        "module": "System.ProgressBar",
        "name": "exact",
        "normalized": "",
        "package": "terminal-progress-bar",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:mkProgressBar",
      "description": {
        "fct-descr": "\u003cp\u003eRenders a progress bar\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emkProgressBar (msg \"Working\") percentage 40 30 100\n\u003c/code\u003e\u003c/strong\u003e\"Working [=======\u003e.................]  30%\"\n\u003c/pre\u003e",
        "fct-module": "System.ProgressBar",
        "fct-package": "terminal-progress-bar",
        "fct-signature": "Label-\u003e Label-\u003e ℤ-\u003e ℤ-\u003e ℤ-\u003e String",
        "fct-type": "function",
        "title": "mkProgressBar"
      },
      "index": {
        "description": "Renders progress bar mkProgressBar msg Working percentage Working",
        "hierarchy": "System ProgressBar",
        "module": "System.ProgressBar",
        "name": "mkProgressBar",
        "normalized": "Label-\u003eLabel-\u003eℤ-\u003eℤ-\u003eℤ-\u003eString",
        "package": "terminal-progress-bar",
        "partial": "Progress Bar",
        "signature": "Label-\u003eLabel-\u003eℤ-\u003eℤ-\u003eℤ-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:msg",
      "description": {
        "fct-descr": "\u003cp\u003eA label consisting of a static string.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emsg \"foo\" 30 100\n\u003c/code\u003e\u003c/strong\u003e\"foo\"\n\u003c/pre\u003e",
        "fct-module": "System.ProgressBar",
        "fct-package": "terminal-progress-bar",
        "fct-signature": "String -\u003e Label",
        "fct-source": "src/System-ProgressBar.html#msg",
        "fct-type": "function",
        "title": "msg"
      },
      "index": {
        "description": "label consisting of static string msg foo foo",
        "hierarchy": "System ProgressBar",
        "module": "System.ProgressBar",
        "name": "msg",
        "normalized": "String-\u003eLabel",
        "package": "terminal-progress-bar",
        "partial": "",
        "signature": "String-\u003eLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:noLabel",
      "description": {
        "fct-descr": "\u003cp\u003eThe empty label.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003enoLabel 30 100\n\u003c/code\u003e\u003c/strong\u003e\"\"\n\u003c/pre\u003e",
        "fct-module": "System.ProgressBar",
        "fct-package": "terminal-progress-bar",
        "fct-signature": "Label",
        "fct-source": "src/System-ProgressBar.html#noLabel",
        "fct-type": "function",
        "title": "noLabel"
      },
      "index": {
        "description": "The empty label noLabel",
        "hierarchy": "System ProgressBar",
        "module": "System.ProgressBar",
        "name": "noLabel",
        "normalized": "",
        "package": "terminal-progress-bar",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:percentage",
      "description": {
        "fct-descr": "\u003cp\u003eA label which displays the progress as a percentage.\n\u003c/p\u003e\u003cp\u003eConstant width property:\n &#8704; d t : &#8469;. d &#8804; t &#8594; length (percentage d t) &#8801; 4\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003epercentage 30 100\n\u003c/code\u003e\u003c/strong\u003e\" 30%\"\n\u003c/pre\u003e",
        "fct-module": "System.ProgressBar",
        "fct-package": "terminal-progress-bar",
        "fct-signature": "Label",
        "fct-source": "src/System-ProgressBar.html#percentage",
        "fct-type": "function",
        "title": "percentage"
      },
      "index": {
        "description": "label which displays the progress as percentage Constant width property length percentage percentage",
        "hierarchy": "System ProgressBar",
        "module": "System.ProgressBar",
        "name": "percentage",
        "normalized": "",
        "package": "terminal-progress-bar",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/terminal-progress-bar/docs/System-ProgressBar.html#v:progressBar",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a progress bar\n\u003c/p\u003e\u003cp\u003eErases the current line! (by outputting '\\r') Does not print a\n newline '\\n'. Subsequent invocations will overwrite the previous\n output.\n\u003c/p\u003e\u003cp\u003eRemember to set the correct buffering mode for stdout:\n\u003c/p\u003e\u003cpre\u003e import System.IO ( hSetBuffering, BufferMode(NoBuffering), stdout )\n hSetBuffering stdout NoBuffering\n\u003c/pre\u003e",
        "fct-module": "System.ProgressBar",
        "fct-package": "terminal-progress-bar",
        "fct-signature": "Label-\u003e Label-\u003e ℤ-\u003e ℤ-\u003e ℤ-\u003e IO ()",
        "fct-type": "function",
        "title": "progressBar"
      },
      "index": {
        "description": "Print progress bar Erases the current line by outputting Does not print newline Subsequent invocations will overwrite the previous output Remember to set the correct buffering mode for stdout import System.IO hSetBuffering BufferMode NoBuffering stdout hSetBuffering stdout NoBuffering",
        "hierarchy": "System ProgressBar",
        "module": "System.ProgressBar",
        "name": "progressBar",
        "normalized": "Label-\u003eLabel-\u003eℤ-\u003eℤ-\u003eℤ-\u003eIO()",
        "package": "terminal-progress-bar",
        "partial": "Bar",
        "signature": "Label-\u003eLabel-\u003eℤ-\u003eℤ-\u003eℤ-\u003eIO()"
      }
    }
  }
]