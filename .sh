#!/usr/bin/env bash
set -euo pipefail
flag() {
	for f in "$@"
		do [[ -e ".flags/$f" ]] || return 1
	done
}
if flag local
	then make package.json
	else make clean
fi
make
if flag local
	then npm run preview
fi
