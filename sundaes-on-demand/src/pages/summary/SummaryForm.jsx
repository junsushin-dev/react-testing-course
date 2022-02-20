import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function SummaryForm() {
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] =
    useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsAndConditionsChecked}
          onChange={(e) => setTermsAndConditionsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={!termsAndConditionsChecked}
      >
        Confirm order
      </Button>
    </Form>
  );
}
