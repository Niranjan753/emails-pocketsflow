import { EmailTemplate } from "./email-schema";
import { v4 as uuid } from "uuid";

export const defaultTemplate: EmailTemplate = {
  sections: [
    {
      id: uuid(),
      columns: [
        {
          id: uuid(),
          blocks: [
            {
              id: uuid(),
              type: "text",
              props: {
                content: "Welcome to our newsletter 👋",
                fontSize: "18px",
                color: "#111111",
                align: "center",
              },
            },
          ],
        },
      ],
    },
  ],
};
