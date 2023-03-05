export const companies = {
  backblaze: {
    name: 'backblaze',
    icon: 'https://www.backblaze.com/blog/wp-content/uploads/2017/12/backblaze_icon_transparent.png',
    color: 'red',
  },
  bunny: {
    name: 'bunny',
    icon: 'https://scontent.fhrk2-1.fna.fbcdn.net/v/t39.30808-6/310213724_596094838913527_7273302277921969525_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CP87d9vckJsAX94T-Zn&_nc_ht=scontent.fhrk2-1.fna&oh=00_AfCbUi0pjCqymv5LGXeY5TyeCuBmuk0gHPh6zDkFDmZBvQ&oe=640A94DA',
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
