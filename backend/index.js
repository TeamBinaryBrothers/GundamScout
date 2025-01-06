const express = require("express");
const app = express();

// Needed to accept requests from frontend hosted on a different origin (address/port).
const cors = require("cors");
const corsOptions = {
  origin: ("http://localhost:5173")  // Vite servers run on port 5173 by default
};

app.use(cors(corsOptions));

// Sends initial gundam objects
app.get("/gundams/init", (req, res) => {
  res.json({
    gundams: [
      {
        image:
          "https://static.wikia.nocookie.net/gunplabuilders/images/f/fa/RG-RX-78-2-Gundam-(2.0)-box.jpg",
        content: "RG 1/144 RX-78-2 Gundam [Ver. 2.0]",
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/2786/5582/products/191_3419_s_to0m866o5x5p8duhwc8b2f6wjvxz_clipped_rev_1.png",
        content: "MG 1/100 ASW-G-08 Gundam Barbatos",
      },
      {
        image:
          "https://static.wikia.nocookie.net/gunplabuilders/images/2/2e/MG-Gundam-NT-1-%28Ver.2.0%29-box.jpg",
        content: "MG 1/100 RX-78NT-1 Gundam NT-1 Alex Ver 2.0",
      },
      {
        image:
          "https://static.wikia.nocookie.net/gunplabuilders/images/b/b7/PG-Unicorn-Gundam-box.jpg",
        content: "PG 1/60 Unicorn Gundam",
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/2786/5582/files/boxart_45828b86-66cc-4905-b463-906b778f84bf.jpg",
        content: "HG 1/144 Gundam Calibarn",
      },
      {
        image:
          "https://ae01.alicdn.com/kf/Sa5c9f138c7ac4292bd149bba57923c71l.jpg",
        content: "SD Gundam Aerial EX-Standard Gunpla",
      },
      {
        image: "",
        content: "Box 7",
      },
      {
        image: "",
        content: "Box 8",
      },
      {
        image: "",
        content: "Box 9",
      },
      {
        image: "",
        content: "Box 10",
      },
      {
        image: "",
        content: "Box 11",
      },
      {
        image: "",
        content: "Box 12",
      }
    ]
  });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
