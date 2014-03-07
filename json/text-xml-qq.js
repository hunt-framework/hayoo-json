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
        "word": "text-xml-qq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe XML quasiquoter.\n\u003c/p\u003e\u003cp\u003eGiven the variables\n\u003c/p\u003e\u003cpre\u003e  url = \"google.se\"\n  elem = \"gmail\"\n  attrNs = \"something\"\n  attrName = \"Pelle\"\n  attrValue = \"Arne\"\n  elemCont = CRef \"testing\"\n  cont1 = Elem $ element { elName = qname \"hej\" }\n  cont2 = CRef \"other test\"\n\u003c/pre\u003e\u003cp\u003ethe code\n\u003c/p\u003e\u003cpre\u003e   [$xmlQQ|\n   \u003c{url}:{elem} {attrNs}:{attrName}={attrValue} attr=\"cool\"\u003e\n     \u003celem ns1:elem1=\"1\" ns2:elem2=\"2\"\u003e\u003c\u003celemCont\u003e\u003e\u003c/elem\u003e\n     \u003celem /\u003e\n     \u003cel /\u003e\n     \u003c\u003ccont1\u003e\u003e\n     \u003c\u003ccont2\u003e\u003e\n   \u003c/{url}:{elem}\u003e\n   |]\n\u003c/pre\u003e\u003cp\u003ewill generate the data structure\n\u003c/p\u003e\u003cpre\u003e   element {\n     elName = QName elem Nothing (Just url),\n     elAttribs = [Attr (QName attrName Nothing (Just attrNs)) attrValue,\n                  Attr (qname \"attr\") \"cool\"],\n     elContent = [\n       (Elem $ element { elName = qname \"elem\",\n                         elAttribs = [Attr (QName \"elem1\" Nothing (Just \"ns1\")) \"1\",\n                                      Attr (QName \"elem2\" Nothing (Just \"ns2\")) \"2\"],\n                         elContent = [elemCont]\n                        }),\n        (Elem $ element { elName = qname \"elem\" }),\n        (Elem $ element { elName = qname \"el\" }),\n        cont1,\n        cont2]\n   }\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.XML.QQ",
          "name": "QQ",
          "package": "text-xml-qq",
          "source": "src/Text-XML-QQ.html",
          "type": "module"
        },
        "index": {
          "description": "The XML quasiquoter Given the variables url google.se elem gmail attrNs something attrName Pelle attrValue Arne elemCont CRef testing cont1 Elem element elName qname hej cont2 CRef other test the code xmlQQ url elem attrNs attrName attrValue attr cool elem ns1 elem1 ns2 elem2 elemCont elem elem el cont1 cont2 url elem will generate the data structure element elName QName elem Nothing Just url elAttribs Attr QName attrName Nothing Just attrNs attrValue Attr qname attr cool elContent Elem element elName qname elem elAttribs Attr QName elem1 Nothing Just ns1 Attr QName elem2 Nothing Just ns2 elContent elemCont Elem element elName qname elem Elem element elName qname el cont1 cont2",
          "hierarchy": "Text XML QQ",
          "module": "Text.XML.QQ",
          "name": "QQ",
          "package": "text-xml-qq",
          "partial": "QQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/text-xml-qq/docs/Text-XML-QQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.XML.QQ",
          "name": "xmlQQ",
          "package": "text-xml-qq",
          "signature": "QuasiQuoter",
          "source": "src/Text-XML-QQ.html#xmlQQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text XML QQ",
          "module": "Text.XML.QQ",
          "name": "xmlQQ",
          "package": "text-xml-qq",
          "partial": "QQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/text-xml-qq/docs/Text-XML-QQ.html#v:xmlQQ"
      }
    }
  ]
]