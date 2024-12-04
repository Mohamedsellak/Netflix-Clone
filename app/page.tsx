import React from 'react'
import SignupForm from './components/layout/SignupForm'
import FAQAccordion from './components/features/FAQAccordion'
import MainHeader from './components/layout/MainHeader'
import ContentRow from './components/layout/ContentRow'
import Image from 'next/image'
          

const heroBackgrounds = [
  'https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_auto_scroll/MA-en-20241125-TRIFECTA-b030fec3-89a7-4107-b916-90baeb843c92_large.jpg',
  'https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_auto_scroll/MA-en-20241125-TRIFECTA-b030fec3-89a7-4107-b916-90baeb843c92_large.jpg',
  'https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_auto_scroll/MA-en-20241125-TRIFECTA-b030fec3-89a7-4107-b916-90baeb843c92_large.jpg',
]

const contentRows = [
  {
    title: "Popular on Netflix",
    items: [
      {id:1,title:"Outer Banks" , image:"https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQkQCZ4sxH75lH1LfWz_6GwjneojKonUpazxNQaxwKPBKQRyLwTvHRPgNYPVLwwBY1HdAS00W2hJH8smSc76Kaymdoymn8WZKURMbJNT3KKLqwY6BGsalfgLMIcqjbvpTxy78g.jpg?r=7d3"},
      { id: 2, title: "GTMAX", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVBOqmUFTVlFY96xR4fOJRM3QOjOHhNkIIbe-Bb6l8eQ4CmzgTFR2cd6SeeTh24NxsgJ_CyZM_YsaYjjQ7rRnhcDhGrhmQcW-fOBXKV9KtmVCiWISTjmJl25c55MZZyfGg6d0w.webp?r=852" },
      { id: 3, title: "Love Is Blind, Habibi", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVTkrLKtKxzzpohGhsM5tplbnRGKcDAwfouLTOxVofS1go6rjKXbaJvy5--tsb5XKyn2blWivbtf5HubmmdiAL299dYjwVGpeqdLy8Q44EyJQX7NCA4wz3CVqRiVpJ68cQqa_g.webp?r=986" },
      { id: 4, title: "When the Phone Rings", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT4ecnnwn2CMi9BsnJKgbXWe-t4DkNA-M3HvcRHQKu56TAbFxQ2PUZr06MbFUUgPRBB2NLQGVrkIVfg63SDwFLntjd0y8TcbZeDHqYmhLlSrQSG6cK-7SKiCtzRR7LvxOcikfw.webp?r=28a" },
      { id: 5, title: "The Blacklist", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABduMFJ-DqMQ7yEHPbCBSjIz27OPiyvHNycxBNfXUXOZE7Cr1q5N3ybL0IOBomEHa9E1hPUHloWq2oLtU15iYXtW7Jw78SsqAXggM.webp?r=d81" },
      { id: 6, title: "The Cage", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYhuFXGehc-8XwLBKrD7FX9M_9TtL_SMx3Mnwn-nQ67JilgNMtetemeEtSNt0kmmuWHvqfjK6NlAlrMkD7ScNkk2-SBe-Kzzf0sJCMG4S455yZwOq7TqHNSiaSyD1sRAFTfiRg.webp?r=520" },
      { id: 7, title: "The Madness", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABd63BQ8RyROJcJrRZ6Ir0jMmYyWVvmihTDEL1IWzvyuMHyTtQtm6lxemDCOR20BjIxD0zRS9nsEiyIDAlYcjTAwm5fUrY5_50L8KmVojwD9pf4IuYrk_m2V0IOdKuJtfevoLug.webp?r=4db" },
      { id: 8, title: "From", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABaOsVqm2Bnzs2phiLdVhX7dRqYgyaAbSIpGqv2Ih5NoNRkklc2tLV9PPGmaxmEngrN3YkKeO8GzwNAxGChqP6PuIovEG0rKt55c6.webp?r=115" },
      { id: 9, title: "Arcane", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfHSfbojXHQQgsQHdIkeYb9xGD2noT3T4jAZd2DsciN7kVZgmCesVUQKkUiA93qUL3kClrVOnk_eFYzifoxkp8jME3p0vlSm7Sa976CDUlwTXo2cSXPfx5NWgUEND7UaLG0nmg.webp?r=1e5" },
      { id: 10, title: "Our Little Secret", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRTNwG7mt1ALrpgRKxiq_0-oaBBzFyqDOFF-FE4qyg47U1rJsHtxQHtAleAMC-WL69lmS7XfybkiWZIBZo2dF1TZwg1eGpm4ecoICsPajs8ji1I9Tk72WzMzNPz7Y3SG5SKaqw.webp?r=652" },
    ]
  },
  {
    title: "Trending Now",
    items: [
      { id: 1, title: "Money Heist", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRY13rE6hFZeP981fDAgmKTcN4P0SzIOzCS8PMVNcm1A41O8G1dqia0SGeBUzBvFiH3JX_ugRAq5nbRkhsb4FpQy6PLwZyRw5cTO7EjbrO8YX7-Pk2joGpoaBQYi6RwFo4p11Q.webp?r=3f5" },
      { id: 2, title: "King the Land", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABV4S0JtDH2OOTNxTXBzCvaWgBPHLTBlRMrSmTQONnPaa-Fzs0wqy5iH09TM5UaBdlFWsxieF-8DiUy39UOK_fiwlD-9juZUH4i5by2BWYK3jkU9dU-D4XQJTfkfa0CbRCfRrxg.webp?r=e1b" },
      { id: 3, title: "Vikings: Valhalla", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABe11WjYKQz-R-yMFftuHBkAqI0gkHD99ULJXs-sWNTMxaQWI4Y8P71p6r7ZxGfpEVAdGgmryyNsgJQjMcz8m1wdzkL3ky1ETbTZ7qZGOb4nQ7DbS8w6qXgLn5snn7GvNTQOWIg.webp?r=1a1" },
      { id: 4, title: "The Trunk", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfrQ8o4NXHR-EevTStHSOK6qpzNJsXLLnd2gRIWvg_AeaFi2XAQ_iC9bkumDbPd4-Bp5CCnIkSZzYZb_ZG0Iu4v-XzZOTTVJkAzSlv-nmqBgZwLn2pULxy6tDHtvUEQTEF1QQA.webp?r=f0a" },
      { id: 5, title: "Love Next Door", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdyDf677xKDhkRcTwkvFAZvOeDx7A-eQsjEFNKpvfL_uFy_7BYGp4jxk3-NJthTodvyzhfvgu0-34afwO60IXCixQ_Kxkvx44DQiLBTrR4rcBe90JSzIu2tc8fXyrGE4A8enXg.webp?r=c56" },
      { id: 6, title: "Queen of Tears", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQ26mhDTxFE58n5Cwgwe_ReId62_vwDTsFu8zNv9aO1OW6SWAbCeGIN_th8eHMv2sdDSY1rk6STdF7r2GGLshF5ID25njhBE0IeNcasFwPxHlF33NAPTXgZOCOX_NhMUGbXnBg.webp?r=c7b" },
      { id: 7, title: "The Lincoln Lawyer", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT3mYMgjE3-02zLGOzNVq0bMKftmnuK3dN3uIcmxQosihlsta4ZVfkBdiNeHABPECoer7HGSR0pi4W0JbBgLGAxjoJMT8qp3VWvwCYBVV29xufw7DM__Cm0VMDJwP7TngxahVw.webp?r=c37" },
      { id: 8, title: "The Empress", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVCzWWQcftxOczjRBZkh8X05uV3Mi7rC2Hm1Mbp2q7hNjCylSBPA06woj10ER8hSK3zHxdsDUU21p3OLLkeMTxyquJ0gUW9so8l3TJWjvNeZIS7_imL-r5MW9q2JX-dsMg46RQ.webp?r=313" },
      {id: 9, title: "Lupin", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbm1xw6md7ghyfP1HqKDhLde9JkTcTqlsxBXyLwyCV0TpJ3I4xVUgtk_kulenQwz818gDDk2Zha04v8nxVVuVuHPWBb0Ma1HPajxkUySVy1pD-1yyYCj5n4N4kM4sFY_aNvUaw.webp?r=0d7" },
      { id: 10, title: "Finding Ola", image: "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcQJNHbOCtGKLaUpXLFQ6-xj15B3VrdtDCd-bzjDKtEKp1oEBEEZ3Orj0Sgv3aRdsBU6rD70U5lGisCfVRZh94hvD8N7vk_wxUc6YeXe71okJBDqw2pY_3PkM5pdBh4nHWPWwA.webp?r=b7b" },
    ]
  }
]

export default function Home() {
  return (
    <div className="bg-black text-white">
      <MainHeader />
      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden pb-24">
        <div className="absolute inset-0 w-full h-4/5 p-20">
          <div className="flex animate-scroll w-[400%] h-full">
            {heroBackgrounds.map((bg, index) => (
              <div
                key={`${bg}-${index}`}
                className="relative w-1/3 h-full flex-none"
              >
                <Image
                  src={bg}
                  alt=""
                  width={1920}
                  height={1080}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-5xl font-bold mb-5 xl:mb-20">
            Unlimited movies, TV 
            <br />shows, and more
          </h1>
          <h2 className="text-xl md:text-2xl mb-5">
            Watch anywhere. Cancel anytime.
          </h2>
          <SignupForm />
        </div>
      </section>

      {/* Content Rows Section */}
      <section className="py-8 border-t-8 border-[#232323]">
        {contentRows.map((row) => (
          <ContentRow
            key={row.title}
            title={row.title}
            items={row.items}
          />
        ))}
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t-8 border-[#232323]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
          <div className="mt-12">
            <SignupForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black text-[#737373] border-t-8 border-[#232323]">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-6">Questions? Call 1-844-505-2993</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'FAQ', 'Help Center', 'Account', 'Media Center',
              'Investor Relations', 'Jobs', 'Ways to Watch', 'Terms of Use',
              'Privacy', 'Cookie Preferences', 'Corporate Information',
              'Contact Us', 'Speed Test', 'Legal Notices', 'Only on Netflix'
            ].map((link) => (
              <a 
                key={link} 
                href="#" 
                className="text-sm hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <select className="bg-transparent text-sm border px-4 py-1">
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            <p className="mt-4 text-sm">Netflix United States</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
