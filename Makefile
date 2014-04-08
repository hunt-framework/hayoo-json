SERVER       = http://localhost:3000

JSONDIR      = json
NEWJSONDIR   = newJson
JSONFILES    = $(wildcard $(JSONDIR)/*.js)
PACK_FILE_SIZE = 30

.PHONY: all clean clean-packed


clean: clean-packed
	- rm -f hayooContexts.js

hayooContexts.js: makeJs.py
	./makeJs.py --contexts hayooContexts.js

insert-package: hayooContexts.js $(JSONFILES)
	i=1; \
	for file in $(JSONDIR)/*.js; do \
		echo -n "\n$$i - $$file"; \
		curl -X POST -d @"$$file" $(SERVER)/eval; \
		i=$$(($$i+1)); \
	done

packed: hayooContexts.js
	./makeJs.py --concat $(PACK_FILE_SIZE) packedFiles $(JSONFILES)

clean-packed:
	rm -rf packedFiles

insert-packed:
	i=1; \
	for file in packedFiles/*.js; do \
		echo -n "\n$$i - $$(date) - $$file "; \
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
		rm -f xxx.js ; \
		i=$$(($$i+1)); \
	done ; \
        curl $(JHOST)/binary/save/hayoo-ix.$$(date +%FT%T)


