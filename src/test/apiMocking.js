// src/mocks/handlers.js
import { rest } from "msw";
import { API_URL } from "../apiServices/apiConfig";

export const handlers = [
  rest.get(`${API_URL}/user`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          email: "#ezfnmc@znzzv.qs",
          id: 1,
          isPublic: false,
          name: "gVLyofWZlj",
          phone: 3404382686,
          username: "IfdYRrE539",
        },
        {
          email: "#hxfxxqan@vhhsj.vc",
          id: 2,
          isPublic: true,
          name: "vwZsLRGI4R",
          phone: 9378157749,
          username: "iGw8DtYqpG",
        },
        {
          email: "#roxlgfq@uzqcc.yc",
          id: 3,
          isPublic: false,
          name: "8cFFK2S62K",
          phone: 1763362046,
          username: "jBfMhsYfjK",
        },
        {
          email: "#mebesal@uyihr.mm",
          id: 4,
          isPublic: false,
          name: "GDMPUkTzLC",
          phone: 6560249339,
          username: "AqIITZ95WD",
        },
        {
          email: "#obxmdn@wxhte.wj",
          id: 5,
          isPublic: true,
          name: "aC7BIrzAov",
          phone: 9567359447,
          username: "DUEAdUwUSM",
        },
      ])
    );
  }),

  rest.post(`${API_URL}/user`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
