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
        "word": "iproute"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIP routing table is a tree of \u003ccode\u003eIPRange\u003c/code\u003e\n  to search one of them on the longest\n  match base. It is a kind of TRIE with one\n  way branching removed. Both IPv4 and IPv6\n  are supported.\n\u003c/p\u003e\u003cp\u003eFor more information, see:\n      \u003ca\u003ehttp://www.mew.org/~kazu/proj/iproute/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IP.RouteTable",
          "name": "RouteTable",
          "package": "iproute",
          "source": "src/Data-IP-RouteTable.html",
          "type": "module"
        },
        "index": {
          "description": "IP routing table is tree of IPRange to search one of them on the longest match base It is kind of TRIE with one way branching removed Both IPv4 and IPv6 are supported For more information see http www.mew.org kazu proj iproute",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "RouteTable",
          "package": "iproute",
          "partial": "Route Table",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Tree structure for IP routing table based on TRIE with\n  one way branching removed. This is an abstract data type,\n  so you cannot touch its inside. Please use \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e, instead.\n\u003c/p\u003e",
          "module": "Data.IP.RouteTable",
          "name": "IPRTable",
          "package": "iproute",
          "source": "src/Data-IP-RouteTable-Internal.html#IPRTable",
          "type": "data"
        },
        "index": {
          "description": "The Tree structure for IP routing table based on TRIE with one way branching removed This is an abstract data type so you cannot touch its inside Please use insert or lookup instead",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "IPRTable",
          "package": "iproute",
          "partial": "IPRTable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#t:IPRTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class to contain IPv4 and IPv6.\n\u003c/p\u003e",
          "module": "Data.IP.RouteTable",
          "name": "Routable",
          "package": "iproute",
          "source": "src/Data-IP-RouteTable-Internal.html#Routable",
          "type": "class"
        },
        "index": {
          "description": "class to contain IPv4 and IPv6",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "Routable",
          "package": "iproute",
          "partial": "Routable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#t:Routable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e function deletes a value by a key of \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003e\u003ca\u003eIPRTable\u003c/a\u003e\u003c/code\u003e\n  and returns a new \u003ccode\u003e\u003ca\u003eIPRTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003edelete \"127.0.0.1\" (insert \"127.0.0.1\" () empty) == (empty :: IPRTable IPv4 ())\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.IP.RouteTable",
          "name": "delete",
          "package": "iproute",
          "signature": "AddrRange k -\u003e IPRTable k a -\u003e IPRTable k a",
          "source": "src/Data-IP-RouteTable-Internal.html#delete",
          "type": "function"
        },
        "index": {
          "description": "The delete function deletes value by key of AddrRange from IPRTable and returns new IPRTable delete insert empty empty IPRTable IPv4 True",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "delete",
          "normalized": "AddrRange a-\u003eIPRTable a b-\u003eIPRTable a b",
          "package": "iproute",
          "signature": "AddrRange k-\u003eIPRTable k a-\u003eIPRTable k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e function returns an empty IP routing table.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(empty :: IPRTable IPv4 ()) == fromList []\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.IP.RouteTable",
          "name": "empty",
          "package": "iproute",
          "signature": "IPRTable k a",
          "source": "src/Data-IP-RouteTable-Internal.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty function returns an empty IP routing table empty IPRTable IPv4 fromList True",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "empty",
          "package": "iproute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efindMatch\u003c/a\u003e\u003c/code\u003e function looks up \u003ccode\u003e\u003ca\u003eIPRTable\u003c/a\u003e\u003c/code\u003e with a key of \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e.\n  If the key matches routing informations in \u003ccode\u003e\u003ca\u003eIPRTable\u003c/a\u003e\u003c/code\u003e, they are\n  returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v4 = [\"133.4.0.0/16\",\"133.5.0.0/16\",\"133.5.16.0/24\",\"133.5.23.0/24\"] :: [AddrRange IPv4]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet rt = fromList $ zip v4 $ repeat ()\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efindMatch \"133.4.0.0/15\" rt :: [(AddrRange IPv4,())]\n\u003c/code\u003e\u003c/strong\u003e[(133.4.0.0/16,()),(133.5.0.0/16,()),(133.5.16.0/24,()),(133.5.23.0/24,())]\n\u003c/pre\u003e",
          "module": "Data.IP.RouteTable",
          "name": "findMatch",
          "package": "iproute",
          "signature": "AddrRange k -\u003e IPRTable k a -\u003e m (AddrRange k, a)",
          "source": "src/Data-IP-RouteTable-Internal.html#findMatch",
          "type": "function"
        },
        "index": {
          "description": "The findMatch function looks up IPRTable with key of AddrRange If the key matches routing informations in IPRTable they are returned let v4 AddrRange IPv4 let rt fromList zip v4 repeat findMatch rt AddrRange IPv4",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "findMatch",
          "normalized": "AddrRange a-\u003eIPRTable a b-\u003ec(AddrRange a,b)",
          "package": "iproute",
          "partial": "Match",
          "signature": "AddrRange k-\u003eIPRTable k a-\u003em(AddrRange k,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#v:findMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e function creates a new IP routing table from\n  a list of a pair of \u003ccode\u003eIPrange\u003c/code\u003e and value.\n\u003c/p\u003e",
          "module": "Data.IP.RouteTable",
          "name": "fromList",
          "package": "iproute",
          "signature": "[(AddrRange k, a)] -\u003e IPRTable k a",
          "source": "src/Data-IP-RouteTable-Internal.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "The fromList function creates new IP routing table from list of pair of IPrange and value",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "fromList",
          "normalized": "[(AddrRange a,b)]-\u003eIPRTable a b",
          "package": "iproute",
          "partial": "List",
          "signature": "[(AddrRange k,a)]-\u003eIPRTable k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e function inserts a value with a key of \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eIPRTable\u003c/a\u003e\u003c/code\u003e\n  and returns a new \u003ccode\u003e\u003ca\u003eIPRTable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(insert (\"127.0.0.1\" :: AddrRange IPv4) () empty) == fromList [(\"127.0.0.1\",())]\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.IP.RouteTable",
          "name": "insert",
          "package": "iproute",
          "signature": "AddrRange k -\u003e a -\u003e IPRTable k a -\u003e IPRTable k a",
          "source": "src/Data-IP-RouteTable-Internal.html#insert",
          "type": "function"
        },
        "index": {
          "description": "The insert function inserts value with key of AddrRange to IPRTable and returns new IPRTable insert AddrRange IPv4 empty fromList True",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "insert",
          "normalized": "AddrRange a-\u003eb-\u003eIPRTable a b-\u003eIPRTable a b",
          "package": "iproute",
          "signature": "AddrRange k-\u003ea-\u003eIPRTable k a-\u003eIPRTable k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintToTBit\u003c/a\u003e\u003c/code\u003e function takes \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and returns an \u003ccode\u003e\u003ca\u003eRoutable\u003c/a\u003e\u003c/code\u003e address\n      whose only n-th bit is set.\n\u003c/p\u003e",
          "module": "Data.IP.RouteTable",
          "name": "intToTBit",
          "package": "iproute",
          "signature": "Int -\u003e a",
          "source": "src/Data-IP-RouteTable-Internal.html#intToTBit",
          "type": "method"
        },
        "index": {
          "description": "The intToTBit function takes Int and returns an Routable address whose only n-th bit is set",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "intToTBit",
          "normalized": "Int-\u003ea",
          "package": "iproute",
          "partial": "To TBit",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#v:intToTBit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eisZero\u003c/a\u003e\u003c/code\u003e function takes an \u003ccode\u003e\u003ca\u003eRoutable\u003c/a\u003e\u003c/code\u003e address and an test bit\n      \u003ccode\u003e\u003ca\u003eRoutable\u003c/a\u003e\u003c/code\u003e address and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is the bit is unset,\n      otherwise returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IP.RouteTable",
          "name": "isZero",
          "package": "iproute",
          "signature": "a -\u003e a -\u003e Bool",
          "source": "src/Data-IP-RouteTable-Internal.html#isZero",
          "type": "method"
        },
        "index": {
          "description": "The isZero function takes an Routable address and an test bit Routable address and returns True is the bit is unset otherwise returns False",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "isZero",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "iproute",
          "partial": "Zero",
          "signature": "a-\u003ea-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#v:isZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e function looks up \u003ccode\u003e\u003ca\u003eIPRTable\u003c/a\u003e\u003c/code\u003e with a key of \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e.\n  If a routing information in \u003ccode\u003e\u003ca\u003eIPRTable\u003c/a\u003e\u003c/code\u003e matches the key, its value\n  is returned.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet v4 = [\"133.4.0.0/16\",\"133.5.0.0/16\",\"133.5.16.0/24\",\"133.5.23.0/24\"] :: [AddrRange IPv4]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet rt = fromList $ zip v4 v4\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elookup \"127.0.0.1\" rt\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elookup \"133.3.0.1\" rt\n\u003c/code\u003e\u003c/strong\u003eNothing\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elookup \"133.4.0.0\" rt\n\u003c/code\u003e\u003c/strong\u003eJust 133.4.0.0/16\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elookup \"133.4.0.1\" rt\n\u003c/code\u003e\u003c/strong\u003eJust 133.4.0.0/16\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elookup \"133.5.16.0\" rt\n\u003c/code\u003e\u003c/strong\u003eJust 133.5.16.0/24\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elookup \"133.5.16.1\" rt\n\u003c/code\u003e\u003c/strong\u003eJust 133.5.16.0/24\n\u003c/pre\u003e",
          "module": "Data.IP.RouteTable",
          "name": "lookup",
          "package": "iproute",
          "signature": "AddrRange k -\u003e IPRTable k a -\u003e Maybe a",
          "source": "src/Data-IP-RouteTable-Internal.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "The lookup function looks up IPRTable with key of AddrRange If routing information in IPRTable matches the key its value is returned let v4 AddrRange IPv4 let rt fromList zip v4 v4 lookup rt Nothing lookup rt Nothing lookup rt Just lookup rt Just lookup rt Just lookup rt Just",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "lookup",
          "normalized": "AddrRange a-\u003eIPRTable a b-\u003eMaybe b",
          "package": "iproute",
          "signature": "AddrRange k-\u003eIPRTable k a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoList\u003c/a\u003e\u003c/code\u003e function creates a list of a pair of \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e and\n  value from an IP routing table.\n\u003c/p\u003e",
          "module": "Data.IP.RouteTable",
          "name": "toList",
          "package": "iproute",
          "signature": "IPRTable k a -\u003e [(AddrRange k, a)]",
          "source": "src/Data-IP-RouteTable-Internal.html#toList",
          "type": "function"
        },
        "index": {
          "description": "The toList function creates list of pair of AddrRange and value from an IP routing table",
          "hierarchy": "Data IP RouteTable",
          "module": "Data.IP.RouteTable",
          "name": "toList",
          "normalized": "IPRTable a b-\u003e[(AddrRange a,b)]",
          "package": "iproute",
          "partial": "List",
          "signature": "IPRTable k a-\u003e[(AddrRange k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP-RouteTable.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData structures to express IPv4, IPv6 and IP range.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IP",
          "name": "IP",
          "package": "iproute",
          "source": "src/Data-IP.html",
          "type": "module"
        },
        "index": {
          "description": "Data structures to express IPv4 IPv6 and IP range",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "IP",
          "package": "iproute",
          "partial": "IP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoIPv4 [127,0,2,1] `masked` intToMask 7\n\u003c/code\u003e\u003c/strong\u003e126.0.0.0\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "Addr",
          "package": "iproute",
          "source": "src/Data-IP-Op.html#Addr",
          "type": "class"
        },
        "index": {
          "description": "toIPv4 masked intToMask",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "Addr",
          "package": "iproute",
          "partial": "Addr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#t:Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Addr range consists of an address, a contiguous mask,\n  and mask length. The contiguous mask and the mask length\n  are essentially same information but contained for pre\n  calculation.\n\u003c/p\u003e\u003cp\u003eTo create this, use \u003ccode\u003emakeAddrRange\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\"192.0.2.0/24\"\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e.\n  Also, \u003ccode\u003e\"192.0.2.0/24\"\u003c/code\u003e can be used as literal with OverloadedStrings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eread \"192.0.2.1/24\" :: AddrRange IPv4\n\u003c/code\u003e\u003c/strong\u003e192.0.2.0/24\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eread \"2001:db8:00:00:00:00:00:01/48\" :: AddrRange IPv6\n\u003c/code\u003e\u003c/strong\u003e2001:db8:00:00:00:00:00:00/48\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "AddrRange",
          "package": "iproute",
          "source": "src/Data-IP-Range.html#AddrRange",
          "type": "data"
        },
        "index": {
          "description": "The Addr range consists of an address contiguous mask and mask length The contiguous mask and the mask length are essentially same information but contained for pre calculation To create this use makeAddrRange or read AddrRange IPv4 Also can be used as literal with OverloadedStrings read AddrRange IPv4 read db8 AddrRange IPv6 db8",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "AddrRange",
          "package": "iproute",
          "partial": "Addr Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#t:AddrRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unified IP data for \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIPv6\u003c/a\u003e\u003c/code\u003e.\n  To create this, use the data constructors. Or use \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\"192.0.2.1\"\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eIP\u003c/a\u003e\u003c/code\u003e, for example. Also, \u003ccode\u003e\"192.0.2.1\"\u003c/code\u003e can be used as literal with OverloadedStrings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(read \"192.0.2.1\" :: IP) == IPv4 (read \"192.0.2.1\" :: IPv4)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(read \"2001:db8:00:00:00:00:00:01\" :: IP) == IPv6 (read \"2001:db8:00:00:00:00:00:01\" :: IPv6)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "IP",
          "package": "iproute",
          "source": "src/Data-IP-Addr.html#IP",
          "type": "data"
        },
        "index": {
          "description": "unified IP data for IPv4 and IPv6 To create this use the data constructors Or use read IP for example Also can be used as literal with OverloadedStrings read IP IPv4 read IPv4 True read db8 IP IPv6 read db8 IPv6 True",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "IP",
          "package": "iproute",
          "partial": "IP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#t:IP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA unified data for \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIPv6\u003c/a\u003e\u003c/code\u003e.\n  To create this, use \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\"192.0.2.0/24\"\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eIPRange\u003c/a\u003e\u003c/code\u003e.\n  Also, \u003ccode\u003e\"192.0.2.0/24\"\u003c/code\u003e can be used as literal with OverloadedStrings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(read \"192.0.2.1/24\" :: IPRange) == IPv4Range (read \"192.0.2.0/24\" :: AddrRange IPv4)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(read \"2001:db8:00:00:00:00:00:01/48\" :: IPRange) == IPv6Range (read \"2001:db8:00:00:00:00:00:01/48\" :: AddrRange IPv6)\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "IPRange",
          "package": "iproute",
          "source": "src/Data-IP-Range.html#IPRange",
          "type": "data"
        },
        "index": {
          "description": "unified data for AddrRange IPv4 and AddrRange IPv6 To create this use read IPRange Also can be used as literal with OverloadedStrings read IPRange IPv4Range read AddrRange IPv4 True read db8 IPRange IPv6Range read db8 AddrRange IPv6 True",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "IPRange",
          "package": "iproute",
          "partial": "IPRange",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#t:IPRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type to express an IPv4 address.\n  To create this, use \u003ccode\u003e\u003ca\u003etoIPv4\u003c/a\u003e\u003c/code\u003e. Or use \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\"192.0.2.1\"\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e, for example. Also, \u003ccode\u003e\"192.0.2.1\"\u003c/code\u003e can be used as literal with OverloadedStrings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eread \"192.0.2.1\" :: IPv4\n\u003c/code\u003e\u003c/strong\u003e192.0.2.1\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "IPv4",
          "package": "iproute",
          "source": "src/Data-IP-Addr.html#IPv4",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type to express an IPv4 address To create this use toIPv4 Or use read IPv4 for example Also can be used as literal with OverloadedStrings read IPv4",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "IPv4",
          "package": "iproute",
          "partial": "IPv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#t:IPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type to express an IPv6 address.\n  To create this, use \u003ccode\u003e\u003ca\u003etoIPv6\u003c/a\u003e\u003c/code\u003e. Or use \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\"2001:DB8::1\"\u003c/code\u003e :: \u003ccode\u003e\u003ca\u003eIPv6\u003c/a\u003e\u003c/code\u003e, for example. Also, \u003ccode\u003e\"2001:DB8::1\"\u003c/code\u003e can be used as literal with OverloadedStrings.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eread \"2001:db8:00:00:00:00:00:01\" :: IPv6\n\u003c/code\u003e\u003c/strong\u003e2001:db8:00:00:00:00:00:01\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eread \"2001:db8:11e:c00::101\" :: IPv6\n\u003c/code\u003e\u003c/strong\u003e2001:db8:11e:c00:00:00:00:101\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eread \"2001:db8:11e:c00:aa:bb:192.0.2.1\" :: IPv6\n\u003c/code\u003e\u003c/strong\u003e2001:db8:11e:c00:aa:bb:c000:201\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eread \"2001:db8::192.0.2.1\" :: IPv6\n\u003c/code\u003e\u003c/strong\u003e2001:db8:00:00:00:00:c000:201\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "IPv6",
          "package": "iproute",
          "source": "src/Data-IP-Addr.html#IPv6",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type to express an IPv6 address To create this use toIPv6 Or use read DB8 IPv6 for example Also DB8 can be used as literal with OverloadedStrings read db8 IPv6 db8 read db8 c00 IPv6 db8 c00 read db8 c00 aa bb IPv6 db8 c00 aa bb c000 read db8 IPv6 db8 c000",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "IPv6",
          "package": "iproute",
          "partial": "IPv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#t:IPv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003e:\u003e operator takes two \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e. It returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n  the first \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e contains the second \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e. Otherwise,\n  it returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emakeAddrRange (\"127.0.2.1\" :: IPv4) 8 \u003e:\u003e makeAddrRange \"127.0.2.1\" 24\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emakeAddrRange (\"127.0.2.1\" :: IPv4) 24 \u003e:\u003e makeAddrRange \"127.0.2.1\" 8\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emakeAddrRange (\"2001:DB8::1\" :: IPv6) 16 \u003e:\u003e makeAddrRange \"2001:DB8::1\" 32\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emakeAddrRange (\"2001:DB8::1\" :: IPv6) 32 \u003e:\u003e makeAddrRange \"2001:DB8::1\" 16\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "(\u003e:\u003e)",
          "package": "iproute",
          "signature": "AddrRange a -\u003e AddrRange a -\u003e Bool",
          "source": "src/Data-IP-Op.html#%3E%3A%3E",
          "type": "function"
        },
        "index": {
          "description": "The operator takes two AddrRange It returns True if the first AddrRange contains the second AddrRange Otherwise it returns False makeAddrRange IPv4 makeAddrRange True makeAddrRange IPv4 makeAddrRange False makeAddrRange DB8 IPv6 makeAddrRange DB8 True makeAddrRange DB8 IPv6 makeAddrRange DB8 False",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "(\u003e:\u003e) \u003e:\u003e",
          "normalized": "AddrRange a-\u003eAddrRange a-\u003eBool",
          "package": "iproute",
          "signature": "AddrRange a-\u003eAddrRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:-62-:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IP",
          "name": "IPv4",
          "package": "iproute",
          "signature": "IPv4",
          "source": "src/Data-IP-Addr.html#IP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "IPv4",
          "package": "iproute",
          "partial": "IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:IPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IP",
          "name": "IPv4Range",
          "package": "iproute",
          "signature": "IPv4Range",
          "source": "src/Data-IP-Range.html#IPRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "IPv4Range",
          "package": "iproute",
          "partial": "IPv Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:IPv4Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IP",
          "name": "IPv6",
          "package": "iproute",
          "signature": "IPv6",
          "source": "src/Data-IP-Addr.html#IP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "IPv6",
          "package": "iproute",
          "partial": "IPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:IPv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IP",
          "name": "IPv6Range",
          "package": "iproute",
          "signature": "IPv6Range",
          "source": "src/Data-IP-Range.html#IPRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "IPv6Range",
          "package": "iproute",
          "partial": "IPv Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:IPv6Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromHostAddress\u003c/a\u003e\u003c/code\u003e function converts \u003ccode\u003e\u003ca\u003eHostAddress\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IP",
          "name": "fromHostAddress",
          "package": "iproute",
          "signature": "HostAddress -\u003e IPv4",
          "source": "src/Data-IP-Addr.html#fromHostAddress",
          "type": "function"
        },
        "index": {
          "description": "The fromHostAddress function converts HostAddress to IPv4",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "fromHostAddress",
          "normalized": "HostAddress-\u003eIPv",
          "package": "iproute",
          "partial": "Host Address",
          "signature": "HostAddress-\u003eIPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:fromHostAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromHostAddress6\u003c/a\u003e\u003c/code\u003e function converts \u003ccode\u003e\u003ca\u003eHostAddress6\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eIPv6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IP",
          "name": "fromHostAddress6",
          "package": "iproute",
          "signature": "HostAddress6 -\u003e IPv6",
          "source": "src/Data-IP-Addr.html#fromHostAddress6",
          "type": "function"
        },
        "index": {
          "description": "The fromHostAddress6 function converts HostAddress6 to IPv6",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "fromHostAddress6",
          "normalized": "HostAddress-\u003eIPv",
          "package": "iproute",
          "partial": "Host Address",
          "signature": "HostAddress-\u003eIPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:fromHostAddress6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003efromIPv4\u003c/a\u003e\u003c/code\u003e function converts \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e to a list of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromIPv4 (toIPv4 [192,0,2,1])\n\u003c/code\u003e\u003c/strong\u003e[192,0,2,1]\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "fromIPv4",
          "package": "iproute",
          "signature": "IPv4 -\u003e [Int]",
          "source": "src/Data-IP-Addr.html#fromIPv4",
          "type": "function"
        },
        "index": {
          "description": "The fromIPv4 function converts IPv4 to list of Int fromIPv4 toIPv4",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "fromIPv4",
          "normalized": "IPv-\u003e[Int]",
          "package": "iproute",
          "partial": "IPv",
          "signature": "IPv-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:fromIPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoIPv6\u003c/a\u003e\u003c/code\u003e function converts \u003ccode\u003e\u003ca\u003eIPv6\u003c/a\u003e\u003c/code\u003e to a list of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efromIPv6 (toIPv6 [0x2001,0xDB8,0,0,0,0,0,1])\n\u003c/code\u003e\u003c/strong\u003e[8193,3512,0,0,0,0,0,1]\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "fromIPv6",
          "package": "iproute",
          "signature": "IPv6 -\u003e [Int]",
          "source": "src/Data-IP-Addr.html#fromIPv6",
          "type": "function"
        },
        "index": {
          "description": "The toIPv6 function converts IPv6 to list of Int fromIPv6 toIPv6 x2001 xDB8",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "fromIPv6",
          "normalized": "IPv-\u003e[Int]",
          "package": "iproute",
          "partial": "IPv",
          "signature": "IPv-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:fromIPv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eintToMask\u003c/a\u003e\u003c/code\u003e function takes \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and returns a contiguous\n      mask.\n\u003c/p\u003e",
          "module": "Data.IP",
          "name": "intToMask",
          "package": "iproute",
          "signature": "Int -\u003e a",
          "source": "src/Data-IP-Op.html#intToMask",
          "type": "method"
        },
        "index": {
          "description": "The intToMask function takes Int and returns contiguous mask",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "intToMask",
          "normalized": "Int-\u003ea",
          "package": "iproute",
          "partial": "To Mask",
          "signature": "Int-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:intToMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IP",
          "name": "ipv4",
          "package": "iproute",
          "signature": "IPv4",
          "source": "src/Data-IP-Addr.html#IP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "ipv4",
          "package": "iproute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:ipv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IP",
          "name": "ipv4range",
          "package": "iproute",
          "signature": "AddrRange IPv4",
          "source": "src/Data-IP-Range.html#IPRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "ipv4range",
          "package": "iproute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:ipv4range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IP",
          "name": "ipv6",
          "package": "iproute",
          "signature": "IPv6",
          "source": "src/Data-IP-Addr.html#IP",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "ipv6",
          "package": "iproute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:ipv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IP",
          "name": "ipv6range",
          "package": "iproute",
          "signature": "AddrRange IPv6",
          "source": "src/Data-IP-Range.html#IPRange",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "ipv6range",
          "package": "iproute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:ipv6range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003etoMatchedTo\u003c/code\u003e function take an \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e address and an \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e,\n  and returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the range contains the address.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(\"127.0.2.0\" :: IPv4) `isMatchedTo` makeAddrRange \"127.0.2.1\" 24\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(\"127.0.2.0\" :: IPv4) `isMatchedTo` makeAddrRange \"127.0.2.1\" 32\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(\"2001:DB8::1\" :: IPv6) `isMatchedTo` makeAddrRange \"2001:DB8::1\" 32\n\u003c/code\u003e\u003c/strong\u003eTrue\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e(\"2001:DB8::\" :: IPv6) `isMatchedTo` makeAddrRange \"2001:DB8::1\" 128\n\u003c/code\u003e\u003c/strong\u003eFalse\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "isMatchedTo",
          "package": "iproute",
          "signature": "a -\u003e AddrRange a -\u003e Bool",
          "source": "src/Data-IP-Op.html#isMatchedTo",
          "type": "function"
        },
        "index": {
          "description": "The toMatchedTo function take an Addr address and an AddrRange and returns True if the range contains the address IPv4 isMatchedTo makeAddrRange True IPv4 isMatchedTo makeAddrRange False DB8 IPv6 isMatchedTo makeAddrRange DB8 True DB8 IPv6 isMatchedTo makeAddrRange DB8 False",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "isMatchedTo",
          "normalized": "a-\u003eAddrRange a-\u003eBool",
          "package": "iproute",
          "partial": "Matched To",
          "signature": "a-\u003eAddrRange a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:isMatchedTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emakeAddrRange\u003c/a\u003e\u003c/code\u003e functions takes an \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e address and a mask\n  length. It creates a bit mask from the mask length and masks\n  the \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e address, then returns \u003ccode\u003e\u003ca\u003eAddrRange\u003c/a\u003e\u003c/code\u003e made of them.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emakeAddrRange (toIPv4 [127,0,2,1]) 8\n\u003c/code\u003e\u003c/strong\u003e127.0.0.0/8\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emakeAddrRange (toIPv6 [0x2001,0xDB8,0,0,0,0,0,1]) 8\n\u003c/code\u003e\u003c/strong\u003e2000:00:00:00:00:00:00:00/8\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "makeAddrRange",
          "package": "iproute",
          "signature": "a -\u003e Int -\u003e AddrRange a",
          "source": "src/Data-IP-Op.html#makeAddrRange",
          "type": "function"
        },
        "index": {
          "description": "The makeAddrRange functions takes an Addr address and mask length It creates bit mask from the mask length and masks the Addr address then returns AddrRange made of them makeAddrRange toIPv4 makeAddrRange toIPv6 x2001 xDB8",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "makeAddrRange",
          "normalized": "a-\u003eInt-\u003eAddrRange a",
          "package": "iproute",
          "partial": "Addr Range",
          "signature": "a-\u003eInt-\u003eAddrRange a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:makeAddrRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003emasked\u003c/a\u003e\u003c/code\u003e function takes an \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e and a contiguous\n      mask and returned a masked \u003ccode\u003e\u003ca\u003eAddr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IP",
          "name": "masked",
          "package": "iproute",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-IP-Op.html#masked",
          "type": "method"
        },
        "index": {
          "description": "The masked function takes an Addr and contiguous mask and returned masked Addr",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "masked",
          "normalized": "a-\u003ea-\u003ea",
          "package": "iproute",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:masked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoHostAddress\u003c/a\u003e\u003c/code\u003e function converts \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHostAddress\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IP",
          "name": "toHostAddress",
          "package": "iproute",
          "signature": "IPv4 -\u003e HostAddress",
          "source": "src/Data-IP-Addr.html#toHostAddress",
          "type": "function"
        },
        "index": {
          "description": "The toHostAddress function converts IPv4 to HostAddress",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "toHostAddress",
          "normalized": "IPv-\u003eHostAddress",
          "package": "iproute",
          "partial": "Host Address",
          "signature": "IPv-\u003eHostAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:toHostAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoHostAddress6\u003c/a\u003e\u003c/code\u003e function converts \u003ccode\u003e\u003ca\u003eIPv6\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eHostAddress6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IP",
          "name": "toHostAddress6",
          "package": "iproute",
          "signature": "IPv6 -\u003e HostAddress6",
          "source": "src/Data-IP-Addr.html#toHostAddress6",
          "type": "function"
        },
        "index": {
          "description": "The toHostAddress6 function converts IPv6 to HostAddress6",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "toHostAddress6",
          "normalized": "IPv-\u003eHostAddress",
          "package": "iproute",
          "partial": "Host Address",
          "signature": "IPv-\u003eHostAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:toHostAddress6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoIPv4\u003c/a\u003e\u003c/code\u003e function takes a list of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and returns \u003ccode\u003e\u003ca\u003eIPv4\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoIPv4 [192,0,2,1]\n\u003c/code\u003e\u003c/strong\u003e192.0.2.1\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "toIPv4",
          "package": "iproute",
          "signature": "[Int] -\u003e IPv4",
          "source": "src/Data-IP-Addr.html#toIPv4",
          "type": "function"
        },
        "index": {
          "description": "The toIPv4 function takes list of Int and returns IPv4 toIPv4",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "toIPv4",
          "normalized": "[Int]-\u003eIPv",
          "package": "iproute",
          "partial": "IPv",
          "signature": "[Int]-\u003eIPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:toIPv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003etoIPv6\u003c/a\u003e\u003c/code\u003e function takes a list of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e and returns \u003ccode\u003e\u003ca\u003eIPv6\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoIPv6 [0x2001,0xDB8,0,0,0,0,0,1]\n\u003c/code\u003e\u003c/strong\u003e2001:db8:00:00:00:00:00:01\n\u003c/pre\u003e",
          "module": "Data.IP",
          "name": "toIPv6",
          "package": "iproute",
          "signature": "[Int] -\u003e IPv6",
          "source": "src/Data-IP-Addr.html#toIPv6",
          "type": "function"
        },
        "index": {
          "description": "The toIPv6 function takes list of Int and returns IPv6 toIPv6 x2001 xDB8 db8",
          "hierarchy": "Data IP",
          "module": "Data.IP",
          "name": "toIPv6",
          "normalized": "[Int]-\u003eIPv",
          "package": "iproute",
          "partial": "IPv",
          "signature": "[Int]-\u003eIPv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iproute/docs/Data-IP.html#v:toIPv6"
      }
    }
  ]
]