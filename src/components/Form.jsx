import { Button } from "./Button";

export const Form = () => {
  return (
    <>
      <form>
        <label htmlFor="name" className="text-base text-primary font-semibold">
          Name
          <input type="text" id="name" className="block w-full mt-2 mb-4 rounded-md shadow-md py-2 px-3 border border-slate-400 focus:outline focus:outline-secondary outline-2 font-normal" autoFocus placeholder="Enter your name" />
        </label>
        <label htmlFor="email" className="text-base text-primary font-semibold">
          Email
          <input type="email" id="email" className="block w-full mt-2 mb-4 rounded-md shadow-md py-2 px-3 border border-slate-400 focus:outline focus:outline-secondary outline-2 font-normal" placeholder="Enter your email" />
        </label>
        <label htmlFor="message" className="text-base text-primary font-semibold">
          Message
          <textarea
            name="message"
            id="message"
            className="block w-full mt-2 mb-8 rounded-md shadow-md py-2 px-3 border border-slate-400 focus:outline focus:outline-secondary outline-2 font-normal"
            rows={6}
            placeholder="Enter your message"
          ></textarea>
        </label>
        <Button width={"100%"}>Send</Button>
      </form>
    </>
  );
};
