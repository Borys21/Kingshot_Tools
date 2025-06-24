const economyResearchData = {
  tooling_up: {
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
          stone_mining_i_: 1
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
          bread_output_V_: 1,
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
          bread_output_V_: 2
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
          bread_output_VI_: 1
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
          bread_output_VI_: 2
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
}