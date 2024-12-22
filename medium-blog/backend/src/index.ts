import { Hono } from "hono";

const app = new Hono();

app.post("/api/v1/signup", (c) => {
  return c.text("Signup Route");
});

app.post("/api/v1/signin", (c) => {
  return c.text("Signin Route");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Blog Route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Blog Route");
});

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("Blog Id Route");
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("Blog bulk Route");
});

export default app;
