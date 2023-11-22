const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Technology Innovator" },
        { name: "Healthcare Professional" },
        { name: "Education Specialist" },
        { name: "Business and Finance Advisor" },
        { name: "Science Researcher" },
        { name: "Legal Expert" },
        { name: "Chief of Engineering" },
        { name: "Social Scientist" },
        { name: "Environmental Researcher" },
        { name: "Public Policy Analyst" },
        { name: "Media and Communication Professional" },
        { name: "Sports and Fitness Coach" },
        { name: "Lifestyle and Wellness Guru" },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();
