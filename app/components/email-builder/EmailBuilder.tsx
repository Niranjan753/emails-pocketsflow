"use client";

import { useState } from "react";
import { EmailTemplate } from "../../lib/email-schema";
import { Canvas } from "./Canvas";
import { Inspector } from "./Inspector";
import { renderMJML } from "../../lib/render-mjml";

type Props = {
  value: EmailTemplate;
  onChange: (t: EmailTemplate) => void;
};

export function EmailBuilder({ value, onChange }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const html = renderMJML(value);

  return (
    <div className="grid grid-cols-[1fr_400px] h-screen">
      <div className="p-6 space-y-6 overflow-auto">
        <Canvas template={value} selectedBlockId={selected} onSelect={setSelected} />

        <h3 className="font-semibold">Email Preview</h3>
        <iframe className="w-full h-[400px] border" srcDoc={html} />
      </div>

      <aside className="border-l p-4">
        <Inspector template={value} selectedBlockId={selected} onChange={onChange} />
      </aside>
    </div>
  );
}
