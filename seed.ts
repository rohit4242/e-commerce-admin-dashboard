import db from "./src/lib/db";

async function main() {
  console.log("Starting seeding process...");
  try {
    console.log("Seeding database...");
    // Create a store
    const store = await db.store.create({
      data: {
        name: "Fashion",
        userId: "user_2qUC2puIsZckEmzxGZETNvmXwbg", // Replace with a valid Clerk user ID
      },
    });
    console.log("Store created successfully");
    // Create a billboard
    const billboard = await db.billboard.create({
      data: {
        label: "Summer Collection 2024",
        imageUrl:
          "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
        storeId: store.id,
      },
    });
    // Create categories
    const categories = await Promise.all([
      db.category.create({
        data: {
          name: "T-Shirts",
          storeId: store.id,
          billboardId: billboard.id,
        },
      }),
      db.category.create({
        data: {
          name: "Hoodies",
          storeId: store.id,
          billboardId: billboard.id,
        },
      }),
    ]);
    // Create sizes
    const sizes = await Promise.all([
      db.size.create({
        data: {
          name: "Small",
          value: "S",
          storeId: store.id,
        },
      }),
      db.size.create({
        data: {
          name: "Medium",
          value: "M",
          storeId: store.id,
        },
      }),
      db.size.create({
        data: {
          name: "Large",
          value: "L",
          storeId: store.id,
        },
      }),
    ]);
    // Create colors
    const colors = await Promise.all([
      db.color.create({
        data: {
          name: "Black",
          value: "#000000",
          storeId: store.id,
        },
      }),
      db.color.create({
        data: {
          name: "White",
          value: "#FFFFFF",
          storeId: store.id,
        },
      }),
      db.color.create({
        data: {
          name: "Navy",
          value: "#000080",
          storeId: store.id,
        },
      }),
    ]);
    // Create products
    const products = await Promise.all([
      db.product.create({
        data: {
          name: "Classic Cotton T-Shirt",
          price: 29.99,
          categoryId: categories[0].id,
          sizeId: sizes[1].id,
          colorId: colors[0].id,
          storeId: store.id,
          isFeatured: true,
          isArchived: false,
          images: {
            createMany: {
              data: [
                {
                  url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg",
                },
                {
                  url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample2.jpg",
                },
              ],
            },
          },
        },
      }),
      db.product.create({
        data: {
          name: "Premium Hoodie",
          price: 59.99,
          categoryId: categories[1].id,
          sizeId: sizes[2].id,
          colorId: colors[2].id,
          storeId: store.id,
          isFeatured: true,
          isArchived: false,
          images: {
            createMany: {
              data: [
                {
                  url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample3.jpg",
                },
              ],
            },
          },
        },
      }),
    ]);
    // Create orders
    await db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567890",
        address: "123 Main St, City, Country",
        orderItems: {
          create: [
            {
              productId: products[0].id,
            },
            {
              productId: products[1].id,
            },
          ],
        },
      },
    });
    console.log("Seed data created successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await db.$disconnect();
  }
}

main()
 .catch((error) => {
   console.error(error);
   process.exit(1);
 }) 






