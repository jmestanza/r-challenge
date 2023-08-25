const ErrorMessage = (props: any) => {
  return (
    <div className="flex items-center justify-center mt-6 mb-10 text-xl text-white font-bold flex-col">
      <div>{props.text}</div>
      <div className="mt-2"> Error response from server: {props.errorMsg}</div>
    </div>
  );
};

export default ErrorMessage;
