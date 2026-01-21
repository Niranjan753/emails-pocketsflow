import { EmailTemplate } from "../../lib/email-schema";

type Props = {
  template: EmailTemplate;
  selectedBlockId: string | null;
  onSelect: (id: string) => void;
};

export function Canvas({ template, selectedBlockId, onSelect }: Props) {
  return (
    <div className="max-w-[600px] mx-auto bg-white p-4">
      {template.sections.map((s) =>
        s.columns.map((c) =>
          c.blocks.map((b) => (
            <div
              key={b.id}
              onClick={() => onSelect(b.id)}
              className={`border p-2 mb-2 cursor-pointer ${
                b.id === selectedBlockId ? "border-blue-500" : "border-transparent"
              }`}
            >
              <div
                contentEditable
                suppressContentEditableWarning
                style={{
                  fontSize: b.props.fontSize,
                  color: b.props.color,
                  textAlign: b.props.align,
                }}
              >
                {b.props.content}
              </div>
            </div>
          ))
        )
      )}
    </div>
  );
}
