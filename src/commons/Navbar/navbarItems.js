import myProfile from 'media/my profile.svg';
import myFeed from 'media/my feed.svg';
import buddy from 'media/buddy.svg';
import live from 'media/live.svg';
import faq from 'media/faq.svg';
import buz from 'media/buz.svg';

const navbarItems = [
  {
    title: 'MY PROFILE',
    path: '/my-profile',
    color: '#ffbe00',
    left: '-8px',
    top: '-5px',
    bg: myProfile
  },
  {
    title: 'MY FEED',
    path: '/feed',
    color: '#4db6ac',
    left: '-6px',
    top: '-5px',
    bg: myFeed
  },
  {
    title: 'BUDDY',
    path: '/buddy',
    color: '#9fa8da',
    left: '0px',
    top: '0px',
    bg: buddy
  },
  {
    title: 'LIVE',
    path: '/live',
    color: '#e57373',
    left: '-4px',
    top: '-5px',
    bg: live
  },
  {
    title: 'FAQ',
    path: '/faq',
    color: '#e57373',
    left: '-5px',
    top: '-5px',
    bg: faq
  },
  {
    title: 'BUZ',
    path: '/buz',
    color: '#e57373',
    left: '-5px',
    top: '-5px',
    bg: buz
  }
];

export default navbarItems;
