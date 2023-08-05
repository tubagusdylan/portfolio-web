/* eslint-disable react/prop-types */
import { Button } from "./Button";
import { ClipLoader } from "react-spinners";

export const Form = (props) => {
  const { submit, refForm, username, email, message, onNameChange, onEmailChange, onMessageChange, status } = props;

  return (
    <>
      <form onSubmit={submit} ref={refForm}>
        <label htmlFor="name" className="text-base text-primary font-semibold">
          Name
          <input
            type="text"
            id="name"
            name="user_name"
            value={username}
            onChange={onNameChange}
            disabled={status === "submitting"}
            className="block w-full mt-2 mb-4 rounded-md shadow-md py-2 px-3 border border-slate-400 focus:outline focus:outline-secondary outline-2 font-normal"
            autoFocus
            placeholder="Enter your name"
          />
        </label>
        <label htmlFor="email" className="text-base text-primary font-semibold">
          Email
          <input
            type="email"
            id="email"
            name="user_email"
            value={email}
            onChange={onEmailChange}
            disabled={status === "submitting"}
            className="block w-full mt-2 mb-4 rounded-md shadow-md py-2 px-3 border border-slate-400 focus:outline focus:outline-secondary outline-2 font-normal"
            placeholder="Enter your email"
          />
        </label>
        <label htmlFor="message" className="text-base text-primary font-semibold">
          Message
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={onMessageChange}
            disabled={status === "submitting"}
            className="block w-full mt-2 mb-8 rounded-md shadow-md py-2 px-3 border border-slate-400 focus:outline focus:outline-secondary outline-2 font-normal"
            rows={6}
            placeholder="Enter your message"
          />
        </label>
        <Button width={"100%"} status={status}>
          <ClipLoader size={15} color="#F77F4B" className="mr-2" loading={status === "submitting"} />
          Send
        </Button>
      </form>
    </>
  );
};
