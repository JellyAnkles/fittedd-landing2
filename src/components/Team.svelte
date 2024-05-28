<script>
  const team = [
    {
      name: "Octavia Desmarais",
      profile:
        "/images/headshots/Octavia.png",
      position: "Co-founder, CEO",
    },
    {
      name: "Kiara Simpson",
      profile:
        "/images/headshots/kiara.png",
      position: "Co-founder, CTO",
    },
  ];
</script>

<div id="team" class="flex flex-col items-center justify-center py-10 ">
  <div class="flex flex-col items-center justify-center">
    <h1 class="font-urbanist text-center text-2xl font-semibold md:text-5xl">
      Our Team
    </h1>
    <span
      class="text-md font-urbanist mt-4 px-2 text-center md:mt-4 md:px-5 md:text-xl"
      >Our passionate team collaborates seamlessly to create solutions.</span
    >
  </div>
  <div class="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
    {#each team as item, index}
      <div class="card w-80 border border-base-content/10 shadow-sm lg:w-96">
        <figure class="lpx-10 pt-10">
          <img src={item.profile} alt="Shoes" class="h-44 w-44 rounded-full" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="font-urbanist card-title font-bold">{item.name}</h2>
          <h2 class="font-urbanist font-semibold opacity-70">
            {item.position}
          </h2>
        </div>
      </div>
    {/each}
  </div>
</div>
