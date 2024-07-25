import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

const Results = ({ userInput }) => {
  const resData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resData[0].valueEndOfYear -
    resData[0].interest -
    resData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resData.map((yearData) => {
          const totalInterestValue =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const totalAmountInvested = (yearData.valueEndOfYear =
            totalInterestValue);

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterestValue)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
