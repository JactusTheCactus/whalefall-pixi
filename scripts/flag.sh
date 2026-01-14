#!/usr/bin/env bash
set -euo pipefail
for f in "$@"
	do [[ -e ".flags/$f" ]] || return 1
done
