export interface Grade {
  id: string;
  name: string;
  price: number | null;
  previous_price: number | null;
  unit: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  grades: Grade[];
}

export interface PriceCategory {
  id: string;
  name: string;
  slug: string;
  note: string | null;
  products: ProductItem[];
}

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    "id": "0d8ca61b-20fe-4380-9968-6c3499547df3",
    "name": "Turmeric Finger",
    "slug": "turmeric-finger",
    "note": "Packing 50 KG Jute Nett | Loading 10-15 Days",
    "products": [
      {
        "id": "ddd6f6cb-9ea0-4290-884a-2a65d088781d",
        "name": "Nizamabad Quality",
        "slug": "nizamabad-turmeric",
        "grades": [
          {
            "id": "b42afc89-38c5-4af4-9f9a-82e119876680",
            "name": "Good Grade",
            "price": 210,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "a978483b-1325-45bf-9cb3-211c7998760e",
            "name": "FAQ",
            "price": 200,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "fa971757-b6c2-4998-af07-c1fc6d48ce96",
        "name": "Maharashtra Quality",
        "slug": "maharashtra-turmeric",
        "grades": [
          {
            "id": "0460a880-61b8-402d-8d73-bc954e9a72a2",
            "name": "Good Grade",
            "price": 220,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "13fe31cb-234a-4665-b1f2-50e5aec88884",
            "name": "FAQ",
            "price": 195,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "2709758e-221d-44ab-9b6e-00b507b3a73a",
            "name": "Broken",
            "price": 185,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "539eaaf0-bdbd-4efc-859b-6b5e4cd66d2c",
            "name": "Bulb",
            "price": 240,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "8229a0ab-8b09-4e5e-8d8f-a8f87b497ae8",
        "name": "Kaddapa Quality",
        "slug": "kaddapa-turmeric",
        "grades": [
          {
            "id": "8fbdda52-201b-4dc7-bc07-b70dadc7615a",
            "name": "Good Grade",
            "price": 210,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "aff81d49-8f1f-44e7-a502-b2b19b069803",
            "name": "FAQ",
            "price": 200,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "25ce6449-6240-4c25-9dab-298c7d8c2be4",
            "name": "Broken",
            "price": 195,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "c1c90ed2-d6e9-42c3-aa20-82d46290ca7b",
            "name": "Bulb",
            "price": 200,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      }
    ]
  },
  {
    "id": "964d8e24-315c-487f-b393-af2729c89e9c",
    "name": "Seeds",
    "slug": "seeds",
    "note": "Packing 25 KG PP Bag Nett | F.O.R. Mundra",
    "products": [
      {
        "id": "bfee17de-dae2-4288-b20e-fc503394f0d6",
        "name": "Asaliya Seed",
        "slug": "asaliya-seed",
        "grades": [
          {
            "id": "b900fd05-d312-42ae-a9c4-ad6812112aa0",
            "name": "Sortex Clean",
            "price": 110,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "968b844e-601f-4952-a753-801831fccce9",
        "name": "Flax Seeds",
        "slug": "flax-seeds",
        "grades": [
          {
            "id": "26552382-8e72-4928-a0e8-e49393b2316a",
            "name": "Single Sortex",
            "price": 145,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "4c0072d2-77a0-43da-9586-bb852095526e",
        "name": "Dill Seeds",
        "slug": "dill-seeds",
        "grades": [
          {
            "id": "78aee190-22b4-4792-a74b-c2048d54740a",
            "name": "Split (Machine Clean)",
            "price": 140,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "489c203c-ff6f-4836-a77a-237aea37eb87",
            "name": "Whole (Machine Clean)",
            "price": 145,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "22958196-0e10-4f05-a29d-4e5e31580bb3",
        "name": "Yellow Mustard Seeds",
        "slug": "yellow-mustard-seeds",
        "grades": [
          {
            "id": "cef1be69-5115-47d4-9876-201168c86761",
            "name": "Bold",
            "price": 140,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "de14906a-1784-4cc1-9d1b-cd49b45f1af4",
            "name": "Small",
            "price": 115,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "212d4271-74ea-4d88-817d-c8f4f3b5a4aa",
        "name": "White Quinoa",
        "slug": "white-quinoa",
        "grades": [
          {
            "id": "2f1b0a93-9e1a-437e-8ed5-25e8f9948e6c",
            "name": "MP Origin",
            "price": 100,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "e5c28c45-0b38-4543-b8cb-bdc4ac6a6ba3",
            "name": "Rajasthan Origin",
            "price": null,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "ec881b12-4c4d-4eb5-a167-356d6854016b",
        "name": "Basil Seeds",
        "slug": "basil-seeds",
        "grades": [
          {
            "id": "d77a7cbd-b458-4775-83f8-95bca49ded34",
            "name": "Bold",
            "price": 250,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      }
    ]
  },
  {
    "id": "bb80adfe-12da-4580-9329-5f128a827e1a",
    "name": "Spice Powders",
    "slug": "spice-powders",
    "note": null,
    "products": [
      {
        "id": "10999666-eea5-4a2c-9abd-d6e0db181c33",
        "name": "Cumin Powder",
        "slug": "cumin-powder",
        "grades": [
          {
            "id": "11fbc9bf-3a3a-4ec4-b734-a69df79483af",
            "name": "Economy",
            "price": 185,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "55196347-5168-4eae-8679-000cfb325f0d",
            "name": "Standard",
            "price": 205,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "5636a68d-d3a1-43e1-a02f-4eade2faac60",
            "name": "Premium",
            "price": 240,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "f152b8ef-7457-4b44-bd9c-7be0298333d0",
        "name": "Coriander Powder",
        "slug": "coriander-powder",
        "grades": [
          {
            "id": "77f98e69-2b82-4f91-affe-cf912cb9f9a9",
            "name": "Economy",
            "price": 132,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "73f71ede-f495-4997-9fd7-6aea83d99477",
            "name": "Standard",
            "price": 190,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "8bf2d762-5bfe-4a53-9603-3615951e924f",
            "name": "Premium",
            "price": 220,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "1d03630b-9444-4d46-ac03-dc2985603920",
        "name": "Fennel Powder",
        "slug": "fennel-powder",
        "grades": [
          {
            "id": "ba78d07a-281c-4ac4-ba04-1131158273d9",
            "name": "Economy",
            "price": 105,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "391f8f03-b115-4146-b315-3d8cd08fc144",
            "name": "Standard",
            "price": 145,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "226ad5ab-5e3d-47ef-b118-1a7a6accd4c7",
            "name": "Premium (Supreme Green)",
            "price": 275,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "42785b5c-cd18-4c96-9871-1ca6e57f929c",
        "name": "Fenugreek Powder",
        "slug": "fenugreek-powder",
        "grades": [
          {
            "id": "5710464c-79dd-449a-9bd3-88f821fd1d43",
            "name": "Economy",
            "price": 100,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "cec7bb8e-ad75-4217-b049-f9c4209f4e44",
            "name": "Standard",
            "price": 105,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "959020a0-b38a-44ea-9a1a-10634d6ccea9",
            "name": "Premium",
            "price": 135,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "14cabcb5-2184-4fea-8b38-a0ecdf63da6d",
        "name": "Black Mustard Powder",
        "slug": "black-mustard-powder",
        "grades": [
          {
            "id": "2dbaffb5-a4bf-4c33-ba95-59336b66844e",
            "name": "Standard",
            "price": 130,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "c968c4dc-e73d-48a7-afc7-dc7cd91992ab",
        "name": "Yellow Mustard Powder",
        "slug": "yellow-mustard-powder",
        "grades": [
          {
            "id": "5d226188-97c6-49e3-b7f4-46a77c9f1be3",
            "name": "Standard",
            "price": 140,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "4535dcaa-cee4-4039-b130-d7c57e899aaa",
        "name": "Celery Seed Powder",
        "slug": "celery-seed-powder",
        "grades": [
          {
            "id": "b774bc52-22fd-4d28-b706-424bf29e63b5",
            "name": "Standard",
            "price": 250,
            "previous_price": null,
            "unit": "KG"
          },
          {
            "id": "1a2580f7-02e5-4263-b3bb-877b3fb26138",
            "name": "Premium",
            "price": 251,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "7d70d77e-1298-4697-8ea9-0a60d363cf10",
        "name": "Kalonji Powder",
        "slug": "kalonji-powder",
        "grades": [
          {
            "id": "526eba82-ae63-459b-bc32-e6f032886250",
            "name": "Standard",
            "price": 250,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "21afb361-a61f-440a-95d9-7bf2936e1d3a",
        "name": "Flax Powder",
        "slug": "flax-powder",
        "grades": [
          {
            "id": "13164b91-abdc-44da-ae6b-07fc0d18b4e5",
            "name": "Standard",
            "price": 175,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "898ff739-d09a-4ba6-a17e-8591811a6f36",
        "name": "Dill Seed Powder",
        "slug": "dill-seed-powder",
        "grades": [
          {
            "id": "e3de740c-6b76-41d5-becf-68cbbd723bb0",
            "name": "Standard",
            "price": 150,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      },
      {
        "id": "1e40319e-4804-49f3-9ca5-fa386f6755fd",
        "name": "Aamchur Powder",
        "slug": "aamchur-powder",
        "grades": [
          {
            "id": "988f81ed-9cff-4038-8574-5eace4fa218f",
            "name": "Standard",
            "price": 235,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      }
    ]
  },
  {
    "id": "c89d6fcf-bd79-4083-ac04-f448b1906f4e",
    "name": "Dairy & Ghee",
    "slug": "dairy-ghee",
    "note": null,
    "products": [
      {
        "id": "afc2356e-13e9-4054-b90a-942345e375e8",
        "name": "Desi Ghee",
        "slug": "desi-ghee",
        "grades": [
          {
            "id": "f12cfdc0-eadd-44ff-b007-3026b06d6b4c",
            "name": "Standard",
            "price": 1400,
            "previous_price": null,
            "unit": "KG"
          }
        ]
      }
    ]
  }
];
