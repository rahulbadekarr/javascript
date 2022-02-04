// If the method is in object , this refers to the current object method-->object
//And If the function is not in object if refers to the window   Function-->global(window,global)

const tutorial={
    name:'monica',
    learn(){
        console.log(this)
    }
};