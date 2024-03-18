type Props = {
  title: string;
  text: string;
};

const Banner = ({ title, text }: Props) => {
  return (
    <div
      role="banner"
      aria-label={title}
      className="flex flex-col items-center justify-center"
    >
      <h1
        role="heading"
        className="title"
        title={title}
        tabIndex={0}
        aria-label={`Banner Title: ${title}`}
      >
        {title} 
      </h1>
      <p
        role="text"
        className="txt"
        title={text}
        tabIndex={0}
        aria-label={`Banner Text: ${text}`}
      >
        {text}
      </p>
    </div>
  );
};

export default Banner;
