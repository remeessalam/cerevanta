import React from "react";

function ViewBlogContent() {
  return (
    <div className="">
      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white my-4"
          data-aos="fade-up"
        >
          Overview
        </h2>
        <p className="text-black dark:text-gray-400 " data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          placerat, magna at sollicitudin varius, eros augue faucibus mauris, ut
          malesuada nisl libero sit amet justo. Etiam nec libero vel velit
          efficitur fermentum a in lorem.
        </p>
      </section>

      <section className="mb-8">
        <h2
          className="text-2xl font-semibold dark:text-white mb-4"
          data-aos="fade-up"
        >
          Key Topics Covered
        </h2>
        <ul
          data-aos="fade-up"
          className="list-disc list-inside text-black dark:text-gray-400"
        >
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            fringilla ligula vel lorem fermentum feugiat.
          </li>
          <li>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </li>
          <li>
            Integer sit amet ipsum eu purus dapibus pretium. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices.
          </li>
          <li>
            Donec posuere neque ac ex varius, nec viverra magna tincidunt.
            Vestibulum rhoncus felis vel facilisis egestas.
          </li>
          <li>
            Curabitur at libero nec nunc ullamcorper accumsan non non justo.
            Nullam tincidunt velit id convallis congue.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <blockquote
          data-aos="fade-up"
          className="pl-4 italic text-black dark:text-gray-400"
        >
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat, lacus in pretium elementum, sem purus sagittis nisl, ut
            vehicula magna justo id purus."
          </p>
          <cite className="mt-2 text-black dark:text-gray-400">
            - Lorem Ipsum, Industry Expert
          </cite>
        </blockquote>
      </section>

      <section>
        <h2
          data-aos="fade-up"
          className="text-2xl font-semibold mb-4 dark: text-gray-400"
        >
          Why Read This?
        </h2>
        <p data-aos="fade-up" className="text-black dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium.
        </p>
      </section>
    </div>
  );
}

export default ViewBlogContent;
