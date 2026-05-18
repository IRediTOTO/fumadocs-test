"use client";

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { useCredentials } from "@/lib/credentials";

export function HpInstallCommand() {
  const { hpKey, ready } = useCredentials();

  if (!ready) return null;

  const key = hpKey ?? "<your_hp_key>";

  return (
    <Tabs groupId="pkg" items={["pnpm", "bun", "npm"]} defaultValue="pnpm">
      <Tab value="pnpm">
        <DynamicCodeBlock
          lang="bash"
          code={`pnpm dlx hpsetup@latest ${key}`}
        />
      </Tab>
      <Tab value="bun">
        <DynamicCodeBlock
          lang="bash"
          code={`bunx hpsetup@latest ${key}`}
        />
      </Tab>
      <Tab value="npm">
        <DynamicCodeBlock
          lang="bash"
          code={`npx -y hpsetup@latest ${key}`}
        />
      </Tab>
    </Tabs>
  );
}
