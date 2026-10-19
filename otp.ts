import { createHash, randomInt, timingSafeEqual } from "node:crypto";

export function hashCode(code: string) {
  const secret = process.env.OTP_HASH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("OTP_HASH_SECRET must be configured with at least 32 characters.");
  }
  return createHash("sha256").update(`${secret}:${code}`).digest("hex");
}

export function makeCode() {
  return randomInt(0, 1_000_000).toString().padStart(6, "0");
}

export function safeHashCompare(a: string, b: string) {
  const aBuf = Buffer.from(a, "hex");
  const bBuf = Buffer.from(b, "hex");
  return aBuf.length === bBuf.length && timingSafeEqual(aBuf, bBuf);
}

export function isE164(phone: string) {
  return /^\+[1-9]\d{7,14}$/.test(phone);
}
