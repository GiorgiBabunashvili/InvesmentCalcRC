import { calculateInvestmentResults } from "../util/investment";

const Results = ({ userInput }) => {
  const resData = calculateInvestmentResults(userInput);
  console.log(resData);
  return <p>results...</p>;
};

export default Results;
