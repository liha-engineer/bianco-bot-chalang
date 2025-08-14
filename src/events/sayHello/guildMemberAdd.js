import { DEFAULT_ROLE_ID, GUIDE_CHANNEL_ID, ANNOUNCEMENT_CHANNEL_ID } from '../../constants/env.js';

export const guildMemberAddHandler = (client) => {
  client.on('guildMemberAdd', async (member) => {
    const memberInfo = `${member.user.tag}(${member.user.id})`
    console.log(`${memberInfo} joined the server.`);

    // 역할 추가
    const role = member.guild.roles.cache.get(DEFAULT_ROLE_ID);
    if (!role) {
      console.error('역할을 찾을 수 없습니다. DEFAULT_ROLE_ID를 확인하세요.');
      return;
    }

    try {
      await member.roles.add(role);
      console.log(`Role "${role.name}" assigned to ${memberInfo}`);
    } catch (error) {
      console.error('역할 부여 중 오류:', error);
    }

    // 환영 메시지
    const welcomeChannel = member.guild.channels.cache.find(
      (channel) => channel.name === '담소와-기록들'
    );
    const guideChannel = member.guild.channels.cache.find((channel) => channel.id === GUIDE_CHANNEL_ID)
    const announceChannel = member.guild.channels.cache.find((channel) => channel.id === ANNOUNCEMENT_CHANNEL_ID)
    const historyChannel = member.guild.channels.cache.find((channel) => channel.id === HISTORY_CHANNEL_ID)
    if (welcomeChannel) {
      welcomeChannel.send(`🎉 어서와요 ${member}! 
        커피향 가득한 하루가 되길!`);
    } else {
      

      console.error("환영인사를 보낼 채널이 없습니다. 채널 ID를 확인해 주세요.")
    }
  });
};
