import Question from "./Question";
import "./styles.css"

export default function App(){
  return(
    <>
    <h1>Project2: faq</h1>
    <div className="container">
      <h2>Frequently asked Questions</h2>
      <div className="questions">
        {questions.map((question)=>(
          <Question key={question.id} question={question}/>
        ))}
        </div>
    </div>
    </>
  )
}
const questions=[
{
  id:1,
  title:"Is this is a good product?",
  info:"Tell me briefly about the product"
},
{
  id:2,
  title:"How much does it cost?",
  info:"Describe the cost of the product"
},
{
  id:3,
  title:"When can I get it ?",
  info:"Tell me the delivery date"
}

];
