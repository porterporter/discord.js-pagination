const paginationEmbed = async (msg, pages, emojiList = ['⏪', '⏩'], timeout = 120000) => {
	if (!msg.channel) throw new Error('Channel is inaccessible.');
	let page = 0;
	const curPage = await msg.channel.send(pages[page].setFooter(`Page ${page + 1} / ${pages.length}`));
	await postReactionEmojis(curPage, emojiList);
	const reactionCollector = curPage.createReactionCollector(
		(reaction, user) => emojiList.includes(reaction.emoji.name) && user.id === msg.author.id,
		{ time: timeout }
	);
	reactionCollector.on('collect', reaction => {
		reaction.users.remove(msg.author);
		switch (reaction.emoji.name) {
			case emojiList[0]:
				page = page > 0 ? --page : pages.length - 1;
				break;
			case emojiList[1]:
				page = page + 1 < pages.length ? ++page : 0;
				break;
			default:
				break;
		}
		curPage.edit(pages[page].setFooter(`Page ${page + 1} / ${pages.length}`));
	});
	reactionCollector.on('end', () => curPage.reactions.removeAll());
	return curPage;
};

const postReactionEmojis = async (msg, emojiList) => {
	await msg.react(emojiList.shift());
	if (emojiList.length > 0) postReactionEmojis(msg, emojiList);
};

module.exports = paginationEmbed;