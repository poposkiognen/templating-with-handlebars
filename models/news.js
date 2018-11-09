const faker = require('faker');


const NewsGenerator = {
    generate: function () {
        var generatedNews = {
            title: "",
            imageUrl: "",
            author: "",
            text: "",
            shortText: ""
        }

        generatedNews.title = faker.name.title();
        generatedNews.imageUrl = faker.image.imageUrl();
        generatedNews.author = faker.name.findName();
        generatedNews.text = faker.lorem.text();
        return generatedNews;
    },
    generateMultiple: function (n) {
        var generatedNews = [];
        for(var i = 0; i < n; i++) generatedNews.push(this.generate());
    }
}

module.exports = NewsGenerator;