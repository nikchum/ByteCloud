export const companies = {
  backblaze: {
    name: 'backblaze',
    icon: 'https://www.backblaze.com/blog/wp-content/uploads/2017/12/backblaze_icon_transparent.png',
    color: 'red',
  },
  bunny: {
    name: 'bunny',
    icon: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1fff394b86d3cd58b2e72b3d467cf332/bunny-net.png',
    color: 'orange',
    options: [
      { name: 'disk', title: 'HDD', value: 'hdd', defaultChecked: true },
      { name: 'disk', title: 'SSD', value: 'ssd' },
    ],
  },
  scaleway: {
    name: 'scaleway',
    icon: 'https://pbs.twimg.com/profile_images/1543941740016685056/mvVbPbfh_400x400.png',
    color: 'purple',
    options: [
      { name: 'type', title: 'Multi', value: 'multi', defaultChecked: true },
      { name: 'type', title: 'Single', value: 'single' },
    ],
  },
  vultr: {
    name: 'vultr',
    icon: 'https://www.vultr.com/favicon/android-chrome-512x512.png',
    color: 'blue',
  },
};
