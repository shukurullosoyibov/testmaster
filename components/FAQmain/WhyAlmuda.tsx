const whyAlmuda: { title: string; text: string }[] = [
  {
    title: "1. Unmatched Expertise:",
    text: `Our team boasts industry-leading expertise in mainland and
    offshore company formation. With years of experience, we possess
    in - depth knowledge of the intricacies of business setup,
    ensuring that you make informed decisions every step of the way.`,
  },
  {
    title: "2. Comprehensive Solutions: ",
    text: `Almuda offers a one-stop-shop service for all your business needs, including trade licenses and visa requirements. This means streamlined processes and the convenience of dealing with a single partner for your business setup.`,
  },
  {
    title: "3. Guided Success: ",
    text: `We're not just service providers; we're business guides. Almuda assists entrepreneurs and corporations in selecting the right jurisdiction and company structure. Our goal is to position you for long-term growth and success while avoiding costly mistakes.`,
  },
  {
    title: "4. Financial Advantages:",
    text: "Choosing Almuda means enjoying the full income potential of Uzbekistan. You can send back 100% of your capital and profits to your home country, a financial benefit that can significantly impact your bottom line.",
  },
  {
    title: "5. Cost Savings:",
    text: "With Almuda, you'll benefit from exemption from customs duties on imports and exports. No need to lease office space, minimal paperwork, and auditing requirements — these factors reduce your overhead costs.",
  },
  {
    title: "6. Global Reach",
    text: "Almuda leverages over 50 global Double Taxation Agreements, simplifying international business transactions and ensuring you maximize your returns.",
  },
];

const variants = {
  text: "text-start text-base font-medium text-primary/80 sm:text-[17px] xl:text-lg",
};

const WhyAlmuda = () => {
  return (
    <div
      id="whyAlmuda"
      role="region"
      aria-labelledby="why-almuda-heading"
      className="lg:py-40"
    >
      <div className="flex flex-col items-center justify-center">
        <h2
          id="why-almuda-heading"
          aria-label="Why should you choose Almuda?"
          className="title capitalize"
        >
          Why should you choose almuda?
        </h2>
        <p
          aria-label="At Almuda Company, we're committed to being your partner in success.
          We understand that when it comes to critical business decisions, you
          need a trusted advisor by your side. Here's why we believe Almuda is
          the right choice for you:"
          className="txt"
        >
          At Almuda Company, we&apos;re committed to being your partner in
          success. We understand that when it comes to critical business
          decisions, you need a trusted advisor by your side. Here&apos;s why we
          believe Almuda is the right choice for you:
        </p>
      </div>
      <div className="py-20">
        <div className="flex flex-col">
          <ul
            role="list"
            className="flex w-full flex-col items-start justify-start space-y-2"
          >
            {whyAlmuda.map(({ title, text }, i) => (
              <li
                role="listitem"
                aria-label={`Reason ${i + 1}: ${title}`}
                key={i}
                className={variants.text}
              >
                <span className="mr-2 font-bold text-primary">{title}</span>
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <p
            className={variants.text}
            aria-label="Our commitment is to provide you with unparalleled service, transparent processes, and responsive support throughout your business journey. We're not just here to assist you; we're here to help you thrive."
          >
            Our commitment is to provide you with unparalleled service,
            transparent processes, and responsive support throughout your
            business journey. We&apos;re not just here to assist you; we&apos;re
            here to help you thrive.
          </p>
          <p
            className={variants.text}
            aria-label="Make the smart choice today. Choose Almuda Company for all your business setup needs. Your success is our success."
          >
            Make the smart choice today. Choose Almuda Company for all your
            business setup needs. Your success is our success.
          </p>
        </div>
        <div className="flex items-center" aria-hidden="true">
          Image
        </div>
      </div>
    </div>
  );
};

export default WhyAlmuda;
