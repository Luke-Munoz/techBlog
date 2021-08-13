const seedBlog = require('./blogPost')
const sequelize = require('../configuration/config');

const seeding = async() => {
    await sequelize.sync({ force: true });
    console.log('\n ------- DATABASE SYNCED -------\n')
    await seedBlog();
    console.log('\n -------Blog Seeded ----- \n')

    process.exit(0);
};

seeding();