let Configs
if (process.env.NODE_ENV === 'production')
{
    Configs = require('./configs-dev.json')
}
else
{
    Configs = require('./configs-dev.json')
}

module.exports = Configs