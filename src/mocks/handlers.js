import { rest } from "msw";

export const handlers = [
  rest.get("https://mi-api.com/recursos", (req, res, ctx) => {
    return res(
      ctx.json([
        /* Tus datos de prueba van aquí */
      ])
    );
  }),
];
