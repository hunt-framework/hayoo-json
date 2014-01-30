[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAttoparsec parser combinator for cron schedules. See cron documentation for\n how those are formatted.\n\u003c/p\u003e\u003cpre\u003e import Data.Attoparsec.Text (parseOnly)\n import System.Cron.Parser\n \n main :: IO ()\n main = do\n   print $ parseOnly cronSchedule \"*/2 * 3 * 4,5,6\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Cron.Parser",
        "fct-package": "cron",
        "fct-signature": "module",
        "fct-source": "src/System-Cron-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Attoparsec parser combinator for cron schedules See cron documentation for how those are formatted import Data.Attoparsec.Text parseOnly import System.Cron.Parser main IO main do print parseOnly cronSchedule",
        "hierarchy": "System Cron Parser",
        "module": "System.Cron.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "cron",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron-Parser.html#v:cronSchedule",
      "description": {
        "fct-descr": "\u003cp\u003eAttoparsec Parser for a cron schedule. Complies fully with the standard\n cron format.  Also includes the following shorthand formats which cron also\n supports: @yearly, @monthly, @weekly, @daily, @hourly. Note that this\n parser will fail if there is extraneous input. This is to prevent things\n like extra fields. If you want a more lax parser, use \u003ccode\u003e\u003ca\u003ecronScheduleLoose\u003c/a\u003e\u003c/code\u003e,\n which is fine with extra input.\n\u003c/p\u003e",
        "fct-module": "System.Cron.Parser",
        "fct-package": "cron",
        "fct-signature": "Parser CronSchedule",
        "fct-source": "src/System-Cron-Parser.html#cronSchedule",
        "fct-type": "function",
        "title": "cronSchedule"
      },
      "index": {
        "description": "Attoparsec Parser for cron schedule Complies fully with the standard cron format Also includes the following shorthand formats which cron also supports yearly monthly weekly daily hourly Note that this parser will fail if there is extraneous input This is to prevent things like extra fields If you want more lax parser use cronScheduleLoose which is fine with extra input",
        "hierarchy": "System Cron Parser",
        "module": "System.Cron.Parser",
        "name": "cronSchedule",
        "normalized": "",
        "package": "cron",
        "partial": "Schedule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron-Parser.html#v:cronScheduleLoose",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ecronSchedule\u003c/a\u003e\u003c/code\u003e but does not fail on extraneous input.\n\u003c/p\u003e",
        "fct-module": "System.Cron.Parser",
        "fct-package": "cron",
        "fct-signature": "Parser CronSchedule",
        "fct-source": "src/System-Cron-Parser.html#cronScheduleLoose",
        "fct-type": "function",
        "title": "cronScheduleLoose"
      },
      "index": {
        "description": "Same as cronSchedule but does not fail on extraneous input",
        "hierarchy": "System Cron Parser",
        "module": "System.Cron.Parser",
        "name": "cronScheduleLoose",
        "normalized": "",
        "package": "cron",
        "partial": "Schedule Loose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron-Parser.html#v:crontab",
      "description": {
        "fct-descr": "\u003cp\u003eParses a full crontab file, omitting comments and including environment\n variable sets (e.g FOO=BAR).\n\u003c/p\u003e",
        "fct-module": "System.Cron.Parser",
        "fct-package": "cron",
        "fct-signature": "Parser Crontab",
        "fct-source": "src/System-Cron-Parser.html#crontab",
        "fct-type": "function",
        "title": "crontab"
      },
      "index": {
        "description": "Parses full crontab file omitting comments and including environment variable sets e.g FOO BAR",
        "hierarchy": "System Cron Parser",
        "module": "System.Cron.Parser",
        "name": "crontab",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron-Parser.html#v:crontabEntry",
      "description": {
        "fct-descr": "\u003cp\u003eParses an individual crontab line, which is either a scheduled command or\n an environmental variable set.\n\u003c/p\u003e",
        "fct-module": "System.Cron.Parser",
        "fct-package": "cron",
        "fct-signature": "Parser CrontabEntry",
        "fct-source": "src/System-Cron-Parser.html#crontabEntry",
        "fct-type": "function",
        "title": "crontabEntry"
      },
      "index": {
        "description": "Parses an individual crontab line which is either scheduled command or an environmental variable set",
        "hierarchy": "System Cron Parser",
        "module": "System.Cron.Parser",
        "name": "crontabEntry",
        "normalized": "",
        "package": "cron",
        "partial": "Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eToplevel module for Cron specifying a cron schedule and several convenience\n functions for dealing with cron schedules\n\u003c/p\u003e\u003cpre\u003e import Control.Concurrent\n import Control.Monad\n import Data.Time.Clock\n import System.Cron\n \n main :: IO ()\n main = do\n   forever do\n     now \u003c- getCurrentTime\n     when (scheduleMatches schedule now) doWork\n     putStrLn \"sleeping\"\n     threadDelay 100000\n   where doWork   = putStrLn \"Time to work\"\n         schedule = hourly\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "module",
        "fct-source": "src/System-Cron.html",
        "fct-type": "module",
        "title": "Cron"
      },
      "index": {
        "description": "Toplevel module for Cron specifying cron schedule and several convenience functions for dealing with cron schedules import Control.Concurrent import Control.Monad import Data.Time.Clock import System.Cron main IO main do forever do now getCurrentTime when scheduleMatches schedule now doWork putStrLn sleeping threadDelay where doWork putStrLn Time to work schedule hourly",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "Cron",
        "normalized": "",
        "package": "cron",
        "partial": "Cron",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:CronField",
      "description": {
        "fct-descr": "\u003cp\u003eIndividual field of a cron expression.\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "data",
        "fct-source": "src/System-Cron.html#CronField",
        "fct-type": "data",
        "title": "CronField"
      },
      "index": {
        "description": "Individual field of cron expression",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "CronField",
        "normalized": "",
        "package": "cron",
        "partial": "Cron Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:CronSchedule",
      "description": {
        "fct-descr": "\u003cp\u003eSpecification for a cron expression\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "data",
        "fct-source": "src/System-Cron.html#CronSchedule",
        "fct-type": "data",
        "title": "CronSchedule"
      },
      "index": {
        "description": "Specification for cron expression",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "CronSchedule",
        "normalized": "",
        "package": "cron",
        "partial": "Cron Schedule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:Crontab",
      "description": {
        "fct-descr": "\u003cp\u003eCrontab file, omitting comments.\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "newtype",
        "fct-source": "src/System-Cron.html#Crontab",
        "fct-type": "newtype",
        "title": "Crontab"
      },
      "index": {
        "description": "Crontab file omitting comments",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "Crontab",
        "normalized": "",
        "package": "cron",
        "partial": "Crontab",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:CrontabEntry",
      "description": {
        "fct-descr": "\u003cp\u003eEssentially a line in a crontab file. It is either a schedule with a\n command after it or setting an environment variable (e.g. FOO=BAR)\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "data",
        "fct-source": "src/System-Cron.html#CrontabEntry",
        "fct-type": "data",
        "title": "CrontabEntry"
      },
      "index": {
        "description": "Essentially line in crontab file It is either schedule with command after it or setting an environment variable e.g FOO BAR",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "CrontabEntry",
        "normalized": "",
        "package": "cron",
        "partial": "Crontab Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:DayOfMonthSpec",
      "description": {
        "fct-descr": "\u003cp\u003eDay of month field of a cron expression\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "data",
        "fct-source": "src/System-Cron.html#DayOfMonthSpec",
        "fct-type": "data",
        "title": "DayOfMonthSpec"
      },
      "index": {
        "description": "Day of month field of cron expression",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "DayOfMonthSpec",
        "normalized": "",
        "package": "cron",
        "partial": "Day Of Month Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:DayOfWeekSpec",
      "description": {
        "fct-descr": "\u003cp\u003eDay of week field of a cron expression\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "data",
        "fct-source": "src/System-Cron.html#DayOfWeekSpec",
        "fct-type": "data",
        "title": "DayOfWeekSpec"
      },
      "index": {
        "description": "Day of week field of cron expression",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "DayOfWeekSpec",
        "normalized": "",
        "package": "cron",
        "partial": "Day Of Week Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:HourSpec",
      "description": {
        "fct-descr": "\u003cp\u003eHours field of a cron expression\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "data",
        "fct-source": "src/System-Cron.html#HourSpec",
        "fct-type": "data",
        "title": "HourSpec"
      },
      "index": {
        "description": "Hours field of cron expression",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "HourSpec",
        "normalized": "",
        "package": "cron",
        "partial": "Hour Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:MinuteSpec",
      "description": {
        "fct-descr": "\u003cp\u003eMinutes field of a cron expression\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "data",
        "fct-source": "src/System-Cron.html#MinuteSpec",
        "fct-type": "data",
        "title": "MinuteSpec"
      },
      "index": {
        "description": "Minutes field of cron expression",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "MinuteSpec",
        "normalized": "",
        "package": "cron",
        "partial": "Minute Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:MonthSpec",
      "description": {
        "fct-descr": "\u003cp\u003eMonth field of a cron expression\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "data",
        "fct-source": "src/System-Cron.html#MonthSpec",
        "fct-type": "data",
        "title": "MonthSpec"
      },
      "index": {
        "description": "Month field of cron expression",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "MonthSpec",
        "normalized": "",
        "package": "cron",
        "partial": "Month Spec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:CommandEntry",
      "description": {
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "CommandEntry",
        "fct-source": "src/System-Cron.html#CrontabEntry",
        "fct-type": "function",
        "title": "CommandEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "CommandEntry",
        "normalized": "",
        "package": "cron",
        "partial": "Command Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:CronSchedule",
      "description": {
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "CronSchedule",
        "fct-source": "src/System-Cron.html#CronSchedule",
        "fct-type": "function",
        "title": "CronSchedule"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "CronSchedule",
        "normalized": "",
        "package": "cron",
        "partial": "Cron Schedule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:Crontab",
      "description": {
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "Crontab [CrontabEntry]",
        "fct-source": "src/System-Cron.html#Crontab",
        "fct-type": "function",
        "title": "Crontab"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "Crontab",
        "normalized": "Crontab[CrontabEntry]",
        "package": "cron",
        "partial": "Crontab",
        "signature": "Crontab[CrontabEntry]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:DaysOfMonth",
      "description": {
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "DaysOfMonth CronField",
        "fct-source": "src/System-Cron.html#DayOfMonthSpec",
        "fct-type": "function",
        "title": "DaysOfMonth"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "DaysOfMonth",
        "normalized": "",
        "package": "cron",
        "partial": "Days Of Month",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:DaysOfWeek",
      "description": {
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "DaysOfWeek CronField",
        "fct-source": "src/System-Cron.html#DayOfWeekSpec",
        "fct-type": "function",
        "title": "DaysOfWeek"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "DaysOfWeek",
        "normalized": "",
        "package": "cron",
        "partial": "Days Of Week",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:EnvVariable",
      "description": {
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "EnvVariable",
        "fct-source": "src/System-Cron.html#CrontabEntry",
        "fct-type": "function",
        "title": "EnvVariable"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "EnvVariable",
        "normalized": "",
        "package": "cron",
        "partial": "Env Variable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:Hours",
      "description": {
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "Hours CronField",
        "fct-source": "src/System-Cron.html#HourSpec",
        "fct-type": "function",
        "title": "Hours"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "Hours",
        "normalized": "",
        "package": "cron",
        "partial": "Hours",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:ListField",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a list of expressions. Recursive lists are invalid and the parser will never produce them.\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "ListField [CronField]",
        "fct-source": "src/System-Cron.html#CronField",
        "fct-type": "function",
        "title": "ListField"
      },
      "index": {
        "description": "Matches list of expressions Recursive lists are invalid and the parser will never produce them",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "ListField",
        "normalized": "ListField[CronField]",
        "package": "cron",
        "partial": "List Field",
        "signature": "ListField[CronField]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:Minutes",
      "description": {
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "Minutes CronField",
        "fct-source": "src/System-Cron.html#MinuteSpec",
        "fct-type": "function",
        "title": "Minutes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "Minutes",
        "normalized": "",
        "package": "cron",
        "partial": "Minutes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:Months",
      "description": {
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "Months CronField",
        "fct-source": "src/System-Cron.html#MonthSpec",
        "fct-type": "function",
        "title": "Months"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "Months",
        "normalized": "",
        "package": "cron",
        "partial": "Months",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:RangeField",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a range of values (e.g. 1-3)\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "RangeField Int Int",
        "fct-source": "src/System-Cron.html#CronField",
        "fct-type": "function",
        "title": "RangeField"
      },
      "index": {
        "description": "Matches range of values e.g",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "RangeField",
        "normalized": "",
        "package": "cron",
        "partial": "Range Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:SpecificField",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a specific value (e.g. 1)\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "SpecificField Int",
        "fct-source": "src/System-Cron.html#CronField",
        "fct-type": "function",
        "title": "SpecificField"
      },
      "index": {
        "description": "Matches specific value e.g",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "SpecificField",
        "normalized": "",
        "package": "cron",
        "partial": "Specific Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:Star",
      "description": {
        "fct-descr": "\u003cp\u003eMatches anything\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "Star",
        "fct-source": "src/System-Cron.html#CronField",
        "fct-type": "function",
        "title": "Star"
      },
      "index": {
        "description": "Matches anything",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "Star",
        "normalized": "",
        "package": "cron",
        "partial": "Star",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:StepField",
      "description": {
        "fct-descr": "\u003cp\u003eMatches a stepped expression, e.g. (*/2). Recursive steps or stepped lists are invalid and the parser will never produce them.\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "StepField CronField Int",
        "fct-source": "src/System-Cron.html#CronField",
        "fct-type": "function",
        "title": "StepField"
      },
      "index": {
        "description": "Matches stepped expression e.g Recursive steps or stepped lists are invalid and the parser will never produce them",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "StepField",
        "normalized": "",
        "package": "cron",
        "partial": "Step Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:command",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "Text",
        "fct-source": "src/System-Cron.html#CrontabEntry",
        "fct-type": "function",
        "title": "command"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "command",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:daily",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for every day at midnight. Parsed with @daily\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "CronSchedule",
        "fct-source": "src/System-Cron.html#daily",
        "fct-type": "function",
        "title": "daily"
      },
      "index": {
        "description": "Shorthand for every day at midnight Parsed with daily",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "daily",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:dayOfMonth",
      "description": {
        "fct-descr": "\u003cp\u003eWhich days of the month to run. Third field in a cron specification.\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "DayOfMonthSpec",
        "fct-source": "src/System-Cron.html#CronSchedule",
        "fct-type": "function",
        "title": "dayOfMonth"
      },
      "index": {
        "description": "Which days of the month to run Third field in cron specification",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "dayOfMonth",
        "normalized": "",
        "package": "cron",
        "partial": "Of Month",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:dayOfWeek",
      "description": {
        "fct-descr": "\u003cp\u003eWhich days of the week to run. Fifth field in a cron specification.\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "DayOfWeekSpec",
        "fct-source": "src/System-Cron.html#CronSchedule",
        "fct-type": "function",
        "title": "dayOfWeek"
      },
      "index": {
        "description": "Which days of the week to run Fifth field in cron specification",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "dayOfWeek",
        "normalized": "",
        "package": "cron",
        "partial": "Of Week",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:everyMinute",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for an expression that always matches. Parsed with * * * * *\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "CronSchedule",
        "fct-source": "src/System-Cron.html#everyMinute",
        "fct-type": "function",
        "title": "everyMinute"
      },
      "index": {
        "description": "Shorthand for an expression that always matches Parsed with",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "everyMinute",
        "normalized": "",
        "package": "cron",
        "partial": "Minute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:hour",
      "description": {
        "fct-descr": "\u003cp\u003eWhich hours to run. Second field in a cron specification.\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "HourSpec",
        "fct-source": "src/System-Cron.html#CronSchedule",
        "fct-type": "function",
        "title": "hour"
      },
      "index": {
        "description": "Which hours to run Second field in cron specification",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "hour",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:hourly",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for every hour on the hour. Parsed with @hourly\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "CronSchedule",
        "fct-source": "src/System-Cron.html#hourly",
        "fct-type": "function",
        "title": "hourly"
      },
      "index": {
        "description": "Shorthand for every hour on the hour Parsed with hourly",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "hourly",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:minute",
      "description": {
        "fct-descr": "\u003cp\u003eWhich minutes to run. First field in a cron specification.\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "MinuteSpec",
        "fct-source": "src/System-Cron.html#CronSchedule",
        "fct-type": "function",
        "title": "minute"
      },
      "index": {
        "description": "Which minutes to run First field in cron specification",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "minute",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:month",
      "description": {
        "fct-descr": "\u003cp\u003eWhich months to run. Fourth field in a cron specification.\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "MonthSpec",
        "fct-source": "src/System-Cron.html#CronSchedule",
        "fct-type": "function",
        "title": "month"
      },
      "index": {
        "description": "Which months to run Fourth field in cron specification",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "month",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:monthly",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for every 1st of the month at midnight. Parsed with @monthly\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "CronSchedule",
        "fct-source": "src/System-Cron.html#monthly",
        "fct-type": "function",
        "title": "monthly"
      },
      "index": {
        "description": "Shorthand for every st of the month at midnight Parsed with monthly",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "monthly",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:schedule",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "CronSchedule",
        "fct-source": "src/System-Cron.html#CrontabEntry",
        "fct-type": "function",
        "title": "schedule"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "schedule",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:scheduleMatches",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines if the given time is matched by the given schedule. A\n periodical task would use this to determine if an action needs to be\n performed at the current time or not.\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "CronSchedule -\u003e UTCTime -\u003e Bool",
        "fct-source": "src/System-Cron.html#scheduleMatches",
        "fct-type": "function",
        "title": "scheduleMatches"
      },
      "index": {
        "description": "Determines if the given time is matched by the given schedule periodical task would use this to determine if an action needs to be performed at the current time or not",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "scheduleMatches",
        "normalized": "CronSchedule-\u003eUTCTime-\u003eBool",
        "package": "cron",
        "partial": "Matches",
        "signature": "CronSchedule-\u003eUTCTime-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:varName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "Text",
        "fct-source": "src/System-Cron.html#CrontabEntry",
        "fct-type": "function",
        "title": "varName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "varName",
        "normalized": "",
        "package": "cron",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:varValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "Text",
        "fct-source": "src/System-Cron.html#CrontabEntry",
        "fct-type": "function",
        "title": "varValue"
      },
      "index": {
        "description": "",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "varValue",
        "normalized": "",
        "package": "cron",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:weekly",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for every sunday at midnight. Parsed with @weekly\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "CronSchedule",
        "fct-source": "src/System-Cron.html#weekly",
        "fct-type": "function",
        "title": "weekly"
      },
      "index": {
        "description": "Shorthand for every sunday at midnight Parsed with weekly",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "weekly",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:yearly",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for every January 1st at midnight. Parsed with @yearly\n\u003c/p\u003e",
        "fct-module": "System.Cron",
        "fct-package": "cron",
        "fct-signature": "CronSchedule",
        "fct-source": "src/System-Cron.html#yearly",
        "fct-type": "function",
        "title": "yearly"
      },
      "index": {
        "description": "Shorthand for every January st at midnight Parsed with yearly",
        "hierarchy": "System Cron",
        "module": "System.Cron",
        "name": "yearly",
        "normalized": "",
        "package": "cron",
        "partial": "",
        "signature": ""
      }
    }
  }
]