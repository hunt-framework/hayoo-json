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
        "word": "interpolatedstring-perl6"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuasiQuoter for interpolated strings using Perl 6 syntax.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eq\u003c/a\u003e\u003c/code\u003e form does one thing and does it well: It contains a multi-line string with\n no interpolation at all:\n\u003c/p\u003e\u003cpre\u003e\n {-# LANGUAGE QuasiQuotes, ExtendedDefaultRules #-}\n import Text.InterpolatedString.Perl6 (q)\n foo :: String -- \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e etc also works\n foo = [q|\n\nWell here is a\n     multi-line string!\n\n|]\n\u003c/pre\u003e\u003cp\u003eAny instance of the \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e class is permitted.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eqc\u003c/a\u003e\u003c/code\u003e form interpolates curly braces: expressions inside {} will be\n directly interpolated if it's a \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, or \n it will have \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e called if it is not.\n\u003c/p\u003e\u003cp\u003eEscaping of '{' is done with backslash. \n\u003c/p\u003e\u003cp\u003eFor interpolating numeric expressions without an explicit type signature,\n use the ExtendedDefaultRules lanuage pragma, as shown below:\n\u003c/p\u003e\u003cpre\u003e\n {-# LANGUAGE QuasiQuotes, ExtendedDefaultRules #-}\n import Text.InterpolatedString.Perl6 (qc)\n bar :: String\n bar = [qc| Well {\"hello\" ++ \" there\"} {6 * 7} |]\n\u003c/pre\u003e\u003cp\u003ebar will have the value \" Well hello there 42 \".\n\u003c/p\u003e\u003cp\u003eIf you want control over how \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e works on your types, define a custom\n \u003ccode\u003e\u003ca\u003eShowQ\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cp\u003eFor example, this instance allows you to display interpolated lists of strings as \n a sequence of words, removing those pesky brackets, quotes, and escape sequences.\n\u003c/p\u003e\u003cpre\u003e\n {-# LANGUAGE FlexibleInstances #-}\n import Text.InterpolatedString.Perl6 (qc, ShowQ(..))\n instance ShowQ [String] where\n     showQ = unwords\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eqq\u003c/a\u003e\u003c/code\u003e form adds to the \u003ccode\u003e\u003ca\u003eqc\u003c/a\u003e\u003c/code\u003e form with a simple shorthand: '$foo' means '{foo}',\n namely interpolating a single variable into the string.\n\u003c/p\u003e\u003cpre\u003e\n {-# LANGUAGE QuasiQuotes, ExtendedDefaultRules #-}\n import Text.InterpolatedString.Perl6 (qq)\n baz :: String\n baz = [qc| Hello, $who |]\n     where\n     who = \"World\"\n\u003c/pre\u003e\u003cp\u003eBoth \u003ccode\u003e\u003ca\u003eqc\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eqq\u003c/a\u003e\u003c/code\u003e permit output to any types with both \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e \n instances.\n\u003c/p\u003e\u003cpre\u003e\n {-\u003ca name=\" LANGUAGE QuasiQuotes, OverloadedStrings \"/\u003e-}\n import Text.InterpolatedString.Perl6 (qc)\n import Data.Text (Text)\n import Data.ByteString.Char8 (ByteString)\n qux :: ByteString\n qux = [qc| This will convert {\"Text\" :: Text} to {\"ByteString\" :: ByteString} |]\n\u003c/pre\u003e\u003cp\u003eThe ability to define custom \u003ccode\u003e\u003ca\u003eShowQ\u003c/a\u003e\u003c/code\u003e instances is particularly powerful with\n cascading instances using \u003ccode\u003e\u003ca\u003eqq\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBelow is a sample snippet from a script that converts Shape objects into\n AppleScript suitable for drawing in OmniGraffle:\n\u003c/p\u003e\u003cpre\u003e\n {-# LANGUAGE QuasiQuotes, ExtendedDefaultRules, NamedFieldPuns, RecordWildCards #-}\n import Text.InterpolatedString.Perl6\n\u003c/pre\u003e\u003cpre\u003e \n data Shape = Shape\n     { originX         :: Int\n     , originY         :: Int\n     , width           :: Int\n     , height          :: Int\n     , stroke          :: Stroke\n     , text            :: Text\n     }\n instance ShowQ Shape where\n     showQ Shape{..} = [qq|\n         make new shape at end of graphics with properties\n             \\{ $text, $stroke, _size, $_origin }\n     |]\n         where         \n         _size   = [qq|size: {$width, $height}|]\n         _origin = [qq|origin: {$originX, $originY}|]\n\u003c/pre\u003e\u003cpre\u003e \n data Stroke = StrokeWhite | StrokeNone\n instance ShowQ Stroke where\n     showQ StrokeNone = \"draws stroke:false\"\n     showQ StrokeWhite = \"stroke color: {1, 1, 1}\"\n\u003c/pre\u003e\u003cpre\u003e \n data Text   = Text\n     { txt   :: String\n     , color :: Color\n     }\n instance ShowQ Text where\n     showQ Text{..} = [qq|text: \\{ text: \"$txt\", $color, alignment: center } |]\n\u003c/pre\u003e\u003cpre\u003e \n data Color = Color { red :: Float, green :: Float, blue :: Float }\n instance ShowQ Color where\n     showQ Color{..} = [qq|color: {$red, $green, $blue}|]\n\u003c/pre\u003e\u003cpre\u003e \n main :: IO ()\n main = putStrLn [qq|\n     tell application \"OmniGraffle Professional 5\"\n         tell canvas of front window\n             { makeShape ... }\n         end tell\n     end tell\n |]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.InterpolatedString.Perl6",
          "name": "Perl6",
          "package": "interpolatedstring-perl6",
          "source": "src/Text-InterpolatedString-Perl6.html",
          "type": "module"
        },
        "index": {
          "description": "QuasiQuoter for interpolated strings using Perl syntax The form does one thing and does it well It contains multi-line string with no interpolation at all LANGUAGE QuasiQuotes ExtendedDefaultRules import Text.InterpolatedString.Perl6 foo String Text ByteString etc also works foo Well here is multi-line string Any instance of the IsString class is permitted The qc form interpolates curly braces expressions inside will be directly interpolated if it Char String Text or ByteString or it will have show called if it is not Escaping of is done with backslash For interpolating numeric expressions without an explicit type signature use the ExtendedDefaultRules lanuage pragma as shown below LANGUAGE QuasiQuotes ExtendedDefaultRules import Text.InterpolatedString.Perl6 qc bar String bar qc Well hello there bar will have the value Well hello there If you want control over how show works on your types define custom ShowQ instance For example this instance allows you to display interpolated lists of strings as sequence of words removing those pesky brackets quotes and escape sequences LANGUAGE FlexibleInstances import Text.InterpolatedString.Perl6 qc ShowQ instance ShowQ String where showQ unwords The qq form adds to the qc form with simple shorthand foo means foo namely interpolating single variable into the string LANGUAGE QuasiQuotes ExtendedDefaultRules import Text.InterpolatedString.Perl6 qq baz String baz qc Hello who where who World Both qc and qq permit output to any types with both IsString and Monoid instances import Text.InterpolatedString.Perl6 qc import Data.Text Text import Data.ByteString.Char8 ByteString qux ByteString qux qc This will convert Text Text to ByteString ByteString The ability to define custom ShowQ instances is particularly powerful with cascading instances using qq Below is sample snippet from script that converts Shape objects into AppleScript suitable for drawing in OmniGraffle LANGUAGE QuasiQuotes ExtendedDefaultRules NamedFieldPuns RecordWildCards import Text.InterpolatedString.Perl6 data Shape Shape originX Int originY Int width Int height Int stroke Stroke text Text instance ShowQ Shape where showQ Shape qq make new shape at end of graphics with properties text stroke size origin where size qq size width height origin qq origin originX originY data Stroke StrokeWhite StrokeNone instance ShowQ Stroke where showQ StrokeNone draws stroke false showQ StrokeWhite stroke color data Text Text txt String color Color instance ShowQ Text where showQ Text qq text text txt color alignment center data Color Color red Float green Float blue Float instance ShowQ Color where showQ Color qq color red green blue main IO main putStrLn qq tell application OmniGraffle Professional tell canvas of front window makeShape end tell end tell",
          "hierarchy": "Text InterpolatedString Perl6",
          "module": "Text.InterpolatedString.Perl6",
          "name": "Perl6",
          "package": "interpolatedstring-perl6",
          "partial": "Perl",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/interpolatedstring-perl6/docs/Text-InterpolatedString-Perl6.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for types that use special interpolation rules.\n Instances of \u003ccode\u003e\u003ca\u003eShowQ\u003c/a\u003e\u003c/code\u003e that are also instances of \u003ccode\u003e\u003ca\u003eIsString\u003c/a\u003e\u003c/code\u003e should obey the \n following law: \n\u003c/p\u003e\u003cpre\u003e\n fromString (showQ s) == s\n\u003c/pre\u003e\u003cp\u003ebecause this library relies on this fact to optimize \n away needless string conversions.\n\u003c/p\u003e",
          "module": "Text.InterpolatedString.Perl6",
          "name": "ShowQ",
          "package": "interpolatedstring-perl6",
          "source": "src/Text-InterpolatedString-Perl6.html#ShowQ",
          "type": "class"
        },
        "index": {
          "description": "class for types that use special interpolation rules Instances of ShowQ that are also instances of IsString should obey the following law fromString showQ because this library relies on this fact to optimize away needless string conversions",
          "hierarchy": "Text InterpolatedString Perl6",
          "module": "Text.InterpolatedString.Perl6",
          "name": "ShowQ",
          "package": "interpolatedstring-perl6",
          "partial": "Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/interpolatedstring-perl6/docs/Text-InterpolatedString-Perl6.html#t:ShowQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiQuoter for a non-interpolating string literal. The pattern portion is undefined.\n\u003c/p\u003e",
          "module": "Text.InterpolatedString.Perl6",
          "name": "q",
          "package": "interpolatedstring-perl6",
          "signature": "QuasiQuoter",
          "source": "src/Text-InterpolatedString-Perl6.html#q",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter for non-interpolating string literal The pattern portion is undefined",
          "hierarchy": "Text InterpolatedString Perl6",
          "module": "Text.InterpolatedString.Perl6",
          "name": "q",
          "package": "interpolatedstring-perl6",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interpolatedstring-perl6/docs/Text-InterpolatedString-Perl6.html#v:q"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiQuoter for interpolating '{expr}' into a string literal. The pattern portion is undefined.\n\u003c/p\u003e",
          "module": "Text.InterpolatedString.Perl6",
          "name": "qc",
          "package": "interpolatedstring-perl6",
          "signature": "QuasiQuoter",
          "source": "src/Text-InterpolatedString-Perl6.html#qc",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter for interpolating expr into string literal The pattern portion is undefined",
          "hierarchy": "Text InterpolatedString Perl6",
          "module": "Text.InterpolatedString.Perl6",
          "name": "qc",
          "package": "interpolatedstring-perl6",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interpolatedstring-perl6/docs/Text-InterpolatedString-Perl6.html#v:qc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasiQuoter for interpolating '$var' and '{expr}' into a string literal. The pattern portion is undefined.\n\u003c/p\u003e",
          "module": "Text.InterpolatedString.Perl6",
          "name": "qq",
          "package": "interpolatedstring-perl6",
          "signature": "QuasiQuoter",
          "source": "src/Text-InterpolatedString-Perl6.html#qq",
          "type": "function"
        },
        "index": {
          "description": "QuasiQuoter for interpolating var and expr into string literal The pattern portion is undefined",
          "hierarchy": "Text InterpolatedString Perl6",
          "module": "Text.InterpolatedString.Perl6",
          "name": "qq",
          "package": "interpolatedstring-perl6",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/interpolatedstring-perl6/docs/Text-InterpolatedString-Perl6.html#v:qq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.InterpolatedString.Perl6",
          "name": "showQ",
          "package": "interpolatedstring-perl6",
          "signature": "a -\u003e String",
          "source": "src/Text-InterpolatedString-Perl6.html#showQ",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text InterpolatedString Perl6",
          "module": "Text.InterpolatedString.Perl6",
          "name": "showQ",
          "normalized": "a-\u003eString",
          "package": "interpolatedstring-perl6",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/interpolatedstring-perl6/docs/Text-InterpolatedString-Perl6.html#v:showQ"
      }
    }
  ]
]