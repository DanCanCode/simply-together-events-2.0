import React, { useEffect } from "react";

const Collaboration = () => {
  useEffect(() => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
      const formData = new FormData(form);
      e.preventDefault();

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      result.innerHTML = "Please wait...";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status === 200) {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-green-500");
          } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-red-500");
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function () {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 3000);
        });
    });
  }, []);

  return (
    <main className="container mx-auto animate-[fadein_2s_ease_1]">
      <div className="max-w-lg mx-auto my-10 bg-white p-5 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-black">
            Collaboration
          </h1>
          <p className="text-black/50">
            Please fill out the form below and we will get back to you!
          </p>
        </div>
        <section className="m-7">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from your Website"
            />
            <input
              type="checkbox"
              name="botcheck"
              id=""
              style={{ display: "none" }}
            />

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-black/40"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-black/40"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm text-black/40"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+1 (555) 1234-567"
                required
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="event" className="block mb-2 text-black/40">
                Event Type
              </label>

              <select
                id="event"
                name="event"
                required
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
              >
                <option value="" disabled selected>
                  Choose event type
                </option>
                <option value="Event Planning">Event Planning</option>
                <option value="Event Design">Event Design</option>
                <option value="Luxury Picnic">Luxury Picnic</option>
                <option value="Rental">Rental</option>
                <option value="Event Content Creation">
                  Event Content Creation
                </option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm text-black/40"
              >
                Your Message
              </label>

              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white tracking-wide font-medium rounded-md bg-[#A4133C] hover:bg-[#800F2F] active:scale-90 focus:outline-none"
              >
                Send Message
              </button>
            </div>
            <p className="text-base text-center text-gray-500" id="result"></p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Collaboration;
