let id : number = 5
let company : string = "Acne Corp"
let isPublished : boolean = false;

let ids : number[] = [1, 2, 3, 4, 5];
let x : any = "pedro";
let xArr : any[] = [1, "pedro", true]


const concatenateValues = (a : string, b : string) : string => {
    return a + b;
}

console.log(concatenateValues("Hello", " World"))

interface UserInterface {
    id : number;
    name : String;
    age? : number //optional
}

const User : UserInterface = {
    id : 2,
    name : "Prasad",
}

console.log("User", User);