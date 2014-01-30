[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a set of functions for building simple command-line interfaces. It allows interfaces which collect values (such as Integers, Dates, or other structured values), build lists of values, and use simple menus. It is not intended to build complex interfaces with full cursor control. It is oriented towards line-based interfaces.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eRequests\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe central concept of the library is the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e type, which embodies an interactive request for data. When requesting data, there is always the possibility of failure. That is, the user may enter a value that doesn't parse, or may want to quit the process. For this reason, the value stored by a request is \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e (\u003ca\u003eMaybe a\u003c/a\u003e)\u003c/code\u003e, which shows there may not always be a value available. \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e is a monad, and when a request fails, no subsequent requests are asked. Instead, the whole request chain is abandoned.\n\u003c/p\u003e\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ereqResp\u003c/a\u003e\u003c/code\u003e gives the most basic request possible, which is for a string. From this, other requests can be built. The library provides several:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqInt\u003c/a\u003e\u003c/code\u003e - Requests \u003ca\u003eInt\u003c/a\u003e values.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqInteger\u003c/a\u003e\u003c/code\u003e - Requests \u003ca\u003eInteger\u003c/a\u003e values.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqRead\u003c/a\u003e\u003c/code\u003e - Requests \u003ca\u003eRead\u003c/a\u003e-able values.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqList\u003c/a\u003e\u003c/code\u003e - Asks a request repeatedly and builds a list of the responses, which are returned when the user\n    enters a failure value.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqMenu\u003c/a\u003e\u003c/code\u003e - Given a list of items, asks the user to pick one of the items and returns it.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqFail\u003c/a\u003e\u003c/code\u003e - Always results in failure. Useful in menus for creating a \"quit\" or \"none\" selection.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eA number of request patterns are also exported by the module. These embody different control schemes that are useful when building command-line interfaces. These include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqIf\u003c/a\u003e\u003c/code\u003e - Takes a request which evaluates to a boolean and two requests representing \"then\" and \"else\" branches. The appropriate subsequent request is used, based on the value of the conditional request.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqAgree\u003c/a\u003e\u003c/code\u003e - Takes a request and determines if the user answers yes or no. A default can also be provided.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqForever\u003c/a\u003e\u003c/code\u003e - Takes a request and asks it over and over, until a failure value appears.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqIterate\u003c/a\u003e\u003c/code\u003e - Takes a function which, given a value, produces a request. An initial \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e value is also provided. The initial value is given to the function, and the value produced by the function is fed back into it. This continues until a failure occurs. This model is useful for shell-type applications which take a state, operate on it, and produce a new state, which is then fed back in.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqCont\u003c/a\u003e\u003c/code\u003e - Takes a request and a \"continuation\" request. If the first request fails, the \"continuation\" request is run. This is useful for confirming if the user really wants to quit an application, or other escape mechanisms. \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eRunning Requests\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eRequests can be run with two different functions:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eexecReq\u003c/a\u003e\u003c/code\u003e - Takes a request, runs it, and returns a meaningless value. This is most often used to run a request from 'main'.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003erunRequest\u003c/a\u003e\u003c/code\u003e - Runs a request and returns the raw \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e (\u003ca\u003eMaybe a\u003c/a\u003e)\u003c/code\u003e value returned. This is useful for   running a request and extracting the value returned out of it.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003ePrompting\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eIn most req functions, except \u003ccode\u003e\u003ca\u003ereqMenu\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereqChoices\u003c/a\u003e\u003c/code\u003e, nothing is printed to the screen. Instead, a set of functions is provided which take a request and a string to use as a prompt. These functions include:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eprompt\u003c/a\u003e\u003c/code\u003e - Displays a message and gets a response. If the message ends in a space, it is assumed that input should be typed on the same line. Otherwise, a newline is printed and input is then gathered.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eprompt1\u003c/a\u003e\u003c/code\u003e -- Simple way to ask for a response and provide a default.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epromptAgree\u003c/a\u003e\u003c/code\u003e -- Simple way to ask for a yes/no response.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eSimple Programs\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eGetting values combines prompting and requests. Here's a 'guess a number' game which probably isn't real fun (from examples\\guess_num.hs):\n\u003c/p\u003e\u003cpre\u003e guess_num_boring =\n     do\n       num \u003c- prompt \"Enter your guess between 1 - 100: \" reqInt\n       if num == 50\n         then reqIO $ putStrLn \"You win!\"\n         else reqIO $ putStrLn \"Too bad!\"\n\u003c/pre\u003e\u003cp\u003eTo run the program, type \u003ccode\u003eplay_game guess_num_boring\u003c/code\u003e at the prompt. A better program might actually randomize the number, and tell you if you are low or high (again from examples\\guess_num.hs):\n\u003c/p\u003e\u003cpre\u003e guess_num_fun =\n       do\n         target \u003c- reqIO $ getStdRandom (randomR (1::Integer,100))\n         let guessed val =\n               case compare target val of\n                 GT -\u003e do { reqIO $ putStrLn \"Too low!\"; return False }\n                 LT -\u003e do { reqIO $ putStrLn \"Too high!\"; return False }\n                 EQ -\u003e do { reqIO $ putStrLn \"You win!\"; return True }\n         reqUntil guessed (prompt \"Enter a number between 1 and 100: \" reqInteger)\n \n play_game game = execReq game\n\u003c/pre\u003e\u003cp\u003eTo run the program, type \u003ccode\u003eplay_game guess_num_fun\u003c/code\u003e at the prompt. Several features of this program are worth pointing out:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqIO\u003c/a\u003e\u003c/code\u003e - This function is used to lift IO operations into the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e type.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqUntil\u003c/a\u003e\u003c/code\u003e - This function takes a condition and a request, and runs the request until the condition is satisfied. The conditional has the type \u003ccode\u003e(a -\u003e Request b)\u003c/code\u003e, which allows the conditional to produce output, or base its decision on other requests. Naturally, the second argument has the type \u003ccode\u003e(Request a)\u003c/code\u003e, which means the result of the request can be passed to the condition. Other functions which wrap up input patterns are \u003ccode\u003e\u003ca\u003ereqFoldl\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereqList\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereqCont\u003c/a\u003e\u003c/code\u003e, and others.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eCombining Requests\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe functions in this library are designed to allow more complex \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e values to be built from them. For example, imagine you are coding for a tax form submission and have a data type like this (from examples\\taxpayer.hs):\n\u003c/p\u003e\u003cpre\u003e  data Taxpayer = Taxpayer { name :: String, age :: Int, ssn :: String }\n   deriving (Read, Show)\n\u003c/pre\u003e\u003cp\u003eBecause \u003ccode\u003eTaxpayer\u003c/code\u003e derives \u003ca\u003eRead\u003c/a\u003e, a simple way of collecting a \u003ccode\u003eTaxpayer\u003c/code\u003e value from the user would be:\n\u003c/p\u003e\u003cpre\u003e reqTaxpayer :: Request Taxpayer\n reqTaxpayer = prompt \"Please enter tax payer information: \" (reqRead reqResp)\n\u003c/pre\u003e\u003cp\u003eOf course, this isn't very friendly:\n\u003c/p\u003e\u003cpre\u003e *Main\u003e getTaxpayer reqTaxpayer\n Please enter tax payer information: Taxpayer {name=\"John\", age = 30, ssn = \"\" }\n You entered: Taxpayer {name = \"John\", age = 30, ssn = \"\"}\n\u003c/pre\u003e\u003cp\u003eTyping \u003ccode\u003eTaxpayer { name = \"John\" ... }\u003c/code\u003e each time\nis pretty tedious. A better solution builds the value from simpler pieces:\n\u003c/p\u003e\u003cpre\u003e reqTaxpayerEasy :: Request Taxpayer\n reqTaxpayerEasy =\n   do\n     name \u003c- prompt \"Please enter the tax payer's name: \" reqResp\n     age \u003c- prompt \"Please enter their age: \" reqInt\n     ssn \u003c- prompt \"What is their SSN/ASN: \" reqResp\n     return (Taxpayer name age ssn)\n\u003c/pre\u003e\u003cp\u003eNow, when tax payer info must be entered a nice set of prompts is displayed:\n\u003c/p\u003e\u003cpre\u003e *Main\u003e getTaxpayer reqTaxpayerEasy\n Please enter the tax payer's name: Bob\n Please enter their age: 50\n Please enter their SSN/ASN: 111-11-1111\n You entered: Taxpayer {name = \"Bob\", age = 50, ssn = \"111-11-1111\"}\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eValidation\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eHCL provides the \u003ccode\u003e\u003ca\u003ereqWhile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereqUntil\u003c/a\u003e\u003c/code\u003e functions which help ensure values entered are correct. For example, in the above, we could validate SSN's fairly easily like so (again, from example\\tax_payer.hs):\n\u003c/p\u003e\u003cpre\u003e reqSSN :: Request String -\u003e Request String\n reqSSN req =\n   do\n     -- very simple validation\n     let\n       matchSSN = matchRegex (mkRegex \"^...-..-....$\")\n       invalidSSN ssn = return $ isNothing (matchSSN ssn)\n     ssn \u003c- reqWhile invalidSSN req\n     return ssn\n\u003c/pre\u003e\u003cp\u003eIn the above, \u003ccode\u003e\u003ca\u003ereqWhile\u003c/a\u003e\u003c/code\u003e repeatedly uses \u003ccode\u003einvalidSSN\u003c/code\u003e to determine if the value entered matches the (very simple) regular expression provided. When it does, the SSN entered is returned. Until then, the request is asked over and over. One subtlety to note is that a request to get the actual value is passed in to the function as \u003ccode\u003ereq\u003c/code\u003e. This allows the function \u003ccode\u003ereqTaxpayerValidate\u003c/code\u003e to pass it's own prompt and request into reqSSN:\n\u003c/p\u003e\u003cpre\u003e reqTaxpayerValidate :: Request Taxpayer\n reqTaxpayerValidate =\n   do\n     name \u003c- prompt \"Please enter the tax payer's name: \" reqResp\n     age \u003c- prompt \"Please enter their age: \" reqInt\n     ssn \u003c- reqSSN (prompt \"What is their SSN/ASN: \" reqResp)\n     return (Taxpayer name age ssn)\n\u003c/pre\u003e\u003cp\u003eRunning \u003ccode\u003ereqTaxpayerValidate\u003c/code\u003e from the prompt then gives:\n\u003c/p\u003e\u003cpre\u003e *Main\u003e getTaxpayer reqTaxpayerValidate\n Please enter the tax payer's name: Bob\n Please enter their age: 20\n What is their SSN/ASN: 324=12=1231\n What is their SSN/ASN: 324-12-1211\n You entered: Taxpayer {name = \"Bob\", age = 20, ssn = \"324-12-1211\"}\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eDealing with Failure\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eA fundamental assumption of the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e type is that requests can fail. The user can enter no input or provide bad input. The discussion of validation above is a bit disingenuous because it does not mention what happens when the user just types a newline at the prompt. In all cases, the request chain ends and the program exits.\n\u003c/p\u003e\u003cp\u003eThis is due to the behavior of the \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e monad - as soon as one request fails, the rest fail. The library provides several functions for dealing with this:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqDefault\u003c/a\u003e\u003c/code\u003e - Allows a default value to be supplied, which will be returned if the user provides no input or bad input.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003erequired\u003c/a\u003e\u003c/code\u003e - Repeatedly asks a request until the user provides input. \"Failure\" values will not occur.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqCont\u003c/a\u003e\u003c/code\u003e - Takes two request arguments. If the first fails, the second is used. Useful for providing a \"continuation\" to a request chain.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqWhich\u003c/a\u003e\u003c/code\u003e - Indicates if a request failed or not, through the use of the \u003ca\u003eEither\u003c/a\u003e type. There is no direct way to determine if a request failed (that is, if it evaluates to Nothing, the entire chain fails and you won't see it). This function allows some visibility into if a specific request succeeded or not.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOne use for \u003ccode\u003e\u003ca\u003ereqCont\u003c/a\u003e\u003c/code\u003e is to confirm if the user really wants to quit a program.  In the guess-a-number game, hitting Enter at a prompt stops the game. This can be avoided by changing how the guess a number game is launched:\n\u003c/p\u003e\u003cpre\u003e guess_num_cont =\n     reqCont guess_num_fun confirm\n   where\n     confirm =\n       reqIf (promptAgree \"Are you sure you want to quit? \" (Just False) reqResp)\n         reqFail\n         guess_num_cont\n\u003c/pre\u003e\u003cp\u003eAbove, \u003ccode\u003e\u003ca\u003ereqCont\u003c/a\u003e\u003c/code\u003e will run \u003ccode\u003eguess_num_fun\u003c/code\u003e until it returns a \u003ccode\u003eJust\u003c/code\u003e value. If \u003ccode\u003eNothing\u003c/code\u003e is returned, then \u003ccode\u003ereqConfirm\u003c/code\u003e is run. If the user does not wish to quit, \u003ccode\u003ereqConfirm\u003c/code\u003e will run \u003ccode\u003eguess_num_confirm\u003c/code\u003e again. Otherwise, \u003ccode\u003e\u003ca\u003ereqFail\u003c/a\u003e\u003c/code\u003e is run, which causes the request to fail and thus the program to exit. Notice that the confirmation behavior was added by just adding another layer to the request chain. The \u003ccode\u003eguess_num_fun\u003c/code\u003e function was used to provide gameplay - \u003ccode\u003eguess_num_confirm\u003c/code\u003e just added a layer to control when the game ends.\n\u003c/p\u003e\u003cp\u003eHowever, because this pattern is fairly common, HCL provides the \u003ccode\u003e\u003ca\u003ereqConfirm\u003c/a\u003e\u003c/code\u003e function, which acts just like the \u003ccode\u003e\u003ca\u003ereqCont\u003c/a\u003e\u003c/code\u003e pattern above. That is, it takes a request to run and a request which returns a \u003ca\u003eBool\u003c/a\u003e. If the initial request fails, the confirmation request is run. If that request results in \u003ccode\u003eTrue\u003c/code\u003e, the failure is allowed to propagate. Otherwise, the initial request is run again. The function \u003ccode\u003eguess_num_confirm\u003c/code\u003e gives an example of its usage:\n\u003c/p\u003e\u003cpre\u003e guess_num_confirm =\n     reqConfirm confirm guess_num_fun \n   where\n     confirm = promptAgree \"Are you sure you want to quit? \" (Just False) reqResp\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eMaking Menus\u003c/em\u003e  \n\u003c/p\u003e\u003cp\u003eSeveral functions are used to build simple, hierarchical menus. A menu is defined as a list of pairs, where the first element is the label and the second a value to return. Usually, that value is a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e. In some cases it is not. There are two functions used for building menus:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqChoices\u003c/a\u003e\u003c/code\u003e - A low-level means to build menus. It does not expect the second item in the pair to be a request, and is thus very general. \n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqMenu\u003c/a\u003e\u003c/code\u003e - Expects the list given to be a pair of a string and another request. When an item is   selected, that request is run and the value is returned.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqSubMenu\u003c/a\u003e\u003c/code\u003e - Inserts a menu into a menu. When the item for the submenu is selected, the submenu will display its choices. When the user wishes to exit (by providing a failure value), the previously displayed menu will display again.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqMenuItem\u003c/a\u003e\u003c/code\u003e - Constructs an indvidual menu item.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqMenuEnd\u003c/a\u003e\u003c/code\u003e - Indicates the end of a list of menu items.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqMenuExit\u003c/a\u003e\u003c/code\u003e - A specialized menu item which will cause the menu request to fail. That means we return to the previous menu or exit the request chain altogether, depending on how the menus are structured.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ereqMenu\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ereqSubMenu\u003c/a\u003e\u003c/code\u003e work together to build hierarchical menus in which the user can automatically navigate \"up\" by just hitting return. For example, imagine a simple menu-driven PIM:\n\u003c/p\u003e\u003cpre\u003e *Main\u003e pim\n 1. Manage contacts\n 2. Manage calendar\n ? 1\n 1. Add a contact\n 2. Remove a contact\n ? \u003c-- User hits return here, returns to main menu\n 1. Manage contacts\n 2. Manage calendar\n ?\n\u003c/pre\u003e\u003cp\u003eSetting this up is fairly straightforward (from examples\\pim.hs):\n\u003c/p\u003e\u003cpre\u003e pim = execReq $ reqConfirm confirm topMenu \n   where\n     confirm = promptAgree \"Are you sure you want to quit?\" (Just False) reqResp\n     \n topMenu =\n   reqMenu $\n   -- Insert a submenu defined elsewhere\n   reqSubMenu topMenu \"Manage contacts\" manageContactsMenu $\n   -- Insert a sub menu directly\n   reqSubMenu topMenu \"Manage calendar\"\n     (reqMenuItem \"Add an event\" notImpl $\n       ...\n       reqMenuExit \"Return to previous menu\"\n       reqMenuEnd) $\n   ...\n   -- End the menu definition\n   reqMenuEnd\n   \n -- Defines a partial menu\n manageContactsMenu =\n   reqMenuItem \"Add a contact\" notImpl $\n   ...\n   reqMenuExit \"Return to previous menu\"\n   reqMenuEnd\n \n notImpl = reqIO $ putStrLn \"This function is not implemented.\"\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ereqMenu\u003c/a\u003e\u003c/code\u003e begins the process of definining a menu. \u003ccode\u003e\u003ca\u003ereqMenuItem\u003c/a\u003e\u003c/code\u003e is used to build a menu item, and when combined with \u003ccode\u003e($)\u003c/code\u003e as above can be used to define a list of menu items \"in-line\". \u003ccode\u003e\u003ca\u003ereqSubMenu\u003c/a\u003e\u003c/code\u003e takes the menu to return to as its first argument (in the case above, \u003ccode\u003etopMenu\u003c/code\u003e), a label to name the menu item, and a request which will become the submenu. As seen above, submenus can be inserted directly (e.g. \"Manage calendar\"), or they can be defined independently (e.g. \"Manage contacts\"). \u003ccode\u003e\u003ca\u003ereqMenuExit\u003c/a\u003e\u003c/code\u003e allows the submenu to return to control to its calling menu. Finally, \u003ccode\u003e\u003ca\u003ereqMenuEnd\u003c/a\u003e\u003c/code\u003e can be used to end an \"in-line\" menu definition.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eJust Plain Cool\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eSome of the other functions included are just cool to use:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqIterate\u003c/a\u003e\u003c/code\u003e - This take a function which maps a value to a request and a request. The request is evaluated and the results passed to the function. The result of that function is passed back into the function again. \u003ccode\u003e\u003ca\u003ereqIterate\u003c/a\u003e\u003c/code\u003e is useful for applications that manipulate some sort of environment by  repeatedly passing the modified environment back into themselves. An example of this is shown in  examples\\shell.hs where the \u003ccode\u003eshell\u003c/code\u003e function is repeatedly called from \u003ccode\u003emain\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ereqIterate\u003c/a\u003e\u003c/code\u003e. The  hangman game in hangman\\hangman.hs also uses this when the \u003ccode\u003eplayRound\u003c/code\u003e function is repeatedly called from \u003ccode\u003emain\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqFoldl\u003c/a\u003e\u003c/code\u003e - Like \u003ccode\u003efoldl\u003c/code\u003e, but for requests. The accumulating function takes values of type a (which  come from the request given) and type b (the accumulating value) and produces a \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e of type b. If and when the initial request fails, whatever accumulated value that was built is returned.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ereqList\u003c/a\u003e\u003c/code\u003e - Takes a request and repeatedly runs it, building a list of the results. When the request  fails, the list is returned.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003emakeReq\u003c/a\u003e\u003c/code\u003e - Not really so cool, but allows you to construct your own \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e values. Values created with \u003ccode\u003e\u003ca\u003emakeReq\u003c/a\u003e\u003c/code\u003e can be extracted with \u003ccode\u003e\u003ca\u003erunRequest\u003c/a\u003e\u003c/code\u003e. However, they will come back with the type \u003ccode\u003e(\u003ca\u003eIO\u003c/a\u003e (\u003ca\u003eMaybe a\u003c/a\u003e)\u003c/code\u003e, where the value is always a \u003ccode\u003eJust\u003c/code\u003e value.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003cem\u003eExamples\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eSeveral examples are included with the library, including a hangman game you can play:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e examples\\guess_num.hs - Demonstrates various ways of implementing a \u003ca\u003eguess a number\u003c/a\u003e game.\n\u003c/li\u003e\u003cli\u003e examples\\pim.hs - Shows how to build simple menus.\n\u003c/li\u003e\u003cli\u003e examples\\shell.hs - Shows how to use reqIterate to build a simple shell.\n\u003c/li\u003e\u003cli\u003e examples\\tax_payer.hs - Demonstrates how to construct requests for specific structured data types from simpler requests.\n\u003c/li\u003e\u003cli\u003e hangman\\hangman.hs - Implements the hangman game. An executable is installed when you install the library - just run \u003ccode\u003ehangman\u003c/code\u003e at the command line.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "module",
        "fct-source": "src/System-Console-HCL.html",
        "fct-type": "module",
        "title": "HCL"
      },
      "index": {
        "description": "This module provides set of functions for building simple command-line interfaces It allows interfaces which collect values such as Integers Dates or other structured values build lists of values and use simple menus It is not intended to build complex interfaces with full cursor control It is oriented towards line-based interfaces Requests The central concept of the library is the Request type which embodies an interactive request for data When requesting data there is always the possibility of failure That is the user may enter value that doesn parse or may want to quit the process For this reason the value stored by request is IO Maybe which shows there may not always be value available Request is monad and when request fails no subsequent requests are asked Instead the whole request chain is abandoned The function reqResp gives the most basic request possible which is for string From this other requests can be built The library provides several reqInt Requests Int values reqInteger Requests Integer values reqRead Requests Read able values reqList Asks request repeatedly and builds list of the responses which are returned when the user enters failure value reqMenu Given list of items asks the user to pick one of the items and returns it reqFail Always results in failure Useful in menus for creating quit or none selection number of request patterns are also exported by the module These embody different control schemes that are useful when building command-line interfaces These include reqIf Takes request which evaluates to boolean and two requests representing then and else branches The appropriate subsequent request is used based on the value of the conditional request reqAgree Takes request and determines if the user answers yes or no default can also be provided reqForever Takes request and asks it over and over until failure value appears reqIterate Takes function which given value produces request An initial Request value is also provided The initial value is given to the function and the value produced by the function is fed back into it This continues until failure occurs This model is useful for shell-type applications which take state operate on it and produce new state which is then fed back in reqCont Takes request and continuation request If the first request fails the continuation request is run This is useful for confirming if the user really wants to quit an application or other escape mechanisms Running Requests Requests can be run with two different functions execReq Takes request runs it and returns meaningless value This is most often used to run request from main runRequest Runs request and returns the raw IO Maybe value returned This is useful for running request and extracting the value returned out of it Prompting In most req functions except reqMenu and reqChoices nothing is printed to the screen Instead set of functions is provided which take request and string to use as prompt These functions include prompt Displays message and gets response If the message ends in space it is assumed that input should be typed on the same line Otherwise newline is printed and input is then gathered prompt1 Simple way to ask for response and provide default promptAgree Simple way to ask for yes no response Simple Programs Getting values combines prompting and requests Here guess number game which probably isn real fun from examples guess num.hs guess num boring do num prompt Enter your guess between reqInt if num then reqIO putStrLn You win else reqIO putStrLn Too bad To run the program type play game guess num boring at the prompt better program might actually randomize the number and tell you if you are low or high again from examples guess num.hs guess num fun do target reqIO getStdRandom randomR Integer let guessed val case compare target val of GT do reqIO putStrLn Too low return False LT do reqIO putStrLn Too high return False EQ do reqIO putStrLn You win return True reqUntil guessed prompt Enter number between and reqInteger play game game execReq game To run the program type play game guess num fun at the prompt Several features of this program are worth pointing out reqIO This function is used to lift IO operations into the Request type reqUntil This function takes condition and request and runs the request until the condition is satisfied The conditional has the type Request which allows the conditional to produce output or base its decision on other requests Naturally the second argument has the type Request which means the result of the request can be passed to the condition Other functions which wrap up input patterns are reqFoldl reqList reqCont and others Combining Requests The functions in this library are designed to allow more complex Request values to be built from them For example imagine you are coding for tax form submission and have data type like this from examples taxpayer.hs data Taxpayer Taxpayer name String age Int ssn String deriving Read Show Because Taxpayer derives Read simple way of collecting Taxpayer value from the user would be reqTaxpayer Request Taxpayer reqTaxpayer prompt Please enter tax payer information reqRead reqResp Of course this isn very friendly Main getTaxpayer reqTaxpayer Please enter tax payer information Taxpayer name John age ssn You entered Taxpayer name John age ssn Typing Taxpayer name John each time is pretty tedious better solution builds the value from simpler pieces reqTaxpayerEasy Request Taxpayer reqTaxpayerEasy do name prompt Please enter the tax payer name reqResp age prompt Please enter their age reqInt ssn prompt What is their SSN ASN reqResp return Taxpayer name age ssn Now when tax payer info must be entered nice set of prompts is displayed Main getTaxpayer reqTaxpayerEasy Please enter the tax payer name Bob Please enter their age Please enter their SSN ASN You entered Taxpayer name Bob age ssn Validation HCL provides the reqWhile and reqUntil functions which help ensure values entered are correct For example in the above we could validate SSN fairly easily like so again from example tax payer.hs reqSSN Request String Request String reqSSN req do very simple validation let matchSSN matchRegex mkRegex invalidSSN ssn return isNothing matchSSN ssn ssn reqWhile invalidSSN req return ssn In the above reqWhile repeatedly uses invalidSSN to determine if the value entered matches the very simple regular expression provided When it does the SSN entered is returned Until then the request is asked over and over One subtlety to note is that request to get the actual value is passed in to the function as req This allows the function reqTaxpayerValidate to pass it own prompt and request into reqSSN reqTaxpayerValidate Request Taxpayer reqTaxpayerValidate do name prompt Please enter the tax payer name reqResp age prompt Please enter their age reqInt ssn reqSSN prompt What is their SSN ASN reqResp return Taxpayer name age ssn Running reqTaxpayerValidate from the prompt then gives Main getTaxpayer reqTaxpayerValidate Please enter the tax payer name Bob Please enter their age What is their SSN ASN What is their SSN ASN You entered Taxpayer name Bob age ssn Dealing with Failure fundamental assumption of the Request type is that requests can fail The user can enter no input or provide bad input The discussion of validation above is bit disingenuous because it does not mention what happens when the user just types newline at the prompt In all cases the request chain ends and the program exits This is due to the behavior of the Request monad as soon as one request fails the rest fail The library provides several functions for dealing with this reqDefault Allows default value to be supplied which will be returned if the user provides no input or bad input required Repeatedly asks request until the user provides input Failure values will not occur reqCont Takes two request arguments If the first fails the second is used Useful for providing continuation to request chain reqWhich Indicates if request failed or not through the use of the Either type There is no direct way to determine if request failed that is if it evaluates to Nothing the entire chain fails and you won see it This function allows some visibility into if specific request succeeded or not One use for reqCont is to confirm if the user really wants to quit program In the guess-a-number game hitting Enter at prompt stops the game This can be avoided by changing how the guess number game is launched guess num cont reqCont guess num fun confirm where confirm reqIf promptAgree Are you sure you want to quit Just False reqResp reqFail guess num cont Above reqCont will run guess num fun until it returns Just value If Nothing is returned then reqConfirm is run If the user does not wish to quit reqConfirm will run guess num confirm again Otherwise reqFail is run which causes the request to fail and thus the program to exit Notice that the confirmation behavior was added by just adding another layer to the request chain The guess num fun function was used to provide gameplay guess num confirm just added layer to control when the game ends However because this pattern is fairly common HCL provides the reqConfirm function which acts just like the reqCont pattern above That is it takes request to run and request which returns Bool If the initial request fails the confirmation request is run If that request results in True the failure is allowed to propagate Otherwise the initial request is run again The function guess num confirm gives an example of its usage guess num confirm reqConfirm confirm guess num fun where confirm promptAgree Are you sure you want to quit Just False reqResp Making Menus Several functions are used to build simple hierarchical menus menu is defined as list of pairs where the first element is the label and the second value to return Usually that value is Request In some cases it is not There are two functions used for building menus reqChoices low-level means to build menus It does not expect the second item in the pair to be request and is thus very general reqMenu Expects the list given to be pair of string and another request When an item is selected that request is run and the value is returned reqSubMenu Inserts menu into menu When the item for the submenu is selected the submenu will display its choices When the user wishes to exit by providing failure value the previously displayed menu will display again reqMenuItem Constructs an indvidual menu item reqMenuEnd Indicates the end of list of menu items reqMenuExit specialized menu item which will cause the menu request to fail That means we return to the previous menu or exit the request chain altogether depending on how the menus are structured reqMenu and reqSubMenu work together to build hierarchical menus in which the user can automatically navigate up by just hitting return For example imagine simple menu-driven PIM Main pim Manage contacts Manage calendar Add contact Remove contact User hits return here returns to main menu Manage contacts Manage calendar Setting this up is fairly straightforward from examples pim.hs pim execReq reqConfirm confirm topMenu where confirm promptAgree Are you sure you want to quit Just False reqResp topMenu reqMenu Insert submenu defined elsewhere reqSubMenu topMenu Manage contacts manageContactsMenu Insert sub menu directly reqSubMenu topMenu Manage calendar reqMenuItem Add an event notImpl reqMenuExit Return to previous menu reqMenuEnd End the menu definition reqMenuEnd Defines partial menu manageContactsMenu reqMenuItem Add contact notImpl reqMenuExit Return to previous menu reqMenuEnd notImpl reqIO putStrLn This function is not implemented reqMenu begins the process of definining menu reqMenuItem is used to build menu item and when combined with as above can be used to define list of menu items in-line reqSubMenu takes the menu to return to as its first argument in the case above topMenu label to name the menu item and request which will become the submenu As seen above submenus can be inserted directly e.g Manage calendar or they can be defined independently e.g Manage contacts reqMenuExit allows the submenu to return to control to its calling menu Finally reqMenuEnd can be used to end an in-line menu definition Just Plain Cool Some of the other functions included are just cool to use reqIterate This take function which maps value to request and request The request is evaluated and the results passed to the function The result of that function is passed back into the function again reqIterate is useful for applications that manipulate some sort of environment by repeatedly passing the modified environment back into themselves An example of this is shown in examples shell.hs where the shell function is repeatedly called from main using reqIterate The hangman game in hangman hangman.hs also uses this when the playRound function is repeatedly called from main reqFoldl Like foldl but for requests The accumulating function takes values of type which come from the request given and type the accumulating value and produces Request of type If and when the initial request fails whatever accumulated value that was built is returned reqList Takes request and repeatedly runs it building list of the results When the request fails the list is returned makeReq Not really so cool but allows you to construct your own Request values Values created with makeReq can be extracted with runRequest However they will come back with the type IO Maybe where the value is always Just value Examples Several examples are included with the library including hangman game you can play examples guess num.hs Demonstrates various ways of implementing guess number game examples pim.hs Shows how to build simple menus examples shell.hs Shows how to use reqIterate to build simple shell examples tax payer.hs Demonstrates how to construct requests for specific structured data types from simpler requests hangman hangman.hs Implements the hangman game An executable is installed when you install the library just run hangman at the command line",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "HCL",
        "normalized": "",
        "package": "HCL",
        "partial": "HCL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#t:Request",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003eRequest\u003c/code\u003e data type represents a value requested interactively. The\nrequest may have failed or been no response, in which case the request\nfails. Otherwise, the request holds the response given. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "data",
        "fct-source": "src/System-Console-HCL.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "The Request data type represents value requested interactively The request may have failed or been no response in which case the request fails Otherwise the request holds the response given",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "Request",
        "normalized": "",
        "package": "HCL",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:andReq",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e&&\u003c/code\u003e operator for requests (with failure). Behaves similarly, including\n\u003ca\u003eshort-circuit\u003c/a\u003e behavior. If either condition fails, the entire \u003ccode\u003eRequest\u003c/code\u003e\nfails. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request Bool-\u003e Request Bool-\u003e Request Bool",
        "fct-type": "function",
        "title": "andReq"
      },
      "index": {
        "description": "operator for requests with failure Behaves similarly including short-circuit behavior If either condition fails the entire Request fails",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "andReq",
        "normalized": "Request Bool-\u003eRequest Bool-\u003eRequest Bool",
        "package": "HCL",
        "partial": "Req",
        "signature": "Request Bool-\u003eRequest Bool-\u003eRequest Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:execReq",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a request, throws away the result, and\nreturns an \u003ccode\u003eIO\u003c/code\u003e type (rather than a \u003ccode\u003eRequest\u003c/code\u003e). Useful when a request\nshould just be run and we don't care about the result. Generally used at the top\nlevel to evaluate a request in main. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a-\u003e IO ()",
        "fct-type": "function",
        "title": "execReq"
      },
      "index": {
        "description": "Runs request throws away the result and returns an IO type rather than Request Useful when request should just be run and we don care about the result Generally used at the top level to evaluate request in main",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "execReq",
        "normalized": "Request a-\u003eIO()",
        "package": "HCL",
        "partial": "Req",
        "signature": "Request a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:makeReq",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a value and makes it into a request. Should\nnot be an \u003ccode\u003eIO (Maybe a)\u003c/code\u003e type value, unless\nmultiply nested values is desired. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "a-\u003e Request a",
        "fct-type": "function",
        "title": "makeReq"
      },
      "index": {
        "description": "Takes value and makes it into request Should not be an IO Maybe type value unless multiply nested values is desired",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "makeReq",
        "normalized": "a-\u003eRequest a",
        "package": "HCL",
        "partial": "Req",
        "signature": "a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:notReq",
      "description": {
        "fct-descr": "\u003cp\u003enot operator for requests.\n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request Bool-\u003e Request Bool",
        "fct-type": "function",
        "title": "notReq"
      },
      "index": {
        "description": "not operator for requests",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "notReq",
        "normalized": "Request Bool-\u003eRequest Bool",
        "package": "HCL",
        "partial": "Req",
        "signature": "Request Bool-\u003eRequest Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:orReq",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e||\u003c/code\u003e operator for requests (with failure). Behaves similarly, including\n\u003ca\u003eshort-circuit\u003c/a\u003e behavior. If either condition fails, the entire \u003ccode\u003eRequest\u003c/code\u003e\nfails. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request Bool-\u003e Request Bool-\u003e Request Bool",
        "fct-type": "function",
        "title": "orReq"
      },
      "index": {
        "description": "operator for requests with failure Behaves similarly including short-circuit behavior If either condition fails the entire Request fails",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "orReq",
        "normalized": "Request Bool-\u003eRequest Bool-\u003eRequest Bool",
        "package": "HCL",
        "partial": "Req",
        "signature": "Request Bool-\u003eRequest Bool-\u003eRequest Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:prompt",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a message and makes a request. If the message ends in a space, it is assumed\nthat the user should enter values on the same line. Otherwise, a new line is printed\nand the reqeust is evaulated. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "String-\u003e Request a-\u003e Request a",
        "fct-type": "function",
        "title": "prompt"
      },
      "index": {
        "description": "Prints message and makes request If the message ends in space it is assumed that the user should enter values on the same line Otherwise new line is printed and the reqeust is evaulated",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "prompt",
        "normalized": "String-\u003eRequest a-\u003eRequest a",
        "package": "HCL",
        "partial": "",
        "signature": "String-\u003eRequest a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:prompt1",
      "description": {
        "fct-descr": "\u003cp\u003eDisplays a message prompt and a default choice in a common way. If\nthe user doesn't provide a choice or enters bad data, the default value provided\nis returned. Otherwise, the value entered is returned. \n\u003c/p\u003e\u003cp\u003eDeprecated name for prompt1.\n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "String-\u003e Request a-\u003e a-\u003e Request a",
        "fct-type": "function",
        "title": "prompt1"
      },
      "index": {
        "description": "Displays message prompt and default choice in common way If the user doesn provide choice or enters bad data the default value provided is returned Otherwise the value entered is returned Deprecated name for prompt1",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "prompt1",
        "normalized": "String-\u003eRequest a-\u003ea-\u003eRequest a",
        "package": "HCL",
        "partial": "",
        "signature": "String-\u003eRequest a-\u003ea-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:promptAgree",
      "description": {
        "fct-descr": "\u003cp\u003ePrints a message, displays defaults (if any), and\nturns a \u003ccode\u003eRequest String\u003c/code\u003e into a \u003ccode\u003eRequest Bool\u003c/code\u003e. If\na default value is provided, it will be returned if the\nuser enters nothing or an invalid response. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "String-\u003e Maybe Bool-\u003e Request String-\u003e Request Bool",
        "fct-type": "function",
        "title": "promptAgree"
      },
      "index": {
        "description": "Prints message displays defaults if any and turns Request String into Request Bool If default value is provided it will be returned if the user enters nothing or an invalid response",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "promptAgree",
        "normalized": "String-\u003eMaybe Bool-\u003eRequest String-\u003eRequest Bool",
        "package": "HCL",
        "partial": "Agree",
        "signature": "String-\u003eMaybe Bool-\u003eRequest String-\u003eRequest Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:promptWithDefault",
      "description": {
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "String -\u003e Request a -\u003e a -\u003e Request a",
        "fct-source": "src/System-Console-HCL.html#promptWithDefault",
        "fct-type": "function",
        "title": "promptWithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "promptWithDefault",
        "normalized": "String-\u003eRequest a-\u003ea-\u003eRequest a",
        "package": "HCL",
        "partial": "With Default",
        "signature": "String-\u003eRequest a-\u003ea-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqAgree",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true if the user answer \u003ccode\u003ey\u003c/code\u003e or \u003ccode\u003eY\u003c/code\u003e. Allows\na default to be specified, and allows failure if\nno default is given. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Maybe Bool-\u003e Request String-\u003e Request Bool",
        "fct-type": "function",
        "title": "reqAgree"
      },
      "index": {
        "description": "Returns true if the user answer or Allows default to be specified and allows failure if no default is given",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqAgree",
        "normalized": "Maybe Bool-\u003eRequest String-\u003eRequest Bool",
        "package": "HCL",
        "partial": "Agree",
        "signature": "Maybe Bool-\u003eRequest String-\u003eRequest Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqChoices",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of items and programs to run, displays a menu\nof the items and runs the selected program. Very low level - usually \u003ccode\u003ereqMenu\u003c/code\u003e\nis used instead. If the user selects an invalid choice, failure occurs. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "[(String, a)]-\u003e Request Int-\u003e Request a",
        "fct-type": "function",
        "title": "reqChoices"
      },
      "index": {
        "description": "Given list of items and programs to run displays menu of the items and runs the selected program Very low level usually reqMenu is used instead If the user selects an invalid choice failure occurs",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqChoices",
        "normalized": "[(String,a)]-\u003eRequest Int-\u003eRequest a",
        "package": "HCL",
        "partial": "Choices",
        "signature": "[(String,a)]-\u003eRequest Int-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqConfirm",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the request given and, if a failure value occurs,\nexecutes the \u003ca\u003eBool\u003c/a\u003e request given (usually some sort of prompt asking\nif they want to quit). If the answer is \u003ccode\u003eTrue\u003c/code\u003e, the failure value propagates. Otherwise,\nthe initial request is run again.\n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request Bool-\u003e Request a-\u003e Request a",
        "fct-type": "function",
        "title": "reqConfirm"
      },
      "index": {
        "description": "Executes the request given and if failure value occurs executes the Bool request given usually some sort of prompt asking if they want to quit If the answer is True the failure value propagates Otherwise the initial request is run again",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqConfirm",
        "normalized": "Request Bool-\u003eRequest a-\u003eRequest a",
        "package": "HCL",
        "partial": "Confirm",
        "signature": "Request Bool-\u003eRequest a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqConst",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a value and makes it into a request. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "a-\u003e Request a",
        "fct-type": "function",
        "title": "reqConst"
      },
      "index": {
        "description": "Takes value and makes it into request",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqConst",
        "normalized": "a-\u003eRequest a",
        "package": "HCL",
        "partial": "Const",
        "signature": "a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqCont",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a request and a \u003ca\u003econtinuation\u003c/a\u003e request. If the\nfirst request results in \u003ccode\u003eNothing\u003c/code\u003e, run the second request.\nIn either case, return the result of the successful request. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a-\u003e Request a-\u003e Request a",
        "fct-type": "function",
        "title": "reqCont"
      },
      "index": {
        "description": "Takes request and continuation request If the first request results in Nothing run the second request In either case return the result of the successful request",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqCont",
        "normalized": "Request a-\u003eRequest a-\u003eRequest a",
        "package": "HCL",
        "partial": "Cont",
        "signature": "Request a-\u003eRequest a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqDefault",
      "description": {
        "fct-descr": "\u003cp\u003eRequests a response from user. If \u003ccode\u003eNothing\u003c/code\u003e is returned,\nassumes default and returns that. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a-\u003e a-\u003e Request a",
        "fct-type": "function",
        "title": "reqDefault"
      },
      "index": {
        "description": "Requests response from user If Nothing is returned assumes default and returns that",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqDefault",
        "normalized": "Request a-\u003ea-\u003eRequest a",
        "package": "HCL",
        "partial": "Default",
        "signature": "Request a-\u003ea-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqFail",
      "description": {
        "fct-descr": "\u003cp\u003eAutomatic failure. Useful in menus to quit or return to the previous menu.\n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a",
        "fct-source": "src/System-Console-HCL.html#reqFail",
        "fct-type": "function",
        "title": "reqFail"
      },
      "index": {
        "description": "Automatic failure Useful in menus to quit or return to the previous menu",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqFail",
        "normalized": "",
        "package": "HCL",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqFoldl",
      "description": {
        "fct-descr": "\u003cp\u003eGive a function from \u003ccode\u003ea -\u003e b\u003c/code\u003e, an initial value,\nand a \u003ccode\u003eRequest\u003c/code\u003e for \u003ccode\u003ea\u003c/code\u003e, builds a \u003ccode\u003eRequest\u003c/code\u003e for \u003ccode\u003eb\u003c/code\u003e. When \u003ccode\u003e(Request a)\u003c/code\u003e fails,\nthen the function returns whatever \u003ccode\u003e(Request b)\u003c/code\u003e has been built.\n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "(a -\u003e b -\u003e Request b)-\u003e b-\u003e Request a-\u003e Request b",
        "fct-type": "function",
        "title": "reqFoldl"
      },
      "index": {
        "description": "Give function from an initial value and Request for builds Request for When Request fails then the function returns whatever Request has been built",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqFoldl",
        "normalized": "(a-\u003eb-\u003eRequest b)-\u003eb-\u003eRequest a-\u003eRequest b",
        "package": "HCL",
        "partial": "Foldl",
        "signature": "(a-\u003eb-\u003eRequest b)-\u003eb-\u003eRequest a-\u003eRequest b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqForever",
      "description": {
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a-\u003e Request a",
        "fct-type": "function",
        "title": "reqForever"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqForever",
        "normalized": "Request a-\u003eRequest a",
        "package": "HCL",
        "partial": "Forever",
        "signature": "Request a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqIO",
      "description": {
        "fct-descr": "\u003cp\u003eAllows \u003ccode\u003eIO\u003c/code\u003e operations in the \u003ccode\u003eRequest\u003c/code\u003e\ntype. Same as \u003ccode\u003eliftIO\u003c/code\u003e in \u003ca\u003eMonadIO\u003c/a\u003e class (in \u003ccode\u003eControl.Monad.Trans\u003c/code\u003e module) \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "IO a-\u003e Request a",
        "fct-type": "function",
        "title": "reqIO"
      },
      "index": {
        "description": "Allows IO operations in the Request type Same as liftIO in MonadIO class in Control.Monad.Trans module",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqIO",
        "normalized": "IO a-\u003eRequest a",
        "package": "HCL",
        "partial": "IO",
        "signature": "IO a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqIf",
      "description": {
        "fct-descr": "\u003cp\u003eIf statement for requests. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request Bool-\u003e Request a-\u003e Request a-\u003e Request a",
        "fct-type": "function",
        "title": "reqIf"
      },
      "index": {
        "description": "If statement for requests",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqIf",
        "normalized": "Request Bool-\u003eRequest a-\u003eRequest a-\u003eRequest a",
        "package": "HCL",
        "partial": "If",
        "signature": "Request Bool-\u003eRequest a-\u003eRequest a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqInt",
      "description": {
        "fct-descr": "\u003cp\u003eGets an \u003ca\u003eInt\u003c/a\u003e from the user. If the value entered cannot be converted, the\nrequest fails. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request Int",
        "fct-source": "src/System-Console-HCL.html#reqInt",
        "fct-type": "function",
        "title": "reqInt"
      },
      "index": {
        "description": "Gets an Int from the user If the value entered cannot be converted the request fails",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqInt",
        "normalized": "",
        "package": "HCL",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqInteger",
      "description": {
        "fct-descr": "\u003cp\u003eGets an \u003ca\u003eInteger\u003c/a\u003e from the user. If the value entered cannot be converted,\nthe request fails. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request Integer",
        "fct-source": "src/System-Console-HCL.html#reqInteger",
        "fct-type": "function",
        "title": "reqInteger"
      },
      "index": {
        "description": "Gets an Integer from the user If the value entered cannot be converted the request fails",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqInteger",
        "normalized": "",
        "package": "HCL",
        "partial": "Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqIterate",
      "description": {
        "fct-descr": "\u003cp\u003eTakes an initial value and function which produces a request\nfrom that value. Applies the function to the initial value\nand then recurses. Useful for functions which operate off their\nown output (e.g. a shell maintaining an environment). \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "(a -\u003e Request a)-\u003e a-\u003e Request a",
        "fct-type": "function",
        "title": "reqIterate"
      },
      "index": {
        "description": "Takes an initial value and function which produces request from that value Applies the function to the initial value and then recurses Useful for functions which operate off their own output e.g shell maintaining an environment",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqIterate",
        "normalized": "(a-\u003eRequest a)-\u003ea-\u003eRequest a",
        "package": "HCL",
        "partial": "Iterate",
        "signature": "(a-\u003eRequest a)-\u003ea-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqLift",
      "description": {
        "fct-descr": "\u003cp\u003eLifts a one-argument function into \u003ccode\u003eRequest\u003c/code\u003e types. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "(a -\u003e b)-\u003e Request a-\u003e Request b",
        "fct-type": "function",
        "title": "reqLift"
      },
      "index": {
        "description": "Lifts one-argument function into Request types",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqLift",
        "normalized": "(a-\u003eb)-\u003eRequest a-\u003eRequest b",
        "package": "HCL",
        "partial": "Lift",
        "signature": "(a-\u003eb)-\u003eRequest a-\u003eRequest b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqLift2",
      "description": {
        "fct-descr": "\u003cp\u003eLifts a two argument function into \u003ccode\u003eRequest\u003c/code\u003e types. The arguments to the function\nare evaluated in order, from left to right, since the \u003ccode\u003eRequest\u003c/code\u003e monad imposes\nsequencing. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "(a -\u003e b -\u003e c)-\u003e Request a-\u003e Request b-\u003e Request c",
        "fct-type": "function",
        "title": "reqLift2"
      },
      "index": {
        "description": "Lifts two argument function into Request types The arguments to the function are evaluated in order from left to right since the Request monad imposes sequencing",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqLift2",
        "normalized": "(a-\u003eb-\u003ec)-\u003eRequest a-\u003eRequest b-\u003eRequest c",
        "package": "HCL",
        "partial": "Lift",
        "signature": "(a-\u003eb-\u003ec)-\u003eRequest a-\u003eRequest b-\u003eRequest c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqList",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a request, builds a list of response. When\nthe user enters \u003ccode\u003eNothing\u003c/code\u003e, the list building ends \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a-\u003e Request [a]",
        "fct-type": "function",
        "title": "reqList"
      },
      "index": {
        "description": "Given request builds list of response When the user enters Nothing the list building ends",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqList",
        "normalized": "Request a-\u003eRequest[a]",
        "package": "HCL",
        "partial": "List",
        "signature": "Request a-\u003eRequest[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eLike the \u003ccode\u003emaybe\u003c/code\u003e function, but for requests. Given a request value, \na default value,and a function that maps \u003ccode\u003eb\u003c/code\u003e to \u003ccode\u003eRequest a\u003c/code\u003e,\nthis function either returns the default if the request value is nothing,\nor it applies the function given to the value of the request and returns it.\n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a-\u003e Request b-\u003e (a -\u003e Request b)-\u003e Request b",
        "fct-type": "function",
        "title": "reqMaybe"
      },
      "index": {
        "description": "Like the maybe function but for requests Given request value default value and function that maps to Request this function either returns the default if the request value is nothing or it applies the function given to the value of the request and returns it",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqMaybe",
        "normalized": "Request a-\u003eRequest b-\u003e(a-\u003eRequest b)-\u003eRequest b",
        "package": "HCL",
        "partial": "Maybe",
        "signature": "Request a-\u003eRequest b-\u003e(a-\u003eRequest b)-\u003eRequest b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqMenu",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list of strings and requests and forms a menu out of them. Menus can\nbuilt using \u003ccode\u003e\u003ca\u003ereqMenuItem\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereqSubMenu\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereqMenuExit\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003ereqMenuEnd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "[(String, Request a)]-\u003e Request a",
        "fct-type": "function",
        "title": "reqMenu"
      },
      "index": {
        "description": "Takes list of strings and requests and forms menu out of them Menus can built using reqMenuItem reqSubMenu reqMenuExit and reqMenuEnd",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqMenu",
        "normalized": "[(String,Request a)]-\u003eRequest a",
        "package": "HCL",
        "partial": "Menu",
        "signature": "[(String,Request a)]-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqMenuEnd",
      "description": {
        "fct-descr": "\u003cp\u003eEnds a list of menu item definitions.\n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "[(String, Request a)]",
        "fct-source": "src/System-Console-HCL.html#reqMenuEnd",
        "fct-type": "function",
        "title": "reqMenuEnd"
      },
      "index": {
        "description": "Ends list of menu item definitions",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqMenuEnd",
        "normalized": "[(String,Request a)]",
        "package": "HCL",
        "partial": "Menu End",
        "signature": "[(String,Request a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqMenuExit",
      "description": {
        "fct-descr": "\u003cp\u003eCauses the program to exit from the current menu.  \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "String -\u003e [(String, Request a)] -\u003e [(String, Request a)]",
        "fct-source": "src/System-Console-HCL.html#reqMenuExit",
        "fct-type": "function",
        "title": "reqMenuExit"
      },
      "index": {
        "description": "Causes the program to exit from the current menu",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqMenuExit",
        "normalized": "String-\u003e[(String,Request a)]-\u003e[(String,Request a)]",
        "package": "HCL",
        "partial": "Menu Exit",
        "signature": "String-\u003e[(String,Request a)]-\u003e[(String,Request a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqMenuItem",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to add an individual entry to a menu that is being built. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "String -\u003e Request a -\u003e [(String, Request a)] -\u003e [(String, Request a)]",
        "fct-source": "src/System-Console-HCL.html#reqMenuItem",
        "fct-type": "function",
        "title": "reqMenuItem"
      },
      "index": {
        "description": "Used to add an individual entry to menu that is being built",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqMenuItem",
        "normalized": "String-\u003eRequest a-\u003e[(String,Request a)]-\u003e[(String,Request a)]",
        "package": "HCL",
        "partial": "Menu Item",
        "signature": "String-\u003eRequest a-\u003e[(String,Request a)]-\u003e[(String,Request a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqRead",
      "description": {
        "fct-descr": "\u003cp\u003eUses \u003ccode\u003ereads\u003c/code\u003e to process a request. If the value cannot be parsed,\nfails. Otherwise, returns the value parsed. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request String-\u003e Request a",
        "fct-type": "function",
        "title": "reqRead"
      },
      "index": {
        "description": "Uses reads to process request If the value cannot be parsed fails Otherwise returns the value parsed",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqRead",
        "normalized": "Request String-\u003eRequest a",
        "package": "HCL",
        "partial": "Read",
        "signature": "Request String-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqResp",
      "description": {
        "fct-descr": "\u003cp\u003eThe basic request - get a string from the user. If a newline or all whitespace\nis entered, the request is assumed to be a failure. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request String",
        "fct-source": "src/System-Console-HCL.html#reqResp",
        "fct-type": "function",
        "title": "reqResp"
      },
      "index": {
        "description": "The basic request get string from the user If newline or all whitespace is entered the request is assumed to be failure",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqResp",
        "normalized": "",
        "package": "HCL",
        "partial": "Resp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqSubMenu",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a submenu within a menu. When the submenu exits, control returns to the item specified.\n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a-\u003e String-\u003e [(String, Request a)]-\u003e [(String, Request a)]-\u003e [(String, Request a)]",
        "fct-type": "function",
        "title": "reqSubMenu"
      },
      "index": {
        "description": "Creates submenu within menu When the submenu exits control returns to the item specified",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqSubMenu",
        "normalized": "Request a-\u003eString-\u003e[(String,Request a)]-\u003e[(String,Request a)]-\u003e[(String,Request a)]",
        "package": "HCL",
        "partial": "Sub Menu",
        "signature": "Request a-\u003eString-\u003e[(String,Request a)]-\u003e[(String,Request a)]-\u003e[(String,Request a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqUntil",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the request until the condition given is satisfied,\nthen returns the result. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "(a -\u003e Request Bool)-\u003e Request a-\u003e Request a",
        "fct-type": "function",
        "title": "reqUntil"
      },
      "index": {
        "description": "Runs the request until the condition given is satisfied then returns the result",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqUntil",
        "normalized": "(a-\u003eRequest Bool)-\u003eRequest a-\u003eRequest a",
        "package": "HCL",
        "partial": "Until",
        "signature": "(a-\u003eRequest Bool)-\u003eRequest a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqWhich",
      "description": {
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a-\u003e Request (Either () a)",
        "fct-type": "function",
        "title": "reqWhich"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqWhich",
        "normalized": "Request a-\u003eRequest(Either()a)",
        "package": "HCL",
        "partial": "Which",
        "signature": "Request a-\u003eRequest(Either()a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:reqWhile",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the request while the condition given holds,\nthen returns the result. Good for verification. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "(a -\u003e Request Bool) -\u003e Request a -\u003e Request a",
        "fct-source": "src/System-Console-HCL.html#reqWhile",
        "fct-type": "function",
        "title": "reqWhile"
      },
      "index": {
        "description": "Runs the request while the condition given holds then returns the result Good for verification",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "reqWhile",
        "normalized": "(a-\u003eRequest Bool)-\u003eRequest a-\u003eRequest a",
        "package": "HCL",
        "partial": "While",
        "signature": "(a-\u003eRequest Bool)-\u003eRequest a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:required",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a request and guarantees a value will be\nreturned. That is, the request is repeated until a\nvalid (i.e. not \u003ccode\u003eNothing\u003c/code\u003e) response is returned. \n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a-\u003e Request a",
        "fct-type": "function",
        "title": "required"
      },
      "index": {
        "description": "Takes request and guarantees value will be returned That is the request is repeated until valid i.e not Nothing response is returned",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "required",
        "normalized": "Request a-\u003eRequest a",
        "package": "HCL",
        "partial": "",
        "signature": "Request a-\u003eRequest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/HCL/docs/System-Console-HCL.html#v:runRequest",
      "description": {
        "fct-descr": "\u003cp\u003eExtracts the value from a given request.\n\u003c/p\u003e",
        "fct-module": "System.Console.HCL",
        "fct-package": "HCL",
        "fct-signature": "Request a-\u003e IO (Maybe a)",
        "fct-type": "function",
        "title": "runRequest"
      },
      "index": {
        "description": "Extracts the value from given request",
        "hierarchy": "System Console HCL",
        "module": "System.Console.HCL",
        "name": "runRequest",
        "normalized": "Request a-\u003eIO(Maybe a)",
        "package": "HCL",
        "partial": "Request",
        "signature": "Request a-\u003eIO(Maybe a)"
      }
    }
  }
]