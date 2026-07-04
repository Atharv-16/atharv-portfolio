import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

async function copyEmail() {
  await navigator.clipboard.writeText(DATA.contact.email);
}

export function CopyEmailPill({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Click to copy email"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors cursor-pointer",
        className
      )}
    >
      {copied ? <Check className="size-4 text-primary" /> : <Mail className="size-4" />}
      <span>{copied ? "Copied!" : DATA.contact.email}</span>
    </button>
  );
}

export function useCopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, handleCopy };
}
