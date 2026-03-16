import { existsSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const root = process.cwd();
const lockPath = resolve(root, "package-lock.json");
const nodeModulesPath = resolve(root, "node_modules");
const installedLockPath = resolve(root, "node_modules/.package-lock.json");
const eslintPath = resolve(root, "node_modules/eslint/package.json");
const nextPath = resolve(root, "node_modules/next/package.json");

function runInstall() {
  const npmCmd = process.platform === "win32" ? "npm.cmd" : "npm";
  const result = spawnSync(npmCmd, ["ci", "--include=dev", "--no-audit", "--no-fund"], {
    stdio: "inherit",
    cwd: root,
    env: process.env,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

if (!existsSync(lockPath)) {
  console.error("package-lock.json is required for deterministic installs.");
  process.exit(1);
}

const missingCoreDeps =
  !existsSync(nodeModulesPath) || !existsSync(eslintPath) || !existsSync(nextPath);

if (missingCoreDeps) {
  console.log("Dependencies are missing. Installing from package-lock.json...");
  runInstall();
  process.exit(0);
}

if (!existsSync(installedLockPath)) {
  console.log("Installed lockfile metadata missing. Reinstalling dependencies...");
  runInstall();
  process.exit(0);
}

const lockMtime = statSync(lockPath).mtimeMs;
const installedLockMtime = statSync(installedLockPath).mtimeMs;

if (lockMtime > installedLockMtime) {
  console.log("package-lock.json changed. Syncing dependencies with npm ci...");
  runInstall();
} else {
  console.log("Dependencies already in sync with package-lock.json.");
}
