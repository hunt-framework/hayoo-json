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
        "word": "regexdot"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e A type of \u003cem\u003ezero-width assertion\u003c/em\u003e:\n\tthe \u003ccode\u003e\u003ca\u003eBow\u003c/a\u003e\u003c/code\u003e-predicate is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if no input-data has yet been consumed; the \u003ccode\u003e\u003ca\u003eStern\u003c/a\u003e\u003c/code\u003e-predicate is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if no input-data remains to be consumed.\n\u003c/li\u003e\u003cli\u003e Whilst at the top-level of the regex, the \u003cem\u003eabsence\u003c/em\u003e of an anchor is equivalent to a non-capturing \u003ccode\u003e.*?\u003c/code\u003e,\n\ttempting one to implement them using this property,\n\tit doesn't apply to those anchors encountered at either end of a sub-expression.\n\tSo in all cases, an anchor constrains the permissible consumption of input-data,\n\tbut at the top level it also prevents the regex drifting away from either end of the input-data.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "RegExDot.Anchor",
          "name": "Anchor",
          "package": "regexdot",
          "source": "src/RegExDot-Anchor.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION type of zero-width assertion the Bow predicate is True if no input-data has yet been consumed the Stern predicate is True if no input-data remains to be consumed Whilst at the top-level of the regex the absence of an anchor is equivalent to non-capturing tempting one to implement them using this property it doesn apply to those anchors encountered at either end of sub-expression So in all cases an anchor constrains the permissible consumption of input-data but at the top level it also prevents the regex drifting away from either end of the input-data",
          "hierarchy": "RegExDot Anchor",
          "module": "RegExDot.Anchor",
          "name": "Anchor",
          "package": "regexdot",
          "partial": "Anchor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Anchor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the types on \u003cem\u003eanchor\u003c/em\u003e by which a \u003cem\u003eregex\u003c/em\u003e can be moored to a part of the input-data.\n\u003c/p\u003e",
          "module": "RegExDot.Anchor",
          "name": "Anchor",
          "package": "regexdot",
          "source": "src/RegExDot-Anchor.html#Anchor",
          "type": "data"
        },
        "index": {
          "description": "Defines the types on anchor by which regex can be moored to part of the input-data",
          "hierarchy": "RegExDot Anchor",
          "module": "RegExDot.Anchor",
          "name": "Anchor",
          "package": "regexdot",
          "partial": "Anchor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Anchor.html#t:Anchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specification for the anchors required around the expression\n\u003c/p\u003e",
          "module": "RegExDot.Anchor",
          "name": "AnchorSpecification",
          "package": "regexdot",
          "source": "src/RegExDot-Anchor.html#AnchorSpecification",
          "type": "type"
        },
        "index": {
          "description": "specification for the anchors required around the expression",
          "hierarchy": "RegExDot Anchor",
          "module": "RegExDot.Anchor",
          "name": "AnchorSpecification",
          "package": "regexdot",
          "partial": "Anchor Specification",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Anchor.html#t:AnchorSpecification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches only if no input data has yet been consumed. Can only exist at the start of the entire regex, or (in theory) the start of any \u003cem\u003ealternative\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Anchor",
          "name": "Bow",
          "package": "regexdot",
          "signature": "Bow",
          "source": "src/RegExDot-Anchor.html#Anchor",
          "type": "function"
        },
        "index": {
          "description": "Matches only if no input data has yet been consumed Can only exist at the start of the entire regex or in theory the start of any alternative",
          "hierarchy": "RegExDot Anchor",
          "module": "RegExDot.Anchor",
          "name": "Bow",
          "package": "regexdot",
          "partial": "Bow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Anchor.html#v:Bow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches only if no input data remains to be consumed. Can only exist at the end of the entire regex, or (in theory) the end of any \u003cem\u003ealternative\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Anchor",
          "name": "Stern",
          "package": "regexdot",
          "signature": "Stern",
          "source": "src/RegExDot-Anchor.html#Anchor",
          "type": "function"
        },
        "index": {
          "description": "Matches only if no input data remains to be consumed Can only exist at the end of the entire regex or in theory the end of any alternative",
          "hierarchy": "RegExDot Anchor",
          "module": "RegExDot.Anchor",
          "name": "Stern",
          "package": "regexdot",
          "partial": "Stern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Anchor.html#v:Stern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conventional token used to denote a \u003ccode\u003e\u003ca\u003eBow\u003c/a\u003e\u003c/code\u003e-anchor, when in \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.Anchor",
          "name": "bowToken",
          "package": "regexdot",
          "signature": "Char",
          "source": "src/RegExDot-Anchor.html#bowToken",
          "type": "function"
        },
        "index": {
          "description": "The conventional token used to denote Bow anchor when in String form",
          "hierarchy": "RegExDot Anchor",
          "module": "RegExDot.Anchor",
          "name": "bowToken",
          "package": "regexdot",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Anchor.html#v:bowToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conventional token used to denote a \u003ccode\u003e\u003ca\u003eStern\u003c/a\u003e\u003c/code\u003e-anchor, when in \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.Anchor",
          "name": "sternToken",
          "package": "regexdot",
          "signature": "Char",
          "source": "src/RegExDot-Anchor.html#sternToken",
          "type": "function"
        },
        "index": {
          "description": "The conventional token used to denote Stern anchor when in String form",
          "hierarchy": "RegExDot Anchor",
          "module": "RegExDot.Anchor",
          "name": "sternToken",
          "package": "regexdot",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Anchor.html#v:sternToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to which a specific meaning is attributed, when reading from \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Anchor",
          "name": "tokens",
          "package": "regexdot",
          "signature": "String",
          "source": "src/RegExDot-Anchor.html#tokens",
          "type": "function"
        },
        "index": {
          "description": "The set of Char to which specific meaning is attributed when reading from String",
          "hierarchy": "RegExDot Anchor",
          "module": "RegExDot.Anchor",
          "name": "tokens",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Anchor.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe specification for an unanchored expression.\n\u003c/p\u003e",
          "module": "RegExDot.Anchor",
          "name": "unanchored",
          "package": "regexdot",
          "signature": "AnchorSpecification",
          "source": "src/RegExDot-Anchor.html#unanchored",
          "type": "function"
        },
        "index": {
          "description": "The specification for an unanchored expression",
          "hierarchy": "RegExDot Anchor",
          "module": "RegExDot.Anchor",
          "name": "unanchored",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Anchor.html#v:unanchored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThis concept was traditionally known as a \u003cem\u003eCharacter-class\u003c/em\u003e,\n\tbut to distinguish it from the more recently introduced & narrower \u003cem\u003ePOSIX Character-class\u003c/em\u003e, it has been renamed \u003cem\u003eBracket-expression\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RegExDot.BracketExpression",
          "name": "BracketExpression",
          "package": "regexdot",
          "source": "src/RegExDot-BracketExpression.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION This concept was traditionally known as Character-class but to distinguish it from the more recently introduced narrower POSIX Character-class it has been renamed Bracket-expression",
          "hierarchy": "RegExDot BracketExpression",
          "module": "RegExDot.BracketExpression",
          "name": "BracketExpression",
          "package": "regexdot",
          "partial": "Bracket Expression",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpression.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003eBracket-expression\u003c/em\u003e consists of a list of \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.BracketExpression",
          "name": "BracketExpression",
          "package": "regexdot",
          "source": "src/RegExDot-BracketExpression.html#BracketExpression",
          "type": "type"
        },
        "index": {
          "description": "Bracket-expression consists of list of Member",
          "hierarchy": "RegExDot BracketExpression",
          "module": "RegExDot.BracketExpression",
          "name": "BracketExpression",
          "package": "regexdot",
          "partial": "Bracket Expression",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpression.html#t:BracketExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the specified datum matches any \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e of the \u003ccode\u003e\u003ca\u003eBracketExpression\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.BracketExpression",
          "name": "containsMatch",
          "package": "regexdot",
          "signature": "m-\u003e BracketExpression m-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "True if the specified datum matches any Member of the BracketExpression",
          "hierarchy": "RegExDot BracketExpression",
          "module": "RegExDot.BracketExpression",
          "name": "containsMatch",
          "normalized": "a-\u003eBracketExpression a-\u003eBool",
          "package": "regexdot",
          "partial": "Match",
          "signature": "m-\u003eBracketExpression m-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpression.html#v:containsMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe delimiters of a \u003cem\u003ebracket-expression\u003c/em\u003e, when in \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.BracketExpression",
          "name": "delimiterTokens",
          "package": "regexdot",
          "signature": "(Char, Char)",
          "source": "src/RegExDot-BracketExpression.html#delimiterTokens",
          "type": "function"
        },
        "index": {
          "description": "The delimiters of bracket-expression when in String form",
          "hierarchy": "RegExDot BracketExpression",
          "module": "RegExDot.BracketExpression",
          "name": "delimiterTokens",
          "normalized": "(Char,Char)",
          "package": "regexdot",
          "partial": "Tokens",
          "signature": "(Char,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpression.html#v:delimiterTokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to denote a negated \u003cem\u003ebracket-expression\u003c/em\u003e, when in \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.BracketExpression",
          "name": "negationToken",
          "package": "regexdot",
          "signature": "Char",
          "source": "src/RegExDot-BracketExpression.html#negationToken",
          "type": "function"
        },
        "index": {
          "description": "Used to denote negated bracket-expression when in String form",
          "hierarchy": "RegExDot BracketExpression",
          "module": "RegExDot.BracketExpression",
          "name": "negationToken",
          "package": "regexdot",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpression.html#v:negationToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to which a specific meaning is attributed, when reading from \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.BracketExpression",
          "name": "tokens",
          "package": "regexdot",
          "signature": "String",
          "source": "src/RegExDot-BracketExpression.html#tokens",
          "type": "function"
        },
        "index": {
          "description": "The set of Char to which specific meaning is attributed when reading from String",
          "hierarchy": "RegExDot BracketExpression",
          "module": "RegExDot.BracketExpression",
          "name": "tokens",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpression.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003ePermits \u003cem\u003ePerl-style shortcut\u003c/em\u003es to be canned & assigned a single-\u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e mnemonic for subsequent reference;\n\tthe implementation of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e looks for a back-slashed \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, for which it expects there to be a corresponding canned \u003ccode\u003e\u003ca\u003eShowablePredicate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCAVEATS\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eSince the underlying polymorphic data-type isn't required to implement neither \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e, the implementation of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e can't cope with range-specifications.\n\tLacking this, Bracket-expression members must be enumerated exhaustively.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RegExDot.BracketExpressionMember",
          "name": "BracketExpressionMember",
          "package": "regexdot",
          "source": "src/RegExDot-BracketExpressionMember.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Permits Perl-style shortcut to be canned assigned single Char mnemonic for subsequent reference the implementation of Read looks for back-slashed Char for which it expects there to be corresponding canned ShowablePredicate CAVEATS Since the underlying polymorphic data-type isn required to implement neither Enum nor Ord the implementation of Read can cope with range-specifications Lacking this Bracket-expression members must be enumerated exhaustively",
          "hierarchy": "RegExDot BracketExpressionMember",
          "module": "RegExDot.BracketExpressionMember",
          "name": "BracketExpressionMember",
          "package": "regexdot",
          "partial": "Bracket Expression Member",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpressionMember.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A \u003cem\u003eBracketExpression\u003c/em\u003e can contain either a literal, a range of literals given \u003ccode\u003e(Enum a, Ord a)\u003c/code\u003e, a \u003cem\u003ePerl-style shortcut\u003c/em\u003e, or when \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e is the type-parameter, a \u003cem\u003ePOSIX Character-class\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e This data-type reduces the representation of all these possibilities to either a predicate or a literal.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.BracketExpressionMember",
          "name": "Member",
          "package": "regexdot",
          "source": "src/RegExDot-BracketExpressionMember.html#Member",
          "type": "data"
        },
        "index": {
          "description": "BracketExpression can contain either literal range of literals given Enum Ord Perl-style shortcut or when Char is the type-parameter POSIX Character-class This data-type reduces the representation of all these possibilities to either predicate or literal",
          "hierarchy": "RegExDot BracketExpressionMember",
          "module": "RegExDot.BracketExpressionMember",
          "name": "Member",
          "package": "regexdot",
          "partial": "Member",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpressionMember.html#t:Member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The interface via which \u003cem\u003ePerl-style shortcut\u003c/em\u003es are expanded (when they occur within a \u003cem\u003ebracket-expression\u003c/em\u003e), in a manner appropriate to the chosen type-parameter.\n\u003c/li\u003e\u003cli\u003e The expansion of \u003cem\u003ePerl-style shortcut\u003c/em\u003es, is more restricted inside than outside, a \u003cem\u003ebracket-expression\u003c/em\u003e,\n\t& consequently are merely represented here by a \u003ccode\u003e\u003ca\u003eShowablePredicate\u003c/a\u003e\u003c/code\u003e, rather than providing a more general form suitable also for those \u003cem\u003ePerl-style shortcuts\u003c/em\u003e found outside \u003cem\u003ebracket-expression\u003c/em\u003es.\n\u003c/li\u003e\u003cli\u003e This interface is implemented elsewhere, where the specific type-parameter & consequently the appropriate set of \u003cem\u003ePerl-style shortcut\u003c/em\u003es, are defined.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.BracketExpressionMember",
          "name": "ShortcutExpander",
          "package": "regexdot",
          "source": "src/RegExDot-BracketExpressionMember.html#ShortcutExpander",
          "type": "class"
        },
        "index": {
          "description": "The interface via which Perl-style shortcut are expanded when they occur within bracket-expression in manner appropriate to the chosen type-parameter The expansion of Perl-style shortcut is more restricted inside than outside bracket-expression consequently are merely represented here by ShowablePredicate rather than providing more general form suitable also for those Perl-style shortcuts found outside bracket-expression This interface is implemented elsewhere where the specific type-parameter consequently the appropriate set of Perl-style shortcut are defined",
          "hierarchy": "RegExDot BracketExpressionMember",
          "module": "RegExDot.BracketExpressionMember",
          "name": "ShortcutExpander",
          "package": "regexdot",
          "partial": "Shortcut Expander",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpressionMember.html#t:ShortcutExpander"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch-operator.\n\u003c/p\u003e",
          "module": "RegExDot.BracketExpressionMember",
          "name": "(=~)",
          "package": "regexdot",
          "signature": "m-\u003e Member m-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Match-operator",
          "hierarchy": "RegExDot BracketExpressionMember",
          "module": "RegExDot.BracketExpressionMember",
          "name": "(=~) =~",
          "normalized": "a-\u003eMember a-\u003eBool",
          "package": "regexdot",
          "signature": "m-\u003eMember m-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpressionMember.html#v:-61--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e is defined literally, using an item of the polymorphic type.\n\u003c/p\u003e",
          "module": "RegExDot.BracketExpressionMember",
          "name": "Literal",
          "package": "regexdot",
          "signature": "Literal m",
          "source": "src/RegExDot-BracketExpressionMember.html#Member",
          "type": "function"
        },
        "index": {
          "description": "This Member is defined literally using an item of the polymorphic type",
          "hierarchy": "RegExDot BracketExpressionMember",
          "module": "RegExDot.BracketExpressionMember",
          "name": "Literal",
          "package": "regexdot",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpressionMember.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eMember\u003c/a\u003e\u003c/code\u003e is described using a \u003cem\u003epredicate\u003c/em\u003e, which is run to determine whether the datum conforms & is a member of the \u003ca\u003eBracketExpression\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.BracketExpressionMember",
          "name": "Predicate",
          "package": "regexdot",
          "signature": "Predicate (ShowablePredicate m)",
          "source": "src/RegExDot-BracketExpressionMember.html#Member",
          "type": "function"
        },
        "index": {
          "description": "This Member is described using predicate which is run to determine whether the datum conforms is member of the BracketExpression",
          "hierarchy": "RegExDot BracketExpressionMember",
          "module": "RegExDot.BracketExpressionMember",
          "name": "Predicate",
          "package": "regexdot",
          "partial": "Predicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpressionMember.html#v:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.BracketExpressionMember",
          "name": "findPredicate",
          "package": "regexdot",
          "signature": "findPredicate",
          "source": "src/RegExDot-BracketExpressionMember.html#findPredicate",
          "type": "method"
        },
        "index": {
          "hierarchy": "RegExDot BracketExpressionMember",
          "module": "RegExDot.BracketExpressionMember",
          "name": "findPredicate",
          "package": "regexdot",
          "partial": "Predicate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-BracketExpressionMember.html#v:findPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Defines those options relating to compile-time.\n\u003c/li\u003e\u003cli\u003e These tend to be options which affect the result, rather than the means by which it is achieved.\n\u003c/li\u003e\u003cli\u003e Whilst similar structures are present in other regex-implementations, there's no standardisation of the fields.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "RegExDot.CompilationOptions",
          "name": "CompilationOptions",
          "package": "regexdot",
          "source": "src/RegExDot-CompilationOptions.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines those options relating to compile-time These tend to be options which affect the result rather than the means by which it is achieved Whilst similar structures are present in other regex-implementations there no standardisation of the fields",
          "hierarchy": "RegExDot CompilationOptions",
          "module": "RegExDot.CompilationOptions",
          "name": "CompilationOptions",
          "package": "regexdot",
          "partial": "Compilation Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-CompilationOptions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe switch(es) used to control compilation of the \u003cem\u003eregex\u003c/em\u003e-engine.\n\u003c/p\u003e",
          "module": "RegExDot.CompilationOptions",
          "name": "CompilationOptions",
          "package": "regexdot",
          "source": "src/RegExDot-CompilationOptions.html#CompilationOptions",
          "type": "data"
        },
        "index": {
          "description": "The switch es used to control compilation of the regex engine",
          "hierarchy": "RegExDot CompilationOptions",
          "module": "RegExDot.CompilationOptions",
          "name": "CompilationOptions",
          "package": "regexdot",
          "partial": "Compilation Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-CompilationOptions.html#t:CompilationOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.CompilationOptions",
          "name": "MkCompilationOptions",
          "package": "regexdot",
          "signature": "MkCompilationOptions",
          "source": "src/RegExDot-CompilationOptions.html#CompilationOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "RegExDot CompilationOptions",
          "module": "RegExDot.CompilationOptions",
          "name": "MkCompilationOptions",
          "package": "regexdot",
          "partial": "Mk Compilation Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-CompilationOptions.html#v:MkCompilationOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine the offset of captured data, corresponding to a sub-expression which matched zero times, as the artificial value \u003ccode\u003e-1\u003c/code\u003e specified by POSIX.\n\u003c/p\u003e",
          "module": "RegExDot.CompilationOptions",
          "name": "complyStrictlyWithPosix",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-CompilationOptions.html#CompilationOptions",
          "type": "function"
        },
        "index": {
          "description": "Define the offset of captured data corresponding to sub-expression which matched zero times as the artificial value specified by POSIX",
          "hierarchy": "RegExDot CompilationOptions",
          "module": "RegExDot.CompilationOptions",
          "name": "complyStrictlyWithPosix",
          "package": "regexdot",
          "partial": "Strictly With Posix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-CompilationOptions.html#v:complyStrictlyWithPosix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Define the requirements & capabilities of a data-type which is designed to consume data.\n\u003c/li\u003e\u003cli\u003e This module also facilitates investigation of group-behaviour, by defining operations on either concatenations or alternations of \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003cli\u003e This module is specifically for use in a \u003cem\u003eregex\u003c/em\u003e-engine,\n\tin which the meta-data from which the \u003cem\u003eregex\u003c/em\u003e is composed, are considered to \u003cem\u003econsume\u003c/em\u003e input data,\n\twhilst concatenation & alternation of such elements, behave as a different types of groups of consumer.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "RegExDot.Consumer",
          "name": "Consumer",
          "package": "regexdot",
          "source": "src/RegExDot-Consumer.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Define the requirements capabilities of data-type which is designed to consume data This module also facilitates investigation of group-behaviour by defining operations on either concatenations or alternations of Consumer This module is specifically for use in regex engine in which the meta-data from which the regex is composed are considered to consume input data whilst concatenation alternation of such elements behave as different types of groups of consumer",
          "hierarchy": "RegExDot Consumer",
          "module": "RegExDot.Consumer",
          "name": "Consumer",
          "package": "regexdot",
          "partial": "Consumer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Consumer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The interface, to which types, which have a data-requirement, may conform.\n\u003c/li\u003e\u003cli\u003e Regrettably, methods requiring reference to the type of the consumable, would require multi-parameter type-classes.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003econsumptionProfile\u003c/a\u003e\u003c/code\u003e defines the quantity-range of data which may be consumed, & any specific data-requirements.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003estarHeight\u003c/a\u003e\u003c/code\u003e measures the complexity of the \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Consumer",
          "name": "Consumer",
          "package": "regexdot",
          "source": "src/RegExDot-Consumer.html#Consumer",
          "type": "class"
        },
        "index": {
          "description": "The interface to which types which have data-requirement may conform Regrettably methods requiring reference to the type of the consumable would require multi-parameter type-classes consumptionProfile defines the quantity-range of data which may be consumed any specific data-requirements starHeight measures the complexity of the Consumer",
          "hierarchy": "RegExDot Consumer",
          "module": "RegExDot.Consumer",
          "name": "Consumer",
          "package": "regexdot",
          "partial": "Consumer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Consumer.html#t:Consumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eConsumptionProfile\u003c/a\u003e\u003c/code\u003e for the specified list of \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003es, then accumulate them.\n\u003c/p\u003e",
          "module": "RegExDot.Consumer",
          "name": "accumulateConsumptionProfiles",
          "package": "regexdot",
          "signature": "[c] -\u003e AccumulatedConsumptionProfiles",
          "source": "src/RegExDot-Consumer.html#accumulateConsumptionProfiles",
          "type": "function"
        },
        "index": {
          "description": "Get the ConsumptionProfile for the specified list of Consumer then accumulate them",
          "hierarchy": "RegExDot Consumer",
          "module": "RegExDot.Consumer",
          "name": "accumulateConsumptionProfiles",
          "normalized": "[a]-\u003eAccumulatedConsumptionProfiles",
          "package": "regexdot",
          "partial": "Consumption Profiles",
          "signature": "[c]-\u003eAccumulatedConsumptionProfiles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Consumer.html#v:accumulateConsumptionProfiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregate of the specified alternation of \u003ccode\u003e\u003ca\u003eConsumptionProfile\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.Consumer",
          "name": "aggregateConsumptionProfilesFromAlternatives",
          "package": "regexdot",
          "signature": "[c] -\u003e ConsumptionProfile",
          "source": "src/RegExDot-Consumer.html#aggregateConsumptionProfilesFromAlternatives",
          "type": "function"
        },
        "index": {
          "description": "The aggregate of the specified alternation of ConsumptionProfile",
          "hierarchy": "RegExDot Consumer",
          "module": "RegExDot.Consumer",
          "name": "aggregateConsumptionProfilesFromAlternatives",
          "normalized": "[a]-\u003eConsumptionProfile",
          "package": "regexdot",
          "partial": "Consumption Profiles From Alternatives",
          "signature": "[c]-\u003eConsumptionProfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Consumer.html#v:aggregateConsumptionProfilesFromAlternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eConsumptionProfile\u003c/a\u003e\u003c/code\u003es for the specified list of \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003es, then find the net effect of concatenating them.\n\u003c/p\u003e",
          "module": "RegExDot.Consumer",
          "name": "aggregateConsumptionProfilesFromConcatenation",
          "package": "regexdot",
          "signature": "[c] -\u003e ConsumptionProfile",
          "source": "src/RegExDot-Consumer.html#aggregateConsumptionProfilesFromConcatenation",
          "type": "function"
        },
        "index": {
          "description": "Get the ConsumptionProfile for the specified list of Consumer then find the net effect of concatenating them",
          "hierarchy": "RegExDot Consumer",
          "module": "RegExDot.Consumer",
          "name": "aggregateConsumptionProfilesFromConcatenation",
          "normalized": "[a]-\u003eConsumptionProfile",
          "package": "regexdot",
          "partial": "Consumption Profiles From Concatenation",
          "signature": "[c]-\u003eConsumptionProfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Consumer.html#v:aggregateConsumptionProfilesFromConcatenation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.Consumer",
          "name": "consumptionProfile",
          "package": "regexdot",
          "signature": "c -\u003e ConsumptionProfile",
          "source": "src/RegExDot-Consumer.html#consumptionProfile",
          "type": "method"
        },
        "index": {
          "hierarchy": "RegExDot Consumer",
          "module": "RegExDot.Consumer",
          "name": "consumptionProfile",
          "normalized": "a-\u003eConsumptionProfile",
          "package": "regexdot",
          "partial": "Profile",
          "signature": "c-\u003eConsumptionProfile",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Consumer.html#v:consumptionProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience-function, to query the \u003ccode\u003e\u003ca\u003eConsumptionBounds\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Consumer",
          "name": "getConsumptionBounds",
          "package": "regexdot",
          "signature": "c -\u003e ConsumptionBounds",
          "source": "src/RegExDot-Consumer.html#getConsumptionBounds",
          "type": "function"
        },
        "index": {
          "description": "Convenience-function to query the ConsumptionBounds of Consumer",
          "hierarchy": "RegExDot Consumer",
          "module": "RegExDot.Consumer",
          "name": "getConsumptionBounds",
          "normalized": "a-\u003eConsumptionBounds",
          "package": "regexdot",
          "partial": "Consumption Bounds",
          "signature": "c-\u003eConsumptionBounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Consumer.html#v:getConsumptionBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine the minimum acceptable quantity of data.\n\u003c/p\u003e",
          "module": "RegExDot.Consumer",
          "name": "getFewest",
          "package": "regexdot",
          "signature": "c -\u003e DataLength",
          "source": "src/RegExDot-Consumer.html#getFewest",
          "type": "function"
        },
        "index": {
          "description": "Determine the minimum acceptable quantity of data",
          "hierarchy": "RegExDot Consumer",
          "module": "RegExDot.Consumer",
          "name": "getFewest",
          "normalized": "a-\u003eDataLength",
          "package": "regexdot",
          "partial": "Fewest",
          "signature": "c-\u003eDataLength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Consumer.html#v:getFewest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether the specified \u003ccode\u003e\u003ca\u003eConsumer\u003c/a\u003e\u003c/code\u003e, has a specific requirement.\n\u003c/p\u003e",
          "module": "RegExDot.Consumer",
          "name": "getHasSpecificRequirement",
          "package": "regexdot",
          "signature": "c -\u003e Bool",
          "source": "src/RegExDot-Consumer.html#getHasSpecificRequirement",
          "type": "function"
        },
        "index": {
          "description": "Determine whether the specified Consumer has specific requirement",
          "hierarchy": "RegExDot Consumer",
          "module": "RegExDot.Consumer",
          "name": "getHasSpecificRequirement",
          "normalized": "a-\u003eBool",
          "package": "regexdot",
          "partial": "Has Specific Requirement",
          "signature": "c-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Consumer.html#v:getHasSpecificRequirement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.Consumer",
          "name": "starHeight",
          "package": "regexdot",
          "signature": "c -\u003e StarHeight",
          "source": "src/RegExDot-Consumer.html#starHeight",
          "type": "method"
        },
        "index": {
          "hierarchy": "RegExDot Consumer",
          "module": "RegExDot.Consumer",
          "name": "starHeight",
          "normalized": "a-\u003eStarHeight",
          "package": "regexdot",
          "partial": "Height",
          "signature": "c-\u003eStarHeight",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Consumer.html#v:starHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDescribes the bounds of data-consumption.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "RegExDot.ConsumptionBounds",
          "name": "ConsumptionBounds",
          "package": "regexdot",
          "source": "src/RegExDot-ConsumptionBounds.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Describes the bounds of data-consumption",
          "hierarchy": "RegExDot ConsumptionBounds",
          "module": "RegExDot.ConsumptionBounds",
          "name": "ConsumptionBounds",
          "package": "regexdot",
          "partial": "Consumption Bounds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionBounds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe minimum & maximum bounds of potential data-consumption.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionBounds",
          "name": "ConsumptionBounds",
          "package": "regexdot",
          "source": "src/RegExDot-ConsumptionBounds.html#ConsumptionBounds",
          "type": "type"
        },
        "index": {
          "description": "The minimum maximum bounds of potential data-consumption",
          "hierarchy": "RegExDot ConsumptionBounds",
          "module": "RegExDot.ConsumptionBounds",
          "name": "ConsumptionBounds",
          "package": "regexdot",
          "partial": "Consumption Bounds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionBounds.html#t:ConsumptionBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA measure of the quantity of an unspecified type of data.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionBounds",
          "name": "DataLength",
          "package": "regexdot",
          "source": "src/RegExDot-ConsumptionBounds.html#DataLength",
          "type": "type"
        },
        "index": {
          "description": "measure of the quantity of an unspecified type of data",
          "hierarchy": "RegExDot ConsumptionBounds",
          "module": "RegExDot.ConsumptionBounds",
          "name": "DataLength",
          "package": "regexdot",
          "partial": "Data Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionBounds.html#t:DataLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if only a precise quantity of data is consumable; no more, no less.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionBounds",
          "name": "isPrecise",
          "package": "regexdot",
          "signature": "ConsumptionBounds -\u003e Bool",
          "source": "src/RegExDot-ConsumptionBounds.html#isPrecise",
          "type": "function"
        },
        "index": {
          "description": "Predicate which is True if only precise quantity of data is consumable no more no less",
          "hierarchy": "RegExDot ConsumptionBounds",
          "module": "RegExDot.ConsumptionBounds",
          "name": "isPrecise",
          "normalized": "ConsumptionBounds-\u003eBool",
          "package": "regexdot",
          "partial": "Precise",
          "signature": "ConsumptionBounds-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionBounds.html#v:isPrecise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExactly zero consumption.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionBounds",
          "name": "zero",
          "package": "regexdot",
          "signature": "ConsumptionBounds",
          "source": "src/RegExDot-ConsumptionBounds.html#zero",
          "type": "function"
        },
        "index": {
          "description": "Exactly zero consumption",
          "hierarchy": "RegExDot ConsumptionBounds",
          "module": "RegExDot.ConsumptionBounds",
          "name": "zero",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionBounds.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eConsumptionProfile\u003c/a\u003e\u003c/code\u003e is composed from both a capacity to consume, & an ability to discriminate based on the specific data.\n\tThe former is described by \u003ccode\u003e\u003ca\u003econsumptionBounds\u003c/a\u003e\u003c/code\u003e & the latter by both \u003ccode\u003e\u003ca\u003ehasSpecificRequirement\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003ecanConsumeAnything\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "ConsumptionProfile",
          "package": "regexdot",
          "source": "src/RegExDot-ConsumptionProfile.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION ConsumptionProfile is composed from both capacity to consume an ability to discriminate based on the specific data The former is described by consumptionBounds the latter by both hasSpecificRequirement canConsumeAnything",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "ConsumptionProfile",
          "package": "regexdot",
          "partial": "Consumption Profile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eConsumptionProfile\u003c/a\u003e\u003c/code\u003es of all the aggregated tails of a list of \u003ccode\u003eConsumer\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "AccumulatedConsumptionProfiles",
          "package": "regexdot",
          "source": "src/RegExDot-ConsumptionProfile.html#AccumulatedConsumptionProfiles",
          "type": "type"
        },
        "index": {
          "description": "The ConsumptionProfile of all the aggregated tails of list of Consumer",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "AccumulatedConsumptionProfiles",
          "package": "regexdot",
          "partial": "Accumulated Consumption Profiles",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#t:AccumulatedConsumptionProfiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A \u003ccode\u003eConsumer\u003c/code\u003e is considered to have a \u003ccode\u003e\u003ca\u003eConsumptionProfile\u003c/a\u003e\u003c/code\u003e composed from both a capacity to consume, & an ability to discriminate.\n\u003c/li\u003e\u003cli\u003e Whilst \u003ccode\u003e\u003ca\u003ehasSpecificRequirement\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003ecanConsumeAnything\u003c/a\u003e\u003c/code\u003e look like opposites, they can assume independent values; the instance can be both, but only be neither when empty.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "ConsumptionProfile",
          "package": "regexdot",
          "source": "src/RegExDot-ConsumptionProfile.html#ConsumptionProfile",
          "type": "data"
        },
        "index": {
          "description": "Consumer is considered to have ConsumptionProfile composed from both capacity to consume an ability to discriminate Whilst hasSpecificRequirement canConsumeAnything look like opposites they can assume independent values the instance can be both but only be neither when empty",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "ConsumptionProfile",
          "package": "regexdot",
          "partial": "Consumption Profile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#t:ConsumptionProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe net effect of two concatenated \u003ccode\u003e\u003ca\u003eConsumptionProfile\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "(|+|)",
          "package": "regexdot",
          "signature": "ConsumptionProfile -\u003e ConsumptionProfile -\u003e ConsumptionProfile",
          "source": "src/RegExDot-ConsumptionProfile.html#%7C%2B%7C",
          "type": "function"
        },
        "index": {
          "description": "The net effect of two concatenated ConsumptionProfile",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "(|+|) |+|",
          "normalized": "ConsumptionProfile-\u003eConsumptionProfile-\u003eConsumptionProfile",
          "package": "regexdot",
          "signature": "ConsumptionProfile-\u003eConsumptionProfile-\u003eConsumptionProfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#v:-124--43--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe net effect of two alternative \u003ccode\u003e\u003ca\u003eConsumptionProfile\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "(\u003c\u003e)",
          "package": "regexdot",
          "signature": "ConsumptionProfile -\u003e ConsumptionProfile -\u003e ConsumptionProfile",
          "source": "src/RegExDot-ConsumptionProfile.html#%3C%3E",
          "type": "function"
        },
        "index": {
          "description": "The net effect of two alternative ConsumptionProfile",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "ConsumptionProfile-\u003eConsumptionProfile-\u003eConsumptionProfile",
          "package": "regexdot",
          "signature": "ConsumptionProfile-\u003eConsumptionProfile-\u003eConsumptionProfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.ConsumptionProfile",
          "name": "MkConsumptionProfile",
          "package": "regexdot",
          "signature": "MkConsumptionProfile",
          "source": "src/RegExDot-ConsumptionProfile.html#ConsumptionProfile",
          "type": "function"
        },
        "index": {
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "MkConsumptionProfile",
          "package": "regexdot",
          "partial": "Mk Consumption Profile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#v:MkConsumptionProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulate the specified list of \u003ccode\u003e\u003ca\u003eConsumptionProfile\u003c/a\u003e\u003c/code\u003es, from the specified initial value.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "accumulateFrom",
          "package": "regexdot",
          "signature": "ConsumptionProfile -\u003e [ConsumptionProfile] -\u003e AccumulatedConsumptionProfiles",
          "source": "src/RegExDot-ConsumptionProfile.html#accumulateFrom",
          "type": "function"
        },
        "index": {
          "description": "Accumulate the specified list of ConsumptionProfile from the specified initial value",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "accumulateFrom",
          "normalized": "ConsumptionProfile-\u003e[ConsumptionProfile]-\u003eAccumulatedConsumptionProfiles",
          "package": "regexdot",
          "partial": "From",
          "signature": "ConsumptionProfile-\u003e[ConsumptionProfile]-\u003eAccumulatedConsumptionProfiles",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#v:accumulateFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe aggregate of the specified concatenation of \u003ccode\u003e\u003ca\u003eConsumptionProfile\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "aggregateFromConcatenation",
          "package": "regexdot",
          "signature": "[ConsumptionProfile] -\u003e ConsumptionProfile",
          "source": "src/RegExDot-ConsumptionProfile.html#aggregateFromConcatenation",
          "type": "function"
        },
        "index": {
          "description": "The aggregate of the specified concatenation of ConsumptionProfile",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "aggregateFromConcatenation",
          "normalized": "[ConsumptionProfile]-\u003eConsumptionProfile",
          "package": "regexdot",
          "partial": "From Concatenation",
          "signature": "[ConsumptionProfile]-\u003eConsumptionProfile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#v:aggregateFromConcatenation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether at least one arbitrary input datum can be consumed.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "canConsumeAnything",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ConsumptionProfile.html#ConsumptionProfile",
          "type": "function"
        },
        "index": {
          "description": "Whether at least one arbitrary input datum can be consumed",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "canConsumeAnything",
          "package": "regexdot",
          "partial": "Consume Anything",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#v:canConsumeAnything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe permissible quantity of data, which can be consumed.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "consumptionBounds",
          "package": "regexdot",
          "signature": "ConsumptionBounds",
          "source": "src/RegExDot-ConsumptionProfile.html#ConsumptionProfile",
          "type": "function"
        },
        "index": {
          "description": "The permissible quantity of data which can be consumed",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "consumptionBounds",
          "package": "regexdot",
          "partial": "Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#v:consumptionBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether at least one specific input datum is required.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "hasSpecificRequirement",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ConsumptionProfile.html#ConsumptionProfile",
          "type": "function"
        },
        "index": {
          "description": "Whether at least one specific input datum is required",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "hasSpecificRequirement",
          "package": "regexdot",
          "partial": "Specific Requirement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#v:hasSpecificRequirement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate, which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the specified data-length, falls within the specified \u003ccode\u003e\u003ca\u003eConsumptionBounds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "withinConsumptionBounds",
          "package": "regexdot",
          "signature": "DataLength-\u003e ConsumptionProfile-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Predicate which is True if the specified data-length falls within the specified ConsumptionBounds",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "withinConsumptionBounds",
          "normalized": "DataLength-\u003eConsumptionProfile-\u003eBool",
          "package": "regexdot",
          "partial": "Consumption Bounds",
          "signature": "DataLength-\u003eConsumptionProfile-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#v:withinConsumptionBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth minimum & maximum set to zero; which can be used as the initial value when accumulating the sum of a list.\n\u003c/p\u003e",
          "module": "RegExDot.ConsumptionProfile",
          "name": "zero",
          "package": "regexdot",
          "signature": "ConsumptionProfile",
          "source": "src/RegExDot-ConsumptionProfile.html#zero",
          "type": "function"
        },
        "index": {
          "description": "Both minimum maximum set to zero which can be used as the initial value when accumulating the sum of list",
          "hierarchy": "RegExDot ConsumptionProfile",
          "module": "RegExDot.ConsumptionProfile",
          "name": "zero",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ConsumptionProfile.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Defines \u003cem\u003ebinary\u003c/em\u003e operators, to form a \u003cem\u003eDomain-specific Language\u003c/em\u003e, by which to compose \u003ccode\u003e\u003ca\u003eConcatenations\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003cli\u003e Each operator quantifies the specified \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, & prepends it to the specified \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eTODO\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tCould \u003ccode\u003e[]\u003c/code\u003e & \u003ccode\u003eMeta\u003c/code\u003e be instances of a type-class which has methods (-:) etc.,\n\t\tallowing the former to prepend \u003ccode\u003e\u003ca\u003ecaptureGroup\u003c/a\u003e\u003c/code\u003e & the latter \u003ccode\u003e\u003ca\u003eRequire\u003c/a\u003e\u003c/code\u003e ?\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "RegExDot.DSL",
          "name": "DSL",
          "package": "regexdot",
          "source": "src/RegExDot-DSL.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines binary operators to form Domain-specific Language by which to compose Concatenations from Pattern Each operator quantifies the specified Pattern prepends it to the specified Concatenation TODO Could Meta be instances of type-class which has methods etc allowing the former to prepend captureGroup the latter Require",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "DSL",
          "package": "regexdot",
          "partial": "DSL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003enon-greedy\u003c/em\u003e version of '#-\u003e#:'.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(#-\u003e#?:)",
          "package": "regexdot",
          "signature": "(Pattern a, RepetitionBounds) -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%23-%3E%23%3F%3A",
          "type": "function"
        },
        "index": {
          "description": "non-greedy version of",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(#-\u003e#?:) #-\u003e#?:",
          "normalized": "(Pattern a,RepetitionBounds)-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "(Pattern a,RepetitionBounds)-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-35--45--62--35--63-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, repeated a range of times, to the specified \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(#-\u003e#:)",
          "package": "regexdot",
          "signature": "(Pattern a, RepetitionBounds) -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%23-%3E%23%3A",
          "type": "function"
        },
        "index": {
          "description": "Prepend Pattern repeated range of times to the specified Concatenation",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(#-\u003e#:) #-\u003e#:",
          "normalized": "(Pattern a,RepetitionBounds)-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "(Pattern a,RepetitionBounds)-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-35--45--62--35-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003enon-greedy\u003c/em\u003e version of '#-\u003e:'.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(#-\u003e?:)",
          "package": "regexdot",
          "signature": "(Pattern a, Repetitions) -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%23-%3E%3F%3A",
          "type": "function"
        },
        "index": {
          "description": "non-greedy version of",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(#-\u003e?:) #-\u003e?:",
          "normalized": "(Pattern a,Repetitions)-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "(Pattern a,Repetitions)-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-35--45--62--63-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, repeated at least a specified number of times, to the specified \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(#-\u003e:)",
          "package": "regexdot",
          "signature": "(Pattern a, Repetitions) -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%23-%3E%3A",
          "type": "function"
        },
        "index": {
          "description": "Prepend Pattern repeated at least specified number of times to the specified Concatenation",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(#-\u003e:) #-\u003e:",
          "normalized": "(Pattern a,Repetitions)-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "(Pattern a,Repetitions)-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-35--45--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, repeated a precise number of times, to the specified \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(#:)",
          "package": "regexdot",
          "signature": "(Pattern a, Repetitions) -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%23%3A",
          "type": "function"
        },
        "index": {
          "description": "Prepend Pattern repeated precise number of times to the specified Concatenation",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(#:) #:",
          "normalized": "(Pattern a,Repetitions)-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "(Pattern a,Repetitions)-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-35-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003enon-greedy\u003c/em\u003e version of \u003ccode\u003e\u003ca\u003e*:\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(*?:)",
          "package": "regexdot",
          "signature": "Pattern a -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%2A%3F%3A",
          "type": "function"
        },
        "index": {
          "description": "non-greedy version of",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(*?:) *?:",
          "normalized": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-42--63-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, repeatable zero or more times, to the specified \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(*:)",
          "package": "regexdot",
          "signature": "Pattern a -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%2A%3A",
          "type": "function"
        },
        "index": {
          "description": "Prepend Pattern repeatable zero or more times to the specified Concatenation",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(*:) *:",
          "normalized": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003enon-greedy\u003c/em\u003e version of \u003ccode\u003e\u003ca\u003e+:\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(+?:)",
          "package": "regexdot",
          "signature": "Pattern a -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%2B%3F%3A",
          "type": "function"
        },
        "index": {
          "description": "non-greedy version of",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(+?:) +?:",
          "normalized": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-43--63-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend a \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, repeatable one or more times, to the specified \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(+:)",
          "package": "regexdot",
          "signature": "Pattern a -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%2B%3A",
          "type": "function"
        },
        "index": {
          "description": "Prepend Pattern repeatable one or more times to the specified Concatenation",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(+:) +:",
          "normalized": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend an unrepeated \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, to the specified \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(-:)",
          "package": "regexdot",
          "signature": "Pattern a -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#-%3A",
          "type": "function"
        },
        "index": {
          "description": "Prepend an unrepeated Pattern to the specified Concatenation",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(-:) -:",
          "normalized": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Sandwiches a \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e between optional \u003ccode\u003e\u003ca\u003eAnchor\u003c/a\u003e\u003c/code\u003es to construct a \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Accounts for the unusual requirement to place an \u003ccode\u003e\u003ca\u003eStern\u003c/a\u003e\u003c/code\u003e at the start of the \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e, or an \u003ccode\u003e\u003ca\u003eBow\u003c/a\u003e\u003c/code\u003e at the end.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.DSL",
          "name": "(\u003c~\u003e)",
          "package": "regexdot",
          "signature": "AnchorSpecification-\u003e Concatenation a-\u003e ExtendedRegEx a",
          "type": "function"
        },
        "index": {
          "description": "Sandwiches Concatenation between optional Anchor to construct ExtendedRegEx Accounts for the unusual requirement to place an Stern at the start of the Concatenation or an Bow at the end",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(\u003c~\u003e) \u003c~\u003e",
          "normalized": "AnchorSpecification-\u003eConcatenation a-\u003eExtendedRegEx a",
          "package": "regexdot",
          "signature": "AnchorSpecification-\u003eConcatenation a-\u003eExtendedRegEx a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-60--126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003enon-greedy\u003c/em\u003e version of \u003ccode\u003e\u003ca\u003e?:\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(??:)",
          "package": "regexdot",
          "signature": "Pattern a -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%3F%3F%3A",
          "type": "function"
        },
        "index": {
          "description": "non-greedy version of",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(??:) ??:",
          "normalized": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-63--63-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend an optional \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, to the specified \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DSL",
          "name": "(?:)",
          "package": "regexdot",
          "signature": "Pattern a -\u003e Concatenation a -\u003e Concatenation a",
          "source": "src/RegExDot-DSL.html#%3F%3A",
          "type": "function"
        },
        "index": {
          "description": "Prepend an optional Pattern to the specified Concatenation",
          "hierarchy": "RegExDot DSL",
          "module": "RegExDot.DSL",
          "name": "(?:) ?:",
          "normalized": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "package": "regexdot",
          "signature": "Pattern a-\u003eConcatenation a-\u003eConcatenation a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DSL.html#v:-63-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tAugments a \u003ccode\u003e\u003ca\u003eSpan\u003c/a\u003e\u003c/code\u003e, with the specific data concerned.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "RegExDot.DataSpan",
          "name": "DataSpan",
          "package": "regexdot",
          "source": "src/RegExDot-DataSpan.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Augments Span with the specific data concerned",
          "hierarchy": "RegExDot DataSpan",
          "module": "RegExDot.DataSpan",
          "name": "DataSpan",
          "package": "regexdot",
          "partial": "Data Span",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DataSpan.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Augment \u003ccode\u003e\u003ca\u003eSpan\u003c/a\u003e\u003c/code\u003e with a copy of the data to which it refers.\n\u003c/li\u003e\u003cli\u003e Similar to \u003ca\u003ehttp://hackage.haskell.org/packages/archive/regex-base/latest/doc/html/Text-Regex-Base-RegexLike.html#t%3AMatchText\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.DataSpan",
          "name": "DataSpan",
          "package": "regexdot",
          "source": "src/RegExDot-DataSpan.html#DataSpan",
          "type": "type"
        },
        "index": {
          "description": "Augment Span with copy of the data to which it refers Similar to http hackage.haskell.org packages archive regex-base latest doc html Text-Regex-Base-RegexLike.html AMatchText",
          "hierarchy": "RegExDot DataSpan",
          "module": "RegExDot.DataSpan",
          "name": "DataSpan",
          "package": "regexdot",
          "partial": "Data Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DataSpan.html#t:DataSpan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the furthest extent, i.e. the offset just after the end.\n\u003c/p\u003e",
          "module": "RegExDot.DataSpan",
          "name": "after",
          "package": "regexdot",
          "signature": "DataSpan a -\u003e DataLength",
          "source": "src/RegExDot-DataSpan.html#after",
          "type": "function"
        },
        "index": {
          "description": "Returns the furthest extent i.e the offset just after the end",
          "hierarchy": "RegExDot DataSpan",
          "module": "RegExDot.DataSpan",
          "name": "after",
          "normalized": "DataSpan a-\u003eDataLength",
          "package": "regexdot",
          "signature": "DataSpan a-\u003eDataLength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DataSpan.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an empty instance, located at the specified offset.\n\u003c/p\u003e",
          "module": "RegExDot.DataSpan",
          "name": "empty",
          "package": "regexdot",
          "signature": "DataLength -\u003e DataSpan a",
          "source": "src/RegExDot-DataSpan.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Constructs an empty instance located at the specified offset",
          "hierarchy": "RegExDot DataSpan",
          "module": "RegExDot.DataSpan",
          "name": "empty",
          "normalized": "DataLength-\u003eDataSpan a",
          "package": "regexdot",
          "signature": "DataLength-\u003eDataSpan a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DataSpan.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Condenses a list into a single value.\n\u003c/li\u003e\u003cli\u003e Expects a gap-free, sorted list.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.DataSpan",
          "name": "join",
          "package": "regexdot",
          "signature": "DataLength-\u003e [DataSpan a]-\u003e DataSpan a",
          "type": "function"
        },
        "index": {
          "description": "Condenses list into single value Expects gap-free sorted list",
          "hierarchy": "RegExDot DataSpan",
          "module": "RegExDot.DataSpan",
          "name": "join",
          "normalized": "DataLength-\u003e[DataSpan a]-\u003eDataSpan a",
          "package": "regexdot",
          "signature": "DataLength-\u003e[DataSpan a]-\u003eDataSpan a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DataSpan.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tPermits transformation of \u003ccode\u003e\u003ca\u003eMatchList\u003c/a\u003e\u003c/code\u003e, to facilitate standardisation.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "RegExDot.DataSpanTree",
          "name": "DataSpanTree",
          "package": "regexdot",
          "source": "src/RegExDot-DataSpanTree.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Permits transformation of MatchList to facilitate standardisation",
          "hierarchy": "RegExDot DataSpanTree",
          "module": "RegExDot.DataSpanTree",
          "name": "DataSpanTree",
          "package": "regexdot",
          "partial": "Data Span Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DataSpanTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e POSIX describes the contents of \u003cem\u003ecapture-groups\u003c/em\u003e, as summarised in \u003ca\u003ehttp://www2.research.att.com/~gsf/testregex/\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e, is a complete description of the match between \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e & RegEx.ExtendedRegEx'; this function extracts a POSIX-conformant list from it.\n\u003c/li\u003e\u003cli\u003e The major differences are, that:\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOnly data from parenthesized sub-expressions (\u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e) is captured.\n\u003c/p\u003e\u003cp\u003eOnly the \u003cem\u003elast\u003c/em\u003e repetition of a repeated sub-expression is returned.\n\t\t\u003ca\u003ehttp://www.opengroup.org/onlinepubs/009695399/functions/regcomp.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe data captured within each parenthesized sub-expression, is summarised as a single \u003ccode\u003e\u003ca\u003eDataSpan\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePOSIX specifies a \u003ccode\u003e\u003ca\u003eSpan\u003c/a\u003e\u003c/code\u003e-offset of \u003ccode\u003e-1\u003c/code\u003e, for sub-expressions which match zero times; cf sub-expressions which consume nothing, once.\n\t\t\u003ca\u003ehttp://www.opengroup.org/onlinepubs/009695399/functions/regcomp.html\u003c/a\u003e.\n\t\t\u003ccode\u003e\n\t\t\t(\u003ca\u003eace\u003c/a\u003e Text.Regex.Posix.=~ \u003ca\u003ea(b)*c(d)?e\u003c/a\u003e) :: Text.Regex.Base.RegexLike.MatchArray\n\t\t\tarray (0,2) [(0,(0,3)),(1,(-1,0)),(2,(-1,0))]\n\n(\u003ca\u003eace\u003c/a\u003e Text.Regex.Posix.=~ \u003ca\u003ea(b*)c(d?)e\u003c/a\u003e) :: Text.Regex.Base.RegexLike.MatchArray\n\t\t\tarray (0,2) [(0,(0,3)),(1,(1,0)),(2,(2,0))]\n\t\t\u003c/code\u003e\n\t\tI consider this a poor convention, resulting from the focus of POSIX on C, which makes subsequent calculation from the list of \u003ccode\u003eDataSpan\u003c/code\u003es difficult & error-prone.\n\u003c/p\u003e",
          "module": "RegExDot.DataSpanTree",
          "name": "extractCaptureGroups",
          "package": "regexdot",
          "signature": "Bool-\u003e DataSpanTreeList a-\u003e [DataSpan a]",
          "type": "function"
        },
        "index": {
          "description": "POSIX describes the contents of capture-groups as summarised in http www2.research.att.com gsf testregex Result is complete description of the match between InputData RegEx.ExtendedRegEx this function extracts POSIX-conformant list from it The major differences are that Only data from parenthesized sub-expressions Alternatives is captured Only the last repetition of repeated sub-expression is returned http www.opengroup.org onlinepubs functions regcomp.html The data captured within each parenthesized sub-expression is summarised as single DataSpan POSIX specifies Span offset of for sub-expressions which match zero times cf sub-expressions which consume nothing once http www.opengroup.org onlinepubs functions regcomp.html ace Text.Regex.Posix Text.Regex.Base.RegexLike.MatchArray array ace Text.Regex.Posix Text.Regex.Base.RegexLike.MatchArray array consider this poor convention resulting from the focus of POSIX on which makes subsequent calculation from the list of DataSpan difficult error-prone",
          "hierarchy": "RegExDot DataSpanTree",
          "module": "RegExDot.DataSpanTree",
          "name": "extractCaptureGroups",
          "normalized": "Bool-\u003eDataSpanTreeList a-\u003e[DataSpan a]",
          "package": "regexdot",
          "partial": "Capture Groups",
          "signature": "Bool-\u003eDataSpanTreeList a-\u003e[DataSpan a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DataSpanTree.html#v:extractCaptureGroups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCondenses a \u003ccode\u003eDataSpanTreeList\u003c/code\u003es into a list of \u003ccode\u003e\u003ca\u003eDataSpan\u003c/a\u003e\u003c/code\u003es, using \u003ccode\u003e\u003ca\u003ejoin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.DataSpanTree",
          "name": "flattenTreeList",
          "package": "regexdot",
          "signature": "DataLength-\u003e DataSpanTreeList a-\u003e [DataSpan a]",
          "type": "function"
        },
        "index": {
          "description": "Condenses DataSpanTreeList into list of DataSpan using join",
          "hierarchy": "RegExDot DataSpanTree",
          "module": "RegExDot.DataSpanTree",
          "name": "flattenTreeList",
          "normalized": "DataLength-\u003eDataSpanTreeList a-\u003e[DataSpan a]",
          "package": "regexdot",
          "partial": "Tree List",
          "signature": "DataLength-\u003eDataSpanTreeList a-\u003e[DataSpan a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DataSpanTree.html#v:flattenTreeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eMatchList\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003eDataSpanTreeList\u003c/code\u003e, by transforming the \u003ccode\u003e\u003ca\u003eLeaf\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.DataSpanTree",
          "name": "toTreeList",
          "package": "regexdot",
          "signature": "MatchList a -\u003e DataSpanTreeList a",
          "source": "src/RegExDot-DataSpanTree.html#toTreeList",
          "type": "function"
        },
        "index": {
          "description": "Converts MatchList into DataSpanTreeList by transforming the Leaf",
          "hierarchy": "RegExDot DataSpanTree",
          "module": "RegExDot.DataSpanTree",
          "name": "toTreeList",
          "normalized": "MatchList a-\u003eDataSpanTreeList a",
          "package": "regexdot",
          "partial": "Tree List",
          "signature": "MatchList a-\u003eDataSpanTreeList a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-DataSpanTree.html#v:toTreeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Defines those options relating to the \u003ca\u003eRegExDot.RegEx\u003c/a\u003e-runtime.\n\u003c/li\u003e\u003cli\u003e These tend to be options which don't affect the result, only the means by which it is achieved.\n\u003c/li\u003e\u003cli\u003e Whilst similar structures are present in other regex-implementations, there's no standardisation of the fields.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "ExecutionOptions",
          "package": "regexdot",
          "source": "src/RegExDot-ExecutionOptions.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines those options relating to the RegExDot.RegEx runtime These tend to be options which don affect the result only the means by which it is achieved Whilst similar structures are present in other regex-implementations there no standardisation of the fields",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "ExecutionOptions",
          "package": "regexdot",
          "partial": "Execution Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe switches used to control execution of the \u003cem\u003eregex\u003c/em\u003e-engine.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "ExecutionOptions",
          "package": "regexdot",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "data"
        },
        "index": {
          "description": "The switches used to control execution of the regex engine",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "ExecutionOptions",
          "package": "regexdot",
          "partial": "Execution Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#t:ExecutionOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.ExecutionOptions",
          "name": "MkExecutionOptions",
          "package": "regexdot",
          "signature": "MkExecutionOptions",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "MkExecutionOptions",
          "package": "regexdot",
          "partial": "Mk Execution Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:MkExecutionOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf an \u003cem\u003ealternative\u003c/em\u003e can't match, irrespective of the subsequent \u003cem\u003eRegExDot.RegEx.Concatenation\u003c/em\u003e, then avoid futile trial \u003cem\u003eRegExDot.Repeatable.Repetitions\u003c/em\u003e. The converse of \u003ccode\u003e\u003ca\u003echeckForUnconsumableData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "abortTrialRepetitionsOnInherentFailure",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "If an alternative can match irrespective of the subsequent RegExDot.RegEx.Concatenation then avoid futile trial RegExDot.Repeatable.Repetitions The converse of checkForUnconsumableData",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "abortTrialRepetitionsOnInherentFailure",
          "package": "regexdot",
          "partial": "Trial Repetitions On Inherent Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:abortTrialRepetitionsOnInherentFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck for zero data-consumption by the \u003ccode\u003en\u003c/code\u003e-th \u003cem\u003eRegExDot.Repeatable.Repeatable RegExDot.RegEx.CaptureGroup\u003c/em\u003e, before attempting \u003ccode\u003en+1\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "abortTrialRepetitionsOnZeroConsumption",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Check for zero data-consumption by the th RegExDot.Repeatable.Repeatable RegExDot.RegEx.CaptureGroup before attempting",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "abortTrialRepetitionsOnZeroConsumption",
          "package": "regexdot",
          "partial": "Trial Repetitions On Zero Consumption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:abortTrialRepetitionsOnZeroConsumption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to bypass reading of the input data, if the mapping to specific \u003cem\u003eRegExDot.RegEx.RepeatablePattern\u003c/em\u003es isn't required, & the \u003cem\u003eRegExDot.RegEx.ExtendedRegEx\u003c/em\u003e can consume the required quantity of anything.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "bypassInputDataForLiberalConsumer",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Whether to bypass reading of the input data if the mapping to specific RegExDot.RegEx.RepeatablePattern isn required the RegExDot.RegEx.ExtendedRegEx can consume the required quantity of anything",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "bypassInputDataForLiberalConsumer",
          "package": "regexdot",
          "partial": "Input Data For Liberal Consumer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:bypassInputDataForLiberalConsumer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvoid futile trial solutions, involving repetitions of anchored alternatives, which must consume data.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "catchIncompatibleAnchors",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Avoid futile trial solutions involving repetitions of anchored alternatives which must consume data",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "catchIncompatibleAnchors",
          "package": "regexdot",
          "partial": "Incompatible Anchors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:catchIncompatibleAnchors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the \u003cem\u003eRegExDot.RegEx.ExtendedRegEx\u003c/em\u003e ends in an inelastic (zero \u003cem\u003eStar-height\u003c/em\u003e) tail, confirm its existence at the end of the \u003cem\u003eRegExDot.RegEx.InputData\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "checkExistenceOfInelasticTail",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "If the RegExDot.RegEx.ExtendedRegEx ends in an inelastic zero Star-height tail confirm its existence at the end of the RegExDot.RegEx.InputData",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "checkExistenceOfInelasticTail",
          "package": "regexdot",
          "partial": "Existence Of Inelastic Tail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:checkExistenceOfInelasticTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether there's no possibility of consuming some of the input data. The converse of \u003ccode\u003e\u003ca\u003eabortTrialRepetitionsOnInherentFailure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "checkForUnconsumableData",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Check whether there no possibility of consuming some of the input data The converse of abortTrialRepetitionsOnInherentFailure",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "checkForUnconsumableData",
          "package": "regexdot",
          "partial": "For Unconsumable Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:checkForUnconsumableData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGreedily consume data, only up to the limit beyond which, future requirements would be compromised.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "moderateGreed",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Greedily consume data only up to the limit beyond which future requirements would be compromised",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "moderateGreed",
          "package": "regexdot",
          "partial": "Greed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:moderateGreed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePermit \u003cem\u003eRegExDot.RegEx.Alternatives\u003c/em\u003e to be re-ordered, in an attempt to more quickly locate a result.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "permitReorderingOfAlternatives",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Permit RegExDot.RegEx.Alternatives to be re-ordered in an attempt to more quickly locate result",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "permitReorderingOfAlternatives",
          "package": "regexdot",
          "partial": "Reordering Of Alternatives",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:permitReorderingOfAlternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWithin the \u003cem\u003eRegExDot.RegEx.MatchedData\u003c/em\u003e from which each candidate \u003cem\u003eRegExDot.RegEx.Match\u003c/em\u003e amongst sequences of \u003cem\u003eRegExDot.RegEx.Alternatives\u003c/em\u003e, is ultimately composed, prefer \u003cem\u003eRegExDot.ConsumptionBounds.ConsumptionBounds\u003c/em\u003e of \u003cem\u003eRegExDot.RegEx.InputData\u003c/em\u003e, beyond \u003cem\u003eRegExDot.Repeatable.getFewest\u003c/em\u003e, by \u003cem\u003eRegExDot.Repeatable.isGreedy RegExDot.RegEx.RepeatablePattern\u003c/em\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "preferAlternativesWhichFeedTheGreedy",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Within the RegExDot.RegEx.MatchedData from which each candidate RegExDot.RegEx.Match amongst sequences of RegExDot.RegEx.Alternatives is ultimately composed prefer RegExDot.ConsumptionBounds.ConsumptionBounds of RegExDot.RegEx.InputData beyond RegExDot.Repeatable.getFewest by RegExDot.Repeatable.isGreedy RegExDot.RegEx.RepeatablePattern",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "preferAlternativesWhichFeedTheGreedy",
          "package": "regexdot",
          "partial": "Alternatives Which Feed The Greedy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:preferAlternativesWhichFeedTheGreedy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare \u003cem\u003eRegExDot.ConsumptionBounds.ConsumptionBounds\u003c/em\u003e on successive \u003cem\u003eRegExDot.Repeatable.Repetitions\u003c/em\u003e of \u003cem\u003eRegExDot.RegEx.CaptureGroup\u003c/em\u003e, between candidate \u003cem\u003eRegExDot.RegEx.Match\u003c/em\u003ees, to mimic the behaviour of the unrolled \u003cem\u003eRegExDot.Repeatable.Repetitions\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "preferAlternativesWhichMimickUnrolling",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Compare RegExDot.ConsumptionBounds.ConsumptionBounds on successive RegExDot.Repeatable.Repetitions of RegExDot.RegEx.CaptureGroup between candidate RegExDot.RegEx.Match es to mimic the behaviour of the unrolled RegExDot.Repeatable.Repetitions",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "preferAlternativesWhichMimickUnrolling",
          "package": "regexdot",
          "partial": "Alternatives Which Mimick Unrolling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:preferAlternativesWhichMimickUnrolling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefer fewer \u003cem\u003eRegExDot.Repeatable.Repetitions\u003c/em\u003e of \u003cem\u003eRegExDot.RegEx.Alternatives\u003c/em\u003e, to discourage the capture of null lists of \u003cem\u003eRegExDot.RegEx.InputData\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "preferFewerRepeatedAlternatives",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Prefer fewer RegExDot.Repeatable.Repetitions of RegExDot.RegEx.Alternatives to discourage the capture of null lists of RegExDot.RegEx.InputData",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "preferFewerRepeatedAlternatives",
          "package": "regexdot",
          "partial": "Fewer Repeated Alternatives",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:preferFewerRepeatedAlternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf merely interested in a \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e result, rather than the optimal mapping of input data to \u003cem\u003eRegExDot.RegEx.RepeatablePattern\u003c/em\u003es, avoid unnecessary evaluation of the \u003cem\u003eRegEx.Match\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "requireMatchList",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "If merely interested in Bool result rather than the optimal mapping of input data to RegExDot.RegEx.RepeatablePattern avoid unnecessary evaluation of the RegEx.Match",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "requireMatchList",
          "package": "regexdot",
          "partial": "Match List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:requireMatchList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets those fields which depend crucially on whether the caller wants to retrieve any \u003cem\u003eRegExDot.RegEx.MatchList\u003c/em\u003e from the \u003cem\u003eRegExDot.RegEx.Result\u003c/em\u003e, or just query whether there is one.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "setVerbose",
          "package": "regexdot",
          "signature": "Bool -\u003e ExecutionOptions -\u003e ExecutionOptions",
          "source": "src/RegExDot-ExecutionOptions.html#setVerbose",
          "type": "function"
        },
        "index": {
          "description": "Sets those fields which depend crucially on whether the caller wants to retrieve any RegExDot.RegEx.MatchList from the RegExDot.RegEx.Result or just query whether there is one",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "setVerbose",
          "normalized": "Bool-\u003eExecutionOptions-\u003eExecutionOptions",
          "package": "regexdot",
          "partial": "Verbose",
          "signature": "Bool-\u003eExecutionOptions-\u003eExecutionOptions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:setVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether \u003cem\u003eRegExDot.RegEx.Alternatives\u003c/em\u003e consists of just a singleton \u003cem\u003eRegExDot.RegEx.ExtendedRegEx\u003c/em\u003e, & has therefore been used merely as a capture-group. Though this doesn't affect the result, it vastly improves efficiency.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "unrollRepeatedSingletonAlternative",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Check whether RegExDot.RegEx.Alternatives consists of just singleton RegExDot.RegEx.ExtendedRegEx has therefore been used merely as capture-group Though this doesn affect the result it vastly improves efficiency",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "unrollRepeatedSingletonAlternative",
          "package": "regexdot",
          "partial": "Repeated Singleton Alternative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:unrollRepeatedSingletonAlternative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRather than performing an exhaustive search for the optimal choice amongst \u003cem\u003eRegExDot.RegEx.Alternatives\u003c/em\u003e, merely select the first that matches; conform to \u003cem\u003ePerl\u003c/em\u003e rather than \u003cem\u003ePOSIX\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "useFirstMatchAmongAlternatives",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "Rather than performing an exhaustive search for the optimal choice amongst RegExDot.RegEx.Alternatives merely select the first that matches conform to Perl rather than POSIX",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "useFirstMatchAmongAlternatives",
          "package": "regexdot",
          "partial": "First Match Among Alternatives",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:useFirstMatchAmongAlternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen the number of repetitions of a \u003cem\u003eRegExDot.RegEx.CaptureGroup\u003c/em\u003e is precisely specified, check whether the resulting minimum data-requirement is available.\n\u003c/p\u003e",
          "module": "RegExDot.ExecutionOptions",
          "name": "validateMinConsumptionOfAlternatives",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-ExecutionOptions.html#ExecutionOptions",
          "type": "function"
        },
        "index": {
          "description": "When the number of repetitions of RegExDot.RegEx.CaptureGroup is precisely specified check whether the resulting minimum data-requirement is available",
          "hierarchy": "RegExDot ExecutionOptions",
          "module": "RegExDot.ExecutionOptions",
          "name": "validateMinConsumptionOfAlternatives",
          "package": "regexdot",
          "partial": "Min Consumption Of Alternatives",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ExecutionOptions.html#v:validateMinConsumptionOfAlternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tProvides a default implementation of the type-classes, required for \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e Int.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCAVEATS\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eIn contrast to the traditional regex, there's no reason to escape a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, other than when referring to a \u003cem\u003eshortcut\u003c/em\u003e.\n\tSince no \u003cem\u003eshortcuts\u003c/em\u003e are defined in this minimal definition, it's always an error to escape a character.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "RegExDot.InstanceInt",
          "name": "InstanceInt",
          "package": "regexdot",
          "source": "src/RegExDot-InstanceInt.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Provides default implementation of the type-classes required for ExtendedRegEx Int CAVEATS In contrast to the traditional regex there no reason to escape Char other than when referring to shortcut Since no shortcuts are defined in this minimal definition it always an error to escape character",
          "hierarchy": "RegExDot InstanceInt",
          "module": "RegExDot.InstanceInt",
          "name": "InstanceInt",
          "package": "regexdot",
          "partial": "Instance Int",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-InstanceInt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Describes the set of polymorphic data, which can be matched.\n\u003c/li\u003e\u003cli\u003e Only permits a match against exactly one polymorphic datum, which distinguishes it from a \u003cem\u003ezero-width assertion\u003c/em\u003e, like an \u003cem\u003eanchor\u003c/em\u003e, \u003cem\u003eword-boundary\u003c/em\u003e, or \u003cem\u003elook-ahead assertion\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e Designed to be used by a polymorphic \u003cem\u003eregex\u003c/em\u003e-engine, to implement the traditional meta-characters; \u003ccode\u003e. [] [^]\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Permits \u003cem\u003ePerl-style shortcuts\u003c/em\u003e for commonly used \u003ccode\u003e\u003ca\u003eMeta\u003c/a\u003e\u003c/code\u003e-data, to be canned & assigned a single-\u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e mnemonic for subsequent reference;\n\tthe implementation of \u003ccode\u003e\u003ca\u003eRead\u003c/a\u003e\u003c/code\u003e looks for a back-slashed \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, for which it expects there to be a corresponding canned \u003ccode\u003e\u003ca\u003eMeta\u003c/a\u003e\u003c/code\u003e.\n\tSince this class is polymorphic, it has no knowledge of what shortcuts might be appropriate for the chosen type-parameter,\n\tso the expansion from the back-slashed \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to corresponding \u003ccode\u003e\u003ca\u003eMeta\u003c/a\u003e\u003c/code\u003e-data, is performed through the \u003ccode\u003e\u003ca\u003eexpand\u003c/a\u003e\u003c/code\u003e interface of the \u003ccode\u003e\u003ca\u003eShortcutExpander\u003c/a\u003e\u003c/code\u003e class, which should be implemented elsewhere.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "RegExDot.Meta",
          "name": "Meta",
          "package": "regexdot",
          "source": "src/RegExDot-Meta.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Describes the set of polymorphic data which can be matched Only permits match against exactly one polymorphic datum which distinguishes it from zero-width assertion like an anchor word-boundary or look-ahead assertion Designed to be used by polymorphic regex engine to implement the traditional meta-characters Permits Perl-style shortcuts for commonly used Meta data to be canned assigned single Char mnemonic for subsequent reference the implementation of Read looks for back-slashed Char for which it expects there to be corresponding canned Meta Since this class is polymorphic it has no knowledge of what shortcuts might be appropriate for the chosen type-parameter so the expansion from the back-slashed Char to corresponding Meta data is performed through the expand interface of the ShortcutExpander class which should be implemented elsewhere",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "Meta",
          "package": "regexdot",
          "partial": "Meta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclares a polymorphic data-type.\n\u003c/p\u003e",
          "module": "RegExDot.Meta",
          "name": "Meta",
          "package": "regexdot",
          "source": "src/RegExDot-Meta.html#Meta",
          "type": "data"
        },
        "index": {
          "description": "Declares polymorphic data-type",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "Meta",
          "package": "regexdot",
          "partial": "Meta",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#t:Meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The interface via which \u003cem\u003ePerl-style shortcut\u003c/em\u003es are expanded, in a manner appropriate to the chosen type-parameter.\n\u003c/li\u003e\u003cli\u003e Since the expansion of \u003cem\u003ePerl-style shortcut\u003c/em\u003es, is more restricted inside than outside a \u003ccode\u003e\u003ca\u003eBracketExpression\u003c/a\u003e\u003c/code\u003e,\n\tthe former is considered to be a superclass, providing a base from which to build alternative implementations.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Meta",
          "name": "ShortcutExpander",
          "package": "regexdot",
          "source": "src/RegExDot-Meta.html#ShortcutExpander",
          "type": "class"
        },
        "index": {
          "description": "The interface via which Perl-style shortcut are expanded in manner appropriate to the chosen type-parameter Since the expansion of Perl-style shortcut is more restricted inside than outside BracketExpression the former is considered to be superclass providing base from which to build alternative implementations",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "ShortcutExpander",
          "package": "regexdot",
          "partial": "Shortcut Expander",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#t:ShortcutExpander"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny datum matches. Equivalent to \u003ccode\u003eNoneOf []\u003c/code\u003e, but more efficient. CAVEAT: independent of the type-parameter \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Meta",
          "name": "Any",
          "package": "regexdot",
          "signature": "Any",
          "source": "src/RegExDot-Meta.html#Meta",
          "type": "function"
        },
        "index": {
          "description": "Any datum matches Equivalent to NoneOf but more efficient CAVEAT independent of the type-parameter",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "Any",
          "package": "regexdot",
          "partial": "Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#v:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe datum matches, if \u003ccode\u003e\u003ca\u003econtainsMatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Meta",
          "name": "AnyOf",
          "package": "regexdot",
          "signature": "AnyOf (BracketExpression m)",
          "source": "src/RegExDot-Meta.html#Meta",
          "type": "function"
        },
        "index": {
          "description": "The datum matches if containsMatch",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "AnyOf",
          "package": "regexdot",
          "partial": "Any Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#v:AnyOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe datum matches, if it's equal to the specified value. Equivalent to \u003ccode\u003eAnyOf [BracketExpression.Literal x]\u003c/code\u003e, but more efficient.\n\u003c/p\u003e",
          "module": "RegExDot.Meta",
          "name": "Literal",
          "package": "regexdot",
          "signature": "Literal m",
          "source": "src/RegExDot-Meta.html#Meta",
          "type": "function"
        },
        "index": {
          "description": "The datum matches if it equal to the specified value Equivalent to AnyOf BracketExpression.Literal but more efficient",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "Literal",
          "package": "regexdot",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe datum matches, if \u003ccode\u003enot BracketExpression.containsMatch\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Meta",
          "name": "NoneOf",
          "package": "regexdot",
          "signature": "NoneOf (BracketExpression m)",
          "source": "src/RegExDot-Meta.html#Meta",
          "type": "function"
        },
        "index": {
          "description": "The datum matches if not BracketExpression.containsMatch",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "NoneOf",
          "package": "regexdot",
          "partial": "None Of",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#v:NoneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe datum matches if \u003ccode\u003e\u003ca\u003eShowablePredicate\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Meta",
          "name": "Predicate",
          "package": "regexdot",
          "signature": "Predicate (ShowablePredicate m)",
          "source": "src/RegExDot-Meta.html#Meta",
          "type": "function"
        },
        "index": {
          "description": "The datum matches if ShowablePredicate",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "Predicate",
          "package": "regexdot",
          "partial": "Predicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#v:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe token used to denote \u003ccode\u003e\u003ca\u003eAny\u003c/a\u003e\u003c/code\u003e, when in the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.Meta",
          "name": "anyToken",
          "package": "regexdot",
          "signature": "Char",
          "source": "src/RegExDot-Meta.html#anyToken",
          "type": "function"
        },
        "index": {
          "description": "The token used to denote Any when in the String form",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "anyToken",
          "package": "regexdot",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#v:anyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.Meta",
          "name": "expand",
          "package": "regexdot",
          "signature": "expand",
          "source": "src/RegExDot-Meta.html#expand",
          "type": "method"
        },
        "index": {
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "expand",
          "package": "regexdot",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the specified datum matches.\n\u003c/p\u003e",
          "module": "RegExDot.Meta",
          "name": "isMatch",
          "package": "regexdot",
          "signature": "m-\u003e Meta m-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "True if the specified datum matches",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "isMatch",
          "normalized": "a-\u003eMeta a-\u003eBool",
          "package": "regexdot",
          "partial": "Match",
          "signature": "m-\u003eMeta m-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#v:isMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe token used to precede a \u003cem\u003ePerl-style shortcut\u003c/em\u003e, when in the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.Meta",
          "name": "shortcutToken",
          "package": "regexdot",
          "signature": "Char",
          "source": "src/RegExDot-Meta.html#shortcutToken",
          "type": "function"
        },
        "index": {
          "description": "The token used to precede Perl-style shortcut when in the String form",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "shortcutToken",
          "package": "regexdot",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#v:shortcutToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to which a specific meaning is attributed, when reading from \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Meta",
          "name": "tokens",
          "package": "regexdot",
          "signature": "String",
          "source": "src/RegExDot-Meta.html#tokens",
          "type": "function"
        },
        "index": {
          "description": "The set of Char to which specific meaning is attributed when reading from String",
          "hierarchy": "RegExDot Meta",
          "module": "RegExDot.Meta",
          "name": "tokens",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Meta.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e This implementation of extended \u003cem\u003eregex\u003c/em\u003ees, generalises the familiar concept of pattern-matching of character-strings, to matching lists composed from an arbitrary data-type.\n\tThe polymorphic data, from which the input data-list is composed, need only support \u003ccode\u003eEq\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Because of the unknown stringified form of the underlying polymorphic data,\n\tthe \u003cem\u003eregex\u003c/em\u003e must be described by a comparatively verbose bracketed & comma-separated list, rather than the traditional \u003cem\u003eString\u003c/em\u003e containing Meta-characters.\n\tEach element of this \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e is a \u003ccode\u003e\u003ca\u003eRepeatablePattern\u003c/a\u003e\u003c/code\u003e, which describes a permissible match against \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eRepeatablePattern\u003c/a\u003e\u003c/code\u003e can take one of two forms.\n\tIn the simplest case, it matches just a single item of the underlying polymorphic type, perhaps literally, though looser specifications also exist:\n\t\u003ccode\u003e.\u003c/code\u003e matches any input datum; \u003ccode\u003e[x, y, z]\u003c/code\u003e matches any of \u003ccode\u003ex\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e, or \u003ccode\u003ez\u003c/code\u003e; \u003ccode\u003e[^x, y, z]\u003c/code\u003e matches anything but \u003ccode\u003ex\u003c/code\u003e, \u003ccode\u003ey\u003c/code\u003e, or \u003ccode\u003ez\u003c/code\u003e.\n\tTo support POSIX \u003cem\u003eERE\u003c/em\u003es, \u003ccode\u003e\u003ca\u003eRepeatablePattern\u003c/a\u003e\u003c/code\u003e can also be a list \u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e, each of which is recursively defined as an \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e, to form a tree-structure.\n\u003c/li\u003e\u003cli\u003e Each \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, can optionally be \u003cem\u003equantified\u003c/em\u003e by either a traditional \u003cem\u003egreedy\u003c/em\u003e, or a \u003cem\u003ePerl\u003c/em\u003e-style \u003cem\u003enon-greedy\u003c/em\u003e, suffix, e.g.; \u003ccode\u003e[*, +, ?, {n, m}, {n,}, {n}, *?, +?, ??, {n, m}?, {n,}?]\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e For convenience, common specifications can be canned & assigned a single \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e mnemonic, for subsequent reference.\n\tSince \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e is polymorphic, the set of abbreviations appropriate in the context of the unspecified base-type,\n\tmust be implemented externally through the \u003ccode\u003e\u003ca\u003eShortcutExpander\u003c/a\u003e\u003c/code\u003e interface.\n\tThis permits the use, when the type-parameter is \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, of \u003cem\u003ePerl-style shortcuts\u003c/em\u003e \u003ccode\u003e[\\d\\D\\s\\S\\w\\W]\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e The algorithm, is the classic \u003cem\u003eback-tracking\u003c/em\u003e one, rather than either a \u003cem\u003eDFA\u003c/em\u003e or \u003cem\u003eNFA\u003c/em\u003e.\n\tThis permits construction of \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e via which one can discover the deep mapping of \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e,\n\t& provides the flexibility to add the features now expected by modern \u003cem\u003eregex\u003c/em\u003e-engines.\n\tSince the type-parameter is unknown, & may represent a large object, the exponential space-complexity of creating a \u003cem\u003eDFA\u003c/em\u003e may present additional problems.\n\tThe exponential time-complexity of the \u003cem\u003eback-tracking\u003c/em\u003e algorithm is partially tamed by targeting obvious inefficiencies with specific optimisations.\n\u003c/li\u003e\u003cli\u003e Char-based regexen, traditionally overload the delimiters of a set of \u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e (parentheses), as a request for data-capture.\n\tHere, in contrast, all \u003ccode\u003e\u003ca\u003eRepeatablePattern\u003c/a\u003e\u003c/code\u003es capture data, & repeated sub-expressions capture a list of data,\n\trather than arbitrarily recording just the last (\u003ca\u003ehttp://www.opengroup.org/onlinepubs/009695399/functions/regcomp.html\u003c/a\u003e) item.\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eREFERENCES\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://en.wikipedia.org/wiki/Regular_expression\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://swtch.com/~rsc/regexp/regexp1.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://docstore.mik.ua/orelly/perl/prog/ch02_04.htm#PERL2-CH-2-SECT-4.1.2\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.macs.hw.ac.uk/~dsg/gph/papers/html/Strategies/strategies.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://hackage.haskell.org/packages/archive/regex-posix/latest/doc/html/Text-Regex-Posix.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.haskell.org/haskellwiki/Regular_expressions\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www2.research.att.com/~gsf/testregex/re-interpretation.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eCAVEATS\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Because of the definition of mutually recursive data-types, it is difficult to split this annoyingly large module, & preserve compatibility across compilers,\n\tbut it may be possible to break this cyclic dependency, by defining an interface to which one of the data-types defined here conforms.\n\u003c/li\u003e\u003cli\u003e Doesn't implement \u003cem\u003eBack-references\u003c/em\u003e, making the definition of the \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e context-free.\n\u003c/li\u003e\u003cli\u003e There's no integration with the type-classes defined in \u003ca\u003eText.Regex.Base.RegexLike\u003c/a\u003e, which assumes \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e-based \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e;\n\tthough this could be added to a specialised instance.\n\u003c/li\u003e\u003cli\u003e When \u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e are defined, \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e becomes a tree-like structure.\n\tUnless the alternative is a singleton, the specific alternative selected in the solution is typically unknown, & therefore the \u003cem\u003estructure\u003c/em\u003e of the branch of this tree is also unknown.\n\tThis lack of clarity is compounded when the \u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e are \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e, since a different one may be selected on each successive repetition.\n\tConsequently, the user can't navigate this portion of the structure in a statically defined manner, to acquire the captured data.\n\tDespite this, & in contrast to other \u003cem\u003eregex\u003c/em\u003e-engines, access to the whole data-structure is available, since it doesn't seem advantage to hide it.\n\tThe user can then either use \u003ccode\u003e\u003ca\u003eextractDataFromMatch\u003c/a\u003e\u003c/code\u003e for that element of \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e, thus aggregating the data from sections of unknown structure, or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e it, as an aid to debugging.\n\u003c/li\u003e\u003c/ul\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eTODO\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Test parallel-operation, on a 3 or more processor machine.\n\tIf \u003ccode\u003e\u003ca\u003ernf\u003c/a\u003e\u003c/code\u003e is less effective than \u003ccode\u003erwhnf\u003c/code\u003e,\n\tthen the \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e context can be removed,\n\treducing the requirements imposed on the type-parameter \u003ccode\u003ea\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Try \u003ccode\u003e\u003ca\u003eStream\u003c/a\u003e\u003c/code\u003e (stream-fusion), a faster drop-in replacement for \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e; possibly integrated in GHC-6.12.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ebypassInputDataForLiberalConsumer\u003c/a\u003e\u003c/code\u003e is too restrictive.\n\tMore generally, we can test whether the set of different \u003ccode\u003ea\u003c/code\u003e in \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e, is a subset of those common to all remaining terms in the \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e.\n\tUsing this rule, we can infer \u003ccode\u003e\u003ca\u003eaaa ...\u003c/a\u003e =~ MkExtendedRegEx [a,a+,a?,[ab]{2,3}]\u003c/code\u003e, given compatible \u003ccode\u003e\u003ca\u003econsumptionBounds\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Nested repetitions, where nothing has been added to the expression, result in repeated trials of the same expression,\n\te.g.; \u003ccode\u003e\u003ca\u003e(x{i,}){j,}\u003c/a\u003e\u003c/code\u003e results in the same expansion for \u003ccode\u003e(i, j) in [(2, 3), (3, 2), (6, 1), (1, 6)]\u003c/code\u003e.\n\tThe resulting \u003ccode\u003e\u003ca\u003eMatchList\u003c/a\u003e\u003c/code\u003e may be different, but if the first such trial fails, so will all the remainder.\n\u003c/li\u003e\u003cli\u003e Should cope with empty sets of \u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e & zero repetitions, neither of which can ever match, but the wider pattern can, e.g. \u003ccode\u003e(()|x{0}|y)\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e By removing \u003ccode\u003e\u003ca\u003eRepeatablePattern\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e, it can be isolated in a new module.\n\tThis would result in a significant loss of discoverability.\n\u003c/li\u003e\u003cli\u003e Expand repeated \u003ccode\u003e\u003ca\u003eBow\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003efewest - 1\u003c/code\u003e null matches followed by recursive \u003ccode\u003efindMatch\u003c/code\u003e-call with \u003ccode\u003erepetitions = 1\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "RegExDot.RegEx",
          "name": "RegEx",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION This implementation of extended regex es generalises the familiar concept of pattern-matching of character-strings to matching lists composed from an arbitrary data-type The polymorphic data from which the input data-list is composed need only support Eq Because of the unknown stringified form of the underlying polymorphic data the regex must be described by comparatively verbose bracketed comma-separated list rather than the traditional String containing Meta-characters Each element of this Concatenation is RepeatablePattern which describes permissible match against InputData RepeatablePattern can take one of two forms In the simplest case it matches just single item of the underlying polymorphic type perhaps literally though looser specifications also exist matches any input datum matches any of or matches anything but or To support POSIX ERE RepeatablePattern can also be list Alternatives each of which is recursively defined as an ExtendedRegEx to form tree-structure Each Pattern can optionally be quantified by either traditional greedy or Perl style non-greedy suffix e.g For convenience common specifications can be canned assigned single Char mnemonic for subsequent reference Since ExtendedRegEx is polymorphic the set of abbreviations appropriate in the context of the unspecified base-type must be implemented externally through the ShortcutExpander interface This permits the use when the type-parameter is Char of Perl-style shortcuts The algorithm is the classic back-tracking one rather than either DFA or NFA This permits construction of Result via which one can discover the deep mapping of InputData into ExtendedRegEx provides the flexibility to add the features now expected by modern regex engines Since the type-parameter is unknown may represent large object the exponential space-complexity of creating DFA may present additional problems The exponential time-complexity of the back-tracking algorithm is partially tamed by targeting obvious inefficiencies with specific optimisations Char-based regexen traditionally overload the delimiters of set of Alternatives parentheses as request for data-capture Here in contrast all RepeatablePattern capture data repeated sub-expressions capture list of data rather than arbitrarily recording just the last http www.opengroup.org onlinepubs functions regcomp.html item REFERENCES http en.wikipedia.org wiki Regular expression http swtch.com rsc regexp regexp1.html http docstore.mik.ua orelly perl prog ch02 htm PERL2-CH-2-SECT-4.1.2 http www.macs.hw.ac.uk dsg gph papers html Strategies strategies.html http hackage.haskell.org packages archive regex-posix latest doc html Text-Regex-Posix.html http www.haskell.org haskellwiki Regular expressions http www2.research.att.com gsf testregex re-interpretation.html CAVEATS Because of the definition of mutually recursive data-types it is difficult to split this annoyingly large module preserve compatibility across compilers but it may be possible to break this cyclic dependency by defining an interface to which one of the data-types defined here conforms Doesn implement Back-references making the definition of the ExtendedRegEx context-free There no integration with the type-classes defined in Text.Regex.Base.RegexLike which assumes Char based InputData though this could be added to specialised instance When Alternatives are defined Result becomes tree-like structure Unless the alternative is singleton the specific alternative selected in the solution is typically unknown therefore the structure of the branch of this tree is also unknown This lack of clarity is compounded when the Alternatives are Repeatable since different one may be selected on each successive repetition Consequently the user can navigate this portion of the structure in statically defined manner to acquire the captured data Despite this in contrast to other regex engines access to the whole data-structure is available since it doesn seem advantage to hide it The user can then either use extractDataFromMatch for that element of Result thus aggregating the data from sections of unknown structure or show it as an aid to debugging TODO Test parallel-operation on or more processor machine If rnf is less effective than rwhnf then the NFData context can be removed reducing the requirements imposed on the type-parameter Try Stream stream-fusion faster drop-in replacement for List possibly integrated in GHC-6.12 bypassInputDataForLiberalConsumer is too restrictive More generally we can test whether the set of different in InputData is subset of those common to all remaining terms in the ExtendedRegEx Using this rule we can infer aaa MkExtendedRegEx ab given compatible consumptionBounds Nested repetitions where nothing has been added to the expression result in repeated trials of the same expression e.g results in the same expansion for in The resulting MatchList may be different but if the first such trial fails so will all the remainder Should cope with empty sets of Alternatives zero repetitions neither of which can ever match but the wider pattern can e.g By removing RepeatablePattern from Match it can be isolated in new module This would result in significant loss of discoverability Expand repeated Bow with fewest null matches followed by recursive findMatch call with repetitions",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "RegEx",
          "package": "regexdot",
          "partial": "Reg Ex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Represents the \u003cem\u003ealternation\u003c/em\u003e feature of \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003es.\n\u003c/li\u003e\u003cli\u003e One could amalgamate this with \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e, since it seems to exist merely as a peg to hang \u003cem\u003einstance\u003c/em\u003e-declarations from.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.RegEx",
          "name": "Alternatives",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#Alternatives",
          "type": "newtype"
        },
        "index": {
          "description": "Represents the alternation feature of ExtendedRegEx One could amalgamate this with Pattern since it seems to exist merely as peg to hang instance declarations from",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "Alternatives",
          "package": "regexdot",
          "partial": "Alternatives",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:Alternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents the \u003cem\u003econcatenation\u003c/em\u003e aspect of \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "Concatenation",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#Concatenation",
          "type": "type"
        },
        "index": {
          "description": "Represents the concatenation aspect of ExtendedRegEx",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "Concatenation",
          "package": "regexdot",
          "partial": "Concatenation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:Concatenation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs an \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e, by surrounding a \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e with optional \u003ccode\u003e\u003ca\u003eAnchor\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "ExtendedRegEx",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#ExtendedRegEx",
          "type": "data"
        },
        "index": {
          "description": "Constructs an ExtendedRegEx by surrounding Concatenation with optional Anchor",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "ExtendedRegEx",
          "package": "regexdot",
          "partial": "Extended Reg Ex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:ExtendedRegEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt the top-level of an \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e, the lack of an \u003ccode\u003e\u003ca\u003eAnchor\u003c/a\u003e\u003c/code\u003e allows the \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e to drift away from the corresponding end of the input-data; this data-gap is captured here.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "ExternalMatch",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#ExternalMatch",
          "type": "type"
        },
        "index": {
          "description": "At the top-level of an ExtendedRegEx the lack of an Anchor allows the ExtendedRegEx to drift away from the corresponding end of the input-data this data-gap is captured here",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "ExternalMatch",
          "package": "regexdot",
          "partial": "External Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:ExternalMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The input-data is just a list.\n\u003c/li\u003e\u003cli\u003e Whilst typically this list is also a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, & could therefore be more efficiently implemented using \u003ca\u003eData.ByteString\u003c/a\u003e,\n\twe can't assume that the polymorphic base-type is always \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.RegEx",
          "name": "InputData",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#InputData",
          "type": "type"
        },
        "index": {
          "description": "The input-data is just list Whilst typically this list is also String could therefore be more efficiently implemented using Data.ByteString we can assume that the polymorphic base-type is always Char",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "InputData",
          "package": "regexdot",
          "partial": "Input Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:InputData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the manner in which a \u003ccode\u003e\u003ca\u003eRepeatablePattern\u003c/a\u003e\u003c/code\u003e successfully consumed \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "Match",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#Match",
          "type": "type"
        },
        "index": {
          "description": "Describes the manner in which RepeatablePattern successfully consumed InputData",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "Match",
          "package": "regexdot",
          "partial": "Match",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes the manner in which a \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e successfully consumed \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "MatchList",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#MatchList",
          "type": "type"
        },
        "index": {
          "description": "Describes the manner in which Concatenation successfully consumed InputData",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "MatchList",
          "package": "regexdot",
          "partial": "Match List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:MatchList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTag the \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e with the \u003ccode\u003e\u003ca\u003eRepeatablePattern\u003c/a\u003e\u003c/code\u003e it matched (which unfortunately confines the definition to this (bloated) module), & the offset from the start of the data;\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "MatchedData",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#MatchedData",
          "type": "type"
        },
        "index": {
          "description": "Tag the InputData with the RepeatablePattern it matched which unfortunately confines the definition to this bloated module the offset from the start of the data",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "MatchedData",
          "package": "regexdot",
          "partial": "Matched Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:MatchedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines either a simple \u003ccode\u003e\u003ca\u003eMeta\u003c/a\u003e\u003c/code\u003e, which can match exactly one datum, or a set of \u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e, each of which is recursively defined above, as an \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "Pattern",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#Pattern",
          "type": "data"
        },
        "index": {
          "description": "Defines either simple Meta which can match exactly one datum or set of Alternatives each of which is recursively defined above as an ExtendedRegEx",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "Pattern",
          "package": "regexdot",
          "partial": "Pattern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003es, \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "RepeatablePattern",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#RepeatablePattern",
          "type": "type"
        },
        "index": {
          "description": "Make Pattern Repeatable",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "RepeatablePattern",
          "package": "regexdot",
          "partial": "Repeatable Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:RepeatablePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCaptures the list of input-data consumed by the \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e, bracketed by any data-prefix or data-suffix.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "Result",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#Result",
          "type": "type"
        },
        "index": {
          "description": "Captures the list of input-data consumed by the Concatenation bracketed by any data-prefix or data-suffix",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "Result",
          "package": "regexdot",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Defines the method required to expand a mnemonic into an \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: this interface must be declared locally, since it references \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e, & \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e references it.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.RegEx",
          "name": "ShortcutExpander",
          "package": "regexdot",
          "source": "src/RegExDot-RegEx.html#ShortcutExpander",
          "type": "class"
        },
        "index": {
          "description": "Defines the method required to expand mnemonic into an ExtendedRegEx CAVEAT this interface must be declared locally since it references ExtendedRegEx ExtendedRegEx references it",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "ShortcutExpander",
          "package": "regexdot",
          "partial": "Shortcut Expander",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#t:ShortcutExpander"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Operator's name was chosen to suggest something more than \u003ccode\u003e\u003ca\u003e=~\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e CAVEAT: much more expensive then \u003ccode\u003e\u003ca\u003e=~\u003c/a\u003e\u003c/code\u003e: in \u003cem\u003eghci\u003c/em\u003e, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e can be observed to be printed \u003cem\u003elong\u003c/em\u003e before the \u003ccode\u003e\u003ca\u003eMatchList\u003c/a\u003e\u003c/code\u003e from which \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e is constructed,\n\tas the lazy algorithm finds the first solution, but not yet necessarily the optimal solution, amongst \u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.RegEx",
          "name": "(+~)",
          "package": "regexdot",
          "signature": "InputData m-\u003e RegExOpts (ExtendedRegEx m)-\u003e Result m",
          "type": "function"
        },
        "index": {
          "description": "Operator name was chosen to suggest something more than CAVEAT much more expensive then in ghci Just can be observed to be printed long before the MatchList from which Result is constructed as the lazy algorithm finds the first solution but not yet necessarily the optimal solution amongst Alternatives",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "(+~) +~",
          "normalized": "InputData a-\u003eRegExOpts(ExtendedRegEx a)-\u003eResult a",
          "package": "regexdot",
          "signature": "InputData m-\u003eRegExOpts(ExtendedRegEx m)-\u003eResult m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:-43--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePattern-mismatch operator.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "(/~)",
          "package": "regexdot",
          "signature": "InputData m-\u003e RegExOpts (ExtendedRegEx m)-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Pattern-mismatch operator",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "(/~) /~",
          "normalized": "InputData a-\u003eRegExOpts(ExtendedRegEx a)-\u003eBool",
          "package": "regexdot",
          "signature": "InputData m-\u003eRegExOpts(ExtendedRegEx m)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:-47--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Pattern-match operator.\n\u003c/li\u003e\u003cli\u003e Identifier & parameter-order follow the lead of \u003cem\u003ePerl\u003c/em\u003e's pattern-match operator.\n\u003c/li\u003e\u003cli\u003e Considerably more efficient than \u003ccode\u003e\u003ca\u003e+~\u003c/a\u003e\u003c/code\u003e, since even though they are both implemented via \u003ccode\u003efindMatch\u003c/code\u003e,\n\tthe discovery of \u003cem\u003eany\u003c/em\u003e solution is sufficient to generate the return-value;\n\tlazy-evaluation avoids the requirement to identify the irrelevant optimal solution.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.RegEx",
          "name": "(=~)",
          "package": "regexdot",
          "signature": "InputData m-\u003e RegExOpts (ExtendedRegEx m)-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Pattern-match operator Identifier parameter-order follow the lead of Perl pattern-match operator Considerably more efficient than since even though they are both implemented via findMatch the discovery of any solution is sufficient to generate the return-value lazy-evaluation avoids the requirement to identify the irrelevant optimal solution",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "(=~) =~",
          "normalized": "InputData a-\u003eRegExOpts(ExtendedRegEx a)-\u003eBool",
          "package": "regexdot",
          "signature": "InputData m-\u003eRegExOpts(ExtendedRegEx m)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:-61--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Represents a black hole, which will greedily consume all data.\n\u003c/li\u003e\u003cli\u003e CAVEAT: nullary, i.e. a constant.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.RegEx",
          "name": "(.*)",
          "package": "regexdot",
          "signature": "RepeatablePattern m",
          "source": "src/RegExDot-RegEx.html#.%2A",
          "type": "function"
        },
        "index": {
          "description": "Represents black hole which will greedily consume all data CAVEAT nullary i.e constant",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "(.*) .*",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:.-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003enon-greedy\u003c/em\u003e version of \u003ccode\u003e\u003ca\u003e.*\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "(.*?)",
          "package": "regexdot",
          "signature": "RepeatablePattern m",
          "source": "src/RegExDot-RegEx.html#.%2A%3F",
          "type": "function"
        },
        "index": {
          "description": "non-greedy version of",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "(.*?) .*?",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:.-42--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sub-expression containing a selection of recursively defined alternatives, thus forming a tree-structure.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "CaptureGroup",
          "package": "regexdot",
          "signature": "CaptureGroup (Alternatives m)",
          "source": "src/RegExDot-RegEx.html#Pattern",
          "type": "function"
        },
        "index": {
          "description": "sub-expression containing selection of recursively defined alternatives thus forming tree-structure",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "CaptureGroup",
          "package": "regexdot",
          "partial": "Capture Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:CaptureGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.RegEx",
          "name": "MkAlternatives",
          "package": "regexdot",
          "signature": "MkAlternatives [ExtendedRegEx m]",
          "source": "src/RegExDot-RegEx.html#Alternatives",
          "type": "function"
        },
        "index": {
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "MkAlternatives",
          "normalized": "MkAlternatives[ExtendedRegEx a]",
          "package": "regexdot",
          "partial": "Mk Alternatives",
          "signature": "MkAlternatives[ExtendedRegEx m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:MkAlternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.RegEx",
          "name": "MkExtendedRegEx",
          "package": "regexdot",
          "signature": "MkExtendedRegEx",
          "source": "src/RegExDot-RegEx.html#ExtendedRegEx",
          "type": "function"
        },
        "index": {
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "MkExtendedRegEx",
          "package": "regexdot",
          "partial": "Mk Extended Reg Ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:MkExtendedRegEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a requirement for a simple scalar datum of the polymorphic type.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "Require",
          "package": "regexdot",
          "signature": "Require (Meta m)",
          "source": "src/RegExDot-RegEx.html#Pattern",
          "type": "function"
        },
        "index": {
          "description": "Describes requirement for simple scalar datum of the polymorphic type",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "Require",
          "package": "regexdot",
          "partial": "Require",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:Require"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe token used to separate alternative \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003es, when in the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "alternativeExtendedRegExSeparatorToken",
          "package": "regexdot",
          "signature": "Char",
          "source": "src/RegExDot-RegEx.html#alternativeExtendedRegExSeparatorToken",
          "type": "function"
        },
        "index": {
          "description": "The token used to separate alternative ExtendedRegEx when in the String form",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "alternativeExtendedRegExSeparatorToken",
          "package": "regexdot",
          "partial": "Extended Reg Ex Separator Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:alternativeExtendedRegExSeparatorToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn option to anchor the \u003cem\u003eregex\u003c/em\u003e to the start of the \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "bowAnchor",
          "package": "regexdot",
          "signature": "Maybe Anchor",
          "source": "src/RegExDot-RegEx.html#ExtendedRegEx",
          "type": "function"
        },
        "index": {
          "description": "An option to anchor the regex to the start of the InputData",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "bowAnchor",
          "package": "regexdot",
          "partial": "Anchor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:bowAnchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience-function to build a \u003ccode\u003e\u003ca\u003eCaptureGroup\u003c/a\u003e\u003c/code\u003e from a list of alternative \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "captureGroup",
          "package": "regexdot",
          "signature": "[ExtendedRegEx m] -\u003e Pattern m",
          "source": "src/RegExDot-RegEx.html#captureGroup",
          "type": "function"
        },
        "index": {
          "description": "Convenience-function to build CaptureGroup from list of alternative ExtendedRegEx",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "captureGroup",
          "normalized": "[ExtendedRegEx a]-\u003ePattern a",
          "package": "regexdot",
          "partial": "Group",
          "signature": "[ExtendedRegEx m]-\u003ePattern m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:captureGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe delimiters of \u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e, when in the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "captureGroupDelimiters",
          "package": "regexdot",
          "signature": "(Char, Char)",
          "source": "src/RegExDot-RegEx.html#captureGroupDelimiters",
          "type": "function"
        },
        "index": {
          "description": "The delimiters of Alternatives when in the String form",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "captureGroupDelimiters",
          "normalized": "(Char,Char)",
          "package": "regexdot",
          "partial": "Group Delimiters",
          "signature": "(Char,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:captureGroupDelimiters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe sequence of \u003ccode\u003e\u003ca\u003eRepeatablePattern\u003c/a\u003e\u003c/code\u003es defining the \u003ccode\u003e\u003ca\u003eRequire\u003c/a\u003e\u003c/code\u003ements that the \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e must meet.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "concatenation",
          "package": "regexdot",
          "signature": "Concatenation m",
          "source": "src/RegExDot-RegEx.html#ExtendedRegEx",
          "type": "function"
        },
        "index": {
          "description": "The sequence of RepeatablePattern defining the Require ments that the InputData must meet",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "concatenation",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:concatenation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor, to expose the guts.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "deconstructAlternatives",
          "package": "regexdot",
          "signature": "Alternatives m -\u003e [ExtendedRegEx m]",
          "source": "src/RegExDot-RegEx.html#deconstructAlternatives",
          "type": "function"
        },
        "index": {
          "description": "Accessor to expose the guts",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "deconstructAlternatives",
          "normalized": "Alternatives a-\u003e[ExtendedRegEx a]",
          "package": "regexdot",
          "partial": "Alternatives",
          "signature": "Alternatives m-\u003e[ExtendedRegEx m]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:deconstructAlternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop \u003ccode\u003e\u003ca\u003eAnchor\u003c/a\u003e\u003c/code\u003es at both bow & stern of the specified \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "dock",
          "package": "regexdot",
          "signature": "Transformation m",
          "source": "src/RegExDot-RegEx.html#dock",
          "type": "function"
        },
        "index": {
          "description": "Drop Anchor at both bow stern of the specified ExtendedRegEx",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "dock",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:dock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.RegEx",
          "name": "expand",
          "package": "regexdot",
          "signature": "expand",
          "source": "src/RegExDot-RegEx.html#expand",
          "type": "method"
        },
        "index": {
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "expand",
          "package": "regexdot",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:expand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the length of data consumed by the specified \u003ccode\u003e\u003ca\u003eExternalMatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "externalMatchLength",
          "package": "regexdot",
          "signature": "ExternalMatch m -\u003e DataLength",
          "source": "src/RegExDot-RegEx.html#externalMatchLength",
          "type": "function"
        },
        "index": {
          "description": "Returns the length of data consumed by the specified ExternalMatch",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "externalMatchLength",
          "normalized": "ExternalMatch a-\u003eDataLength",
          "package": "regexdot",
          "partial": "Match Length",
          "signature": "ExternalMatch m-\u003eDataLength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:externalMatchLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract & concatenate, the \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "extractDataFromMatch",
          "package": "regexdot",
          "signature": "Match m -\u003e InputData m",
          "source": "src/RegExDot-RegEx.html#extractDataFromMatch",
          "type": "function"
        },
        "index": {
          "description": "Extract concatenate the InputData from Match",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "extractDataFromMatch",
          "normalized": "Match a-\u003eInputData a",
          "package": "regexdot",
          "partial": "Data From Match",
          "signature": "Match m-\u003eInputData m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:extractDataFromMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract & concatenate, the \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e; null if it didn't match any.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "extractDataFromMatch'",
          "package": "regexdot",
          "signature": "Maybe (Match m) -\u003e InputData m",
          "source": "src/RegExDot-RegEx.html#extractDataFromMatch%27",
          "type": "function"
        },
        "index": {
          "description": "Extract concatenate the InputData from Match null if it didn match any",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "extractDataFromMatch'",
          "normalized": "Maybe(Match a)-\u003eInputData a",
          "package": "regexdot",
          "partial": "Data From Match'",
          "signature": "Maybe(Match m)-\u003eInputData m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:extractDataFromMatch-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract & concatenate, the \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e, from the \u003ccode\u003e\u003ca\u003eMatchList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "extractDataFromMatchList",
          "package": "regexdot",
          "signature": "MatchList m -\u003e InputData m",
          "source": "src/RegExDot-RegEx.html#extractDataFromMatchList",
          "type": "function"
        },
        "index": {
          "description": "Extract concatenate the InputData from the MatchList",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "extractDataFromMatchList",
          "normalized": "MatchList a-\u003eInputData a",
          "package": "regexdot",
          "partial": "Data From Match List",
          "signature": "MatchList m-\u003eInputData m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:extractDataFromMatchList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the \u003ccode\u003e\u003ca\u003ePattern\u003c/a\u003e\u003c/code\u003e was constructed via \u003ccode\u003e\u003ca\u003eCaptureGroup\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "isCaptureGroup",
          "package": "regexdot",
          "signature": "Pattern m -\u003e Bool",
          "source": "src/RegExDot-RegEx.html#isCaptureGroup",
          "type": "function"
        },
        "index": {
          "description": "True if the Pattern was constructed via CaptureGroup",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "isCaptureGroup",
          "normalized": "Pattern a-\u003eBool",
          "package": "regexdot",
          "partial": "Capture Group",
          "signature": "Pattern m-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:isCaptureGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if there's at least one \u003ccode\u003e\u003ca\u003eRepeatablePattern\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e, i.e. that it's non-null.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "isDefined",
          "package": "regexdot",
          "signature": "ExtendedRegEx m -\u003e Bool",
          "source": "src/RegExDot-RegEx.html#isDefined",
          "type": "function"
        },
        "index": {
          "description": "True if there at least one RepeatablePattern in the Concatenation i.e that it non-null",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "isDefined",
          "normalized": "ExtendedRegEx a-\u003eBool",
          "package": "regexdot",
          "partial": "Defined",
          "signature": "ExtendedRegEx m-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:isDefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e can be employed as a simple \u003cem\u003ecapture-group\u003c/em\u003e as well as a switch, under which circumstances there's no choice amongst multiple \u003ccode\u003e\u003ca\u003eAlternatives\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "isSingletonAlternatives",
          "package": "regexdot",
          "signature": "Alternatives m -\u003e Bool",
          "source": "src/RegExDot-RegEx.html#isSingletonAlternatives",
          "type": "function"
        },
        "index": {
          "description": "Alternatives can be employed as simple capture-group as well as switch under which circumstances there no choice amongst multiple Alternatives",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "isSingletonAlternatives",
          "normalized": "Alternatives a-\u003eBool",
          "package": "regexdot",
          "partial": "Singleton Alternatives",
          "signature": "Alternatives m-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:isSingletonAlternatives"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShifts the offsets of all the \u003ccode\u003e\u003ca\u003eMatchedData\u003c/a\u003e\u003c/code\u003e contained in the specified \u003ccode\u003e\u003ca\u003eMatchList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "shiftMatchList",
          "package": "regexdot",
          "signature": "DataLength-\u003e MatchList m-\u003e MatchList m",
          "type": "function"
        },
        "index": {
          "description": "Shifts the offsets of all the MatchedData contained in the specified MatchList",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "shiftMatchList",
          "normalized": "DataLength-\u003eMatchList a-\u003eMatchList a",
          "package": "regexdot",
          "partial": "Match List",
          "signature": "DataLength-\u003eMatchList m-\u003eMatchList m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:shiftMatchList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows either the specified \u003ccode\u003e\u003ca\u003eAnchor\u003c/a\u003e\u003c/code\u003e, or a null string where \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is specified.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "showsMaybeAnchor",
          "package": "regexdot",
          "signature": "Maybe Anchor -\u003e String -\u003e String",
          "source": "src/RegExDot-RegEx.html#showsMaybeAnchor",
          "type": "function"
        },
        "index": {
          "description": "Shows either the specified Anchor or null string where Nothing is specified",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "showsMaybeAnchor",
          "normalized": "Maybe Anchor-\u003eString-\u003eString",
          "package": "regexdot",
          "partial": "Maybe Anchor",
          "signature": "Maybe Anchor-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:showsMaybeAnchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience-function, to build a \u003ccode\u003e\u003ca\u003eRepeatablePattern\u003c/a\u003e\u003c/code\u003e from an unrepeated instance of the specified \u003ccode\u003e\u003ca\u003eMeta\u003c/a\u003e\u003c/code\u003e-datum.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "simply",
          "package": "regexdot",
          "signature": "Meta m -\u003e RepeatablePattern m",
          "source": "src/RegExDot-RegEx.html#simply",
          "type": "function"
        },
        "index": {
          "description": "Convenience-function to build RepeatablePattern from an unrepeated instance of the specified Meta datum",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "simply",
          "normalized": "Meta a-\u003eRepeatablePattern a",
          "package": "regexdot",
          "signature": "Meta m-\u003eRepeatablePattern m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:simply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn option to anchor the \u003cem\u003eregex\u003c/em\u003e to the end of the \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "sternAnchor",
          "package": "regexdot",
          "signature": "Maybe Anchor",
          "source": "src/RegExDot-RegEx.html#ExtendedRegEx",
          "type": "function"
        },
        "index": {
          "description": "An option to anchor the regex to the end of the InputData",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "sternAnchor",
          "package": "regexdot",
          "partial": "Anchor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:sternAnchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to which a specific meaning is attributed, when reading from \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "tokens",
          "package": "regexdot",
          "signature": "String",
          "source": "src/RegExDot-RegEx.html#tokens",
          "type": "function"
        },
        "index": {
          "description": "The set of Char to which specific meaning is attributed when reading from String",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "tokens",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, but operates on \u003ccode\u003e\u003ca\u003eConcatenation\u003c/a\u003e\u003c/code\u003e, rather than just \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegEx",
          "name": "transformExtendedRegEx",
          "package": "regexdot",
          "signature": "(Concatenation m -\u003e Concatenation m)-\u003e Transformation m",
          "type": "function"
        },
        "index": {
          "description": "Similar to fmap but operates on Concatenation rather than just",
          "hierarchy": "RegExDot RegEx",
          "module": "RegExDot.RegEx",
          "name": "transformExtendedRegEx",
          "normalized": "(Concatenation a-\u003eConcatenation a)-\u003eTransformation a",
          "package": "regexdot",
          "partial": "Extended Reg Ex",
          "signature": "(Concatenation m-\u003eConcatenation m)-\u003eTransformation m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegEx.html#v:transformExtendedRegEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Provides a complete job-specification.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eregEx\u003c/a\u003e\u003c/code\u003e is polymorphic, allowing use of either \u003cem\u003eRegExDot.RegEx.ExtendedRegEx\u003c/em\u003e (which is also polymorphic) or \u003cem\u003eRegExChar.ExtendedRegExChar.ExtendedRegExChar\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "RegExDot.RegExOpts",
          "name": "RegExOpts",
          "package": "regexdot",
          "source": "src/RegExDot-RegExOpts.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Provides complete job-specification regEx is polymorphic allowing use of either RegExDot.RegEx.ExtendedRegEx which is also polymorphic or RegExChar.ExtendedRegExChar.ExtendedRegExChar",
          "hierarchy": "RegExDot RegExOpts",
          "module": "RegExDot.RegExOpts",
          "name": "RegExOpts",
          "package": "regexdot",
          "partial": "Reg Ex Opts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegExOpts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAggregates both \u003ccode\u003e\u003ca\u003eExecutionOptions\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003eCompilationOptions\u003c/a\u003e\u003c/code\u003e with a polymorphic \u003cem\u003eregex\u003c/em\u003e, to form a complete job-description.\n\u003c/p\u003e",
          "module": "RegExDot.RegExOpts",
          "name": "RegExOpts",
          "package": "regexdot",
          "source": "src/RegExDot-RegExOpts.html#RegExOpts",
          "type": "data"
        },
        "index": {
          "description": "Aggregates both ExecutionOptions CompilationOptions with polymorphic regex to form complete job-description",
          "hierarchy": "RegExDot RegExOpts",
          "module": "RegExDot.RegExOpts",
          "name": "RegExOpts",
          "package": "regexdot",
          "partial": "Reg Ex Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegExOpts.html#t:RegExOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.RegExOpts",
          "name": "MkRegExOpts",
          "package": "regexdot",
          "signature": "MkRegExOpts",
          "source": "src/RegExDot-RegExOpts.html#RegExOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "RegExDot RegExOpts",
          "module": "RegExDot.RegExOpts",
          "name": "MkRegExOpts",
          "package": "regexdot",
          "partial": "Mk Reg Ex Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegExOpts.html#v:MkRegExOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters governing the result, rather than the implementation.\n\u003c/p\u003e",
          "module": "RegExDot.RegExOpts",
          "name": "compilationOptions",
          "package": "regexdot",
          "signature": "CompilationOptions",
          "source": "src/RegExDot-RegExOpts.html#RegExOpts",
          "type": "function"
        },
        "index": {
          "description": "Parameters governing the result rather than the implementation",
          "hierarchy": "RegExDot RegExOpts",
          "module": "RegExDot.RegExOpts",
          "name": "compilationOptions",
          "package": "regexdot",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegExOpts.html#v:compilationOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameters governing the implementation, rather than the result.\n\u003c/p\u003e",
          "module": "RegExDot.RegExOpts",
          "name": "executionOptions",
          "package": "regexdot",
          "signature": "ExecutionOptions",
          "source": "src/RegExDot-RegExOpts.html#RegExOpts",
          "type": "function"
        },
        "index": {
          "description": "Parameters governing the implementation rather than the result",
          "hierarchy": "RegExDot RegExOpts",
          "module": "RegExDot.RegExOpts",
          "name": "executionOptions",
          "package": "regexdot",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegExOpts.html#v:executionOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor using \u003ccode\u003e\u003ca\u003edefaultValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.RegExOpts",
          "name": "mkRegEx",
          "package": "regexdot",
          "signature": "a -\u003e RegExOpts a",
          "source": "src/RegExDot-RegExOpts.html#mkRegEx",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor using defaultValue",
          "hierarchy": "RegExDot RegExOpts",
          "module": "RegExDot.RegExOpts",
          "name": "mkRegEx",
          "normalized": "a-\u003eRegExOpts a",
          "package": "regexdot",
          "partial": "Reg Ex",
          "signature": "a-\u003eRegExOpts a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegExOpts.html#v:mkRegEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePolymorphic, to permit specialisation either of the type of \u003cem\u003eregex\u003c/em\u003e or the type of input-data.\n\u003c/p\u003e",
          "module": "RegExDot.RegExOpts",
          "name": "regEx",
          "package": "regexdot",
          "signature": "a",
          "source": "src/RegExDot-RegExOpts.html#RegExOpts",
          "type": "function"
        },
        "index": {
          "description": "Polymorphic to permit specialisation either of the type of regex or the type of input-data",
          "hierarchy": "RegExDot RegExOpts",
          "module": "RegExDot.RegExOpts",
          "name": "regEx",
          "package": "regexdot",
          "partial": "Ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegExOpts.html#v:regEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutator, which sets an appropriate \u003ccode\u003e\u003ca\u003eExecutionOptions\u003c/a\u003e\u003c/code\u003e, for the depth to which the caller wants to probe the resulting match.\n\u003c/p\u003e",
          "module": "RegExDot.RegExOpts",
          "name": "setVerbose",
          "package": "regexdot",
          "signature": "Bool -\u003e RegExOpts a -\u003e RegExOpts a",
          "source": "src/RegExDot-RegExOpts.html#setVerbose",
          "type": "function"
        },
        "index": {
          "description": "Mutator which sets an appropriate ExecutionOptions for the depth to which the caller wants to probe the resulting match",
          "hierarchy": "RegExDot RegExOpts",
          "module": "RegExDot.RegExOpts",
          "name": "setVerbose",
          "normalized": "Bool-\u003eRegExOpts a-\u003eRegExOpts a",
          "package": "regexdot",
          "partial": "Verbose",
          "signature": "Bool-\u003eRegExOpts a-\u003eRegExOpts a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-RegExOpts.html#v:setVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e A data-type, which represents the permissible range of instances, of the underlying polymorphic datum.\n\u003c/li\u003e\u003cli\u003e Designed for use in a polymorphic \u003cem\u003eregex\u003c/em\u003e-engine, which specifies patterns composed of repeated \u003cem\u003egreedy\u003c/em\u003e & \u003cem\u003enon-greedy\u003c/em\u003e sequences of \u003cem\u003eMeta\u003c/em\u003e-data;\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e\t\t*\t+\t?\t{fewest, most}\t{fewest,}\t{fewest}\n\t\t*?\t+?\t??\t{fewest, most}?\t{fewest,}?\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e In the context of \u003cem\u003eregex\u003c/em\u003ees, this concept is known as \u003cem\u003eQuantification\u003c/em\u003e.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003eregex\u003c/em\u003ees evolved from the minimal ability to optionally qualify the datum with a \u003ca\u003ehttp://en.wikipedia.org/wiki/Kleene_star\u003c/a\u003e suffix.\n\tMore exotic repetition-specifications could be composed by concatenating these atomic building-blocks.\n\tHere, I've taken the contrary top-down view, & assumed that all data are qualified by a full \u003ccode\u003e\u003ca\u003eRepetitionBounds\u003c/a\u003e\u003c/code\u003e, which in most cases will degenerate into a simpler form.\n\u003c/li\u003e\u003cli\u003e The type of entity which is being repeated, isn't the domain of this data-type; it's polymorphic.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "RegExDot.Repeatable",
          "name": "Repeatable",
          "package": "regexdot",
          "source": "src/RegExDot-Repeatable.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION data-type which represents the permissible range of instances of the underlying polymorphic datum Designed for use in polymorphic regex engine which specifies patterns composed of repeated greedy non-greedy sequences of Meta data fewest most fewest fewest fewest most fewest In the context of regex es this concept is known as Quantification regex es evolved from the minimal ability to optionally qualify the datum with http en.wikipedia.org wiki Kleene star suffix More exotic repetition-specifications could be composed by concatenating these atomic building-blocks Here ve taken the contrary top-down view assumed that all data are qualified by full RepetitionBounds which in most cases will degenerate into simpler form The type of entity which is being repeated isn the domain of this data-type it polymorphic",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "Repeatable",
          "package": "regexdot",
          "partial": "Repeatable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclares a polymorphic data-type, which augments the underlying \u003ccode\u003e\u003ca\u003ebase\u003c/a\u003e\u003c/code\u003e datum, with the range of times it may be used.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "Repeatable",
          "package": "regexdot",
          "source": "src/RegExDot-Repeatable.html#Repeatable",
          "type": "data"
        },
        "index": {
          "description": "Declares polymorphic data-type which augments the underlying base datum with the range of times it may be used",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "Repeatable",
          "package": "regexdot",
          "partial": "Repeatable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#t:Repeatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines the bounds of a range of permissible repetitions.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "RepetitionBounds",
          "package": "regexdot",
          "source": "src/RegExDot-Repeatable.html#RepetitionBounds",
          "type": "type"
        },
        "index": {
          "description": "Defines the bounds of range of permissible repetitions",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "RepetitionBounds",
          "package": "regexdot",
          "partial": "Repetition Bounds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#t:RepetitionBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA number of repetitions.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "Repetitions",
          "package": "regexdot",
          "source": "src/RegExDot-Repeatable.html#Repetitions",
          "type": "type"
        },
        "index": {
          "description": "number of repetitions",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "Repetitions",
          "package": "regexdot",
          "partial": "Repetitions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#t:Repetitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Construct a \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e, tailored for data repeated a precise number of times.\n\u003c/li\u003e\u003cli\u003e The \u003cem\u003e#\u003c/em\u003e in the identifier represents the single bound.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003ea{f}\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "(^#)",
          "package": "regexdot",
          "signature": "a-\u003e Repetitions-\u003e Repeatable a",
          "type": "function"
        },
        "index": {
          "description": "Construct Repeatable tailored for data repeated precise number of times The in the identifier represents the single bound",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "(^#) ^#",
          "normalized": "a-\u003eRepetitions-\u003eRepeatable a",
          "package": "regexdot",
          "signature": "a-\u003eRepetitions-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:-94--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Construct a greedy \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e, tailored for data repeated at least the specified number of times.\n\u003c/li\u003e\u003cli\u003e The \u003cem\u003e#\u003c/em\u003e in the identifier represents the single bound.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003ea{f,}\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "(^#-\u003e)",
          "package": "regexdot",
          "signature": "a-\u003e Repetitions-\u003e Repeatable a",
          "type": "function"
        },
        "index": {
          "description": "Construct greedy Repeatable tailored for data repeated at least the specified number of times The in the identifier represents the single bound",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "(^#-\u003e) ^#-\u003e",
          "normalized": "a-\u003eRepetitions-\u003eRepeatable a",
          "package": "regexdot",
          "signature": "a-\u003eRepetitions-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:-94--35--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Construct a greedy \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e, from a polymorphic datum, with the specified range of permissible instances.\n\u003c/li\u003e\u003cli\u003e The \u003cem\u003e#\u003c/em\u003es in the identifier represent the two bounds.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003ea{f, m}\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "(^#-\u003e#)",
          "package": "regexdot",
          "signature": "a-\u003e RepetitionBounds-\u003e Repeatable a",
          "type": "function"
        },
        "index": {
          "description": "Construct greedy Repeatable from polymorphic datum with the specified range of permissible instances The in the identifier represent the two bounds",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "(^#-\u003e#) ^#-\u003e#",
          "normalized": "a-\u003eRepetitionBounds-\u003eRepeatable a",
          "package": "regexdot",
          "signature": "a-\u003eRepetitionBounds-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:-94--35--45--62--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Construct a non-greedy version of \u003ccode\u003e\u003ca\u003e^#-\u003e#\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003ea{f, m}?\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "(^#-\u003e#?)",
          "package": "regexdot",
          "signature": "a-\u003e RepetitionBounds-\u003e Repeatable a",
          "type": "function"
        },
        "index": {
          "description": "Construct non-greedy version of",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "(^#-\u003e#?) ^#-\u003e#?",
          "normalized": "a-\u003eRepetitionBounds-\u003eRepeatable a",
          "package": "regexdot",
          "signature": "a-\u003eRepetitionBounds-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:-94--35--45--62--35--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Construct a non-greedy version of \u003ccode\u003e\u003ca\u003e^#-\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003cem\u003ea{f,}?\u003c/em\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "(^#-\u003e?)",
          "package": "regexdot",
          "signature": "a-\u003e Repetitions-\u003e Repeatable a",
          "type": "function"
        },
        "index": {
          "description": "Construct non-greedy version of",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "(^#-\u003e?) ^#-\u003e?",
          "normalized": "a-\u003eRepetitions-\u003eRepeatable a",
          "package": "regexdot",
          "signature": "a-\u003eRepetitions-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:-94--35--45--62--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.Repeatable",
          "name": "MkRepeatable",
          "package": "regexdot",
          "signature": "MkRepeatable",
          "source": "src/RegExDot-Repeatable.html#Repeatable",
          "type": "function"
        },
        "index": {
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "MkRepeatable",
          "package": "regexdot",
          "partial": "Mk Repeatable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:MkRepeatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying polymorphic datum.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "base",
          "package": "regexdot",
          "signature": "a",
          "source": "src/RegExDot-Repeatable.html#Repeatable",
          "type": "function"
        },
        "index": {
          "description": "The underlying polymorphic datum",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "base",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduces a \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e, with a range of \u003ccode\u003e\u003ca\u003eRepetitionBounds\u003c/a\u003e\u003c/code\u003e, to a precise number of repetitions.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "focus",
          "package": "regexdot",
          "signature": "Repeatable a -\u003e Repetitions -\u003e Repeatable a",
          "source": "src/RegExDot-Repeatable.html#focus",
          "type": "function"
        },
        "index": {
          "description": "Reduces Repeatable with range of RepetitionBounds to precise number of repetitions",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "focus",
          "normalized": "Repeatable a-\u003eRepetitions-\u003eRepeatable a",
          "package": "regexdot",
          "signature": "Repeatable a-\u003eRepetitions-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:focus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "getFewest",
          "package": "regexdot",
          "signature": "Repeatable a -\u003e Repetitions",
          "source": "src/RegExDot-Repeatable.html#getFewest",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "getFewest",
          "normalized": "Repeatable a-\u003eRepetitions",
          "package": "regexdot",
          "partial": "Fewest",
          "signature": "Repeatable a-\u003eRepetitions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:getFewest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "getMost",
          "package": "regexdot",
          "signature": "Repeatable a -\u003e Maybe Repetitions",
          "source": "src/RegExDot-Repeatable.html#getMost",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "getMost",
          "normalized": "Repeatable a-\u003eMaybe Repetitions",
          "package": "regexdot",
          "partial": "Most",
          "signature": "Repeatable a-\u003eMaybe Repetitions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:getMost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicate which is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if exactly one value is permissible, ie lower & upper bounds on the number of \u003ccode\u003e\u003ca\u003eRepetitions\u003c/a\u003e\u003c/code\u003e are identical.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "hasPreciseBounds",
          "package": "regexdot",
          "signature": "RepetitionBounds -\u003e Bool",
          "source": "src/RegExDot-Repeatable.html#hasPreciseBounds",
          "type": "function"
        },
        "index": {
          "description": "Predicate which is True if exactly one value is permissible ie lower upper bounds on the number of Repetitions are identical",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "hasPreciseBounds",
          "normalized": "RepetitionBounds-\u003eBool",
          "package": "regexdot",
          "partial": "Precise Bounds",
          "signature": "RepetitionBounds-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:hasPreciseBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to demand as many matching instances of \u003ccode\u003e\u003ca\u003ebase\u003c/a\u003e\u003c/code\u003e as possible; or as few (AKA \u003cem\u003elazy quantification\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "isGreedy",
          "package": "regexdot",
          "signature": "Bool",
          "source": "src/RegExDot-Repeatable.html#Repeatable",
          "type": "function"
        },
        "index": {
          "description": "Whether to demand as many matching instances of base as possible or as few AKA lazy quantification",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "isGreedy",
          "package": "regexdot",
          "partial": "Greedy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:isGreedy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if there's no choice in the number of repetitions; implemented via \u003ccode\u003e\u003ca\u003eisPrecise\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "isPrecise",
          "package": "regexdot",
          "signature": "Repeatable a -\u003e Bool",
          "source": "src/RegExDot-Repeatable.html#isPrecise",
          "type": "function"
        },
        "index": {
          "description": "True if there no choice in the number of repetitions implemented via isPrecise",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "isPrecise",
          "normalized": "Repeatable a-\u003eBool",
          "package": "regexdot",
          "partial": "Precise",
          "signature": "Repeatable a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:isPrecise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Construct a \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e, tailored for unrepeated data.\n\u003c/li\u003e\u003cli\u003e A degenerate case of \u003ccode\u003e\u003ca\u003e^#\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "one",
          "package": "regexdot",
          "signature": "a -\u003e Repeatable a",
          "source": "src/RegExDot-Repeatable.html#one",
          "type": "function"
        },
        "index": {
          "description": "Construct Repeatable tailored for unrepeated data degenerate case of",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "one",
          "normalized": "a-\u003eRepeatable a",
          "package": "regexdot",
          "signature": "a-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Construct a greedy \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e, from a polymorphic datum, with lower \u003ccode\u003e\u003ca\u003eRepetitionBounds\u003c/a\u003e\u003c/code\u003e == one.\n\u003c/li\u003e\u003cli\u003e A specific case of \u003ccode\u003e\u003ca\u003e^#-\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "oneOrMore",
          "package": "regexdot",
          "signature": "a -\u003e Repeatable a",
          "source": "src/RegExDot-Repeatable.html#oneOrMore",
          "type": "function"
        },
        "index": {
          "description": "Construct greedy Repeatable from polymorphic datum with lower RepetitionBounds one specific case of",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "oneOrMore",
          "normalized": "a-\u003eRepeatable a",
          "package": "regexdot",
          "partial": "Or More",
          "signature": "a-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:oneOrMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a non-greedy version of \u003ccode\u003e\u003ca\u003eoneOrMore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "oneOrMore'",
          "package": "regexdot",
          "signature": "a -\u003e Repeatable a",
          "source": "src/RegExDot-Repeatable.html#oneOrMore%27",
          "type": "function"
        },
        "index": {
          "description": "Construct non-greedy version of oneOrMore",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "oneOrMore'",
          "normalized": "a-\u003eRepeatable a",
          "package": "regexdot",
          "partial": "Or More'",
          "signature": "a-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:oneOrMore-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe token used to denote \u003ccode\u003e\u003ca\u003eoneOrMore\u003c/a\u003e\u003c/code\u003e, when in the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "oneOrMoreToken",
          "package": "regexdot",
          "signature": "Char",
          "source": "src/RegExDot-Repeatable.html#oneOrMoreToken",
          "type": "function"
        },
        "index": {
          "description": "The token used to denote oneOrMore when in the String form",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "oneOrMoreToken",
          "package": "regexdot",
          "partial": "Or More Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:oneOrMoreToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe delimiters of \u003ccode\u003e\u003ca\u003e^#-\u003e#\u003c/a\u003e\u003c/code\u003e, when in the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "rangeDelimiters",
          "package": "regexdot",
          "signature": "(Char, Char)",
          "source": "src/RegExDot-Repeatable.html#rangeDelimiters",
          "type": "function"
        },
        "index": {
          "description": "The delimiters of when in the String form",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "rangeDelimiters",
          "normalized": "(Char,Char)",
          "package": "regexdot",
          "partial": "Delimiters",
          "signature": "(Char,Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:rangeDelimiters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe token used to separate \u003ccode\u003e\u003ca\u003eRepetitionBounds\u003c/a\u003e\u003c/code\u003e, when in the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "rangeSeparatorToken",
          "package": "regexdot",
          "signature": "Char",
          "source": "src/RegExDot-Repeatable.html#rangeSeparatorToken",
          "type": "function"
        },
        "index": {
          "description": "The token used to separate RepetitionBounds when in the String form",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "rangeSeparatorToken",
          "package": "regexdot",
          "partial": "Separator Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:rangeSeparatorToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a parser for a specification of the number of permissible instances of the specified polymorphic parameter.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "repeatableParser",
          "package": "regexdot",
          "signature": "a -\u003e Parser (Repeatable a)",
          "source": "src/RegExDot-Repeatable.html#repeatableParser",
          "type": "function"
        },
        "index": {
          "description": "Builds parser for specification of the number of permissible instances of the specified polymorphic parameter",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "repeatableParser",
          "normalized": "a-\u003eParser(Repeatable a)",
          "package": "regexdot",
          "partial": "Parser",
          "signature": "a-\u003eParser(Repeatable a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:repeatableParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe bounds delimiting the range of permissible repetitions, of \u003ccode\u003e\u003ca\u003ebase\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "repetitionBounds",
          "package": "regexdot",
          "signature": "RepetitionBounds",
          "source": "src/RegExDot-Repeatable.html#Repeatable",
          "type": "function"
        },
        "index": {
          "description": "The bounds delimiting the range of permissible repetitions of base",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "repetitionBounds",
          "package": "regexdot",
          "partial": "Bounds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:repetitionBounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e A \u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e-function for the suffix, denoting the permissible repetitions, of \u003ccode\u003e\u003ca\u003ebase\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e This function converts the internal, into the tradition \u003cem\u003egreedy\u003c/em\u003e & \u003cem\u003enon-greedy\u003c/em\u003e quantifiers of various specific varieties.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "showSuffix",
          "package": "regexdot",
          "signature": "Repeatable a -\u003e ShowS",
          "source": "src/RegExDot-Repeatable.html#showSuffix",
          "type": "function"
        },
        "index": {
          "description": "ShowS function for the suffix denoting the permissible repetitions of base This function converts the internal into the tradition greedy non-greedy quantifiers of various specific varieties",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "showSuffix",
          "normalized": "Repeatable a-\u003eShowS",
          "package": "regexdot",
          "partial": "Suffix",
          "signature": "Repeatable a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:showSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Reduces a \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e, with a range of \u003ccode\u003e\u003ca\u003eRepetitionBounds\u003c/a\u003e\u003c/code\u003e, to a singleton.\n\u003c/li\u003e\u003cli\u003e A degenerate case of \u003ccode\u003e\u003ca\u003efocus\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "toSingleton",
          "package": "regexdot",
          "signature": "Repeatable a -\u003e Repeatable a",
          "source": "src/RegExDot-Repeatable.html#toSingleton",
          "type": "function"
        },
        "index": {
          "description": "Reduces Repeatable with range of RepetitionBounds to singleton degenerate case of focus",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "toSingleton",
          "normalized": "Repeatable a-\u003eRepeatable a",
          "package": "regexdot",
          "partial": "Singleton",
          "signature": "Repeatable a-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:toSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe set of \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e to which a specific meaning is attributed, when reading from \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "tokens",
          "package": "regexdot",
          "signature": "String",
          "source": "src/RegExDot-Repeatable.html#tokens",
          "type": "function"
        },
        "index": {
          "description": "The set of Char to which specific meaning is attributed when reading from String",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "tokens",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:tokens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Construct a greedy \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e, from a polymorphic datum, with \u003ccode\u003efewest\u003c/code\u003e == 0.\n\u003c/li\u003e\u003cli\u003e A specific case of \u003ccode\u003e\u003ca\u003e^#-\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrMore",
          "package": "regexdot",
          "signature": "a -\u003e Repeatable a",
          "source": "src/RegExDot-Repeatable.html#zeroOrMore",
          "type": "function"
        },
        "index": {
          "description": "Construct greedy Repeatable from polymorphic datum with fewest specific case of",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrMore",
          "normalized": "a-\u003eRepeatable a",
          "package": "regexdot",
          "partial": "Or More",
          "signature": "a-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:zeroOrMore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a non-greedy version of \u003ccode\u003e\u003ca\u003ezeroOrMore\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrMore'",
          "package": "regexdot",
          "signature": "a -\u003e Repeatable a",
          "source": "src/RegExDot-Repeatable.html#zeroOrMore%27",
          "type": "function"
        },
        "index": {
          "description": "Construct non-greedy version of zeroOrMore",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrMore'",
          "normalized": "a-\u003eRepeatable a",
          "package": "regexdot",
          "partial": "Or More'",
          "signature": "a-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:zeroOrMore-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The token used to denote \u003ccode\u003e\u003ca\u003ezeroOrMore\u003c/a\u003e\u003c/code\u003e, when in the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/li\u003e\u003cli\u003e AKA \u003cem\u003eKleene Star\u003c/em\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrMoreToken",
          "package": "regexdot",
          "signature": "Char",
          "source": "src/RegExDot-Repeatable.html#zeroOrMoreToken",
          "type": "function"
        },
        "index": {
          "description": "The token used to denote zeroOrMore when in the String form AKA Kleene Star",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrMoreToken",
          "package": "regexdot",
          "partial": "Or More Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:zeroOrMoreToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Construct a greedy \u003ccode\u003e\u003ca\u003eRepeatable\u003c/a\u003e\u003c/code\u003e, from a polymorphic datum, with \u003ccode\u003efewest\u003c/code\u003e == 0 & \u003ccode\u003emost\u003c/code\u003e == 1.\n\u003c/li\u003e\u003cli\u003e A specific case of \u003ccode\u003e\u003ca\u003e^#-\u003e#\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrOne",
          "package": "regexdot",
          "signature": "a -\u003e Repeatable a",
          "source": "src/RegExDot-Repeatable.html#zeroOrOne",
          "type": "function"
        },
        "index": {
          "description": "Construct greedy Repeatable from polymorphic datum with fewest most specific case of",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrOne",
          "normalized": "a-\u003eRepeatable a",
          "package": "regexdot",
          "partial": "Or One",
          "signature": "a-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:zeroOrOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a non-greedy version of \u003ccode\u003e\u003ca\u003ezeroOrOne\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrOne'",
          "package": "regexdot",
          "signature": "a -\u003e Repeatable a",
          "source": "src/RegExDot-Repeatable.html#zeroOrOne%27",
          "type": "function"
        },
        "index": {
          "description": "Construct non-greedy version of zeroOrOne",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrOne'",
          "normalized": "a-\u003eRepeatable a",
          "package": "regexdot",
          "partial": "Or One'",
          "signature": "a-\u003eRepeatable a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:zeroOrOne-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe token used to denote \u003ccode\u003e\u003ca\u003ezeroOrOne\u003c/a\u003e\u003c/code\u003e, when in the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e-form.\n\u003c/p\u003e",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrOneToken",
          "package": "regexdot",
          "signature": "Char",
          "source": "src/RegExDot-Repeatable.html#zeroOrOneToken",
          "type": "function"
        },
        "index": {
          "description": "The token used to denote zeroOrOne when in the String form",
          "hierarchy": "RegExDot Repeatable",
          "module": "RegExDot.Repeatable",
          "name": "zeroOrOneToken",
          "package": "regexdot",
          "partial": "Or One Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Repeatable.html#v:zeroOrOneToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tTools to manipulate a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eCAVEAT\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tThe data-definition remains in \u003ca\u003eRegEx\u003c/a\u003e, since it references \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "RegExDot.Result",
          "name": "Result",
          "package": "regexdot",
          "source": "src/RegExDot-Result.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Tools to manipulate Result CAVEAT The data-definition remains in RegEx since it references Match",
          "hierarchy": "RegExDot Result",
          "module": "RegExDot.Result",
          "name": "Result",
          "package": "regexdot",
          "partial": "Result",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Result.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the number of top-level \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003ees.\n\u003c/p\u003e",
          "module": "RegExDot.Result",
          "name": "countMatches",
          "package": "regexdot",
          "signature": "Result a -\u003e Int",
          "source": "src/RegExDot-Result.html#countMatches",
          "type": "function"
        },
        "index": {
          "description": "Counts the number of top-level Match es",
          "hierarchy": "RegExDot Result",
          "module": "RegExDot.Result",
          "name": "countMatches",
          "normalized": "Result a-\u003eInt",
          "package": "regexdot",
          "partial": "Matches",
          "signature": "Result a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Result.html#v:countMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "RegExDot.Result",
          "name": "getMatchList",
          "package": "regexdot",
          "signature": "Result a -\u003e Maybe (MatchList a)",
          "source": "src/RegExDot-Result.html#getMatchList",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "RegExDot Result",
          "module": "RegExDot.Result",
          "name": "getMatchList",
          "normalized": "Result a-\u003eMaybe(MatchList a)",
          "package": "regexdot",
          "partial": "Match List",
          "signature": "Result a-\u003eMaybe(MatchList a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Result.html#v:getMatchList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "RegExDot.Result",
          "name": "getPostMatch",
          "package": "regexdot",
          "signature": "Result a -\u003e ExternalMatch a",
          "source": "src/RegExDot-Result.html#getPostMatch",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "RegExDot Result",
          "module": "RegExDot.Result",
          "name": "getPostMatch",
          "normalized": "Result a-\u003eExternalMatch a",
          "package": "regexdot",
          "partial": "Post Match",
          "signature": "Result a-\u003eExternalMatch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Result.html#v:getPostMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccessor.\n\u003c/p\u003e",
          "module": "RegExDot.Result",
          "name": "getPreMatch",
          "package": "regexdot",
          "signature": "Result a -\u003e ExternalMatch a",
          "source": "src/RegExDot-Result.html#getPreMatch",
          "type": "function"
        },
        "index": {
          "description": "Accessor",
          "hierarchy": "RegExDot Result",
          "module": "RegExDot.Result",
          "name": "getPreMatch",
          "normalized": "Result a-\u003eExternalMatch a",
          "package": "regexdot",
          "partial": "Pre Match",
          "signature": "Result a-\u003eExternalMatch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Result.html#v:getPreMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the \u003ccode\u003e\u003ca\u003eInputData\u003c/a\u003e\u003c/code\u003e matched the \u003ccode\u003e\u003ca\u003eExtendedRegEx\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Result",
          "name": "isMatch",
          "package": "regexdot",
          "signature": "Result a -\u003e Bool",
          "source": "src/RegExDot-Result.html#isMatch",
          "type": "function"
        },
        "index": {
          "description": "True if the InputData matched the ExtendedRegEx",
          "hierarchy": "RegExDot Result",
          "module": "RegExDot.Result",
          "name": "isMatch",
          "normalized": "Result a-\u003eBool",
          "package": "regexdot",
          "partial": "Match",
          "signature": "Result a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Result.html#v:isMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tUsed to implement \u003cem\u003ePerl-shortcut\u003c/em\u003es, \u003cem\u003eBracketExpression\u003c/em\u003e-ranges & \u003cem\u003ePOSIX Character-classes\u003c/em\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "RegExDot.ShowablePredicate",
          "name": "ShowablePredicate",
          "package": "regexdot",
          "source": "src/RegExDot-ShowablePredicate.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Used to implement Perl-shortcut BracketExpression ranges POSIX Character-classes",
          "hierarchy": "RegExDot ShowablePredicate",
          "module": "RegExDot.ShowablePredicate",
          "name": "ShowablePredicate",
          "package": "regexdot",
          "partial": "Showable Predicate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ShowablePredicate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn arbitrary polymorphic predicate function.\n\u003c/p\u003e",
          "module": "RegExDot.ShowablePredicate",
          "name": "Predicate",
          "package": "regexdot",
          "source": "src/RegExDot-ShowablePredicate.html#Predicate",
          "type": "type"
        },
        "index": {
          "description": "An arbitrary polymorphic predicate function",
          "hierarchy": "RegExDot ShowablePredicate",
          "module": "RegExDot.ShowablePredicate",
          "name": "Predicate",
          "package": "regexdot",
          "partial": "Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ShowablePredicate.html#t:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContainer for both the \u003cem\u003epredicate\u003c/em\u003e, & the name used in the implementation of \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.ShowablePredicate",
          "name": "ShowablePredicate",
          "package": "regexdot",
          "source": "src/RegExDot-ShowablePredicate.html#ShowablePredicate",
          "type": "data"
        },
        "index": {
          "description": "Container for both the predicate the name used in the implementation of Show",
          "hierarchy": "RegExDot ShowablePredicate",
          "module": "RegExDot.ShowablePredicate",
          "name": "ShowablePredicate",
          "package": "regexdot",
          "partial": "Showable Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ShowablePredicate.html#t:ShowablePredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "RegExDot.ShowablePredicate",
          "name": "MkShowablePredicate",
          "package": "regexdot",
          "signature": "MkShowablePredicate",
          "source": "src/RegExDot-ShowablePredicate.html#ShowablePredicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "RegExDot ShowablePredicate",
          "module": "RegExDot.ShowablePredicate",
          "name": "MkShowablePredicate",
          "package": "regexdot",
          "partial": "Mk Showable Predicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ShowablePredicate.html#v:MkShowablePredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe identifier of this predicate when in string-form.\n\u003c/p\u003e",
          "module": "RegExDot.ShowablePredicate",
          "name": "name",
          "package": "regexdot",
          "signature": "String",
          "source": "src/RegExDot-ShowablePredicate.html#ShowablePredicate",
          "type": "function"
        },
        "index": {
          "description": "The identifier of this predicate when in string-form",
          "hierarchy": "RegExDot ShowablePredicate",
          "module": "RegExDot.ShowablePredicate",
          "name": "name",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ShowablePredicate.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function used to determine whether an input datum matches.\n\u003c/p\u003e",
          "module": "RegExDot.ShowablePredicate",
          "name": "predicate",
          "package": "regexdot",
          "signature": "Predicate a",
          "source": "src/RegExDot-ShowablePredicate.html#ShowablePredicate",
          "type": "function"
        },
        "index": {
          "description": "The function used to determine whether an input datum matches",
          "hierarchy": "RegExDot ShowablePredicate",
          "module": "RegExDot.ShowablePredicate",
          "name": "predicate",
          "package": "regexdot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-ShowablePredicate.html#v:predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDelimits a data-sequence, via its offset & length, within a wider list.\n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
          "module": "RegExDot.Span",
          "name": "Span",
          "package": "regexdot",
          "source": "src/RegExDot-Span.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Delimits data-sequence via its offset length within wider list",
          "hierarchy": "RegExDot Span",
          "module": "RegExDot.Span",
          "name": "Span",
          "package": "regexdot",
          "partial": "Span",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Span.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e The offset & length of a specific data-sequence, within a wider list.\n\u003c/li\u003e\u003cli\u003e Similar to \u003ca\u003ehttp://hackage.haskell.org/packages/archive/regex-base/latest/doc/html/Text-Regex-Base-RegexLike.html#t%3AMatchArray\u003c/a\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Span",
          "name": "Span",
          "package": "regexdot",
          "source": "src/RegExDot-Span.html#Span",
          "type": "type"
        },
        "index": {
          "description": "The offset length of specific data-sequence within wider list Similar to http hackage.haskell.org packages archive regex-base latest doc html Text-Regex-Base-RegexLike.html AMatchArray",
          "hierarchy": "RegExDot Span",
          "module": "RegExDot.Span",
          "name": "Span",
          "package": "regexdot",
          "partial": "Span",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Span.html#t:Span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the furthest extent, i.e. the offset just after the end.\n\u003c/p\u003e",
          "module": "RegExDot.Span",
          "name": "after",
          "package": "regexdot",
          "signature": "Span -\u003e DataLength",
          "source": "src/RegExDot-Span.html#after",
          "type": "function"
        },
        "index": {
          "description": "Returns the furthest extent i.e the offset just after the end",
          "hierarchy": "RegExDot Span",
          "module": "RegExDot.Span",
          "name": "after",
          "normalized": "Span-\u003eDataLength",
          "package": "regexdot",
          "signature": "Span-\u003eDataLength",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Span.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty instance, located at the specified offset.\n\u003c/p\u003e",
          "module": "RegExDot.Span",
          "name": "empty",
          "package": "regexdot",
          "signature": "DataLength -\u003e Span",
          "source": "src/RegExDot-Span.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty instance located at the specified offset",
          "hierarchy": "RegExDot Span",
          "module": "RegExDot.Span",
          "name": "empty",
          "normalized": "DataLength-\u003eSpan",
          "package": "regexdot",
          "signature": "DataLength-\u003eSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Span.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Condenses a list into a single value.\n\u003c/li\u003e\u003cli\u003e Expects a gap-free, sorted list.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "RegExDot.Span",
          "name": "join",
          "package": "regexdot",
          "signature": "DataLength-\u003e [Span]-\u003e Span",
          "type": "function"
        },
        "index": {
          "description": "Condenses list into single value Expects gap-free sorted list",
          "hierarchy": "RegExDot Span",
          "module": "RegExDot.Span",
          "name": "join",
          "normalized": "DataLength-\u003e[Span]-\u003eSpan",
          "package": "regexdot",
          "signature": "DataLength-\u003e[Span]-\u003eSpan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Span.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAUTHOR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\tDr. Alistair Ward\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eDESCRIPTION\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cul\u003e\u003cli\u003e Defines a specific type of tree-structure, which is composed from either a datum, or a list of Tree-lists; \u003ca\u003ehttp://en.wikipedia.org/wiki/Rose_Tree\u003c/a\u003e.\n\u003c/li\u003e\u003cli\u003e This more general tree-structure has the shape of a regular-expression match.\n\u003c/li\u003e\u003cli\u003e This contrasts with the typical binary-tree, which is either empty, or contains a (left Tree, datum, right Tree).\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "RegExDot.Tree",
          "name": "Tree",
          "package": "regexdot",
          "source": "src/RegExDot-Tree.html",
          "type": "module"
        },
        "index": {
          "description": "AUTHOR Dr Alistair Ward DESCRIPTION Defines specific type of tree-structure which is composed from either datum or list of Tree-lists http en.wikipedia.org wiki Rose Tree This more general tree-structure has the shape of regular-expression match This contrasts with the typical binary-tree which is either empty or contains left Tree datum right Tree",
          "hierarchy": "RegExDot Tree",
          "module": "RegExDot.Tree",
          "name": "Tree",
          "package": "regexdot",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA general purpose tree-type structure.\n\u003c/p\u003e",
          "module": "RegExDot.Tree",
          "name": "Tree",
          "package": "regexdot",
          "source": "src/RegExDot-Tree.html#Tree",
          "type": "data"
        },
        "index": {
          "description": "general purpose tree-type structure",
          "hierarchy": "RegExDot Tree",
          "module": "RegExDot.Tree",
          "name": "Tree",
          "package": "regexdot",
          "partial": "Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Tree.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe payload.\n\u003c/p\u003e",
          "module": "RegExDot.Tree",
          "name": "Leaf",
          "package": "regexdot",
          "signature": "Leaf a",
          "source": "src/RegExDot-Tree.html#Tree",
          "type": "function"
        },
        "index": {
          "description": "The payload",
          "hierarchy": "RegExDot Tree",
          "module": "RegExDot.Tree",
          "name": "Leaf",
          "package": "regexdot",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Tree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecurse. NB: a list of lists is required to contain the \u003cem\u003eMatchLists\u003c/em\u003e resulting from repeated \u003cem\u003eAlternatives\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "RegExDot.Tree",
          "name": "Node",
          "package": "regexdot",
          "signature": "Node [TreeList a]",
          "source": "src/RegExDot-Tree.html#Tree",
          "type": "function"
        },
        "index": {
          "description": "Recurse NB list of lists is required to contain the MatchLists resulting from repeated Alternatives",
          "hierarchy": "RegExDot Tree",
          "module": "RegExDot.Tree",
          "name": "Node",
          "normalized": "Node[TreeList a]",
          "package": "regexdot",
          "partial": "Node",
          "signature": "Node[TreeList a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Tree.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct the specified \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e; i.e. lop the apex from the \u003ccode\u003e\u003ca\u003eTree\u003c/a\u003e\u003c/code\u003e, leaving a flat top.\n\u003c/p\u003e",
          "module": "RegExDot.Tree",
          "name": "pop",
          "package": "regexdot",
          "signature": "Tree a-\u003e [TreeList a]",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct the specified Node i.e lop the apex from the Tree leaving flat top",
          "hierarchy": "RegExDot Tree",
          "module": "RegExDot.Tree",
          "name": "pop",
          "normalized": "Tree a-\u003e[TreeList a]",
          "package": "regexdot",
          "signature": "Tree a-\u003e[TreeList a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regexdot/docs/RegExDot-Tree.html#v:pop"
      }
    }
  ]
]