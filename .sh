#!/usr/bin/env bash
set -euo pipefail
flag() {
	for f in "$@"
		do [[ -e ".flags/$f" ]] || return 1
	done
}
flag local && make package.json && echo 'PACKAGE.JSON'
make && echo 'MAKE'
flag local && npm run preview && echo 'PREVIEW'
