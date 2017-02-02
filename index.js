const types = {
  notify: 1,
  friends: 2,
  photos: 3,
  audio: 8,
  video: 16,
  pages: 128,
  status: 1024,
  notes: 2048,
  messages: 4096,
  wall: 8192,
  ads: 32768,
  offline: 65536,
  docs: 131072,
  groups: 262144,
  notifications: 524288,
  stats: 1048576,
  email: 4194304,
  market: 134217728
}

exports.toStr = int => {
  let str = []
  for (let key in types) {
    if (int & types[key]) str.push(key)
  }
  return str.join(',')
}

exports.toInt = str => {
  str = str.replace(/\s/g, '').split(',')
  let int = 0
  for (let item of str) {
    if (types[item]) int += types[item]
  }
  return int
}
