[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS-Plugins-Base64.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBase64 plugin: \u003ca\u003ehttp://nsis.sourceforge.net/Base64_plug-in\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Development.NSIS.Plugins.Base64",
        "fct-package": "nsis",
        "fct-signature": "module",
        "fct-source": "src/Development-NSIS-Plugins-Base64.html",
        "fct-type": "module",
        "title": "Base64"
      },
      "index": {
        "description": "Base64 plugin http nsis.sourceforge.net Base64 plug-in",
        "hierarchy": "Development NSIS Plugins Base64",
        "module": "Development.NSIS.Plugins.Base64",
        "name": "Base64",
        "normalized": "",
        "package": "nsis",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS-Plugins-Base64.html#v:decrypt",
      "description": {
        "fct-descr": "\u003cp\u003eBase64 decryption. Reverse of \u003ccode\u003e\u003ca\u003eencrypt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS.Plugins.Base64",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Plugins-Base64.html#decrypt",
        "fct-type": "function",
        "title": "decrypt"
      },
      "index": {
        "description": "Base64 decryption Reverse of encrypt",
        "hierarchy": "Development NSIS Plugins Base64",
        "module": "Development.NSIS.Plugins.Base64",
        "name": "decrypt",
        "normalized": "Exp String-\u003eExp String",
        "package": "nsis",
        "partial": "",
        "signature": "Exp String-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS-Plugins-Base64.html#v:encrypt",
      "description": {
        "fct-descr": "\u003cp\u003eBase64 data encryption.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS.Plugins.Base64",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Plugins-Base64.html#encrypt",
        "fct-type": "function",
        "title": "encrypt"
      },
      "index": {
        "description": "Base64 data encryption",
        "hierarchy": "Development NSIS Plugins Base64",
        "module": "Development.NSIS.Plugins.Base64",
        "name": "encrypt",
        "normalized": "Exp String-\u003eExp String",
        "package": "nsis",
        "partial": "",
        "signature": "Exp String-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS-Plugins-Taskbar.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWindows 7 Taskbar Progress plugin: \u003ca\u003ehttp://nsis.sourceforge.net/TaskbarProgress_plug-in\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Development.NSIS.Plugins.Taskbar",
        "fct-package": "nsis",
        "fct-signature": "module",
        "fct-source": "src/Development-NSIS-Plugins-Taskbar.html",
        "fct-type": "module",
        "title": "Taskbar"
      },
      "index": {
        "description": "Windows Taskbar Progress plugin http nsis.sourceforge.net TaskbarProgress plug-in",
        "hierarchy": "Development NSIS Plugins Taskbar",
        "module": "Development.NSIS.Plugins.Taskbar",
        "name": "Taskbar",
        "normalized": "",
        "package": "nsis",
        "partial": "Taskbar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS-Plugins-Taskbar.html#v:taskbar",
      "description": {
        "fct-descr": "\u003cp\u003eEnable Windows 7 taskbar plugin, called anywhere.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS.Plugins.Taskbar",
        "fct-package": "nsis",
        "fct-signature": "Action ()",
        "fct-source": "src/Development-NSIS-Plugins-Taskbar.html#taskbar",
        "fct-type": "function",
        "title": "taskbar"
      },
      "index": {
        "description": "Enable Windows taskbar plugin called anywhere",
        "hierarchy": "Development NSIS Plugins Taskbar",
        "module": "Development.NSIS.Plugins.Taskbar",
        "name": "taskbar",
        "normalized": "Action()",
        "package": "nsis",
        "partial": "",
        "signature": "Action()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNSIS (Nullsoft Scriptable Install System, \u003ca\u003ehttp://nsis.sourceforge.net/\u003c/a\u003e) is a tool that allows programmers\n   to create installers for Windows.\n   This library provides an alternative syntax for NSIS scripts, as an embedded Haskell language, removing much\n   of the hard work in developing an install script. Simple NSIS installers should look mostly the same, complex ones should\n   be significantly more maintainable.\n\u003c/p\u003e\u003cp\u003eAs a simple example of using this library:\n\u003c/p\u003e\u003cpre\u003e\nimport \u003ca\u003eDevelopment.NSIS\u003c/a\u003e\n\nmain = writeFile \"example1.nsi\" $ \u003ccode\u003e\u003ca\u003ensis\u003c/a\u003e\u003c/code\u003e $ do\n     \u003ccode\u003e\u003ca\u003ename\u003c/a\u003e\u003c/code\u003e \"Example1\"                  -- The name of the installer\n     \u003ccode\u003e\u003ca\u003eoutFile\u003c/a\u003e\u003c/code\u003e \"example1.exe\"           -- Where to produce the installer\n     \u003ccode\u003e\u003ca\u003einstallDir\u003c/a\u003e\u003c/code\u003e \"$DESKTOP/Example1\"   -- The default installation directory\n     \u003ccode\u003e\u003ca\u003erequestExecutionLevel\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eUser\u003c/a\u003e\u003c/code\u003e       -- Request application privileges for Windows Vista\n     -- Pages to display\n     \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDirectory\u003c/a\u003e\u003c/code\u003e                   -- Pick where to install\n     \u003ccode\u003e\u003ca\u003epage\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInstFiles\u003c/a\u003e\u003c/code\u003e                   -- Give a progress bar while installing\n     -- Groups fo files to install\n     \u003ccode\u003e\u003ca\u003esection\u003c/a\u003e\u003c/code\u003e \"\" [] $ do\n         \u003ccode\u003e\u003ca\u003esetOutPath\u003c/a\u003e\u003c/code\u003e \"$INSTDIR\"        -- Where to install files in this section\n         \u003ccode\u003e\u003ca\u003efile\u003c/a\u003e\u003c/code\u003e [] \"Example1.hs\"        -- File to put into this section\n\u003c/pre\u003e\u003cp\u003eThe file \u003ccode\u003eexample1.nsi\u003c/code\u003e can now be processed with \u003ccode\u003emakensis\u003c/code\u003e to produce the installer \u003ccode\u003eexample1.exe\u003c/code\u003e.\n   For more examples, see the \u003ccode\u003eExamples\u003c/code\u003e source directory.\n\u003c/p\u003e\u003cp\u003eMuch of the documentation from the Installer section is taken from the NSIS documentation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "module",
        "fct-source": "src/Development-NSIS.html",
        "fct-type": "module",
        "title": "NSIS"
      },
      "index": {
        "description": "NSIS Nullsoft Scriptable Install System http nsis.sourceforge.net is tool that allows programmers to create installers for Windows This library provides an alternative syntax for NSIS scripts as an embedded Haskell language removing much of the hard work in developing an install script Simple NSIS installers should look mostly the same complex ones should be significantly more maintainable As simple example of using this library import Development.NSIS main writeFile example1.nsi nsis do name Example1 The name of the installer outFile example1.exe Where to produce the installer installDir DESKTOP Example1 The default installation directory requestExecutionLevel User Request application privileges for Windows Vista Pages to display page Directory Pick where to install page InstFiles Give progress bar while installing Groups fo files to install section do setOutPath INSTDIR Where to install files in this section file Example1.hs File to put into this section The file example1.nsi can now be processed with makensis to produce the installer example1.exe For more examples see the Examples source directory Much of the documentation from the Installer section is taken from the NSIS documentation",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "NSIS",
        "normalized": "",
        "package": "nsis",
        "partial": "NSIS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eMonad in which installers are defined. A useful command to start with is \u003ccode\u003e\u003ca\u003esection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Sugar.html#Action",
        "fct-type": "data",
        "title": "Action"
      },
      "index": {
        "description": "Monad in which installers are defined useful command to start with is section",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Action",
        "normalized": "",
        "package": "nsis",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:Attrib",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "data",
        "title": "Attrib"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Attrib",
        "normalized": "",
        "package": "nsis",
        "partial": "Attrib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:Compressor",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Type.html#Compressor",
        "fct-type": "data",
        "title": "Compressor"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Compressor",
        "normalized": "",
        "package": "nsis",
        "partial": "Compressor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:Exp",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of expressions - namely an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e producing a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e. There are instances\n   for \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e, and turning on \u003ccode\u003e{-# LANGUAGE OverloadedStrings #-}\u003c/code\u003e is\n   strongly recommended.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e function converts any embedded \u003ccode\u003e$VAR\u003c/code\u003e into a variable lookup, which may refer to one of\n   the builtin NSIS variables (e.g. \u003ccode\u003e$SMPROGRAMS\u003c/code\u003e, \u003ccode\u003e$TEMP\u003c/code\u003e, \u003ccode\u003e$PROGRAMFILES\u003c/code\u003e), or a named variable\n   created with \u003ccode\u003e\u003ca\u003econstant\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emutable\u003c/a\u003e\u003c/code\u003e. The string \u003ccode\u003e$$\u003c/code\u003e is used to escape \u003ccode\u003e$\u003c/code\u003e values.\n   Bracket the variables to put text characters afterwards (e.g. \u003ccode\u003e$(SMPROGRAMS)XXX\u003c/code\u003e). In contrast\n   to standard strings, \u003ccode\u003e/\u003c/code\u003e is treated as \u003ccode\u003e\\\u003c/code\u003e and \u003ccode\u003e//\u003c/code\u003e is treated as \u003ccode\u003e/\u003c/code\u003e. Remember to escape any\n   slashes occuring in URLs.\n\u003c/p\u003e\u003cp\u003eIf the string is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e then any \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e variables used will be automatically shown (see \u003ccode\u003e\u003ca\u003estrShow\u003c/a\u003e\u003c/code\u003e).\n   If the string is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e ty\u003c/code\u003e then it must be of the form \u003ccode\u003e\"$VAR\"\u003c/code\u003e where \u003ccode\u003e$VAR\u003c/code\u003e is a variable of type \u003ccode\u003ety\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e throw errors for all comparisons (use \u003ccode\u003e\u003ca\u003e%==\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e%\u003c=\u003c/a\u003e\u003c/code\u003e etc),\n   but \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e are defined. The \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e (arithmetic) and \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e (string concatenation) instances are both\n   fully implemented. From \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e, only \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emod\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e are implemented, and\n   all as integer arithmetic. No functions from \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eReal\u003c/a\u003e\u003c/code\u003e are implemented.\n\u003c/p\u003e\u003cp\u003eWhen using a single expression multiple times, to ensure it is not evaluated\n   repeatedly, use \u003ccode\u003e\u003ca\u003eshare\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "type",
        "fct-source": "src/Development-NSIS-Sugar.html#Exp",
        "fct-type": "type",
        "title": "Exp"
      },
      "index": {
        "description": "The type of expressions namely an Action producing Value There are instances for Num and IsString and turning on LANGUAGE OverloadedStrings is strongly recommended The fromString function converts any embedded VAR into variable lookup which may refer to one of the builtin NSIS variables e.g SMPROGRAMS TEMP PROGRAMFILES or named variable created with constant or mutable The string is used to escape values Bracket the variables to put text characters afterwards e.g SMPROGRAMS XXX In contrast to standard strings is treated as and is treated as Remember to escape any slashes occuring in URLs If the string is Exp String then any Int variables used will be automatically shown see strShow If the string is Exp ty then it must be of the form VAR where VAR is variable of type ty The Eq and Ord instances for Exp throw errors for all comparisons use etc but min and max are defined The Num arithmetic and Monoid string concatenation instances are both fully implemented From Integral and Fractional only mod and div are implemented and all as integer arithmetic No functions from Enum or Real are implemented When using single expression multiple times to ensure it is not evaluated repeatedly use share",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Exp",
        "normalized": "",
        "package": "nsis",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:FileHandle",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of a file handle, created by \u003ccode\u003e\u003ca\u003efileOpen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Sugar.html#FileHandle",
        "fct-type": "data",
        "title": "FileHandle"
      },
      "index": {
        "description": "The type of file handle created by fileOpen",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "FileHandle",
        "normalized": "",
        "package": "nsis",
        "partial": "File Handle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:FileMode",
      "description": {
        "fct-descr": "\u003cp\u003eMode to use with 'Development.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Type.html#FileMode",
        "fct-type": "data",
        "title": "FileMode"
      },
      "index": {
        "description": "Mode to use with Development",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "FileMode",
        "normalized": "",
        "package": "nsis",
        "partial": "File Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:HKEY",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "data",
        "title": "HKEY"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKEY",
        "normalized": "",
        "package": "nsis",
        "partial": "HKEY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eA code label, used for \u003ccode\u003egoto\u003c/code\u003e programming, see \u003ccode\u003e\u003ca\u003enewLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Type.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "code label used for goto programming see newLabel",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Label",
        "normalized": "",
        "package": "nsis",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:Level",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Type.html#Level",
        "fct-type": "data",
        "title": "Level"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Level",
        "normalized": "",
        "package": "nsis",
        "partial": "Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:MessageBoxType",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "data",
        "title": "MessageBoxType"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MessageBoxType",
        "normalized": "",
        "package": "nsis",
        "partial": "Message Box Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:Page",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Type.html#Page",
        "fct-type": "data",
        "title": "Page"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Page",
        "normalized": "",
        "package": "nsis",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:SectionFlag",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Sugar.html#SectionFlag",
        "fct-type": "data",
        "title": "SectionFlag"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SectionFlag",
        "normalized": "",
        "package": "nsis",
        "partial": "Section Flag",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:SectionId",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Type.html#SectionId",
        "fct-type": "data",
        "title": "SectionId"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SectionId",
        "normalized": "",
        "package": "nsis",
        "partial": "Section Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:ShowWindow",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Type.html#ShowWindow",
        "fct-type": "data",
        "title": "ShowWindow"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "ShowWindow",
        "normalized": "",
        "package": "nsis",
        "partial": "Show Window",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, only used by \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e, which can be produced using \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e.\n   The \u003ccode\u003ety\u003c/code\u003e argument should be one of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Sugar.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "Value only used by Exp which can be produced using return The ty argument should be one of String Int or Bool",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Value",
        "normalized": "",
        "package": "nsis",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#t:Visibility",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "data",
        "fct-source": "src/Development-NSIS-Type.html#Visibility",
        "fct-type": "data",
        "title": "Visibility"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Visibility",
        "normalized": "",
        "package": "nsis",
        "partial": "Visibility",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-37--124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eShort circuiting boolean operators, equivalent to \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e but on \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Bool -\u003e Exp Bool -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Library.html#%25%7C%7C",
        "fct-type": "function",
        "title": "(%||)"
      },
      "index": {
        "description": "Short circuiting boolean operators equivalent to and but on Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(%||) %||",
        "normalized": "Exp Bool-\u003eExp Bool-\u003eExp Bool",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Bool-\u003eExp Bool-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-37--38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eShort circuiting boolean operators, equivalent to \u003ccode\u003e\u003ca\u003e&&\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003e||\u003c/a\u003e\u003c/code\u003e but on \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Bool -\u003e Exp Bool -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Library.html#%25%26%26",
        "fct-type": "function",
        "title": "(%&&)"
      },
      "index": {
        "description": "Short circuiting boolean operators equivalent to and but on Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(%&&) %&&",
        "normalized": "Exp Bool-\u003eExp Bool-\u003eExp Bool",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Bool-\u003eExp Bool-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-37--47--61-",
      "description": {
        "fct-descr": "\u003cp\u003eThe standard equality operators, lifted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp a -\u003e Exp a -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#%25%2F%3D",
        "fct-type": "function",
        "title": "(%/=)"
      },
      "index": {
        "description": "The standard equality operators lifted to Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(%/=) %/=",
        "normalized": "Exp a-\u003eExp a-\u003eExp Bool",
        "package": "nsis",
        "partial": "",
        "signature": "Exp a-\u003eExp a-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-37--60-",
      "description": {
        "fct-descr": "\u003cp\u003eThe standard comparison operators, lifted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Int -\u003e Exp Int -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#%25%3C",
        "fct-type": "function",
        "title": "(%\u003c)"
      },
      "index": {
        "description": "The standard comparison operators lifted to Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(%\u003c) %\u003c",
        "normalized": "Exp Int-\u003eExp Int-\u003eExp Bool",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Int-\u003eExp Int-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-37--60--61-",
      "description": {
        "fct-descr": "\u003cp\u003eThe standard comparison operators, lifted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Int -\u003e Exp Int -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#%25%3C%3D",
        "fct-type": "function",
        "title": "(%\u003c=)"
      },
      "index": {
        "description": "The standard comparison operators lifted to Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(%\u003c=) %\u003c=",
        "normalized": "Exp Int-\u003eExp Int-\u003eExp Bool",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Int-\u003eExp Int-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-37--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eThe standard equality operators, lifted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp a -\u003e Exp a -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#%25%3D%3D",
        "fct-type": "function",
        "title": "(%==)"
      },
      "index": {
        "description": "The standard equality operators lifted to Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(%==) %==",
        "normalized": "Exp a-\u003eExp a-\u003eExp Bool",
        "package": "nsis",
        "partial": "",
        "signature": "Exp a-\u003eExp a-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-37--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe standard comparison operators, lifted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Int -\u003e Exp Int -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#%25%3E",
        "fct-type": "function",
        "title": "(%\u003e)"
      },
      "index": {
        "description": "The standard comparison operators lifted to Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(%\u003e) %\u003e",
        "normalized": "Exp Int-\u003eExp Int-\u003eExp Bool",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Int-\u003eExp Int-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-37--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eThe standard comparison operators, lifted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Int -\u003e Exp Int -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#%25%3E%3D",
        "fct-type": "function",
        "title": "(%\u003e=)"
      },
      "index": {
        "description": "The standard comparison operators lifted to Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(%\u003e=) %\u003e=",
        "normalized": "Exp Int-\u003eExp Int-\u003eExp Bool",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Int-\u003eExp Int-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-38-",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate two strings, for example \u003ccode\u003e\"$FOO\" & \"$BAR\"\u003c/code\u003e is equivalent\n   to \u003ccode\u003e\"$FOO$BAR\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Exp String -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#%26",
        "fct-type": "function",
        "title": "(&)"
      },
      "index": {
        "description": "Concatenate two strings for example FOO BAR is equivalent to FOO BAR",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(&) &",
        "normalized": "Exp String-\u003eExp String-\u003eExp String",
        "package": "nsis",
        "partial": "",
        "signature": "Exp String-\u003eExp String-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-63-",
      "description": {
        "fct-descr": "\u003cp\u003eAn expression orientated version of \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, returns the first component if\n   the first argument is \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e or the second if it is \u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n x \u003ccode\u003e\u003ca\u003e%==\u003c/a\u003e\u003c/code\u003e 12 \u003ccode\u003e\u003ca\u003e?\u003c/a\u003e\u003c/code\u003e (x, x \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e 5)\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Bool -\u003e (Exp t, Exp t) -\u003e Exp t",
        "fct-source": "src/Development-NSIS-Sugar.html#%3F",
        "fct-type": "function",
        "title": "(?)"
      },
      "index": {
        "description": "An expression orientated version of iff returns the first component if the first argument is true or the second if it is false",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(?) ?",
        "normalized": "Exp Bool-\u003e(Exp a,Exp a)-\u003eExp a",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Bool-\u003e(Exp t,Exp t)-\u003eExp t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:-64--61-",
      "description": {
        "fct-descr": "\u003cp\u003eAssign a value to a mutable variable. The variable must have been originally created with\n   \u003ccode\u003e\u003ca\u003emutable\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003emutable_\u003c/a\u003e\u003c/code\u003e, or there will be an error when generating the install file.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp t -\u003e Exp t -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#%40%3D",
        "fct-type": "function",
        "title": "(@=)"
      },
      "index": {
        "description": "Assign value to mutable variable The variable must have been originally created with mutable or mutable or there will be an error when generating the install file",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "(@=) @=",
        "normalized": "Exp a-\u003eExp a-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp t-\u003eExp t-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Admin",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Admin",
        "fct-source": "src/Development-NSIS-Type.html#Level",
        "fct-type": "function",
        "title": "Admin"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Admin",
        "normalized": "",
        "package": "nsis",
        "partial": "Admin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:BZIP2",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "BZIP2",
        "fct-source": "src/Development-NSIS-Type.html#Compressor",
        "fct-type": "function",
        "title": "BZIP2"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "BZIP2",
        "normalized": "",
        "package": "nsis",
        "partial": "BZIP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Components",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Components",
        "fct-source": "src/Development-NSIS-Type.html#Page",
        "fct-type": "function",
        "title": "Components"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Components",
        "normalized": "",
        "package": "nsis",
        "partial": "Components",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Confirm",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Confirm",
        "fct-source": "src/Development-NSIS-Type.html#Page",
        "fct-type": "function",
        "title": "Confirm"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Confirm",
        "normalized": "",
        "package": "nsis",
        "partial": "Confirm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Description",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Description (Exp String)",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Description"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Description",
        "normalized": "",
        "package": "nsis",
        "partial": "Description",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Directory",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Directory",
        "fct-source": "src/Development-NSIS-Type.html#Page",
        "fct-type": "function",
        "title": "Directory"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Directory",
        "normalized": "",
        "package": "nsis",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Expanded",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Expanded",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Expanded"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Expanded",
        "normalized": "",
        "package": "nsis",
        "partial": "Expanded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:FilesOnly",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "FilesOnly",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "FilesOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "FilesOnly",
        "normalized": "",
        "package": "nsis",
        "partial": "Files Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Final",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Final",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Final"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Final",
        "normalized": "",
        "package": "nsis",
        "partial": "Final",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKCC",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKCC",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKCC"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKCC",
        "normalized": "",
        "package": "nsis",
        "partial": "HKCC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKCR",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKCR",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKCR"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKCR",
        "normalized": "",
        "package": "nsis",
        "partial": "HKCR",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKCU",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKCU",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKCU"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKCU",
        "normalized": "",
        "package": "nsis",
        "partial": "HKCU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKDD",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKDD",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKDD"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKDD",
        "normalized": "",
        "package": "nsis",
        "partial": "HKDD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKEY_CLASSES_ROOT",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY_CLASSES_ROOT",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKEY_CLASSES_ROOT"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKEY_CLASSES_ROOT",
        "normalized": "",
        "package": "nsis",
        "partial": "HKEY CLASSES ROOT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKEY_CURRENT_CONFIG",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY_CURRENT_CONFIG",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKEY_CURRENT_CONFIG"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKEY_CURRENT_CONFIG",
        "normalized": "",
        "package": "nsis",
        "partial": "HKEY CURRENT CONFIG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKEY_CURRENT_USER",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY_CURRENT_USER",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKEY_CURRENT_USER"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKEY_CURRENT_USER",
        "normalized": "",
        "package": "nsis",
        "partial": "HKEY CURRENT USER",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKEY_DYN_DATA",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY_DYN_DATA",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKEY_DYN_DATA"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKEY_DYN_DATA",
        "normalized": "",
        "package": "nsis",
        "partial": "HKEY DYN DATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKEY_LOCAL_MACHINE",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY_LOCAL_MACHINE",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKEY_LOCAL_MACHINE"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKEY_LOCAL_MACHINE",
        "normalized": "",
        "package": "nsis",
        "partial": "HKEY LOCAL MACHINE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKEY_PERFORMANCE_DATA",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY_PERFORMANCE_DATA",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKEY_PERFORMANCE_DATA"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKEY_PERFORMANCE_DATA",
        "normalized": "",
        "package": "nsis",
        "partial": "HKEY PERFORMANCE DATA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKEY_USERS",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY_USERS",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKEY_USERS"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKEY_USERS",
        "normalized": "",
        "package": "nsis",
        "partial": "HKEY USERS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKLM",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKLM",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKLM"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKLM",
        "normalized": "",
        "package": "nsis",
        "partial": "HKLM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKPD",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKPD",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKPD"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKPD",
        "normalized": "",
        "package": "nsis",
        "partial": "HKPD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:HKU",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKU",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "HKU"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "HKU",
        "normalized": "",
        "package": "nsis",
        "partial": "HKU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Hide",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Hide",
        "fct-source": "src/Development-NSIS-Type.html#Visibility",
        "fct-type": "function",
        "title": "Hide"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Hide",
        "normalized": "",
        "package": "nsis",
        "partial": "Hide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Highest",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Highest",
        "fct-source": "src/Development-NSIS-Type.html#Level",
        "fct-type": "function",
        "title": "Highest"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Highest",
        "normalized": "",
        "package": "nsis",
        "partial": "Highest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:IconFile",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "IconFile (Exp String)",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "IconFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "IconFile",
        "normalized": "",
        "package": "nsis",
        "partial": "Icon File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:IconIndex",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "IconIndex (Exp Int)",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "IconIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "IconIndex",
        "normalized": "",
        "package": "nsis",
        "partial": "Icon Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Id",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Id SectionId",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Id",
        "normalized": "",
        "package": "nsis",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:InstFiles",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "InstFiles",
        "fct-source": "src/Development-NSIS-Type.html#Page",
        "fct-type": "function",
        "title": "InstFiles"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "InstFiles",
        "normalized": "",
        "package": "nsis",
        "partial": "Inst Files",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:KeyboardShortcut",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "KeyboardShortcut String",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "KeyboardShortcut"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "KeyboardShortcut",
        "normalized": "",
        "package": "nsis",
        "partial": "Keyboard Shortcut",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:LZMA",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "LZMA",
        "fct-source": "src/Development-NSIS-Type.html#Compressor",
        "fct-type": "function",
        "title": "LZMA"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "LZMA",
        "normalized": "",
        "package": "nsis",
        "partial": "LZMA",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:License",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "License FilePath",
        "fct-source": "src/Development-NSIS-Type.html#Page",
        "fct-type": "function",
        "title": "License"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "License",
        "normalized": "",
        "package": "nsis",
        "partial": "License",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_ABORTRETRYIGNORE",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with abort, retry, ignore buttons\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_ABORTRETRYIGNORE",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_ABORTRETRYIGNORE"
      },
      "index": {
        "description": "Display with abort retry ignore buttons",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_ABORTRETRYIGNORE",
        "normalized": "",
        "package": "nsis",
        "partial": "MB ABORTRETRYIGNORE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_DEFBUTTON1",
      "description": {
        "fct-descr": "\u003cp\u003eButton 1 is default\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_DEFBUTTON1",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_DEFBUTTON1"
      },
      "index": {
        "description": "Button is default",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_DEFBUTTON1",
        "normalized": "",
        "package": "nsis",
        "partial": "MB DEFBUTTON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_DEFBUTTON2",
      "description": {
        "fct-descr": "\u003cp\u003eButton 2 is default\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_DEFBUTTON2",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_DEFBUTTON2"
      },
      "index": {
        "description": "Button is default",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_DEFBUTTON2",
        "normalized": "",
        "package": "nsis",
        "partial": "MB DEFBUTTON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_DEFBUTTON3",
      "description": {
        "fct-descr": "\u003cp\u003eButton 3 is default\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_DEFBUTTON3",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_DEFBUTTON3"
      },
      "index": {
        "description": "Button is default",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_DEFBUTTON3",
        "normalized": "",
        "package": "nsis",
        "partial": "MB DEFBUTTON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_DEFBUTTON4",
      "description": {
        "fct-descr": "\u003cp\u003eButton 4 is default\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_DEFBUTTON4",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_DEFBUTTON4"
      },
      "index": {
        "description": "Button is default",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_DEFBUTTON4",
        "normalized": "",
        "package": "nsis",
        "partial": "MB DEFBUTTON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_ICONEXCLAMATION",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with exclamation icon\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_ICONEXCLAMATION",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_ICONEXCLAMATION"
      },
      "index": {
        "description": "Display with exclamation icon",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_ICONEXCLAMATION",
        "normalized": "",
        "package": "nsis",
        "partial": "MB ICONEXCLAMATION",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_ICONINFORMATION",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with information icon\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_ICONINFORMATION",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_ICONINFORMATION"
      },
      "index": {
        "description": "Display with information icon",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_ICONINFORMATION",
        "normalized": "",
        "package": "nsis",
        "partial": "MB ICONINFORMATION",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_ICONQUESTION",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with question mark icon\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_ICONQUESTION",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_ICONQUESTION"
      },
      "index": {
        "description": "Display with question mark icon",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_ICONQUESTION",
        "normalized": "",
        "package": "nsis",
        "partial": "MB ICONQUESTION",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_ICONSTOP",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with stop icon\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_ICONSTOP",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_ICONSTOP"
      },
      "index": {
        "description": "Display with stop icon",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_ICONSTOP",
        "normalized": "",
        "package": "nsis",
        "partial": "MB ICONSTOP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_OK",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with an OK button\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_OK",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_OK"
      },
      "index": {
        "description": "Display with an OK button",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_OK",
        "normalized": "",
        "package": "nsis",
        "partial": "MB OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_OKCANCEL",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with an OK and a cancel button\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_OKCANCEL",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_OKCANCEL"
      },
      "index": {
        "description": "Display with an OK and cancel button",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_OKCANCEL",
        "normalized": "",
        "package": "nsis",
        "partial": "MB OKCANCEL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_RETRYCANCEL",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with retry and cancel buttons\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_RETRYCANCEL",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_RETRYCANCEL"
      },
      "index": {
        "description": "Display with retry and cancel buttons",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_RETRYCANCEL",
        "normalized": "",
        "package": "nsis",
        "partial": "MB RETRYCANCEL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_RIGHT",
      "description": {
        "fct-descr": "\u003cp\u003eRight align text\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_RIGHT",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_RIGHT"
      },
      "index": {
        "description": "Right align text",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_RIGHT",
        "normalized": "",
        "package": "nsis",
        "partial": "MB RIGHT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_RTLREADING",
      "description": {
        "fct-descr": "\u003cp\u003eRTL reading order\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_RTLREADING",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_RTLREADING"
      },
      "index": {
        "description": "RTL reading order",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_RTLREADING",
        "normalized": "",
        "package": "nsis",
        "partial": "MB RTLREADING",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_SETFOREGROUND",
      "description": {
        "fct-descr": "\u003cp\u003eSet foreground\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_SETFOREGROUND",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_SETFOREGROUND"
      },
      "index": {
        "description": "Set foreground",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_SETFOREGROUND",
        "normalized": "",
        "package": "nsis",
        "partial": "MB SETFOREGROUND",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_TOPMOST",
      "description": {
        "fct-descr": "\u003cp\u003eMake messagebox topmost\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_TOPMOST",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_TOPMOST"
      },
      "index": {
        "description": "Make messagebox topmost",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_TOPMOST",
        "normalized": "",
        "package": "nsis",
        "partial": "MB TOPMOST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_USERICON",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with installer's icon\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_USERICON",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_USERICON"
      },
      "index": {
        "description": "Display with installer icon",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_USERICON",
        "normalized": "",
        "package": "nsis",
        "partial": "MB USERICON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_YESNO",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with yes and no buttons\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_YESNO",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_YESNO"
      },
      "index": {
        "description": "Display with yes and no buttons",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_YESNO",
        "normalized": "",
        "package": "nsis",
        "partial": "MB YESNO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:MB_YESNOCANCEL",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay with yes, no, cancel buttons\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "MB_YESNOCANCEL",
        "fct-source": "src/Development-NSIS-Type.html#MessageBoxType",
        "fct-type": "function",
        "title": "MB_YESNOCANCEL"
      },
      "index": {
        "description": "Display with yes no cancel buttons",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "MB_YESNOCANCEL",
        "normalized": "",
        "package": "nsis",
        "partial": "MB YESNOCANCEL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:ModeAppend",
      "description": {
        "fct-descr": "\u003cp\u003eOpened for both read and write, contents preserved.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "ModeAppend",
        "fct-source": "src/Development-NSIS-Type.html#FileMode",
        "fct-type": "function",
        "title": "ModeAppend"
      },
      "index": {
        "description": "Opened for both read and write contents preserved",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "ModeAppend",
        "normalized": "",
        "package": "nsis",
        "partial": "Mode Append",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:ModeRead",
      "description": {
        "fct-descr": "\u003cp\u003eRead a file.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "ModeRead",
        "fct-source": "src/Development-NSIS-Type.html#FileMode",
        "fct-type": "function",
        "title": "ModeRead"
      },
      "index": {
        "description": "Read file",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "ModeRead",
        "normalized": "",
        "package": "nsis",
        "partial": "Mode Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:ModeWrite",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "ModeWrite",
        "fct-source": "src/Development-NSIS-Type.html#FileMode",
        "fct-type": "function",
        "title": "ModeWrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "ModeWrite",
        "normalized": "",
        "package": "nsis",
        "partial": "Mode Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:NeverShow",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "NeverShow",
        "fct-source": "src/Development-NSIS-Type.html#Visibility",
        "fct-type": "function",
        "title": "NeverShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "NeverShow",
        "normalized": "",
        "package": "nsis",
        "partial": "Never Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:NonFatal",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "NonFatal",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "NonFatal"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "NonFatal",
        "normalized": "",
        "package": "nsis",
        "partial": "Non Fatal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:None",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "None",
        "fct-source": "src/Development-NSIS-Type.html#Level",
        "fct-type": "function",
        "title": "None"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "None",
        "normalized": "",
        "package": "nsis",
        "partial": "None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Parameters",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Parameters (Exp String)",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Parameters"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Parameters",
        "normalized": "",
        "package": "nsis",
        "partial": "Parameters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:RebootOK",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "RebootOK",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "RebootOK"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "RebootOK",
        "normalized": "",
        "package": "nsis",
        "partial": "Reboot OK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Recursive",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Recursive",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Recursive"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Recursive",
        "normalized": "",
        "package": "nsis",
        "partial": "Recursive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Required",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Required",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Required"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Required",
        "normalized": "",
        "package": "nsis",
        "partial": "Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SF_Bold",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SF_Bold",
        "fct-source": "src/Development-NSIS-Sugar.html#SectionFlag",
        "fct-type": "function",
        "title": "SF_Bold"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SF_Bold",
        "normalized": "",
        "package": "nsis",
        "partial": "SF Bold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SF_Expand",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SF_Expand",
        "fct-source": "src/Development-NSIS-Sugar.html#SectionFlag",
        "fct-type": "function",
        "title": "SF_Expand"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SF_Expand",
        "normalized": "",
        "package": "nsis",
        "partial": "SF Expand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SF_PartiallySelected",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SF_PartiallySelected",
        "fct-source": "src/Development-NSIS-Sugar.html#SectionFlag",
        "fct-type": "function",
        "title": "SF_PartiallySelected"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SF_PartiallySelected",
        "normalized": "",
        "package": "nsis",
        "partial": "SF Partially Selected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SF_ReadOnly",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SF_ReadOnly",
        "fct-source": "src/Development-NSIS-Sugar.html#SectionFlag",
        "fct-type": "function",
        "title": "SF_ReadOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SF_ReadOnly",
        "normalized": "",
        "package": "nsis",
        "partial": "SF Read Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SF_SectionGroup",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SF_SectionGroup",
        "fct-source": "src/Development-NSIS-Sugar.html#SectionFlag",
        "fct-type": "function",
        "title": "SF_SectionGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SF_SectionGroup",
        "normalized": "",
        "package": "nsis",
        "partial": "SF Section Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SF_SectionGroupEnd",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SF_SectionGroupEnd",
        "fct-source": "src/Development-NSIS-Sugar.html#SectionFlag",
        "fct-type": "function",
        "title": "SF_SectionGroupEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SF_SectionGroupEnd",
        "normalized": "",
        "package": "nsis",
        "partial": "SF Section Group End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SF_Selected",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SF_Selected",
        "fct-source": "src/Development-NSIS-Sugar.html#SectionFlag",
        "fct-type": "function",
        "title": "SF_Selected"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SF_Selected",
        "normalized": "",
        "package": "nsis",
        "partial": "SF Selected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SHCTX",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SHCTX",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "SHCTX"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SHCTX",
        "normalized": "",
        "package": "nsis",
        "partial": "SHCTX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SHELL_CONTEXT",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SHELL_CONTEXT",
        "fct-source": "src/Development-NSIS-Type.html#HKEY",
        "fct-type": "function",
        "title": "SHELL_CONTEXT"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SHELL_CONTEXT",
        "normalized": "",
        "package": "nsis",
        "partial": "SHELL CONTEXT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SW_HIDE",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SW_HIDE",
        "fct-source": "src/Development-NSIS-Type.html#ShowWindow",
        "fct-type": "function",
        "title": "SW_HIDE"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SW_HIDE",
        "normalized": "",
        "package": "nsis",
        "partial": "SW HIDE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SW_SHOWDEFAULT",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SW_SHOWDEFAULT",
        "fct-source": "src/Development-NSIS-Type.html#ShowWindow",
        "fct-type": "function",
        "title": "SW_SHOWDEFAULT"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SW_SHOWDEFAULT",
        "normalized": "",
        "package": "nsis",
        "partial": "SW SHOWDEFAULT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SW_SHOWMAXIMIZED",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SW_SHOWMAXIMIZED",
        "fct-source": "src/Development-NSIS-Type.html#ShowWindow",
        "fct-type": "function",
        "title": "SW_SHOWMAXIMIZED"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SW_SHOWMAXIMIZED",
        "normalized": "",
        "package": "nsis",
        "partial": "SW SHOWMAXIMIZED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SW_SHOWMINIMIZED",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SW_SHOWMINIMIZED",
        "fct-source": "src/Development-NSIS-Type.html#ShowWindow",
        "fct-type": "function",
        "title": "SW_SHOWMINIMIZED"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SW_SHOWMINIMIZED",
        "normalized": "",
        "package": "nsis",
        "partial": "SW SHOWMINIMIZED",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:SW_SHOWNORMAL",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SW_SHOWNORMAL",
        "fct-source": "src/Development-NSIS-Type.html#ShowWindow",
        "fct-type": "function",
        "title": "SW_SHOWNORMAL"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "SW_SHOWNORMAL",
        "normalized": "",
        "package": "nsis",
        "partial": "SW SHOWNORMAL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Show",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Show",
        "fct-source": "src/Development-NSIS-Type.html#Visibility",
        "fct-type": "function",
        "title": "Show"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Show",
        "normalized": "",
        "package": "nsis",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Silent",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Silent",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Silent"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Silent",
        "normalized": "",
        "package": "nsis",
        "partial": "Silent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Solid",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Solid",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Solid"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Solid",
        "normalized": "",
        "package": "nsis",
        "partial": "Solid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:StartOptions",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "StartOptions String",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "StartOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "StartOptions",
        "normalized": "",
        "package": "nsis",
        "partial": "Start Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Target",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Target (Exp String)",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Target"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Target",
        "normalized": "",
        "package": "nsis",
        "partial": "Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:Unselected",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Unselected",
        "fct-source": "src/Development-NSIS-Sugar.html#Attrib",
        "fct-type": "function",
        "title": "Unselected"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "Unselected",
        "normalized": "",
        "package": "nsis",
        "partial": "Unselected",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:User",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "User",
        "fct-source": "src/Development-NSIS-Type.html#Level",
        "fct-type": "function",
        "title": "User"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "User",
        "normalized": "",
        "package": "nsis",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:ZLIB",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "ZLIB",
        "fct-source": "src/Development-NSIS-Type.html#Compressor",
        "fct-type": "function",
        "title": "ZLIB"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "ZLIB",
        "normalized": "",
        "package": "nsis",
        "partial": "ZLIB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:addPluginDir",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a plugin directory\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#addPluginDir",
        "fct-type": "function",
        "title": "addPluginDir"
      },
      "index": {
        "description": "Add plugin directory",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "addPluginDir",
        "normalized": "Exp String-\u003eAction()",
        "package": "nsis",
        "partial": "Plugin Dir",
        "signature": "Exp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:alert",
      "description": {
        "fct-descr": "\u003cp\u003eShow an alert, equivalent to \u003ccode\u003emessageBox [MB_ICONEXCLAMATION]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#alert",
        "fct-type": "function",
        "title": "alert"
      },
      "index": {
        "description": "Show an alert equivalent to messageBox MB ICONEXCLAMATION",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "alert",
        "normalized": "Exp String-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:allowRootDirInstall",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Bool -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#allowRootDirInstall",
        "fct-type": "function",
        "title": "allowRootDirInstall"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "allowRootDirInstall",
        "normalized": "Bool-\u003eAction()",
        "package": "nsis",
        "partial": "Root Dir Install",
        "signature": "Bool-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:alwaysNonFatal",
      "description": {
        "fct-descr": "\u003cp\u003eSet all \u003ccode\u003e\u003ca\u003efile\u003c/a\u003e\u003c/code\u003e actions to automatically take \u003ccode\u003e\u003ca\u003eNonFatal\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#alwaysNonFatal",
        "fct-type": "function",
        "title": "alwaysNonFatal"
      },
      "index": {
        "description": "Set all file actions to automatically take NonFatal",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "alwaysNonFatal",
        "normalized": "Action()-\u003eAction()",
        "package": "nsis",
        "partial": "Non Fatal",
        "signature": "Action()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:bool",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Bool -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#bool",
        "fct-type": "function",
        "title": "bool"
      },
      "index": {
        "description": "Lift Bool into an Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "bool",
        "normalized": "Bool-\u003eExp Bool",
        "package": "nsis",
        "partial": "",
        "signature": "Bool-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:caption",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#caption",
        "fct-type": "function",
        "title": "caption"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "caption",
        "normalized": "Exp String-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:constant",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a constant with a name, ensuring the expression is shared.\n   After defining the expression, you can refer to it with \u003ccode\u003e$NAME\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n   To introduce a new scope, see \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003econstant\u003c/a\u003e\u003c/code\u003e \"HELLO\" \"Hello World\"\n \u003ccode\u003e\u003ca\u003ealert\u003c/a\u003e\u003c/code\u003e \"$HELLO!\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "String -\u003e Exp t -\u003e Action (Exp t)",
        "fct-source": "src/Development-NSIS-Sugar.html#constant",
        "fct-type": "function",
        "title": "constant"
      },
      "index": {
        "description": "Create constant with name ensuring the expression is shared After defining the expression you can refer to it with NAME in String To introduce new scope see scope constant HELLO Hello World alert HELLO",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "constant",
        "normalized": "String-\u003eExp a-\u003eAction(Exp a)",
        "package": "nsis",
        "partial": "",
        "signature": "String-\u003eExp t-\u003eAction(Exp t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:constantInt",
      "description": {
        "fct-descr": "\u003cp\u003eVersions of \u003ccode\u003e\u003ca\u003emutable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econstant\u003c/a\u003e\u003c/code\u003e restricted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, used to avoid\n   ambiguous type errors.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "String -\u003e Exp Int -\u003e Action (Exp Int)",
        "fct-source": "src/Development-NSIS-Sugar.html#constantInt",
        "fct-type": "function",
        "title": "constantInt"
      },
      "index": {
        "description": "Versions of mutable and constant restricted to Exp Int used to avoid ambiguous type errors",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "constantInt",
        "normalized": "String-\u003eExp Int-\u003eAction(Exp Int)",
        "package": "nsis",
        "partial": "Int",
        "signature": "String-\u003eExp Int-\u003eAction(Exp Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:constantInt_",
      "description": {
        "fct-descr": "\u003cp\u003eVersions of \u003ccode\u003e\u003ca\u003emutable_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econstant_\u003c/a\u003e\u003c/code\u003e restricted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, used to avoid\n   ambiguous type errors.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Int -\u003e Action (Exp Int)",
        "fct-source": "src/Development-NSIS-Sugar.html#constantInt_",
        "fct-type": "function",
        "title": "constantInt_"
      },
      "index": {
        "description": "Versions of mutable and constant restricted to Exp Int used to avoid ambiguous type errors",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "constantInt_",
        "normalized": "Exp Int-\u003eAction(Exp Int)",
        "package": "nsis",
        "partial": "Int",
        "signature": "Exp Int-\u003eAction(Exp Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:constantStr",
      "description": {
        "fct-descr": "\u003cp\u003eVersions of \u003ccode\u003e\u003ca\u003emutable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econstant\u003c/a\u003e\u003c/code\u003e restricted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, used to avoid\n   ambiguous type errors.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "String -\u003e Exp String -\u003e Action (Exp String)",
        "fct-source": "src/Development-NSIS-Sugar.html#constantStr",
        "fct-type": "function",
        "title": "constantStr"
      },
      "index": {
        "description": "Versions of mutable and constant restricted to Exp String used to avoid ambiguous type errors",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "constantStr",
        "normalized": "String-\u003eExp String-\u003eAction(Exp String)",
        "package": "nsis",
        "partial": "Str",
        "signature": "String-\u003eExp String-\u003eAction(Exp String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:constantStr_",
      "description": {
        "fct-descr": "\u003cp\u003eVersions of \u003ccode\u003e\u003ca\u003emutable_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econstant_\u003c/a\u003e\u003c/code\u003e restricted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, used to avoid\n   ambiguous type errors.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Action (Exp String)",
        "fct-source": "src/Development-NSIS-Sugar.html#constantStr_",
        "fct-type": "function",
        "title": "constantStr_"
      },
      "index": {
        "description": "Versions of mutable and constant restricted to Exp String used to avoid ambiguous type errors",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "constantStr_",
        "normalized": "Exp String-\u003eAction(Exp String)",
        "package": "nsis",
        "partial": "Str",
        "signature": "Exp String-\u003eAction(Exp String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:constant_",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a constant with no name, ensuring the expression is shared.\n   Equivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshare\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp t -\u003e Action (Exp t)",
        "fct-source": "src/Development-NSIS-Sugar.html#constant_",
        "fct-type": "function",
        "title": "constant_"
      },
      "index": {
        "description": "Create constant with no name ensuring the expression is shared Equivalent to share return",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "constant_",
        "normalized": "Exp a-\u003eAction(Exp a)",
        "package": "nsis",
        "partial": "",
        "signature": "Exp t-\u003eAction(Exp t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:copyFiles",
      "description": {
        "fct-descr": "\u003cp\u003eBoth file paths are on the installing system. Do not use relative paths.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "[Attrib] -\u003e Exp FilePath -\u003e Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#copyFiles",
        "fct-type": "function",
        "title": "copyFiles"
      },
      "index": {
        "description": "Both file paths are on the installing system Do not use relative paths",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "copyFiles",
        "normalized": "[Attrib]-\u003eExp FilePath-\u003eExp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "Files",
        "signature": "[Attrib]-\u003eExp FilePath-\u003eExp FilePath-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:createDirectory",
      "description": {
        "fct-descr": "\u003cp\u003eCreates (recursively if necessary) the specified directory. Errors can be caught\n   using \u003ccode\u003e\u003ca\u003eonError\u003c/a\u003e\u003c/code\u003e. You should always specify an absolute path.\n\u003c/p\u003e\u003cpre\u003e createDirectory \"$INSTDIR/some/directory\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#createDirectory",
        "fct-type": "function",
        "title": "createDirectory"
      },
      "index": {
        "description": "Creates recursively if necessary the specified directory Errors can be caught using onError You should always specify an absolute path createDirectory INSTDIR some directory",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "createDirectory",
        "normalized": "Exp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "Directory",
        "signature": "Exp FilePath-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:createShortcut",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a shortcut file that links to a \u003ccode\u003eTraget\u003c/code\u003e file, with optional \u003ccode\u003e\u003ca\u003eParameters\u003c/a\u003e\u003c/code\u003e. The icon used for the shortcut\n   is \u003ccode\u003e\u003ca\u003eIconFile\u003c/a\u003e\u003c/code\u003e,\u003ccode\u003e\u003ca\u003eIconIndex\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eStartOptions\u003c/a\u003e\u003c/code\u003e should be one of: SW_SHOWNORMAL, SW_SHOWMAXIMIZED, SW_SHOWMINIMIZED.\n   \u003ccode\u003e\u003ca\u003eKeyboardShortcut\u003c/a\u003e\u003c/code\u003e should be in the form of 'flag|c' where flag can be a combination (using |) of: ALT, CONTROL, EXT, or SHIFT.\n   c is the character to use (a-z, A-Z, 0-9, F1-F24, etc). Note that no spaces are allowed in this string. A good example is\n   \"ALT|CONTROL|F8\". \u003ccode\u003e$OUTDIR\u003c/code\u003e is used for the working directory. You can change it by using \u003ccode\u003e\u003ca\u003esetOutPath\u003c/a\u003e\u003c/code\u003e before creating\n   the Shortcut. \u003ccode\u003e\u003ca\u003eDescription\u003c/a\u003e\u003c/code\u003e should be the description of the shortcut, or comment as it is called under XP.\n   The error flag is set if the shortcut cannot be created (i.e. either of the paths (link or target) does not exist, or some other error).\n\u003c/p\u003e\u003cpre\u003e createDirectory \"$SMPROGRAMS/My Company\"\n createShortcut \"$SMPROGRAMS/My Company/My Program.lnk\"\n    [Target \"$INSTDIR/My Program.exe\"\n    ,Parameter \"some command line parameters\"\n    ,IconFile \"$INSTDIR/My Program.exe\", IconIndex 2\n    ,StartOptions \"SW_SHOWNORMAL\"\n    ,KeyboardShortcut \"ALT|CONTROL|SHIFT|F5\"\n    ,Description \"a description\"]\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e [Attrib] -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#createShortcut",
        "fct-type": "function",
        "title": "createShortcut"
      },
      "index": {
        "description": "Creates shortcut file that links to Traget file with optional Parameters The icon used for the shortcut is IconFile IconIndex StartOptions should be one of SW SHOWNORMAL SW SHOWMAXIMIZED SW SHOWMINIMIZED KeyboardShortcut should be in the form of flag where flag can be combination using of ALT CONTROL EXT or SHIFT is the character to use a-z A-Z F1-F24 etc Note that no spaces are allowed in this string good example is ALT CONTROL F8 OUTDIR is used for the working directory You can change it by using setOutPath before creating the Shortcut Description should be the description of the shortcut or comment as it is called under XP The error flag is set if the shortcut cannot be created i.e either of the paths link or target does not exist or some other error createDirectory SMPROGRAMS My Company createShortcut SMPROGRAMS My Company My Program.lnk Target INSTDIR My Program.exe Parameter some command line parameters IconFile INSTDIR My Program.exe IconIndex StartOptions SW SHOWNORMAL KeyboardShortcut ALT CONTROL SHIFT F5 Description description",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "createShortcut",
        "normalized": "Exp FilePath-\u003e[Attrib]-\u003eAction()",
        "package": "nsis",
        "partial": "Shortcut",
        "signature": "Exp FilePath-\u003e[Attrib]-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete file (which can be a file or wildcard, but should be specified with a full path) from the target system.\n   If \u003ccode\u003e\u003ca\u003eRebootOK\u003c/a\u003e\u003c/code\u003e is specified and the file cannot be deleted then the file is deleted when the system reboots --\n   if the file will be deleted on a reboot, the reboot flag will be set. The error flag is set if files are found\n   and cannot be deleted. The error flag is not set from trying to delete a file that does not exist.\n\u003c/p\u003e\u003cpre\u003e delete [] \"$INSTDIR/somefile.dat\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "[Attrib] -\u003e Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete file which can be file or wildcard but should be specified with full path from the target system If RebootOK is specified and the file cannot be deleted then the file is deleted when the system reboots if the file will be deleted on reboot the reboot flag will be set The error flag is set if files are found and cannot be deleted The error flag is not set from trying to delete file that does not exist delete INSTDIR somefile.dat",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "delete",
        "normalized": "[Attrib]-\u003eExp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "[Attrib]-\u003eExp FilePath-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:deleteRegKey",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY -\u003e Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#deleteRegKey",
        "fct-type": "function",
        "title": "deleteRegKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "deleteRegKey",
        "normalized": "HKEY-\u003eExp String-\u003eAction()",
        "package": "nsis",
        "partial": "Reg Key",
        "signature": "HKEY-\u003eExp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:detailPrint",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#detailPrint",
        "fct-type": "function",
        "title": "detailPrint"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "detailPrint",
        "normalized": "Exp String-\u003eAction()",
        "package": "nsis",
        "partial": "Print",
        "signature": "Exp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:envVar",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#envVar",
        "fct-type": "function",
        "title": "envVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "envVar",
        "normalized": "Exp String-\u003eExp String",
        "package": "nsis",
        "partial": "Var",
        "signature": "Exp String-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:event",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a function, useful for registering actions\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "String -\u003e Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#event",
        "fct-type": "function",
        "title": "event"
      },
      "index": {
        "description": "Create function useful for registering actions",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "event",
        "normalized": "String-\u003eAction()-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "String-\u003eAction()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:exec",
      "description": {
        "fct-descr": "\u003cp\u003eExecute the specified program and continue immediately. Note that the file specified\n   must exist on the target system, not the compiling system. \u003ccode\u003e$OUTDIR\u003c/code\u003e is used for the working\n   directory. Errors can be caught using \u003ccode\u003e\u003ca\u003eonError\u003c/a\u003e\u003c/code\u003e. Note, if the command could have spaces,\n   you should put it in quotes to delimit it from parameters. e.g.: \u003ccode\u003eexec \"\\\"$INSTDIR/command.exe\\\" parameters\"\u003c/code\u003e.\n   If you don't put it in quotes it will not work on Windows 9x with or without parameters.\n\u003c/p\u003e\u003cpre\u003e exec \"\\\"$INSTDIR/someprogram.exe\\\"\"\n exec \"\\\"$INSTDIR/someprogram.exe\\\" some parameters\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#exec",
        "fct-type": "function",
        "title": "exec"
      },
      "index": {
        "description": "Execute the specified program and continue immediately Note that the file specified must exist on the target system not the compiling system OUTDIR is used for the working directory Errors can be caught using onError Note if the command could have spaces you should put it in quotes to delimit it from parameters e.g exec INSTDIR command.exe parameters If you don put it in quotes it will not work on Windows with or without parameters exec INSTDIR someprogram.exe exec INSTDIR someprogram.exe some parameters",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "exec",
        "normalized": "Exp String-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:execShell",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "[ShowWindow] -\u003e Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#execShell",
        "fct-type": "function",
        "title": "execShell"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "execShell",
        "normalized": "[ShowWindow]-\u003eExp String-\u003eAction()",
        "package": "nsis",
        "partial": "Shell",
        "signature": "[ShowWindow]-\u003eExp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:execWait",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#execWait",
        "fct-type": "function",
        "title": "execWait"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "execWait",
        "normalized": "Exp String-\u003eAction()",
        "package": "nsis",
        "partial": "Wait",
        "signature": "Exp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:exp_",
      "description": {
        "fct-descr": "\u003cp\u003eErase the type of an Exp, only useful with \u003ccode\u003e\u003ca\u003eplugin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp a -\u003e Exp ()",
        "fct-source": "src/Development-NSIS-Sugar.html#exp_",
        "fct-type": "function",
        "title": "exp_"
      },
      "index": {
        "description": "Erase the type of an Exp only useful with plugin",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "exp_",
        "normalized": "Exp a-\u003eExp()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp a-\u003eExp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:false",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean constants corresponding to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#false",
        "fct-type": "function",
        "title": "false"
      },
      "index": {
        "description": "Boolean constants corresponding to True and False",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "false",
        "normalized": "",
        "package": "nsis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:file",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "[Attrib] -\u003e Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#file",
        "fct-type": "function",
        "title": "file"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "file",
        "normalized": "[Attrib]-\u003eExp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "[Attrib]-\u003eExp FilePath-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:fileClose",
      "description": {
        "fct-descr": "\u003cp\u003eClose a file file openned with \u003ccode\u003e\u003ca\u003efileOpen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FileHandle -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#fileClose",
        "fct-type": "function",
        "title": "fileClose"
      },
      "index": {
        "description": "Close file file openned with fileOpen",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "fileClose",
        "normalized": "Exp FileHandle-\u003eAction()",
        "package": "nsis",
        "partial": "Close",
        "signature": "Exp FileHandle-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:fileExists",
      "description": {
        "fct-descr": "\u003cp\u003eChecks for existence of file(s) (which can be a wildcard, or a directory).\n   If you want to check to see if a file is a directory, use \u003ccode\u003efileExists \u003ca\u003eDIRECTORY/*.*\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e iff_ (fileExists \"$WINDIR/notepad.exe\") $\n     messageBox [MB_OK] \"notepad is installed\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#fileExists",
        "fct-type": "function",
        "title": "fileExists"
      },
      "index": {
        "description": "Checks for existence of file which can be wildcard or directory If you want to check to see if file is directory use fileExists DIRECTORY iff fileExists WINDIR notepad.exe messageBox MB OK notepad is installed",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "fileExists",
        "normalized": "Exp FilePath-\u003eExp Bool",
        "package": "nsis",
        "partial": "Exists",
        "signature": "Exp FilePath-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:fileOpen",
      "description": {
        "fct-descr": "\u003cp\u003eOpen a file, which must be closed explicitly with \u003ccode\u003e\u003ca\u003efileClose\u003c/a\u003e\u003c/code\u003e.\n   Often it is better to use \u003ccode\u003e\u003ca\u003ewriteFile'\u003c/a\u003e\u003c/code\u003e or\n   \u003ccode\u003e\u003ca\u003ewithFile\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003cpre\u003e\n h \u003c- \u003ccode\u003e\u003ca\u003efileOpen\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eModeWrite\u003c/a\u003e\u003c/code\u003e \"C:/log.txt\"\n \u003ccode\u003e\u003ca\u003efileWrite\u003c/a\u003e\u003c/code\u003e h \"Hello world!\"\n \u003ccode\u003e\u003ca\u003efileClose\u003c/a\u003e\u003c/code\u003e h\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "FileMode -\u003e Exp FilePath -\u003e Action (Exp FileHandle)",
        "fct-source": "src/Development-NSIS-Sugar.html#fileOpen",
        "fct-type": "function",
        "title": "fileOpen"
      },
      "index": {
        "description": "Open file which must be closed explicitly with fileClose Often it is better to use writeFile or withFile instead fileOpen ModeWrite log.txt fileWrite Hello world fileClose",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "fileOpen",
        "normalized": "FileMode-\u003eExp FilePath-\u003eAction(Exp FileHandle)",
        "package": "nsis",
        "partial": "Open",
        "signature": "FileMode-\u003eExp FilePath-\u003eAction(Exp FileHandle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:fileWrite",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string to a file openned with \u003ccode\u003e\u003ca\u003efileOpen\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FileHandle -\u003e Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#fileWrite",
        "fct-type": "function",
        "title": "fileWrite"
      },
      "index": {
        "description": "Write string to file openned with fileOpen",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "fileWrite",
        "normalized": "Exp FileHandle-\u003eExp String-\u003eAction()",
        "package": "nsis",
        "partial": "Write",
        "signature": "Exp FileHandle-\u003eExp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:findEach",
      "description": {
        "fct-descr": "\u003cp\u003ePerforms a search for filespec, running the action with each file found.\n   If no files are found the error flag is set. Note that the filename output is without path.\n\u003c/p\u003e\u003cpre\u003e findEach \"$INSTDIR/*.txt\" $ \\x -\u003e\n     detailPrint x\n\u003c/pre\u003e\u003cp\u003eIf you jump from inside the loop to after the loop then you may leak a search handle.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e (Exp FilePath -\u003e Action ()) -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#findEach",
        "fct-type": "function",
        "title": "findEach"
      },
      "index": {
        "description": "Performs search for filespec running the action with each file found If no files are found the error flag is set Note that the filename output is without path findEach INSTDIR txt detailPrint If you jump from inside the loop to after the loop then you may leak search handle",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "findEach",
        "normalized": "Exp FilePath-\u003e(Exp FilePath-\u003eAction())-\u003eAction()",
        "package": "nsis",
        "partial": "Each",
        "signature": "Exp FilePath-\u003e(Exp FilePath-\u003eAction())-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:getFileTime",
      "description": {
        "fct-descr": "\u003cp\u003eGets the last write time of the file, you should only use the result to compare for equality\n   with other results from \u003ccode\u003e\u003ca\u003egetFileTime\u003c/a\u003e\u003c/code\u003e. On failure the error flag is set.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#getFileTime",
        "fct-type": "function",
        "title": "getFileTime"
      },
      "index": {
        "description": "Gets the last write time of the file you should only use the result to compare for equality with other results from getFileTime On failure the error flag is set",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "getFileTime",
        "normalized": "Exp FilePath-\u003eExp String",
        "package": "nsis",
        "partial": "File Time",
        "signature": "Exp FilePath-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:goto",
      "description": {
        "fct-descr": "\u003cp\u003eJump to a \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003enewLabel\u003c/a\u003e\u003c/code\u003e for details. This function will fail\n   if \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e is not used on the \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Label -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#goto",
        "fct-type": "function",
        "title": "goto"
      },
      "index": {
        "description": "Jump to label see newLabel for details This function will fail if label is not used on the Label",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "goto",
        "normalized": "Label-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Label-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:headerImage",
      "description": {
        "fct-descr": "\u003cp\u003eSet the image used for the header splash. Pass \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e to use the default header image.\n\u003c/p\u003e\u003cpre\u003e headerImage $ Just \"$NSISDIR/Contrib/Graphics/Header/win.bmp\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Maybe (Exp FilePath) -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#headerImage",
        "fct-type": "function",
        "title": "headerImage"
      },
      "index": {
        "description": "Set the image used for the header splash Pass Nothing to use the default header image headerImage Just NSISDIR Contrib Graphics Header win.bmp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "headerImage",
        "normalized": "Maybe(Exp FilePath)-\u003eAction()",
        "package": "nsis",
        "partial": "Image",
        "signature": "Maybe(Exp FilePath)-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:hideProgress",
      "description": {
        "fct-descr": "\u003cp\u003eWhile the action is executing, do not update the progress bar.\n   Useful for functions which do a large amount of computation, or have loops.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Action a -\u003e Action a",
        "fct-source": "src/Development-NSIS-Sugar.html#hideProgress",
        "fct-type": "function",
        "title": "hideProgress"
      },
      "index": {
        "description": "While the action is executing do not update the progress bar Useful for functions which do large amount of computation or have loops",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "hideProgress",
        "normalized": "Action a-\u003eAction a",
        "package": "nsis",
        "partial": "Progress",
        "signature": "Action a-\u003eAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:iff",
      "description": {
        "fct-descr": "\u003cp\u003eTest a boolean expression, reunning the first action if it is \u003ccode\u003e\u003ca\u003etrue\u003c/a\u003e\u003c/code\u003e and the second if it is \u003ccode\u003e\u003ca\u003efalse\u003c/a\u003e\u003c/code\u003e.\n   The appropriate branch action will be run within a \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003e?\u003c/a\u003e\u003c/code\u003e for an expression orientated version.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e (x \u003ccode\u003e\u003ca\u003e%==\u003c/a\u003e\u003c/code\u003e 12) (\u003ccode\u003e\u003ca\u003ealert\u003c/a\u003e\u003c/code\u003e \"is 12\") (\u003ccode\u003e\u003ca\u003ealert\u003c/a\u003e\u003c/code\u003e \"is not 12\")\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Bool -\u003e Action () -\u003e Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#iff",
        "fct-type": "function",
        "title": "iff"
      },
      "index": {
        "description": "Test boolean expression reunning the first action if it is true and the second if it is false The appropriate branch action will be run within scope See for an expression orientated version iff alert is alert is not",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "iff",
        "normalized": "Exp Bool-\u003eAction()-\u003eAction()-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Bool-\u003eAction()-\u003eAction()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:iff_",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e where there is no else action.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Bool -\u003e Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#iff_",
        "fct-type": "function",
        "title": "iff_"
      },
      "index": {
        "description": "version of iff where there is no else action",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "iff_",
        "normalized": "Exp Bool-\u003eAction()-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Bool-\u003eAction()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:installDir",
      "description": {
        "fct-descr": "\u003cp\u003eSets the default installation directory.\n   Note that the part of this string following the last \u003ccode\u003e\\\u003c/code\u003e will be used if the user selects \u003ccode\u003ebrowse\u003c/code\u003e, and\n   may be appended back on to the string at install time (to disable this, end the directory with a \u003ccode\u003e\\\u003c/code\u003e).\n   If this doesn't make any sense, play around with the browse button a bit.\n\u003c/p\u003e\u003cpre\u003e installDir \"$PROGRAMFILES/MyApp\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#installDir",
        "fct-type": "function",
        "title": "installDir"
      },
      "index": {
        "description": "Sets the default installation directory Note that the part of this string following the last will be used if the user selects browse and may be appended back on to the string at install time to disable this end the directory with If this doesn make any sense play around with the browse button bit installDir PROGRAMFILES MyApp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "installDir",
        "normalized": "Exp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "Dir",
        "signature": "Exp FilePath-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:installDirRegKey",
      "description": {
        "fct-descr": "\u003cp\u003eThis attribute tells the installer to check a string in the registry,\n   and use it for the install dir if that string is valid. If this attribute is present,\n   it will override the \u003ccode\u003e\u003ca\u003einstallDir\u003c/a\u003e\u003c/code\u003e attribute if the registry key is valid, otherwise\n   it will fall back to the \u003ccode\u003e\u003ca\u003einstallDir\u003c/a\u003e\u003c/code\u003e default. When querying the registry, this command\n   will automatically remove any quotes. If the string ends in \".exe\", it will automatically\n   remove the filename component of the string (i.e. if the string is \"C:\u003cem\u003eprogram files\u003c/em\u003efoo/foo.exe\",\n   it will know to use \"C:\u003cem\u003eprogram files\u003c/em\u003efoo\").\n\u003c/p\u003e\u003cpre\u003e installDirRegKey HKLM \"Software/NSIS\" \"\"\n installDirRegKey HKLM \"Software/ACME/Thingy\" \"InstallLocation\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY -\u003e Exp String -\u003e Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#installDirRegKey",
        "fct-type": "function",
        "title": "installDirRegKey"
      },
      "index": {
        "description": "This attribute tells the installer to check string in the registry and use it for the install dir if that string is valid If this attribute is present it will override the installDir attribute if the registry key is valid otherwise it will fall back to the installDir default When querying the registry this command will automatically remove any quotes If the string ends in exe it will automatically remove the filename component of the string i.e if the string is program files foo foo.exe it will know to use program files foo installDirRegKey HKLM Software NSIS installDirRegKey HKLM Software ACME Thingy InstallLocation",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "installDirRegKey",
        "normalized": "HKEY-\u003eExp String-\u003eExp String-\u003eAction()",
        "package": "nsis",
        "partial": "Dir Reg Key",
        "signature": "HKEY-\u003eExp String-\u003eExp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:installIcon",
      "description": {
        "fct-descr": "\u003cp\u003eSet the icon used for the installer/uninstaller.\n\u003c/p\u003e\u003cpre\u003e installIcon \"$NSISDIR/Contrib/Graphics/Icons/modern-install.ico\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#installIcon",
        "fct-type": "function",
        "title": "installIcon"
      },
      "index": {
        "description": "Set the icon used for the installer uninstaller installIcon NSISDIR Contrib Graphics Icons modern-install.ico",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "installIcon",
        "normalized": "Exp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "Icon",
        "signature": "Exp FilePath-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:int",
      "description": {
        "fct-descr": "\u003cp\u003eLift an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Int -\u003e Exp Int",
        "fct-source": "src/Development-NSIS-Sugar.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "Lift an Int into an Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "int",
        "normalized": "Int-\u003eExp Int",
        "package": "nsis",
        "partial": "",
        "signature": "Int-\u003eExp Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:label",
      "description": {
        "fct-descr": "\u003cp\u003eDefine the location of a \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e, see \u003ccode\u003e\u003ca\u003enewLabel\u003c/a\u003e\u003c/code\u003e for details. This function will fail\n   if the same \u003ccode\u003e\u003ca\u003eLabel\u003c/a\u003e\u003c/code\u003e is passed to \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e more than once.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Label -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#label",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "Define the location of label see newLabel for details This function will fail if the same Label is passed to label more than once",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "label",
        "normalized": "Label-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Label-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:loop",
      "description": {
        "fct-descr": "\u003cp\u003eA loop with a \u003ccode\u003ebreak\u003c/code\u003e command. Run the action repeatedly until the breaking action\n   is called. The action is run in a \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e. See also \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n x \u003c- \u003ccode\u003e\u003ca\u003emutable_\u003c/a\u003e\u003c/code\u003e x\n \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e $ \\break -\u003e do\n     \u003ccode\u003e\u003ca\u003eiff_\u003c/a\u003e\u003c/code\u003e (x \u003ccode\u003e\u003ca\u003e%\u003e=\u003c/a\u003e\u003c/code\u003e 10) break\n     x \u003ccode\u003e\u003ca\u003e@=\u003c/a\u003e\u003c/code\u003e x \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e 1\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "(Action () -\u003e Action ()) -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#loop",
        "fct-type": "function",
        "title": "loop"
      },
      "index": {
        "description": "loop with break command Run the action repeatedly until the breaking action is called The action is run in scope See also while mutable loop break do iff break",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "loop",
        "normalized": "(Action()-\u003eAction())-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "(Action()-\u003eAction())-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:messageBox",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "[MessageBoxType] -\u003e Exp String -\u003e Action (Exp String)",
        "fct-source": "src/Development-NSIS-Sugar.html#messageBox",
        "fct-type": "function",
        "title": "messageBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "messageBox",
        "normalized": "[MessageBoxType]-\u003eExp String-\u003eAction(Exp String)",
        "package": "nsis",
        "partial": "Box",
        "signature": "[MessageBoxType]-\u003eExp String-\u003eAction(Exp String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:mutable",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a mutable variable a name, which can be modified with \u003ccode\u003e\u003ca\u003e@=\u003c/a\u003e\u003c/code\u003e.\n   After defining the expression, you can refer to it with \u003ccode\u003e$NAME\u003c/code\u003e in a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n   To introduce a new scope, see \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n h \u003c- \u003ccode\u003e\u003ca\u003emutable\u003c/a\u003e\u003c/code\u003e \"HELLO\" \"Hello World\"\n \"$HELLO\" \u003ccode\u003e\u003ca\u003e@=\u003c/a\u003e\u003c/code\u003e \"$HELLO!\"\n h        \u003ccode\u003e\u003ca\u003e@=\u003c/a\u003e\u003c/code\u003e \"$HELLO!\" -- equivalent to the above\n \u003ccode\u003e\u003ca\u003ealert\u003c/a\u003e\u003c/code\u003e \"$HELLO\"        -- with 2 exclamation marks\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "String -\u003e Exp t -\u003e Action (Exp t)",
        "fct-source": "src/Development-NSIS-Sugar.html#mutable",
        "fct-type": "function",
        "title": "mutable"
      },
      "index": {
        "description": "Create mutable variable name which can be modified with After defining the expression you can refer to it with NAME in String To introduce new scope see scope mutable HELLO Hello World HELLO HELLO HELLO equivalent to the above alert HELLO with exclamation marks",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "mutable",
        "normalized": "String-\u003eExp a-\u003eAction(Exp a)",
        "package": "nsis",
        "partial": "",
        "signature": "String-\u003eExp t-\u003eAction(Exp t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:mutableInt",
      "description": {
        "fct-descr": "\u003cp\u003eVersions of \u003ccode\u003e\u003ca\u003emutable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econstant\u003c/a\u003e\u003c/code\u003e restricted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, used to avoid\n   ambiguous type errors.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "String -\u003e Exp Int -\u003e Action (Exp Int)",
        "fct-source": "src/Development-NSIS-Sugar.html#mutableInt",
        "fct-type": "function",
        "title": "mutableInt"
      },
      "index": {
        "description": "Versions of mutable and constant restricted to Exp Int used to avoid ambiguous type errors",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "mutableInt",
        "normalized": "String-\u003eExp Int-\u003eAction(Exp Int)",
        "package": "nsis",
        "partial": "Int",
        "signature": "String-\u003eExp Int-\u003eAction(Exp Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:mutableInt_",
      "description": {
        "fct-descr": "\u003cp\u003eVersions of \u003ccode\u003e\u003ca\u003emutable_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econstant_\u003c/a\u003e\u003c/code\u003e restricted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, used to avoid\n   ambiguous type errors.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Int -\u003e Action (Exp Int)",
        "fct-source": "src/Development-NSIS-Sugar.html#mutableInt_",
        "fct-type": "function",
        "title": "mutableInt_"
      },
      "index": {
        "description": "Versions of mutable and constant restricted to Exp Int used to avoid ambiguous type errors",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "mutableInt_",
        "normalized": "Exp Int-\u003eAction(Exp Int)",
        "package": "nsis",
        "partial": "Int",
        "signature": "Exp Int-\u003eAction(Exp Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:mutableStr",
      "description": {
        "fct-descr": "\u003cp\u003eVersions of \u003ccode\u003e\u003ca\u003emutable\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econstant\u003c/a\u003e\u003c/code\u003e restricted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, used to avoid\n   ambiguous type errors.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "String -\u003e Exp String -\u003e Action (Exp String)",
        "fct-source": "src/Development-NSIS-Sugar.html#mutableStr",
        "fct-type": "function",
        "title": "mutableStr"
      },
      "index": {
        "description": "Versions of mutable and constant restricted to Exp String used to avoid ambiguous type errors",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "mutableStr",
        "normalized": "String-\u003eExp String-\u003eAction(Exp String)",
        "package": "nsis",
        "partial": "Str",
        "signature": "String-\u003eExp String-\u003eAction(Exp String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:mutableStr_",
      "description": {
        "fct-descr": "\u003cp\u003eVersions of \u003ccode\u003e\u003ca\u003emutable_\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econstant_\u003c/a\u003e\u003c/code\u003e restricted to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, used to avoid\n   ambiguous type errors.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Action (Exp String)",
        "fct-source": "src/Development-NSIS-Sugar.html#mutableStr_",
        "fct-type": "function",
        "title": "mutableStr_"
      },
      "index": {
        "description": "Versions of mutable and constant restricted to Exp String used to avoid ambiguous type errors",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "mutableStr_",
        "normalized": "Exp String-\u003eAction(Exp String)",
        "package": "nsis",
        "partial": "Str",
        "signature": "Exp String-\u003eAction(Exp String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:mutable_",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an unnamed mutable variable, which can be modified with \u003ccode\u003e\u003ca\u003e@=\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n h \u003c- \u003ccode\u003e\u003ca\u003emutable\u003c/a\u003e\u003c/code\u003e \"Hello World\"\n h \u003ccode\u003e\u003ca\u003e@=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eh\u003c/code\u003e \u003ccode\u003e\u003ca\u003e&\u003c/a\u003e\u003c/code\u003e \"!\"\n \u003ccode\u003e\u003ca\u003ealert\u003c/a\u003e\u003c/code\u003e h\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp t -\u003e Action (Exp t)",
        "fct-source": "src/Development-NSIS-Sugar.html#mutable_",
        "fct-type": "function",
        "title": "mutable_"
      },
      "index": {
        "description": "Create an unnamed mutable variable which can be modified with mutable Hello World alert",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "mutable_",
        "normalized": "Exp a-\u003eAction(Exp a)",
        "package": "nsis",
        "partial": "",
        "signature": "Exp t-\u003eAction(Exp t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eSets the name of the installer. The name is usually simply the product name such as 'MyApp' or 'Company MyApp'.\n\u003c/p\u003e\u003cpre\u003e name \"MyApp\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#name",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "Sets the name of the installer The name is usually simply the product name such as MyApp or Company MyApp name MyApp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "name",
        "normalized": "Exp String-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:newLabel",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new label, used with \u003ccode\u003e\u003ca\u003egoto\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e to write line jump based programming.\n   Where possible you should use structured alternatives, such as \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n   Each created label must be used with one call to \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e, and any number of calls to\n   \u003ccode\u003e\u003ca\u003egoto\u003c/a\u003e\u003c/code\u003e. As an example:\n\u003c/p\u003e\u003cpre\u003e\n abort \u003c- \u003ccode\u003e\u003ca\u003enewLabel\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e var $ do\n     \u003ccode\u003e\u003ca\u003eiff_\u003c/a\u003e\u003c/code\u003e cond1 $ \u003ccode\u003e\u003ca\u003egoto\u003c/a\u003e\u003c/code\u003e abort\n     \u003ccode\u003e\u003ca\u003eiff_\u003c/a\u003e\u003c/code\u003e cond2 $ \u003ccode\u003e\u003ca\u003egoto\u003c/a\u003e\u003c/code\u003e abort\n     var \u003ccode\u003e\u003ca\u003e@=\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estrDrop\u003c/a\u003e\u003c/code\u003e 1 var \n \u003ccode\u003e\u003ca\u003elabel\u003c/a\u003e\u003c/code\u003e abort\n\u003c/pre\u003e\u003cp\u003eNote that the above example could have been written in a simpler manner with \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Action Label",
        "fct-source": "src/Development-NSIS-Sugar.html#newLabel",
        "fct-type": "function",
        "title": "newLabel"
      },
      "index": {
        "description": "Create new label used with goto and label to write line jump based programming Where possible you should use structured alternatives such as iff while and loop Each created label must be used with one call to label and any number of calls to goto As an example abort newLabel while var do iff cond1 goto abort iff cond2 goto abort var strDrop var label abort Note that the above example could have been written in simpler manner with loop",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "newLabel",
        "normalized": "",
        "package": "nsis",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:newSectionId",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Action SectionId",
        "fct-source": "src/Development-NSIS-Sugar.html#newSectionId",
        "fct-type": "function",
        "title": "newSectionId"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "newSectionId",
        "normalized": "",
        "package": "nsis",
        "partial": "Section Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:not_",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean negation.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Bool -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#not_",
        "fct-type": "function",
        "title": "not_"
      },
      "index": {
        "description": "Boolean negation",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "not_",
        "normalized": "Exp Bool-\u003eExp Bool",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Bool-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:nsis",
      "description": {
        "fct-descr": "\u003cp\u003eCreate the contents of an NSIS script from an installer specification.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Action () -\u003e String",
        "fct-source": "src/Development-NSIS.html#nsis",
        "fct-type": "function",
        "title": "nsis"
      },
      "index": {
        "description": "Create the contents of an NSIS script from an installer specification",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "nsis",
        "normalized": "Action()-\u003eString",
        "package": "nsis",
        "partial": "",
        "signature": "Action()-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:nsisNoOptimise",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ensis\u003c/a\u003e\u003c/code\u003e, but don't try and optimise the resulting NSIS script. Useful\n   to figure out how the underlying installer works, or if you believe the\n   optimisations are introducing bugs (but please do report any such bugs!).\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Action () -\u003e String",
        "fct-source": "src/Development-NSIS.html#nsisNoOptimise",
        "fct-type": "function",
        "title": "nsisNoOptimise"
      },
      "index": {
        "description": "Like nsis but don try and optimise the resulting NSIS script Useful to figure out how the underlying installer works or if you believe the optimisations are introducing bugs but please do report any such bugs",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "nsisNoOptimise",
        "normalized": "Action()-\u003eString",
        "package": "nsis",
        "partial": "No Optimise",
        "signature": "Action()-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:onError",
      "description": {
        "fct-descr": "\u003cp\u003eRun an intitial action, and if that action causes an error, run the second action.\n   Unlike other programming languages, any uncaught errors are silently ignored.\n   All actions are run in \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eonError\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e \"\\\"$WINDIR/notepad.exe\\\"\") (\u003ccode\u003e\u003ca\u003ealert\u003c/a\u003e\u003c/code\u003e \"Failed to run notepad\")\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Action () -\u003e Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#onError",
        "fct-type": "function",
        "title": "onError"
      },
      "index": {
        "description": "Run an intitial action and if that action causes an error run the second action Unlike other programming languages any uncaught errors are silently ignored All actions are run in scope onError exec WINDIR notepad.exe alert Failed to run notepad",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "onError",
        "normalized": "Action()-\u003eAction()-\u003eAction()",
        "package": "nsis",
        "partial": "Error",
        "signature": "Action()-\u003eAction()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:onPageLeave",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Page -\u003e Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#onPageLeave",
        "fct-type": "function",
        "title": "onPageLeave"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "onPageLeave",
        "normalized": "Page-\u003eAction()-\u003eAction()",
        "package": "nsis",
        "partial": "Page Leave",
        "signature": "Page-\u003eAction()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:onPagePre",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Page -\u003e Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#onPagePre",
        "fct-type": "function",
        "title": "onPagePre"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "onPagePre",
        "normalized": "Page-\u003eAction()-\u003eAction()",
        "package": "nsis",
        "partial": "Page Pre",
        "signature": "Page-\u003eAction()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:onPageShow",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Page -\u003e Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#onPageShow",
        "fct-type": "function",
        "title": "onPageShow"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "onPageShow",
        "normalized": "Page-\u003eAction()-\u003eAction()",
        "package": "nsis",
        "partial": "Page Show",
        "signature": "Page-\u003eAction()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:onSelChange",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#onSelChange",
        "fct-type": "function",
        "title": "onSelChange"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "onSelChange",
        "normalized": "Action()-\u003eAction()",
        "package": "nsis",
        "partial": "Sel Change",
        "signature": "Action()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:outFile",
      "description": {
        "fct-descr": "\u003cp\u003eSpecifies the output file that \u003ccode\u003eMakeNSIS\u003c/code\u003e should write the installer to.\n   This is just the file that MakeNSIS writes, it doesn't affect the contents of the installer.\n   Usually should end with \u003ccode\u003e.exe\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e outFile \"installer.exe\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#outFile",
        "fct-type": "function",
        "title": "outFile"
      },
      "index": {
        "description": "Specifies the output file that MakeNSIS should write the installer to This is just the file that MakeNSIS writes it doesn affect the contents of the installer Usually should end with exe outFile installer.exe",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "outFile",
        "normalized": "Exp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "File",
        "signature": "Exp FilePath-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:page",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Page -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#page",
        "fct-type": "function",
        "title": "page"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "page",
        "normalized": "Page-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Page-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:plugin",
      "description": {
        "fct-descr": "\u003cp\u003eCall a plugin. If the arguments are of different types use \u003ccode\u003e\u003ca\u003eexp_\u003c/a\u003e\u003c/code\u003e. As an example:\n\u003c/p\u003e\u003cpre\u003e\n encrypt x = \u003ccode\u003e\u003ca\u003eshare\u003c/a\u003e\u003c/code\u003e x $ \\x -\u003e do\n     \u003ccode\u003e\u003ca\u003eplugin\u003c/a\u003e\u003c/code\u003e \"Base64\" \"Encrypt\" [\u003ccode\u003e\u003ca\u003eexp_\u003c/a\u003e\u003c/code\u003e x, \u003ccode\u003e\u003ca\u003eexp_\u003c/a\u003e\u003c/code\u003e $ \u003ccode\u003e\u003ca\u003estrLength\u003c/a\u003e\u003c/code\u003e x]\n\u003c/pre\u003e\u003cp\u003eThe only thing to be careful about is that we use the \u003ccode\u003ex\u003c/code\u003e parameter twice, so should \u003ccode\u003e\u003ca\u003eshare\u003c/a\u003e\u003c/code\u003e\n   it to ensure it is only evaluated once.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "String -\u003e String -\u003e [Exp a] -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#plugin",
        "fct-type": "function",
        "title": "plugin"
      },
      "index": {
        "description": "Call plugin If the arguments are of different types use exp As an example encrypt share do plugin Base64 Encrypt exp exp strLength The only thing to be careful about is that we use the parameter twice so should share it to ensure it is only evaluated once",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "plugin",
        "normalized": "String-\u003eString-\u003e[Exp a]-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "String-\u003eString-\u003e[Exp a]-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003ePop a value off the stack, will set an error if there is nothing on the stack.\n   Only useful with \u003ccode\u003e\u003ca\u003eplugin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Pop value off the stack will set an error if there is nothing on the stack Only useful with plugin",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "pop",
        "normalized": "",
        "package": "nsis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003ePush a value onto the stack. Only useful with \u003ccode\u003e\u003ca\u003eplugin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp a -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "Push value onto the stack Only useful with plugin",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "push",
        "normalized": "Exp a-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp a-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:readRegStr",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY -\u003e Exp String -\u003e Exp String -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#readRegStr",
        "fct-type": "function",
        "title": "readRegStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "readRegStr",
        "normalized": "HKEY-\u003eExp String-\u003eExp String-\u003eExp String",
        "package": "nsis",
        "partial": "Reg Str",
        "signature": "HKEY-\u003eExp String-\u003eExp String-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:requestExecutionLevel",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Level -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#requestExecutionLevel",
        "fct-type": "function",
        "title": "requestExecutionLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "requestExecutionLevel",
        "normalized": "Level-\u003eAction()",
        "package": "nsis",
        "partial": "Execution Level",
        "signature": "Level-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:rmdir",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the specified directory (fully qualified path with no wildcards). Without \u003ccode\u003e\u003ca\u003eRecursive\u003c/a\u003e\u003c/code\u003e,\n   the directory will only be removed if it is completely empty. If \u003ccode\u003e\u003ca\u003eRecursive\u003c/a\u003e\u003c/code\u003e is specified, the\n   directory will be removed recursively, so all directories and files in the specified directory\n   will be removed. If \u003ccode\u003e\u003ca\u003eRebootOK\u003c/a\u003e\u003c/code\u003e is specified, any file or directory which could not have been\n   removed during the process will be removed on reboot -- if any file or directory will be\n   removed on a reboot, the reboot flag will be set.\n   The error flag is set if any file or directory cannot be removed.\n\u003c/p\u003e\u003cpre\u003e rmdir [] \"$INSTDIR\"\n rmdir [] \"$INSTDIR/data\"\n rmdir [Recursive, RebootOK] \"$INSTDIR\"\n rmdir [RebootOK] \"$INSTDIR/DLLs\"\n\u003c/pre\u003e\u003cp\u003eNote that the current working directory can not be deleted. The current working directory is\n   set by \u003ccode\u003e\u003ca\u003esetOutPath\u003c/a\u003e\u003c/code\u003e. For example, the following example will not delete the directory.\n\u003c/p\u003e\u003cpre\u003e setOutPath \"$TEMP/dir\"\n rmdir [] \"$TEMP/dir\"\n\u003c/pre\u003e\u003cp\u003eThe next example will succeed in deleting the directory.\n\u003c/p\u003e\u003cpre\u003e setOutPath \"$TEMP/dir\"\n setOutPath \"$TEMP\"\n rmdir [] \"$TEMP/dir\"\n\u003c/pre\u003e\u003cp\u003eWarning: using \u003ccode\u003ermdir [Recursive] \u003ca\u003e$INSTDIR\u003c/a\u003e\u003c/code\u003e in \u003ccode\u003e\u003ca\u003euninstall\u003c/a\u003e\u003c/code\u003e is not safe. Though it is unlikely,\n   the user might select to install to the Program Files folder and so this command will wipe out\n   the entire Program Files folder, including other programs that has nothing to do with the uninstaller.\n   The user can also put other files but the program's files and would expect them to get deleted with\n   the program. Solutions are available for easily uninstalling only files which were installed by the installer.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "[Attrib] -\u003e Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#rmdir",
        "fct-type": "function",
        "title": "rmdir"
      },
      "index": {
        "description": "Remove the specified directory fully qualified path with no wildcards Without Recursive the directory will only be removed if it is completely empty If Recursive is specified the directory will be removed recursively so all directories and files in the specified directory will be removed If RebootOK is specified any file or directory which could not have been removed during the process will be removed on reboot if any file or directory will be removed on reboot the reboot flag will be set The error flag is set if any file or directory cannot be removed rmdir INSTDIR rmdir INSTDIR data rmdir Recursive RebootOK INSTDIR rmdir RebootOK INSTDIR DLLs Note that the current working directory can not be deleted The current working directory is set by setOutPath For example the following example will not delete the directory setOutPath TEMP dir rmdir TEMP dir The next example will succeed in deleting the directory setOutPath TEMP dir setOutPath TEMP rmdir TEMP dir Warning using rmdir Recursive INSTDIR in uninstall is not safe Though it is unlikely the user might select to install to the Program Files folder and so this command will wipe out the entire Program Files folder including other programs that has nothing to do with the uninstaller The user can also put other files but the program files and would expect them to get deleted with the program Solutions are available for easily uninstalling only files which were installed by the installer",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "rmdir",
        "normalized": "[Attrib]-\u003eExp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "[Attrib]-\u003eExp FilePath-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:scope",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduce a variable scope. Scopes are automatically introduced by operations\n   such as \u003ccode\u003e\u003ca\u003eiff\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e etc. Inside a scope you may define new variables\n   whose names may clash with variables outside the scope, but the local versions will be used.\n\u003c/p\u003e\u003cp\u003eIf you have any non-evaluated expressions, before introducing any potentially clashing\n   variables in the scope you should \u003ccode\u003e\u003ca\u003eshare\u003c/a\u003e\u003c/code\u003e them or use \u003ccode\u003e\u003ca\u003econstant_\u003c/a\u003e\u003c/code\u003e on them. For example:\n\u003c/p\u003e\u003cpre\u003e\n operate x = do\n     x \u003c- \u003ccode\u003e\u003ca\u003econstant_\u003c/a\u003e\u003c/code\u003e x\n     \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e $ do\n         \u003ccode\u003e\u003ca\u003econstant\u003c/a\u003e\u003c/code\u003e \"TEST\" 0\n\u003c/pre\u003e\u003cp\u003eIt is important to turn \u003ccode\u003ex\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003econstant_\u003c/a\u003e\u003c/code\u003e before defining a new constant \u003ccode\u003e$TEST\u003c/code\u003e, since\n   if \u003ccode\u003ex\u003c/code\u003e refers to \u003ccode\u003e$TEST\u003c/code\u003e after the new definition, it will pick up the wrong variable.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Action a -\u003e Action a",
        "fct-source": "src/Development-NSIS-Sugar.html#scope",
        "fct-type": "function",
        "title": "scope"
      },
      "index": {
        "description": "Introduce variable scope Scopes are automatically introduced by operations such as iff loop while etc Inside scope you may define new variables whose names may clash with variables outside the scope but the local versions will be used If you have any non-evaluated expressions before introducing any potentially clashing variables in the scope you should share them or use constant on them For example operate do constant scope do constant TEST It is important to turn into constant before defining new constant TEST since if refers to TEST after the new definition it will pick up the wrong variable",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "scope",
        "normalized": "Action a-\u003eAction a",
        "package": "nsis",
        "partial": "",
        "signature": "Action a-\u003eAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:section",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e [Attrib] -\u003e Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#section",
        "fct-type": "function",
        "title": "section"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "section",
        "normalized": "Exp String-\u003e[Attrib]-\u003eAction()-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp String-\u003e[Attrib]-\u003eAction()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:sectionGet",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SectionId -\u003e SectionFlag -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#sectionGet",
        "fct-type": "function",
        "title": "sectionGet"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "sectionGet",
        "normalized": "SectionId-\u003eSectionFlag-\u003eExp Bool",
        "package": "nsis",
        "partial": "Get",
        "signature": "SectionId-\u003eSectionFlag-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:sectionGetText",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SectionId -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#sectionGetText",
        "fct-type": "function",
        "title": "sectionGetText"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "sectionGetText",
        "normalized": "SectionId-\u003eExp String",
        "package": "nsis",
        "partial": "Get Text",
        "signature": "SectionId-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:sectionGroup",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e [Attrib] -\u003e Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#sectionGroup",
        "fct-type": "function",
        "title": "sectionGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "sectionGroup",
        "normalized": "Exp String-\u003e[Attrib]-\u003eAction()-\u003eAction()",
        "package": "nsis",
        "partial": "Group",
        "signature": "Exp String-\u003e[Attrib]-\u003eAction()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:sectionSet",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SectionId -\u003e SectionFlag -\u003e Exp Bool -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#sectionSet",
        "fct-type": "function",
        "title": "sectionSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "sectionSet",
        "normalized": "SectionId-\u003eSectionFlag-\u003eExp Bool-\u003eAction()",
        "package": "nsis",
        "partial": "Set",
        "signature": "SectionId-\u003eSectionFlag-\u003eExp Bool-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:sectionSetText",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "SectionId -\u003e Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#sectionSetText",
        "fct-type": "function",
        "title": "sectionSetText"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "sectionSetText",
        "normalized": "SectionId-\u003eExp String-\u003eAction()",
        "package": "nsis",
        "partial": "Set Text",
        "signature": "SectionId-\u003eExp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:setCompressor",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Compressor -\u003e [Attrib] -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#setCompressor",
        "fct-type": "function",
        "title": "setCompressor"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "setCompressor",
        "normalized": "Compressor-\u003e[Attrib]-\u003eAction()",
        "package": "nsis",
        "partial": "Compressor",
        "signature": "Compressor-\u003e[Attrib]-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:setOutPath",
      "description": {
        "fct-descr": "\u003cp\u003eSets the output path (\u003ccode\u003e$OUTDIR\u003c/code\u003e) and creates it (recursively if necessary), if it does not exist.\n   Must be a full pathname, usually is just \u003ccode\u003e$INSTDIR\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e setOutPath \"$INSTDIR\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#setOutPath",
        "fct-type": "function",
        "title": "setOutPath"
      },
      "index": {
        "description": "Sets the output path OUTDIR and creates it recursively if necessary if it does not exist Must be full pathname usually is just INSTDIR setOutPath INSTDIR",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "setOutPath",
        "normalized": "Exp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "Out Path",
        "signature": "Exp FilePath-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:share",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e language is call-by-name, meaning you must use share to avoid evaluating an exression\n   multiple times. Using \u003ccode\u003e\u003ca\u003eshare\u003c/a\u003e\u003c/code\u003e, if the expression has any side effects\n   they will be run immediately, but not on subsequent uses. When defining functions operating on\n   \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e, if you use the same input expression twice, you should share it. For example:\n\u003c/p\u003e\u003cpre\u003e\n strPalindrom x = \u003ccode\u003e\u003ca\u003eshare\u003c/a\u003e\u003c/code\u003e x $ \\x -\u003e x \u003ccode\u003e\u003ca\u003e%==\u003c/a\u003e\u003c/code\u003e strReverse x\n\u003c/pre\u003e\u003cp\u003eIf the expression was not shared, and \u003ccode\u003ex\u003c/code\u003e read from a file, then the file would be read twice.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp t -\u003e (Exp t -\u003e Action a) -\u003e Action a",
        "fct-source": "src/Development-NSIS-Sugar.html#share",
        "fct-type": "function",
        "title": "share"
      },
      "index": {
        "description": "The Exp language is call-by-name meaning you must use share to avoid evaluating an exression multiple times Using share if the expression has any side effects they will be run immediately but not on subsequent uses When defining functions operating on Exp if you use the same input expression twice you should share it For example strPalindrom share strReverse If the expression was not shared and read from file then the file would be read twice",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "share",
        "normalized": "Exp a-\u003e(Exp a-\u003eAction b)-\u003eAction b",
        "package": "nsis",
        "partial": "",
        "signature": "Exp t-\u003e(Exp t-\u003eAction a)-\u003eAction a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:showInstDetails",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Visibility -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#showInstDetails",
        "fct-type": "function",
        "title": "showInstDetails"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "showInstDetails",
        "normalized": "Visibility-\u003eAction()",
        "package": "nsis",
        "partial": "Inst Details",
        "signature": "Visibility-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:showUninstDetails",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Visibility -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#showUninstDetails",
        "fct-type": "function",
        "title": "showUninstDetails"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "showUninstDetails",
        "normalized": "Visibility-\u003eAction()",
        "package": "nsis",
        "partial": "Uninst Details",
        "signature": "Visibility-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:sleep",
      "description": {
        "fct-descr": "\u003cp\u003eSleep time in milliseconds\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Int -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#sleep",
        "fct-type": "function",
        "title": "sleep"
      },
      "index": {
        "description": "Sleep time in milliseconds",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "sleep",
        "normalized": "Exp Int-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Int-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:str",
      "description": {
        "fct-descr": "\u003cp\u003eLift a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e into an \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "String -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#str",
        "fct-type": "function",
        "title": "str"
      },
      "index": {
        "description": "Lift String into an Exp",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "str",
        "normalized": "String-\u003eExp String",
        "package": "nsis",
        "partial": "",
        "signature": "String-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:strConcat",
      "description": {
        "fct-descr": "\u003cp\u003ePerform string concatenation on a list of expressions.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "[Exp String] -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#strConcat",
        "fct-type": "function",
        "title": "strConcat"
      },
      "index": {
        "description": "Perform string concatenation on list of expressions",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "strConcat",
        "normalized": "[Exp String]-\u003eExp String",
        "package": "nsis",
        "partial": "Concat",
        "signature": "[Exp String]-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:strDrop",
      "description": {
        "fct-descr": "\u003cp\u003eDrop the first \u003ccode\u003en\u003c/code\u003e characters from a string, \u003ccode\u003estrDrop 2 \"test\" \u003ccode\u003e\u003ca\u003e%==\u003c/a\u003e\u003c/code\u003e \"st\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Int -\u003e Exp String -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#strDrop",
        "fct-type": "function",
        "title": "strDrop"
      },
      "index": {
        "description": "Drop the first characters from string strDrop test st",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "strDrop",
        "normalized": "Exp Int-\u003eExp String-\u003eExp String",
        "package": "nsis",
        "partial": "Drop",
        "signature": "Exp Int-\u003eExp String-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:strIsPrefixOf",
      "description": {
        "fct-descr": "\u003cp\u003eIs the first string a prefix of the second.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Exp String -\u003e Exp Bool",
        "fct-source": "src/Development-NSIS-Library.html#strIsPrefixOf",
        "fct-type": "function",
        "title": "strIsPrefixOf"
      },
      "index": {
        "description": "Is the first string prefix of the second",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "strIsPrefixOf",
        "normalized": "Exp String-\u003eExp String-\u003eExp Bool",
        "package": "nsis",
        "partial": "Is Prefix Of",
        "signature": "Exp String-\u003eExp String-\u003eExp Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:strLength",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the length of a string, \u003ccode\u003estrLength \"test\" \u003ccode\u003e\u003ca\u003e%==\u003c/a\u003e\u003c/code\u003e 4\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Exp Int",
        "fct-source": "src/Development-NSIS-Sugar.html#strLength",
        "fct-type": "function",
        "title": "strLength"
      },
      "index": {
        "description": "Return the length of string strLength test",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "strLength",
        "normalized": "Exp String-\u003eExp Int",
        "package": "nsis",
        "partial": "Length",
        "signature": "Exp String-\u003eExp Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:strRead",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, any errors are silently ignored.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Exp Int",
        "fct-source": "src/Development-NSIS-Sugar.html#strRead",
        "fct-type": "function",
        "title": "strRead"
      },
      "index": {
        "description": "Convert String to an Int any errors are silently ignored",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "strRead",
        "normalized": "Exp String-\u003eExp Int",
        "package": "nsis",
        "partial": "Read",
        "signature": "Exp String-\u003eExp Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:strReplace",
      "description": {
        "fct-descr": "\u003cp\u003eReplace one string with another string, in a target string. As some examples:\n\u003c/p\u003e\u003cpre\u003e strReplace \"t\" \"XX\" \"test\" %== \"XXesXX\"\n strReplace \"ell\" \"\" \"hello world\" %== \"ho world\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp String -\u003e Exp String -\u003e Exp String -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Library.html#strReplace",
        "fct-type": "function",
        "title": "strReplace"
      },
      "index": {
        "description": "Replace one string with another string in target string As some examples strReplace XX test XXesXX strReplace ell hello world ho world",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "strReplace",
        "normalized": "Exp String-\u003eExp String-\u003eExp String-\u003eExp String",
        "package": "nsis",
        "partial": "Replace",
        "signature": "Exp String-\u003eExp String-\u003eExp String-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:strShow",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e by showing it.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Int -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#strShow",
        "fct-type": "function",
        "title": "strShow"
      },
      "index": {
        "description": "Convert an Int to String by showing it",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "strShow",
        "normalized": "Exp Int-\u003eExp String",
        "package": "nsis",
        "partial": "Show",
        "signature": "Exp Int-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:strTake",
      "description": {
        "fct-descr": "\u003cp\u003eTake the first \u003ccode\u003en\u003c/code\u003e characters from a string, \u003ccode\u003estrTake 2 \"test\" \u003ccode\u003e\u003ca\u003e%==\u003c/a\u003e\u003c/code\u003e \"te\"\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Int -\u003e Exp String -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Sugar.html#strTake",
        "fct-type": "function",
        "title": "strTake"
      },
      "index": {
        "description": "Take the first characters from string strTake test te",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "strTake",
        "normalized": "Exp Int-\u003eExp String-\u003eExp String",
        "package": "nsis",
        "partial": "Take",
        "signature": "Exp Int-\u003eExp String-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:strUnlines",
      "description": {
        "fct-descr": "\u003cp\u003eJoin together a list of strings with \u003ccode\u003e\\r\\n\u003c/code\u003e after each line. Note that unlike standard \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e,\n   we use the Windows convention line separator.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "[Exp String] -\u003e Exp String",
        "fct-source": "src/Development-NSIS-Library.html#strUnlines",
        "fct-type": "function",
        "title": "strUnlines"
      },
      "index": {
        "description": "Join together list of strings with after each line Note that unlike standard unlines we use the Windows convention line separator",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "strUnlines",
        "normalized": "[Exp String]-\u003eExp String",
        "package": "nsis",
        "partial": "Unlines",
        "signature": "[Exp String]-\u003eExp String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:true",
      "description": {
        "fct-descr": "\u003cp\u003eBoolean constants corresponding to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Bool",
        "fct-source": "src/Development-NSIS-Sugar.html#true",
        "fct-type": "function",
        "title": "true"
      },
      "index": {
        "description": "Boolean constants corresponding to True and False",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "true",
        "normalized": "",
        "package": "nsis",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:uninstall",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#uninstall",
        "fct-type": "function",
        "title": "uninstall"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "uninstall",
        "normalized": "Action()-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Action()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:uninstallIcon",
      "description": {
        "fct-descr": "\u003cp\u003eSet the icon used for the installer/uninstaller.\n\u003c/p\u003e\u003cpre\u003e installIcon \"$NSISDIR/Contrib/Graphics/Icons/modern-install.ico\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#uninstallIcon",
        "fct-type": "function",
        "title": "uninstallIcon"
      },
      "index": {
        "description": "Set the icon used for the installer uninstaller installIcon NSISDIR Contrib Graphics Icons modern-install.ico",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "uninstallIcon",
        "normalized": "Exp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "Icon",
        "signature": "Exp FilePath-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:unpage",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Page -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#unpage",
        "fct-type": "function",
        "title": "unpage"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "unpage",
        "normalized": "Page-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Page-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:while",
      "description": {
        "fct-descr": "\u003cp\u003eA while loop, run the second argument while the first argument is true.\n   The action is run in a \u003ccode\u003e\u003ca\u003escope\u003c/a\u003e\u003c/code\u003e. See also \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n x \u003c- \u003ccode\u003e\u003ca\u003emutable_\u003c/a\u003e\u003c/code\u003e x\n \u003ccode\u003e\u003ca\u003ewhile\u003c/a\u003e\u003c/code\u003e (x \u003ccode\u003e\u003ca\u003e%\u003c\u003c/a\u003e\u003c/code\u003e 10) $ do\n    x \u003ccode\u003e\u003ca\u003e@=\u003c/a\u003e\u003c/code\u003e x \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e 1\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp Bool -\u003e Action () -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#while",
        "fct-type": "function",
        "title": "while"
      },
      "index": {
        "description": "while loop run the second argument while the first argument is true The action is run in scope See also loop mutable while do",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "while",
        "normalized": "Exp Bool-\u003eAction()-\u003eAction()",
        "package": "nsis",
        "partial": "",
        "signature": "Exp Bool-\u003eAction()-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:withFile-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWith a \u003ccode\u003e\u003ca\u003efileOpen\u003c/a\u003e\u003c/code\u003e perform some action, then automatically call \u003ccode\u003e\u003ca\u003efileClose\u003c/a\u003e\u003c/code\u003e.\n   If the action argument jumps out of the section then the \u003ccode\u003e\u003ca\u003efileClose\u003c/a\u003e\u003c/code\u003e call will be missed.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "FileMode -\u003e Exp FilePath -\u003e (Exp FileHandle -\u003e Action ()) -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Library.html#withFile%27",
        "fct-type": "function",
        "title": "withFile'"
      },
      "index": {
        "description": "With fileOpen perform some action then automatically call fileClose If the action argument jumps out of the section then the fileClose call will be missed",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "withFile'",
        "normalized": "FileMode-\u003eExp FilePath-\u003e(Exp FileHandle-\u003eAction())-\u003eAction()",
        "package": "nsis",
        "partial": "File'",
        "signature": "FileMode-\u003eExp FilePath-\u003e(Exp FileHandle-\u003eAction())-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:writeFile-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a file, like \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Library.html#writeFile%27",
        "fct-type": "function",
        "title": "writeFile'"
      },
      "index": {
        "description": "Write file like writeFile",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "writeFile'",
        "normalized": "Exp FilePath-\u003eExp String-\u003eAction()",
        "package": "nsis",
        "partial": "File'",
        "signature": "Exp FilePath-\u003eExp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:writeFileLines",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a file comprising of a set of lines.\n\u003c/p\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e [Exp String] -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Library.html#writeFileLines",
        "fct-type": "function",
        "title": "writeFileLines"
      },
      "index": {
        "description": "Write file comprising of set of lines",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "writeFileLines",
        "normalized": "Exp FilePath-\u003e[Exp String]-\u003eAction()",
        "package": "nsis",
        "partial": "File Lines",
        "signature": "Exp FilePath-\u003e[Exp String]-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:writeRegDWORD",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY -\u003e Exp String -\u003e Exp String -\u003e Exp Int -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#writeRegDWORD",
        "fct-type": "function",
        "title": "writeRegDWORD"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "writeRegDWORD",
        "normalized": "HKEY-\u003eExp String-\u003eExp String-\u003eExp Int-\u003eAction()",
        "package": "nsis",
        "partial": "Reg DWORD",
        "signature": "HKEY-\u003eExp String-\u003eExp String-\u003eExp Int-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:writeRegStr",
      "description": {
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "HKEY -\u003e Exp String -\u003e Exp String -\u003e Exp String -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#writeRegStr",
        "fct-type": "function",
        "title": "writeRegStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "writeRegStr",
        "normalized": "HKEY-\u003eExp String-\u003eExp String-\u003eExp String-\u003eAction()",
        "package": "nsis",
        "partial": "Reg Str",
        "signature": "HKEY-\u003eExp String-\u003eExp String-\u003eExp String-\u003eAction()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/nsis/docs/Development-NSIS.html#v:writeUninstaller",
      "description": {
        "fct-descr": "\u003cp\u003eWrites the uninstaller to the filename (and optionally path) specified.\n   Only valid from within an install section, and requires that you have an \u003ccode\u003e\u003ca\u003euninstall\u003c/a\u003e\u003c/code\u003e section in your script.\n   You can call this one or more times to write out one or more copies of the uninstaller.\n\u003c/p\u003e\u003cpre\u003e writeUninstaller \"$INSTDIR/uninstaller.exe\"\n\u003c/pre\u003e",
        "fct-module": "Development.NSIS",
        "fct-package": "nsis",
        "fct-signature": "Exp FilePath -\u003e Action ()",
        "fct-source": "src/Development-NSIS-Sugar.html#writeUninstaller",
        "fct-type": "function",
        "title": "writeUninstaller"
      },
      "index": {
        "description": "Writes the uninstaller to the filename and optionally path specified Only valid from within an install section and requires that you have an uninstall section in your script You can call this one or more times to write out one or more copies of the uninstaller writeUninstaller INSTDIR uninstaller.exe",
        "hierarchy": "Development NSIS",
        "module": "Development.NSIS",
        "name": "writeUninstaller",
        "normalized": "Exp FilePath-\u003eAction()",
        "package": "nsis",
        "partial": "Uninstaller",
        "signature": "Exp FilePath-\u003eAction()"
      }
    }
  }
]