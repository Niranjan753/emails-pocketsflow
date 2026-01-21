"use client";

import { useState } from "react";
import { EmailBuilder } from "./components/email-builder/EmailBuilder";
import { defaultTemplate } from "./lib/default-template";

export default function Page() {
  const [template, setTemplate] = useState(defaultTemplate);

  return <EmailBuilder value={template} onChange={setTemplate} />;
}
