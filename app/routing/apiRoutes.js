var friends = require("../data/friends");

module.exports = function (app) {


    // GET ROUTE
    app.get("/api/friends", function (req, res) {
        // displays JSON of all possible friends
        return res.json(friends);
    });


    // POST ROUTE 
    app.post("/api/friends", function (req, res) {
        // handles incoming survey results &&compatibility logic 
        var newFriend = req.body;

        console.log(newFriend);

    //     for (var i = 0; i < newFriend.scores.length; i++) {
    //         newFriend.scores[i] = parseInt(newFriend.scores[i]);
    //     }

    //     var closestDifference = 0;
    //     var biggestDifference = 40;

    //     for (var i = 0; i < friends.length; i++) {


    //         for (var j = 0; j < friends[i].scores.length; j++) {
    //             var difference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);

    //         }


    //         if (difference < biggestDifference) {
    //             closestDifference = i;
    //             biggestDifference = difference;
    //         }
    //     }

    //     friends.push(newFriend);

    //     res.json(friends[closestDifference]);
    // })

}