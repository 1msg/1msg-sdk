/**
 * Load Chat API credentials from environment.
 */
export function loadConfig() {
  const baseUrl =
    process.env.CHAT_API_BASE_URL?.trim() ||
    process.env.MSG_API_BASE_URL?.trim();
  const instanceId =
    process.env.CHAT_API_INSTANCE_ID?.trim() ||
    process.env.INSTANCE_ID?.trim();
  const token =
    process.env.CHAT_API_TOKEN?.trim() ||
    process.env.MSG_API_TOKEN?.trim() ||
    process.env.TOKEN?.trim();

  const missing = [];
  if (!baseUrl) missing.push('CHAT_API_BASE_URL');
  if (!instanceId) missing.push('CHAT_API_INSTANCE_ID');
  if (!token) missing.push('CHAT_API_TOKEN');
  if (missing.length) {
    throw new Error(
      `Missing env: ${missing.join(', ')}. Copy .env.example → .env and fill values.`,
    );
  }

  return { baseUrl, instanceId, token };
}
