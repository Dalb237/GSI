const partners = ["duolingo", "magic leap", "Microsoft", "Codecov", "UserTesting"];

const PartnersBar = () => {
  return (
    <div className="mt-12 py-6 px-8" style={{ background: "var(--partners-gradient)" }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-8 flex-wrap">
        {partners.map((name) => (
          <span
            key={name}
            className="text-primary-foreground font-heading font-bold text-lg tracking-wide opacity-90"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PartnersBar;
