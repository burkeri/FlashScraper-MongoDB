// dependencies
// axios
var axios = require("axios");
// cheerion
var cheerio = require("cheerio");

// scraper
var scrape = function() {

    return axios.get("https://www.newyorker.com/books/flash-fiction").then(function(res){

        var $ = cheerio.load(res.data);
        var articles = [];

        $("div.River__riverItemContent___2hXMG").each(function(i, el){

            var title = $(this).find("h4").text().trim();
            var author = $(this).find("p").text().trim();
            var summary = $(this).find("h5").text().trim();
            var link = $(this).find("a.Link__link___3dWao").attr("href");
            var image = $(this).find("img").attr("src");

            var scraped = {
                title: title,
                author: author,
                summary: summary,
                link: "https://www.newyorker.com" + link,
                image: image
            };

            articles.push(scraped);
        });

        return articles;

    });

};

module.exports = scrape;