#!/usr/bin/env bash
set -euo pipefail
flag="./scripts/flag.sh"
if "$flag" local
	then make package.json
	else make clean
fi
make
