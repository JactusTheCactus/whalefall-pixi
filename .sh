#!/usr/bin/env bash
set -euo pipefail
flag() {
	for f in "$@"
		do [[ -e ".flags/$f" ]] || return 1
	done
}
make clean
if make && flag local; then
	if flag local
		then npm run preview
	fi
fi
