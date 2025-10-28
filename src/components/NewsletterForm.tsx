type NewsletterFormProps = {
  formAction?: string;
  title?: string;
  subtitle?: string;
};

export default function NewsletterForm({
  formAction = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_MAILCHIMP_FORM_ACTION || '#',
  title = 'Get updates and lesson links',
  subtitle = 'Join the list to receive course updates, lesson drops, and related resources.'
}: NewsletterFormProps) {
  const isConfigured = formAction && formAction !== '#';

  return (
    <div className="rounded-2xl p-6 md:p-8 bg-[#F9F5FF] border border-[#E9D8FD]">
      <h3 className="text-2xl md:text-3xl font-black text-[#6B2C91] mb-2">{title}</h3>
      <p className="text-gray-700 mb-6">{subtitle}</p>

      <form action={formAction} method="post" target="_blank" noValidate className="grid md:grid-cols-[1fr_auto] gap-3">
        <input
          aria-label="Email address"
          type="email"
          name="EMAIL"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl border border-[#E9D8FD] focus:outline-none focus:ring-2 focus:ring-[#6B2C91]"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-[#6B2C91] text-white font-bold hover:bg-[#8B3CB1] transition-transform hover:scale-105"
        >
          Subscribe
        </button>

        {/* Optional name field row */}
        <div className="md:col-span-2 grid md:grid-cols-2 gap-3">
          <input
            aria-label="First name"
            type="text"
            name="FNAME"
            placeholder="First name (optional)"
            className="w-full px-4 py-3 rounded-xl border border-[#E9D8FD] focus:outline-none focus:ring-2 focus:ring-[#6B2C91]"
          />
          <input
            aria-label="Last name"
            type="text"
            name="LNAME"
            placeholder="Last name (optional)"
            className="w-full px-4 py-3 rounded-xl border border-[#E9D8FD] focus:outline-none focus:ring-2 focus:ring-[#6B2C91]"
          />
        </div>
      </form>

      {!isConfigured && (
        <p className="text-sm text-gray-500 mt-3">
          Note: set VITE_MAILCHIMP_FORM_ACTION in your .env to enable this form.
        </p>
      )}
    </div>
  );
}
