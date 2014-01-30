[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module can read and write BBDB files, and provides a few handy\n functions for getting at fields inside of BBDB data.\n\u003c/p\u003e\u003cp\u003eBBDB (\u003ca\u003ehttp://bbdb.sourceforge.net/\u003c/a\u003e) is short for the Insidious Big\n Brother Database, which is a contact management utility that can\n be integrated into Emacs (the one true editor.)  Since bbdb.el is\n implemented in elisp, it can be difficult to \"get at\" the data\n inside a .bbdb file with external programs.  Many years ago, I\n wrote a BBDB interface for perl, but having experience\n enlightenment at the hands of the category gods, I`m now dabbling\n with Haskell.  But having been a loyal Emacs user for many years\n now, I wanted a way to spam my friends while still using my\n favorite programming language.  Hence the module Data.BBDB.\n\u003c/p\u003e\u003cp\u003eThe following is the data layout for a BBDB record.  I have created a\n sample record with my own data.  Each field is just separated by a\n space.  I have added comments to the right\n\u003c/p\u003e\u003cpre\u003e [\"Henry\"                                   The first name - a string\n \"Laxen\"                                    The last name - a string\n (\"Henry, Enrique\")                         Also Known As - comma separated list\n \"Elegant Solutions\"                        Business name - a string\n (\n  [\"reno\" 775 624 1851 0]                   Phone number field - US style\n  [\"chapala\" \"011-52-376-765-3181\"]         Phone number field - International style\n ) \n (\n  [\"mailing\"                                The address location, then a list\n  (\"10580 N. McCarran Blvd.\" \"#115-396\")    for the street address, then one each\n  \"Reno\" \"Nevada\" \"89503\" \"USA\"             for City, State, Zip Code, and country\n ] \n  [\"home\"                                   another Address field\n  (\"Via Alta #6\" \"Gaviotas #10\")            The street list\n  \"Chapala\" \"Jalisco\"                       City State\n  \"45900\" \"Mexico\"                          Zip and country\n ]) \n (\n  \"nadine.and.henry@pobox.com\"              the net addresses - a list of strings\n  \"nadinelaxen@pobox.com\"\n ) \n (\n  (notes . \"Always split aces and eights\")  The notes field - a list of alists\n  (creation-date . \"2010-09-03\") \n  (timestamp . \"2010-09-03\")\n  (birthday . \"6/15\")\n ) \n nil                                        The cache vector - always nil\n ]\n\u003c/pre\u003e\u003cp\u003eInside the .bbdb file, this looks like:\n [\"Henry\" \"Laxen\" (\"Henry, Enrique\") \"Elegant Solutions\" \n ([\"reno\" 775 624 1851 0] [\"chapala\" \"011-52-376-765-3181\"]) \n ([\"mailing\" (\"10580 N. McCarran Blvd.\" \n \"#115-396\") \"Reno\" \"Nevada\" \"89503\" \"USA\"] \n [\"home\" (\"Via Alta \u003ca name=\"6\\\" \\\"Gaviotas \"/\u003e10\") \n \"Chapala\" \"Jalisco\" \"45900\" \"Mexico\"]) \n (\"nadine.and.henry@pobox.com\" \"nadinelaxen@pobox.com\") \n ((notes . \"Always split aces and eights\") \n (creation-date . \"2010-09-03\") \n (timestamp . \"2010-09-03\") (birthday . \"6/15\")) nil]\n\u003c/p\u003e\u003cp\u003eWhen parsed, this is represented inside Haskell as:\n\u003c/p\u003e\u003cpre\u003e      BBDBEntry\n        (BBDB{firstName = Just \"Henry\", lastName = Just \"Laxen\",\n              aka = Just [\"Henry, Enrique\"], company = Just \"Elegant Solutions\",\n              phone =\n                Just\n                  [USStyle \"reno\" [\"775\", \"624\", \"1851\", \"0\"],\n                   InternationalStyle \"chapala\" \"011-52-376-765-3181\"],\n              address =\n                Just\n                  [Address{location = \"mailing\",\n                           streets =\n                             Just [\"10580 N. McCarran Blvd.\", \"#115-396\"],\n                           city = Just \"Reno\", state = Just \"Nevada\",\n                           zipcode = Just \"89503\", country = Just \"USA\"},\n                   Address{location = \"home\",\n                           streets = Just [\"Via Alta #6\", \"Gaviotas #10\"],\n                           city = Just \"Chapala\", state = Just \"Jalisco\",\n                           zipcode = Just \"45900\", country = Just \"Mexico\"}],\n              net = Just [\"nadine.and.henry@pobox.com\", \"nadinelaxen@pobox.com\"],\n              notes =\n                Just\n                  (Note{unnote =\n                          [(\"notes\", \"Always split aces and eights\"),\n                           (\"creation-date\", \"2010-09-03\"),\n                           (\"timestamp\", \"2010-09-03\"),\n                           (\"birthday\", \"6/15\")]})})]\n \n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "module",
        "fct-source": "src/Database-BBDB.html",
        "fct-type": "module",
        "title": "BBDB"
      },
      "index": {
        "description": "This module can read and write BBDB files and provides few handy functions for getting at fields inside of BBDB data BBDB http bbdb.sourceforge.net is short for the Insidious Big Brother Database which is contact management utility that can be integrated into Emacs the one true editor Since bbdb.el is implemented in elisp it can be difficult to get at the data inside bbdb file with external programs Many years ago wrote BBDB interface for perl but having experience enlightenment at the hands of the category gods now dabbling with Haskell But having been loyal Emacs user for many years now wanted way to spam my friends while still using my favorite programming language Hence the module Data.BBDB The following is the data layout for BBDB record have created sample record with my own data Each field is just separated by space have added comments to the right Henry The first name string Laxen The last name string Henry Enrique Also Known As comma separated list Elegant Solutions Business name string reno Phone number field US style chapala Phone number field International style mailing The address location then list McCarran Blvd for the street address then one each Reno Nevada USA for City State Zip Code and country home another Address field Via Alta Gaviotas The street list Chapala Jalisco City State Mexico Zip and country nadine.and.henry@pobox.com the net addresses list of strings nadinelaxen@pobox.com notes Always split aces and eights The notes field list of alists creation-date timestamp birthday nil The cache vector always nil Inside the bbdb file this looks like Henry Laxen Henry Enrique Elegant Solutions reno chapala mailing McCarran Blvd Reno Nevada USA home Via Alta Chapala Jalisco Mexico nadine.and.henry@pobox.com nadinelaxen@pobox.com notes Always split aces and eights creation-date timestamp birthday nil When parsed this is represented inside Haskell as BBDBEntry BBDB firstName Just Henry lastName Just Laxen aka Just Henry Enrique company Just Elegant Solutions phone Just USStyle reno InternationalStyle chapala address Just Address location mailing streets Just McCarran Blvd city Just Reno state Just Nevada zipcode Just country Just USA Address location home streets Just Via Alta Gaviotas city Just Chapala state Just Jalisco zipcode Just country Just Mexico net Just nadine.and.henry@pobox.com nadinelaxen@pobox.com notes Just Note unnote notes Always split aces and eights creation-date timestamp birthday",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "BBDB",
        "normalized": "",
        "package": "bbdb",
        "partial": "BBDB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Address",
      "description": {
        "fct-descr": "\u003cp\u003eAn Address must have a location, and may have associated streets,\n a city, a state, a zipcode, and an country.\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "data",
        "fct-source": "src/Database-BBDB.html#Address",
        "fct-type": "data",
        "title": "Address"
      },
      "index": {
        "description": "An Address must have location and may have associated streets city state zipcode and an country",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "Address",
        "normalized": "",
        "package": "bbdb",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Alist",
      "description": {
        "fct-descr": "\u003cp\u003eAn Alist is an Association List.  Lisp writes these as (key\n . value) We convert these to a tuple in haskell where fst is key\n and snd is value.  \n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "type",
        "fct-source": "src/Database-BBDB.html#Alist",
        "fct-type": "type",
        "title": "Alist"
      },
      "index": {
        "description": "An Alist is an Association List Lisp writes these as key value We convert these to tuple in haskell where fst is key and snd is value",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "Alist",
        "normalized": "",
        "package": "bbdb",
        "partial": "Alist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:BBDB",
      "description": {
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "data",
        "fct-source": "src/Database-BBDB.html#BBDB",
        "fct-type": "data",
        "title": "BBDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "BBDB",
        "normalized": "",
        "package": "bbdb",
        "partial": "BBDB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:BBDBFile",
      "description": {
        "fct-descr": "\u003cp\u003eAt the beginning of a BBDB file are a variable number of comments, which\n specify the encoding type and the version.  We just ignore them.\n Comments starts with a ; (semi-colon) and continue to end of line\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "data",
        "fct-source": "src/Database-BBDB.html#BBDBFile",
        "fct-type": "data",
        "title": "BBDBFile"
      },
      "index": {
        "description": "At the beginning of BBDB file are variable number of comments which specify the encoding type and the version We just ignore them Comments starts with semi-colon and continue to end of line",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "BBDBFile",
        "normalized": "",
        "package": "bbdb",
        "partial": "BBDBFile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:LispAble",
      "description": {
        "fct-descr": "\u003cp\u003eLispAble is how we convert from our internal representation of a\n BBDB record, to one that will make Lisp and Emacs happy.  (Sans bugs)\n\u003c/p\u003e\u003cpre\u003e testInverse = do\n   let inFile = \"/home/henry/.bbdb\"\n   actualBBDBFile \u003c- readFile inFile\n   parsedBBDBdata \u003c- readBBDB inFile\n   let bbdbDataOut = asLisp parsedBBDBdata\n   print $ actualBBDBFile == bbdbDataOut\n  \n\u003c/pre\u003e\u003cp\u003eshould print True\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "class",
        "fct-source": "src/Database-BBDB.html#LispAble",
        "fct-type": "class",
        "title": "LispAble"
      },
      "index": {
        "description": "LispAble is how we convert from our internal representation of BBDB record to one that will make Lisp and Emacs happy Sans bugs testInverse do let inFile home henry bbdb actualBBDBFile readFile inFile parsedBBDBdata readBBDB inFile let bbdbDataOut asLisp parsedBBDBdata print actualBBDBFile bbdbDataOut should print True",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "LispAble",
        "normalized": "",
        "package": "bbdb",
        "partial": "Lisp Able",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Location",
      "description": {
        "fct-descr": "\u003cp\u003eA Location is just a synonym for String.  Each BBDB Address and\n Phone field must be associated with a location, such as \u003cem\u003ehome\u003c/em\u003e or\n \u003cem\u003ework\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "type",
        "fct-source": "src/Database-BBDB.html#Location",
        "fct-type": "type",
        "title": "Location"
      },
      "index": {
        "description": "Location is just synonym for String Each BBDB Address and Phone field must be associated with location such as home or work",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "Location",
        "normalized": "",
        "package": "bbdb",
        "partial": "Location",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Note",
      "description": {
        "fct-descr": "\u003cp\u003eThe Note field of a BBDB record is just a list of associations.\n If you don't provide a your own key, the BBDB will use the word \"note\"\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "data",
        "fct-source": "src/Database-BBDB.html#Note",
        "fct-type": "data",
        "title": "Note"
      },
      "index": {
        "description": "The Note field of BBDB record is just list of associations If you don provide your own key the BBDB will use the word note",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "Note",
        "normalized": "",
        "package": "bbdb",
        "partial": "Note",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Phone",
      "description": {
        "fct-descr": "\u003cp\u003eFor some unknow reason, BBDB can have phones in two different\n formats.  In \u003cem\u003eUSStyle\u003c/em\u003e, the phone is list of integers, in the form\n of Area code, Prefix, Number, and Extension.  I don't bother to\n convert the strings of digits to actual integers.  In\n \u003cem\u003eInternationalStyle\u003c/em\u003e, the phone number is just a String.\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "data",
        "fct-source": "src/Database-BBDB.html#Phone",
        "fct-type": "data",
        "title": "Phone"
      },
      "index": {
        "description": "For some unknow reason BBDB can have phones in two different formats In USStyle the phone is list of integers in the form of Area code Prefix Number and Extension don bother to convert the strings of digits to actual integers In InternationalStyle the phone number is just String",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "Phone",
        "normalized": "",
        "package": "bbdb",
        "partial": "Phone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Street",
      "description": {
        "fct-descr": "\u003cp\u003eA Street is also a synonym for String.  Each Address may have a\n list of Streets associated with it.\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "type",
        "fct-source": "src/Database-BBDB.html#Street",
        "fct-type": "type",
        "title": "Street"
      },
      "index": {
        "description": "Street is also synonym for String Each Address may have list of Streets associated with it",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "Street",
        "normalized": "",
        "package": "bbdb",
        "partial": "Street",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#t:Symbol",
      "description": {
        "fct-descr": "\u003cp\u003eA Symbol is just a String, but Lisp only wants\n alphanumerics and the characters _ (underscore) and - (dash)\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "type",
        "fct-source": "src/Database-BBDB.html#Symbol",
        "fct-type": "type",
        "title": "Symbol"
      },
      "index": {
        "description": "Symbol is just String but Lisp only wants alphanumerics and the characters underscore and dash",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "Symbol",
        "normalized": "",
        "package": "bbdb",
        "partial": "Symbol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:Address",
      "description": {
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Address",
        "fct-source": "src/Database-BBDB.html#Address",
        "fct-type": "function",
        "title": "Address"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "Address",
        "normalized": "",
        "package": "bbdb",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:BBDB",
      "description": {
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "BBDB",
        "fct-source": "src/Database-BBDB.html#BBDB",
        "fct-type": "function",
        "title": "BBDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "BBDB",
        "normalized": "",
        "package": "bbdb",
        "partial": "BBDB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:BBDBComment",
      "description": {
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "BBDBComment String",
        "fct-source": "src/Database-BBDB.html#BBDBFile",
        "fct-type": "function",
        "title": "BBDBComment"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "BBDBComment",
        "normalized": "",
        "package": "bbdb",
        "partial": "BBDBComment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:BBDBEntry",
      "description": {
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "BBDBEntry BBDB",
        "fct-source": "src/Database-BBDB.html#BBDBFile",
        "fct-type": "function",
        "title": "BBDBEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "BBDBEntry",
        "normalized": "",
        "package": "bbdb",
        "partial": "BBDBEntry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:InternationalStyle",
      "description": {
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "InternationalStyle Location String",
        "fct-source": "src/Database-BBDB.html#Phone",
        "fct-type": "function",
        "title": "InternationalStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "InternationalStyle",
        "normalized": "",
        "package": "bbdb",
        "partial": "International Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:Note",
      "description": {
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Note",
        "fct-source": "src/Database-BBDB.html#Note",
        "fct-type": "function",
        "title": "Note"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "Note",
        "normalized": "",
        "package": "bbdb",
        "partial": "Note",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:USStyle",
      "description": {
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "USStyle Location [String]",
        "fct-source": "src/Database-BBDB.html#Phone",
        "fct-type": "function",
        "title": "USStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "USStyle",
        "normalized": "USStyle Location[String]",
        "package": "bbdb",
        "partial": "USStyle",
        "signature": "USStyle Location[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:address",
      "description": {
        "fct-descr": "\u003cp\u003eA list of addresses, keyed by location\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe [Address]",
        "fct-source": "src/Database-BBDB.html#BBDB",
        "fct-type": "function",
        "title": "address"
      },
      "index": {
        "description": "list of addresses keyed by location",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "address",
        "normalized": "Maybe[Address]",
        "package": "bbdb",
        "partial": "",
        "signature": "Maybe[Address]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:aka",
      "description": {
        "fct-descr": "\u003cp\u003eaka = Also Known As.  Sometimes the same email address can match\n several users, so BBDB gives you the option of remembering\n different names for the same address\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe [String]",
        "fct-source": "src/Database-BBDB.html#BBDB",
        "fct-type": "function",
        "title": "aka"
      },
      "index": {
        "description": "aka Also Known As Sometimes the same email address can match several users so BBDB gives you the option of remembering different names for the same address",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "aka",
        "normalized": "Maybe[String]",
        "package": "bbdb",
        "partial": "",
        "signature": "Maybe[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:asLisp",
      "description": {
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "s -\u003e String",
        "fct-source": "src/Database-BBDB.html#asLisp",
        "fct-type": "method",
        "title": "asLisp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "asLisp",
        "normalized": "a-\u003eString",
        "package": "bbdb",
        "partial": "Lisp",
        "signature": "s-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:bbdbDefault",
      "description": {
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "BBDB",
        "fct-source": "src/Database-BBDB.html#bbdbDefault",
        "fct-type": "function",
        "title": "bbdbDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "bbdbDefault",
        "normalized": "",
        "package": "bbdb",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:bbdbFileParse",
      "description": {
        "fct-descr": "\u003cp\u003eThe Parser for a BBDB file, as it is written on disk.  If you\n read a .bbdb file with:\n\u003c/p\u003e\u003cpre\u003e testParse :: FilePath -\u003e IO (Either ParseError [BBDBFile])\n testParse filename = do\n   b \u003c- readFile filename\n   return $  parse bbdbFileParse \"bbdb\" b\n\u003c/pre\u003e\u003cp\u003eYou will get IO (Right [BBDBFile]) if the parse went ok\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Parser [BBDBFile]",
        "fct-source": "src/Database-BBDB.html#bbdbFileParse",
        "fct-type": "function",
        "title": "bbdbFileParse"
      },
      "index": {
        "description": "The Parser for BBDB file as it is written on disk If you read bbdb file with testParse FilePath IO Either ParseError BBDBFile testParse filename do readFile filename return parse bbdbFileParse bbdb You will get IO Right BBDBFile if the parse went ok",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "bbdbFileParse",
        "normalized": "Parser[BBDBFile]",
        "package": "bbdb",
        "partial": "File Parse",
        "signature": "Parser[BBDBFile]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:city",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-BBDB.html#Address",
        "fct-type": "function",
        "title": "city"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "city",
        "normalized": "",
        "package": "bbdb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:company",
      "description": {
        "fct-descr": "\u003cp\u003eThe company if any                      \n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-BBDB.html#BBDB",
        "fct-type": "function",
        "title": "company"
      },
      "index": {
        "description": "The company if any",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "company",
        "normalized": "",
        "package": "bbdb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:country",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-BBDB.html#Address",
        "fct-type": "function",
        "title": "country"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "country",
        "normalized": "",
        "package": "bbdb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:filterBBDB",
      "description": {
        "fct-descr": "\u003cp\u003eJust like mapBBDB except it filters.  You supply a function that\n takes a BBDB record to a Bool, and filterBBDB will return a new\n list of BBDBFile that satisfy that condition.  Sample usage:\n\u003c/p\u003e\u003cpre\u003e import Text.Regex.Posix\n -- do regex matching while ignoring case, so \"reno\" matches \"Reno\"\n matches x = match (makeRegexOpts compIgnoreCase defaultExecOpt x :: Regex)\n\u003c/pre\u003e\u003cpre\u003e getReno = do\n   b \u003c- readBBDB \"/home/henry/.bbdb\"\n   let c = justEntries . filterBBDB hasReno $ b\n   mapM_ print $ map (\\a -\u003e (firstName a, lastName a, address a)) c\n   where\n     isReno :: Maybe String -\u003e Bool\n     isReno = maybe False (matches \"reno\")\n     anyAddressHasReno :: [Address] -\u003e Bool\n     anyAddressHasReno = any id . map (isReno . city)\n     hasReno :: BBDB -\u003e Bool\n     hasReno = maybe False anyAddressHasReno . address\n\u003c/pre\u003e\u003cp\u003eprint the name and all addresses of anyone in the BBDB file\n who live in Reno.  \n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "(BBDB -\u003e Bool) -\u003e [BBDBFile] -\u003e [BBDBFile]",
        "fct-source": "src/Database-BBDB.html#filterBBDB",
        "fct-type": "function",
        "title": "filterBBDB"
      },
      "index": {
        "description": "Just like mapBBDB except it filters You supply function that takes BBDB record to Bool and filterBBDB will return new list of BBDBFile that satisfy that condition Sample usage import Text.Regex.Posix do regex matching while ignoring case so reno matches Reno matches match makeRegexOpts compIgnoreCase defaultExecOpt Regex getReno do readBBDB home henry bbdb let justEntries filterBBDB hasReno mapM print map firstName lastName address where isReno Maybe String Bool isReno maybe False matches reno anyAddressHasReno Address Bool anyAddressHasReno any id map isReno city hasReno BBDB Bool hasReno maybe False anyAddressHasReno address print the name and all addresses of anyone in the BBDB file who live in Reno",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "filterBBDB",
        "normalized": "(BBDB-\u003eBool)-\u003e[BBDBFile]-\u003e[BBDBFile]",
        "package": "bbdb",
        "partial": "BBDB",
        "signature": "(BBDB-\u003eBool)-\u003e[BBDBFile]-\u003e[BBDBFile]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:firstName",
      "description": {
        "fct-descr": "\u003cp\u003ethe first name.  Why is this a Maybe?  Because sometimes you just\n have a company, and not a specific first name\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-BBDB.html#BBDB",
        "fct-type": "function",
        "title": "firstName"
      },
      "index": {
        "description": "the first name Why is this Maybe Because sometimes you just have company and not specific first name",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "firstName",
        "normalized": "",
        "package": "bbdb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:getNote",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the value whose key is the given string.  If found returns \n Just the value, otherwise Nothing  For example:\n\u003c/p\u003e\u003cpre\u003e getBirthday :: BBDB -\u003e Maybe String\n getBirthday = getNote \"birthday\"\n\u003c/pre\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "String -\u003e BBDB -\u003e Maybe String",
        "fct-source": "src/Database-BBDB.html#getNote",
        "fct-type": "function",
        "title": "getNote"
      },
      "index": {
        "description": "Lookup the value whose key is the given string If found returns Just the value otherwise Nothing For example getBirthday BBDB Maybe String getBirthday getNote birthday",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "getNote",
        "normalized": "String-\u003eBBDB-\u003eMaybe String",
        "package": "bbdb",
        "partial": "Note",
        "signature": "String-\u003eBBDB-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:justEntries",
      "description": {
        "fct-descr": "\u003cp\u003ereturns a list of  only the actual bbdb entries, removing the comments\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "[BBDBFile] -\u003e [BBDB]",
        "fct-source": "src/Database-BBDB.html#justEntries",
        "fct-type": "function",
        "title": "justEntries"
      },
      "index": {
        "description": "returns list of only the actual bbdb entries removing the comments",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "justEntries",
        "normalized": "[BBDBFile]-\u003e[BBDB]",
        "package": "bbdb",
        "partial": "Entries",
        "signature": "[BBDBFile]-\u003e[BBDB]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:justEntry",
      "description": {
        "fct-descr": "\u003cp\u003econverts a BBDB comment to nothing, and a BBDB entry to just the entry\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "BBDBFile -\u003e Maybe BBDB",
        "fct-source": "src/Database-BBDB.html#justEntry",
        "fct-type": "function",
        "title": "justEntry"
      },
      "index": {
        "description": "converts BBDB comment to nothing and BBDB entry to just the entry",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "justEntry",
        "normalized": "BBDBFile-\u003eMaybe BBDB",
        "package": "bbdb",
        "partial": "Entry",
        "signature": "BBDBFile-\u003eMaybe BBDB"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:key",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an Alist, return the key\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "(x, y) -\u003e x",
        "fct-source": "src/Database-BBDB.html#key",
        "fct-type": "function",
        "title": "key"
      },
      "index": {
        "description": "Given an Alist return the key",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "key",
        "normalized": "(a,b)-\u003ea",
        "package": "bbdb",
        "partial": "",
        "signature": "(x,y)-\u003ex"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:lastName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-BBDB.html#BBDB",
        "fct-type": "function",
        "title": "lastName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "lastName",
        "normalized": "",
        "package": "bbdb",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:location",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Location",
        "fct-source": "src/Database-BBDB.html#Address",
        "fct-type": "function",
        "title": "location"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "location",
        "normalized": "",
        "package": "bbdb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:mapBBDB",
      "description": {
        "fct-descr": "\u003cp\u003eThis and filterBBDB are the main functions you should use to\n manipulate a set of BBDB entries.  You supply a function that\n applies a transformation on a BBDB record, and this function will\n apply that transformation to every BBDBEntry in a BBDB file.\n Sample usage:\n\u003c/p\u003e\u003cpre\u003e starCompanies = do\n   b \u003c- readBBDB \"/home/henry/.bbdb\"\n   writeFile \"/home/henry/.bbdb-new\" $ asLisp . mapBBDB starCompany $ b\n   where\n     starCompany x = case (company x) of\n       Nothing -\u003e x\n       Just y -\u003e x { company = Just (\"*\" ++ y) }\n\u003c/pre\u003e\u003cp\u003ePrepend a star (\"*\") to each company \n field of a BBDB file and write the result\n out as a new bbdb file.\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "(BBDB -\u003e BBDB) -\u003e [BBDBFile] -\u003e [BBDBFile]",
        "fct-source": "src/Database-BBDB.html#mapBBDB",
        "fct-type": "function",
        "title": "mapBBDB"
      },
      "index": {
        "description": "This and filterBBDB are the main functions you should use to manipulate set of BBDB entries You supply function that applies transformation on BBDB record and this function will apply that transformation to every BBDBEntry in BBDB file Sample usage starCompanies do readBBDB home henry bbdb writeFile home henry bbdb-new asLisp mapBBDB starCompany where starCompany case company of Nothing Just company Just Prepend star to each company field of BBDB file and write the result out as new bbdb file",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "mapBBDB",
        "normalized": "(BBDB-\u003eBBDB)-\u003e[BBDBFile]-\u003e[BBDBFile]",
        "package": "bbdb",
        "partial": "BBDB",
        "signature": "(BBDB-\u003eBBDB)-\u003e[BBDBFile]-\u003e[BBDBFile]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:net",
      "description": {
        "fct-descr": "\u003cp\u003eA list of email addresses.  \n BBDB uses the first element of this field when you create a new email\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe [String]",
        "fct-source": "src/Database-BBDB.html#BBDB",
        "fct-type": "function",
        "title": "net"
      },
      "index": {
        "description": "list of email addresses BBDB uses the first element of this field when you create new email",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "net",
        "normalized": "Maybe[String]",
        "package": "bbdb",
        "partial": "",
        "signature": "Maybe[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:notes",
      "description": {
        "fct-descr": "\u003cp\u003eAny number of key, value pairs.  Great for random data.\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe Note",
        "fct-source": "src/Database-BBDB.html#BBDB",
        "fct-type": "function",
        "title": "notes"
      },
      "index": {
        "description": "Any number of key value pairs Great for random data",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "notes",
        "normalized": "",
        "package": "bbdb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:parseBBDB",
      "description": {
        "fct-descr": "\u003cp\u003eparse the string as a BBDB File\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "String -\u003e Either ParseError [BBDBFile]",
        "fct-source": "src/Database-BBDB.html#parseBBDB",
        "fct-type": "function",
        "title": "parseBBDB"
      },
      "index": {
        "description": "parse the string as BBDB File",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "parseBBDB",
        "normalized": "String-\u003eEither ParseError[BBDBFile]",
        "package": "bbdb",
        "partial": "BBDB",
        "signature": "String-\u003eEither ParseError[BBDBFile]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:phone",
      "description": {
        "fct-descr": "\u003cp\u003eA list of phone numbers, either in US Style or International Style\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe [Phone]",
        "fct-source": "src/Database-BBDB.html#BBDB",
        "fct-type": "function",
        "title": "phone"
      },
      "index": {
        "description": "list of phone numbers either in US Style or International Style",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "phone",
        "normalized": "Maybe[Phone]",
        "package": "bbdb",
        "partial": "",
        "signature": "Maybe[Phone]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:readBBDB",
      "description": {
        "fct-descr": "\u003cp\u003eread the given file and call error if the parse failed,\n otherwise return the entire file as a list of BBDBFile records.\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "String -\u003e IO [BBDBFile]",
        "fct-source": "src/Database-BBDB.html#readBBDB",
        "fct-type": "function",
        "title": "readBBDB"
      },
      "index": {
        "description": "read the given file and call error if the parse failed otherwise return the entire file as list of BBDBFile records",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "readBBDB",
        "normalized": "String-\u003eIO[BBDBFile]",
        "package": "bbdb",
        "partial": "BBDB",
        "signature": "String-\u003eIO[BBDBFile]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:state",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-BBDB.html#Address",
        "fct-type": "function",
        "title": "state"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "state",
        "normalized": "",
        "package": "bbdb",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:streets",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe [String]",
        "fct-source": "src/Database-BBDB.html#Address",
        "fct-type": "function",
        "title": "streets"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "streets",
        "normalized": "Maybe[String]",
        "package": "bbdb",
        "partial": "",
        "signature": "Maybe[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:unnote",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "[Alist]",
        "fct-source": "src/Database-BBDB.html#Note",
        "fct-type": "function",
        "title": "unnote"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "unnote",
        "normalized": "[Alist]",
        "package": "bbdb",
        "partial": "",
        "signature": "[Alist]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an Alist, return the value\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "(x, y) -\u003e y",
        "fct-source": "src/Database-BBDB.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Given an Alist return the value",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "value",
        "normalized": "(a,b)-\u003eb",
        "package": "bbdb",
        "partial": "",
        "signature": "(x,y)-\u003ey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:wantNote",
      "description": {
        "fct-descr": "\u003cp\u003eNotes inside a BBDB record are awkward to get at.  This helper\n function digs into the record and applies a function to each\n Alist element of the record.  It returns true if it any of the\n Alists in the note return true.  For example:\n\u003c/p\u003e\u003cpre\u003e hasBirthday :: BBDB -\u003e Bool\n hasBirthday = wantNote (\\x -\u003e key x == \"birthday\")\n\u003c/pre\u003e\u003cp\u003ewill return True for any BBDB record that has a \"birthday\" key\n in it's notes field\n\u003c/p\u003e",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "(Alist -\u003e Bool) -\u003e BBDB -\u003e Bool",
        "fct-source": "src/Database-BBDB.html#wantNote",
        "fct-type": "function",
        "title": "wantNote"
      },
      "index": {
        "description": "Notes inside BBDB record are awkward to get at This helper function digs into the record and applies function to each Alist element of the record It returns true if it any of the Alists in the note return true For example hasBirthday BBDB Bool hasBirthday wantNote key birthday will return True for any BBDB record that has birthday key in it notes field",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "wantNote",
        "normalized": "(Alist-\u003eBool)-\u003eBBDB-\u003eBool",
        "package": "bbdb",
        "partial": "Note",
        "signature": "(Alist-\u003eBool)-\u003eBBDB-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bbdb/docs/Database-BBDB.html#v:zipcode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.BBDB",
        "fct-package": "bbdb",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-BBDB.html#Address",
        "fct-type": "function",
        "title": "zipcode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database BBDB",
        "module": "Database.BBDB",
        "name": "zipcode",
        "normalized": "",
        "package": "bbdb",
        "partial": "",
        "signature": ""
      }
    }
  }
]