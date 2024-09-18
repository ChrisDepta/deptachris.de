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
    <div className="w-[80%] py-48 flex justify-center items-center ">
      <div className="pr-16 border-r-2 border-white">
        <h1 className="text-3xl font-extrabold pb-4 pt-4">deptachris</h1>
        <p>Sittenbacherstrasse 8</p>
        <p className="pb-4 border-b-2 ">90482 Nürnberg</p>
        <h1 className="text-3xl font-extrabold pb-4 pt-4 ">Contact</h1>
        <p>tel. +49 1725378432</p>
        <p className="pb-4 border-b-2 ">email. dev@deptachris.de</p>
        <h1 className="text-3xl font-extrabold pb-4 pt-4">Social</h1>
        <p>facebook</p>
        <p>instagram</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="pl-16">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-white">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-white">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-white">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("message", { required: true })}></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-black py-3 px-8 font-semibold text-white outline-none w-auto h-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
