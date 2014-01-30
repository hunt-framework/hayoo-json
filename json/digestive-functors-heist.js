[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a compiled Heist frontend for the digestive-functors\n library.\n\u003c/p\u003e\u003cp\u003eDisclaimer: this documentation requires very basic familiarity with\n digestive-functors. You might want to take a quick look at this tutorial\n first:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttps://github.com/jaspervdj/digestive-functors/blob/master/examples/tutorial.lhs\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module exports the \u003ccode\u003e\u003ca\u003eformSplice\u003c/a\u003e\u003c/code\u003e function, and most users will not\n require anything else.\n\u003c/p\u003e\u003cp\u003eThese splices are used to create HTML for different form elements. This way,\n the developer doesn't have to care about setting e.g. the previous values in\n a text field when something goes wrong.\n\u003c/p\u003e\u003cp\u003eFor documentation on the different splices, see the different functions\n exported by this module. All splices have the same name as given in\n \u003ccode\u003e\u003ca\u003edigestiveSplices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou can give arbitrary attributes to most of the elements (i.e. where it\n makes sense). This means you can do e.g.:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputTextArea ref=\"description\" cols=\"20\" rows=\"3\" /\u003e\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "module",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html",
        "fct-type": "module",
        "title": "Compiled"
      },
      "index": {
        "description": "This module provides compiled Heist frontend for the digestive-functors library Disclaimer this documentation requires very basic familiarity with digestive-functors You might want to take quick look at this tutorial first https github.com jaspervdj digestive-functors blob master examples tutorial.lhs This module exports the formSplice function and most users will not require anything else These splices are used to create HTML for different form elements This way the developer doesn have to care about setting e.g the previous values in text field when something goes wrong For documentation on the different splices see the different functions exported by this module All splices have the same name as given in digestiveSplices You can give arbitrary attributes to most of the elements i.e where it makes sense This means you can do e.g dfInputTextArea ref description cols rows",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "Compiled",
        "normalized": "",
        "package": "digestive-functors-heist",
        "partial": "Compiled",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfChildErrorList",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay the list of errors for a certain form and all forms below it. E.g.,\n if there is a subform called \u003ccode\u003e\"user\"\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e \u003cdfChildErrorList ref=\"user\" /\u003e\n\u003c/pre\u003e\u003cp\u003eOr display \u003cem\u003eall\u003c/em\u003e errors for the form:\n\u003c/p\u003e\u003cpre\u003e \u003cdfChildErrorList ref=\"\" /\u003e\n\u003c/pre\u003e\u003cp\u003eWhich is more conveniently written as:\n\u003c/p\u003e\u003cpre\u003e \u003cdfChildErrorList /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View Text) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfChildErrorList",
        "fct-type": "function",
        "title": "dfChildErrorList"
      },
      "index": {
        "description": "Display the list of errors for certain form and all forms below it E.g if there is subform called user dfChildErrorList ref user Or display all errors for the form dfChildErrorList ref Which is more conveniently written as dfChildErrorList",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfChildErrorList",
        "normalized": "RuntimeSplice a(View Text)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Child Error List",
        "signature": "RuntimeSplice m(View Text)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfErrorList",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay the list of errors for a certain field. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfErrorList ref=\"user.name\" /\u003e\n \u003cdfInputText ref=\"user.name\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View Text) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfErrorList",
        "fct-type": "function",
        "title": "dfErrorList"
      },
      "index": {
        "description": "Display the list of errors for certain field Example dfErrorList ref user.name dfInputText ref user.name",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfErrorList",
        "normalized": "RuntimeSplice a(View Text)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Error List",
        "signature": "RuntimeSplice m(View Text)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfIfChildErrors",
      "description": {
        "fct-descr": "\u003cp\u003eRender some content only if there are any errors. This is useful for markup\n purposes.\n\u003c/p\u003e\u003cpre\u003e \u003cdfIfChildErrors ref=\"user\"\u003e\n     Content to be rendered if there are any errors...\n \u003c/dfIfChildErrors\u003e\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eref\u003c/code\u003e attribute can be omitted if you want to check the entire form.\n\u003c/p\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View v) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfIfChildErrors",
        "fct-type": "function",
        "title": "dfIfChildErrors"
      },
      "index": {
        "description": "Render some content only if there are any errors This is useful for markup purposes dfIfChildErrors ref user Content to be rendered if there are any errors dfIfChildErrors The ref attribute can be omitted if you want to check the entire form",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfIfChildErrors",
        "normalized": "RuntimeSplice a(View b)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "If Child Errors",
        "signature": "RuntimeSplice m(View v)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInput",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an input field with a supplied type. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInput type=\"date\" ref=\"date\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View v) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInput",
        "fct-type": "function",
        "title": "dfInput"
      },
      "index": {
        "description": "Generate an input field with supplied type Example dfInput type date ref date",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInput",
        "normalized": "RuntimeSplice a(View b)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input",
        "signature": "RuntimeSplice m(View v)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInputCheckbox",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a checkbox. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputCheckbox ref=\"user.married\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View v) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInputCheckbox",
        "fct-type": "function",
        "title": "dfInputCheckbox"
      },
      "index": {
        "description": "Generate checkbox Example dfInputCheckbox ref user.married",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInputCheckbox",
        "normalized": "RuntimeSplice a(View b)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Checkbox",
        "signature": "RuntimeSplice m(View v)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInputHidden",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a hidden input field. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputHidden ref=\"user.forgery\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View v) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInputHidden",
        "fct-type": "function",
        "title": "dfInputHidden"
      },
      "index": {
        "description": "Generate hidden input field Example dfInputHidden ref user.forgery",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInputHidden",
        "normalized": "RuntimeSplice a(View b)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Hidden",
        "signature": "RuntimeSplice m(View v)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInputList",
      "description": {
        "fct-descr": "\u003cp\u003eThis splice allows variable length lists.  It binds several attribute\n splices providing functionality for dynamically manipulating the list.  The\n following descriptions will use the example of a form named \"foo\" with a\n list subform named \"items\".\n\u003c/p\u003e\u003cp\u003eSplices:\n   dfListItem - This tag must surround the markup for a single list item.\n     It surrounds all of its children with a div with id \"foo.items\" and\n     class \"inputList\".\n\u003c/p\u003e\u003cp\u003eAttribute Splices:\n   itemAttrs - Attribute you should use on div, span, etc that surrounds all\n     the markup for a single list item.  This splice expands to an id of\n     \"foo.items.ix\" (where ix is the index of the current item) and a\n     class of \"inputListItem\".\n   addControl - Use this attribute on the tag you use to define a control\n     for adding elements to the list (usually a button or anchor).  It adds\n     an onclick attribute that calls a javascript function addInputListItem.\n   removeControl - Use this attribute on the control for removing individual\n     items.  It adds an onclick attribute that calls removeInputListItem.\n\u003c/p\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View Text) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInputList",
        "fct-type": "function",
        "title": "dfInputList"
      },
      "index": {
        "description": "This splice allows variable length lists It binds several attribute splices providing functionality for dynamically manipulating the list The following descriptions will use the example of form named foo with list subform named items Splices dfListItem This tag must surround the markup for single list item It surrounds all of its children with div with id foo.items and class inputList Attribute Splices itemAttrs Attribute you should use on div span etc that surrounds all the markup for single list item This splice expands to an id of foo.items.ix where ix is the index of the current item and class of inputListItem addControl Use this attribute on the tag you use to define control for adding elements to the list usually button or anchor It adds an onclick attribute that calls javascript function addInputListItem removeControl Use this attribute on the control for removing individual items It adds an onclick attribute that calls removeInputListItem",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInputList",
        "normalized": "RuntimeSplice a(View Text)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input List",
        "signature": "RuntimeSplice m(View Text)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInputPassword",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a password field. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputPassword ref=\"user.password\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View v) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInputPassword",
        "fct-type": "function",
        "title": "dfInputPassword"
      },
      "index": {
        "description": "Generate password field Example dfInputPassword ref user.password",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInputPassword",
        "normalized": "RuntimeSplice a(View b)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Password",
        "signature": "RuntimeSplice m(View v)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInputRadio",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a number of radio buttons. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputRadio ref=\"user.sex\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View Text) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInputRadio",
        "fct-type": "function",
        "title": "dfInputRadio"
      },
      "index": {
        "description": "Generate number of radio buttons Example dfInputRadio ref user.sex",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInputRadio",
        "normalized": "RuntimeSplice a(View Text)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Radio",
        "signature": "RuntimeSplice m(View Text)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInputSelect",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a select button (also known as a combo box). Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputSelect ref=\"user.sex\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View Text) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInputSelect",
        "fct-type": "function",
        "title": "dfInputSelect"
      },
      "index": {
        "description": "Generate select button also known as combo box Example dfInputSelect ref user.sex",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInputSelect",
        "normalized": "RuntimeSplice a(View Text)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Select",
        "signature": "RuntimeSplice m(View Text)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInputSelectGroup",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a select button (also known as a combo box). Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputSelectGroup ref=\"user.sex\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View Text) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInputSelectGroup",
        "fct-type": "function",
        "title": "dfInputSelectGroup"
      },
      "index": {
        "description": "Generate select button also known as combo box Example dfInputSelectGroup ref user.sex",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInputSelectGroup",
        "normalized": "RuntimeSplice a(View Text)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Select Group",
        "signature": "RuntimeSplice m(View Text)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInputSubmit",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a submit button. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputSubmit /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInputSubmit",
        "fct-type": "function",
        "title": "dfInputSubmit"
      },
      "index": {
        "description": "Generate submit button Example dfInputSubmit",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInputSubmit",
        "normalized": "",
        "package": "digestive-functors-heist",
        "partial": "Input Submit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInputText",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a text input field. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputText ref=\"user.name\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View v) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInputText",
        "fct-type": "function",
        "title": "dfInputText"
      },
      "index": {
        "description": "Generate text input field Example dfInputText ref user.name",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInputText",
        "normalized": "RuntimeSplice a(View b)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Text",
        "signature": "RuntimeSplice m(View v)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfInputTextArea",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a text area. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputTextArea ref=\"user.about\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View v) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfInputTextArea",
        "fct-type": "function",
        "title": "dfInputTextArea"
      },
      "index": {
        "description": "Generate text area Example dfInputTextArea ref user.about",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfInputTextArea",
        "normalized": "RuntimeSplice a(View b)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Text Area",
        "signature": "RuntimeSplice m(View v)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfLabel",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a label for a field. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfLabel ref=\"user.married\"\u003eMarried: \u003c/dfLabel\u003e\n \u003cdfInputCheckbox ref=\"user.married\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View v) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfLabel",
        "fct-type": "function",
        "title": "dfLabel"
      },
      "index": {
        "description": "Generate label for field Example dfLabel ref user.married Married dfLabel dfInputCheckbox ref user.married",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfLabel",
        "normalized": "RuntimeSplice a(View b)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Label",
        "signature": "RuntimeSplice m(View v)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:dfSubView",
      "description": {
        "fct-descr": "\u003cp\u003eThis splice allows reuse of templates by selecting some child of a form\n tree. While this may sound complicated, it's pretty straightforward and\n practical. Suppose we have:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputText ref=\"user.name\" /\u003e\n \u003cdfInputText ref=\"user.password\" /\u003e\n\n \u003cdfInputTextArea ref=\"comment.body\" /\u003e\n\u003c/pre\u003e\u003cp\u003eYou may want to abstract the \u003ccode\u003e\"user\"\u003c/code\u003e parts in some other template so you\n Don't Repeat Yourself (TM). If you create a template called \u003ccode\u003e\"user-form\"\u003c/code\u003e\n with the following contents:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputText ref=\"name\" /\u003e\n \u003cdfInputText ref=\"password\" /\u003e\n\u003c/pre\u003e\u003cp\u003eYou will be able to use:\n\u003c/p\u003e\u003cpre\u003e \u003cdfSubView ref=\"user\"\u003e\n     \u003capply template=\"user-form\" /\u003e\n \u003c/dfSubView\u003e\n\n \u003cdfInputTextArea ref=\"comment.body\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View Text) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#dfSubView",
        "fct-type": "function",
        "title": "dfSubView"
      },
      "index": {
        "description": "This splice allows reuse of templates by selecting some child of form tree While this may sound complicated it pretty straightforward and practical Suppose we have dfInputText ref user.name dfInputText ref user.password dfInputTextArea ref comment.body You may want to abstract the user parts in some other template so you Don Repeat Yourself TM If you create template called user-form with the following contents dfInputText ref name dfInputText ref password You will be able to use dfSubView ref user apply template user-form dfSubView dfInputTextArea ref comment.body",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "dfSubView",
        "normalized": "RuntimeSplice a(View Text)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Sub View",
        "signature": "RuntimeSplice m(View Text)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:digestiveSplices",
      "description": {
        "fct-descr": "\u003cp\u003eList of splices defined for forms.  For most uses the formSplice function\n will be fine and you won't need to use this directly.  But this is\n available if you need more customization.\n\u003c/p\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "RuntimeSplice m (View Text) -\u003e Splices (Splice m)",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#digestiveSplices",
        "fct-type": "function",
        "title": "digestiveSplices"
      },
      "index": {
        "description": "List of splices defined for forms For most uses the formSplice function will be fine and you won need to use this directly But this is available if you need more customization",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "digestiveSplices",
        "normalized": "RuntimeSplice a(View Text)-\u003eSplices(Splice a)",
        "package": "digestive-functors-heist",
        "partial": "Splices",
        "signature": "RuntimeSplice m(View Text)-\u003eSplices(Splice m)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:formSplice",
      "description": {
        "fct-descr": "\u003cp\u003eA compiled splice for a specific form.  You pass in a runtime action that\n gets the form's view and this function returns a splice that creates a form\n tag.  In your HeistConfig you might have a compiled splice like this:\n\u003c/p\u003e\u003cpre\u003e (\"customerForm\" ## formSplice mempty mempty\n                    (liftM fst $ runForm \"customer\" custForm))\n\u003c/pre\u003e\u003cp\u003eThen you can use the customerForm tag just like you would use the dfForm\n tag in interpreted templates anywhere you want to have a customer form.\n\u003c/p\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "Splices (Splice m)-\u003e Splices (AttrSplice m)-\u003e RuntimeSplice m (View Text)-\u003e Splice m",
        "fct-type": "function",
        "title": "formSplice"
      },
      "index": {
        "description": "compiled splice for specific form You pass in runtime action that gets the form view and this function returns splice that creates form tag In your HeistConfig you might have compiled splice like this customerForm formSplice mempty mempty liftM fst runForm customer custForm Then you can use the customerForm tag just like you would use the dfForm tag in interpreted templates anywhere you want to have customer form",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "formSplice",
        "normalized": "Splices(Splice a)-\u003eSplices(AttrSplice a)-\u003eRuntimeSplice a(View Text)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Splice",
        "signature": "Splices(Splice m)-\u003eSplices(AttrSplice m)-\u003eRuntimeSplice m(View Text)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist-Compiled.html#v:formSplice-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eformSplice\u003c/a\u003e\u003c/code\u003e except the supplied splices and attribute\n splices are applied to the resulting form view.\n\u003c/p\u003e",
        "fct-module": "Text.Digestive.Heist.Compiled",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "(RuntimeSplice m (View Text) -\u003e Splices (Splice m)) -\u003e (RuntimeSplice m (View Text) -\u003e Splices (AttrSplice m)) -\u003e RuntimeSplice m (View Text) -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist-Compiled.html#formSplice%27",
        "fct-type": "function",
        "title": "formSplice'"
      },
      "index": {
        "description": "Same as formSplice except the supplied splices and attribute splices are applied to the resulting form view",
        "hierarchy": "Text Digestive Heist Compiled",
        "module": "Text.Digestive.Heist.Compiled",
        "name": "formSplice'",
        "normalized": "(RuntimeSplice a(View Text)-\u003eSplices(Splice a))-\u003e(RuntimeSplice a(View Text)-\u003eSplices(AttrSplice a))-\u003eRuntimeSplice a(View Text)-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Splice'",
        "signature": "(RuntimeSplice m(View Text)-\u003eSplices(Splice m))-\u003e(RuntimeSplice m(View Text)-\u003eSplices(AttrSplice m))-\u003eRuntimeSplice m(View Text)-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a Heist frontend for the digestive-functors library.\n\u003c/p\u003e\u003cp\u003eDisclaimer: this documentation requires very basic familiarity with\n digestive-functors. You might want to take a quick look at this tutorial\n first:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttps://github.com/jaspervdj/digestive-functors/blob/master/examples/tutorial.lhs\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module exports the functions \u003ccode\u003e\u003ca\u003edigestiveSplices\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ebindDigestiveSplices\u003c/a\u003e\u003c/code\u003e, and most users will not require anything else.\n\u003c/p\u003e\u003cp\u003eThese splices are used to create HTML for different form elements. This way,\n the developer doesn't have to care about setting e.g. the previous values in\n a text field when something goes wrong.\n\u003c/p\u003e\u003cp\u003eFor documentation on the different splices, see the different functions\n exported by this module. All splices have the same name as given in\n \u003ccode\u003e\u003ca\u003edigestiveSplices\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou can give arbitrary attributes to most of the elements (i.e. where it\n makes sense). This means you can do e.g.:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputTextArea ref=\"description\" cols=\"20\" rows=\"3\" /\u003e\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "module",
        "fct-source": "src/Text-Digestive-Heist.html",
        "fct-type": "module",
        "title": "Heist"
      },
      "index": {
        "description": "This module provides Heist frontend for the digestive-functors library Disclaimer this documentation requires very basic familiarity with digestive-functors You might want to take quick look at this tutorial first https github.com jaspervdj digestive-functors blob master examples tutorial.lhs This module exports the functions digestiveSplices and bindDigestiveSplices and most users will not require anything else These splices are used to create HTML for different form elements This way the developer doesn have to care about setting e.g the previous values in text field when something goes wrong For documentation on the different splices see the different functions exported by this module All splices have the same name as given in digestiveSplices You can give arbitrary attributes to most of the elements i.e where it makes sense This means you can do e.g dfInputTextArea ref description cols rows",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "Heist",
        "normalized": "",
        "package": "digestive-functors-heist",
        "partial": "Heist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:bindDigestiveSplices",
      "description": {
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View Text -\u003e HeistState m -\u003e HeistState m",
        "fct-source": "src/Text-Digestive-Heist.html#bindDigestiveSplices",
        "fct-type": "function",
        "title": "bindDigestiveSplices"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "bindDigestiveSplices",
        "normalized": "View Text-\u003eHeistState a-\u003eHeistState a",
        "package": "digestive-functors-heist",
        "partial": "Digestive Splices",
        "signature": "View Text-\u003eHeistState m-\u003eHeistState m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfChildErrorList",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay the list of errors for a certain form and all forms below it. E.g.,\n if there is a subform called \u003ccode\u003e\"user\"\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e \u003cdfChildErrorList ref=\"user\" /\u003e\n\u003c/pre\u003e\u003cp\u003eOr display \u003cem\u003eall\u003c/em\u003e errors for the form:\n\u003c/p\u003e\u003cpre\u003e \u003cdfChildErrorList ref=\"\" /\u003e\n\u003c/pre\u003e\u003cp\u003eWhich is more conveniently written as:\n\u003c/p\u003e\u003cpre\u003e \u003cdfChildErrorList /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View Text -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfChildErrorList",
        "fct-type": "function",
        "title": "dfChildErrorList"
      },
      "index": {
        "description": "Display the list of errors for certain form and all forms below it E.g if there is subform called user dfChildErrorList ref user Or display all errors for the form dfChildErrorList ref Which is more conveniently written as dfChildErrorList",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfChildErrorList",
        "normalized": "View Text-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Child Error List",
        "signature": "View Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfErrorList",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay the list of errors for a certain field. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfErrorList ref=\"user.name\" /\u003e\n \u003cdfInputText ref=\"user.name\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View Text -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfErrorList",
        "fct-type": "function",
        "title": "dfErrorList"
      },
      "index": {
        "description": "Display the list of errors for certain field Example dfErrorList ref user.name dfInputText ref user.name",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfErrorList",
        "normalized": "View Text-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Error List",
        "signature": "View Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfForm",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a form tag with the \u003ccode\u003emethod\u003c/code\u003e attribute set to \u003ccode\u003ePOST\u003c/code\u003e and\n the \u003ccode\u003eenctype\u003c/code\u003e set to the right value (depending on the form).\n Custom \u003ccode\u003emethod\u003c/code\u003e or \u003ccode\u003eenctype\u003c/code\u003e attributes would override this\n behavior. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfForm action=\"/users/new\"\u003e\n     \u003cdfInputText ... /\u003e\n     ...\n     \u003cdfInputSubmit /\u003e\n \u003c/dfForm\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View v -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfForm",
        "fct-type": "function",
        "title": "dfForm"
      },
      "index": {
        "description": "Generate form tag with the method attribute set to POST and the enctype set to the right value depending on the form Custom method or enctype attributes would override this behavior Example dfForm action users new dfInputText dfInputSubmit dfForm",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfForm",
        "normalized": "View a-\u003eSplice b",
        "package": "digestive-functors-heist",
        "partial": "Form",
        "signature": "View v-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfIfChildErrors",
      "description": {
        "fct-descr": "\u003cp\u003eRender some content only if there are any errors. This is useful for markup\n purposes.\n\u003c/p\u003e\u003cpre\u003e \u003cdfIfChildErrors ref=\"user\"\u003e\n     Content to be rendered if there are any errors...\n \u003c/dfIfChildErrors\u003e\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eref\u003c/code\u003e attribute can be omitted if you want to check the entire form.\n\u003c/p\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View v -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfIfChildErrors",
        "fct-type": "function",
        "title": "dfIfChildErrors"
      },
      "index": {
        "description": "Render some content only if there are any errors This is useful for markup purposes dfIfChildErrors ref user Content to be rendered if there are any errors dfIfChildErrors The ref attribute can be omitted if you want to check the entire form",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfIfChildErrors",
        "normalized": "View a-\u003eSplice b",
        "package": "digestive-functors-heist",
        "partial": "If Child Errors",
        "signature": "View v-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInput",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an input field with a supplied type. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInput type=\"date\" ref=\"date\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View v -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInput",
        "fct-type": "function",
        "title": "dfInput"
      },
      "index": {
        "description": "Generate an input field with supplied type Example dfInput type date ref date",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInput",
        "normalized": "View a-\u003eSplice b",
        "package": "digestive-functors-heist",
        "partial": "Input",
        "signature": "View v-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInputCheckbox",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a checkbox. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputCheckbox ref=\"user.married\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View Text -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInputCheckbox",
        "fct-type": "function",
        "title": "dfInputCheckbox"
      },
      "index": {
        "description": "Generate checkbox Example dfInputCheckbox ref user.married",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInputCheckbox",
        "normalized": "View Text-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Checkbox",
        "signature": "View Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInputHidden",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a hidden input field. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputHidden ref=\"user.forgery\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View v -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInputHidden",
        "fct-type": "function",
        "title": "dfInputHidden"
      },
      "index": {
        "description": "Generate hidden input field Example dfInputHidden ref user.forgery",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInputHidden",
        "normalized": "View a-\u003eSplice b",
        "package": "digestive-functors-heist",
        "partial": "Input Hidden",
        "signature": "View v-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInputList",
      "description": {
        "fct-descr": "\u003cp\u003eThis splice allows variable length lists.  It binds several attribute\n splices providing functionality for dynamically manipulating the list.  The\n following descriptions will use the example of a form named \"foo\" with a\n list subform named \"items\".\n\u003c/p\u003e\u003cp\u003eSplices:\n   dfListItem - This tag must surround the markup for a single list item.\n     It surrounds all of its children with a div with id \"foo.items\" and\n     class \"inputList\".\n\u003c/p\u003e\u003cp\u003eAttribute Splices:\n   itemAttrs - Attribute you should use on div, span, etc that surrounds all\n     the markup for a single list item.  This splice expands to an id of\n     \"foo.items.ix\" (where ix is the index of the current item) and a\n     class of \"inputListItem\".\n   addControl - Use this attribute on the tag you use to define a control\n     for adding elements to the list (usually a button or anchor).  It adds\n     an onclick attribute that calls a javascript function addInputListItem.\n   removeControl - Use this attribute on the control for removing individual\n     items.  It adds an onclick attribute that calls removeInputListItem.\n\u003c/p\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View Text -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInputList",
        "fct-type": "function",
        "title": "dfInputList"
      },
      "index": {
        "description": "This splice allows variable length lists It binds several attribute splices providing functionality for dynamically manipulating the list The following descriptions will use the example of form named foo with list subform named items Splices dfListItem This tag must surround the markup for single list item It surrounds all of its children with div with id foo.items and class inputList Attribute Splices itemAttrs Attribute you should use on div span etc that surrounds all the markup for single list item This splice expands to an id of foo.items.ix where ix is the index of the current item and class of inputListItem addControl Use this attribute on the tag you use to define control for adding elements to the list usually button or anchor It adds an onclick attribute that calls javascript function addInputListItem removeControl Use this attribute on the control for removing individual items It adds an onclick attribute that calls removeInputListItem",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInputList",
        "normalized": "View Text-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input List",
        "signature": "View Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInputPassword",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a password field. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputPassword ref=\"user.password\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View v -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInputPassword",
        "fct-type": "function",
        "title": "dfInputPassword"
      },
      "index": {
        "description": "Generate password field Example dfInputPassword ref user.password",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInputPassword",
        "normalized": "View a-\u003eSplice b",
        "package": "digestive-functors-heist",
        "partial": "Input Password",
        "signature": "View v-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInputRadio",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a number of radio buttons. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputRadio ref=\"user.sex\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View Text -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInputRadio",
        "fct-type": "function",
        "title": "dfInputRadio"
      },
      "index": {
        "description": "Generate number of radio buttons Example dfInputRadio ref user.sex",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInputRadio",
        "normalized": "View Text-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Radio",
        "signature": "View Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInputSelect",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a select button (also known as a combo box). Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputSelect ref=\"user.sex\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View Text -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInputSelect",
        "fct-type": "function",
        "title": "dfInputSelect"
      },
      "index": {
        "description": "Generate select button also known as combo box Example dfInputSelect ref user.sex",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInputSelect",
        "normalized": "View Text-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Select",
        "signature": "View Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInputSelectGroup",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a select button (also known as a combo box). Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputSelectGroup ref=\"user.sex\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View Text -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInputSelectGroup",
        "fct-type": "function",
        "title": "dfInputSelectGroup"
      },
      "index": {
        "description": "Generate select button also known as combo box Example dfInputSelectGroup ref user.sex",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInputSelectGroup",
        "normalized": "View Text-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Input Select Group",
        "signature": "View Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInputSubmit",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a submit button. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputSubmit /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View v -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInputSubmit",
        "fct-type": "function",
        "title": "dfInputSubmit"
      },
      "index": {
        "description": "Generate submit button Example dfInputSubmit",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInputSubmit",
        "normalized": "View a-\u003eSplice b",
        "package": "digestive-functors-heist",
        "partial": "Input Submit",
        "signature": "View v-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInputText",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a text input field. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputText ref=\"user.name\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View v -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInputText",
        "fct-type": "function",
        "title": "dfInputText"
      },
      "index": {
        "description": "Generate text input field Example dfInputText ref user.name",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInputText",
        "normalized": "View a-\u003eSplice b",
        "package": "digestive-functors-heist",
        "partial": "Input Text",
        "signature": "View v-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfInputTextArea",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a text area. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputTextArea ref=\"user.about\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View v -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfInputTextArea",
        "fct-type": "function",
        "title": "dfInputTextArea"
      },
      "index": {
        "description": "Generate text area Example dfInputTextArea ref user.about",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfInputTextArea",
        "normalized": "View a-\u003eSplice b",
        "package": "digestive-functors-heist",
        "partial": "Input Text Area",
        "signature": "View v-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfLabel",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a label for a field. Example:\n\u003c/p\u003e\u003cpre\u003e \u003cdfLabel ref=\"user.married\"\u003eMarried: \u003c/dfLabel\u003e\n \u003cdfInputCheckbox ref=\"user.married\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View v -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfLabel",
        "fct-type": "function",
        "title": "dfLabel"
      },
      "index": {
        "description": "Generate label for field Example dfLabel ref user.married Married dfLabel dfInputCheckbox ref user.married",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfLabel",
        "normalized": "View a-\u003eSplice b",
        "package": "digestive-functors-heist",
        "partial": "Label",
        "signature": "View v-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:dfSubView",
      "description": {
        "fct-descr": "\u003cp\u003eThis splice allows reuse of templates by selecting some child of a form\n tree. While this may sound complicated, it's pretty straightforward and\n practical. Suppose we have:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputText ref=\"user.name\" /\u003e\n \u003cdfInputText ref=\"user.password\" /\u003e\n\n \u003cdfInputTextArea ref=\"comment.body\" /\u003e\n\u003c/pre\u003e\u003cp\u003eYou may want to abstract the \u003ccode\u003e\"user\"\u003c/code\u003e parts in some other template so you\n Don't Repeat Yourself (TM). If you create a template called \u003ccode\u003e\"user-form\"\u003c/code\u003e\n with the following contents:\n\u003c/p\u003e\u003cpre\u003e \u003cdfInputText ref=\"name\" /\u003e\n \u003cdfInputText ref=\"password\" /\u003e\n\u003c/pre\u003e\u003cp\u003eYou will be able to use:\n\u003c/p\u003e\u003cpre\u003e \u003cdfSubView ref=\"user\"\u003e\n     \u003capply template=\"user-form\" /\u003e\n \u003c/dfSubView\u003e\n\n \u003cdfInputTextArea ref=\"comment.body\" /\u003e\n\u003c/pre\u003e",
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View Text -\u003e Splice m",
        "fct-source": "src/Text-Digestive-Heist.html#dfSubView",
        "fct-type": "function",
        "title": "dfSubView"
      },
      "index": {
        "description": "This splice allows reuse of templates by selecting some child of form tree While this may sound complicated it pretty straightforward and practical Suppose we have dfInputText ref user.name dfInputText ref user.password dfInputTextArea ref comment.body You may want to abstract the user parts in some other template so you Don Repeat Yourself TM If you create template called user-form with the following contents dfInputText ref name dfInputText ref password You will be able to use dfSubView ref user apply template user-form dfSubView dfInputTextArea ref comment.body",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "dfSubView",
        "normalized": "View Text-\u003eSplice a",
        "package": "digestive-functors-heist",
        "partial": "Sub View",
        "signature": "View Text-\u003eSplice m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/digestive-functors-heist/docs/Text-Digestive-Heist.html#v:digestiveSplices",
      "description": {
        "fct-module": "Text.Digestive.Heist",
        "fct-package": "digestive-functors-heist",
        "fct-signature": "View Text -\u003e Splices (Splice m)",
        "fct-source": "src/Text-Digestive-Heist.html#digestiveSplices",
        "fct-type": "function",
        "title": "digestiveSplices"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Digestive Heist",
        "module": "Text.Digestive.Heist",
        "name": "digestiveSplices",
        "normalized": "View Text-\u003eSplices(Splice a)",
        "package": "digestive-functors-heist",
        "partial": "Splices",
        "signature": "View Text-\u003eSplices(Splice m)"
      }
    }
  }
]