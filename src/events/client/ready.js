const { ActivityType } = require('discord.js')
module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`${client.user.tag} is logged in and online.`);
    const activities = [
      {
        name: "Besegelt die See in Sea of Thieves.",
        type: ActivityType.Playing,
      },
      {
        name: "Baut ein Raft.",
        type: ActivityType.Playing,
      },
      {
        name: "Bewirtschaftet ein Feld in Farming Simulator 22.",
        type: ActivityType.Playing,
      },
      {
        name: "Youtube",
        type: ActivityType.Watching,
      },
      {
        name: "dein Discord Stream.",
        type: ActivityType.Watching,
      },
    ];
    setInterval(() => {
      const random = Math.floor(Math.random() * activities.length);
      client.user.setActivity(activities[random]);
    }, 10000);
  },
};
