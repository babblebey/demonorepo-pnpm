# demonorepo-pnpm

A pnpm monorepo demo for testing [monorepo-semantic-release](https://github.com/babblebey/monorepo-semantic-release).

## Packages

| Package | Description | Local Dependencies |
|---|---|---|
| [`@demonorepo-pnpm/utils`](./packages/utils) | Shared utility functions | — |
| [`@demonorepo-pnpm/config`](./packages/config) | Shared configuration | — |
| [`@demonorepo-pnpm/core`](./packages/core) | Core library | `utils` |
| [`@demonorepo-pnpm/cli`](./packages/cli) | CLI tool | `core`, `utils` |

## Dependency Graph

```
utils ◄── core ◄── cli
                ▲
utils ──────────┘

config  (standalone)
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run tests across all packages
pnpm test

# Build all packages
pnpm build
```

## Requirements

- Node.js ≥ 18
- pnpm ≥ 8