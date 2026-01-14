.PHONY : all clean
.ONESHELL :
.SILENT :
SHELL := /usr/bin/bash
PUG := $(shell find . -name "*.pug" ! -path "*/node_modules/*")
HTML := $(patsubst %.pug,%.html,$(PUG))
SCSS := $(shell find . -name "*.scss" ! -path "*/node_modules/*")
CSS := $(patsubst %.scss,%.css,$(SCSS))
all : $(HTML) $(CSS) $(JSON) dist
package.json : scripts.yml
	jq --argjson s "`
		yq --yaml-fix-merge-anchor-to-spec=true \
			scripts.yml -o=json \
			| jq -f scripts.jq -c
	`" \
	'.scripts = $$s' package.json \
		> tmp.json \
		&& mv tmp.json package.json
%.html : %.pug
	npx pug3 $<
%.css : %.scss
	npx sass $< $@ \
		--style=compressed \
		--no-source-map
dist : src
	npm run build
clean :
	rm -rf $(HTML) $(CSS)
	touch scripts.yml
