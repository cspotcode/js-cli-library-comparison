#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMMANDS_FILE="$(dirname "$SCRIPT_DIR")/__NOTES__/commands.txt"
OUTPUT_DIR="$SCRIPT_DIR/gh-help"

mkdir -p "$OUTPUT_DIR"

while IFS= read -r cmd; do
  [[ -z "$cmd" ]] && continue

  # Strip leading "gh" and optional space to get the subcommand path
  rest="${cmd#gh}"
  rest="${rest# }"

  if [[ -z "$rest" ]]; then
    # Just "gh" -> root.txt
    outfile="$OUTPUT_DIR/root.txt"
  else
    read -ra parts <<< "$rest"
    if [[ ${#parts[@]} -eq 1 ]]; then
      # "gh auth" -> gh-help/auth.txt
      outfile="$OUTPUT_DIR/${parts[0]}.txt"
    else
      # "gh auth login" -> gh-help/auth/login.txt
      mkdir -p "$OUTPUT_DIR/${parts[0]}"
      outfile="$OUTPUT_DIR/${parts[0]}/${parts[1]}.txt"
    fi
  fi

  echo "$cmd --help  ->  ${outfile#$SCRIPT_DIR/}"
  eval "$cmd --help" > "$outfile" 2>&1 || true

done < "$COMMANDS_FILE"

echo "Done."
