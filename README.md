# AAC Communication Board

A free and open-source communication board for people with communication disorders. Tap a tile to hear its word spoken aloud, or type a custom phrase and press **Speak**.

**Try it:** https://paktric.github.io/aac-communication-board/

## How it works

It's a single web page made with plain HTML, CSS and JavaScript, so there's nothing to install or build. Speech uses the browser's built-in text-to-speech ([Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)). To run it locally, open `index.html` in a browser.

Tile colors follow the [Fitzgerald Key](https://www.communicationcommunity.com/fitzgerald-key-for-aac/), a common AAC color scheme for parts of speech.

## Ideas for later

- Switch to [Mulberry Symbols](https://mulberrysymbols.org/), an open symbol set designed for AAC, once the board grows beyond everyday words. It covers words emoji can't show well, like "I," "me," "more" and "finished." It's CC BY-SA 4.0, so it would need a credit line on the board.
- Customizable tiles
- Adjustable grid sizing
- Text-to-speech voice settings
- Folders and multiple pages

## Credits

Icons are [Fluent Emoji](https://github.com/microsoft/fluentui-emoji) by Microsoft, used under the MIT License (see `icons/LICENSE`).

## License

The code is released under the [MIT License](LICENSE).
