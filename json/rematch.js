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
        "word": "rematch"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains some utility functions for formatting descriptions\n It is probably only useful when you're writing your own matchers\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Rematch.Formatting",
          "name": "Formatting",
          "package": "rematch",
          "source": "src/Control-Rematch-Formatting.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains some utility functions for formatting descriptions It is probably only useful when you re writing your own matchers",
          "hierarchy": "Control Rematch Formatting",
          "module": "Control.Rematch.Formatting",
          "name": "Formatting",
          "package": "rematch",
          "partial": "Formatting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch-Formatting.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Rematch.Formatting",
          "name": "describeList",
          "package": "rematch",
          "signature": "String -\u003e [String] -\u003e String",
          "source": "src/Control-Rematch-Formatting.html#describeList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Rematch Formatting",
          "module": "Control.Rematch.Formatting",
          "name": "describeList",
          "normalized": "String-\u003e[String]-\u003eString",
          "package": "rematch",
          "partial": "List",
          "signature": "String-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch-Formatting.html#v:describeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function for formatting a list of strings with a separator\n\u003c/p\u003e",
          "module": "Control.Rematch.Formatting",
          "name": "join",
          "package": "rematch",
          "signature": "String -\u003e [String] -\u003e String",
          "source": "src/Control-Rematch-Formatting.html#join",
          "type": "function"
        },
        "index": {
          "description": "Utility function for formatting list of strings with separator",
          "hierarchy": "Control Rematch Formatting",
          "module": "Control.Rematch.Formatting",
          "name": "join",
          "normalized": "String-\u003e[String]-\u003eString",
          "package": "rematch",
          "signature": "String-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch-Formatting.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Rematch.Run",
          "name": "Run",
          "package": "rematch",
          "source": "src/Control-Rematch-Run.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Rematch Run",
          "module": "Control.Rematch.Run",
          "name": "Run",
          "package": "rematch",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type representing a match success or failure.\n\u003c/p\u003e",
          "module": "Control.Rematch.Run",
          "name": "Match",
          "package": "rematch",
          "source": "src/Control-Rematch-Run.html#Match",
          "type": "data"
        },
        "index": {
          "description": "type representing match success or failure",
          "hierarchy": "Control Rematch Run",
          "module": "Control.Rematch.Run",
          "name": "Match",
          "package": "rematch",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch-Run.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Rematch.Run",
          "name": "MatchFailure",
          "package": "rematch",
          "signature": "MatchFailure String",
          "source": "src/Control-Rematch-Run.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Rematch Run",
          "module": "Control.Rematch.Run",
          "name": "MatchFailure",
          "package": "rematch",
          "partial": "Match Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch-Run.html#v:MatchFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Rematch.Run",
          "name": "MatchSuccess",
          "package": "rematch",
          "signature": "MatchSuccess",
          "source": "src/Control-Rematch-Run.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Rematch Run",
          "module": "Control.Rematch.Run",
          "name": "MatchSuccess",
          "package": "rematch",
          "partial": "Match Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch-Run.html#v:MatchSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an api for matchers: rules that can pass or fail,\n and describe their failure and success conditions for humans to read.\n\u003c/p\u003e\u003cp\u003eThis module also exports some useful matchers for things in the \u003ca\u003ePrelude\u003c/a\u003e,\n and some combinators that are useful for combining several matchers into one.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Rematch",
          "name": "Rematch",
          "package": "rematch",
          "source": "src/Control-Rematch.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines an api for matchers rules that can pass or fail and describe their failure and success conditions for humans to read This module also exports some useful matchers for things in the Prelude and some combinators that are useful for combining several matchers into one",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "Rematch",
          "package": "rematch",
          "partial": "Rematch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic api for a matcher\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "Matcher",
          "package": "rematch",
          "source": "src/Control-Rematch.html#Matcher",
          "type": "data"
        },
        "index": {
          "description": "The basic api for matcher",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "Matcher",
          "package": "rematch",
          "partial": "Matcher",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#t:Matcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Rematch",
          "name": "Matcher",
          "package": "rematch",
          "signature": "Matcher",
          "source": "src/Control-Rematch.html#Matcher",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "Matcher",
          "package": "rematch",
          "partial": "Matcher",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:Matcher"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if all of a list of matchers pass\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "allOf",
          "package": "rematch",
          "signature": "[Matcher a] -\u003e Matcher a",
          "source": "src/Control-Rematch.html#allOf",
          "type": "function"
        },
        "index": {
          "description": "Matches if all of list of matchers pass",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "allOf",
          "normalized": "[Matcher a]-\u003eMatcher a",
          "package": "rematch",
          "partial": "Of",
          "signature": "[Matcher a]-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:allOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if any of a list of matchers pass\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "anyOf",
          "package": "rematch",
          "signature": "[Matcher a] -\u003e Matcher a",
          "source": "src/Control-Rematch.html#anyOf",
          "type": "function"
        },
        "index": {
          "description": "Matches if any of list of matchers pass",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "anyOf",
          "normalized": "[Matcher a]-\u003eMatcher a",
          "package": "rematch",
          "partial": "Of",
          "signature": "[Matcher a]-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:anyOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description to be shown if the match fails.\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "describeMismatch",
          "package": "rematch",
          "signature": "a -\u003e String",
          "source": "src/Control-Rematch.html#Matcher",
          "type": "function"
        },
        "index": {
          "description": "description to be shown if the match fails",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "describeMismatch",
          "normalized": "a-\u003eString",
          "package": "rematch",
          "partial": "Mismatch",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:describeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of the matcher (usually of its success conditions)\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "description",
          "package": "rematch",
          "signature": "String",
          "source": "src/Control-Rematch.html#Matcher",
          "type": "function"
        },
        "index": {
          "description": "description of the matcher usually of its success conditions",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "description",
          "package": "rematch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatcher on equality\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "equalTo",
          "package": "rematch",
          "signature": "a -\u003e Matcher a",
          "source": "src/Control-Rematch.html#equalTo",
          "type": "function"
        },
        "index": {
          "description": "Matcher on equality",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "equalTo",
          "normalized": "a-\u003eMatcher a",
          "package": "rematch",
          "partial": "To",
          "signature": "a-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:equalTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if every item in the input list passes a matcher\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "everyItem",
          "package": "rematch",
          "signature": "Matcher a -\u003e Matcher [a]",
          "source": "src/Control-Rematch.html#everyItem",
          "type": "function"
        },
        "index": {
          "description": "Matches if every item in the input list passes matcher",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "everyItem",
          "normalized": "Matcher a-\u003eMatcher[a]",
          "package": "rematch",
          "partial": "Item",
          "signature": "Matcher a-\u003eMatcher[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:everyItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the input is greater than the required number\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "greaterThan",
          "package": "rematch",
          "signature": "a -\u003e Matcher a",
          "source": "src/Control-Rematch.html#greaterThan",
          "type": "function"
        },
        "index": {
          "description": "Matches if the input is greater than the required number",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "greaterThan",
          "normalized": "a-\u003eMatcher a",
          "package": "rematch",
          "partial": "Than",
          "signature": "a-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:greaterThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the input is greater than or equal to the required number\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "greaterThanOrEqual",
          "package": "rematch",
          "signature": "a -\u003e Matcher a",
          "source": "src/Control-Rematch.html#greaterThanOrEqual",
          "type": "function"
        },
        "index": {
          "description": "Matches if the input is greater than or equal to the required number",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "greaterThanOrEqual",
          "normalized": "a-\u003eMatcher a",
          "package": "rematch",
          "partial": "Than Or Equal",
          "signature": "a-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:greaterThanOrEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if any of the items in the input list passes the provided matcher\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "hasItem",
          "package": "rematch",
          "signature": "Matcher a -\u003e Matcher [a]",
          "source": "src/Control-Rematch.html#hasItem",
          "type": "function"
        },
        "index": {
          "description": "Matches if any of the items in the input list passes the provided matcher",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "hasItem",
          "normalized": "Matcher a-\u003eMatcher[a]",
          "package": "rematch",
          "partial": "Item",
          "signature": "Matcher a-\u003eMatcher[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:hasItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatcher combinator, turns Matcher a to Matcher (Maybe a)\n Fails if the Maybe is Nothing, otherwise tries the original\n matcher on the content of the Maybe\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "hasJust",
          "package": "rematch",
          "signature": "Matcher a -\u003e Matcher (Maybe a)",
          "source": "src/Control-Rematch.html#hasJust",
          "type": "function"
        },
        "index": {
          "description": "Matcher combinator turns Matcher to Matcher Maybe Fails if the Maybe is Nothing otherwise tries the original matcher on the content of the Maybe",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "hasJust",
          "normalized": "Matcher a-\u003eMatcher(Maybe a)",
          "package": "rematch",
          "partial": "Just",
          "signature": "Matcher a-\u003eMatcher(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:hasJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatcher combinator: turns a Matcher a into a Matcher on the\n Left side of an Either a b\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "hasLeft",
          "package": "rematch",
          "signature": "Matcher a -\u003e Matcher (Either a b)",
          "source": "src/Control-Rematch.html#hasLeft",
          "type": "function"
        },
        "index": {
          "description": "Matcher combinator turns Matcher into Matcher on the Left side of an Either",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "hasLeft",
          "normalized": "Matcher a-\u003eMatcher(Either a b)",
          "package": "rematch",
          "partial": "Left",
          "signature": "Matcher a-\u003eMatcher(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:hasLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatcher combinator: turns a Matcher b into a Matcher on the\n Right side of an Either a b\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "hasRight",
          "package": "rematch",
          "signature": "Matcher b -\u003e Matcher (Either a b)",
          "source": "src/Control-Rematch.html#hasRight",
          "type": "function"
        },
        "index": {
          "description": "Matcher combinator turns Matcher into Matcher on the Right side of an Either",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "hasRight",
          "normalized": "Matcher a-\u003eMatcher(Either b a)",
          "package": "rematch",
          "partial": "Right",
          "signature": "Matcher b-\u003eMatcher(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:hasRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the input list has the required size\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "hasSize",
          "package": "rematch",
          "signature": "Int -\u003e Matcher [a]",
          "source": "src/Control-Rematch.html#hasSize",
          "type": "function"
        },
        "index": {
          "description": "Matches if the input list has the required size",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "hasSize",
          "normalized": "Int-\u003eMatcher[a]",
          "package": "rematch",
          "partial": "Size",
          "signature": "Int-\u003eMatcher[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:hasSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatcher on equality\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "is",
          "package": "rematch",
          "signature": "a -\u003e Matcher a",
          "source": "src/Control-Rematch.html#is",
          "type": "function"
        },
        "index": {
          "description": "Matcher on equality",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "is",
          "normalized": "a-\u003eMatcher a",
          "package": "rematch",
          "signature": "a-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the input list is empty\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "isEmpty",
          "package": "rematch",
          "signature": "Matcher [a]",
          "source": "src/Control-Rematch.html#isEmpty",
          "type": "function"
        },
        "index": {
          "description": "Matches if the input list is empty",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "isEmpty",
          "normalized": "Matcher[a]",
          "package": "rematch",
          "partial": "Empty",
          "signature": "Matcher[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the input is (Just a)\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "isJust",
          "package": "rematch",
          "signature": "Matcher (Maybe a)",
          "source": "src/Control-Rematch.html#isJust",
          "type": "function"
        },
        "index": {
          "description": "Matches if the input is Just",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "isJust",
          "package": "rematch",
          "partial": "Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:isJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if an Either is Left\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "isLeft",
          "package": "rematch",
          "signature": "Matcher (Either a b)",
          "source": "src/Control-Rematch.html#isLeft",
          "type": "function"
        },
        "index": {
          "description": "Matches if an Either is Left",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "isLeft",
          "package": "rematch",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverts a matcher, so success becomes failure, and failure\n becomes success\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "isNot",
          "package": "rematch",
          "signature": "Matcher a -\u003e Matcher a",
          "source": "src/Control-Rematch.html#isNot",
          "type": "function"
        },
        "index": {
          "description": "Inverts matcher so success becomes failure and failure becomes success",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "isNot",
          "normalized": "Matcher a-\u003eMatcher a",
          "package": "rematch",
          "partial": "Not",
          "signature": "Matcher a-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:isNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the input is Nothing\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "isNothing",
          "package": "rematch",
          "signature": "Matcher (Maybe a)",
          "source": "src/Control-Rematch.html#isNothing",
          "type": "function"
        },
        "index": {
          "description": "Matches if the input is Nothing",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "isNothing",
          "package": "rematch",
          "partial": "Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:isNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if an Either is Right\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "isRight",
          "package": "rematch",
          "signature": "Matcher (Either a b)",
          "source": "src/Control-Rematch.html#isRight",
          "type": "function"
        },
        "index": {
          "description": "Matches if an Either is Right",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "isRight",
          "package": "rematch",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the input is less than the required number\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "lessThan",
          "package": "rematch",
          "signature": "a -\u003e Matcher a",
          "source": "src/Control-Rematch.html#lessThan",
          "type": "function"
        },
        "index": {
          "description": "Matches if the input is less than the required number",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "lessThan",
          "normalized": "a-\u003eMatcher a",
          "package": "rematch",
          "partial": "Than",
          "signature": "a-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:lessThan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches if the input is less than or equal to the required number\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "lessThanOrEqual",
          "package": "rematch",
          "signature": "a -\u003e Matcher a",
          "source": "src/Control-Rematch.html#lessThanOrEqual",
          "type": "function"
        },
        "index": {
          "description": "Matches if the input is less than or equal to the required number",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "lessThanOrEqual",
          "normalized": "a-\u003eMatcher a",
          "package": "rematch",
          "partial": "Than Or Equal",
          "signature": "a-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:lessThanOrEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function that returns True if the matcher should pass, False if it should fail\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "match",
          "package": "rematch",
          "signature": "a -\u003e Bool",
          "source": "src/Control-Rematch.html#Matcher",
          "type": "function"
        },
        "index": {
          "description": "function that returns True if the matcher should pass False if it should fail",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "match",
          "normalized": "a-\u003eBool",
          "package": "rematch",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUtility function for running a list of matchers\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "matchList",
          "package": "rematch",
          "signature": "[Matcher a] -\u003e a -\u003e [Bool]",
          "source": "src/Control-Rematch.html#matchList",
          "type": "function"
        },
        "index": {
          "description": "Utility function for running list of matchers",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "matchList",
          "normalized": "[Matcher a]-\u003ea-\u003e[Bool]",
          "package": "rematch",
          "partial": "List",
          "signature": "[Matcher a]-\u003ea-\u003e[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:matchList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a Matcher a out of a name and a function from (a -\u003e a -\u003e Bool)\n Succeeds if the function returns true, fails if the function returns false\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "matcherOn",
          "package": "rematch",
          "signature": "String -\u003e (a -\u003e a -\u003e Bool) -\u003e a -\u003e Matcher a",
          "source": "src/Control-Rematch.html#matcherOn",
          "type": "function"
        },
        "index": {
          "description": "Builds Matcher out of name and function from Bool Succeeds if the function returns true fails if the function returns false",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "matcherOn",
          "normalized": "String-\u003e(a-\u003ea-\u003eBool)-\u003ea-\u003eMatcher a",
          "package": "rematch",
          "partial": "On",
          "signature": "String-\u003e(a-\u003ea-\u003eBool)-\u003ea-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:matcherOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA combinator that translates Matcher a to Matcher b using\n a function :: (a -\u003e b)\n Takes a name of the function for better error messages\n\u003c/p\u003e\u003cp\u003eUsing this as an infix operator gets you some nice syntax:\n expect ((is 1) \u003ccode\u003e\u003ca\u003eon\u003c/a\u003e\u003c/code\u003e (length, \u003ca\u003elength\u003c/a\u003e)) []\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "on",
          "package": "rematch",
          "signature": "Matcher b -\u003e (a -\u003e b, String) -\u003e Matcher a",
          "source": "src/Control-Rematch.html#on",
          "type": "function"
        },
        "index": {
          "description": "combinator that translates Matcher to Matcher using function Takes name of the function for better error messages Using this as an infix operator gets you some nice syntax expect is on length length",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "on",
          "normalized": "Matcher a-\u003e(b-\u003ea,String)-\u003eMatcher b",
          "package": "rematch",
          "signature": "Matcher b-\u003e(a-\u003eb,String)-\u003eMatcher a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:on"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a matcher, producing a Match with a good error string\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "runMatch",
          "package": "rematch",
          "signature": "Matcher a -\u003e a -\u003e Match",
          "source": "src/Control-Rematch.html#runMatch",
          "type": "function"
        },
        "index": {
          "description": "Run matcher producing Match with good error string",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "runMatch",
          "normalized": "Matcher a-\u003ea-\u003eMatch",
          "package": "rematch",
          "partial": "Match",
          "signature": "Matcher a-\u003ea-\u003eMatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:runMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA standard mismatch description on (Show a):\n standardMismatch 1 == \u003ca\u003ewas 1\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Control.Rematch",
          "name": "standardMismatch",
          "package": "rematch",
          "signature": "a -\u003e String",
          "source": "src/Control-Rematch.html#standardMismatch",
          "type": "function"
        },
        "index": {
          "description": "standard mismatch description on Show standardMismatch was",
          "hierarchy": "Control Rematch",
          "module": "Control.Rematch",
          "name": "standardMismatch",
          "normalized": "a-\u003eString",
          "package": "rematch",
          "partial": "Mismatch",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/rematch/docs/Control-Rematch.html#v:standardMismatch"
      }
    }
  ]
]