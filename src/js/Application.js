import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat = new Beat();
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = "Ah";

    this._beat.on(Beat.events.BIT, () => {

//console.log(lyrics.length+"="+count);
      if (count == lyrics.length-1) {
        count = 0;
      } else {
        count++;
      }
      this._create(lyrics[count]);
    });

    document.querySelector(".main").appendChild(message);

    this.emit(Application.events.READY);
  }
  _create(messageText) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = messageText;
    document.querySelector(".main").appendChild(message);
  }
}
