const https = require("https");
const cheerio = require("cheerio");

https.get("https://maoyan.com/films", (res) => {
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


            // const dd = $(this).html();
            // // const a = dd(".movie-item-title").html();
    

            // console.log(a.text());
            // console.log(a.attr("data-val"));







            // console.log($(this).html());


        });



        // console.log($("h1").html());


    });
});





