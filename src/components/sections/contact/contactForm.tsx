"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="w-[80%] py-48 flex justify-center items-center min-h-screen ">
      <div className="pr-16 border-r-2 border-dcturkis">
        <h1 className="text-2xl font-extrabold pb-4 pt-4">Chris Depta</h1>
        <p>Sittenbacherstrasse 8</p>
        <p className="pb-4 border-b-2 border-dcturkis">90482 Nürnberg</p>
        <h1 className="text-2xl font-extrabold pb-4 pt-4 ">Contact</h1>
        <p>tel. +49 1725378432</p>
        <p className="pb-4 border-b-2 border-dcturkis">
          email. dev@deptachris.de
        </p>
        <h1 className="text-2xl font-extrabold pb-4 pt-4">Social</h1>
        <p>facebook</p>
        <p>instagram</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pl-16 flex flex-col justify-start items-end">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-dcturkis">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-96 rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-dcturkis focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-dcturkis">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-96 rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-dcturkis focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-dcturkis">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-96 resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-dcturkis focus:shadow-md"
            {...register("message", { required: true })}></textarea>
        </div>
        <div>
          <button className="rounded-md text-xl font-extrabold bg-gradient-to-br from-dcblue to-dcturkis hover:bg-gradient-to-tl py-2 px-6 text-white outline-none w-auto h-auto transition-colors delay-300 hover:scale-105">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
