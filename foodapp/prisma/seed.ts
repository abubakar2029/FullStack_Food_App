import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createRecords() {
  try {
    const user1 = await prisma.user.create({
      data: {
        fullName: "Asad Ali",
        password: "password2",
        email: "asad_ali@foodapp.com",
        role: "seller",
      },
    });

    const user2 = await prisma.user.create({
      data: {
        fullName: "Zia Khan",
        password: "password3",
        email: "zia_khan@foodapp.com",
        role: "seller",
      },
    });

    // Use user IDs to create related records
    await prisma.seller.create({
      data: {
        id: user1.id,
        storeName: "Best Bites",
        state: "Punjab",
        city: "Lahore",
        streetAddress: "789 Gulberg Rd",
      },
    });

    await prisma.seller.create({
      data: {
        id: user2.id, // Use the user ID
        storeName: "Yummy Foods",
        state: "Sindh",
        city: "Karachi",
        streetAddress: "321 Saddar Ln",
      },
    });

    console.log("Records created");
  } catch (error) {
    console.error("Error creating records:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Execute the seeding function
createRecords();
