import React from 'react'

function Parent(){
  const message="Hello";
  return (
    <div>
    <Child greeting= {message}/>
  
   <ChildThree/>
   <ChildFour/>
   <ChildTwo/>
  </div>
  );



}
function Child({greeting}){
  return<h1>{greeting}</h1>

}

function ChildTwo(){
  return<button>Submit</button>
}

function ChildThree(){
  return <h2>It's working fine</h2>
}
function ChildFour(){
  return <h3>we Finally made it!</h3>
}

export default Parent;



