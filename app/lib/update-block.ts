import { EmailTemplate } from "./email-schema";

export function updateBlockInTemplate(
  template: EmailTemplate,
  blockId: string,
  newProps: Record<string, any>
): EmailTemplate {
  return {
    ...template,
    sections: template.sections.map((section) => ({
      ...section,
      columns: section.columns.map((column) => ({
        ...column,
        blocks: column.blocks.map((block) =>
          block.id === blockId
            ? {
                ...block,
                props: {
                  ...block.props,
                  ...newProps,
                },
              }
            : block
        ),
      })),
    })),
  };
}
