import app from "./app.js";

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log(`[SERVER] Now running on port ${PORT}`));
