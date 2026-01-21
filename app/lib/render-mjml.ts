import mjml2html from "mjml";
import { EmailTemplate } from "./email-schema";

export function renderMJML(template: EmailTemplate) {
  const mjml = `
<mjml>
  <mj-body>
    ${template.sections
      .map(
        (s) => `
      <mj-section>
        ${s.columns
          .map(
            (c) => `
          <mj-column>
            ${c.blocks
              .map(
                (b) => `
              <mj-text 
                font-size="${b.props.fontSize}"
                color="${b.props.color}"
                align="${b.props.align}"
              >
                ${b.props.content}
              </mj-text>
            `
              )
              .join("")}
          </mj-column>
        `
          )
          .join("")}
      </mj-section>
    `
      )
      .join("")}
  </mj-body>
</mjml>
`;

  return mjml2html(mjml).html;
}
