export const guildMemberRemoveHandler = (client) => {
    client.on('guildMemberRemove', (member) => {
      const farewellChannel = member.guild.channels.cache.find(
        (channel) => channel.name === '오렌지향-발자취'
      );
      if (farewellChannel) {
        farewellChannel.send(`${member.user.tag}의 앞날이 커피와 오렌지처럼 향기롭길 👋`);
      }
    });
  };
  