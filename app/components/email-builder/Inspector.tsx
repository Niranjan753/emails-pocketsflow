import { EmailTemplate } from "../../lib/email-schema";
import { updateBlockInTemplate } from "../../lib/update-block";

type Props = {
  template: EmailTemplate;
  selectedBlockId: string | null;
  onChange: (t: EmailTemplate) => void;
};

export function Inspector({ template, selectedBlockId, onChange }: Props) {
  if (!selectedBlockId) return <p>Select a block</p>;

  const block = template.sections
    .flatMap((s) => s.columns)
    .flatMap((c) => c.blocks)
    .find((b) => b.id === selectedBlockId);

  if (!block) return null;

  return (
    <div className="space-y-4">
      <select
        value={block.props.fontSize}
        onChange={(e) =>
          onChange(updateBlockInTemplate(template, block.id, { fontSize: e.target.value }))
        }
      >
        <option>14px</option>
        <option>16px</option>
        <option>18px</option>
        <option>20px</option>
      </select>

      <input
        type="color"
        value={block.props.color}
        onChange={(e) =>
          onChange(updateBlockInTemplate(template, block.id, { color: e.target.value }))
        }
      />

      <select
        value={block.props.align}
        onChange={(e) =>
          onChange(updateBlockInTemplate(template, block.id, { align: e.target.value }))
        }
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
    </div>
  );
}
