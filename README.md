# SWOTFLIX V3

Netflix-inspired interactive SWOT presentation for Adam, Gurpreet, Sebastian and the combined team.

## Run locally on Windows

```bat
cd /d "D:\SWOT\SWOTFLIX_Vercel_Ready_v3\swotflix-site"
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy on Vercel

Deploy the `swotflix-site` folder as a static site. No build command is required.

## V3 changes

- Uses Adam, Gurpreet and Sebastian profile photos, plus a combined team collage.
- Four SWOT tiles are visible per desktop row before horizontal scrolling.
- Every SWOT tile has its own unique local background artwork, so there are no repeated tile backgrounds and no image-host dependency.
- Tile badges such as `S • TOP EPISODES` are removed.
- Section labels show the mapping: Top Episodes (Strengths), Plot Twists (Weaknesses), Next Season (Opportunities), Plot Disruptors (Threats).
- Hovering a tile reveals its one-line explanation.
