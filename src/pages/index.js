import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header/header";
import Modal from "@/components/modal/Modal";
import SectionHeading from "@/components/section-heading/section-heading";
import LandingBtn from "@/components/landing-btn/landing-btn";
import SectionContent from "@/components/section-content/section-content";
import BannerImage from "assets/banner-img.png";
import BannerButterfly from "assets/banner-butterfly.png";
import SectionImgOne from "assets/whykitmytrip1.png";
import SectionImgTwo from "assets/whykitmytrip2.png";
import SectionImgThree from "assets/whykitmytrip3.png";
import SectionImgFour from "assets/whykitmytrip4.png";
import SectionImgFive from "assets/whykitmytrip5.png";
import SectionImgSix from "assets/whykitmytrip6.png";
import CardImage1 from "assets/1.png";
import CardImage2 from "assets/2.png";
import CardImage3 from "assets/3.png";
import CardImage4 from "assets/4.png";
import Card from "@/components/card/card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kitmytrip</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        {/* LANDING BANNER /-START */}
        <section className="landing-banner section-padding bg-text_7">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <div className="banner-content">
                  <h3 className="font-normal text-fs_66 text-text_2 leading-lh_76 relative">
                    Create Better{" "}
                    <span className="font-extrabold text-fs_66">
                      Travel Content
                    </span>
                    , Faster
                    <Image
                      src={BannerButterfly}
                      className="absolute -top-16 -left-11"
                      alt="banner-img"
                    />
                  </h3>

                  <p className="font-medium text-lg leading-lh_32 text-text_3">
                    Whether you are a travel buff, an amateur travel content
                    creator or a professional <br /> travel influencer, you can
                    use kitmytrips powerful content technology platform to
                    <br /> tell incredible stories.
                  </p>
                  <LandingBtn buttonName="Start for free" />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="banner-img relative">
                  <Image src={BannerImage} className="" alt="banner-img" />
                  <Modal>
                    <div className="h-20 w-20 bg-red-600 rounded-full flex justify-center items-center animation-pulse">
                      <svg
                        width="82"
                        height="82"
                        viewBox="0 0 82 82"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="41" cy="41" r="41" fill="#DB105B" />
                        <path
                          d="M48.0894 42.6061C49.0911 41.8054 49.0911 40.2823 48.0894 39.4816L39.9056 32.94C38.596 31.8931 36.6569 32.8256 36.6569 34.5022V47.5855C36.6569 49.2621 38.596 50.1946 39.9056 49.1477L48.0894 42.6061Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Modal>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* LANDING BANNER /-END */}

        {/* WHY JOIN MY TRIP /-START */}
        <section className="whyjoinkitmytrip section-padding">
          <div className="container">
            <SectionHeading
              sectionTitle="Why join Kitmytrip"
              sectionDescription="Whether you are a travel buff, an amateur travel content creator or a"
              BrakSectionDescription="professional travel influencer, you can use kitmytrip."
            />
            <div className="flex flex-col md:flex-row mt-[100px] items-center">
              <div className="w-full md:w-1/2">
                <div className="secton-content">
                  <SectionContent
                    contentTitle="Purpose built travel"
                    breakContentTitle="studio"
                    contentDescription="No code platform. Lorem Ipsum is simply dummy text of the printing and"
                    breakCotentDescriptionOne="typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
                    breakCotentDescriptionTwo="ever since there are many variations of passages"
                  />
                  <LandingBtn buttonName="Start for free" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="content-img">
                  <Image src={SectionImgOne} alt="section-image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* WHY JOIN MY TRIP /-END */}

        {/* ANY CONTENT /-START */}
        <section className="anycontent section-padding bg-text_7">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <div className="section-img">
                  <Image src={SectionImgTwo} alt="section-img" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="section-content ml-28">
                  <SectionContent
                    contentTitle="Any content"
                    contentDescription="Photos, videos, blogs. There are many variations of passages of Lorem Ipsum"
                    breakCotentDescriptionOne="available, but the majority have suffered alteration."
                  />
                  <LandingBtn buttonName="Start for free" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ANY CONTENT /-END */}

        {/* SHAREING IS CAREING /-START */}
        <section className="sharingiscareing section-padding">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <div className="section-content">
                  <SectionContent
                    contentTitle="Sharing is caring &"
                    breakContentTitle="earning"
                    contentDescription="Get paid when customers book your trip plans"
                  />
                  <LandingBtn buttonName="Start for free" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="section-img">
                  <Image src={SectionImgThree} alt="section-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SHAREING IS CAREING /-END */}

        {/* MANAGE MULTIPLE /-START */}
        <section className="managemultiple section-padding bg-text_7">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <div className="section-img">
                  <Image src={SectionImgFour} alt="section-img" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="section-content ml-28">
                  <SectionContent
                    contentTitle="Manage multiple"
                    breakContentTitle="accounts"
                    contentDescription="Save time by managing multiple accounts from one kitmytrip account."
                  />
                  <LandingBtn buttonName="Start for free" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MANAGE MULTIPLE /-END */}

        {/* STATS AT READY /-START */}
        <section className="statsatready section-padding">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <div className="section-content">
                  <SectionContent
                    contentTitle="Stats at-the-ready"
                    contentDescription="Get insights anytime on your own"
                  />
                  <LandingBtn buttonName="Start for free" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="section-img">
                  <Image src={SectionImgSix} alt="section-img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* STATS AT READY /-END */}

        {/* BRAND AS A TRAVALLER /-START */}
        <section className="brandasatravaller section-padding bg-text_7">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <div className="section-img">
                  <Image src={SectionImgFive} alt="section-img" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="section-content">
                  <SectionContent
                    contentTitle="Build your brand as a"
                    breakContentTitle="traveller"
                    contentDescription="Share travel trips, help and inspire others. Build your own community of followers"
                    breakCotentDescriptionOne="and become a virtual travel expert/guide"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BRAND AS A TRAVALLER /-END */}

        {/* HOW DOES IT WORK /-START */}
        <section className="howdoesitwork bg-dark_2 section-padding">
          <div className="container">
            <SectionHeading
              sectionTitle="How does it work?"
              fontFamily="font-inter"
              textColor="text-white"
            />

            <div className="section-content">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 sm:col-span-3 lg:col-span-1">
                  <Card
                    cardImageSrc={CardImage1}
                    cardImgClassName="mb-4"
                    cardTitle="Sign up to create your profile"
                    cardTitleClassName="font-bold text-2xl text-white leading-lh_34 mb-4"
                    cardText="Get immediate access to your dashboard when you create a free account. Create a standout profile to present yourself to travellers around the world."
                    cardTextClassName="font-medium text-lg text-text_3 mb-4"
                  />
                </div>
                <div className="col-span-1 sm:col-span-3 lg:col-span-1">
                  <Card
                    cardImageSrc={CardImage2}
                    cardImgClassName="mb-4"
                    cardTitle="Share your trip stories"
                    cardTitleClassName="font-bold text-2xl text-white leading-lh_34 mb-4"
                    cardText="Upload any type of travel content to create stunning trip stories. Our intuitive platform makes it easy to create and share any type of travel content from anywhere from start to finish!"
                    cardTextClassName="font-medium text-lg text-text_3 mb-4"
                  />
                </div>
                <div className="col-span-1 sm:col-span-3 lg:col-span-1">
                  <Card
                    cardImageSrc={CardImage3}
                    cardImgClassName="mb-4"
                    cardTitle="Get paid"
                    cardTitleClassName="font-bold text-2xl text-white leading-lh_34 mb-4"
                    cardText="Start earning credits every time a traveller books your trip story. All credits can be used for your own travel experience."
                    cardTextClassName="font-medium text-lg text-text_3 mb-4"
                  />
                </div>
                <div className="col-span-1 sm:col-span-3 lg:col-span-1">
                  <Card
                    cardImageSrc={CardImage4}
                    cardImgClassName="mb-4"
                    cardTitle="Plan and book your own travel"
                    cardTitleClassName="font-bold text-2xl text-white leading-lh_34 mb-4"
                    cardText="Discover trip stories from other insiders, meet and connect with like minded travellers. Add trips to your bucket list. Once you are done planning your perfect vacation, go ahead and book your trip in one click."
                    cardTextClassName="font-medium text-lg text-text_3 mb-4"
                  />
                </div>
              </div>
            </div>
            <div className="text-center pt-8">
              <LandingBtn buttonName="Ready to start?" className="" />
            </div>
          </div>
        </section>
        {/* HOW DOES IT WORK /-END */}

        {/* ALL THE FEATURES /-START */}
        <section className="allthefeatures section-padding">
          <div className="container">
            <SectionHeading sectionTitle="All the features you need" />
            
          </div>
        </section>
        {/* ALL THE FEATURES /-END */}
      </main>
    </>
  );
}
