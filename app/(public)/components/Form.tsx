"use client";

import axios from "axios";
import { MailIcon } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const serviceId = "service_hyxc2gh";
    const templateId = "template_01w8vau";
    const publicKey = "9ebyOzuhy7cN2jUk2";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "MJ",
        subject: subject,
        message: message,
      },
    };

    try {
      const response = await axios.post(
        `https://api.emailjs.com/api/v1.0/email/send`,
        data,
      );

      if (response.status === 200) {
        setStatusMessage("Email sent successfully.");
        setIsError(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatusMessage(
          "Email request completed but returned unexpected status.",
        );
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Failed to send email. Please try again.");
      setIsError(true);
    }
  };

  return (
    <div className="flex items-start rounded-md shadow-sm shadow-[#25a6eb] p-2">

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            required
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
             className="w-full text-xs md:text-sm  border border-[#25a6eb1a] rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#25a6eb] focus:border-[#25a6eb]"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-xs md:text-sm  border border-[#25a6eb1a] rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#25a6eb] focus:border-[#25a6eb]"
          />
        </div>
        <input
          required
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full text-xs md:text-sm  border border-[#25a6eb1a] rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#25a6eb] focus:border-[#25a6eb]"
        />

        <textarea
          required
          cols={30}
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full text-xs md:text-sm border border-[#25a6eb1a] rounded-md px-3 py-3 focus:outline-none focus:ring-1 focus:ring-[#25a6eb] focus:border-[#25a6eb]"
        ></textarea>

        <button
          type="submit"
          className="border-2 border-[#2563EB] bg-[#2563EB] text-[] text-xs md:text-sm rounded-md px-5 py-2 tracking-normal hover:bg-[#07111F] hover:border-2 hover:border-[#2563EB]"
        >
          Send Email
        </button>

        {statusMessage ? (
          <p
            className={`text-base ${isError ? "text-red-400" : "text-green-400"}`}
          >
            {statusMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
