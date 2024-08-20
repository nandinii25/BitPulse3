import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className={`flex flex-row items-start p-4 m-4 rounded-lg shadow-xl ${color} animate-fade-in`}>
    <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white bg-opacity-80 ${color}`}>
      {icon}
    </div>
    kjhcsic
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400 text-sm md:w-10/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex flex-col items-center justify-center py-16 gradient-bg-services">
    <div className="text-center mb-8">
      <h1 className="text-3xl font-semibold text-white">
        Services We're Continuously Improving
      </h1>
      <p className="mt-2 text-gray-300">
        Your best choice for crypto asset transactions and services.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
      <ServiceCard
        color="bg-[#2952E3]"
        title="Security Guarantee"
        icon={<BsShieldFillCheck fontSize={24} className="text-white" />}
        subtitle="Your security is our priority. We ensure privacy and product quality."
      />
      <ServiceCard
        color="bg-[#8945F8]"
        title="Best Exchange Rates"
        icon={<BiSearchAlt fontSize={24} className="text-white" />}
        subtitle="Get the best exchange rates for your crypto transactions."
      />
      <ServiceCard
        color="bg-[#F84550]"
        title="Fastest Transactions"
        icon={<RiHeart2Fill fontSize={24} className="text-white" />}
        subtitle="Experience lightning-fast crypto transactions with us."
      />
    </div>
  </div>
);

export default Services;
