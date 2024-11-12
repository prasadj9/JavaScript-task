//method -> object // in object methods this represent current object they are in
//normal function -> global(window or global) //in normal function this represent global object

//examples
const video = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    // showTags() {
    //     this.tags.forEach(function(tag) {
    //         console.log(this.title , tag); 
    //     }, this)
    // },
    showTags() {
        this.tags.forEach(tag => {  //arrow function inherits this from parent function
            console.log(this.title , tag); 
        })
    },
    play(){
        console.log(this);
    }
}
video.stop = function() {
    console.log(this);
    
}
video.play();
video.stop();
video.showTags();


//Call, apply, bind
function playVideo(a, b) {
    console.log(this);
}

// playVideo(); // logs global object
playVideo.call(video, 1, 2); // this will refer to video obj
playVideo.apply({name : "Prasad"}, [1,2]) // same as call but takes args as an array
const fn = playVideo.bind({name : "Prasad"}) // return function that binds this to passed obj   
fn();