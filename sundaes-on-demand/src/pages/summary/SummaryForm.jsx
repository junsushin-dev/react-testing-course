import { useState } from "react";
import { Form, Button, Popover } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function SummaryForm() {
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] =
    useState(false);

  const popover = (
    <Popover id="popver-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and Conditions</span>
      </OverlayTrigger>
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
