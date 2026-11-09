import { getPerson } from './getPerson';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { Child1 } from './child1';
import { Reset } from './Reset';

function expensivFunction() {
  console.log('expensive function invoked');
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    sum++;
  }
  return sum;
}

export function PersonScore() {
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerson().then(function (person: any): void {
      setLoading(false);
      setName(person.name);
      console.log('state value are ', setLoading.name);
    });
  }, []);

  //without useing useMemo
  const expensiveCalculation = useMemo(() => expensivFunction(), []);

  // export function PersonScore() {
  //   useEffect(() => {
  //     async function fetchPerson() {
  //       const person = await getPerson();
  //       console.log(person);
  //     }
  //     fetchPerson();
  //   }, []);

  //useEffect(() => {}, [name, score]);

  //   function handleReset() {
  //     setScore(0);
  //   }
  const handleReset = useCallback(() => setScore(0), []);

  // function callBack1() {
  //   setScore(0);
  // }

  // without using useCallBack() hook
  const callBack1 = useCallback(() => setScore(0), []);

  return (
    <div>
      <h3>
        {name},{score}
      </h3>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={() => setScore(score + 1)}>Add</button>
      <button onClick={() => setScore(score - 1)}>Subtract</button>
      {/* //<button onClick={() => setScore(0)}>Reset</button> */}
      <Reset propMethod={callBack1} />
    </div>
  );
}
