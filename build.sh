#!/usr/bin/env bash

set -euo pipefail

npx esbuild --bundle --minify --loader=ts < toolkit.ts
