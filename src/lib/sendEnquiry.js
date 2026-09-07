export async function sendEnquiry(payload) {
  const response = await fetch('/api/send-enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.error || 'Failed to send enquiry. Please try again.');
  }

  return data;
}
