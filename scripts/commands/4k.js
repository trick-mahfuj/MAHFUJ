module.exports.config = {
  name: "album",
  version: "0.0.3",
  permission: 0,
  prefix: 'awto',
  credits: "Nayan",
  description: "Random video",
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("╭──────•𝚂𝙷𝙰𝙾𝙽 𝙿𝚁𝙾𝙹𝙴𝙲𝚃•──────╮\n\n☢━━━━━━💛𝙰𝙻𝙱𝚄𝙼 𝚅𝙸𝙳𝙴𝙾💛━━━━━━☢ \n!\n!➤1 𝙸𝚂𝙻𝙰𝙼 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤2 𝙰𝙽𝙸𝙼𝙴 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤3 𝚂𝙷𝙰𝙸𝚁𝙸 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤4 𝚂𝙷𝙾𝚁𝚃 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤5 𝚂𝙰𝙳𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤6 𝚂𝚃𝙰𝚃𝚄𝚂 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤7 𝙵𝙾𝙾𝚃𝙱𝙰𝙻𝙻 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤8 𝙵𝚄𝙽𝙽𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤9 𝙻𝙾𝚅𝙴 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤10 𝙲𝙿𝙻 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤11 𝙱𝙰𝙱𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤12 𝙵𝚁𝙴𝙴 𝙵𝙸𝚁𝙴 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤13 𝙻𝙾𝙵𝙸 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤14 𝙷𝙰𝙿𝙿𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤15 𝙷𝚄𝙼𝙰𝙸𝚈𝚄𝙽 𝚂𝙸𝚁 𝚅𝙸𝙳𝙴𝙾◄┈╯\n☢━━━━━━💚𝙷𝙾𝚃 𝚅𝙸𝙳𝙴𝙾━━━━━━☢\n!➤16 𝚂𝙴𝚇 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤17 𝙷𝙾𝚁𝙽𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤18 𝙸𝚃𝙴𝙼 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤19 𝙷𝙾𝚃 𝚅𝙸𝙳𝙴𝙾◄┈╯\n!\n!➤20 𝙲𝙰𝙿𝙲𝚄𝚃 𝚅𝙸𝙳𝙴𝙾◄┈╯\n━━━━━━━━━━━━━━━━━━━━━\n𝙾𝚆𝙽𝙴𝚁:𝚂𝙷𝙰𝙾𝙽 𝙰𝙷𝙼𝙴𝙳\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n𝙰 𝙿 𝙸//𝚂𝙷𝙰𝙾𝙽\n━━━━━━━━━━━━━━━━━━━━━\n╰──────•𝚂𝙷𝙰𝙾𝙽 𝙿𝚁𝙾𝙹𝙴𝙲𝚃•──────╯\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}; 

module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = await linkanh(a.body);
  const axios = require("axios");
  if ("create" === t.type) {
    const response = await p.get(h);
    const data = response.data.data;
    const cap = response.data.shaon;
    const cn = response.data.count;
    let nayan = (await p.get(data, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: `🟡${cap}\n𝚃𝙾𝚃𝙰𝙻 𝚅𝙸𝙳𝙴𝙾:${cn}\n𝙰 𝙿 𝙸  𝚂 𝙷 𝙰 𝙾 𝙽📛`,
      attachment: nayan
    }, a.threadID, a.messageID)
  }
};

async function linkanh(choice) {
  const axios = require("axios");
  const apis = await axios.get('https://raw.githubusercontent.com/shaonproject/Shaon/main/api.json');
  const n = apis.data.api
  const options = {
    "1": "/video/islam",
    "2": "/video/anime",
    "3": "/video/shairi",
    "4": "/video/short",
    "5": "/video/sad",
    "6": "/video/status",
    "7": "/video/football",
    "8": "/video/funny",
    "9": "/video/love",
    "10": "/video/cpl",
    "11": "/video/baby",
    "12": "/video/kosto",
    "13": "/video/lofi",
    "14": "/video/happy",
    "15": "/video/humaiyun",
    "16": "/video/sex",
    "17": "/video/horny",
    "18": "/video/item",
    "19": "/video/hot",
    "20": "/video/capcut",
    
  };
  const h = `${n}${options[choice]}`;
  return { p: axios, h };
}
