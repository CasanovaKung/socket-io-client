let Configs;
if (process.env.NODE_ENV === 'production')
{
    alert('No configs');
}
else
{
    Configs = require('./configs-dev.json');
}

module.exports = Configs;