import TrialTrigger from './TrialTrigger';

export default function CtaBanner() {
  return (
    <div className="bg-[#18181B] py-24 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-display font-black uppercase text-white"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
        >
          Still Deciding?
        </h2>
        <p className="font-sans text-[#A1A1AA] text-base mt-4 max-w-md mx-auto">
          Your first class costs nothing. No credit card. No follow-up calls unless you ask.
        </p>
        <div className="mt-10 flex justify-center">
          <TrialTrigger variant="banner" label="CLAIM FREE TRIAL" />
        </div>
      </div>
    </div>
  );
}
