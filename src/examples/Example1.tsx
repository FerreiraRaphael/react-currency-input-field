import React, { FC, useState } from 'react';
import CurrencyInput from '../components/CurrencyInput';

export const Example1: FC = () => {
  const limit = 1000;
  const prefix = '£';

  const [errorMessage, setErrorMessage] = useState('');
  const [className, setClassName] = useState('');
  const [value, setValue] = useState<string | number>(123.45);
  const [rawValue, setRawValue] = useState<string | undefined>(' ');

  /**
   * Handle validation
   */
  const handleOnValueChange = (value: string | undefined): void => {
    setRawValue(value === undefined ? 'undefined' : value || ' ');

    if (!value) {
      setClassName('');
      setValue('');
      return;
    }

    if (Number.isNaN(Number(value))) {
      setErrorMessage('Please enter a valid number');
      setClassName('is-invalid');
      return;
    }

    if (Number(value) > limit) {
      setErrorMessage(`Max: ${prefix}${limit}`);
      setClassName('is-invalid');
      setValue(value);
      return;
    }

    setClassName('is-valid');
    setValue(value);
  };

  return (
    <div className="row">
      <div className="col-12 mb-4">
        <a href="https://github.com/cchanxzy/react-currency-input-field/blob/master/src/examples/Example1.tsx">
          <h2>Example 1</h2>
        </a>
        <ul>
          <li>{`'£'`} prefix</li>
          <li>Allows decimals (up to 2 decimal places)</li>
          <li>Value is set programmatically (passed in via props)</li>
        </ul>

        <form className="needs-validation">
          <div className="row">
            <div className="form-group col">
              <label htmlFor="validationCustom01">Please enter a value (max £1,000)</label>
              <CurrencyInput
                id="validationCustom01"
                name="input-1"
                className={`form-control ${className}`}
                value={value}
                onValueChange={handleOnValueChange}
                placeholder="Please enter a number"
                prefix={prefix}
                step={1}
                decimalScale={2}
              />
              <div className="invalid-feedback">{errorMessage}</div>
            </div>
            <div className="form-group col">
              <pre className="h-100 p-3 bg-dark text-white">
                <div className="row">
                  <div className="col-6">
                    <div className="text-muted mr-3">onValueChange:</div>
                    {rawValue}
                  </div>
                </div>
              </pre>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Example1;
