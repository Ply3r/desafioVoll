const app = require("./api");
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
