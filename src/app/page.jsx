"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {


  return (
    <>
      <div className="home">
        <section className="screenOne">
          <div className="screenOneRight">
            <h1>
              Become a Financial Advisor and <span>Earn Rs.1 Lakh/Month</span>
            </h1>
            <p>No investment required</p>
            <Link
              href="https://play.google.com/store/apps/details?id=in.onecode.app"
              target="_blank"
            >
              <Image
                src="/assets/images/downloadBtn.svg"
                width={180}
                height={45}
                className="downloadBtn"
              />
            </Link>
          </div>
          <div className="screenOneLeft">
            <Image
              src="/assets/images/HeroImgNew.webp"
              width={380}
              height={400}
              className="HeroImgNew"
            />
          </div>
        </section>

        <div className="brandText">
          <h1>Top Brands on ZET</h1>
          <p>We are trusted by best brand in the country</p>
        </div>

        <section className="brands">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (num) => (
              <>
                <div key={num} className="item">
                  <Image
                    src={`/assets/images/logo${num}.webp`}
                    className="img"
                    alt="Brand"
                    width={170}
                    height={60}
                  />
                </div>
              </>
            )
          )}
        </section>
      </div>
      <div className="home1">
        <div>
          <section className="screenTwo">
            <div className="screenTwoTop">
              <h1>Top Brands on ZET</h1>
              <p>We are trusted by best brand in the country</p>
            </div>
            <div className="screenTwoBottom">
              <div className="cards">
                <div className="card1">
                  <Image
                    src="/assets/images/screen2Img1.webp"
                    width={160}
                    height={110}
                    className="screen2Img1"
                  />
                  <div className="cardData">
                    <h1>CREDIT CARDS</h1>
                    <p>
                      100% Contactless Application Process with Instant Approval
                      From Top Banks.
                    </p>
                  </div>
                </div>
                <div className="card2">
                  <Image
                    src="/assets/images/screen2Img2.webp"
                    width={160}
                    height={110}
                    className="screen2Img1"
                  />
                  <div className="cardData">
                    <h1>LOANS</h1>
                    <p>
                      100% online process. Instant offers. Affordable Rate of
                      Interest on loans. pay-later
                    </p>
                  </div>
                </div>
                <div className="card3">
                  <Image
                    src="/assets/images/screen2Img3.webp"
                    width={160}
                    height={110}
                    className="screen2Img1"
                  />
                  <div className="cardData">
                    <h1>BUY NOW PAY LATER</h1>
                    <p>
                      Short-term financing that allows consumers to make
                      purchases and pay for them over time.
                    </p>
                  </div>
                </div>
                <div className="card4">
                  <Image
                    src="/assets/images/screen2Img4.webp"
                    width={160}
                    height={110}
                    className="screen2Img1"
                  />
                  <div className="cardData">
                    <h1>SAVING ACCOUNTS</h1>
                    <p>
                      ZET offers range of savings account that suits your
                      personal needs for the banking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="screenThree">
            <Image
              src="/assets/images/peoples.webp"
              width={600}
              height={400}
              className="peoples"
            />
            <div className="screenThreeTop">
              <h2>THE ZET EFFECT</h2>
              <div className="screenThreeTopScroll"></div>
              <p>
                4 Lakh+ Financial Advisor across India are using ZET to increase
              </p>
              <p>
                We helped customers in more than 50 cities to get their first
                financial product
              </p>
              <p>
                14 Lakh+ Financial Advisor across India are using ZET to
                increase their income.
              </p>
            </div>
          </section>

          <section className="screenFour">
            <div className="screenFourRight">
              <h1>
                Why <span>Choose Us</span>
              </h1>
              <p>Why we are loved by our customers</p>
              <Image
                src="/assets/images/screen4.webp"
                width={300}
                height={450}
              />
            </div>
            <div className="screenFourleft">
              <div className="screenFourCards">
                <div className="screenFourCard1">
                  <Image
                    src="/assets/images/screen4Img1.svg"
                    width={100}
                    height={100}
                  />
                  <h1>Zero Investment</h1>
                  <p>Build your business without any investment</p>
                </div>
                <div className="screenFourCard2">
                  <Image
                    src="/assets/images/screen4Img2.svg"
                    width={100}
                    height={100}
                  />
                  <h1>Quick Payout</h1>
                  <p>Direct Payout in your bank account in short time</p>
                </div>
                <div className="screenFourCard3">
                  <Image
                    src="/assets/images/screen4Img3.svg"
                    width={100}
                    height={100}
                  />
                  <h1>Limitless Earnings</h1>
                  <p>Direct Payout in your bank account in short time</p>
                </div>
                <div className="screenFourCard4">
                  <Image
                    src="/assets/images/screen4Img4.svg"
                    width={100}
                    height={100}
                  />
                  <h1>Training & Upskilling</h1>
                  <p>Get trained by finance and sales experts</p>
                </div>
                <div className="screenFourCard5">
                  <Image
                    src="/assets/images/screen4Img5.svg"
                    width={100}
                    height={100}
                  />
                  <h1>Customer Support</h1>
                  <p>Access tools and content to build relationship</p>
                </div>
                <div className="screenFourCard1">
                  <Image
                    src="/assets/images/screen4Img1.svg"
                    width={100}
                    height={100}
                  />
                  <h1>Financial Products</h1>
                  <p>Trustworthy & high-rated products & categories</p>
                </div>
              </div>
            </div>
          </section>
          <section className="screenFive">
            <div className="screenFiveTop">
              <h1>Start Earning in 3 Easy Steps</h1>
              <p>We have create the app the make your earning easy</p>
            </div>
            <div className="screenFiveBottom">
              <div className="step1">
                <button className="download">Step 1</button>
                <h1>Download the App and sign up as a ZET agent</h1>
                <Link
              href="https://play.google.com/store/apps/details?id=in.onecode.app"
              target="_blank"
            >
              <Image
                src="/assets/images/downloadBtn.svg"
                width={180}
                height={45}
                className="downloadBtns"
              />
            </Link>
              </div>
              <div className="step2">
                <button className="download">Step 2</button>
                <h1>Register your customers and ecommend financial products</h1>
                <Link
              href="https://play.google.com/store/apps/details?id=in.onecode.app"
              target="_blank"
            >
              <Image
                src="/assets/images/downloadBtn.svg"
                width={180}
                height={45}
                className="downloadBtns"
              />
            </Link>
              </div>
              <div className="step3">
                <button className="download">Step 3</button>
                <h1>start earning upto 1 lack every month</h1>
                <Link
              href="https://play.google.com/store/apps/details?id=in.onecode.app"
              target="_blank"
            >
              <Image
                src="/assets/images/downloadBtn.svg"
                width={180}
                height={45}
                className="downloadBtns"
              />
            </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
