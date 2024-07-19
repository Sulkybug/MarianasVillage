import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import LateralBar from "../../Components/LateralBar/LateralBar";
import "./DatingPage.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  cellphone: string;
  contactMethod: string;
  gender: string;
  eventInterest: string;
  lookingFor: string;
  relationshipType: string;
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
      form.action = "https://formsubmit.co/marianasvillageco@gmail.com";
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
          <p className="datingFormDescription">
            Interested in dating in Colombia? Fill out this form to receive more
            information about our services.
          </p>
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
            {errors.cellphone && (
              <div className="text-red">{errors.cellphone.message}</div>
            )}
            <input
              {...register("cellphone", {
                required: "Phone number is required",
                pattern: {
                  value: /^\+?[1-9]\d{0,2}(?:[-\s]?\d){6,14}$/,
                  message: "Invalid phone number",
                },
              })}
              type="tel"
              id="cellphone"
              placeholder="Phone number"
            />

            <legend>Best way to contact you</legend>
            {errors.contactMethod && (
              <div className="text-red">{errors.contactMethod.message}</div>
            )}
            <select
              {...register("contactMethod", { required: "Select an option" })}
            >
              <option value="">Select an option</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>

            <legend>Gender</legend>
            {errors.gender && (
              <div className="text-red">{errors.gender.message}</div>
            )}
            <select {...register("gender", { required: "Select an option" })}>
              <option value="">Select an option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="noAnswer">Rather not say</option>
            </select>

            <legend>How interested are you in attending an event?</legend>
            {errors.eventInterest && (
              <div className="text-red">{errors.eventInterest.message}</div>
            )}
            <select
              {...register("eventInterest", { required: "Select an option" })}
            >
              <option value="">Select an option</option>
              <option value="veryInterested">Very interested</option>
              <option value="somewhatInterested">Somewhat interested</option>
              <option value="notInterested">Not interested</option>
            </select>

            <legend>Looking for</legend>
            {errors.lookingFor && (
              <div className="text-red">{errors.lookingFor.message}</div>
            )}
            <select
              {...register("lookingFor", { required: "Select an option" })}
            >
              <option value="">Select an option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <legend>What are you exited to find here?</legend>
            {errors.relationshipType && (
              <div className="text-red">{errors.relationshipType.message}</div>
            )}
            <select
              {...register("relationshipType", {
                required: "Select an option",
              })}
            >
              <option value="">Select an option</option>
              <option value="long-term">Long-term relationship</option>
              <option value="casual">Getting to know people</option>
              <option value="notSure">Not sure</option>
            </select>
            <textarea
              {...register("message", {})}
              id="message"
              cols={80}
              rows={6}
              placeholder="Type your message here"
            ></textarea>
            <button
              type="submit"
              className={`sendMessage ${loading ? "button-disabled" : ""}`}
              disabled={loading || isSubmitting}
            >
              {loading || isSubmitting ? "Loading..." : "Send Message"}
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
