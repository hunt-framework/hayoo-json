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
        "word": "cron"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAttoparsec parser combinator for cron schedules. See cron documentation for\n how those are formatted.\n\u003c/p\u003e\u003cpre\u003e import Data.Attoparsec.Text (parseOnly)\n import System.Cron.Parser\n \n main :: IO ()\n main = do\n   print $ parseOnly cronSchedule \"*/2 * 3 * 4,5,6\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Cron.Parser",
          "name": "Parser",
          "package": "cron",
          "source": "src/System-Cron-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Attoparsec parser combinator for cron schedules See cron documentation for how those are formatted import Data.Attoparsec.Text parseOnly import System.Cron.Parser main IO main do print parseOnly cronSchedule",
          "hierarchy": "System Cron Parser",
          "module": "System.Cron.Parser",
          "name": "Parser",
          "package": "cron",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttoparsec Parser for a cron schedule. Complies fully with the standard\n cron format.  Also includes the following shorthand formats which cron also\n supports: @yearly, @monthly, @weekly, @daily, @hourly. Note that this\n parser will fail if there is extraneous input. This is to prevent things\n like extra fields. If you want a more lax parser, use \u003ccode\u003e\u003ca\u003ecronScheduleLoose\u003c/a\u003e\u003c/code\u003e,\n which is fine with extra input.\n\u003c/p\u003e",
          "module": "System.Cron.Parser",
          "name": "cronSchedule",
          "package": "cron",
          "signature": "Parser CronSchedule",
          "source": "src/System-Cron-Parser.html#cronSchedule",
          "type": "function"
        },
        "index": {
          "description": "Attoparsec Parser for cron schedule Complies fully with the standard cron format Also includes the following shorthand formats which cron also supports yearly monthly weekly daily hourly Note that this parser will fail if there is extraneous input This is to prevent things like extra fields If you want more lax parser use cronScheduleLoose which is fine with extra input",
          "hierarchy": "System Cron Parser",
          "module": "System.Cron.Parser",
          "name": "cronSchedule",
          "package": "cron",
          "partial": "Schedule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron-Parser.html#v:cronSchedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ecronSchedule\u003c/a\u003e\u003c/code\u003e but does not fail on extraneous input.\n\u003c/p\u003e",
          "module": "System.Cron.Parser",
          "name": "cronScheduleLoose",
          "package": "cron",
          "signature": "Parser CronSchedule",
          "source": "src/System-Cron-Parser.html#cronScheduleLoose",
          "type": "function"
        },
        "index": {
          "description": "Same as cronSchedule but does not fail on extraneous input",
          "hierarchy": "System Cron Parser",
          "module": "System.Cron.Parser",
          "name": "cronScheduleLoose",
          "package": "cron",
          "partial": "Schedule Loose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron-Parser.html#v:cronScheduleLoose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a full crontab file, omitting comments and including environment\n variable sets (e.g FOO=BAR).\n\u003c/p\u003e",
          "module": "System.Cron.Parser",
          "name": "crontab",
          "package": "cron",
          "signature": "Parser Crontab",
          "source": "src/System-Cron-Parser.html#crontab",
          "type": "function"
        },
        "index": {
          "description": "Parses full crontab file omitting comments and including environment variable sets e.g FOO BAR",
          "hierarchy": "System Cron Parser",
          "module": "System.Cron.Parser",
          "name": "crontab",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron-Parser.html#v:crontab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an individual crontab line, which is either a scheduled command or\n an environmental variable set.\n\u003c/p\u003e",
          "module": "System.Cron.Parser",
          "name": "crontabEntry",
          "package": "cron",
          "signature": "Parser CrontabEntry",
          "source": "src/System-Cron-Parser.html#crontabEntry",
          "type": "function"
        },
        "index": {
          "description": "Parses an individual crontab line which is either scheduled command or an environmental variable set",
          "hierarchy": "System Cron Parser",
          "module": "System.Cron.Parser",
          "name": "crontabEntry",
          "package": "cron",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron-Parser.html#v:crontabEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eToplevel module for Cron specifying a cron schedule and several convenience\n functions for dealing with cron schedules\n\u003c/p\u003e\u003cpre\u003e import Control.Concurrent\n import Control.Monad\n import Data.Time.Clock\n import System.Cron\n \n main :: IO ()\n main = do\n   forever do\n     now \u003c- getCurrentTime\n     when (scheduleMatches schedule now) doWork\n     putStrLn \"sleeping\"\n     threadDelay 100000\n   where doWork   = putStrLn \"Time to work\"\n         schedule = hourly\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Cron",
          "name": "Cron",
          "package": "cron",
          "source": "src/System-Cron.html",
          "type": "module"
        },
        "index": {
          "description": "Toplevel module for Cron specifying cron schedule and several convenience functions for dealing with cron schedules import Control.Concurrent import Control.Monad import Data.Time.Clock import System.Cron main IO main do forever do now getCurrentTime when scheduleMatches schedule now doWork putStrLn sleeping threadDelay where doWork putStrLn Time to work schedule hourly",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "Cron",
          "package": "cron",
          "partial": "Cron",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndividual field of a cron expression.\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "CronField",
          "package": "cron",
          "source": "src/System-Cron.html#CronField",
          "type": "data"
        },
        "index": {
          "description": "Individual field of cron expression",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "CronField",
          "package": "cron",
          "partial": "Cron Field",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:CronField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecification for a cron expression\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "CronSchedule",
          "package": "cron",
          "source": "src/System-Cron.html#CronSchedule",
          "type": "data"
        },
        "index": {
          "description": "Specification for cron expression",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "CronSchedule",
          "package": "cron",
          "partial": "Cron Schedule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:CronSchedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCrontab file, omitting comments.\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "Crontab",
          "package": "cron",
          "source": "src/System-Cron.html#Crontab",
          "type": "newtype"
        },
        "index": {
          "description": "Crontab file omitting comments",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "Crontab",
          "package": "cron",
          "partial": "Crontab",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:Crontab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEssentially a line in a crontab file. It is either a schedule with a\n command after it or setting an environment variable (e.g. FOO=BAR)\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "CrontabEntry",
          "package": "cron",
          "source": "src/System-Cron.html#CrontabEntry",
          "type": "data"
        },
        "index": {
          "description": "Essentially line in crontab file It is either schedule with command after it or setting an environment variable e.g FOO BAR",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "CrontabEntry",
          "package": "cron",
          "partial": "Crontab Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:CrontabEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDay of month field of a cron expression\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "DayOfMonthSpec",
          "package": "cron",
          "source": "src/System-Cron.html#DayOfMonthSpec",
          "type": "data"
        },
        "index": {
          "description": "Day of month field of cron expression",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "DayOfMonthSpec",
          "package": "cron",
          "partial": "Day Of Month Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:DayOfMonthSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDay of week field of a cron expression\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "DayOfWeekSpec",
          "package": "cron",
          "source": "src/System-Cron.html#DayOfWeekSpec",
          "type": "data"
        },
        "index": {
          "description": "Day of week field of cron expression",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "DayOfWeekSpec",
          "package": "cron",
          "partial": "Day Of Week Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:DayOfWeekSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHours field of a cron expression\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "HourSpec",
          "package": "cron",
          "source": "src/System-Cron.html#HourSpec",
          "type": "data"
        },
        "index": {
          "description": "Hours field of cron expression",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "HourSpec",
          "package": "cron",
          "partial": "Hour Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:HourSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinutes field of a cron expression\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "MinuteSpec",
          "package": "cron",
          "source": "src/System-Cron.html#MinuteSpec",
          "type": "data"
        },
        "index": {
          "description": "Minutes field of cron expression",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "MinuteSpec",
          "package": "cron",
          "partial": "Minute Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:MinuteSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonth field of a cron expression\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "MonthSpec",
          "package": "cron",
          "source": "src/System-Cron.html#MonthSpec",
          "type": "data"
        },
        "index": {
          "description": "Month field of cron expression",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "MonthSpec",
          "package": "cron",
          "partial": "Month Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#t:MonthSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "CommandEntry",
          "package": "cron",
          "signature": "CommandEntry",
          "source": "src/System-Cron.html#CrontabEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "CommandEntry",
          "package": "cron",
          "partial": "Command Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:CommandEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "CronSchedule",
          "package": "cron",
          "signature": "CronSchedule",
          "source": "src/System-Cron.html#CronSchedule",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "CronSchedule",
          "package": "cron",
          "partial": "Cron Schedule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:CronSchedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "Crontab",
          "package": "cron",
          "signature": "Crontab [CrontabEntry]",
          "source": "src/System-Cron.html#Crontab",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "Crontab",
          "normalized": "Crontab[CrontabEntry]",
          "package": "cron",
          "partial": "Crontab",
          "signature": "Crontab[CrontabEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:Crontab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "DaysOfMonth",
          "package": "cron",
          "signature": "DaysOfMonth CronField",
          "source": "src/System-Cron.html#DayOfMonthSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "DaysOfMonth",
          "package": "cron",
          "partial": "Days Of Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:DaysOfMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "DaysOfWeek",
          "package": "cron",
          "signature": "DaysOfWeek CronField",
          "source": "src/System-Cron.html#DayOfWeekSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "DaysOfWeek",
          "package": "cron",
          "partial": "Days Of Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:DaysOfWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "EnvVariable",
          "package": "cron",
          "signature": "EnvVariable",
          "source": "src/System-Cron.html#CrontabEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "EnvVariable",
          "package": "cron",
          "partial": "Env Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:EnvVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "Hours",
          "package": "cron",
          "signature": "Hours CronField",
          "source": "src/System-Cron.html#HourSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "Hours",
          "package": "cron",
          "partial": "Hours",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:Hours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a list of expressions. Recursive lists are invalid and the parser will never produce them.\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "ListField",
          "package": "cron",
          "signature": "ListField [CronField]",
          "source": "src/System-Cron.html#CronField",
          "type": "function"
        },
        "index": {
          "description": "Matches list of expressions Recursive lists are invalid and the parser will never produce them",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "ListField",
          "normalized": "ListField[CronField]",
          "package": "cron",
          "partial": "List Field",
          "signature": "ListField[CronField]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:ListField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "Minutes",
          "package": "cron",
          "signature": "Minutes CronField",
          "source": "src/System-Cron.html#MinuteSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "Minutes",
          "package": "cron",
          "partial": "Minutes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:Minutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "Months",
          "package": "cron",
          "signature": "Months CronField",
          "source": "src/System-Cron.html#MonthSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "Months",
          "package": "cron",
          "partial": "Months",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:Months"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a range of values (e.g. 1-3)\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "RangeField",
          "package": "cron",
          "signature": "RangeField Int Int",
          "source": "src/System-Cron.html#CronField",
          "type": "function"
        },
        "index": {
          "description": "Matches range of values e.g",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "RangeField",
          "package": "cron",
          "partial": "Range Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:RangeField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a specific value (e.g. 1)\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "SpecificField",
          "package": "cron",
          "signature": "SpecificField Int",
          "source": "src/System-Cron.html#CronField",
          "type": "function"
        },
        "index": {
          "description": "Matches specific value e.g",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "SpecificField",
          "package": "cron",
          "partial": "Specific Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:SpecificField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches anything\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "Star",
          "package": "cron",
          "signature": "Star",
          "source": "src/System-Cron.html#CronField",
          "type": "function"
        },
        "index": {
          "description": "Matches anything",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "Star",
          "package": "cron",
          "partial": "Star",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:Star"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches a stepped expression, e.g. (*/2). Recursive steps or stepped lists are invalid and the parser will never produce them.\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "StepField",
          "package": "cron",
          "signature": "StepField CronField Int",
          "source": "src/System-Cron.html#CronField",
          "type": "function"
        },
        "index": {
          "description": "Matches stepped expression e.g Recursive steps or stepped lists are invalid and the parser will never produce them",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "StepField",
          "package": "cron",
          "partial": "Step Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:StepField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "command",
          "package": "cron",
          "signature": "Text",
          "source": "src/System-Cron.html#CrontabEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "command",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for every day at midnight. Parsed with @daily\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "daily",
          "package": "cron",
          "signature": "CronSchedule",
          "source": "src/System-Cron.html#daily",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for every day at midnight Parsed with daily",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "daily",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:daily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich days of the month to run. Third field in a cron specification.\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "dayOfMonth",
          "package": "cron",
          "signature": "DayOfMonthSpec",
          "source": "src/System-Cron.html#CronSchedule",
          "type": "function"
        },
        "index": {
          "description": "Which days of the month to run Third field in cron specification",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "dayOfMonth",
          "package": "cron",
          "partial": "Of Month",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:dayOfMonth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich days of the week to run. Fifth field in a cron specification.\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "dayOfWeek",
          "package": "cron",
          "signature": "DayOfWeekSpec",
          "source": "src/System-Cron.html#CronSchedule",
          "type": "function"
        },
        "index": {
          "description": "Which days of the week to run Fifth field in cron specification",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "dayOfWeek",
          "package": "cron",
          "partial": "Of Week",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:dayOfWeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for an expression that always matches. Parsed with * * * * *\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "everyMinute",
          "package": "cron",
          "signature": "CronSchedule",
          "source": "src/System-Cron.html#everyMinute",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for an expression that always matches Parsed with",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "everyMinute",
          "package": "cron",
          "partial": "Minute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:everyMinute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich hours to run. Second field in a cron specification.\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "hour",
          "package": "cron",
          "signature": "HourSpec",
          "source": "src/System-Cron.html#CronSchedule",
          "type": "function"
        },
        "index": {
          "description": "Which hours to run Second field in cron specification",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "hour",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:hour"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for every hour on the hour. Parsed with @hourly\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "hourly",
          "package": "cron",
          "signature": "CronSchedule",
          "source": "src/System-Cron.html#hourly",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for every hour on the hour Parsed with hourly",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "hourly",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:hourly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich minutes to run. First field in a cron specification.\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "minute",
          "package": "cron",
          "signature": "MinuteSpec",
          "source": "src/System-Cron.html#CronSchedule",
          "type": "function"
        },
        "index": {
          "description": "Which minutes to run First field in cron specification",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "minute",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:minute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhich months to run. Fourth field in a cron specification.\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "month",
          "package": "cron",
          "signature": "MonthSpec",
          "source": "src/System-Cron.html#CronSchedule",
          "type": "function"
        },
        "index": {
          "description": "Which months to run Fourth field in cron specification",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "month",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:month"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for every 1st of the month at midnight. Parsed with @monthly\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "monthly",
          "package": "cron",
          "signature": "CronSchedule",
          "source": "src/System-Cron.html#monthly",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for every st of the month at midnight Parsed with monthly",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "monthly",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:monthly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "schedule",
          "package": "cron",
          "signature": "CronSchedule",
          "source": "src/System-Cron.html#CrontabEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "schedule",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:schedule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines if the given time is matched by the given schedule. A\n periodical task would use this to determine if an action needs to be\n performed at the current time or not.\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "scheduleMatches",
          "package": "cron",
          "signature": "CronSchedule -\u003e UTCTime -\u003e Bool",
          "source": "src/System-Cron.html#scheduleMatches",
          "type": "function"
        },
        "index": {
          "description": "Determines if the given time is matched by the given schedule periodical task would use this to determine if an action needs to be performed at the current time or not",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "scheduleMatches",
          "normalized": "CronSchedule-\u003eUTCTime-\u003eBool",
          "package": "cron",
          "partial": "Matches",
          "signature": "CronSchedule-\u003eUTCTime-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:scheduleMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "varName",
          "package": "cron",
          "signature": "Text",
          "source": "src/System-Cron.html#CrontabEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "varName",
          "package": "cron",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:varName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Cron",
          "name": "varValue",
          "package": "cron",
          "signature": "Text",
          "source": "src/System-Cron.html#CrontabEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "varValue",
          "package": "cron",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:varValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for every sunday at midnight. Parsed with @weekly\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "weekly",
          "package": "cron",
          "signature": "CronSchedule",
          "source": "src/System-Cron.html#weekly",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for every sunday at midnight Parsed with weekly",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "weekly",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:weekly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for every January 1st at midnight. Parsed with @yearly\n\u003c/p\u003e",
          "module": "System.Cron",
          "name": "yearly",
          "package": "cron",
          "signature": "CronSchedule",
          "source": "src/System-Cron.html#yearly",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for every January st at midnight Parsed with yearly",
          "hierarchy": "System Cron",
          "module": "System.Cron",
          "name": "yearly",
          "package": "cron",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cron/docs/System-Cron.html#v:yearly"
      }
    }
  ]
]