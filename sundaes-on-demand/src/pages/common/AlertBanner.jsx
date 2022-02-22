import { Alert } from "react-bootstrap";

export default function AlertBanner({ message, variant }) {
  const alertMessage =
    message || "An unexpected error occured. Please try again later.";
  const alertVariant = variant || "danger";

  return (
    <Alert
      variant={alertVariant}
      aria-label={alertMessage}
      style={{ backgroundColor: "red" }}
    >
      {alertMessage}
    </Alert>
  );
}
