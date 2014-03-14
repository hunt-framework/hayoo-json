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
        "word": "logfloat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module presents a type for storing numbers in the log-domain.\n The main reason for doing this is to prevent underflow when\n multiplying many small probabilities as is done in Hidden Markov\n Models and other statistical models often used for natural\n language processing. The log-domain also helps prevent overflow\n when multiplying many large numbers. In rare cases it can speed\n up numerical computation (since addition is faster than\n multiplication, though logarithms are exceptionally slow), but\n the primary goal is to improve accuracy of results. A secondary\n goal has been to maximize efficiency since these computations\n are frequently done within a \u003cem\u003eO(n^3)\u003c/em\u003e loop.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eLogFloat\u003c/a\u003e\u003c/code\u003e of this module is restricted to non-negative\n numbers for efficiency's sake, see \u003ca\u003eData.Number.LogFloat.Signed\u003c/a\u003e\n for doing signed log-domain calculations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.LogFloat",
          "name": "LogFloat",
          "package": "logfloat",
          "source": "src/Data-Number-LogFloat.html",
          "type": "module"
        },
        "index": {
          "description": "This module presents type for storing numbers in the log-domain The main reason for doing this is to prevent underflow when multiplying many small probabilities as is done in Hidden Markov Models and other statistical models often used for natural language processing The log-domain also helps prevent overflow when multiplying many large numbers In rare cases it can speed up numerical computation since addition is faster than multiplication though logarithms are exceptionally slow but the primary goal is to improve accuracy of results secondary goal has been to maximize efficiency since these computations are frequently done within loop The LogFloat of this module is restricted to non-negative numbers for efficiency sake see Data.Number.LogFloat.Signed for doing signed log-domain calculations",
          "hierarchy": "Data Number LogFloat",
          "module": "Data.Number.LogFloat",
          "name": "LogFloat",
          "package": "logfloat",
          "partial": "Log Float",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-LogFloat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eLogFloat\u003c/code\u003e is just a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e with a special interpretation.\n The \u003ccode\u003e\u003ca\u003elogFloat\u003c/a\u003e\u003c/code\u003e function is presented instead of the constructor,\n in order to ensure semantic conversion. At present the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\n instance will convert back to the normal-domain, and so will\n underflow at that point. This behavior may change in the future.\n\u003c/p\u003e\u003cp\u003ePerforming operations in the log-domain is cheap, prevents\n underflow, and is otherwise very nice for dealing with miniscule\n probabilities. However, crossing into and out of the log-domain\n is expensive and should be avoided as much as possible. In\n particular, if you're doing a series of multiplications as in\n \u003ccode\u003elp * logFloat q * logFloat r\u003c/code\u003e it's faster to do \u003ccode\u003elp * logFloat\n (q * r)\u003c/code\u003e if you're reasonably sure the normal-domain multiplication\n won't underflow, because that way you enter the log-domain only\n once, instead of twice.\n\u003c/p\u003e\u003cp\u003eEven more particularly, you should \u003cem\u003eavoid addition\u003c/em\u003e whenever\n possible. Addition is provided because it's necessary at times\n and the proper implementation is not immediately transparent.\n However, between two \u003ccode\u003eLogFloat\u003c/code\u003es addition requires crossing the\n exp/log boundary twice; with a \u003ccode\u003eLogFloat\u003c/code\u003e and a regular number\n it's three times since the regular number needs to enter the\n log-domain first. This makes addition incredibly slow. Again,\n if you can parenthesize to do plain operations first, do it!\n\u003c/p\u003e",
          "module": "Data.Number.LogFloat",
          "name": "LogFloat",
          "package": "logfloat",
          "source": "src/Data-Number-LogFloat.html#LogFloat",
          "type": "data"
        },
        "index": {
          "description": "LogFloat is just Double with special interpretation The logFloat function is presented instead of the constructor in order to ensure semantic conversion At present the Show instance will convert back to the normal-domain and so will underflow at that point This behavior may change in the future Performing operations in the log-domain is cheap prevents underflow and is otherwise very nice for dealing with miniscule probabilities However crossing into and out of the log-domain is expensive and should be avoided as much as possible In particular if you re doing series of multiplications as in lp logFloat logFloat it faster to do lp logFloat if you re reasonably sure the normal-domain multiplication won underflow because that way you enter the log-domain only once instead of twice Even more particularly you should avoid addition whenever possible Addition is provided because it necessary at times and the proper implementation is not immediately transparent However between two LogFloat addition requires crossing the exp log boundary twice with LogFloat and regular number it three times since the regular number needs to enter the log-domain first This makes addition incredibly slow Again if you can parenthesize to do plain operations first do it",
          "hierarchy": "Data Number LogFloat",
          "module": "Data.Number.LogFloat",
          "name": "LogFloat",
          "package": "logfloat",
          "partial": "Log Float",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-LogFloat.html#t:LogFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition: \u003ccode\u003eexpm1 == (subtract 1) . exp\u003c/code\u003e. The C language\n provides a special definition for \u003ccode\u003e\u003ca\u003eexpm1\u003c/a\u003e\u003c/code\u003e which is more accurate\n than doing the naive thing, especially for very small arguments.\n This function isn't needed internally, but is provided for\n symmetry with \u003ccode\u003e\u003ca\u003elog1p\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis installation was compiled to use the specialized version.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Number.LogFloat",
          "name": "expm1",
          "package": "logfloat",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Number-LogFloat.html#expm1",
          "type": "function"
        },
        "index": {
          "description": "Definition expm1 subtract exp The language provides special definition for expm1 which is more accurate than doing the naive thing especially for very small arguments This function isn needed internally but is provided for symmetry with log1p This installation was compiled to use the specialized version",
          "hierarchy": "Data Number LogFloat",
          "module": "Data.Number.LogFloat",
          "name": "expm1",
          "normalized": "Double-\u003eDouble",
          "package": "logfloat",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-LogFloat.html#v:expm1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn our log-domain value back into normal-domain. Beware\n of overflow/underflow.\n\u003c/p\u003e",
          "module": "Data.Number.LogFloat",
          "name": "fromLogFloat",
          "package": "logfloat",
          "signature": "LogFloat -\u003e a",
          "source": "src/Data-Number-LogFloat.html#fromLogFloat",
          "type": "function"
        },
        "index": {
          "description": "Return our log-domain value back into normal-domain Beware of overflow underflow",
          "hierarchy": "Data Number LogFloat",
          "module": "Data.Number.LogFloat",
          "name": "fromLogFloat",
          "normalized": "LogFloat-\u003ea",
          "package": "logfloat",
          "partial": "Log Float",
          "signature": "LogFloat-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-LogFloat.html#v:fromLogFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition: \u003ccode\u003elog1p == log . (1+)\u003c/code\u003e. The C language provides a\n special definition for \u003ccode\u003e\u003ca\u003elog1p\u003c/a\u003e\u003c/code\u003e which is more accurate than doing\n the naive thing, especially for very small arguments. For example,\n the naive version underflows around \u003ccode\u003e2 ** -53\u003c/code\u003e, whereas the\n specialized version underflows around \u003ccode\u003e2 ** -1074\u003c/code\u003e. This function\n is used by (\u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e) and (\u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e) on \u003ccode\u003eLogFloat\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis installation was compiled to use the specialized version.\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Number.LogFloat",
          "name": "log1p",
          "package": "logfloat",
          "signature": "Double -\u003e Double",
          "source": "src/Data-Number-LogFloat.html#log1p",
          "type": "function"
        },
        "index": {
          "description": "Definition log1p log The language provides special definition for log1p which is more accurate than doing the naive thing especially for very small arguments For example the naive version underflows around whereas the specialized version underflows around This function is used by and on LogFloat This installation was compiled to use the specialized version",
          "hierarchy": "Data Number LogFloat",
          "module": "Data.Number.LogFloat",
          "name": "log1p",
          "normalized": "Double-\u003eDouble",
          "package": "logfloat",
          "signature": "Double-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-LogFloat.html#v:log1p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor which does semantic conversion from normal-domain\n to log-domain. Throws errors on negative input.\n\u003c/p\u003e",
          "module": "Data.Number.LogFloat",
          "name": "logFloat",
          "package": "logfloat",
          "signature": "a -\u003e LogFloat",
          "source": "src/Data-Number-LogFloat.html#logFloat",
          "type": "function"
        },
        "index": {
          "description": "Constructor which does semantic conversion from normal-domain to log-domain Throws errors on negative input",
          "hierarchy": "Data Number LogFloat",
          "module": "Data.Number.LogFloat",
          "name": "logFloat",
          "normalized": "a-\u003eLogFloat",
          "package": "logfloat",
          "partial": "Float",
          "signature": "a-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-LogFloat.html#v:logFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the log-domain value itself without conversion.\n\u003c/p\u003e",
          "module": "Data.Number.LogFloat",
          "name": "logFromLogFloat",
          "package": "logfloat",
          "signature": "LogFloat -\u003e a",
          "source": "src/Data-Number-LogFloat.html#logFromLogFloat",
          "type": "function"
        },
        "index": {
          "description": "Return the log-domain value itself without conversion",
          "hierarchy": "Data Number LogFloat",
          "module": "Data.Number.LogFloat",
          "name": "logFromLogFloat",
          "normalized": "LogFloat-\u003ea",
          "package": "logfloat",
          "partial": "From Log Float",
          "signature": "LogFloat-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-LogFloat.html#v:logFromLogFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor which assumes the argument is already in the\n log-domain. Throws errors on \u003ccode\u003enotANumber\u003c/code\u003e input.\n\u003c/p\u003e",
          "module": "Data.Number.LogFloat",
          "name": "logToLogFloat",
          "package": "logfloat",
          "signature": "a -\u003e LogFloat",
          "source": "src/Data-Number-LogFloat.html#logToLogFloat",
          "type": "function"
        },
        "index": {
          "description": "Constructor which assumes the argument is already in the log-domain Throws errors on notANumber input",
          "hierarchy": "Data Number LogFloat",
          "module": "Data.Number.LogFloat",
          "name": "logToLogFloat",
          "normalized": "a-\u003eLogFloat",
          "package": "logfloat",
          "partial": "To Log Float",
          "signature": "a-\u003eLogFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-LogFloat.html#v:logToLogFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Prelude's \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class for dealing with ordered types is often\n onerous to use because it requires \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e as well as a total\n ordering. While such total orderings are common, partial orderings\n are moreso. This module presents a class for partially ordered\n types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "PartialOrd",
          "package": "logfloat",
          "source": "src/Data-Number-PartialOrd.html",
          "type": "module"
        },
        "index": {
          "description": "The Prelude Ord class for dealing with ordered types is often onerous to use because it requires Eq as well as total ordering While such total orderings are common partial orderings are moreso This module presents class for partially ordered types",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "PartialOrd",
          "package": "logfloat",
          "partial": "Partial Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class defines a partially ordered type. The method names\n were chosen so as not to conflict with \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e. We use\n \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e instead of defining new types \u003ccode\u003ePartialOrdering\u003c/code\u003e and\n \u003ccode\u003eFuzzyBool\u003c/code\u003e because this way should make the class easier to\n use.\n\u003c/p\u003e\u003cp\u003eMinimum complete definition: \u003ccode\u003e\u003ca\u003ecmp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "PartialOrd",
          "package": "logfloat",
          "source": "src/Data-Number-PartialOrd.html#PartialOrd",
          "type": "class"
        },
        "index": {
          "description": "This class defines partially ordered type The method names were chosen so as not to conflict with Ord and Eq We use Maybe instead of defining new types PartialOrdering and FuzzyBool because this way should make the class easier to use Minimum complete definition cmp",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "PartialOrd",
          "package": "logfloat",
          "partial": "Partial Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#t:PartialOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003ecompare\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "cmp",
          "package": "logfloat",
          "signature": "a -\u003e a -\u003e Maybe Ordering",
          "source": "src/Data-Number-PartialOrd.html#cmp",
          "type": "method"
        },
        "index": {
          "description": "like compare",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "cmp",
          "normalized": "a-\u003ea-\u003eMaybe Ordering",
          "package": "logfloat",
          "signature": "a-\u003ea-\u003eMaybe Ordering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#v:cmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003eData.Ord.comparing\u003c/code\u003e. Helpful in conjunction with the\n \u003ccode\u003exxxBy\u003c/code\u003e family of functions from \u003ca\u003eData.List\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "comparingPO",
          "package": "logfloat",
          "signature": "(a -\u003e b) -\u003e a -\u003e a -\u003e Maybe Ordering",
          "source": "src/Data-Number-PartialOrd.html#comparingPO",
          "type": "function"
        },
        "index": {
          "description": "Like Data.Ord.comparing Helpful in conjunction with the xxxBy family of functions from Data.List",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "comparingPO",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eMaybe Ordering",
          "package": "logfloat",
          "partial": "PO",
          "signature": "(a-\u003eb)-\u003ea-\u003ea-\u003eMaybe Ordering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#v:comparingPO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "eq",
          "package": "logfloat",
          "signature": "a -\u003e a -\u003e Maybe Bool",
          "source": "src/Data-Number-PartialOrd.html#eq",
          "type": "method"
        },
        "index": {
          "description": "like",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "eq",
          "normalized": "a-\u003ea-\u003eMaybe Bool",
          "package": "logfloat",
          "signature": "a-\u003ea-\u003eMaybe Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike (\u003ccode\u003e\u003ca\u003e\u003e=\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "ge",
          "package": "logfloat",
          "signature": "a -\u003e a -\u003e Maybe Bool",
          "source": "src/Data-Number-PartialOrd.html#ge",
          "type": "method"
        },
        "index": {
          "description": "like",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "ge",
          "normalized": "a-\u003ea-\u003eMaybe Bool",
          "package": "logfloat",
          "signature": "a-\u003ea-\u003eMaybe Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#v:ge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike (\u003ccode\u003e\u003ca\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "gt",
          "package": "logfloat",
          "signature": "a -\u003e a -\u003e Maybe Bool",
          "source": "src/Data-Number-PartialOrd.html#gt",
          "type": "method"
        },
        "index": {
          "description": "like",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "gt",
          "normalized": "a-\u003ea-\u003eMaybe Bool",
          "package": "logfloat",
          "signature": "a-\u003ea-\u003eMaybe Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#v:gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike (\u003ccode\u003e\u003ca\u003e\u003c=\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "le",
          "package": "logfloat",
          "signature": "a -\u003e a -\u003e Maybe Bool",
          "source": "src/Data-Number-PartialOrd.html#le",
          "type": "method"
        },
        "index": {
          "description": "like",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "le",
          "normalized": "a-\u003ea-\u003eMaybe Bool",
          "package": "logfloat",
          "signature": "a-\u003ea-\u003eMaybe Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#v:le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike (\u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "lt",
          "package": "logfloat",
          "signature": "a -\u003e a -\u003e Maybe Bool",
          "source": "src/Data-Number-PartialOrd.html#lt",
          "type": "method"
        },
        "index": {
          "description": "like",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "lt",
          "normalized": "a-\u003ea-\u003eMaybe Bool",
          "package": "logfloat",
          "signature": "a-\u003ea-\u003eMaybe Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#v:lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e. The default instance returns the left argument\n when they're equal.\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "maxPO",
          "package": "logfloat",
          "signature": "a -\u003e a -\u003e Maybe a",
          "source": "src/Data-Number-PartialOrd.html#maxPO",
          "type": "method"
        },
        "index": {
          "description": "like max The default instance returns the left argument when they re equal",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "maxPO",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "logfloat",
          "partial": "PO",
          "signature": "a-\u003ea-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#v:maxPO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e. The default instance returns the left argument\n when they're equal.\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "minPO",
          "package": "logfloat",
          "signature": "a -\u003e a -\u003e Maybe a",
          "source": "src/Data-Number-PartialOrd.html#minPO",
          "type": "method"
        },
        "index": {
          "description": "like min The default instance returns the left argument when they re equal",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "minPO",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "logfloat",
          "partial": "PO",
          "signature": "a-\u003ea-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#v:minPO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Number.PartialOrd",
          "name": "ne",
          "package": "logfloat",
          "signature": "a -\u003e a -\u003e Maybe Bool",
          "source": "src/Data-Number-PartialOrd.html#ne",
          "type": "method"
        },
        "index": {
          "description": "like",
          "hierarchy": "Data Number PartialOrd",
          "module": "Data.Number.PartialOrd",
          "name": "ne",
          "normalized": "a-\u003ea-\u003eMaybe Bool",
          "package": "logfloat",
          "signature": "a-\u003ea-\u003eMaybe Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-PartialOrd.html#v:ne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module presents a type class for generic conversion between\n numeric types, generalizing \u003ccode\u003erealToFrac\u003c/code\u003e in order to overcome\n problems with pivoting through \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.RealToFrac",
          "name": "RealToFrac",
          "package": "logfloat",
          "source": "src/Data-Number-RealToFrac.html",
          "type": "module"
        },
        "index": {
          "description": "This module presents type class for generic conversion between numeric types generalizing realToFrac in order to overcome problems with pivoting through Rational",
          "hierarchy": "Data Number RealToFrac",
          "module": "Data.Number.RealToFrac",
          "name": "RealToFrac",
          "package": "logfloat",
          "partial": "Real To Frac",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-RealToFrac.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003erealToFrac\u003c/a\u003e\u003c/code\u003e function is defined to pivot through\n a \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e according to the haskell98 spec. This is non-portable\n and problematic as discussed in \u003ca\u003eData.Number.Transfinite\u003c/a\u003e. Since\n there is resistance to breaking from the spec, this class defines\n a reasonable variant which deals with transfinite values\n appropriately.\n\u003c/p\u003e\u003cp\u003eThere is a generic instance from any Transfinite Real to any\n Transfinite Fractional, using checks to ensure correctness. GHC\n has specialized versions for some types which use primitive\n converters instead, for large performance gains. (These definitions\n are hidden from other compilers via CPP.) Due to a bug in Haddock\n the specialized instances are shown twice and the generic instance\n isn't shown at all. Since the instances are overlapped, you'll\n need to give type signatures if the arguments to \u003ccode\u003e\u003ca\u003erealToFrac\u003c/a\u003e\u003c/code\u003e\n are polymorphic. There's also a generic instance for any Real\n Fractional type to itself, thus if you write any generic instances\n beware of incoherence.\n\u003c/p\u003e\u003cp\u003eIf any of these restrictions (CPP, GHC-only optimizations,\n OverlappingInstances) are onerous to you, contact the maintainer\n (we like patches).  Note that this \u003cem\u003edoes\u003c/em\u003e work for Hugs with\n suitable options (e.g. \u003ccode\u003ehugs -98 +o -F'cpp -P'\u003c/code\u003e). However, Hugs\n doesn't allow \u003ccode\u003eIncoherentInstances\u003c/code\u003e nor does it allow diamonds\n with \u003ccode\u003eOverlappingInstances\u003c/code\u003e, which restricts the ability to add\n additional generic instances.\n\u003c/p\u003e",
          "module": "Data.Number.RealToFrac",
          "name": "RealToFrac",
          "package": "logfloat",
          "source": "src/Data-Number-RealToFrac.html#RealToFrac",
          "type": "class"
        },
        "index": {
          "description": "The realToFrac function is defined to pivot through Rational according to the haskell98 spec This is non-portable and problematic as discussed in Data.Number.Transfinite Since there is resistance to breaking from the spec this class defines reasonable variant which deals with transfinite values appropriately There is generic instance from any Transfinite Real to any Transfinite Fractional using checks to ensure correctness GHC has specialized versions for some types which use primitive converters instead for large performance gains These definitions are hidden from other compilers via CPP Due to bug in Haddock the specialized instances are shown twice and the generic instance isn shown at all Since the instances are overlapped you ll need to give type signatures if the arguments to realToFrac are polymorphic There also generic instance for any Real Fractional type to itself thus if you write any generic instances beware of incoherence If any of these restrictions CPP GHC-only optimizations OverlappingInstances are onerous to you contact the maintainer we like patches Note that this does work for Hugs with suitable options e.g hugs cpp However Hugs doesn allow IncoherentInstances nor does it allow diamonds with OverlappingInstances which restricts the ability to add additional generic instances",
          "hierarchy": "Data Number RealToFrac",
          "module": "Data.Number.RealToFrac",
          "name": "RealToFrac",
          "package": "logfloat",
          "partial": "Real To Frac",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-RealToFrac.html#t:RealToFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Number.RealToFrac",
          "name": "realToFrac",
          "package": "logfloat",
          "signature": "a -\u003e b",
          "source": "src/Data-Number-RealToFrac.html#realToFrac",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Number RealToFrac",
          "module": "Data.Number.RealToFrac",
          "name": "realToFrac",
          "normalized": "a-\u003eb",
          "package": "logfloat",
          "partial": "To Frac",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-RealToFrac.html#v:realToFrac"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module presents a type class for numbers which have\n representations for transfinite values. The idea originated from\n the IEEE-754 floating-point special values, used by\n \u003ca\u003eData.Number.LogFloat\u003c/a\u003e. However not all \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e types\n necessarily support transfinite values. In particular, \u003ccode\u003eRatio\u003c/code\u003e\n types including \u003ccode\u003e\u003ca\u003eRational\u003c/a\u003e\u003c/code\u003e do not have portable representations.\n\u003c/p\u003e\u003cp\u003eFor the Glasgow compiler (GHC 6.8.2), \u003ca\u003eGHC.Real\u003c/a\u003e defines \u003ccode\u003e1%0\u003c/code\u003e\n and \u003ccode\u003e0%0\u003c/code\u003e as representations for \u003ccode\u003e\u003ca\u003einfinity\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enotANumber\u003c/a\u003e\u003c/code\u003e,\n but most operations on them will raise exceptions. If \u003ccode\u003e\u003ca\u003etoRational\u003c/a\u003e\u003c/code\u003e\n is used on an infinite floating value, the result is a rational\n with a numerator sufficiently large that it will overflow when\n converted back to a \u003ccode\u003eDouble\u003c/code\u003e. If used on NaN, the result would\n buggily convert back as \u003ccode\u003e\u003ca\u003enegativeInfinity\u003c/a\u003e\u003c/code\u003e. For more discussion\n on why this approach is problematic, see:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ca\u003ehttp://www.haskell.org/pipermail/haskell-prime/2006-February/000791.html\u003c/a\u003e\n\u003c/li\u003e\u003cli\u003e \u003ca\u003ehttp://www.haskell.org/pipermail/haskell-prime/2006-February/000821.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eHugs (September 2006) stays closer to the haskell98 spec and\n offers no way of constructing those values, raising arithmetic\n overflow errors if attempted.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Number.Transfinite",
          "name": "Transfinite",
          "package": "logfloat",
          "source": "src/Data-Number-Transfinite.html",
          "type": "module"
        },
        "index": {
          "description": "This module presents type class for numbers which have representations for transfinite values The idea originated from the IEEE-754 floating-point special values used by Data.Number.LogFloat However not all Fractional types necessarily support transfinite values In particular Ratio types including Rational do not have portable representations For the Glasgow compiler GHC GHC.Real defines and as representations for infinity and notANumber but most operations on them will raise exceptions If toRational is used on an infinite floating value the result is rational with numerator sufficiently large that it will overflow when converted back to Double If used on NaN the result would buggily convert back as negativeInfinity For more discussion on why this approach is problematic see http www.haskell.org pipermail haskell-prime February html http www.haskell.org pipermail haskell-prime February html Hugs September stays closer to the haskell98 spec and offers no way of constructing those values raising arithmetic overflow errors if attempted",
          "hierarchy": "Data Number Transfinite",
          "module": "Data.Number.Transfinite",
          "name": "Transfinite",
          "package": "logfloat",
          "partial": "Transfinite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-Transfinite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMany numbers are not \u003ccode\u003e\u003ca\u003eBounded\u003c/a\u003e\u003c/code\u003e yet, even though they can\n represent arbitrarily large values, they are not necessarily\n able to represent transfinite values such as infinity itself.\n This class is for types which are capable of representing such\n values. Notably, this class does not require the type to be\n \u003ccode\u003e\u003ca\u003eFractional\u003c/a\u003e\u003c/code\u003e nor \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e since integral types could also have\n representations for transfinite values. By popular demand the\n \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e restriction has been lifted as well, due to complications\n of defining \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e for some types.\n\u003c/p\u003e\u003cp\u003eIn particular, this class extends the ordered projection to have\n a maximum value \u003ccode\u003e\u003ca\u003einfinity\u003c/a\u003e\u003c/code\u003e and a minimum value \u003ccode\u003e\u003ca\u003enegativeInfinity\u003c/a\u003e\u003c/code\u003e,\n as well as an exceptional value \u003ccode\u003e\u003ca\u003enotANumber\u003c/a\u003e\u003c/code\u003e. All the natural\n laws regarding \u003ccode\u003einfinity\u003c/code\u003e and \u003ccode\u003enegativeInfinity\u003c/code\u003e should pertain.\n (Some of these are discussed below.)\n\u003c/p\u003e\u003cp\u003eHugs (September 2006) has buggy Prelude definitions for\n \u003ccode\u003e\u003ca\u003eisNaN\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisInfinite\u003c/a\u003e\u003c/code\u003e on Float and Double.\n This module provides correct definitions, so long as \u003ca\u003eHugs.RealFloat\u003c/a\u003e\n is compiled correctly.\n\u003c/p\u003e",
          "module": "Data.Number.Transfinite",
          "name": "Transfinite",
          "package": "logfloat",
          "source": "src/Data-Number-Transfinite.html#Transfinite",
          "type": "class"
        },
        "index": {
          "description": "Many numbers are not Bounded yet even though they can represent arbitrarily large values they are not necessarily able to represent transfinite values such as infinity itself This class is for types which are capable of representing such values Notably this class does not require the type to be Fractional nor Floating since integral types could also have representations for transfinite values By popular demand the Num restriction has been lifted as well due to complications of defining Show or Eq for some types In particular this class extends the ordered projection to have maximum value infinity and minimum value negativeInfinity as well as an exceptional value notANumber All the natural laws regarding infinity and negativeInfinity should pertain Some of these are discussed below Hugs September has buggy Prelude definitions for isNaN and isInfinite on Float and Double This module provides correct definitions so long as Hugs.RealFloat is compiled correctly",
          "hierarchy": "Data Number Transfinite",
          "module": "Data.Number.Transfinite",
          "name": "Transfinite",
          "package": "logfloat",
          "partial": "Transfinite",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-Transfinite.html#t:Transfinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transfinite value which is greater than all finite values.\n Adding or subtracting any finite value is a no-op. As is\n multiplying by any non-zero positive value (including\n \u003ccode\u003einfinity\u003c/code\u003e), and dividing by any positive finite value. Also\n obeys the law \u003ccode\u003enegate infinity = negativeInfinity\u003c/code\u003e with all\n appropriate ramifications.\n\u003c/p\u003e",
          "module": "Data.Number.Transfinite",
          "name": "infinity",
          "package": "logfloat",
          "signature": "a",
          "source": "src/Data-Number-Transfinite.html#infinity",
          "type": "method"
        },
        "index": {
          "description": "transfinite value which is greater than all finite values Adding or subtracting any finite value is no-op As is multiplying by any non-zero positive value including infinity and dividing by any positive finite value Also obeys the law negate infinity negativeInfinity with all appropriate ramifications",
          "hierarchy": "Data Number Transfinite",
          "module": "Data.Number.Transfinite",
          "name": "infinity",
          "package": "logfloat",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-Transfinite.html#v:infinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn true for both \u003ccode\u003einfinity\u003c/code\u003e and \u003ccode\u003enegativeInfinity\u003c/code\u003e,\n false for all other values.\n\u003c/p\u003e",
          "module": "Data.Number.Transfinite",
          "name": "isInfinite",
          "package": "logfloat",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Number-Transfinite.html#isInfinite",
          "type": "method"
        },
        "index": {
          "description": "Return true for both infinity and negativeInfinity false for all other values",
          "hierarchy": "Data Number Transfinite",
          "module": "Data.Number.Transfinite",
          "name": "isInfinite",
          "normalized": "a-\u003eBool",
          "package": "logfloat",
          "partial": "Infinite",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-Transfinite.html#v:isInfinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn true only for \u003ccode\u003enotANumber\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Transfinite",
          "name": "isNaN",
          "package": "logfloat",
          "signature": "a -\u003e Bool",
          "source": "src/Data-Number-Transfinite.html#isNaN",
          "type": "method"
        },
        "index": {
          "description": "Return true only for notANumber",
          "hierarchy": "Data Number Transfinite",
          "module": "Data.Number.Transfinite",
          "name": "isNaN",
          "normalized": "a-\u003eBool",
          "package": "logfloat",
          "partial": "Na",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-Transfinite.html#v:isNaN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince the normal \u003ccode\u003e\u003ca\u003elog\u003c/a\u003e\u003c/code\u003e throws an error on zero, we\n have to redefine it in order for things to work right. Arguing\n from limits we can see that \u003ccode\u003elog 0 == negativeInfinity\u003c/code\u003e. Newer\n versions of GHC have this behavior already, but older versions\n and Hugs do not.\n\u003c/p\u003e\u003cp\u003eThis function will raise an error when taking the log of negative\n numbers, rather than returning \u003ccode\u003e\u003ca\u003enotANumber\u003c/a\u003e\u003c/code\u003e as the newer GHC\n implementation does. The reason being that typically this is a\n logical error, and \u003ccode\u003enotANumber\u003c/code\u003e allows the error to propegate\n silently.\n\u003c/p\u003e\u003cp\u003eIn order to improve portability, the \u003ccode\u003e\u003ca\u003eTransfinite\u003c/a\u003e\u003c/code\u003e class is\n required to indicate that the \u003ccode\u003e\u003ca\u003eFloating\u003c/a\u003e\u003c/code\u003e type does in fact have\n a representation for negative infinity. Both native floating\n types (\u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e) are supported. If you define your\n own instance of \u003ccode\u003eTransfinite\u003c/code\u003e, verify the above equation holds\n for your \u003ccode\u003e0\u003c/code\u003e and \u003ccode\u003enegativeInfinity\u003c/code\u003e. If it doesn't, then you\n should avoid importing our \u003ccode\u003elog\u003c/code\u003e and will probably want converters\n to handle the discrepancy.\n\u003c/p\u003e\u003cp\u003eFor GHC, this version of \u003ccode\u003elog\u003c/code\u003e has rules for fusion with \u003ccode\u003eexp\u003c/code\u003e.\n These can give different behavior by preventing overflow to\n \u003ccode\u003einfinity\u003c/code\u003e and preventing errors for taking the logarithm of\n negative values. For \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e they can also give\n different answers due to eliminating floating point fuzz. The\n rules strictly improve mathematical accuracy, however they should\n be noted in case your code depends on the implementation details.\n\u003c/p\u003e",
          "module": "Data.Number.Transfinite",
          "name": "log",
          "package": "logfloat",
          "signature": "a -\u003e a",
          "source": "src/Data-Number-Transfinite.html#log",
          "type": "function"
        },
        "index": {
          "description": "Since the normal log throws an error on zero we have to redefine it in order for things to work right Arguing from limits we can see that log negativeInfinity Newer versions of GHC have this behavior already but older versions and Hugs do not This function will raise an error when taking the log of negative numbers rather than returning notANumber as the newer GHC implementation does The reason being that typically this is logical error and notANumber allows the error to propegate silently In order to improve portability the Transfinite class is required to indicate that the Floating type does in fact have representation for negative infinity Both native floating types Double and Float are supported If you define your own instance of Transfinite verify the above equation holds for your and negativeInfinity If it doesn then you should avoid importing our log and will probably want converters to handle the discrepancy For GHC this version of log has rules for fusion with exp These can give different behavior by preventing overflow to infinity and preventing errors for taking the logarithm of negative values For Double and Float they can also give different answers due to eliminating floating point fuzz The rules strictly improve mathematical accuracy however they should be noted in case your code depends on the implementation details",
          "hierarchy": "Data Number Transfinite",
          "module": "Data.Number.Transfinite",
          "name": "log",
          "normalized": "a-\u003ea",
          "package": "logfloat",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-Transfinite.html#v:log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA transfinite value which is less than all finite values.\n Obeys all the same laws as \u003ccode\u003einfinity\u003c/code\u003e with the appropriate\n changes for the sign difference.\n\u003c/p\u003e",
          "module": "Data.Number.Transfinite",
          "name": "negativeInfinity",
          "package": "logfloat",
          "signature": "a",
          "source": "src/Data-Number-Transfinite.html#negativeInfinity",
          "type": "method"
        },
        "index": {
          "description": "transfinite value which is less than all finite values Obeys all the same laws as infinity with the appropriate changes for the sign difference",
          "hierarchy": "Data Number Transfinite",
          "module": "Data.Number.Transfinite",
          "name": "negativeInfinity",
          "package": "logfloat",
          "partial": "Infinity",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-Transfinite.html#v:negativeInfinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exceptional transfinite value for dealing with undefined\n results when manipulating infinite values. The following\n operations must return \u003ccode\u003enotANumber\u003c/code\u003e, where \u003ccode\u003einf\u003c/code\u003e is any value\n which \u003ccode\u003eisInfinite\u003c/code\u003e:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003einfinity + negativeInfinity\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003enegativeInfinity + infinity\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einfinity - infinity\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003enegativeInfinity - negativeInfinity\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einf * 0\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e0 * inf\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einf / inf\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003einf \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e inf\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e0 / 0\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e0 \u003ccode\u003e\u003ca\u003ediv\u003c/a\u003e\u003c/code\u003e 0\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAdditionally, any mathematical operations on \u003ccode\u003enotANumber\u003c/code\u003e\n must also return \u003ccode\u003enotANumber\u003c/code\u003e, and any equality or ordering\n comparison on \u003ccode\u003enotANumber\u003c/code\u003e must return \u003ccode\u003eFalse\u003c/code\u003e (violating\n the law of the excluded middle, often assumed but not required\n for \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e; thus, \u003ccode\u003e\u003ca\u003eeq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ene\u003c/a\u003e\u003c/code\u003e are preferred over (\u003ccode\u003e\u003ca\u003e==\u003c/a\u003e\u003c/code\u003e) and\n (\u003ccode\u003e\u003ca\u003e/=\u003c/a\u003e\u003c/code\u003e)). Since it returns false for equality, there may be\n more than one machine representation of this \u003ccode\u003evalue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Number.Transfinite",
          "name": "notANumber",
          "package": "logfloat",
          "signature": "a",
          "source": "src/Data-Number-Transfinite.html#notANumber",
          "type": "method"
        },
        "index": {
          "description": "An exceptional transfinite value for dealing with undefined results when manipulating infinite values The following operations must return notANumber where inf is any value which isInfinite infinity negativeInfinity negativeInfinity infinity infinity infinity negativeInfinity negativeInfinity inf inf inf inf inf div inf div Additionally any mathematical operations on notANumber must also return notANumber and any equality or ordering comparison on notANumber must return False violating the law of the excluded middle often assumed but not required for Eq thus eq and ne are preferred over and Since it returns false for equality there may be more than one machine representation of this value",
          "hierarchy": "Data Number Transfinite",
          "module": "Data.Number.Transfinite",
          "name": "notANumber",
          "package": "logfloat",
          "partial": "ANumber",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Data-Number-Transfinite.html#v:notANumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHugs (September 2006) has buggy definitions for \u003ccode\u003e\u003ca\u003eisNaN\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eisInfinite\u003c/a\u003e\u003c/code\u003e on Float and Double. If this module is\n run through CPP with the macro \u003ccode\u003e__HUGS__\u003c/code\u003e set to a value no\n larger than 200609, then correct definitions are used. Otherwise\n the Prelude definitions are used (which should be correct for\n other compilers). For example, run Hugs with\n\u003c/p\u003e\u003cpre\u003ehugs -F'cpp -P -D__HUGS__=200609' Hugs/RealFloat.hs\u003c/pre\u003e\u003cp\u003eN.B. The corrected definitions have only been tested to work for\n \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e. These definitions should probably not be\n used for other \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eThis installation was compiled with the normal Prelude version. This should be correct.\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Hugs.RealFloat",
          "name": "RealFloat",
          "package": "logfloat",
          "source": "src/Hugs-RealFloat.html",
          "type": "module"
        },
        "index": {
          "description": "Hugs September has buggy definitions for isNaN and isInfinite on Float and Double If this module is run through CPP with the macro HUGS set to value no larger than then correct definitions are used Otherwise the Prelude definitions are used which should be correct for other compilers For example run Hugs with hugs cpp HUGS Hugs RealFloat.hs N.B The corrected definitions have only been tested to work for Float and Double These definitions should probably not be used for other RealFloat types This installation was compiled with the normal Prelude version This should be correct",
          "hierarchy": "Hugs RealFloat",
          "module": "Hugs.RealFloat",
          "name": "RealFloat",
          "package": "logfloat",
          "partial": "Real Float",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Hugs-RealFloat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hugs.RealFloat",
          "name": "isInfinite",
          "package": "logfloat",
          "signature": "a -\u003e Bool",
          "source": "src/Hugs-RealFloat.html#isInfinite",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hugs RealFloat",
          "module": "Hugs.RealFloat",
          "name": "isInfinite",
          "normalized": "a-\u003eBool",
          "package": "logfloat",
          "partial": "Infinite",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Hugs-RealFloat.html#v:isInfinite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hugs.RealFloat",
          "name": "isNaN",
          "package": "logfloat",
          "signature": "a -\u003e Bool",
          "source": "src/Hugs-RealFloat.html#isNaN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hugs RealFloat",
          "module": "Hugs.RealFloat",
          "name": "isNaN",
          "normalized": "a-\u003eBool",
          "package": "logfloat",
          "partial": "Na",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/logfloat/docs/Hugs-RealFloat.html#v:isNaN"
      }
    }
  ]
]