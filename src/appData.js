const menuArray = [
  {
    categoryLabel: "Наши товары",
    categoryList: [
      {
        label: "Автоматические кофемашины",
        linkPath: "/catalogue/automatic-coffee-machines"
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
        ]
      },
      {
        label: "Техника для дома",
        linkPath: "/catalogue/home-appliances",
        subcategories: [
          {
            label: "Капсульные кофемашины",
            linkPath: "/catalogue/home-appliances/capsule-coffee-machines",
            imageName: "capsule-coffee-machines.jpg"
          },
          {
            label: "Кофемолки",
            linkPath: "/catalogue/home-appliances/coffee-grinders",
            imageName: "coffee-grinders.jpg"
          },
          {
            label: "Кофеварки",
            linkPath: "/catalogue/home-appliances/coffee-makers",
            imageName: "coffee-makers.jpg"
          },
          {
            label: "Грили",
            linkPath: "/catalogue/home-appliances/grills",
            imageName: "grills.jpg"
          },
          {
            label: "Электрочайники и тостеры",
            linkPath:
              "/catalogue/home-appliances/electric-kettles-and-toasters",
            imageName: "electric-kettles-and-toasters.jpg"
          }
        ]
      },
      {
        label: "Аксессуары",
        linkPath: "/catalogue/accessories",
        subcategories: [
          {
            label: "Капсульные кофемашины",
            linkPath: "/catalogue/accessories/capsule-coffee-machines",
            imageName: "capsule-coffee-machines.jpg"
          },
          {
            label: "Кофемолки",
            linkPath: "/catalogue/accessories/coffee-grinders",
            imageName: "coffee-grinders.jpg"
          },
          {
            label: "Кофеварки",
            linkPath: "/catalogue/accessories/coffee-makers",
            imageName: "coffee-makers.jpg"
          },
          {
            label: "Грили",
            linkPath: "/catalogue/accessories/grills",
            imageName: "grills.jpg"
          },
          {
            label: "Электрочайники и тостеры",
            linkPath: "/catalogue/accessories/electric-kettles-and-toasters",
            imageName: "electric-kettles-and-toasters.jpg"
          }
        ]
      }
    ]
  },
  {
    categoryLabel: "Мир De’Longhi",
    categoryList: [
      {
        label: "Мир De’Longhi",
        linkPath: "/delonghi-world"
      }
    ]
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
    ]
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
    ]
  }
];

export { menuArray };
