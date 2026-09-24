/**
 * DC Foods and Beverages Pvt Ltd - Asset Catalog
 * Strongly typed paths to all organized media assets in /public/assets
 */

export const ASSETS = {
  banners: {
    distributorPortrait: "/assets/banners/master-distributor-portrait.jpeg",
    distributorLandscape: "/assets/banners/master-distributor-landscape.jpeg",
    distributorMakeInIndia: "/assets/banners/master-distributor-make-in-india.jpeg",
    retailShelfProducts: "/assets/banners/retail-shelf-display-products.jpeg",
    retailShelfWeights: "/assets/banners/retail-shelf-display-weights.jpeg",
  },
  spices: {
    chilliPoster: "/assets/products/spices/chilli-powder-poster.jpeg",
    chilliPack500g: "/assets/products/spices/chilli-powder-500g-pack.jpeg",
    turmericPoster: "/assets/products/spices/turmeric-powder-poster.jpeg",
    turmericPack500g: "/assets/products/spices/turmeric-powder-500g-pack.jpeg",
    garamTeaPoster: "/assets/products/spices/garam-and-tea-masala-poster.jpeg",
    garamMasalaPack500g: "/assets/products/spices/garam-masala-500g-pack.jpeg",
    teaMasalaPack500g: "/assets/products/spices/tea-special-masala-500g-pack.jpeg",
    sevUsalPoster: "/assets/products/spices/sev-usal-masala-poster.jpeg",
    sevUsalPack500g: "/assets/products/spices/sev-usal-masala-500g-pack.jpeg",
  },
  dehydratedFruits: {
    mangoPoster: "/assets/products/dehydrated-fruits/sun-dried-mango-poster.jpeg",
    mangoAlphonsoPack200g: "/assets/products/dehydrated-fruits/mango-alphonso-200g-pack.jpeg",
    orangePack200g: "/assets/products/dehydrated-fruits/orange-slices-200g-pack.jpeg",
    applePack200g: "/assets/products/dehydrated-fruits/apple-slices-200g-pack.jpeg",
    bananaPack250g: "/assets/products/dehydrated-fruits/banana-slices-250g-pack.jpeg",
    bananaPowderPoster: "/assets/products/dehydrated-fruits/banana-powder-poster.jpeg",
    fruitMedleyPoster: "/assets/products/dehydrated-fruits/fruit-slices-assortment-poster.jpeg",
  },
  vegetables: {
    onionPowderPack200g: "/assets/products/vegetables/onion-powder-200g-pack.jpeg",
    onionGuarGumPoster: "/assets/products/vegetables/onion-powder-guar-gum-poster.jpeg",
  },
  campaigns: {
    billboardVadodaraSevUsal: "/assets/campaigns/billboard-vadodara-sev-usal.jpeg",
    billboardVadodaraChilli: "/assets/campaigns/billboard-vadodara-3d-chilli.jpeg",
    burjKhalifaMango: "/assets/campaigns/burj-khalifa-projection-mango.jpeg",
    royalGoldTurmeric: "/assets/campaigns/royal-gold-showroom-turmeric.jpeg",
    underwaterOnionGuarGum: "/assets/campaigns/underwater-onion-guargum-ad.jpeg",
  },
  infographics: {
    mangoProductionJourney: "/assets/infographics/mango-production-journey.jpeg",
  },
  videos: {
    promoOnionGuarGum1: "/assets/videos/promo-onion-guar-gum-1.mp4",
    promoOnionGuarGum2: "/assets/videos/promo-onion-guar-gum-2.mp4",
  },
} as const;
