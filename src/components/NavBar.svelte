<script>

    const navigation = [
        { name: "Home", href: "#home" },
        { name: "Learn More", href: "#services" },
        { name: "Team", href: "#team" },
        { name: "Get Fitted", href: "#contactus" },
    ];

    let active = "Home";

    /**
     * @param {string} itemName
     */
    function setActive(itemName) {
        active = itemName;
    }
</script>

<div class="sticky top-0 z-50 flex justify-center py-4">
    <div
        class="navbar max-w-xs rounded-full bg-[#F9F8F2] py-0 shadow-2xl outline outline-base-content/5 backdrop-blur md:max-w-4xl">
        <div class="navbar-start">

            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-circle btn-ghost hover:bg-[#86736B]/35 lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul class="menu dropdown-content menu-md z-[1] mt-3 w-52 gap-2 rounded-box bg-[#F9F8F2] p-2 shadow">
                    {#each navigation as item}
                        <li>
                            <a href={item.href} class="font-urbanist hover:bg-[#86736B]/35">{item.name}</a>
                        </li>
                    {/each}
                </ul>
            </div>

            <a href="/" class="btn btn-ghost rounded-full font-urbanist text-lg font-semibold hover:bg-[#86736B]/35">Fitted</a>
        </div>

        <div class="navbar-center ml-10 hidden lg:flex">
            {#each navigation as item}
                <nav class="menu menu-horizontal px-1">
                    <a
                        href={item.href}
                        class={`btn btn-ghost rounded-full font-urbanist text-sm font-light ${
                            active === item.name ? "bg-[#C7D5D8]" : ""
                        }`}
                        on:click={() => setActive(item.name)}>{item.name}</a>
                </nav>
            {/each}
        </div>
        <div class="navbar-end h-10"> 
        </div>
    </div>
</div>