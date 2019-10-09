const https = require("https");
const cheerio = require("cheerio");

var option={
    hostname: 'maoyan.com',
    path: '/films',
    headers: {
      'Accept':'*/*',
      'Accept-Encoding':'utf-8',
      'Accept-Language':'zh-CN,zh;q=0.8',
      'Connection':'keep-alive',
      'Host':'maoyan.com',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36'
    }
};
// "https://maoyan.com/films"
https.get(option, (res) => {
    var result = "";
    res.on("data", (chunk) => {
        result += chunk;
    });
    res.on("end",() => {
        const $ = cheerio.load(result);

        $("dd").each((index, element) => {

            const el = $(element);
            let movieid = el.find(".movie-item-title a").attr("data-val").slice(9, -1);
            // let movieid = JSON.parse(movieidt);
            let title = el.find(".movie-item-title a").text();
            let num = el.find(".channel-detail-orange").text();

            console.log(movieid, title, num);
        });
    });
});
