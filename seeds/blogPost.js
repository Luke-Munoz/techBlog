const { Blog } = require('../models')

const postData = [{
        title: 'Best equipment',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    },
    {
        title: 'Education',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    },
    {
        title: 'Coding engine',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'
    }
];

const seedBlog = () => Blog.bulkCreate(postData);

module.exports = seedBlog;