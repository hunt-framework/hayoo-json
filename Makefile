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



