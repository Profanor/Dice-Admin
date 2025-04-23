import FormField from "@/components/form-field";

export default function WebHookTab() {
  return (
    <form>
      <FormField label="Webhook URL" htmlFor="webhookUrl">
        <div className="relative">
          <input
            id="webhookUrl"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-500 outline-none"
            placeholder="https://example.com/webhook"
          />
        </div>
      </FormField>

      <FormField label="User Details URL" htmlFor="userDetailsUrl">
        <div className="relative">
          <input
            id="userDetailsUrl"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-500 outline-none"
            placeholder="https://example.com/user-details"
          />
        </div>
      </FormField>

      <FormField label="Cashout Shop URL" htmlFor="cashoutShopUrl">
        <div className="relative">
          <input
            id="cashoutShopUrl"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-500 outline-none"
            placeholder="https://example.com/cashout"
          />
        </div>
      </FormField>

      <FormField label="Call Back URL" htmlFor="callbackUrl">
        <div className="relative">
          <input
            id="callbackUrl"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-500 outline-none"
            placeholder="https://example.com/callback"
          />
        </div>
      </FormField>
    </form>
  );
}
