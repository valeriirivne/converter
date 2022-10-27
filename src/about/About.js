import { Link } from 'react-router-dom';

const About = (props) => {
  console.log(props);

  console.log(props.fromCurrency);
  const { fromCurrency, forCurrencyPage } = props;
  console.log(fromCurrency, forCurrencyPage);
  return (
    <div>
      <div>Page Main with currency</div>
      {forCurrencyPage && (
        <section>
          <div>
            `{fromCurrency} to USD ${forCurrencyPage.USD}`
          </div>
          <div>
            `{fromCurrency} to PLN ${forCurrencyPage.PLN}`
          </div>
          <div>
            `{fromCurrency} to EUR ${forCurrencyPage.EUR}`
          </div>
        </section>
      )}
      {/* {fromCurrency} to "PLN"{forCurrencyPage.PLN} */}
    </div>
  );
};
export default About;
