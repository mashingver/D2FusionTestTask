const categoryArray = [
  {
    categoryLabel: "Наши товары",
    categoryList: [
      {
        label: "Автоматические кофемашины",
        linkPath: "/catalogue/automatic-coffee-machines",
        previewImageName: "categoryPreview.jpg"
      },
      {
        label: "Техника для кухни",
        linkPath: "/catalogue/kitchen-appliances",
        subcategories: [
          {
            label: "Капсульные кофемашины",
            linkPath: "/catalogue/kitchen-appliances/capsule-coffee-machines",
            imageName: "capsule-coffee-machines.jpg"
          },
          {
            label: "Кофемолки",
            linkPath: "/catalogue/kitchen-appliances/coffee-grinders",
            imageName: "coffee-grinders.jpg"
          },
          {
            label: "Кофеварки",
            linkPath: "/catalogue/kitchen-appliances/coffee-makers",
            imageName: "coffee-makers.jpg"
          },
          {
            label: "Грили",
            linkPath: "/catalogue/kitchen-appliances/grills",
            imageName: "grills.jpg"
          },
          {
            label: "Электрочайники и тостеры",
            linkPath:
              "/catalogue/kitchen-appliances/electric-kettles-and-toasters",
            imageName: "electric-kettles-and-toasters.jpg"
          }
        ],
        previewImageName: "categoryPreview.jpg"
      },
      {
        label: "Техника для дома",
        linkPath: "/catalogue/home-appliances",
        subcategories: [
          {
            label: "Подаздел техники для дома",
            linkPath:
              "/catalogue/home-appliances/home-appliances-placeholder-1",
            imageName: "capsule-coffee-machines.jpg"
          }
        ],
        previewImageName: "categoryPreview.jpg"
      },
      {
        label: "Аксессуары",
        linkPath: "/catalogue/accessories",
        subcategories: [
          {
            label: "Подаздел Аксессуаров",
            linkPath: "/catalogue/accessories/accessories-placeholder-1",
            imageName: "capsule-coffee-machines.jpg"
          }
        ],
        previewImageName: "categoryPreview.jpg"
      }
    ],
    categoryType: "products"
  },
  {
    categoryLabel: "Мир De’Longhi",
    categoryList: [
      {
        label: "Мир De’Longhi",
        linkPath: "/delonghi-world"
      }
    ],
    categoryType: "links"
  },
  {
    categoryLabel: "Поддержка и дополнительная информация",
    categoryList: [
      {
        label: "Telegram-бот",
        linkPath: "/telegram-bot"
      },
      {
        label: "Поддержка",
        linkPath: "/support"
      },
      {
        label: "Сервисные центры",
        linkPath: "/service-centers"
      }
    ],
    categoryType: "links"
  },
  {
    categoryLabel: "Сервисные центры",
    categoryList: [
      {
        label: "Политика конфиденциальности",
        linkPath: "/privacy-policy"
      },
      {
        label: "Политика использования “Cookies”",
        linkPath: "/cookie-policy"
      }
    ],
    categoryType: "links"
  }
];

const coffeeMachines = [
  {
    productName: "De'Longhi Капельная кофеварка ICM16210.WS",
    productImageName: "coffee-machine.jpg",
    productPrice: "129 990 ₽",
    productDiscountAmount: "35 999 ₽",
    productBonus: "+200 бонусов",
    productPopular: true,
    productDiscount: true,
    productApp: true,
    productGift: true,
    productCollection: true
  },
  {
    productName: "De'Longhi Капельная кофеварка ICM16210.WS",
    productImageName: "coffee-machine.jpg",
    productPrice: "129 990 ₽",
    productDiscountAmount: "",
    productBonus: "+200 бонусов",
    productPopular: false,
    productDiscount: false,
    productApp: true,
    productGift: true,
    productCollection: false
  },
  {
    productName: "De'Longhi Капельная кофеварка ICM16210.WS",
    productImageName: "coffee-machine.jpg",
    productPrice: "129 990 ₽",
    productDiscountAmount: "35 999 ₽",
    productBonus: "+200 бонусов",
    productPopular: false,
    productDiscount: true,
    productApp: false,
    productGift: true,
    productCollection: true
  },
  {
    productName: "De'Longhi Капельная кофеварка",
    productImageName: "coffee-machine.jpg",
    productPrice: "129 990 ₽",
    productDiscountAmount: "35 999 ₽",
    productBonus: "+200 бонусов",
    productPopular: true,
    productDiscount: true,
    productApp: true,
    productGift: true,
    productCollection: false
  },
  {
    productName: "De'Longhi Капельная кофеварка",
    productImageName: "coffee-machine.jpg",
    productPrice: "129 990 ₽",
    productDiscountAmount: "35 999 ₽",
    productBonus: "+200 бонусов",
    productPopular: true,
    productDiscount: true,
    productApp: true,
    productGift: false,
    productCollection: false
  }
];

export { categoryArray, coffeeMachines };
