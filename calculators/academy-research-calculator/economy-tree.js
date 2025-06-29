const economyResearchData = {
  bread_output: {
    name: "Bread Output",
    icon: "bread-output.png",
    levels: {
      0: {
        lvl: 1,
        requirements: {},
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
          gold: 0,
        },
        time: [0, 0, 0, 0],
        effects: []
      },
      1: {
        lvl: 1,
        requirements: {
          academy: 1
        },
        costs: {
          bread: 5400,
          wood: 5400,
          stone: 1000,
          iron: 270,
          gold: 320,
        },
        time: [0, 0, 0, 27],
        effects: [
          "+4.0% Bread Output",
          "1040 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 2,
          bread_output: 1
        },
        costs: {
          bread: 7500,
          wood: 7500,
          stone: 1500,
          iron: 370,
          gold: 440,
        },
        time: [0, 0, 0, 40],
        effects: [
          "+4.0% Bread Output",
          "1040 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 3,
          bread_output: 2
        },
        costs: {
          bread: 16000,
          wood: 16000,
          stone: 3200,
          iron: 810,
          gold: 960,
        },
        time: [0, 0, 1, 48],
        effects: [
          "+5.5% Bread Output",
          "1430 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 8,
          stone_gathering_i_: 1
        },
        costs: {
          bread: 54000,
          wood: 54000,
          stone: 10000,
          iron: 2700,
          gold: 640,
        },
        time: [0, 0, 5, 0],
        effects: [
          "+4.0% Bread Output",
          "1040 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 9,
          bread_output_iI_: 1
        },
        costs: {
          bread: 75000,
          wood: 75000,
          stone: 15000,
          iron: 3700,
          gold: 890,
        },
        time: [0, 0, 7, 30],
        effects: [
          "+4.0% Bread Output",
          "1040 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 10,
          bread_output_iI_: 2
        },
        costs: {
          bread: 160000,
          wood: 160000,
          stone: 32000,
          iron: 8100,
          gold: 1900,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+5.5% Bread Output",
          "1430 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 13,
          iron_mining_i_: 1
        },
        costs: {
          bread: 170000,
          wood: 170000,
          stone: 34000,
          iron: 8600,
          gold: 1900,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+5.5% Bread Output",
          "1430 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 14,
          bread_output_iII_: 1
        },
        costs: {
          bread: 240000,
          wood: 240000,
          stone: 48000,
          iron: 12000,
          gold: 2600,
        },
        time: [0, 1, 20, 0],
        effects: [
          "+5.5% Bread Output",
          "1820 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 15,
          bread_output_iII_: 2
        },
        costs: {
          bread: 510000,
          wood: 510000,
          stone: 100000,
          iron: 25000,
          gold: 5700,
        },
        time: [0, 1, 20, 0],
        effects: [
          "+7.0% Bread Output",
          "1820 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 18,
          iron_mining_iI_: 1
        },
        costs: {
          bread: 490000,
          wood: 490000,
          stone: 99000,
          iron: 24000,
          gold: 6400,
        },
        time: [0, 2, 13, 20],
        effects: [
          "+7.0% Bread Output",
          "1820 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          academy: 19,
          bread_output_iV_: 1
        },
        costs: {
          bread: 690000,
          wood: 690000,
          stone: 130000,
          iron: 34000,
          gold: 8900,
        },
        time: [0, 3, 20, 0],
        effects: [
          "+6.5% Bread Output",
          "1820 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          academy: 20,
          bread_output_iV_: 2
        },
        costs: {
          bread: 1400000,
          wood: 1400000,
          stone: 290000,
          iron: 74000,
          gold: 19000,
        },
        time: [0, 8, 53, 20],
        effects: [
          "+9.0% Bread Output",
          "2340 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 23,
          iron_mining_iII_: 1
        },
        costs: {
          bread: 880000,
          wood: 880000,
          stone: 170000,
          iron: 44000,
          gold: 25000,
        },
        time: [0, 13, 53, 20],
        effects: [
          "+8.0% Bread Output",
          "2080 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          academy: 24,
          bread_output_v_: 1,
        },
        costs: {
          bread: 1200000,
          wood: 1200000,
          stone: 240000,
          iron: 61000,
          gold: 35000,
        },
        time: [0, 20, 50, 0],
        effects: [
          "+8.0% Bread Output",
          "2080 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          academy: 25,
          bread_output_v_: 2
        },
        costs: {
          bread: 2600000,
          wood: 2600000,
          stone: 530000,
          iron: 130000,
          gold: 76000,
        },
        time: [2, 7, 33, 20],
        effects: [
          "+10.0% Bread Output",
          "2600 Power"
        ]
      },
      16: {
        lvl: 6,
        requirements: {
          academy: 28,
          iron_mining_iV_: 1
        },
        costs: {
          bread: 3100000,
          wood: 3100000,
          stone: 620000,
          iron: 150000,
          gold: 51000,
        },
        time: [2, 18, 40, 0],
        effects: [
          "+8.0% Bread Output",
          "2080 Power"
        ]
      },
      17: {
        lvl: 6,
        requirements: {
          bread_output_vI_: 1
        },
        costs: {
          bread: 4300000,
          wood: 4300000,
          stone: 870000,
          iron: 210000,
          gold: 71000,
        },
        time: [4, 4, 0, 0],
        effects: [
          "+8.0% Bread Output",
          "2080 Power"
        ]
      },
      18: {
        lvl: 6,
        requirements: {
          bread_output_vI_: 2
        },
        costs: {
          bread: 9300000,
          wood: 9300000,
          stone: 1800000,
          iron: 460000,
          gold: 150000,
        },
        time: [11, 2, 40, 0],
        effects: [
          "+10.0% Bread Output",
          "2600 Power"
        ]
      },
    }
  },

  wood_output: {
    name: "Wood Output",
    icon: "wood-output.png",
    levels: {
      0: {
        lvl: 1,
        requirements: {},
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
          gold: 0,
        },
        time: [0, 0, 0, 0],
        effects: []
      },
      1: {
        lvl: 1,
        requirements: {
          academy: 3,
          bread_output_i_: 1
        },
        costs: {
          bread: 5400,
          wood: 5400,
          stone: 1000,
          iron: 270,
          gold: 320,
        },
        time: [0, 0, 0, 27],
        effects: [
          "+4.0% Wood Output",
          "1040 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 4,
          wood_output_i_: 1
        },
        costs: {
          bread: 7500,
          wood: 7500,
          stone: 1500,
          iron: 370,
          gold: 440,
        },
        time: [0, 0, 0, 40],
        effects: [
          "+4.0% Wood Output",
          "1040 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 5,
          wood_output_i_: 2
        },
        costs: {
          bread: 16000,
          wood: 16000,
          stone: 3200,
          iron: 810,
          gold: 960,
        },
        time: [0, 0, 1, 48],
        effects: [
          "+5.5% Wood Output",
          "1430 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 8,
          stone_gathering_i_: 1
        },
        costs: {
          bread: 54000,
          wood: 54000,
          stone: 10000,
          iron: 2700,
          gold: 640,
        },
        time: [0, 0, 5, 0],
        effects: [
          "+4.0% Wood Output",
          "1040 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 9,
          wood_output_iI_: 1
        },
        costs: {
          bread: 75000,
          wood: 75000,
          stone: 15000,
          iron: 3700,
          gold: 890,
        },
        time: [0, 0, 7, 30],
        effects: [
          "+4.0% Wood Output",
          "1040 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 10,
          wood_output_iI_: 2
        },
        costs: {
          bread: 160000,
          wood: 160000,
          stone: 32000,
          iron: 8100,
          gold: 1900,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+5.5% Wood Output",
          "1430 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 13,
          iron_mining_i_: 1
        },
        costs: {
          bread: 170000,
          wood: 170000,
          stone: 34000,
          iron: 8600,
          gold: 1900,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+5.5% Wood Output",
          "1430 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 14,
          wood_output_iII_: 1
        },
        costs: {
          bread: 240000,
          wood: 240000,
          stone: 48000,
          iron: 12000,
          gold: 2600,
        },
        time: [0, 0, 30, 0],
        effects: [
          "+5.5% Wood Output",
          "1430 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 15,
          wood_output_iII_: 2
        },
        costs: {
          bread: 510000,
          wood: 510000,
          stone: 100000,
          iron: 25000,
          gold: 5700,
        },
        time: [0, 1, 20, 0],
        effects: [
          "+7.0% Wood Output",
          "1820 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 18,
          iron_mining_iI_: 1
        },
        costs: {
          bread: 490000,
          wood: 490000,
          stone: 99000,
          iron: 24000,
          gold: 6400,
        },
        time: [0, 2, 13, 20],
        effects: [
          "+7.0% Wood Output",
          "1820 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          academy: 19,
          wood_output_iV_: 1
        },
        costs: {
          bread: 690000,
          wood: 690000,
          stone: 130000,
          iron: 34000,
          gold: 8900,
        },
        time: [0, 3, 20, 0],
        effects: [
          "+6.5% Wood Output",
          "1690 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          academy: 20,
          wood_output_iV_: 2
        },
        costs: {
          bread: 1400000,
          wood: 1400000,
          stone: 290000,
          iron: 74000,
          gold: 19000,
        },
        time: [0, 8, 53, 20],
        effects: [
          "+9.0% Wood Output",
          "2340 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 23,
          iron_mining_iII_: 1
        },
        costs: {
          bread: 880000,
          wood: 880000,
          stone: 170000,
          iron: 44000,
          gold: 25000,
        },
        time: [0, 13, 53, 20],
        effects: [
          "+8.0% Wood Output",
          "2080 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          academy: 24,
          wood_output_v_: 1,
        },
        costs: {
          bread: 1200000,
          wood: 1200000,
          stone: 240000,
          iron: 61000,
          gold: 35000,
        },
        time: [0, 20, 50, 0],
        effects: [
          "+8.0% Wood Output",
          "2080 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          academy: 25,
          wood_output_v_: 2
        },
        costs: {
          bread: 2600000,
          wood: 2600000,
          stone: 530000,
          iron: 130000,
          gold: 76000,
        },
        time: [2, 7, 33, 20],
        effects: [
          "+10.0% Wood Output",
          "2600 Power"
        ]
      },
      16: {
        lvl: 6,
        requirements: {
          academy: 28,
          iron_mining_iV_: 1
        },
        costs: {
          bread: 3100000,
          wood: 3100000,
          stone: 620000,
          iron: 150000,
          gold: 51000,
        },
        time: [2, 18, 40, 0],
        effects: [
          "+8.0% Wood Output",
          "2080 Power"
        ]
      },
      17: {
        lvl: 6,
        requirements: {
          wood_output_vI_: 1
        },
        costs: {
          bread: 4300000,
          wood: 4300000,
          stone: 870000,
          iron: 210000,
          gold: 71000,
        },
        time: [4, 4, 0, 0],
        effects: [
          "+8.0% Wood Output",
          "2080 Power"
        ]
      },
      18: {
        lvl: 6,
        requirements: {
          wood_output_vI_: 2
        },
        costs: {
          bread: 9300000,
          wood: 9300000,
          stone: 1800000,
          iron: 460000,
          gold: 150000,
        },
        time: [11, 2, 40, 0],
        effects: [
          "+10.0% Wood Output",
          "2600 Power"
        ]
      },
    }
  },

  food_foraging: {
    name: "Food Foraging",
    icon: "food-foraging.png",
    levels: {
      0: {
        lvl: 1,
        requirements: {},
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
          gold: 0,
        },
        time: [0, 0, 0, 0],
        effects: []
      },
      1: {
        lvl: 1,
        requirements: {
          academy: 5,
          wood_output_i_: 1
        },
        costs: {
          bread: 4000,
          wood: 4000,
          stone: 810,
          iron: 200,
          gold: 240,
        },
        time: [0, 0, 0, 27],
        effects: [
          "+8.0% Bread Gathering Speed",
          "1000 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 6,
          food_foraging_i_: 1
        },
        costs: {
          bread: 5600,
          wood: 5600,
          stone: 1100,
          iron: 280,
          gold: 330,
        },
        time: [0, 0, 0, 40],
        effects: [
          "+8.0% Bread Gathering Speed",
          "1000 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 7,
          food_foraging_i_: 2
        },
        costs: {
          bread: 12000,
          wood: 12000,
          stone: 2400,
          iron: 600,
          gold: 720,
        },
        time: [0, 0, 1, 48],
        effects: [
          "+11.0% Bread Gathering Speed",
          "1375 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 11,
          iron_output_i_: 1
        },
        costs: {
          bread: 40000,
          wood: 40000,
          stone: 8100,
          iron: 2000,
          gold: 480,
        },
        time: [0, 0, 5, 0],
        effects: [
          "+8.0% Bread Gathering Speed",
          "1000 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 12,
          food_foraging_iI_: 1
        },
        costs: {
          bread: 56000,
          wood: 56000,
          stone: 11000,
          iron: 2800,
          gold: 670,
        },
        time: [0, 0, 7, 30],
        effects: [
          "+8.0% Bread Gathering Speed",
          "1000 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 13,
          food_foraging_iI_: 2
        },
        costs: {
          bread: 120000,
          wood: 120000,
          stone: 24000,
          iron: 6000,
          gold: 1400,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+11.0% Bread Gathering Speed",
          "1375 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 16,
          iron_output_iI_: 1
        },
        costs: {
          bread: 120000,
          wood: 120000,
          stone: 25000,
          iron: 6400,
          gold: 1400,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+11.0% Bread Gathering Speed",
          "1375 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 17,
          food_foraging_iII_: 1
        },
        costs: {
          bread: 180000,
          wood: 180000,
          stone: 36000,
          iron: 9000,
          gold: 2000,
        },
        time: [0, 0, 30, 0],
        effects: [
          "+11.0% Bread Gathering Speed",
          "1375 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 18,
          food_foraging_iII_: 2
        },
        costs: {
          bread: 380000,
          wood: 380000,
          stone: 77000,
          iron: 19000,
          gold: 4300,
        },
        time: [0, 1, 20, 0],
        effects: [
          "+14.5% Bread Gathering Speed",
          "1812 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 21,
          iron_output_iII_: 1
        },
        costs: {
          bread: 370000,
          wood: 370000,
          stone: 74000,
          iron: 18000,
          gold: 4800,
        },
        time: [0, 2, 13, 20],
        effects: [
          "+13.5% Bread Gathering Speed",
          "1687 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          academy: 22,
          food_foraging_iV_: 1
        },
        costs: {
          bread: 520000,
          wood: 520000,
          stone: 100000,
          iron: 26000,
          gold: 6700,
        },
        time: [0, 3, 20, 0],
        effects: [
          "+13.5% Bread Gathering Speed",
          "1688 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          academy: 23,
          food_foraging_iV_: 2
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 220000,
          iron: 55000,
          gold: 14000,
        },
        time: [0, 8, 53, 20],
        effects: [
          "+18.0% Bread Gathering Speed",
          "2250 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 26,
          iron_output_iV_: 1
        },
        costs: {
          bread: 660000,
          wood: 660000,
          stone: 130000,
          iron: 33000,
          gold: 19000,
        },
        time: [0, 13, 53, 20],
        effects: [
          "+16.0% Bread Gathering Speed",
          "2000 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          food_foraging_v_: 1,
        },
        costs: {
          bread: 920000,
          wood: 920000,
          stone: 180000,
          iron: 46000,
          gold: 26000,
        },
        time: [0, 20, 50, 0],
        effects: [
          "+16.0% Bread Gathering Speed",
          "2000 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          food_foraging_v_: 2
        },
        costs: {
          bread: 1900000,
          wood: 1900000,
          stone: 390000,
          iron: 99000,
          gold: 57000,
        },
        time: [2, 7, 33, 20],
        effects: [
          "+21.5% Bread Gathering Speed",
          "2687 Power"
        ]
      },
      16: {
        lvl: 6,
        requirements: {
          academy: 30,
          iron_output_v_: 1
        },
        costs: {
          bread: 2300000,
          wood: 2300000,
          stone: 460000,
          iron: 110000,
          gold: 38000,
        },
        time: [2, 18, 40, 0],
        effects: [
          "+16.0% Bread Gathering Speed",
          "2000 Power"
        ]
      },
      17: {
        lvl: 6,
        requirements: {
          food_foraging_vI_: 1
        },
        costs: {
          bread: 3200000,
          wood: 3200000,
          stone: 650000,
          iron: 160000,
          gold: 53000,
        },
        time: [4, 4, 0, 0],
        effects: [
          "+16.0% Bread Gathering Speed",
          "2000 Power"
        ]
      },
      18: {
        lvl: 6,
        requirements: {
          food_foraging_vI_: 2
        },
        costs: {
          bread: 6900000,
          wood: 6900000,
          stone: 1300000,
          iron: 340000,
          gold: 110000,
        },
        time: [11, 2, 40, 0],
        effects: [
          "+21.5% Bread Gathering Speed",
          "2687 Power"
        ]
      },
    }
  },

  wood_gatheriong: {
    name: "Wood Gathering",
    icon: "wood-gathering.png",
    levels: {
      0: {
        lvl: 1,
        requirements: {},
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
          gold: 0,
        },
        time: [0, 0, 0, 0],
        effects: []
      },
      1: {
        lvl: 1,
        requirements: {
          academy: 5,
          wood_output_i_: 1
        },
        costs: {
          bread: 4000,
          wood: 4000,
          stone: 810,
          iron: 200,
          gold: 240,
        },
        time: [0, 0, 0, 27],
        effects: [
          "+8.0% Wood Gathering Speed",
          "1000 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 6,
          wood_gathering_i_: 1
        },
        costs: {
          bread: 5600,
          wood: 5600,
          stone: 1100,
          iron: 280,
          gold: 330,
        },
        time: [0, 0, 0, 40],
        effects: [
          "+8.0% Wood Gathering Speed",
          "1000 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 7,
          wood_gathering_i_: 2
        },
        costs: {
          bread: 12000,
          wood: 12000,
          stone: 2400,
          iron: 600,
          gold: 720,
        },
        time: [0, 0, 1, 48],
        effects: [
          "+11.0% Wood Gathering Speed",
          "1375 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 11,
          iron_output_i_: 1
        },
        costs: {
          bread: 40000,
          wood: 40000,
          stone: 8100,
          iron: 2000,
          gold: 480,
        },
        time: [0, 0, 5, 0],
        effects: [
          "+8.0% Wood Gathering Speed",
          "1000 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 12,
          wood_gathering_iI_: 1
        },
        costs: {
          bread: 56000,
          wood: 56000,
          stone: 11000,
          iron: 2800,
          gold: 670,
        },
        time: [0, 0, 7, 30],
        effects: [
          "+8.0% Wood Gathering Speed",
          "1000 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 13,
          wood_gathering_iI_: 2
        },
        costs: {
          bread: 120000,
          wood: 120000,
          stone: 24000,
          iron: 6000,
          gold: 1400,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+11.0% Wood Gathering Speed",
          "1375 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 16,
          iron_output_iI_: 1
        },
        costs: {
          bread: 120000,
          wood: 120000,
          stone: 25000,
          iron: 6400,
          gold: 1400,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+11.0% Wood Gathering Speed",
          "1375 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 17,
          wood_gathering_iII_: 1
        },
        costs: {
          bread: 180000,
          wood: 180000,
          stone: 36000,
          iron: 9000,
          gold: 2000,
        },
        time: [0, 0, 30, 0],
        effects: [
          "+11.0% Wood Gathering Speed",
          "1375 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 18,
          wood_gathering_iII_: 2
        },
        costs: {
          bread: 380000,
          wood: 380000,
          stone: 77000,
          iron: 19000,
          gold: 4300,
        },
        time: [0, 1, 20, 0],
        effects: [
          "+14.5% Wood Gathering Speed",
          "1812 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 21,
          iron_output_iII_: 1
        },
        costs: {
          bread: 370000,
          wood: 370000,
          stone: 74000,
          iron: 18000,
          gold: 4800,
        },
        time: [0, 2, 13, 20],
        effects: [
          "+13.5% Wood Gathering Speed",
          "1687 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          academy: 22,
          wood_gathering_iV_: 1
        },
        costs: {
          bread: 520000,
          wood: 520000,
          stone: 100000,
          iron: 26000,
          gold: 6700,
        },
        time: [0, 3, 20, 0],
        effects: [
          "+13.5% Wood Gathering Speed",
          "1688 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          academy: 23,
          wood_gathering_iV_: 2
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 220000,
          iron: 55000,
          gold: 14000,
        },
        time: [0, 8, 53, 20],
        effects: [
          "+18.0% Wood Gathering Speed",
          "2250 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 26,
          iron_output_iV_: 1
        },
        costs: {
          bread: 660000,
          wood: 660000,
          stone: 130000,
          iron: 33000,
          gold: 19000,
        },
        time: [0, 13, 53, 20],
        effects: [
          "+16.0% Wood Gathering Speed",
          "2000 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          wood_gathering_v_: 1,
        },
        costs: {
          bread: 920000,
          wood: 920000,
          stone: 180000,
          iron: 46000,
          gold: 26000,
        },
        time: [0, 20, 50, 0],
        effects: [
          "+16.0% Wood Gathering Speed",
          "2000 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          wood_gathering_v_: 2
        },
        costs: {
          bread: 1900000,
          wood: 1900000,
          stone: 390000,
          iron: 99000,
          gold: 57000,
        },
        time: [2, 7, 33, 20],
        effects: [
          "+21.5% Wood Gathering Speed",
          "2687 Power"
        ]
      },
      16: {
        lvl: 6,
        requirements: {
          academy: 30,
          iron_output_v_: 1
        },
        costs: {
          bread: 2300000,
          wood: 2300000,
          stone: 460000,
          iron: 110000,
          gold: 38000,
        },
        time: [2, 18, 40, 0],
        effects: [
          "+16.0% Wood Gathering Speed",
          "2000 Power"
        ]
      },
      17: {
        lvl: 6,
        requirements: {
          wood_gathering_vI_: 1
        },
        costs: {
          bread: 3200000,
          wood: 3200000,
          stone: 650000,
          iron: 160000,
          gold: 53000,
        },
        time: [4, 4, 0, 0],
        effects: [
          "+16.0% Wood Gathering Speed",
          "2000 Power"
        ]
      },
      18: {
        lvl: 6,
        requirements: {
          wood_gathering_vI_: 2
        },
        costs: {
          bread: 6900000,
          wood: 6900000,
          stone: 1300000,
          iron: 340000,
          gold: 110000,
        },
        time: [11, 2, 40, 0],
        effects: [
          "+21.5% Wood Gathering Speed",
          "2687 Power"
        ]
      },
    }
  },

  stone_output: {
    name: "Stone Output",
    icon: "stone-output.png",
    levels: {
      0: {
        lvl: 1,
        requirements: {},
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
          gold: 0,
        },
        time: [0, 0, 0, 0],
        effects: []
      },
      1: {
        lvl: 1,
        requirements: {
          academy: 6,
          food_foraging_i_: 1,
          wood_gathering_i_: 1
        },
        costs: {
          bread: 13000,
          wood: 13000,
          stone: 2700,
          iron: 670,
          gold: 800,
        },
        time: [0, 0, 2, 15],
        effects: [
          "+8.0% Stone Output",
          "2080 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 7,
          stone_output_i_: 1
        },
        costs: {
          bread: 18000,
          wood: 18000,
          stone: 3700,
          iron: 940,
          gold: 1100,
        },
        time: [0, 0, 3, 22],
        effects: [
          "+8.0% Stone Output",
          "2080 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 8,
          stone_output_i_: 2
        },
        costs: {
          bread: 40000,
          wood: 40000,
          stone: 8100,
          iron: 2000,
          gold: 2400,
        },
        time: [0, 0, 9, 0],
        effects: [
          "+11.0% Stone Output",
          "2860 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 13,
          iron_mining_i_: 1
        },
        costs: {
          bread: 130000,
          wood: 130000,
          stone: 27000,
          iron: 6700,
          gold: 1600,
        },
        time: [0, 0, 25, 0],
        effects: [
          "+5.5% Stone Output",
          "1430 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 14,
          stone_output_iI_: 1
        },
        costs: {
          bread: 180000,
          wood: 180000,
          stone: 37000,
          iron: 9400,
          gold: 2200,
        },
        time: [0, 0, 37, 30],
        effects: [
          "+5.5% Stone Output",
          "1430 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 15,
          stone_output_iI_: 2
        },
        costs: {
          bread: 400000,
          wood: 400000,
          stone: 81000,
          iron: 20000,
          gold: 4800,
        },
        time: [0, 1, 40, 0],
        effects: [
          "+7.0% Stone Output",
          "1820 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 18,
          iron_mining_iI_: 1
        },
        costs: {
          bread: 430000,
          wood: 430000,
          stone: 86000,
          iron: 21000,
          gold: 4800,
        },
        time: [0, 1, 40, 0],
        effects: [
          "+7.0% Stone Output",
          "1820 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 19,
          stone_output_iII_: 1
        },
        costs: {
          bread: 600000,
          wood: 600000,
          stone: 120000,
          iron: 30000,
          gold: 6700,
        },
        time: [0, 2, 30, 0],
        effects: [
          "+6.5% Stone Output",
          "1690 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 20,
          stone_output_iII_: 2
        },
        costs: {
          bread: 1200000,
          wood: 1200000,
          stone: 250000,
          iron: 64000,
          gold: 14000,
        },
        time: [0, 6, 40, 0],
        effects: [
          "+9.0% Stone Output",
          "2340 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 23,
          iron_mining_iII_: 1
        },
        costs: {
          bread: 1200000,
          wood: 1200000,
          stone: 240000,
          iron: 62000,
          gold: 16000,
        },
        time: [0, 11, 6, 40],
        effects: [
          "+8.0% Stone Output",
          "2080 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          academy: 24,
          stone_output_iV_: 1
        },
        costs: {
          bread: 1700000,
          wood: 1700000,
          stone: 340000,
          iron: 86000,
          gold: 22000,
        },
        time: [0, 16, 40, 0],
        effects: [
          "+8.0% Stone Output",
          "2080 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          academy: 25,
          stone_output_iV_: 2
        },
        costs: {
          bread: 3700000,
          wood: 3700000,
          stone: 740000,
          iron: 180000,
          gold: 48000,
        },
        time: [1, 20, 26, 40],
        effects: [
          "+10.0% Stone Output",
          "2600 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 28,
          iron_mining_iV_: 1
        },
        costs: {
          bread: 2200000,
          wood: 2200000,
          stone: 440000,
          iron: 110000,
          gold: 64000,
        },
        time: [2, 21, 26, 40],
        effects: [
          "+8.0% Stone Output",
          "2080 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          stone_output_v_: 1,
        },
        costs: {
          bread: 3000000,
          wood: 3000000,
          stone: 610000,
          iron: 150000,
          gold: 89000,
        },
        time: [4, 8, 10, 0],
        effects: [
          "+8.0% Stone Output",
          "2080 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          stone_output_v_: 2
        },
        costs: {
          bread: 6600000,
          wood: 6600000,
          stone: 1300000,
          iron: 330000,
          gold: 190000,
        },
        time: [11, 13, 46, 40],
        effects: [
          "+10.0% Stone Output",
          "2600 Power"
        ]
      },
    }
  },

  stone_gathering: {
    name: "Stone Gathering",
    icon: "stone-gathering.png",
    levels: {
      0: {
        lvl: 1,
        requirements: {},
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
          gold: 0,
        },
        time: [0, 0, 0, 0],
        effects: []
      },
      1: {
        lvl: 1,
        requirements: {
          academy: 7,
          stone_output_i_: 1
        },
        costs: {
          bread: 10000,
          wood: 10000,
          stone: 2000,
          iron: 500,
          gold: 600,
        },
        time: [0, 0, 1, 34],
        effects: [
          "+16.0% Stone Gathering Speed",
          "2000 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 8,
          stone_gathering_i_: 1
        },
        costs: {
          bread: 14000,
          wood: 14000,
          stone: 2800,
          iron: 700,
          gold: 840,
        },
        time: [0, 0, 2, 21],
        effects: [
          "+16.0% Stone Gathering Speed",
          "2000 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 9,
          stone_gathering_i_: 2
        },
        costs: {
          bread: 30000,
          wood: 30000,
          stone: 6000,
          iron: 1500,
          gold: 1800,
        },
        time: [0, 0, 6, 18],
        effects: [
          "+21.5% Stone Gathering Speed",
          "2687 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 16,
          iron_output_iI_: 1
        },
        costs: {
          bread: 100000,
          wood: 100000,
          stone: 20000,
          iron: 5000,
          gold: 1200,
        },
        time: [0, 0, 17, 30],
        effects: [
          "+11.0% Stone Gathering Speed",
          "1375 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 17,
          stone_gathering_iI_: 1
        },
        costs: {
          bread: 140000,
          wood: 140000,
          stone: 28000,
          iron: 7000,
          gold: 1600,
        },
        time: [0, 0, 26, 15],
        effects: [
          "+11.0% Stone Gathering Speed",
          "1375 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 18,
          stone_gathering_iI_: 2
        },
        costs: {
          bread: 300000,
          wood: 300000,
          stone: 60000,
          iron: 15000,
          gold: 3600,
        },
        time: [0, 1, 10, 0],
        effects: [
          "+14.5% Stone Gathering Speed",
          "1812 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 21,
          iron_output_iII_: 1
        },
        costs: {
          bread: 320000,
          wood: 320000,
          stone: 64000,
          iron: 16000,
          gold: 3600,
        },
        time: [0, 1, 10, 0],
        effects: [
          "+13.5% Stone Gathering Speed",
          "1687 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 22,
          stone_gathering_iII_: 1
        },
        costs: {
          bread: 450000,
          wood: 450000,
          stone: 90000,
          iron: 22000,
          gold: 5000,
        },
        time: [0, 1, 45, 0],
        effects: [
          "+13.5% Stone Gathering Speed",
          "1688 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 23,
          stone_gathering_iII_: 2
        },
        costs: {
          bread: 970000,
          wood: 970000,
          stone: 90000,
          iron: 22000,
          gold: 10000,
        },
        time: [0, 4, 40, 40],
        effects: [
          "+18.0% Stone Gathering Speed",
          "2250 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 26,
          iron_output_iV_: 1
        },
        costs: {
          bread: 930000,
          wood: 930000,
          stone: 180000,
          iron: 46000,
          gold: 12000,
        },
        time: [0, 7, 46, 40],
        effects: [
          "+16.0% Stone Gathering Speed",
          "2000 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          stone_gathering_iV_: 1
        },
        costs: {
          bread: 1300000,
          wood: 1300000,
          stone: 260000,
          iron: 65000,
          gold: 16000,
        },
        time: [0, 11, 40, 0],
        effects: [
          "+16.0% Stone Gathering Speed",
          "2000 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          stone_gathering_iV_: 2
        },
        costs: {
          bread: 2700000,
          wood: 2700000,
          stone: 550000,
          iron: 130000,
          gold: 36000,
        },
        time: [1, 7, 6, 40],
        effects: [
          "+21.5% Stone Gathering Speed",
          "2687 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 30,
          iron_output_v_: 1
        },
        costs: {
          bread: 1600000,
          wood: 1600000,
          stone: 330000,
          iron: 83000,
          gold: 48000,
        },
        time: [2, 0, 36, 40],
        effects: [
          "+16.0% Stone Gathering Speed",
          "2000 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          stone_gathering_v_: 1,
        },
        costs: {
          bread: 2300000,
          wood: 2300000,
          stone: 460000,
          iron: 110000,
          gold: 67000,
        },
        time: [3, 0, 55, 0],
        effects: [
          "+16.0% Stone Gathering Speed",
          "2000 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          stone_gathering_v_: 2
        },
        costs: {
          bread: 4900000,
          wood: 4900000,
          stone: 990000,
          iron: 240000,
          gold: 140000,
        },
        time: [8, 2, 26, 40],
        effects: [
          "+21.5% Stone Gathering Speed",
          "2687 Power"
        ]
      },
    }
  },

  iron_output: {
    name: "Iron Output",
    icon: "iron-output.png",
    levels: {
      0: {
        lvl: 1,
        requirements: {},
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
          gold: 0,
        },
        time: [0, 0, 0, 0],
        effects: []
      },
      1: {
        lvl: 1,
        requirements: {
          academy: 10,
          bread_output_iI_: 1,
          wood_output_iI_: 1
        },
        costs: {
          bread: 13000,
          wood: 13000,
          stone: 2700,
          iron: 670,
          gold: 800,
        },
        time: [0, 0, 2, 15],
        effects: [
          "+8.0% Iron Output",
          "2080 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 11,
          iron_output_i_: 1
        },
        costs: {
          bread: 18000,
          wood: 18000,
          stone: 3700,
          iron: 940,
          gold: 1100,
        },
        time: [0, 0, 3, 22],
        effects: [
          "+8.0% Iron Output",
          "2080 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 12,
          iron_output_i_: 2
        },
        costs: {
          bread: 40000,
          wood: 40000,
          stone: 8100,
          iron: 2000,
          gold: 2400,
        },
        time: [0, 0, 9, 0],
        effects: [
          "+11.0% Iron Output",
          "2860 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 15,
          bread_output_iII_: 1,
          stone_output_iI_: 1,
          wood_output_iII_: 1
        },
        costs: {
          bread: 130000,
          wood: 130000,
          stone: 27000,
          iron: 6700,
          gold: 1600,
        },
        time: [0, 0, 25, 0],
        effects: [
          "+5.5% Iron Output",
          "1430 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 16,
          iron_output_iI_: 1
        },
        costs: {
          bread: 180000,
          wood: 180000,
          stone: 37000,
          iron: 9400,
          gold: 2200,
        },
        time: [0, 0, 37, 30],
        effects: [
          "+5.5% Iron Output",
          "1430 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 17,
          iron_output_iI_: 2
        },
        costs: {
          bread: 400000,
          wood: 400000,
          stone: 81000,
          iron: 20000,
          gold: 4800,
        },
        time: [0, 1, 40, 0],
        effects: [
          "+7.0% Iron Output",
          "1820 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 20,
          bread_output_iV_: 1,
          stone_output_iII_: 1,
          wood_output_iV_: 1
        },
        costs: {
          bread: 430000,
          wood: 430000,
          stone: 86000,
          iron: 21000,
          gold: 4800,
        },
        time: [0, 1, 40, 0],
        effects: [
          "+7.0% Iron Output",
          "1820 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 21,
          iron_output_iII_: 1
        },
        costs: {
          bread: 600000,
          wood: 600000,
          stone: 120000,
          iron: 30000,
          gold: 6700,
        },
        time: [0, 2, 30, 0],
        effects: [
          "+6.5% Iron Output",
          "1690 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 22,
          iron_output_iII_: 2
        },
        costs: {
          bread: 1200000,
          wood: 1200000,
          stone: 250000,
          iron: 64000,
          gold: 14000,
        },
        time: [0, 6, 40, 0],
        effects: [
          "+9.0% Iron Output",
          "2340 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 25,
          bread_output_v_: 2,
          stone_output_iV_: 1,
          wood_output_v_: 2
        },
        costs: {
          bread: 1200000,
          wood: 1200000,
          stone: 240000,
          iron: 62000,
          gold: 16000,
        },
        time: [0, 11, 6, 40],
        effects: [
          "+7.0% Iron Output",
          "1820 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          iron_output_iV_: 1
        },
        costs: {
          bread: 1700000,
          wood: 1700000,
          stone: 340000,
          iron: 86000,
          gold: 22000,
        },
        time: [0, 16, 40, 0],
        effects: [
          "+6.5% Iron Output",
          "1690 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          iron_output_iV_: 2
        },
        costs: {
          bread: 3700000,
          wood: 3700000,
          stone: 740000,
          iron: 180000,
          gold: 48000,
        },
        time: [1, 20, 26, 40],
        effects: [
          "+9.0% Iron Output",
          "2340 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 30,
          bread_output_vI_: 1,
          stone_output_v_: 1,
          wood_output_vI_: 1
        },
        costs: {
          bread: 2200000,
          wood: 2200000,
          stone: 440000,
          iron: 110000,
          gold: 64000,
        },
        time: [2, 21, 26, 40],
        effects: [
          "+8.0% Iron Output",
          "2080 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          iron_output_v_: 1,
        },
        costs: {
          bread: 3000000,
          wood: 3000000,
          stone: 610000,
          iron: 150000,
          gold: 89000,
        },
        time: [4, 8, 10, 0],
        effects: [
          "+8.0% Iron Output",
          "2080 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          iron_output_v_: 2
        },
        costs: {
          bread: 6600000,
          wood: 6600000,
          stone: 1300000,
          iron: 330000,
          gold: 190000,
        },
        time: [11, 13, 46, 40],
        effects: [
          "+10.0% Iron Output",
          "2600 Power"
        ]
      },
    }
  },

  iron_mining: {
    name: "Iron Mining",
    icon: "iron-mining.png",
    levels: {
      0: {
        lvl: 1,
        requirements: {},
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
          gold: 0,
        },
        time: [0, 0, 0, 0],
        effects: []
      },
      1: {
        lvl: 1,
        requirements: {
          academy: 12,
          food_foraging_iI_: 1,
          wood_gathering_iI_: 1
        },
        costs: {
          bread: 10000,
          wood: 10000,
          stone: 2000,
          iron: 500,
          gold: 600,
        },
        time: [0, 0, 1, 34],
        effects: [
          "+16.0% Iron Mining Speed",
          "2000 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 13,
          iron_mining_i_: 1
        },
        costs: {
          bread: 14000,
          wood: 14000,
          stone: 2800,
          iron: 700,
          gold: 840,
        },
        time: [0, 0, 2, 21],
        effects: [
          "+16.0% Iron Mining Speed",
          "2000 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 14,
          iron_mining_i_: 2
        },
        costs: {
          bread: 30000,
          wood: 30000,
          stone: 6000,
          iron: 1500,
          gold: 1800,
        },
        time: [0, 0, 6, 18],
        effects: [
          "+21.5% Iron Mining Speed",
          "2687 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 17,
          food_foraging_iII_: 1,
          stone_gathering_iI_: 1,
          wood_gathering_iII_: 1
        },
        costs: {
          bread: 100000,
          wood: 100000,
          stone: 20000,
          iron: 5000,
          gold: 1200,
        },
        time: [0, 0, 17, 30],
        effects: [
          "+11.0% Iron Mining Speed",
          "1375 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 18,
          iron_mining_iI_: 1
        },
        costs: {
          bread: 140000,
          wood: 140000,
          stone: 28000,
          iron: 7000,
          gold: 1600,
        },
        time: [0, 0, 26, 15],
        effects: [
          "+11.0% Iron Mining Speed",
          "1375 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 19,
          iron_mining_iI_: 2
        },
        costs: {
          bread: 300000,
          wood: 300000,
          stone: 60000,
          iron: 15000,
          gold: 3600,
        },
        time: [0, 1, 10, 0],
        effects: [
          "+14.5% Iron Mining Speed",
          "1812 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 22,
          food_foraging_iV_: 1,
          stone_gathering_iII_: 1,
          wood_gathering_iV_: 1
        },
        costs: {
          bread: 320000,
          wood: 320000,
          stone: 64000,
          iron: 16000,
          gold: 3600,
        },
        time: [0, 1, 10, 0],
        effects: [
          "+13.5% Iron Mining Speed",
          "1687 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 23,
          iron_mining_iII_: 1
        },
        costs: {
          bread: 450000,
          wood: 450000,
          stone: 90000,
          iron: 22000,
          gold: 5000,
        },
        time: [0, 1, 45, 0],
        effects: [
          "+13.5% Iron Mining Speed",
          "1688 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 24,
          iron_mining_iII_: 2
        },
        costs: {
          bread: 970000,
          wood: 970000,
          stone: 190000,
          iron: 48000,
          gold: 10000,
        },
        time: [0, 4, 40, 0],
        effects: [
          "+18.0% Iron Mining Speed",
          "2250 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 27,
          food_foraging_v_: 1,
          stone_gathering_iV_: 1,
          wood_gathering_v_: 1
        },
        costs: {
          bread: 930000,
          wood: 930000,
          stone: 180000,
          iron: 46000,
          gold: 12000,
        },
        time: [0, 7, 46, 40],
        effects: [
          "+16.0% Iron Mining Speed",
          "2000 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          iron_mining_iV_: 1
        },
        costs: {
          bread: 1300000,
          wood: 1300000,
          stone: 260000,
          iron: 65000,
          gold: 16000,
        },
        time: [0, 11, 40, 0],
        effects: [
          "+16.0% Iron Mining Speed",
          "2000 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          iron_mining_iV_: 2
        },
        costs: {
          bread: 2700000,
          wood: 2700000,
          stone: 550000,
          iron: 130000,
          gold: 36000,
        },
        time: [1, 7, 6, 40],
        effects: [
          "+21.5% Iron Mining Speed",
          "2687 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 30,
          food_foraging_vI_: 1,
          stone_gathering_v_: 1,
          wood_gathering_vI_: 1
        },
        costs: {
          bread: 1600000,
          wood: 1600000,
          stone: 330000,
          iron: 83000,
          gold: 48000,
        },
        time: [2, 0, 36, 40],
        effects: [
          "+16.0% Iron Mining Speed",
          "2000 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          iron_mining_v_: 1,
        },
        costs: {
          bread: 2300000,
          wood: 2300000,
          stone: 460000,
          iron: 110000,
          gold: 67000,
        },
        time: [3, 0, 55, 0],
        effects: [
          "+16.0% Iron Mining Speed",
          "2000 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          iron_mining_v_: 2
        },
        costs: {
          bread: 4900000,
          wood: 4900000,
          stone: 990000,
          iron: 240000,
          gold: 140000,
        },
        time: [8, 2, 26, 40],
        effects: [
          "+21.5% Iron Mining Speed",
          "2687 Power"
        ]
      },
    }
  },
}