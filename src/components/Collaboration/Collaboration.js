import React, { useEffect } from "react";
import backgroundVideo from "./background.mp4";

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
    <>
      {/* <div className="h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="object-cover object-center w-full h-full"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div> */}

      <main className="container mx-auto animate-[fadein_2s_ease_1]">
        <div className="max-w-xl mx-auto my-10 bg-white p-5 rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-black">
              Collaboration
            </h1>
            <p className="text-black/50 sm:mx-20 xs:mx-10 text-center">
              Looking to collaborte with us? Fill out the form and we will be in
              touch!
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

              <div className="mb-6 grid grid-cols-2 gap-2 content-center">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm text-black/40"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    required
                    className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm text-black/40"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    required
                    className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                  />
                </div>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-2 content-center">
                <div>
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

                <div>
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
              </div>

              <div className="mb-6 grid grid-cols-2 gap-2 content-center">
                <div>
                  <label
                    htmlFor="instagram"
                    className="block mb-2 text-sm text-black/40"
                  >
                    Your Instagram
                  </label>
                  <input
                    type="text"
                    name="instagram"
                    id="instagram"
                    placeholder="https://www.instagram.com/yourpagename/"
                    required
                    className="placeholder:truncate w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tiktok"
                    className="block mb-2 text-sm text-black/40"
                  >
                    Your TikTok
                  </label>
                  <input
                    type="text"
                    name="tiktok"
                    id="tiktok"
                    placeholder="https://www.tiktok.com/@yourpagename"
                    required
                    className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm text-black/40"
                >
                  Your Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="New York"
                  required
                  className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                />
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
              <p
                className="text-base text-center text-gray-500"
                id="result"
              ></p>
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default Collaboration;
