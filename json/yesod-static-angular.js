[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-static-angular/docs/Yesod-EmbeddedStatic-AngularJavascript.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntegrate an AngularJS application written in Javascript into the static subsite.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003eAngularJS\u003c/a\u003e is a javascript web framework for enhancing HTML to provide\n dynamic web applications. This module integrates an AngularJS application written in pure\n javascript into a Yesod application.  (As of January 2014, there is some experiemental\n development work on Fay bindings to AngularJS, but unfortunately it is not currently usable.)\n\u003c/p\u003e\u003cp\u003eAn AngularJS application consists of several pieces:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Javascript code consisting of controllers, directives, and services attached to Angular\n modules.  The goal of this javascript is to produce a domain specific language extending HTML.\n \u003ccode\u003e\u003ca\u003eembedNgModule\u003c/a\u003e\u003c/code\u003e uses the static subsite to serve this javascript code, serving a minimized\n and compressed file during production and serving individual files during development.\n\u003c/li\u003e\u003cli\u003e Directive Templates. In Angular, directives should be the only components which manipulate the\n DOM.  This can happen in the directive javascript code or through a directive HTML template.\n \u003ccode\u003e\u003ca\u003eembedNgModule\u003c/a\u003e\u003c/code\u003e supports templates written in Hamlet, converting the Hamlet to HTML at compile\n time before embedding the HTML into the generated javascript.\n\u003c/li\u003e\u003cli\u003e The View.  In Angular, the view is written in the DSL extending HTML.  Normal Yesod\n Handlers and Widgets work great for the view (so nothing needed from this module).  Note that your\n Yesod Widgets will not have any julius or attached javascript code, the javascript is entirely\n managed by \u003ccode\u003e\u003ca\u003eembedNgModule\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Testing.  Angular makes testing (both unit and end-to-end) easy.  For unit and mid-level\n testing, the normal Angular test runner \u003ca\u003ekarma\u003c/a\u003e is the best.\n \u003ccode\u003e\u003ca\u003ehamletTestTemplate\u003c/a\u003e\u003c/code\u003e assists with integrating Hamlet directive templates into karma.\n For end2end testing, the \u003ca\u003eTest.WebDriver.Commands.Angular\u003c/a\u003e module in the\n \u003ca\u003ewebdriver-angular\u003c/a\u003e package works well.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThere is an\n \u003ca\u003eexample\u003c/a\u003e\n in the source code which shows an application, unit testing with karma, and end2end\n testing with webdriver.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yesod.EmbeddedStatic.AngularJavascript",
        "fct-package": "yesod-static-angular",
        "fct-signature": "module",
        "fct-source": "src/Yesod-EmbeddedStatic-AngularJavascript.html",
        "fct-type": "module",
        "title": "AngularJavascript"
      },
      "index": {
        "description": "Integrate an AngularJS application written in Javascript into the static subsite AngularJS is javascript web framework for enhancing HTML to provide dynamic web applications This module integrates an AngularJS application written in pure javascript into Yesod application As of January there is some experiemental development work on Fay bindings to AngularJS but unfortunately it is not currently usable An AngularJS application consists of several pieces Javascript code consisting of controllers directives and services attached to Angular modules The goal of this javascript is to produce domain specific language extending HTML embedNgModule uses the static subsite to serve this javascript code serving minimized and compressed file during production and serving individual files during development Directive Templates In Angular directives should be the only components which manipulate the DOM This can happen in the directive javascript code or through directive HTML template embedNgModule supports templates written in Hamlet converting the Hamlet to HTML at compile time before embedding the HTML into the generated javascript The View In Angular the view is written in the DSL extending HTML Normal Yesod Handlers and Widgets work great for the view so nothing needed from this module Note that your Yesod Widgets will not have any julius or attached javascript code the javascript is entirely managed by embedNgModule Testing Angular makes testing both unit and end-to-end easy For unit and mid-level testing the normal Angular test runner karma is the best hamletTestTemplate assists with integrating Hamlet directive templates into karma For end2end testing the Test.WebDriver.Commands.Angular module in the webdriver-angular package works well There is an example in the source code which shows an application unit testing with karma and end2end testing with webdriver",
        "hierarchy": "Yesod EmbeddedStatic AngularJavascript",
        "module": "Yesod.EmbeddedStatic.AngularJavascript",
        "name": "AngularJavascript",
        "normalized": "",
        "package": "yesod-static-angular",
        "partial": "Angular Javascript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-static-angular/docs/Yesod-EmbeddedStatic-AngularJavascript.html#v:directiveTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eWidgetT\u003c/a\u003e\u003c/code\u003e site IO ()\u003c/code\u003e which contains all the directive templates written in Hamlet\n from the passed in directory.  This is only needed if you use\n \u003ccode\u003e\u003ca\u003eembedNgModuleWithoutTemplates\u003c/a\u003e\u003c/code\u003e because your directive templates use variable/url\n interpolation.  The template will be inside a \u003ccode\u003e\u003cscript type=\"text/ng-template\"\n id=\"someid\"\u003e\u003c/code\u003e, where the ID is found by parsing the javascript code for \u003ccode\u003etemplateUrl\u003c/code\u003e. This\n widget must be inside the tag which has the \u003ccode\u003eng-app\u003c/code\u003e attribute.\n\u003c/p\u003e",
        "fct-module": "Yesod.EmbeddedStatic.AngularJavascript",
        "fct-package": "yesod-static-angular",
        "fct-signature": "FilePath -\u003e ExpQ",
        "fct-source": "src/Yesod-EmbeddedStatic-AngularJavascript.html#directiveTemplates",
        "fct-type": "function",
        "title": "directiveTemplates"
      },
      "index": {
        "description": "Create WidgetT site IO which contains all the directive templates written in Hamlet from the passed in directory This is only needed if you use embedNgModuleWithoutTemplates because your directive templates use variable url interpolation The template will be inside script type text ng-template id someid where the ID is found by parsing the javascript code for templateUrl This widget must be inside the tag which has the ng-app attribute",
        "hierarchy": "Yesod EmbeddedStatic AngularJavascript",
        "module": "Yesod.EmbeddedStatic.AngularJavascript",
        "name": "directiveTemplates",
        "normalized": "FilePath-\u003eExpQ",
        "package": "yesod-static-angular",
        "partial": "Templates",
        "signature": "FilePath-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-static-angular/docs/Yesod-EmbeddedStatic-AngularJavascript.html#v:directiveTemplatesWithSettings",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edirectiveTemplates\u003c/a\u003e\u003c/code\u003e but allows you to specify the hamlet settings.\n\u003c/p\u003e",
        "fct-module": "Yesod.EmbeddedStatic.AngularJavascript",
        "fct-package": "yesod-static-angular",
        "fct-signature": "HamletSettings -\u003e FilePath -\u003e ExpQ",
        "fct-source": "src/Yesod-EmbeddedStatic-AngularJavascript.html#directiveTemplatesWithSettings",
        "fct-type": "function",
        "title": "directiveTemplatesWithSettings"
      },
      "index": {
        "description": "Same as directiveTemplates but allows you to specify the hamlet settings",
        "hierarchy": "Yesod EmbeddedStatic AngularJavascript",
        "module": "Yesod.EmbeddedStatic.AngularJavascript",
        "name": "directiveTemplatesWithSettings",
        "normalized": "HamletSettings-\u003eFilePath-\u003eExpQ",
        "package": "yesod-static-angular",
        "partial": "Templates With Settings",
        "signature": "HamletSettings-\u003eFilePath-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-static-angular/docs/Yesod-EmbeddedStatic-AngularJavascript.html#v:directiveWidget",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a widget in a \u003ccode\u003e\u003cscript type=\"text/ng-template\" id=\"someid\"\u003e\u003c/code\u003e block.\n\u003c/p\u003e",
        "fct-module": "Yesod.EmbeddedStatic.AngularJavascript",
        "fct-package": "yesod-static-angular",
        "fct-signature": "Text-\u003e WidgetT site IO ()-\u003e WidgetT site IO ()",
        "fct-type": "function",
        "title": "directiveWidget"
      },
      "index": {
        "description": "Wrap widget in script type text ng-template id someid block",
        "hierarchy": "Yesod EmbeddedStatic AngularJavascript",
        "module": "Yesod.EmbeddedStatic.AngularJavascript",
        "name": "directiveWidget",
        "normalized": "Text-\u003eWidgetT a IO()-\u003eWidgetT a IO()",
        "package": "yesod-static-angular",
        "partial": "Widget",
        "signature": "Text-\u003eWidgetT site IO()-\u003eWidgetT site IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-static-angular/docs/Yesod-EmbeddedStatic-AngularJavascript.html#v:embedNgModule",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed the javascript and directive templates from a single directory into the static subsite as\n a single Angular module file.  For this to work, the directive templates cannot use any hamlet\n variable interpolation.\n\u003c/p\u003e\u003cp\u003eDuring development, each \u003ccode\u003e.js\u003c/code\u003e file is served separately (with some code to define the \u003ccode\u003emodule\u003c/code\u003e\n variable) and at the location where the combined file would appear during production, a small\n script which just loads all the \u003ccode\u003e.js\u003c/code\u003e files from the directory is served.  This makes debugging\n much easier.\n\u003c/p\u003e\u003cp\u003eThis generator produces one variable definition of type \u003ccode\u003eRoute EmbeddedStatic\u003c/code\u003e which is named by\n passing the location through \u003ccode\u003e\u003ca\u003epathToName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.EmbeddedStatic.AngularJavascript",
        "fct-package": "yesod-static-angular",
        "fct-signature": "String-\u003e Location-\u003e FilePath-\u003e (ByteString -\u003e IO ByteString)-\u003e Generator",
        "fct-type": "function",
        "title": "embedNgModule"
      },
      "index": {
        "description": "Embed the javascript and directive templates from single directory into the static subsite as single Angular module file For this to work the directive templates cannot use any hamlet variable interpolation During development each js file is served separately with some code to define the module variable and at the location where the combined file would appear during production small script which just loads all the js files from the directory is served This makes debugging much easier This generator produces one variable definition of type Route EmbeddedStatic which is named by passing the location through pathToName",
        "hierarchy": "Yesod EmbeddedStatic AngularJavascript",
        "module": "Yesod.EmbeddedStatic.AngularJavascript",
        "name": "embedNgModule",
        "normalized": "String-\u003eLocation-\u003eFilePath-\u003e(ByteString-\u003eIO ByteString)-\u003eGenerator",
        "package": "yesod-static-angular",
        "partial": "Ng Module",
        "signature": "String-\u003eLocation-\u003eFilePath-\u003e(ByteString-\u003eIO ByteString)-\u003eGenerator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-static-angular/docs/Yesod-EmbeddedStatic-AngularJavascript.html#v:embedNgModuleWithoutTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eembedNgModule\u003c/a\u003e\u003c/code\u003e but the directive templates are not included.  Use this if your\n directive templates require variable/type safe route interpolation.  Your directive templates\n should then instead be inserted into a \u003ccode\u003eWidgetT site IO ()\u003c/code\u003e using \u003ccode\u003e\u003ca\u003edirectiveTemplates\u003c/a\u003e\u003c/code\u003e and then\n embedded into the final page.\n\u003c/p\u003e",
        "fct-module": "Yesod.EmbeddedStatic.AngularJavascript",
        "fct-package": "yesod-static-angular",
        "fct-signature": "String-\u003e Location-\u003e FilePath-\u003e (ByteString -\u003e IO ByteString)-\u003e Generator",
        "fct-type": "function",
        "title": "embedNgModuleWithoutTemplates"
      },
      "index": {
        "description": "Same as embedNgModule but the directive templates are not included Use this if your directive templates require variable type safe route interpolation Your directive templates should then instead be inserted into WidgetT site IO using directiveTemplates and then embedded into the final page",
        "hierarchy": "Yesod EmbeddedStatic AngularJavascript",
        "module": "Yesod.EmbeddedStatic.AngularJavascript",
        "name": "embedNgModuleWithoutTemplates",
        "normalized": "String-\u003eLocation-\u003eFilePath-\u003e(ByteString-\u003eIO ByteString)-\u003eGenerator",
        "package": "yesod-static-angular",
        "partial": "Ng Module Without Templates",
        "signature": "String-\u003eLocation-\u003eFilePath-\u003e(ByteString-\u003eIO ByteString)-\u003eGenerator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-static-angular/docs/Yesod-EmbeddedStatic-AngularJavascript.html#v:embedNgModules",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed multiple angular modules into the static subsite.\n\u003c/p\u003e\u003cp\u003eAll subdirectories within the given directory are assumed to be angular modules, and each\n subdirectory is embedded by calling \u003ccode\u003e\u003ca\u003eembedNgModule\u003c/a\u003e\u003c/code\u003e on it.  The subdirectory name is used\n for the module name.  The location for the module will be the location given to this generator\n combined with the subdirectory name and then \u003ccode\u003e.js\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Yesod.EmbeddedStatic.AngularJavascript",
        "fct-package": "yesod-static-angular",
        "fct-signature": "Location-\u003e FilePath-\u003e (ByteString -\u003e IO ByteString)-\u003e Generator",
        "fct-type": "function",
        "title": "embedNgModules"
      },
      "index": {
        "description": "Embed multiple angular modules into the static subsite All subdirectories within the given directory are assumed to be angular modules and each subdirectory is embedded by calling embedNgModule on it The subdirectory name is used for the module name The location for the module will be the location given to this generator combined with the subdirectory name and then js",
        "hierarchy": "Yesod EmbeddedStatic AngularJavascript",
        "module": "Yesod.EmbeddedStatic.AngularJavascript",
        "name": "embedNgModules",
        "normalized": "Location-\u003eFilePath-\u003e(ByteString-\u003eIO ByteString)-\u003eGenerator",
        "package": "yesod-static-angular",
        "partial": "Ng Modules",
        "signature": "Location-\u003eFilePath-\u003e(ByteString-\u003eIO ByteString)-\u003eGenerator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-static-angular/docs/Yesod-EmbeddedStatic-AngularJavascript.html#v:embedNgModulesWithoutTemplates",
      "description": {
        "fct-descr": "\u003cp\u003eEmbed multiple angular modules without templates into the static subsite.\n All subdirectories within the given directory are assumed to be angular modules, and each\n subdirectory is embedded by calling \u003ccode\u003e\u003ca\u003eembedNgModuleWithoutTemplates\u003c/a\u003e\u003c/code\u003e on it.\n\u003c/p\u003e",
        "fct-module": "Yesod.EmbeddedStatic.AngularJavascript",
        "fct-package": "yesod-static-angular",
        "fct-signature": "Location-\u003e FilePath-\u003e (ByteString -\u003e IO ByteString)-\u003e Generator",
        "fct-type": "function",
        "title": "embedNgModulesWithoutTemplates"
      },
      "index": {
        "description": "Embed multiple angular modules without templates into the static subsite All subdirectories within the given directory are assumed to be angular modules and each subdirectory is embedded by calling embedNgModuleWithoutTemplates on it",
        "hierarchy": "Yesod EmbeddedStatic AngularJavascript",
        "module": "Yesod.EmbeddedStatic.AngularJavascript",
        "name": "embedNgModulesWithoutTemplates",
        "normalized": "Location-\u003eFilePath-\u003e(ByteString-\u003eIO ByteString)-\u003eGenerator",
        "package": "yesod-static-angular",
        "partial": "Ng Modules Without Templates",
        "signature": "Location-\u003eFilePath-\u003e(ByteString-\u003eIO ByteString)-\u003eGenerator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/yesod-static-angular/docs/Yesod-EmbeddedStatic-AngularJavascript.html#v:hamletTestTemplate",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a hamlet file to javascript for unit testing.\n\u003c/p\u003e\u003cp\u003eWhen unit testing the Angular code, the javascript is executed directly (without any processing\n by \u003ccode\u003e\u003ca\u003eembedNgModule\u003c/a\u003e\u003c/code\u003e).  But for the directives to work, the Hamlet templates must still be\n converted to javascript which inserts the template into the Angular \u003ccode\u003e$templateCache\u003c/code\u003e.  This\n TH splice takes a path to a hamlet file and produces a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e which contains this\n javascript.  Before unit testing the javascript code, this TH splice must be run on every\n directive hamlet template.\n\u003c/p\u003e\u003cp\u003eIf you use \u003ca\u003ekarma\u003c/a\u003e, the \n \u003ca\u003ekarma-ng-hamlet2js-preprocessor\u003c/a\u003e\n does this automatically by using \u003ccode\u003erunghc\u003c/code\u003e to run a small Haskell script which calls\n \u003ccode\u003e\u003ca\u003ehamletTestTemplate\u003c/a\u003e\u003c/code\u003e.  The example application uses this karma preprocessor.\n\u003c/p\u003e",
        "fct-module": "Yesod.EmbeddedStatic.AngularJavascript",
        "fct-package": "yesod-static-angular",
        "fct-signature": "FilePath -\u003e ExpQ",
        "fct-source": "src/Yesod-EmbeddedStatic-AngularJavascript.html#hamletTestTemplate",
        "fct-type": "function",
        "title": "hamletTestTemplate"
      },
      "index": {
        "description": "Convert hamlet file to javascript for unit testing When unit testing the Angular code the javascript is executed directly without any processing by embedNgModule But for the directives to work the Hamlet templates must still be converted to javascript which inserts the template into the Angular templateCache This TH splice takes path to hamlet file and produces ByteString which contains this javascript Before unit testing the javascript code this TH splice must be run on every directive hamlet template If you use karma the karma-ng-hamlet2js-preprocessor does this automatically by using runghc to run small Haskell script which calls hamletTestTemplate The example application uses this karma preprocessor",
        "hierarchy": "Yesod EmbeddedStatic AngularJavascript",
        "module": "Yesod.EmbeddedStatic.AngularJavascript",
        "name": "hamletTestTemplate",
        "normalized": "FilePath-\u003eExpQ",
        "package": "yesod-static-angular",
        "partial": "Test Template",
        "signature": "FilePath-\u003eExpQ"
      }
    }
  }
]