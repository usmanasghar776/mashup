import { Component, OnInit } from "@angular/core";
import { TwitterService } from "../twitter.service";

@Component({
  selector: "app-moovie",
  templateUrl: "./moovie.component.html",
  styleUrls: ["./moovie.component.scss"]
})
export class MoovieComponent implements OnInit {
  director: any;
  runtime: any;
  genre: any;
  tweet: any;

  constructor(private twitterService: TwitterService) {}

  handleClick(movievalue) {
    var p = '{"movie" : "' + movievalue + '" }';
    console.log("This is tweet movie json", JSON.parse(p));
    this.twitterService.postMovie(JSON.parse(p)).subscribe(data => {
      //debugger;
      this.director = data["director"];
      this.genre = data["genre"];
      this.runtime = data["runtime"];
      // this.tweet = data["result_twit"];
      // alert(this.tweet);
      console.log("This is data movie", data);
      var s =
        '{"status" : "' +
        data["director"] +
        '" , "duration" : "' +
        data["runtime"] +
        '" ,  "genre" : "' +
        data["genre"] +
        '" }';
      // var con = JSON.stringify(s);
      console.log("This is tweet + movie json parse", JSON.parse(s));
      this.twitterService.postTweet(JSON.parse(s)).subscribe(obj => {
        this.tweet = obj["created"];

        console.log("This is data twitter", obj);
        alert("Tweet Successfully on Twitter : " + this.tweet);
      });
    });
  }

  ngOnInit() {}
}
