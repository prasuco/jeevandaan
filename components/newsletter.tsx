import NewsLetterInput from "./newsletterInput";
const NewsLetter = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-4xl font-extrabold tracking-tighter md:text-5xl/tight">
            Upcoming Blood Donation Events
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out our upcoming blood donation events and sign up to make a
            difference.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <NewsLetterInput />
          <p className="text-xs text-muted-foreground">
            By signing up, you'll receive updates on new events and campaigns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
