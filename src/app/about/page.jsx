"use client";
import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
function About() {

    const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const sectionFour = document.querySelector(".sectionFour");
      if (sectionFour) {
        const { top, bottom } = sectionFour.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Adjust these values according to your preference
        if (top < windowHeight * 0.8 && bottom > windowHeight * 0.2) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 100 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <>
      <div className="about">
        <section className="sectionOne">
          <Image
            src="/assets/images/aboutImg.webp"
            width={1000}
            height={1000}
            className="aboutImg"
          />
          <div className="sectionOneText">
            <h1>OUR MISSION Enabling</h1>
            <p>
              financial inclusion for the next billion Indians & making their
              Zindagi Set. Building a platform that enables you to sell
              financial products & earn up to Rs. 1 lakh every month.
            </p>
            <h1>EARN BETTER. LIVE BETTER.</h1>
          </div>
        </section>

        <section className="sectionTwo">
          <div className="sectionTwoTop">
            <h1>How we evolved over the years</h1>
          </div>
          <div className="sectionTwoBottom">
            <Image
              src="/assets/images/Growth.webp"
              width={1300}
              height={300}
              className="growth"
            />
          </div>
        </section>
        <section className="sectionThree">
          <div className="sectionThreeTop">
            <h1>Got Featured</h1>
          </div>
          <div className="sectionThreeBottom">
            <Image
              src="/assets/images/Featured1.webp"
              width={220}
              height={130}
              className="featured1"
            />
            <Image
              src="/assets/images/Featured2.webp"
              width={220}
              height={130}
              className="featured"
            />
            <Image
              src="/assets/images/Featured3.webp"
              width={220}
              height={130}
              className="featured"
            />
            <Image
              src="/assets/images/Featured4.webp"
              width={220}
              height={130}
              className="featured"
            />
            <Image
              src="/assets/images/Featured5.webp"
              width={220}
              height={130}
              className="featured"
            />
          </div>
        </section>
        <section className="sectionFour">
          <div className="sectionFourTop">
            <h1>Meet the Investors</h1>
          </div>
          <div className="sectionThreeBottom">
            <motion.div
              className="InvestorsImg"
              initial={{ opacity: 0, y: 100 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/assets/images/Investors1.webp"
                width={250}
                height={100}
                className="investor"
              />
              <Image
                src="/assets/images/Investors2.webp"
                width={250}
                height={100}
                className="investor"
              />
              <Image
                src="/assets/images/Investors3.webp"
                width={250}
                height={100}
                className="investor"
              />
              <Image
                src="/assets/images/Investors4.webp"
                width={250}
                height={100}
                className="investor"
              />
            </motion.div>
            <div className="sectionFourImages">
              <div className="person1">
                <Image
                  src="/assets/images/person1.webp"
                  width={200}
                  height={200}
                  className="person"
                />
                <h1>Kunal Shah</h1>
                <p>Founder, CRED</p>
              </div>
              <div className="person2">
                <Image
                  src="/assets/images/person2.webp"
                  width={200}
                  height={200}
                  className="person"
                />
                <h1>Gaurav Munjal</h1>
                <p>Founder, UNACADEMY</p>
              </div>
              <div className="person3">
                <Image
                  src="/assets/images/person3.webp"
                  width={200}
                  height={200}
                  className="person"
                />
                <h1>Aakrit Vaish</h1>
                <p>Co-Founder, HAPTIK</p>
              </div>
              <div className="person4">
                <Image
                  src="/assets/images/person4.webp"
                  width={200}
                  height={200}
                  className="person"
                />
                <h1>Harshil Mathur</h1>
                <p>Founder, RAZORPAY</p>
              </div>
              <div className="person5">
                <Image
                  src="/assets/images/person5.webp"
                  width={200}
                  height={200}
                  className="person"
                />
                <h1>Vidit Aatrey</h1>
                <p>Founder & CEO, MEESHO</p>
              </div>
              <div className="person6">
                <Image
                  src="/assets/images/person6.webp"
                  width={200}
                  height={200}
                  className="person"
                />
                <h1>Amrish Rau</h1>
                <p>CEO, PINELABS</p>
              </div>
              <div className="person7">
                <Image
                  src="/assets/images/person7.webp"
                  width={200}
                  height={200}
                  className="person"
                />
                <h1>Lalit Keshre</h1>
                <p>CEO, GROWW</p>
              </div>
              <div className="person8">
                <Image
                  src="/assets/images/person8.webp"
                  width={200}
                  height={200}
                  className="person"
                />
                <h1>Gokul Rajaram</h1>
                <p>Product, DOORDASH</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionFive">
          <div className="sectionFiveTop">
            <h1>Meet our Founders</h1>
            <p>Few words from founders desk</p>
          </div>
          <div className="sectionFiveBottom">
            <div className="founder">
              <div className="founder1">
                <Image
                  src="/assets/images/Founders1.webp"
                  width={350}
                  height={350}
                  className="founders"
                />
                <h1>Manish Shara</h1>
                <p>Co- Founder & CEO</p>
              </div>
              <div className="founder2">
                <Image
                  src="/assets/images/Founders2.webp"
                  width={350}
                  height={350}
                  className="founders"
                />
                <h1>Yash Desai</h1>
                <p>Co- Founder</p>
              </div>
              <div className="founder3">
                <Image
                  src="/assets/images/Founders3.webp"
                  width={350}
                  height={350}
                  className="founders"
                />
                <h1>Lokesh Agarwal</h1>
                <p>CTO</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
