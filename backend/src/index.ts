import { app } from "./app";

app.get("/", (_req, res) => {
  res.json({ message: "Express + TypeScript working 🚀" });
});

const PORT = 8000;
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "OK" });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
