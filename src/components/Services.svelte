<script>
  const services = [
    {
      name: "Accuracy",
      icon: "/images/icons/accuracy.png",
      description:
        "There is a lack of confidence in sizing accuracy, leading to uncertainty about fit and style. Fitted addresses this concern by providing personalized size recommendations based on accurate measurements, boosting customer confidence and reducing the likelihood of returns.",
    },
    {
      name: "Savings",
      icon: "/images/icons/savings.png",
      description:
        "Online retailers lose a staggering $816 billion annually due to returns. Fitted revolutionizes the shopping experience, slashing return rates and saving companies precious revenue.",
    },
    {
      name: "Streamline",
      icon: "/images/icons/streamline.png",
      description:
        "International sizing discrepancies complicate online shopping, leading to higher return rates and financial losses for clothing companies. Fitted streamlines returns and provides personalized size recommendations, easing this burden and enhancing the global shopping experience.",
    },
    {
      name: "Satisfaction",
      icon: "/images/icons/satisfaction.png",
      description:
        "By utilizing Fitted, customers can bypass the time-consuming process of returning ill-fitting clothes and instead enjoy a streamlined shopping experience tailored to their measurements. This not only saves them valuable time but also ensures they find the perfect fit with every purchase.",
    },
    {
      name: "Innovation",
      icon: "/images/icons/innovation.png",
      description:
        "Fitted keeps you ahead of the curve by integrating the latest technology in the fashion industry. By leveraging advanced algorithms and machine learning, we ensure that your shopping experience is both modern and efficient, adapting to new trends and innovations seamlessly.",
    },
    {
      name: "Tailored Fit",
      icon: "/images/icons/tailor.png",
      description:
        "Fitted offers a truly tailored shopping experience, customized to meet the unique needs of both customers and online retailers. By providing precise size recommendations and personalized style advice, we ensure that every purchase feels bespoke, reducing returns and enhancing satisfaction.",
    },
  ];
</script>

<div
  id="services"
  class="mt-10 flex flex-col items-center justify-center md:mt-20"
>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-center font-urbanist text-2xl font-semibold md:text-5xl">
      Why Fittedd?
    </h1>
    <span
      class="text-md font-urbanist mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl"
      >Uncover new paths, explore opportunities and chart your success with us.</span
    >
  </div>
  <div class="container mt-10 grid gap-10 p-4 md:grid-cols-2 xl:grid-cols-3">
    {#each services as item, index}
      <div
        class="card max-w-2xl shadow-sm transition duration-300 hover:-translate-y-1"
      >
        <div class="card-body">
          <div
            class="h-16 w-16 rounded-full bg-gradient-to-t from-[#86736B]/30 to-[#A3C4CC]/10"
          >
            <img class="p-4" src={item.icon} alt={item.name} />
          </div>
          <h2 class="font-urbanist card-title text-3xl font-black">
            {item.name}
          </h2>
          <p class="text-md font-urbanist font-medium opacity-60">
            {item.description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
