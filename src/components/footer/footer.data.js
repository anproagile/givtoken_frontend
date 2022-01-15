import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';


// footer icon svgs
// import fTelegram from 'assets/widget/telegram.svg';
// import fTwitter from 'assets/widget/twitter.svg';
// import fReddit from 'assets/widget/reddit.svg';
// import fDiscord from 'assets/widget/discord.svg';
// import fGithub from 'assets/widget/github.svg';

// 
import fTelegram from 'assets/widget/twitter.svg';
import fTwitter from 'assets/widget/twitter.svg';
import fReddit from 'assets/widget/twitter.svg';
import fDiscord from 'assets/widget/twitter.svg';
import fGithub from 'assets/widget/twitter.svg';


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
      iconSrc: fTelegram,
    },
    {
      path: '/',
      label: 'twitter',
      iconSrc: fTwitter,
    },
    {
      path: '/',
      label: 'reddit',
      iconSrc: fReddit,
    },
    {
      path: '/',
      label: 'discord',
      iconSrc: fDiscord,
    },
    {
      path: '/',
      label: 'github',
      iconSrc: fGithub,
    },
  ],
};
