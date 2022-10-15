import React, { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";

function MY() {
  return (
    <Fragment>
      <Head>
        <title>NFT</title>
        <meta
          name="description"
          content="Saynine is a dynamic SEO agency that helps clients boost rankings through backlinks."
        />
      </Head>
      <div className="overflow-hidden">
        <div className="md:pt-20 lg:pt-64" />
        <Container className="pb-32">
          <div className="text-center pt-25">
            <h2 className="text-center text-white text-4xl lg:text-8xl">
              Oil, Canvas, Gold
            </h2>
          </div>
          <div className="pt-10" />
          <div className="grid grid-cols-1 md:grid-cols-2  gap-10 xl:px-5">
            <div className="flex flex-col border-orange rounded-2xl border-1px p-5">
              <div className="relative">
                <Image
                  src="/images/imageOne.png"
                  width={320}
                  height={480}
                  alt="SAYNIN-LOGO-LARG"
                  className="cursor-pointer flex-shrink-0"
                />
              </div>
              <div className="pt-4" />
              <h3 className="text-lg lg:text-3xl  font-semibold text-white">
                Helium
              </h3>
              <div className="pt-2" />
              <div className="grid grid-flow-col gap-4">
                <div className="flex space-x-1">
                  <div className="text-sm lg:text-base font-bold text-orange-alft ">
                    Year:
                  </div>
                  <div className="text-sm lg:text-base font-bold text-orange-alft">
                    2019
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="text-sm lg:text-base font-bold text-yellow-alfa">
                    Medium:
                  </div>
                  <div className="text-sm lg:text-base font-bold text-yellow-alfa">
                    Oil, Canvas, Gold
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <p className="font-normal text-base md:text-xl xl:text-3xl text-white   ">
                  Goldfinger is the fourth painting in the line of faceless
                  portraits. Inspired by surrealism, manages to catch the beauty
                  of women with a lot of finesse.I considers the paintings as a
                  work on the memories we keep from our dreams.
                </p>
              </div>
              <div className="flex justify-between pt-5">
                <div className="pt-6 md:pt-0" />
                <button
                  type="button"
                  className="py-2 px-10  bg-green-alfa text-xl rounded-lg text-white font-normal"
                >
                  <a
                    target="_blank"
                    hreff="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/66421829354916729530841030006746846596305291091491368957414518118100838121482"
                    rel="noopener noreferrer"
                  >
                    Open
                  </a>
                </button>
              </div>
            </div>
            <div className="flex flex-col border-orange rounded-2xl border-1px p-5">
              <div className="relative">
                <Image
                  src="/images/imageTwo.png"
                  width={320}
                  height={480}
                  className="w-full h-full object-cover obj-center"
                />
              </div>
              <div className="pt-4" />
              <h3 className="text-lg lg:text-3xl  font-semibold text-white">
                Goldfinger
              </h3>
              <div className="pt-2" />
              <div className="grid grid-flow-col gap-4">
                <div className="flex space-x-1">
                  <div className="text-sm lg:text-base font-bold text-orange-alft ">
                    Year:
                  </div>
                  <div className="text-sm lg:text-base font-bold text-orange-alft">
                    2021
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="text-sm lg:text-base font-bold text-yellow-alfa">
                    Medium:
                  </div>
                  <div className="text-sm lg:text-base font-bold text-yellow-alfa">
                    Oil, canvas, gold
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <p className="font-normal text-base md:text-xl xl:text-3xl text-white   ">
                  Goldfinger is the fourth painting in the line of faceless
                  portraits. Inspired by surrealism, manages to catch the beauty
                  of women with a lot of finesse.I considers the paintings as a
                  work on the memories we keep from our dreams.
                </p>
              </div>
              <div className="flex justify-between pt-5">
                <div className="pt-6 md:pt-0" />
                <button
                  type="button"
                  className="py-2 px-10  bg-green-alfa text-xl rounded-lg text-white font-normal"
                >
                  <a
                    target="_blank"
                    hreff="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/66421829354916729530841030006746846596305291091491368957414518118100838121482"
                    rel="noopener noreferrer"
                  >
                    Open
                  </a>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

export default MY;
