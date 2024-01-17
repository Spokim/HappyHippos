import { CollectionConfig } from "payload/types";

export const ProductPrices: CollectionConfig = {
  slug: "product_prices",
  access: {
    update: ({ req }) => req.user.role === "admin",
    delete: ({ req }) => req.user.role === "admin",
    create: ({ req }) => req.user.role === "admin",
  },
  fields: [
    {
      name: "product_id",
      label: "productID",
      type: "text",
      required: true,
    },
    {
      name: "currency",
      label: "Currency",
      type: "select",
      defaultValue: "usd",
      options: [
        {
          label: "USD",
          value: "usd",
        },
        {
          label: "SEK",
          value: "sek",
        },
        {
          label: "YEN",
          value: "yen",
        },
      ],
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      min: 0.01,
      required: true,
    },
  ],
};
