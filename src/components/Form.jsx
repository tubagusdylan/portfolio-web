/* eslint-disable react/prop-types */
import { Button } from "./Button";

export const Form = (props) => {
  const { submit, refForm, username, email, message, onNameChange, onEmailChange, onMessageChange } = props;

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
            className="block w-full mt-2 mb-8 rounded-md shadow-md py-2 px-3 border border-slate-400 focus:outline focus:outline-secondary outline-2 font-normal"
            rows={6}
            placeholder="Enter your message"
          />
        </label>
        <Button width={"100%"}>Send</Button>
      </form>
    </>
  );
};
