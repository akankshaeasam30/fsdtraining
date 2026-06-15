// const EventEmmiter=require("events");
// const events=new EventEmmiter();
// events.on("greet",()=>{
//     console.log("event triggered");
// });
// events.emit("greet")
const EventEmmiter=require("events")
const event=new EventEmmiter();
event.on("greet",(name)=>{
    console.log("hello! ",name)
})
event.emit("greet","akanksha")