// https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript

const getErrorMessage = (err: unknown): string => {
  if (err instanceof Error) return err.message;
  else return String(err);
};

export default getErrorMessage;
