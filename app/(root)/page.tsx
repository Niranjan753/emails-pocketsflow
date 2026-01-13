"use client";

import { useState } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarHeader,
  SidebarSeparator,
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

type PlaygroundComponentId = "button" | "card" | "form" | "switch";

type PlaygroundComponent = {
  id: PlaygroundComponentId;
  name: string;
  category: string;
  tagline: string;
  difficulty: "easy" | "medium";
  preview: React.ReactNode;
  usage: string;
  instructions: string[];
};

const PLAYGROUND_COMPONENTS: PlaygroundComponent[] = [
  {
    id: "button",
    name: "Buttons",
    category: "Core",
    tagline: "Primary actions that feel crisp and responsive.",
    difficulty: "easy",
    preview: (
      <div className="flex flex-wrap gap-3">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    ),
    usage: `import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <div className="flex gap-3">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`,
    instructions: [
      "Use buttons for actions, not navigation — keep labels short and verb‑first.",
      "Use the `variant` prop to communicate hierarchy instead of just color tweaks.",
      "Pair button groups with meaningful spacing (`gap-2` / `gap-3`) for breathability.",
    ],
  },
  {
    id: "card",
    name: "Cards",
    category: "Layout",
    tagline: "Surface content in a focused, elevated container.",
    difficulty: "easy",
    preview: (
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Analytics snapshot</CardTitle>
          <CardDescription>
            A minimal summary card that feels at home in any dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">Active users</span>
            <span className="text-2xl font-semibold">1,284</span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>+18.2% vs last week</span>
            <span>Updated 2 min ago</span>
          </div>
        </CardContent>
      </Card>
    ),
    usage: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function Example() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Analytics snapshot</CardTitle>
        <CardDescription>
          A minimal summary card that feels at home in any dashboard.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-muted-foreground">Active users</span>
          <span className="text-2xl font-semibold">1,284</span>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>+18.2% vs last week</span>
          <span>Updated 2 min ago</span>
        </div>
      </CardContent>
    </Card>
  );
}`,
    instructions: [
      "Use cards to group a single idea — avoid stuffing unrelated content into one surface.",
      "Pad horizontally (`px-6`) and vertically (`py-6`) for a calm, balanced feel.",
      "Use `CardDescription` for supporting copy instead of raw `<p>` to keep typography consistent.",
    ],
  },
  {
    id: "form",
    name: "Form shell",
    category: "Input",
    tagline: "A compact, opinionated form block.",
    difficulty: "medium",
    preview: (
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Invite collaborator</CardTitle>
          <CardDescription>
            Compose a minimal, high‑signal form in just a few lines.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              placeholder="maria@studio.dev"
              className="h-9"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="role">
              Role
            </label>
            <Input id="role" placeholder="Product design" className="h-9" />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="ghost" size="sm">
              Cancel
            </Button>
            <Button size="sm">Send invite</Button>
          </div>
        </CardContent>
      </Card>
    ),
    usage: `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function Example() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Invite collaborator</CardTitle>
        <CardDescription>
          Compose a minimal, high‑signal form in just a few lines.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            placeholder="maria@studio.dev"
            className="h-9"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium" htmlFor="role">
            Role
          </label>
          <Input id="role" placeholder="Product design" className="h-9" />
        </div>
        <div className="flex justify-end gap-2 pt-2">
          <Button variant="ghost" size="sm">
            Cancel
          </Button>
          <Button size="sm">Send invite</Button>
        </div>
      </CardContent>
    </Card>
  );
}`,
    instructions: [
      "Align labels and fields vertically for short forms; switch to grid only when necessary.",
      "Keep primary actions right‑aligned for predictable scanning.",
      "Use compact controls (`h-9`, `size=\"sm\"`) when stacking multiple fields in a narrow column.",
    ],
  },
  {
    id: "switch",
    name: "Settings toggle",
    category: "Input",
    tagline: "Micro‑interactions for binary preferences.",
    difficulty: "easy",
    preview: (
      <Card className="max-w-md">
        <CardContent className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              Email notifications
            </p>
            <p className="text-xs text-muted-foreground">
              Get a short summary when something important changes.
            </p>
          </div>
          <Switch defaultChecked />
        </CardContent>
      </Card>
    ),
    usage: `import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";

export function Example() {
  return (
    <Card className="max-w-md">
      <CardContent className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">
            Email notifications
          </p>
          <p className="text-xs text-muted-foreground">
            Get a short summary when something important changes.
          </p>
        </div>
        <Switch defaultChecked />
      </CardContent>
    </Card>
  );
}`,
    instructions: [
      "Use switches for instant, reversible preferences — not destructive actions.",
      "Always pair the switch with a short label and a one‑line explanation.",
      "Keep the hit‑area generous by spacing label and control at least `gap-3` apart.",
    ],
  },
];

export default function Home() {
  const [selectedId, setSelectedId] =
    useState<PlaygroundComponentId>("button");

  const selected = PLAYGROUND_COMPONENTS.find(
    (item) => item.id === selectedId
  )!;

  return (
    <SidebarProvider className="bg-gradient-to-br from-background via-background to-muted/60">
      <Sidebar collapsible="icon">
        <SidebarRail />
        <SidebarHeader className="px-3 pb-1 pt-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-700 dark:from-zinc-50 dark:to-zinc-300 shadow-sm" />
            <div className="flex flex-col">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Flowcn
              </span>
              <span className="text-sm font-semibold">Playground</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Patterns</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {PLAYGROUND_COMPONENTS.map((component) => (
                  <SidebarMenuItem key={component.id}>
                    <SidebarMenuButton
                      isActive={component.id === selectedId}
                      onClick={() => setSelectedId(component.id)}
                    >
                      <span className="truncate">{component.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="min-h-svh">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <div>
              <h1 className="text-base font-semibold leading-tight">
                Shadcn patterns, curated
              </h1>
              <p className="text-xs text-muted-foreground">
                Pick a pattern from the left, study the preview, then copy the
                exact implementation.
              </p>
            </div>
          </div>
          <div className="hidden gap-2 text-xs text-muted-foreground sm:flex">
            <span className="rounded-full border px-2 py-1">
              {selected.category}
            </span>
            <span className="rounded-full border px-2 py-1 capitalize">
              {selected.difficulty} build
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 px-6 py-4">
          <Tabs defaultValue="preview" className="flex h-full flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold">{selected.name}</h2>
                <p className="max-w-xl text-sm text-muted-foreground">
                  {selected.tagline}
                </p>
              </div>
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="usage">Code</TabsTrigger>
                <TabsTrigger value="notes">Instructions</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="preview" className="flex-1">
              <Card className="h-full min-h-[260px] justify-center border-dashed bg-muted/40">
                <CardContent className="flex h-full items-center justify-center">
                  {selected.preview}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="flex-1">
              <Card className="h-full min-h-[260px] overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Drop‑in snippet
                  </CardTitle>
                  <CardDescription>
                    Copy this into a client component and tweak the Tailwind
                    tokens to match your brand system.
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-full">
                  <ScrollArea className="h-[260px] rounded-md border bg-muted/40 p-4 text-xs font-mono leading-relaxed">
                    <pre className="whitespace-pre">
                      <code>{selected.usage}</code>
                    </pre>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="flex-1">
              <Card className="h-full min-h-[260px]">
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Implementation notes
                  </CardTitle>
                  <CardDescription>
                    Practical, opinionated guidance for making this pattern feel
                    sharp in production.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                    {selected.instructions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
    </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
