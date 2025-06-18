const buildingsData = {
  town_center: {
    name: "Town Center",
    icon: "town-center.png",
    levels: {
      0: {
        requirements: {
          town_center: 0
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 0],
        effects: ["Unlocks Town Center"]
      },
      1: {
        requirements: {},
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 0],
        effects: [
          "Cookhouse",
          "Sawmill",
          "House 1",
          "House 2",
          "2000 Power"
        ]
      },
      2: {
        requirements: {
          sawmill: 1
        },
        costs: {
          bread: 0,
          wood: 180,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 6],
        effects: [
          "Mill",
          "3800 Power"
        ]
      },
      3: {
        requirements: {
          house_1: 2
        },
        costs: {
          bread: 0,
          wood: 805,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 1, 0],
        effects: [
          "Quarry",
          "6500 Power"
        ]
      },
      4: {
        requirements: {
          quarry: 3
        },
        costs: {
          bread: 0,
          wood: 1800,
          stone: 360,
          iron: 0,
        },
        time: [0, 0, 3, 0],
        effects: [
          "Clinic",
          "Watchtower",
          "Hero Hall",
          "House 3",
          "10100 Power"
        ]
      },
      5: {
        requirements: {
          hero_hall: 1,
          house_3: 3
        },
        costs: {
          bread: 0,
          wood: 7600,
          stone: 1500,
          iron: 0,
        },
        time: [0, 0, 10, 0],
        effects: [
          "Iron Mine",
          "House 4",
          "15500 Power"
        ]
      },
      6: {
        requirements: {
          iron_mine: 5
        },
        costs: {
          bread: 0,
          wood: 19000,
          stone: 3800,
          iron: 960,
        },
        time: [0, 0, 20, 0],
        effects: [
          "Kitchen",
          "House 5",
          "23600 Power"
        ]
      },
      7: {
        requirements: {
          mill: 6
        },
        costs: {
          bread: 0,
          wood: 69000,
          stone: 13000,
          iron: 3400,
        },
        time: [0, 1, 0, 0],
        effects: [
          "Barracks",
          "Barricade",
          "House 6",
          "35300 Power"
        ]
      },
      8: {
        requirements: {
          barracks: 7
        },
        costs: {
          bread: 0,
          wood: 120000,
          stone: 25000,
          iron: 6300,
        },
        time: [0, 2, 30, 0],
        effects: [
          "Embassy",
          "Arena",
          "Range",
          "Infirmary",
          "47000 Power"
        ]
      },
      9: {
        requirements: {
          embassy: 8,
          infirmary: 1
        },
        costs: {
          bread: 0,
          wood: 260000,
          stone: 52000,
          iron: 13000,
        },
        time: [0, 4, 30, 0],
        effects: [
          "Storehouse",
          "Academy",
          "Stable",
          "58700 Power"
        ]
      },
      10: {
        requirements: {
          range: 9,
          academy: 1
        },
        costs: {
          bread: 0,
          wood: 460000,
          stone: 92000,
          iron: 23000,
        },
        time: [0, 6, 0, 0],
        effects: [
          "Command Center",
          "House 7",
          "House 8",
          "75700 Power"
        ]
      },
      11: {
        requirements: {
          embassy: 10,
          stable: 10
        },
        costs: {
          bread: 1300000,
          wood: 1300000,
          stone: 260000,
          iron: 65000,
        },
        time: [0, 7, 30, 0],
        effects: [
          "Enlistement Office",
          "92700 Power"
        ]
      },
      12: {
        requirements: {
          embassy: 11,
          command_center: 1
        },
        costs: {
          bread: 1600000,
          wood: 1600000,
          stone: 330000,
          iron: 84000,
        },
        time: [0, 9, 0, 0],
        effects: [
          "109700 Power"
        ]
      },
      13: {
        requirements: {
          embassy: 12,
          barracks: 12
        },
        costs: {
          bread: 2300000,
          wood: 2300000,
          stone: 470000,
          iron: 110000,
        },
        time: [0, 11, 0, 0],
        effects: [
          "Conquerors' Camp",
          "138400 Power"
        ]
      },
      14: {
        requirements: {
          embassy: 13,
          range: 13
        },
        costs: {
          bread: 3100000,
          wood: 3100000,
          stone: 630000,
          iron: 150000,
        },
        time: [0, 14, 0, 0],
        effects: [
          "167100 Power"
        ]
      },
      15: {
        requirements: {
          embassy: 14,
          stable: 14
        },
        costs: {
          bread: 4600000,
          wood: 4600000,
          stone: 930000,
          iron: 230000,
        },
        time: [0, 18, 0, 0],
        effects: [
          "Hero Gear",
          "195800 Power"
        ]
      },
      16: {
        requirements: {
          embassy: 15,
          academy: 15
        },
        costs: {
          bread: 5900000,
          wood: 5900000,
          stone: 1100000,
          iron: 290000,
        },
        time: [1, 6, 28, 0],
        effects: [
          "236200 Power"
        ]
      },
      17: {
        requirements: {
          embassy: 16,
          barracks: 16
        },
        costs: {
          bread: 9300000,
          wood: 9300000,
          stone: 1800000,
          iron: 480000,
        },
        time: [1, 12, 34, 0],
        effects: [
          "276600 Power"
        ]
      },
      18: {
        requirements: {
          embassy: 17,
          range: 17
        },
        costs: {
          bread: 12000000,
          wood: 12000000,
          stone: 2500000,
          iron: 620000,
        },
        time: [1, 19, 53, 0],
        effects: [
          "317000 Power"
        ]
      },
      19: {
        requirements: {
          embassy: 18,
          stable: 18
        },
        costs: {
          bread: 15000000,
          wood: 15000000,
          stone: 3100000,
          iron: 780000,
        },
        time: [2, 17, 50, 0],
        effects: [
          "374400 Power"
        ]
      },
      20: {
        requirements: {
          embassy: 19,
          academy: 19
        },
        costs: {
          bread: 21000000,
          wood: 21000000,
          stone: 4300000,
          iron: 1000000,
        },
        time: [3, 10, 18, 0],
        effects: [
          "Forgehammer",
          "431800 Power"
        ]
      },
      21: {
        requirements: {
          embassy: 20,
          barracks: 20
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5400000,
          iron: 1300000,
        },
        time: [4, 10, 59, 0],
        effects: [
          "489200 Power"
        ]
      },
      22: {
        requirements: {
          embassy: 21,
          range: 21
        },
        costs: {
          bread: 36000000,
          wood: 36000000,
          stone: 7200000,
          iron: 1800000,
        },
        time: [6, 16, 29, 0],
        effects: [
          "Governor Gear",
          "575300 Power"
        ]
      },
      23: {
        requirements: {
          embassy: 22,
          stable: 22
        },
        costs: {
          bread: 44000000,
          wood: 44000000,
          stone: 8900000,
          iron: 2200000,
        },
        time: [9, 8, 40, 0],
        effects: [
          "661400 Power"
        ]
      },
      24: {
        requirements: {
          embassy: 23,
          academy: 23
        },
        costs: {
          bread: 60000000,
          wood: 60000000,
          stone: 12000000,
          iron: 3000000,
        },
        time: [13, 2, 33, 0],
        effects: [
          "747500 Power"
        ]
      },
      25: {
        requirements: {
          embassy: 24,
          barracks: 24
        },
        costs: {
          bread: 81000000,
          wood: 81000000,
          stone: 16000000,
          iron: 4000000,
        },
        time: [18, 8, 22, 0],
        effects: [
          "Charms",
          "833600 Power"
        ]
      },
      26: {
        requirements: {
          embassy: 25,
          range: 25
        },
        costs: {
          bread: 100000000,
          wood: 100000000,
          stone: 21000000,
          iron: 5200000,
        },
        time: [21, 2, 26, 0],
        effects: [
          "910100 Power"
        ]
      },
      27: {
        requirements: {
          embassy: 26,
          stable: 26
        },
        costs: {
          bread: 140000000,
          wood: 140000000,
          stone: 24000000,
          iron: 7400000,
        },
        time: [25, 7, 43, 0],
        effects: [
          "1086600 Power"
        ]
      },
      28: {
        requirements: {
          embassy: 27,
          academy: 27
        },
        costs: {
          bread: 190000000,
          wood: 190000000,
          stone: 39000000,
          iron: 9900000,
        },
        time: [29, 2, 52, 0],
        effects: [
          "1213100 Power"
        ]
      },
      29: {
        requirements: {
          embassy: 28,
          barracks: 28
        },
        costs: {
          bread: 240000000,
          wood: 240000000,
          stone: 49000000,
          iron: 12000000,
        },
        time: [33, 11, 42, 0],
        effects: [
          "1339600 Power"
        ]
      },
      30: {
        requirements: {
          embassy: 29,
          range: 29
        },
        costs: {
          bread: 300000000,
          wood: 300000000,
          stone: 60000000,
          iron: 15000000,
        },
        time: [40, 4, 27, 0],
        effects: [
          "1523500 Power"
        ]
      },
      31: {
        requirements: {
          embassy: 30,
          research_center: 30
        },
        costs: {
          bread: 67000000,
          wood: 67000000,
          stone: 13000000,
          iron: 3300000,
          tgold: 132,
        },
        time: [7, 0, 0, 0],
        effects: [
          "1523500 Power"
        ]
      },
      32: {
        requirements: {
          embassy: 30,
          research_center: 30
        },
        costs: {
          bread: 67000000,
          wood: 67000000,
          stone: 13000000,
          iron: 3300000,
          tgold: 132,
        },
        time: [7, 0, 0, 0],
        effects: [
          "1523500 Power"
        ]
      },
      33: {
        requirements: {
          embassy: 30,
          research_center: 30
        },
        costs: {
          bread: 67000000,
          wood: 67000000,
          stone: 13000000,
          iron: 3300000,
          tgold: 132,
        },
        time: [7, 0, 0, 0],
        effects: [
          "1523500 Power"
        ]
      },
      34: {
        requirements: {
          embassy: 30,
          research_center: 30
        },
        costs: {
          bread: 67000000,
          wood: 67000000,
          stone: 13000000,
          iron: 3300000,
          tgold: 132,
        },
        time: [7, 0, 0, 0],
        effects: [
          "1523500 Power"
        ]
      },
      35: {
        requirements: {
          embassy: 30,
          research_center: 30
        },
        costs: {
          bread: 67000000,
          wood: 67000000,
          stone: 13000000,
          iron: 3300000,
          tgold: 132,
        },
        time: [7, 0, 0, 0],
        effects: [
          "1523500 Power"
        ]
      },
      36: {
        requirements: {
          embassy: 31,
          stable: 31
        },
        costs: {
          bread: 72000000,
          wood: 72000000,
          stone: 14000000,
          iron: 3600000,
          tgold: 158,
        },
        time: [9, 0, 0, 0],
        effects: [
          "1810500 Power"
        ]
      },
      37: {
        requirements: {
          embassy: 31,
          stable: 31
        },
        costs: {
          bread: 72000000,
          wood: 72000000,
          stone: 14000000,
          iron: 3600000,
          tgold: 158,
        },
        time: [9, 0, 0, 0],
        effects: [
          "1810500 Power"
        ]
      },
      38: {
        requirements: {
          embassy: 31,
          stable: 31
        },
        costs: {
          bread: 72000000,
          wood: 72000000,
          stone: 14000000,
          iron: 3600000,
          tgold: 158,
        },
        time: [9, 0, 0, 0],
        effects: [
          "1810500 Power"
        ]
      },
      39: {
        requirements: {
          embassy: 31,
          stable: 31
        },
        costs: {
          bread: 72000000,
          wood: 72000000,
          stone: 14000000,
          iron: 3600000,
          tgold: 158,
        },
        time: [9, 0, 0, 0],
        effects: [
          "1810500 Power"
        ]
      },
      40: {
        requirements: {
          embassy: 31,
          stable: 31
        },
        costs: {
          bread: 72000000,
          wood: 72000000,
          stone: 14000000,
          iron: 3600000,
          tgold: 158,
        },
        time: [9, 0, 0, 0],
        effects: [
          "1810500 Power"
        ]
      },
      41: {
        requirements: {
          embassy: 32,
          barracks: 32
        },
        costs: {
          bread: 79000000,
          wood: 79000000,
          stone: 15000000,
          iron: 3900000,
          tgold: 238,
        },
        time: [11, 0, 0, 0],
        effects: [
          "2097500 Power"
        ]
      },
      42: {
        requirements: {
          embassy: 32,
          barracks: 32
        },
        costs: {
          bread: 79000000,
          wood: 79000000,
          stone: 15000000,
          iron: 3900000,
          tgold: 238,
        },
        time: [11, 0, 0, 0],
        effects: [
          "2097500 Power"
        ]
      },
      43: {
        requirements: {
          embassy: 32,
          barracks: 32
        },
        costs: {
          bread: 79000000,
          wood: 79000000,
          stone: 15000000,
          iron: 3900000,
          tgold: 238,
        },
        time: [11, 0, 0, 0],
        effects: [
          "2097500 Power"
        ]
      },
      44: {
        requirements: {
          embassy: 32,
          barracks: 32
        },
        costs: {
          bread: 79000000,
          wood: 79000000,
          stone: 15000000,
          iron: 3900000,
          tgold: 238,
        },
        time: [11, 0, 0, 0],
        effects: [
          "2097500 Power"
        ]
      },
      45: {
        requirements: {
          embassy: 32,
          barracks: 32
        },
        costs: {
          bread: 79000000,
          wood: 79000000,
          stone: 15000000,
          iron: 3900000,
          tgold: 238,
        },
        time: [11, 0, 0, 0],
        effects: [
          "2097500 Power"
        ]
      }
    }
  },

  embassy: {
    name: "Embassy",
    icon: "embassy.png",
    levels: {
      0: {
        requirements: {
          town_center: 0
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 0],
        effects: ["Unlocks Embassy"]
      },
      1: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 60,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 2],
        effects: [
          "1 Ally Assist",
          "10 Ally Help Time",
          "1500 Reinforcement Capacity",
          "440 Power"
        ]
      },
      2: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 90,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 10],
        effects: [
          "2 Ally Assist",
          "13 Ally Help Time",
          "3500 Reinforcement Capacity",
          "836 Power"
        ]
      },
      3: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 400,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 1, 0],
        effects: [
          "3 Ally Assist",
          "16 Ally Help Time",
          "5700 Reinforcement Capacity",
          "1430 Power"
        ]
      },
      4: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 900,
          stone: 180,
          iron: 0,
        },
        time: [0, 0, 2, 0],
        effects: [
          "4 Ally Assist",
          "19 Ally Help Time",
          "8000 Reinforcement Capacity",
          "2222 Power"
        ]
      },
      5: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 3800,
          stone: 760,
          iron: 0,
        },
        time: [0, 0, 6, 40],
        effects: [
          "5 Ally Assist",
          "22 Ally Help Time",
          "11500 Reinforcement Capacity",
          "3410 Power"
        ]
      },
      6: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 9600,
          stone: 1900,
          iron: 480,
        },
        time: [0, 0, 13, 20],
        effects: [
          "6 Ally Assist",
          "25 Ally Help Time",
          "15000 Reinforcement Capacity",
          "5192 Power"
        ]
      },
      7: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 34000,
          stone: 6900,
          iron: 1700,
        },
        time: [0, 0, 25, 0],
        effects: [
          "7 Ally Assist",
          "28 Ally Help Time",
          "19000 Reinforcement Capacity",
          "7766 Power"
        ]
      },
      8: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 63000,
          stone: 12000,
          iron: 3100,
        },
        time: [0, 0, 45, 0],
        effects: [
          "8 Ally Assist",
          "31 Ally Help Time",
          "24000 Reinforcement Capacity",
          "10340 Power"
        ]
      },
      9: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 130000,
          stone: 26000,
          iron: 6500,
        },
        time: [0, 2, 0, 0],
        effects: [
          "9 Ally Assist",
          "34 Ally Help Time",
          "29500 Reinforcement Capacity",
          "12914 Power"
        ]
      },
      10: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 230000,
          stone: 46000,
          iron: 11000,
        },
        time: [0, 3, 57, 30],
        effects: [
          "10 Ally Assist",
          "37 Ally Help Time",
          "35500 Reinforcement Capacity",
          "16654 Power"
        ]
      },
      11: {
        requirements: {
          town_center: 11
        },
        costs: {
          bread: 260000,
          wood: 260000,
          stone: 52000,
          iron: 13000,
        },
        time: [0, 4, 57, 0],
        effects: [
          "11 Ally Assist",
          "40 Ally Help Time",
          "43500 Reinforcement Capacity",
          "20394 Power"
        ]
      },
      12: {
        requirements: {
          town_center: 12
        },
        costs: {
          bread: 330000,
          wood: 330000,
          stone: 67000,
          iron: 16000,
        },
        time: [0, 5, 56, 0],
        effects: [
          "12 Ally Assist",
          "43 Ally Help Time",
          "52000 Reinforcement Capacity",
          "24134 Power"
        ]
      },
      13: {
        requirements: {
          town_center: 13
        },
        costs: {
          bread: 470000,
          wood: 470000,
          stone: 95000,
          iron: 23000,
        },
        time: [0, 7, 15, 30],
        effects: [
          "13 Ally Assist",
          "46 Ally Help Time",
          "62000 Reinforcement Capacity",
          "30448 Power"
        ]
      },
      14: {
        requirements: {
          town_center: 14
        },
        costs: {
          bread: 630000,
          wood: 630000,
          stone: 120000,
          iron: 31000,
        },
        time: [0, 9, 14, 0],
        effects: [
          "14 Ally Assist",
          "49 Ally Help Time",
          "73500 Reinforcement Capacity",
          "36762 Power"
        ]
      },
      15: {
        requirements: {
          town_center: 15
        },
        costs: {
          bread: 930000,
          wood: 930000,
          stone: 180000,
          iron: 46000,
        },
        time: [0, 11, 43, 30],
        effects: [
          "15 Ally Assist",
          "52 Ally Help Time",
          "87500 Reinforcement Capacity",
          "43076 Power"
        ]
      },
      16: {
        requirements: {
          town_center: 16
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 230000,
          iron: 59000,
        },
        time: [0, 19, 43, 20],
        effects: [
          "16 Ally Assist",
          "55 Ally Help Time",
          "105000 Reinforcement Capacity",
          "51964 Power"
        ]
      },
      17: {
        requirements: {
          town_center: 17
        },
        costs: {
          bread: 1800000,
          wood: 1800000,
          stone: 370000,
          iron: 93000,
        },
        time: [1, 0, 8, 0],
        effects: [
          "17 Ally Assist",
          "58 Ally Help Time",
          "120000 Reinforcement Capacity",
          "60852 Power"
        ]
      },
      18: {
        requirements: {
          town_center: 18
        },
        costs: {
          bread: 2500000,
          wood: 2500000,
          stone: 500000,
          iron: 120000,
        },
        time: [1, 4, 58, 0],
        effects: [
          "18 Ally Assist",
          "61 Ally Help Time",
          "140000 Reinforcement Capacity",
          "69740 Power"
        ]
      },
      19: {
        requirements: {
          town_center: 19
        },
        costs: {
          bread: 3100000,
          wood: 3100000,
          stone: 620000,
          iron: 150000,
        },
        time: [1, 19, 27, 0],
        effects: [
          "19 Ally Assist",
          "64 Ally Help Time",
          "165000 Reinforcement Capacity",
          "82368 Power"
        ]
      },
      20: {
        requirements: {
          town_center: 20
        },
        costs: {
          bread: 4300000,
          wood: 4300000,
          stone: 860000,
          iron: 210000,
        },
        time: [2, 6, 19, 0],
        effects: [
          "20 Ally Assist",
          "67 Ally Help Time",
          "195000 Reinforcement Capacity",
          "94996 Power"
        ]
      },
      21: {
        requirements: {
          town_center: 21
        },
        costs: {
          bread: 5400000,
          wood: 5400000,
          stone: 1000000,
          iron: 270000,
        },
        time: [2, 22, 36, 0],
        effects: [
          "21 Ally Assist",
          "70 Ally Help Time",
          "225000 Reinforcement Capacity",
          "107624 Power"
        ]
      },
      22: {
        requirements: {
          town_center: 22
        },
        costs: {
          bread: 7200000,
          wood: 7200000,
          stone: 1400000,
          iron: 360000,
        },
        time: [4, 9, 55, 0],
        effects: [
          "22 Ally Assist",
          "73 Ally Help Time",
          "260000 Reinforcement Capacity",
          "126566 Power"
        ]
      },
      23: {
        requirements: {
          town_center: 23
        },
        costs: {
          bread: 8900000,
          wood: 8900000,
          stone: 1700000,
          iron: 440000,
        },
        time: [6, 4, 17, 0],
        effects: [
          "23 Ally Assist",
          "76 Ally Help Time",
          "305000 Reinforcement Capacity",
          "145508 Power"
        ]
      },
      24: {
        requirements: {
          town_center: 24
        },
        costs: {
          bread: 12000000,
          wood: 12000000,
          stone: 2400000,
          iron: 600000,
        },
        time: [8, 15, 36, 0],
        effects: [
          "24 Ally Assist",
          "79 Ally Help Time",
          "350000 Reinforcement Capacity",
          "164450 Power"
        ]
      },
      25: {
        requirements: {
          town_center: 25
        },
        costs: {
          bread: 16000000,
          wood: 16000000,
          stone: 3200000,
          iron: 810000,
        },
        time: [12, 2, 38, 0],
        effects: [
          "25 Ally Assist",
          "82 Ally Help Time",
          "400000 Reinforcement Capacity",
          "183392 Power"
        ]
      },
      26: {
        requirements: {
          town_center: 26
        },
        costs: {
          bread: 21000000,
          wood: 21000000,
          stone: 4200000,
          iron: 1000000,
        },
        time: [13, 22, 14, 0],
        effects: [
          "26 Ally Assist",
          "85 Ally Help Time",
          "470000 Reinforcement Capacity",
          "211222 Power"
        ]
      },
      27: {
        requirements: {
          town_center: 27
        },
        costs: {
          bread: 29000000,
          wood: 29000000,
          stone: 5900000,
          iron: 1400000,
        },
        time: [16, 17, 5, 0],
        effects: [
          "27 Ally Assist",
          "88 Ally Help Time",
          "550000 Reinforcement Capacity",
          "239052 Power"
        ]
      },
      28: {
        requirements: {
          town_center: 28
        },
        costs: {
          bread: 39000000,
          wood: 39000000,
          stone: 7900000,
          iron: 1900000,
        },
        time: [19, 5, 15, 0],
        effects: [
          "28 Ally Assist",
          "91 Ally Help Time",
          "630000 Reinforcement Capacity",
          "266882 Power"
        ]
      },
      29: {
        requirements: {
          town_center: 29
        },
        costs: {
          bread: 49000000,
          wood: 49000000,
          stone: 9800000,
          iron: 2400000,
        },
        time: [22, 2, 26, 0],
        effects: [
          "29 Ally Assist",
          "94 Ally Help Time",
          "725000 Reinforcement Capacity",
          "294712 Power"
        ]
      },
      30: {
        requirements: {
          town_center: 30
        },
        costs: {
          bread: 60000000,
          wood: 60000000,
          stone: 12000000,
          iron: 3000000,
        },
        time: [26, 12, 32, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "840000 Reinforcement Capacity",
          "335172 Power"
        ]
      },
      31: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 13000000,
          wood: 13000000,
          stone: 2700000,
          iron: 670000,
          tgold: 33,
        },
        time: [4, 14, 52, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "845000 Reinforcement Capacity",
        ]
      },
      32: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 13000000,
          wood: 13000000,
          stone: 2700000,
          iron: 670000,
          tgold: 33,
        },
        time: [4, 14, 52, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "850000 Reinforcement Capacity",
        ]
      },
      33: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 13000000,
          wood: 13000000,
          stone: 2700000,
          iron: 670000,
          tgold: 33,
        },
        time: [4, 14, 52, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "855000 Reinforcement Capacity",
        ]
      },
      34: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 13000000,
          wood: 13000000,
          stone: 2700000,
          iron: 670000,
          tgold: 33,
        },
        time: [4, 14, 52, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "860000 Reinforcement Capacity",
        ]
      },
      35: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 13000000,
          wood: 13000000,
          stone: 2700000,
          iron: 670000,
          tgold: 33,
        },
        time: [4, 14, 52, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "865000 Reinforcement Capacity",
        ]
      },
      36: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 14000000,
          wood: 14000000,
          stone: 2900000,
          iron: 720000,
          tgold: 39,
        },
        time: [5, 22, 33, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "870000 Reinforcement Capacity",
        ]
      },
      37: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 14000000,
          wood: 14000000,
          stone: 2900000,
          iron: 720000,
          tgold: 39,
        },
        time: [5, 22, 33, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "875000 Reinforcement Capacity",
        ]
      },
      38: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 14000000,
          wood: 14000000,
          stone: 2900000,
          iron: 720000,
          tgold: 39,
        },
        time: [5, 22, 33, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "880000 Reinforcement Capacity",
        ]
      },
      39: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 14000000,
          wood: 14000000,
          stone: 2900000,
          iron: 720000,
          tgold: 39,
        },
        time: [5, 22, 33, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "885000 Reinforcement Capacity",
        ]
      },
      40: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 14000000,
          wood: 14000000,
          stone: 2900000,
          iron: 720000,
          tgold: 39,
        },
        time: [5, 22, 33, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "890000 Reinforcement Capacity",
        ]
      },
      41: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 15000000,
          wood: 15000000,
          stone: 3100000,
          iron: 790000,
          tgold: 59,
        },
        time: [7, 6, 14, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "895000 Reinforcement Capacity",
        ]
      },
      42: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 15000000,
          wood: 15000000,
          stone: 3100000,
          iron: 790000,
          tgold: 59,
        },
        time: [7, 6, 14, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "900000 Reinforcement Capacity",
        ]
      },
      43: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 15000000,
          wood: 15000000,
          stone: 3100000,
          iron: 790000,
          tgold: 59,
        },
        time: [7, 6, 14, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "905000 Reinforcement Capacity",
        ]
      },
      44: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 15000000,
          wood: 15000000,
          stone: 3100000,
          iron: 790000,
          tgold: 59,
        },
        time: [7, 6, 14, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "910000 Reinforcement Capacity",
        ]
      },
      45: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 15000000,
          wood: 15000000,
          stone: 3100000,
          iron: 790000,
          tgold: 59,
        },
        time: [7, 6, 14, 0],
        effects: [
          "30 Ally Assist",
          "97 Ally Help Time",
          "915000 Reinforcement Capacity",
        ]
      }
    }
  },

  barracks: {
    name: "Barracks",
    icon: "barracks.png",
    levels: {
      0: {
        requirements: {
          town_center: 0
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 0],
        effects: ["Unlocks Barracks"]
      },
      1: {
        requirements: {
          town_center: 7
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 2],
        effects: [
          "17 Traning Capacity",
          "0.3% Training Speed",
          "1 lvl Infantry",
          "400 Power"
        ]
      },
      2: {
        requirements: {
          town_center: 7
        },
        costs: {
          bread: 0,
          wood: 140,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 9],
        effects: [
          "22 Traning Capacity",
          "0.5% Training Speed",
          "760 Power"
        ]
      },
      3: {
        requirements: {
          town_center: 7
        },
        costs: {
          bread: 0,
          wood: 645,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 45],
        effects: [
          "26 Traning Capacity",
          "0.8% Training Speed",
          "1300 Power"
        ]
      },
      4: {
        requirements: {
          town_center: 7
        },
        costs: {
          bread: 0,
          wood: 1400,
          stone: 285,
          iron: 0,
        },
        time: [0, 0, 2, 5],
        effects: [
          "30 Traning Capacity",
          "1.0% Training Speed",
          "2 lvl Infantry",
          "2020 Power"
        ]
      },
      5: {
        requirements: {
          town_center: 7
        },
        costs: {
          bread: 0,
          wood: 6000,
          stone: 1200,
          iron: 0,
        },
        time: [0, 0, 4, 30],
        effects: [
          "35 Traning Capacity",
          "1.3% Training Speed",
          "3100 Power"
        ]
      },
      6: {
        requirements: {
          town_center: 7
        },
        costs: {
          bread: 0,
          wood: 15000,
          stone: 3000,
          iron: 765,
        },
        time: [0, 0, 9, 0],
        effects: [
          "39 Traning Capacity",
          "1.6% Training Speed",
          "4720 Power"
        ]
      },
      7: {
        requirements: {
          town_center: 7
        },
        costs: {
          bread: 0,
          wood: 55000,
          stone: 11000,
          iron: 2700,
        },
        time: [0, 0, 18, 0],
        effects: [
          "43 Traning Capacity",
          "1.8% Training Speed",
          "3 lvl Infantry",
          "7060 Power"
        ]
      },
      8: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 100000,
          stone: 20000,
          iron: 5000,
        },
        time: [0, 0, 27, 0],
        effects: [
          "48 Traning Capacity",
          "2.1% Training Speed",
          "9400 Power"
        ]
      },
      9: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 200000,
          stone: 41000,
          iron: 10000,
        },
        time: [0, 0, 40, 30],
        effects: [
          "52 Traning Capacity",
          "2.4% Training Speed",
          "11740 Power"
        ]
      },
      10: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 360000,
          stone: 73000,
          iron: 18000,
        },
        time: [0, 0, 54, 0],
        effects: [
          "56 Traning Capacity",
          "2.6% Training Speed",
          "15140 Power"
        ]
      },
      11: {
        requirements: {
          town_center: 11
        },
        costs: {
          bread: 460000,
          wood: 460000,
          stone: 92000,
          iron: 23000,
        },
        time: [0, 1, 7, 30],
        effects: [
          "61 Traning Capacity",
          "2.9% Training Speed",
          "4 lvl Infantry",
          "18540 Power"
        ]
      },
      12: {
        requirements: {
          town_center: 12
        },
        costs: {
          bread: 580000,
          wood: 580000,
          stone: 110000,
          iron: 29000,
        },
        time: [0, 1, 21, 0],
        effects: [
          "65 Traning Capacity",
          "3.2% Training Speed",
          "21940 Power"
        ]
      },
      13: {
        requirements: {
          town_center: 13
        },
        costs: {
          bread: 830000,
          wood: 830000,
          stone: 160000,
          iron: 41000,
        },
        time: [0, 1, 39, 0],
        effects: [
          "69 Traning Capacity",
          "3.4% Training Speed",
          "5 lvl Infantry",
          "27680 Power",
          "Troop Promotion"
        ]
      },
      14: {
        requirements: {
          town_center: 14
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 220000,
          iron: 55000,
        },
        time: [0, 2, 6, 0],
        effects: [
          "76 Traning Capacity",
          "3.7% Training Speed",
          "33420 Power"
        ]
      },
      15: {
        requirements: {
          town_center: 15
        },
        costs: {
          bread: 1600000,
          wood: 1600000,
          stone: 320000,
          iron: 81000,
        },
        time: [0, 2, 42, 0],
        effects: [
          "84 Traning Capacity",
          "4.0% Training Speed",
          "39160 Power"
        ]
      },
      16: {
        requirements: {
          town_center: 16
        },
        costs: {
          bread: 2000000,
          wood: 2000000,
          stone: 410000,
          iron: 100000,
        },
        time: [0, 4, 34, 0],
        effects: [
          "92 Traning Capacity",
          "4.2% Training Speed",
          "6 lvl Infantry",
          "47240 Power"
        ]
      },
      17: {
        requirements: {
          town_center: 17
        },
        costs: {
          bread: 3200000,
          wood: 3200000,
          stone: 650000,
          iron: 160000,
        },
        time: [0, 5, 29, 0],
        effects: [
          "101 Traning Capacity",
          "4.5% Training Speed",
          "55320 Power"
        ]
      },
      18: {
        requirements: {
          town_center: 18
        },
        costs: {
          bread: 4300000,
          wood: 4300000,
          stone: 870000,
          iron: 210000,
        },
        time: [0, 6, 35, 0],
        effects: [
          "109 Traning Capacity",
          "4.8% Training Speed",
          "63400 Power"
        ]
      },
      19: {
        requirements: {
          town_center: 19
        },
        costs: {
          bread: 5400000,
          wood: 5400000,
          stone: 1000000,
          iron: 270000,
        },
        time: [0, 9, 52, 0],
        effects: [
          "117 Traning Capacity",
          "5.0% Training Speed",
          "7 lvl Infantry",
          "74880 Power"
        ]
      },
      20: {
        requirements: {
          town_center: 20
        },
        costs: {
          bread: 7500000,
          wood: 7500000,
          stone: 1500000,
          iron: 370000,
        },
        time: [0, 12, 20, 30],
        effects: [
          "126 Traning Capacity",
          "5.3% Training Speed",
          "86360 Power"
        ]
      },
      21: {
        requirements: {
          town_center: 21
        },
        costs: {
          bread: 9500000,
          wood: 9500000,
          stone: 1900000,
          iron: 470000,
        },
        time: [0, 16, 2, 30],
        effects: [
          "134 Traning Capacity",
          "5.6% Training Speed",
          "97840 Power"
        ]
      },
      22: {
        requirements: {
          town_center: 22
        },
        costs: {
          bread: 12000000,
          wood: 12000000,
          stone: 2500000,
          iron: 630000,
        },
        time: [1, 0, 4, 0],
        effects: [
          "142 Traning Capacity",
          "5.8% Training Speed",
          "8 lvl Infantry",
          "115060 Power"
        ]
      },
      23: {
        requirements: {
          town_center: 23
        },
        costs: {
          bread: 15000000,
          wood: 15000000,
          stone: 3100000,
          iron: 780000,
        },
        time: [1, 9, 42, 0],
        effects: [
          "151 Traning Capacity",
          "6.1% Training Speed",
          "132280 Power"
        ]
      },
      24: {
        requirements: {
          town_center: 24
        },
        costs: {
          bread: 21000000,
          wood: 21000000,
          stone: 4200000,
          iron: 1000000,
        },
        time: [1, 23, 11, 0],
        effects: [
          "159 Traning Capacity",
          "6.4% Training Speed",
          "149500 Power"
        ]
      },
      25: {
        requirements: {
          town_center: 25
        },
        costs: {
          bread: 28000000,
          wood: 28000000,
          stone: 5700000,
          iron: 1400000,
        },
        time: [2, 18, 3, 0],
        effects: [
          "167 Traning Capacity",
          "6.7% Training Speed",
          "166720 Power"
        ]
      },
      26: {
        requirements: {
          town_center: 26
        },
        costs: {
          bread: 36000000,
          wood: 36000000,
          stone: 7300000,
          iron: 1800000,
        },
        time: [3, 3, 57, 0],
        effects: [
          "176 Traning Capacity",
          "6.9% Training Speed",
          "9 lvl Infantry",
          "192020 Power"
        ]
      },
      27: {
        requirements: {
          town_center: 27
        },
        costs: {
          bread: 52000000,
          wood: 52000000,
          stone: 10000000,
          iron: 2600000,
        },
        time: [3, 19, 9, 0],
        effects: [
          "184 Traning Capacity",
          "7.2% Training Speed",
          "217320 Power"
        ]
      },
      28: {
        requirements: {
          town_center: 28
        },
        costs: {
          bread: 69000000,
          wood: 69000000,
          stone: 13000000,
          iron: 3400000,
        },
        time: [4, 8, 49, 0],
        effects: [
          "192 Traning Capacity",
          "7.4% Training Speed",
          "242620 Power"
        ]
      },
      29: {
        requirements: {
          town_center: 29
        },
        costs: {
          bread: 86000000,
          wood: 86000000,
          stone: 17000000,
          iron: 4300000,
        },
        time: [5, 0, 33, 0],
        effects: [
          "201 Traning Capacity",
          "7.7% Training Speed",
          "267920 Power"
        ]
      },
      30: {
        requirements: {
          town_center: 30
        },
        costs: {
          bread: 100000000,
          wood: 100000000,
          stone: 21000000,
          iron: 5800000,
        },
        time: [6, 0, 40, 0],
        effects: [
          "209 Traning Capacity",
          "8.0% Training Speed",
          "10 lvl Infantry",
          "304700 Power"
        ]
      },
      31: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "214 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      32: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "219 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      33: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "224 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      34: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "229 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      35: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "234 Traning Capacity",
          "8.3% Training Speed",
          "True Gold 1 Troops"
        ]
      },
      36: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "239 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      37: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "244 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      38: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "249 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      39: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "254 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      40: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "259 Traning Capacity",
          "8.6% Training Speed",
          "True Gold 2 Troops"
        ]
      },
      41: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "264 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      42: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "269 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      43: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "274 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      44: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "279 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      45: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "284 Traning Capacity",
          "8.9% Training Speed",
          "True Gold 3 Troops"
        ]
      }
    }
  },

  range: {
    name: "Range",
    icon: "range.png",
    levels: {
      0: {
        requirements: {
          town_center: 0
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 0],
        effects: ["Unlocks Range"]
      },
      1: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 2],
        effects: [
          "17 Traning Capacity",
          "0.3% Training Speed",
          "1 lvl Archers",
          "400 Power"
        ]
      },
      2: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 140,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 9],
        effects: [
          "22 Traning Capacity",
          "0.5% Training Speed",
          "760 Power"
        ]
      },
      3: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 645,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 45],
        effects: [
          "26 Traning Capacity",
          "0.8% Training Speed",
          "1300 Power"
        ]
      },
      4: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 1400,
          stone: 285,
          iron: 0,
        },
        time: [0, 0, 2, 5],
        effects: [
          "30 Traning Capacity",
          "1.0% Training Speed",
          "2 lvl Archers",
          "2020 Power"
        ]
      },
      5: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 6000,
          stone: 1200,
          iron: 0,
        },
        time: [0, 0, 4, 30],
        effects: [
          "35 Traning Capacity",
          "1.3% Training Speed",
          "3100 Power"
        ]
      },
      6: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 15000,
          stone: 3000,
          iron: 765,
        },
        time: [0, 0, 9, 0],
        effects: [
          "39 Traning Capacity",
          "1.6% Training Speed",
          "4720 Power"
        ]
      },
      7: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 55000,
          stone: 11000,
          iron: 2700,
        },
        time: [0, 0, 18, 0],
        effects: [
          "43 Traning Capacity",
          "1.8% Training Speed",
          "3 lvl Archers",
          "7060 Power"
        ]
      },
      8: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 100000,
          stone: 20000,
          iron: 5000,
        },
        time: [0, 0, 27, 0],
        effects: [
          "48 Traning Capacity",
          "2.1% Training Speed",
          "9400 Power"
        ]
      },
      9: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 200000,
          stone: 41000,
          iron: 10000,
        },
        time: [0, 0, 40, 30],
        effects: [
          "52 Traning Capacity",
          "2.4% Training Speed",
          "11740 Power"
        ]
      },
      10: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 360000,
          stone: 73000,
          iron: 18000,
        },
        time: [0, 0, 54, 0],
        effects: [
          "56 Traning Capacity",
          "2.6% Training Speed",
          "15140 Power"
        ]
      },
      11: {
        requirements: {
          town_center: 11
        },
        costs: {
          bread: 460000,
          wood: 460000,
          stone: 92000,
          iron: 23000,
        },
        time: [0, 1, 7, 30],
        effects: [
          "61 Traning Capacity",
          "2.9% Training Speed",
          "4 lvl Archers",
          "18540 Power"
        ]
      },
      12: {
        requirements: {
          town_center: 12
        },
        costs: {
          bread: 580000,
          wood: 580000,
          stone: 110000,
          iron: 29000,
        },
        time: [0, 1, 21, 0],
        effects: [
          "65 Traning Capacity",
          "3.2% Training Speed",
          "21940 Power"
        ]
      },
      13: {
        requirements: {
          town_center: 13
        },
        costs: {
          bread: 830000,
          wood: 830000,
          stone: 160000,
          iron: 41000,
        },
        time: [0, 1, 39, 0],
        effects: [
          "69 Traning Capacity",
          "3.4% Training Speed",
          "5 lvl Archers",
          "27680 Power",
          "Troop Promotion"
        ]
      },
      14: {
        requirements: {
          town_center: 14
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 220000,
          iron: 55000,
        },
        time: [0, 2, 6, 0],
        effects: [
          "76 Traning Capacity",
          "3.7% Training Speed",
          "33420 Power"
        ]
      },
      15: {
        requirements: {
          town_center: 15
        },
        costs: {
          bread: 1600000,
          wood: 1600000,
          stone: 320000,
          iron: 81000,
        },
        time: [0, 2, 42, 0],
        effects: [
          "84 Traning Capacity",
          "4.0% Training Speed",
          "39160 Power"
        ]
      },
      16: {
        requirements: {
          town_center: 16
        },
        costs: {
          bread: 2000000,
          wood: 2000000,
          stone: 410000,
          iron: 100000,
        },
        time: [0, 4, 34, 0],
        effects: [
          "92 Traning Capacity",
          "4.2% Training Speed",
          "6 lvl Archers",
          "47240 Power"
        ]
      },
      17: {
        requirements: {
          town_center: 17
        },
        costs: {
          bread: 3200000,
          wood: 3200000,
          stone: 650000,
          iron: 160000,
        },
        time: [0, 5, 29, 0],
        effects: [
          "101 Traning Capacity",
          "4.5% Training Speed",
          "55320 Power"
        ]
      },
      18: {
        requirements: {
          town_center: 18
        },
        costs: {
          bread: 4300000,
          wood: 4300000,
          stone: 870000,
          iron: 210000,
        },
        time: [0, 6, 35, 0],
        effects: [
          "109 Traning Capacity",
          "4.8% Training Speed",
          "63400 Power"
        ]
      },
      19: {
        requirements: {
          town_center: 19
        },
        costs: {
          bread: 5400000,
          wood: 5400000,
          stone: 1000000,
          iron: 270000,
        },
        time: [0, 9, 52, 0],
        effects: [
          "117 Traning Capacity",
          "5.0% Training Speed",
          "7 lvl Archers",
          "74880 Power"
        ]
      },
      20: {
        requirements: {
          town_center: 20
        },
        costs: {
          bread: 7500000,
          wood: 7500000,
          stone: 1500000,
          iron: 370000,
        },
        time: [0, 12, 20, 30],
        effects: [
          "126 Traning Capacity",
          "5.3% Training Speed",
          "86360 Power"
        ]
      },
      21: {
        requirements: {
          town_center: 21
        },
        costs: {
          bread: 9500000,
          wood: 9500000,
          stone: 1900000,
          iron: 470000,
        },
        time: [0, 16, 2, 30],
        effects: [
          "134 Traning Capacity",
          "5.6% Training Speed",
          "97840 Power"
        ]
      },
      22: {
        requirements: {
          town_center: 22
        },
        costs: {
          bread: 12000000,
          wood: 12000000,
          stone: 2500000,
          iron: 630000,
        },
        time: [1, 0, 4, 0],
        effects: [
          "142 Traning Capacity",
          "5.8% Training Speed",
          "8 lvl Archers",
          "115060 Power"
        ]
      },
      23: {
        requirements: {
          town_center: 23
        },
        costs: {
          bread: 15000000,
          wood: 15000000,
          stone: 3100000,
          iron: 780000,
        },
        time: [1, 9, 42, 0],
        effects: [
          "151 Traning Capacity",
          "6.1% Training Speed",
          "132280 Power"
        ]
      },
      24: {
        requirements: {
          town_center: 24
        },
        costs: {
          bread: 21000000,
          wood: 21000000,
          stone: 4200000,
          iron: 1000000,
        },
        time: [1, 23, 11, 0],
        effects: [
          "159 Traning Capacity",
          "6.4% Training Speed",
          "149500 Power"
        ]
      },
      25: {
        requirements: {
          town_center: 25
        },
        costs: {
          bread: 28000000,
          wood: 28000000,
          stone: 5700000,
          iron: 1400000,
        },
        time: [2, 18, 3, 0],
        effects: [
          "167 Traning Capacity",
          "6.7% Training Speed",
          "166720 Power"
        ]
      },
      26: {
        requirements: {
          town_center: 26
        },
        costs: {
          bread: 36000000,
          wood: 36000000,
          stone: 7300000,
          iron: 1800000,
        },
        time: [3, 3, 57, 0],
        effects: [
          "176 Traning Capacity",
          "6.9% Training Speed",
          "9 lvl Archers",
          "192020 Power"
        ]
      },
      27: {
        requirements: {
          town_center: 27
        },
        costs: {
          bread: 52000000,
          wood: 52000000,
          stone: 10000000,
          iron: 2600000,
        },
        time: [3, 19, 9, 0],
        effects: [
          "184 Traning Capacity",
          "7.2% Training Speed",
          "217320 Power"
        ]
      },
      28: {
        requirements: {
          town_center: 28
        },
        costs: {
          bread: 69000000,
          wood: 69000000,
          stone: 13000000,
          iron: 3400000,
        },
        time: [4, 8, 49, 0],
        effects: [
          "192 Traning Capacity",
          "7.4% Training Speed",
          "242620 Power"
        ]
      },
      29: {
        requirements: {
          town_center: 29
        },
        costs: {
          bread: 86000000,
          wood: 86000000,
          stone: 17000000,
          iron: 4300000,
        },
        time: [5, 0, 33, 0],
        effects: [
          "201 Traning Capacity",
          "7.7% Training Speed",
          "267920 Power"
        ]
      },
      30: {
        requirements: {
          town_center: 30
        },
        costs: {
          bread: 100000000,
          wood: 100000000,
          stone: 21000000,
          iron: 5800000,
        },
        time: [6, 0, 40, 0],
        effects: [
          "209 Traning Capacity",
          "8.0% Training Speed",
          "10 lvl Archers",
          "304700 Power"
        ]
      },
      31: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "214 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      32: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "219 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      33: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "224 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      34: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "229 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      35: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "234 Traning Capacity",
          "8.3% Training Speed",
          "True Gold 1 Troops"
        ]
      },
      36: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "239 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      37: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "244 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      38: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "249 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      39: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "254 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      40: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "259 Traning Capacity",
          "8.6% Training Speed",
          "True Gold 2 Troops"
        ]
      },
      41: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "264 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      42: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "269 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      43: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "274 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      44: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "279 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      45: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "284 Traning Capacity",
          "8.9% Training Speed",
          "True Gold 3 Troops"
        ]
      }
    }
  },

  stable: {
    name: "Stable",
    icon: "stable.png",
    levels: {
      0: {
        requirements: {
          town_center: 0
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 0],
        effects: ["Unlocks Stable"]
      },
      1: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 2],
        effects: [
          "17 Traning Capacity",
          "0.3% Training Speed",
          "1 lvl Cavalry",
          "400 Power"
        ]
      },
      2: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 140,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 9],
        effects: [
          "22 Traning Capacity",
          "0.5% Training Speed",
          "760 Power"
        ]
      },
      3: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 645,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 45],
        effects: [
          "26 Traning Capacity",
          "0.8% Training Speed",
          "1300 Power"
        ]
      },
      4: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 1400,
          stone: 285,
          iron: 0,
        },
        time: [0, 0, 2, 15],
        effects: [
          "30 Traning Capacity",
          "1.0% Training Speed",
          "2 lvl Cavalry",
          "2020 Power"
        ]
      },
      5: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 6000,
          stone: 1200,
          iron: 0,
        },
        time: [0, 0, 4, 30],
        effects: [
          "35 Traning Capacity",
          "1.3% Training Speed",
          "3100 Power"
        ]
      },
      6: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 15000,
          stone: 3000,
          iron: 765,
        },
        time: [0, 0, 9, 0],
        effects: [
          "39 Traning Capacity",
          "1.6% Training Speed",
          "4720 Power"
        ]
      },
      7: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 55000,
          stone: 11000,
          iron: 2700,
        },
        time: [0, 0, 18, 0],
        effects: [
          "43 Traning Capacity",
          "1.8% Training Speed",
          "3 lvl Cavalry",
          "7060 Power"
        ]
      },
      8: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 100000,
          stone: 20000,
          iron: 5000,
        },
        time: [0, 0, 27, 0],
        effects: [
          "48 Traning Capacity",
          "2.1% Training Speed",
          "9400 Power"
        ]
      },
      9: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 200000,
          stone: 41000,
          iron: 10000,
        },
        time: [0, 0, 40, 30],
        effects: [
          "52 Traning Capacity",
          "2.4% Training Speed",
          "11740 Power"
        ]
      },
      10: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 360000,
          stone: 73000,
          iron: 18000,
        },
        time: [0, 0, 54, 0],
        effects: [
          "56 Traning Capacity",
          "2.6% Training Speed",
          "15140 Power"
        ]
      },
      11: {
        requirements: {
          town_center: 11
        },
        costs: {
          bread: 460000,
          wood: 460000,
          stone: 92000,
          iron: 23000,
        },
        time: [0, 1, 7, 30],
        effects: [
          "61 Traning Capacity",
          "2.9% Training Speed",
          "4 lvl Cavalry",
          "18540 Power"
        ]
      },
      12: {
        requirements: {
          town_center: 12
        },
        costs: {
          bread: 580000,
          wood: 580000,
          stone: 110000,
          iron: 29000,
        },
        time: [0, 1, 21, 0],
        effects: [
          "65 Traning Capacity",
          "3.2% Training Speed",
          "21940 Power"
        ]
      },
      13: {
        requirements: {
          town_center: 13
        },
        costs: {
          bread: 830000,
          wood: 830000,
          stone: 160000,
          iron: 41000,
        },
        time: [0, 1, 39, 0],
        effects: [
          "69 Traning Capacity",
          "3.4% Training Speed",
          "5 lvl Cavalry",
          "27680 Power",
          "Troop Promotion"
        ]
      },
      14: {
        requirements: {
          town_center: 14
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 220000,
          iron: 55000,
        },
        time: [0, 2, 6, 0],
        effects: [
          "76 Traning Capacity",
          "3.7% Training Speed",
          "33420 Power"
        ]
      },
      15: {
        requirements: {
          town_center: 15
        },
        costs: {
          bread: 1600000,
          wood: 1600000,
          stone: 320000,
          iron: 81000,
        },
        time: [0, 2, 42, 0],
        effects: [
          "84 Traning Capacity",
          "4.0% Training Speed",
          "39160 Power"
        ]
      },
      16: {
        requirements: {
          town_center: 16
        },
        costs: {
          bread: 2000000,
          wood: 2000000,
          stone: 410000,
          iron: 100000,
        },
        time: [0, 4, 34, 0],
        effects: [
          "92 Traning Capacity",
          "4.2% Training Speed",
          "6 lvl Cavalry",
          "47240 Power"
        ]
      },
      17: {
        requirements: {
          town_center: 17
        },
        costs: {
          bread: 3200000,
          wood: 3200000,
          stone: 650000,
          iron: 160000,
        },
        time: [0, 5, 29, 0],
        effects: [
          "101 Traning Capacity",
          "4.5% Training Speed",
          "55320 Power"
        ]
      },
      18: {
        requirements: {
          town_center: 18
        },
        costs: {
          bread: 4300000,
          wood: 4300000,
          stone: 870000,
          iron: 210000,
        },
        time: [0, 6, 35, 0],
        effects: [
          "109 Traning Capacity",
          "4.8% Training Speed",
          "63400 Power"
        ]
      },
      19: {
        requirements: {
          town_center: 19
        },
        costs: {
          bread: 5400000,
          wood: 5400000,
          stone: 1000000,
          iron: 270000,
        },
        time: [0, 9, 52, 30],
        effects: [
          "117 Traning Capacity",
          "5.0% Training Speed",
          "7 lvl Cavalry",
          "74880 Power"
        ]
      },
      20: {
        requirements: {
          town_center: 20
        },
        costs: {
          bread: 7500000,
          wood: 7500000,
          stone: 1500000,
          iron: 370000,
        },
        time: [0, 12, 20, 30],
        effects: [
          "126 Traning Capacity",
          "5.3% Training Speed",
          "86360 Power"
        ]
      },
      21: {
        requirements: {
          town_center: 21
        },
        costs: {
          bread: 9500000,
          wood: 9500000,
          stone: 1900000,
          iron: 470000,
        },
        time: [0, 16, 2, 30],
        effects: [
          "134 Traning Capacity",
          "5.6% Training Speed",
          "97840 Power"
        ]
      },
      22: {
        requirements: {
          town_center: 22
        },
        costs: {
          bread: 12000000,
          wood: 12000000,
          stone: 2500000,
          iron: 630000,
        },
        time: [1, 0, 4, 0],
        effects: [
          "142 Traning Capacity",
          "5.8% Training Speed",
          "8 lvl Cavalry",
          "115060 Power"
        ]
      },
      23: {
        requirements: {
          town_center: 23
        },
        costs: {
          bread: 15000000,
          wood: 15000000,
          stone: 3100000,
          iron: 780000,
        },
        time: [1, 9, 42, 0],
        effects: [
          "151 Traning Capacity",
          "6.1% Training Speed",
          "132280 Power"
        ]
      },
      24: {
        requirements: {
          town_center: 24
        },
        costs: {
          bread: 21000000,
          wood: 21000000,
          stone: 4200000,
          iron: 1000000,
        },
        time: [1, 23, 11, 0],
        effects: [
          "159 Traning Capacity",
          "6.4% Training Speed",
          "149500 Power"
        ]
      },
      25: {
        requirements: {
          town_center: 25
        },
        costs: {
          bread: 28000000,
          wood: 28000000,
          stone: 5700000,
          iron: 1400000,
        },
        time: [2, 18, 3, 0],
        effects: [
          "167 Traning Capacity",
          "6.7% Training Speed",
          "166720 Power"
        ]
      },
      26: {
        requirements: {
          town_center: 26
        },
        costs: {
          bread: 36000000,
          wood: 36000000,
          stone: 7300000,
          iron: 1800000,
        },
        time: [3, 3, 57, 0],
        effects: [
          "176 Traning Capacity",
          "6.9% Training Speed",
          "9 lvl Cavalry",
          "192020 Power"
        ]
      },
      27: {
        requirements: {
          town_center: 27
        },
        costs: {
          bread: 52000000,
          wood: 52000000,
          stone: 10000000,
          iron: 2600000,
        },
        time: [3, 19, 9, 0],
        effects: [
          "184 Traning Capacity",
          "7.2% Training Speed",
          "217320 Power"
        ]
      },
      28: {
        requirements: {
          town_center: 28
        },
        costs: {
          bread: 69000000,
          wood: 69000000,
          stone: 13000000,
          iron: 3400000,
        },
        time: [4, 8, 49, 0],
        effects: [
          "192 Traning Capacity",
          "7.4% Training Speed",
          "242620 Power"
        ]
      },
      29: {
        requirements: {
          town_center: 29
        },
        costs: {
          bread: 86000000,
          wood: 86000000,
          stone: 17000000,
          iron: 4300000,
        },
        time: [5, 0, 33, 0],
        effects: [
          "201 Traning Capacity",
          "7.7% Training Speed",
          "267920 Power"
        ]
      },
      30: {
        requirements: {
          town_center: 30
        },
        costs: {
          bread: 100000000,
          wood: 100000000,
          stone: 21000000,
          iron: 5200000,
        },
        time: [6, 0, 40, 0],
        effects: [
          "209 Traning Capacity",
          "8.0% Training Speed",
          "10 lvl Cavalry",
          "304700 Power"
        ]
      },
      31: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "214 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      32: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "219 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      33: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "224 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      34: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "229 Traning Capacity",
          "8.0% Training Speed"
        ]
      },
      35: {
        requirements: {
          town_center: 31
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 59,
        },
        time: [1, 1, 12, 0],
        effects: [
          "234 Traning Capacity",
          "8.3% Training Speed",
          "True Gold 1 Troops"
        ]
      },
      36: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "239 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      37: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "244 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      38: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "249 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      39: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "254 Traning Capacity",
          "8.3% Training Speed"
        ]
      },
      40: {
        requirements: {
          town_center: 32
        },
        costs: {
          bread: 25000000,
          wood: 25000000,
          stone: 5000000,
          iron: 1200000,
          tgold: 71,
        },
        time: [1, 8, 24, 0],
        effects: [
          "259 Traning Capacity",
          "8.6% Training Speed",
          "True Gold 2 Troops"
        ]
      },
      41: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "264 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      42: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "269 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      43: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "274 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      44: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "279 Traning Capacity",
          "8.6% Training Speed"
        ]
      },
      45: {
        requirements: {
          town_center: 33
        },
        costs: {
          bread: 27000000,
          wood: 27000000,
          stone: 5500000,
          iron: 1300000,
          tgold: 107,
        },
        time: [1, 15, 36, 0],
        effects: [
          "284 Traning Capacity",
          "8.9% Training Speed",
          "True Gold 3 Troops"
        ]
      }
    }
  },

  command_center: {
    name: "Command Center",
    icon: "command-center.png",
    levels: {
      0: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 0],
        effects: ["Unlocks Command Center"]
      },
      1: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 80,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 2],
        effects: [
          "1500 Rally Capacity",
          "400 Troop Deployment Capacity",
          "280 Power"
        ]
      },
      2: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 125,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 8],
        effects: [
          "3500 Rally Capacity",
          "700 Troop Deployment Capacity",
          "532 Power"
        ]
      },
      3: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 565,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 35],
        effects: [
          "5700 Rally Capacity",
          "1000 Troop Deployment Capacity",
          "910 Power"
        ]
      },
      4: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 1200,
          stone: 250,
          iron: 0,
        },
        time: [0, 0, 1, 45],
        effects: [
          "8000 Rally Capacity",
          "1500 Troop Deployment Capacity",
          "1414 Power"
        ]
      },
      5: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 5300,
          stone: 1000,
          iron: 0,
        },
        time: [0, 0, 3, 35],
        effects: [
          "11500 Rally Capacity",
          "1800 Troop Deployment Capacity",
          "2170 Power"
        ]
      },
      6: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 13000,
          stone: 2600,
          iron: 670,
        },
        time: [0, 0, 7, 10],
        effects: [
          "15000 Rally Capacity",
          "2800 Troop Deployment Capacity",
          "3304 Power"
        ]
      },
      7: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 48000,
          stone: 9600,
          iron: 2400,
        },
        time: [0, 0, 14, 0],
        effects: [
          "19000 Rally Capacity",
          "3800 Troop Deployment Capacity",
          "4492 Power"
        ]
      },
      8: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 88000,
          stone: 17000,
          iron: 4400,
        },
        time: [0, 0, 21, 30],
        effects: [
          "24000 Rally Capacity",
          "5000 Troop Deployment Capacity",
          "6580 Power"
        ]
      },
      9: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 180000,
          stone: 36000,
          iron: 9100,
        },
        time: [0, 0, 32, 0],
        effects: [
          "29500 Rally Capacity",
          "6500 Troop Deployment Capacity",
          "8218 Power"
        ]
      },
      10: {
        requirements: {
          embassy: 10
        },
        costs: {
          bread: 0,
          wood: 320000,
          stone: 64000,
          iron: 16000,
        },
        time: [0, 1, 0, 0],
        effects: [
          "35500 Rally Capacity",
          "8000 Troop Deployment Capacity",
          "10598 Power"
        ]
      },
      11: {
        requirements: {
          embassy: 11
        },
        costs: {
          bread: 390000,
          wood: 390000,
          stone: 79000,
          iron: 19000,
        },
        time: [0, 0, 54, 0],
        effects: [
          "43500 Rally Capacity",
          "10500 Troop Deployment Capacity",
          "15358 Power"
        ]
      },
      12: {
        requirements: {
          embassy: 12
        },
        costs: {
          bread: 500000,
          wood: 500000,
          stone: 100000,
          iron: 25000,
        },
        time: [0, 1, 4, 30],
        effects: [
          "52000 Rally Capacity",
          "13000 Troop Deployment Capacity",
          "19376 Power"
        ]
      },
      13: {
        requirements: {
          embassy: 13
        },
        costs: {
          bread: 710000,
          wood: 710000,
          stone: 140000,
          iron: 35000,
        },
        time: [0, 1, 19, 0],
        effects: [
          "62000 Rally Capacity",
          "16000 Troop Deployment Capacity",
          "23394 Power"
        ]
      },
      14: {
        requirements: {
          embassy: 14
        },
        costs: {
          bread: 940000,
          wood: 940000,
          stone: 180000,
          iron: 47000,
        },
        time: [0, 1, 40, 30],
        effects: [
          "73500 Rally Capacity",
          "19000 Troop Deployment Capacity",
          "27412 Power"
        ]
      },
      15: {
        requirements: {
          embassy: 15
        },
        costs: {
          bread: 1300000,
          wood: 1300000,
          stone: 270000,
          iron: 69000,
        },
        time: [0, 2, 9, 30],
        effects: [
          "87500 Rally Capacity",
          "22000 Troop Deployment Capacity",
          "33068 Power"
        ]
      },
      16: {
        requirements: {
          embassy: 16
        },
        costs: {
          bread: 1700000,
          wood: 1700000,
          stone: 350000,
          iron: 89000,
        },
        time: [0, 3, 39, 0],
        effects: [
          "105000 Rally Capacity",
          "27000 Troop Deployment Capacity",
          "38724 Power"
        ]
      },
      17: {
        requirements: {
          embassy: 17
        },
        costs: {
          bread: 2700000,
          wood: 2700000,
          stone: 550000,
          iron: 130000,
        },
        time: [0, 4, 23, 0],
        effects: [
          "120000 Rally Capacity",
          "32000 Troop Deployment Capacity",
          "38724 Power"
        ]
      },
      18: {
        requirements: {
          embassy: 18
        },
        costs: {
          bread: 3700000,
          wood: 3700000,
          stone: 750000,
          iron: 180000,
        },
        time: [0, 5, 16, 0],
        effects: [
          "140000 Rally Capacity",
          "34000 Troop Deployment Capacity",
          "44380 Power"
        ]
      },
      19: {
        requirements: {
          embassy: 19
        },
        costs: {
          bread: 4700000,
          wood: 4700000,
          stone: 940000,
          iron: 230000,
        },
        time: [0, 7, 54, 0],
        effects: [
          "165000 Rally Capacity",
          "36000 Troop Deployment Capacity",
          "52416 Power"
        ]
      },
      20: {
        requirements: {
          embassy: 20
        },
        costs: {
          bread: 6400000,
          wood: 6400000,
          stone: 1200000,
          iron: 320000,
        },
        time: [0, 9, 52, 0],
        effects: [
          "195000 Rally Capacity",
          "38000 Troop Deployment Capacity",
          "60452 Power"
        ]
      },
      21: {
        requirements: {
          embassy: 21
        },
        costs: {
          bread: 8100000,
          wood: 8100000,
          stone: 1600000,
          iron: 400000,
        },
        time: [0, 12, 50, 0],
        effects: [
          "225000 Rally Capacity",
          "40500 Troop Deployment Capacity",
          "68488 Power"
        ]
      },
      22: {
        requirements: {
          embassy: 22
        },
        costs: {
          bread: 10000000,
          wood: 10000000,
          stone: 2100000,
          iron: 540000,
        },
        time: [0, 19, 15, 30],
        effects: [
          "260000 Rally Capacity",
          "43000 Troop Deployment Capacity",
          "80542 Power"
        ]
      },
      23: {
        requirements: {
          embassy: 23
        },
        costs: {
          bread: 13000000,
          wood: 13000000,
          stone: 2600000,
          iron: 670000,
        },
        time: [1, 2, 57, 0],
        effects: [
          "305000 Rally Capacity",
          "46000 Troop Deployment Capacity",
          "92596 Power"
        ]
      },
      24: {
        requirements: {
          embassy: 24
        },
        costs: {
          bread: 18000000,
          wood: 18000000,
          stone: 3600000,
          iron: 900000,
        },
        time: [1, 13, 44, 0],
        effects: [
          "350000 Rally Capacity",
          "48500 Troop Deployment Capacity",
          "104650 Power"
        ]
      },
      25: {
        requirements: {
          embassy: 25
        },
        costs: {
          bread: 24000000,
          wood: 24000000,
          stone: 4900000,
          iron: 1200000,
        },
        time: [2, 4, 50, 0],
        effects: [
          "400000 Rally Capacity",
          "52000 Troop Deployment Capacity",
          "116704 Power"
        ]
      },
      26: {
        requirements: {
          embassy: 26
        },
        costs: {
          bread: 31000000,
          wood: 31000000,
          stone: 6300000,
          iron: 1500000,
        },
        time: [2, 12, 46, 0],
        effects: [
          "470000 Rally Capacity",
          "54500 Troop Deployment Capacity",
          "134414 Power"
        ]
      },
      27: {
        requirements: {
          embassy: 27
        },
        costs: {
          bread: 44000000,
          wood: 44000000,
          stone: 8900000,
          iron: 2200000,
        },
        time: [3, 0, 55, 0],
        effects: [
          "550000 Rally Capacity",
          "57000 Troop Deployment Capacity",
          "152124 Power"
        ]
      },
      28: {
        requirements: {
          embassy: 28
        },
        costs: {
          bread: 59000000,
          wood: 59000000,
          stone: 11000000,
          iron: 2900000,
        },
        time: [3, 11, 51, 0],
        effects: [
          "630000 Rally Capacity",
          "60500 Troop Deployment Capacity",
          "169834 Power"
        ]
      },
      29: {
        requirements: {
          embassy: 29
        },
        costs: {
          bread: 73000000,
          wood: 73000000,
          stone: 14000000,
          iron: 3600000,
        },
        time: [4, 0, 26, 0],
        effects: [
          "725000 Rally Capacity",
          "64000 Troop Deployment Capacity",
          "187544 Power"
        ]
      },
      30: {
        requirements: {
          embassy: 30
        },
        costs: {
          bread: 90000000,
          wood: 90000000,
          stone: 18000000,
          iron: 4500000,
        },
        time: [4, 19, 44, 0],
        effects: [
          "840000 Rally Capacity",
          "67000 Troop Deployment Capacity",
          "213290 Power"
        ]
      },
      31: {
        requirements: {
          embassy: 31
        },
        costs: {
          bread: 20000000,
          wood: 20000000,
          stone: 4000000,
          iron: 1000000,
          tgold: 26,
        },
        time: [0, 20, 9, 30],
        effects: [
          "845000 Rally Capacity",
          "67700 Troop Deployment Capacity"
        ]
      },
      32: {
        requirements: {
          embassy: 32
        },
        costs: {
          bread: 20000000,
          wood: 20000000,
          stone: 4000000,
          iron: 1000000,
          tgold: 26,
        },
        time: [0, 20, 9, 30],
        effects: [
          "850000 Rally Capacity",
          "68400 Troop Deployment Capacity"
        ]
      },
      33: {
        requirements: {
          embassy: 33
        },
        costs: {
          bread: 20000000,
          wood: 20000000,
          stone: 4000000,
          iron: 1000000,
          tgold: 26,
        },
        time: [0, 20, 9, 30],
        effects: [
          "855000 Rally Capacity",
          "69100 Troop Deployment Capacity"
        ]
      },
      34: {
        requirements: {
          embassy: 34
        },
        costs: {
          bread: 20000000,
          wood: 20000000,
          stone: 4000000,
          iron: 1000000,
          tgold: 26,
        },
        time: [0, 20, 9, 30],
        effects: [
          "860000 Rally Capacity",
          "69800 Troop Deployment Capacity"
        ]
      },
      35: {
        requirements: {
          embassy: 35
        },
        costs: {
          bread: 20000000,
          wood: 20000000,
          stone: 4000000,
          iron: 1000000,
          tgold: 26,
        },
        time: [0, 20, 9, 30],
        effects: [
          "865000 Rally Capacity",
          "70500 Troop Deployment Capacity"
        ]
      },
      36: {
        requirements: {
          embassy: 32
        },
        costs: {
          bread: 21000000,
          wood: 21000000,
          stone: 4300000,
          iron: 1000000,
          tgold: 31,
        },
        time: [1, 1, 55, 0],
        effects: [
          "870000 Rally Capacity",
          "71200 Troop Deployment Capacity"
        ]
      },
      37: {
        requirements: {
          embassy: 33
        },
        costs: {
          bread: 21000000,
          wood: 21000000,
          stone: 4300000,
          iron: 1000000,
          tgold: 31,
        },
        time: [1, 1, 55, 0],
        effects: [
          "875000 Rally Capacity",
          "71900 Troop Deployment Capacity"
        ]
      },
      38: {
        requirements: {
          embassy: 34
        },
        costs: {
          bread: 21000000,
          wood: 21000000,
          stone: 4300000,
          iron: 1000000,
          tgold: 31,
        },
        time: [1, 1, 55, 0],
        effects: [
          "880000 Rally Capacity",
          "72600 Troop Deployment Capacity"
        ]
      },
      39: {
        requirements: {
          embassy: 35
        },
        costs: {
          bread: 21000000,
          wood: 21000000,
          stone: 4300000,
          iron: 1000000,
          tgold: 31,
        },
        time: [1, 1, 55, 0],
        effects: [
          "885000 Rally Capacity",
          "73300 Troop Deployment Capacity"
        ]
      },
      40: {
        requirements: {
          embassy: 36
        },
        costs: {
          bread: 21000000,
          wood: 21000000,
          stone: 4300000,
          iron: 1000000,
          tgold: 31,
        },
        time: [1, 1, 55, 0],
        effects: [
          "890000 Rally Capacity",
          "74000 Troop Deployment Capacity"
        ]
      },
      41: {
        requirements: {
          embassy: 33
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 47,
        },
        time: [1, 7, 40, 0],
        effects: [
          "895000 Rally Capacity",
          "74700 Troop Deployment Capacity"
        ]
      },
      42: {
        requirements: {
          embassy: 34
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 47,
        },
        time: [1, 7, 40, 0],
        effects: [
          "900000 Rally Capacity",
          "75400 Troop Deployment Capacity"
        ]
      },
      43: {
        requirements: {
          embassy: 35
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 47,
        },
        time: [1, 7, 40, 0],
        effects: [
          "905000 Rally Capacity",
          "76100 Troop Deployment Capacity"
        ]
      },
      44: {
        requirements: {
          embassy: 36
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 47,
        },
        time: [1, 7, 40, 0],
        effects: [
          "910000 Rally Capacity",
          "76800 Troop Deployment Capacity"
        ]
      },
      45: {
        requirements: {
          embassy: 37
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4700000,
          iron: 1100000,
          tgold: 47,
        },
        time: [1, 7, 40, 0],
        effects: [
          "915000 Rally Capacity",
          "77500 Troop Deployment Capacity"
        ]
      }
    }
  },

  infirmary: {
    name: "Infirmary",
    icon: "infirmary.png",
    levels: {
      0: {
        requirements: {
          town_center: 0
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 0],
        effects: ["Unlocks Infirmary"]
      },
      1: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 2],
        effects: [
          "200 Infirmary Capacity",
          "300 Power"
        ]
      },
      2: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 100,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 9],
        effects: [
          "300 Infirmary Capacity",
          "570 Power"
        ]
      },
      3: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 460,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 40],
        effects: [
          "400 Infirmary Capacity",
          "975 Power"
        ]
      },
      4: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 1000,
          stone: 205,
          iron: 0,
        },
        time: [0, 0, 2, 5],
        effects: [
          "500 Infirmary Capacity",
          "1515 Power"
        ]
      },
      5: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 4300,
          stone: 865,
          iron: 0,
        },
        time: [0, 0, 4, 10],
        effects: [
          "600 Infirmary Capacity",
          "2325 Power"
        ]
      },
      6: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 10000,
          stone: 2100,
          iron: 545,
        },
        time: [0, 0, 8, 20],
        effects: [
          "700 Infirmary Capacity",
          "3540 Power"
        ]
      },
      7: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 39000,
          stone: 7800,
          iron: 1900,
        },
        time: [0, 0, 16, 30],
        effects: [
          "900 Infirmary Capacity",
          "5295 Power"
        ]
      },
      8: {
        requirements: {
          town_center: 8
        },
        costs: {
          bread: 0,
          wood: 72000,
          stone: 14000,
          iron: 3600,
        },
        time: [0, 0, 25, 0],
        effects: [
          "1100 Infirmary Capacity",
          "7050 Power"
        ]
      },
      9: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 140000,
          stone: 29000,
          iron: 7400,
        },
        time: [0, 0, 37, 30],
        effects: [
          "1300 Infirmary Capacity",
          "8805 Power"
        ]
      },
      10: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 260000,
          stone: 52000,
          iron: 13000,
        },
        time: [0, 0, 50, 0],
        effects: [
          "1600 Infirmary Capacity",
          "11355 Power"
        ]
      },
      11: {
        requirements: {
          town_center: 11
        },
        costs: {
          bread: 320000,
          wood: 320000,
          stone: 65000,
          iron: 16000,
        },
        time: [0, 1, 3, 0],
        effects: [
          "1900 Infirmary Capacity",
          "13905 Power"
        ]
      },
      12: {
        requirements: {
          town_center: 12
        },
        costs: {
          bread: 420000,
          wood: 420000,
          stone: 84000,
          iron: 21000,
        },
        time: [0, 1, 15, 30],
        effects: [
          "2400 Infirmary Capacity",
          "16455 Power"
        ]
      },
      13: {
        requirements: {
          town_center: 13
        },
        costs: {
          bread: 590000,
          wood: 590000,
          stone: 110000,
          iron: 29000,
        },
        time: [0, 1, 32, 0],
        effects: [
          "2900 Infirmary Capacity",
          "20760 Power"
        ]
      },
      14: {
        requirements: {
          town_center: 14
        },
        costs: {
          bread: 780000,
          wood: 780000,
          stone: 150000,
          iron: 39000,
        },
        time: [0, 1, 57, 30],
        effects: [
          "3500 Infirmary Capacity",
          "25065 Power"
        ]
      },
      15: {
        requirements: {
          town_center: 15
        },
        costs: {
          bread: 1100000,
          wood: 1100000,
          stone: 230000,
          iron: 58000,
        },
        time: [0, 2, 31, 0],
        effects: [
          "4200 Infirmary Capacity",
          "29370 Power"
        ]
      },
      16: {
        requirements: {
          town_center: 16
        },
        costs: {
          bread: 1400000,
          wood: 1400000,
          stone: 290000,
          iron: 74000,
        },
        time: [0, 4, 16, 0],
        effects: [
          "5000 Infirmary Capacity",
          "35430 Power"
        ]
      },
      17: {
        requirements: {
          town_center: 17
        },
        costs: {
          bread: 2300000,
          wood: 2300000,
          stone: 460000,
          iron: 100000,
        },
        time: [0, 5, 7, 0],
        effects: [
          "6000 Infirmary Capacity",
          "41490 Power"
        ]
      },
      18: {
        requirements: {
          town_center: 18
        },
        costs: {
          bread: 3100000,
          wood: 3100000,
          stone: 620000,
          iron: 150000,
        },
        time: [0, 6, 8, 30],
        effects: [
          "7300 Infirmary Capacity",
          "47550 Power"
        ]
      },
      19: {
        requirements: {
          town_center: 19
        },
        costs: {
          bread: 3900000,
          wood: 3900000,
          stone: 780000,
          iron: 190000,
        },
        time: [0, 9, 13, 0],
        effects: [
          "8800 Infirmary Capacity",
          "56160 Power"
        ]
      },
      20: {
        requirements: {
          town_center: 20
        },
        costs: {
          bread: 5300000,
          wood: 5300000,
          stone: 1000000,
          iron: 260000,
        },
        time: [0, 11, 31, 0],
        effects: [
          "10500 Infirmary Capacity",
          "64770 Power"
        ]
      },
      21: {
        requirements: {
          town_center: 21
        },
        costs: {
          bread: 6800000,
          wood: 6800000,
          stone: 1300000,
          iron: 340000,
        },
        time: [0, 14, 58, 30],
        effects: [
          "13000 Infirmary Capacity",
          "73380 Power"
        ]
      },
      22: {
        requirements: {
          town_center: 22
        },
        costs: {
          bread: 9000000,
          wood: 9000000,
          stone: 1800000,
          iron: 450000,
        },
        time: [0, 22, 28, 0],
        effects: [
          "15500 Infirmary Capacity",
          "86295 Power"
        ]
      },
      23: {
        requirements: {
          town_center: 23
        },
        costs: {
          bread: 11000000,
          wood: 11000000,
          stone: 2200000,
          iron: 560000,
        },
        time: [1, 7, 27, 0],
        effects: [
          "18500 Infirmary Capacity",
          "99210 Power"
        ]
      },
      24: {
        requirements: {
          town_center: 24
        },
        costs: {
          bread: 15000000,
          wood: 15000000,
          stone: 3000000,
          iron: 750000,
        },
        time: [1, 20, 2, 0],
        effects: [
          "22000 Infirmary Capacity",
          "112125 Power"
        ]
      },
      25: {
        requirements: {
          town_center: 25
        },
        costs: {
          bread: 20000000,
          wood: 20000000,
          stone: 4000000,
          iron: 1000000,
        },
        time: [2, 13, 39, 0],
        effects: [
          "26500 Infirmary Capacity",
          "125040 Power"
        ]
      },
      26: {
        requirements: {
          town_center: 26
        },
        costs: {
          bread: 26000000,
          wood: 26000000,
          stone: 5200000,
          iron: 1300000,
        },
        time: [2, 22, 54, 0],
        effects: [
          "32000 Infirmary Capacity",
          "144015 Power"
        ]
      },
      27: {
        requirements: {
          town_center: 27
        },
        costs: {
          bread: 37000000,
          wood: 37000000,
          stone: 7400000,
          iron: 1800000,
        },
        time: [3, 13, 4, 0],
        effects: [
          "38500 Infirmary Capacity",
          "162990 Power"
        ]
      },
      28: {
        requirements: {
          town_center: 28
        },
        costs: {
          bread: 49000000,
          wood: 49000000,
          stone: 9900000,
          iron: 2400000,
        },
        time: [4, 1, 50, 0],
        effects: [
          "46200 Infirmary Capacity",
          "181965 Power"
        ]
      },
      29: {
        requirements: {
          town_center: 29
        },
        costs: {
          bread: 61000000,
          wood: 61000000,
          stone: 12000000,
          iron: 3000000,
        },
        time: [4, 16, 31, 0],
        effects: [
          "55500 Infirmary Capacity",
          "200940 Power"
        ]
      },
      30: {
        requirements: {
          town_center: 30
        },
        costs: {
          bread: 75000000,
          wood: 75000000,
          stone: 15000000,
          iron: 3700000,
        },
        time: [5, 15, 1, 0],
        effects: [
          "66500 Infirmary Capacity",
          "228525 Power"
        ]
      },
      31: {
        requirements: {
          embassy: 31
        },
        costs: {
          bread: 16000000,
          wood: 16000000,
          stone: 3300000,
          iron: 840000,
          tgold: 26,
        },
        time: [0, 23, 31, 0],
        effects: [
          "67600 Infirmary Capacity"
        ]
      },
      32: {
        requirements: {
          embassy: 31
        },
        costs: {
          bread: 16000000,
          wood: 16000000,
          stone: 3300000,
          iron: 840000,
          tgold: 26,
        },
        time: [0, 23, 31, 0],
        effects: [
          "68700 Infirmary Capacity"
        ]
      },
      33: {
        requirements: {
          embassy: 31
        },
        costs: {
          bread: 16000000,
          wood: 16000000,
          stone: 3300000,
          iron: 840000,
          tgold: 26,
        },
        time: [0, 23, 31, 0],
        effects: [
          "69800 Infirmary Capacity"
        ]
      },
      34: {
        requirements: {
          embassy: 31
        },
        costs: {
          bread: 16000000,
          wood: 16000000,
          stone: 3300000,
          iron: 840000,
          tgold: 26,
        },
        time: [0, 23, 31, 0],
        effects: [
          "70900 Infirmary Capacity"
        ]
      },
      35: {
        requirements: {
          embassy: 31
        },
        costs: {
          bread: 16000000,
          wood: 16000000,
          stone: 3300000,
          iron: 840000,
          tgold: 26,
        },
        time: [0, 23, 31, 0],
        effects: [
          "72000 Infirmary Capacity"
        ]
      },
      36: {
        requirements: {
          embassy: 32
        },
        costs: {
          bread: 18000000,
          wood: 18000000,
          stone: 3600000,
          iron: 900000,
          tgold: 31,
        },
        time: [1, 6, 14, 0],
        effects: [
          "73100 Infirmary Capacity"
        ]
      },
      37: {
        requirements: {
          embassy: 32
        },
        costs: {
          bread: 18000000,
          wood: 18000000,
          stone: 3600000,
          iron: 900000,
          tgold: 31,
        },
        time: [1, 6, 14, 0],
        effects: [
          "74200 Infirmary Capacity"
        ]
      },
      38: {
        requirements: {
          embassy: 32
        },
        costs: {
          bread: 18000000,
          wood: 18000000,
          stone: 3600000,
          iron: 900000,
          tgold: 31,
        },
        time: [1, 6, 14, 0],
        effects: [
          "75300 Infirmary Capacity"
        ]
      },
      39: {
        requirements: {
          embassy: 32
        },
        costs: {
          bread: 18000000,
          wood: 18000000,
          stone: 3600000,
          iron: 900000,
          tgold: 31,
        },
        time: [1, 6, 14, 0],
        effects: [
          "76400 Infirmary Capacity"
        ]
      },
      40: {
        requirements: {
          embassy: 32
        },
        costs: {
          bread: 18000000,
          wood: 18000000,
          stone: 3600000,
          iron: 900000,
          tgold: 31,
        },
        time: [1, 6, 14, 0],
        effects: [
          "77500 Infirmary Capacity"
        ]
      },
      41: {
        requirements: {
          embassy: 33
        },
        costs: {
          bread: 19000000,
          wood: 19000000,
          stone: 3900000,
          iron: 990000,
          tgold: 47,
        },
        time: [1, 12, 57, 0],
        effects: [
          "78600 Infirmary Capacity"
        ]
      },
      42: {
        requirements: {
          embassy: 33
        },
        costs: {
          bread: 19000000,
          wood: 19000000,
          stone: 3900000,
          iron: 990000,
          tgold: 47,
        },
        time: [1, 12, 57, 0],
        effects: [
          "79700 Infirmary Capacity"
        ]
      },
      43: {
        requirements: {
          embassy: 33
        },
        costs: {
          bread: 19000000,
          wood: 19000000,
          stone: 3900000,
          iron: 990000,
          tgold: 47,
        },
        time: [1, 12, 57, 0],
        effects: [
          "80800 Infirmary Capacity"
        ]
      },
      44: {
        requirements: {
          embassy: 33
        },
        costs: {
          bread: 19000000,
          wood: 19000000,
          stone: 3900000,
          iron: 990000,
          tgold: 47,
        },
        time: [1, 12, 57, 0],
        effects: [
          "81900 Infirmary Capacity"
        ]
      },
      45: {
        requirements: {
          embassy: 33
        },
        costs: {
          bread: 19000000,
          wood: 19000000,
          stone: 3900000,
          iron: 990000,
          tgold: 47,
        },
        time: [1, 12, 57, 0],
        effects: [
          "83000 Infirmary Capacity"
        ]
      }
    }
  },

  academy: {
    name: "Academy",
    icon: "academy.png",
    levels: {
      0: {
        requirements: {
          town_center: 0
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 0],
        effects: ["Unlocks Academy"]
      },
      1: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 105,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 2],
        effects: [
          "0.1% Research Speed",
          "440 Power"
        ]
      },
      2: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 160,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 9],
        effects: [
          "0.2% Research Speed",
          "836 Power"
        ]
      },
      3: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 725,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 45],
        effects: [
          "0.3% Research Speed",
          "1430 Power"
        ]
      },
      4: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 1600,
          stone: 320,
          iron: 0,
        },
        time: [0, 0, 2, 15],
        effects: [
          "0.4% Research Speed",
          "2222 Power"
        ]
      },
      5: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 6800,
          stone: 1300,
          iron: 0,
        },
        time: [0, 0, 4, 30],
        effects: [
          "0.5% Research Speed",
          "3410 Power"
        ]
      },
      6: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 17000,
          stone: 3400,
          iron: 860,
        },
        time: [0, 0, 9, 0],
        effects: [
          "0.6% Research Speed",
          "5192 Power"
        ]
      },
      7: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 62000,
          stone: 12000,
          iron: 3100,
        },
        time: [0, 0, 18, 0],
        effects: [
          "0.7% Research Speed",
          "7766 Power"
        ]
      },
      8: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 110000,
          stone: 22000,
          iron: 5600,
        },
        time: [0, 0, 27, 0],
        effects: [
          "0.8% Research Speed",
          "10340 Power"
        ]
      },
      9: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 230000,
          stone: 47000,
          iron: 11000,
        },
        time: [0, 0, 40, 30],
        effects: [
          "0.9% Research Speed",
          "12914 Power"
        ]
      },
      10: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 410000,
          stone: 82000,
          iron: 20000,
        },
        time: [0, , 54, 0],
        effects: [
          "1.0% Research Speed",
          "16654 Power"
        ]
      },
      11: {
        requirements: {
          town_center: 11
        },
        costs: {
          bread: 520000,
          wood: 520000,
          stone: 100000,
          iron: 26000,
        },
        time: [0, 1, 7, 30],
        effects: [
          "1.1% Research Speed",
          "20394 Power"
        ]
      },
      12: {
        requirements: {
          town_center: 12
        },
        costs: {
          bread: 670000,
          wood: 670000,
          stone: 130000,
          iron: 33000,
        },
        time: [0, 1, 21, 0],
        effects: [
          "1.2% Research Speed",
          "24134 Power"
        ]
      },
      13: {
        requirements: {
          town_center: 13
        },
        costs: {
          bread: 950000,
          wood: 950000,
          stone: 190000,
          iron: 47000,
        },
        time: [0, 1, 39, 0],
        effects: [
          "1.3% Research Speed",
          "30448 Power"
        ]
      },
      14: {
        requirements: {
          town_center: 14
        },
        costs: {
          bread: 1200000,
          wood: 1200000,
          stone: 250000,
          iron: 63000,
        },
        time: [0, 2, 6, 0],
        effects: [
          "1.4% Research Speed",
          "36762 Power"
        ]
      },
      15: {
        requirements: {
          town_center: 15
        },
        costs: {
          bread: 1800000,
          wood: 1800000,
          stone: 370000,
          iron: 93000,
        },
        time: [0, 2, 42, 0],
        effects: [
          "1.5% Research Speed",
          "43076 Power"
        ]
      },
      16: {
        requirements: {
          town_center: 16
        },
        costs: {
          bread: 2300000,
          wood: 2300000,
          stone: 470000,
          iron: 110000,
        },
        time: [0, 4, 34, 0],
        effects: [
          "1.6% Research Speed",
          "51964 Power"
        ]
      },
      17: {
        requirements: {
          town_center: 17
        },
        costs: {
          bread: 3700000,
          wood: 3700000,
          stone: 740000,
          iron: 180000,
        },
        time: [0, 5, 29, 0],
        effects: [
          "1.7% Research Speed",
          "60852 Power"
        ]
      },
      18: {
        requirements: {
          town_center: 18
        },
        costs: {
          bread: 5000000,
          wood: 5000000,
          stone: 1000000,
          iron: 250000,
        },
        time: [0, 6, 35, 0],
        effects: [
          "1.8% Research Speed",
          "69740 Power"
        ]
      },
      19: {
        requirements: {
          town_center: 19
        },
        costs: {
          bread: 6200000,
          wood: 6200000,
          stone: 1200000,
          iron: 310000,
        },
        time: [0, 9, 52, 0],
        effects: [
          "1.9% Research Speed",
          "82368 Power"
        ]
      },
      20: {
        requirements: {
          town_center: 20
        },
        costs: {
          bread: 8600000,
          wood: 8600000,
          stone: 1700000,
          iron: 430000,
        },
        time: [0, 12, 20, 30],
        effects: [
          "2.0% Research Speed",
          "94996 Power"
        ]
      },
      21: {
        requirements: {
          town_center: 21
        },
        costs: {
          bread: 10000000,
          wood: 10000000,
          stone: 2100000,
          iron: 540000,
        },
        time: [0, 16, 2, 30],
        effects: [
          "2.1% Research Speed",
          "107624 Power"
        ]
      },
      22: {
        requirements: {
          town_center: 22
        },
        costs: {
          bread: 14000000,
          wood: 14000000,
          stone: 2800000,
          iron: 720000,
        },
        time: [1, 0, 4, 0],
        effects: [
          "2.2% Research Speed",
          "126566 Power"
        ]
      },
      23: {
        requirements: {
          town_center: 23
        },
        costs: {
          bread: 17000000,
          wood: 17000000,
          stone: 3500000,
          iron: 890000,
        },
        time: [1, 9, 42, 0],
        effects: [
          "2.3% Research Speed",
          "145508 Power"
        ]
      },
      24: {
        requirements: {
          town_center: 24
        },
        costs: {
          bread: 24000000,
          wood: 24000000,
          stone: 4800000,
          iron: 1200000,
        },
        time: [1, 23, 11, 0],
        effects: [
          "2.4% Research Speed",
          "164450 Power"
        ]
      },
      25: {
        requirements: {
          town_center: 25
        },
        costs: {
          bread: 32000000,
          wood: 32000000,
          stone: 6500000,
          iron: 1600000,
        },
        time: [2, 18, 3, 0],
        effects: [
          "2.5% Research Speed",
          "183392 Power"
        ]
      },
      26: {
        requirements: {
          town_center: 26
        },
        costs: {
          bread: 42000000,
          wood: 42000000,
          stone: 8400000,
          iron: 2100000,
        },
        time: [3, 3, 57, 0],
        effects: [
          "2.6% Research Speed",
          "211222 Power"
        ]
      },
      27: {
        requirements: {
          town_center: 27
        },
        costs: {
          bread: 59000000,
          wood: 59000000,
          stone: 11000000,
          iron: 2900000,
        },
        time: [3, 19, 9, 0],
        effects: [
          "2.7% Research Speed",
          "239052 Power"
        ]
      },
      28: {
        requirements: {
          town_center: 28
        },
        costs: {
          bread: 79000000,
          wood: 79000000,
          stone: 15000000,
          iron: 3900000,
        },
        time: [4, 8, 49, 0],
        effects: [
          "2.8% Research Speed",
          "266882 Power"
        ]
      },
      29: {
        requirements: {
          town_center: 29
        },
        costs: {
          bread: 98000000,
          wood: 98000000,
          stone: 19000000,
          iron: 4900000,
        },
        time: [5, 0, 33, 0],
        effects: [
          "2.9% Research Speed",
          "294712 Power"
        ]
      },
      30: {
        requirements: {
          town_center: 30
        },
        costs: {
          bread: 120000000,
          wood: 120000000,
          stone: 24000000,
          iron: 6000000,
        },
        time: [6, 0, 40, 0],
        effects: [
          "3.0% Research Speed",
          "335170 Power"
        ]
      }
    }
  },

  storehouse: {
    name: "Storehouse",
    icon: "storehouse.png",
    levels: {
      0: {
        requirements: {
          town_center: 0
        },
        costs: {
          bread: 0,
          wood: 0,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 0],
        effects: ["Unlocks Storehouse"]
      },
      1: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 60,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 2],
        effects: [
          "5000 Bread & Wood Protection",
          "1000 Stone Protection",
          "250 Iron Protection",
          "440 Power"
        ]
      },
      2: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 90,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 9],
        effects: [
          "10000 Bread & Wood Protection",
          "2000 Stone Protection",
          "500 Iron Protection",
          "836 Power"
        ]
      },
      3: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 400,
          stone: 0,
          iron: 0,
        },
        time: [0, 0, 0, 45],
        effects: [
          "15000 Bread & Wood Protection",
          "3000 Stone Protection",
          "750 Iron Protection",
          "1430 Power"
        ]
      },
      4: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 900,
          stone: 180,
          iron: 0,
        },
        time: [0, 0, 2, 15],
        effects: [
          "20000 Bread & Wood Protection",
          "4000 Stone Protection",
          "1000 Iron Protection",
          "2222 Power"
        ]
      },
      5: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 3800,
          stone: 760,
          iron: 0,
        },
        time: [0, 0, 4, 30],
        effects: [
          "25000 Bread & Wood Protection",
          "5000 Stone Protection",
          "1250 Iron Protection",
          "3410 Power"
        ]
      },
      6: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 9600,
          stone: 1900,
          iron: 480,
        },
        time: [0, 0, 9, 0],
        effects: [
          "30000 Bread & Wood Protection",
          "6000 Stone Protection",
          "1500 Iron Protection",
          "5192 Power"
        ]
      },
      7: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 34000,
          stone: 6900,
          iron: 1700,
        },
        time: [0, 0, 18, 0],
        effects: [
          "45000 Bread & Wood Protection",
          "9000 Stone Protection",
          "2250 Iron Protection",
          "7766 Power"
        ]
      },
      8: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 63000,
          stone: 12000,
          iron: 3100,
        },
        time: [0, 0, 27, 0],
        effects: [
          "65000 Bread & Wood Protection",
          "13000 Stone Protection",
          "3250 Iron Protection",
          "10340 Power"
        ]
      },
      9: {
        requirements: {
          town_center: 9
        },
        costs: {
          bread: 0,
          wood: 130000,
          stone: 26000,
          iron: 6500,
        },
        time: [0, 0, 40, 30],
        effects: [
          "120000 Bread & Wood Protection",
          "24000 Stone Protection",
          "6000 Iron Protection",
          "12914 Power"
        ]
      },
      10: {
        requirements: {
          town_center: 10
        },
        costs: {
          bread: 0,
          wood: 230000,
          stone: 46000,
          iron: 11000,
        },
        time: [0, 0, 54, 0],
        effects: [
          "200000 Bread & Wood Protection",
          "40000 Stone Protection",
          "10000 Iron Protection",
          "16654 Power"
        ]
      },
      11: {
        requirements: {
          town_center: 11
        },
        costs: {
          bread: 290000,
          wood: 290000,
          stone: 57000,
          iron: 14000,
        },
        time: [0, 1, 7, 30],
        effects: [
          "400000 Bread & Wood Protection",
          "80000 Stone Protection",
          "20000 Iron Protection",
          "20394 Power"
        ]
      },
      12: {
        requirements: {
          town_center: 12
        },
        costs: {
          bread: 370000,
          wood: 370000,
          stone: 74000,
          iron: 18000,
        },
        time: [0, 1, 21, 0],
        effects: [
          "800000 Bread & Wood Protection",
          "160000 Stone Protection",
          "40000 Iron Protection",
          "24134 Power"
        ]
      },
      13: {
        requirements: {
          town_center: 13
        },
        costs: {
          bread: 520000,
          wood: 520000,
          stone: 100000,
          iron: 26000,
        },
        time: [0, 1, 39, 0],
        effects: [
          "1200000 Bread & Wood Protection",
          "240000 Stone Protection",
          "60000 Iron Protection",
          "30448 Power"
        ]
      },
      14: {
        requirements: {
          town_center: 14
        },
        costs: {
          bread: 690000,
          wood: 690000,
          stone: 130000,
          iron: 34000,
        },
        time: [0, 2, 6, 0],
        effects: [
          "1900000 Bread & Wood Protection",
          "380000 Stone Protection",
          "95000 Iron Protection",
          "36762 Power"
        ]
      },
      15: {
        requirements: {
          town_center: 15
        },
        costs: {
          bread: 1000000,
          wood: 1000000,
          stone: 200000,
          iron: 51000,
        },
        time: [0, 2, 42, 0],
        effects: [
          "3200000 Bread & Wood Protection",
          "640000 Stone Protection",
          "160000 Iron Protection",
          "43076 Power"
        ]
      },
      16: {
        requirements: {
          town_center: 16
        },
        costs: {
          bread: 1300000,
          wood: 1300000,
          stone: 260000,
          iron: 65000,
        },
        time: [0, 4, 34, 0],
        effects: [
          "4600000 Bread & Wood Protection",
          "920000 Stone Protection",
          "230000 Iron Protection",
          "51964 Power"
        ]
      },
      17: {
        requirements: {
          town_center: 17
        },
        costs: {
          bread: 2000000,
          wood: 2000000,
          stone: 400000,
          iron: 100000,
        },
        time: [0, 5, 29, 0],
        effects: [
          "6000000 Bread & Wood Protection",
          "1200000 Stone Protection",
          "300000 Iron Protection",
          "60852 Power"
        ]
      },
      18: {
        requirements: {
          town_center: 18
        },
        costs: {
          bread: 2700000,
          wood: 2700000,
          stone: 550000,
          iron: 130000,
        },
        time: [0, 6, 35, 0],
        effects: [
          "7500000 Bread & Wood Protection",
          "1500000 Stone Protection",
          "375000 Iron Protection",
          "69740 Power"
        ]
      },
      19: {
        requirements: {
          town_center: 19
        },
        costs: {
          bread: 3400000,
          wood: 3400000,
          stone: 690000,
          iron: 170000,
        },
        time: [0, 9, 52, 30],
        effects: [
          "8600000 Bread & Wood Protection",
          "1720000 Stone Protection",
          "430000 Iron Protection",
          "82368 Power"
        ]
      },
      20: {
        requirements: {
          town_center: 20
        },
        costs: {
          bread: 4700000,
          wood: 4700000,
          stone: 940000,
          iron: 230000,
        },
        time: [0, 12, 20, 30],
        effects: [
          "10000000 Bread & Wood Protection",
          "2000000 Stone Protection",
          "500000 Iron Protection",
          "94996 Power"
        ]
      },
      21: {
        requirements: {
          town_center: 21
        },
        costs: {
          bread: 6000000,
          wood: 6000000,
          stone: 1200000,
          iron: 300000,
        },
        time: [0, 16, 2, 30],
        effects: [
          "12500000 Bread & Wood Protection",
          "2500000 Stone Protection",
          "625000 Iron Protection",
          "107624 Power"
        ]
      },
      22: {
        requirements: {
          town_center: 22
        },
        costs: {
          bread: 7900000,
          wood: 7900000,
          stone: 1500000,
          iron: 390000,
        },
        time: [1, 0, 4, 0],
        effects: [
          "15000000 Bread & Wood Protection",
          "3000000 Stone Protection",
          "750000 Iron Protection",
          "126566 Power"
        ]
      },
      23: {
        requirements: {
          town_center: 23
        },
        costs: {
          bread: 9800000,
          wood: 9800000,
          stone: 1900000,
          iron: 490000,
        },
        time: [1, 9, 42, 0],
        effects: [
          "20000000 Bread & Wood Protection",
          "4000000 Stone Protection",
          "1000000 Iron Protection",
          "145508 Power"
        ]
      },
      24: {
        requirements: {
          town_center: 24
        },
        costs: {
          bread: 13000000,
          wood: 13000000,
          stone: 2600000,
          iron: 660000,
        },
        time: [1, 23, 11, 0],
        effects: [
          "25000000 Bread & Wood Protection",
          "5000000 Stone Protection",
          "1250000 Iron Protection",
          "164450 Power"
        ]
      },
      25: {
        requirements: {
          town_center: 25
        },
        costs: {
          bread: 17000000,
          wood: 17000000,
          stone: 3500000,
          iron: 890000,
        },
        time: [2, 18, 3, 0],
        effects: [
          "35000000 Bread & Wood Protection",
          "7000000 Stone Protection",
          "1750000 Iron Protection",
          "183392 Power"
        ]
      },
      26: {
        requirements: {
          town_center: 26
        },
        costs: {
          bread: 23000000,
          wood: 23000000,
          stone: 4600000,
          iron: 1100000,
        },
        time: [3, 3, 57, 0],
        effects: [
          "45000000 Bread & Wood Protection",
          "9000000 Stone Protection",
          "2250000 Iron Protection",
          "211222 Power"
        ]
      },
      27: {
        requirements: {
          town_center: 27
        },
        costs: {
          bread: 32000000,
          wood: 32000000,
          stone: 6500000,
          iron: 1600000,
        },
        time: [3, 19, 9, 0],
        effects: [
          "60000000 Bread & Wood Protection",
          "12000000 Stone Protection",
          "3000000 Iron Protection",
          "239052 Power"
        ]
      },
      28: {
        requirements: {
          town_center: 28
        },
        costs: {
          bread: 43000000,
          wood: 43000000,
          stone: 8700000,
          iron: 2100000,
        },
        time: [4, 8, 49, 0],
        effects: [
          "75000000 Bread & Wood Protection",
          "15000000 Stone Protection",
          "3750000 Iron Protection",
          "266882 Power"
        ]
      },
      29: {
        requirements: {
          town_center: 29
        },
        costs: {
          bread: 54000000,
          wood: 54000000,
          stone: 10000000,
          iron: 2700000,
        },
        time: [5, 0, 33, 0],
        effects: [
          "100000000 Bread & Wood Protection",
          "20000000 Stone Protection",
          "5000000 Iron Protection",
          "294712 Power"
        ]
      },
      30: {
        requirements: {
          town_center: 30
        },
        costs: {
          bread: 66000000,
          wood: 66000000,
          stone: 13000000,
          iron: 3300000,
        },
        time: [6, 0, 40, 0],
        effects: [
          "120000000 Bread & Wood Protection",
          "24000000 Stone Protection",
          "6000000 Iron Protection",
          "335170 Power"
        ]
      }
    }
  }
};