import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// blogRouter.use("/*", async (c, next) => {
//   // get the header
//   const jwt = c.req.header("authorization") || "";
//   if (!jwt) {
//     c.status(401);
//     return c.json({ error: "unauthorized" });
//   }
//   // Bearer token => ["Bearer", "token"];
//   const token = jwt.split(" ")[1];

//   // verify the header
//   const response = await verify(token, c.env.JWT_SECRET);

//   // if the header is correct, we can proceed
//   if (response) {
//     next();
//   } else {
//     // if not, we return the user a 403 status code
//     c.status(403);
//     return c.json({ error: "unauthorized" });
//   }
// });

// blogRouter.post("/", async (c) => {
//   const body = await c.req.json();
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());

//   await prisma.post.create({
//     data: {
//       title: body.title,
//       content: body.content,
//       authorId: 1;
//     },
//   });

//   return c.text("Blog Route");
// });

blogRouter.put("/", (c) => {
  return c.text("Blog Route");
});

blogRouter.get("/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("Blog Id Route");
});

blogRouter.get("/bulk", (c) => {
  return c.text("Blog bulk Route");
});
