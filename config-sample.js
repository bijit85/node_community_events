'use strict';

exports.port = process.env.PORT || 3000;
exports.mongodb = {
    uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || '****'
};
exports.companyName = 'Community Events';
exports.projectName = 'Community Events';
exports.systemEmail = 'thisisme1985@gmail.com';
exports.cryptoKey = 'k3yb0ardc4t';
exports.loginAttempts = {
    forIp: 50,
    forIpAndUser: 7,
    logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.smtp = {
    from: {
        name: process.env.SMTP_FROM_NAME || exports.projectName +' Community Events',
        address: process.env.SMTP_FROM_ADDRESS || 'thisisme1985@gmail.com'
    },
    credentials: {
        user: process.env.SMTP_USERNAME || 'thisisme1985@gmail.com',
        password: process.env.SMTP_PASSWORD || '********',
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        ssl: true
    }
};
exports.oauth = {
    twitter: {
        key: process.env.TWITTER_OAUTH_KEY || '',
        secret: process.env.TWITTER_OAUTH_SECRET || ''
    },
    facebook: {
        key: process.env.FACEBOOK_OAUTH_KEY || '',
        secret: process.env.FACEBOOK_OAUTH_SECRET || ''
    },
    github: {
        key: process.env.GITHUB_OAUTH_KEY || '',
        secret: process.env.GITHUB_OAUTH_SECRET || ''
    },
    google: {
        key: process.env.GOOGLE_OAUTH_KEY || '',
        secret: process.env.GOOGLE_OAUTH_SECRET || ''
    },
    tumblr: {
        key: process.env.TUMBLR_OAUTH_KEY || '',
        secret: process.env.TUMBLR_OAUTH_SECRET || ''
    }
};
