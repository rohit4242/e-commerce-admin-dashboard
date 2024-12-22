import db from "./db";

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
      // Additional products
      db.product.create({
        data: {
          name: "Vintage Graphic T-Shirt",
          price: 34.99,
          categoryId: categories[0].id,
          sizeId: sizes[0].id,
          colorId: colors[1].id,
          storeId: store.id,
          isFeatured: true,
          isArchived: false,
          images: {
            createMany: {
              data: [{ url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample4.jpg" }],
            },
          },
        },
      }),
      db.product.create({
        data: {
          name: "Limited Edition Hoodie",
          price: 79.99,
          categoryId: categories[1].id,
          sizeId: sizes[2].id,
          colorId: colors[0].id,
          storeId: store.id,
          isFeatured: true,
          isArchived: false,
          images: {
            createMany: {
              data: [{ url: "https://res.cloudinary.com/demo/image/upload/v1312461204/sample5.jpg" }],
            },
          },
        },
      }),
    ]);
    // Create orders with different product combinations and prices
    const decemberOrders = await Promise.all([
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567891",
          address: "456 Oak St, City, Country",
          orderItems: {
            create: [
              { productId: products[0].id },
              { productId: products[2].id },
            ],
          },
          createdAt: new Date('2024-01-15T15:30:00Z'),
        },
      }),
      // February 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567892",
          address: "789 Pine St, City, Country",
          orderItems: {
            create: [
              { productId: products[1].id },
              { productId: products[3].id },
            ],
          },
          createdAt: new Date('2024-02-15T09:45:00Z'),
        },
      }),
      // March 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567893",
          address: "101 Elm St, City, Country",
          orderItems: {
            create: [
              { productId: products[2].id },
              { productId: products[3].id },
              { productId: products[0].id },
            ],
          },
          createdAt: new Date('2024-03-15T14:20:00Z'),
        },
      }),
      // April 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567894",
          address: "202 Maple St, City, Country",
          orderItems: {
            create: [{ productId: products[3].id }],
          },
          createdAt: new Date('2024-04-15T11:15:00Z'),
        },
      }),
      // May 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567895",
          address: "303 Birch St, City, Country",
          orderItems: {
            create: [
              { productId: products[0].id },
              { productId: products[1].id },
            ],
          },
          createdAt: new Date('2024-05-15T16:40:00Z'),
        },
      }),
      // June 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567896",
          address: "404 Cedar St, City, Country",
          orderItems: {
            create: [
              { productId: products[2].id },
              { productId: products[1].id },
              { productId: products[3].id },
            ],
          },
          createdAt: new Date('2024-06-15T13:25:00Z'),
        },
      }),
      // July 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567897",
          address: "505 Walnut St, City, Country",
          orderItems: {
            create: [
              { productId: products[3].id },
              { productId: products[2].id },
            ],
          },
          createdAt: new Date('2024-07-15T10:50:00Z'),
        },
      }),
      // August 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567898",
          address: "606 Spruce St, City, Country",
          orderItems: {
            create: [
              { productId: products[1].id },
              { productId: products[0].id },
              { productId: products[2].id },
            ],
          },
          createdAt: new Date('2024-08-15T12:35:00Z'),
        },
      }),
      // September 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567899",
          address: "707 Ash St, City, Country",
          orderItems: {
            create: [
              { productId: products[3].id },
              { productId: products[0].id },
            ],
          },
          createdAt: new Date('2024-09-15T17:15:00Z'),
        },
      }),
      // October 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567800",
          address: "808 Pine St, City, Country",
          orderItems: {
            create: [
              { productId: products[2].id },
              { productId: products[1].id },
              { productId: products[0].id },
            ],
          },
          createdAt: new Date('2024-10-15T15:55:00Z'),
        },
      }),
      // November 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567801",
          address: "909 Maple St, City, Country",
          orderItems: {
            create: [
              { productId: products[1].id },
              { productId: products[3].id },
            ],
          },
          createdAt: new Date('2024-11-15T14:30:00Z'),
        },
      }),
      // December 2024
      db.order.create({
        data: {
          storeId: store.id,
          isPaid: true,
          phone: "+1234567802",
          address: "1010 Oak St, City, Country",
          orderItems: {
            create: [
              { productId: products[0].id },
              { productId: products[2].id },
              { productId: products[3].id },
            ],
          },
          createdAt: new Date('2024-12-15T13:45:00Z'),
        },
      }),
    ]);
    // Create orders for each month of 2024
   const yearlyOrders = await Promise.all([
    // January 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567891",
        address: "456 Oak St, City, Country",
        orderItems: {
          create: [
            { productId: products[0].id },
            { productId: products[2].id },
          ],
        },
        createdAt: new Date('2024-01-15T15:30:00Z'),
      },
    }),
    // February 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567892",
        address: "789 Pine St, City, Country",
        orderItems: {
          create: [
            { productId: products[1].id },
            { productId: products[3].id },
          ],
        },
        createdAt: new Date('2024-02-15T09:45:00Z'),
      },
    }),
    // March 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567893",
        address: "101 Elm St, City, Country",
        orderItems: {
          create: [
            { productId: products[2].id },
            { productId: products[3].id },
            { productId: products[0].id },
          ],
        },
        createdAt: new Date('2024-03-15T14:20:00Z'),
      },
    }),
    // April 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567894",
        address: "202 Maple St, City, Country",
        orderItems: {
          create: [{ productId: products[3].id }],
        },
        createdAt: new Date('2024-04-15T11:15:00Z'),
      },
    }),
    // May 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567895",
        address: "303 Birch St, City, Country",
        orderItems: {
          create: [
            { productId: products[0].id },
            { productId: products[1].id },
          ],
        },
        createdAt: new Date('2024-05-15T16:40:00Z'),
      },
    }),
    // June 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567896",
        address: "404 Cedar St, City, Country",
        orderItems: {
          create: [
            { productId: products[2].id },
            { productId: products[1].id },
            { productId: products[3].id },
          ],
        },
        createdAt: new Date('2024-06-15T13:25:00Z'),
      },
    }),
    // July 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567897",
        address: "505 Walnut St, City, Country",
        orderItems: {
          create: [
            { productId: products[3].id },
            { productId: products[2].id },
          ],
        },
        createdAt: new Date('2024-07-15T10:50:00Z'),
      },
    }),
    // August 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567898",
        address: "606 Spruce St, City, Country",
        orderItems: {
          create: [
            { productId: products[1].id },
            { productId: products[0].id },
            { productId: products[2].id },
          ],
        },
        createdAt: new Date('2024-08-15T12:35:00Z'),
      },
    }),
    // September 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567899",
        address: "707 Ash St, City, Country",
        orderItems: {
          create: [
            { productId: products[3].id },
            { productId: products[0].id },
          ],
        },
        createdAt: new Date('2024-09-15T17:15:00Z'),
      },
    }),
    // October 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567800",
        address: "808 Pine St, City, Country",
        orderItems: {
          create: [
            { productId: products[2].id },
            { productId: products[1].id },
            { productId: products[0].id },
          ],
        },
        createdAt: new Date('2024-10-15T15:55:00Z'),
      },
    }),
    // November 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567801",
        address: "909 Maple St, City, Country",
        orderItems: {
          create: [
            { productId: products[1].id },
            { productId: products[3].id },
          ],
        },
        createdAt: new Date('2024-11-15T14:30:00Z'),
      },
    }),
    // December 2024
    db.order.create({
      data: {
        storeId: store.id,
        isPaid: true,
        phone: "+1234567802",
        address: "1010 Oak St, City, Country",
        orderItems: {
          create: [
            { productId: products[0].id },
            { productId: products[2].id },
            { productId: products[3].id },
          ],
        },
        createdAt: new Date('2024-12-15T13:45:00Z'),
      },
    }),
  ]);
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






