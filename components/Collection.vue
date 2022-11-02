<template>
  <section class="relative py-16 border-t-2 border-dashed border-white/10">
    <div class="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/20"></div>

    <div class="relative container mx-auto z-20 px-6">
      <div class="flex justify-center md:justify-start mb-8">
        <img src="/images/logos/legendary.png" alt="Legendary Motorsport" class="h-16" />
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-4 gap-8 p-0 list-none mb-16">
        <li v-for="(vehicle, i) in vehicles" :key="i" v-if="vehicle.dealer === 'legendary'">
          <Card
            :name="vehicle.name"
            :price="vehicle.price"
            :image="vehicle.image"
          />
        </li>
        )
        ))}
      </ul>

      <div class="flex justify-center md:justify-start mb-8">
        <img src="/images/logos/pdm.png" alt="Premium Deluxe Motorsport" class="h-14 md:h-16" />
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-4 gap-8 p-0 list-none">
        <li v-for="(vehicle, i) in vehicles" :key="i" v-if="vehicle.dealer === 'pdm'">
          <Card
            :name="vehicle.name"
            :price="vehicle.price"
            :image="vehicle.image"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      vehicles: [
        {
          dealer: "legendary",
          name: "Infernus",
          image: "https://gtacars.net/images/ab29494a59ae97f2953d801ee786cf48",
          price: "440,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "GT500",
          image: "https://gtacars.net/images/7b8e2f1c957bf4e4daf551a863743470",
          price: "785,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Infernus Classic",
          image: "https://gtacars.net/images/0d0838a019bd6bf7d122110f0c78bed1",
          price: "915,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Mamba",
          image: "https://gtacars.net/images/3f20a676700da328ea7632082f2beb8f",
          price: "950,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "811",
          image: "https://gtacars.net/images/a66803102a89831ef213b67f63d5efe3",
          price: "1,135,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "GP1",
          image: "https://gtacars.net/images/cf0a6050551426fee4fd7d4c95fba829",
          price: "1,200,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Tempesta",
          image: "https://gtacars.net/images/41242cbbb2644235ec4bfc72864d0a56",
          price: "1,300,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Nero Custom",
          image: "https://gtacars.net/images/81e9ec741f4ff9f0dff9d1803aa18be9",
          price: "1,400,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Vagner",
          image: "https://gtacars.net/images/4b6f726db6c90968c397d12eb569d586",
          price: "1,500,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Thrax",
          image: "https://gtacars.net/images/7b61d9d5439d71c0c8dcf9155a9ee885",
          price: "2,300,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Emerus",
          image: "https://gtacars.net/images/a9fb410a0ba8cdf728f25d293e37ecd5",
          price: "2,700,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Furia",
          image: "https://gtacars.net/images/248ef8231feb8c7daeeb30d4754bc4eb",
          price: "2,740,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Super Diamond",
          image: "https://gtacars.net/images/9697b1925c8c4ff99bf72aee9bf685b9",
          price: "2,600,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Ignus",
          image: "https://gtacars.net/images/78bcc5b51115aca5bf45540c3680cda2",
          price: "2,760,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Krieger",
          image: "https://gtacars.net/images/db239a13b8e1de143facc23820ba8d84",
          price: "2,800,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Zeno",
          image: "https://gtacars.net/images/d9598a35e3b37425331dbee1003977d2",
          price: "2,850,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Zeno",
          image: "https://gtacars.net/images/d9598a35e3b37425331dbee1003977d2",
          price: "2,850,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Cyclone II",
          image: "https://gtacars.net/images/72caba7a2fa5a3d5d242416d70abff9a",
          price: "5,500,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Progen Aurora Sport",
          image: "/images/features/vehicles/aurora.jpg",
          price: "2,400,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Dewbauchee Super GTS",
          image: "/images/features/vehicles/supergts.jpg",
          price: "2,600,000",
          reputation: '10',
        },
        {
          dealer: "legendary",
          name: "Italiu GTR",
          image: "/images/features/vehicles/italigtr.jpg",
          price: "3,400,000",
          reputation: '10',
        },
        // PDM
        {
          dealer: "pdm",
          name: "Blista",
          image: "https://gtacars.net/images/e94f04c927133e192192dd561845555f",
          price: "42,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Manchez Scout",
          image: "https://gtacars.net/images/d6f6ff79b8d83cc7a635913ede689f4e",
          price: "60,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Oracle",
          image: "https://gtacars.net/images/e11de2216bf3c6d4a1e1f04ddec6780c",
          price: "80,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Asterope",
          image: "https://gtacars.net/images/328761ce2a0d435e71b133d4413d6f61",
          price: "80,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Vamos",
          image: "https://gtacars.net/images/b86e5ec4bf9ff13259ef237f0e1d16a2",
          price: "550,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "8F Drafter",
          image: "https://gtacars.net/images/601ee8a8f5edfe8deb9fedb8ffef499f",
          price: "718,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Gauntlet Hellfire",
          image: "https://gtacars.net/images/ede307a542416908f1d6c5eb33bef6fc",
          price: "750,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Caracara 4x4",
          image: "https://gtacars.net/images/6347430b71f6c3e042efb1eb11991e32",
          price: "870,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Cypher",
          image: "https://gtacars.net/images/e994d2238d5211a4f8cf5f2e5ff686b8",
          price: "1,500,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Buffalo STX",
          image: "https://gtacars.net/images/40971556f6679d95a508e5928e3e3cca",
          price: "2,100,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Deity",
          image: "https://gtacars.net/images/1bf58b80e3657c282c9dc50c08736040",
          price: "2,400,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Vulcar Hachura",
          image: "/images/features/vehicles/hachura.jpg",
          price: "200,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Karin Asterope RS",
          image: "/images/features/vehicles/asterope.jpg",
          price: "80,000",
          reputation: '10',
        },
        {
          dealer: "pdm",
          name: "Pegassi Tempesta Spider",
          image: "/images/features/vehicles/tempestas.jpg",
          price: "80,000",
          reputation: '10',
        },
      ],
    }
  }
}
</script>
