import { Component, OnInit } from "@angular/core";
import { TwitterService } from "../twitter.service";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit {
  text: any;
  message: any;
  constructor(private twitterService: TwitterService) {}
 
  handleClick(messageValue, messageNum) {
    console.log(".....", messageValue, messageNum);
    var p =
      '{"status" : "' + messageValue + '", "number" : "' + messageNum + '"  }';
    console.log("This is tweet json parse", p);
    alert("Message send it on this number" + messageNum);
    this.twitterService.postMessage(JSON.parse(p)).subscribe(data => {
      console.log("This is data message", p);
    });
  }

  ngOnInit() {}
}
