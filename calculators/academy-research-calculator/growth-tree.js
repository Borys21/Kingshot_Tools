const growthResearchData = {
  tooling_up: {
    name: "Tooling Up",
    icon: "tooling-up.png",
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
          bread: 2700,
          wood: 2700,
          stone: 540,
          iron: 130,
          gold: 160,
        },
        time: [0, 0, 0, 2],
        effects: [
          "+0.4% Construction Speed",
          "2000 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 2,
          tooling_up_i_: 1
        },
        costs: {
          bread: 3700,
          wood: 3700,
          stone: 750,
          iron: 180,
          gold: 220,
        },
        time: [0, 0, 0, 40],
        effects: [
          "+0.4% Construction Speed",
          "2000 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 3,
          tooling_up_i_: 2
        },
        costs: {
          bread: 8100,
          wood: 8100,
          stone: 1600,
          iron: 400,
          gold: 480,
        },
        time: [0, 0, 1, 48],
        effects: [
          "+0.5% Construction Speed",
          "2500 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 2,
          command_tactics_i_: 1
        },
        costs: {
          bread: 27000,
          wood: 27000,
          stone: 5400,
          iron: 1300,
          gold: 320,
        },
        time: [0, 0, 5, 0],
        effects: [
          "+0.6% Construction Speed",
          "3000 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 3,
          tooling_up_iI_: 1
        },
        costs: {
          bread: 37000,
          wood: 37000,
          stone: 7500,
          iron: 1800,
          gold: 440,
        },
        time: [0, 0, 7, 30],
        effects: [
          "+0.6% Construction Speed",
          "3000 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 4,
          tooling_up_iI_: 2
        },
        costs: {
          bread: 81000,
          wood: 81000,
          stone: 16000,
          iron: 4000,
          gold: 960,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+1.0% Construction Speed",
          "5000 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 9,
          bandaging_iI_: 1,
          trainer_tools_iI_: 1
        },
        costs: {
          bread: 86000,
          wood: 86000,
          stone: 17000,
          iron: 4300,
          gold: 960,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+1.0% Construction Speed",
          "5000 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 10,
          tooling_up_iII_: 1
        },
        costs: {
          bread: 120000,
          wood: 120000,
          stone: 24000,
          iron: 6000,
          gold: 1300,
        },
        time: [0, 0, 30, 0],
        effects: [
          "+1.0% Construction Speed",
          "5000 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 11,
          tooling_up_iII_: 2
        },
        costs: {
          bread: 250000,
          wood: 250000,
          stone: 51000,
          iron: 12000,
          gold: 2800,
        },
        time: [0, 1, 20, 0],
        effects: [
          "+1.0% Construction Speed",
          "5000 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 14,
          command_tactics_iI_: 1
        },
        costs: {
          bread: 240000,
          wood: 240000,
          stone: 49000,
          iron: 12000,
          gold: 3200,
        },
        time: [0, 2, 13, 20],
        effects: [
          "+1.2% Construction Speed",
          "6000 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          academy: 15,
          tooling_up_iV_: 1
        },
        costs: {
          bread: 340000,
          wood: 340000,
          stone: 69000,
          iron: 17000,
          gold: 4400,
        },
        time: [0, 3, 20, 0],
        effects: [
          "+1.2% Construction Speed",
          "6000 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          academy: 16,
          tooling_up_iV_: 2
        },
        costs: {
          bread: 740000,
          wood: 740000,
          stone: 140000,
          iron: 37000,
          gold: 9600,
        },
        time: [0, 8, 53, 20],
        effects: [
          "+1.5% Construction Speed",
          "7500 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 19,
          command_tactics_iII_: 1,
        },
        costs: {
          bread: 440000,
          wood: 440000,
          stone: 88000,
          iron: 22000,
          gold: 12000,
        },
        time: [0, 13, 53, 20],
        effects: [
          "+1.6% Construction Speed",
          "8000 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          academy: 20,
          tooling_up_v_: 1,
        },
        costs: {
          bread: 610000,
          wood: 610000,
          stone: 120000,
          iron: 30000,
          gold: 17000,
        },
        time: [0, 20, 50, 0],
        effects: [
          "+1.6% Construction Speed",
          "8000 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          academy: 21,
          tooling_up_v_: 2,
        },
        costs: {
          bread: 1300000,
          wood: 1300000,
          stone: 260000,
          iron: 66000,
          gold: 38000,
        },
        time: [2, 7, 33, 20],
        effects: [
          "+2.0% Construction Speed",
          "10000 Power"
        ]
      },
      16: {
        lvl: 6,
        requirements: {
          academy: 24,
          bandaging_v_: 1,
          trainer_tools_v_: 1
        },
        costs: {
          bread: 1500000,
          wood: 1500000,
          stone: 530000,
          iron: 77000,
          gold: 25000,
        },
        time: [2, 18, 40, 0],
        effects: [
          "+1.8% Construction Speed",
          "9000 Power"
        ]
      },
      17: {
        lvl: 6,
        requirements: {
          academy: 25,
          tooling_up_vI_: 1
        },
        costs: {
          bread: 2100000,
          wood: 2100000,
          stone: 430000,
          iron: 100000,
          gold: 35000,
        },
        time: [4, 4, 0, 0],
        effects: [
          "+1.8% Construction Speed",
          "9000 Power"
        ]
      },
      18: {
        lvl: 6,
        requirements: {
          tooling_up_vI_: 2
        },
        costs: {
          bread: 4600000,
          wood: 4600000,
          stone: 930000,
          iron: 230000,
          gold: 76000,
        },
        time: [11, 2, 40, 0],
        effects: [
          "+2.5% Construction Speed",
          "12500 Power"
        ]
      },
      19: {
        lvl: 7,
        requirements: {
          academy: 28,
          bandaging_vI_: 1,
          trainer_tools_vI_: 1
        },
        costs: {
          bread: 3100000,
          wood: 3100000,
          stone: 620000,
          iron: 150000,
          gold: 48000,
        },
        time: [9, 17, 20, 0],
        effects: [
          "+1.8% Construction Speed",
          "9000 Power"
        ]
      },
      20: {
        lvl: 7,
        requirements: {
          tooling_up_vII_: 1
        },
        costs: {
          bread: 4300000,
          wood: 4300000,
          stone: 870000,
          iron: 210000,
          gold: 67000,
        },
        time: [14, 14, 0, 0],
        effects: [
          "+1.8% Construction Speed",
          "9000 Power"
        ]
      },
      21: {
        lvl: 7,
        requirements: {
          tooling_up_vII_: 2
        },
        costs: {
          bread: 9300000,
          wood: 9300000,
          stone: 1800000,
          iron: 460000,
          gold: 140000,
        },
        time: [38, 21, 20, 0],
        effects: [
          "+2.5% Construction Speed",
          "12500 Power"
        ]
      },
    }
  },

  ward_expansion: {
    name: "Ward Expansion",
    icon: "ward-expansion.png",
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
          academy: 1,
          tooling_up_i_: 1
        },
        costs: {
          bread: 670,
          wood: 670,
          stone: 130,
          iron: 30,
          gold: 40,
        },
        time: [0, 0, 0, 13],
        effects: [
          "+540 Infirmary Capacity",
          "1080 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 2,
          ward_expansion_i_: 1
        },
        costs: {
          bread: 940,
          wood: 940,
          stone: 180,
          iron: 40,
          gold: 50,
        },
        time: [0, 0, 0, 20],
        effects: [
          "+540 Infirmary Capacity",
          "1080 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 3,
          ward_expansion_i_: 2
        },
        costs: {
          bread: 2000,
          wood: 2000,
          stone: 400,
          iron: 100,
          gold: 120,
        },
        time: [0, 0, 0, 54],
        effects: [
          "+720 Infirmary Capacity",
          "1440 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 4,
          tooling_up_iI_: 1
        },
        costs: {
          bread: 6700,
          wood: 6700,
          stone: 1300,
          iron: 330,
          gold: 80,
        },
        time: [0, 0, 2, 30],
        effects: [
          "+1100 Infirmary Capacity",
          "2200 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 5,
          ward_expansion_iI_: 1
        },
        costs: {
          bread: 9400,
          wood: 9400,
          stone: 1800,
          iron: 470,
          gold: 110,
        },
        time: [0, 0, 3, 45],
        effects: [
          "+1100 Infirmary Capacity",
          "2200 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 6,
          ward_expansion_iI_: 2
        },
        costs: {
          bread: 20000,
          wood: 20000,
          stone: 4000,
          iron: 1000,
          gold: 240,
        },
        time: [0, 0, 10, 0],
        effects: [
          "+1400 Infirmary Capacity",
          "2800 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 10,
          tooling_up_iII_: 1
        },
        costs: {
          bread: 21000,
          wood: 21000,
          stone: 4300,
          iron: 1000,
          gold: 240,
        },
        time: [0, 0, 10, 0],
        effects: [
          "+2200 Infirmary Capacity",
          "4400 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 11,
          ward_expansion_iII_: 1
        },
        costs: {
          bread: 30000,
          wood: 30000,
          stone: 6000,
          iron: 1500,
          gold: 330,
        },
        time: [0, 0, 15, 0],
        effects: [
          "+2200 Infirmary Capacity",
          "4400 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 12,
          ward_expansion_iII_: 2
        },
        costs: {
          bread: 64000,
          wood: 64000,
          stone: 12000,
          iron: 3200,
          gold: 720,
        },
        time: [0, 0, 40, 0],
        effects: [
          "+2900 Infirmary Capacity",
          "5800 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 15,
          tooling_up_iV_: 1
        },
        costs: {
          bread: 62000,
          wood: 62000,
          stone: 12000,
          iron: 3100,
          gold: 800,
        },
        time: [0, 1, 6, 40],
        effects: [
          "+4300 Infirmary Capacity",
          "8600 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          academy: 16,
          ward_expansion_iV_: 1
        },
        costs: {
          bread: 86000,
          wood: 86000,
          stone: 17000,
          iron: 4300,
          gold: 1100,
        },
        time: [0, 1, 40, 0],
        effects: [
          "+4300 Infirmary Capacity",
          "8600 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          academy: 17,
          ward_expansion_iV_: 2
        },
        costs: {
          bread: 180000,
          wood: 180000,
          stone: 37000,
          iron: 9300,
          gold: 2400,
        },
        time: [0, 4, 26, 40],
        effects: [
          "+5800 Infirmary Capacity",
          "11600 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 20,
          tooling_up_v_: 1
        },
        costs: {
          bread: 110000,
          wood: 110000,
          stone: 22000,
          iron: 5500,
          gold: 3200,
        },
        time: [0, 6, 56, 40],
        effects: [
          "+8600 Infirmary Capacity",
          "17200 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          academy: 21,
          ward_expansion_v_: 1
        },
        costs: {
          bread: 150000,
          wood: 150000,
          stone: 30000,
          iron: 7700,
          gold: 4400,
        },
        time: [0, 10, 25, 0],
        effects: [
          "+8600 Infirmary Capacity",
          "17200 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          academy: 22,
          ward_expansion_v_: 2
        },
        costs: {
          bread: 330000,
          wood: 330000,
          stone: 66000,
          iron: 16000,
          gold: 9600,
        },
        time: [1, 3, 46, 40],
        effects: [
          "+12000 Infirmary Capacity",
          "24000 Power"
        ]
      },
      16: {
        lvl: 6,
        requirements: {
          academy: 25,
          tooling_up_vI_: 1,
        },
        costs: {
          bread: 380000,
          wood: 380000,
          stone: 77000,
          iron: 19000,
          gold: 6400,
        },
        time: [1, 9, 20, 0],
        effects: [
          "+12000 Infirmary Capacity",
          "24000 Power"
        ]
      },
      17: {
        lvl: 6,
        requirements: {
          ward_expansion_vI_: 1
        },
        costs: {
          bread: 540000,
          wood: 540000,
          stone: 100000,
          iron: 27000,
          gold: 8900,
        },
        time: [2, 2, 0, 0],
        effects: [
          "+12000 Infirmary Capacity",
          "24000 Power"
        ]
      },
      18: {
        lvl: 6,
        requirements: {
          ward_expansion_vI_: 2
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 230000,
          iron: 58000,
          gold: 19000,
        },
        time: [5, 13, 20, 0],
        effects: [
          "+16000 Infirmary Capacity",
          "32000 Power"
        ]
      },
      19: {
        lvl: 7,
        requirements: {
          academy: 29,
          tooling_up_vII_: 1,
        },
        costs: {
          bread: 770000,
          wood: 770000,
          stone: 150000,
          iron: 38000,
          gold: 12000,
        },
        time: [4, 20, 40, 0],
        effects: [
          "+20000 Infirmary Capacity",
          "40000 Power"
        ]
      },
      20: {
        lvl: 7,
        requirements: {
          ward_expansion_vII_: 1
        },
        costs: {
          bread: 1000000,
          wood: 1000000,
          stone: 210000,
          iron: 54000,
          gold: 16000,
        },
        time: [7, 7, 0, 0],
        effects: [
          "+20000 Infirmary Capacity",
          "40000 Power"
        ]
      },
      21: {
        lvl: 7,
        requirements: {
          ward_expansion_vII_: 2
        },
        costs: {
          bread: 2300000,
          wood: 2300000,
          stone: 460000,
          iron: 110000,
          gold: 36000,
        },
        time: [19, 10, 40, 0],
        effects: [
          "+27000 Infirmary Capacity",
          "54000 Power"
        ]
      },
    }
  },

  camp_expansion: {
    name: "Camp Expansion",
    icon: "camp-expansion.png",
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
          academy: 1,
          tooling_up_i_: 1
        },
        costs: {
          bread: 2000,
          wood: 2000,
          stone: 400,
          iron: 100,
          gold: 120,
        },
        time: [0, 0, 0, 27],
        effects: [
          "+2 Training Capacity",
          "1300 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 2,
          camp_expansion_i_: 1
        },
        costs: {
          bread: 2800,
          wood: 2800,
          stone: 560,
          iron: 140,
          gold: 160,
        },
        time: [0, 0, 0, 40],
        effects: [
          "+2 Training Capacity",
          "1300 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 3,
          camp_expansion_i_: 2
        },
        costs: {
          bread: 6000,
          wood: 6000,
          stone: 1200,
          iron: 300,
          gold: 360,
        },
        time: [0, 0, 1, 48],
        effects: [
          "+3 Training Capacity",
          "1950 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 4,
          tooling_up_iI_: 1
        },
        costs: {
          bread: 20000,
          wood: 20000,
          stone: 4000,
          iron: 1000,
          gold: 240,
        },
        time: [0, 0, 5, 0],
        effects: [
          "+4 Training Capacity",
          "2600 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 5,
          camp_expansion_iI_: 1
        },
        costs: {
          bread: 28000,
          wood: 28000,
          stone: 5600,
          iron: 1400,
          gold: 330,
        },
        time: [0, 0, 7, 30],
        effects: [
          "+5 Training Capacity",
          "3250 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 6,
          camp_expansion_iI_: 2
        },
        costs: {
          bread: 60000,
          wood: 60000,
          stone: 12000,
          iron: 3000,
          gold: 720,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+6 Training Capacity",
          "3900 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 10,
          tooling_up_iII_: 1
        },
        costs: {
          bread: 64000,
          wood: 64000,
          stone: 12000,
          iron: 3200,
          gold: 720,
        },
        time: [0, 0, 20, 0],
        effects: [
          "+7 Training Capacity",
          "4550 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 11,
          camp_expansion_iII_: 1
        },
        costs: {
          bread: 90000,
          wood: 90000,
          stone: 18000,
          iron: 4500,
          gold: 1000,
        },
        time: [0, 0, 30, 0],
        effects: [
          "+7 Training Capacity",
          "4550 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 12,
          camp_expansion_iII_: 2
        },
        costs: {
          bread: 190000,
          wood: 190000,
          stone: 38000,
          iron: 9700,
          gold: 2100,
        },
        time: [0, 1, 20, 0],
        effects: [
          "+9 Training Capacity",
          "5850 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 15,
          tooling_up_iV_: 1
        },
        costs: {
          bread: 180000,
          wood: 180000,
          stone: 37000,
          iron: 9300,
          gold: 2400,
        },
        time: [0, 2, 13, 20],
        effects: [
          "+9 Training Capacity",
          "5850 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          academy: 16,
          camp_expansion_iV_: 1
        },
        costs: {
          bread: 260000,
          wood: 260000,
          stone: 52000,
          iron: 13000,
          gold: 3300,
        },
        time: [0, 3, 20, 0],
        effects: [
          "+9 Training Capacity",
          "5850 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          academy: 17,
          camp_expansion_iV_: 2
        },
        costs: {
          bread: 550000,
          wood: 550000,
          stone: 110000,
          iron: 27000,
          gold: 7200,
        },
        time: [0, 8, 53, 20],
        effects: [
          "+12 Training Capacity",
          "7800 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 20,
          tooling_up_v_: 1
        },
        costs: {
          bread: 330000,
          wood: 330000,
          stone: 66000,
          iron: 16000,
          gold: 9600,
        },
        time: [0, 13, 53, 20],
        effects: [
          "+11 Training Capacity",
          "7150 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          academy: 21,
          camp_expansion_v_: 1
        },
        costs: {
          bread: 460000,
          wood: 460000,
          stone: 92000,
          iron: 23000,
          gold: 13000,
        },
        time: [0, 20, 50, 0],
        effects: [
          "+11 Training Capacity",
          "7150 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          academy: 22,
          camp_expansion_v_: 2
        },
        costs: {
          bread: 990000,
          wood: 990000,
          stone: 190000,
          iron: 49000,
          gold: 28000,
        },
        time: [2, 7, 33, 20],
        effects: [
          "+15 Training Capacity",
          "9750 Power"
        ]
      },
      16: {
        lvl: 6,
        requirements: {
          academy: 25,
          tooling_up_vI_: 1,
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 230000,
          iron: 58000,
          gold: 19000,
        },
        time: [2, 18, 40, 0],
        effects: [
          "+14 Training Capacity",
          "9100 Power"
        ]
      },
      17: {
        lvl: 6,
        requirements: {
          camp_expansion_vI_: 1
        },
        costs: {
          bread: 1600000,
          wood: 1600000,
          stone: 320000,
          iron: 81000,
          gold: 26000,
        },
        time: [4, 4, 0, 0],
        effects: [
          "+14 Training Capacity",
          "9100 Power"
        ]
      },
      18: {
        lvl: 6,
        requirements: {
          camp_expansion_vI_: 2
        },
        costs: {
          bread: 3400000,
          wood: 3400000,
          stone: 690000,
          iron: 170000,
          gold: 57000,
        },
        time: [11, 2, 40, 0],
        effects: [
          "+18 Training Capacity",
          "11700 Power"
        ]
      },
      19: {
        lvl: 7,
        requirements: {
          academy: 29,
          tooling_up_vII_: 1,
        },
        costs: {
          bread: 2300000,
          wood: 2300000,
          stone: 460000,
          iron: 110000,
          gold: 36000,
        },
        time: [9, 17, 20, 0],
        effects: [
          "+14 Training Capacity",
          "9100 Power"
        ]
      },
      20: {
        lvl: 7,
        requirements: {
          camp_expansion_vII_: 1
        },
        costs: {
          bread: 3200000,
          wood: 3200000,
          stone: 650000,
          iron: 160000,
          gold: 50000,
        },
        time: [14, 14, 0, 0],
        effects: [
          "+14 Training Capacity",
          "9100 Power"
        ]
      },
      21: {
        lvl: 7,
        requirements: {
          camp_expansion_vII_: 2
        },
        costs: {
          bread: 6900000,
          wood: 6900000,
          stone: 1300000,
          iron: 340000,
          gold: 100000,
        },
        time: [38, 21, 20, 0],
        effects: [
          "+18 Training Capacity",
          "11700 Power"
        ]
      },
    }
  },

  tool_enhancement: {
    name: "Tool Enhancement",
    icon: "tool-enhancement.png",
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
          academy: 1,
          ward_expansion_i_: 1,
          camp_expansion_i_: 1
        },
        costs: {
          bread: 2200,
          wood: 2200,
          stone: 450,
          iron: 110,
          gold: 140,
        },
        time: [0, 0, 0, 35],
        effects: [
          "+0.4% Research Speed",
          "2000 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 2,
          tool_enhancement_i_: 1
        },
        costs: {
          bread: 3200,
          wood: 3200,
          stone: 640,
          iron: 160,
          gold: 190,
        },
        time: [0, 0, 0, 52],
        effects: [
          "+0.4% Research Speed",
          "2000 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 3,
          tool_enhancement_i_: 2
        },
        costs: {
          bread: 6800,
          wood: 6800,
          stone: 1300,
          iron: 340,
          gold: 420,
        },
        time: [0, 0, 2, 20],
        effects: [
          "+0.5% Research Speed",
          "2500 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 6,
          ward_expansion_iI_: 1,
          camp_expansion_iI_: 1
        },
        costs: {
          bread: 22000,
          wood: 22000,
          stone: 4500,
          iron: 1100,
          gold: 280,
        },
        time: [0, 0, 6, 30],
        effects: [
          "+0.6% Research Speed",
          "3000 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 7,
          tool_enhancement_iI_: 1
        },
        costs: {
          bread: 32000,
          wood: 32000,
          stone: 6400,
          iron: 1600,
          gold: 390,
        },
        time: [0, 0, 9, 45],
        effects: [
          "+0.6% Research Speed",
          "3000 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 8,
          tool_enhancement_iI_: 2
        },
        costs: {
          bread: 68000,
          wood: 68000,
          stone: 13000,
          iron: 3400,
          gold: 840,
        },
        time: [0, 0, 26, 0],
        effects: [
          "+1.0% Research Speed",
          "5000 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 11,
          ward_expansion_iII_: 1,
          camp_expansion_iII_: 1
        },
        costs: {
          bread: 73000,
          wood: 73000,
          stone: 14000,
          iron: 3600,
          gold: 840,
        },
        time: [0, 0, 26, 0],
        effects: [
          "+1.0% Research Speed",
          "5000 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 12,
          tool_enhancement_iII_: 1
        },
        costs: {
          bread: 100000,
          wood: 100000,
          stone: 20000,
          iron: 5100,
          gold: 1100,
        },
        time: [0, 0, 39, 0],
        effects: [
          "+1.0% Research Speed",
          "5000 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 13,
          tool_enhancement_iII_: 2
        },
        costs: {
          bread: 220000,
          wood: 220000,
          stone: 44000,
          iron: 11000,
          gold: 2500,
        },
        time: [0, 1, 44, 0],
        effects: [
          "+1.0% Research Speed",
          "5000 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 16,
          ward_expansion_iV_: 1,
          camp_expansion_iV_: 1
        },
        costs: {
          bread: 210000,
          wood: 210000,
          stone: 42000,
          iron: 10000,
          gold: 2800,
        },
        time: [0, 2, 53, 20],
        effects: [
          "+1.2% Research Speed",
          "6000 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          academy: 17,
          tool_enhancement_iV_: 1
        },
        costs: {
          bread: 290000,
          wood: 290000,
          stone: 59000,
          iron: 14000,
          gold: 3900,
        },
        time: [0, 4, 20, 0],
        effects: [
          "+1.2% Research Speed",
          "6000 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          academy: 18,
          tool_enhancement_iV_: 2
        },
        costs: {
          bread: 630000,
          wood: 630000,
          stone: 120000,
          iron: 31000,
          gold: 8400,
        },
        time: [0, 11, 33, 20],
        effects: [
          "+1.5% Research Speed",
          "7500 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 21,
          ward_expansion_v_: 1,
          camp_expansion_v_: 1
        },
        costs: {
          bread: 370000,
          wood: 370000,
          stone: 75000,
          iron: 18000,
          gold: 11000,
        },
        time: [0, 18, 3, 20],
        effects: [
          "+1.6% Research Speed",
          "8000 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          academy: 22,
          tool_enhancement_v_: 1
        },
        costs: {
          bread: 520000,
          wood: 520000,
          stone: 100000,
          iron: 26000,
          gold: 15000,
        },
        time: [1, 3, 5, 0],
        effects: [
          "+1.6% Research Speed",
          "8000 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          academy: 23,
          tool_enhancement_v_: 2
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 220000,
          iron: 56000,
          gold: 33000,
        },
        time: [3, 0, 13, 20],
        effects: [
          "+2.0% Research Speed",
          "10000 Power"
        ]
      },
      16: {
        lvl: 6,
        requirements: {
          academy: 26,
          ward_expansion_vI_: 1,
          camp_expansion_vI_: 1
        },
        costs: {
          bread: 1300000,
          wood: 1300000,
          stone: 260000,
          iron: 66000,
          gold: 22000,
        },
        time: [3, 14, 40, 0],
        effects: [
          "+1.8% Research Speed",
          "9000 Power"
        ]
      },
      17: {
        lvl: 6,
        requirements: {
          academy: 27,
          tool_enhancement_vI_: 1
        },
        costs: {
          bread: 1800000,
          wood: 1800000,
          stone: 370000,
          iron: 92000,
          gold: 31000,
        },
        time: [5, 10, 0, 0],
        effects: [
          "+1.8% Research Speed",
          "9000 Power"
        ]
      },
      18: {
        lvl: 6,
        requirements: {
          tool_enhancement_vI_: 2
        },
        costs: {
          bread: 3900000,
          wood: 3900000,
          stone: 790000,
          iron: 190000,
          gold: 67000,
        },
        time: [14, 10, 40, 0],
        effects: [
          "+2.5% Research Speed",
          "12500 Power"
        ]
      },
      19: {
        lvl: 7,
        requirements: {
          academy: 30,
          ward_expansion_vII_: 1,
          camp_expansion_vII_: 1
        },
        costs: {
          bread: 2600000,
          wood: 2600000,
          stone: 520000,
          iron: 130000,
          gold: 42000,
        },
        time: [12, 15, 20, 0],
        effects: [
          "+1.8% Research Speed",
          "9000 Power"
        ]
      },
      20: {
        lvl: 7,
        requirements: {
          tool_enhancement_vII_: 1
        },
        costs: {
          bread: 3700000,
          wood: 3700000,
          stone: 740000,
          iron: 180000,
          gold: 58000,
        },
        time: [18, 23, 0, 0],
        effects: [
          "+1.8% Research Speed",
          "9000 Power"
        ]
      },
      21: {
        lvl: 7,
        requirements: {
          tool_enhancement_vII_: 2
        },
        costs: {
          bread: 7900000,
          wood: 7900000,
          stone: 1500000,
          iron: 390000,
          gold: 120000,
        },
        time: [50, 13, 20, 0],
        effects: [
          "+2.5% Research Speed",
          "12500 Power"
        ]
      }
    }
  },

  bandaging: {
    name: "Bandaging",
    icon: "bandaging.png",
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
          academy: 2,
          tool_enhancement_i_: 2
        },
        costs: {
          bread: 6700,
          wood: 6700,
          stone: 1300,
          iron: 330,
          gold: 400,
        },
        time: [0, 0, 1, 34],
        effects: [
          "+4.6% Healing Speed",
          "4600 Power"
        ]
      },
      2: {
        lvl: 1,
        requirements: {
          academy: 3,
          bandaging_i_: 1
        },
        costs: {
          bread: 9400,
          wood: 9400,
          stone: 1800,
          iron: 470,
          gold: 560,
        },
        time: [0, 0, 2, 21],
        effects: [
          "+4.6% Healing Speed",
          "4600 Power"
        ]
      },
      3: {
        lvl: 1,
        requirements: {
          academy: 4,
          bandaging_i_: 2
        },
        costs: {
          bread: 20000,
          wood: 20000,
          stone: 4000,
          iron: 1000,
          gold: 1200,
        },
        time: [0, 0, 6, 18],
        effects: [
          "+6.0% Healing Speed",
          "6000 Power"
        ]
      },
      4: {
        lvl: 2,
        requirements: {
          academy: 8,
          tool_enhancement_iI_: 2
        },
        costs: {
          bread: 67000,
          wood: 67000,
          stone: 13000,
          iron: 3300,
          gold: 800,
        },
        time: [0, 0, 17, 30],
        effects: [
          "+9.0% Healing Speed",
          "9000 Power"
        ]
      },
      5: {
        lvl: 2,
        requirements: {
          academy: 9,
          bandaging_iI_: 1
        },
        costs: {
          bread: 94000,
          wood: 94000,
          stone: 18000,
          iron: 4700,
          gold: 1100,
        },
        time: [0, 0, 26, 15],
        effects: [
          "+9.0% Healing Speed",
          "9000 Power"
        ]
      },
      6: {
        lvl: 2,
        requirements: {
          academy: 10,
          bandaging_iI_: 2
        },
        costs: {
          bread: 200000,
          wood: 200000,
          stone: 40000,
          iron: 10000,
          gold: 2400,
        },
        time: [0, 1, 10, 0],
        effects: [
          "+12.0% Healing Speed",
          "12000 Power"
        ]
      },
      7: {
        lvl: 3,
        requirements: {
          academy: 12,
          tool_enhancement_iII_: 1
        },
        costs: {
          bread: 210000,
          wood: 210000,
          stone: 43000,
          iron: 10000,
          gold: 2400,
        },
        time: [0, 1, 10, 0],
        effects: [
          "+13.4% Healing Speed",
          "13400 Power"
        ]
      },
      8: {
        lvl: 3,
        requirements: {
          academy: 13,
          bandaging_iII_: 1
        },
        costs: {
          bread: 300000,
          wood: 300000,
          stone: 60000,
          iron: 15000,
          gold: 3300,
        },
        time: [0, 1, 45, 0],
        effects: [
          "+13.4% Healing Speed",
          "13400 Power"
        ]
      },
      9: {
        lvl: 3,
        requirements: {
          academy: 14,
          bandaging_iII_: 2
        },
        costs: {
          bread: 640000,
          wood: 640000,
          stone: 120000,
          iron: 32000,
          gold: 7200,
        },
        time: [0, 4, 40, 0],
        effects: [
          "+18.0% Healing Speed",
          "18000 Power"
        ]
      },
      10: {
        lvl: 4,
        requirements: {
          academy: 17,
          tool_enhancement_iV_: 1
        },
        costs: {
          bread: 620000,
          wood: 620000,
          stone: 120000,
          iron: 31000,
          gold: 8000,
        },
        time: [0, 7, 46, 40],
        effects: [
          "+18.0% Healing Speed",
          "18000 Power"
        ]
      },
      11: {
        lvl: 4,
        requirements: {
          academy: 18,
          bandaging_iV_: 1
        },
        costs: {
          bread: 860000,
          wood: 860000,
          stone: 170000,
          iron: 43000,
          gold: 11000,
        },
        time: [0, 11, 40, 0],
        effects: [
          "+18.0% Healing Speed",
          "18000 Power"
        ]
      },
      12: {
        lvl: 4,
        requirements: {
          academy: 19,
          bandaging_iV_: 2
        },
        costs: {
          bread: 1800000,
          wood: 1800000,
          stone: 170000,
          iron: 93000,
          gold: 24000,
        },
        time: [1, 7, 6, 40],
        effects: [
          "+24.0% Healing Speed",
          "24000 Power"
        ]
      },
      13: {
        lvl: 5,
        requirements: {
          academy: 22,
          tool_enhancement_v_: 1
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 220000,
          iron: 55000,
          gold: 32000,
        },
        time: [2, 0, 36, 40],
        effects: [
          "+22.4% Healing Speed",
          "22400 Power"
        ]
      },
      14: {
        lvl: 5,
        requirements: {
          academy: 23,
          bandaging_v_: 1
        },
        costs: {
          bread: 1500000,
          wood: 1500000,
          stone: 300000,
          iron: 77000,
          gold: 44000,
        },
        time: [3, 0, 55, 0],
        effects: [
          "+22.4% Healing Speed",
          "22400 Power"
        ]
      },
      15: {
        lvl: 5,
        requirements: {
          academy: 24,
          bandaging_v_: 2
        },
        costs: {
          bread: 3300000,
          wood: 3300000,
          stone: 660000,
          iron: 160000,
          gold: 96000,
        },
        time: [8, 2, 26, 40],
        effects: [
          "+30.0% Healing Speed",
          "30000 Power"
        ]
      },
      16: {
        lvl: 6,
        requirements: {
          academy: 27,
          tool_enhancement_vI_: 1,
        },
        costs: {
          bread: 3800000,
          wood: 3800000,
          stone: 770000,
          iron: 190000,
          gold: 64000,
        },
        time: [9, 17, 20, 0],
        effects: [
          "+27.0% Healing Speed",
          "27000 Power"
        ]
      },
      17: {
        lvl: 6,
        requirements: {
          bandaging_vI_: 1
        },
        costs: {
          bread: 5400000,
          wood: 5400000,
          stone: 1000000,
          iron: 270000,
          gold: 89000,
        },
        time: [14, 14, 0, 0],
        effects: [
          "+27.0% Healing Speed",
          "27000 Power"
        ]
      },
      18: {
        lvl: 6,
        requirements: {
          bandaging_vI_: 2
        },
        costs: {
          bread: 11000000,
          wood: 11000000,
          stone: 2300000,
          iron: 580000,
          gold: 190000,
        },
        time: [38, 21, 20, 0],
        effects: [
          "+36.0% Healing Speed",
          "36000 Power"
        ]
      },
      19: {
        lvl: 7,
        requirements: {
          academy: 30,
          tool_enhancement_vII_: 1,
        },
        costs: {
          bread: 7700000,
          wood: 7700000,
          stone: 1500000,
          iron: 380000,
          gold: 120000,
        },
        time: [34, 0, 40, 0],
        effects: [
          "+27.0% Healing Speed",
          "27000 Power"
        ]
      },
      20: {
        lvl: 7,
        requirements: {
          bandaging_vII_: 1
        },
        costs: {
          bread: 10000000,
          wood: 10000000,
          stone: 2100000,
          iron: 540000,
          gold: 160000,
        },
        time: [51, 1, 0, 0],
        effects: [
          "+27.0% Healing Speed",
          "27000 Power"
        ]
      },
      21: {
        lvl: 7,
        requirements: {
          bandaging_vII_: 2
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4600000,
          iron: 1100000,
          gold: 360000,
        },
        time: [136, 2, 40, 0],
        effects: [
          "+36.0% Healing Speed",
          "36000 Power"
        ]
      }
    }
  },

  trainer_tools: {
    name: "Trainer Tools",
    icon: "trainer-tools.png",
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
          academy: 2,
          tool_enhancement_i_: 1
        },
        costs: {
          bread: 5400,
          wood: 5400,
          stone: 1000,
          iron: 270,
          gold: 320,
        },
        time: [0, 0, 1, 21],
        effects: [
          "+2.2% Training Speed",
          "3960 Power"
        ]
      },
      2: {
        lvl: 2,
        requirements: {
          academy: 3,
          trainer_tools_i_: 1
        },
        costs: {
          bread: 7500,
          wood: 7500,
          stone: 1500,
          iron: 370,
          gold: 440,
        },
        time: [0, 0, 2, 1],
        effects: [
          "+2.2% Training Speed",
          "3960 Power"
        ]
      },
      3: {
        lvl: 3,
        requirements: {
          academy: 4,
          trainer_tools_i_: 2
        },
        costs: {
          bread: 16000,
          wood: 16000,
          stone: 3200,
          iron: 810,
          gold: 960,
        },
        time: [0, 0, 5, 24],
        effects: [
          "+3.0% Training Speed",
          "5400 Power"
        ]
      },
      4: {
        lvl: 4,
        requirements: {
          academy: 8,
          tool_enhancement_iI_: 1
        },
        costs: {
          bread: 54000,
          wood: 54000,
          stone: 10000,
          iron: 2700,
          gold: 640,
        },
        time: [0, 0, 15, 0],
        effects: [
          "+4.6% Training Speed",
          "8280 Power"
        ]
      },
      5: {
        lvl: 5,
        requirements: {
          academy: 9,
          trainer_tools_iI_: 1
        },
        costs: {
          bread: 75000,
          wood: 75000,
          stone: 15000,
          iron: 3700,
          gold: 890,
        },
        time: [0, 0, 22, 30],
        effects: [
          "+4.6% Training Speed",
          "8280 Power"
        ]
      },
      6: {
        lvl: 6,
        requirements: {
          academy: 10,
          trainer_tools_iI_: 2
        },
        costs: {
          bread: 160000,
          wood: 160000,
          stone: 32000,
          iron: 8100,
          gold: 1900,
        },
        time: [0, 1, 0, 0],
        effects: [
          "+6.0% Training Speed",
          "10800 Power"
        ]
      },
      7: {
        lvl: 7,
        requirements: {
          academy: 12,
          tool_enhancement_iII_: 1
        },
        costs: {
          bread: 170000,
          wood: 170000,
          stone: 34000,
          iron: 8600,
          gold: 1900,
        },
        time: [0, 1, 0, 0],
        effects: [
          "+6.8% Training Speed",
          "12240 Power"
        ]
      },
      8: {
        lvl: 8,
        requirements: {
          academy: 13,
          trainer_tools_iII_: 1
        },
        costs: {
          bread: 240000,
          wood: 240000,
          stone: 48000,
          iron: 12000,
          gold: 2600,
        },
        time: [0, 1, 30, 0],
        effects: [
          "+6.8% Training Speed",
          "12240 Power"
        ]
      },
      9: {
        lvl: 9,
        requirements: {
          academy: 14,
          trainer_tools_iII_: 2
        },
        costs: {
          bread: 510000,
          wood: 510000,
          stone: 100000,
          iron: 25000,
          gold: 5700,
        },
        time: [0, 4, 0, 0],
        effects: [
          "+9.0% Training Speed",
          "16200 Power"
        ]
      },
      10: {
        lvl: 10,
        requirements: {
          academy: 17,
          tool_enhancement_iV_: 1
        },
        costs: {
          bread: 490000,
          wood: 490000,
          stone: 99000,
          iron: 24000,
          gold: 6400,
        },
        time: [0, 6, 40, 0],
        effects: [
          "+9.0% Training Speed",
          "16200 Power"
        ]
      },
      11: {
        lvl: 11,
        requirements: {
          academy: 18,
          trainer_tools_iV_: 1
        },
        costs: {
          bread: 690000,
          wood: 690000,
          stone: 130000,
          iron: 34000,
          gold: 8900,
        },
        time: [0, 10, 0, 0],
        effects: [
          "+9.0% Training Speed",
          "16200 Power"
        ]
      },
      12: {
        lvl: 12,
        requirements: {
          academy: 19,
          trainer_tools_iV_: 2
        },
        costs: {
          bread: 1400000,
          wood: 1400000,
          stone: 290000,
          iron: 74000,
          gold: 19000,
        },
        time: [1, 2, 40, 0],
        effects: [
          "+12.0% Training Speed",
          "21600 Power"
        ]
      },
      13: {
        lvl: 13,
        requirements: {
          academy: 22,
          tool_enhancement_v_: 1
        },
        costs: {
          bread: 880000,
          wood: 880000,
          stone: 170000,
          iron: 44000,
          gold: 25000,
        },
        time: [1, 17, 40, 0],
        effects: [
          "+11.2% Training Speed",
          "20160 Power"
        ]
      },
      14: {
        lvl: 14,
        requirements: {
          academy: 23,
          trainer_tools_v_: 1
        },
        costs: {
          bread: 1200000,
          wood: 1200000,
          stone: 240000,
          iron: 61000,
          gold: 35000,
        },
        time: [2, 14, 30, 0],
        effects: [
          "+11.2% Training Speed",
          "20160 Power"
        ]
      },
      15: {
        lvl: 15,
        requirements: {
          academy: 24,
          trainer_tools_v_: 2
        },
        costs: {
          bread: 2600000,
          wood: 2600000,
          stone: 530000,
          iron: 130000,
          gold: 76000,
        },
        time: [6, 22, 40, 0],
        effects: [
          "+15.0% Training Speed",
          "27000 Power"
        ]
      },
      16: {
        lvl: 16,
        requirements: {
          academy: 27,
          tool_enhancement_vI_: 1,
        },
        costs: {
          bread: 3100000,
          wood: 3100000,
          stone: 620000,
          iron: 150000,
          gold: 51000,
        },
        time: [8, 8, 0, 0],
        effects: [
          "+13.5% Training Speed",
          "24120 Power"
        ]
      },
      17: {
        lvl: 17,
        requirements: {
          trainer_tools_vI_: 1
        },
        costs: {
          bread: 4300000,
          wood: 4300000,
          stone: 870000,
          iron: 210000,
          gold: 71000,
        },
        time: [12, 12, 0, 0],
        effects: [
          "+13.4% Training Speed",
          "24120 Power"
        ]
      },
      18: {
        lvl: 18,
        requirements: {
          trainer_tools_vI_: 2
        },
        costs: {
          bread: 9300000,
          wood: 9300000,
          stone: 1800000,
          iron: 460000,
          gold: 150000,
        },
        time: [33, 8, 0, 0],
        effects: [
          "+18.0% Training Speed",
          "32400 Power"
        ]
      },
      19: {
        lvl: 19,
        requirements: {
          academy: 30,
          tool_enhancement_vII_: 1,
        },
        costs: {
          bread: 6200000,
          wood: 6200000,
          stone: 1200000,
          iron: 310000,
          gold: 96000,
        },
        time: [29, 4, 0, 0],
        effects: [
          "+13.4% Training Speed",
          "24120 Power"
        ]
      },
      20: {
        lvl: 20,
        requirements: {
          academy: 30,
          trainer_tools_vII_: 1
        },
        costs: {
          bread: 8700000,
          wood: 8700000,
          stone: 1700000,
          iron: 430000,
          gold: 130000,
        },
        time: [43, 18, 0, 0],
        effects: [
          "+13.4% Training Speed",
          "24120 Power"
        ]
      },
      21: {
        lvl: 21,
        requirements: {
          academy: 30,
          trainer_tools_vII_: 2
        },
        costs: {
          bread: 18000000,
          wood: 18000000,
          stone: 3700000,
          iron: 930000,
          gold: 280000,
        },
        time: [116, 16, 0, 0],
        effects: [
          "+18.0% Training Speed",
          "32400 Power"
        ]
      }
    }
  },
};