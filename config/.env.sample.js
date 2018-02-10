const config = {
  PORTS: {
    rest: "",
    socket: ""
  },
  URLS: {
    RDS_URL: ""
  },
  CREDENTIALS: {
    RDS: {
      db: "",
      user: "",
      password: "",
      PORT: ""
    }
  },
  AUTH: {
    APP_SECRET: "",
    SALT_ROUNDS: ""
  }
}

const envBuild = {
  "rest-server": [
    `PORT=${config.PORTS.rest}`,
    `RDS_URL=${config.URLS.RDS_URL}`,
    `RDS_DB=${config.CREDENTIALS.RDS.db}`,
    `RDS_USER=${config.CREDENTIALS.RDS.user}`,
    `RDS_PASSWORD=${config.CREDENTIALS.RDS.password}`,
    `SALT_ROUNDS=${config.AUTH.SALT_ROUNDS}`,
    `APP_SECRET=${config.AUTH.APP_SECRET}`
  ],
  "socket-server": [
    `PORT=${config.PORTS.socket}`,
    `RDS_URL=${config.URLS.RDS_URL}`,
    `RDS_USER=${config.CREDENTIALS.RDS.user}`,
    `RDS_PASSWORD=${config.CREDENTIALS.RDS.password}`
  ],
};

module.exports = envBuild;