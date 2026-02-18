import './base.just'
mod demo

# Initialize dev environment
install:
  bun install

# Run all static code analysis
check: lint typecheck fmtcheck

# Perform all auto-fixes
fix: lint-fix fmt

fmt:
  oxfmt

fmtcheck:
  oxfmt --check

typecheck:
  tsc --noEmit

lint:
  oxlint

lint-fix:
  oxlint --fix