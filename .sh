#!/usr/bin/env bash
set -euo pipefail
flag() {
	for f in "$@"
		do [[ -e ".flags/$f" ]] || return 1
	done
}
if make; then
	if flag local
		then npm run dev
		else npm  run build
	fi
fi