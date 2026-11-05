/**
 * QStash signature verification utility.
 *
 * Fail-closed: returns a 500 error if signing keys are not configured,
 * preventing unauthenticated access to cron endpoints when env vars
 * are accidentally missing.
 */
export async function verifyQStash(
  request: Request
): Promise<Response | null> {
  const currentKey = process.env.QSTASH_CURRENT_SIGNING_KEY;
  const nextKey = process.env.QSTASH_NEXT_SIGNING_KEY;

  if (!currentKey || !nextKey) {
    return Response.json(
      { error: "QStash signing keys not configured" },
      { status: 500 }
    );
  }

  const { Receiver } = await import("@upstash/qstash");
  const receiver = new Receiver({
    currentSigningKey: currentKey,
    nextSigningKey: nextKey,
  });

  const body = await request.text();
  const signature = request.headers.get("upstash-signature");

  if (!signature) {
    return Response.json({ error: "Missing signature" }, { status: 401 });
  }

  try {
    await receiver.verify({ signature, body });
  } catch {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  // Verification passed
  return null;
}
