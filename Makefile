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

insert: hayooContexts.js $(NEWJSONFILES)
	curl -X POST -d @hayooContexts.js $(SERVER)/eval; \
	echo ""; \
	i=1; \
	for file in $(NEWJSONDIR)/*.js; do \
		echo -n "\n$$i - $$file"; \
		curl -X POST -d @"$$file" $(SERVER)/eval; \
		i=$$(($$i+1)); \
	done

insert-batch: hayooContexts.js batch.js
	curl -X POST -d @hayooContexts.js $(SERVER)/eval
	curl -X POST -d @batch.js $(SERVER)/eval

batch.js: $(NEWJSONFILES)
	(( echo "["; \
	for file in $(NEWJSONFILES); do \
		cat "$$file" | tail -n +2 | head -n -1; \
		echo ","; \
	done; \
	) | head -n -1; echo "]" ) > batch.js
