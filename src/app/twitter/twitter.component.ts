import { Component, OnInit } from "@angular/core";
import { TwitterService } from "../twitter.service";

@Component({
  selector: "app-twitter",
  templateUrl: "./twitter.component.html",
  styleUrls: ["./twitter.component.scss"]
})
export class TwitterComponent implements OnInit {
  tweet: any;
  date: any;

  constructor(private twitterService: TwitterService) {}

  ngOnInit() {}

  handleClick(tweetvalue) {
    var p = '{"status" : "' + tweetvalue + '" }';
    console.log("This is tweet json parse", JSON.parse(p));
    this.twitterService.postTweet(JSON.parse(p)).subscribe(data => {
      this.tweet = data["result_twit"];
      this.date = data["created"];
      console.log("This is data twitter", data);
    });
  }
}
