import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51TNP6Z7qFZnuPsD7mGKuR674TzRdYwz6qsYAaNaSKjHRJ1Sx221zi989P1OvJ8ZqBAMCsqfq0De4iaX3mAOAvQfN00WXUIv1HM'
);

export default stripePromise;