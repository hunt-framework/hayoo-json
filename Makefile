SERVER       = http://localhost:3000

JSONDIR      = json
NEWJSONDIR   = newJson
JSONFILES    = $(wildcard $(JSONDIR)/*.js)
NEWJSONFILES = $(addprefix $(NEWJSONDIR)/,$(notdir $(JSONFILES)))

.PHONY: all clean

all: hayooContexts.js $(NEWJSONFILES)

clean:
	- rm -f hayooContexts.js
	- rm -rf $(NEWJSONDIR)/

hayooContexts.js: makeJs.py
	./makeJs.py --contexts hayooContexts.js

$(NEWJSONDIR)/%.js: makeJs.py $(JSONDIR)/%.js
	./makeJs.py $(JSONDIR)/$*.js $@

insert-package: hayooContexts.js $(NEWJSONFILES)
	curl -X POST -d @hayooContexts.js $(SERVER)/eval; \
	echo ""; \
	i=1; \
	for file in $(NEWJSONDIR)/*.js; do \
		echo -n "\n$$i - $$file"; \
		curl -X POST -d @"$$file" $(SERVER)/eval; \
		i=$$(($$i+1)); \
	done

packed: hayooContexts.js
	./makeJs.py --concat 10 packedFiles $(NEWJSONFILES)

clean-packed:
	rm -rf packedFiles

insert-packed: hayooContexts.js
	curl -X POST -d @hayooContexts.js $(SERVER)/eval; \
	echo ""; \
	i=1; \
	for file in packedFiles/*.js; do \
		echo -n "\n$$i - $$file"; \
		curl -X POST -d @"$$file" $(SERVER)/eval; \
		i=$$(($$i+1)); \
	done

## insert complete hayoo index and save index

JHOST	  = $(SERVER)
JSONFILES = $(shell find json -name '*.js.bz2' -print | sort)

insert-json:
	i=1; \
	for file in $(JSONFILES); do \
		echo -n "\n$$i - $$(date) - $$file "; \
		bzcat $$file    > xxx.js ; \
		curl -X POST -d @"xxx.js" $(JHOST)/eval; \
		i=$$(($$i+1)); \
	done ; \
        curl $(JHOST)/binary/save/hayoo-ix.$$(date +%FT%T)


