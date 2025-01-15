import AgriculturalProducts from "../../assets/Products/Agricultural Products.png";
import IndustrialGoods from "../../assets/Products/Industrial Goods.png";
import ConsumerGoods from "../../assets/Products/Consumer Goods.png";
import Pharmaceutical from "../../assets/Products/Pharmaceutical.png";
import Automotive from "../../assets/Products/Automotive.png";
import SyntheticPaper from "../../assets/Products/Synthetic Paper.png";

export const productsData = [
  {
    id: "AgriculturalProducts",
    img: AgriculturalProducts,
    text: "Agricultural Products",
    heading: "Fresh Produce, Grains and Spices",
    paragraph: (
      <span >
        At Akarswift Global, we source the finest agricultural products to meet the growing demands of the global market. Our agricultural division focuses on sustainability and quality, ensuring that every product is fresh, nutritious, and responsibly sourced.
      </span>
    ),
    items: [
      {
        title: "Fresh Produce",
        text: < span style={{ color: "#fc6f10" }}>We offer a variety of fresh fruits and vegetables, carefully harvested to retain their natural flavors and nutrients. Our produce is sourced from certified farms that practice sustainable agriculture.</span>,
      },
      {
        title: "Grains",
        text: <span style={{ color: "#fc6f10" }}>We provide high-quality grains, including rice, wheat, and barley. Each grain is meticulously processed to maintain its purity and nutritional value.</span>,
      },
      {
        title: "Spices",
        text: <span style={{ color: "#fc6f10" }}>Our selection of spices includes turmeric, black pepper, cardamom, and more. These spices are sourced from regions renowned for their quality, ensuring that they enhance the flavor and aroma of your culinary creations.</span>,
      },
    ],
    features: [
      {
        title: "Sustainability",
        text: <span style={{ color: "#fc6f10" }}>Commitment to eco-friendly farming practices.</span>,
      },
      {
        title: "Quality Assurance",
        text: <span style={{ color: "#fc6f10" }}>Rigorous quality checks to ensure purity and freshness.</span>,
      },
      {
        title: "Global Sourcing",
        text: <span style={{ color: "#fc6f10" }}>Partnerships with trusted farms worldwide.</span>,
      },
      {
        title: "Nutritional Value",
        text: <span style={{ color: "#fc6f10" }}>Products rich in essential vitamins and minerals.</span>,
      },
      {
        title: "Packaging",
        text: <span style={{ color: "#fc6f10" }}>Eco-friendly packaging that preserves freshness.</span>,
      },
    ],
    reverseLayout: false,
  },
  {
    id: "IndustrialGoods",
    img: IndustrialGoods,
    text: "Industrial Goods",
    heading: "Machinery, Tools, and Raw Materials",
    paragraph: (
      <span >
        Akarswift Global's industrial goods division is dedicated to supplying high-quality machinery, tools, and raw materials essential for various industries. Our products are designed to enhance productivity and efficiency, catering to sectors such as manufacturing, construction, and mining.
      </span>
    ),
    items: [
      {
        title: "Machinery",
        text: <span style={{ color: "#fc6f10" }}>We provide advanced machinery, including CNC machines, industrial robots, and automated production lines. Our machines are built for precision, durability, and high performance.</span>,
      },
      {
        title: "Tools",
        text: <span style={{ color: "#fc6f10" }}>Our range of tools includes hand tools, power tools, and cutting tools. Each tool is crafted to meet the highest standards of safety and reliability.</span>,
      },
      {
        title: "Raw Materials",
        text: <span style={{ color: "#fc6f10" }}>We supply essential raw materials such as steel, aluminum, and copper. These materials are sourced from reputable suppliers to ensure their quality and compliance with industry standards.</span>,
      },
    ],
    features: [
      {
        title: "Innovation",
        text: <span style={{ color: "#fc6f10" }}>Cutting-edge technology for enhanced productivity.</span>,
      },
      {
        title: "Durability",
        text: <span style={{ color: "#fc6f10" }}>Products built to withstand demanding industrial environments.</span>,
      },
      {
        title: "Compliance",
        text: <span style={{ color: "#fc6f10" }}>Adherence to international quality and safety standards.</span>,
      },
      {
        title: "Customization",
        text: <span style={{ color: "#fc6f10" }}>Tailored solutions to meet specific industrial needs.</span>,
      },
      {
        title: "Support",
        text: <span style={{ color: "#fc6f10" }}>Comprehensive after-sales support and maintenance services.</span>,
      },
    ],
    reverseLayout: true,
  },
  {
    id: "ConsumerGoods",
    img: ConsumerGoods,
    text: "Consumer Goods",
    heading: "Electronics, Apparel, and Home Goods",
    paragraph: (
      <span >
        Our consumer goods division offers a wide range of products designed to improve the quality of life for consumers around the world. From state-of-the-art electronics to stylish apparel and practical home goods, we ensure that our products meet the highest standards of quality and innovation.
      </span>
    ),
    items: [
      {
        title: "Electronics",
        text: <span style={{ color: "#fc6f10" }}>We offer a variety of electronics, including smartphones, laptops, and home appliances. Our products are sourced from leading manufacturers, ensuring reliability and cutting-edge technology.</span>,
      },
      {
        title: "Apparel",
        text: <span style={{ color: "#fc6f10" }}>Our apparel collection features trendy and comfortable clothing for men, women, and children. We prioritize sustainable fabrics and ethical manufacturing practices.</span>,
      },
      {
        title: "Home Goods",
        text: <span style={{ color: "#fc6f10" }}>We provide essential home goods such as kitchenware, furniture, and decor items. Each product is designed to enhance comfort and functionality in your home.</span>,
      },
    ],
    features: [
      {
        title: "Innovation",
        text: <span style={{ color: "#fc6f10" }}>Latest technology and trends in consumer goods.</span>,
      },
      {
        title: "Quality",
        text: <span style={{ color: "#fc6f10" }}>Products tested for performance and durability.</span>,
      },
      {
        title: "Sustainability",
        text: <span style={{ color: "#fc6f10" }}>Eco-friendly materials and ethical production.</span>,
      },
      {
        title: "Variety",
        text: <span style={{ color: "#fc6f10" }}>Wide selection to cater to diverse consumer preferences.</span>,
      },
      {
        title: "Customer Satisfaction",
        text: <span style={{ color: "#fc6f10" }}>Commitment to exceptional service and support.</span>,
      },
    ],
    reverseLayout: false,
  },
  {
    id: "Pharmaceuticals",
    img: Pharmaceutical,
    text: "Pharmaceutical",
    heading: "High-Quality Medicines and Healthcare Products",
    paragraph: (
      <span >
        Akarswift Global's pharmaceutical division is dedicated to improving global health by providing high-quality medicines and healthcare products. Our portfolio includes essential drugs, over-the-counter medications, and healthcare supplies.
      </span>
    ),
    items: [
      {
        title: "Medicines",
        text: <span style={{ color: "#fc6f10" }}>We offer a comprehensive range of medicines, including antibiotics, antivirals, and chronic disease medications. Our products are manufactured in compliance with stringent regulatory standards.</span>,
      },
      {
        title: "Healthcare Products",
        text: <span style={{ color: "#fc6f10" }}>Our healthcare products include medical devices, diagnostics, and wellness products. These products are designed to support healthcare professionals and patients in achieving better health outcomes.</span>,
      },
    ],
    features: [
      {
        title: "Regulatory Compliance",
        text: <span style={{ color: "#fc6f10" }}>Adherence to global pharmaceutical standards.</span>,
      },
      {
        title: "Quality Assurance",
        text: <span style={{ color: "#fc6f10" }}>Rigorous testing and quality control processes.</span>,
      },
      {
        title: "Accessibility",
        text: <span style={{ color: "#fc6f10" }}>Efforts to make healthcare products affordable and accessible.</span>,
      },
      {
        title: "Innovation",
        text: <span style={{ color: "#fc6f10" }}>Investment in research and development for advanced therapies.</span>,
      },
      {
        title: "Support",
        text: <span style={{ color: "#fc6f10" }}>Comprehensive information and support for healthcare providers and patients.</span>,
      },
    ],
    reverseLayout: true,
  },
  {
    id: "Automotive",
    img: Automotive,
    text: "Automotive",
    heading: "Vehicles and Automotive Parts",
    paragraph: (
      <span >
        Our automotive division provides a wide range of vehicles and automotive parts to meet the needs of the global automotive market. From passenger cars to commercial vehicles and spare parts, we ensure that our products are reliable, efficient, and environmentally friendly.
      </span>
    ),
    items: [
      {
        title: "Vehicles",
        text: <span style={{ color: "#fc6f10" }}>We offer a variety of vehicles, including sedans, SUVs, trucks, and buses. Our vehicles are sourced from leading manufacturers known for their innovation and quality.</span>,
      },
      {
        title: "Automotive Parts",
        text: <span style={{ color: "#fc6f10" }}>Our selection of automotive parts includes engines, transmissions, brakes, and more. Each part is designed to meet OEM standards and ensure optimal performance.</span>,
      },
    ],
    features: [
      {
        title: "Quality",
        text: <span style={{ color: "#fc6f10" }}>Vehicles and parts tested for performance and safety.</span>,
      },
      {
        title: "Efficiency",
        text: <span style={{ color: "#fc6f10" }}>Focus on fuel efficiency and low emissions.</span>,
      },
      {
        title: "Reliability",
        text: <span style={{ color: "#fc6f10" }}>Products built to withstand rigorous use.</span>,
      },
      {
        title: "Innovation",
        text: <span style={{ color: "#fc6f10" }}>Advanced technology for enhanced driving experience.</span>,
      },
      {
        title: "Customer Support",
        text: <span style={{ color: "#fc6f10" }}>Comprehensive after-sales service and parts availability.</span>,
      },
    ],
    reverseLayout: false,
  },
  {
    id: "SyntheticPaper",
    img: SyntheticPaper,
    text: "Eco Friendly Synthetic Paper",
    heading: "Eco-friendly Synthetic Paper",
    paragraph: (
      <span >
        Our eco-friendly synthetic paper is designed to meet the highest standards of security and sustainability. Ideal for secure documents such as certificates, this paper combines durability with advanced security features to prevent counterfeiting.
      </span>
    ),
    features: [
      {
        title: "Sustainability",
        text: <span style={{ color: "#fc6f10" }}>Commitment to eco-friendly practices.</span>,
      },
      {
        title: "Durability",
        text: <span style={{ color: "#fc6f10" }}>Designed to withstand wear and tear.</span>,
      },
      {
        title: "Security Features",
        text: <span style={{ color: "#fc6f10" }}>Advanced anti-counterfeiting measures.</span>,
      },
      {
        title: "Eco-Friendly",
        text: <span style={{ color: "#fc6f10" }}>Manufactured with minimal environmental impact.</span>,
      },
      {
        title: "Versatility",
        text: <span style={{ color: "#fc6f10" }}>Suitable for a wide range of applications.</span>,
      },
    ],
    reverseLayout: true,
  },
];
