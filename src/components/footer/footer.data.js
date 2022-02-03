import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';


// footer icon svgs
import IconDiscord from 'assets/header/discord.svg';
import IconTelegram from 'assets/header/telegram.svg';
import IconTwitter from 'assets/header/twitter.svg';
import IconInstagram from 'assets/header/instagram.svg';


export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat Communication',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'Adversite',
    },
    {
      path: '/',
      label: 'Supports',
    },
    {
      path: '/',
      label: 'Marketing',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ],
  footermenuItem: [
    {
      path: '/',
      label: 'telegram',
      iconSrc: IconTelegram,
    },
    {
      path: '/',
      label: 'twitter',
      iconSrc: IconTwitter,
    },
    {
      path: '/',
      label: 'discord',
      iconSrc: IconDiscord,
    },
    {
      path: '/',
      label: 'instagram',
      iconSrc: IconInstagram,
    },
  ],
};
