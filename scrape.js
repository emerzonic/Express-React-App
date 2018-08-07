var request = require('request'),
    cheerio = require('cheerio');


module.exports = function webScapper(cb) {
    // define an empty array to hold all the articles and another one for the article data
    var scrapedDataArray = [], scrapedData;
    request("https://www.nytimes.com/section/technology?module=SectionsNav&action=click&version=BrowseTree&region=TopBar&contentCollection=Tech&pgtype=sectionfront", function (err, response, html) {
        var $ = cheerio.load(html);
            $("article").each(function(i, element) {
            var url = $(element).find('a').attr('href');
            var img = $(element).find('img').attr('src');
            var title = $(element).find('h2').text();
            var summary = $(element).find('.summary').text();
            var writer = $(element).find('.byline').text();
            // If all the values are present then create the object
            if (title && url && img && summary && writer) {
                scrapedData = {
                    title: title,
                    url: url,
                    img: img,  
                    summary: summary,  
                    writer: writer
                };
                scrapedDataArray.push(scrapedData);
            }
        });
        // send back array of articles or err if any
        return cb(err, scrapedDataArray);
    });
};



