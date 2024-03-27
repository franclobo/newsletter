'use client';
import { useState } from "react";
import Image from "next/image";
import Desktop from "../public/assets/images/illustration-sign-up-desktop.svg";
import Mobile from "../public/assets/images/illustration-sign-up-mobile.svg";
import Check from "../public/assets/images/icon-success.svg";

export default function Home() {
  const [email, setEmail] = useState("");
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrorVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)){
      setErrorVisible(true);
    } else {
      // Aquí puedes agregar la lógica para enviar el correo, si lo deseas
      setSuccessModalVisible(true);
    }
  };

  const handleDismiss = () => {
    // Ocultamos la ventana modal de éxito y restablecemos el formulario
    setSuccessModalVisible(false);
    setEmail("");
    setErrorVisible(false);
  };

  return (
    <main className="content flex flex-col items-center justify-center">
      <header>
        <Image src={Desktop} alt="Ilustration Desktop" className="desktop" />
        <Image src={Mobile} alt="Ilustration Mobile" className="mobile" />
      </header>
      <div className="info">
        <article className="flex flex-col m-4 gap-3">
          <h1 className="title text-4xl font-bold">Stay updated!</h1>
          <p>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="custom-list flex flex-col justify-center gap-3">
            <li className="ml-4">Product discovery and building what matters</li>
            <li className="ml-4">Measuring to ensure updates are success</li>
            <li className="ml-4">Design</li>
            <li className="ml-4">And much more!</li>
          </ul>
        </article>
        <form
          className="px-4 w-full flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-700"
            >
              Email address
            </label>
            {errorVisible && (
              <span className="tomato text-xs">Valid email required</span>
            )}
          </div>
          <input
            type="email"
            placeholder="email@company.com"
            className={`h-10 px-4 rounded-md border-gray-200 shadow-sm sm:text-sm ${errorVisible ? "bg-tomato" : ""}`}
            value={email}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="inline-block rounded border dark-slate-grey px-12 py-3 text-sm font-medium text-white"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
        {successModalVisible && (
          <section className="success-modal fixed top-0 left-0 mx-0 bg-white flex flex-col justify-center items-start gap-4 p-6 h-screen">
            <div className="flex flex-col justify-center items-start gap-5 modal-desktop">
              <Image src={Check} alt="Check icon" className="w-12 h-12" />
              <h2 className="text-2xl font-bold">Thanks for subscribing!</h2>
              <p>
                A confirmation email has been sent to{" "}
                <span className="font-bold">{email}</span>. Please open it and
                click the button inside to confirm your subscription.
              </p>
              <div className="fixed bottom-0 left-0 p-4 w-full">
                <button
                  onClick={handleDismiss}
                  className="w-full rounded border dark-slate-grey px-8 py-3 text-sm font-medium text-white"
                >
                  Dismiss message
                </button>
              </div>
            </div>
          </section>
        )}
        <footer className="attribution px-4">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Francisco Borja</a>.
        </footer>
      </div>
    </main>
  );
}
