## AAC Communication Board

A free, open-source AAC (Augmentative and Alternative Communication) board by Patrick Moran. Public repo; the live board is on GitHub Pages and the project is written up on paktric.com.

- **Plain HTML, CSS and JavaScript.** No build step, frameworks or dependencies.
- **Hosting:** GitHub Pages, from the root of `main`. Every push to `main` goes live, so commit freely but **never push without the owner's OK.**
- **Icons** live in `icons/`, named after the word they show (`icons/yes.svg`). They're Fluent Emoji (MIT); keep `icons/LICENSE`.
  - **Never hotlink images.** Store them in `icons/`.
  - Only use icons whose license doesn't require visible credit (MIT, Apache, public domain). Ask before using anything else.
  - **Planned:** switch to Mulberry Symbols (CC BY-SA 4.0) when the board grows (folders, pages, more vocabulary). That needs a credit line on the board, in the README, and under the screenshot on paktric.com: "Mulberry Symbols by Steve Lee, CC BY-SA 4.0". ARASAAC was ruled out: its non-commercial, same-license terms would apply to the whole board.
- Every `<img>` on a tile has `alt=""`, because the tile's text label already names it. Keep it that way.
- Tile colors follow the Fitzgerald Key (see `style.css`).
