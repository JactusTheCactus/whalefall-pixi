.PHONY : all
.ONESHELL :
# .SILENT :
SHELL := /usr/bin/bash
PUG := $(wildcard *.pug)
HTML := $(patsubst %.pug,%.html,$(PUG))
SCSS := $(shell find . -name "*.scss")
CSS := $(patsubst %.scss,%.css,$(SCSS))
all : $(HTML) $(CSS)
%.html : %.pug
	npx pug3 $<
%.css : %.scss
	npx sass $< $@ \
		--style=compressed \
		--no-source-map