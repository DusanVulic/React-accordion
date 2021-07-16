import { useEffect, useState } from 'react';
import data from'./data';
import Header from './Header';
import Question from './Question';




function App() {

const [questions,setQuestion]= useState(data);
console.log (questions);

useEffect(()=>{
  setQuestion(data);
},[]);

  return (
    <>
    <Header/>
    <main>
      <div className="container">
         <h4> questions and answers about login</h4>
         <section className="info">
           { questions.map((question)=> {
             return <Question key = {question.id} {...question}/>
           })}
         </section>
         
        </div> 
       
    
    </main>
    </>
  );
}

export default App;
