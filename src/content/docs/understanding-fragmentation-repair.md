---
title: Understanding Fragmentation & Repair
summary: How OPL Forge diagnoses and repairs physical fragmentation on PS2 storage.
order: 4
relatedProductSurfaceIds: ['tools-diagnostics']
---

## Why fragmentation matters

The PS2 reads files by physical location on disk. Fragmented files can cause
load stutters or failures on real hardware, even when a PC/emulator plays
them fine.

## Diagnostic states

- `contiguous` — no fragmentation detected
- `fragmented` — fragmentation detected
- `partially_fragmented` — some fragments detected, may still be playable
- `incomplete` — analysis could not finish
- `invalid` — the file itself failed validation
- `unverifiable` — this platform/environment cannot verify the result

> **Platform note**: verifiability of physical fragmentation can differ by
> platform and environment. When a result can't be confirmed, OPL Forge
> reports it as `unverifiable` rather than guessing.

## Repair

Repair runs as a transactional operation with a journal, staging area, and
automatic rollback if anything goes wrong, so a failed repair never leaves
your library in a worse state than before.
