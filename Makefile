.PHONY : all clean clear
.ONESHELL :
.SILENT :
SHELL := /usr/bin/bash
PUG := $(shell find . -name "*.pug" ! -path "*/node_modules/*")
HTML := $(patsubst %.pug,%.html,$(filter-out ./_.pug,$(PUG)))
SCSS := $(shell find . -name "*.scss" ! -path "*/node_modules/*")
CSS := $(patsubst %.scss,%.css,$(SCSS))
all : $(HTML) $(CSS) dist clean
clear :
	rm -rf $(HTML) $(CSS)
	touch scripts.yml
package.json : scripts.yml
	jq \
		--argjson s \
			"`
				yq \
					--yaml-fix-merge-anchor-to-spec=true \
					scripts.yml \
					-o=json \
					| jq -f scripts.jq
			`" \
			'.scripts = $$s' \
			package.json \
				> tmp.json \
				&& mv tmp.json package.json
%.html : %.pug
	npx pug3 $<
%.css : %.scss
	npx sass $< $@ --style=compressed --no-source-map
dist : src
	npm run build
clean :
	find -path "*/dist/*" -name "*.pug" -delete
