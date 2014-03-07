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
        "word": "bbdb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module can read and write BBDB files, and provides a few handy\n functions for getting at fields inside of BBDB data.\n\u003c/p\u003e\u003cp\u003eBBDB (\u003ca\u003ehttp://bbdb.sourceforge.net/\u003c/a\u003e) is short for the Insidious Big\n Brother Database, which is a contact management utility that can\n be integrated into Emacs (the one true editor.)  Since bbdb.el is\n implemented in elisp, it can be difficult to \"get at\" the data\n inside a .bbdb file with external programs.  Many years ago, I\n wrote a BBDB interface for perl, but having experience\n enlightenment at the hands of the category gods, I`m now dabbling\n with Haskell.  But having been a loyal Emacs user for many years\n now, I wanted a way to spam my friends while still using my\n favorite programming language.  Hence the module Data.BBDB.\n\u003c/p\u003e\u003cp\u003eThe following is the data layout for a BBDB record.  I have created a\n sample record with my own data.  Each field is just separated by a\n space.  I have added comments to the right\n\u003c/p\u003e\u003cpre\u003e [\"Henry\"                                   The first name - a string\n \"Laxen\"                                    The last name - a string\n (\"Henry, Enrique\")                         Also Known As - comma separated list\n \"Elegant Solutions\"                        Business name - a string\n (\n  [\"reno\" 775 624 1851 0]                   Phone number field - US style\n  [\"chapala\" \"011-52-376-765-3181\"]         Phone number field - International style\n ) \n (\n  [\"mailing\"                                The address location, then a list\n  (\"10580 N. McCarran Blvd.\" \"#115-396\")    for the street address, then one each\n  \"Reno\" \"Nevada\" \"89503\" \"USA\"             for City, State, Zip Code, and country\n ] \n  [\"home\"                                   another Address field\n  (\"Via Alta #6\" \"Gaviotas #10\")            The street list\n  \"Chapala\" \"Jalisco\"                       City State\n  \"45900\" \"Mexico\"                          Zip and country\n ]) \n (\n  \"nadine.and.henry@pobox.com\"              the net addresses - a list of strings\n  \"nadinelaxen@pobox.com\"\n ) \n (\n  (notes . \"Always split aces and eights\")  The notes field - a list of alists\n  (creation-date . \"2010-09-03\") \n  (timestamp . \"2010-09-03\")\n  (birthday . \"6/15\")\n ) \n nil                                        The cache vector - always nil\n ]\n\u003c/pre\u003e\u003cp\u003eInside the .bbdb file, this looks like:\n [\"Henry\" \"Laxen\" (\"Henry, Enrique\") \"Elegant Solutions\" \n ([\"reno\" 775 624 1851 0] [\"chapala\" \"011-52-376-765-3181\"]) \n ([\"mailing\" (\"10580 N. McCarran Blvd.\" \n \"#115-396\") \"Reno\" \"Nevada\" \"89503\" \"USA\"] \n [\"home\" (\"Via Alta \u003ca name=\"6\\\" \\\"Gaviotas \"/\u003e10\") \n \"Chapala\" \"Jalisco\" \"45900\" \"Mexico\"]) \n (\"nadine.and.henry@pobox.com\" \"nadinelaxen@pobox.com\") \n ((notes . \"Always split aces and eights\") \n (creation-date . \"2010-09-03\") \n (timestamp . \"2010-09-03\") (birthday . \"6/15\")) nil]\n\u003c/p\u003e\u003cp\u003eWhen parsed, this is represented inside Haskell as:\n\u003c/p\u003e\u003cpre\u003e      BBDBEntry\n        (BBDB{firstName = Just \"Henry\", lastName = Just \"Laxen\",\n              aka = Just [\"Henry, Enrique\"], company = Just \"Elegant Solutions\",\n              phone =\n                Just\n                  [USStyle \"reno\" [\"775\", \"624\", \"1851\", \"0\"],\n                   InternationalStyle \"chapala\" \"011-52-376-765-3181\"],\n              address =\n                Just\n                  [Address{location = \"mailing\",\n                           streets =\n                             Just [\"10580 N. McCarran Blvd.\", \"#115-396\"],\n                           city = Just \"Reno\", state = Just \"Nevada\",\n                           zipcode = Just \"89503\", country = Just \"USA\"},\n                   Address{location = \"home\",\n                           streets = Just [\"Via Alta #6\", \"Gaviotas #10\"],\n                           city = Just \"Chapala\", state = Just \"Jalisco\",\n                           zipcode = Just \"45900\", country = Just \"Mexico\"}],\n              net = Just [\"nadine.and.henry@pobox.com\", \"nadinelaxen@pobox.com\"],\n              notes =\n                Just\n                  (Note{unnote =\n                          [(\"notes\", \"Always split aces and eights\"),\n                           (\"creation-date\", \"2010-09-03\"),\n                           (\"timestamp\", \"2010-09-03\"),\n                           (\"birthday\", \"6/15\")]})})]\n \n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Database.BBDB",
          "name": "BBDB",
          "package": "bbdb",
          "source": "src/Database-BBDB.html",
          "type": "module"
        },
        "index": {
          "description": "This module can read and write BBDB files and provides few handy functions for getting at fields inside of BBDB data BBDB http bbdb.sourceforge.net is short for the Insidious Big Brother Database which is contact management utility that can be integrated into Emacs the one true editor Since bbdb.el is implemented in elisp it can be difficult to get at the data inside bbdb file with external programs Many years ago wrote BBDB interface for perl but having experience enlightenment at the hands of the category gods now dabbling with Haskell But having been loyal Emacs user for many years now wanted way to spam my friends while still using my favorite programming language Hence the module Data.BBDB The following is the data layout for BBDB record have created sample record with my own data Each field is just separated by space have added comments to the right Henry The first name string Laxen The last name string Henry Enrique Also Known As comma separated list Elegant Solutions Business name string reno Phone number field US style chapala Phone number field International style mailing The address location then list McCarran Blvd for the street address then one each Reno Nevada USA for City State Zip Code and country home another Address field Via Alta Gaviotas The street list Chapala Jalisco City State Mexico Zip and country nadine.and.henry@pobox.com the net addresses list of strings nadinelaxen@pobox.com notes Always split aces and eights The notes field list of alists creation-date timestamp birthday nil The cache vector always nil Inside the bbdb file this looks like Henry Laxen Henry Enrique Elegant Solutions reno chapala mailing McCarran Blvd Reno Nevada USA home Via Alta Chapala Jalisco Mexico nadine.and.henry@pobox.com nadinelaxen@pobox.com notes Always split aces and eights creation-date timestamp birthday nil When parsed this is represented inside Haskell as BBDBEntry BBDB firstName Just Henry lastName Just Laxen aka Just Henry Enrique company Just Elegant Solutions phone Just USStyle reno InternationalStyle chapala address Just Address location mailing streets Just McCarran Blvd city Just Reno state Just Nevada zipcode Just country Just USA Address location home streets Just Via Alta Gaviotas city Just Chapala state Just Jalisco zipcode Just country Just Mexico net Just nadine.and.henry@pobox.com nadinelaxen@pobox.com notes Just Note unnote notes Always split aces and eights creation-date timestamp birthday",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "BBDB",
          "package": "bbdb",
          "partial": "BBDB",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Address must have a location, and may have associated streets,\n a city, a state, a zipcode, and an country.\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "Address",
          "package": "bbdb",
          "source": "src/Database-BBDB.html#Address",
          "type": "data"
        },
        "index": {
          "description": "An Address must have location and may have associated streets city state zipcode and an country",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "Address",
          "package": "bbdb",
          "partial": "Address",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn Alist is an Association List.  Lisp writes these as (key\n . value) We convert these to a tuple in haskell where fst is key\n and snd is value.  \n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "Alist",
          "package": "bbdb",
          "source": "src/Database-BBDB.html#Alist",
          "type": "type"
        },
        "index": {
          "description": "An Alist is an Association List Lisp writes these as key value We convert these to tuple in haskell where fst is key and snd is value",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "Alist",
          "package": "bbdb",
          "partial": "Alist",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Alist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "BBDB",
          "package": "bbdb",
          "source": "src/Database-BBDB.html#BBDB",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "BBDB",
          "package": "bbdb",
          "partial": "BBDB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:BBDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt the beginning of a BBDB file are a variable number of comments, which\n specify the encoding type and the version.  We just ignore them.\n Comments starts with a ; (semi-colon) and continue to end of line\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "BBDBFile",
          "package": "bbdb",
          "source": "src/Database-BBDB.html#BBDBFile",
          "type": "data"
        },
        "index": {
          "description": "At the beginning of BBDB file are variable number of comments which specify the encoding type and the version We just ignore them Comments starts with semi-colon and continue to end of line",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "BBDBFile",
          "package": "bbdb",
          "partial": "BBDBFile",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:BBDBFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLispAble is how we convert from our internal representation of a\n BBDB record, to one that will make Lisp and Emacs happy.  (Sans bugs)\n\u003c/p\u003e\u003cpre\u003e testInverse = do\n   let inFile = \"/home/henry/.bbdb\"\n   actualBBDBFile \u003c- readFile inFile\n   parsedBBDBdata \u003c- readBBDB inFile\n   let bbdbDataOut = asLisp parsedBBDBdata\n   print $ actualBBDBFile == bbdbDataOut\n  \n\u003c/pre\u003e\u003cp\u003eshould print True\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "LispAble",
          "package": "bbdb",
          "source": "src/Database-BBDB.html#LispAble",
          "type": "class"
        },
        "index": {
          "description": "LispAble is how we convert from our internal representation of BBDB record to one that will make Lisp and Emacs happy Sans bugs testInverse do let inFile home henry bbdb actualBBDBFile readFile inFile parsedBBDBdata readBBDB inFile let bbdbDataOut asLisp parsedBBDBdata print actualBBDBFile bbdbDataOut should print True",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "LispAble",
          "package": "bbdb",
          "partial": "Lisp Able",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:LispAble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Location is just a synonym for String.  Each BBDB Address and\n Phone field must be associated with a location, such as \u003cem\u003ehome\u003c/em\u003e or\n \u003cem\u003ework\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "Location",
          "package": "bbdb",
          "source": "src/Database-BBDB.html#Location",
          "type": "type"
        },
        "index": {
          "description": "Location is just synonym for String Each BBDB Address and Phone field must be associated with location such as home or work",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "Location",
          "package": "bbdb",
          "partial": "Location",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Note field of a BBDB record is just a list of associations.\n If you don't provide a your own key, the BBDB will use the word \"note\"\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "Note",
          "package": "bbdb",
          "source": "src/Database-BBDB.html#Note",
          "type": "data"
        },
        "index": {
          "description": "The Note field of BBDB record is just list of associations If you don provide your own key the BBDB will use the word note",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "Note",
          "package": "bbdb",
          "partial": "Note",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor some unknow reason, BBDB can have phones in two different\n formats.  In \u003cem\u003eUSStyle\u003c/em\u003e, the phone is list of integers, in the form\n of Area code, Prefix, Number, and Extension.  I don't bother to\n convert the strings of digits to actual integers.  In\n \u003cem\u003eInternationalStyle\u003c/em\u003e, the phone number is just a String.\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "Phone",
          "package": "bbdb",
          "source": "src/Database-BBDB.html#Phone",
          "type": "data"
        },
        "index": {
          "description": "For some unknow reason BBDB can have phones in two different formats In USStyle the phone is list of integers in the form of Area code Prefix Number and Extension don bother to convert the strings of digits to actual integers In InternationalStyle the phone number is just String",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "Phone",
          "package": "bbdb",
          "partial": "Phone",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Phone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Street is also a synonym for String.  Each Address may have a\n list of Streets associated with it.\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "Street",
          "package": "bbdb",
          "source": "src/Database-BBDB.html#Street",
          "type": "type"
        },
        "index": {
          "description": "Street is also synonym for String Each Address may have list of Streets associated with it",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "Street",
          "package": "bbdb",
          "partial": "Street",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Street"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Symbol is just a String, but Lisp only wants\n alphanumerics and the characters _ (underscore) and - (dash)\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "Symbol",
          "package": "bbdb",
          "source": "src/Database-BBDB.html#Symbol",
          "type": "type"
        },
        "index": {
          "description": "Symbol is just String but Lisp only wants alphanumerics and the characters underscore and dash",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "Symbol",
          "package": "bbdb",
          "partial": "Symbol",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "Address",
          "package": "bbdb",
          "signature": "Address",
          "source": "src/Database-BBDB.html#Address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "Address",
          "package": "bbdb",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "BBDB",
          "package": "bbdb",
          "signature": "BBDB",
          "source": "src/Database-BBDB.html#BBDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "BBDB",
          "package": "bbdb",
          "partial": "BBDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:BBDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "BBDBComment",
          "package": "bbdb",
          "signature": "BBDBComment String",
          "source": "src/Database-BBDB.html#BBDBFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "BBDBComment",
          "package": "bbdb",
          "partial": "BBDBComment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:BBDBComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "BBDBEntry",
          "package": "bbdb",
          "signature": "BBDBEntry BBDB",
          "source": "src/Database-BBDB.html#BBDBFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "BBDBEntry",
          "package": "bbdb",
          "partial": "BBDBEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:BBDBEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "InternationalStyle",
          "package": "bbdb",
          "signature": "InternationalStyle Location String",
          "source": "src/Database-BBDB.html#Phone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "InternationalStyle",
          "package": "bbdb",
          "partial": "International Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:InternationalStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "Note",
          "package": "bbdb",
          "signature": "Note",
          "source": "src/Database-BBDB.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "Note",
          "package": "bbdb",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "USStyle",
          "package": "bbdb",
          "signature": "USStyle Location [String]",
          "source": "src/Database-BBDB.html#Phone",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "USStyle",
          "normalized": "USStyle Location[String]",
          "package": "bbdb",
          "partial": "USStyle",
          "signature": "USStyle Location[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:USStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of addresses, keyed by location\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "address",
          "package": "bbdb",
          "signature": "Maybe [Address]",
          "source": "src/Database-BBDB.html#BBDB",
          "type": "function"
        },
        "index": {
          "description": "list of addresses keyed by location",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "address",
          "normalized": "Maybe[Address]",
          "package": "bbdb",
          "signature": "Maybe[Address]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eaka = Also Known As.  Sometimes the same email address can match\n several users, so BBDB gives you the option of remembering\n different names for the same address\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "aka",
          "package": "bbdb",
          "signature": "Maybe [String]",
          "source": "src/Database-BBDB.html#BBDB",
          "type": "function"
        },
        "index": {
          "description": "aka Also Known As Sometimes the same email address can match several users so BBDB gives you the option of remembering different names for the same address",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "aka",
          "normalized": "Maybe[String]",
          "package": "bbdb",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:aka"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "asLisp",
          "package": "bbdb",
          "signature": "s -\u003e String",
          "source": "src/Database-BBDB.html#asLisp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "asLisp",
          "normalized": "a-\u003eString",
          "package": "bbdb",
          "partial": "Lisp",
          "signature": "s-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:asLisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "bbdbDefault",
          "package": "bbdb",
          "signature": "BBDB",
          "source": "src/Database-BBDB.html#bbdbDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "bbdbDefault",
          "package": "bbdb",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:bbdbDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Parser for a BBDB file, as it is written on disk.  If you\n read a .bbdb file with:\n\u003c/p\u003e\u003cpre\u003e testParse :: FilePath -\u003e IO (Either ParseError [BBDBFile])\n testParse filename = do\n   b \u003c- readFile filename\n   return $  parse bbdbFileParse \"bbdb\" b\n\u003c/pre\u003e\u003cp\u003eYou will get IO (Right [BBDBFile]) if the parse went ok\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "bbdbFileParse",
          "package": "bbdb",
          "signature": "Parser [BBDBFile]",
          "source": "src/Database-BBDB.html#bbdbFileParse",
          "type": "function"
        },
        "index": {
          "description": "The Parser for BBDB file as it is written on disk If you read bbdb file with testParse FilePath IO Either ParseError BBDBFile testParse filename do readFile filename return parse bbdbFileParse bbdb You will get IO Right BBDBFile if the parse went ok",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "bbdbFileParse",
          "normalized": "Parser[BBDBFile]",
          "package": "bbdb",
          "partial": "File Parse",
          "signature": "Parser[BBDBFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:bbdbFileParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "city",
          "package": "bbdb",
          "signature": "Maybe String",
          "source": "src/Database-BBDB.html#Address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "city",
          "package": "bbdb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:city"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe company if any                      \n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "company",
          "package": "bbdb",
          "signature": "Maybe String",
          "source": "src/Database-BBDB.html#BBDB",
          "type": "function"
        },
        "index": {
          "description": "The company if any",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "company",
          "package": "bbdb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:company"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "country",
          "package": "bbdb",
          "signature": "Maybe String",
          "source": "src/Database-BBDB.html#Address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "country",
          "package": "bbdb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:country"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust like mapBBDB except it filters.  You supply a function that\n takes a BBDB record to a Bool, and filterBBDB will return a new\n list of BBDBFile that satisfy that condition.  Sample usage:\n\u003c/p\u003e\u003cpre\u003e import Text.Regex.Posix\n -- do regex matching while ignoring case, so \"reno\" matches \"Reno\"\n matches x = match (makeRegexOpts compIgnoreCase defaultExecOpt x :: Regex)\n\u003c/pre\u003e\u003cpre\u003e getReno = do\n   b \u003c- readBBDB \"/home/henry/.bbdb\"\n   let c = justEntries . filterBBDB hasReno $ b\n   mapM_ print $ map (\\a -\u003e (firstName a, lastName a, address a)) c\n   where\n     isReno :: Maybe String -\u003e Bool\n     isReno = maybe False (matches \"reno\")\n     anyAddressHasReno :: [Address] -\u003e Bool\n     anyAddressHasReno = any id . map (isReno . city)\n     hasReno :: BBDB -\u003e Bool\n     hasReno = maybe False anyAddressHasReno . address\n\u003c/pre\u003e\u003cp\u003eprint the name and all addresses of anyone in the BBDB file\n who live in Reno.  \n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "filterBBDB",
          "package": "bbdb",
          "signature": "(BBDB -\u003e Bool) -\u003e [BBDBFile] -\u003e [BBDBFile]",
          "source": "src/Database-BBDB.html#filterBBDB",
          "type": "function"
        },
        "index": {
          "description": "Just like mapBBDB except it filters You supply function that takes BBDB record to Bool and filterBBDB will return new list of BBDBFile that satisfy that condition Sample usage import Text.Regex.Posix do regex matching while ignoring case so reno matches Reno matches match makeRegexOpts compIgnoreCase defaultExecOpt Regex getReno do readBBDB home henry bbdb let justEntries filterBBDB hasReno mapM print map firstName lastName address where isReno Maybe String Bool isReno maybe False matches reno anyAddressHasReno Address Bool anyAddressHasReno any id map isReno city hasReno BBDB Bool hasReno maybe False anyAddressHasReno address print the name and all addresses of anyone in the BBDB file who live in Reno",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "filterBBDB",
          "normalized": "(BBDB-\u003eBool)-\u003e[BBDBFile]-\u003e[BBDBFile]",
          "package": "bbdb",
          "partial": "BBDB",
          "signature": "(BBDB-\u003eBool)-\u003e[BBDBFile]-\u003e[BBDBFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:filterBBDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe first name.  Why is this a Maybe?  Because sometimes you just\n have a company, and not a specific first name\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "firstName",
          "package": "bbdb",
          "signature": "Maybe String",
          "source": "src/Database-BBDB.html#BBDB",
          "type": "function"
        },
        "index": {
          "description": "the first name Why is this Maybe Because sometimes you just have company and not specific first name",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "firstName",
          "package": "bbdb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:firstName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the value whose key is the given string.  If found returns \n Just the value, otherwise Nothing  For example:\n\u003c/p\u003e\u003cpre\u003e getBirthday :: BBDB -\u003e Maybe String\n getBirthday = getNote \"birthday\"\n\u003c/pre\u003e",
          "module": "Database.BBDB",
          "name": "getNote",
          "package": "bbdb",
          "signature": "String -\u003e BBDB -\u003e Maybe String",
          "source": "src/Database-BBDB.html#getNote",
          "type": "function"
        },
        "index": {
          "description": "Lookup the value whose key is the given string If found returns Just the value otherwise Nothing For example getBirthday BBDB Maybe String getBirthday getNote birthday",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "getNote",
          "normalized": "String-\u003eBBDB-\u003eMaybe String",
          "package": "bbdb",
          "partial": "Note",
          "signature": "String-\u003eBBDB-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:getNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns a list of  only the actual bbdb entries, removing the comments\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "justEntries",
          "package": "bbdb",
          "signature": "[BBDBFile] -\u003e [BBDB]",
          "source": "src/Database-BBDB.html#justEntries",
          "type": "function"
        },
        "index": {
          "description": "returns list of only the actual bbdb entries removing the comments",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "justEntries",
          "normalized": "[BBDBFile]-\u003e[BBDB]",
          "package": "bbdb",
          "partial": "Entries",
          "signature": "[BBDBFile]-\u003e[BBDB]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:justEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econverts a BBDB comment to nothing, and a BBDB entry to just the entry\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "justEntry",
          "package": "bbdb",
          "signature": "BBDBFile -\u003e Maybe BBDB",
          "source": "src/Database-BBDB.html#justEntry",
          "type": "function"
        },
        "index": {
          "description": "converts BBDB comment to nothing and BBDB entry to just the entry",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "justEntry",
          "normalized": "BBDBFile-\u003eMaybe BBDB",
          "package": "bbdb",
          "partial": "Entry",
          "signature": "BBDBFile-\u003eMaybe BBDB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:justEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an Alist, return the key\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "key",
          "package": "bbdb",
          "signature": "(x, y) -\u003e x",
          "source": "src/Database-BBDB.html#key",
          "type": "function"
        },
        "index": {
          "description": "Given an Alist return the key",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "key",
          "normalized": "(a,b)-\u003ea",
          "package": "bbdb",
          "signature": "(x,y)-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "lastName",
          "package": "bbdb",
          "signature": "Maybe String",
          "source": "src/Database-BBDB.html#BBDB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "lastName",
          "package": "bbdb",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:lastName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "location",
          "package": "bbdb",
          "signature": "Location",
          "source": "src/Database-BBDB.html#Address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "location",
          "package": "bbdb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis and filterBBDB are the main functions you should use to\n manipulate a set of BBDB entries.  You supply a function that\n applies a transformation on a BBDB record, and this function will\n apply that transformation to every BBDBEntry in a BBDB file.\n Sample usage:\n\u003c/p\u003e\u003cpre\u003e starCompanies = do\n   b \u003c- readBBDB \"/home/henry/.bbdb\"\n   writeFile \"/home/henry/.bbdb-new\" $ asLisp . mapBBDB starCompany $ b\n   where\n     starCompany x = case (company x) of\n       Nothing -\u003e x\n       Just y -\u003e x { company = Just (\"*\" ++ y) }\n\u003c/pre\u003e\u003cp\u003ePrepend a star (\"*\") to each company \n field of a BBDB file and write the result\n out as a new bbdb file.\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "mapBBDB",
          "package": "bbdb",
          "signature": "(BBDB -\u003e BBDB) -\u003e [BBDBFile] -\u003e [BBDBFile]",
          "source": "src/Database-BBDB.html#mapBBDB",
          "type": "function"
        },
        "index": {
          "description": "This and filterBBDB are the main functions you should use to manipulate set of BBDB entries You supply function that applies transformation on BBDB record and this function will apply that transformation to every BBDBEntry in BBDB file Sample usage starCompanies do readBBDB home henry bbdb writeFile home henry bbdb-new asLisp mapBBDB starCompany where starCompany case company of Nothing Just company Just Prepend star to each company field of BBDB file and write the result out as new bbdb file",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "mapBBDB",
          "normalized": "(BBDB-\u003eBBDB)-\u003e[BBDBFile]-\u003e[BBDBFile]",
          "package": "bbdb",
          "partial": "BBDB",
          "signature": "(BBDB-\u003eBBDB)-\u003e[BBDBFile]-\u003e[BBDBFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:mapBBDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of email addresses.  \n BBDB uses the first element of this field when you create a new email\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "net",
          "package": "bbdb",
          "signature": "Maybe [String]",
          "source": "src/Database-BBDB.html#BBDB",
          "type": "function"
        },
        "index": {
          "description": "list of email addresses BBDB uses the first element of this field when you create new email",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "net",
          "normalized": "Maybe[String]",
          "package": "bbdb",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:net"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny number of key, value pairs.  Great for random data.\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "notes",
          "package": "bbdb",
          "signature": "Maybe Note",
          "source": "src/Database-BBDB.html#BBDB",
          "type": "function"
        },
        "index": {
          "description": "Any number of key value pairs Great for random data",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "notes",
          "package": "bbdb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:notes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse the string as a BBDB File\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "parseBBDB",
          "package": "bbdb",
          "signature": "String -\u003e Either ParseError [BBDBFile]",
          "source": "src/Database-BBDB.html#parseBBDB",
          "type": "function"
        },
        "index": {
          "description": "parse the string as BBDB File",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "parseBBDB",
          "normalized": "String-\u003eEither ParseError[BBDBFile]",
          "package": "bbdb",
          "partial": "BBDB",
          "signature": "String-\u003eEither ParseError[BBDBFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:parseBBDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of phone numbers, either in US Style or International Style\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "phone",
          "package": "bbdb",
          "signature": "Maybe [Phone]",
          "source": "src/Database-BBDB.html#BBDB",
          "type": "function"
        },
        "index": {
          "description": "list of phone numbers either in US Style or International Style",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "phone",
          "normalized": "Maybe[Phone]",
          "package": "bbdb",
          "signature": "Maybe[Phone]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:phone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread the given file and call error if the parse failed,\n otherwise return the entire file as a list of BBDBFile records.\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "readBBDB",
          "package": "bbdb",
          "signature": "String -\u003e IO [BBDBFile]",
          "source": "src/Database-BBDB.html#readBBDB",
          "type": "function"
        },
        "index": {
          "description": "read the given file and call error if the parse failed otherwise return the entire file as list of BBDBFile records",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "readBBDB",
          "normalized": "String-\u003eIO[BBDBFile]",
          "package": "bbdb",
          "partial": "BBDB",
          "signature": "String-\u003eIO[BBDBFile]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:readBBDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "state",
          "package": "bbdb",
          "signature": "Maybe String",
          "source": "src/Database-BBDB.html#Address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "state",
          "package": "bbdb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "streets",
          "package": "bbdb",
          "signature": "Maybe [String]",
          "source": "src/Database-BBDB.html#Address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "streets",
          "normalized": "Maybe[String]",
          "package": "bbdb",
          "signature": "Maybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:streets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "unnote",
          "package": "bbdb",
          "signature": "[Alist]",
          "source": "src/Database-BBDB.html#Note",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "unnote",
          "normalized": "[Alist]",
          "package": "bbdb",
          "signature": "[Alist]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:unnote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an Alist, return the value\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "value",
          "package": "bbdb",
          "signature": "(x, y) -\u003e y",
          "source": "src/Database-BBDB.html#value",
          "type": "function"
        },
        "index": {
          "description": "Given an Alist return the value",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "value",
          "normalized": "(a,b)-\u003eb",
          "package": "bbdb",
          "signature": "(x,y)-\u003ey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotes inside a BBDB record are awkward to get at.  This helper\n function digs into the record and applies a function to each\n Alist element of the record.  It returns true if it any of the\n Alists in the note return true.  For example:\n\u003c/p\u003e\u003cpre\u003e hasBirthday :: BBDB -\u003e Bool\n hasBirthday = wantNote (\\x -\u003e key x == \"birthday\")\n\u003c/pre\u003e\u003cp\u003ewill return True for any BBDB record that has a \"birthday\" key\n in it's notes field\n\u003c/p\u003e",
          "module": "Database.BBDB",
          "name": "wantNote",
          "package": "bbdb",
          "signature": "(Alist -\u003e Bool) -\u003e BBDB -\u003e Bool",
          "source": "src/Database-BBDB.html#wantNote",
          "type": "function"
        },
        "index": {
          "description": "Notes inside BBDB record are awkward to get at This helper function digs into the record and applies function to each Alist element of the record It returns true if it any of the Alists in the note return true For example hasBirthday BBDB Bool hasBirthday wantNote key birthday will return True for any BBDB record that has birthday key in it notes field",
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "wantNote",
          "normalized": "(Alist-\u003eBool)-\u003eBBDB-\u003eBool",
          "package": "bbdb",
          "partial": "Note",
          "signature": "(Alist-\u003eBool)-\u003eBBDB-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:wantNote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.BBDB",
          "name": "zipcode",
          "package": "bbdb",
          "signature": "Maybe String",
          "source": "src/Database-BBDB.html#Address",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database BBDB",
          "module": "Database.BBDB",
          "name": "zipcode",
          "package": "bbdb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:zipcode"
      }
    }
  ]
]