import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import LateralBar from "../../Components/LateralBar/LateralBar";
import "./DatingPage.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  Subject: string;
  gender: string;
  message: string;
};

const DatingPage: React.FC = () => {
  const [onScroll, SetOnScroll] = useState<string>("");

  window.onscroll = function () {
    SetOnScroll(window.pageYOffset > 0 ? "scroll-nav" : "");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));

      const form = document.createElement("form");
      form.action = "https://formsubmit.co/feang_c0@hotmail.com";
      form.method = "post";
      form.style.display = "none";

      Object.keys(data).forEach((key) => {
        const input = document.createElement("input");
        input.name = key;
        input.value = data[key as keyof Inputs] as string;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar onScroll={onScroll} />
      <div id="dating">
        <div className="formBox">
          <h1 className="titleformDating">Find Love in Colombia</h1>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.name && (
              <div className="text-red">{errors.name.message}</div>
            )}
            <input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must have at least 3 characters",
                },
              })}
              type="text"
              id="name"
              placeholder="What's your name?"
            />
            {errors.email && (
              <div className="text-red">{errors.email.message}</div>
            )}
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              placeholder="Email address"
            />
            {errors.Subject && (
              <div className="text-red">{errors.Subject.message}</div>
            )}
            <input
              {...register("Subject", { required: "A subject is required" })}
              type="text"
              id="Subject"
              placeholder="Subject"
            />
            {errors.gender && (
              <div className="text-red">{errors.gender.message}</div>
            )}
            <legend>Gender</legend>
            <div className="options">
              <div>
                <input
                  {...register("gender", { required: "Select an option" })}
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  {...register("gender", { required: "Select an option" })}
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  {...register("gender", { required: "Select an option" })}
                  type="radio"
                  id="noAnswer"
                  value="noAnswer"
                  name="gender"
                />
                <label htmlFor="noAnswer">Rather not say</label>
              </div>
            </div>
            {errors.message && (
              <div className="text-red">{errors.message.message}</div>
            )}
            <textarea
              {...register("message", {
                required: "Write a message please",
                minLength: {
                  value: 8,
                  message: "Message is too short to be sent",
                },
              })}
              id="message"
              cols={80}
              rows={6}
              placeholder="Type your message here"
            ></textarea>
            <button
              type="submit"
              className="sendMessage"
              disabled={loading || isSubmitting}
            >
              {loading || isSubmitting ? "Loading..." : "Send Message"}
              &thinsp;
            </button>
          </form>
        </div>
      </div>
      <LateralBar />
      <Footer />
    </div>
  );
};

export default DatingPage;
