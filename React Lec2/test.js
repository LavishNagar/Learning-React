const obj={
    fun1:function (){
        console.log(this);// here 'this' refer to its parenttype example obj
    },
    fun2:()=>{
        console.log(this);   //here 'this' refers to parenttype ka this


    }
}
obj.fun1();  // object
obj.fun2();// window object



function greet(){ 
    console.log(this); // Output- here this refer to the window object
}
greet();