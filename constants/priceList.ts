import { PriceList } from "@/types";
import { BiSupport } from "react-icons/bi";
import { BsFire, BsBank } from "react-icons/bs";
import { FaSmileBeam } from "react-icons/fa";
import {
  MdLocalActivity,
  MdSecurity,
  MdNewReleases,
  MdPaid,
  MdWorkHistory,
} from "react-icons/md";
import { FaCcVisa, FaCalendarCheck, FaStamp } from "react-icons/fa6";

export const priceList: PriceList[] = [
  {
    title: "Starter",
    price: 800,
    list: [
      {
        Icon: BsBank,
        text: "Opening bank account",
      },
      {
        Icon: FaSmileBeam,
        text: "Inclusive of 2 activities",
      },
      {
        Icon: MdSecurity,
        text: "Multiple shareholders permitted",
      },
      {
        Icon: FaStamp,
        text: "Company registration",
      },
      {
        Icon: MdNewReleases,
        text: "Lease agreement",
        not: true,
      },
      {
        Icon: BsFire,
        text: "100% foreign ownership",
        not: true,
      },
      {
        Icon: MdLocalActivity,
        text: "1,000+ Professional Activities available",
        not: true,
      },
      {
        Icon: FaCcVisa,
        text: "Visa",
        not: true,
      },
      {
        Icon: MdWorkHistory,
        text: "Valid work permit",
        not: true,
      },
      {
        Icon: MdPaid,
        text: "No paid-up share capital",
        not: true,
      },
      {
        Icon: FaCalendarCheck,
        text: "Guaranteed renewal rate for 1 years!",
        not: true,
      },
      {
        Icon: FaStamp,
        text: "Free company stamp",
        not: true,
      },
      {
        Icon: BiSupport,
        text: "24/7 phone, chat and email support",
        not: true,
      },
      {
        Icon: FaStamp,
        text: "Company registration",
      },
    ],
  },
  {
    popular: true,
    title: "Premium",
    price: 1000,
    list: [
      {
        Icon: BsBank,
        text: "Opening bank account",
      },
      {
        Icon: FaSmileBeam,
        text: "Inclusive of 2 activitiess",
      },
      {
        Icon: MdSecurity,
        text: "Multiple shareholders permitted",
      },
      {
        Icon: FaStamp,
        text: "Company registration",
      },
      {
        Icon: MdNewReleases,
        text: "Lease agreement",
      },
      {
        Icon: BsFire,
        text: "100% foreign ownership",
      },
      {
        Icon: MdLocalActivity,
        text: "1,000+ Professional Activities available",
      },
      {
        Icon: FaCcVisa,
        text: "Visa",
        not: true,
      },
      {
        Icon: MdWorkHistory,
        text: "Valid work permit",
        not: true,
      },
      {
        Icon: MdPaid,
        text: "No paid-up share capital",
        not: true,
      },
      {
        Icon: FaCalendarCheck,
        text: "Guaranteed renewal rate for 1 years!",
        not: true,
      },
      {
        Icon: FaStamp,
        text: "Free company stamp",
        not: true,
      },
      {
        Icon: BiSupport,
        text: "24/7 phone, chat and email support",
        not: true,
      },
    
    ],
  },
  {
    title: "Enterprise",
    price: 2800,
    list: [
      {
        Icon: BsBank,
        text: "Opening bank account",
      },
      {
        Icon: FaSmileBeam,
        text: "Inclusive of 2 activitiess",
      },
      {
        Icon: MdSecurity,
        text: "Multiple shareholders permitted",
      },
      {
        Icon: FaStamp,
        text: "Company registration",
      },
      {
        Icon: MdNewReleases,
        text: "Lease agreement",
      },
      {
        Icon: BsFire,
        text: "100% foreign ownership",
      },
      {
        Icon: MdLocalActivity,
        text: "1,000+ Professional Activities available",
      },
      {
        Icon: FaCcVisa,
        text: "Visa",
      },
      {
        Icon: MdWorkHistory,
        text: "Valid work permit",
      },
      {
        Icon: MdPaid,
        text: "No paid-up share capital",
      },
      {
        Icon: FaCalendarCheck,
        text: "Guaranteed renewal rate for 1 years!",
      },
      {
        Icon: FaStamp,
        text: "Free company stamp",
      },
      {
        Icon: BiSupport,
        text: "24/7 phone, chat and email support",
      },
      
    ],
  },
];
