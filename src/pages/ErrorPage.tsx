import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <section className="flex flex--column justify--center align--center error">
      <h1>404</h1>
      <h2>Oops! Page Could Not Be Found</h2>
      <p>
        Try searching for the correct URL. Maybe you'll get there to your
        destination.
      </p>
      <Button link="/" type="primary">
        Click this button if you wish to go the main page of the website.
      </Button>
    </section>
  );
};

export default ErrorPage;
