<div align="center">
  <p>
    <a href="https://nodei.co/npm/discord.js-pagination
/"><img src="https://nodei.co/npm/discord.js-pagination.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>


# discord.js-pagination
A simple utility to paginate discord embeds. Built on discord.js@^12.0.0 (master) but should work on older versions. Compatible with MessageEmbeds **AS OBJECTS**,. Pages are embeds.

# Installation
* `npm i https://github.com/porterporter/discord.js-pagination/`

# Usage
__Basic Bot Example__
```js
// Import the discord.js-pagination package
const paginationEmbed = require('discord.js-pagination');

// Use either MessageEmbed or RichEmbed to make pages
// Keep in mind that Embeds should't have their footers set since the pagination method sets page info there
const embed1 = { title: 'hello', description: 'this is an embed description!' };

// Create an array of embeds
pages = [ embed1,
		  embed2,
   //.... embedn,
];

// Call the paginationEmbed method, first two arguments are required
// emojiList is the pageturners defaults to ['⏪', '⏩']
// timeout is the time till the reaction collectors are active, after this you can't change pages (in ms), defaults to 120000
paginationEmbed(msg, pages, emojiList, timeout);
// There you go, now you have paged embeds
```
