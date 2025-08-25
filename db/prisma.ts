/* eslint-disable @typescript-eslint/no-explicit-any */
// db/prisma.ts
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import ws from 'ws';

const adapter = new PrismaNeon(
  // Adapter types don't include the custom `webSocketConstructor` property, cast options to any to satisfy TS
  { webSocketConstructor: ws } as any
);

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: { transform: (value: any) => value.toString() },
      rating: { transform: (value: any) => value.toString() },
    },
  },
});


// Optional: Test connection
(async () => {
  try {
    await prisma.$connect();
    console.log("✅ Prisma + Neon connected successfully!");
  } catch (err) {
    console.error("❌ Prisma connection error:", err);
  }
})();
