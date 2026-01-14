#!/usr/bin/env bash
set -euo pipefail
flag() {
	for f in "$@"
		do [[ -e ".flags/$f" ]] || return 1
	done
}
flag local && make package.json
flag local || make clean
make
flag local && npm run preview
