import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // insert demo or dummy or initial data in this seeder
  /// Users -------------------------------------------
  const user1 = await prisma.user.upsert({
    where: { email: 'user1@arotefy.com' },
    update: {},
    create: {
      name: 'User 01',
      email: 'user1@arotefy.com',
      password: 'user123',
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: 'user2@arotefy.com' },
    update: {},
    create: {
      name: 'User 02',
      email: 'user2@arotefy.com',
      password: 'user123',
    },
  });
  console.log('#. Users Created (Seed) ------>\n', user1, user2); // log

  /// Vendors --------------------------------------------
  const ven1 = await prisma.vendor.upsert({
    where: { vcode: 'vn1' },
    update: {},
    create: {
      name: 'Vendor 1',
      email: 'vendor@arotefy.com',
      password: 'vendor123',
      vcode: 'vn1',
    },
  });
  const ven2 = await prisma.vendor.upsert({
    where: { vcode: 'vn1' },
    update: {},
    create: {
      name: 'Vendor 1',
      email: 'vendor@arotefy.com',
      password: 'vendor123',
      vcode: 'vn1',
    },
  });
  console.log('#. Vendors Created (Seed) ------>\n', ven1, ven2); // log

  /// Category --------------------------------------------
  const cat1 = await prisma.category.upsert({
    where: { code: 'fish' },
    update: {},
    create: {
      name: 'Fishes',
      code: 'fish',
    },
  });
  const cat2 = await prisma.category.upsert({
    where: { code: 'veg' },
    update: {},
    create: {
      name: 'Vegetables',
      code: 'veg',
    },
  });
  console.log('#. Categories Created (Seed) ------>\n', cat1, cat2); // log
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    // close the client
    await prisma.$disconnect();
  });
